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
        "word": "monadic-arrays"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "Class",
          "package": "monadic-arrays",
          "source": "src/Control-Monad-Array-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "Class",
          "package": "monadic-arrays",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArr m serves as a canonical choice of boxed MArray\n\u003c/p\u003e",
          "module": "Control.Monad.Array.Class",
          "name": "MonadArray",
          "package": "monadic-arrays",
          "source": "src/Control-Monad-Array-Class.html#MonadArray",
          "type": "class"
        },
        "index": {
          "description": "Arr serves as canonical choice of boxed MArray",
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "MonadArray",
          "package": "monadic-arrays",
          "partial": "Monad Array",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#t:MonadArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUArr m provides unboxed arrays, and can be used on the primitive data types:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIt can be used via \u003ccode\u003e\u003ca\u003eMArray1\u003c/a\u003e\u003c/code\u003e to store values of types \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStablePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e and \u003ccode\u003e'Ptr a'\u003c/code\u003e as well.\n\u003c/p\u003e",
          "module": "Control.Monad.Array.Class",
          "name": "MonadUArray",
          "package": "monadic-arrays",
          "source": "src/Control-Monad-Array-Class.html#MonadUArray",
          "type": "class"
        },
        "index": {
          "description": "UArr provides unboxed arrays and can be used on the primitive data types Bool Char Int Word Double Float Int8 Int16 Int32 Int64 Word8 Word16 Word32 and Word64 It can be used via MArray1 to store values of types StablePtr FunPtr and Ptr as well",
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "MonadUArray",
          "package": "monadic-arrays",
          "partial": "Monad UArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#t:MonadUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "getBoundsM",
          "package": "monadic-arrays",
          "signature": "Arr m i e -\u003e m (i, i)",
          "source": "src/Control-Monad-Array-Class.html#getBoundsM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "getBoundsM",
          "normalized": "Arr a b c-\u003ea(b,b)",
          "package": "monadic-arrays",
          "partial": "Bounds",
          "signature": "Arr m i e-\u003em(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:getBoundsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "getNumElementsM",
          "package": "monadic-arrays",
          "signature": "Arr m i e -\u003e m Int",
          "source": "src/Control-Monad-Array-Class.html#getNumElementsM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "getNumElementsM",
          "normalized": "Arr a b c-\u003ea Int",
          "package": "monadic-arrays",
          "partial": "Num Elements",
          "signature": "Arr m i e-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:getNumElementsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "newArrayM",
          "package": "monadic-arrays",
          "signature": "(i, i) -\u003e e -\u003e m (Arr m i e)",
          "source": "src/Control-Monad-Array-Class.html#newArrayM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "newArrayM",
          "normalized": "(a,a)-\u003eb-\u003ec(Arr c a b)",
          "package": "monadic-arrays",
          "partial": "Array",
          "signature": "(i,i)-\u003ee-\u003em(Arr m i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:newArrayM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "newArrayM_",
          "package": "monadic-arrays",
          "signature": "(i, i) -\u003e m (Arr m i e)",
          "source": "src/Control-Monad-Array-Class.html#newArrayM_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "newArrayM_",
          "normalized": "(a,a)-\u003eb(Arr b a c)",
          "package": "monadic-arrays",
          "partial": "Array",
          "signature": "(i,i)-\u003em(Arr m i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:newArrayM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "unsafeNewArrayM_",
          "package": "monadic-arrays",
          "signature": "(i, i) -\u003e m (Arr m i e)",
          "source": "src/Control-Monad-Array-Class.html#unsafeNewArrayM_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "unsafeNewArrayM_",
          "normalized": "(a,a)-\u003eb(Arr b a c)",
          "package": "monadic-arrays",
          "partial": "New Array",
          "signature": "(i,i)-\u003em(Arr m i e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:unsafeNewArrayM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "unsafeReadM",
          "package": "monadic-arrays",
          "signature": "Arr m i e -\u003e Int -\u003e m e",
          "source": "src/Control-Monad-Array-Class.html#unsafeReadM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "unsafeReadM",
          "normalized": "Arr a b c-\u003eInt-\u003ea c",
          "package": "monadic-arrays",
          "partial": "Read",
          "signature": "Arr m i e-\u003eInt-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:unsafeReadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Array.Class",
          "name": "unsafeWriteM",
          "package": "monadic-arrays",
          "signature": "Arr m i e -\u003e Int -\u003e e -\u003e m ()",
          "source": "src/Control-Monad-Array-Class.html#unsafeWriteM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Array Class",
          "module": "Control.Monad.Array.Class",
          "name": "unsafeWriteM",
          "normalized": "Arr a b c-\u003eInt-\u003ec-\u003ea()",
          "package": "monadic-arrays",
          "partial": "Write",
          "signature": "Arr m i e-\u003eInt-\u003ee-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Control-Monad-Array-Class.html#v:unsafeWriteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA higher-order MArray class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.MArray.Extras",
          "name": "Extras",
          "package": "monadic-arrays",
          "source": "src/Data-Array-MArray-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "higher-order MArray class",
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "Extras",
          "package": "monadic-arrays",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "MArray1",
          "package": "monadic-arrays",
          "source": "src/Data-Array-MArray-Extras.html#MArray1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "MArray1",
          "package": "monadic-arrays",
          "partial": "MArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#t:MArray1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "getBounds1",
          "package": "monadic-arrays",
          "signature": "a i (f e) -\u003e m (i, i)",
          "source": "src/Data-Array-MArray-Extras.html#getBounds1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "getBounds1",
          "normalized": "a b(c d)-\u003ee(b,b)",
          "package": "monadic-arrays",
          "partial": "Bounds",
          "signature": "a i(f e)-\u003em(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:getBounds1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "getNumElements1",
          "package": "monadic-arrays",
          "signature": "a i (f e) -\u003e m Int",
          "source": "src/Data-Array-MArray-Extras.html#getNumElements1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "getNumElements1",
          "normalized": "a b(c d)-\u003ee Int",
          "package": "monadic-arrays",
          "partial": "Num Elements",
          "signature": "a i(f e)-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:getNumElements1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "newArray1",
          "package": "monadic-arrays",
          "signature": "(i, i) -\u003e f e -\u003e m (a i (f e))",
          "source": "src/Data-Array-MArray-Extras.html#newArray1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "newArray1",
          "normalized": "(a,a)-\u003eb c-\u003ed(e a(b c))",
          "package": "monadic-arrays",
          "partial": "Array",
          "signature": "(i,i)-\u003ef e-\u003em(a i(f e))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:newArray1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "newArray1_",
          "package": "monadic-arrays",
          "signature": "(i, i) -\u003e m (a i (f e))",
          "source": "src/Data-Array-MArray-Extras.html#newArray1_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "newArray1_",
          "normalized": "(a,a)-\u003eb(c a(d e))",
          "package": "monadic-arrays",
          "partial": "Array",
          "signature": "(i,i)-\u003em(a i(f e))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:newArray1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "unsafeNewArray1_",
          "package": "monadic-arrays",
          "signature": "(i, i) -\u003e m (a i (f e))",
          "source": "src/Data-Array-MArray-Extras.html#unsafeNewArray1_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "unsafeNewArray1_",
          "normalized": "(a,a)-\u003eb(c a(d e))",
          "package": "monadic-arrays",
          "partial": "New Array",
          "signature": "(i,i)-\u003em(a i(f e))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:unsafeNewArray1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "unsafeRead1",
          "package": "monadic-arrays",
          "signature": "a i (f e) -\u003e Int -\u003e m (f e)",
          "source": "src/Data-Array-MArray-Extras.html#unsafeRead1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "unsafeRead1",
          "normalized": "a b(c d)-\u003eInt-\u003ee(c d)",
          "package": "monadic-arrays",
          "partial": "Read",
          "signature": "a i(f e)-\u003eInt-\u003em(f e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:unsafeRead1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.MArray.Extras",
          "name": "unsafeWrite1",
          "package": "monadic-arrays",
          "signature": "a i (f e) -\u003e Int -\u003e f e -\u003e m ()",
          "source": "src/Data-Array-MArray-Extras.html#unsafeWrite1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array MArray Extras",
          "module": "Data.Array.MArray.Extras",
          "name": "unsafeWrite1",
          "normalized": "a b(c d)-\u003eInt-\u003ec d-\u003ee()",
          "package": "monadic-arrays",
          "partial": "Write",
          "signature": "a i(f e)-\u003eInt-\u003ef e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadic-arrays/docs/Data-Array-MArray-Extras.html#v:unsafeWrite1"
      }
    }
  ]
]