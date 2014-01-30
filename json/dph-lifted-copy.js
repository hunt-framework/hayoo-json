[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of closures.\n   This bundles up:\n      1) the vectorised version of the function that takes an explicit environment\n      2) the lifted version, that works on arrays.\n           the first parameter of this function is the 'lifting context'\n           that gives the length of the array.\n      3) the environment of the closure.\n\u003c/p\u003e\u003cp\u003eThe vectoriser closure-converts the source program so that all functions\n   types are expressed in this form.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
        "fct-type": "data",
        "title": ":-\u003e"
      },
      "index": {
        "description": "The type of closures This bundles up the vectorised version of the function that takes an explicit environment the lifted version that works on arrays the first parameter of this function is the lifting context that gives the length of the array the environment of the closure The vectoriser closure-converts the source program so that all functions types are expressed in this form",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": ":-\u003e",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PA",
      "description": {
        "fct-descr": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n   The conversion methods should all be O(1).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#PA",
        "fct-type": "class",
        "title": "PA"
      },
      "index": {
        "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversion methods should all be",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "PA",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PArray",
      "description": {
        "fct-descr": "\u003cp\u003eLifted/bulk parallel arrays\n   This contains the array length, along with the element data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
        "fct-type": "data",
        "title": "PArray"
      },
      "index": {
        "description": "Lifted bulk parallel arrays This contains the array length along with the element data",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PData",
      "description": {
        "fct-descr": "\u003cp\u003eParallel Data.\n   This is the family of types that store parallel array data.\n\u003c/p\u003e\u003cp\u003ePData takes the type of an element and produces the type we use to store\n   an array of those elements. The instances for PData use an efficient\n   representation that depends on the type of elements being stored.\n   For example, an array of pairs is stored as two separate arrays, one for\n   each element type. This lets us avoid storing the intermediate Pair/Tuple\n   constructors and the pointers to the elements.\n\u003c/p\u003e\u003cp\u003eMost of the instances are defined in \u003ca\u003eData.Array.Parallel.PArray.Instances\u003c/a\u003e,\n   though the instances for function closures are defined in their own module, \n   \u003ca\u003eData.Array.Parallel.Lifted.Closure\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote that PData is just a flat chunk of memory containing elements, and doesn't\n   include a field giving the length of the array. We use PArray when we want to\n   pass around the array data along with its length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PData",
        "fct-type": "function",
        "title": "PData"
      },
      "index": {
        "description": "Parallel Data This is the family of types that store parallel array data PData takes the type of an element and produces the type we use to store an array of those elements The instances for PData use an efficient representation that depends on the type of elements being stored For example an array of pairs is stored as two separate arrays one for each element type This lets us avoid storing the intermediate Pair Tuple constructors and the pointers to the elements Most of the instances are defined in Data.Array.Parallel.PArray.Instances though the instances for function closures are defined in their own module Data.Array.Parallel.Lifted.Closure Note that PData is just flat chunk of memory containing elements and doesn include field giving the length of the array We use PArray when we want to pass around the array data along with its length",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "PData",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PR",
      "description": {
        "fct-descr": "\u003cp\u003eA PR dictionary contains the primitive functions that operate directly\n   on parallel array data.\n\u003c/p\u003e\u003cp\u003eIt's called PR because the functions work on our internal, efficient\n   Representation of the user-level array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#PR",
        "fct-type": "class",
        "title": "PR"
      },
      "index": {
        "description": "PR dictionary contains the primitive functions that operate directly on parallel array data It called PR because the functions work on our internal efficient Representation of the user-level array",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "PR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PRepr",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentable types.\n\u003c/p\u003e\u003cp\u003eThe family of types that we know how to represent generically.\n   PRepr takes an arbitrary type and produces the generic type we use to \n   represent it.\n\u003c/p\u003e\u003cp\u003eInstances for simple types are defined in Data.Array.Parallel.Lifted.Instances.\n   For algebraic types, it's up to the vectoriser/client module to create\n   a suitable instance.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PRepr",
        "fct-type": "function",
        "title": "PRepr"
      },
      "index": {
        "description": "Representable types The family of types that we know how to represent generically PRepr takes an arbitrary type and produces the generic type we use to represent it Instances for simple types are defined in Data.Array.Parallel.Lifted.Instances For algebraic types it up to the vectoriser client module to create suitable instance",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "PRepr",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRepr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:Scalar",
      "description": {
        "fct-descr": "\u003cp\u003eClass of scalar types.\n   Scalar types are the ones that we can store in our underlying U.Arrays\n   (which are currently implemented as Data.Vectors).\n\u003c/p\u003e\u003cp\u003eTo perform an operation on a PData array of scalar elements, we coerce\n   it to the underling U.Array and use the corresponding U.Array operators.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#Scalar",
        "fct-type": "class",
        "title": "Scalar"
      },
      "index": {
        "description": "Class of scalar types Scalar types are the ones that we can store in our underlying U.Arrays which are currently implemented as Data.Vectors To perform an operation on PData array of scalar elements we coerce it to the underling U.Array and use the corresponding U.Array operators",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "Scalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:-36-:",
      "description": {
        "fct-descr": "\u003cp\u003eApply a closure to its argument.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "forall a b.  (a :-\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A",
        "fct-type": "function",
        "title": "($:)"
      },
      "index": {
        "description": "Apply closure to its argument",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "($:) $:",
        "normalized": "a b c(b-\u003ed)-\u003eb-\u003ed",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "forall a b.(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:-36-:-94-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted closure application\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "forall a b.  PArray (a :-\u003e b) -\u003e PArray a -\u003e PArray b",
        "fct-source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A%5E",
        "fct-type": "function",
        "title": "($:^)"
      },
      "index": {
        "description": "Lifted closure application",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "($:^) $:^",
        "normalized": "a b c PArray(b-\u003ed)-\u003ePArray b-\u003ePArray d",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "forall a b. PArray(a-\u003eb)-\u003ePArray a-\u003ePArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:PArray",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray Int# (PData a)",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
        "fct-type": "function",
        "title": "PArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#appPA%23",
        "fct-type": "function",
        "title": "appPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "appPA#",
        "normalized": "PArray a-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_appPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#appPD",
        "fct-type": "function",
        "title": "appPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "appPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_appPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#appPR",
        "fct-type": "method",
        "title": "appPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "appPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_appPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#appPRScalar",
        "fct-type": "function",
        "title": "appPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "appPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Segd -\u003e Segd -\u003e PArray a -\u003e Segd -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#applPA%23",
        "fct-type": "function",
        "title": "applPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "applPA#",
        "normalized": "Segd-\u003eSegd-\u003ePArray a-\u003eSegd-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "Segd-\u003eSegd-\u003ePArray a-\u003eSegd-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_applPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#applPD",
        "fct-type": "function",
        "title": "applPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "applPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_applPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#applPR",
        "fct-type": "method",
        "title": "applPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "applPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_applPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#applPRScalar",
        "fct-type": "function",
        "title": "applPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "applPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int# -\u003e Array Int -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#bpermutePA%23",
        "fct-type": "function",
        "title": "bpermutePA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "bpermutePA#",
        "normalized": "PArray a-\u003eInt #-\u003eArray Int-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003eInt #-\u003eArray Int-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_bpermutePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#bpermutePD",
        "fct-type": "function",
        "title": "bpermutePD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "bpermutePD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_bpermutePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#bpermutePR",
        "fct-type": "method",
        "title": "bpermutePR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "bpermutePR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_bpermutePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#bpermutePRScalar",
        "fct-type": "function",
        "title": "bpermutePRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "bpermutePRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int# -\u003e Sel2 -\u003e PArray a -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#combine2PA%23",
        "fct-type": "function",
        "title": "combine2PA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "combine2PA#",
        "normalized": "Int #-\u003eSel-\u003ePArray a-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "Int #-\u003eSel-\u003ePArray a-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_combine2PR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#combine2PD",
        "fct-type": "function",
        "title": "combine2PD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "combine2PD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_combine2PR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#combine2PR",
        "fct-type": "method",
        "title": "combine2PR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "combine2PR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_combine2PR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#combine2PRScalar",
        "fct-type": "function",
        "title": "combine2PRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "combine2PRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:dataPA-35-",
      "description": {
        "fct-descr": "\u003cp\u003eTake the data field of a PArray.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#dataPA%23",
        "fct-type": "function",
        "title": "dataPA#"
      },
      "index": {
        "description": "Take the data field of PArray",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "dataPA#",
        "normalized": "PArray a-\u003ePData a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPA",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#emptyPA",
        "fct-type": "function",
        "title": "emptyPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "emptyPA",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_emptyPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#emptyPD",
        "fct-type": "function",
        "title": "emptyPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "emptyPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_emptyPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#emptyPR",
        "fct-type": "method",
        "title": "emptyPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "emptyPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_emptyPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#emptyPRScalar",
        "fct-type": "function",
        "title": "emptyPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "emptyPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int# -\u003e Int# -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#extractPA%23",
        "fct-type": "function",
        "title": "extractPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "extractPA#",
        "normalized": "PArray a-\u003eInt #-\u003eInt #-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003eInt #-\u003eInt #-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_extractPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#extractPD",
        "fct-type": "function",
        "title": "extractPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "extractPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_extractPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#extractPR",
        "fct-type": "method",
        "title": "extractPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "extractPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_extractPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#extractPRScalar",
        "fct-type": "function",
        "title": "extractPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "extractPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromArrPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PData (PRepr a) -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#fromArrPRepr",
        "fct-type": "method",
        "title": "fromArrPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromArrPRepr",
        "normalized": "PData(PRepr a)-\u003ePData a",
        "package": "dph-lifted-copy",
        "partial": "Arr PRepr",
        "signature": "PData(PRepr a)-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromArrPReprs",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PDatas (PRepr a) -\u003e PDatas a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#fromArrPReprs",
        "fct-type": "method",
        "title": "fromArrPReprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromArrPReprs",
        "normalized": "PDatas(PRepr a)-\u003ePDatas a",
        "package": "dph-lifted-copy",
        "partial": "Arr PReprs",
        "signature": "PDatas(PRepr a)-\u003ePDatas a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPA",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[a] -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#fromListPA",
        "fct-type": "function",
        "title": "fromListPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromListPA",
        "normalized": "[a]-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "List PA",
        "signature": "[a]-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int# -\u003e [a] -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#fromListPA%23",
        "fct-type": "function",
        "title": "fromListPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromListPA#",
        "normalized": "Int #-\u003e[a]-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "List PA",
        "signature": "Int #-\u003e[a]-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_fromListPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#fromListPD",
        "fct-type": "function",
        "title": "fromListPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromListPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "List PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_fromListPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#fromListPR",
        "fct-type": "method",
        "title": "fromListPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromListPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "List PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_fromListPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromListPRScalar",
        "fct-type": "function",
        "title": "fromListPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromListPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "List PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromNestedPArrayPA",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray (PArray a) :-\u003e PArray (PArray a)",
        "fct-source": "src/Data-Array-Parallel-Lifted.html#fromNestedPArrayPA",
        "fct-type": "function",
        "title": "fromNestedPArrayPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromNestedPArrayPA",
        "normalized": "PArray(PArray a)-\u003ePArray(PArray a)",
        "package": "dph-lifted-copy",
        "partial": "Nested PArray PA",
        "signature": "PArray(PArray a)-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromPArrayPA",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a :-\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted.html#fromPArrayPA",
        "fct-type": "function",
        "title": "fromPArrayPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromPArrayPA",
        "normalized": "PArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PArray PA",
        "signature": "PArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PRepr a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#fromPRepr",
        "fct-type": "method",
        "title": "fromPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromPRepr",
        "normalized": "PRepr a-\u003ea",
        "package": "dph-lifted-copy",
        "partial": "PRepr",
        "signature": "PRepr a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromScalarPData",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PData a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPData",
        "fct-type": "method",
        "title": "fromScalarPData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "fromScalarPData",
        "normalized": "PData a-\u003eArray a",
        "package": "dph-lifted-copy",
        "partial": "Scalar PData",
        "signature": "PData a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int# -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#indexPA%23",
        "fct-type": "function",
        "title": "indexPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "indexPA#",
        "normalized": "PArray a-\u003eInt #-\u003ea",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003eInt #-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_indexPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#indexPD",
        "fct-type": "function",
        "title": "indexPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "indexPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_indexPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#indexPR",
        "fct-type": "method",
        "title": "indexPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "indexPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_indexPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#indexPRScalar",
        "fct-type": "function",
        "title": "indexPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "indexPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:lengthPA-35-",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length field of a PArray.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int#",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#lengthPA%23",
        "fct-type": "function",
        "title": "lengthPA#"
      },
      "index": {
        "description": "Take the length field of PArray",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "lengthPA#",
        "normalized": "PArray a-\u003eInt #",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPA",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e ()",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#nfPA",
        "fct-type": "function",
        "title": "nfPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "nfPA",
        "normalized": "PArray a-\u003e()",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_nfPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#nfPD",
        "fct-type": "function",
        "title": "nfPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "nfPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_nfPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#nfPR",
        "fct-type": "method",
        "title": "nfPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "nfPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_nfPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#nfPRScalar",
        "fct-type": "function",
        "title": "nfPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "nfPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int# -\u003e Array Tag -\u003e Int# -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#packByTagPA%23",
        "fct-type": "function",
        "title": "packByTagPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "packByTagPA#",
        "normalized": "PArray a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "By Tag PA",
        "signature": "PArray a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_packByTagPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#packByTagPD",
        "fct-type": "function",
        "title": "packByTagPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "packByTagPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "By Tag PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_packByTagPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#packByTagPR",
        "fct-type": "method",
        "title": "packByTagPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "packByTagPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "By Tag PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_packByTagPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#packByTagPRScalar",
        "fct-type": "function",
        "title": "packByTagPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "packByTagPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "By Tag PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int# -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#repeatPA%23",
        "fct-type": "function",
        "title": "repeatPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "repeatPA#",
        "normalized": "Int #-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "Int #-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_repeatPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#repeatPD",
        "fct-type": "function",
        "title": "repeatPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "repeatPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_repeatPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#repeatPR",
        "fct-type": "method",
        "title": "repeatPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "repeatPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_repeatPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#repeatPRScalar",
        "fct-type": "function",
        "title": "repeatPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "repeatPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int# -\u003e a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#replicatePA%23",
        "fct-type": "function",
        "title": "replicatePA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatePA#",
        "normalized": "Int #-\u003ea-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "Int #-\u003ea-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_replicatePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#replicatePD",
        "fct-type": "function",
        "title": "replicatePD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatePD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_replicatePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#replicatePR",
        "fct-type": "method",
        "title": "replicatePR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatePR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_replicatePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#replicatePRScalar",
        "fct-type": "function",
        "title": "replicatePRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatePRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Segd -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#replicatelPA%23",
        "fct-type": "function",
        "title": "replicatelPA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatelPA#",
        "normalized": "Segd-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "Segd-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_replicatelPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#replicatelPD",
        "fct-type": "function",
        "title": "replicatelPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatelPD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_replicatelPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#replicatelPR",
        "fct-type": "method",
        "title": "replicatelPR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatelPR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_replicatelPR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#replicatelPRScalar",
        "fct-type": "function",
        "title": "replicatelPRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "replicatelPRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toArrPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PData a -\u003e PData (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#toArrPRepr",
        "fct-type": "method",
        "title": "toArrPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "toArrPRepr",
        "normalized": "PData a-\u003ePData(PRepr a)",
        "package": "dph-lifted-copy",
        "partial": "Arr PRepr",
        "signature": "PData a-\u003ePData(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toArrPReprs",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PDatas a -\u003e PDatas (PRepr a)",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#toArrPReprs",
        "fct-type": "method",
        "title": "toArrPReprs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "toArrPReprs",
        "normalized": "PDatas a-\u003ePDatas(PRepr a)",
        "package": "dph-lifted-copy",
        "partial": "Arr PReprs",
        "signature": "PDatas a-\u003ePDatas(PRepr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toPArrayPA",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a :-\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted.html#toPArrayPA",
        "fct-type": "function",
        "title": "toPArrayPA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "toPArrayPA",
        "normalized": "PArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PArray PA",
        "signature": "PArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toPRepr",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "a -\u003e PRepr a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#toPRepr",
        "fct-type": "method",
        "title": "toPRepr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "toPRepr",
        "normalized": "a-\u003ePRepr a",
        "package": "dph-lifted-copy",
        "partial": "PRepr",
        "signature": "a-\u003ePRepr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toScalarPData",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Array a -\u003e PData a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPData",
        "fct-type": "method",
        "title": "toScalarPData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "toScalarPData",
        "normalized": "Array a-\u003ePData a",
        "package": "dph-lifted-copy",
        "partial": "Scalar PData",
        "signature": "Array a-\u003ePData a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePA-35-",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Array Int -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#updatePA%23",
        "fct-type": "function",
        "title": "updatePA#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "updatePA#",
        "normalized": "PArray a-\u003eArray Int-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": "PArray a-\u003eArray Int-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePD",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_updatePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#updatePD",
        "fct-type": "function",
        "title": "updatePD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "updatePD",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePR",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_updatePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-PData.html#updatePR",
        "fct-type": "method",
        "title": "updatePR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "updatePR",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePRScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Lifted",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "T_updatePR a",
        "fct-source": "src/Data-Array-Parallel-PArray-Scalar.html#updatePRScalar",
        "fct-type": "function",
        "title": "updatePRScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Lifted",
        "module": "Data.Array.Parallel.Lifted",
        "name": "updatePRScalar",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PRScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel Arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-PArray.html",
        "fct-type": "module",
        "title": "PArray"
      },
      "index": {
        "description": "Parallel Arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#t:PA",
      "description": {
        "fct-descr": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n   The conversion methods should all be O(1).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray-PRepr.html#PA",
        "fct-type": "class",
        "title": "PA"
      },
      "index": {
        "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversion methods should all be",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "PA",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#t:PArray",
      "description": {
        "fct-descr": "\u003cp\u003eLifted/bulk parallel arrays\n   This contains the array length, along with the element data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
        "fct-type": "data",
        "title": "PArray"
      },
      "index": {
        "description": "Lifted bulk parallel arrays This contains the array length along with the element data",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#t:Random",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-PArray.html#Random",
        "fct-type": "class",
        "title": "Random"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "Random",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:-33-:",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Retrieve a numbered element from an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#%21%3A",
        "fct-type": "function",
        "title": "(!:)"
      },
      "index": {
        "description": "Retrieve numbered element from an array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "(!:) !:",
        "normalized": "PArray a-\u003eInt-\u003ea",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:-43-:-43-",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two arrays\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#%2B%3A%2B",
        "fct-type": "function",
        "title": "(+:+)"
      },
      "index": {
        "description": "Append two arrays",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "(+:+) +:+",
        "normalized": "PArray a-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:bpermute",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Backwards permutation of array elements.\n\u003c/p\u003e\u003cpre\u003ebpermute [50, 60, 20, 30] [0, 3, 2]  = [50, 30, 20]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray Int -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#bpermute",
        "fct-type": "function",
        "title": "bpermute"
      },
      "index": {
        "description": "Backwards permutation of array elements bpermute",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "bpermute",
        "normalized": "PArray a-\u003ePArray Int-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003ePArray Int-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate an array of arrays into a single array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray (PArray a) -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Concatenate an array of arrays into single array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "concat",
        "normalized": "PArray(PArray a)-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray(PArray a)-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). An empty array, with no elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty array with no elements",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "empty",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Generate a range of \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e PArray Int",
        "fct-source": "src/Data-Array-Parallel-PArray.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Generate range of Int",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "enumFromTo",
        "normalized": "Int-\u003eInt-\u003ePArray Int",
        "package": "dph-lifted-copy",
        "partial": "From To",
        "signature": "Int-\u003eInt-\u003ePArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e from a list.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[a] -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create PArray from list",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromList",
        "normalized": "[a]-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "List",
        "signature": "[a]-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromUArray",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a PArray out of a scalar U.Array, \n   the first argument is the array length.\n\u003c/p\u003e\u003cp\u003eTODO: ditch this version, just use fromUArrPA'\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Array a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Scalar.html#fromUArray",
        "fct-type": "function",
        "title": "fromUArray"
      },
      "index": {
        "description": "Create PArray out of scalar U.Array the first argument is the array length TODO ditch this version just use fromUArrPA",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromUArray",
        "normalized": "Array a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "UArray",
        "signature": "Array a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromUArray2",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an U.Array of pairs to a PArray.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Array (a, b) -\u003e PArray (a, b)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Scalar.html#fromUArray2",
        "fct-type": "function",
        "title": "fromUArray2"
      },
      "index": {
        "description": "Convert an U.Array of pairs to PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromUArray2",
        "normalized": "Array(a,b)-\u003ePArray(a,b)",
        "package": "dph-lifted-copy",
        "partial": "UArray",
        "signature": "Array(a,b)-\u003ePArray(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromUArray3",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a U.Array of triples to a PArray.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Array ((a, b), c) -\u003e PArray (a, b, c)",
        "fct-source": "src/Data-Array-Parallel-Lifted-Scalar.html#fromUArray3",
        "fct-type": "function",
        "title": "fromUArray3"
      },
      "index": {
        "description": "Convert U.Array of triples to PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "fromUArray3",
        "normalized": "Array((a,b),c)-\u003ePArray(a,b,c)",
        "package": "dph-lifted-copy",
        "partial": "UArray",
        "signature": "Array((a,b),c)-\u003ePArray(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:indexed",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Tag each element of an array with its index.\n\u003c/p\u003e\u003cpre\u003eindexed [42, 93, 13] = [(0, 42), (1, 93), (2, 13)]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray (Int, a)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#indexed",
        "fct-type": "function",
        "title": "indexed"
      },
      "index": {
        "description": "Tag each element of an array with its index indexed",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "indexed",
        "normalized": "PArray a-\u003ePArray(Int,a)",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003ePArray(Int,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the length of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-PArray.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Yield the length of an array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "length",
        "normalized": "PArray a-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:nestUSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Create a nested array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Segd-\u003e PArray a-\u003e PArray (PArray a)",
        "fct-type": "function",
        "title": "nestUSegd"
      },
      "index": {
        "description": "Create nested array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "nestUSegd",
        "normalized": "Segd-\u003ePArray a-\u003ePArray(PArray a)",
        "package": "dph-lifted-copy",
        "partial": "USegd",
        "signature": "Segd-\u003ePArray a-\u003ePArray(PArray a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:nf",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure an array is fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e ()",
        "fct-source": "src/Data-Array-Parallel-PArray.html#nf",
        "fct-type": "function",
        "title": "nf"
      },
      "index": {
        "description": "Ensure an array is fully evaluated",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "nf",
        "normalized": "PArray a-\u003e()",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003eSelect the elements of an array that have their tag set as True.\n\u003c/p\u003e\u003cpre\u003e\n packPA [12, 24, 42, 93] [True, False, False, True]\n  = [24, 42]\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray Bool -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Select the elements of an array that have their tag set as True packPA True False False True",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "pack",
        "normalized": "PArray a-\u003ePArray Bool-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003ePArray Bool-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:randomRs",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e (a, a) -\u003e g -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#randomRs",
        "fct-type": "method",
        "title": "randomRs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "randomRs",
        "normalized": "Int-\u003e(a,a)-\u003eb-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "Rs",
        "signature": "Int-\u003e(a,a)-\u003eg-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:randoms",
      "description": {
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e g -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#randoms",
        "fct-type": "method",
        "title": "randoms"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "randoms",
        "normalized": "Int-\u003ea-\u003ePArray b",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eg-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Produce an array containing copies of a given element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "Produce an array containing copies of given element",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003ea-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Produce an array containing a single element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Produce an array containing single element",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "singleton",
        "normalized": "a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a subrange of elements from an array.\n   The first argument is the starting index, while the second is the \n   length of the slice.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e PArray a -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "Extract subrange of elements from an array The first argument is the starting index while the second is the length of the slice",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "slice",
        "normalized": "Int-\u003eInt-\u003ePArray a-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003ePArray a-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a list from a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e [a]",
        "fct-source": "src/Data-Array-Parallel-PArray.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Create list from PArray",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "toList",
        "normalized": "PArray a-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "List",
        "signature": "PArray a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:toUArray",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a PArray back to a plain U.Array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Lifted-Scalar.html#toUArray",
        "fct-type": "function",
        "title": "toUArray"
      },
      "index": {
        "description": "Convert PArray back to plain U.Array",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "toUArray",
        "normalized": "PArray a-\u003eArray a",
        "package": "dph-lifted-copy",
        "partial": "UArray",
        "signature": "PArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Transform an array into an array of the first components,\n         and an array of the second components.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray (a, b) -\u003e (PArray a, PArray b)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "Transform an array into an array of the first components and an array of the second components",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "unzip",
        "normalized": "PArray(a,b)-\u003e(PArray a,PArray b)",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray(a,b)-\u003e(PArray a,PArray b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eCopy the source array in the destination, using new values for the given indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray (Int, a) -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel-PArray.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Copy the source array in the destination using new values for the given indices",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "update",
        "normalized": "PArray a-\u003ePArray(Int,a)-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003ePArray(Int,a)-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Takes two arrays and returns an array of corresponding pairs.\n         If one array is short, excess elements of the longer array are\n         discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.PArray",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e PArray b -\u003e PArray (a, b)",
        "fct-source": "src/Data-Array-Parallel-PArray.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Takes two arrays and returns an array of corresponding pairs If one array is short excess elements of the longer array are discarded",
        "hierarchy": "Data Array Parallel PArray",
        "module": "Data.Array.Parallel.PArray",
        "name": "zip",
        "normalized": "PArray a-\u003ePArray b-\u003ePArray(a,b)",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArray a-\u003ePArray b-\u003ePArray(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html",
        "fct-type": "module",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#t:Bool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:-124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(||)"
      },
      "index": {
        "description": "Boolean or",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "(||) ||",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:-38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-type": "function",
        "title": "(&&)"
      },
      "index": {
        "description": "Boolean and",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "(&&) &&",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:False",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "False",
        "fct-type": "function",
        "title": "False"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "False",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:True",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "True",
        "fct-type": "function",
        "title": "True"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "True",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:andP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#andP",
        "fct-type": "function",
        "title": "andP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "andP",
        "normalized": "PArr Bool-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:fromBool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Bool -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#fromBool",
        "fct-type": "function",
        "title": "fromBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "fromBool",
        "normalized": "Bool-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Bool",
        "signature": "Bool-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Bool -\u003e Bool",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "Boolean not",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "not",
        "normalized": "Bool-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:orP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#orP",
        "fct-type": "function",
        "title": "orP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "orP",
        "normalized": "PArr Bool-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:otherwise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Bool",
        "fct-type": "function",
        "title": "otherwise"
      },
      "index": {
        "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "otherwise",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:toBool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Bool",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Bool.html#toBool",
        "fct-type": "function",
        "title": "toBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Bool",
        "module": "Data.Array.Parallel.Prelude.Bool",
        "name": "toBool",
        "normalized": "Int-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "Bool",
        "signature": "Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html",
        "fct-type": "module",
        "title": "Double"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "Double",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "Double",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(*) *",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-42--42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2A%2A",
        "fct-type": "function",
        "title": "(**)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(**) **",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(+) +",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(-) -",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-47-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2F",
        "fct-type": "function",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(/) /",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(/=) /=",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003c) \u003c",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003c=) \u003c=",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(==) ==",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003e) \u003e",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "(\u003e=) \u003e=",
        "normalized": "Double-\u003eDouble-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "abs",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:acos",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#acos",
        "fct-type": "function",
        "title": "acos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "acos",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:acosh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#acosh",
        "fct-type": "function",
        "title": "acosh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "acosh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:asin",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#asin",
        "fct-type": "function",
        "title": "asin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "asin",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:asinh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#asinh",
        "fct-type": "function",
        "title": "asinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "asinh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:atan",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#atan",
        "fct-type": "function",
        "title": "atan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "atan",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:atanh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#atanh",
        "fct-type": "function",
        "title": "atanh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "atanh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:ceiling",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#ceiling",
        "fct-type": "function",
        "title": "ceiling"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "ceiling",
        "normalized": "Double-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:cos",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#cos",
        "fct-type": "function",
        "title": "cos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "cos",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:cosh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#cosh",
        "fct-type": "function",
        "title": "cosh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "cosh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:exp",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#exp",
        "fct-type": "function",
        "title": "exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "exp",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:floor",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#floor",
        "fct-type": "function",
        "title": "floor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "floor",
        "normalized": "Double-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:fromInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#fromInt",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "fromInt",
        "normalized": "Int-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": "Int-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:log",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#log",
        "fct-type": "function",
        "title": "log"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "log",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:logBase",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#logBase",
        "fct-type": "function",
        "title": "logBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "logBase",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "Base",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "max",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "maxIndexP",
        "normalized": "PArr Double-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "maximumP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "min",
        "normalized": "Double-\u003eDouble-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "minIndexP",
        "normalized": "PArr Double-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "minimumP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "negate",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:pi",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#pi",
        "fct-type": "function",
        "title": "pi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "pi",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "productP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:recip",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#recip",
        "fct-type": "function",
        "title": "recip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "recip",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:round",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#round",
        "fct-type": "function",
        "title": "round"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "round",
        "normalized": "Double-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sin",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sin",
        "fct-type": "function",
        "title": "sin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sin",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sinh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sinh",
        "fct-type": "function",
        "title": "sinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sinh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sqrt",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "sumP",
        "normalized": "PArr Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:tan",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#tan",
        "fct-type": "function",
        "title": "tan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "tan",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:tanh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Double",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#tanh",
        "fct-type": "function",
        "title": "tanh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "tanh",
        "normalized": "Double-\u003eDouble",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:truncate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Double",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Double -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Double.html#truncate",
        "fct-type": "function",
        "title": "truncate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Double",
        "module": "Data.Array.Parallel.Prelude.Double",
        "name": "truncate",
        "normalized": "Double-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Double-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html",
        "fct-type": "module",
        "title": "Float"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "Float",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#t:Float",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Float"
      },
      "index": {
        "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "Float",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(*) *",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-42--42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%2A%2A",
        "fct-type": "function",
        "title": "(**)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(**) **",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(+) +",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(-) -",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-47-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%2F",
        "fct-type": "function",
        "title": "(/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(/) /",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(/=) /=",
        "normalized": "Float-\u003eFloat-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(\u003c) \u003c",
        "normalized": "Float-\u003eFloat-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(\u003c=) \u003c=",
        "normalized": "Float-\u003eFloat-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(==) ==",
        "normalized": "Float-\u003eFloat-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(\u003e) \u003e",
        "normalized": "Float-\u003eFloat-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "(\u003e=) \u003e=",
        "normalized": "Float-\u003eFloat-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "abs",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:acos",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#acos",
        "fct-type": "function",
        "title": "acos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "acos",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:acosh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#acosh",
        "fct-type": "function",
        "title": "acosh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "acosh",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:asin",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#asin",
        "fct-type": "function",
        "title": "asin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "asin",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:asinh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#asinh",
        "fct-type": "function",
        "title": "asinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "asinh",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:atan",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#atan",
        "fct-type": "function",
        "title": "atan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "atan",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:atanh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#atanh",
        "fct-type": "function",
        "title": "atanh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "atanh",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:ceiling",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#ceiling",
        "fct-type": "function",
        "title": "ceiling"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "ceiling",
        "normalized": "Float-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:cos",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#cos",
        "fct-type": "function",
        "title": "cos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "cos",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:cosh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#cosh",
        "fct-type": "function",
        "title": "cosh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "cosh",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:exp",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#exp",
        "fct-type": "function",
        "title": "exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "exp",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:floor",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#floor",
        "fct-type": "function",
        "title": "floor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "floor",
        "normalized": "Float-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:fromInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#fromInt",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "fromInt",
        "normalized": "Int-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": "Int-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:log",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#log",
        "fct-type": "function",
        "title": "log"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "log",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:logBase",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#logBase",
        "fct-type": "function",
        "title": "logBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "logBase",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "Base",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "max",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Float -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "maxIndexP",
        "normalized": "PArr Float-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Float-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "maximumP",
        "normalized": "PArr Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "min",
        "normalized": "Float-\u003eFloat-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Float -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "minIndexP",
        "normalized": "PArr Float-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Float-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "minimumP",
        "normalized": "PArr Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "negate",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:pi",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#pi",
        "fct-type": "function",
        "title": "pi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "pi",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "productP",
        "normalized": "PArr Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:recip",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#recip",
        "fct-type": "function",
        "title": "recip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "recip",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:round",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#round",
        "fct-type": "function",
        "title": "round"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "round",
        "normalized": "Float-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sin",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#sin",
        "fct-type": "function",
        "title": "sin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "sin",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sinh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#sinh",
        "fct-type": "function",
        "title": "sinh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "sinh",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "sqrt",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "sumP",
        "normalized": "PArr Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:tan",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#tan",
        "fct-type": "function",
        "title": "tan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "tan",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:tanh",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#tanh",
        "fct-type": "function",
        "title": "tanh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "tanh",
        "normalized": "Float-\u003eFloat",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:truncate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Float",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Float -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Float.html#truncate",
        "fct-type": "function",
        "title": "truncate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Float",
        "module": "Data.Array.Parallel.Prelude.Float",
        "name": "truncate",
        "normalized": "Float-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Float-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html",
        "fct-type": "module",
        "title": "Int"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "Int",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "Int",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(*) *",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(+) +",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(-) -",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(/=) /=",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003c) \u003c",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003c=) \u003c=",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(==) ==",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003e) \u003e",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "(\u003e=) \u003e=",
        "normalized": "Int-\u003eInt-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "abs",
        "normalized": "Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:div",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#div",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "div",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:enumFromToP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e PArr Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#enumFromToP",
        "fct-type": "function",
        "title": "enumFromToP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "enumFromToP",
        "normalized": "Int-\u003eInt-\u003ePArr Int",
        "package": "dph-lifted-copy",
        "partial": "From To",
        "signature": "Int-\u003eInt-\u003ePArr Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "max",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "maxIndexP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "maximumP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "min",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "minIndexP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "minimumP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:mod",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#mod",
        "fct-type": "function",
        "title": "mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "mod",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "negate",
        "normalized": "Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "productP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "sqrt",
        "normalized": "Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Int",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Int -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Int.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Int",
        "module": "Data.Array.Parallel.Prelude.Int",
        "name": "sumP",
        "normalized": "PArr Int-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html",
        "fct-type": "module",
        "title": "Word8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "Word8",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "Word8",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-42-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%2A",
        "fct-type": "function",
        "title": "(*)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(*) *",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%2B",
        "fct-type": "function",
        "title": "(+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(+) +",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-45-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#-",
        "fct-type": "function",
        "title": "(-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(-) -",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-47--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%2F%3D",
        "fct-type": "function",
        "title": "(/=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(/=) /=",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C",
        "fct-type": "function",
        "title": "(\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003c) \u003c",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C%3D",
        "fct-type": "function",
        "title": "(\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003c=) \u003c=",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-61--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3D%3D",
        "fct-type": "function",
        "title": "(==)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(==) ==",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E",
        "fct-type": "function",
        "title": "(\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003e) \u003e",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62--61-",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E%3D",
        "fct-type": "function",
        "title": "(\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "(\u003e=) \u003e=",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:abs",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#abs",
        "fct-type": "function",
        "title": "abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "abs",
        "normalized": "Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:div",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#div",
        "fct-type": "function",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "div",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:fromInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#fromInt",
        "fct-type": "function",
        "title": "fromInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "fromInt",
        "normalized": "Int-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:max",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "max",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:maxIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Word8 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#maxIndexP",
        "fct-type": "function",
        "title": "maxIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "maxIndexP",
        "normalized": "PArr Word-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:maximumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#maximumP",
        "fct-type": "function",
        "title": "maximumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "maximumP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:min",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#min",
        "fct-type": "function",
        "title": "min"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "min",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:minIndexP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Word8 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#minIndexP",
        "fct-type": "function",
        "title": "minIndexP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "minIndexP",
        "normalized": "PArr Word-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Index",
        "signature": "PArr Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:minimumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#minimumP",
        "fct-type": "function",
        "title": "minimumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "minimumP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:mod",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#mod",
        "fct-type": "function",
        "title": "mod"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "mod",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:negate",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#negate",
        "fct-type": "function",
        "title": "negate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "negate",
        "normalized": "Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:productP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#productP",
        "fct-type": "function",
        "title": "productP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "productP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:sqrt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#sqrt",
        "fct-type": "function",
        "title": "sqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "sqrt",
        "normalized": "Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:sumP",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArr Word8 -\u003e Word8",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#sumP",
        "fct-type": "function",
        "title": "sumP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "sumP",
        "normalized": "PArr Word-\u003eWord",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "PArr Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:toInt",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude.Word8",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Word8 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Prelude-Word8.html#toInt",
        "fct-type": "function",
        "title": "toInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude Word8",
        "module": "Data.Array.Parallel.Prelude.Word8",
        "name": "toInt",
        "normalized": "Word-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules bundles all vectorised versions of Prelude definitions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis module should not be explicitly imported in user code anymore.\u003c/em\u003e  User code should only\n  import \u003ccode\u003e\u003ca\u003eParallel\u003c/a\u003e\u003c/code\u003e and, until the vectoriser supports type classes, the type-specific\n  modules \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Prelude.html",
        "fct-type": "module",
        "title": "Prelude"
      },
      "index": {
        "description": "This modules bundles all vectorised versions of Prelude definitions This module should not be explicitly imported in user code anymore User code should only import Parallel and until the vectoriser supports type classes the type-specific modules",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Prelude",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Bool",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Bool",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Double",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Float",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Float"
      },
      "index": {
        "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Float",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Int",
      "description": {
        "fct-descr": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int"
      },
      "index": {
        "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Int",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:PArr",
      "description": {
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "PArr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "PArr",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PArr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Word8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Prelude",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word8"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Data Array Parallel Prelude",
        "module": "Data.Array.Parallel.Prelude",
        "name": "Word8",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUser level interface of parallel arrays.\n\u003c/p\u003e\u003cp\u003eThis library is deprecated. Using it can result in the vectorised program\n   having asymptotically worse complexity than the original. Your program\n   could be 10000x slower than it should be with this library.\n\u003c/p\u003e\u003cp\u003eUse the \u003ccode\u003edph-lifted-vseg\u003c/code\u003e package instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "User level interface of parallel arrays This library is deprecated Using it can result in the vectorised program having asymptotically worse complexity than the original Your program could be slower than it should be with this library Use the dph-lifted-vseg package instead",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#t:PArray",
      "description": {
        "fct-descr": "\u003cp\u003eLifted/bulk parallel arrays\n   This contains the array length, along with the element data.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
        "fct-type": "data",
        "title": "PArray"
      },
      "index": {
        "description": "Lifted bulk parallel arrays This contains the array length along with the element data",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "PArray",
        "normalized": "",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:-33-:",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel.html#%21%3A",
        "fct-type": "function",
        "title": "(!:)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "(!:) !:",
        "normalized": "[a]-\u003eInt-\u003ea",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:-43-:-43-",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:a:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#%2B%3A%2B",
        "fct-type": "function",
        "title": "(+:+)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "(+:+) +:+",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:bpermuteP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:Int:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#bpermuteP",
        "fct-type": "function",
        "title": "bpermuteP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "bpermuteP",
        "normalized": "[a]-\u003e[Int]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[Int]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:combineP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:a:] -\u003e [:Int:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#combineP",
        "fct-type": "function",
        "title": "combineP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "combineP",
        "normalized": "[a]-\u003e[a]-\u003e[Int]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[Int]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:concatP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:[:a:]:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#concatP",
        "fct-type": "function",
        "title": "concatP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "concatP",
        "normalized": "[[a]]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:crossMapP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e (a -\u003e [:b:]) -\u003e [:(a, b):]",
        "fct-source": "src/Data-Array-Parallel.html#crossMapP",
        "fct-type": "function",
        "title": "crossMapP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "crossMapP",
        "normalized": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]",
        "package": "dph-lifted-copy",
        "partial": "Map",
        "signature": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:emptyP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:]",
        "fct-source": "src/Data-Array-Parallel.html#emptyP",
        "fct-type": "function",
        "title": "emptyP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "emptyP",
        "normalized": "[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:filterP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "(a -\u003e Bool) -\u003e [:a:] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#filterP",
        "fct-type": "function",
        "title": "filterP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "filterP",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:fromNestedPArrayP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray (PArray a) -\u003e [:[:a:]:]",
        "fct-source": "src/Data-Array-Parallel.html#fromNestedPArrayP",
        "fct-type": "function",
        "title": "fromNestedPArrayP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "fromNestedPArrayP",
        "normalized": "PArray(PArray a)-\u003e[[a]]",
        "package": "dph-lifted-copy",
        "partial": "Nested PArray",
        "signature": "PArray(PArray a)-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:fromPArrayP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "PArray a -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#fromPArrayP",
        "fct-type": "function",
        "title": "fromPArrayP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "fromPArrayP",
        "normalized": "PArray a-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": "PArray a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:indexedP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:(Int, a):]",
        "fct-source": "src/Data-Array-Parallel.html#indexedP",
        "fct-type": "function",
        "title": "indexedP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "indexedP",
        "normalized": "[a]-\u003e[(Int,a)]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[(Int,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:lengthP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e Int",
        "fct-source": "src/Data-Array-Parallel.html#lengthP",
        "fct-type": "function",
        "title": "lengthP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "lengthP",
        "normalized": "[a]-\u003eInt",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:mapP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "(a -\u003e b) -\u003e [:a:] -\u003e [:b:]",
        "fct-source": "src/Data-Array-Parallel.html#mapP",
        "fct-type": "function",
        "title": "mapP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "mapP",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:replicateP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e a -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#replicateP",
        "fct-type": "function",
        "title": "replicateP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "replicateP",
        "normalized": "Int-\u003ea-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:singletonP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "a -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#singletonP",
        "fct-type": "function",
        "title": "singletonP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "singletonP",
        "normalized": "a-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:sliceP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "Int -\u003e Int -\u003e [:e:] -\u003e [:e:]",
        "fct-source": "src/Data-Array-Parallel.html#sliceP",
        "fct-type": "function",
        "title": "sliceP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "sliceP",
        "normalized": "Int-\u003eInt-\u003e[a]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e[e]-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:toPArrayP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e PArray a",
        "fct-source": "src/Data-Array-Parallel.html#toPArrayP",
        "fct-type": "function",
        "title": "toPArrayP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "toPArrayP",
        "normalized": "[a]-\u003ePArray a",
        "package": "dph-lifted-copy",
        "partial": "PArray",
        "signature": "[a]-\u003ePArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:unzip3P",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:(a, b, c):] -\u003e ([:a:], [:b:], [:c:])",
        "fct-source": "src/Data-Array-Parallel.html#unzip3P",
        "fct-type": "function",
        "title": "unzip3P"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "unzip3P",
        "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[(a,b,c)]-\u003e([a],[b],[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:unzipP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:(a, b):] -\u003e ([:a:], [:b:])",
        "fct-source": "src/Data-Array-Parallel.html#unzipP",
        "fct-type": "function",
        "title": "unzipP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "unzipP",
        "normalized": "[(a,b)]-\u003e([a],[b])",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[(a,b)]-\u003e([a],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:updateP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:(Int, a):] -\u003e [:a:]",
        "fct-source": "src/Data-Array-Parallel.html#updateP",
        "fct-type": "function",
        "title": "updateP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "updateP",
        "normalized": "[a]-\u003e[(Int,a)]-\u003e[a]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[(Int,a)]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zip3P",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:b:] -\u003e [:c:] -\u003e [:(a, b, c):]",
        "fct-source": "src/Data-Array-Parallel.html#zip3P",
        "fct-type": "function",
        "title": "zip3P"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "zip3P",
        "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zipP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "[:a:] -\u003e [:b:] -\u003e [:(a, b):]",
        "fct-source": "src/Data-Array-Parallel.html#zipP",
        "fct-type": "function",
        "title": "zipP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "zipP",
        "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
        "package": "dph-lifted-copy",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zipWith3P",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [:a:] -\u003e [:b:] -\u003e [:c:] -\u003e [:d:]",
        "fct-source": "src/Data-Array-Parallel.html#zipWith3P",
        "fct-type": "function",
        "title": "zipWith3P"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "zipWith3P",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
        "package": "dph-lifted-copy",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zipWithP",
      "description": {
        "fct-module": "Data.Array.Parallel",
        "fct-package": "dph-lifted-copy",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e [:a:] -\u003e [:b:] -\u003e [:c:]",
        "fct-source": "src/Data-Array-Parallel.html#zipWithP",
        "fct-type": "function",
        "title": "zipWithP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel",
        "module": "Data.Array.Parallel",
        "name": "zipWithP",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "dph-lifted-copy",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  }
]