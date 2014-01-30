[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIxStatic\u003c/a\u003e\u003c/code\u003e is a class that uses type-level constraints to generate the\nvalues used by an \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eThis module contains instances of \u003ccode\u003e\u003ca\u003eIxStatic\u003c/a\u003e\u003c/code\u003e for types of kind \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e,\ntypes of the promoted kind '[\u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e], and promoted tuples of \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e up\nto 5 elements. This is the largest size of tuple that has an \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e\ninstance.\n\u003c/p\u003e\u003cp\u003eThere are also data types provided to simulate promoted tuples and\nlists. These are less syntactically pleasant to use, but are sometimes\nhelpful. In particular, the single \u003ccode\u003e'\u003c/code\u003e used by promoted types can\ninterfere with \u003ccode\u003eCPP\u003c/code\u003e operation, so alternate means of specifying\nmultiple dimensions are provided.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "module",
        "fct-source": "src/Data-Ix-Static.html",
        "fct-type": "module",
        "title": "Static"
      },
      "index": {
        "description": "IxStatic is class that uses type-level constraints to generate the values used by an Ix instance This module contains instances of IxStatic for types of kind Nat types of the promoted kind Nat and promoted tuples of Nat up to elements This is the largest size of tuple that has an Ix instance There are also data types provided to simulate promoted tuples and lists These are less syntactically pleasant to use but are sometimes helpful In particular the single used by promoted types can interfere with CPP operation so alternate means of specifying multiple dimensions are provided",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "Static",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t::.",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e is provided as an alternative means of constructing a\n type-level list of dimensions. \u003ccode\u003eDataKinds\u003c/code\u003e-promoted lists are also\n supported and easier to use in almost all cases. The exception is\n when \u003ccode\u003eCPP\u003c/code\u003e is involved, when a single \u003ccode\u003e'\u003c/code\u003e on a line causes \u003ccode\u003eCPP\u003c/code\u003e to\n fail.\n\u003c/p\u003e\u003cp\u003eWith \u003ccode\u003eTypeOperators\u003c/code\u003e and \u003ccode\u003eDataKinds\u003c/code\u003e enabled, \u003ccode\u003e\u003ccode\u003eStaticArray\u003c/code\u003e\n \u003ccode\u003eUArray\u003c/code\u003e (2:.10:.25:.\u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003eStaticArray\u003c/code\u003e\n \u003ccode\u003eUArray\u003c/code\u003e '[2,10,25] \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and both wrap a \u003ccode\u003e\u003ccode\u003eUArray\u003c/code\u003e\n (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e,(\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e)) \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with bounds \u003ccode\u003e((0,(0,0)),(1,(9,24)))\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNeither promoted lists nor this approach support creating\n 0-dimensional arrays, because they make no sense with\n \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Ix-Static.html#%3A.",
        "fct-type": "data",
        "title": ":."
      },
      "index": {
        "description": "is provided as an alternative means of constructing type-level list of dimensions DataKinds promoted lists are also supported and easier to use in almost all cases The exception is when CPP is involved when single on line causes CPP to fail With TypeOperators and DataKinds enabled StaticArray UArray Nil Int is equivalent to StaticArray UArray Int and both wrap UArray Int Int Int Int with bounds Neither promoted lists nor this approach support creating dimensional arrays because they make no sense with Storable",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": ":.",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t:D2",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative dimension type to promoted pairs, provided for\n syntactic compatibility with \u003ccode\u003eCPP\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Ix-Static.html#D2",
        "fct-type": "data",
        "title": "D2"
      },
      "index": {
        "description": "An alternative dimension type to promoted pairs provided for syntactic compatibility with CPP",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "D2",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t:D3",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative dimension type to promoted triples, provided for\n syntactic compatibility with \u003ccode\u003eCPP\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Ix-Static.html#D3",
        "fct-type": "data",
        "title": "D3"
      },
      "index": {
        "description": "An alternative dimension type to promoted triples provided for syntactic compatibility with CPP",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "D3",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t:D4",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative dimension type to promoted 4-tuples, provided for\n syntactic compatibility with \u003ccode\u003eCPP\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Ix-Static.html#D4",
        "fct-type": "data",
        "title": "D4"
      },
      "index": {
        "description": "An alternative dimension type to promoted tuples provided for syntactic compatibility with CPP",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "D4",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t:D5",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative dimension type to promoted 5-tuples, provided for\n syntactic compatibility with \u003ccode\u003eCPP\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Ix-Static.html#D5",
        "fct-type": "data",
        "title": "D5"
      },
      "index": {
        "description": "An alternative dimension type to promoted tuples provided for syntactic compatibility with CPP",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "D5",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t:IxStatic",
      "description": {
        "fct-descr": "\u003cp\u003eThis class connects dimension description types with \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e\n index types and values.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "class",
        "fct-source": "src/Data-Ix-Static.html#IxStatic",
        "fct-type": "class",
        "title": "IxStatic"
      },
      "index": {
        "description": "This class connects dimension description types with Ix index types and values",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "IxStatic",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Ix Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#t:Nil",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e is the terminator for type-level lists created with \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Data-Ix-Static.html#Nil",
        "fct-type": "data",
        "title": "Nil"
      },
      "index": {
        "description": "Nil is the terminator for type-level lists created with",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "Nil",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#v:fromNat",
      "description": {
        "fct-descr": "\u003cp\u003eA conversion function for converting type-level naturals to\n value-level. This is being exposed to aid in the creation of\n additional \u003ccode\u003e\u003ca\u003eIxStatic\u003c/a\u003e\u003c/code\u003e instances for those who might desire to do\n so.\n\u003c/p\u003e\u003cp\u003eHaddock is currently eating the important qualification that the\n type variable \u003ccode\u003en\u003c/code\u003e must have the kind \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eSingI\u003c/a\u003e\u003c/code\u003e instance is\n automatically fulfilled for all types of kind \u003ccode\u003e\u003ca\u003eNat\u003c/a\u003e\u003c/code\u003e. Its explicit\n presence in the signature is an artifact of how GHC implements\n dictionary passing and type erasure.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "proxy n -\u003e Int",
        "fct-source": "src/Data-Ix-Static.html#fromNat",
        "fct-type": "function",
        "title": "fromNat"
      },
      "index": {
        "description": "conversion function for converting type-level naturals to value-level This is being exposed to aid in the creation of additional IxStatic instances for those who might desire to do so Haddock is currently eating the important qualification that the type variable must have the kind Nat The SingI instance is automatically fulfilled for all types of kind Nat Its explicit presence in the signature is an artifact of how GHC implements dictionary passing and type erasure",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "fromNat",
        "normalized": "a b-\u003eInt",
        "package": "storable-static-array",
        "partial": "Nat",
        "signature": "proxy n-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Data-Ix-Static.html#v:taggedBounds",
      "description": {
        "fct-descr": "\u003cp\u003eThe concrete bounds for an array of this\n dimensionality, tagged with the dimensionality.\n\u003c/p\u003e",
        "fct-module": "Data.Ix.Static",
        "fct-package": "storable-static-array",
        "fct-signature": "Tagged d (Index d, Index d)",
        "fct-source": "src/Data-Ix-Static.html#taggedBounds",
        "fct-type": "method",
        "title": "taggedBounds"
      },
      "index": {
        "description": "The concrete bounds for an array of this dimensionality tagged with the dimensionality",
        "hierarchy": "Data Ix Static",
        "module": "Data.Ix.Static",
        "name": "taggedBounds",
        "normalized": "Tagged a(Index a,Index a)",
        "package": "storable-static-array",
        "partial": "Bounds",
        "signature": "Tagged d(Index d,Index d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e, a simple wrapper around arrays with\ntheir dimensions in the type. \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e provides \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e\ninstances using the type-level dimensions. This eases writing FFI\nbindings to fixed-size native arrays. For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e\n\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e 10 CInt\u003c/code\u003e has a \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance that is directly\ncompatible with \u003ccode\u003eint foo[10]\u003c/code\u003e in native code.\n\u003c/p\u003e\u003cp\u003eMultidimensional native arrays are also supported. \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e\n\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e '(10,20,100) CUChar\u003c/code\u003e is compatible with \u003ccode\u003eunsigned char\nfoo[10][20][100]\u003c/code\u003e. Note the leading \u003ccode\u003e'\u003c/code\u003e before the tuple containing\nthe dimensions. It marks it as a \u003ccode\u003eDataKinds\u003c/code\u003e promoted tuple, necessary\nto store the dimensions.\n\u003c/p\u003e\u003cp\u003eTo operate on the contents of a \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e, use\n\u003ccode\u003e\u003ca\u003etoArray\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003etoArray\u003c/a\u003e\u003c/code\u003e returns the backing array with the correct type\nand index values already in place. For example, the result of\n\u003ccode\u003e\u003ca\u003etoArray\u003c/a\u003e\u003c/code\u003e on a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e '(10,20,100) CUChar\u003c/code\u003e is a\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e (Int, Int, Int) CUChar\u003c/code\u003e with its bounds set to\n\u003ccode\u003e((0,0,0),(9,19,99))\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Marshal.StaticArray",
        "fct-package": "storable-static-array",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Marshal-StaticArray.html",
        "fct-type": "module",
        "title": "StaticArray"
      },
      "index": {
        "description": "This module defines StaticArray simple wrapper around arrays with their dimensions in the type StaticArray provides Storable instances using the type-level dimensions This eases writing FFI bindings to fixed-size native arrays For example StaticArray UArray CInt has Storable instance that is directly compatible with int foo in native code Multidimensional native arrays are also supported StaticArray UArray CUChar is compatible with unsigned char foo Note the leading before the tuple containing the dimensions It marks it as DataKinds promoted tuple necessary to store the dimensions To operate on the contents of StaticArray use toArray toArray returns the backing array with the correct type and index values already in place For example the result of toArray on StaticArray UArray CUChar is UArray Int Int Int CUChar with its bounds set to",
        "hierarchy": "Foreign Marshal StaticArray",
        "module": "Foreign.Marshal.StaticArray",
        "name": "StaticArray",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Static Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticArray.html#t:StaticArray",
      "description": {
        "fct-descr": "\u003cp\u003eA minimal array wrapper that encodes the full dimensions of the\n array in the type. Intended for interfacing with\n (possibly-)multidimensional arrays of fixed size in native code.\n\u003c/p\u003e\u003cp\u003eThe constructor is not exported to prevent creating a \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e\n with a size that doesn't match its dimensions.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticArray",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Foreign-Marshal-StaticArray.html#StaticArray",
        "fct-type": "data",
        "title": "StaticArray"
      },
      "index": {
        "description": "minimal array wrapper that encodes the full dimensions of the array in the type Intended for interfacing with possibly multidimensional arrays of fixed size in native code The constructor is not exported to prevent creating StaticArray with size that doesn match its dimensions",
        "hierarchy": "Foreign Marshal StaticArray",
        "module": "Foreign.Marshal.StaticArray",
        "name": "StaticArray",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Static Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticArray.html#v:listStaticArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e from a list of elements in index\n order. Implemented in terms of \u003ccode\u003e\u003ca\u003elistArray\u003c/a\u003e\u003c/code\u003e, with the same caveats.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticArray",
        "fct-package": "storable-static-array",
        "fct-signature": "[e] -\u003e StaticArray b d e",
        "fct-source": "src/Foreign-Marshal-StaticArray.html#listStaticArray",
        "fct-type": "function",
        "title": "listStaticArray"
      },
      "index": {
        "description": "Create new StaticArray from list of elements in index order Implemented in terms of listArray with the same caveats",
        "hierarchy": "Foreign Marshal StaticArray",
        "module": "Foreign.Marshal.StaticArray",
        "name": "listStaticArray",
        "normalized": "[a]-\u003eStaticArray b c a",
        "package": "storable-static-array",
        "partial": "Static Array",
        "signature": "[e]-\u003eStaticArray b d e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticArray.html#v:staticArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e from a list of indices and\n elements. This has all the semantic caveats of \u003ccode\u003e\u003ca\u003earray\u003c/a\u003e\u003c/code\u003e, except that\n the bounds are as good as those provided by the \u003ccode\u003e\u003ca\u003eIxStatic\u003c/a\u003e\u003c/code\u003e\n instance.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticArray",
        "fct-package": "storable-static-array",
        "fct-signature": "[(Index d, e)] -\u003e StaticArray b d e",
        "fct-source": "src/Foreign-Marshal-StaticArray.html#staticArray",
        "fct-type": "function",
        "title": "staticArray"
      },
      "index": {
        "description": "Create new StaticArray from list of indices and elements This has all the semantic caveats of array except that the bounds are as good as those provided by the IxStatic instance",
        "hierarchy": "Foreign Marshal StaticArray",
        "module": "Foreign.Marshal.StaticArray",
        "name": "staticArray",
        "normalized": "[(Index a,b)]-\u003eStaticArray c a b",
        "package": "storable-static-array",
        "partial": "Array",
        "signature": "[(Index d,e)]-\u003eStaticArray b d e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticArray.html#v:staticBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGet the compile-time bounds from a \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e. Does not examine its\n argument.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticArray",
        "fct-package": "storable-static-array",
        "fct-signature": "StaticArray b d e -\u003e (Index d, Index d)",
        "fct-source": "src/Foreign-Marshal-StaticArray.html#staticBounds",
        "fct-type": "function",
        "title": "staticBounds"
      },
      "index": {
        "description": "Get the compile-time bounds from StaticArray Does not examine its argument",
        "hierarchy": "Foreign Marshal StaticArray",
        "module": "Foreign.Marshal.StaticArray",
        "name": "staticBounds",
        "normalized": "StaticArray a b c-\u003e(Index b,Index b)",
        "package": "storable-static-array",
        "partial": "Bounds",
        "signature": "StaticArray b d e-\u003e(Index d,Index d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticArray.html#v:toArray",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the backing value of this \u003ccode\u003e\u003ca\u003eStaticArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticArray",
        "fct-package": "storable-static-array",
        "fct-signature": "StaticArray backing dimensions elements -\u003e backing (Index dimensions) elements",
        "fct-source": "src/Foreign-Marshal-StaticArray.html#toArray",
        "fct-type": "function",
        "title": "toArray"
      },
      "index": {
        "description": "Returns the backing value of this StaticArray",
        "hierarchy": "Foreign Marshal StaticArray",
        "module": "Foreign.Marshal.StaticArray",
        "name": "toArray",
        "normalized": "StaticArray a b c-\u003ea(Index b)c",
        "package": "storable-static-array",
        "partial": "Array",
        "signature": "StaticArray backing dimensions elements-\u003ebacking(Index dimensions)elements"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticVector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e, a simple wrapper around\n\u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e with the dimensions in the type. \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e provides a\n\u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance using the type-level dimensions. This eases\nwriting FFI bindings to fixed-size native arrays.\n\u003c/p\u003e\u003cp\u003eSupport for interop with multi-dimensional native arrays is provided\nvia the \u003ccode\u003e\u003ca\u003eIxStatic\u003c/a\u003e\u003c/code\u003e class. This results in the slightly unnatural case\nwhere you might need to convert \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e coordinates to \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\nindices, but it felt like an acceptable tradeoff when interfacing with\nmulti-dimensional native arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.Marshal.StaticVector",
        "fct-package": "storable-static-array",
        "fct-signature": "module",
        "fct-source": "src/Foreign-Marshal-StaticVector.html",
        "fct-type": "module",
        "title": "StaticVector"
      },
      "index": {
        "description": "This module defines StaticVector simple wrapper around Vector with the dimensions in the type StaticVector provides Storable instance using the type-level dimensions This eases writing FFI bindings to fixed-size native arrays Support for interop with multi-dimensional native arrays is provided via the IxStatic class This results in the slightly unnatural case where you might need to convert Ix coordinates to Vector indices but it felt like an acceptable tradeoff when interfacing with multi-dimensional native arrays",
        "hierarchy": "Foreign Marshal StaticVector",
        "module": "Foreign.Marshal.StaticVector",
        "name": "StaticVector",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Static Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticVector.html#t:StaticVector",
      "description": {
        "fct-descr": "\u003cp\u003eA minimal \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e wrapper that encodes the full dimensions of\n the array in the type. Intended for interfacing with\n (possibly-)multidimensional arrays of fixed size in native code.\n\u003c/p\u003e\u003cp\u003eIf this is used with multidimensional arrays, it will be up to\n users to deal with converting \u003ccode\u003e\u003ca\u003eIx\u003c/a\u003e\u003c/code\u003e coordinates to internal\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e indices.\n\u003c/p\u003e\u003cp\u003eThe constructor is not exported to prevent creating a\n \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e with a size that doesn't match its dimensions.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticVector",
        "fct-package": "storable-static-array",
        "fct-signature": "data",
        "fct-source": "src/Foreign-Marshal-StaticVector.html#StaticVector",
        "fct-type": "data",
        "title": "StaticVector"
      },
      "index": {
        "description": "minimal Vector wrapper that encodes the full dimensions of the array in the type Intended for interfacing with possibly multidimensional arrays of fixed size in native code If this is used with multidimensional arrays it will be up to users to deal with converting Ix coordinates to internal Vector indices The constructor is not exported to prevent creating StaticVector with size that doesn match its dimensions",
        "hierarchy": "Foreign Marshal StaticVector",
        "module": "Foreign.Marshal.StaticVector",
        "name": "StaticVector",
        "normalized": "",
        "package": "storable-static-array",
        "partial": "Static Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticVector.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e with the contents of the list. If the\n list passed in contains too many elements, the result will be\n truncated. If it contains too few elements, they will be cycled to\n pad out the remaining space. If it contains 0 elements, this will\n result in an error.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticVector",
        "fct-package": "storable-static-array",
        "fct-signature": "[e] -\u003e StaticVector b d e",
        "fct-source": "src/Foreign-Marshal-StaticVector.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create new StaticVector with the contents of the list If the list passed in contains too many elements the result will be truncated If it contains too few elements they will be cycled to pad out the remaining space If it contains elements this will result in an error",
        "hierarchy": "Foreign Marshal StaticVector",
        "module": "Foreign.Marshal.StaticVector",
        "name": "fromList",
        "normalized": "[a]-\u003eStaticVector b c a",
        "package": "storable-static-array",
        "partial": "List",
        "signature": "[e]-\u003eStaticVector b d e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticVector.html#v:staticBounds",
      "description": {
        "fct-descr": "\u003cp\u003eGet the compile-time bounds from a \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e. Does not\n examine its argument.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticVector",
        "fct-package": "storable-static-array",
        "fct-signature": "StaticVector b d e -\u003e (Index d, Index d)",
        "fct-source": "src/Foreign-Marshal-StaticVector.html#staticBounds",
        "fct-type": "function",
        "title": "staticBounds"
      },
      "index": {
        "description": "Get the compile-time bounds from StaticVector Does not examine its argument",
        "hierarchy": "Foreign Marshal StaticVector",
        "module": "Foreign.Marshal.StaticVector",
        "name": "staticBounds",
        "normalized": "StaticVector a b c-\u003e(Index b,Index b)",
        "package": "storable-static-array",
        "partial": "Bounds",
        "signature": "StaticVector b d e-\u003e(Index d,Index d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticVector.html#v:staticSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the compile-time size from a \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e. Does not examine\n its argument.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticVector",
        "fct-package": "storable-static-array",
        "fct-signature": "StaticVector b d e -\u003e Int",
        "fct-source": "src/Foreign-Marshal-StaticVector.html#staticSize",
        "fct-type": "function",
        "title": "staticSize"
      },
      "index": {
        "description": "Get the compile-time size from StaticVector Does not examine its argument",
        "hierarchy": "Foreign Marshal StaticVector",
        "module": "Foreign.Marshal.StaticVector",
        "name": "staticSize",
        "normalized": "StaticVector a b c-\u003eInt",
        "package": "storable-static-array",
        "partial": "Size",
        "signature": "StaticVector b d e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable-static-array/docs/Foreign-Marshal-StaticVector.html#v:toVector",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the backing value of this \u003ccode\u003e\u003ca\u003eStaticVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Foreign.Marshal.StaticVector",
        "fct-package": "storable-static-array",
        "fct-signature": "StaticVector backing dimensions elements -\u003e backing elements",
        "fct-source": "src/Foreign-Marshal-StaticVector.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "Returns the backing value of this StaticVector",
        "hierarchy": "Foreign Marshal StaticVector",
        "module": "Foreign.Marshal.StaticVector",
        "name": "toVector",
        "normalized": "StaticVector a b c-\u003ea c",
        "package": "storable-static-array",
        "partial": "Vector",
        "signature": "StaticVector backing dimensions elements-\u003ebacking elements"
      }
    }
  }
]