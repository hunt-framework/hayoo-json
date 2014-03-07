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
        "word": "bits-atomic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtomic bit operations, using GCC's built-in atomic operations in small C\n wrapper functions called through the FFI. See\n \u003ca\u003ehttp://gcc.gnu.org/wiki/Atomic\u003c/a\u003e and\n \u003ca\u003ehttp://gcc.gnu.org/onlinedocs/gcc/Atomic-Builtins.html\u003c/a\u003e for more detail.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bits.Atomic",
          "name": "Atomic",
          "package": "bits-atomic",
          "source": "src/Data-Bits-Atomic.html",
          "type": "module"
        },
        "index": {
          "description": "Atomic bit operations using GCC built-in atomic operations in small wrapper functions called through the FFI See http gcc.gnu.org wiki Atomic and http gcc.gnu.org onlinedocs gcc Atomic-Builtins.html for more detail",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "Atomic",
          "package": "bits-atomic",
          "partial": "Atomic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic bit operations on a memory location. \n\u003c/p\u003e\u003cp\u003eInstances: \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "AtomicBits",
          "package": "bits-atomic",
          "source": "src/Data-Bits-Atomic.html#AtomicBits",
          "type": "class"
        },
        "index": {
          "description": "Atomic bit operations on memory location Instances Word Word8 Word16 Word32 Word64 Int Int8 Int16 Int32 Int64",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "AtomicBits",
          "package": "bits-atomic",
          "partial": "Atomic Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#t:AtomicBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(+)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "addAndFetch",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#addAndFetch",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the updated value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "addAndFetch",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Fetch",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:addAndFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(.&.)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "andAndFetch",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#andAndFetch",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the updated value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "andAndFetch",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Fetch",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:andAndFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003eCAS\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "compareAndSwap",
          "package": "bits-atomic",
          "signature": "compareAndSwap",
          "source": "src/Data-Bits-Atomic.html#compareAndSwap",
          "type": "method"
        },
        "index": {
          "description": "Atomic CAS returning the original value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "compareAndSwap",
          "package": "bits-atomic",
          "partial": "And Swap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:compareAndSwap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003eCAS\u003c/code\u003e with boolean return.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "compareAndSwapBool",
          "package": "bits-atomic",
          "signature": "compareAndSwapBool",
          "source": "src/Data-Bits-Atomic.html#compareAndSwapBool",
          "type": "method"
        },
        "index": {
          "description": "Atomic CAS with boolean return",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "compareAndSwapBool",
          "package": "bits-atomic",
          "partial": "And Swap Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:compareAndSwapBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(+)\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndAdd",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#fetchAndAdd",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the original value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndAdd",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Add",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(.&.)\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndAnd",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#fetchAndAnd",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the original value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndAnd",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And And",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003enand\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndNand",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#fetchAndNand",
          "type": "method"
        },
        "index": {
          "description": "Atomic nand returning the original value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndNand",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Nand",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndNand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(.|.)\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndOr",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#fetchAndOr",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the original value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndOr",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Or",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(-)\u003c/code\u003e, returning the originial value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndSub",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#fetchAndSub",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the originial value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndSub",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Sub",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003exor\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndXor",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#fetchAndXor",
          "type": "method"
        },
        "index": {
          "description": "Atomic xor returning the original value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "fetchAndXor",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Xor",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease the lock by writing a \u003ccode\u003e0\u003c/code\u003e. Includes a \u003cem\u003erelease barrier\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "lockRelease",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e IO ()",
          "source": "src/Data-Bits-Atomic.html#lockRelease",
          "type": "method"
        },
        "index": {
          "description": "Release the lock by writing Includes release barrier",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "lockRelease",
          "normalized": "Ptr a-\u003eIO()",
          "package": "bits-atomic",
          "partial": "Release",
          "signature": "Ptr x-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:lockRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically update the memory location with the value 1 and return the\n original value, 0 in case \u003ccode\u003e\u003ca\u003elockRelease\u003c/a\u003e\u003c/code\u003e was previously called or \u003ccode\u003e1\u003c/code\u003e if\n another call to \u003ccode\u003e\u003ca\u003elockTestAndSet\u003c/a\u003e\u003c/code\u003e aquired the lock earlier. Implies an\n \u003cem\u003eaquire barrier\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "lockTestAndSet",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#lockTestAndSet",
          "type": "method"
        },
        "index": {
          "description": "Atomically update the memory location with the value and return the original value in case lockRelease was previously called or if another call to lockTestAndSet aquired the lock earlier Implies an aquire barrier",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "lockTestAndSet",
          "normalized": "Ptr a-\u003eIO a",
          "package": "bits-atomic",
          "partial": "Test And Set",
          "signature": "Ptr x-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:lockTestAndSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA full memory barrier.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "memoryBarrier",
          "package": "bits-atomic",
          "signature": "IO ()",
          "source": "src/Data-Bits-Atomic.html#memoryBarrier",
          "type": "function"
        },
        "index": {
          "description": "full memory barrier",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "memoryBarrier",
          "normalized": "IO()",
          "package": "bits-atomic",
          "partial": "Barrier",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:memoryBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003enand\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "nandAndFetch",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#nandAndFetch",
          "type": "method"
        },
        "index": {
          "description": "Atomic nand returning the updated value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "nandAndFetch",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Fetch",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:nandAndFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(.|.)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "orAndFetch",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#orAndFetch",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the updated value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "orAndFetch",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Fetch",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:orAndFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003e(-)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "subAndFetch",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#subAndFetch",
          "type": "method"
        },
        "index": {
          "description": "Atomic returning the updated value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "subAndFetch",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Fetch",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:subAndFetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic \u003ccode\u003exor\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
          "module": "Data.Bits.Atomic",
          "name": "xorAndFetch",
          "package": "bits-atomic",
          "signature": "Ptr x -\u003e x -\u003e IO x",
          "source": "src/Data-Bits-Atomic.html#xorAndFetch",
          "type": "method"
        },
        "index": {
          "description": "Atomic xor returning the updated value",
          "hierarchy": "Data Bits Atomic",
          "module": "Data.Bits.Atomic",
          "name": "xorAndFetch",
          "normalized": "Ptr a-\u003ea-\u003eIO a",
          "package": "bits-atomic",
          "partial": "And Fetch",
          "signature": "Ptr x-\u003ex-\u003eIO x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:xorAndFetch"
      }
    }
  ]
]