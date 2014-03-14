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
        "word": "carray"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides both the immutable \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e and mutable \u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e.  The\n underlying storage is exactly the same - pinned memory on the GC'd heap.\n Elements are stored according to the class \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.  You can obtain a\n pointer to the array contents to manipulate elements from languages like C.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e is 16-byte aligned by default.  If you create a \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003eunsafeForeignPtrToCArray\u003c/a\u003e\u003c/code\u003e then it may not be aligned.  This will be an issue\n if you intend to use SIMD instructions.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e but slower if you stay\n within Haskell.  \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e can handle more types and can be used by external\n libraries.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e and similar\n to \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e but slower.  \u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e has O(1) versions of\n \u003ccode\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsafeThaw\u003c/a\u003e\u003c/code\u003e when converting to/from \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "Base",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides both the immutable CArray and mutable IOCArray The underlying storage is exactly the same pinned memory on the GC heap Elements are stored according to the class Storable You can obtain pointer to the array contents to manipulate elements from languages like CArray is byte aligned by default If you create CArray with unsafeForeignPtrToCArray then it may not be aligned This will be an issue if you intend to use SIMD instructions CArray is similar to UArray but slower if you stay within Haskell CArray can handle more types and can be used by external libraries IOCArray is equivalent to StorableArray and similar to IOUArray but slower IOCArray has versions of unsafeFreeze and unsafeThaw when converting to from CArray",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "Base",
          "package": "carray",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHack so that norms have a sensible type.\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "Abs",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html#Abs",
          "type": "class"
        },
        "index": {
          "description": "Hack so that norms have sensible type",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "Abs",
          "package": "carray",
          "partial": "Abs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#t:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe immutable array type.\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "CArray",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html#CArray",
          "type": "data"
        },
        "index": {
          "description": "The immutable array type",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "CArray",
          "package": "carray",
          "partial": "CArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#t:CArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely equivalent representation, but used for the mutable interface.\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "IOCArray",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html#IOCArray",
          "type": "data"
        },
        "index": {
          "description": "Absolutely equivalent representation but used for the mutable interface",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "IOCArray",
          "package": "carray",
          "partial": "IOCArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#t:IOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "CArray",
          "package": "carray",
          "signature": "CArray !i !i Int !(ForeignPtr e)",
          "source": "src/Data-Array-CArray-Base.html#CArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "CArray",
          "package": "carray",
          "partial": "CArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:CArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "IOCArray",
          "package": "carray",
          "signature": "IOCArray !i !i Int !(ForeignPtr e)",
          "source": "src/Data-Array-CArray-Base.html#IOCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "IOCArray",
          "package": "carray",
          "partial": "IOCArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:IOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "abs_",
          "package": "carray",
          "signature": "a -\u003e b",
          "source": "src/Data-Array-CArray-Base.html#abs_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "abs_",
          "normalized": "a-\u003eb",
          "package": "carray",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:abs_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "cmpCArray",
          "package": "carray",
          "signature": "CArray i e -\u003e CArray i e -\u003e Ordering",
          "source": "src/Data-Array-CArray-Base.html#cmpCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "cmpCArray",
          "normalized": "CArray a b-\u003eCArray a b-\u003eOrdering",
          "package": "carray",
          "partial": "CArray",
          "signature": "CArray i e-\u003eCArray i e-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:cmpCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "cmpIntCArray",
          "package": "carray",
          "signature": "CArray Int e -\u003e CArray Int e -\u003e Ordering",
          "source": "src/Data-Array-CArray-Base.html#cmpIntCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "cmpIntCArray",
          "normalized": "CArray Int a-\u003eCArray Int a-\u003eOrdering",
          "package": "carray",
          "partial": "Int CArray",
          "signature": "CArray Int e-\u003eCArray Int e-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:cmpIntCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "copy",
          "package": "carray",
          "signature": "CArray i e -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#copy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "copy",
          "normalized": "CArray a b-\u003eIO(CArray a b)",
          "package": "carray",
          "signature": "CArray i e-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new CArray with an IO action.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "createCArray",
          "package": "carray",
          "signature": "(i, i) -\u003e (Ptr e -\u003e IO ()) -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#createCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:createCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:createCArray\"]"
        },
        "index": {
          "description": "Make new CArray with an IO action",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "createCArray",
          "normalized": "(a,a)-\u003e(Ptr b-\u003eIO())-\u003eIO(CArray a b)",
          "package": "carray",
          "partial": "CArray",
          "signature": "(i,i)-\u003e(Ptr e-\u003eIO())-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:createCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "eqCArray",
          "package": "carray",
          "signature": "CArray i e -\u003e CArray i e -\u003e Bool",
          "source": "src/Data-Array-CArray-Base.html#eqCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "eqCArray",
          "normalized": "CArray a b-\u003eCArray a b-\u003eBool",
          "package": "carray",
          "partial": "CArray",
          "signature": "CArray i e-\u003eCArray i e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:eqCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) make a rank 1 array from an arbitrary shape.\n It has the property that 'reshape (0, size a - 1) a == flatten a'.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "flatten",
          "package": "carray",
          "signature": "CArray i e -\u003e CArray Int e",
          "source": "src/Data-Array-CArray-Base.html#flatten",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:flatten\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:flatten\"]"
        },
        "index": {
          "description": "make rank array from an arbitrary shape It has the property that reshape size flatten",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "flatten",
          "normalized": "CArray a b-\u003eCArray Int b",
          "package": "carray",
          "signature": "CArray i e-\u003eCArray Int e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "freezeIOCArray",
          "package": "carray",
          "signature": "IOCArray i e -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#freezeIOCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "freezeIOCArray",
          "normalized": "IOCArray a b-\u003eIO(CArray a b)",
          "package": "carray",
          "partial": "IOCArray",
          "signature": "IOCArray i e-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:freezeIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "indexes",
          "package": "carray",
          "signature": "a i e -\u003e i -\u003e [Int]",
          "source": "src/Data-Array-CArray-Base.html#indexes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "indexes",
          "normalized": "a b c-\u003eb-\u003e[Int]",
          "package": "carray",
          "signature": "a i e-\u003ei-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:indexes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore polymorphic version of \u003ccode\u003e\u003ca\u003eixmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "ixmapP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i' -\u003e i) -\u003e a i e -\u003e a' i' e",
          "source": "src/Data-Array-CArray-Base.html#ixmapP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:ixmapP\"]"
        },
        "index": {
          "description": "More polymorphic version of ixmap",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "ixmapP",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ee a d",
          "package": "carray",
          "signature": "(i',i')-\u003e(i'-\u003ei)-\u003ea i e-\u003ea' i' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "ixmapWith",
          "package": "carray",
          "signature": "(i', i') -\u003e (i' -\u003e i) -\u003e (e -\u003e e') -\u003e a i e -\u003e a i' e'",
          "source": "src/Data-Array-CArray-Base.html#ixmapWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWith\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:ixmapWith\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "ixmapWith",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "carray",
          "partial": "With",
          "signature": "(i',i')-\u003e(i'-\u003ei)-\u003e(e-\u003ee')-\u003ea i e-\u003ea i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "ixmapWithInd",
          "package": "carray",
          "signature": "(i', i') -\u003e (i' -\u003e i) -\u003e (i -\u003e e -\u003e i' -\u003e e') -\u003e a i e -\u003e a i' e'",
          "source": "src/Data-Array-CArray-Base.html#ixmapWithInd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWithInd\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:ixmapWithInd\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "ixmapWithInd",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003e(b-\u003ec-\u003ea-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "carray",
          "partial": "With Ind",
          "signature": "(i',i')-\u003e(i'-\u003ei)-\u003e(i-\u003ee-\u003ei'-\u003ee')-\u003ea i e-\u003ea i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWithInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric slice and map.  This takes the new range, the inverse map on\n indices, and function to produce the next element.  It is the most general\n operation in its class.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "ixmapWithIndP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i' -\u003e i) -\u003e (i -\u003e e -\u003e i' -\u003e e') -\u003e a i e -\u003e a' i' e'",
          "source": "src/Data-Array-CArray-Base.html#ixmapWithIndP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWithIndP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:ixmapWithIndP\"]"
        },
        "index": {
          "description": "Generic slice and map This takes the new range the inverse map on indices and function to produce the next element It is the most general operation in its class",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "ixmapWithIndP",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003e(b-\u003ec-\u003ea-\u003ed)-\u003ee b c-\u003ef a d",
          "package": "carray",
          "partial": "With Ind",
          "signature": "(i',i')-\u003e(i'-\u003ei)-\u003e(i-\u003ee-\u003ei'-\u003ee')-\u003ea i e-\u003ea' i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWithIndP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an operation on the elements, independent of their location.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "ixmapWithP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i' -\u003e i) -\u003e (e -\u003e e') -\u003e a i e -\u003e a' i' e'",
          "source": "src/Data-Array-CArray-Base.html#ixmapWithP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWithP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:ixmapWithP\"]"
        },
        "index": {
          "description": "Perform an operation on the elements independent of their location",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "ixmapWithP",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003ee b c-\u003ef a d",
          "package": "carray",
          "partial": "With",
          "signature": "(i',i')-\u003e(i'-\u003ei)-\u003e(e-\u003ee')-\u003ea i e-\u003ea' i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:ixmapWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to amap.  Here for consistency only.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "liftArray",
          "package": "carray",
          "signature": "(e -\u003e e1) -\u003e a i e -\u003e a i e1",
          "source": "src/Data-Array-CArray-Base.html#liftArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:liftArray\"]"
        },
        "index": {
          "description": "Equivalent to amap Here for consistency only",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "liftArray",
          "normalized": "(a-\u003ea)-\u003eb c a-\u003eb c a",
          "package": "carray",
          "partial": "Array",
          "signature": "(e-\u003ee)-\u003ea i e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "liftArray2",
          "package": "carray",
          "signature": "(e -\u003e e1 -\u003e e2) -\u003e a i e -\u003e a i e1 -\u003e a i e2",
          "source": "src/Data-Array-CArray-Base.html#liftArray2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray2\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:liftArray2\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "liftArray2",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb c a-\u003eb c a-\u003eb c a",
          "package": "carray",
          "partial": "Array",
          "signature": "(e-\u003ee-\u003ee)-\u003ea i e-\u003ea i e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic 2-array lift.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "liftArray2P",
          "package": "carray",
          "signature": "(e -\u003e e1 -\u003e e2) -\u003e a i e -\u003e a1 i e1 -\u003e a2 i e2",
          "source": "src/Data-Array-CArray-Base.html#liftArray2P",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray2P\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:liftArray2P\"]"
        },
        "index": {
          "description": "Polymorphic array lift",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "liftArray2P",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb c a-\u003eb c a-\u003eb c a",
          "package": "carray",
          "partial": "Array",
          "signature": "(e-\u003ee-\u003ee)-\u003ea i e-\u003ea i e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray2P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "liftArray3",
          "package": "carray",
          "signature": "(e -\u003e e1 -\u003e e2 -\u003e e3) -\u003e a i e -\u003e a i e1 -\u003e a i e2 -\u003e a i e3",
          "source": "src/Data-Array-CArray-Base.html#liftArray3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray3\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:liftArray3\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "liftArray3",
          "normalized": "(a-\u003ea-\u003ea-\u003ea)-\u003eb c a-\u003eb c a-\u003eb c a-\u003eb c a",
          "package": "carray",
          "partial": "Array",
          "signature": "(e-\u003ee-\u003ee-\u003ee)-\u003ea i e-\u003ea i e-\u003ea i e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic 3-array lift.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "liftArray3P",
          "package": "carray",
          "signature": "(e -\u003e e1 -\u003e e2 -\u003e e3) -\u003e a i e -\u003e a1 i e1 -\u003e a2 i e2 -\u003e a3 i e3",
          "source": "src/Data-Array-CArray-Base.html#liftArray3P",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray3P\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:liftArray3P\"]"
        },
        "index": {
          "description": "Polymorphic array lift",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "liftArray3P",
          "normalized": "(a-\u003ea-\u003ea-\u003ea)-\u003eb c a-\u003eb c a-\u003eb c a-\u003eb c a",
          "package": "carray",
          "partial": "Array",
          "signature": "(e-\u003ee-\u003ee-\u003ee)-\u003ea i e-\u003ea i e-\u003ea i e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArray3P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic version of amap.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "liftArrayP",
          "package": "carray",
          "signature": "(e -\u003e e1) -\u003e a i e -\u003e a1 i e1",
          "source": "src/Data-Array-CArray-Base.html#liftArrayP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArrayP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:liftArrayP\"]"
        },
        "index": {
          "description": "Polymorphic version of amap",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "liftArrayP",
          "normalized": "(a-\u003ea)-\u003eb c a-\u003eb c a",
          "package": "carray",
          "partial": "Array",
          "signature": "(e-\u003ee)-\u003ea i e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:liftArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate an array which is 16-byte aligned.  Essential for SIMD instructions.\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "mallocForeignPtrArrayAligned",
          "package": "carray",
          "signature": "Int -\u003e IO (ForeignPtr a)",
          "source": "src/Data-Array-CArray-Base.html#mallocForeignPtrArrayAligned",
          "type": "function"
        },
        "index": {
          "description": "Allocate an array which is byte aligned Essential for SIMD instructions",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "mallocForeignPtrArrayAligned",
          "normalized": "Int-\u003eIO(ForeignPtr a)",
          "package": "carray",
          "partial": "Foreign Ptr Array Aligned",
          "signature": "Int-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:mallocForeignPtrArrayAligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate memory which is 16-byte aligned.  This is essential for SIMD\n instructions.  We know that mallocPlainForeignPtrBytes will give word-aligned\n memory, so we pad enough to be able to return the desired amount of memory\n after aligning our pointer.\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "mallocForeignPtrBytesAligned",
          "package": "carray",
          "signature": "Int -\u003e IO (ForeignPtr a)",
          "source": "src/Data-Array-CArray-Base.html#mallocForeignPtrBytesAligned",
          "type": "function"
        },
        "index": {
          "description": "Allocate memory which is byte aligned This is essential for SIMD instructions We know that mallocPlainForeignPtrBytes will give word-aligned memory so we pad enough to be able to return the desired amount of memory after aligning our pointer",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "mallocForeignPtrBytesAligned",
          "normalized": "Int-\u003eIO(ForeignPtr a)",
          "package": "carray",
          "partial": "Foreign Ptr Bytes Aligned",
          "signature": "Int-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:mallocForeignPtrBytesAligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn-place map on CArray.  Note that this is \u003cem\u003eIN PLACE\u003c/em\u003e so you should not\n retain any reference to the original.  It flagrantly breaks referential\n transparency!\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "mapCArrayInPlace",
          "package": "carray",
          "signature": "(e -\u003e e) -\u003e CArray i e -\u003e CArray i e",
          "source": "src/Data-Array-CArray-Base.html#mapCArrayInPlace",
          "type": "function"
        },
        "index": {
          "description": "In-place map on CArray Note that this is IN PLACE so you should not retain any reference to the original It flagrantly breaks referential transparency",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "mapCArrayInPlace",
          "normalized": "(a-\u003ea)-\u003eCArray b a-\u003eCArray b a",
          "package": "carray",
          "partial": "CArray In Place",
          "signature": "(e-\u003ee)-\u003eCArray i e-\u003eCArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:mapCArrayInPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2-norm on the array taken as a vector (Frobenius norm for matrices)\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "norm2",
          "package": "carray",
          "signature": "a i e -\u003e e'",
          "source": "src/Data-Array-CArray-Base.html#norm2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:norm2\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:norm2\"]"
        },
        "index": {
          "description": "norm on the array taken as vector Frobenius norm for matrices",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "norm2",
          "normalized": "a b c-\u003ed",
          "package": "carray",
          "signature": "a i e-\u003ee'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:norm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSup norm on the array taken as a vector\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "normSup",
          "package": "carray",
          "signature": "a i e -\u003e e'",
          "source": "src/Data-Array-CArray-Base.html#normSup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:normSup\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:normSup\"]"
        },
        "index": {
          "description": "Sup norm on the array taken as vector",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "normSup",
          "normalized": "a b c-\u003ed",
          "package": "carray",
          "partial": "Sup",
          "signature": "a i e-\u003ee'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:normSup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ep-norm on the array taken as a vector\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "normp",
          "package": "carray",
          "signature": "e' -\u003e a i e -\u003e e'",
          "source": "src/Data-Array-CArray-Base.html#normp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:normp\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:normp\"]"
        },
        "index": {
          "description": "p-norm on the array taken as vector",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "normp",
          "normalized": "a-\u003eb c d-\u003ea",
          "package": "carray",
          "signature": "e'-\u003ea i e-\u003ee'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:normp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "offsetShapeFromThenTo",
          "package": "carray",
          "signature": "[Int] -\u003e [Int] -\u003e [Int] -\u003e [Int] -\u003e [Int]",
          "source": "src/Data-Array-CArray-Base.html#offsetShapeFromThenTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "offsetShapeFromThenTo",
          "normalized": "[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]",
          "package": "carray",
          "partial": "Shape From Then To",
          "signature": "[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:offsetShapeFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "offsetShapeFromTo",
          "package": "carray",
          "signature": "[Int] -\u003e [Int] -\u003e [Int] -\u003e [Int]",
          "source": "src/Data-Array-CArray-Base.html#offsetShapeFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "offsetShapeFromTo",
          "normalized": "[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]",
          "package": "carray",
          "partial": "Shape From To",
          "signature": "[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:offsetShapeFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "offsetShapeFromTo'",
          "package": "carray",
          "signature": "([[Int]] -\u003e [[Int]]) -\u003e [Int] -\u003e [Int] -\u003e [Int] -\u003e [Int]",
          "source": "src/Data-Array-CArray-Base.html#offsetShapeFromTo%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "offsetShapeFromTo'",
          "normalized": "([[Int]]-\u003e[[Int]])-\u003e[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]",
          "package": "carray",
          "partial": "Shape From To'",
          "signature": "([[Int]]-\u003e[[Int]])-\u003e[Int]-\u003e[Int]-\u003e[Int]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:offsetShapeFromTo-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "offsets",
          "package": "carray",
          "signature": "(a, a) -\u003e a -\u003e [Int]",
          "source": "src/Data-Array-CArray-Base.html#offsets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "offsets",
          "normalized": "(a,a)-\u003ea-\u003e[Int]",
          "package": "carray",
          "signature": "(a,a)-\u003ea-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:offsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) reshape an array.  The number of elements in the new shape must not\n exceed the number in the old shape.  The elements are in C-style ordering.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "reshape",
          "package": "carray",
          "signature": "(j, j) -\u003e CArray i e -\u003e CArray j e",
          "source": "src/Data-Array-CArray-Base.html#reshape",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:reshape\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:reshape\"]"
        },
        "index": {
          "description": "reshape an array The number of elements in the new shape must not exceed the number in the old shape The elements are in C-style ordering",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "reshape",
          "normalized": "(a,a)-\u003eCArray b c-\u003eCArray a c",
          "package": "carray",
          "signature": "(j,j)-\u003eCArray i e-\u003eCArray j e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:reshape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "slice",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i) -\u003e a i e -\u003e a i' e",
          "source": "src/Data-Array-CArray-Base.html#slice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:slice\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:slice\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "slice",
          "normalized": "(a,a)-\u003e(b,b)-\u003ec b d-\u003ec a d",
          "package": "carray",
          "signature": "(i',i')-\u003e(i,i)-\u003ea i e-\u003ea i' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContiguous sub-array without element mapping.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i) -\u003e a i e -\u003e a' i' e",
          "source": "src/Data-Array-CArray-Base.html#sliceP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceP\"]"
        },
        "index": {
          "description": "Contiguous sub-array without element mapping",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceP",
          "normalized": "(a,a)-\u003e(b,b)-\u003ec b d-\u003ee a d",
          "package": "carray",
          "signature": "(i',i')-\u003e(i,i)-\u003ea i e-\u003ea' i' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceStride",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i, i) -\u003e a i e -\u003e a i' e",
          "source": "src/Data-Array-CArray-Base.html#sliceStride",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStride\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceStride\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceStride",
          "normalized": "(a,a)-\u003e(b,b,b)-\u003ec b d-\u003ec a d",
          "package": "carray",
          "partial": "Stride",
          "signature": "(i',i')-\u003e(i,i,i)-\u003ea i e-\u003ea i' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrided sub-array without element mapping.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceStrideP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i, i) -\u003e a i e -\u003e a' i' e",
          "source": "src/Data-Array-CArray-Base.html#sliceStrideP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStrideP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceStrideP\"]"
        },
        "index": {
          "description": "Strided sub-array without element mapping",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceStrideP",
          "normalized": "(a,a)-\u003e(b,b,b)-\u003ec b d-\u003ee a d",
          "package": "carray",
          "partial": "Stride",
          "signature": "(i',i')-\u003e(i,i,i)-\u003ea i e-\u003ea' i' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStrideP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceStrideWith",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i, i) -\u003e (e -\u003e e') -\u003e a i e -\u003e a i' e'",
          "source": "src/Data-Array-CArray-Base.html#sliceStrideWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStrideWith\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceStrideWith\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceStrideWith",
          "normalized": "(a,a)-\u003e(b,b,b)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "carray",
          "partial": "Stride With",
          "signature": "(i',i')-\u003e(i,i,i)-\u003e(e-\u003ee')-\u003ea i e-\u003ea i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStrideWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore friendly sub-arrays with element mapping.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceStrideWithP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i, i) -\u003e (e -\u003e e') -\u003e a i e -\u003e a' i' e'",
          "source": "src/Data-Array-CArray-Base.html#sliceStrideWithP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStrideWithP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceStrideWithP\"]"
        },
        "index": {
          "description": "More friendly sub-arrays with element mapping",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceStrideWithP",
          "normalized": "(a,a)-\u003e(b,b,b)-\u003e(c-\u003ed)-\u003ee b c-\u003ef a d",
          "package": "carray",
          "partial": "Stride With",
          "signature": "(i',i')-\u003e(i,i,i)-\u003e(e-\u003ee')-\u003ea i e-\u003ea' i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceStrideWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLess polymorphic version.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceWith",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i) -\u003e (e -\u003e e') -\u003e a i e -\u003e a i' e'",
          "source": "src/Data-Array-CArray-Base.html#sliceWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceWith\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceWith\"]"
        },
        "index": {
          "description": "Less polymorphic version",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceWith",
          "normalized": "(a,a)-\u003e(b,b)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "carray",
          "partial": "With",
          "signature": "(i',i')-\u003e(i,i)-\u003e(e-\u003ee')-\u003ea i e-\u003ea i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContiguous sub-array with element mapping.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "sliceWithP",
          "package": "carray",
          "signature": "(i', i') -\u003e (i, i) -\u003e (e -\u003e e') -\u003e a i e -\u003e a' i' e'",
          "source": "src/Data-Array-CArray-Base.html#sliceWithP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceWithP\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:sliceWithP\"]"
        },
        "index": {
          "description": "Contiguous sub-array with element mapping",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "sliceWithP",
          "normalized": "(a,a)-\u003e(b,b)-\u003e(c-\u003ed)-\u003ee b c-\u003ef a d",
          "package": "carray",
          "partial": "With",
          "signature": "(i',i')-\u003e(i,i)-\u003e(e-\u003ee')-\u003ea i e-\u003ea' i' e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:sliceWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "thawIOCArray",
          "package": "carray",
          "signature": "CArray i e -\u003e IO (IOCArray i e)",
          "source": "src/Data-Array-CArray-Base.html#thawIOCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "thawIOCArray",
          "normalized": "CArray a b-\u003eIO(IOCArray a b)",
          "package": "carray",
          "partial": "IOCArray",
          "signature": "CArray i e-\u003eIO(IOCArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:thawIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract ForeignPtr from a CArray.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "toForeignPtr",
          "package": "carray",
          "signature": "CArray i e -\u003e (Int, ForeignPtr e)",
          "source": "src/Data-Array-CArray-Base.html#toForeignPtr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:toForeignPtr\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:toForeignPtr\"]"
        },
        "index": {
          "description": "Extract ForeignPtr from CArray",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "toForeignPtr",
          "normalized": "CArray a b-\u003e(Int,ForeignPtr b)",
          "package": "carray",
          "partial": "Foreign Ptr",
          "signature": "CArray i e-\u003e(Int,ForeignPtr e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:toForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you want to use it afterwards, ensure that you\n \u003ccode\u003etouchCArray\u003c/code\u003e after the last use of the pointer,\n so the array is not freed too early.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.IOCArray\"]",
          "name": "touchIOCArray",
          "package": "carray",
          "signature": "IOCArray i e -\u003e IO ()",
          "source": "src/Data-Array-CArray-Base.html#touchIOCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:touchIOCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-IOCArray.html#v:touchIOCArray\"]"
        },
        "index": {
          "description": "If you want to use it afterwards ensure that you touchCArray after the last use of the pointer so the array is not freed too early",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "touchIOCArray",
          "normalized": "IOCArray a b-\u003eIO()",
          "package": "carray",
          "partial": "IOCArray",
          "signature": "IOCArray i e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:touchIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeAccumArrayCArray",
          "package": "carray",
          "signature": "(e -\u003e e' -\u003e e) -\u003e e -\u003e (i, i) -\u003e [(Int, e')] -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeAccumArrayCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeAccumArrayCArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(Int,b)]-\u003eIO(CArray c a)",
          "package": "carray",
          "partial": "Accum Array CArray",
          "signature": "(e-\u003ee'-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(Int,e')]-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeAccumArrayCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeAccumCArray",
          "package": "carray",
          "signature": "(e -\u003e e' -\u003e e) -\u003e CArray i e -\u003e [(Int, e')] -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeAccumCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeAccumCArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003eCArray c a-\u003e[(Int,b)]-\u003eIO(CArray c a)",
          "package": "carray",
          "partial": "Accum CArray",
          "signature": "(e-\u003ee'-\u003ee)-\u003eCArray i e-\u003e[(Int,e')]-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeAccumCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeArrayCArray",
          "package": "carray",
          "signature": "(i, i) -\u003e [(Int, e)] -\u003e e -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeArrayCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeArrayCArray",
          "normalized": "(a,a)-\u003e[(Int,b)]-\u003eb-\u003eIO(CArray a b)",
          "package": "carray",
          "partial": "Array CArray",
          "signature": "(i,i)-\u003e[(Int,e)]-\u003ee-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeArrayCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Turn a ByteString into a CArray.  Unsafe because it uses\n \u003ccode\u003e\u003ca\u003ecastForeignPtr\u003c/a\u003e\u003c/code\u003e and thus is not platform independent.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n the range specified is larger than the size of the ByteString or the start of\n the ByteString does not fulfil the alignment requirement of the resulting\n CArray (as specified by the Storable instance).\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "unsafeByteStringToCArray",
          "package": "carray",
          "signature": "(i, i) -\u003e ByteString -\u003e Maybe (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeByteStringToCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeByteStringToCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:unsafeByteStringToCArray\"]"
        },
        "index": {
          "description": "Turn ByteString into CArray Unsafe because it uses castForeignPtr and thus is not platform independent Returns Nothing if the range specified is larger than the size of the ByteString or the start of the ByteString does not fulfil the alignment requirement of the resulting CArray as specified by the Storable instance",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeByteStringToCArray",
          "normalized": "(a,a)-\u003eByteString-\u003eMaybe(CArray a b)",
          "package": "carray",
          "partial": "Byte String To CArray",
          "signature": "(i,i)-\u003eByteString-\u003eMaybe(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeByteStringToCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Turn a CArray into a ByteString.  Unsafe because it uses\n \u003ccode\u003e\u003ca\u003ecastForeignPtr\u003c/a\u003e\u003c/code\u003e and thus is not platform independent.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "unsafeCArrayToByteString",
          "package": "carray",
          "signature": "CArray i e -\u003e ByteString",
          "source": "src/Data-Array-CArray-Base.html#unsafeCArrayToByteString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeCArrayToByteString\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:unsafeCArrayToByteString\"]"
        },
        "index": {
          "description": "Turn CArray into ByteString Unsafe because it uses castForeignPtr and thus is not platform independent",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeCArrayToByteString",
          "normalized": "CArray a b-\u003eByteString",
          "package": "carray",
          "partial": "CArray To Byte String",
          "signature": "CArray i e-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeCArrayToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeCreateCArray",
          "package": "carray",
          "signature": "(i, i) -\u003e (Ptr e -\u003e IO ()) -\u003e CArray i e",
          "source": "src/Data-Array-CArray-Base.html#unsafeCreateCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeCreateCArray",
          "normalized": "(a,a)-\u003e(Ptr b-\u003eIO())-\u003eCArray a b",
          "package": "carray",
          "partial": "Create CArray",
          "signature": "(i,i)-\u003e(Ptr e-\u003eIO())-\u003eCArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeCreateCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e from an arbitrary \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e.  It is\n the caller's responsibility to ensure that the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e points to\n an area of memory sufficient for the specified bounds.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "unsafeForeignPtrToCArray",
          "package": "carray",
          "signature": "ForeignPtr e -\u003e (i, i) -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeForeignPtrToCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeForeignPtrToCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:unsafeForeignPtrToCArray\"]"
        },
        "index": {
          "description": "Construct CArray from an arbitrary ForeignPtr It is the caller responsibility to ensure that the ForeignPtr points to an area of memory sufficient for the specified bounds",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeForeignPtrToCArray",
          "normalized": "ForeignPtr a-\u003e(b,b)-\u003eIO(CArray b a)",
          "package": "carray",
          "partial": "Foreign Ptr To CArray",
          "signature": "ForeignPtr e-\u003e(i,i)-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeForeignPtrToCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e from an arbitrary \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e.  It is\n the caller's responsibility to ensure that the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e points to\n an area of memory sufficient for the specified bounds.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.IOCArray\"]",
          "name": "unsafeForeignPtrToIOCArray",
          "package": "carray",
          "signature": "ForeignPtr e -\u003e (i, i) -\u003e IO (IOCArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeForeignPtrToIOCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeForeignPtrToIOCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-IOCArray.html#v:unsafeForeignPtrToIOCArray\"]"
        },
        "index": {
          "description": "Construct CArray from an arbitrary ForeignPtr It is the caller responsibility to ensure that the ForeignPtr points to an area of memory sufficient for the specified bounds",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeForeignPtrToIOCArray",
          "normalized": "ForeignPtr a-\u003e(b,b)-\u003eIO(IOCArray b a)",
          "package": "carray",
          "partial": "Foreign Ptr To IOCArray",
          "signature": "ForeignPtr e-\u003e(i,i)-\u003eIO(IOCArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeForeignPtrToIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeFreezeIOCArray",
          "package": "carray",
          "signature": "IOCArray i e -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeFreezeIOCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeFreezeIOCArray",
          "normalized": "IOCArray a b-\u003eIO(CArray a b)",
          "package": "carray",
          "partial": "Freeze IOCArray",
          "signature": "IOCArray i e-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeFreezeIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeReplaceCArray",
          "package": "carray",
          "signature": "CArray i e -\u003e [(Int, e)] -\u003e IO (CArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeReplaceCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeReplaceCArray",
          "normalized": "CArray a b-\u003e[(Int,b)]-\u003eIO(CArray a b)",
          "package": "carray",
          "partial": "Replace CArray",
          "signature": "CArray i e-\u003e[(Int,e)]-\u003eIO(CArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeReplaceCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.CArray.Base",
          "name": "unsafeThawIOCArray",
          "package": "carray",
          "signature": "CArray i e -\u003e IO (IOCArray i e)",
          "source": "src/Data-Array-CArray-Base.html#unsafeThawIOCArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "unsafeThawIOCArray",
          "normalized": "CArray a b-\u003eIO(IOCArray a b)",
          "package": "carray",
          "partial": "Thaw IOCArray",
          "signature": "CArray i e-\u003eIO(IOCArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:unsafeThawIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pointer to the array contents is obtained by \u003ccode\u003e\u003ca\u003ewithCArray\u003c/a\u003e\u003c/code\u003e.\n The idea is similar to \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e (used internally here).\n The pointer should be used only during execution of the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n retured by the function passed as argument to \u003ccode\u003e\u003ca\u003ewithCArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.CArray\"]",
          "name": "withCArray",
          "package": "carray",
          "signature": "CArray i e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Array-CArray-Base.html#withCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:withCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:withCArray\"]"
        },
        "index": {
          "description": "The pointer to the array contents is obtained by withCArray The idea is similar to ForeignPtr used internally here The pointer should be used only during execution of the IO action retured by the function passed as argument to withCArray",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "withCArray",
          "normalized": "CArray a b-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "package": "carray",
          "partial": "CArray",
          "signature": "CArray i e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:withCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.CArray.Base\",\"Data.Array.IOCArray\"]",
          "name": "withIOCArray",
          "package": "carray",
          "signature": "IOCArray i e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Array-CArray-Base.html#withIOCArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:withIOCArray\",\"http://hackage.haskell.org/package/carray/docs/Data-Array-IOCArray.html#v:withIOCArray\"]"
        },
        "index": {
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "withIOCArray",
          "normalized": "IOCArray a b-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "package": "carray",
          "partial": "IOCArray",
          "signature": "IOCArray i e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:withIOCArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHackish way to get the zero element for a Storable type.\n\u003c/p\u003e",
          "module": "Data.Array.CArray.Base",
          "name": "zeroElem",
          "package": "carray",
          "signature": "a -\u003e a",
          "source": "src/Data-Array-CArray-Base.html#zeroElem",
          "type": "function"
        },
        "index": {
          "description": "Hackish way to get the zero element for Storable type",
          "hierarchy": "Data Array CArray Base",
          "module": "Data.Array.CArray.Base",
          "name": "zeroElem",
          "normalized": "a-\u003ea",
          "package": "carray",
          "partial": "Elem",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray-Base.html#v:zeroElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the immutable \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e which uses pinned memory on the\n GC'd heap.  Elements are stored according to the class \u003ccode\u003eStorable\u003c/code\u003e.  You can\n obtain a pointer to the array contents to manipulate elements from\n languages like C.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e is 16-byte aligned by default.  If you create a \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003eunsafeForeignPtrToCArray\u003c/a\u003e\u003c/code\u003e then it may not be aligned.  This will be an issue\n if you intend to use SIMD instructions.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e but slower if you stay\n within Haskell.  \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e can handle more types and can be used by external\n libraries.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e has an instance of \u003ccode\u003eBinary\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.CArray",
          "name": "CArray",
          "package": "carray",
          "source": "src/Data-Array-CArray.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the immutable CArray which uses pinned memory on the GC heap Elements are stored according to the class Storable You can obtain pointer to the array contents to manipulate elements from languages like CArray is byte aligned by default If you create CArray with unsafeForeignPtrToCArray then it may not be aligned This will be an issue if you intend to use SIMD instructions CArray is similar to UArray but slower if you stay within Haskell CArray can handle more types and can be used by external libraries CArray has an instance of Binary",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "CArray",
          "package": "carray",
          "partial": "CArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHack so that norms have a sensible type.\n\u003c/p\u003e",
          "module": "Data.Array.CArray",
          "name": "Abs",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html#Abs",
          "type": "class"
        },
        "index": {
          "description": "Hack so that norms have sensible type",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "Abs",
          "package": "carray",
          "partial": "Abs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#t:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe immutable array type.\n\u003c/p\u003e",
          "module": "Data.Array.CArray",
          "name": "CArray",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html#CArray",
          "type": "data"
        },
        "index": {
          "description": "The immutable array type",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "CArray",
          "package": "carray",
          "partial": "CArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#t:CArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need this type class to distinguish between different tuples of Ix.\n There are Shapable instances for homogenous Int tuples, but may Haddock\n doesn't see them.\n\u003c/p\u003e",
          "module": "Data.Array.CArray",
          "name": "Shapable",
          "package": "carray",
          "type": "class"
        },
        "index": {
          "description": "We need this type class to distinguish between different tuples of Ix There are Shapable instances for homogenous Int tuples but may Haddock doesn see them",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "Shapable",
          "package": "carray",
          "partial": "Shapable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#t:Shapable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the rank of an array.\n\u003c/p\u003e",
          "module": "Data.Array.CArray",
          "name": "rank",
          "package": "carray",
          "signature": "a i e -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Determine the rank of an array",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "rank",
          "normalized": "a b c-\u003eInt",
          "package": "carray",
          "signature": "a i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCanonical representation of the shape.\n The following properties hold:\n     'length . shape = rank'\n     'product . shape = size'\n\u003c/p\u003e",
          "module": "Data.Array.CArray",
          "name": "shape",
          "package": "carray",
          "signature": "a i e -\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "Canonical representation of the shape The following properties hold length shape rank product shape size",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "shape",
          "normalized": "a b c-\u003e[Int]",
          "package": "carray",
          "signature": "a i e-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the Array.\n\u003c/p\u003e",
          "module": "Data.Array.CArray",
          "name": "size",
          "package": "carray",
          "signature": "a i e -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Number of elements in the Array",
          "hierarchy": "Data Array CArray",
          "module": "Data.Array.CArray",
          "name": "size",
          "normalized": "a b c-\u003eInt",
          "package": "carray",
          "signature": "a i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-CArray.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides both the mutable \u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e which uses pinned memory on\n the GC'd heap.  Elements are stored according to the class \u003ccode\u003eStorable\u003c/code\u003e.  You\n can obtain a pointer to the array contents to manipulate elements from\n languages like C.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e is 16-byte aligned by default.  If you create a \u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003e\u003ca\u003eunsafeForeignPtrToIOCArray\u003c/a\u003e\u003c/code\u003e then it may not be aligned.  This will be an\n issue if you intend to use SIMD instructions.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e and similar\n to \u003ccode\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/code\u003e but slower.  \u003ccode\u003e\u003ca\u003eIOCArray\u003c/a\u003e\u003c/code\u003e has O(1) versions of\n \u003ccode\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsafeThaw\u003c/a\u003e\u003c/code\u003e when converting to/from \u003ccode\u003e\u003ca\u003eCArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.IOCArray",
          "name": "IOCArray",
          "package": "carray",
          "source": "src/Data-Array-IOCArray.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides both the mutable IOCArray which uses pinned memory on the GC heap Elements are stored according to the class Storable You can obtain pointer to the array contents to manipulate elements from languages like IOCArray is byte aligned by default If you create IOCArray with unsafeForeignPtrToIOCArray then it may not be aligned This will be an issue if you intend to use SIMD instructions IOCArray is equivalent to StorableArray and similar to IOUArray but slower IOCArray has versions of unsafeFreeze and unsafeThaw when converting to from CArray",
          "hierarchy": "Data Array IOCArray",
          "module": "Data.Array.IOCArray",
          "name": "IOCArray",
          "package": "carray",
          "partial": "IOCArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-IOCArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolutely equivalent representation, but used for the mutable interface.\n\u003c/p\u003e",
          "module": "Data.Array.IOCArray",
          "name": "IOCArray",
          "package": "carray",
          "source": "src/Data-Array-CArray-Base.html#IOCArray",
          "type": "data"
        },
        "index": {
          "description": "Absolutely equivalent representation but used for the mutable interface",
          "hierarchy": "Data Array IOCArray",
          "module": "Data.Array.IOCArray",
          "name": "IOCArray",
          "package": "carray",
          "partial": "IOCArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/carray/docs/Data-Array-IOCArray.html#t:IOCArray"
      }
    }
  ]
]