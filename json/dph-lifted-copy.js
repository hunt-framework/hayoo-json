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
        "word": "dph-lifted-copy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "Lifted",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Lifted.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "Lifted",
          "package": "dph-lifted-copy",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of closures.\n   This bundles up:\n      1) the vectorised version of the function that takes an explicit environment\n      2) the lifted version, that works on arrays.\n           the first parameter of this function is the 'lifting context'\n           that gives the length of the array.\n      3) the environment of the closure.\n\u003c/p\u003e\u003cp\u003eThe vectoriser closure-converts the source program so that all functions\n   types are expressed in this form.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": ":-\u003e",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%3A-%3E",
          "type": "data"
        },
        "index": {
          "description": "The type of closures This bundles up the vectorised version of the function that takes an explicit environment the lifted version that works on arrays the first parameter of this function is the lifting context that gives the length of the array the environment of the closure The vectoriser closure-converts the source program so that all functions types are expressed in this form",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": ":-\u003e",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n   The conversion methods should all be O(1).\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PA",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#PA",
          "type": "class"
        },
        "index": {
          "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversion methods should all be",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PA",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted/bulk parallel arrays\n   This contains the array length, along with the element data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
          "type": "data"
        },
        "index": {
          "description": "Lifted bulk parallel arrays This contains the array length along with the element data",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel Data.\n   This is the family of types that store parallel array data.\n\u003c/p\u003e\u003cp\u003ePData takes the type of an element and produces the type we use to store\n   an array of those elements. The instances for PData use an efficient\n   representation that depends on the type of elements being stored.\n   For example, an array of pairs is stored as two separate arrays, one for\n   each element type. This lets us avoid storing the intermediate Pair/Tuple\n   constructors and the pointers to the elements.\n\u003c/p\u003e\u003cp\u003eMost of the instances are defined in \u003ca\u003eData.Array.Parallel.PArray.Instances\u003c/a\u003e,\n   though the instances for function closures are defined in their own module, \n   \u003ca\u003eData.Array.Parallel.Lifted.Closure\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote that PData is just a flat chunk of memory containing elements, and doesn't\n   include a field giving the length of the array. We use PArray when we want to\n   pass around the array data along with its length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PData",
          "package": "dph-lifted-copy",
          "signature": "PData",
          "type": "function"
        },
        "index": {
          "description": "Parallel Data This is the family of types that store parallel array data PData takes the type of an element and produces the type we use to store an array of those elements The instances for PData use an efficient representation that depends on the type of elements being stored For example an array of pairs is stored as two separate arrays one for each element type This lets us avoid storing the intermediate Pair Tuple constructors and the pointers to the elements Most of the instances are defined in Data.Array.Parallel.PArray.Instances though the instances for function closures are defined in their own module Data.Array.Parallel.Lifted.Closure Note that PData is just flat chunk of memory containing elements and doesn include field giving the length of the array We use PArray when we want to pass around the array data along with its length",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PData",
          "package": "dph-lifted-copy",
          "partial": "PData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PR dictionary contains the primitive functions that operate directly\n   on parallel array data.\n\u003c/p\u003e\u003cp\u003eIt's called PR because the functions work on our internal, efficient\n   Representation of the user-level array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PR",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-PData.html#PR",
          "type": "class"
        },
        "index": {
          "description": "PR dictionary contains the primitive functions that operate directly on parallel array data It called PR because the functions work on our internal efficient Representation of the user-level array",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentable types.\n\u003c/p\u003e\u003cp\u003eThe family of types that we know how to represent generically.\n   PRepr takes an arbitrary type and produces the generic type we use to \n   represent it.\n\u003c/p\u003e\u003cp\u003eInstances for simple types are defined in Data.Array.Parallel.Lifted.Instances.\n   For algebraic types, it's up to the vectoriser/client module to create\n   a suitable instance.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PRepr",
          "package": "dph-lifted-copy",
          "signature": "PRepr",
          "type": "function"
        },
        "index": {
          "description": "Representable types The family of types that we know how to represent generically PRepr takes an arbitrary type and produces the generic type we use to represent it Instances for simple types are defined in Data.Array.Parallel.Lifted.Instances For algebraic types it up to the vectoriser client module to create suitable instance",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PRepr",
          "package": "dph-lifted-copy",
          "partial": "PRepr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:PRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of scalar types.\n   Scalar types are the ones that we can store in our underlying U.Arrays\n   (which are currently implemented as Data.Vectors).\n\u003c/p\u003e\u003cp\u003eTo perform an operation on a PData array of scalar elements, we coerce\n   it to the underling U.Array and use the corresponding U.Array operators.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "Scalar",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#Scalar",
          "type": "class"
        },
        "index": {
          "description": "Class of scalar types Scalar types are the ones that we can store in our underlying U.Arrays which are currently implemented as Data.Vectors To perform an operation on PData array of scalar elements we coerce it to the underling U.Array and use the corresponding U.Array operators",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "Scalar",
          "package": "dph-lifted-copy",
          "partial": "Scalar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a closure to its argument.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "($:)",
          "package": "dph-lifted-copy",
          "signature": "forall a b.  (a :-\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A",
          "type": "function"
        },
        "index": {
          "description": "Apply closure to its argument",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "($:) $:",
          "normalized": "a b c(b-\u003ed)-\u003eb-\u003ed",
          "package": "dph-lifted-copy",
          "signature": "forall a b.(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:-36-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted closure application\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "($:^)",
          "package": "dph-lifted-copy",
          "signature": "forall a b.  PArray (a :-\u003e b) -\u003e PArray a -\u003e PArray b",
          "source": "src/Data-Array-Parallel-Lifted-Closure.html#%24%3A%5E",
          "type": "function"
        },
        "index": {
          "description": "Lifted closure application",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "($:^) $:^",
          "normalized": "a b c PArray(b-\u003ed)-\u003ePArray b-\u003ePArray d",
          "package": "dph-lifted-copy",
          "signature": "forall a b. PArray(a-\u003eb)-\u003ePArray a-\u003ePArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:-36-:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "signature": "PArray Int# (PData a)",
          "source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#appPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPA#",
          "normalized": "PArray a-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPD",
          "package": "dph-lifted-copy",
          "signature": "T_appPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#appPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPR",
          "package": "dph-lifted-copy",
          "signature": "T_appPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#appPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_appPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#appPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "appPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:appPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPA#",
          "package": "dph-lifted-copy",
          "signature": "Segd -\u003e Segd -\u003e PArray a -\u003e Segd -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#applPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPA#",
          "normalized": "Segd-\u003eSegd-\u003ePArray a-\u003eSegd-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "Segd-\u003eSegd-\u003ePArray a-\u003eSegd-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPD",
          "package": "dph-lifted-copy",
          "signature": "T_applPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#applPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPR",
          "package": "dph-lifted-copy",
          "signature": "T_applPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#applPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_applPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#applPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "applPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:applPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int# -\u003e Array Int -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#bpermutePA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePA#",
          "normalized": "PArray a-\u003eInt #-\u003eArray Int-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003eInt #-\u003eArray Int-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePD",
          "package": "dph-lifted-copy",
          "signature": "T_bpermutePR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#bpermutePD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePR",
          "package": "dph-lifted-copy",
          "signature": "T_bpermutePR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#bpermutePR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_bpermutePR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#bpermutePRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "bpermutePRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:bpermutePRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PA#",
          "package": "dph-lifted-copy",
          "signature": "Int# -\u003e Sel2 -\u003e PArray a -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#combine2PA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PA#",
          "normalized": "Int #-\u003eSel-\u003ePArray a-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "Int #-\u003eSel-\u003ePArray a-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PD",
          "package": "dph-lifted-copy",
          "signature": "T_combine2PR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#combine2PD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PR",
          "package": "dph-lifted-copy",
          "signature": "T_combine2PR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#combine2PR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_combine2PR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#combine2PRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "combine2PRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:combine2PRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the data field of a PArray.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "dataPA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#dataPA%23",
          "type": "function"
        },
        "index": {
          "description": "Take the data field of PArray",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "dataPA#",
          "normalized": "PArray a-\u003ePData a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003ePData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:dataPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPA",
          "package": "dph-lifted-copy",
          "signature": "PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#emptyPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPA",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPD",
          "package": "dph-lifted-copy",
          "signature": "T_emptyPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#emptyPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPR",
          "package": "dph-lifted-copy",
          "signature": "T_emptyPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#emptyPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_emptyPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#emptyPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "emptyPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:emptyPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int# -\u003e Int# -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#extractPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPA#",
          "normalized": "PArray a-\u003eInt #-\u003eInt #-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003eInt #-\u003eInt #-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPD",
          "package": "dph-lifted-copy",
          "signature": "T_extractPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#extractPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPR",
          "package": "dph-lifted-copy",
          "signature": "T_extractPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#extractPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_extractPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#extractPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "extractPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:extractPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromArrPRepr",
          "package": "dph-lifted-copy",
          "signature": "PData (PRepr a) -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#fromArrPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromArrPRepr",
          "normalized": "PData(PRepr a)-\u003ePData a",
          "package": "dph-lifted-copy",
          "partial": "Arr PRepr",
          "signature": "PData(PRepr a)-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromArrPReprs",
          "package": "dph-lifted-copy",
          "signature": "PDatas (PRepr a) -\u003e PDatas a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#fromArrPReprs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromArrPReprs",
          "normalized": "PDatas(PRepr a)-\u003ePDatas a",
          "package": "dph-lifted-copy",
          "partial": "Arr PReprs",
          "signature": "PDatas(PRepr a)-\u003ePDatas a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromArrPReprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPA",
          "package": "dph-lifted-copy",
          "signature": "[a] -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#fromListPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPA",
          "normalized": "[a]-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "List PA",
          "signature": "[a]-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPA#",
          "package": "dph-lifted-copy",
          "signature": "Int# -\u003e [a] -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#fromListPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPA#",
          "normalized": "Int #-\u003e[a]-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "List PA",
          "signature": "Int #-\u003e[a]-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPD",
          "package": "dph-lifted-copy",
          "signature": "T_fromListPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#fromListPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPD",
          "package": "dph-lifted-copy",
          "partial": "List PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPR",
          "package": "dph-lifted-copy",
          "signature": "T_fromListPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#fromListPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPR",
          "package": "dph-lifted-copy",
          "partial": "List PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_fromListPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromListPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromListPRScalar",
          "package": "dph-lifted-copy",
          "partial": "List PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromListPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromNestedPArrayPA",
          "package": "dph-lifted-copy",
          "signature": "PArray (PArray a) :-\u003e PArray (PArray a)",
          "source": "src/Data-Array-Parallel-Lifted.html#fromNestedPArrayPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromNestedPArrayPA",
          "normalized": "PArray(PArray a)-\u003ePArray(PArray a)",
          "package": "dph-lifted-copy",
          "partial": "Nested PArray PA",
          "signature": "PArray(PArray a)-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromNestedPArrayPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromPArrayPA",
          "package": "dph-lifted-copy",
          "signature": "PArray a :-\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted.html#fromPArrayPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromPArrayPA",
          "normalized": "PArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PArray PA",
          "signature": "PArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromPArrayPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromPRepr",
          "package": "dph-lifted-copy",
          "signature": "PRepr a -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#fromPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromPRepr",
          "normalized": "PRepr a-\u003ea",
          "package": "dph-lifted-copy",
          "partial": "PRepr",
          "signature": "PRepr a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromScalarPData",
          "package": "dph-lifted-copy",
          "signature": "PData a -\u003e Array a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#fromScalarPData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "fromScalarPData",
          "normalized": "PData a-\u003eArray a",
          "package": "dph-lifted-copy",
          "partial": "Scalar PData",
          "signature": "PData a-\u003eArray a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:fromScalarPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int# -\u003e a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#indexPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPA#",
          "normalized": "PArray a-\u003eInt #-\u003ea",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003eInt #-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPD",
          "package": "dph-lifted-copy",
          "signature": "T_indexPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#indexPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPR",
          "package": "dph-lifted-copy",
          "signature": "T_indexPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#indexPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_indexPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#indexPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "indexPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:indexPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length field of a PArray.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Lifted",
          "name": "lengthPA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int#",
          "source": "src/Data-Array-Parallel-PArray-Base.html#lengthPA%23",
          "type": "function"
        },
        "index": {
          "description": "Take the length field of PArray",
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "lengthPA#",
          "normalized": "PArray a-\u003eInt #",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:lengthPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPA",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e ()",
          "source": "src/Data-Array-Parallel-PArray-Base.html#nfPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPA",
          "normalized": "PArray a-\u003e()",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPD",
          "package": "dph-lifted-copy",
          "signature": "T_nfPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#nfPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPR",
          "package": "dph-lifted-copy",
          "signature": "T_nfPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#nfPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_nfPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#nfPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "nfPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:nfPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int# -\u003e Array Tag -\u003e Int# -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#packByTagPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPA#",
          "normalized": "PArray a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "By Tag PA",
          "signature": "PArray a-\u003eInt #-\u003eArray Tag-\u003eInt #-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPD",
          "package": "dph-lifted-copy",
          "signature": "T_packByTagPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#packByTagPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPD",
          "package": "dph-lifted-copy",
          "partial": "By Tag PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPR",
          "package": "dph-lifted-copy",
          "signature": "T_packByTagPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#packByTagPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPR",
          "package": "dph-lifted-copy",
          "partial": "By Tag PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_packByTagPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#packByTagPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "packByTagPRScalar",
          "package": "dph-lifted-copy",
          "partial": "By Tag PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:packByTagPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPA#",
          "package": "dph-lifted-copy",
          "signature": "Int# -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#repeatPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPA#",
          "normalized": "Int #-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "Int #-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPD",
          "package": "dph-lifted-copy",
          "signature": "T_repeatPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#repeatPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPR",
          "package": "dph-lifted-copy",
          "signature": "T_repeatPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#repeatPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_repeatPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#repeatPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "repeatPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:repeatPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePA#",
          "package": "dph-lifted-copy",
          "signature": "Int# -\u003e a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#replicatePA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePA#",
          "normalized": "Int #-\u003ea-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "Int #-\u003ea-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePD",
          "package": "dph-lifted-copy",
          "signature": "T_replicatePR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#replicatePD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePR",
          "package": "dph-lifted-copy",
          "signature": "T_replicatePR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#replicatePR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_replicatePR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#replicatePRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatePRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatePRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPA#",
          "package": "dph-lifted-copy",
          "signature": "Segd -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#replicatelPA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPA#",
          "normalized": "Segd-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "Segd-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPD",
          "package": "dph-lifted-copy",
          "signature": "T_replicatelPR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#replicatelPD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPR",
          "package": "dph-lifted-copy",
          "signature": "T_replicatelPR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#replicatelPR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_replicatelPR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#replicatelPRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "replicatelPRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:replicatelPRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "toArrPRepr",
          "package": "dph-lifted-copy",
          "signature": "PData a -\u003e PData (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#toArrPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "toArrPRepr",
          "normalized": "PData a-\u003ePData(PRepr a)",
          "package": "dph-lifted-copy",
          "partial": "Arr PRepr",
          "signature": "PData a-\u003ePData(PRepr a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toArrPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "toArrPReprs",
          "package": "dph-lifted-copy",
          "signature": "PDatas a -\u003e PDatas (PRepr a)",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#toArrPReprs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "toArrPReprs",
          "normalized": "PDatas a-\u003ePDatas(PRepr a)",
          "package": "dph-lifted-copy",
          "partial": "Arr PReprs",
          "signature": "PDatas a-\u003ePDatas(PRepr a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toArrPReprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "toPArrayPA",
          "package": "dph-lifted-copy",
          "signature": "PArray a :-\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted.html#toPArrayPA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "toPArrayPA",
          "normalized": "PArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PArray PA",
          "signature": "PArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toPArrayPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "toPRepr",
          "package": "dph-lifted-copy",
          "signature": "a -\u003e PRepr a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#toPRepr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "toPRepr",
          "normalized": "a-\u003ePRepr a",
          "package": "dph-lifted-copy",
          "partial": "PRepr",
          "signature": "a-\u003ePRepr a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toPRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "toScalarPData",
          "package": "dph-lifted-copy",
          "signature": "Array a -\u003e PData a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#toScalarPData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "toScalarPData",
          "normalized": "Array a-\u003ePData a",
          "package": "dph-lifted-copy",
          "partial": "Scalar PData",
          "signature": "Array a-\u003ePData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:toScalarPData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePA#",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Array Int -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray-Base.html#updatePA%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePA#",
          "normalized": "PArray a-\u003eArray Int-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "signature": "PArray a-\u003eArray Int-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePA-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePD",
          "package": "dph-lifted-copy",
          "signature": "T_updatePR a",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#updatePD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePD",
          "package": "dph-lifted-copy",
          "partial": "PD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePR",
          "package": "dph-lifted-copy",
          "signature": "T_updatePR a",
          "source": "src/Data-Array-Parallel-PArray-PData.html#updatePR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePR",
          "package": "dph-lifted-copy",
          "partial": "PR",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePRScalar",
          "package": "dph-lifted-copy",
          "signature": "T_updatePR a",
          "source": "src/Data-Array-Parallel-PArray-Scalar.html#updatePRScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Lifted",
          "module": "Data.Array.Parallel.Lifted",
          "name": "updatePRScalar",
          "package": "dph-lifted-copy",
          "partial": "PRScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Lifted.html#v:updatePRScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel Arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel Arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PA dictionary contains the functions that we use to convert a\n   representable type to and from its generic representation.\n   The conversion methods should all be O(1).\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "PA",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-PRepr.html#PA",
          "type": "class"
        },
        "index": {
          "description": "PA dictionary contains the functions that we use to convert representable type to and from its generic representation The conversion methods should all be",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "PA",
          "package": "dph-lifted-copy",
          "partial": "PA",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#t:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted/bulk parallel arrays\n   This contains the array length, along with the element data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
          "type": "data"
        },
        "index": {
          "description": "Lifted bulk parallel arrays This contains the array length along with the element data",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#t:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray",
          "name": "Random",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray.html#Random",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "Random",
          "package": "dph-lifted-copy",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a numbered element from an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "(!:)",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-PArray.html#%21%3A",
          "type": "function"
        },
        "index": {
          "description": "Retrieve numbered element from an array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "(!:) !:",
          "normalized": "PArray a-\u003eInt-\u003ea",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two arrays\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "(+:+)",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#%2B%3A%2B",
          "type": "function"
        },
        "index": {
          "description": "Append two arrays",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "(+:+) +:+",
          "normalized": "PArray a-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:-43-:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Backwards permutation of array elements.\n\u003c/p\u003e\u003cpre\u003ebpermute [50, 60, 20, 30] [0, 3, 2]  = [50, 30, 20]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "bpermute",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray Int -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#bpermute",
          "type": "function"
        },
        "index": {
          "description": "Backwards permutation of array elements bpermute",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "bpermute",
          "normalized": "PArray a-\u003ePArray Int-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003ePArray Int-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:bpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate an array of arrays into a single array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "concat",
          "package": "dph-lifted-copy",
          "signature": "PArray (PArray a) -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate an array of arrays into single array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "concat",
          "normalized": "PArray(PArray a)-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "PArray(PArray a)-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). An empty array, with no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "empty",
          "package": "dph-lifted-copy",
          "signature": "PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty array with no elements",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "empty",
          "package": "dph-lifted-copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Generate a range of \u003ccode\u003eInt\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "enumFromTo",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e PArray Int",
          "source": "src/Data-Array-Parallel-PArray.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "description": "Generate range of Int",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "enumFromTo",
          "normalized": "Int-\u003eInt-\u003ePArray Int",
          "package": "dph-lifted-copy",
          "partial": "From To",
          "signature": "Int-\u003eInt-\u003ePArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e from a list.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromList",
          "package": "dph-lifted-copy",
          "signature": "[a] -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create PArray from list",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromList",
          "normalized": "[a]-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "List",
          "signature": "[a]-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a PArray out of a scalar U.Array, \n   the first argument is the array length.\n\u003c/p\u003e\u003cp\u003eTODO: ditch this version, just use fromUArrPA'\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromUArray",
          "package": "dph-lifted-copy",
          "signature": "Array a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-Lifted-Scalar.html#fromUArray",
          "type": "function"
        },
        "index": {
          "description": "Create PArray out of scalar U.Array the first argument is the array length TODO ditch this version just use fromUArrPA",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromUArray",
          "normalized": "Array a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "UArray",
          "signature": "Array a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an U.Array of pairs to a PArray.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromUArray2",
          "package": "dph-lifted-copy",
          "signature": "Array (a, b) -\u003e PArray (a, b)",
          "source": "src/Data-Array-Parallel-Lifted-Scalar.html#fromUArray2",
          "type": "function"
        },
        "index": {
          "description": "Convert an U.Array of pairs to PArray",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromUArray2",
          "normalized": "Array(a,b)-\u003ePArray(a,b)",
          "package": "dph-lifted-copy",
          "partial": "UArray",
          "signature": "Array(a,b)-\u003ePArray(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromUArray2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a U.Array of triples to a PArray.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromUArray3",
          "package": "dph-lifted-copy",
          "signature": "Array ((a, b), c) -\u003e PArray (a, b, c)",
          "source": "src/Data-Array-Parallel-Lifted-Scalar.html#fromUArray3",
          "type": "function"
        },
        "index": {
          "description": "Convert U.Array of triples to PArray",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "fromUArray3",
          "normalized": "Array((a,b),c)-\u003ePArray(a,b,c)",
          "package": "dph-lifted-copy",
          "partial": "UArray",
          "signature": "Array((a,b),c)-\u003ePArray(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:fromUArray3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Tag each element of an array with its index.\n\u003c/p\u003e\u003cpre\u003eindexed [42, 93, 13] = [(0, 42), (1, 93), (2, 13)]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "indexed",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray (Int, a)",
          "source": "src/Data-Array-Parallel-PArray.html#indexed",
          "type": "function"
        },
        "index": {
          "description": "Tag each element of an array with its index indexed",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "indexed",
          "normalized": "PArray a-\u003ePArray(Int,a)",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003ePArray(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "length",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Int",
          "source": "src/Data-Array-Parallel-PArray.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of an array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "length",
          "normalized": "PArray a-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Create a nested array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "nestUSegd",
          "package": "dph-lifted-copy",
          "signature": "Segd-\u003e PArray a-\u003e PArray (PArray a)",
          "type": "function"
        },
        "index": {
          "description": "Create nested array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "nestUSegd",
          "normalized": "Segd-\u003ePArray a-\u003ePArray(PArray a)",
          "package": "dph-lifted-copy",
          "partial": "USegd",
          "signature": "Segd-\u003ePArray a-\u003ePArray(PArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:nestUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure an array is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "nf",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e ()",
          "source": "src/Data-Array-Parallel-PArray.html#nf",
          "type": "function"
        },
        "index": {
          "description": "Ensure an array is fully evaluated",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "nf",
          "normalized": "PArray a-\u003e()",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:nf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect the elements of an array that have their tag set as True.\n\u003c/p\u003e\u003cpre\u003e\n packPA [12, 24, 42, 93] [True, False, False, True]\n  = [24, 42]\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "pack",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray Bool -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Select the elements of an array that have their tag set as True packPA True False False True",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "pack",
          "normalized": "PArray a-\u003ePArray Bool-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003ePArray Bool-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray",
          "name": "randomRs",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e (a, a) -\u003e g -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#randomRs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "randomRs",
          "normalized": "Int-\u003e(a,a)-\u003eb-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "Rs",
          "signature": "Int-\u003e(a,a)-\u003eg-\u003ePArray a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.PArray",
          "name": "randoms",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e g -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#randoms",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "randoms",
          "normalized": "Int-\u003ea-\u003ePArray b",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eg-\u003ePArray a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Produce an array containing copies of a given element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicate",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Produce an array containing copies of given element",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003ea-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Produce an array containing a single element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "singleton",
          "package": "dph-lifted-copy",
          "signature": "a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Produce an array containing single element",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "singleton",
          "normalized": "a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a subrange of elements from an array.\n   The first argument is the starting index, while the second is the \n   length of the slice.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "slice",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e PArray a -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Extract subrange of elements from an array The first argument is the starting index while the second is the length of the slice",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "slice",
          "normalized": "Int-\u003eInt-\u003ePArray a-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003ePArray a-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list from a \u003ccode\u003e\u003ca\u003ePArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "toList",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e [a]",
          "source": "src/Data-Array-Parallel-PArray.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Create list from PArray",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "toList",
          "normalized": "PArray a-\u003e[a]",
          "package": "dph-lifted-copy",
          "partial": "List",
          "signature": "PArray a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a PArray back to a plain U.Array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "toUArray",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Lifted-Scalar.html#toUArray",
          "type": "function"
        },
        "index": {
          "description": "Convert PArray back to plain U.Array",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "toUArray",
          "normalized": "PArray a-\u003eArray a",
          "package": "dph-lifted-copy",
          "partial": "UArray",
          "signature": "PArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:toUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Transform an array into an array of the first components,\n         and an array of the second components.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "unzip",
          "package": "dph-lifted-copy",
          "signature": "PArray (a, b) -\u003e (PArray a, PArray b)",
          "source": "src/Data-Array-Parallel-PArray.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Transform an array into an array of the first components and an array of the second components",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "unzip",
          "normalized": "PArray(a,b)-\u003e(PArray a,PArray b)",
          "package": "dph-lifted-copy",
          "signature": "PArray(a,b)-\u003e(PArray a,PArray b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the source array in the destination, using new values for the given indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "update",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray (Int, a) -\u003e PArray a",
          "source": "src/Data-Array-Parallel-PArray.html#update",
          "type": "function"
        },
        "index": {
          "description": "Copy the source array in the destination using new values for the given indices",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "update",
          "normalized": "PArray a-\u003ePArray(Int,a)-\u003ePArray a",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003ePArray(Int,a)-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Takes two arrays and returns an array of corresponding pairs.\n         If one array is short, excess elements of the longer array are\n         discarded.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e PArray b -\u003e PArray (a, b)",
          "source": "src/Data-Array-Parallel-PArray.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Takes two arrays and returns an array of corresponding pairs If one array is short excess elements of the longer array are discarded",
          "hierarchy": "Data Array Parallel PArray",
          "module": "Data.Array.Parallel.PArray",
          "name": "zip",
          "normalized": "PArray a-\u003ePArray b-\u003ePArray(a,b)",
          "package": "dph-lifted-copy",
          "signature": "PArray a-\u003ePArray b-\u003ePArray(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-PArray.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-copy",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "Bool",
          "package": "dph-lifted-copy",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"or\"\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(||)",
          "package": "dph-lifted-copy",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean or",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(||) ||",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"and\"\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(&&)",
          "package": "dph-lifted-copy",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean and",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "(&&) &&",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "False",
          "package": "dph-lifted-copy",
          "signature": "False",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "False",
          "package": "dph-lifted-copy",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:False"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "True",
          "package": "dph-lifted-copy",
          "signature": "True",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "True",
          "package": "dph-lifted-copy",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:True"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "andP",
          "package": "dph-lifted-copy",
          "signature": "PArr Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#andP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "andP",
          "normalized": "PArr Bool-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "PArr Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:andP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "fromBool",
          "package": "dph-lifted-copy",
          "signature": "Bool -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#fromBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "fromBool",
          "normalized": "Bool-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Bool",
          "signature": "Bool-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean \"not\"\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "not",
          "package": "dph-lifted-copy",
          "signature": "Bool -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Boolean not",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "not",
          "normalized": "Bool-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "orP",
          "package": "dph-lifted-copy",
          "signature": "PArr Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#orP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "orP",
          "normalized": "PArr Bool-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "PArr Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:orP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eotherwise\u003c/a\u003e\u003c/code\u003e is defined as the value \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  It helps to make\n guards more readable.  eg.\n\u003c/p\u003e\u003cpre\u003e  f x | x \u003c 0     = ...\n      | otherwise = ...\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "otherwise",
          "package": "dph-lifted-copy",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "otherwise is defined as the value True It helps to make guards more readable eg otherwise",
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "otherwise",
          "package": "dph-lifted-copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "toBool",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Bool.html#toBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Bool",
          "module": "Data.Array.Parallel.Prelude.Bool",
          "name": "toBool",
          "normalized": "Int-\u003eBool",
          "package": "dph-lifted-copy",
          "partial": "Bool",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Bool.html#v:toBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Prelude-Double.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-copy",
          "partial": "Double",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "Double",
          "package": "dph-lifted-copy",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(*)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(*) *",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(**)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(**) **",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(+)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(+) +",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(-)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(-) -",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/) /",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/=)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(/=) /=",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c) \u003c",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c=)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003c=) \u003c=",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(==)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(==) ==",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e) \u003e",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e=)",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "(\u003e=) \u003e=",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "abs",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "abs",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acos",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#acos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acos",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acosh",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#acosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "acosh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asin",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#asin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asin",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asinh",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#asinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "asinh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atan",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#atan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atan",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atanh",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#atanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "atanh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "ceiling",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#ceiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "ceiling",
          "normalized": "Double-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cos",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#cos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cos",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cosh",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#cosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "cosh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "exp",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "exp",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "floor",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#floor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "floor",
          "normalized": "Double-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "fromInt",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "fromInt",
          "normalized": "Int-\u003eDouble",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "signature": "Int-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "log",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "log",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "logBase",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#logBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "logBase",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "partial": "Base",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "max",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "max",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maxIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maxIndexP",
          "normalized": "PArr Double-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maximumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "maximumP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "min",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "min",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minIndexP",
          "normalized": "PArr Double-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minimumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "minimumP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "negate",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "negate",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "pi",
          "package": "dph-lifted-copy",
          "signature": "Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#pi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "pi",
          "package": "dph-lifted-copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "productP",
          "package": "dph-lifted-copy",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "productP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "recip",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#recip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "recip",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "round",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#round",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "round",
          "normalized": "Double-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sin",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sin",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sinh",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sinh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sqrt",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sqrt",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "sumP",
          "normalized": "PArr Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "PArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tan",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#tan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tan",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tanh",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#tanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "tanh",
          "normalized": "Double-\u003eDouble",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "truncate",
          "package": "dph-lifted-copy",
          "signature": "Double -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Double.html#truncate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Double",
          "module": "Data.Array.Parallel.Prelude.Double",
          "name": "truncate",
          "normalized": "Double-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Double-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Double.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "Float",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Prelude-Float.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "Float",
          "package": "dph-lifted-copy",
          "partial": "Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "Float",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "Float",
          "package": "dph-lifted-copy",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(*)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(*) *",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(**)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%2A%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(**) **",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(+)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(+) +",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(-)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(-) -",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(/)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(/) /",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(/=)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(/=) /=",
          "normalized": "Float-\u003eFloat-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003c)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003c) \u003c",
          "normalized": "Float-\u003eFloat-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003c=)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003c=) \u003c=",
          "normalized": "Float-\u003eFloat-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(==)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(==) ==",
          "normalized": "Float-\u003eFloat-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003e)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003e) \u003e",
          "normalized": "Float-\u003eFloat-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003e=)",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "(\u003e=) \u003e=",
          "normalized": "Float-\u003eFloat-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "abs",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "abs",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "acos",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#acos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "acos",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "acosh",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#acosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "acosh",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "asin",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#asin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "asin",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "asinh",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#asinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "asinh",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "atan",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#atan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "atan",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "atanh",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#atanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "atanh",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "ceiling",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#ceiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "ceiling",
          "normalized": "Float-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "cos",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#cos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "cos",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "cosh",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#cosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "cosh",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "exp",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "exp",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "floor",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#floor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "floor",
          "normalized": "Float-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "fromInt",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "fromInt",
          "normalized": "Int-\u003eFloat",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "signature": "Int-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "log",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "log",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "logBase",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#logBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "logBase",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "partial": "Base",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "max",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "max",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "maxIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Float -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "maxIndexP",
          "normalized": "PArr Float-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Float-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "maximumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "maximumP",
          "normalized": "PArr Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "PArr Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "min",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "min",
          "normalized": "Float-\u003eFloat-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "minIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Float -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "minIndexP",
          "normalized": "PArr Float-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Float-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "minimumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "minimumP",
          "normalized": "PArr Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "PArr Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "negate",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "negate",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "pi",
          "package": "dph-lifted-copy",
          "signature": "Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#pi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "pi",
          "package": "dph-lifted-copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "productP",
          "package": "dph-lifted-copy",
          "signature": "PArr Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "productP",
          "normalized": "PArr Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "PArr Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "recip",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#recip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "recip",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:recip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "round",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#round",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "round",
          "normalized": "Float-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sin",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#sin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sin",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sinh",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#sinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sinh",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sqrt",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sqrt",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "sumP",
          "normalized": "PArr Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "PArr Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "tan",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#tan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "tan",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "tanh",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Float",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#tanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "tanh",
          "normalized": "Float-\u003eFloat",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "truncate",
          "package": "dph-lifted-copy",
          "signature": "Float -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Float.html#truncate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Float",
          "module": "Data.Array.Parallel.Prelude.Float",
          "name": "truncate",
          "normalized": "Float-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Float-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Float.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Prelude-Int.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "Int",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(*)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(*) *",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(+)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(+) +",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(-)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(-) -",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(/=)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(/=) /=",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c) \u003c",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c=)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003c=) \u003c=",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(==)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(==) ==",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e) \u003e",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e=)",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "(\u003e=) \u003e=",
          "normalized": "Int-\u003eInt-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "abs",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "abs",
          "normalized": "Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "div",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "div",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "enumFromToP",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e PArr Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#enumFromToP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "enumFromToP",
          "normalized": "Int-\u003eInt-\u003ePArr Int",
          "package": "dph-lifted-copy",
          "partial": "From To",
          "signature": "Int-\u003eInt-\u003ePArr Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:enumFromToP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "max",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "max",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maxIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maxIndexP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maximumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "maximumP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "min",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "min",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minIndexP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minimumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "minimumP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "mod",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "mod",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "negate",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "negate",
          "normalized": "Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "productP",
          "package": "dph-lifted-copy",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "productP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sqrt",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sqrt",
          "normalized": "Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Int -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Int.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Int",
          "module": "Data.Array.Parallel.Prelude.Int",
          "name": "sumP",
          "normalized": "PArr Int-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "PArr Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Int.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-copy",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "Word8",
          "package": "dph-lifted-copy",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(*)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(*) *",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(+)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(+) +",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(-)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(-) -",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(/=)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(/=) /=",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c) \u003c",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c=)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003c=) \u003c=",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(==)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(==) ==",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e) \u003e",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e=)",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "(\u003e=) \u003e=",
          "normalized": "Word-\u003eWord-\u003eBool",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "abs",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#abs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "abs",
          "normalized": "Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "div",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "div",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "fromInt",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "fromInt",
          "normalized": "Int-\u003eWord",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "signature": "Int-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "max",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "max",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maxIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Word8 -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#maxIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maxIndexP",
          "normalized": "PArr Word-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:maxIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maximumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#maximumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "maximumP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:maximumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "min",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "min",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minIndexP",
          "package": "dph-lifted-copy",
          "signature": "PArr Word8 -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#minIndexP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minIndexP",
          "normalized": "PArr Word-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Index",
          "signature": "PArr Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:minIndexP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minimumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#minimumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "minimumP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:minimumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "mod",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "mod",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "negate",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#negate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "negate",
          "normalized": "Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:negate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "productP",
          "package": "dph-lifted-copy",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#productP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "productP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:productP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sqrt",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sqrt",
          "normalized": "Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sumP",
          "package": "dph-lifted-copy",
          "signature": "PArr Word8 -\u003e Word8",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#sumP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "sumP",
          "normalized": "PArr Word-\u003eWord",
          "package": "dph-lifted-copy",
          "signature": "PArr Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:sumP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "toInt",
          "package": "dph-lifted-copy",
          "signature": "Word8 -\u003e Int",
          "source": "src/Data-Array-Parallel-Prelude-Word8.html#toInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude Word8",
          "module": "Data.Array.Parallel.Prelude.Word8",
          "name": "toInt",
          "normalized": "Word-\u003eInt",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude-Word8.html#v:toInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules bundles all vectorised versions of Prelude definitions.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis module should not be explicitly imported in user code anymore.\u003c/em\u003e  User code should only\n  import \u003ccode\u003e\u003ca\u003eParallel\u003c/a\u003e\u003c/code\u003e and, until the vectoriser supports type classes, the type-specific\n  modules \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Prelude",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "This modules bundles all vectorised versions of Prelude definitions This module should not be explicitly imported in user code anymore User code should only import Parallel and until the vectoriser supports type classes the type-specific modules",
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Prelude",
          "package": "dph-lifted-copy",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude",
          "name": "Bool",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Bool",
          "package": "dph-lifted-copy",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Double",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Double",
          "package": "dph-lifted-copy",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Float",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Float",
          "package": "dph-lifted-copy",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-precision integer type with at least the range \u003ccode\u003e[-2^29 .. 2^29-1]\u003c/code\u003e.\n The exact range for a given implementation can be determined by using\n \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Int",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "fixed-precision integer type with at least the range The exact range for given implementation can be determined by using minBound and maxBound from the Bounded class",
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Int",
          "package": "dph-lifted-copy",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Prelude",
          "name": "PArr",
          "package": "dph-lifted-copy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "PArr",
          "package": "dph-lifted-copy",
          "partial": "PArr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:PArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Word8",
          "package": "dph-lifted-copy",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Data Array Parallel Prelude",
          "module": "Data.Array.Parallel.Prelude",
          "name": "Word8",
          "package": "dph-lifted-copy",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel-Prelude.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUser level interface of parallel arrays.\n\u003c/p\u003e\u003cp\u003eThis library is deprecated. Using it can result in the vectorised program\n   having asymptotically worse complexity than the original. Your program\n   could be 10000x slower than it should be with this library.\n\u003c/p\u003e\u003cp\u003eUse the \u003ccode\u003edph-lifted-vseg\u003c/code\u003e package instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel",
          "name": "Parallel",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "User level interface of parallel arrays This library is deprecated Using it can result in the vectorised program having asymptotically worse complexity than the original Your program could be slower than it should be with this library Use the dph-lifted-vseg package instead",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "Parallel",
          "package": "dph-lifted-copy",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted/bulk parallel arrays\n   This contains the array length, along with the element data.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "source": "src/Data-Array-Parallel-PArray-Base.html#PArray",
          "type": "data"
        },
        "index": {
          "description": "Lifted bulk parallel arrays This contains the array length along with the element data",
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "PArray",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#t:PArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "(!:)",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel.html#%21%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "(!:) !:",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "(+:+)",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:a:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#%2B%3A%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "(+:+) +:+",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:-43-:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "bpermuteP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:Int:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#bpermuteP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "bpermuteP",
          "normalized": "[a]-\u003e[Int]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[Int]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:bpermuteP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "combineP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:a:] -\u003e [:Int:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#combineP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "combineP",
          "normalized": "[a]-\u003e[a]-\u003e[Int]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[a]-\u003e[Int]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:combineP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "concatP",
          "package": "dph-lifted-copy",
          "signature": "[:[:a:]:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#concatP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "concatP",
          "normalized": "[[a]]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:concatP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "crossMapP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e (a -\u003e [:b:]) -\u003e [:(a, b):]",
          "source": "src/Data-Array-Parallel.html#crossMapP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "crossMapP",
          "normalized": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]",
          "package": "dph-lifted-copy",
          "partial": "Map",
          "signature": "[a]-\u003e(a-\u003e[b])-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:crossMapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "emptyP",
          "package": "dph-lifted-copy",
          "signature": "[:a:]",
          "source": "src/Data-Array-Parallel.html#emptyP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "emptyP",
          "normalized": "[a]",
          "package": "dph-lifted-copy",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:emptyP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "filterP",
          "package": "dph-lifted-copy",
          "signature": "(a -\u003e Bool) -\u003e [:a:] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#filterP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "filterP",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:filterP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "fromNestedPArrayP",
          "package": "dph-lifted-copy",
          "signature": "PArray (PArray a) -\u003e [:[:a:]:]",
          "source": "src/Data-Array-Parallel.html#fromNestedPArrayP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "fromNestedPArrayP",
          "normalized": "PArray(PArray a)-\u003e[[a]]",
          "package": "dph-lifted-copy",
          "partial": "Nested PArray",
          "signature": "PArray(PArray a)-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:fromNestedPArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "fromPArrayP",
          "package": "dph-lifted-copy",
          "signature": "PArray a -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#fromPArrayP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "fromPArrayP",
          "normalized": "PArray a-\u003e[a]",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "signature": "PArray a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:fromPArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "indexedP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:(Int, a):]",
          "source": "src/Data-Array-Parallel.html#indexedP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "indexedP",
          "normalized": "[a]-\u003e[(Int,a)]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:indexedP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "lengthP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e Int",
          "source": "src/Data-Array-Parallel.html#lengthP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "lengthP",
          "normalized": "[a]-\u003eInt",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:lengthP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "mapP",
          "package": "dph-lifted-copy",
          "signature": "(a -\u003e b) -\u003e [:a:] -\u003e [:b:]",
          "source": "src/Data-Array-Parallel.html#mapP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "mapP",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "dph-lifted-copy",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:mapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "replicateP",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e a -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#replicateP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "replicateP",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:replicateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "singletonP",
          "package": "dph-lifted-copy",
          "signature": "a -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#singletonP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "singletonP",
          "normalized": "a-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:singletonP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "sliceP",
          "package": "dph-lifted-copy",
          "signature": "Int -\u003e Int -\u003e [:e:] -\u003e [:e:]",
          "source": "src/Data-Array-Parallel.html#sliceP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "sliceP",
          "normalized": "Int-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "Int-\u003eInt-\u003e[e]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:sliceP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "toPArrayP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e PArray a",
          "source": "src/Data-Array-Parallel.html#toPArrayP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "toPArrayP",
          "normalized": "[a]-\u003ePArray a",
          "package": "dph-lifted-copy",
          "partial": "PArray",
          "signature": "[a]-\u003ePArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:toPArrayP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "unzip3P",
          "package": "dph-lifted-copy",
          "signature": "[:(a, b, c):] -\u003e ([:a:], [:b:], [:c:])",
          "source": "src/Data-Array-Parallel.html#unzip3P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "unzip3P",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "dph-lifted-copy",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:unzip3P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "unzipP",
          "package": "dph-lifted-copy",
          "signature": "[:(a, b):] -\u003e ([:a:], [:b:])",
          "source": "src/Data-Array-Parallel.html#unzipP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "unzipP",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "dph-lifted-copy",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:unzipP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "updateP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:(Int, a):] -\u003e [:a:]",
          "source": "src/Data-Array-Parallel.html#updateP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "updateP",
          "normalized": "[a]-\u003e[(Int,a)]-\u003e[a]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[(Int,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:updateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "zip3P",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:b:] -\u003e [:c:] -\u003e [:(a, b, c):]",
          "source": "src/Data-Array-Parallel.html#zip3P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "zip3P",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zip3P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "zipP",
          "package": "dph-lifted-copy",
          "signature": "[:a:] -\u003e [:b:] -\u003e [:(a, b):]",
          "source": "src/Data-Array-Parallel.html#zipP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "zipP",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "dph-lifted-copy",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zipP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "zipWith3P",
          "package": "dph-lifted-copy",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [:a:] -\u003e [:b:] -\u003e [:c:] -\u003e [:d:]",
          "source": "src/Data-Array-Parallel.html#zipWith3P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "zipWith3P",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "dph-lifted-copy",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zipWith3P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel",
          "name": "zipWithP",
          "package": "dph-lifted-copy",
          "signature": "(a -\u003e b -\u003e c) -\u003e [:a:] -\u003e [:b:] -\u003e [:c:]",
          "source": "src/Data-Array-Parallel.html#zipWithP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel",
          "module": "Data.Array.Parallel",
          "name": "zipWithP",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "dph-lifted-copy",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-lifted-copy/docs/Data-Array-Parallel.html#v:zipWithP"
      }
    }
  ]
]