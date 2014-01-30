[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeprecated - use storable-static-array instead.\n\u003c/p\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e, a simple wrapper around\n\u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e with its dimensions encoded in the\ntype. \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e provides a \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance that uses\nthe type-level dimensions, and significantly eases writing FFI\nbindings to fixed-size native arrays. For example,\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e 10 CInt\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance that is\ndirectly compatible with \u003ccode\u003eint foo[10]\u003c/code\u003e in native code.\n\u003c/p\u003e\u003cp\u003eMultidimensional native arrays are also\nsupported. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e '(10,20,100) CUChar\u003c/code\u003e is compatible\nwith \u003ccode\u003eunsigned char foo[10][20][100]\u003c/code\u003e. Note the leading \u003ccode\u003e'\u003c/code\u003e before\nthe tuple containing the dimensions. It marks it as a \u003ccode\u003eDataKinds\u003c/code\u003e\nlifted tuple, necessary to store the dimensions.\n\u003c/p\u003e\u003cp\u003eTo operate on the contents of a \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e, use\n\u003ccode\u003e\u003ca\u003etoStorableArray\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003etoStorableArray\u003c/a\u003e\u003c/code\u003e returns a \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e with\nthe correct type and index values already in place. For example, the\nresult of \u003ccode\u003e\u003ca\u003etoStorableArray\u003c/a\u003e\u003c/code\u003e on a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e '(10,20,100)\nCUChar\u003c/code\u003e is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e (Int, Int, Int) CUChar\u003c/code\u003e with its bounds\nset to \u003ccode\u003e((0,0,0),(9,19,99))\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html",
        "fct-type": "module",
        "title": "FixedStorableArray"
      },
      "index": {
        "description": "Deprecated use storable-static-array instead This module defines FixedStorableArray simple wrapper around StorableArray with its dimensions encoded in the type FixedStorableArray provides Storable instance that uses the type-level dimensions and significantly eases writing FFI bindings to fixed-size native arrays For example FixedStorableArray CInt has Storable instance that is directly compatible with int foo in native code Multidimensional native arrays are also supported FixedStorableArray CUChar is compatible with unsigned char foo Note the leading before the tuple containing the dimensions It marks it as DataKinds lifted tuple necessary to store the dimensions To operate on the contents of FixedStorableArray use toStorableArray toStorableArray returns StorableArray with the correct type and index values already in place For example the result of toStorableArray on FixedStorableArray CUChar is StorableArray Int Int Int CUChar with its bounds set to",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "FixedStorableArray",
        "normalized": "",
        "package": "fixed-storable-array",
        "partial": "Fixed Storable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#t:FixedStorableArray",
      "description": {
        "fct-descr": "\u003cp\u003eA minimal wrapper for \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e that encodes the full\n dimensions of the array in the type. Intended for interfacing with\n (possibly-)multidimensional arrays of fixed size in native code.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "data",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#FixedStorableArray",
        "fct-type": "data",
        "title": "FixedStorableArray"
      },
      "index": {
        "description": "minimal wrapper for StorableArray that encodes the full dimensions of the array in the type Intended for interfacing with possibly multidimensional arrays of fixed size in native code",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "FixedStorableArray",
        "normalized": "",
        "package": "fixed-storable-array",
        "partial": "Fixed Storable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#t:HasBounds",
      "description": {
        "fct-descr": "\u003cp\u003eThis class connects dimension description types with\n \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e index types and values. Instances are provided for\n up to 13 dimensions. More can be added if there's any need.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "class",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#HasBounds",
        "fct-type": "class",
        "title": "HasBounds"
      },
      "index": {
        "description": "This class connects dimension description types with StorableArray index types and values Instances are provided for up to dimensions More can be added if there any need",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "HasBounds",
        "normalized": "",
        "package": "fixed-storable-array",
        "partial": "Has Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#v:bounds",
      "description": {
        "fct-descr": "\u003cp\u003eThe concrete bounds for this dimension\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "FixedStorableArray d e -\u003e (Bound d, Bound d)",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#bounds",
        "fct-type": "method",
        "title": "bounds"
      },
      "index": {
        "description": "The concrete bounds for this dimension",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "bounds",
        "normalized": "FixedStorableArray a b-\u003e(Bound a,Bound a)",
        "package": "fixed-storable-array",
        "partial": "",
        "signature": "FixedStorableArray d e-\u003e(Bound d,Bound d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#v:fromNat",
      "description": {
        "fct-descr": "\u003cp\u003eA conversion function for converting type-level naturals to\n value-level. This is being exposed to aid in the creation of\n additional \u003ccode\u003e\u003ca\u003eHasBounds\u003c/a\u003e\u003c/code\u003e instances for those who might desire to do\n so.\n\u003c/p\u003e\u003cp\u003eHaddock is currently eating the important qualification that the\n type variable \u003ccode\u003en\u003c/code\u003e must have the kind \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eSingI\u003c/a\u003e\u003c/code\u003e instance is\n automatically fulfilled for all types of kind \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e. Its explicit\n presence in the signature is an artifact of how GHC implements\n dictionary passing and type erasure.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "proxy n -\u003e Int",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#fromNat",
        "fct-type": "function",
        "title": "fromNat"
      },
      "index": {
        "description": "conversion function for converting type-level naturals to value-level This is being exposed to aid in the creation of additional HasBounds instances for those who might desire to do so Haddock is currently eating the important qualification that the type variable must have the kind Nat The SingI instance is automatically fulfilled for all types of kind Nat Its explicit presence in the signature is an artifact of how GHC implements dictionary passing and type erasure",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "fromNat",
        "normalized": "a b-\u003eInt",
        "package": "fixed-storable-array",
        "partial": "Nat",
        "signature": "proxy n-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#v:newFixedStorableArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e and populate it with copies of the\n element passed in. Dimensions will be determined from the return\n type.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "e -\u003e IO (FixedStorableArray d e)",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#newFixedStorableArray",
        "fct-type": "function",
        "title": "newFixedStorableArray"
      },
      "index": {
        "description": "Create FixedStorableArray and populate it with copies of the element passed in Dimensions will be determined from the return type",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "newFixedStorableArray",
        "normalized": "a-\u003eIO(FixedStorableArray b a)",
        "package": "fixed-storable-array",
        "partial": "Fixed Storable Array",
        "signature": "e-\u003eIO(FixedStorableArray d e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#v:newFixedStorableArray_",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e and don't populate it with anything\n in particular. Contents may or may not be initialized to anything\n at all. Dimensions will be determined from the return type.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "IO (FixedStorableArray d e)",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#newFixedStorableArray_",
        "fct-type": "function",
        "title": "newFixedStorableArray_"
      },
      "index": {
        "description": "Create FixedStorableArray and don populate it with anything in particular Contents may or may not be initialized to anything at all Dimensions will be determined from the return type",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "newFixedStorableArray_",
        "normalized": "",
        "package": "fixed-storable-array",
        "partial": "Fixed Storable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-storable-array/docs/Foreign-Marshal-FixedStorableArray.html#v:toStorableArray",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the backing \u003ccode\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/code\u003e of this\n \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e. The backing array is shared such that\n modifications to it will be seen across all uses of this\n \u003ccode\u003e\u003ca\u003eFixedStorableArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.FixedStorableArray",
        "fct-package": "fixed-storable-array",
        "fct-signature": "FixedStorableArray dimensions e -\u003e StorableArray (Bound dimensions) e",
        "fct-source": "src/Foreign-Marshal-FixedStorableArray.html#toStorableArray",
        "fct-type": "function",
        "title": "toStorableArray"
      },
      "index": {
        "description": "Returns the backing StorableArray of this FixedStorableArray The backing array is shared such that modifications to it will be seen across all uses of this FixedStorableArray",
        "hierarchy": "Foreign Marshal FixedStorableArray",
        "module": "Foreign.Marshal.FixedStorableArray",
        "name": "toStorableArray",
        "normalized": "FixedStorableArray a b-\u003eStorableArray(Bound a)b",
        "package": "fixed-storable-array",
        "partial": "Storable Array",
        "signature": "FixedStorableArray dimensions e-\u003eStorableArray(Bound dimensions)e"
      }
    }
  }
]