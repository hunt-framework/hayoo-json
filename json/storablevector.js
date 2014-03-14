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
        "word": "storablevector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing semi-public StorableVector internals. This exposes\n the StorableVector representation and low level construction functions.\n Modules which extend the StorableVector system will need to use this module\n while ideally most users will be able to make do with the public interface\n modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.Base",
          "name": "Base",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Base.html",
          "type": "module"
        },
        "index": {
          "description": "module containing semi-public StorableVector internals This exposes the StorableVector representation and low level construction functions Modules which extend the StorableVector system will need to use this module while ideally most users will be able to make do with the public interface modules",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "Base",
          "package": "storablevector",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a vector, supporting many efficient\n operations.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "Vector",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Base.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of vector supporting many efficient operations Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "Vector",
          "package": "storablevector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Base",
          "name": "SV",
          "package": "storablevector",
          "signature": "SV !(ForeignPtr a) !Int !Int",
          "source": "src/Data-StorableVector-Base.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "SV",
          "package": "storablevector",
          "partial": "SV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:SV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper of mallocForeignPtrArray.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "create",
          "package": "storablevector",
          "signature": "Int -\u003e (Ptr a -\u003e IO ()) -\u003e IO (Vector a)",
          "source": "src/Data-StorableVector-Base.html#create",
          "type": "function"
        },
        "index": {
          "description": "Wrapper of mallocForeignPtrArray",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "create",
          "normalized": "Int-\u003e(Ptr a-\u003eIO())-\u003eIO(Vector a)",
          "package": "storablevector",
          "signature": "Int-\u003e(Ptr a-\u003eIO())-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the maximum size needed and a function to make the contents\n of a Vector, createAndTrim makes the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e. The generating\n function is required to return the actual final size (\u003c= the maximum\n size), and the resulting byte array is realloced to this size.\n\u003c/p\u003e\u003cp\u003ecreateAndTrim is the main mechanism for creating custom, efficient\n Vector functions, using Haskell or C functions to fill the space.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "createAndTrim",
          "package": "storablevector",
          "signature": "Int -\u003e (Ptr a -\u003e IO Int) -\u003e IO (Vector a)",
          "source": "src/Data-StorableVector-Base.html#createAndTrim",
          "type": "function"
        },
        "index": {
          "description": "Given the maximum size needed and function to make the contents of Vector createAndTrim makes the Vector The generating function is required to return the actual final size the maximum size and the resulting byte array is realloced to this size createAndTrim is the main mechanism for creating custom efficient Vector functions using Haskell or functions to fill the space",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "createAndTrim",
          "normalized": "Int-\u003e(Ptr a-\u003eIO Int)-\u003eIO(Vector a)",
          "package": "storablevector",
          "partial": "And Trim",
          "signature": "Int-\u003e(Ptr a-\u003eIO Int)-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:createAndTrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Base",
          "name": "createAndTrim'",
          "package": "storablevector",
          "signature": "Int -\u003e (Ptr a -\u003e IO (Int, Int, b)) -\u003e IO (Vector a, b)",
          "source": "src/Data-StorableVector-Base.html#createAndTrim%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "createAndTrim'",
          "normalized": "Int-\u003e(Ptr a-\u003eIO(Int,Int,b))-\u003eIO(Vector a,b)",
          "package": "storablevector",
          "partial": "And Trim'",
          "signature": "Int-\u003e(Ptr a-\u003eIO(Int,Int,b))-\u003eIO(Vector a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:createAndTrim-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Build a Vector from a ForeignPtr\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "fromForeignPtr",
          "package": "storablevector",
          "signature": "ForeignPtr a -\u003e Int -\u003e Vector a",
          "source": "src/Data-StorableVector-Base.html#fromForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Build Vector from ForeignPtr",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "fromForeignPtr",
          "normalized": "ForeignPtr a-\u003eInt-\u003eVector a",
          "package": "storablevector",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr a-\u003eInt-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:fromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Base",
          "name": "incPtr",
          "package": "storablevector",
          "signature": "Ptr a -\u003e Ptr a",
          "source": "src/Data-StorableVector-Base.html#incPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "incPtr",
          "normalized": "Ptr a-\u003ePtr a",
          "package": "storablevector",
          "partial": "Ptr",
          "signature": "Ptr a-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:incPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like Unsafe.performIO, but we inline it. Big performance gains as\n it exposes lots of things to further inlining. \u003cem\u003eVery unsafe\u003c/em\u003e. In\n particular, you should do no memory allocation inside an\n \u003ccode\u003e\u003ca\u003einlinePerformIO\u003c/a\u003e\u003c/code\u003e block. On Hugs this is just \u003ccode\u003eUnsafe.performIO\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "inlinePerformIO",
          "package": "storablevector",
          "signature": "IO a -\u003e a",
          "source": "src/Data-StorableVector-Base.html#inlinePerformIO",
          "type": "function"
        },
        "index": {
          "description": "Just like Unsafe.performIO but we inline it Big performance gains as it exposes lots of things to further inlining Very unsafe In particular you should do no memory allocation inside an inlinePerformIO block On Hugs this is just Unsafe.performIO",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "inlinePerformIO",
          "normalized": "IO a-\u003ea",
          "package": "storablevector",
          "partial": "Perform IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:inlinePerformIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Deconstruct a ForeignPtr from a Vector\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "toForeignPtr",
          "package": "storablevector",
          "signature": "Vector a -\u003e (ForeignPtr a, Int, Int)",
          "source": "src/Data-StorableVector-Base.html#toForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct ForeignPtr from Vector",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "toForeignPtr",
          "normalized": "Vector a-\u003e(ForeignPtr a,Int,Int)",
          "package": "storablevector",
          "partial": "Foreign Ptr",
          "signature": "Vector a-\u003e(ForeignPtr a,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:toForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA way of creating Vectors outside the IO monad. The \u003ccode\u003eInt\u003c/code\u003e\n argument gives the final size of the Vector. Unlike\n \u003ccode\u003e\u003ca\u003ecreateAndTrim\u003c/a\u003e\u003c/code\u003e the Vector is not reallocated if the final size\n is less than the estimated size.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeCreate",
          "package": "storablevector",
          "signature": "Int -\u003e (Ptr a -\u003e IO ()) -\u003e Vector a",
          "source": "src/Data-StorableVector-Base.html#unsafeCreate",
          "type": "function"
        },
        "index": {
          "description": "way of creating Vectors outside the IO monad The Int argument gives the final size of the Vector Unlike createAndTrim the Vector is not reallocated if the final size is less than the estimated size",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeCreate",
          "normalized": "Int-\u003e(Ptr a-\u003eIO())-\u003eVector a",
          "package": "storablevector",
          "partial": "Create",
          "signature": "Int-\u003e(Ptr a-\u003eIO())-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e which omits the checks on \u003ccode\u003en\u003c/code\u003e so there is an\n obligation on the programmer to provide a proof that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeDrop",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Base.html#unsafeDrop",
          "type": "function"
        },
        "index": {
          "description": "variety of drop which omits the checks on so there is an obligation on the programmer to provide proof that length xs",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeDrop",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Drop",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e for non-empty Vectors. \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the Vector is non-empty.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeHead",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector-Base.html#unsafeHead",
          "type": "function"
        },
        "index": {
          "description": "variety of head for non-empty Vectors unsafeHead omits the check for the empty case so there is an obligation on the programmer to provide proof that the Vector is non-empty",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeHead",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "partial": "Head",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0, returning a\n single element.  This omits the bounds check, which means there is an\n accompanying obligation on the programmer to ensure the bounds are checked in\n some other way.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeIndex",
          "package": "storablevector",
          "signature": "Vector a -\u003e Int -\u003e a",
          "source": "src/Data-StorableVector-Base.html#unsafeIndex",
          "type": "function"
        },
        "index": {
          "description": "Unsafe Vector index subscript operator starting from returning single element This omits the bounds check which means there is an accompanying obligation on the programmer to ensure the bounds are checked in some other way",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeIndex",
          "normalized": "Vector a-\u003eInt-\u003ea",
          "package": "storablevector",
          "partial": "Index",
          "signature": "Vector a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e for non-empty Vectors. \u003ccode\u003e\u003ca\u003eunsafeInit\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case. As with \u003ccode\u003e\u003ca\u003eunsafeLast\u003c/a\u003e\u003c/code\u003e, the programmer must\n provide a separate proof that the Vector is non-empty.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeInit",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Base.html#unsafeInit",
          "type": "function"
        },
        "index": {
          "description": "variety of init for non-empty Vectors unsafeInit omits the check for the empty case As with unsafeLast the programmer must provide separate proof that the Vector is non-empty",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeInit",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Init",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e for non-empty Vectors. \u003ccode\u003e\u003ca\u003eunsafeLast\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the Vector is non-empty.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeLast",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector-Base.html#unsafeLast",
          "type": "function"
        },
        "index": {
          "description": "variety of last for non-empty Vectors unsafeLast omits the check for the empty case so there is an obligation on the programmer to provide proof that the Vector is non-empty",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeLast",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "partial": "Last",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e for non-empty Vectors. \u003ccode\u003e\u003ca\u003eunsafeTail\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case. As with \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e, the programmer must\n provide a separate proof that the Vector is non-empty.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeTail",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Base.html#unsafeTail",
          "type": "function"
        },
        "index": {
          "description": "variety of tail for non-empty Vectors unsafeTail omits the check for the empty case As with unsafeHead the programmer must provide separate proof that the Vector is non-empty",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeTail",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Tail",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e which omits the checks on \u003ccode\u003en\u003c/code\u003e so there is an\n obligation on the programmer to provide a proof that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "unsafeTake",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Base.html#unsafeTake",
          "type": "function"
        },
        "index": {
          "description": "variety of take which omits the checks on so there is an obligation on the programmer to provide proof that length xs",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "unsafeTake",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Take",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:unsafeTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action that is initialized\n with a pointer to the first element to be used.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Base",
          "name": "withStartPtr",
          "package": "storablevector",
          "signature": "Vector a -\u003e (Ptr a -\u003e Int -\u003e IO b) -\u003e IO b",
          "source": "src/Data-StorableVector-Base.html#withStartPtr",
          "type": "function"
        },
        "index": {
          "description": "Run an action that is initialized with pointer to the first element to be used",
          "hierarchy": "Data StorableVector Base",
          "module": "Data.StorableVector.Base",
          "name": "withStartPtr",
          "normalized": "Vector a-\u003e(Ptr a-\u003eInt-\u003eIO b)-\u003eIO b",
          "package": "storablevector",
          "partial": "Start Ptr",
          "signature": "Vector a-\u003e(Ptr a-\u003eInt-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Base.html#v:withStartPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBuild a lazy storable vector by incrementally adding an element.\nThis is analogous to Data.Binary.Builder for Data.ByteString.Lazy.\n\u003c/p\u003e\u003cp\u003eAttention:\nThis implementation is still almost 3 times slower\nthan constructing a lazy storable vector using unfoldr\nin our Chorus speed test.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "Builder",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Build lazy storable vector by incrementally adding an element This is analogous to Data.Binary.Builder for Data.ByteString.Lazy Attention This implementation is still almost times slower than constructing lazy storable vector using unfoldr in our Chorus speed test",
          "hierarchy": "Data StorableVector Lazy Builder",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "Builder",
          "package": "storablevector",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "Builder",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy-Builder.html#Builder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Builder",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "Builder",
          "package": "storablevector",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a laziness break.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "flush",
          "package": "storablevector",
          "signature": "Builder a",
          "source": "src/Data-StorableVector-Lazy-Builder.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Set laziness break",
          "hierarchy": "Data StorableVector Lazy Builder",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "flush",
          "package": "storablevector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Builder.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "put",
          "package": "storablevector",
          "signature": "a -\u003e Builder a",
          "source": "src/Data-StorableVector-Lazy-Builder.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Builder",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "put",
          "normalized": "a-\u003eBuilder a",
          "package": "storablevector",
          "signature": "a-\u003eBuilder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Builder.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e toLazyStorableVector (ChunkSize 7) $ Data.Monoid.mconcat $ map put ['a'..'z']\n\u003c/pre\u003e",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "toLazyStorableVector",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e Builder a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Builder.html#toLazyStorableVector",
          "type": "function"
        },
        "index": {
          "description": "toLazyStorableVector ChunkSize Data.Monoid.mconcat map put",
          "hierarchy": "Data StorableVector Lazy Builder",
          "module": "Data.StorableVector.Lazy.Builder",
          "name": "toLazyStorableVector",
          "normalized": "ChunkSize-\u003eBuilder a-\u003eVector a",
          "package": "storablevector",
          "partial": "Lazy Storable Vector",
          "signature": "ChunkSize-\u003eBuilder a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Builder.html#v:toLazyStorableVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for \u003ccode\u003eStorableVector\u003c/code\u003e that allow control of the size of individual chunks.\n\u003c/p\u003e\u003cp\u003eThis is import for an application like the following:\nYou want to mix audio signals that are relatively shifted.\nThe structure of chunks of three streams may be illustrated as:\n\u003c/p\u003e\u003cpre\u003e [____] [____] [____] [____] ...\n   [____] [____] [____] [____] ...\n     [____] [____] [____] [____] ...\n\u003c/pre\u003e\u003cp\u003eWhen we mix the streams (\u003ccode\u003ezipWith3 (x y z -\u003e x+y+z)\u003c/code\u003e)\nwith respect to the chunk structure of the first signal,\ncomputing the first chunk requires full evaluation of all leading chunks of the stream.\nHowever the last value of the third leading chunk\nis much later in time than the last value of the first leading chunk.\nWe like to reduce these dependencies using a different chunk structure,\nsay\n\u003c/p\u003e\u003cpre\u003e [____] [____] [____] [____] ...\n   [__] [____] [____] [____] ...\n     [] [____] [____] [____] ...\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "Pattern",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy-Pattern.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for StorableVector that allow control of the size of individual chunks This is import for an application like the following You want to mix audio signals that are relatively shifted The structure of chunks of three streams may be illustrated as When we mix the streams zipWith3 with respect to the chunk structure of the first signal computing the first chunk requires full evaluation of all leading chunks of the stream However the last value of the third leading chunk is much later in time than the last value of the first leading chunk We like to reduce these dependencies using different chunk structure say",
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "Pattern",
          "package": "storablevector",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "ChunkSize",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy.html#ChunkSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "ChunkSize",
          "package": "storablevector",
          "partial": "Chunk Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#t:ChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "LazySize",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#LazySize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "LazySize",
          "package": "storablevector",
          "partial": "Lazy Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#t:LazySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "Vector",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy.html#Vector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "Vector",
          "package": "storablevector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "all",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector-Lazy.html#all",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:all\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:all\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "any",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector-Lazy.html#any",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:any\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:any\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "append",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:append\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:append\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "append",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "chunkSize",
          "package": "storablevector",
          "signature": "Int -\u003e ChunkSize",
          "source": "src/Data-StorableVector-Lazy.html#chunkSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:chunkSize\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:chunkSize\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "chunkSize",
          "normalized": "Int-\u003eChunkSize",
          "package": "storablevector",
          "partial": "Size",
          "signature": "Int-\u003eChunkSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:chunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "concat",
          "package": "storablevector",
          "signature": "[Vector a] -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#concat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:concat\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:concat\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "concat",
          "normalized": "[Vector a]-\u003eVector a",
          "package": "storablevector",
          "signature": "[Vector a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "cons",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#cons",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:cons\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:cons\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "cons",
          "normalized": "a-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "crochetL",
          "package": "storablevector",
          "signature": "(x -\u003e acc -\u003e Maybe (y, acc)) -\u003e acc -\u003e Vector x -\u003e Vector y",
          "source": "src/Data-StorableVector-Lazy.html#crochetL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:crochetL\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:crochetL\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "crochetL",
          "normalized": "(a-\u003eb-\u003eMaybe(c,b))-\u003eb-\u003eVector a-\u003eVector c",
          "package": "storablevector",
          "signature": "(x-\u003eacc-\u003eMaybe(y,acc))-\u003eacc-\u003eVector x-\u003eVector y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:crochetL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "cycle",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#cycle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:cycle\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:cycle\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "cycle",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "defaultChunkSize",
          "package": "storablevector",
          "signature": "ChunkSize",
          "source": "src/Data-StorableVector-Lazy.html#defaultChunkSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:defaultChunkSize\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:defaultChunkSize\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "defaultChunkSize",
          "package": "storablevector",
          "partial": "Chunk Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:defaultChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "drop",
          "package": "storablevector",
          "signature": "LazySize -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "drop",
          "normalized": "LazySize-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "LazySize-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "dropMargin",
          "package": "storablevector",
          "signature": "Int -\u003e Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#dropMargin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:dropMargin\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:dropMargin\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "dropMargin",
          "normalized": "Int-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Margin",
          "signature": "Int-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:dropMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edropMarginRem n m xs\u003c/code\u003e\ndrops at most the first \u003ccode\u003em\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e\nand ensures that \u003ccode\u003exs\u003c/code\u003e still contains \u003ccode\u003en\u003c/code\u003e elements.\nAdditionally returns the number of elements that could not be dropped\ndue to the margin constraint.\nThat is \u003ccode\u003edropMarginRem n m xs == (k,ys)\u003c/code\u003e implies \u003ccode\u003elength xs - m == length ys - k\u003c/code\u003e.\nRequires \u003ccode\u003elength xs \u003e= n\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "dropMarginRem",
          "package": "storablevector",
          "signature": "Int -\u003e Int -\u003e Vector a -\u003e (Int, Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#dropMarginRem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:dropMarginRem\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:dropMarginRem\"]"
        },
        "index": {
          "description": "dropMarginRem xs drops at most the first elements of xs and ensures that xs still contains elements Additionally returns the number of elements that could not be dropped due to the margin constraint That is dropMarginRem xs ys implies length xs length ys Requires length xs",
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "dropMarginRem",
          "normalized": "Int-\u003eInt-\u003eVector a-\u003e(Int,Vector a)",
          "package": "storablevector",
          "partial": "Margin Rem",
          "signature": "Int-\u003eInt-\u003eVector a-\u003e(Int,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:dropMarginRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "dropWhile",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#dropWhile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:dropWhile\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:dropWhile\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "empty",
          "package": "storablevector",
          "signature": "Vector a",
          "source": "src/Data-StorableVector-Lazy.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:empty\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:empty\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "empty",
          "package": "storablevector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "filter",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:filter\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:filter\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "foldl",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#foldl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:foldl\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:foldl\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "foldl'",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#foldl%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:foldl-39-\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:foldl-39-\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "iterateN",
          "package": "storablevector",
          "signature": "LazySize -\u003e (a -\u003e a) -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#iterateN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "iterateN",
          "normalized": "LazySize-\u003e(a-\u003ea)-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "LazySize-\u003e(a-\u003ea)-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:iterateN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "length",
          "package": "storablevector",
          "signature": "Vector a -\u003e LazySize",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "length",
          "normalized": "Vector a-\u003eLazySize",
          "package": "storablevector",
          "signature": "Vector a-\u003eLazySize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "map",
          "package": "storablevector",
          "signature": "(x -\u003e y) -\u003e Vector x -\u003e Vector y",
          "source": "src/Data-StorableVector-Lazy.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:map\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:map\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "storablevector",
          "signature": "(x-\u003ey)-\u003eVector x-\u003eVector y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "mapAccumL",
          "package": "storablevector",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Vector a -\u003e (acc, Vector b)",
          "source": "src/Data-StorableVector-Lazy.html#mapAccumL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:mapAccumL\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:mapAccumL\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "mapAccumL",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eVector b-\u003e(a,Vector c)",
          "package": "storablevector",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eVector a-\u003e(acc,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "mapAccumR",
          "package": "storablevector",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Vector a -\u003e (acc, Vector b)",
          "source": "src/Data-StorableVector-Lazy.html#mapAccumR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:mapAccumR\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:mapAccumR\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eVector b-\u003e(a,Vector c)",
          "package": "storablevector",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eVector a-\u003e(acc,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "maximum",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#maximum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:maximum\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:maximum\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "maximum",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "minimum",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#minimum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:minimum\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:minimum\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "minimum",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "null",
          "package": "storablevector",
          "signature": "Vector a -\u003e Bool",
          "source": "src/Data-StorableVector-Lazy.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:null\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:null\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "null",
          "normalized": "Vector a-\u003eBool",
          "package": "storablevector",
          "signature": "Vector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "pack",
          "package": "storablevector",
          "signature": "LazySize -\u003e [a] -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "pack",
          "normalized": "LazySize-\u003e[a]-\u003eVector a",
          "package": "storablevector",
          "signature": "LazySize-\u003e[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "packWith",
          "package": "storablevector",
          "signature": "LazySize -\u003e (a -\u003e b) -\u003e [a] -\u003e Vector b",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#packWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "packWith",
          "normalized": "LazySize-\u003e(a-\u003eb)-\u003e[a]-\u003eVector b",
          "package": "storablevector",
          "partial": "With",
          "signature": "LazySize-\u003e(a-\u003eb)-\u003e[a]-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:packWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "replicate",
          "package": "storablevector",
          "signature": "LazySize -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "replicate",
          "normalized": "LazySize-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "LazySize-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "reverse",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#reverse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:reverse\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:reverse\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "reverse",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "scanl",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#scanl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:scanl\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:scanl\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003eVector a",
          "package": "storablevector",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "singleton",
          "package": "storablevector",
          "signature": "a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#singleton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:singleton\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:singleton\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "singleton",
          "normalized": "a-\u003eVector a",
          "package": "storablevector",
          "signature": "a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "span",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#span",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:span\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:span\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "splitAt",
          "package": "storablevector",
          "signature": "LazySize -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "splitAt",
          "normalized": "LazySize-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "partial": "At",
          "signature": "LazySize-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "splitAtVectorPattern",
          "package": "storablevector",
          "signature": "LazySize -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#splitAtVectorPattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "splitAtVectorPattern",
          "normalized": "LazySize-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "partial": "At Vector Pattern",
          "signature": "LazySize-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:splitAtVectorPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "switchL",
          "package": "storablevector",
          "signature": "b -\u003e (a -\u003e Vector a -\u003e b) -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector-Lazy.html#switchL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:switchL\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:switchL\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "switchL",
          "normalized": "a-\u003e(b-\u003eVector b-\u003ea)-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "b-\u003e(a-\u003eVector a-\u003eb)-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "switchR",
          "package": "storablevector",
          "signature": "b -\u003e (Vector a -\u003e a -\u003e b) -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector-Lazy.html#switchR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:switchR\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:switchR\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "switchR",
          "normalized": "a-\u003e(Vector b-\u003eb-\u003ea)-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "b-\u003e(Vector a-\u003ea-\u003eb)-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:switchR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates laziness breaks\nwherever either the lazy length number or the vector has a chunk boundary.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "take",
          "package": "storablevector",
          "signature": "LazySize -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#take",
          "type": "function"
        },
        "index": {
          "description": "Generates laziness breaks wherever either the lazy length number or the vector has chunk boundary",
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "take",
          "normalized": "LazySize-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "LazySize-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreserves the chunk pattern of the lazy vector.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "takeVectorPattern",
          "package": "storablevector",
          "signature": "LazySize -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#takeVectorPattern",
          "type": "function"
        },
        "index": {
          "description": "Preserves the chunk pattern of the lazy vector",
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "takeVectorPattern",
          "normalized": "LazySize-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Vector Pattern",
          "signature": "LazySize-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:takeVectorPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "takeWhile",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#takeWhile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:takeWhile\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:takeWhile\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "unfoldrN",
          "package": "storablevector",
          "signature": "LazySize -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e (Vector b, Maybe a)",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "unfoldrN",
          "normalized": "LazySize-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003e(Vector b,Maybe a)",
          "package": "storablevector",
          "signature": "LazySize-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003e(Vector b,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "unpack",
          "package": "storablevector",
          "signature": "Vector a -\u003e [a]",
          "source": "src/Data-StorableVector-Lazy.html#unpack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:unpack\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:unpack\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "unpack",
          "normalized": "Vector a-\u003e[a]",
          "package": "storablevector",
          "signature": "Vector a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "unpackWith",
          "package": "storablevector",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e [b]",
          "source": "src/Data-StorableVector-Lazy.html#unpackWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:unpackWith\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:unpackWith\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "unpackWith",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003e[b]",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003eVector a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:unpackWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "viewL",
          "package": "storablevector",
          "signature": "Vector a -\u003e Maybe (a, Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#viewL",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:viewL\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:viewL\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "viewL",
          "normalized": "Vector a-\u003eMaybe(a,Vector a)",
          "package": "storablevector",
          "signature": "Vector a-\u003eMaybe(a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "viewR",
          "package": "storablevector",
          "signature": "Vector a -\u003e Maybe (Vector a, a)",
          "source": "src/Data-StorableVector-Lazy.html#viewR",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:viewR\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:viewR\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "viewR",
          "normalized": "Vector a-\u003eMaybe(Vector a,a)",
          "package": "storablevector",
          "signature": "Vector a-\u003eMaybe(Vector a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:viewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates laziness breaks\nwherever one of the input signals has a chunk boundary.\n\u003c/p\u003e",
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "zipWith",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Data-StorableVector-Lazy.html#zipWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWith\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWith\"]"
        },
        "index": {
          "description": "Generates laziness breaks wherever one of the input signals has chunk boundary",
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "zipWith3",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "source": "src/Data-StorableVector-Lazy.html#zipWith3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWith3\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWith3\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.Lazy.Pattern\",\"Data.StorableVector.Lazy\"]",
          "name": "zipWith4",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e",
          "source": "src/Data-StorableVector-Lazy.html#zipWith4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWith4\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWith4\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWithSize",
          "package": "storablevector",
          "signature": "LazySize -\u003e (a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#zipWithSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWithSize",
          "normalized": "LazySize-\u003e(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "storablevector",
          "partial": "With Size",
          "signature": "LazySize-\u003e(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWithSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWithSize3",
          "package": "storablevector",
          "signature": "LazySize -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#zipWithSize3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWithSize3",
          "normalized": "LazySize-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "storablevector",
          "partial": "With Size",
          "signature": "LazySize-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWithSize3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWithSize4",
          "package": "storablevector",
          "signature": "LazySize -\u003e (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e",
          "source": "src/Data-StorableVector-Lazy-Pattern.html#zipWithSize4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pattern",
          "module": "Data.StorableVector.Lazy.Pattern",
          "name": "zipWithSize4",
          "normalized": "LazySize-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "package": "storablevector",
          "partial": "With Size",
          "signature": "LazySize-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pattern.html#v:zipWithSize4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn principle you can traverse through a lazy storable vector\nusing repeated calls to \u003ccode\u003eviewL\u003c/code\u003e.\nHowever this needs a bit of pointer arrangement and allocation.\nThis data structure makes the inner loop faster,\nthat consists of traversing through a chunk.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy-Pointer.html",
          "type": "module"
        },
        "index": {
          "description": "In principle you can traverse through lazy storable vector using repeated calls to viewL However this needs bit of pointer arrangement and allocation This data structure makes the inner loop faster that consists of traversing through chunk",
          "hierarchy": "Data StorableVector Lazy Pointer",
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "partial": "Pointer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pointer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy-PointerPrivate.html#Pointer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pointer",
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "partial": "Pointer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pointer.html#t:Pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "cons",
          "package": "storablevector",
          "signature": "Vector a -\u003e Pointer a",
          "source": "src/Data-StorableVector-Lazy-Pointer.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pointer",
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "cons",
          "normalized": "Vector a-\u003ePointer a",
          "package": "storablevector",
          "signature": "Vector a-\u003ePointer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pointer.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "switchL",
          "package": "storablevector",
          "signature": "b -\u003e (a -\u003e Pointer a -\u003e b) -\u003e Pointer a -\u003e b",
          "source": "src/Data-StorableVector-Lazy-PointerPrivate.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pointer",
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "switchL",
          "normalized": "a-\u003e(b-\u003ePointer b-\u003ea)-\u003ePointer b-\u003ea",
          "package": "storablevector",
          "signature": "b-\u003e(a-\u003ePointer a-\u003eb)-\u003ePointer a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pointer.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "viewL",
          "package": "storablevector",
          "signature": "Pointer a -\u003e Maybe (a, Pointer a)",
          "source": "src/Data-StorableVector-Lazy-PointerPrivate.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy Pointer",
          "module": "Data.StorableVector.Lazy.Pointer",
          "name": "viewL",
          "normalized": "Pointer a-\u003eMaybe(a,Pointer a)",
          "package": "storablevector",
          "signature": "Pointer a-\u003eMaybe(a,Pointer a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy-Pointer.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eChunky signal stream build on StorableVector.\n\u003c/p\u003e\u003cp\u003eHints for fusion:\n - Higher order functions should always be inlined in the end\n   in order to turn them into machine loops\n   instead of calling a function in an inner loop.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "Lazy",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Chunky signal stream build on StorableVector Hints for fusion Higher order functions should always be inlined in the end in order to turn them into machine loops instead of calling function in an inner loop",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "Lazy",
          "package": "storablevector",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "ChunkSize",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy.html#ChunkSize",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "ChunkSize",
          "package": "storablevector",
          "partial": "Chunk Size",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#t:ChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "Vector",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Lazy.html#Vector",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "Vector",
          "package": "storablevector",
          "partial": "Vector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "ChunkSize",
          "package": "storablevector",
          "signature": "ChunkSize Int",
          "source": "src/Data-StorableVector-Lazy.html#ChunkSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "ChunkSize",
          "package": "storablevector",
          "partial": "Chunk Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:ChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "SV",
          "package": "storablevector",
          "signature": "SV",
          "source": "src/Data-StorableVector-Lazy.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "SV",
          "package": "storablevector",
          "partial": "SV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:SV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "appendFile",
          "package": "storablevector",
          "signature": "FilePath -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-StorableVector-Lazy.html#appendFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "appendFile",
          "normalized": "FilePath-\u003eVector a-\u003eIO()",
          "package": "storablevector",
          "partial": "File",
          "signature": "FilePath-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "cancelNullVector",
          "package": "storablevector",
          "signature": "(Vector a, b) -\u003e Maybe (Vector a, b)",
          "source": "src/Data-StorableVector-Lazy.html#cancelNullVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "cancelNullVector",
          "normalized": "(Vector a,b)-\u003eMaybe(Vector a,b)",
          "package": "storablevector",
          "partial": "Null Vector",
          "signature": "(Vector a,b)-\u003eMaybe(Vector a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:cancelNullVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "chunks",
          "package": "storablevector",
          "signature": "[Vector a]",
          "source": "src/Data-StorableVector-Lazy.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "chunks",
          "normalized": "[Vector a]",
          "package": "storablevector",
          "signature": "[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:chunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "crochetLChunk",
          "package": "storablevector",
          "signature": "(x -\u003e acc -\u003e Maybe (y, acc)) -\u003e acc -\u003e Vector x -\u003e (Vector y, Maybe acc)",
          "source": "src/Data-StorableVector-Lazy.html#crochetLChunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "crochetLChunk",
          "normalized": "(a-\u003eb-\u003eMaybe(c,b))-\u003eb-\u003eVector a-\u003e(Vector c,Maybe b)",
          "package": "storablevector",
          "partial": "LChunk",
          "signature": "(x-\u003eacc-\u003eMaybe(y,acc))-\u003eacc-\u003eVector x-\u003e(Vector y,Maybe acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:crochetLChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "deinterleave",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector-Lazy.html#deinterleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "deinterleave",
          "normalized": "Int-\u003eVector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:deinterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "drop",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "drop",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "equal",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector-Lazy.html#equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "equal",
          "normalized": "Vector a-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eextendL size x y\u003c/code\u003e\nprepends the chunk \u003ccode\u003ex\u003c/code\u003e and merges it with the first chunk of \u003ccode\u003ey\u003c/code\u003e\nif the total size is at most \u003ccode\u003esize\u003c/code\u003e.\nThis way you can prepend small chunks\nwhile asserting a reasonable average size for chunks.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "extendL",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#extendL",
          "type": "function"
        },
        "index": {
          "description": "extendL size prepends the chunk and merges it with the first chunk of if the total size is at most size This way you can prepend small chunks while asserting reasonable average size for chunks",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "extendL",
          "normalized": "ChunkSize-\u003eVector a-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003eVector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:extendL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "foldr",
          "package": "storablevector",
          "signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "package": "storablevector",
          "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "fromChunk",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#fromChunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "fromChunk",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Chunk",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:fromChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "fromChunks",
          "package": "storablevector",
          "signature": "[Vector a] -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#fromChunks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "fromChunks",
          "normalized": "[Vector a]-\u003eVector a",
          "package": "storablevector",
          "partial": "Chunks",
          "signature": "[Vector a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:fromChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the rest of a file lazily and\nprovide the reason of termination as IOError.\nIf IOError is EOF (check with \u003ccode\u003eSystem.Error.isEOFError err\u003c/code\u003e),\nthen the file was read successfully.\nOnly access the final IOError after you have consumed the file contents,\nsince finding out the terminating reason forces to read the entire file.\nMake also sure you read the file completely,\nbecause it is only closed when the file end is reached\n(or an exception is encountered).\n\u003c/p\u003e\u003cp\u003eTODO:\nIn ByteString.Lazy the chunk size is reduced\nif data is not immediately available.\nMaybe we should adapt that behaviour\nbut when working with realtime streams\nthat may mean that the chunks are very small.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "hGetContentsAsync",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e Handle -\u003e IO (IOError, Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#hGetContentsAsync",
          "type": "function"
        },
        "index": {
          "description": "Read the rest of file lazily and provide the reason of termination as IOError If IOError is EOF check with System.Error.isEOFError err then the file was read successfully Only access the final IOError after you have consumed the file contents since finding out the terminating reason forces to read the entire file Make also sure you read the file completely because it is only closed when the file end is reached or an exception is encountered TODO In ByteString.Lazy the chunk size is reduced if data is not immediately available Maybe we should adapt that behaviour but when working with realtime streams that may mean that the chunks are very small",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "hGetContentsAsync",
          "normalized": "ChunkSize-\u003eHandle-\u003eIO(IOError,Vector a)",
          "package": "storablevector",
          "partial": "Get Contents Async",
          "signature": "ChunkSize-\u003eHandle-\u003eIO(IOError,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:hGetContentsAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "hGetContentsSync",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e Handle -\u003e IO (Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#hGetContentsSync",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "hGetContentsSync",
          "normalized": "ChunkSize-\u003eHandle-\u003eIO(Vector a)",
          "package": "storablevector",
          "partial": "Get Contents Sync",
          "signature": "ChunkSize-\u003eHandle-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:hGetContentsSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "hPut",
          "package": "storablevector",
          "signature": "Handle -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-StorableVector-Lazy.html#hPut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "hPut",
          "normalized": "Handle-\u003eVector a-\u003eIO()",
          "package": "storablevector",
          "partial": "Put",
          "signature": "Handle-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "index",
          "package": "storablevector",
          "signature": "Vector a -\u003e Int -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "index",
          "normalized": "Vector a-\u003eInt-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave lazy vectors\nwhile maintaining the chunk pattern of the first vector.\nAll input vectors must have the same length.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "interleaveFirstPattern",
          "package": "storablevector",
          "signature": "[Vector a] -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#interleaveFirstPattern",
          "type": "function"
        },
        "index": {
          "description": "Interleave lazy vectors while maintaining the chunk pattern of the first vector All input vectors must have the same length",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "interleaveFirstPattern",
          "normalized": "[Vector a]-\u003eVector a",
          "package": "storablevector",
          "partial": "First Pattern",
          "signature": "[Vector a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:interleaveFirstPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "iterate",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e a) -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#iterate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "iterate",
          "normalized": "ChunkSize-\u003e(a-\u003ea)-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003e(a-\u003ea)-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "length",
          "package": "storablevector",
          "signature": "Vector a -\u003e Int",
          "source": "src/Data-StorableVector-Lazy.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "length",
          "normalized": "Vector a-\u003eInt",
          "package": "storablevector",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "moduleError",
          "package": "storablevector",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Data-StorableVector-Lazy.html#moduleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "moduleError",
          "normalized": "String-\u003eString-\u003ea",
          "package": "storablevector",
          "partial": "Error",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:moduleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "monoidConcatMap",
          "package": "storablevector",
          "signature": "(a -\u003e m) -\u003e Vector a -\u003e m",
          "source": "src/Data-StorableVector-Lazy.html#monoidConcatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "monoidConcatMap",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eb",
          "package": "storablevector",
          "partial": "Concat Map",
          "signature": "(a-\u003em)-\u003eVector a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:monoidConcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "pack",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e [a] -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "pack",
          "normalized": "ChunkSize-\u003e[a]-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003e[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "packWith",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e b) -\u003e [a] -\u003e Vector b",
          "source": "src/Data-StorableVector-Lazy.html#packWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "packWith",
          "normalized": "ChunkSize-\u003e(a-\u003eb)-\u003e[a]-\u003eVector b",
          "package": "storablevector",
          "partial": "With",
          "signature": "ChunkSize-\u003e(a-\u003eb)-\u003e[a]-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:packWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure a minimal length of the list by appending pad values.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "pad",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e a -\u003e Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#pad",
          "type": "function"
        },
        "index": {
          "description": "Ensure minimal length of the list by appending pad values",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "pad",
          "normalized": "ChunkSize-\u003ea-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003ea-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "padAlt",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e a -\u003e Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#padAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "padAlt",
          "normalized": "ChunkSize-\u003ea-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "Alt",
          "signature": "ChunkSize-\u003ea-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:padAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "pointer",
          "package": "storablevector",
          "signature": "Vector a -\u003e Pointer a",
          "source": "src/Data-StorableVector-Lazy.html#pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "pointer",
          "normalized": "Vector a-\u003ePointer a",
          "package": "storablevector",
          "signature": "Vector a-\u003ePointer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file can only closed after all values are consumed.\nThat is you must always assert that you consume all elements of the stream,\nand that no values are missed due to lazy evaluation.\nThis requirement makes this function useless in many applications.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "readFileAsync",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e FilePath -\u003e IO (IOError, Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#readFileAsync",
          "type": "function"
        },
        "index": {
          "description": "The file can only closed after all values are consumed That is you must always assert that you consume all elements of the stream and that no values are missed due to lazy evaluation This requirement makes this function useless in many applications",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "readFileAsync",
          "normalized": "ChunkSize-\u003eFilePath-\u003eIO(IOError,Vector a)",
          "package": "storablevector",
          "partial": "File Async",
          "signature": "ChunkSize-\u003eFilePath-\u003eIO(IOError,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:readFileAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "repeat",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "repeat",
          "normalized": "ChunkSize-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "replicate",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e Int -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "replicate",
          "normalized": "ChunkSize-\u003eInt-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003eInt-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "sample",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (Int -\u003e a) -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "sample",
          "normalized": "ChunkSize-\u003e(Int-\u003ea)-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003e(Int-\u003ea)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "sampleN",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e Int -\u003e (Int -\u003e a) -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#sampleN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "sampleN",
          "normalized": "ChunkSize-\u003eInt-\u003e(Int-\u003ea)-\u003eVector a",
          "package": "storablevector",
          "signature": "ChunkSize-\u003eInt-\u003e(Int-\u003ea)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:sampleN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "sieve",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#sieve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "sieve",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:sieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "splitAt",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector-Lazy.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "splitAt",
          "normalized": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "partial": "At",
          "signature": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "take",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector-Lazy.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "take",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "unfoldr",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e Vector b",
          "source": "src/Data-StorableVector-Lazy.html#unfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "unfoldr",
          "normalized": "ChunkSize-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003eVector b",
          "package": "storablevector",
          "signature": "ChunkSize-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e *Data.StorableVector.Lazy\u003e unfoldrResult (ChunkSize 5) (\\c -\u003e if c\u003e'z' then Left (Char.ord c) else Right (c, succ c)) 'a'\n (VectorLazy.fromChunks [Vector.pack \"abcde\",Vector.pack \"fghij\",Vector.pack \"klmno\",Vector.pack \"pqrst\",Vector.pack \"uvwxy\",Vector.pack \"z\"],123)\n\u003c/pre\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "unfoldrResult",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e Either c (b, a)) -\u003e a -\u003e (Vector b, c)",
          "source": "src/Data-StorableVector-Lazy.html#unfoldrResult",
          "type": "function"
        },
        "index": {
          "description": "Example Data.StorableVector.Lazy unfoldrResult ChunkSize if then Left Char.ord else Right succ VectorLazy.fromChunks Vector.pack abcde Vector.pack fghij Vector.pack klmno Vector.pack pqrst Vector.pack uvwxy Vector.pack",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "unfoldrResult",
          "normalized": "ChunkSize-\u003e(a-\u003eEither b(c,a))-\u003ea-\u003e(Vector c,b)",
          "package": "storablevector",
          "partial": "Result",
          "signature": "ChunkSize-\u003e(a-\u003eEither c(b,a))-\u003ea-\u003e(Vector b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:unfoldrResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "writeFile",
          "package": "storablevector",
          "signature": "FilePath -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-StorableVector-Lazy.html#writeFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "writeFile",
          "normalized": "FilePath-\u003eVector a-\u003eIO()",
          "package": "storablevector",
          "partial": "File",
          "signature": "FilePath-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreserves chunk pattern of the last argument.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithLastPattern",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Data-StorableVector-Lazy.html#zipWithLastPattern",
          "type": "function"
        },
        "index": {
          "description": "Preserves chunk pattern of the last argument",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithLastPattern",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "storablevector",
          "partial": "With Last Pattern",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWithLastPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreserves chunk pattern of the last argument.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithLastPattern3",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "source": "src/Data-StorableVector-Lazy.html#zipWithLastPattern3",
          "type": "function"
        },
        "index": {
          "description": "Preserves chunk pattern of the last argument",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithLastPattern3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "storablevector",
          "partial": "With Last Pattern",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWithLastPattern3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreserves chunk pattern of the last argument.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithLastPattern4",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e",
          "source": "src/Data-StorableVector-Lazy.html#zipWithLastPattern4",
          "type": "function"
        },
        "index": {
          "description": "Preserves chunk pattern of the last argument",
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithLastPattern4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "package": "storablevector",
          "partial": "With Last Pattern",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWithLastPattern4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithSize",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Data-StorableVector-Lazy.html#zipWithSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithSize",
          "normalized": "ChunkSize-\u003e(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "storablevector",
          "partial": "With Size",
          "signature": "ChunkSize-\u003e(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWithSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithSize3",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "source": "src/Data-StorableVector-Lazy.html#zipWithSize3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithSize3",
          "normalized": "ChunkSize-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "storablevector",
          "partial": "With Size",
          "signature": "ChunkSize-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWithSize3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithSize4",
          "package": "storablevector",
          "signature": "ChunkSize -\u003e (a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e",
          "source": "src/Data-StorableVector-Lazy.html#zipWithSize4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Lazy",
          "module": "Data.StorableVector.Lazy",
          "name": "zipWithSize4",
          "normalized": "ChunkSize-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "package": "storablevector",
          "partial": "With Size",
          "signature": "ChunkSize-\u003e(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Lazy.html#v:zipWithSize4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn principle you can traverse through a storable vector\nusing repeated calls to \u003ccode\u003eviewL\u003c/code\u003e or using \u003ccode\u003eindex\u003c/code\u003e.\nHowever this needs a bit of pointer arrangement and allocation.\nThis data structure should make loops optimally fast.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Pointer.html",
          "type": "module"
        },
        "index": {
          "description": "In principle you can traverse through storable vector using repeated calls to viewL or using index However this needs bit of pointer arrangement and allocation This data structure should make loops optimally fast",
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "partial": "Pointer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe might have name the data type iterator.\n\u003c/p\u003e",
          "module": "Data.StorableVector.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Pointer.html#Pointer",
          "type": "data"
        },
        "index": {
          "description": "We might have name the data type iterator",
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "partial": "Pointer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#t:Pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "signature": "Pointer",
          "source": "src/Data-StorableVector-Pointer.html#Pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "Pointer",
          "package": "storablevector",
          "partial": "Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:Pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "cons",
          "package": "storablevector",
          "signature": "Vector a -\u003e Pointer a",
          "source": "src/Data-StorableVector-Pointer.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "cons",
          "normalized": "Vector a-\u003ePointer a",
          "package": "storablevector",
          "signature": "Vector a-\u003ePointer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "fptr",
          "package": "storablevector",
          "signature": "(ForeignPtr a)",
          "source": "src/Data-StorableVector-Pointer.html#Pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "fptr",
          "package": "storablevector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:fptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "left",
          "package": "storablevector",
          "signature": "Int",
          "source": "src/Data-StorableVector-Pointer.html#Pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "left",
          "package": "storablevector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "ptr",
          "package": "storablevector",
          "signature": "(Ptr a)",
          "source": "src/Data-StorableVector-Pointer.html#Pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "ptr",
          "package": "storablevector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "switchL",
          "package": "storablevector",
          "signature": "b -\u003e (a -\u003e Pointer a -\u003e b) -\u003e Pointer a -\u003e b",
          "source": "src/Data-StorableVector-Pointer.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "switchL",
          "normalized": "a-\u003e(b-\u003ePointer b-\u003ea)-\u003ePointer b-\u003ea",
          "package": "storablevector",
          "signature": "b-\u003e(a-\u003ePointer a-\u003eb)-\u003ePointer a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.Pointer",
          "name": "viewL",
          "package": "storablevector",
          "signature": "Pointer a -\u003e Maybe (a, Pointer a)",
          "source": "src/Data-StorableVector-Pointer.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector Pointer",
          "module": "Data.StorableVector.Pointer",
          "name": "viewL",
          "normalized": "Pointer a-\u003eMaybe(a,Pointer a)",
          "package": "storablevector",
          "signature": "Pointer a-\u003eMaybe(a,Pointer a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-Pointer.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with : GHC 6.4.1\n\u003c/p\u003e\u003cp\u003eInterface for access to a mutable StorableVector.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "Lazy",
          "package": "storablevector",
          "source": "src/Data-StorableVector-ST-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC Interface for access to mutable StorableVector",
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "Lazy",
          "package": "storablevector",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "Vector",
          "package": "storablevector",
          "source": "src/Data-StorableVector-ST-Private.html#Vector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "Vector",
          "package": "storablevector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "freeze",
          "package": "storablevector",
          "signature": "Vector s e -\u003e ST s (Vector e)",
          "source": "src/Data-StorableVector-ST-Lazy.html#freeze",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "freeze",
          "normalized": "Vector a b-\u003eST a(Vector b)",
          "package": "storablevector",
          "signature": "Vector s e-\u003eST s(Vector e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.StorableVector.ST.Lazy\",\"Data.StorableVector.ST.Strict\"]",
          "name": "length",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int",
          "source": "src/Data-StorableVector-ST-Strict.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:length\",\"http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:length\"]"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "length",
          "normalized": "Vector a b-\u003eInt",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e :module + Data.STRef\n VS.unpack $ Control.Monad.ST.runST (do ref \u003c- newSTRef 'a'; mapST (\\ _n -\u003e do c \u003c- readSTRef ref; modifySTRef ref succ; return c) (VS.pack [1,2,3,4::Data.Int.Int16]))\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "mapST",
          "package": "storablevector",
          "signature": "(a -\u003e ST s b) -\u003e Vector a -\u003e ST s (Vector b)",
          "source": "src/Data-StorableVector-ST-Lazy.html#mapST",
          "type": "function"
        },
        "index": {
          "description": "module Data.STRef VS.unpack Control.Monad.ST.runST do ref newSTRef mapST do readSTRef ref modifySTRef ref succ return VS.pack Data.Int.Int16",
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "mapST",
          "normalized": "(a-\u003eST b c)-\u003eVector a-\u003eST b(Vector c)",
          "package": "storablevector",
          "partial": "ST",
          "signature": "(a-\u003eST s b)-\u003eVector a-\u003eST s(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:mapST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e *Data.StorableVector.ST.Strict Data.STRef\u003e VL.unpack $ Control.Monad.ST.runST (do ref \u003c- newSTRef 'a'; mapSTLazy (\\ _n -\u003e do c \u003c- readSTRef ref; modifySTRef ref succ; return c) (VL.pack VL.defaultChunkSize [1,2,3,4::Data.Int.Int16]))\n \"abcd\"\n\u003c/pre\u003e\u003cp\u003eThe following should not work on infinite streams,\nsince we are in \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e with strict \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\nBut it works. Why?\n\u003c/p\u003e\u003cpre\u003e *Data.StorableVector.ST.Strict Data.STRef.Lazy\u003e VL.unpack $ Control.Monad.ST.Lazy.runST (do ref \u003c- newSTRef 'a'; mapSTLazy (\\ _n -\u003e do c \u003c- readSTRef ref; modifySTRef ref succ; return c) (VL.pack VL.defaultChunkSize [0::Data.Int.Int16 ..]))\n \"Interrupted.\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "mapSTLazy",
          "package": "storablevector",
          "signature": "(a -\u003e ST s b) -\u003e Vector a -\u003e ST s (Vector b)",
          "source": "src/Data-StorableVector-ST-Lazy.html#mapSTLazy",
          "type": "function"
        },
        "index": {
          "description": "Data.StorableVector.ST.Strict Data.STRef VL.unpack Control.Monad.ST.runST do ref newSTRef mapSTLazy do readSTRef ref modifySTRef ref succ return VL.pack VL.defaultChunkSize Data.Int.Int16 abcd The following should not work on infinite streams since we are in ST with strict But it works Why Data.StorableVector.ST.Strict Data.STRef.Lazy VL.unpack Control.Monad.ST.Lazy.runST do ref newSTRef mapSTLazy do readSTRef ref modifySTRef ref succ return VL.pack VL.defaultChunkSize Data.Int.Int16 Interrupted",
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "mapSTLazy",
          "normalized": "(a-\u003eST b c)-\u003eVector a-\u003eST b(Vector c)",
          "package": "storablevector",
          "partial": "STLazy",
          "signature": "(a-\u003eST s b)-\u003eVector a-\u003eST s(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:mapSTLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "modify",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e (e -\u003e e) -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Lazy.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "modify",
          "normalized": "Vector a b-\u003eInt-\u003e(b-\u003eb)-\u003eST a()",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt-\u003e(e-\u003ee)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "new",
          "package": "storablevector",
          "signature": "Int -\u003e e -\u003e ST s (Vector s e)",
          "source": "src/Data-StorableVector-ST-Lazy.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "new",
          "normalized": "Int-\u003ea-\u003eST b(Vector b a)",
          "package": "storablevector",
          "signature": "Int-\u003ee-\u003eST s(Vector s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "new_",
          "package": "storablevector",
          "signature": "Int -\u003e ST s (Vector s e)",
          "source": "src/Data-StorableVector-ST-Lazy.html#new_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "new_",
          "normalized": "Int-\u003eST a(Vector a b)",
          "package": "storablevector",
          "signature": "Int-\u003eST s(Vector s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:new_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e Control.Monad.ST.runST (do arr \u003c- new_ 10; Monad.zipWithM_ (write arr) [9,8..0] ['a'..]; read arr 3)\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "read",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e ST s e",
          "source": "src/Data-StorableVector-ST-Lazy.html#read",
          "type": "function"
        },
        "index": {
          "description": "Control.Monad.ST.runST do arr new Monad.zipWithM write arr read arr",
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "read",
          "normalized": "Vector a b-\u003eInt-\u003eST a b",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt-\u003eST s e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "runSTVector",
          "package": "storablevector",
          "signature": "(forall s.  ST s (Vector s e)) -\u003e Vector e",
          "source": "src/Data-StorableVector-ST-Lazy.html#runSTVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "runSTVector",
          "normalized": "(a b ST c(Vector c d))-\u003eVector d",
          "package": "storablevector",
          "partial": "STVector",
          "signature": "(forall s. ST s(Vector s e))-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:runSTVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "thaw",
          "package": "storablevector",
          "signature": "Vector e -\u003e ST s (Vector s e)",
          "source": "src/Data-StorableVector-ST-Lazy.html#thaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "thaw",
          "normalized": "Vector a-\u003eST b(Vector b a)",
          "package": "storablevector",
          "signature": "Vector e-\u003eST s(Vector s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeFreeze",
          "package": "storablevector",
          "signature": "Vector s e -\u003e ST s (Vector e)",
          "source": "src/Data-StorableVector-ST-Lazy.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeFreeze",
          "normalized": "Vector a b-\u003eST a(Vector b)",
          "package": "storablevector",
          "partial": "Freeze",
          "signature": "Vector s e-\u003eST s(Vector e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeModify",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e (e -\u003e e) -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Lazy.html#unsafeModify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeModify",
          "normalized": "Vector a b-\u003eInt-\u003e(b-\u003eb)-\u003eST a()",
          "package": "storablevector",
          "partial": "Modify",
          "signature": "Vector s e-\u003eInt-\u003e(e-\u003ee)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:unsafeModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeRead",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e ST s e",
          "source": "src/Data-StorableVector-ST-Lazy.html#unsafeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeRead",
          "normalized": "Vector a b-\u003eInt-\u003eST a b",
          "package": "storablevector",
          "partial": "Read",
          "signature": "Vector s e-\u003eInt-\u003eST s e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:unsafeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeWrite",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e e -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Lazy.html#unsafeWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "unsafeWrite",
          "normalized": "Vector a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "storablevector",
          "partial": "Write",
          "signature": "Vector s e-\u003eInt-\u003ee-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:unsafeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e VS.unpack $ runSTVector (do arr \u003c- new_ 10; Monad.zipWithM_ (write arr) [9,8..0] ['a'..]; return arr)\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "write",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e e -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Lazy.html#write",
          "type": "function"
        },
        "index": {
          "description": "VS.unpack runSTVector do arr new Monad.zipWithM write arr return arr",
          "hierarchy": "Data StorableVector ST Lazy",
          "module": "Data.StorableVector.ST.Lazy",
          "name": "write",
          "normalized": "Vector a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt-\u003ee-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Lazy.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested with : GHC 6.4.1\n\u003c/p\u003e\u003cp\u003eInterface for access to a mutable StorableVector.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "Strict",
          "package": "storablevector",
          "source": "src/Data-StorableVector-ST-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Tested with GHC Interface for access to mutable StorableVector",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "Strict",
          "package": "storablevector",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "Vector",
          "package": "storablevector",
          "source": "src/Data-StorableVector-ST-Private.html#Vector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "Vector",
          "package": "storablevector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "freeze",
          "package": "storablevector",
          "signature": "Vector s e -\u003e ST s (Vector e)",
          "source": "src/Data-StorableVector-ST-Strict.html#freeze",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "freeze",
          "normalized": "Vector a b-\u003eST a(Vector b)",
          "package": "storablevector",
          "signature": "Vector s e-\u003eST s(Vector e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e :module + Data.STRef\n VS.unpack $ Control.Monad.ST.runST (do ref \u003c- newSTRef 'a'; mapST (\\ _n -\u003e do c \u003c- readSTRef ref; modifySTRef ref succ; return c) (VS.pack [1,2,3,4::Data.Int.Int16]))\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "mapST",
          "package": "storablevector",
          "signature": "(a -\u003e ST s b) -\u003e Vector a -\u003e ST s (Vector b)",
          "source": "src/Data-StorableVector-ST-Strict.html#mapST",
          "type": "function"
        },
        "index": {
          "description": "module Data.STRef VS.unpack Control.Monad.ST.runST do ref newSTRef mapST do readSTRef ref modifySTRef ref succ return VS.pack Data.Int.Int16",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "mapST",
          "normalized": "(a-\u003eST b c)-\u003eVector a-\u003eST b(Vector c)",
          "package": "storablevector",
          "partial": "ST",
          "signature": "(a-\u003eST s b)-\u003eVector a-\u003eST s(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:mapST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e *Data.StorableVector.ST.Strict Data.STRef\u003e VL.unpack $ Control.Monad.ST.runST (do ref \u003c- newSTRef 'a'; mapSTLazy (\\ _n -\u003e do c \u003c- readSTRef ref; modifySTRef ref succ; return c) (VL.pack VL.defaultChunkSize [1,2,3,4::Data.Int.Int16]))\n \"abcd\"\n\u003c/pre\u003e\u003cp\u003eThe following should not work on infinite streams,\nsince we are in \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e with strict \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e.\nBut it works. Why?\n\u003c/p\u003e\u003cpre\u003e *Data.StorableVector.ST.Strict Data.STRef\u003e VL.unpack $ Control.Monad.ST.runST (do ref \u003c- newSTRef 'a'; mapSTLazy (\\ _n -\u003e do c \u003c- readSTRef ref; modifySTRef ref succ; return c) (VL.pack VL.defaultChunkSize [0::Data.Int.Int16 ..]))\n \"Interrupted.\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "mapSTLazy",
          "package": "storablevector",
          "signature": "(a -\u003e ST s b) -\u003e Vector a -\u003e ST s (Vector b)",
          "source": "src/Data-StorableVector-ST-Strict.html#mapSTLazy",
          "type": "function"
        },
        "index": {
          "description": "Data.StorableVector.ST.Strict Data.STRef VL.unpack Control.Monad.ST.runST do ref newSTRef mapSTLazy do readSTRef ref modifySTRef ref succ return VL.pack VL.defaultChunkSize Data.Int.Int16 abcd The following should not work on infinite streams since we are in ST with strict But it works Why Data.StorableVector.ST.Strict Data.STRef VL.unpack Control.Monad.ST.runST do ref newSTRef mapSTLazy do readSTRef ref modifySTRef ref succ return VL.pack VL.defaultChunkSize Data.Int.Int16 Interrupted",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "mapSTLazy",
          "normalized": "(a-\u003eST b c)-\u003eVector a-\u003eST b(Vector c)",
          "package": "storablevector",
          "partial": "STLazy",
          "signature": "(a-\u003eST s b)-\u003eVector a-\u003eST s(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:mapSTLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emaybeWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn future \u003ccode\u003e\u003ca\u003emaybeModify\u003c/a\u003e\u003c/code\u003e will replace \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "maybeModify",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e (e -\u003e e) -\u003e ST s Bool",
          "source": "src/Data-StorableVector-ST-Strict.html#maybeModify",
          "type": "function"
        },
        "index": {
          "description": "Similar to maybeWrite In future maybeModify will replace modify",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "maybeModify",
          "normalized": "Vector a b-\u003eInt-\u003e(b-\u003eb)-\u003eST a Bool",
          "package": "storablevector",
          "partial": "Modify",
          "signature": "Vector s e-\u003eInt-\u003e(e-\u003ee)-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:maybeModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eJust e\u003c/code\u003e, when the element \u003ccode\u003ee\u003c/code\u003e could be read\nand \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the index was out of range.\nThis way you can avoid duplicate index checks\nthat may be needed when using \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e Control.Monad.ST.runST (do arr \u003c- new_ 10; Monad.zipWithM_ (write arr) [9,8..0] ['a'..]; read arr 3)\n\u003c/pre\u003e\u003cp\u003eIn future \u003ccode\u003e\u003ca\u003emaybeRead\u003c/a\u003e\u003c/code\u003e will replace \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "maybeRead",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e ST s (Maybe e)",
          "source": "src/Data-StorableVector-ST-Strict.html#maybeRead",
          "type": "function"
        },
        "index": {
          "description": "Returns Just when the element could be read and Nothing if the index was out of range This way you can avoid duplicate index checks that may be needed when using read Control.Monad.ST.runST do arr new Monad.zipWithM write arr read arr In future maybeRead will replace read",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "maybeRead",
          "normalized": "Vector a b-\u003eInt-\u003eST a(Maybe b)",
          "package": "storablevector",
          "partial": "Read",
          "signature": "Vector s e-\u003eInt-\u003eST s(Maybe e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the element could be written\nand \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the index was out of range.\n\u003c/p\u003e\u003cpre\u003e runSTVector (do arr \u003c- new_ 10; foldr (\\c go i -\u003e maybeWrite arr i c \u003e\u003e= \\cont -\u003e if cont then go (succ i) else return arr) (error \"unreachable\") ['a'..] 0)\n\u003c/pre\u003e\u003cp\u003eIn future \u003ccode\u003e\u003ca\u003emaybeWrite\u003c/a\u003e\u003c/code\u003e will replace \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "maybeWrite",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e e -\u003e ST s Bool",
          "source": "src/Data-StorableVector-ST-Strict.html#maybeWrite",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the element could be written and False if the index was out of range runSTVector do arr new foldr go maybeWrite arr cont if cont then go succ else return arr error unreachable In future maybeWrite will replace write",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "maybeWrite",
          "normalized": "Vector a b-\u003eInt-\u003eb-\u003eST a Bool",
          "package": "storablevector",
          "partial": "Write",
          "signature": "Vector s e-\u003eInt-\u003ee-\u003eST s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:maybeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e VS.unpack $ runSTVector (do arr \u003c- new 10 'a'; Monad.mapM_ (\\n -\u003e modify arr (mod n 8) succ) [0..10]; return arr)\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "modify",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e (e -\u003e e) -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Strict.html#modify",
          "type": "function"
        },
        "index": {
          "description": "VS.unpack runSTVector do arr new Monad.mapM modify arr mod succ return arr",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "modify",
          "normalized": "Vector a b-\u003eInt-\u003e(b-\u003eb)-\u003eST a()",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt-\u003e(e-\u003ee)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "new",
          "package": "storablevector",
          "signature": "Int -\u003e e -\u003e ST s (Vector s e)",
          "source": "src/Data-StorableVector-ST-Strict.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "new",
          "normalized": "Int-\u003ea-\u003eST b(Vector b a)",
          "package": "storablevector",
          "signature": "Int-\u003ee-\u003eST s(Vector s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "new_",
          "package": "storablevector",
          "signature": "Int -\u003e ST s (Vector s e)",
          "source": "src/Data-StorableVector-ST-Strict.html#new_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "new_",
          "normalized": "Int-\u003eST a(Vector a b)",
          "package": "storablevector",
          "signature": "Int-\u003eST s(Vector s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:new_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e Control.Monad.ST.runST (do arr \u003c- new_ 10; Monad.zipWithM_ (write arr) [9,8..0] ['a'..]; read arr 3)\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "read",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e ST s e",
          "source": "src/Data-StorableVector-ST-Strict.html#read",
          "type": "function"
        },
        "index": {
          "description": "Control.Monad.ST.runST do arr new Monad.zipWithM write arr read arr",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "read",
          "normalized": "Vector a b-\u003eInt-\u003eST a b",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt-\u003eST s e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "runSTVector",
          "package": "storablevector",
          "signature": "(forall s.  ST s (Vector s e)) -\u003e Vector e",
          "source": "src/Data-StorableVector-ST-Strict.html#runSTVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "runSTVector",
          "normalized": "(a b ST c(Vector c d))-\u003eVector d",
          "package": "storablevector",
          "partial": "STVector",
          "signature": "(forall s. ST s(Vector s e))-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:runSTVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "thaw",
          "package": "storablevector",
          "signature": "Vector e -\u003e ST s (Vector s e)",
          "source": "src/Data-StorableVector-ST-Strict.html#thaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "thaw",
          "normalized": "Vector a-\u003eST b(Vector b a)",
          "package": "storablevector",
          "signature": "Vector e-\u003eST s(Vector s e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is like \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e but it does not copy the vector.\nYou must make sure that you never write again to the array.\nIt is best to use \u003ccode\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/code\u003e only at the end of a block,\nthat is run by \u003ccode\u003e\u003ca\u003erunST\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeFreeze",
          "package": "storablevector",
          "signature": "Vector s e -\u003e ST s (Vector e)",
          "source": "src/Data-StorableVector-ST-Strict.html#unsafeFreeze",
          "type": "function"
        },
        "index": {
          "description": "This is like freeze but it does not copy the vector You must make sure that you never write again to the array It is best to use unsafeFreeze only at the end of block that is run by runST",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeFreeze",
          "normalized": "Vector a b-\u003eST a(Vector b)",
          "package": "storablevector",
          "partial": "Freeze",
          "signature": "Vector s e-\u003eST s(Vector e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeModify",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e (e -\u003e e) -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Strict.html#unsafeModify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeModify",
          "normalized": "Vector a b-\u003eInt-\u003e(b-\u003eb)-\u003eST a()",
          "package": "storablevector",
          "partial": "Modify",
          "signature": "Vector s e-\u003eInt-\u003e(e-\u003ee)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:unsafeModify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeRead",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e ST s e",
          "source": "src/Data-StorableVector-ST-Strict.html#unsafeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeRead",
          "normalized": "Vector a b-\u003eInt-\u003eST a b",
          "package": "storablevector",
          "partial": "Read",
          "signature": "Vector s e-\u003eInt-\u003eST s e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:unsafeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeWrite",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e e -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Strict.html#unsafeWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "unsafeWrite",
          "normalized": "Vector a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "storablevector",
          "partial": "Write",
          "signature": "Vector s e-\u003eInt-\u003ee-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:unsafeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e VS.unpack $ runSTVector (do arr \u003c- new_ 10; Monad.zipWithM_ (write arr) [9,8..0] ['a'..]; return arr)\n\u003c/pre\u003e",
          "module": "Data.StorableVector.ST.Strict",
          "name": "write",
          "package": "storablevector",
          "signature": "Vector s e -\u003e Int -\u003e e -\u003e ST s ()",
          "source": "src/Data-StorableVector-ST-Strict.html#write",
          "type": "function"
        },
        "index": {
          "description": "VS.unpack runSTVector do arr new Monad.zipWithM write arr return arr",
          "hierarchy": "Data StorableVector ST Strict",
          "module": "Data.StorableVector.ST.Strict",
          "name": "write",
          "normalized": "Vector a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "storablevector",
          "signature": "Vector s e-\u003eInt-\u003ee-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector-ST-Strict.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of vectors using\n packed arrays, suitable for high performance use, both in terms\n of large data quantities, or high speed requirements. Vectors\n are encoded as strict arrays, held in a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e,\n and can be passed between C and Haskell with little effort.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.StorableVector as V\n\u003c/pre\u003e\u003cp\u003eOriginal GHC implementation by Bryan O'Sullivan. Rewritten to use\n UArray by Simon Marlow. Rewritten to support slices and use\n ForeignPtr by David Roundy. Polished and extended by Don Stewart.\n Generalized to any Storable value by Spencer Janssen.\n Chunky lazy stream, also with chunk pattern control,\n mutable access in ST monad, Builder monoid by Henning Thieleman.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.StorableVector",
          "name": "StorableVector",
          "package": "storablevector",
          "source": "src/Data-StorableVector.html",
          "type": "module"
        },
        "index": {
          "description": "time and space-efficient implementation of vectors using packed arrays suitable for high performance use both in terms of large data quantities or high speed requirements Vectors are encoded as strict arrays held in ForeignPtr and can be passed between and Haskell with little effort This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.StorableVector as Original GHC implementation by Bryan Sullivan Rewritten to use UArray by Simon Marlow Rewritten to support slices and use ForeignPtr by David Roundy Polished and extended by Don Stewart Generalized to any Storable value by Spencer Janssen Chunky lazy stream also with chunk pattern control mutable access in ST monad Builder monoid by Henning Thieleman",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "StorableVector",
          "package": "storablevector",
          "partial": "Storable Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a vector, supporting many efficient\n operations.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "Vector",
          "package": "storablevector",
          "source": "src/Data-StorableVector-Base.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of vector supporting many efficient operations Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "Vector",
          "package": "storablevector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines\n if all elements of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "all",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and Vector all determines if all elements of the Vector satisfy the predicate",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "any",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and Vector any determines if any element of the Vector satisfies the predicate",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two Vectors\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "append",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two Vectors",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "append",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "appendFile",
          "package": "storablevector",
          "signature": "FilePath -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-StorableVector.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append Vector to file",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "appendFile",
          "normalized": "FilePath-\u003eVector a-\u003eIO()",
          "package": "storablevector",
          "partial": "File",
          "signature": "FilePath-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "break",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ebreakEnd p == spanEnd (not.p)\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "breakEnd",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the Vector breakEnd spanEnd not.p",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "breakEnd",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "partial": "End",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "concat",
          "package": "storablevector",
          "signature": "[Vector a] -\u003e Vector a",
          "source": "src/Data-StorableVector.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "concat",
          "normalized": "[Vector a]-\u003eVector a",
          "package": "storablevector",
          "signature": "[Vector a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "concatMap",
          "package": "storablevector",
          "signature": "(a -\u003e Vector b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-StorableVector.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over Vector and concatenate the results",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "concatMap",
          "normalized": "(a-\u003eVector b)-\u003eVector a-\u003eVector b",
          "package": "storablevector",
          "partial": "Map",
          "signature": "(a-\u003eVector b)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "cons",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "cons",
          "normalized": "a-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a copy of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e with its own storage.\n   This is mainly useful to allow the rest of the data pointed\n   to by the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e to be garbage collected, for example\n   if a large string has been read in, and only a small part of it\n   is needed in the rest of the program.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "copy",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Make copy of the Vector with its own storage This is mainly useful to allow the rest of the data pointed to by the Vector to be garbage collected for example if large string has been read in and only small part of it is needed in the rest of the program",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "copy",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "count",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Int",
          "source": "src/Data-StorableVector.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the Vector count length elemIndices But more efficiently than using length on the intermediate list",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "count",
          "normalized": "a-\u003eVector a-\u003eInt",
          "package": "storablevector",
          "signature": "a-\u003eVector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e\n Returns n sieved vectors with successive starting elements.\n \u003ccode\u003edeinterleave 3 (pack ['a'..'k']) = [pack \u003ca\u003eadgj\u003c/a\u003e, pack \u003ca\u003ebehk\u003c/a\u003e, pack \u003ca\u003ecfi\u003c/a\u003e]\u003c/code\u003e\n This is the same as \u003ccode\u003e\u003ca\u003esliceHorizontal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "deinterleave",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#deinterleave",
          "type": "function"
        },
        "index": {
          "description": "Returns sieved vectors with successive starting elements deinterleave pack pack adgj pack behk pack cfi This is the same as sliceHorizontal",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "deinterleave",
          "normalized": "Int-\u003eVector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:deinterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "drop",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or empty if length xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "drop",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "dropWhile",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "elem",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the Vector membership predicate",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "elem",
          "normalized": "a-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "signature": "a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "elemIndex",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Maybe Int",
          "source": "src/Data-StorableVector.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given Vector which is equal to the query element or Nothing if there is no such element",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "elemIndex",
          "normalized": "a-\u003eVector a-\u003eMaybe Int",
          "package": "storablevector",
          "partial": "Index",
          "signature": "a-\u003eVector a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs ==\n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "elemIndexEnd",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Maybe Int",
          "source": "src/Data-StorableVector.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given Vector which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "elemIndexEnd",
          "normalized": "a-\u003eVector a-\u003eMaybe Int",
          "package": "storablevector",
          "partial": "Index End",
          "signature": "a-\u003eVector a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "elemIndices",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e [Int]",
          "source": "src/Data-StorableVector.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "elemIndices",
          "normalized": "a-\u003eVector a-\u003e[Int]",
          "package": "storablevector",
          "partial": "Indices",
          "signature": "a-\u003eVector a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "empty",
          "package": "storablevector",
          "signature": "Vector a",
          "source": "src/Data-StorableVector.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "empty",
          "package": "storablevector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e,\n returns a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e containing those elements that satisfy the\n predicate. This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "filter",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and Vector returns Vector containing those elements that satisfy the predicate This function is subject to array fusion",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p ! n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "find",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Maybe a",
          "source": "src/Data-StorableVector.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and Vector and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just Nothing",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eMaybe a",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "findIndex",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Maybe Int",
          "source": "src/Data-StorableVector.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and Vector and returns the index of the first element in the Vector satisfying the predicate",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eMaybe Int",
          "package": "storablevector",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efindIndexOrEnd\u003c/a\u003e\u003c/code\u003e is a variant of findIndex, that returns the length\n of the string if no element is found, rather than Nothing.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "findIndexOrEnd",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Int",
          "source": "src/Data-StorableVector.html#findIndexOrEnd",
          "type": "function"
        },
        "index": {
          "description": "findIndexOrEnd is variant of findIndex that returns the length of the string if no element is found rather than Nothing",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "findIndexOrEnd",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eInt",
          "package": "storablevector",
          "partial": "Index Or End",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:findIndexOrEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "findIndices",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e [Int]",
          "source": "src/Data-StorableVector.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e[Int]",
          "package": "storablevector",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a Vector, reduces the\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using the binary operator, from left to right.\n This function is subject to array fusion.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "foldl",
          "package": "storablevector",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and Vector reduces the Vector using the binary operator from left to right This function is subject to array fusion",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "foldl'",
          "package": "storablevector",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es.\n This function is subject to array fusion.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "foldl1",
          "package": "storablevector",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty Vector This function is subject to array fusion An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "storablevector",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "foldl1'",
          "package": "storablevector",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "storablevector",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using the binary operator, from right to left.\n However, it is not the same as \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e applied to the reversed vector.\n Actually \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e starts processing with the first element,\n and thus can be used for efficiently building a singly linked list\n by \u003ccode\u003efoldr (:) [] vec\u003c/code\u003e.\n Unfortunately \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e is quite slow for low-level loops,\n since GHC (up to 6.12.1) cannot detect the loop.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "foldr",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and Vector reduces the Vector using the binary operator from right to left However it is not the same as foldl applied to the reversed vector Actually foldr starts processing with the first element and thus can be used for efficiently building singly linked list by foldr vec Unfortunately foldr is quite slow for low-level loops since GHC up to cannot detect the loop",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "package": "storablevector",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "foldr1",
          "package": "storablevector",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty Vector An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "storablevector",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and returns a list of\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. It is about 40% faster than\n \u003cem\u003egroupBy (==)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "group",
          "package": "storablevector",
          "signature": "Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes Vector and returns list of Vector such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test It is about faster than groupBy",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "group",
          "normalized": "Vector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "Vector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "groupBy",
          "package": "storablevector",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eVector a-\u003e[Vector a]",
          "package": "storablevector",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eVector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  This\n is far more efficient than reading the characters into a list\n and then using \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "hGet",
          "package": "storablevector",
          "signature": "Handle -\u003e Int -\u003e IO (Vector a)",
          "source": "src/Data-StorableVector.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read Vector directly from the specified Handle This is far more efficient than reading the characters into list and then using pack",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO(Vector a)",
          "package": "storablevector",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "hPut",
          "package": "storablevector",
          "signature": "Handle -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-StorableVector.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Outputs Vector to the specified Handle",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "hPut",
          "normalized": "Handle-\u003eVector a-\u003eIO()",
          "package": "storablevector",
          "partial": "Put",
          "signature": "Handle-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, which must be non-empty.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "head",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of Vector which must be non-empty An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "head",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "index",
          "package": "storablevector",
          "signature": "Vector a -\u003e Int -\u003e a",
          "source": "src/Data-StorableVector.html#index",
          "type": "function"
        },
        "index": {
          "description": "Vector index subscript operator starting from",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "index",
          "normalized": "Vector a-\u003eInt-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "init",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of Vector except the last one An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "init",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "inits",
          "package": "storablevector",
          "signature": "Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#inits",
          "type": "function"
        },
        "index": {
          "description": "Return all initial segments of the given Vector shortest first",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "inits",
          "normalized": "Vector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "Vector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e\n Almost the inverse of deinterleave.\n Restriction is that all input vector must have equal length.\n \u003ccode\u003einterleave [pack \u003ca\u003eadgj\u003c/a\u003e, pack \u003ca\u003ebehk\u003c/a\u003e, pack \u003ca\u003ecfil\u003c/a\u003e] = pack ['a'..'l']\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "interleave",
          "package": "storablevector",
          "signature": "[Vector a] -\u003e Vector a",
          "source": "src/Data-StorableVector.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Almost the inverse of deinterleave Restriction is that all input vector must have equal length interleave pack adgj pack behk pack cfil pack",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "interleave",
          "normalized": "[Vector a]-\u003eVector a",
          "package": "storablevector",
          "signature": "[Vector a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a element and a\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and `intersperses' that element between the elements of\n the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "intersperse",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes element and Vector and intersperses that element between the elements of the Vector It is analogous to the intersperse function on Lists",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "intersperse",
          "normalized": "a-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "isPrefixOf",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two Vector and returns True iff the first is prefix of the second",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "isPrefixOf",
          "normalized": "Vector a-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "partial": "Prefix Of",
          "signature": "Vector a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "isSuffixOf",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two Vector and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "isSuffixOf",
          "normalized": "Vector a-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "partial": "Suffix Of",
          "signature": "Vector a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eiterateN\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en f x\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e\n where the elements of \u003ccode\u003ex\u003c/code\u003e are generated by repeated application of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "iterateN",
          "package": "storablevector",
          "signature": "Int -\u003e (a -\u003e a) -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#iterateN",
          "type": "function"
        },
        "index": {
          "description": "iterateN is Vector of length where the elements of are generated by repeated application of",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "iterateN",
          "normalized": "Int-\u003e(a-\u003ea)-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003e(a-\u003ea)-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:iterateN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "join",
          "package": "storablevector",
          "signature": "Vector a -\u003e [Vector a] -\u003e Vector a",
          "source": "src/Data-StorableVector.html#join",
          "type": "function"
        },
        "index": {
          "description": "The join function takes Vector and list of Vector and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "join",
          "normalized": "Vector a-\u003e[Vector a]-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003e[Vector a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, which must be finite and non-empty.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "last",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of Vector which must be finite and non-empty An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "last",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "length",
          "package": "storablevector",
          "signature": "Vector a -\u003e Int",
          "source": "src/Data-StorableVector.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of Vector as an Int",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "length",
          "normalized": "Vector a-\u003eInt",
          "package": "storablevector",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "map",
          "package": "storablevector",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-StorableVector.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the Vector obtained by applying to each element of xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "storablevector",
          "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "mapAccumL",
          "package": "storablevector",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Vector a -\u003e (acc, Vector b)",
          "source": "src/Data-StorableVector.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of Vector passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "mapAccumL",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eVector b-\u003e(a,Vector c)",
          "package": "storablevector",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eVector a-\u003e(acc,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "mapAccumR",
          "package": "storablevector",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Vector a -\u003e (acc, Vector b)",
          "source": "src/Data-StorableVector.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of Vector passing an accumulating parameter from right to left and returning final value of this accumulator together with the new Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eVector b-\u003e(a,Vector c)",
          "package": "storablevector",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eVector a-\u003e(acc,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e map functions, provided with the index at each position\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "mapIndexed",
          "package": "storablevector",
          "signature": "(Int -\u003e a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-StorableVector.html#mapIndexed",
          "type": "function"
        },
        "index": {
          "description": "map functions provided with the index at each position",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "mapIndexed",
          "normalized": "(Int-\u003ea-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "storablevector",
          "partial": "Indexed",
          "signature": "(Int-\u003ea-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:mapIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n This function will fuse.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "maximum",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from Vector This function will fuse An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "maximum",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n This function will fuse.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "minimum",
          "package": "storablevector",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-StorableVector.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from Vector This function will fuse An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "minimum",
          "normalized": "Vector a-\u003ea",
          "package": "storablevector",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is like \u003ccode\u003emconcat . map f\u003c/code\u003e,\n but in many cases the result of \u003ccode\u003ef\u003c/code\u003e will not be storable.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "monoidConcatMap",
          "package": "storablevector",
          "signature": "(a -\u003e m) -\u003e Vector a -\u003e m",
          "source": "src/Data-StorableVector.html#monoidConcatMap",
          "type": "function"
        },
        "index": {
          "description": "This is like mconcat map but in many cases the result of will not be storable",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "monoidConcatMap",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eb",
          "package": "storablevector",
          "partial": "Concat Map",
          "signature": "(a-\u003em)-\u003eVector a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:monoidConcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "notElem",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "notElem",
          "normalized": "a-\u003eVector a-\u003eBool",
          "package": "storablevector",
          "partial": "Elem",
          "signature": "a-\u003eVector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "null",
          "package": "storablevector",
          "signature": "Vector a -\u003e Bool",
          "source": "src/Data-StorableVector.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether Vector is empty",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "null",
          "normalized": "Vector a-\u003eBool",
          "package": "storablevector",
          "signature": "Vector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a '[a]' into a 'Vector a'.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "pack",
          "package": "storablevector",
          "signature": "[a] -\u003e Vector a",
          "source": "src/Data-StorableVector.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert into Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "pack",
          "normalized": "[a]-\u003eVector a",
          "package": "storablevector",
          "signature": "[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert first \u003ccode\u003en\u003c/code\u003e elements of a '[a]' into a 'Vector a'.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "packN",
          "package": "storablevector",
          "signature": "Int -\u003e [a] -\u003e (Vector a, [a])",
          "source": "src/Data-StorableVector.html#packN",
          "type": "function"
        },
        "index": {
          "description": "Convert first elements of into Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "packN",
          "normalized": "Int-\u003e[a]-\u003e(Vector a,[a])",
          "package": "storablevector",
          "signature": "Int-\u003e[a]-\u003e(Vector a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:packN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a list into a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using a conversion function\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "packWith",
          "package": "storablevector",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e Vector b",
          "source": "src/Data-StorableVector.html#packWith",
          "type": "function"
        },
        "index": {
          "description": "Convert list into Vector using conversion function",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "packWith",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eVector b",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:packWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.  This is far more\n efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.  It also may be more efficient than opening the file and\n reading it using hGet. Files are read using 'binary mode' on Windows.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "readFile",
          "package": "storablevector",
          "signature": "FilePath -\u003e IO (Vector a)",
          "source": "src/Data-StorableVector.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into Vector This is far more efficient than reading the characters into String and then using pack It also may be more efficient than opening the file and reading it using hGet Files are read using binary mode on Windows",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO(Vector a)",
          "package": "storablevector",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "replicate",
          "package": "storablevector",
          "signature": "Int -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is Vector of length with the value of every element",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e efficiently returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "reverse",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "reverse xs efficiently returns the elements of xs in reverse order",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "reverse",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.\n This function constructs a vector by evaluating a function\n that depends on the element index.\n It is a special case of \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and can in principle be parallelized.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    sample 26 (\\x -\u003e chr(ord 'a'+x))\n == pack \"abcdefghijklmnopqrstuvwxyz\"\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "sample",
          "package": "storablevector",
          "signature": "Int -\u003e (Int -\u003e a) -\u003e Vector a",
          "source": "src/Data-StorableVector.html#sample",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result This function constructs vector by evaluating function that depends on the element index It is special case of unfoldrN and can in principle be parallelized Examples sample chr ord pack abcdefghijklmnopqrstuvwxyz",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "sample",
          "normalized": "Int-\u003e(Int-\u003ea)-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003e(Int-\u003ea)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "scanl",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e Vector a",
          "source": "src/Data-StorableVector.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003eVector a",
          "package": "storablevector",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "scanl1",
          "package": "storablevector",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "scanr",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-StorableVector.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eVector b",
          "package": "storablevector",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "scanr1",
          "package": "storablevector",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(l\u003c/em\u003en)/ \u003ccode\u003e\u003ca\u003esieve\u003c/a\u003e\u003c/code\u003e selects every \u003ccode\u003en\u003c/code\u003eth element.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "sieve",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#sieve",
          "type": "function"
        },
        "index": {
          "description": "sieve selects every th element",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "sieve",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:sieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e containing a single element\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "singleton",
          "package": "storablevector",
          "signature": "a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct Vector containing single element",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "singleton",
          "normalized": "a-\u003eVector a",
          "package": "storablevector",
          "signature": "a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append an element to the end of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "snoc",
          "package": "storablevector",
          "signature": "Vector a -\u003e a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append an element to the end of Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "snoc",
          "normalized": "Vector a-\u003ea-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "span",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the Vector into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n We have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) ps\n    ==\n let (x,y) = span (not.isSpace) (reverse ps) in (reverse y, reverse x)\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "spanEnd",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the Vector We have spanEnd not.isSpace and spanEnd not isSpace ps let span not.isSpace reverse ps in reverse reverse",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "spanEnd",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "partial": "End",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e into pieces separated by the\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e join [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "split",
          "package": "storablevector",
          "signature": "a -\u003e Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break Vector into pieces separated by the argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and join split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new Vector that are slices of the original",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "split",
          "normalized": "a-\u003eVector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "a-\u003eVector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "splitAt",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-StorableVector.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "splitAt",
          "normalized": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "storablevector",
          "partial": "At",
          "signature": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "splitWith",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits Vector into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "splitWith",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e[Vector a]",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector",
          "name": "switchL",
          "package": "storablevector",
          "signature": "b -\u003e (a -\u003e Vector a -\u003e b) -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "switchL",
          "normalized": "a-\u003e(b-\u003eVector b-\u003ea)-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "b-\u003e(a-\u003eVector a-\u003eb)-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector",
          "name": "switchR",
          "package": "storablevector",
          "signature": "b -\u003e (Vector a -\u003e a -\u003e b) -\u003e Vector a -\u003e b",
          "source": "src/Data-StorableVector.html#switchR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "switchR",
          "normalized": "a-\u003e(Vector b-\u003eb-\u003ea)-\u003eVector b-\u003ea",
          "package": "storablevector",
          "signature": "b-\u003e(Vector a-\u003ea-\u003eb)-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:switchR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, which must be non-empty.\n An exception will be thrown in the case of an empty \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "tail",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of Vector which must be non-empty An exception will be thrown in the case of an empty Vector",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "tail",
          "normalized": "Vector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "tails",
          "package": "storablevector",
          "signature": "Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#tails",
          "type": "function"
        },
        "index": {
          "description": "Return all final segments of the given Vector longest first",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "tails",
          "normalized": "Vector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "Vector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "take",
          "package": "storablevector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to Vector xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "take",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "takeWhile",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-StorableVector.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and Vector xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "storablevector",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esplitWith\u003c/a\u003e\u003c/code\u003e, except that sequences of adjacent separators are\n treated as a single separator. eg.\n\u003c/p\u003e\u003cpre\u003e tokens (=='a') \"aabbaca\" == [\"bb\",\"c\"]\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "tokens",
          "package": "storablevector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "Like splitWith except that sequences of adjacent separators are treated as single separator eg tokens aabbaca bb",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "tokens",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "transpose",
          "package": "storablevector",
          "signature": "[Vector a] -\u003e [Vector a]",
          "source": "src/Data-StorableVector.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its Vector argument",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "transpose",
          "normalized": "[Vector a]-\u003e[Vector a]",
          "package": "storablevector",
          "signature": "[Vector a]-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e from a seed value.  The function takes the element and\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the 'Vector or returns\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next element in the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "unfoldr",
          "package": "storablevector",
          "signature": "(a -\u003e Maybe (b, a)) -\u003e a -\u003e Vector b",
          "source": "src/Data-StorableVector.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds Vector from seed value The function takes the element and returns Nothing if it is done producing the Vector or returns Just in which case is the next element in the Vector and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eVector b",
          "package": "storablevector",
          "signature": "(a-\u003eMaybe(b,a))-\u003ea-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fst (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.StorableVector",
          "name": "unfoldrN",
          "package": "storablevector",
          "signature": "Int -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e (Vector b, Maybe a)",
          "source": "src/Data-StorableVector.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds Vector from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr fst unfoldrN take unfoldr",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003e(Vector b,Maybe a)",
          "package": "storablevector",
          "signature": "Int-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003e(Vector b,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e this function builds a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e\n from a seed value with limited size.\n Additionally it returns a value, that depends on the state,\n but is not necessarily the state itself.\n If end of vector and end of the generator coincide,\n then the result is as if only the end of vector is reached.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e unfoldrResultN 30 Char.ord (\\c -\u003e if c\u003e'z' then Left 1000 else Right (c, succ c)) 'a'\n\u003c/pre\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldrResultN\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e unfoldrN n f s ==\n    unfoldrResultN n Just\n       (maybe (Left Nothing) Right . f) s\n\u003c/pre\u003e\u003cp\u003eIt is not possible to express \u003ccode\u003e\u003ca\u003eunfoldrResultN\u003c/a\u003e\u003c/code\u003e in terms of \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "unfoldrResultN",
          "package": "storablevector",
          "signature": "Int -\u003e (a -\u003e c) -\u003e (a -\u003e Either c (b, a)) -\u003e a -\u003e (Vector b, c)",
          "source": "src/Data-StorableVector.html#unfoldrResultN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldrN this function builds Vector from seed value with limited size Additionally it returns value that depends on the state but is not necessarily the state itself If end of vector and end of the generator coincide then the result is as if only the end of vector is reached Example unfoldrResultN Char.ord if then Left else Right succ The following equation relates unfoldrN and unfoldrResultN unfoldrN unfoldrResultN Just maybe Left Nothing Right It is not possible to express unfoldrResultN in terms of unfoldrN",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "unfoldrResultN",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e(a-\u003eEither b(c,a))-\u003ea-\u003e(Vector c,b)",
          "package": "storablevector",
          "partial": "Result",
          "signature": "Int-\u003e(a-\u003ec)-\u003e(a-\u003eEither c(b,a))-\u003ea-\u003e(Vector b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:unfoldrResultN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a 'Vector a' to a '[a]'.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "unpack",
          "package": "storablevector",
          "signature": "Vector a -\u003e [a]",
          "source": "src/Data-StorableVector.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts Vector to",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "unpack",
          "normalized": "Vector a-\u003e[a]",
          "package": "storablevector",
          "signature": "Vector a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e into a list using a conversion function\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "unpackWith",
          "package": "storablevector",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e [b]",
          "source": "src/Data-StorableVector.html#unpackWith",
          "type": "function"
        },
        "index": {
          "description": "Convert Vector into list using conversion function",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "unpackWith",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003e[b]",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb)-\u003eVector a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:unpackWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of elements into a pair of\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "unzip",
          "package": "storablevector",
          "signature": "[(a, b)] -\u003e (Vector a, Vector b)",
          "source": "src/Data-StorableVector.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of elements into pair of Vector Note that this performs two pack operations",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e(Vector a,Vector b)",
          "package": "storablevector",
          "signature": "[(a,b)]-\u003e(Vector a,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector",
          "name": "viewL",
          "package": "storablevector",
          "signature": "Vector a -\u003e Maybe (a, Vector a)",
          "source": "src/Data-StorableVector.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "viewL",
          "normalized": "Vector a-\u003eMaybe(a,Vector a)",
          "package": "storablevector",
          "signature": "Vector a-\u003eMaybe(a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.StorableVector",
          "name": "viewR",
          "package": "storablevector",
          "signature": "Vector a -\u003e Maybe (Vector a, a)",
          "source": "src/Data-StorableVector.html#viewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "viewR",
          "normalized": "Vector a-\u003eMaybe(Vector a,a)",
          "package": "storablevector",
          "signature": "Vector a-\u003eMaybe(Vector a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:viewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "writeFile",
          "package": "storablevector",
          "signature": "FilePath -\u003e Vector a -\u003e IO ()",
          "source": "src/Data-StorableVector.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write Vector to file",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "writeFile",
          "normalized": "FilePath-\u003eVector a-\u003eIO()",
          "package": "storablevector",
          "partial": "File",
          "signature": "FilePath-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es and returns a list of\n corresponding pairs of elements. If one input \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e is short,\n excess elements of the longer \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "zip",
          "package": "storablevector",
          "signature": "Vector a -\u003e Vector b -\u003e [(a, b)]",
          "source": "src/Data-StorableVector.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two Vector and returns list of corresponding pairs of elements If one input Vector is short excess elements of the longer Vector are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "zip",
          "normalized": "Vector a-\u003eVector b-\u003e[(a,b)]",
          "package": "storablevector",
          "signature": "Vector a-\u003eVector b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es to produce the list of\n corresponding sums.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "zipWith",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Data-StorableVector.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two Vector to produce the list of corresponding sums",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e but for three input vectors\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "zipWith3",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "source": "src/Data-StorableVector.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Like zipWith but for three input vectors",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e but for four input vectors\n If you need even more input vectors,\n you might write a function yourselve using unfoldrN and viewL.\n\u003c/p\u003e",
          "module": "Data.StorableVector",
          "name": "zipWith4",
          "package": "storablevector",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e",
          "source": "src/Data-StorableVector.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Like zipWith but for four input vectors If you need even more input vectors you might write function yourselve using unfoldrN and viewL",
          "hierarchy": "Data StorableVector",
          "module": "Data.StorableVector",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "package": "storablevector",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/storablevector/docs/Data-StorableVector.html#v:zipWith4"
      }
    }
  ]
]