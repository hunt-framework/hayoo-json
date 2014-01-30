[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient conversion routines between different array\n types and Accelerate arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Accelerate-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "This module provides efficient conversion routines between different array types and Accelerate arrays",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "IO",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:A",
      "description": {
        "fct-descr": "\u003cp\u003eThe representation tag for manifest arrays based on Data.Array.Accelerate.\n\u003c/p\u003e\u003cp\u003eThe Accelerate array implementation is based on type families and picks an\n efficient, unboxed representation for every element type. Moreover, these\n arrays can be handed efficiently (without copying) to Accelerate programs\n for further computation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Accelerate-IO-Repa.html#A",
        "fct-type": "data",
        "title": "A"
      },
      "index": {
        "description": "The representation tag for manifest arrays based on Data.Array.Accelerate The Accelerate array implementation is based on type families and picks an efficient unboxed representation for every element type Moreover these arrays can be handed efficiently without copying to Accelerate programs for further computation",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "A",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:BlockCopyFun",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions of this type are passed as arguments to \u003ccode\u003etoArray\u003c/code\u003e. A function of\n   this type should copy a number of bytes (equal to the value of the\n   parameter of type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e) to the destination memory pointed to by \u003ccode\u003ePtr e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-IO-BlockCopy.html#BlockCopyFun",
        "fct-type": "type",
        "title": "BlockCopyFun"
      },
      "index": {
        "description": "Functions of this type are passed as arguments to toArray function of this type should copy number of bytes equal to the value of the parameter of type Int to the destination memory pointed to by Ptr",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "BlockCopyFun",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "Block Copy Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:BlockCopyFuns",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a collection of \u003ca\u003eblock copy functions\u003c/a\u003e (see \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e). The\n   structure of the collection of \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003es depends on the element type\n   \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ee :: Float\u003c/code\u003e\n   then \u003ccode\u003eBlockCopyFuns (EltRepr e) :: ((), Ptr Float -\u003e Int -\u003e IO ())\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ee :: (Double, Float)\u003c/code\u003e\n   then \u003ccode\u003eBlockCopyFuns (EltRepr e) :: (((), Ptr Double -\u003e Int -\u003e IO ()), Ptr Float -\u003e Int -\u003e IO ())\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "BlockCopyFuns",
        "fct-type": "function",
        "title": "BlockCopyFuns"
      },
      "index": {
        "description": "Represents collection of block copy functions see BlockCopyFun The structure of the collection of BlockCopyFun depends on the element type e.g If Float then BlockCopyFuns EltRepr Ptr Float Int IO If Double Float then BlockCopyFuns EltRepr Ptr Double Int IO Ptr Float Int IO",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "BlockCopyFuns",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "Block Copy Funs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:BlockPtrs",
      "description": {
        "fct-descr": "\u003cp\u003eA family of types that represents a collection of pointers that are the\n   source/destination addresses for a block copy. The structure of the\n   collection of pointers depends on the element type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ee :: Int\u003c/code\u003e,            then \u003ccode\u003eBlockPtrs (EltRepr e) :: ((), Ptr Int)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ee :: (Double, Float)\u003c/code\u003e then \u003ccode\u003eBlockPtrs (EltRepr e) :: (((), Ptr Double), Ptr Float)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "BlockPtrs",
        "fct-type": "function",
        "title": "BlockPtrs"
      },
      "index": {
        "description": "family of types that represents collection of pointers that are the source destination addresses for block copy The structure of the collection of pointers depends on the element type e.g If Int then BlockPtrs EltRepr Ptr Int If Double Float then BlockPtrs EltRepr Ptr Double Ptr Float",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "BlockPtrs",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "Block Ptrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:ByteStrings",
      "description": {
        "fct-descr": "\u003cp\u003eA family of types that represents a collection of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. They are\n   the source data for function \u003ccode\u003efromByteString\u003c/code\u003e and the result data for\n   \u003ccode\u003etoByteString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "ByteStrings",
        "fct-type": "function",
        "title": "ByteStrings"
      },
      "index": {
        "description": "family of types that represents collection of ByteString They are the source data for function fromByteString and the result data for toByteString",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "ByteStrings",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "Byte Strings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:RGBA32",
      "description": {
        "fct-descr": "\u003cp\u003ePacked RGBA pixel data\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#RGBA32",
        "fct-type": "type",
        "title": "RGBA32"
      },
      "index": {
        "description": "Packed RGBA pixel data",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "RGBA32",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "RGBA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:Shapes",
      "description": {
        "fct-descr": "\u003cp\u003eIndex conversion and equivalence statement between Repa and Accelerate\n array shapes. That is, a n-dimensional Repa array will produce an\n n-dimensional Accelerate array of the same extent, and vice-versa.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Accelerate-IO-Repa.html#Shapes",
        "fct-type": "class",
        "title": "Shapes"
      },
      "index": {
        "description": "Index conversion and equivalence statement between Repa and Accelerate array shapes That is n-dimensional Repa array will produce an n-dimensional Accelerate array of the same extent and vice-versa",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "Shapes",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "Shapes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#t:Vectors",
      "description": {
        "fct-descr": "\u003cp\u003eA family of types that represents a collection of storable \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es. The\n structure of the collection depends on the element type \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if \u003ccode\u003ee :: Int\u003c/code\u003e,             then \u003ccode\u003eVectors (EltRepr e) :: ((), Vector Int)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e if \u003ccode\u003ee :: (Double, Float)\u003c/code\u003e, then \u003ccode\u003eVectors (EltRepr e) :: (((), Vector Double), Vector Float)\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Vectors",
        "fct-type": "function",
        "title": "Vectors"
      },
      "index": {
        "description": "family of types that represents collection of storable Vector The structure of the collection depends on the element type For example if Int then Vectors EltRepr Vector Int if Double Float then Vectors EltRepr Vector Double Vector Float",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "Vectors",
        "normalized": "",
        "package": "accelerate-io",
        "partial": "Vectors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:computeAccP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel computation of array elements\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array r sh e -\u003e m (Array A sh e)",
        "fct-source": "src/Data-Array-Accelerate-IO-Repa.html#computeAccP",
        "fct-type": "function",
        "title": "computeAccP"
      },
      "index": {
        "description": "Parallel computation of array elements",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "computeAccP",
        "normalized": "Array a b c-\u003ed(Array A b c)",
        "package": "accelerate-io",
        "partial": "Acc",
        "signature": "Array r sh e-\u003em(Array A sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:computeAccS",
      "description": {
        "fct-descr": "\u003cp\u003eSequential computation of array elements\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array r sh e -\u003e Array A sh e",
        "fct-source": "src/Data-Array-Accelerate-IO-Repa.html#computeAccS",
        "fct-type": "function",
        "title": "computeAccS"
      },
      "index": {
        "description": "Sequential computation of array elements",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "computeAccS",
        "normalized": "Array a b c-\u003eArray A b c",
        "package": "accelerate-io",
        "partial": "Acc",
        "signature": "Array r sh e-\u003eArray A sh e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:fromArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy values from an Accelerate array using a collection of functions that\n   have type \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e. The argument of type \u003ccode\u003ePtr e\u003c/code\u003e in each of these\n   functions refers to the address of the \u003cem\u003esource\u003c/em\u003e block of memory in the\n   Accelerate Array. The \u003cem\u003edestination\u003c/em\u003e address is implicit. e.g. the\n   \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e could be the result of partially application to a \u003ccode\u003ePtr e\u003c/code\u003e\n   pointing to the destination block.\n\u003c/p\u003e\u003cp\u003eThe structure of this collection of functions depends on the elemente type\n   \u003ccode\u003ee\u003c/code\u003e. Each function (of type \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e) copies data to a destination\n   address (pointed to by the argument of type \u003ccode\u003ePtr ()\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUnless there is a particularly pressing reason to use this function, the\n   \u003ccode\u003e\u003ca\u003efromPtr\u003c/a\u003e\u003c/code\u003e function is sufficient as it uses an efficient low-level call to\n   libc's \u003ccode\u003ememcpy\u003c/code\u003e to perform the copy.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array sh e -\u003e BlockCopyFuns (EltRepr e) -\u003e IO ()",
        "fct-source": "src/Data-Array-Accelerate-IO-Ptr.html#fromArray",
        "fct-type": "function",
        "title": "fromArray"
      },
      "index": {
        "description": "Copy values from an Accelerate array using collection of functions that have type BlockCopyFun The argument of type Ptr in each of these functions refers to the address of the source block of memory in the Accelerate Array The destination address is implicit e.g the BlockCopyFun could be the result of partially application to Ptr pointing to the destination block The structure of this collection of functions depends on the elemente type Each function of type BlockCopyFun copies data to destination address pointed to by the argument of type Ptr Unless there is particularly pressing reason to use this function the fromPtr function is sufficient as it uses an efficient low-level call to libc memcpy to perform the copy",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "fromArray",
        "normalized": "Array a b-\u003eBlockCopyFuns(EltRepr b)-\u003eIO()",
        "package": "accelerate-io",
        "partial": "Array",
        "signature": "Array sh e-\u003eBlockCopyFuns(EltRepr e)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eBlock copies bytes from a collection of \u003ccode\u003eByteString\u003c/code\u003es to freshly allocated\n   Accelerate array.\n\u003c/p\u003e\u003cp\u003eThe type of elements (\u003ccode\u003ee\u003c/code\u003e) in the output Accelerate array determines the\n   structure of the collection of \u003ccode\u003eByteString\u003c/code\u003es that will be required as the\n   second argument to this function. See \u003ccode\u003e\u003ca\u003eByteStrings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "sh -\u003e ByteStrings (EltRepr e) -\u003e IO (Array sh e)",
        "fct-source": "src/Data-Array-Accelerate-IO-ByteString.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Block copies bytes from collection of ByteString to freshly allocated Accelerate array The type of elements in the output Accelerate array determines the structure of the collection of ByteString that will be required as the second argument to this function See ByteStrings",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "fromByteString",
        "normalized": "a-\u003eByteStrings(EltRepr b)-\u003eIO(Array a b)",
        "package": "accelerate-io",
        "partial": "Byte String",
        "signature": "sh-\u003eByteStrings(EltRepr e)-\u003eIO(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:fromPtr",
      "description": {
        "fct-descr": "\u003cp\u003eBlock copy regions of memory into a freshly allocated Accelerate array. The\n   type of elements (\u003ccode\u003ee\u003c/code\u003e) in the output Accelerate array determines the\n   structure of the collection of pointers that will be required as the second\n   argument to this function. See \u003ccode\u003e\u003ca\u003eBlockPtrs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eEach one of these pointers points to a block of memory that is the source\n   of data for the Accelerate array (unlike function \u003ccode\u003e\u003ca\u003etoArray\u003c/a\u003e\u003c/code\u003e where one\n   passes in function which copies data to a destination address.).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "sh -\u003e BlockPtrs (EltRepr e) -\u003e IO (Array sh e)",
        "fct-source": "src/Data-Array-Accelerate-IO-Ptr.html#fromPtr",
        "fct-type": "function",
        "title": "fromPtr"
      },
      "index": {
        "description": "Block copy regions of memory into freshly allocated Accelerate array The type of elements in the output Accelerate array determines the structure of the collection of pointers that will be required as the second argument to this function See BlockPtrs Each one of these pointers points to block of memory that is the source of data for the Accelerate array unlike function toArray where one passes in function which copies data to destination address",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "fromPtr",
        "normalized": "a-\u003eBlockPtrs(EltRepr b)-\u003eIO(Array a b)",
        "package": "accelerate-io",
        "partial": "Ptr",
        "signature": "sh-\u003eBlockPtrs(EltRepr e)-\u003eIO(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:fromRepa",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Unpack to an Accelerate array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array A sh e -\u003e Array sh' e",
        "fct-source": "src/Data-Array-Accelerate-IO-Repa.html#fromRepa",
        "fct-type": "function",
        "title": "fromRepa"
      },
      "index": {
        "description": "Unpack to an Accelerate array",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "fromRepa",
        "normalized": "Array A a b-\u003eArray c b",
        "package": "accelerate-io",
        "partial": "Repa",
        "signature": "Array A sh e-\u003eArray sh' e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:fromVectors",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Copy a set of storable vectors into freshly allocated Accelerate\n arrays. The type of elements \u003ccode\u003ee\u003c/code\u003e in the output Accelerate array determines\n the structure of the collection that will be required as the second argument.\n See \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eData will be consumed from the vector in row-major order. You must make sure\n that each of the input vectors contains the right number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "sh -\u003e Vectors (EltRepr e) -\u003e Array sh e",
        "fct-source": "src/Data-Array-Accelerate-IO-Vector.html#fromVectors",
        "fct-type": "function",
        "title": "fromVectors"
      },
      "index": {
        "description": "Copy set of storable vectors into freshly allocated Accelerate arrays The type of elements in the output Accelerate array determines the structure of the collection that will be required as the second argument See Vectors Data will be consumed from the vector in row-major order You must make sure that each of the input vectors contains the right number of elements",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "fromVectors",
        "normalized": "a-\u003eVectors(EltRepr b)-\u003eArray a b",
        "package": "accelerate-io",
        "partial": "Vectors",
        "signature": "sh-\u003eVectors(EltRepr e)-\u003eArray sh e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:luminanceOfRGBA32",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an RGBA colour to its luminance value in the range [0..1].\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Exp RGBA32 -\u003e Exp a",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#luminanceOfRGBA32",
        "fct-type": "function",
        "title": "luminanceOfRGBA32"
      },
      "index": {
        "description": "Convert an RGBA colour to its luminance value in the range",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "luminanceOfRGBA32",
        "normalized": "Exp RGBA-\u003eExp a",
        "package": "accelerate-io",
        "partial": "Of RGBA",
        "signature": "Exp RGBA-\u003eExp a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:packRGBA32",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a tuple of (Red, Green, Blue, Alpha) values into a packed \u003ccode\u003e\u003ca\u003eRGBA32\u003c/a\u003e\u003c/code\u003e\n value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Exp (Word8, Word8, Word8, Word8) -\u003e Exp RGBA32",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#packRGBA32",
        "fct-type": "function",
        "title": "packRGBA32"
      },
      "index": {
        "description": "Promote tuple of Red Green Blue Alpha values into packed RGBA32 value",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "packRGBA32",
        "normalized": "Exp(Word,Word,Word,Word)-\u003eExp RGBA",
        "package": "accelerate-io",
        "partial": "RGBA",
        "signature": "Exp(Word,Word,Word,Word)-\u003eExp RGBA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:readImageFromBMP",
      "description": {
        "fct-descr": "\u003cp\u003eRead RGBA components from a BMP file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "FilePath -\u003e IO (Either Error (Array DIM2 RGBA32))",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#readImageFromBMP",
        "fct-type": "function",
        "title": "readImageFromBMP"
      },
      "index": {
        "description": "Read RGBA components from BMP file",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "readImageFromBMP",
        "normalized": "FilePath-\u003eIO(Either Error(Array DIM RGBA))",
        "package": "accelerate-io",
        "partial": "Image From BMP",
        "signature": "FilePath-\u003eIO(Either Error(Array DIM RGBA))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:rgba32OfFloat",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a tuple of (Red, Green, Blue, Alpha) values in the range [0..1]\n into a packed \u003ccode\u003e\u003ca\u003eRGBA32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Exp (a, a, a, a) -\u003e Exp RGBA32",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#rgba32OfFloat",
        "fct-type": "function",
        "title": "rgba32OfFloat"
      },
      "index": {
        "description": "Promote tuple of Red Green Blue Alpha values in the range into packed RGBA32",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "rgba32OfFloat",
        "normalized": "Exp(a,a,a,a)-\u003eExp RGBA",
        "package": "accelerate-io",
        "partial": "Of Float",
        "signature": "Exp(a,a,a,a)-\u003eExp RGBA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:rgba32OfLuminance",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a value in the range [0..1] to a grey RGB colour.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Exp a -\u003e Exp RGBA32",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#rgba32OfLuminance",
        "fct-type": "function",
        "title": "rgba32OfLuminance"
      },
      "index": {
        "description": "Convert value in the range to grey RGB colour",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "rgba32OfLuminance",
        "normalized": "Exp a-\u003eExp RGBA",
        "package": "accelerate-io",
        "partial": "Of Luminance",
        "signature": "Exp a-\u003eExp RGBA"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:toArray",
      "description": {
        "fct-descr": "\u003cp\u003eCopy values to a freshly allocated Accelerate array using a collection of\n   functions that have type \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e. The argument of type \u003ccode\u003ePtr e\u003c/code\u003e in\n   each of these functions refers to the address of the \u003cem\u003edestination\u003c/em\u003e block of\n   memory in the Accelerate Array. The \u003cem\u003esource\u003c/em\u003e address is implicit. e.g. the\n   \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e could be the result of a partial application to a \u003ccode\u003ePtr e\u003c/code\u003e\n   pointing to the source block.\n\u003c/p\u003e\u003cp\u003eThe structure of this collection of functions depends on the elemente type\n   \u003ccode\u003ee\u003c/code\u003e. Each function (of type \u003ccode\u003e\u003ca\u003eBlockCopyFun\u003c/a\u003e\u003c/code\u003e) copies data to a destination\n   address (pointed to by the argument of type \u003ccode\u003ePtr ()\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUnless there is a particularly pressing reason to use this function, the\n   \u003ccode\u003e\u003ca\u003efromPtr\u003c/a\u003e\u003c/code\u003e function is sufficient as it uses an efficient low-level call to\n   libc's \u003ccode\u003ememcpy\u003c/code\u003e to perform the copy.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "sh -\u003e BlockCopyFuns (EltRepr e) -\u003e IO (Array sh e)",
        "fct-source": "src/Data-Array-Accelerate-IO-Ptr.html#toArray",
        "fct-type": "function",
        "title": "toArray"
      },
      "index": {
        "description": "Copy values to freshly allocated Accelerate array using collection of functions that have type BlockCopyFun The argument of type Ptr in each of these functions refers to the address of the destination block of memory in the Accelerate Array The source address is implicit e.g the BlockCopyFun could be the result of partial application to Ptr pointing to the source block The structure of this collection of functions depends on the elemente type Each function of type BlockCopyFun copies data to destination address pointed to by the argument of type Ptr Unless there is particularly pressing reason to use this function the fromPtr function is sufficient as it uses an efficient low-level call to libc memcpy to perform the copy",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "toArray",
        "normalized": "a-\u003eBlockCopyFuns(EltRepr b)-\u003eIO(Array a b)",
        "package": "accelerate-io",
        "partial": "Array",
        "signature": "sh-\u003eBlockCopyFuns(EltRepr e)-\u003eIO(Array sh e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eBlock copy from an Accelerate array to a collection of freshly allocated\n   \u003ccode\u003eByteString\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThe type of elements (\u003ccode\u003ee\u003c/code\u003e) in the input Accelerate array determines the\n   structure of the collection of \u003ccode\u003eByteString\u003c/code\u003es that will be output. See\n   \u003ccode\u003e\u003ca\u003eByteStrings\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array sh e -\u003e IO (ByteStrings (EltRepr e))",
        "fct-source": "src/Data-Array-Accelerate-IO-ByteString.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Block copy from an Accelerate array to collection of freshly allocated ByteString The type of elements in the input Accelerate array determines the structure of the collection of ByteString that will be output See ByteStrings",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "toByteString",
        "normalized": "Array a b-\u003eIO(ByteStrings(EltRepr b))",
        "package": "accelerate-io",
        "partial": "Byte String",
        "signature": "Array sh e-\u003eIO(ByteStrings(EltRepr e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:toPtr",
      "description": {
        "fct-descr": "\u003cp\u003eBlock copy from Accelerate array to pre-allocated regions of memory. The\n   type of element of the input Accelerate array (\u003ccode\u003ee\u003c/code\u003e) determines the\n   structure of the collection of pointers that will be required as the second\n   argument to this function. See \u003ccode\u003e\u003ca\u003eBlockPtrs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe memory associated with the pointers must have already been allocated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array sh e -\u003e BlockPtrs (EltRepr e) -\u003e IO ()",
        "fct-source": "src/Data-Array-Accelerate-IO-Ptr.html#toPtr",
        "fct-type": "function",
        "title": "toPtr"
      },
      "index": {
        "description": "Block copy from Accelerate array to pre-allocated regions of memory The type of element of the input Accelerate array determines the structure of the collection of pointers that will be required as the second argument to this function See BlockPtrs The memory associated with the pointers must have already been allocated",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "toPtr",
        "normalized": "Array a b-\u003eBlockPtrs(EltRepr b)-\u003eIO()",
        "package": "accelerate-io",
        "partial": "Ptr",
        "signature": "Array sh e-\u003eBlockPtrs(EltRepr e)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:toRepa",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Wrap an Accelerate array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array sh' e -\u003e Array A sh e",
        "fct-source": "src/Data-Array-Accelerate-IO-Repa.html#toRepa",
        "fct-type": "function",
        "title": "toRepa"
      },
      "index": {
        "description": "Wrap an Accelerate array",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "toRepa",
        "normalized": "Array a b-\u003eArray A c b",
        "package": "accelerate-io",
        "partial": "Repa",
        "signature": "Array sh' e-\u003eArray A sh e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:toVectors",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Turn the Accelerate array into a collection of storable \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es.\n The element type of the array \u003ccode\u003ee\u003c/code\u003e will determine the structure of the output\n collection. See \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eData will be output in row-major order.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Array sh e -\u003e Vectors (EltRepr e)",
        "fct-source": "src/Data-Array-Accelerate-IO-Vector.html#toVectors",
        "fct-type": "function",
        "title": "toVectors"
      },
      "index": {
        "description": "Turn the Accelerate array into collection of storable Vector The element type of the array will determine the structure of the output collection See Vectors Data will be output in row-major order",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "toVectors",
        "normalized": "Array a b-\u003eVectors(EltRepr b)",
        "package": "accelerate-io",
        "partial": "Vectors",
        "signature": "Array sh e-\u003eVectors(EltRepr e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:unpackRGBA32",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a \u003ccode\u003e\u003ca\u003eRGBA32\u003c/a\u003e\u003c/code\u003e value into a tuple of (Red, Green, Blue, Alpha) values.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "Exp RGBA32 -\u003e Exp (Word8, Word8, Word8, Word8)",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#unpackRGBA32",
        "fct-type": "function",
        "title": "unpackRGBA32"
      },
      "index": {
        "description": "Unpack RGBA32 value into tuple of Red Green Blue Alpha values",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "unpackRGBA32",
        "normalized": "Exp RGBA-\u003eExp(Word,Word,Word,Word)",
        "package": "accelerate-io",
        "partial": "RGBA",
        "signature": "Exp RGBA-\u003eExp(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/accelerate-io/docs/Data-Array-Accelerate-IO.html#v:writeImageToBMP",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the image data to a file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Accelerate.IO",
        "fct-package": "accelerate-io",
        "fct-signature": "FilePath -\u003e Array DIM2 RGBA32 -\u003e IO ()",
        "fct-source": "src/Data-Array-Accelerate-IO-BMP.html#writeImageToBMP",
        "fct-type": "function",
        "title": "writeImageToBMP"
      },
      "index": {
        "description": "Write the image data to file",
        "hierarchy": "Data Array Accelerate IO",
        "module": "Data.Array.Accelerate.IO",
        "name": "writeImageToBMP",
        "normalized": "FilePath-\u003eArray DIM RGBA-\u003eIO()",
        "package": "accelerate-io",
        "partial": "Image To BMP",
        "signature": "FilePath-\u003eArray DIM RGBA-\u003eIO()"
      }
    }
  }
]