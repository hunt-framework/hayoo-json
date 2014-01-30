[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtomic bit operations, using GCC's built-in atomic operations in small C\n wrapper functions called through the FFI. See\n \u003ca\u003ehttp://gcc.gnu.org/wiki/Atomic\u003c/a\u003e and\n \u003ca\u003ehttp://gcc.gnu.org/onlinedocs/gcc/Atomic-Builtins.html\u003c/a\u003e for more detail.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "module",
        "fct-source": "src/Data-Bits-Atomic.html",
        "fct-type": "module",
        "title": "Atomic"
      },
      "index": {
        "description": "Atomic bit operations using GCC built-in atomic operations in small wrapper functions called through the FFI See http gcc.gnu.org wiki Atomic and http gcc.gnu.org onlinedocs gcc Atomic-Builtins.html for more detail",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "Atomic",
        "normalized": "",
        "package": "bits-atomic",
        "partial": "Atomic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#t:AtomicBits",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic bit operations on a memory location. \n\u003c/p\u003e\u003cp\u003eInstances: \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "class",
        "fct-source": "src/Data-Bits-Atomic.html#AtomicBits",
        "fct-type": "class",
        "title": "AtomicBits"
      },
      "index": {
        "description": "Atomic bit operations on memory location Instances Word Word8 Word16 Word32 Word64 Int Int8 Int16 Int32 Int64",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "AtomicBits",
        "normalized": "",
        "package": "bits-atomic",
        "partial": "Atomic Bits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:addAndFetch",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(+)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#addAndFetch",
        "fct-type": "method",
        "title": "addAndFetch"
      },
      "index": {
        "description": "Atomic returning the updated value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "addAndFetch",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Fetch",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:andAndFetch",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(.&.)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#andAndFetch",
        "fct-type": "method",
        "title": "andAndFetch"
      },
      "index": {
        "description": "Atomic returning the updated value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "andAndFetch",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Fetch",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:compareAndSwap",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003eCAS\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "compareAndSwap",
        "fct-source": "src/Data-Bits-Atomic.html#compareAndSwap",
        "fct-type": "method",
        "title": "compareAndSwap"
      },
      "index": {
        "description": "Atomic CAS returning the original value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "compareAndSwap",
        "normalized": "",
        "package": "bits-atomic",
        "partial": "And Swap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:compareAndSwapBool",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003eCAS\u003c/code\u003e with boolean return.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "compareAndSwapBool",
        "fct-source": "src/Data-Bits-Atomic.html#compareAndSwapBool",
        "fct-type": "method",
        "title": "compareAndSwapBool"
      },
      "index": {
        "description": "Atomic CAS with boolean return",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "compareAndSwapBool",
        "normalized": "",
        "package": "bits-atomic",
        "partial": "And Swap Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndAdd",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(+)\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#fetchAndAdd",
        "fct-type": "method",
        "title": "fetchAndAdd"
      },
      "index": {
        "description": "Atomic returning the original value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "fetchAndAdd",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Add",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndAnd",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(.&.)\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#fetchAndAnd",
        "fct-type": "method",
        "title": "fetchAndAnd"
      },
      "index": {
        "description": "Atomic returning the original value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "fetchAndAnd",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And And",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndNand",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003enand\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#fetchAndNand",
        "fct-type": "method",
        "title": "fetchAndNand"
      },
      "index": {
        "description": "Atomic nand returning the original value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "fetchAndNand",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Nand",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndOr",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(.|.)\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#fetchAndOr",
        "fct-type": "method",
        "title": "fetchAndOr"
      },
      "index": {
        "description": "Atomic returning the original value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "fetchAndOr",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Or",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndSub",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(-)\u003c/code\u003e, returning the originial value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#fetchAndSub",
        "fct-type": "method",
        "title": "fetchAndSub"
      },
      "index": {
        "description": "Atomic returning the originial value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "fetchAndSub",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Sub",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:fetchAndXor",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003exor\u003c/code\u003e, returning the original value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#fetchAndXor",
        "fct-type": "method",
        "title": "fetchAndXor"
      },
      "index": {
        "description": "Atomic xor returning the original value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "fetchAndXor",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Xor",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:lockRelease",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the lock by writing a \u003ccode\u003e0\u003c/code\u003e. Includes a \u003cem\u003erelease barrier\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e IO ()",
        "fct-source": "src/Data-Bits-Atomic.html#lockRelease",
        "fct-type": "method",
        "title": "lockRelease"
      },
      "index": {
        "description": "Release the lock by writing Includes release barrier",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "lockRelease",
        "normalized": "Ptr a-\u003eIO()",
        "package": "bits-atomic",
        "partial": "Release",
        "signature": "Ptr x-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:lockTestAndSet",
      "description": {
        "fct-descr": "\u003cp\u003eAtomically update the memory location with the value 1 and return the\n original value, 0 in case \u003ccode\u003e\u003ca\u003elockRelease\u003c/a\u003e\u003c/code\u003e was previously called or \u003ccode\u003e1\u003c/code\u003e if\n another call to \u003ccode\u003e\u003ca\u003elockTestAndSet\u003c/a\u003e\u003c/code\u003e aquired the lock earlier. Implies an\n \u003cem\u003eaquire barrier\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#lockTestAndSet",
        "fct-type": "method",
        "title": "lockTestAndSet"
      },
      "index": {
        "description": "Atomically update the memory location with the value and return the original value in case lockRelease was previously called or if another call to lockTestAndSet aquired the lock earlier Implies an aquire barrier",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "lockTestAndSet",
        "normalized": "Ptr a-\u003eIO a",
        "package": "bits-atomic",
        "partial": "Test And Set",
        "signature": "Ptr x-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:memoryBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eA full memory barrier.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Bits-Atomic.html#memoryBarrier",
        "fct-type": "function",
        "title": "memoryBarrier"
      },
      "index": {
        "description": "full memory barrier",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "memoryBarrier",
        "normalized": "IO()",
        "package": "bits-atomic",
        "partial": "Barrier",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:nandAndFetch",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003enand\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#nandAndFetch",
        "fct-type": "method",
        "title": "nandAndFetch"
      },
      "index": {
        "description": "Atomic nand returning the updated value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "nandAndFetch",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Fetch",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:orAndFetch",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(.|.)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#orAndFetch",
        "fct-type": "method",
        "title": "orAndFetch"
      },
      "index": {
        "description": "Atomic returning the updated value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "orAndFetch",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Fetch",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:subAndFetch",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003e(-)\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#subAndFetch",
        "fct-type": "method",
        "title": "subAndFetch"
      },
      "index": {
        "description": "Atomic returning the updated value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "subAndFetch",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Fetch",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bits-atomic/docs/Data-Bits-Atomic.html#v:xorAndFetch",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic \u003ccode\u003exor\u003c/code\u003e, returning the updated value.\n\u003c/p\u003e",
        "fct-module": "Data.Bits.Atomic",
        "fct-package": "bits-atomic",
        "fct-signature": "Ptr x -\u003e x -\u003e IO x",
        "fct-source": "src/Data-Bits-Atomic.html#xorAndFetch",
        "fct-type": "method",
        "title": "xorAndFetch"
      },
      "index": {
        "description": "Atomic xor returning the updated value",
        "hierarchy": "Data Bits Atomic",
        "module": "Data.Bits.Atomic",
        "name": "xorAndFetch",
        "normalized": "Ptr a-\u003ea-\u003eIO a",
        "package": "bits-atomic",
        "partial": "And Fetch",
        "signature": "Ptr x-\u003ex-\u003eIO x"
      }
    }
  }
]