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
        "word": "IORefCAS"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class capturing mutable storage cells that support CAS\n   operations in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CAS.Internal.Class",
          "name": "Class",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Class.html",
          "type": "module"
        },
        "index": {
          "description": "type class capturing mutable storage cells that support CAS operations in the IO monad",
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "Class",
          "package": "IORefCAS",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt would be nice to use an associated type family with this class\n   (for casref), but that would preclude overlapping instances.\n\u003c/p\u003e",
          "module": "Data.CAS.Internal.Class",
          "name": "CASable",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Class.html#CASable",
          "type": "class"
        },
        "index": {
          "description": "It would be nice to use an associated type family with this class for casref but that would preclude overlapping instances",
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "CASable",
          "package": "IORefCAS",
          "partial": "CASable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#t:CASable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Class",
          "name": "cas",
          "package": "IORefCAS",
          "signature": "casref a -\u003e a -\u003e a -\u003e IO (Bool, a)",
          "source": "src/Data-CAS-Internal-Class.html#cas",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "cas",
          "normalized": "a b-\u003eb-\u003eb-\u003eIO(Bool,b)",
          "package": "IORefCAS",
          "signature": "casref a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:cas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Class",
          "name": "newCASable",
          "package": "IORefCAS",
          "signature": "a -\u003e IO (casref a)",
          "source": "src/Data-CAS-Internal-Class.html#newCASable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "newCASable",
          "normalized": "a-\u003eIO(b a)",
          "package": "IORefCAS",
          "partial": "CASable",
          "signature": "a-\u003eIO(casref a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:newCASable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.CAS.Internal.Class\",\"Data.CAS.Internal.Fake\",\"Data.CAS.Internal.Native\",\"Data.CAS\"]",
          "name": "ptrEq",
          "package": "IORefCAS",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-CAS-Internal-Class.html#ptrEq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:ptrEq\",\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:ptrEq\",\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:ptrEq\",\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:ptrEq\"]"
        },
        "index": {
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "ptrEq",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "IORefCAS",
          "partial": "Eq",
          "signature": "a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:ptrEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Class",
          "name": "readCASable",
          "package": "IORefCAS",
          "signature": "casref a -\u003e IO a",
          "source": "src/Data-CAS-Internal-Class.html#readCASable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "readCASable",
          "normalized": "a b-\u003eIO b",
          "package": "IORefCAS",
          "partial": "CASable",
          "signature": "casref a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:readCASable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Class",
          "name": "unsafeName",
          "package": "IORefCAS",
          "signature": "a -\u003e Int",
          "source": "src/Data-CAS-Internal-Class.html#unsafeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "unsafeName",
          "normalized": "a-\u003eInt",
          "package": "IORefCAS",
          "partial": "Name",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:unsafeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Class",
          "name": "writeCASable",
          "package": "IORefCAS",
          "signature": "casref a -\u003e a -\u003e IO ()",
          "source": "src/Data-CAS-Internal-Class.html#writeCASable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data CAS Internal Class",
          "module": "Data.CAS.Internal.Class",
          "name": "writeCASable",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "IORefCAS",
          "partial": "CASable",
          "signature": "casref a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Class.html#v:writeCASable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an attempt to imitate a CAS using normal Haskell/GHC operations.\n Useful for debugging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CAS.Internal.Fake",
          "name": "Fake",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Fake.html",
          "type": "module"
        },
        "index": {
          "description": "This is an attempt to imitate CAS using normal Haskell GHC operations Useful for debugging",
          "hierarchy": "Data CAS Internal Fake",
          "module": "Data.CAS.Internal.Fake",
          "name": "Fake",
          "package": "IORefCAS",
          "partial": "Fake",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of references supporting CAS.\n\u003c/p\u003e",
          "module": "Data.CAS.Internal.Fake",
          "name": "CASRef",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Fake.html#CASRef",
          "type": "data"
        },
        "index": {
          "description": "The type of references supporting CAS",
          "hierarchy": "Data CAS Internal Fake",
          "module": "Data.CAS.Internal.Fake",
          "name": "CASRef",
          "package": "IORefCAS",
          "partial": "CASRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#t:CASRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Fake",
          "name": "atomicModifyIORefCAS",
          "package": "IORefCAS",
          "signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e IO b",
          "source": "src/Data-CAS-Internal-Fake.html#atomicModifyIORefCAS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CAS Internal Fake",
          "module": "Data.CAS.Internal.Fake",
          "name": "atomicModifyIORefCAS",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "package": "IORefCAS",
          "partial": "Modify IORef CAS",
          "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:atomicModifyIORefCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Fake",
          "name": "atomicModifyIORefCAS_",
          "package": "IORefCAS",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-CAS-Internal-Fake.html#atomicModifyIORefCAS_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CAS Internal Fake",
          "module": "Data.CAS.Internal.Fake",
          "name": "atomicModifyIORefCAS_",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "IORefCAS",
          "partial": "Modify IORef CAS",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:atomicModifyIORefCAS_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Fake",
          "name": "casIORef",
          "package": "IORefCAS",
          "signature": "IORef a -\u003e a -\u003e a -\u003e IO (Bool, a)",
          "source": "src/Data-CAS-Internal-Fake.html#casIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data CAS Internal Fake",
          "module": "Data.CAS.Internal.Fake",
          "name": "casIORef",
          "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "package": "IORefCAS",
          "partial": "IORef",
          "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Fake.html#v:casIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a version of CAS that works outside of Haskell by using\n   the FFI (and the GCC intrinsics-based \u003ccode\u003e\u003ca\u003eAtomic\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CAS.Internal.Foreign",
          "name": "Foreign",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Foreign.html",
          "type": "module"
        },
        "index": {
          "description": "This is version of CAS that works outside of Haskell by using the FFI and the GCC intrinsics-based Atomic",
          "hierarchy": "Data CAS Internal Foreign",
          "module": "Data.CAS.Internal.Foreign",
          "name": "Foreign",
          "package": "IORefCAS",
          "partial": "Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Foreign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Foreign",
          "name": "CASRef",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Foreign.html#CASRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CAS Internal Foreign",
          "module": "Data.CAS.Internal.Foreign",
          "name": "CASRef",
          "package": "IORefCAS",
          "partial": "CASRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Foreign.html#t:CASRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Native",
          "name": "Native",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Native.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data CAS Internal Native",
          "module": "Data.CAS.Internal.Native",
          "name": "Native",
          "package": "IORefCAS",
          "partial": "Native",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS.Internal.Native",
          "name": "CASRef",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Native.html#CASRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CAS Internal Native",
          "module": "Data.CAS.Internal.Native",
          "name": "CASRef",
          "package": "IORefCAS",
          "partial": "CASRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#t:CASRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-in replacement for \u003ccode\u003e\u003ca\u003eatomicModifyIORefCAS\u003c/a\u003e\u003c/code\u003e that\n   optimistically attempts to compute the new value and CAS it into\n   place without introducing new thunks or locking anything.  Note\n   that this is more STRICT than its standard counterpart and will only\n   place evaluated (WHNF) values in the IORef.\n\u003c/p\u003e",
          "module": "[\"Data.CAS.Internal.Native\",\"Data.CAS\"]",
          "name": "atomicModifyIORefCAS",
          "package": "IORefCAS",
          "signature": "IORef a -\u003e (a -\u003e (a, b)) -\u003e IO b",
          "source": "src/Data-CAS-Internal-Native.html#atomicModifyIORefCAS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:atomicModifyIORefCAS\",\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:atomicModifyIORefCAS\"]"
        },
        "index": {
          "description": "drop-in replacement for atomicModifyIORefCAS that optimistically attempts to compute the new value and CAS it into place without introducing new thunks or locking anything Note that this is more STRICT than its standard counterpart and will only place evaluated WHNF values in the IORef",
          "hierarchy": "Data CAS Internal Native",
          "module": "Data.CAS.Internal.Native",
          "name": "atomicModifyIORefCAS",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "package": "IORefCAS",
          "partial": "Modify IORef CAS",
          "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:atomicModifyIORefCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simpler version that modifies the state but does not return anything.\n\u003c/p\u003e",
          "module": "[\"Data.CAS.Internal.Native\",\"Data.CAS\"]",
          "name": "atomicModifyIORefCAS_",
          "package": "IORefCAS",
          "signature": "IORef t -\u003e (t -\u003e t) -\u003e IO ()",
          "source": "src/Data-CAS-Internal-Native.html#atomicModifyIORefCAS_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:atomicModifyIORefCAS_\",\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:atomicModifyIORefCAS_\"]"
        },
        "index": {
          "description": "simpler version that modifies the state but does not return anything",
          "hierarchy": "Data CAS Internal Native",
          "module": "Data.CAS.Internal.Native",
          "name": "atomicModifyIORefCAS_",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "IORefCAS",
          "partial": "Modify IORef CAS",
          "signature": "IORef t-\u003e(t-\u003et)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:atomicModifyIORefCAS_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.CAS.Internal.Native\",\"Data.CAS\"]",
          "name": "casIORef",
          "package": "IORefCAS",
          "signature": "IORef a-\u003e a-\u003e a-\u003e IO (Bool, a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:casIORef\",\"http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#v:casIORef\"]"
        },
        "index": {
          "description": "Performs machine-level compare and swap operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the current value from the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
          "hierarchy": "Data CAS Internal Native",
          "module": "Data.CAS.Internal.Native",
          "name": "casIORef",
          "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "package": "IORefCAS",
          "partial": "IORef",
          "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS-Internal-Native.html#v:casIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAtomic compare and swap for IORefs and STRefs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CAS",
          "name": "CAS",
          "package": "IORefCAS",
          "source": "src/Data-CAS.html",
          "type": "module"
        },
        "index": {
          "description": "Atomic compare and swap for IORefs and STRefs",
          "hierarchy": "Data CAS",
          "module": "Data.CAS",
          "name": "CAS",
          "package": "IORefCAS",
          "partial": "CAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.CAS",
          "name": "CASRef",
          "package": "IORefCAS",
          "source": "src/Data-CAS-Internal-Native.html#CASRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data CAS",
          "module": "Data.CAS",
          "name": "CASRef",
          "package": "IORefCAS",
          "partial": "CASRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/IORefCAS/docs/Data-CAS.html#t:CASRef"
      }
    }
  ]
]