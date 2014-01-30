[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class capturing mutable storage cells that support CAS\n   operations in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "module",
        "fct-source": "src/Data-CAS-Internal-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "type class capturing mutable storage cells that support CAS operations in the IO monad",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "Class",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#t:CASable",
      "description": {
        "fct-descr": "\u003cp\u003eIt would be nice to use an associated type family with this class\n   (for casref), but that would preclude overlapping instances.\n\u003c/p\u003e",
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "class",
        "fct-source": "src/Data-CAS-Internal-Class.html#CASable",
        "fct-type": "class",
        "title": "CASable"
      },
      "index": {
        "description": "It would be nice to use an associated type family with this class for casref but that would preclude overlapping instances",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "CASable",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "CASable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:cas",
      "description": {
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "casref a -\u003e a -\u003e a -\u003e IO (Bool, a)",
        "fct-source": "src/Data-CAS-Internal-Class.html#cas",
        "fct-type": "method",
        "title": "cas"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "cas",
        "normalized": "a b-\u003eb-\u003eb-\u003eIO(Bool,b)",
        "package": "IORefCAS",
        "partial": "",
        "signature": "casref a-\u003ea-\u003ea-\u003eIO(Bool,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:newCASable",
      "description": {
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "a -\u003e IO (casref a)",
        "fct-source": "src/Data-CAS-Internal-Class.html#newCASable",
        "fct-type": "method",
        "title": "newCASable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "newCASable",
        "normalized": "a-\u003eIO(b a)",
        "package": "IORefCAS",
        "partial": "CASable",
        "signature": "a-\u003eIO(casref a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:ptrEq",
      "description": {
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-CAS-Internal-Class.html#ptrEq",
        "fct-type": "function",
        "title": "ptrEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "ptrEq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "IORefCAS",
        "partial": "Eq",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:readCASable",
      "description": {
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "casref a -\u003e IO a",
        "fct-source": "src/Data-CAS-Internal-Class.html#readCASable",
        "fct-type": "method",
        "title": "readCASable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "readCASable",
        "normalized": "a b-\u003eIO b",
        "package": "IORefCAS",
        "partial": "CASable",
        "signature": "casref a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:unsafeName",
      "description": {
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-CAS-Internal-Class.html#unsafeName",
        "fct-type": "function",
        "title": "unsafeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "unsafeName",
        "normalized": "a-\u003eInt",
        "package": "IORefCAS",
        "partial": "Name",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:writeCASable",
      "description": {
        "fct-module": "Data.CAS.Internal.Class",
        "fct-package": "IORefCAS",
        "fct-signature": "casref a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-CAS-Internal-Class.html#writeCASable",
        "fct-type": "method",
        "title": "writeCASable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Class",
        "module": "Data.CAS.Internal.Class",
        "name": "writeCASable",
        "normalized": "a b-\u003eb-\u003eIO()",
        "package": "IORefCAS",
        "partial": "CASable",
        "signature": "casref a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an attempt to imitate a CAS using normal Haskell/GHC operations.\n Useful for debugging.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CAS.Internal.Fake",
        "fct-package": "IORefCAS",
        "fct-signature": "module",
        "fct-source": "src/Data-CAS-Internal-Fake.html",
        "fct-type": "module",
        "title": "Fake"
      },
      "index": {
        "description": "This is an attempt to imitate CAS using normal Haskell GHC operations Useful for debugging",
        "hierarchy": "Data CAS Internal Fake",
        "module": "Data.CAS.Internal.Fake",
        "name": "Fake",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "Fake",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#t:CASRef",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of references supporting CAS.\n\u003c/p\u003e",
        "fct-module": "Data.CAS.Internal.Fake",
        "fct-package": "IORefCAS",
        "fct-signature": "data",
        "fct-source": "src/Data-CAS-Internal-Fake.html#CASRef",
        "fct-type": "data",
        "title": "CASRef"
      },
      "index": {
        "description": "The type of references supporting CAS",
        "hierarchy": "Data CAS Internal Fake",
        "module": "Data.CAS.Internal.Fake",
        "name": "CASRef",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "CASRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:atomicModifyIORefCAS",
      "description": {
        "fct-module": "Data.CAS.Internal.Fake",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e IO b",
        "fct-source": "src/Data-CAS-Internal-Fake.html#atomicModifyIORefCAS",
        "fct-type": "function",
        "title": "atomicModifyIORefCAS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Fake",
        "module": "Data.CAS.Internal.Fake",
        "name": "atomicModifyIORefCAS",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
        "package": "IORefCAS",
        "partial": "Modify IORef CAS",
        "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:atomicModifyIORefCAS_",
      "description": {
        "fct-module": "Data.CAS.Internal.Fake",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-CAS-Internal-Fake.html#atomicModifyIORefCAS_",
        "fct-type": "function",
        "title": "atomicModifyIORefCAS_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Fake",
        "module": "Data.CAS.Internal.Fake",
        "name": "atomicModifyIORefCAS_",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "IORefCAS",
        "partial": "Modify IORef CAS",
        "signature": "IORef a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:casIORef",
      "description": {
        "fct-module": "Data.CAS.Internal.Fake",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a -\u003e a -\u003e a -\u003e IO (Bool, a)",
        "fct-source": "src/Data-CAS-Internal-Fake.html#casIORef",
        "fct-type": "function",
        "title": "casIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Fake",
        "module": "Data.CAS.Internal.Fake",
        "name": "casIORef",
        "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
        "package": "IORefCAS",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:ptrEq",
      "description": {
        "fct-module": "Data.CAS.Internal.Fake",
        "fct-package": "IORefCAS",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-CAS-Internal-Class.html#ptrEq",
        "fct-type": "function",
        "title": "ptrEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Fake",
        "module": "Data.CAS.Internal.Fake",
        "name": "ptrEq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "IORefCAS",
        "partial": "Eq",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Foreign.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a version of CAS that works outside of Haskell by using\n   the FFI (and the GCC intrinsics-based \u003ccode\u003e\u003ca\u003eAtomic\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CAS.Internal.Foreign",
        "fct-package": "IORefCAS",
        "fct-signature": "module",
        "fct-source": "src/Data-CAS-Internal-Foreign.html",
        "fct-type": "module",
        "title": "Foreign"
      },
      "index": {
        "description": "This is version of CAS that works outside of Haskell by using the FFI and the GCC intrinsics-based Atomic",
        "hierarchy": "Data CAS Internal Foreign",
        "module": "Data.CAS.Internal.Foreign",
        "name": "Foreign",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "Foreign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Foreign.html#t:CASRef",
      "description": {
        "fct-module": "Data.CAS.Internal.Foreign",
        "fct-package": "IORefCAS",
        "fct-signature": "data",
        "fct-source": "src/Data-CAS-Internal-Foreign.html#CASRef",
        "fct-type": "data",
        "title": "CASRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Foreign",
        "module": "Data.CAS.Internal.Foreign",
        "name": "CASRef",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "CASRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#",
      "description": {
        "fct-module": "Data.CAS.Internal.Native",
        "fct-package": "IORefCAS",
        "fct-signature": "module",
        "fct-source": "src/Data-CAS-Internal-Native.html",
        "fct-type": "module",
        "title": "Native"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Native",
        "module": "Data.CAS.Internal.Native",
        "name": "Native",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "Native",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#t:CASRef",
      "description": {
        "fct-module": "Data.CAS.Internal.Native",
        "fct-package": "IORefCAS",
        "fct-signature": "data",
        "fct-source": "src/Data-CAS-Internal-Native.html#CASRef",
        "fct-type": "data",
        "title": "CASRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Native",
        "module": "Data.CAS.Internal.Native",
        "name": "CASRef",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "CASRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:atomicModifyIORefCAS",
      "description": {
        "fct-descr": "\u003cp\u003eA drop-in replacement for \u003ccode\u003e\u003ca\u003eatomicModifyIORefCAS\u003c/a\u003e\u003c/code\u003e that\n   optimistically attempts to compute the new value and CAS it into\n   place without introducing new thunks or locking anything.  Note\n   that this is more STRICT than its standard counterpart and will only\n   place evaluated (WHNF) values in the IORef.\n\u003c/p\u003e",
        "fct-module": "Data.CAS.Internal.Native",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e IO b",
        "fct-source": "src/Data-CAS-Internal-Native.html#atomicModifyIORefCAS",
        "fct-type": "function",
        "title": "atomicModifyIORefCAS"
      },
      "index": {
        "description": "drop-in replacement for atomicModifyIORefCAS that optimistically attempts to compute the new value and CAS it into place without introducing new thunks or locking anything Note that this is more STRICT than its standard counterpart and will only place evaluated WHNF values in the IORef",
        "hierarchy": "Data CAS Internal Native",
        "module": "Data.CAS.Internal.Native",
        "name": "atomicModifyIORefCAS",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
        "package": "IORefCAS",
        "partial": "Modify IORef CAS",
        "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:atomicModifyIORefCAS_",
      "description": {
        "fct-descr": "\u003cp\u003eA simpler version that modifies the state but does not return anything.\n\u003c/p\u003e",
        "fct-module": "Data.CAS.Internal.Native",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef t -\u003e (t -\u003e t) -\u003e IO ()",
        "fct-source": "src/Data-CAS-Internal-Native.html#atomicModifyIORefCAS_",
        "fct-type": "function",
        "title": "atomicModifyIORefCAS_"
      },
      "index": {
        "description": "simpler version that modifies the state but does not return anything",
        "hierarchy": "Data CAS Internal Native",
        "module": "Data.CAS.Internal.Native",
        "name": "atomicModifyIORefCAS_",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "IORefCAS",
        "partial": "Modify IORef CAS",
        "signature": "IORef t-\u003e(t-\u003et)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:casIORef",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CAS.Internal.Native",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a-\u003e a-\u003e a-\u003e IO (Bool, a)",
        "fct-type": "function",
        "title": "casIORef"
      },
      "index": {
        "description": "Performs machine-level compare and swap operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the current value from the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
        "hierarchy": "Data CAS Internal Native",
        "module": "Data.CAS.Internal.Native",
        "name": "casIORef",
        "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
        "package": "IORefCAS",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:ptrEq",
      "description": {
        "fct-module": "Data.CAS.Internal.Native",
        "fct-package": "IORefCAS",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-CAS-Internal-Class.html#ptrEq",
        "fct-type": "function",
        "title": "ptrEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS Internal Native",
        "module": "Data.CAS.Internal.Native",
        "name": "ptrEq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "IORefCAS",
        "partial": "Eq",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtomic compare and swap for IORefs and STRefs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.CAS",
        "fct-package": "IORefCAS",
        "fct-signature": "module",
        "fct-source": "src/Data-CAS.html",
        "fct-type": "module",
        "title": "CAS"
      },
      "index": {
        "description": "Atomic compare and swap for IORefs and STRefs",
        "hierarchy": "Data CAS",
        "module": "Data.CAS",
        "name": "CAS",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "CAS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#t:CASRef",
      "description": {
        "fct-module": "Data.CAS",
        "fct-package": "IORefCAS",
        "fct-signature": "data",
        "fct-source": "src/Data-CAS-Internal-Native.html#CASRef",
        "fct-type": "data",
        "title": "CASRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS",
        "module": "Data.CAS",
        "name": "CASRef",
        "normalized": "",
        "package": "IORefCAS",
        "partial": "CASRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:atomicModifyIORefCAS",
      "description": {
        "fct-descr": "\u003cp\u003eA drop-in replacement for \u003ccode\u003e\u003ca\u003eatomicModifyIORefCAS\u003c/a\u003e\u003c/code\u003e that\n   optimistically attempts to compute the new value and CAS it into\n   place without introducing new thunks or locking anything.  Note\n   that this is more STRICT than its standard counterpart and will only\n   place evaluated (WHNF) values in the IORef.\n\u003c/p\u003e",
        "fct-module": "Data.CAS",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e IO b",
        "fct-source": "src/Data-CAS-Internal-Native.html#atomicModifyIORefCAS",
        "fct-type": "function",
        "title": "atomicModifyIORefCAS"
      },
      "index": {
        "description": "drop-in replacement for atomicModifyIORefCAS that optimistically attempts to compute the new value and CAS it into place without introducing new thunks or locking anything Note that this is more STRICT than its standard counterpart and will only place evaluated WHNF values in the IORef",
        "hierarchy": "Data CAS",
        "module": "Data.CAS",
        "name": "atomicModifyIORefCAS",
        "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
        "package": "IORefCAS",
        "partial": "Modify IORef CAS",
        "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:atomicModifyIORefCAS_",
      "description": {
        "fct-descr": "\u003cp\u003eA simpler version that modifies the state but does not return anything.\n\u003c/p\u003e",
        "fct-module": "Data.CAS",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef t -\u003e (t -\u003e t) -\u003e IO ()",
        "fct-source": "src/Data-CAS-Internal-Native.html#atomicModifyIORefCAS_",
        "fct-type": "function",
        "title": "atomicModifyIORefCAS_"
      },
      "index": {
        "description": "simpler version that modifies the state but does not return anything",
        "hierarchy": "Data CAS",
        "module": "Data.CAS",
        "name": "atomicModifyIORefCAS_",
        "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "IORefCAS",
        "partial": "Modify IORef CAS",
        "signature": "IORef t-\u003e(t-\u003et)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:casIORef",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.CAS",
        "fct-package": "IORefCAS",
        "fct-signature": "IORef a-\u003e a-\u003e a-\u003e IO (Bool, a)",
        "fct-type": "function",
        "title": "casIORef"
      },
      "index": {
        "description": "Performs machine-level compare and swap operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the current value from the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
        "hierarchy": "Data CAS",
        "module": "Data.CAS",
        "name": "casIORef",
        "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
        "package": "IORefCAS",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:ptrEq",
      "description": {
        "fct-module": "Data.CAS",
        "fct-package": "IORefCAS",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Data-CAS-Internal-Class.html#ptrEq",
        "fct-type": "function",
        "title": "ptrEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data CAS",
        "module": "Data.CAS",
        "name": "ptrEq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "IORefCAS",
        "partial": "Eq",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  }
]