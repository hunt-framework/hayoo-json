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
        "word": "atomic-primops"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis version uses a boxed IORef representation, but it can be somewhat cheaper\n than the Refence version because it uses raw CAS rather than full\n atomicModifyIORef.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "IORef",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-IORef.html",
          "type": "module"
        },
        "index": {
          "description": "This version uses boxed IORef representation but it can be somewhat cheaper than the Refence version because it uses raw CAS rather than full atomicModifyIORef",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "IORef",
          "package": "atomic-primops",
          "partial": "IORef",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Counter.IORef",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-IORef.html#AtomicCounter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "partial": "Atomic Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#t:AtomicCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Counter.IORef",
          "name": "CTicket",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-IORef.html#CTicket",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "CTicket",
          "package": "atomic-primops",
          "partial": "CTicket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#t:CTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare and swap for the counter ADT.  Similar behavior to \u003ccode\u003e\u003ca\u003ecasIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "casCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e CTicket -\u003e Int -\u003e IO (Bool, CTicket)",
          "source": "src/Data-Atomics-Counter-IORef.html#casCounter",
          "type": "function"
        },
        "index": {
          "description": "Compare and swap for the counter ADT Similar behavior to casIORef",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "casCounter",
          "normalized": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:casCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry repeatedly until we successfully increment the counter by a given amount.\n Returns the original value of the counter (pre-increment).\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "incrCounter",
          "package": "atomic-primops",
          "signature": "Int -\u003e AtomicCounter -\u003e IO Int",
          "source": "src/Data-Atomics-Counter-IORef.html#incrCounter",
          "type": "function"
        },
        "index": {
          "description": "Try repeatedly until we successfully increment the counter by given amount Returns the original value of the counter pre-increment",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "incrCounter",
          "normalized": "Int-\u003eAtomicCounter-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eAtomicCounter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:incrCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Counter.IORef",
          "name": "incrCounter_",
          "package": "atomic-primops",
          "signature": "Int -\u003e AtomicCounter -\u003e IO ()",
          "source": "src/Data-Atomics-Counter-IORef.html#incrCounter_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "incrCounter_",
          "normalized": "Int-\u003eAtomicCounter-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eAtomicCounter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:incrCounter_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new counter initialized to the given value.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "newCounter",
          "package": "atomic-primops",
          "signature": "Int -\u003e IO AtomicCounter",
          "source": "src/Data-Atomics-Counter-IORef.html#newCounter",
          "type": "function"
        },
        "index": {
          "description": "Create new counter initialized to the given value",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "newCounter",
          "normalized": "Int-\u003eIO AtomicCounter",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eIO AtomicCounter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:newCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque tickets cannot be constructed, but they can be destructed into values.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "peekCTicket",
          "package": "atomic-primops",
          "signature": "CTicket -\u003e Int",
          "source": "src/Data-Atomics-Counter-IORef.html#peekCTicket",
          "type": "function"
        },
        "index": {
          "description": "Opaque tickets cannot be constructed but they can be destructed into values",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "peekCTicket",
          "normalized": "CTicket-\u003eInt",
          "package": "atomic-primops",
          "partial": "CTicket",
          "signature": "CTicket-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:peekCTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereadCounterForCAS\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003epeekCTicket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "readCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e IO Int",
          "source": "src/Data-Atomics-Counter-IORef.html#readCounter",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to readCounterForCAS followed by peekCTicket",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "readCounter",
          "normalized": "AtomicCounter-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:readCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like the \u003ca\u003eData.Atomics\u003c/a\u003e CAS interface, this routine returns an opaque\n ticket that can be used in CAS operations.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "readCounterForCAS",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e IO CTicket",
          "source": "src/Data-Atomics-Counter-IORef.html#readCounterForCAS",
          "type": "function"
        },
        "index": {
          "description": "Just like the Data.Atomics CAS interface this routine returns an opaque ticket that can be used in CAS operations",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "readCounterForCAS",
          "normalized": "AtomicCounter-\u003eIO CTicket",
          "package": "atomic-primops",
          "partial": "Counter For CAS",
          "signature": "AtomicCounter-\u003eIO CTicket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:readCounterForCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a non-atomic write to the counter.  No memory-barrier.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.IORef",
          "name": "writeCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e Int -\u003e IO ()",
          "source": "src/Data-Atomics-Counter-IORef.html#writeCounter",
          "type": "function"
        },
        "index": {
          "description": "Make non-atomic write to the counter No memory-barrier",
          "hierarchy": "Data Atomics Counter IORef",
          "module": "Data.Atomics.Counter.IORef",
          "name": "writeCounter",
          "normalized": "AtomicCounter-\u003eInt-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:writeCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis reference version is implemented with atomicModifyIORef and can be a useful\n fallback if one of the other implementations needs to be debugged for a given\n architecture.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "Reference",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Reference.html",
          "type": "module"
        },
        "index": {
          "description": "This reference version is implemented with atomicModifyIORef and can be useful fallback if one of the other implementations needs to be debugged for given architecture",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "Reference",
          "package": "atomic-primops",
          "partial": "Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Counter.Reference",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Reference.html#AtomicCounter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "partial": "Atomic Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#t:AtomicCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Counter.Reference",
          "name": "CTicket",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Reference.html#CTicket",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "CTicket",
          "package": "atomic-primops",
          "partial": "CTicket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#t:CTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare and swap for the counter ADT.  Similar behavior to \u003ccode\u003ecasIORef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "casCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e CTicket -\u003e Int -\u003e IO (Bool, CTicket)",
          "source": "src/Data-Atomics-Counter-Reference.html#casCounter",
          "type": "function"
        },
        "index": {
          "description": "Compare and swap for the counter ADT Similar behavior to casIORef",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "casCounter",
          "normalized": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:casCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry repeatedly until we successfully increment the counter by a given amount.\n Returns the original value of the counter (pre-increment).\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "incrCounter",
          "package": "atomic-primops",
          "signature": "Int -\u003e AtomicCounter -\u003e IO Int",
          "source": "src/Data-Atomics-Counter-Reference.html#incrCounter",
          "type": "function"
        },
        "index": {
          "description": "Try repeatedly until we successfully increment the counter by given amount Returns the original value of the counter pre-increment",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "incrCounter",
          "normalized": "Int-\u003eAtomicCounter-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eAtomicCounter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:incrCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Counter.Reference",
          "name": "incrCounter_",
          "package": "atomic-primops",
          "signature": "Int -\u003e AtomicCounter -\u003e IO ()",
          "source": "src/Data-Atomics-Counter-Reference.html#incrCounter_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "incrCounter_",
          "normalized": "Int-\u003eAtomicCounter-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eAtomicCounter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:incrCounter_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new counter initialized to the given value.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "newCounter",
          "package": "atomic-primops",
          "signature": "Int -\u003e IO AtomicCounter",
          "source": "src/Data-Atomics-Counter-Reference.html#newCounter",
          "type": "function"
        },
        "index": {
          "description": "Create new counter initialized to the given value",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "newCounter",
          "normalized": "Int-\u003eIO AtomicCounter",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eIO AtomicCounter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:newCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque tickets cannot be constructed, but they can be destructed into values.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "peekCTicket",
          "package": "atomic-primops",
          "signature": "CTicket -\u003e Int",
          "source": "src/Data-Atomics-Counter-Reference.html#peekCTicket",
          "type": "function"
        },
        "index": {
          "description": "Opaque tickets cannot be constructed but they can be destructed into values",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "peekCTicket",
          "normalized": "CTicket-\u003eInt",
          "package": "atomic-primops",
          "partial": "CTicket",
          "signature": "CTicket-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:peekCTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereadCounterForCAS\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003epeekCTicket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "readCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e IO Int",
          "source": "src/Data-Atomics-Counter-Reference.html#readCounter",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to readCounterForCAS followed by peekCTicket",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "readCounter",
          "normalized": "AtomicCounter-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:readCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like the \u003ca\u003eData.Atomics\u003c/a\u003e CAS interface, this routine returns an opaque\n ticket that can be used in CAS operations.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "readCounterForCAS",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e IO CTicket",
          "source": "src/Data-Atomics-Counter-Reference.html#readCounterForCAS",
          "type": "function"
        },
        "index": {
          "description": "Just like the Data.Atomics CAS interface this routine returns an opaque ticket that can be used in CAS operations",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "readCounterForCAS",
          "normalized": "AtomicCounter-\u003eIO CTicket",
          "package": "atomic-primops",
          "partial": "Counter For CAS",
          "signature": "AtomicCounter-\u003eIO CTicket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:readCounterForCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a non-atomic write to the counter.  No memory-barrier.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Reference",
          "name": "writeCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e Int -\u003e IO ()",
          "source": "src/Data-Atomics-Counter-Reference.html#writeCounter",
          "type": "function"
        },
        "index": {
          "description": "Make non-atomic write to the counter No memory-barrier",
          "hierarchy": "Data Atomics Counter Reference",
          "module": "Data.Atomics.Counter.Reference",
          "name": "writeCounter",
          "normalized": "AtomicCounter-\u003eInt-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:writeCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis should be the most efficient implementation of atomic counters.\n   You probably don't need the others!  (Except for testing/debugging.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "Unboxed",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Unboxed.html",
          "type": "module"
        },
        "index": {
          "description": "This should be the most efficient implementation of atomic counters You probably don need the others Except for testing debugging",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "Unboxed",
          "package": "atomic-primops",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of mutable atomic counters.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Unboxed.html#AtomicCounter",
          "type": "data"
        },
        "index": {
          "description": "The type of mutable atomic counters",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "partial": "Atomic Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#t:AtomicCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou should not depend on this type.  It varies between different implementations\n of atomic counters.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "CTicket",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Unboxed.html#CTicket",
          "type": "type"
        },
        "index": {
          "description": "You should not depend on this type It varies between different implementations of atomic counters",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "CTicket",
          "package": "atomic-primops",
          "partial": "CTicket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#t:CTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare and swap for the counter ADT.  Similar behavior to\n \u003ccode\u003e\u003ca\u003ecasIORef\u003c/a\u003e\u003c/code\u003e, in particular, in both success and failure cases it\n returns a ticket that you should use for the next attempt.  (That is, in the\n success case, it actually returns the new value that you provided as input, but in\n ticket form.)\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "casCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e CTicket -\u003e Int -\u003e IO (Bool, CTicket)",
          "source": "src/Data-Atomics-Counter-Unboxed.html#casCounter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:casCounter\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:casCounter\"]"
        },
        "index": {
          "description": "Compare and swap for the counter ADT Similar behavior to casIORef in particular in both success and failure cases it returns ticket that you should use for the next attempt That is in the success case it actually returns the new value that you provided as input but in ticket form",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "casCounter",
          "normalized": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:casCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement the counter by a given amount.  Returns the value AFTER the increment\n   (in contrast with the behavior of the underlying instruction on architectures\n   like x86.)\n\u003c/p\u003e\u003cp\u003eNote that UNLIKE with boxed implementations of counters, where increment is\n   based on CAS, this increment is \u003cem\u003eO(1)\u003c/em\u003e.  Fetch-and-add does not require a retry\n   loop like CAS.\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "incrCounter",
          "package": "atomic-primops",
          "signature": "Int -\u003e AtomicCounter -\u003e IO Int",
          "source": "src/Data-Atomics-Counter-Unboxed.html#incrCounter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:incrCounter\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:incrCounter\"]"
        },
        "index": {
          "description": "Increment the counter by given amount Returns the value AFTER the increment in contrast with the behavior of the underlying instruction on architectures like x86 Note that UNLIKE with boxed implementations of counters where increment is based on CAS this increment is Fetch-and-add does not require retry loop like CAS",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "incrCounter",
          "normalized": "Int-\u003eAtomicCounter-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eAtomicCounter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:incrCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternate version for when you don't care about the old value.\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "incrCounter_",
          "package": "atomic-primops",
          "signature": "Int -\u003e AtomicCounter -\u003e IO ()",
          "source": "src/Data-Atomics-Counter-Unboxed.html#incrCounter_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:incrCounter_\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:incrCounter_\"]"
        },
        "index": {
          "description": "An alternate version for when you don care about the old value",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "incrCounter_",
          "normalized": "Int-\u003eAtomicCounter-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eAtomicCounter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:incrCounter_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new counter initialized to the given value.\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "newCounter",
          "package": "atomic-primops",
          "signature": "Int -\u003e IO AtomicCounter",
          "source": "src/Data-Atomics-Counter-Unboxed.html#newCounter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:newCounter\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:newCounter\"]"
        },
        "index": {
          "description": "Create new counter initialized to the given value",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "newCounter",
          "normalized": "Int-\u003eIO AtomicCounter",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "Int-\u003eIO AtomicCounter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:newCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque tickets cannot be constructed, but they can be destructed into values.\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "peekCTicket",
          "package": "atomic-primops",
          "signature": "CTicket -\u003e Int",
          "source": "src/Data-Atomics-Counter-Unboxed.html#peekCTicket",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:peekCTicket\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:peekCTicket\"]"
        },
        "index": {
          "description": "Opaque tickets cannot be constructed but they can be destructed into values",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "peekCTicket",
          "normalized": "CTicket-\u003eInt",
          "package": "atomic-primops",
          "partial": "CTicket",
          "signature": "CTicket-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:peekCTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereadCounterForCAS\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003epeekCTicket\u003c/a\u003e\u003c/code\u003e.        \n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "readCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e IO Int",
          "source": "src/Data-Atomics-Counter-Unboxed.html#readCounter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:readCounter\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:readCounter\"]"
        },
        "index": {
          "description": "Equivalent to readCounterForCAS followed by peekCTicket",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "readCounter",
          "normalized": "AtomicCounter-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:readCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like the \u003ca\u003eData.Atomics\u003c/a\u003e CAS interface, this routine returns an opaque\n ticket that can be used in CAS operations.  Except for the difference in return\n type, the semantics of this are the same as \u003ccode\u003e\u003ca\u003ereadCounter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "readCounterForCAS",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e IO CTicket",
          "source": "src/Data-Atomics-Counter-Unboxed.html#readCounterForCAS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:readCounterForCAS\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:readCounterForCAS\"]"
        },
        "index": {
          "description": "Just like the Data.Atomics CAS interface this routine returns an opaque ticket that can be used in CAS operations Except for the difference in return type the semantics of this are the same as readCounter",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "readCounterForCAS",
          "normalized": "AtomicCounter-\u003eIO CTicket",
          "package": "atomic-primops",
          "partial": "Counter For CAS",
          "signature": "AtomicCounter-\u003eIO CTicket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:readCounterForCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a non-atomic write to the counter.  No memory-barrier.\n\u003c/p\u003e",
          "module": "[\"Data.Atomics.Counter.Unboxed\",\"Data.Atomics.Counter\"]",
          "name": "writeCounter",
          "package": "atomic-primops",
          "signature": "AtomicCounter -\u003e Int -\u003e IO ()",
          "source": "src/Data-Atomics-Counter-Unboxed.html#writeCounter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:writeCounter\",\"http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#v:writeCounter\"]"
        },
        "index": {
          "description": "Make non-atomic write to the counter No memory-barrier",
          "hierarchy": "Data Atomics Counter Unboxed",
          "module": "Data.Atomics.Counter.Unboxed",
          "name": "writeCounter",
          "normalized": "AtomicCounter-\u003eInt-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Counter",
          "signature": "AtomicCounter-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:writeCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInteger counters providing thread-safe, lock-free mutation functions.\n\u003c/p\u003e\u003cp\u003eWhile this package provides multiple implementations, this module will always\n   expose the default (best) implementation.  Atomic counters are represented by a\n   single memory location, such that built-in processor instructions are sufficient\n   to perform fetch-and-add or compare-and-swap.\n\u003c/p\u003e\u003cp\u003eRemember, contention on such counters should still be minimized!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atomics.Counter",
          "name": "Counter",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter.html",
          "type": "module"
        },
        "index": {
          "description": "Integer counters providing thread-safe lock-free mutation functions While this package provides multiple implementations this module will always expose the default best implementation Atomic counters are represented by single memory location such that built-in processor instructions are sufficient to perform fetch-and-add or compare-and-swap Remember contention on such counters should still be minimized",
          "hierarchy": "Data Atomics Counter",
          "module": "Data.Atomics.Counter",
          "name": "Counter",
          "package": "atomic-primops",
          "partial": "Counter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of mutable atomic counters.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Unboxed.html#AtomicCounter",
          "type": "data"
        },
        "index": {
          "description": "The type of mutable atomic counters",
          "hierarchy": "Data Atomics Counter",
          "module": "Data.Atomics.Counter",
          "name": "AtomicCounter",
          "package": "atomic-primops",
          "partial": "Atomic Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#t:AtomicCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou should not depend on this type.  It varies between different implementations\n of atomic counters.\n\u003c/p\u003e",
          "module": "Data.Atomics.Counter",
          "name": "CTicket",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Counter-Unboxed.html#CTicket",
          "type": "type"
        },
        "index": {
          "description": "You should not depend on this type It varies between different implementations of atomic counters",
          "hierarchy": "Data Atomics Counter",
          "module": "Data.Atomics.Counter",
          "name": "CTicket",
          "package": "atomic-primops",
          "partial": "CTicket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#t:CTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides only the raw primops (and necessary types) for atomic\n operations.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atomics.Internal",
          "name": "Internal",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides only the raw primops and necessary types for atomic operations",
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "Internal",
          "package": "atomic-primops",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen performing compare-and-swaps, the \u003cem\u003eticket\u003c/em\u003e encapsulates proof\n that a thread observed a specific previous value of a mutable\n variable.  It is provided in lieu of the \u003ca\u003eold\u003c/a\u003e value to\n compare-and-swap.\n\u003c/p\u003e\u003cp\u003eDesign note: \u003ccode\u003e\u003ca\u003eTicket\u003c/a\u003e\u003c/code\u003es exist to hide objects from the GHC compiler, which\n can normally perform many optimizations that change pointer equality.  A Ticket,\n on the other hand, is a first-class object that can be handled by the user,\n but will not have its pointer identity changed by compiler optimizations\n (but will of course, change addresses during garbage collection).\n\u003c/p\u003e",
          "module": "Data.Atomics.Internal",
          "name": "Ticket",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Internal.html#Ticket",
          "type": "type"
        },
        "index": {
          "description": "When performing compare-and-swaps the ticket encapsulates proof that thread observed specific previous value of mutable variable It is provided in lieu of the old value to compare-and-swap Design note Ticket exist to hide objects from the GHC compiler which can normally perform many optimizations that change pointer equality Ticket on the other hand is first-class object that can be handled by the user but will not have its pointer identity changed by compiler optimizations but will of course change addresses during garbage collection",
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "Ticket",
          "package": "atomic-primops",
          "partial": "Ticket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#t:Ticket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe, machine-level atomic compare and swap on an element within an Array.  \n\u003c/p\u003e",
          "module": "Data.Atomics.Internal",
          "name": "casArrayTicketed#",
          "package": "atomic-primops",
          "signature": "MutableArray# RealWorld a -\u003e Int# -\u003e Ticket a -\u003e Ticket a -\u003e State# RealWorld -\u003e (#State# RealWorld, Int#, Ticket a#)",
          "source": "src/Data-Atomics-Internal.html#casArrayTicketed%23",
          "type": "function"
        },
        "index": {
          "description": "Unsafe machine-level atomic compare and swap on an element within an Array",
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "casArrayTicketed#",
          "normalized": "MutableArray # RealWorld a-\u003eInt #-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)",
          "package": "atomic-primops",
          "partial": "Array Ticketed",
          "signature": "MutableArray # RealWorld a-\u003eInt #-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:casArrayTicketed-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Internal",
          "name": "casIntArray#",
          "package": "atomic-primops",
          "signature": "MutableByteArray# s -\u003e Int# -\u003e Int# -\u003e Int# -\u003e State# s -\u003e (#State# s, Int##)",
          "source": "src/Data-Atomics-Internal.html#casIntArray%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "casIntArray#",
          "normalized": "MutableByteArray # a-\u003eInt #-\u003eInt #-\u003eInt #-\u003eState # a-\u003e(#State # a,Int # #)",
          "package": "atomic-primops",
          "partial": "Int Array",
          "signature": "MutableByteArray # s-\u003eInt #-\u003eInt #-\u003eInt #-\u003eState # s-\u003e(#State # s,Int # #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:casIntArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Internal",
          "name": "casMutVarTicketed#",
          "package": "atomic-primops",
          "signature": "MutVar# RealWorld a -\u003e Ticket a -\u003e Ticket a -\u003e State# RealWorld -\u003e (#State# RealWorld, Int#, Ticket a#)",
          "source": "src/Data-Atomics-Internal.html#casMutVarTicketed%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "casMutVarTicketed#",
          "normalized": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)",
          "package": "atomic-primops",
          "partial": "Mut Var Ticketed",
          "signature": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:casMutVarTicketed-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Internal",
          "name": "fetchAddIntArray#",
          "package": "atomic-primops",
          "signature": "MutableByteArray# s -\u003e Int# -\u003e Int# -\u003e State# s -\u003e (#State# s, Int##)",
          "source": "src/Data-Atomics-Internal.html#fetchAddIntArray%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "fetchAddIntArray#",
          "normalized": "MutableByteArray # a-\u003eInt #-\u003eInt #-\u003eState # a-\u003e(#State # a,Int # #)",
          "package": "atomic-primops",
          "partial": "Add Int Array",
          "signature": "MutableByteArray # s-\u003eInt #-\u003eInt #-\u003eState # s-\u003e(#State # s,Int # #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:fetchAddIntArray-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Atomics.Internal",
          "name": "readForCAS#",
          "package": "atomic-primops",
          "signature": "MutVar# RealWorld a -\u003e State# RealWorld -\u003e (#State# RealWorld, Ticket a#)",
          "source": "src/Data-Atomics-Internal.html#readForCAS%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Atomics Internal",
          "module": "Data.Atomics.Internal",
          "name": "readForCAS#",
          "normalized": "MutVar # RealWorld a-\u003eState # RealWorld-\u003e(#State # RealWorld,Ticket a #)",
          "package": "atomic-primops",
          "partial": "For CAS",
          "signature": "MutVar # RealWorld a-\u003eState # RealWorld-\u003e(#State # RealWorld,Ticket a #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:readForCAS-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides atomic memory operations on IORefs and Mutable Arrays.\n\u003c/p\u003e\u003cp\u003ePointer equality need not be maintained by a Haskell compiler.  For example, Int\n   values will frequently be boxed and unboxed, changing the pointer identity of\n   the thunk.  To deal with this, the compare-and-swap (CAS) approach used in this\n   module is uses a \u003cem\u003esealed\u003c/em\u003e representation of pointers into the Haskell heap\n   (\u003ccode\u003eTickets\u003c/code\u003e).  Currently, the user cannot coin new tickets, rather a \u003ccode\u003e\u003ca\u003eTicket\u003c/a\u003e\u003c/code\u003e\n   provides evidence of a past observation, and grants permission to make a future\n   change.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Atomics",
          "name": "Atomics",
          "package": "atomic-primops",
          "source": "src/Data-Atomics.html",
          "type": "module"
        },
        "index": {
          "description": "Provides atomic memory operations on IORefs and Mutable Arrays Pointer equality need not be maintained by Haskell compiler For example Int values will frequently be boxed and unboxed changing the pointer identity of the thunk To deal with this the compare-and-swap CAS approach used in this module is uses sealed representation of pointers into the Haskell heap Tickets Currently the user cannot coin new tickets rather Ticket provides evidence of past observation and grants permission to make future change",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "Atomics",
          "package": "atomic-primops",
          "partial": "Atomics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen performing compare-and-swaps, the \u003cem\u003eticket\u003c/em\u003e encapsulates proof\n that a thread observed a specific previous value of a mutable\n variable.  It is provided in lieu of the \u003ca\u003eold\u003c/a\u003e value to\n compare-and-swap.\n\u003c/p\u003e\u003cp\u003eDesign note: \u003ccode\u003e\u003ca\u003eTicket\u003c/a\u003e\u003c/code\u003es exist to hide objects from the GHC compiler, which\n can normally perform many optimizations that change pointer equality.  A Ticket,\n on the other hand, is a first-class object that can be handled by the user,\n but will not have its pointer identity changed by compiler optimizations\n (but will of course, change addresses during garbage collection).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "Ticket",
          "package": "atomic-primops",
          "source": "src/Data-Atomics-Internal.html#Ticket",
          "type": "type"
        },
        "index": {
          "description": "When performing compare-and-swaps the ticket encapsulates proof that thread observed specific previous value of mutable variable It is provided in lieu of the old value to compare-and-swap Design note Ticket exist to hide objects from the GHC compiler which can normally perform many optimizations that change pointer equality Ticket on the other hand is first-class object that can be handled by the user but will not have its pointer identity changed by compiler optimizations but will of course change addresses during garbage collection",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "Ticket",
          "package": "atomic-primops",
          "partial": "Ticket",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#t:Ticket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-in replacement for \u003ccode\u003e\u003ca\u003eatomicModifyIORefCAS\u003c/a\u003e\u003c/code\u003e that\n   optimistically attempts to compute the new value and CAS it into\n   place without introducing new thunks or locking anything.  Note\n   that this is more STRICT than its standard counterpart and will only\n   place evaluated (WHNF) values in the IORef.\n\u003c/p\u003e\u003cp\u003eThe upside is that sometimes we see a performance benefit.  \n   The downside is that this version is speculative -- when it \n   retries, it must reexecute the compution.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "atomicModifyIORefCAS",
          "package": "atomic-primops",
          "signature": "IORef a-\u003e (a -\u003e (a, b))-\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "drop-in replacement for atomicModifyIORefCAS that optimistically attempts to compute the new value and CAS it into place without introducing new thunks or locking anything Note that this is more STRICT than its standard counterpart and will only place evaluated WHNF values in the IORef The upside is that sometimes we see performance benefit The downside is that this version is speculative when it retries it must reexecute the compution",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "atomicModifyIORefCAS",
          "normalized": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "package": "atomic-primops",
          "partial": "Modify IORef CAS",
          "signature": "IORef a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:atomicModifyIORefCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simpler version that modifies the state but does not return anything.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "atomicModifyIORefCAS_",
          "package": "atomic-primops",
          "signature": "IORef t -\u003e (t -\u003e t) -\u003e IO ()",
          "source": "src/Data-Atomics.html#atomicModifyIORefCAS_",
          "type": "function"
        },
        "index": {
          "description": "simpler version that modifies the state but does not return anything",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "atomicModifyIORefCAS_",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "atomic-primops",
          "partial": "Modify IORef CAS",
          "signature": "IORef t-\u003e(t-\u003et)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:atomicModifyIORefCAS_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare-and-swap.  Follows the same rules as \u003ccode\u003e\u003ca\u003ecasIORef\u003c/a\u003e\u003c/code\u003e, returning the ticket for\n   then next operation.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casArrayElem",
          "package": "atomic-primops",
          "signature": "MutableArray RealWorld a -\u003e Int -\u003e Ticket a -\u003e a -\u003e IO (Bool, Ticket a)",
          "source": "src/Data-Atomics.html#casArrayElem",
          "type": "function"
        },
        "index": {
          "description": "Compare-and-swap Follows the same rules as casIORef returning the ticket for then next operation",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casArrayElem",
          "normalized": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
          "package": "atomic-primops",
          "partial": "Array Elem",
          "signature": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casArrayElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant takes two tickets: the \u003ccode\u003enew\u003c/code\u003e value is a ticket rather than an\n arbitrary, lifted, Haskell value.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casArrayElem2",
          "package": "atomic-primops",
          "signature": "MutableArray RealWorld a -\u003e Int -\u003e Ticket a -\u003e Ticket a -\u003e IO (Bool, Ticket a)",
          "source": "src/Data-Atomics.html#casArrayElem2",
          "type": "function"
        },
        "index": {
          "description": "This variant takes two tickets the new value is ticket rather than an arbitrary lifted Haskell value",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casArrayElem2",
          "normalized": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
          "package": "atomic-primops",
          "partial": "Array Elem",
          "signature": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casArrayElem2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare and swap on word-sized chunks of a byte-array.  For indexing purposes\n the bytearray is treated as an array of words (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es).  Note that UNLIKE\n \u003ccode\u003e\u003ca\u003ecasIORef\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003ecasArrayTicketed\u003c/code\u003e, this does not need to operate on tickets.\n\u003c/p\u003e\u003cp\u003eFurther, this version always returns the \u003cem\u003eold value\u003c/em\u003e, that was read from the array during\n the CAS operation.  That is, it follows the normal protocol for CAS operations\n (and matches the underlying instruction on most architectures).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casByteArrayInt",
          "package": "atomic-primops",
          "signature": "MutableByteArray RealWorld -\u003e Int -\u003e Int -\u003e Int -\u003e IO Int",
          "source": "src/Data-Atomics.html#casByteArrayInt",
          "type": "function"
        },
        "index": {
          "description": "Compare and swap on word-sized chunks of byte-array For indexing purposes the bytearray is treated as an array of words Int Note that UNLIKE casIORef and casArrayTicketed this does not need to operate on tickets Further this version always returns the old value that was read from the array during the CAS operation That is it follows the normal protocol for CAS operations and matches the underlying instruction on most architectures",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casByteArrayInt",
          "normalized": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Byte Array Int",
          "signature": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casByteArrayInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a machine-level compare and swap (CAS) operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the most \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n Note that this differs from the more common CAS behavior, which is to\n return the \u003cem\u003eold\u003c/em\u003e value before the CAS occured.\n\u003c/p\u003e\u003cp\u003eThe reason for the difference is the ticket API.  This function always returns the\n ticket that you should use in your next CAS attempt.  In case of success, this ticket\n corresponds to the \u003ccode\u003enew\u003c/code\u003e value which you yourself installed in the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e, whereas\n in the case of failure it represents the preexisting value currently in the IORef. \n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.  However, the ticket API absolves\n the user of this module from needing to worry about the pointer equality of their\n values, which in general requires reasoning about the details of the Haskell\n implementation (GHC).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casIORef",
          "package": "atomic-primops",
          "signature": "IORef a-\u003e Ticket a-\u003e a-\u003e IO (Bool, Ticket a)",
          "type": "function"
        },
        "index": {
          "description": "Performs machine-level compare and swap CAS operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the most current value from the IORef Note that this differs from the more common CAS behavior which is to return the old value before the CAS occured The reason for the difference is the ticket API This function always returns the ticket that you should use in your next CAS attempt In case of success this ticket corresponds to the new value which you yourself installed in the IORef whereas in the case of failure it represents the preexisting value currently in the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality However the ticket API absolves the user of this module from needing to worry about the pointer equality of their values which in general requires reasoning about the details of the Haskell implementation GHC",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casIORef",
          "normalized": "IORef a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
          "package": "atomic-primops",
          "partial": "IORef",
          "signature": "IORef a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant takes two tickets, i.e. the \u003ccode\u003enew\u003c/code\u003e value is a ticket rather than an\n arbitrary, lifted, Haskell value.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casIORef2",
          "package": "atomic-primops",
          "signature": "IORef a-\u003e Ticket a-\u003e Ticket a-\u003e IO (Bool, Ticket a)",
          "type": "function"
        },
        "index": {
          "description": "This variant takes two tickets i.e the new value is ticket rather than an arbitrary lifted Haskell value",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casIORef2",
          "normalized": "IORef a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
          "package": "atomic-primops",
          "partial": "IORef",
          "signature": "IORef a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casIORef2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutVar counterpart of \u003ccode\u003e\u003ca\u003ecasIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casMutVar",
          "package": "atomic-primops",
          "signature": "MutVar# RealWorld a -\u003e Ticket a -\u003e a -\u003e IO (Bool, Ticket a)",
          "source": "src/Data-Atomics.html#casMutVar",
          "type": "function"
        },
        "index": {
          "description": "MutVar counterpart of casIORef",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casMutVar",
          "normalized": "MutVar # RealWorld a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
          "package": "atomic-primops",
          "partial": "Mut Var",
          "signature": "MutVar # RealWorld a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casMutVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant takes two tickets, i.e. the \u003ccode\u003enew\u003c/code\u003e value is a ticket rather than an\n arbitrary, lifted, Haskell value.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "casMutVar2",
          "package": "atomic-primops",
          "signature": "MutVar# RealWorld a -\u003e Ticket a -\u003e Ticket a -\u003e IO (Bool, Ticket a)",
          "source": "src/Data-Atomics.html#casMutVar2",
          "type": "function"
        },
        "index": {
          "description": "This variant takes two tickets i.e the new value is ticket rather than an arbitrary lifted Haskell value",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "casMutVar2",
          "normalized": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
          "package": "atomic-primops",
          "partial": "Mut Var",
          "signature": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casMutVar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomically add to a word of memory within a \u003ccode\u003e\u003ca\u003eMutableByteArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function returns the NEW value of the location after the increment.\n   Thus, it is a bit misnamed, and in other contexts might be called \u003ca\u003eadd-and-fetch\u003c/a\u003e,\n   such as in GCC's \u003ccode\u003e__sync_add_and_fetch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "fetchAddByteArrayInt",
          "package": "atomic-primops",
          "signature": "MutableByteArray RealWorld -\u003e Int -\u003e Int -\u003e IO Int",
          "source": "src/Data-Atomics.html#fetchAddByteArrayInt",
          "type": "function"
        },
        "index": {
          "description": "Atomically add to word of memory within MutableByteArray This function returns the NEW value of the location after the increment Thus it is bit misnamed and in other contexts might be called add-and-fetch such as in GCC sync add and fetch",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "fetchAddByteArrayInt",
          "normalized": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eIO Int",
          "package": "atomic-primops",
          "partial": "Add Byte Array Int",
          "signature": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:fetchAddByteArrayInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory barrier implemented by the GHC rts (see SMP.h).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "loadLoadBarrier",
          "package": "atomic-primops",
          "signature": "IO ()",
          "source": "src/Data-Atomics.html#loadLoadBarrier",
          "type": "function"
        },
        "index": {
          "description": "Memory barrier implemented by the GHC rts see SMP.h",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "loadLoadBarrier",
          "normalized": "IO()",
          "package": "atomic-primops",
          "partial": "Load Barrier",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:loadLoadBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ticket contains or can get the usable Haskell value.\n   This function does just that.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "peekTicket",
          "package": "atomic-primops",
          "signature": "Ticket a -\u003e a",
          "source": "src/Data-Atomics.html#peekTicket",
          "type": "function"
        },
        "index": {
          "description": "ticket contains or can get the usable Haskell value This function does just that",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "peekTicket",
          "normalized": "Ticket a-\u003ea",
          "package": "atomic-primops",
          "partial": "Ticket",
          "signature": "Ticket a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:peekTicket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary processor load instruction (non-atomic, not implying any memory barriers).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "readArrayElem",
          "package": "atomic-primops",
          "signature": "forall a.  MutableArray RealWorld a -\u003e Int -\u003e IO (Ticket a)",
          "source": "src/Data-Atomics.html#readArrayElem",
          "type": "function"
        },
        "index": {
          "description": "Ordinary processor load instruction non-atomic not implying any memory barriers",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "readArrayElem",
          "normalized": "a b MutableArray RealWorld c-\u003eInt-\u003eIO(Ticket c)",
          "package": "atomic-primops",
          "partial": "Array Elem",
          "signature": "forall a. MutableArray RealWorld a-\u003eInt-\u003eIO(Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:readArrayElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdinary processor load instruction (non-atomic, not implying any memory barriers).\n\u003c/p\u003e\u003cp\u003eThe difference between this function and \u003ccode\u003e\u003ca\u003ereadIORef\u003c/a\u003e\u003c/code\u003e, is that it returns a \u003cem\u003eticket\u003c/em\u003e,\n   for use in future compare-and-swap operations.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "readForCAS",
          "package": "atomic-primops",
          "signature": "IORef a -\u003e IO (Ticket a)",
          "source": "src/Data-Atomics.html#readForCAS",
          "type": "function"
        },
        "index": {
          "description": "Ordinary processor load instruction non-atomic not implying any memory barriers The difference between this function and readIORef is that it returns ticket for use in future compare-and-swap operations",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "readForCAS",
          "normalized": "IORef a-\u003eIO(Ticket a)",
          "package": "atomic-primops",
          "partial": "For CAS",
          "signature": "IORef a-\u003eIO(Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:readForCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereadForCAS\u003c/a\u003e\u003c/code\u003e, but for \u003ccode\u003e\u003ca\u003eMutVar#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "readMutVarForCAS",
          "package": "atomic-primops",
          "signature": "MutVar# RealWorld a -\u003e IO (Ticket a)",
          "source": "src/Data-Atomics.html#readMutVarForCAS",
          "type": "function"
        },
        "index": {
          "description": "Like readForCAS but for MutVar",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "readMutVarForCAS",
          "normalized": "MutVar # RealWorld a-\u003eIO(Ticket a)",
          "package": "atomic-primops",
          "partial": "Mut Var For CAS",
          "signature": "MutVar # RealWorld a-\u003eIO(Ticket a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:readMutVarForCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory barrier implemented by the GHC rts (see SMP.h).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "storeLoadBarrier",
          "package": "atomic-primops",
          "signature": "IO ()",
          "source": "src/Data-Atomics.html#storeLoadBarrier",
          "type": "function"
        },
        "index": {
          "description": "Memory barrier implemented by the GHC rts see SMP.h",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "storeLoadBarrier",
          "normalized": "IO()",
          "package": "atomic-primops",
          "partial": "Load Barrier",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:storeLoadBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory barrier implemented by the GHC rts (see SMP.h).\n\u003c/p\u003e",
          "module": "Data.Atomics",
          "name": "writeBarrier",
          "package": "atomic-primops",
          "signature": "IO ()",
          "source": "src/Data-Atomics.html#writeBarrier",
          "type": "function"
        },
        "index": {
          "description": "Memory barrier implemented by the GHC rts see SMP.h",
          "hierarchy": "Data Atomics",
          "module": "Data.Atomics",
          "name": "writeBarrier",
          "normalized": "IO()",
          "package": "atomic-primops",
          "partial": "Barrier",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:writeBarrier"
      }
    }
  ]
]