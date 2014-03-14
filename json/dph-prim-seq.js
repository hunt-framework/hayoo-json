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
        "word": "dph-prim-seq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIrregular 2D unboxed arrays.\n\u003c/p\u003e\u003cp\u003eThe difference between this type and something like \n   \u003ccode\u003eData.Vector (Data.Vector.Unboxed a)\u003c/code\u003e is that the inner arrays have kind\n   \u003ccode\u003e#\u003c/code\u003e and cannot be bottom. This ensures that we can always lookup an element\n   from an \u003ccode\u003e\u003ca\u003eArrayArray#\u003c/a\u003e\u003c/code\u003e without performing unboxings or checking for thunks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "ArrayArray",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html",
          "type": "module"
        },
        "index": {
          "description": "Irregular unboxed arrays The difference between this type and something like Data.Vector Data.Vector.Unboxed is that the inner arrays have kind and cannot be bottom This ensures that we can always lookup an element from an ArrayArray without performing unboxings or checking for thunks",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "ArrayArray",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "ArrayArray",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#ArrayArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "ArrayArray",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#t:ArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "MutableArrayArray",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#MutableArrayArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "MutableArrayArray",
          "package": "dph-prim-seq",
          "partial": "Mutable Array Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#t:MutableArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "ArrayArray",
          "package": "dph-prim-seq",
          "signature": "ArrayArray ArrayArray#",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#ArrayArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "ArrayArray",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:ArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "MutableArrayArray",
          "package": "dph-prim-seq",
          "signature": "MutableArrayArray (MutableArrayArray# s)",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#MutableArrayArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "MutableArrayArray",
          "package": "dph-prim-seq",
          "partial": "Mutable Array Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:MutableArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy an ArrayArray\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "copyArrayArray",
          "package": "dph-prim-seq",
          "signature": "MutableArrayArray s ByteArray -\u003e Int -\u003e ArrayArray ByteArray -\u003e Int -\u003e Int -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#copyArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Copy an ArrayArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "copyArrayArray",
          "normalized": "MutableArrayArray a ByteArray-\u003eInt-\u003eArrayArray ByteArray-\u003eInt-\u003eInt-\u003eST a()",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "signature": "MutableArrayArray s ByteArray-\u003eInt-\u003eArrayArray ByteArray-\u003eInt-\u003eInt-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:copyArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex an \u003ccode\u003e\u003ca\u003eArrayArray\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eByteArray\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "indexArrayArray",
          "package": "dph-prim-seq",
          "signature": "ArrayArray ByteArray -\u003e Int -\u003e ByteArray",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#indexArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Index an ArrayArray of ByteArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "indexArrayArray",
          "normalized": "ArrayArray ByteArray-\u003eInt-\u003eByteArray",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "signature": "ArrayArray ByteArray-\u003eInt-\u003eByteArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:indexArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eArrayArray\u003c/a\u003e\u003c/code\u003e with the given number of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "newArrayArray",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e ST s (MutableArrayArray s e)",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#newArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Create an ArrayArray with the given number of elements",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "newArrayArray",
          "normalized": "Int-\u003eST a(MutableArrayArray a b)",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "signature": "Int-\u003eST s(MutableArrayArray s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:newArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eMutableByteArray\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMutableArrayArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "readArrayArray",
          "package": "dph-prim-seq",
          "signature": "MutableArrayArray s (MutableByteArray s) -\u003e Int -\u003e ST s (MutableByteArray s)",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#readArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Read MutableByteArray from MutableArrayArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "readArrayArray",
          "normalized": "MutableArrayArray a(MutableByteArray a)-\u003eInt-\u003eST a(MutableByteArray a)",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "signature": "MutableArrayArray s(MutableByteArray s)-\u003eInt-\u003eST s(MutableByteArray s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:readArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a nested \u003ccode\u003e\u003ca\u003eMutableArrayArray\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eArrayArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "unsafeDeepFreezeArrayArray",
          "package": "dph-prim-seq",
          "signature": "forall s.  MutableArrayArray s (MutableByteArray s) -\u003e ST s (ArrayArray ByteArray)",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#unsafeDeepFreezeArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Freeze nested MutableArrayArray into an ArrayArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "unsafeDeepFreezeArrayArray",
          "normalized": "a b MutableArrayArray c(MutableByteArray c)-\u003eST c(ArrayArray ByteArray)",
          "package": "dph-prim-seq",
          "partial": "Deep Freeze Array Array",
          "signature": "forall s. MutableArrayArray s(MutableByteArray s)-\u003eST s(ArrayArray ByteArray)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:unsafeDeepFreezeArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a \u003ccode\u003e\u003ca\u003eMutableArrayArray\u003c/a\u003e\u003c/code\u003e into a plain \u003ccode\u003e\u003ca\u003eArrayArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "unsafeFreezeArrayArray",
          "package": "dph-prim-seq",
          "signature": "MutableArrayArray s e -\u003e ST s (ArrayArray e)",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#unsafeFreezeArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Freeze MutableArrayArray into plain ArrayArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "unsafeFreezeArrayArray",
          "normalized": "MutableArrayArray a b-\u003eST a(ArrayArray b)",
          "package": "dph-prim-seq",
          "partial": "Freeze Array Array",
          "signature": "MutableArrayArray s e-\u003eST s(ArrayArray e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:unsafeFreezeArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteArray\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eMutableArrayArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "writeArrayArray",
          "package": "dph-prim-seq",
          "signature": "MutableArrayArray s ByteArray -\u003e Int -\u003e ByteArray -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#writeArrayArray",
          "type": "function"
        },
        "index": {
          "description": "Write ByteArray to MutableArrayArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "writeArrayArray",
          "normalized": "MutableArrayArray a ByteArray-\u003eInt-\u003eByteArray-\u003eST a()",
          "package": "dph-prim-seq",
          "partial": "Array Array",
          "signature": "MutableArrayArray s ByteArray-\u003eInt-\u003eByteArray-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:writeArrayArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eMutableByteArray\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eMutableArrayArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "writeArrayArrayMut",
          "package": "dph-prim-seq",
          "signature": "MutableArrayArray s (MutableByteArray s) -\u003e Int -\u003e MutableByteArray s -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-ArrayArray.html#writeArrayArrayMut",
          "type": "function"
        },
        "index": {
          "description": "Write MutableByteArray to an MutableArrayArray",
          "hierarchy": "Data Array Parallel Unlifted ArrayArray",
          "module": "Data.Array.Parallel.Unlifted.ArrayArray",
          "name": "writeArrayArrayMut",
          "normalized": "MutableArrayArray a(MutableByteArray a)-\u003eInt-\u003eMutableByteArray a-\u003eST a()",
          "package": "dph-prim-seq",
          "partial": "Array Array Mut",
          "signature": "MutableArrayArray s(MutableByteArray s)-\u003eInt-\u003eMutableByteArray s-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-ArrayArray.html#v:writeArrayArrayMut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eScattered Segment Descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "USSegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Scattered Segment Descriptors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "USSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScattered Segment Descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "USSegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#USSegd",
          "type": "data"
        },
        "index": {
          "description": "Scattered Segment Descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "USSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#t:USSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "USSegd",
          "package": "dph-prim-seq",
          "signature": "USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#USSegd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "USSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:USSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Produce a segment descriptor that describes the result of appending\n   two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "appendWith",
          "package": "dph-prim-seq",
          "signature": "USSegd-\u003e Int-\u003e USSegd-\u003e Int-\u003e USSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce segment descriptor that describes the result of appending two arrays",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "appendWith",
          "normalized": "USSegd-\u003eInt-\u003eUSSegd-\u003eInt-\u003eUSSegd",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "USSegd-\u003eInt-\u003eUSSegd-\u003eInt-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:appendWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCull the segments of a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e down to only those reachable from an array\n   of \u003ccode\u003evsegids\u003c/code\u003e, and also update the \u003ccode\u003evsegids\u003c/code\u003e to point to the same segments\n   in the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "cullOnVSegids",
          "package": "dph-prim-seq",
          "signature": "Vector Int -\u003e USSegd -\u003e (Vector Int, USSegd)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#cullOnVSegids",
          "type": "function"
        },
        "index": {
          "description": "Cull the segments of USSegd down to only those reachable from an array of vsegids and also update the vsegids to point to the same segments in the result",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "cullOnVSegids",
          "normalized": "Vector Int-\u003eUSSegd-\u003e(Vector Int,USSegd)",
          "package": "dph-prim-seq",
          "partial": "On VSegids",
          "signature": "Vector Int-\u003eUSSegd-\u003e(Vector Int,USSegd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:cullOnVSegids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "empty",
          "package": "dph-prim-seq",
          "signature": "USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty segment descriptor with no elements or segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "empty",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n   All segments are assumed to come from a flat array with sourceid 0.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "fromUSegd",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#fromUSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain USegd to USSegd All segments are assumed to come from flat array with sourceid",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "fromUSegd",
          "normalized": "USegd-\u003eUSSegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "signature": "USegd-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:fromUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, segment index, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "getSeg",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Int -\u003e (Int, Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#getSeg",
          "type": "function"
        },
        "index": {
          "description": "Get the length segment index starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "getSeg",
          "normalized": "USSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Seg",
          "signature": "USSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:getSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). True when the starts are identical to the usegd indices field and\n   the sources are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "isContiguous",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#isContiguous",
          "type": "function"
        },
        "index": {
          "description": "True when the starts are identical to the usegd indices field and the sources are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "isContiguous",
          "normalized": "USSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Contiguous",
          "signature": "USSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:isContiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "length",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "length",
          "normalized": "USSegd-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "USSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a new scattered segment descriptor.\n   All the provided arrays must have the same lengths.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "mkUSSegd",
          "package": "dph-prim-seq",
          "signature": "Vector Int-\u003e Vector Int-\u003e USegd-\u003e USSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct new scattered segment descriptor All the provided arrays must have the same lengths",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "mkUSSegd",
          "normalized": "Vector Int-\u003eVector Int-\u003eUSegd-\u003eUSSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd",
          "signature": "Vector Int-\u003eVector Int-\u003eUSegd-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:mkUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements in a flat array\n   with sourceid 0.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "singleton",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct singleton segment descriptor The single segment covers the given number of elements in flat array with sourceid",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "singleton",
          "normalized": "Int-\u003eUSSegd",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the total number of elements covered by a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeElements",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#takeElements",
          "type": "function"
        },
        "index": {
          "description": "Yield the total number of elements covered by USSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeElements",
          "normalized": "USSegd-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Elements",
          "signature": "USSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:takeElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices of a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeIndices",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#takeIndices",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment indices of USSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeIndices",
          "normalized": "USSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Indices",
          "signature": "USSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:takeIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the segments of a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeLengths",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#takeLengths",
          "type": "function"
        },
        "index": {
          "description": "Yield the lengths of the segments of USSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeLengths",
          "normalized": "USSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Lengths",
          "signature": "USSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the source ids of a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeSources",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#takeSources",
          "type": "function"
        },
        "index": {
          "description": "Yield the source ids of USSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeSources",
          "normalized": "USSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Sources",
          "signature": "USSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:takeSources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the starting indices of a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeStarts",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#takeStarts",
          "type": "function"
        },
        "index": {
          "description": "Yield the starting indices of USSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeStarts",
          "normalized": "USSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Starts",
          "signature": "USSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:takeStarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeUSegd",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#takeUSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the USegd of USSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "takeUSegd",
          "normalized": "USSegd-\u003eUSegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "signature": "USSegd-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:takeUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the starts are identical to the usegd indices field\n        and the sources are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_contiguous",
          "package": "dph-prim-seq",
          "signature": "Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#USSegd",
          "type": "function"
        },
        "index": {
          "description": "True when the starts are identical to the usegd indices field and the sources are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_contiguous",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:ussegd_contiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich flat array to take each segment from.\n\u003c/p\u003e\u003cp\u003eIMPORTANT: this field is lazy so we can avoid creating it when\n              the flat array is contiguous.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_sources",
          "package": "dph-prim-seq",
          "signature": "Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#USSegd",
          "type": "function"
        },
        "index": {
          "description": "Which flat array to take each segment from IMPORTANT this field is lazy so we can avoid creating it when the flat array is contiguous",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_sources",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:ussegd_sources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting index of each segment in its flat array.\n\u003c/p\u003e\u003cp\u003eIMPORTANT: this field is lazy so we can avoid creating it when\n              the flat array is contiguous.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_starts",
          "package": "dph-prim-seq",
          "signature": "Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#USSegd",
          "type": "function"
        },
        "index": {
          "description": "Starting index of each segment in its flat array IMPORTANT this field is lazy so we can avoid creating it when the flat array is contiguous",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_starts",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:ussegd_starts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegment descriptor relative to a contiguous index space.\n   This defines the length of each segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_usegd",
          "package": "dph-prim-seq",
          "signature": "USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#USSegd",
          "type": "function"
        },
        "index": {
          "description": "Segment descriptor relative to contiguous index space This defines the length of each segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "ussegd_usegd",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:ussegd_usegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Check the internal consistency of a scattered segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "valid",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of scattered segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential USSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USSegd",
          "name": "valid",
          "normalized": "USSegd-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "USSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USSegd.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSegment Descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "USegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html",
          "type": "module"
        },
        "index": {
          "description": "Segment Descriptors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "USegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegment descriptor. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "USegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#USegd",
          "type": "data"
        },
        "index": {
          "description": "Segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "USegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#t:USegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "USegd",
          "package": "dph-prim-seq",
          "signature": "USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#USegd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "USegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:USegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Produce a segment descriptor that describes the result of appending \n   two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "append",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e USegd -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#append",
          "type": "function"
        },
        "index": {
          "description": "segs Produce segment descriptor that describes the result of appending two arrays",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "append",
          "normalized": "USegd-\u003eUSegd-\u003eUSegd",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003eUSegd-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "empty",
          "package": "dph-prim-seq",
          "signature": "USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty segment descriptor with no elements or segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "empty",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a slice of a segment descriptor, copying everything.\n\u003c/p\u003e\u003cp\u003eIn contrast to \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e, this function copies the array of \n   segment lengths as well as recomputing the starting indices of each.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "extract",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003e Int-\u003e Int-\u003e USegd",
          "type": "function"
        },
        "index": {
          "description": "Extract slice of segment descriptor copying everything In contrast to slice this function copies the array of segment lengths as well as recomputing the starting indices of each",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "extract",
          "normalized": "USegd-\u003eInt-\u003eInt-\u003eUSegd",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003eInt-\u003eInt-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Convert an array of segment lengths into a segment descriptor.\n\u003c/p\u003e\u003cp\u003eThe array contains the length of each segment, and we compute the \n   indices from that.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "fromLengths",
          "package": "dph-prim-seq",
          "signature": "Vector Int -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#fromLengths",
          "type": "function"
        },
        "index": {
          "description": "segs Convert an array of segment lengths into segment descriptor The array contains the length of each segment and we compute the indices from that",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "fromLengths",
          "normalized": "Vector Int-\u003eUSegd",
          "package": "dph-prim-seq",
          "partial": "Lengths",
          "signature": "Vector Int-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:fromLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length and segment index of a segment\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "getSeg",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Int -\u003e (Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#getSeg",
          "type": "function"
        },
        "index": {
          "description": "Get the length and segment index of segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "getSeg",
          "normalized": "USegd-\u003eInt-\u003e(Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Seg",
          "signature": "USegd-\u003eInt-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:getSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "length",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "length",
          "normalized": "USegd-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a new segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "mkUSegd",
          "package": "dph-prim-seq",
          "signature": "Vector Int-\u003e Vector Int-\u003e Int-\u003e USegd",
          "type": "function"
        },
        "index": {
          "description": "Construct new segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "mkUSegd",
          "normalized": "Vector Int-\u003eVector Int-\u003eInt-\u003eUSegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "signature": "Vector Int-\u003eVector Int-\u003eInt-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:mkUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "singleton",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct singleton segment descriptor The single segment covers the given number of elements",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "singleton",
          "normalized": "Int-\u003eUSegd",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs) Extract a slice of a segment descriptor, avoiding copying where possible.\n\u003c/p\u003e\u003cp\u003eWe can share the segment lengths with the original segment descriptor, \n   but still need to recompute the starting indices of each. Hence\n   runtime is O(segs) in the number of segments sliced out.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "slice",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003e Int-\u003e Int-\u003e USegd",
          "type": "function"
        },
        "index": {
          "description": "segs Extract slice of segment descriptor avoiding copying where possible We can share the segment lengths with the original segment descriptor but still need to recompute the starting indices of each Hence runtime is segs in the number of segments sliced out",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "slice",
          "normalized": "USegd-\u003eInt-\u003eInt-\u003eUSegd",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003eInt-\u003eInt-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "takeElements",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#takeElements",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of data elements",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "takeElements",
          "normalized": "USegd-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Elements",
          "signature": "USegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:takeElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices of a segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "takeIndices",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#takeIndices",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment indices of segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "takeIndices",
          "normalized": "USegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Indices",
          "signature": "USegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:takeIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "takeLengths",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#takeLengths",
          "type": "function"
        },
        "index": {
          "description": "Yield the lengths of the individual segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "takeLengths",
          "normalized": "USegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Lengths",
          "signature": "USegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal number of elements in the flat array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "usegd_elements",
          "package": "dph-prim-seq",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#USegd",
          "type": "function"
        },
        "index": {
          "description": "Total number of elements in the flat array",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "usegd_elements",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:usegd_elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting index of each segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "usegd_indices",
          "package": "dph-prim-seq",
          "signature": "(Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#USegd",
          "type": "function"
        },
        "index": {
          "description": "Starting index of each segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "usegd_indices",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:usegd_indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of each segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "usegd_lengths",
          "package": "dph-prim-seq",
          "signature": "(Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#USegd",
          "type": "function"
        },
        "index": {
          "description": "Length of each segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "usegd_lengths",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:usegd_lengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Check the internal consistency of a segment descriptor.\n\u003c/p\u003e\u003cp\u003eAs the indices and elemens field can be generated based on the segment\n   lengths, we check the consistency by rebuilding these fields and \n   comparing the rebuilt ones against the originals.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "valid",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USegd.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of segment descriptor As the indices and elemens field can be generated based on the segment lengths we check the consistency by rebuilding these fields and comparing the rebuilt ones against the originals",
          "hierarchy": "Data Array Parallel Unlifted Sequential USegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USegd",
          "name": "valid",
          "normalized": "USegd-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "USegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USegd.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelectors. \n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "USel",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html",
          "type": "module"
        },
        "index": {
          "description": "Selectors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "USel",
          "package": "dph-prim-seq",
          "partial": "USel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "USel2",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#USel2",
          "type": "data"
        },
        "index": {
          "description": "Selector",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "USel2",
          "package": "dph-prim-seq",
          "partial": "USel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#t:USel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "USel2",
          "package": "dph-prim-seq",
          "signature": "USel2",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#USel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "USel2",
          "package": "dph-prim-seq",
          "partial": "USel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:USel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the number of elements that will be taken from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "elementsUSel2_0",
          "package": "dph-prim-seq",
          "signature": "USel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#elementsUSel2_0",
          "type": "function"
        },
        "index": {
          "description": "Get the number of elements that will be taken from the first array",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "elementsUSel2_0",
          "normalized": "USel-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "USel",
          "signature": "USel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:elementsUSel2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the number of elements that will be taken from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "elementsUSel2_1",
          "package": "dph-prim-seq",
          "signature": "USel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#elementsUSel2_1",
          "type": "function"
        },
        "index": {
          "description": "Get the number of elements that will be taken from the second array",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "elementsUSel2_1",
          "normalized": "USel-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "USel",
          "signature": "USel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:elementsUSel2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the indices array of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "indicesUSel2",
          "package": "dph-prim-seq",
          "signature": "USel2 -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#indicesUSel2",
          "type": "function"
        },
        "index": {
          "description": "Get the indices array of selector",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "indicesUSel2",
          "normalized": "USel-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "USel",
          "signature": "USel-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:indicesUSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the number of elements represented by this selector.\n         This is the length of the array returned by \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "lengthUSel2",
          "package": "dph-prim-seq",
          "signature": "USel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#lengthUSel2",
          "type": "function"
        },
        "index": {
          "description": "Get the number of elements represented by this selector This is the length of the array returned by combine",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "lengthUSel2",
          "normalized": "USel-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "USel",
          "signature": "USel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:lengthUSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "mkUSel2",
          "package": "dph-prim-seq",
          "signature": "Vector Tag-\u003e Vector Int-\u003e Int-\u003e Int-\u003e USel2",
          "type": "function"
        },
        "index": {
          "description": "Construct selector",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "mkUSel2",
          "normalized": "Vector Tag-\u003eVector Int-\u003eInt-\u003eInt-\u003eUSel",
          "package": "dph-prim-seq",
          "partial": "USel",
          "signature": "Vector Tag-\u003eVector Int-\u003eInt-\u003eInt-\u003eUSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:mkUSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Compute the source index for each element of the result array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "tagsToIndices2",
          "package": "dph-prim-seq",
          "signature": "Vector Tag -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#tagsToIndices2",
          "type": "function"
        },
        "index": {
          "description": "Compute the source index for each element of the result array",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "tagsToIndices2",
          "normalized": "Vector Tag-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "To Indices",
          "signature": "Vector Tag-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:tagsToIndices2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the tags array of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "tagsUSel2",
          "package": "dph-prim-seq",
          "signature": "USel2 -\u003e Vector Tag",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#tagsUSel2",
          "type": "function"
        },
        "index": {
          "description": "Get the tags array of selector",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "tagsUSel2",
          "normalized": "USel-\u003eVector Tag",
          "package": "dph-prim-seq",
          "partial": "USel",
          "signature": "USel-\u003eVector Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:tagsUSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of tags with value 0.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_elements0",
          "package": "dph-prim-seq",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#USel2",
          "type": "function"
        },
        "index": {
          "description": "Number of tags with value",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_elements0",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:usel2_elements0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of tags with value 1.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_elements1",
          "package": "dph-prim-seq",
          "signature": "Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#USel2",
          "type": "function"
        },
        "index": {
          "description": "Number of tags with value",
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_elements1",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:usel2_elements1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_indices",
          "package": "dph-prim-seq",
          "signature": "(Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#USel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_indices",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:usel2_indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_tags",
          "package": "dph-prim-seq",
          "signature": "(Vector Tag)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-USel.html#USel2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential USel",
          "module": "Data.Array.Parallel.Unlifted.Sequential.USel",
          "name": "usel2_tags",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-USel.html#v:usel2_tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVirtual Segment Descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Virtual Segment Descriptors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-seq",
          "partial": "UVSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVirtual segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "data"
        },
        "index": {
          "description": "Virtual segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-seq",
          "partial": "UVSegd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#t:UVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-seq",
          "signature": "UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-seq",
          "partial": "UVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:UVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n)\n   Produce a segment descriptor describing the result of appending two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "appendWith",
          "package": "dph-prim-seq",
          "signature": "UVSegd-\u003e Int-\u003e UVSegd-\u003e Int-\u003e UVSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce segment descriptor describing the result of appending two arrays",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "appendWith",
          "normalized": "UVSegd-\u003eInt-\u003eUVSegd-\u003eInt-\u003eUVSegd",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "UVSegd-\u003eInt-\u003eUVSegd-\u003eInt-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:appendWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Combine two virtual segment descriptors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "combine2",
          "package": "dph-prim-seq",
          "signature": "USel2-\u003e UVSegd-\u003e Int-\u003e UVSegd-\u003e Int-\u003e UVSegd",
          "type": "function"
        },
        "index": {
          "description": "Combine two virtual segment descriptors",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "combine2",
          "normalized": "USel-\u003eUVSegd-\u003eInt-\u003eUVSegd-\u003eInt-\u003eUVSegd",
          "package": "dph-prim-seq",
          "signature": "USel-\u003eUVSegd-\u003eInt-\u003eUVSegd-\u003eInt-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:combine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "empty",
          "package": "dph-prim-seq",
          "signature": "UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty segment descriptor with no elements or segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "empty",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003eSegd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "fromUSSegd",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#fromUSSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain USegd to UVSegd The result contains one virtual segment for every physical segment the provided Segd",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "fromUSSegd",
          "normalized": "USSegd-\u003eUVSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd",
          "signature": "USSegd-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:fromUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003eSegd\u003c/code\u003e to a \u003ccode\u003eVSegd\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003eSSegd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "fromUSegd",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#fromUSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain Segd to VSegd The result contains one virtual segment for every physical segment the provided SSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "fromUSegd",
          "normalized": "USegd-\u003eUVSegd",
          "package": "dph-prim-seq",
          "partial": "USegd",
          "signature": "USegd-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:fromUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "getSeg",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Int -\u003e (Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#getSeg",
          "type": "function"
        },
        "index": {
          "description": "Get the length starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "getSeg",
          "normalized": "UVSegd-\u003eInt-\u003e(Int,Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Seg",
          "signature": "UVSegd-\u003eInt-\u003e(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:getSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Checks whether the starts are identical to the usegd indices field and\n   the sourceids are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "isContiguous",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#isContiguous",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the starts are identical to the usegd indices field and the sourceids are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "isContiguous",
          "normalized": "UVSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Contiguous",
          "signature": "UVSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:isContiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Checks whether all the segments are manifest (unshared / non-virtual).\n   If this is the case, then the vsegids field will be [0..len-1]. \n\u003c/p\u003e\u003cp\u003eConsumers can check this field, avoid demanding the vsegids field.\n   This can avoid the need for it to be generated in the first place, due to\n   lazy evaluation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "isManifest",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#isManifest",
          "type": "function"
        },
        "index": {
          "description": "Checks whether all the segments are manifest unshared non-virtual If this is the case then the vsegids field will be len-1 Consumers can check this field avoid demanding the vsegids field This can avoid the need for it to be generated in the first place due to lazy evaluation",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "isManifest",
          "normalized": "UVSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Manifest",
          "signature": "UVSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:isManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments described by a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "length",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments described by UVSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "length",
          "normalized": "UVSegd-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "UVSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a new virtual segment descriptor.\n   All the provided arrays must have the same lengths.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "mkUVSegd",
          "package": "dph-prim-seq",
          "signature": "Vector Int-\u003e USSegd-\u003e UVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct new virtual segment descriptor All the provided arrays must have the same lengths",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "mkUVSegd",
          "normalized": "Vector Int-\u003eUSSegd-\u003eUVSegd",
          "package": "dph-prim-seq",
          "partial": "UVSegd",
          "signature": "Vector Int-\u003eUSSegd-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:mkUVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e that describes an array created by replicating\n   a single segment several times.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "replicated",
          "package": "dph-prim-seq",
          "signature": "Int-\u003e Int-\u003e UVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct UVSegd that describes an array created by replicating single segment several times",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "replicated",
          "normalized": "Int-\u003eInt-\u003eUVSegd",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eInt-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:replicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements in a flat array\n   with sourceid 0.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "singleton",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct singleton segment descriptor The single segment covers the given number of elements in flat array with sourceid",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "singleton",
          "normalized": "Int-\u003eUVSegd",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield the lengths of the segments described by a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeLengths",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#takeLengths",
          "type": "function"
        },
        "index": {
          "description": "segs Yield the lengths of the segments described by UVSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeLengths",
          "normalized": "UVSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "Lengths",
          "signature": "UVSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeUSSegd",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#takeUSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the USSegd of UVSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeUSSegd",
          "normalized": "UVSegd-\u003eUSSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd",
          "signature": "UVSegd-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:takeUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the \u003ccode\u003eUPSSegd\u003c/code\u003e of a \u003ccode\u003eUPVSegd\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eSee the note in \u003ccode\u003e\u003ca\u003etakeVSegidsRedundant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeUSSegdRedundant",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#takeUSSegdRedundant",
          "type": "function"
        },
        "index": {
          "description": "Take the UPSSegd of UPVSegd but don require that every physical segment is referenced by some virtual segment See the note in takeVSegidsRedundant",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeUSSegdRedundant",
          "normalized": "UVSegd-\u003eUSSegd",
          "package": "dph-prim-seq",
          "partial": "USSegd Redundant",
          "signature": "UVSegd-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:takeUSSegdRedundant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeVSegids",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#takeVSegids",
          "type": "function"
        },
        "index": {
          "description": "Yield the vsegids of UVSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeVSegids",
          "normalized": "UVSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "VSegids",
          "signature": "UVSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:takeVSegids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the vsegids of a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eIf you're just performing indexing and don't need the invariant that all\n   physical segments are reachable from some virtual segment, then use this\n   version as it's faster. This sidesteps the code that maintains the invariant.\n\u003c/p\u003e\u003cp\u003eThe stated O(1) complexity assumes that the array has already been fully\n   evalauted. If this is not the case then we can avoid demanding the result\n   of a prior computation on the vsegids, thus reducing the cost attributed\n   to that prior computation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeVSegidsRedundant",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#takeVSegidsRedundant",
          "type": "function"
        },
        "index": {
          "description": "Take the vsegids of UVSegd but don require that every physical segment is referenced by some virtual segment If you re just performing indexing and don need the invariant that all physical segments are reachable from some virtual segment then use this version as it faster This sidesteps the code that maintains the invariant The stated complexity assumes that the array has already been fully evalauted If this is not the case then we can avoid demanding the result of prior computation on the vsegids thus reducing the cost attributed to that prior computation",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "takeVSegidsRedundant",
          "normalized": "UVSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "VSegids Redundant",
          "signature": "UVSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:takeVSegidsRedundant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e \n   individually.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e By doing this we lose information about virtual segments corresponding\n     to the same physical segments.\n\u003c/li\u003e\u003cli\u003e This operation is used in concatPR as the first step in eliminating\n     segmentation from a nested array.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "unsafeDemoteToUSSegd",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#unsafeDemoteToUSSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield USSegd that describes each segment of UVSegd individually By doing this we lose information about virtual segments corresponding to the same physical segments This operation is used in concatPR as the first step in eliminating segmentation from nested array",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "unsafeDemoteToUSSegd",
          "normalized": "UVSegd-\u003eUSSegd",
          "package": "dph-prim-seq",
          "partial": "Demote To USSegd",
          "signature": "UVSegd-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:unsafeDemoteToUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e\n   individually, assuming all segments have been concatenated to \n   remove scattering.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: Trying to take the \u003ccode\u003eUPSegd\u003c/code\u003e of a nested array that has been\n   constructed with replication can cause index space overflow. This is\n   because the virtual size of the corresponding flat data can be larger\n   than physical memory. If this happens then indices fields and \n   element count in the result will be invalid.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "unsafeDemoteToUSegd",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#unsafeDemoteToUSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield USegd that describes each segment of UVSegd individually assuming all segments have been concatenated to remove scattering WARNING Trying to take the UPSegd of nested array that has been constructed with replication can cause index space overflow This is because the virtual size of the corresponding flat data can be larger than physical memory If this happens then indices fields and element count in the result will be invalid",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "unsafeDemoteToUSegd",
          "normalized": "UVSegd-\u003eUSegd",
          "package": "dph-prim-seq",
          "partial": "Demote To USegd",
          "signature": "UVSegd-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:unsafeDemoteToUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the vsegids of \u003ccode\u003eUPVSegd\u003c/code\u003e, and then cull the physical\n   segment descriptor so that all phsyical segments are reachable from\n   some virtual segment.\n\u003c/p\u003e\u003cp\u003eThis function lets you perform filtering operations on the virtual segments,\n   while maintaining the invariant that all physical segments are referenced\n   by some virtual segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "updateVSegs",
          "package": "dph-prim-seq",
          "signature": "(Vector Int -\u003e Vector Int) -\u003e UVSegd -\u003e UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#updateVSegs",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of UPVSegd and then cull the physical segment descriptor so that all phsyical segments are reachable from some virtual segment This function lets you perform filtering operations on the virtual segments while maintaining the invariant that all physical segments are referenced by some virtual segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "updateVSegs",
          "normalized": "(Vector Int-\u003eVector Int)-\u003eUVSegd-\u003eUVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegs",
          "signature": "(Vector Int-\u003eVector Int)-\u003eUVSegd-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:updateVSegs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the vsegids of \u003ccode\u003eUPVSegd\u003c/code\u003e, where the result covers\n   all physical segments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting vsegids must cover all physical segments.\n     If they do not then there will be physical segments that are not \n     reachable from some virtual segment, and performing operations like\n     segmented fold will waste work.\n\u003c/li\u003e\u003cli\u003e Using this version saves performing the \u003ccode\u003ecull\u003c/code\u003e operation which \n     discards unreachable physical segments. This is O(result segments), \n     but can be expensive in absolute terms.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "updateVSegsReachable",
          "package": "dph-prim-seq",
          "signature": "(Vector Int -\u003e Vector Int) -\u003e UVSegd -\u003e UVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#updateVSegsReachable",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of UPVSegd where the result covers all physical segments The resulting vsegids must cover all physical segments If they do not then there will be physical segments that are not reachable from some virtual segment and performing operations like segmented fold will waste work Using this version saves performing the cull operation which discards unreachable physical segments This is result segments but can be expensive in absolute terms",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "updateVSegsReachable",
          "normalized": "(Vector Int-\u003eVector Int)-\u003eUVSegd-\u003eUVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegs Reachable",
          "signature": "(Vector Int-\u003eVector Int)-\u003eUVSegd-\u003eUVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:updateVSegsReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the vsegids field holds a lazy \u003ccode\u003e(U.enumFromTo 0 (len - 1))\u003c/code\u003e\n   then this field is True. This lets us perform some operations like\n   \u003ccode\u003edemoteToUPSSegd\u003c/code\u003e without actually creating it.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_manifest",
          "package": "dph-prim-seq",
          "signature": "Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "function"
        },
        "index": {
          "description": "When the vsegids field holds lazy U.enumFromTo len then this field is True This lets us perform some operations like demoteToUPSSegd without actually creating it",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_manifest",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:uvsegd_manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_ussegd_culled",
          "package": "dph-prim-seq",
          "signature": "USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_ussegd_culled",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:uvsegd_ussegd_culled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScattered segment descriptor that defines how physical segments\n   are layed out in memory.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_ussegd_redundant",
          "package": "dph-prim-seq",
          "signature": "USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "function"
        },
        "index": {
          "description": "Scattered segment descriptor that defines how physical segments are layed out in memory",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_ussegd_redundant",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:uvsegd_ussegd_redundant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_vsegids_culled",
          "package": "dph-prim-seq",
          "signature": "Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_vsegids_culled",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:uvsegd_vsegids_culled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVirtual segment identifiers that indicate what physical segment\n   to use for each virtual segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_vsegids_redundant",
          "package": "dph-prim-seq",
          "signature": "Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#UVSegd",
          "type": "function"
        },
        "index": {
          "description": "Virtual segment identifiers that indicate what physical segment to use for each virtual segment",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "uvsegd_vsegids_redundant",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:uvsegd_vsegids_redundant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Check the internal consistency of a virutal segmentation descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "valid",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of virutal segmentation descriptor",
          "hierarchy": "Data Array Parallel Unlifted Sequential UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Sequential.UVSegd",
          "name": "valid",
          "normalized": "UVSegd-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "UVSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-UVSegd.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrappers for primitives defined in \u003ccode\u003eData.Vector\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an internal API and shouldn't need to be used directly.\n     Client programs should use \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "Vector",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Wrappers for primitives defined in Data.Vector This is an internal API and shouldn need to be used directly Client programs should use Data.Array.Parallel.Unlifted",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "Vector",
          "package": "dph-prim-seq",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "MVector",
          "package": "dph-prim-seq",
          "signature": "MVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "MVector",
          "package": "dph-prim-seq",
          "partial": "MVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#t:MVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "UIO",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#UIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "UIO",
          "package": "dph-prim-seq",
          "partial": "UIO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#t:UIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "Unbox",
          "package": "dph-prim-seq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "Unbox",
          "package": "dph-prim-seq",
          "partial": "Unbox",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#t:Unbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "Vector",
          "package": "dph-prim-seq",
          "signature": "Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "Vector",
          "package": "dph-prim-seq",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(m+n)\u003c/em\u003e Concatenate two vectors\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "(++)",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Concatenate two vectors",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "(++) ++",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Check if all elements satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "all",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if all elements satisfy the predicate",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Check if all elements are \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "and",
          "package": "dph-prim-seq",
          "signature": "Vector Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if all elements are True",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "and",
          "normalized": "Vector Bool-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "Vector Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Check if any element satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "any",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if any element satisfies the predicate",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "bpermute",
          "package": "dph-prim-seq",
          "signature": "Vector e -\u003e Vector Int -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#bpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "bpermute",
          "normalized": "Vector a-\u003eVector Int-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector e-\u003eVector Int-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:bpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "bpermuteDft",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e (Int -\u003e e) -\u003e Vector (Int, e) -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#bpermuteDft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "bpermuteDft",
          "normalized": "Int-\u003e(Int-\u003ea)-\u003eVector(Int,a)-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "Dft",
          "signature": "Int-\u003e(Int-\u003ee)-\u003eVector(Int,e)-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:bpermuteDft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "combine",
          "package": "dph-prim-seq",
          "signature": "Vector Bool -\u003e Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#combine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "combine",
          "normalized": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "combine2ByTag",
          "package": "dph-prim-seq",
          "signature": "Vector Tag -\u003e Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#combine2ByTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "combine2ByTag",
          "normalized": "Vector Tag-\u003eVector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "By Tag",
          "signature": "Vector Tag-\u003eVector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:combine2ByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Prepend an element\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "cons",
          "package": "dph-prim-seq",
          "signature": "a -\u003e Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Prepend an element",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "cons",
          "normalized": "a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Copy an immutable vector into a mutable one. The two vectors must\n have the same length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "copy",
          "package": "dph-prim-seq",
          "signature": "MVector (PrimState m) a -\u003e Vector a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Copy an immutable vector into mutable one The two vectors must have the same length",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "copy",
          "normalized": "MVector(PrimState a)b-\u003eVector b-\u003ea()",
          "package": "dph-prim-seq",
          "signature": "MVector(PrimState m)a-\u003eVector a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Yield all but the first \u003ccode\u003en\u003c/code\u003e elements without copying. The vector may\n contain less than \u003ccode\u003en\u003c/code\u003e elements in which case an empty vector is returned.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "drop",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Yield all but the first elements without copying The vector may contain less than elements in which case an empty vector is returned",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "drop",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Check if the vector contains an element\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "elem",
          "package": "dph-prim-seq",
          "signature": "a -\u003e Vector a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if the vector contains an element",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "elem",
          "normalized": "a-\u003eVector a-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Empty vector\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "empty",
          "package": "dph-prim-seq",
          "signature": "Vector a",
          "type": "function"
        },
        "index": {
          "description": "Empty vector",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "empty",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromStepLen",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#enumFromStepLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromStepLen",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "From Step Len",
          "signature": "Int-\u003eInt-\u003eInt-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:enumFromStepLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromStepLenEach",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#enumFromStepLenEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromStepLenEach",
          "normalized": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "From Step Len Each",
          "signature": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:enumFromStepLenEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Enumerate values from \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003ey\u003c/code\u003e with a specific step \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e This operation can be very inefficient. If at all possible, use\n \u003ccode\u003e\u003ca\u003eenumFromStepN\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromThenTo",
          "package": "dph-prim-seq",
          "signature": "a -\u003e a -\u003e a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Enumerate values from to with specific step WARNING This operation can be very inefficient If at all possible use enumFromStepN instead",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromThenTo",
          "normalized": "a-\u003ea-\u003ea-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From Then To",
          "signature": "a-\u003ea-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Enumerate values from \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e This operation can be very inefficient. If at all possible, use\n \u003ccode\u003e\u003ca\u003eenumFromN\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromTo",
          "package": "dph-prim-seq",
          "signature": "a -\u003e a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Enumerate values from to WARNING This operation can be very inefficient If at all possible use enumFromN instead",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From To",
          "signature": "a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromToEach",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector (Int, Int) -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#enumFromToEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "enumFromToEach",
          "normalized": "Int-\u003eVector(Int,Int)-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "From To Each",
          "signature": "Int-\u003eVector(Int,Int)-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:enumFromToEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "extract",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Int -\u003e Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#extract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "extract",
          "normalized": "Vector a-\u003eInt-\u003eInt-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eInt-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Drop elements that do not satisfy the predicate\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "filter",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Drop elements that do not satisfy the predicate",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the first element matching the predicate or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if no such element exists.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "find",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "Yield Just the first element matching the predicate or Nothing if no such element exists",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eMaybe a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the index of the first element matching the predicate\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no such element exists.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "findIndex",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Maybe Int",
          "type": "function"
        },
        "index": {
          "description": "Yield Just the index of the first element matching the predicate or Nothing if no such element exists",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eMaybe Int",
          "package": "dph-prim-seq",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fold",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fold",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fold1",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#fold1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fold1Maybe",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e Maybe a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#fold1Maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fold1Maybe",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eMaybe a",
          "package": "dph-prim-seq",
          "partial": "Maybe",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:fold1Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "foldl",
          "package": "dph-prim-seq",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Vector a -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "dph-prim-seq",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "foldl1",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#foldl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "foldl1Maybe",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e Maybe a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#foldl1Maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "foldl1Maybe",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eMaybe a",
          "package": "dph-prim-seq",
          "partial": "Maybe",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:foldl1Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a list to a vector\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fromList",
          "package": "dph-prim-seq",
          "signature": "[a] -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Convert list to vector",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fromList",
          "normalized": "[a]-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "List",
          "signature": "[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fsts",
          "package": "dph-prim-seq",
          "signature": "Vector (a, b) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#fsts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "fsts",
          "normalized": "Vector(a,b)-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector(a,b)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:fsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "hGet",
          "package": "dph-prim-seq",
          "signature": "Handle -\u003e IO (Vector a)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#hGet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "hGet",
          "normalized": "Handle-\u003eIO(Vector a)",
          "package": "dph-prim-seq",
          "partial": "Get",
          "signature": "Handle-\u003eIO(Vector a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "hPut",
          "package": "dph-prim-seq",
          "signature": "Handle -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#hPut",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "hPut",
          "normalized": "Handle-\u003eVector a-\u003eIO()",
          "package": "dph-prim-seq",
          "partial": "Put",
          "signature": "Handle-\u003eVector a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "index",
          "package": "dph-prim-seq",
          "signature": "String -\u003e Vector a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "index",
          "normalized": "String-\u003eVector a-\u003eInt-\u003ea",
          "package": "dph-prim-seq",
          "signature": "String-\u003eVector a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Pair each element in a vector with its index\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "indexed",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector (Int, a)",
          "type": "function"
        },
        "index": {
          "description": "Pair each element in vector with its index",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "indexed",
          "normalized": "Vector a-\u003eVector(Int,a)",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "interleave",
          "package": "dph-prim-seq",
          "signature": "Vector e -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "interleave",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector e-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Yield the length of the vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "length",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of the vector",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "length",
          "normalized": "Vector a-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over a vector\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "map",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "type": "function"
        },
        "index": {
          "description": "Map function over vector",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the index of the maximum element of the vector. The vector\n may not be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maxIndex",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Yield the index of the maximum element of the vector The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maxIndex",
          "normalized": "Vector a-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Index",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:maxIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the index of the maximum element of the vector according to\n the given comparison function. The vector may not be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maxIndexBy",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vector a -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Yield the index of the maximum element of the vector according to the given comparison function The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maxIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:maxIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the maximum element of the vector. The vector may not be\n empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maximum",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Yield the maximum element of the vector The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maximum",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the maximum element of the vector according to the given\n comparison function. The vector may not be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maximumBy",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vector a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Yield the maximum element of the vector according to the given comparison function The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
          "package": "dph-prim-seq",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mbpermute",
          "package": "dph-prim-seq",
          "signature": "(e -\u003e d) -\u003e Vector e -\u003e Vector Int -\u003e Vector d",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#mbpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mbpermute",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector Int-\u003eVector b",
          "package": "dph-prim-seq",
          "signature": "(e-\u003ed)-\u003eVector e-\u003eVector Int-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:mbpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mdrop",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e MVector s a -\u003e MVector s a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#mdrop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mdrop",
          "normalized": "Int-\u003eMVector a b-\u003eMVector a b",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eMVector s a-\u003eMVector s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:mdrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the index of the minimum element of the vector. The vector\n may not be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minIndex",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Yield the index of the minimum element of the vector The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minIndex",
          "normalized": "Vector a-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Index",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:minIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the index of the minimum element of the vector according to\n the given comparison function. The vector may not be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minIndexBy",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vector a -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Yield the index of the minimum element of the vector according to the given comparison function The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minIndexBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Index By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:minIndexBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the minimum element of the vector. The vector may not be\n empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minimum",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Yield the minimum element of the vector The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minimum",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Yield the minimum element of the vector according to the given\n comparison function. The vector may not be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minimumBy",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Vector a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Yield the minimum element of the vector according to the given comparison function The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
          "package": "dph-prim-seq",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mpermute",
          "package": "dph-prim-seq",
          "signature": "MVector s e -\u003e Vector e -\u003e Vector Int -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#mpermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mpermute",
          "normalized": "MVector a b-\u003eVector b-\u003eVector Int-\u003eST a()",
          "package": "dph-prim-seq",
          "signature": "MVector s e-\u003eVector e-\u003eVector Int-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:mpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mslice",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Int -\u003e MVector s a -\u003e MVector s a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#mslice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mslice",
          "normalized": "Int-\u003eInt-\u003eMVector a b-\u003eMVector a b",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eInt-\u003eMVector s a-\u003eMVector s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:mslice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mupdate",
          "package": "dph-prim-seq",
          "signature": "MVector s e -\u003e Vector (Int, e) -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#mupdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "mupdate",
          "normalized": "MVector a b-\u003eVector(Int,b)-\u003eST a()",
          "package": "dph-prim-seq",
          "signature": "MVector s e-\u003eVector(Int,e)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:mupdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "new",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e (forall s.  MVector s a -\u003e ST s ()) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "new",
          "normalized": "Int-\u003e(a b MVector c d-\u003eST c())-\u003eVector d",
          "package": "dph-prim-seq",
          "signature": "Int-\u003e(forall s. MVector s a-\u003eST s())-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "newM",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e ST s (MVector s a)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#newM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "newM",
          "normalized": "Int-\u003eST a(MVector a b)",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eST s(MVector s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:newM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Check if the vector does not contain an element (inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "notElem",
          "package": "dph-prim-seq",
          "signature": "a -\u003e Vector a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if the vector does not contain an element inverse of elem",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "notElem",
          "normalized": "a-\u003eVector a-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Elem",
          "signature": "a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a vector if empty\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "null",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether vector if empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "null",
          "normalized": "Vector a-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Check if any element is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "or",
          "package": "dph-prim-seq",
          "signature": "Vector Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if any element is True",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "or",
          "normalized": "Vector Bool-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "Vector Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "pack",
          "package": "dph-prim-seq",
          "signature": "Vector e -\u003e Vector Bool -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "pack",
          "normalized": "Vector a-\u003eVector Bool-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector e-\u003eVector Bool-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "permute",
          "package": "dph-prim-seq",
          "signature": "Vector e -\u003e Vector Int -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#permute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "permute",
          "normalized": "Vector a-\u003eVector Int-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector e-\u003eVector Int-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute the produce of the elements\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "product",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute the produce of the elements",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "product",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "random",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e g -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#random",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "random",
          "normalized": "Int-\u003ea-\u003eVector b",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eg-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "randomR",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e (a, a) -\u003e g -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#randomR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "randomR",
          "normalized": "Int-\u003e(a,a)-\u003eb-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003e(a,a)-\u003eg-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the element at the given position.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "read",
          "package": "dph-prim-seq",
          "signature": "MVector (PrimState m) a -\u003e Int -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Yield the element at the given position",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "read",
          "normalized": "MVector(PrimState a)b-\u003eInt-\u003ea b",
          "package": "dph-prim-seq",
          "signature": "MVector(PrimState m)a-\u003eInt-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "repeat",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "repeat",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "repeatS",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector e -\u003e Stream e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#repeatS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "repeatS",
          "normalized": "Int-\u003eVector a-\u003eStream a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eVector e-\u003eStream e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:repeatS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Vector of the given length with the same value in each position\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "replicate",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Vector of the given length with the same value in each position",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reverse a vector\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "reverse",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Reverse vector",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "reverse",
          "normalized": "Vector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scan",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#scan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scan",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scan1",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#scan1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scan1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:scan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scanRes",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e (Vector a, a)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#scanRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scanRes",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003e(Vector a,a)",
          "package": "dph-prim-seq",
          "partial": "Res",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003e(Vector a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:scanRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scanl",
          "package": "dph-prim-seq",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#scanl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scanl1",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#scanl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Vector with exactly one element\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "singleton",
          "package": "dph-prim-seq",
          "signature": "a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Vector with exactly one element",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "singleton",
          "normalized": "a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "slice",
          "package": "dph-prim-seq",
          "signature": "String -\u003e Vector a -\u003e Int -\u003e Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "slice",
          "normalized": "String-\u003eVector a-\u003eInt-\u003eInt-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "String-\u003eVector a-\u003eInt-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "snds",
          "package": "dph-prim-seq",
          "signature": "Vector (a, b) -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#snds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "snds",
          "normalized": "Vector(a,b)-\u003eVector b",
          "package": "dph-prim-seq",
          "signature": "Vector(a,b)-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:snds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Yield the first \u003ccode\u003en\u003c/code\u003e elements paired with the remainder without copying.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e n v\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n v, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n v)\u003c/code\u003e\n but slightly more efficient.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "splitAt",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector a -\u003e (Vector a, Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Yield the first elements paired with the remainder without copying Note that splitAt is equivalent to take drop but slightly more efficient",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "splitAt",
          "normalized": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "dph-prim-seq",
          "partial": "At",
          "signature": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a vector to a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "stream",
          "package": "dph-prim-seq",
          "signature": "v a -\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Convert vector to Stream",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "stream",
          "normalized": "a b-\u003eStream b",
          "package": "dph-prim-seq",
          "signature": "v a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compute the sum of the elements\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "sum",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Compute the sum of the elements",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "sum",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Yield all but the first element without copying. The vector may not\n be empty.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "tail",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Yield all but the first element without copying The vector may not be empty",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "tail",
          "normalized": "Vector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Yield at the first \u003ccode\u003en\u003c/code\u003e elements without copying. The vector may\n contain less than \u003ccode\u003en\u003c/code\u003e elements in which case it is returned unchanged.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "take",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Yield at the first elements without copying The vector may contain less than elements in which case it is returned unchanged",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "take",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a vector to a list\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "toList",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Convert vector to list",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "toList",
          "normalized": "Vector a-\u003e[a]",
          "package": "dph-prim-seq",
          "partial": "List",
          "signature": "Vector a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "units",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector ()",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#units",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "units",
          "normalized": "Int-\u003eVector()",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eVector()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:units"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unsafeExtract",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Int -\u003e Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#unsafeExtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unsafeExtract",
          "normalized": "Vector a-\u003eInt-\u003eInt-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "Extract",
          "signature": "Vector a-\u003eInt-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:unsafeExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unsafe convert a mutable vector to an immutable one without\n copying. The mutable vector may not be used after this operation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unsafeFreeze",
          "package": "dph-prim-seq",
          "signature": "MVector (PrimState m) a -\u003e m (Vector a)",
          "type": "function"
        },
        "index": {
          "description": "Unsafe convert mutable vector to an immutable one without copying The mutable vector may not be used after this operation",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unsafeFreeze",
          "normalized": "MVector(PrimState a)b-\u003ea(Vector b)",
          "package": "dph-prim-seq",
          "partial": "Freeze",
          "signature": "MVector(PrimState m)a-\u003em(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unsafeSlice",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Int -\u003e Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#unsafeSlice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unsafeSlice",
          "normalized": "Vector a-\u003eInt-\u003eInt-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "Slice",
          "signature": "Vector a-\u003eInt-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:unsafeSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Construct a vector from a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unstream",
          "package": "dph-prim-seq",
          "signature": "Stream a -\u003e v a",
          "type": "function"
        },
        "index": {
          "description": "Construct vector from Stream",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unstream",
          "normalized": "Stream a-\u003eb a",
          "package": "dph-prim-seq",
          "signature": "Stream a-\u003ev a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:unstream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unzip",
          "package": "dph-prim-seq",
          "signature": "Vector (a, b) -\u003e (Vector a, Vector b)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unzip",
          "normalized": "Vector(a,b)-\u003e(Vector a,Vector b)",
          "package": "dph-prim-seq",
          "signature": "Vector(a,b)-\u003e(Vector a,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unzip3",
          "package": "dph-prim-seq",
          "signature": "Vector (a, b, c) -\u003e (Vector a, Vector b, Vector c)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#unzip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "unzip3",
          "normalized": "Vector(a,b,c)-\u003e(Vector a,Vector b,Vector c)",
          "package": "dph-prim-seq",
          "signature": "Vector(a,b,c)-\u003e(Vector a,Vector b,Vector c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(m+n)\u003c/em\u003e For each pair \u003ccode\u003e(i,a)\u003c/code\u003e from the vector of index/value pairs,\n replace the vector element at position \u003ccode\u003ei\u003c/code\u003e by \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e update \u003c5,9,2,7\u003e \u003c(2,1),(0,3),(2,8)\u003e = \u003c3,9,8,7\u003e\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "update",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003e Vector (Int, a)-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "For each pair from the vector of index value pairs replace the vector element at position by update",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "update",
          "normalized": "Vector a-\u003eVector(Int,a)-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector(Int,a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the element at the given position.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "write",
          "package": "dph-prim-seq",
          "signature": "MVector (PrimState m) a -\u003e Int -\u003e a -\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Replace the element at the given position",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "write",
          "normalized": "MVector(PrimState a)b-\u003eInt-\u003eb-\u003ea()",
          "package": "dph-prim-seq",
          "signature": "MVector(PrimState m)a-\u003eInt-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zip",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector b -\u003e Vector (a, b)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zip",
          "normalized": "Vector a-\u003eVector b-\u003eVector(a,b)",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector b-\u003eVector(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zip3",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector (a, b, c)",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Vector.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zip3",
          "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector(a,b,c)",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(m,n))\u003c/em\u003e Zip two vectors with the given function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zipWith",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "type": "function"
        },
        "index": {
          "description": "min Zip two vectors with the given function",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip three vectors with the given function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zipWith3",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "type": "function"
        },
        "index": {
          "description": "Zip three vectors with the given function",
          "hierarchy": "Data Array Parallel Unlifted Sequential Vector",
          "module": "Data.Array.Parallel.Unlifted.Sequential.Vector",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential-Vector.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSequential operations on unlifted arrays.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an internal API and shouldn't need to be used directly.\n     Client programs should use \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "Sequential",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential.html",
          "type": "module"
        },
        "index": {
          "description": "Sequential operations on unlifted arrays This is an internal API and shouldn need to be used directly Client programs should use Data.Array.Parallel.Unlifted",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "Sequential",
          "package": "dph-prim-seq",
          "partial": "Sequential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the boolean AND of all segments in a segmented array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "andSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector Bool -\u003e Vector Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#andSU",
          "type": "function"
        },
        "index": {
          "description": "Compute the boolean AND of all segments in segmented array",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "andSU",
          "normalized": "USegd-\u003eVector Bool-\u003eVector Bool",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector Bool-\u003eVector Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:andSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented append.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "appendSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector a -\u003e USegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Basics.html#appendSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented append",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "appendSU",
          "normalized": "USegd-\u003eVector a-\u003eUSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector a-\u003eUSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:appendSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two segmented arrays according to flag array\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "combineSU",
          "package": "dph-prim-seq",
          "signature": "Vector Bool -\u003e USegd -\u003e Vector a -\u003e USegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#combineSU",
          "type": "function"
        },
        "index": {
          "description": "Merge two segmented arrays according to flag array",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "combineSU",
          "normalized": "Vector Bool-\u003eUSegd-\u003eVector a-\u003eUSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "Vector Bool-\u003eUSegd-\u003eVector a-\u003eUSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:combineSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy segments from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, concatenating them into a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "extractsFromNestedUSSegd",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Vector (Vector a) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Extracts.html#extractsFromNestedUSSegd",
          "type": "function"
        },
        "index": {
          "description": "Copy segments from Vectors concatenating them into new array",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "extractsFromNestedUSSegd",
          "normalized": "USSegd-\u003eVector(Vector a)-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From Nested USSegd",
          "signature": "USSegd-\u003eVector(Vector a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:extractsFromNestedUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy segments from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, concatenating them into a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "extractsFromVectorsUSSegd",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Extracts.html#extractsFromVectorsUSSegd",
          "type": "function"
        },
        "index": {
          "description": "Copy segments from Vectors concatenating them into new array",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "extractsFromVectorsUSSegd",
          "normalized": "USSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From Vectors USSegd",
          "signature": "USSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:extractsFromVectorsUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy segments from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, concatenating them into a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "extractsFromVectorsUVSegd",
          "package": "dph-prim-seq",
          "signature": "UVSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Extracts.html#extractsFromVectorsUVSegd",
          "type": "function"
        },
        "index": {
          "description": "Copy segments from Vectors concatenating them into new array",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "extractsFromVectorsUVSegd",
          "normalized": "UVSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From Vectors UVSegd",
          "signature": "UVSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:extractsFromVectorsUVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction with non-empty subarrays and an associative\n   combination function. For scattered segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "fold1SSU",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e USSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#fold1SSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction with non-empty subarrays and an associative combination function For scattered segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "fold1SSU",
          "normalized": "(a-\u003ea-\u003ea)-\u003eUSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SSU",
          "signature": "(a-\u003ea-\u003ea)-\u003eUSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:fold1SSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction with non-empty subarrays and an associative\n   combination function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "fold1SU",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e USegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#fold1SU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction with non-empty subarrays and an associative combination function",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "fold1SU",
          "normalized": "(a-\u003ea-\u003ea)-\u003eUSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "(a-\u003ea-\u003ea)-\u003eUSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:fold1SU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction that requires an associative combination\n   function with its unit. For scattered segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldSSU",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e USSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldSSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction that requires an associative combination function with its unit For scattered segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldSSU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SSU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldSSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction that requires an associative combination\n   function with its unit\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldSU",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e USegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction that requires an associative combination function with its unit",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldSU",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction from left to right with non-empty subarrays only.\n   For scattered segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldl1SSU",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e USSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldl1SSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction from left to right with non-empty subarrays only For scattered segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldl1SSU",
          "normalized": "(a-\u003ea-\u003ea)-\u003eUSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SSU",
          "signature": "(a-\u003ea-\u003ea)-\u003eUSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldl1SSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction from left to right with non-empty subarrays only\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldl1SU",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e USegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldl1SU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction from left to right with non-empty subarrays only",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldl1SU",
          "normalized": "(a-\u003ea-\u003ea)-\u003eUSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "(a-\u003ea-\u003ea)-\u003eUSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldl1SU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular arrar reduction \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldlRU",
          "package": "dph-prim-seq",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Int -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldlRU",
          "type": "function"
        },
        "index": {
          "description": "Regular arrar reduction",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldlRU",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eInt-\u003eVector b-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "RU",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eInt-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldlRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction proceeding from the left.\n   For scattered segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldlSSU",
          "package": "dph-prim-seq",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e USSegd -\u003e Vectors a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldlSSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction proceeding from the left For scattered segments",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldlSSU",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eUSSegd-\u003eVectors b-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SSU",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eUSSegd-\u003eVectors a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldlSSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented array reduction proceeding from the left\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldlSU",
          "package": "dph-prim-seq",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e USegd -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Combinators.html#foldlSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented array reduction proceeding from the left",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "foldlSU",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eUSegd-\u003eVector b-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eUSegd-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:foldlSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup elements from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indexsFromVector",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vector Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Extracts.html#indexsFromVector",
          "type": "function"
        },
        "index": {
          "description": "Lookup elements from Vector",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indexsFromVector",
          "normalized": "Vector a-\u003eVector Int-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From Vector",
          "signature": "Vector a-\u003eVector Int-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:indexsFromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup elements from some \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e through a \u003ccode\u003eUPVSegd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indexsFromVectorsUVSegd",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e UVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Extracts.html#indexsFromVectorsUVSegd",
          "type": "function"
        },
        "index": {
          "description": "Lookup elements from some Vectors through UPVSegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indexsFromVectorsUVSegd",
          "normalized": "Vectors a-\u003eUVSegd-\u003eVector(Int,Int)-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "From Vectors UVSegd",
          "signature": "Vectors a-\u003eUVSegd-\u003eVector(Int,Int)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:indexsFromVectorsUVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indicesSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Basics.html#indicesSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented indices",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indicesSU",
          "normalized": "USegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:indicesSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indicesSU'",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e USegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Basics.html#indicesSU%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "indicesSU'",
          "normalized": "Int-\u003eUSegd-\u003eVector Int",
          "package": "dph-prim-seq",
          "partial": "SU'",
          "signature": "Int-\u003eUSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:indicesSU-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the maximum element in each subarray\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "maximumSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#maximumSU",
          "type": "function"
        },
        "index": {
          "description": "Determine the maximum element in each subarray",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "maximumSU",
          "normalized": "USegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:maximumSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the minimum element in each subarray\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "minimumSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#minimumSU",
          "type": "function"
        },
        "index": {
          "description": "Determine the minimum element in each subarray",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "minimumSU",
          "normalized": "USegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:minimumSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the boolean OR of all segments in a segmented array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "orSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector Bool -\u003e Vector Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#orSU",
          "type": "function"
        },
        "index": {
          "description": "Compute the boolean OR of all segments in segmented array",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "orSU",
          "normalized": "USegd-\u003eVector Bool-\u003eVector Bool",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector Bool-\u003eVector Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:orSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the segmented product of an array of numerals\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "productSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#productSU",
          "type": "function"
        },
        "index": {
          "description": "Compute the segmented product of an array of numerals",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "productSU",
          "normalized": "USegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:productSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular sgemented replicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "replicateRSU",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Basics.html#replicateRSU",
          "type": "function"
        },
        "index": {
          "description": "Regular sgemented replicate",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "replicateRSU",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "RSU",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:replicateRSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented replicate of a vector based on the lengths of the segments\n   of the provided \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "replicateSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Basics.html#replicateSU",
          "type": "function"
        },
        "index": {
          "description": "Segmented replicate of vector based on the lengths of the segments of the provided USegd",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "replicateSU",
          "normalized": "USegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:replicateSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the segmented sum of an array of numerals\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "sumRU",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#sumRU",
          "type": "function"
        },
        "index": {
          "description": "Compute the segmented sum of an array of numerals",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "sumRU",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "RU",
          "signature": "Int-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:sumRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the segmented sum of an array of numerals\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "sumSU",
          "package": "dph-prim-seq",
          "signature": "USegd -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Sequential-Sums.html#sumSU",
          "type": "function"
        },
        "index": {
          "description": "Compute the segmented sum of an array of numerals",
          "hierarchy": "Data Array Parallel Unlifted Sequential",
          "module": "Data.Array.Parallel.Unlifted.Sequential",
          "name": "sumSU",
          "normalized": "USegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "SU",
          "signature": "USegd-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Sequential.html#v:sumSU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "Stream",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "Stream",
          "package": "dph-prim-seq",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented Strem append. Append corresponding segments from each stream.\n\u003c/p\u003e\u003cpre\u003e\n appendSS [2, 1, 3] [10, 20, 30, 40, 50, 60]\n          [1, 3, 2] [11, 22, 33, 44, 55, 66]\n  = [10,20,11,30,22,33,44,40,50,60,55,66]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "appendSS",
          "package": "dph-prim-seq",
          "signature": "Stream Int-\u003e Stream a-\u003e Stream Int-\u003e Stream a-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Segmented Strem append Append corresponding segments from each stream appendSS",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "appendSS",
          "normalized": "Stream Int-\u003eStream a-\u003eStream Int-\u003eStream a-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "SS",
          "signature": "Stream Int-\u003eStream a-\u003eStream Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:appendSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two streams, using a tag stream to tell us which of the data\n   streams to take the next element from.\n\u003c/p\u003e\u003cp\u003eIf there are insufficient elements in the data strams for the provided\n   tag stream then \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n combine2ByTag [0,1,1,0,0,1] [1,2,3] [4,5,6]\n  = [1,4,5,2,3,6]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "combine2ByTagS",
          "package": "dph-prim-seq",
          "signature": "Stream Tag -\u003e Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#combine2ByTagS",
          "type": "function"
        },
        "index": {
          "description": "Combine two streams using tag stream to tell us which of the data streams to take the next element from If there are insufficient elements in the data strams for the provided tag stream then error combine2ByTag",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "combine2ByTagS",
          "normalized": "Stream Tag-\u003eStream a-\u003eStream a-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "By Tag",
          "signature": "Stream Tag-\u003eStream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:combine2ByTagS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented Stream combine. Like \u003ccode\u003e\u003ca\u003ecombine2ByTagS\u003c/a\u003e\u003c/code\u003e, except that the tags select\n   entire segments of each data stream, instead of selecting one element at a time.\n\u003c/p\u003e\u003cpre\u003e\n combineSS [True, True, False, True, False, False]\n           [2,1,3] [10,20,30,40,50,60]\n           [1,2,3] [11,22,33,44,55,66]\n  = [10,20,30,11,40,50,60,22,33,44,55,66]\n\u003c/pre\u003e\u003cp\u003eThis says take two elements from the first stream, then another one element \n   from the first stream, then one element from the second stream, then three\n   elements from the first stream...\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "combineSS",
          "package": "dph-prim-seq",
          "signature": "Stream Bool-\u003e Stream Int-\u003e Stream a-\u003e Stream Int-\u003e Stream a-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Segmented Stream combine Like combine2ByTagS except that the tags select entire segments of each data stream instead of selecting one element at time combineSS True True False True False False This says take two elements from the first stream then another one element from the first stream then one element from the second stream then three elements from the first stream",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "combineSS",
          "normalized": "Stream Bool-\u003eStream Int-\u003eStream a-\u003eStream Int-\u003eStream a-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "SS",
          "signature": "Stream Bool-\u003eStream Int-\u003eStream a-\u003eStream Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:combineSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stream of integer ranges. The triples in the input stream\n   give the first value, increment, length of each range.\n\u003c/p\u003e\u003cp\u003eThe first parameter gives the size hint for the resulting stream.\n\u003c/p\u003e\u003cpre\u003e\n enumFromStepLenEach [(1,1,5), (10,2,4), (20,3,5)]\n  = [1,2,3,4,5,10,12,14,16,20,23,26,29,32]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "enumFromStepLenEachS",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Stream (Int, Int, Int) -\u003e Stream Int",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#enumFromStepLenEachS",
          "type": "function"
        },
        "index": {
          "description": "Create stream of integer ranges The triples in the input stream give the first value increment length of each range The first parameter gives the size hint for the resulting stream enumFromStepLenEach",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "enumFromStepLenEachS",
          "normalized": "Int-\u003eStream(Int,Int,Int)-\u003eStream Int",
          "package": "dph-prim-seq",
          "partial": "From Step Len Each",
          "signature": "Int-\u003eStream(Int,Int,Int)-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:enumFromStepLenEachS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a stream of integer ranges. The pairs in the input stream\n   give the first and last value of each range.\n\u003c/p\u003e\u003cp\u003eThe first parameter gives the size hint for the resulting stream.\n\u003c/p\u003e\u003cpre\u003e\n enumFromToEach 11 [(2,5), (10,16), (20,22)]\n  = [2,3,4,5,10,11,12,13,14,15,16,20,21,22]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "enumFromToEachS",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Stream (Int, Int) -\u003e Stream Int",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#enumFromToEachS",
          "type": "function"
        },
        "index": {
          "description": "Create stream of integer ranges The pairs in the input stream give the first and last value of each range The first parameter gives the size hint for the resulting stream enumFromToEach",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "enumFromToEachS",
          "normalized": "Int-\u003eStream(Int,Int)-\u003eStream Int",
          "package": "dph-prim-seq",
          "partial": "From To Each",
          "signature": "Int-\u003eStream(Int,Int)-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:enumFromToEachS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldSS\u003c/a\u003e\u003c/code\u003e, but use the first member of each chunk as the initial\n   element for the fold.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "fold1SS",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Stream Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#fold1SS",
          "type": "function"
        },
        "index": {
          "description": "Like foldSS but use the first member of each chunk as the initial element for the fold",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "fold1SS",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStream Int-\u003eStream a-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "SS",
          "signature": "(a-\u003ea-\u003ea)-\u003eStream Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:fold1SS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented Stream fold. Take segments from the given stream and fold each\n   using the supplied function and initial element. \n\u003c/p\u003e\u003cpre\u003e\n foldSS (+) 0 [2, 3, 2] [10, 20, 30, 40, 50, 60, 70]\n  = [30,120,130]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "foldSS",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e a)-\u003e a-\u003e Stream Int-\u003e Stream b-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Segmented Stream fold Take segments from the given stream and fold each using the supplied function and initial element foldSS",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "foldSS",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream Int-\u003eStream b-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "SS",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream Int-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:foldSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented Stream fold, with a fixed segment length.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldSS\u003c/a\u003e\u003c/code\u003e but use a fixed length for each segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "foldValuesR",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e a)-\u003e a-\u003e Int-\u003e Stream b-\u003e Stream a",
          "type": "function"
        },
        "index": {
          "description": "Segmented Stream fold with fixed segment length Like foldSS but use fixed length for each segment",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "foldValuesR",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eInt-\u003eStream b-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "Values",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eInt-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:foldValuesR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag each element of an stream with its index in that stream.\n\u003c/p\u003e\u003cpre\u003e\n indexed [42,93,13]\n  = [(0,42), (1,93), (2,13)]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "indexedS",
          "package": "dph-prim-seq",
          "signature": "Stream a -\u003e Stream (Int, a)",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#indexedS",
          "type": "function"
        },
        "index": {
          "description": "Tag each element of an stream with its index in that stream indexed",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "indexedS",
          "normalized": "Stream a-\u003eStream(Int,a)",
          "package": "dph-prim-seq",
          "signature": "Stream a-\u003eStream(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:indexedS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented Stream indices.\n\u003c/p\u003e\u003cpre\u003e\n indicesSS 15 4 [3, 5, 7]\n  = [4,5,6,0,1,2,3,4,0,1,2,3,4,5,6]\n\u003c/pre\u003e\u003cp\u003eNote that we can set the starting value of the first segment independently\n via the second argument of indicesSS. We use this when distributing arrays\n across worker threads, as a thread's chunk may not start exactly at a \n segment boundary, so the index of a thread's first data element may not be\n zero.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "indicesSS",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Int -\u003e Stream Int -\u003e Stream Int",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#indicesSS",
          "type": "function"
        },
        "index": {
          "description": "Segmented Stream indices indicesSS Note that we can set the starting value of the first segment independently via the second argument of indicesSS We use this when distributing arrays across worker threads as thread chunk may not start exactly at segment boundary so the index of thread first data element may not be zero",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "indicesSS",
          "normalized": "Int-\u003eInt-\u003eStream Int-\u003eStream Int",
          "package": "dph-prim-seq",
          "partial": "SS",
          "signature": "Int-\u003eInt-\u003eStream Int-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:indicesSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave the elements of two streams. We alternate between the first\n   and second streams, stopping when we can't find a matching element.\n\u003c/p\u003e\u003cpre\u003e\n interleave [2,3,4] [10,20,30] = [2,10,3,20,4,30]\n interleave [2,3]   [10,20,30] = [2,10,3,20]\n interleave [2,3,4] [10,20]    = [2,10,3,20,4]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "interleaveS",
          "package": "dph-prim-seq",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#interleaveS",
          "type": "function"
        },
        "index": {
          "description": "Interleave the elements of two streams We alternate between the first and second streams stopping when we can find matching element interleave interleave interleave",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "interleaveS",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "dph-prim-seq",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:interleaveS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat each element in the stream the given number of times.\n\u003c/p\u003e\u003cpre\u003e\n replicateEach 2 [10,20,30]\n  = [10,10,20,20,30,30]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "replicateEachRS",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#replicateEachRS",
          "type": "function"
        },
        "index": {
          "description": "Repeat each element in the stream the given number of times replicateEach",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "replicateEachRS",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "Each RS",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:replicateEachRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a stream of pairs containing a count an an element,\n   replicate element the number of times given by the count.\n\u003c/p\u003e\u003cp\u003eThe first parameter sets the size hint of the resulting stream.\n\u003c/p\u003e\u003cpre\u003e\n replicateEach 10 [(2,10), (5,20), (3,30)]\n   = [10,10,20,20,20,20,20,30,30,30]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "replicateEachS",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Stream (Int, a) -\u003e Stream a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Segmented.html#replicateEachS",
          "type": "function"
        },
        "index": {
          "description": "Given stream of pairs containing count an an element replicate element the number of times given by the count The first parameter sets the size hint of the resulting stream replicateEach",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "replicateEachS",
          "normalized": "Int-\u003eStream(Int,a)-\u003eStream a",
          "package": "dph-prim-seq",
          "partial": "Each",
          "signature": "Int-\u003eStream(Int,a)-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:replicateEachS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a stream of indices, \n    look them up from a vector, \n    and produce a stream of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamElemsFromVector",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Stream m Int -\u003e Stream m a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Elems.html#streamElemsFromVector",
          "type": "function"
        },
        "index": {
          "description": "Take stream of indices look them up from vector and produce stream of elements",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamElemsFromVector",
          "normalized": "Vector a-\u003eStream b Int-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Elems From Vector",
          "signature": "Vector a-\u003eStream m Int-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamElemsFromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a stream of chunk and chunk element indices, \n    look them up from some vectors, \n    and produce a stream of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamElemsFromVectors",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Stream m (Int, Int) -\u003e Stream m a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Elems.html#streamElemsFromVectors",
          "type": "function"
        },
        "index": {
          "description": "Take stream of chunk and chunk element indices look them up from some vectors and produce stream of elements",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamElemsFromVectors",
          "normalized": "Vectors a-\u003eStream b(Int,Int)-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Elems From Vectors",
          "signature": "Vectors a-\u003eStream m(Int,Int)-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamElemsFromVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a stream of virtual segment ids and element indices, \n   pass them through a \u003ccode\u003e\u003ca\u003eUVSegd\u003c/a\u003e\u003c/code\u003e to get physical segment and element indices, \n   and produce a stream of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamElemsFromVectorsVSegd",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e UVSegd -\u003e Stream m (Int, Int) -\u003e Stream m a",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Elems.html#streamElemsFromVectorsVSegd",
          "type": "function"
        },
        "index": {
          "description": "Take stream of virtual segment ids and element indices pass them through UVSegd to get physical segment and element indices and produce stream of elements",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamElemsFromVectorsVSegd",
          "normalized": "Vectors a-\u003eUVSegd-\u003eStream b(Int,Int)-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Elems From Vectors VSegd",
          "signature": "Vectors a-\u003eUVSegd-\u003eStream m(Int,Int)-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamElemsFromVectorsVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream some physical segments from many data arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromNestedUSSegd",
          "package": "dph-prim-seq",
          "signature": "Vector (Vector a)-\u003e USSegd-\u003e Stream m a",
          "type": "function"
        },
        "index": {
          "description": "Stream some physical segments from many data arrays",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromNestedUSSegd",
          "normalized": "Vector(Vector a)-\u003eUSSegd-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Segs From Nested USSegd",
          "signature": "Vector(Vector a)-\u003eUSSegd-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSegsFromNestedUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream segments from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There must be at least one segment in the \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e, but this is not checked.\n\u003c/li\u003e\u003cli\u003e No bounds checking is done for the \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUSSegd",
          "package": "dph-prim-seq",
          "signature": "Vectors a-\u003e USSegd-\u003e Stream m a",
          "type": "function"
        },
        "index": {
          "description": "Stream segments from Vectors There must be at least one segment in the USSegd but this is not checked No bounds checking is done for the USSegd",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUSSegd",
          "normalized": "Vectors a-\u003eUSSegd-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Segs From Vectors USSegd",
          "signature": "Vectors a-\u003eUSSegd-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSegsFromVectorsUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUSSegdSegmap",
          "package": "dph-prim-seq",
          "signature": "Vectors a-\u003e USSegd-\u003e Vector Int-\u003e Stream m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUSSegdSegmap",
          "normalized": "Vectors a-\u003eUSSegd-\u003eVector Int-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Segs From Vectors USSegd Segmap",
          "signature": "Vectors a-\u003eUSSegd-\u003eVector Int-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSegsFromVectorsUSSegdSegmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUSSegd_split",
          "package": "dph-prim-seq",
          "signature": "Vectors a-\u003e USSegd-\u003e Vector Int-\u003e ((USegd, Int), Int)-\u003e Stream m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUSSegd_split",
          "normalized": "Vectors a-\u003eUSSegd-\u003eVector Int-\u003e((USegd,Int),Int)-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Segs From Vectors USSegd",
          "signature": "Vectors a-\u003eUSSegd-\u003eVector Int-\u003e((USegd,Int),Int)-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSegsFromVectorsUSSegd_split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream segments from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There must be at least one segment in the \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e, but this is not checked.\n\u003c/li\u003e\u003cli\u003e No bounds checking is done for the \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUVSegd",
          "package": "dph-prim-seq",
          "signature": "Vectors a-\u003e UVSegd-\u003e Stream m a",
          "type": "function"
        },
        "index": {
          "description": "Stream segments from Vectors There must be at least one segment in the USSegd but this is not checked No bounds checking is done for the USSegd",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSegsFromVectorsUVSegd",
          "normalized": "Vectors a-\u003eUVSegd-\u003eStream b a",
          "package": "dph-prim-seq",
          "partial": "Segs From Vectors UVSegd",
          "signature": "Vectors a-\u003eUVSegd-\u003eStream m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSegsFromVectorsUVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a stream of segment and segment element indices,\n   and convert it to a stream of chunk and chunk element indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSrcIxsThroughUSSegd",
          "package": "dph-prim-seq",
          "signature": "USSegd -\u003e Stream m (Int, Int) -\u003e Stream m (Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Ixs.html#streamSrcIxsThroughUSSegd",
          "type": "function"
        },
        "index": {
          "description": "Take stream of segment and segment element indices and convert it to stream of chunk and chunk element indices",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSrcIxsThroughUSSegd",
          "normalized": "USSegd-\u003eStream a(Int,Int)-\u003eStream a(Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Src Ixs Through USSegd",
          "signature": "USSegd-\u003eStream m(Int,Int)-\u003eStream m(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSrcIxsThroughUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a stream of virtual segment and segment element indices,\n   and convert it to a stream of physical segment and segment element indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSrcIxsThroughVSegids",
          "package": "dph-prim-seq",
          "signature": "Vector Int -\u003e Stream m (Int, Int) -\u003e Stream m (Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Stream-Ixs.html#streamSrcIxsThroughVSegids",
          "type": "function"
        },
        "index": {
          "description": "Take stream of virtual segment and segment element indices and convert it to stream of physical segment and segment element indices",
          "hierarchy": "Data Array Parallel Unlifted Stream",
          "module": "Data.Array.Parallel.Unlifted.Stream",
          "name": "streamSrcIxsThroughVSegids",
          "normalized": "Vector Int-\u003eStream a(Int,Int)-\u003eStream a(Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Src Ixs Through VSegids",
          "signature": "Vector Int-\u003eStream m(Int,Int)-\u003eStream m(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Stream.html#v:streamSrcIxsThroughVSegids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIrregular two dimensional arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Vectors",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html",
          "type": "module"
        },
        "index": {
          "description": "Irregular two dimensional arrays",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Vectors",
          "package": "dph-prim-seq",
          "partial": "Vectors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of element types that can be used in a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Unboxes",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#Unboxes",
          "type": "class"
        },
        "index": {
          "description": "Class of element types that can be used in Vectors",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Unboxes",
          "package": "dph-prim-seq",
          "partial": "Unboxes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#t:Unboxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2-dimensional array,\n   where the inner arrays can all have different lengths.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Vectors",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#Vectors",
          "type": "data"
        },
        "index": {
          "description": "dimensional array where the inner arrays can all have different lengths",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Vectors",
          "package": "dph-prim-seq",
          "partial": "Vectors",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#t:Vectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Vectors",
          "package": "dph-prim-seq",
          "signature": "Vectors !Int !ByteArray !ByteArray !(ArrayArray ByteArray)",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#Vectors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "Vectors",
          "package": "dph-prim-seq",
          "partial": "Vectors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:Vectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppending two \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e uses work proportional to\n   the length of the outer arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "append",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Vectors a -\u003e Vectors a",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#append",
          "type": "function"
        },
        "index": {
          "description": "Appending two Vectors uses work proportional to the length of the outer arrays",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "append",
          "normalized": "Vectors a-\u003eVectors a-\u003eVectors a",
          "package": "dph-prim-seq",
          "signature": "Vectors a-\u003eVectors a-\u003eVectors a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an empty \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e with no arrays of no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "empty",
          "package": "dph-prim-seq",
          "signature": "Vectors a",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty Vectors with no arrays of no elements",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "empty",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boxed vector of unboxed vectors to a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "fromVector",
          "package": "dph-prim-seq",
          "signature": "Vector (Vector a) -\u003e Vectors a",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Convert boxed vector of unboxed vectors to Vectors",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "fromVector",
          "normalized": "Vector(Vector a)-\u003eVectors a",
          "package": "dph-prim-seq",
          "partial": "Vector",
          "signature": "Vector(Vector a)-\u003eVectors a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake one of the outer vectors from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, with bounds checking\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "index",
          "package": "dph-prim-seq",
          "signature": "String-\u003e Vectors a-\u003e Int-\u003e Vector a",
          "type": "function"
        },
        "index": {
          "description": "Take one of the outer vectors from Vectors with bounds checking",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "index",
          "normalized": "String-\u003eVectors a-\u003eInt-\u003eVector a",
          "package": "dph-prim-seq",
          "signature": "String-\u003eVectors a-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a single element from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, \n   given the outer and inner indices, with bounds checking.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "index2",
          "package": "dph-prim-seq",
          "signature": "String-\u003e Vectors a-\u003e Int-\u003e Int-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Retrieve single element from Vectors given the outer and inner indices with bounds checking",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "index2",
          "normalized": "String-\u003eVectors a-\u003eInt-\u003eInt-\u003ea",
          "package": "dph-prim-seq",
          "signature": "String-\u003eVectors a-\u003eInt-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:index2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the number of vectors in a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "length",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of vectors in Vectors",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "length",
          "normalized": "Vectors a-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "Vectors a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e containing data from a single unboxed array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "singleton",
          "package": "dph-prim-seq",
          "signature": "Vector a -\u003e Vectors a",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct Vectors containing data from single unboxed array",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "singleton",
          "normalized": "Vector a-\u003eVectors a",
          "package": "dph-prim-seq",
          "signature": "Vector a-\u003eVectors a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e to a boxed vector of unboxed vectors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "toVector",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Vector (Vector a)",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "Convert Vectors to boxed vector of unboxed vectors",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "toVector",
          "normalized": "Vectors a-\u003eVector(Vector a)",
          "package": "dph-prim-seq",
          "partial": "Vector",
          "signature": "Vectors a-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake one of the outer vectors from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "unsafeIndex",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#unsafeIndex",
          "type": "function"
        },
        "index": {
          "description": "Take one of the outer vectors from Vectors",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "unsafeIndex",
          "normalized": "Vectors a-\u003eInt-\u003eVector a",
          "package": "dph-prim-seq",
          "partial": "Index",
          "signature": "Vectors a-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a single element from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, \n   given the outer and inner indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "unsafeIndex2",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Int -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#unsafeIndex2",
          "type": "function"
        },
        "index": {
          "description": "Retrieve single element from Vectors given the outer and inner indices",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "unsafeIndex2",
          "normalized": "Vectors a-\u003eInt-\u003eInt-\u003ea",
          "package": "dph-prim-seq",
          "partial": "Index",
          "signature": "Vectors a-\u003eInt-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:unsafeIndex2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve an inner array from a \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e, returning the array data, \n   starting index in the data, and vector length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "unsafeIndexUnpack",
          "package": "dph-prim-seq",
          "signature": "Vectors a -\u003e Int -\u003e (ByteArray, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Vectors.html#unsafeIndexUnpack",
          "type": "function"
        },
        "index": {
          "description": "Retrieve an inner array from Vectors returning the array data starting index in the data and vector length",
          "hierarchy": "Data Array Parallel Unlifted Vectors",
          "module": "Data.Array.Parallel.Unlifted.Vectors",
          "name": "unsafeIndexUnpack",
          "normalized": "Vectors a-\u003eInt-\u003e(ByteArray,Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Index Unpack",
          "signature": "Vectors a-\u003eInt-\u003e(ByteArray,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted-Vectors.html#v:unsafeIndexUnpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSequential implementation of the segmented array API defined in \n   \u003ccode\u003edph-prim-interface\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eThere is a parallel implementation in \u003ccode\u003edph-prim-par\u003c/code\u003e, \n   so you probably want that instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Unlifted",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html",
          "type": "module"
        },
        "index": {
          "description": "Sequential implementation of the segmented array API defined in dph-prim-interface There is parallel implementation in dph-prim-par so you probably want that instead",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Unlifted",
          "package": "dph-prim-seq",
          "partial": "Unlifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays are stored as unboxed vectors. \n   They have bulk-strict semantics, so demanding one element demands them all.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Array",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#Array",
          "type": "type"
        },
        "index": {
          "description": "Arrays are stored as unboxed vectors They have bulk-strict semantics so demanding one element demands them all",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Array",
          "package": "dph-prim-seq",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Arrays",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#Arrays",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Arrays",
          "package": "dph-prim-seq",
          "partial": "Arrays",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:Arrays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elt",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#Elt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elt",
          "package": "dph-prim-seq",
          "partial": "Elt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:Elt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elts",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#Elts",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elts",
          "package": "dph-prim-seq",
          "partial": "Elts",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:Elts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "IOElt",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#IOElt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "IOElt",
          "package": "dph-prim-seq",
          "partial": "IOElt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:IOElt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SSegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#SSegd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:SSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Segd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#Segd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Segd",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:Segd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Sel2",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#Sel2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Sel2",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:Sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SelRep2",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#SelRep2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SelRep2",
          "package": "dph-prim-seq",
          "partial": "Sel Rep",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:SelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "VSegd",
          "package": "dph-prim-seq",
          "source": "src/Data-Array-Parallel-Unlifted.html#VSegd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "VSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#t:VSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Append two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "(+:+)",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#%2B%3A%2B",
          "type": "function"
        },
        "index": {
          "description": "length result Append two arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "(+:+) +:+",
          "normalized": "Array a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:-43-:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length source). Compute the conjunction of all elements in a boolean array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "and",
          "package": "dph-prim-seq",
          "signature": "Array Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#and",
          "type": "function"
        },
        "index": {
          "description": "length source Compute the conjunction of all elements in boolean array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "and",
          "normalized": "Array Bool-\u003eBool",
          "package": "dph-prim-seq",
          "signature": "Array Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a segment descriptor that describes the result of appending two\n   segmented arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Int -\u003e SSegd -\u003e Int -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#appendSSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce segment descriptor that describes the result of appending two segmented arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendSSegd",
          "normalized": "SSegd-\u003eInt-\u003eSSegd-\u003eInt-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd",
          "signature": "SSegd-\u003eInt-\u003eSSegd-\u003eInt-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:appendSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a virtual segment descriptor that describes the result of \n   appending two segmented arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd-\u003e Int-\u003e VSegd-\u003e Int-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce virtual segment descriptor that describes the result of appending two segmented arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendVSegd",
          "normalized": "VSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "signature": "VSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:appendVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Segmented append.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_s",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003e Segd-\u003e Array a-\u003e Segd-\u003e Array a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Segmented append",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_s",
          "normalized": "Segd-\u003eSegd-\u003eArray a-\u003eSegd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003eSegd-\u003eArray a-\u003eSegd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:append_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_vs",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003e VSegd-\u003e Arrays a-\u003e VSegd-\u003e Arrays a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_vs",
          "normalized": "Segd-\u003eVSegd-\u003eArrays a-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003eVSegd-\u003eArrays a-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:append_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Append two \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, using work proportional to the length\n         of the outer array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appends",
          "package": "dph-prim-seq",
          "signature": "Arrays a -\u003e Arrays a -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#appends",
          "type": "function"
        },
        "index": {
          "description": "Append two Arrays using work proportional to the length of the outer array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appends",
          "normalized": "Arrays a-\u003eArrays a-\u003eArrays a",
          "package": "dph-prim-seq",
          "signature": "Arrays a-\u003eArrays a-\u003eArrays a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:appends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Backwards permutation of array elements.\n\u003c/p\u003e\u003cpre\u003ebpermute [50, 60, 20, 30] [0, 3, 2] = [50, 30, 20]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermute",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003e Array Int-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Backwards permutation of array elements bpermute",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermute",
          "normalized": "Array a-\u003eArray Int-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray Int-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:bpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault backwards permutation.\n\u003c/p\u003e\u003cp\u003eThe values of the index-value pairs are written into the position in the\n   result array that is indicated by the corresponding index.\n\u003c/p\u003e\u003cp\u003eAll positions not covered by the index-value pairs will have the value\n   determined by the initialiser function for that index position.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermuteDft",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e (Int -\u003e e) -\u003e Array (Int, e) -\u003e Array e",
          "source": "src/Data-Array-Parallel-Unlifted.html#bpermuteDft",
          "type": "function"
        },
        "index": {
          "description": "Default backwards permutation The values of the index-value pairs are written into the position in the result array that is indicated by the corresponding index All positions not covered by the index-value pairs will have the value determined by the initialiser function for that index position",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermuteDft",
          "normalized": "Int-\u003e(Int-\u003ea)-\u003eArray(Int,a)-\u003eArray a",
          "package": "dph-prim-seq",
          "partial": "Dft",
          "signature": "Int-\u003e(Int-\u003ee)-\u003eArray(Int,e)-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:bpermuteDft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two arrays, \n    using a flags array to tell us where to get each element from.\n\u003c/p\u003e\u003cpre\u003ecombine [T, F, F, T, T, F] [1, 2, 3] [4, 5, 6] = [1, 4, 5, 2, 3, 6]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine",
          "package": "dph-prim-seq",
          "signature": "Array Bool -\u003e Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two arrays using flags array to tell us where to get each element from combine",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine",
          "normalized": "Array Bool-\u003eArray a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array Bool-\u003eArray a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e, but use a precomputed selector to speed up the process.\n\u003c/p\u003e\u003cp\u003eSee the description of \u003ccode\u003e\u003ca\u003emkSel2\u003c/a\u003e\u003c/code\u003e for how this works.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2",
          "package": "dph-prim-seq",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#combine2",
          "type": "function"
        },
        "index": {
          "description": "Like combine but use precomputed selector to speed up the process See the description of mkSel2 for how this works",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2",
          "normalized": "Array Tag-\u003eSelRep-\u003eArray a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array Tag-\u003eSelRep-\u003eArray a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:combine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two virtual segment descriptors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2VSegd",
          "package": "dph-prim-seq",
          "signature": "Sel2-\u003e VSegd-\u003e Int-\u003e VSegd-\u003e Int-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "Combine two virtual segment descriptors",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2VSegd",
          "normalized": "Sel-\u003eVSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "signature": "Sel-\u003eVSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:combine2VSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of elements in array that are equal to the given value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count the number of elements in array that are equal to the given value",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count",
          "normalized": "Array a-\u003ea-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003ea-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented count.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_s",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Array a -\u003e a -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#count_s",
          "type": "function"
        },
        "index": {
          "description": "Segmented count",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_s",
          "normalized": "Segd-\u003eArray a-\u003ea-\u003eArray Int",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003eArray a-\u003ea-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:count_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScattered segmented count.\n\u003c/p\u003e\u003cp\u003eNOTE: This is a transitory interface, and will be removed in future versions.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_ss",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Vector (Array a) -\u003e a -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#count_ss",
          "type": "function"
        },
        "index": {
          "description": "Scattered segmented count NOTE This is transitory interface and will be removed in future versions",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_ss",
          "normalized": "SSegd-\u003eVector(Array a)-\u003ea-\u003eArray Int",
          "package": "dph-prim-seq",
          "signature": "SSegd-\u003eVector(Array a)-\u003ea-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:count_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Drop elements from the front of an array, \n         returning the latter portion.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "drop",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#drop",
          "type": "function"
        },
        "index": {
          "description": "length result Drop elements from the front of an array returning the latter portion",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "drop",
          "normalized": "Int-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the total number of elements defined by a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the total number of elements defined by Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSegd",
          "normalized": "Segd-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Segd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:elementsSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements that will be taken from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_0",
          "package": "dph-prim-seq",
          "signature": "Sel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSel2_0",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements that will be taken from the first array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_0",
          "normalized": "Sel-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "signature": "Sel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:elementsSel2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements that will be taken from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_1",
          "package": "dph-prim-seq",
          "signature": "Sel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSel2_1",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements that will be taken from the second array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_1",
          "normalized": "Sel-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "signature": "Sel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:elementsSel2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements to take from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_0",
          "package": "dph-prim-seq",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSelRep2_0",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements to take from the first array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_0",
          "normalized": "Array Tag-\u003eSelRep-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:elementsSelRep2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements to take from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_1",
          "package": "dph-prim-seq",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSelRep2_1",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements to take from the second array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_1",
          "normalized": "Array Tag-\u003eSelRep-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:elementsSelRep2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an array with no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "empty",
          "package": "dph-prim-seq",
          "signature": "Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an array with no elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "empty",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptySSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:emptySSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySegd",
          "package": "dph-prim-seq",
          "signature": "Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptySegd",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySegd",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:emptySegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptyVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptyVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptyVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:emptyVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e with no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptys",
          "package": "dph-prim-seq",
          "signature": "Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptys",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty Arrays with no elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptys",
          "package": "dph-prim-seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:emptys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLen",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromStepLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLen",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "From Step Len",
          "signature": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:enumFromStepLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLenEach",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Array Int -\u003e Array Int -\u003e Array Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromStepLenEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLenEach",
          "normalized": "Int-\u003eArray Int-\u003eArray Int-\u003eArray Int-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "From Step Len Each",
          "signature": "Int-\u003eArray Int-\u003eArray Int-\u003eArray Int-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:enumFromStepLenEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromThenTo",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromThenTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromThenTo",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "From Then To",
          "signature": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromTo",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromTo",
          "normalized": "Int-\u003eInt-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "From To",
          "signature": "Int-\u003eInt-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract a subrange of elements from an array.\n\u003c/p\u003e\u003cpre\u003eextract [23, 42, 93, 50, 27] 1 3  = [42, 93, 50]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extract",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003e Int-\u003e Int-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Extract subrange of elements from an array extract",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extract",
          "normalized": "Array a-\u003eInt-\u003eInt-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eInt-\u003eInt-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtract all the segments defined by the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e,\n   returning them concatenated in a fresh \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_ass",
          "package": "dph-prim-seq",
          "signature": "SSegd-\u003e Arrays a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Extract segments defined by SSegd Extract all the segments defined by the SSegd from the Arrays returning them concatenated in fresh Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_ass",
          "normalized": "SSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "SSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:extracts_ass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtract all the segments defined by the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e,\n   returning them concatenated in a fresh \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_avs",
          "package": "dph-prim-seq",
          "signature": "VSegd-\u003e Arrays a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Extract segments defined by VSegd Extract all the segments defined by the VSegd from the Arrays returning them concatenated in fresh Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_avs",
          "normalized": "VSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "VSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:extracts_avs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e from a vector of arrays.\n\u003c/p\u003e\u003cp\u003eNOTE: This is a transitory interface, and will be removed in future versions.\n         Use \u003ccode\u003e\u003ca\u003eextracts_ass\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_nss",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Vector (Array a) -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#extracts_nss",
          "type": "function"
        },
        "index": {
          "description": "length result Extract segments defined by SSegd from vector of arrays NOTE This is transitory interface and will be removed in future versions Use extracts ass instead",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_nss",
          "normalized": "SSegd-\u003eVector(Array a)-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "SSegd-\u003eVector(Array a)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:extracts_nss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements from an array that match the given predicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "filter",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e Bool) -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements from an array that match the given predicate",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold over an array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Undirected fold over an array The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold, using the first element to initialise the state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003cli\u003e If the array contains no elements then you'll get a bounds check \u003ccode\u003eerror\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Array a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1",
          "type": "function"
        },
        "index": {
          "description": "Undirected fold using the first element to initialise the state The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt If the array contains no elements then you ll get bounds check error",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eArray a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_s\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to initialise\n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_s",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1_s",
          "type": "function"
        },
        "index": {
          "description": "Like fold but using the first element of each segment to initialise the state of that segment Same preconditions as fold1",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_s",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSegd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eSegd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold1_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_ss\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to intialise \n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_ss",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e SSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1_ss",
          "type": "function"
        },
        "index": {
          "description": "Like fold ss but using the first element of each segment to intialise the state of that segment Same preconditions as fold1",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_ss",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold1_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_vs\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to initialise \n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_vs",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e VSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1_vs",
          "type": "function"
        },
        "index": {
          "description": "Like fold vs but using the first element of each segment to initialise the state of that segment Same preconditions as fold1",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_vs",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold1_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular segmented fold. \n\u003c/p\u003e\u003cp\u003eAll segements have the given length.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_r",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_r",
          "type": "function"
        },
        "index": {
          "description": "Regular segmented fold All segements have the given length Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_r",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected segmented fold. \n\u003c/p\u003e\u003cp\u003eAll segments are folded individually, and the result contains one\n   element for each segment. \n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_s",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_s",
          "type": "function"
        },
        "index": {
          "description": "Undirected segmented fold All segments are folded individually and the result contains one element for each segment Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_s",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eSegd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eSegd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected scattered segmented fold.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_s\u003c/a\u003e\u003c/code\u003e, but the segments can be scattered through an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_ss",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e SSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_ss",
          "type": "function"
        },
        "index": {
          "description": "Undirected scattered segmented fold Like fold but the segments can be scattered through an Arrays Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_ss",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold over virtual segments.\n\u003c/p\u003e\u003cp\u003eThe physical segments defined by the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e are folded individually, \n   and these results are replicated according to the virtual segment\n   id table of the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e. The result contains as many elements as there\n   virtual segments.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_vs",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e VSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_vs",
          "type": "function"
        },
        "index": {
          "description": "Undirected fold over virtual segments The physical segments defined by the VSegd are folded individually and these results are replicated according to the virtual segment id table of the VSegd The result contains as many elements as there virtual segments Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_vs",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fold_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of elements to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromList",
          "package": "dph-prim-seq",
          "signature": "[a] -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list of elements to an array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromList",
          "normalized": "[a]-\u003eArray a",
          "package": "dph-prim-seq",
          "partial": "List",
          "signature": "[a]-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(number of inner arrays). \n   Convert a boxed vector of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromVectors",
          "package": "dph-prim-seq",
          "signature": "Vector (Array a) -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fromVectors",
          "type": "function"
        },
        "index": {
          "description": "number of inner arrays Convert boxed vector of Array to an Arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromVectors",
          "normalized": "Vector(Array a)-\u003eArrays a",
          "package": "dph-prim-seq",
          "partial": "Vectors",
          "signature": "Vector(Array a)-\u003eArrays a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fromVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the first elements of an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fsts",
          "package": "dph-prim-seq",
          "signature": "Array (a, b) -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fsts",
          "type": "function"
        },
        "index": {
          "description": "Take the first elements of an array of pairs",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fsts",
          "normalized": "Array(a,b)-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array(a,b)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:fsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new array given its length and a function to compute each element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "generate",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e (Int -\u003e a) -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#generate",
          "type": "function"
        },
        "index": {
          "description": "Generate new array given its length and function to compute each element",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "generate",
          "normalized": "Int-\u003e(Int-\u003ea)-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003e(Int-\u003ea)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, segment index, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Int -\u003e (Int, Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted.html#getSegOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Get the length segment index starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfSSegd",
          "normalized": "SSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Seg Of SSegd",
          "signature": "SSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:getSegOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Int -\u003e (Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted.html#getSegOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Get the length starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfVSegd",
          "normalized": "VSegd-\u003eInt-\u003e(Int,Int,Int)",
          "package": "dph-prim-seq",
          "partial": "Seg Of VSegd",
          "signature": "VSegd-\u003eInt-\u003e(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:getSegOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an array from a file.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hGet",
          "package": "dph-prim-seq",
          "signature": "Handle -\u003e IO (Array a)",
          "source": "src/Data-Array-Parallel-Unlifted.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read an array from file",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hGet",
          "normalized": "Handle-\u003eIO(Array a)",
          "package": "dph-prim-seq",
          "partial": "Get",
          "signature": "Handle-\u003eIO(Array a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an array to a file.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hPut",
          "package": "dph-prim-seq",
          "signature": "Handle -\u003e Array a -\u003e IO ()",
          "source": "src/Data-Array-Parallel-Unlifted.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Write an array to file",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hPut",
          "normalized": "Handle-\u003eArray a-\u003eIO()",
          "package": "dph-prim-seq",
          "partial": "Put",
          "signature": "Handle-\u003eArray a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a numbered element from an array.\n\u003c/p\u003e\u003cp\u003eThe first argument gives a source-code location for out-of-bounds errors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "index",
          "package": "dph-prim-seq",
          "signature": "String -\u003e Array a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#index",
          "type": "function"
        },
        "index": {
          "description": "Retrieve numbered element from an array The first argument gives source-code location for out-of-bounds errors",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "index",
          "normalized": "String-\u003eArray a-\u003eInt-\u003ea",
          "package": "dph-prim-seq",
          "signature": "String-\u003eArray a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Tag each element of an array with its index.\n\u003c/p\u003e\u003cpre\u003eindexed [42, 93, 13] = [(0, 42), (1, 93), (2, 13)]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexed",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array (Int, a)",
          "source": "src/Data-Array-Parallel-Unlifted.html#indexed",
          "type": "function"
        },
        "index": {
          "description": "length result Tag each element of an array with its index indexed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexed",
          "normalized": "Array a-\u003eArray(Int,a)",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Scattered indexing from a single \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is an alias for \u003ccode\u003e\u003ca\u003ebpermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array Int -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#indexs",
          "type": "function"
        },
        "index": {
          "description": "length result Scattered indexing from single Array This is an alias for bpermute",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs",
          "normalized": "Array a-\u003eArray Int-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray Int-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indexs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Scattered indexing through a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe index array contains pairs of segment id and the index within that \n   segment. \n\u003c/p\u003e\u003cp\u003eWe use the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e to map the pairs to 2D indices within the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, \n   and return an array of the resulting elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs_avs",
          "package": "dph-prim-seq",
          "signature": "Arrays a-\u003e VSegd-\u003e Array (Int, Int)-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Scattered indexing through VSegd The index array contains pairs of segment id and the index within that segment We use the VSegd to map the pairs to indices within the Arrays and return an array of the resulting elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs_avs",
          "normalized": "Arrays a-\u003eVSegd-\u003eArray(Int,Int)-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Arrays a-\u003eVSegd-\u003eArray(Int,Int)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indexs_avs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the indices field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesOfSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the indices field of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indicesOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment starting indices of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment starting indices of Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSegd",
          "normalized": "Segd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Segd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indicesSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the indices array of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSel2",
          "package": "dph-prim-seq",
          "signature": "Sel2 -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesSel2",
          "type": "function"
        },
        "index": {
          "description": "Yield the indices array of selector",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSel2",
          "normalized": "Sel-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "signature": "Sel-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indicesSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the \u003ccode\u003eindices\u003c/code\u003e field from a \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSelRep2",
          "package": "dph-prim-seq",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesSelRep2",
          "type": "function"
        },
        "index": {
          "description": "Take the indices field from SelRep2",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSelRep2",
          "normalized": "Array Tag-\u003eSelRep-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indicesSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Segmented indices. \n\u003c/p\u003e\u003cp\u003eConstruct an array containing containing the segments defined by the\n   given \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEach segment will contain the elements \u003ccode\u003e[0..len-1]\u003c/code\u003e where \u003ccode\u003elen\u003c/code\u003e is the\n   length of that segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indices_s",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indices_s",
          "type": "function"
        },
        "index": {
          "description": "length result Segmented indices Construct an array containing containing the segments defined by the given Segd Each segment will contain the elements len-1 where len is the length of that segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indices_s",
          "normalized": "Segd-\u003eArray Int",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:indices_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave the elements of two arrays.\n\u003c/p\u003e\u003cpre\u003einterleave [1, 2, 3] [4, 5, 6] = [1, 4, 2, 5, 3, 6]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "interleave",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave the elements of two arrays interleave",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "interleave",
          "normalized": "Array a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). True when a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e has been constructed by promoting a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#isContiguousSSegd",
          "type": "function"
        },
        "index": {
          "description": "True when SSegd has been constructed by promoting SSegd In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousSSegd",
          "normalized": "SSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Contiguous SSegd",
          "signature": "SSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:isContiguousSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). If true then the \u003ccode\u003estarts\u003c/code\u003e field is identical to the \u003ccode\u003eindices\u003c/code\u003e field\n         and the sourceids are all 0s.\n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat array, and\n   consumers can avoid looking at the real starts and sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#isContiguousVSegd",
          "type": "function"
        },
        "index": {
          "description": "If true then the starts field is identical to the indices field and the sourceids are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousVSegd",
          "normalized": "VSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Contiguous VSegd",
          "signature": "VSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:isContiguousVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). If true then the segments are all unshared, and the \u003ccode\u003evsegids\u003c/code\u003e field \n         be just \u003ccode\u003e[0..len-1]\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eConsumers can check this field to avoid demanding the \u003ccode\u003evsegids\u003c/code\u003e field.\n   This can avoid the need for it to be constructed in the first place, \n   due to lazy evaluation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isManifestVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#isManifestVSegd",
          "type": "function"
        },
        "index": {
          "description": "If true then the segments are all unshared and the vsegids field be just len-1 Consumers can check this field to avoid demanding the vsegids field This can avoid the need for it to be constructed in the first place due to lazy evaluation",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isManifestVSegd",
          "normalized": "VSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Manifest VSegd",
          "signature": "VSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:isManifestVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements in an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "length",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements in an array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "length",
          "normalized": "Array a-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfSSegd",
          "normalized": "SSegd-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengthOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfVSegd",
          "normalized": "VSegd-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Of VSegd",
          "signature": "VSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengthOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthSegd",
          "normalized": "Segd-\u003eInt",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Segd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengthSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e in an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengths",
          "package": "dph-prim-seq",
          "signature": "Arrays a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengths",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of Array in an Arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengths",
          "normalized": "Arrays a-\u003eInt",
          "package": "dph-prim-seq",
          "signature": "Arrays a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsOfSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthsOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment lengths of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengthsOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthsSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment lengths of Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsSegd",
          "normalized": "Segd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Segd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengthsSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(max(segs, threads) . log segs). \n   Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e from an array of segment lengths.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsToSegd",
          "package": "dph-prim-seq",
          "signature": "Array Int -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthsToSegd",
          "type": "function"
        },
        "index": {
          "description": "max segs threads log segs Construct Segd from an array of segment lengths",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsToSegd",
          "normalized": "Array Int-\u003eSegd",
          "package": "dph-prim-seq",
          "partial": "To Segd",
          "signature": "Array Int-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:lengthsToSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to each element of an array, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "map",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b) -\u003e Array a -\u003e Array b",
          "source": "src/Data-Array-Parallel-Unlifted.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to each element of an array yielding new array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of map and bpermute.\n\u003c/p\u003e\u003cp\u003eThe advantage of using this combined version is that we don't need\n   to apply the parameter function to source elements that don't appear\n   in the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mbpermute",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b) -\u003e Array a -\u003e Array Int -\u003e Array b",
          "source": "src/Data-Array-Parallel-Unlifted.html#mbpermute",
          "type": "function"
        },
        "index": {
          "description": "Combination of map and bpermute The advantage of using this combined version is that we don need to apply the parameter function to source elements that don appear in the result",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mbpermute",
          "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray Int-\u003eArray b",
          "package": "dph-prim-seq",
          "signature": "(a-\u003eb)-\u003eArray a-\u003eArray Int-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:mbpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Scattered Segment Descriptor.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e is an extension of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e that that allows the segments to be\n   scattered through multiple flat arrays.\n\u003c/p\u003e\u003cp\u003eEach segment is associated with a source id that indicates what \n   flat array it is in, along with the starting index in that flat array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The segments need not cover the entire flat array.\n\u003c/li\u003e\u003cli\u003e Different segments may point to the same elements.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSSegd",
          "package": "dph-prim-seq",
          "signature": "Array Int-\u003e Array Int-\u003e Segd-\u003e SSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Scattered Segment Descriptor SSegd is an extension of Segd that that allows the segments to be scattered through multiple flat arrays Each segment is associated with source id that indicates what flat array it is in along with the starting index in that flat array The segments need not cover the entire flat array Different segments may point to the same elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSSegd",
          "normalized": "Array Int-\u003eArray Int-\u003eSegd-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd",
          "signature": "Array Int-\u003eArray Int-\u003eSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:mkSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(max(segs, threads) . log segs). Construct a segment descriptor.\n\u003c/p\u003e\u003cp\u003eA segment desciptor defines an irregular 2D array based on a flat, 1D array\n   of elements. The defined array is a nested array of segments, where every\n   segment covers some of the elements from the flat array. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The starting indices must be equal to \u003ccode\u003einit (scanl (+) 0 lengths)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e If you don't want to cover all the elements from the flat arrary then\n     use a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n   flat array data: [1 2 3 4 5 6 7 8]\n     (segmentation)  --- ----- - ---\n     segd  lengths: [2, 3, 1, 2]\n           indices: [0, 2, 5, 6]\n          elements: 8 \n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSegd",
          "package": "dph-prim-seq",
          "signature": "Array Int-\u003e Array Int-\u003e Int-\u003e Segd",
          "type": "function"
        },
        "index": {
          "description": "max segs threads log segs Construct segment descriptor segment desciptor defines an irregular array based on flat array of elements The defined array is nested array of segments where every segment covers some of the elements from the flat array The starting indices must be equal to init scanl lengths If you don want to cover all the elements from the flat arrary then use SSegd instead Example flat array data segmentation segd lengths indices elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSegd",
          "normalized": "Array Int-\u003eArray Int-\u003eInt-\u003eSegd",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Array Int-\u003eArray Int-\u003eInt-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:mkSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a selector.\n\u003c/p\u003e\u003cp\u003eA selector is a description of how to perform a \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e\u003cp\u003eSuppose we are evaluating the following expression:\n\u003c/p\u003e\u003cpre\u003ecombine [F,F,T,F,T,T] [1,2,3] [4,5,6] = [4,5,1,6,2,3]\u003c/pre\u003e\u003cp\u003eThis is difficult to parallelise. For each element in the result, the\n   source array we get this element from depends on the tag values associated\n   with all previous elements.\n\u003c/p\u003e\u003cp\u003eHowever, if we going to apply \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e several times with the same flags array, \n   we can precompute a selector that tells us where to get each element. \n   The selector contains the original flags, as well as the source index telling\n   us where to get each element for the result array.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003etagsToIndices2 [F,F,T,F,T,T]   -- tags\n             = [0,1,0,2,1,2]   -- indices\n\u003c/pre\u003e\u003cp\u003eThis says get the first element from index 0 in the second array, \n     then from index 1 in the second array,\n     then index 0 in the first array ...\n\u003c/p\u003e\u003cp\u003eThe selector then consists of both the \u003ccode\u003etag\u003c/code\u003e and \u003ccode\u003eindices\u003c/code\u003e arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSel2",
          "package": "dph-prim-seq",
          "signature": "Array Tag-\u003e Array Int-\u003e Int-\u003e Int-\u003e SelRep2-\u003e Sel2",
          "type": "function"
        },
        "index": {
          "description": "Construct selector selector is description of how to perform combine operation Suppose we are evaluating the following expression combine This is difficult to parallelise For each element in the result the source array we get this element from depends on the tag values associated with all previous elements However if we going to apply combine several times with the same flags array we can precompute selector that tells us where to get each element The selector contains the original flags as well as the source index telling us where to get each element for the result array For example tagsToIndices2 tags indices This says get the first element from index in the second array then from index in the second array then index in the first array The selector then consists of both the tag and indices arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSel2",
          "normalized": "Array Tag-\u003eArray Int-\u003eInt-\u003eInt-\u003eSelRep-\u003eSel",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "signature": "Array Tag-\u003eArray Int-\u003eInt-\u003eInt-\u003eSelRep-\u003eSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:mkSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Construct a parallel selector representation.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e describes how to distribute the two data vectors\n   corresponding to a \u003ccode\u003e\u003ca\u003eSel2\u003c/a\u003e\u003c/code\u003e across several PEs.\n\u003c/p\u003e\u003cp\u003eSuppose we want to perform the following \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e\n combine [F,F,T,T,F,T,F,F,T] [A0,A1,A2,A3,A4] [B0,B1,B2,B3] \n   = [A0,A1,B0,B1,A2,B2,A3,A4,B3]\n\u003c/pre\u003e\u003cp\u003eThe first array is the flags array, that says which of the data arrays to\n   get each successive element from. As \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e is difficult to compute\n   in parallel, if we are going to perform several combines with the same\n   flags array, we can precompute a selector that tells us where to get each\n   element. The selector contains the original flags, as well as the source\n   index telling us where to get each element for the result array.\n\u003c/p\u003e\u003cpre\u003e\n flags:   [F,F,T,T,F,T,F,F,T]\n indices: [0,1,0,1,2,2,3,4,3]\n\u003c/pre\u003e\u003cp\u003eSuppose we want to distribute the combine operation across 3 PEs. It's\n  easy to split the selector like so:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n flags:   [F,F,T]            [T,F,T]           [F,F,T] \n indices: [0,1,0]            [1,2,2]           [3,4,3]\n\u003c/pre\u003e\u003cp\u003eWe now need to split the two data arrays. Each PE needs slices of the data\n  arrays that correspond to the parts of the selector that were given to it.\n  For the current example we get:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n data_A:   [A0,A1]            [A2]              [A3,A4]\n data_B:   [B0]               [B1,B2]           [B3]\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e contains the starting index and length of each of of these\n  slices:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n      ((0, 0), (2, 1))   ((2, 1), (1, 2))  ((3, 3), (2, 1))\n       indices   lens      indices  lens    indices  lens\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSelRep2",
          "package": "dph-prim-seq",
          "signature": "Array Tag -\u003e SelRep2",
          "source": "src/Data-Array-Parallel-Unlifted.html#mkSelRep2",
          "type": "function"
        },
        "index": {
          "description": "Construct parallel selector representation SelRep2 describes how to distribute the two data vectors corresponding to Sel2 across several PEs Suppose we want to perform the following combine operation combine A0 A1 A2 A3 A4 B0 B1 B2 B3 A0 A1 B0 B1 A2 B2 A3 A4 B3 The first array is the flags array that says which of the data arrays to get each successive element from As combine is difficult to compute in parallel if we are going to perform several combines with the same flags array we can precompute selector that tells us where to get each element The selector contains the original flags as well as the source index telling us where to get each element for the result array flags indices Suppose we want to distribute the combine operation across PEs It easy to split the selector like so PE0 PE1 PE2 flags indices We now need to split the two data arrays Each PE needs slices of the data arrays that correspond to the parts of the selector that were given to it For the current example we get PE0 PE1 PE2 data A0 A1 A2 A3 A4 data B0 B1 B2 B3 The SelRep2 contains the starting index and length of each of of these slices PE0 PE1 PE2 indices lens indices lens indices lens",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSelRep2",
          "normalized": "Array Tag-\u003eSelRep",
          "package": "dph-prim-seq",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:mkSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Virtual Segment Descriptor.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e is an extension of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e that allows data from the underlying\n   flat array to be shared between segments. For example, you can define an array\n   of 10 virtual segments that all have the same length and elements as a\n   single physical segment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Internally we maintain the invariant that all physical segments must be\n     reachable by some virtual segment. This is needed to ensure that operations\n     such as \u003ccode\u003e\u003ca\u003efold_ss\u003c/a\u003e\u003c/code\u003e segmented fold have the right complexity. \n\u003c/li\u003e\u003cli\u003e If you don't need the invariant then you can sidestep the code that\n     maintains it by using the redundant versions of the following operators, \n     and sometimes get faster code.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkVSegd",
          "package": "dph-prim-seq",
          "signature": "Array Int-\u003e SSegd-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Virtual Segment Descriptor VSegd is an extension of SSegd that allows data from the underlying flat array to be shared between segments For example you can define an array of virtual segments that all have the same length and elements as single physical segment Internally we maintain the invariant that all physical segments must be reachable by some virtual segment This is needed to ensure that operations such as fold ss segmented fold have the right complexity If you don need the invariant then you can sidestep the code that maintains it by using the redundant versions of the following operators and sometimes get faster code",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkVSegd",
          "normalized": "Array Int-\u003eSSegd-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "signature": "Array Int-\u003eSSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:mkVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result).\n   Extract elements of an array where the associated flag is true.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pack",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array Bool -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#pack",
          "type": "function"
        },
        "index": {
          "description": "length result Extract elements of an array where the associated flag is true",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pack",
          "normalized": "Array a-\u003eArray Bool-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray Bool-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result).\n   Select the elements of an array that have a corresponding tag.\n\u003c/p\u003e\u003cpre\u003epackByTag [12, 24, 42, 93] [1, 0, 0, 1] 0 = [24, 42]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "packByTag",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003e Array Tag-\u003e Tag-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Select the elements of an array that have corresponding tag packByTag",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "packByTag",
          "normalized": "Array a-\u003eArray Tag-\u003eTag-\u003eArray a",
          "package": "dph-prim-seq",
          "partial": "By Tag",
          "signature": "Array a-\u003eArray Tag-\u003eTag-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:packByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Forwards permutation of array elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "permute",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003e Array Int-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Forwards permutation of array elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "permute",
          "normalized": "Array a-\u003eArray Int-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray Int-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an array of flags indicating which elements match a given value.\n\u003c/p\u003e\u003cpre\u003epick [4, 5, 3, 6, 5, 2, 5] 5 = [F, T, F, F, T, F, T]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pick",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e a -\u003e Array Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#pick",
          "type": "function"
        },
        "index": {
          "description": "Compute an array of flags indicating which elements match given value pick",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pick",
          "normalized": "Array a-\u003ea-\u003eArray Bool",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003ea-\u003eArray Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:pick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(max(segs, threads) . log segs). \n   Add the lengths of corresponding segments in two descriptors.\n\u003c/p\u003e\u003cpre\u003eplusSegd [lens: 2 3 1] [lens: 3 1 1] = [lens: 5 4 2]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "plusSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Segd -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#plusSegd",
          "type": "function"
        },
        "index": {
          "description": "max segs threads log segs Add the lengths of corresponding segments in two descriptors plusSegd lens lens lens",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "plusSegd",
          "normalized": "Segd-\u003eSegd-\u003eSegd",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Segd-\u003eSegd-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:plusSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSSegdToVSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#promoteSSegdToVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain SSegd to VSegd The result contains one virtual segment for every physical segment the provided SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSSegdToVSegd",
          "normalized": "SSegd-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd To VSegd",
          "signature": "SSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:promoteSSegdToVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e, \n   assuming all segments are contiguous and come from a single array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToSSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#promoteSegdToSSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote Segd to SSegd assuming all segments are contiguous and come from single array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToSSegd",
          "normalized": "Segd-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "Segd To SSegd",
          "signature": "Segd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:promoteSegdToSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToVSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#promoteSegdToVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain Segd to VSegd The result contains one virtual segment for every physical segment the provided Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToVSegd",
          "normalized": "Segd-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "Segd To VSegd",
          "signature": "Segd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:promoteSegdToVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an array of the given length full of random data.\n   Good for testing.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randomRs",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e (a, a) -\u003e g -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#randomRs",
          "type": "function"
        },
        "index": {
          "description": "Generate an array of the given length full of random data Good for testing",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randomRs",
          "normalized": "Int-\u003e(a,a)-\u003eb-\u003eArray a",
          "package": "dph-prim-seq",
          "partial": "Rs",
          "signature": "Int-\u003e(a,a)-\u003eg-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an array of the given length full of random data. \n   Good for testing.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randoms",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e g -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#randoms",
          "type": "function"
        },
        "index": {
          "description": "Generate an array of the given length full of random data Good for testing",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randoms",
          "normalized": "Int-\u003ea-\u003eArray b",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eg-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the parallel representation of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repSel2",
          "package": "dph-prim-seq",
          "signature": "Sel2 -\u003e SelRep2",
          "source": "src/Data-Array-Parallel-Unlifted.html#repSel2",
          "type": "function"
        },
        "index": {
          "description": "Yield the parallel representation of selector",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repSel2",
          "normalized": "Sel-\u003eSelRep",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "signature": "Sel-\u003eSelRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:repSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Construct an array by copying a portion of another array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repeat",
          "package": "dph-prim-seq",
          "signature": "Int-\u003e Int-\u003e Array a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Construct an array by copying portion of another array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repeat",
          "normalized": "Int-\u003eInt-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eInt-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). \n   Construct a new array by replicating a single element the given\n   number of times.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "length result Construct new array by replicating single element the given number of times",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003ea-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Regular segmented replicate.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicate_s\u003c/a\u003e\u003c/code\u003e, but all segments are assumed to have the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_rs",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#replicate_rs",
          "type": "function"
        },
        "index": {
          "description": "length result Regular segmented replicate Like replicate but all segments are assumed to have the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_rs",
          "normalized": "Int-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:replicate_rs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eElements of the array are replicated according to the lengths of the \n   segments defined by the \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_s",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#replicate_s",
          "type": "function"
        },
        "index": {
          "description": "length result Segmented replicate Elements of the array are replicated according to the lengths of the segments defined by the Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_s",
          "normalized": "Segd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:replicate_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len). Construct a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e that describes an array where all virtual \n   segments point to the same physical segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicatedVSegd",
          "package": "dph-prim-seq",
          "signature": "Int-\u003e Int-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "len Construct VSegd that describes an array where all virtual segments point to the same physical segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicatedVSegd",
          "normalized": "Int-\u003eInt-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "signature": "Int-\u003eInt-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:replicatedVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003efoldl\u003c/code\u003e but return an array of the intermediate states, including\n   the final state that is computed by \u003ccode\u003efoldl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "scan",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Similar to foldl but return an array of the intermediate states including the final state that is computed by foldl",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "scan",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSSegd",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletonSSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Segd containing single segment of the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSSegd",
          "normalized": "Int-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd",
          "signature": "Int-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:singletonSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSegd",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletonSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Segd containing single segment of the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSegd",
          "normalized": "Int-\u003eSegd",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Int-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:singletonSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonVSegd",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletonVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct VSegd containing single segment of the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonVSegd",
          "normalized": "Int-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "signature": "Int-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:singletonVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e consisting of a single \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletons",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletons",
          "type": "function"
        },
        "index": {
          "description": "Construct an Arrays consisting of single Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletons",
          "normalized": "Array a-\u003eArrays a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArrays a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:singletons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the second elements of an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "snds",
          "package": "dph-prim-seq",
          "signature": "Array (a, b) -\u003e Array b",
          "source": "src/Data-Array-Parallel-Unlifted.html#snds",
          "type": "function"
        },
        "index": {
          "description": "Take the second elements of an array of pairs",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "snds",
          "normalized": "Array(a,b)-\u003eArray b",
          "package": "dph-prim-seq",
          "signature": "Array(a,b)-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:snds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the sources field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sourcesOfSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#sourcesOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the sources field of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sourcesOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:sourcesOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the starts field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "startsOfSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#startsOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the starts field of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "startsOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:startsOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Same as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum",
          "normalized": "Array a-\u003ea",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold_r (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_r",
          "package": "dph-prim-seq",
          "signature": "Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum_r",
          "type": "function"
        },
        "index": {
          "description": "Same as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_r",
          "normalized": "Int-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Int-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:sum_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold_s (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_s",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum_s",
          "type": "function"
        },
        "index": {
          "description": "Same as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_s",
          "normalized": "Segd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Segd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:sum_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold_ss (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_ss",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum_ss",
          "type": "function"
        },
        "index": {
          "description": "Same as fold ss",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_ss",
          "normalized": "SSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "SSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:sum_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the tags array of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsSel2",
          "package": "dph-prim-seq",
          "signature": "Sel2 -\u003e Array Tag",
          "source": "src/Data-Array-Parallel-Unlifted.html#tagsSel2",
          "type": "function"
        },
        "index": {
          "description": "Yield the tags array of selector",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsSel2",
          "normalized": "Sel-\u003eArray Tag",
          "package": "dph-prim-seq",
          "partial": "Sel",
          "signature": "Sel-\u003eArray Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:tagsSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Compute a selector from a tags array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsToSel2",
          "package": "dph-prim-seq",
          "signature": "Array Tag -\u003e Sel2",
          "source": "src/Data-Array-Parallel-Unlifted.html#tagsToSel2",
          "type": "function"
        },
        "index": {
          "description": "Compute selector from tags array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsToSel2",
          "normalized": "Array Tag-\u003eSel",
          "package": "dph-prim-seq",
          "partial": "To Sel",
          "signature": "Array Tag-\u003eSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:tagsToSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeLengthsOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeLengthsOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment lengths of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeLengthsOfVSegd",
          "normalized": "VSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "Lengths Of VSegd",
          "signature": "VSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:takeLengthsOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeSSegdOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the SSegd of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdOfVSegd",
          "normalized": "VSegd-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd Of VSegd",
          "signature": "VSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:takeSSegdOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eSee the note in \u003ccode\u003e\u003ca\u003etakeVSegidsRedundantOfVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdRedundantOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeSSegdRedundantOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the SSegd of VSegd but don require that every physical segment is referenced by some virtual segment See the note in takeVSegidsRedundantOfVSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdRedundantOfVSegd",
          "normalized": "VSegd-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "SSegd Redundant Of VSegd",
          "signature": "VSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:takeSSegdRedundantOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeVSegidsOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the vsegids of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsOfVSegd",
          "normalized": "VSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "VSegids Of VSegd",
          "signature": "VSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:takeVSegidsOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eIf you're just performing indexing and don't need the invariant that all\n   physical segments are reachable from some virtual segment, then use this\n   version as it's faster. This sidesteps the code that maintains the invariant.\n\u003c/p\u003e\u003cp\u003eThe stated O(1) complexity assumes that the array has already been fully\n   evalauted. If this is not the case then we can avoid demanding the result\n   of a prior computation on the \u003ccode\u003evsegids\u003c/code\u003e, thus reducing the cost attributed\n   to that prior computation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsRedundantOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeVSegidsRedundantOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the vsegids of VSegd but don require that every physical segment is referenced by some virtual segment If you re just performing indexing and don need the invariant that all physical segments are reachable from some virtual segment then use this version as it faster This sidesteps the code that maintains the invariant The stated complexity assumes that the array has already been fully evalauted If this is not the case then we can avoid demanding the result of prior computation on the vsegids thus reducing the cost attributed to that prior computation",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsRedundantOfVSegd",
          "normalized": "VSegd-\u003eArray Int",
          "package": "dph-prim-seq",
          "partial": "VSegids Redundant Of VSegd",
          "signature": "VSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:takeVSegidsRedundantOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array to a list of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toList",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e [a]",
          "source": "src/Data-Array-Parallel-Unlifted.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert an array to list of elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toList",
          "normalized": "Array a-\u003e[a]",
          "package": "dph-prim-seq",
          "partial": "List",
          "signature": "Array a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(number of inner arrays). \n   Convert an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e to a boxed vector of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toVectors",
          "package": "dph-prim-seq",
          "signature": "Arrays a -\u003e Vector (Array a)",
          "source": "src/Data-Array-Parallel-Unlifted.html#toVectors",
          "type": "function"
        },
        "index": {
          "description": "number of inner arrays Convert an Arrays to boxed vector of Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toVectors",
          "normalized": "Arrays a-\u003eVector(Array a)",
          "package": "dph-prim-seq",
          "partial": "Vectors",
          "signature": "Arrays a-\u003eVector(Array a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:toVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). \n   Yield a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: Trying to take the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a nested array that has been\n   constructed with replication can cause index space overflow. This is\n   because the virtual size of the corresponding flat data can be larger\n   than physical memory. If this happens then indices fields and \n   element count in the result will be invalid.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSSegdOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeDemoteToSSegdOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield SSegd that describes each segment of VSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments WARNING Trying to take the SSegd of nested array that has been constructed with replication can cause index space overflow This is because the virtual size of the corresponding flat data can be larger than physical memory If this happens then indices fields and element count in the result will be invalid",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSSegdOfVSegd",
          "normalized": "VSegd-\u003eSSegd",
          "package": "dph-prim-seq",
          "partial": "Demote To SSegd Of VSegd",
          "signature": "VSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:unsafeDemoteToSSegdOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003eSee the warning in \u003ccode\u003e\u003ca\u003eunsafeDemoteToSSegdOfVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSegdOfVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeDemoteToSegdOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield Segd that describes each segment of VSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments See the warning in unsafeDemoteToSSegdOfVSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSegdOfVSegd",
          "normalized": "VSegd-\u003eSegd",
          "package": "dph-prim-seq",
          "partial": "Demote To Segd Of VSegd",
          "signature": "VSegd-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:unsafeDemoteToSegdOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a single element from an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, \n        given the outer and inner indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndex2s",
          "package": "dph-prim-seq",
          "signature": "Arrays a -\u003e Int -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeIndex2s",
          "type": "function"
        },
        "index": {
          "description": "Retrieve single element from an Arrays given the outer and inner indices",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndex2s",
          "normalized": "Arrays a-\u003eInt-\u003eInt-\u003ea",
          "package": "dph-prim-seq",
          "partial": "Index",
          "signature": "Arrays a-\u003eInt-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:unsafeIndex2s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take one of the outer \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndexs",
          "package": "dph-prim-seq",
          "signature": "Arrays a -\u003e Int -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeIndexs",
          "type": "function"
        },
        "index": {
          "description": "Take one of the outer Array from an Arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndexs",
          "normalized": "Arrays a-\u003eInt-\u003eArray a",
          "package": "dph-prim-seq",
          "partial": "Indexs",
          "signature": "Arrays a-\u003eInt-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:unsafeIndexs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip",
          "package": "dph-prim-seq",
          "signature": "Array (a, b) -\u003e (Array a, Array b)",
          "source": "src/Data-Array-Parallel-Unlifted.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of pairs into pair of arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip",
          "normalized": "Array(a,b)-\u003e(Array a,Array b)",
          "package": "dph-prim-seq",
          "signature": "Array(a,b)-\u003e(Array a,Array b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an array of triples into a triple of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip3",
          "package": "dph-prim-seq",
          "signature": "Array (a, b, c) -\u003e (Array a, Array b, Array c)",
          "source": "src/Data-Array-Parallel-Unlifted.html#unzip3",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of triples into triple of arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip3",
          "normalized": "Array(a,b,c)-\u003e(Array a,Array b,Array c)",
          "package": "dph-prim-seq",
          "signature": "Array(a,b,c)-\u003e(Array a,Array b,Array c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). \n   Copy the source array while replacing some elements by new ones in the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "update",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003e Array (Int, a)-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Copy the source array while replacing some elements by new ones in the result",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "update",
          "normalized": "Array a-\u003eArray(Int,a)-\u003eArray a",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray(Int,a)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the \u003ccode\u003evsegids\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, and then cull the physical\n   segment descriptor so that all physical segments are reachable from\n   some virtual segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsOfVSegd",
          "package": "dph-prim-seq",
          "signature": "(Array Int -\u003e Array Int) -\u003e VSegd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#updateVSegsOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of VSegd and then cull the physical segment descriptor so that all physical segments are reachable from some virtual segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsOfVSegd",
          "normalized": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegs Of VSegd",
          "signature": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:updateVSegsOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the \u003ccode\u003evsegids\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, where the result is guaranteed to\n   cover all physical segments.\n\u003c/p\u003e\u003cp\u003eUsing this version avoids performing the \u003ccode\u003ecull\u003c/code\u003e operation which \n   discards unreachable physical segments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting vsegids must cover all physical segments.\n     If they do not then there will be physical segments that are not \n     reachable from some virtual segment, and subsequent operations\n     like \u003ccode\u003efold_ss\u003c/code\u003e will have the wrong work complexity.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsReachableOfVSegd",
          "package": "dph-prim-seq",
          "signature": "(Array Int -\u003e Array Int) -\u003e VSegd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#updateVSegsReachableOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of VSegd where the result is guaranteed to cover all physical segments Using this version avoids performing the cull operation which discards unreachable physical segments The resulting vsegids must cover all physical segments If they do not then there will be physical segments that are not reachable from some virtual segment and subsequent operations like fold ss will have the wrong work complexity",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsReachableOfVSegd",
          "normalized": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "package": "dph-prim-seq",
          "partial": "VSegs Reachable Of VSegd",
          "signature": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:updateVSegsReachableOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSSegd",
          "package": "dph-prim-seq",
          "signature": "SSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#validSSegd",
          "type": "function"
        },
        "index": {
          "description": "Check whether Segd is well formed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSSegd",
          "normalized": "SSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "SSegd",
          "signature": "SSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:validSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSegd",
          "package": "dph-prim-seq",
          "signature": "Segd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#validSegd",
          "type": "function"
        },
        "index": {
          "description": "Check whether Segd is well formed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSegd",
          "normalized": "Segd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "Segd",
          "signature": "Segd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:validSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validVSegd",
          "package": "dph-prim-seq",
          "signature": "VSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#validVSegd",
          "type": "function"
        },
        "index": {
          "description": "Check whether Segd is well formed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validVSegd",
          "normalized": "VSegd-\u003eBool",
          "package": "dph-prim-seq",
          "partial": "VSegd",
          "signature": "VSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:validVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip two arrays into an array of pairs.\n   If one array is short, excess elements of the longer array are discarded.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array b -\u003e Array (a, b)",
          "source": "src/Data-Array-Parallel-Unlifted.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zip two arrays into an array of pairs If one array is short excess elements of the longer array are discarded",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip",
          "normalized": "Array a-\u003eArray b-\u003eArray(a,b)",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray b-\u003eArray(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip three arrays into an array of triples.\n   If one array is short, excess elements of the longer arrays are discarded.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip3",
          "package": "dph-prim-seq",
          "signature": "Array a -\u003e Array b -\u003e Array c -\u003e Array (a, b, c)",
          "source": "src/Data-Array-Parallel-Unlifted.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Zip three arrays into an array of triples If one array is short excess elements of the longer arrays are discarded",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip3",
          "normalized": "Array a-\u003eArray b-\u003eArray c-\u003eArray(a,b,c)",
          "package": "dph-prim-seq",
          "signature": "Array a-\u003eArray b-\u003eArray c-\u003eArray(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to correponding elements of two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c) -\u003e Array a -\u003e Array b -\u003e Array c",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to correponding elements of two arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eArray a-\u003eArray b-\u003eArray c",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eArray a-\u003eArray b-\u003eArray c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of three arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith3",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of three arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of four arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith4",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of four arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of five arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith5",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of five arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of six arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith6",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of six arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of seven arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith7",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g -\u003e Array h",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of seven arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of six arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith8",
          "package": "dph-prim-seq",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g -\u003e Array h -\u003e Array i",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith8",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of six arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h-\u003eArray i",
          "package": "dph-prim-seq",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h-\u003eArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-seq/docs/Data-Array-Parallel-Unlifted.html#v:zipWith8"
      }
    }
  ]
]