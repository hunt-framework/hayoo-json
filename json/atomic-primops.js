[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis version uses a boxed IORef representation, but it can be somewhat cheaper\n than the Refence version because it uses raw CAS rather than full\n atomicModifyIORef.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "module",
        "fct-source": "src/Data-Atomics-Counter-IORef.html",
        "fct-type": "module",
        "title": "IORef"
      },
      "index": {
        "description": "This version uses boxed IORef representation but it can be somewhat cheaper than the Refence version because it uses raw CAS rather than full atomicModifyIORef",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "IORef",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#t:AtomicCounter",
      "description": {
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "data",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#AtomicCounter",
        "fct-type": "data",
        "title": "AtomicCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "AtomicCounter",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Atomic Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#t:CTicket",
      "description": {
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "type",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#CTicket",
        "fct-type": "type",
        "title": "CTicket"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "CTicket",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "CTicket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:casCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCompare and swap for the counter ADT.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e CTicket -\u003e Int -\u003e IO (Bool, CTicket)",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#casCounter",
        "fct-type": "function",
        "title": "casCounter"
      },
      "index": {
        "description": "Compare and swap for the counter ADT",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "casCounter",
        "normalized": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:incrCounter",
      "description": {
        "fct-descr": "\u003cp\u003eTry repeatedly until we successfully increment the counter by a given amount.\n Returns the original value of the counter (pre-increment).\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e AtomicCounter -\u003e IO Int",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#incrCounter",
        "fct-type": "function",
        "title": "incrCounter"
      },
      "index": {
        "description": "Try repeatedly until we successfully increment the counter by given amount Returns the original value of the counter pre-increment",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "incrCounter",
        "normalized": "Int-\u003eAtomicCounter-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eAtomicCounter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:incrCounter_",
      "description": {
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e AtomicCounter -\u003e IO ()",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#incrCounter_",
        "fct-type": "function",
        "title": "incrCounter_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "incrCounter_",
        "normalized": "Int-\u003eAtomicCounter-\u003eIO()",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eAtomicCounter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:newCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new counter initialized to the given value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e IO AtomicCounter",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#newCounter",
        "fct-type": "function",
        "title": "newCounter"
      },
      "index": {
        "description": "Create new counter initialized to the given value",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "newCounter",
        "normalized": "Int-\u003eIO AtomicCounter",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eIO AtomicCounter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:peekCTicket",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque tickets cannot be constructed, but they can be destructed into values.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "CTicket -\u003e Int",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#peekCTicket",
        "fct-type": "function",
        "title": "peekCTicket"
      },
      "index": {
        "description": "Opaque tickets cannot be constructed but they can be destructed into values",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "peekCTicket",
        "normalized": "CTicket-\u003eInt",
        "package": "atomic-primops",
        "partial": "CTicket",
        "signature": "CTicket-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:readCounter",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereadCounterForCAS\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003epeekCTicket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e IO Int",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#readCounter",
        "fct-type": "function",
        "title": "readCounter"
      },
      "index": {
        "description": "Equivalent to readCounterForCAS followed by peekCTicket",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "readCounter",
        "normalized": "AtomicCounter-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:readCounterForCAS",
      "description": {
        "fct-descr": "\u003cp\u003eJust like the \u003ca\u003eData.Atomics\u003c/a\u003e CAS interface, this routine returns an opaque\n ticket that can be used in CAS operations.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e IO CTicket",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#readCounterForCAS",
        "fct-type": "function",
        "title": "readCounterForCAS"
      },
      "index": {
        "description": "Just like the Data.Atomics CAS interface this routine returns an opaque ticket that can be used in CAS operations",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "readCounterForCAS",
        "normalized": "AtomicCounter-\u003eIO CTicket",
        "package": "atomic-primops",
        "partial": "Counter For CAS",
        "signature": "AtomicCounter-\u003eIO CTicket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-IORef.html#v:writeCounter",
      "description": {
        "fct-descr": "\u003cp\u003eMake a non-atomic write to the counter.  No memory-barrier.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.IORef",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e Int -\u003e IO ()",
        "fct-source": "src/Data-Atomics-Counter-IORef.html#writeCounter",
        "fct-type": "function",
        "title": "writeCounter"
      },
      "index": {
        "description": "Make non-atomic write to the counter No memory-barrier",
        "hierarchy": "Data Atomics Counter IORef",
        "module": "Data.Atomics.Counter.IORef",
        "name": "writeCounter",
        "normalized": "AtomicCounter-\u003eInt-\u003eIO()",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis reference version is implemented with atomicModifyIORef and can be a useful\n fallback if one of the other implementations needs to be debugged for a given\n architecture.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "module",
        "fct-source": "src/Data-Atomics-Counter-Reference.html",
        "fct-type": "module",
        "title": "Reference"
      },
      "index": {
        "description": "This reference version is implemented with atomicModifyIORef and can be useful fallback if one of the other implementations needs to be debugged for given architecture",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "Reference",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#t:AtomicCounter",
      "description": {
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "data",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#AtomicCounter",
        "fct-type": "data",
        "title": "AtomicCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "AtomicCounter",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Atomic Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#t:CTicket",
      "description": {
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "type",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#CTicket",
        "fct-type": "type",
        "title": "CTicket"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "CTicket",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "CTicket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:casCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCompare and swap for the counter ADT.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e CTicket -\u003e Int -\u003e IO (Bool, CTicket)",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#casCounter",
        "fct-type": "function",
        "title": "casCounter"
      },
      "index": {
        "description": "Compare and swap for the counter ADT",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "casCounter",
        "normalized": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:incrCounter",
      "description": {
        "fct-descr": "\u003cp\u003eTry repeatedly until we successfully increment the counter by a given amount.\n Returns the original value of the counter (pre-increment).\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e AtomicCounter -\u003e IO Int",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#incrCounter",
        "fct-type": "function",
        "title": "incrCounter"
      },
      "index": {
        "description": "Try repeatedly until we successfully increment the counter by given amount Returns the original value of the counter pre-increment",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "incrCounter",
        "normalized": "Int-\u003eAtomicCounter-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eAtomicCounter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:incrCounter_",
      "description": {
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e AtomicCounter -\u003e IO ()",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#incrCounter_",
        "fct-type": "function",
        "title": "incrCounter_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "incrCounter_",
        "normalized": "Int-\u003eAtomicCounter-\u003eIO()",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eAtomicCounter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:newCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new counter initialized to the given value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e IO AtomicCounter",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#newCounter",
        "fct-type": "function",
        "title": "newCounter"
      },
      "index": {
        "description": "Create new counter initialized to the given value",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "newCounter",
        "normalized": "Int-\u003eIO AtomicCounter",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eIO AtomicCounter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:peekCTicket",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque tickets cannot be constructed, but they can be destructed into values.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "CTicket -\u003e Int",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#peekCTicket",
        "fct-type": "function",
        "title": "peekCTicket"
      },
      "index": {
        "description": "Opaque tickets cannot be constructed but they can be destructed into values",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "peekCTicket",
        "normalized": "CTicket-\u003eInt",
        "package": "atomic-primops",
        "partial": "CTicket",
        "signature": "CTicket-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:readCounter",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereadCounterForCAS\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003epeekCTicket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e IO Int",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#readCounter",
        "fct-type": "function",
        "title": "readCounter"
      },
      "index": {
        "description": "Equivalent to readCounterForCAS followed by peekCTicket",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "readCounter",
        "normalized": "AtomicCounter-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:readCounterForCAS",
      "description": {
        "fct-descr": "\u003cp\u003eJust like the \u003ca\u003eData.Atomics\u003c/a\u003e CAS interface, this routine returns an opaque\n ticket that can be used in CAS operations.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e IO CTicket",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#readCounterForCAS",
        "fct-type": "function",
        "title": "readCounterForCAS"
      },
      "index": {
        "description": "Just like the Data.Atomics CAS interface this routine returns an opaque ticket that can be used in CAS operations",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "readCounterForCAS",
        "normalized": "AtomicCounter-\u003eIO CTicket",
        "package": "atomic-primops",
        "partial": "Counter For CAS",
        "signature": "AtomicCounter-\u003eIO CTicket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Reference.html#v:writeCounter",
      "description": {
        "fct-descr": "\u003cp\u003eMake a non-atomic write to the counter.  No memory-barrier.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Reference",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e Int -\u003e IO ()",
        "fct-source": "src/Data-Atomics-Counter-Reference.html#writeCounter",
        "fct-type": "function",
        "title": "writeCounter"
      },
      "index": {
        "description": "Make non-atomic write to the counter No memory-barrier",
        "hierarchy": "Data Atomics Counter Reference",
        "module": "Data.Atomics.Counter.Reference",
        "name": "writeCounter",
        "normalized": "AtomicCounter-\u003eInt-\u003eIO()",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#",
      "description": {
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "module",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html",
        "fct-type": "module",
        "title": "Unboxed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#t:AtomicCounter",
      "description": {
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "data",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#AtomicCounter",
        "fct-type": "data",
        "title": "AtomicCounter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "AtomicCounter",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Atomic Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#t:CTicket",
      "description": {
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "type",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#CTicket",
        "fct-type": "type",
        "title": "CTicket"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "CTicket",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "CTicket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:casCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCompare and swap for the counter ADT.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e CTicket -\u003e Int -\u003e IO (Bool, CTicket)",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#casCounter",
        "fct-type": "function",
        "title": "casCounter"
      },
      "index": {
        "description": "Compare and swap for the counter ADT",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "casCounter",
        "normalized": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eCTicket-\u003eInt-\u003eIO(Bool,CTicket)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:incrCounter",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement the counter by a given amount.  Returns the value AFTER the increment\n   (in contrast with the behavior of the underlying instruction on architectures\n   like x86.)\n\u003c/p\u003e\u003cp\u003eNote that UNLIKE with boxed implementations of counters, where increment is\n   based on CAS, this increment is \u003cem\u003eO(1)\u003c/em\u003e.  Fetch-and-add does not require a retry\n   loop like CAS.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e AtomicCounter -\u003e IO Int",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#incrCounter",
        "fct-type": "function",
        "title": "incrCounter"
      },
      "index": {
        "description": "Increment the counter by given amount Returns the value AFTER the increment in contrast with the behavior of the underlying instruction on architectures like x86 Note that UNLIKE with boxed implementations of counters where increment is based on CAS this increment is Fetch-and-add does not require retry loop like CAS",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "incrCounter",
        "normalized": "Int-\u003eAtomicCounter-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eAtomicCounter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:incrCounter_",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternate version for when you don't care about the old value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e AtomicCounter -\u003e IO ()",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#incrCounter_",
        "fct-type": "function",
        "title": "incrCounter_"
      },
      "index": {
        "description": "An alternate version for when you don care about the old value",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "incrCounter_",
        "normalized": "Int-\u003eAtomicCounter-\u003eIO()",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eAtomicCounter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:newCounter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new counter initialized to the given value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "Int -\u003e IO AtomicCounter",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#newCounter",
        "fct-type": "function",
        "title": "newCounter"
      },
      "index": {
        "description": "Create new counter initialized to the given value",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "newCounter",
        "normalized": "Int-\u003eIO AtomicCounter",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "Int-\u003eIO AtomicCounter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:peekCTicket",
      "description": {
        "fct-descr": "\u003cp\u003eOpaque tickets cannot be constructed, but they can be destructed into values.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "CTicket -\u003e Int",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#peekCTicket",
        "fct-type": "function",
        "title": "peekCTicket"
      },
      "index": {
        "description": "Opaque tickets cannot be constructed but they can be destructed into values",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "peekCTicket",
        "normalized": "CTicket-\u003eInt",
        "package": "atomic-primops",
        "partial": "CTicket",
        "signature": "CTicket-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:readCounter",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ereadCounterForCAS\u003c/a\u003e\u003c/code\u003e followed by \u003ccode\u003e\u003ca\u003epeekCTicket\u003c/a\u003e\u003c/code\u003e.        \n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e IO Int",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#readCounter",
        "fct-type": "function",
        "title": "readCounter"
      },
      "index": {
        "description": "Equivalent to readCounterForCAS followed by peekCTicket",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "readCounter",
        "normalized": "AtomicCounter-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:readCounterForCAS",
      "description": {
        "fct-descr": "\u003cp\u003eJust like the \u003ca\u003eData.Atomics\u003c/a\u003e CAS interface, this routine returns an opaque\n ticket that can be used in CAS operations.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e IO CTicket",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#readCounterForCAS",
        "fct-type": "function",
        "title": "readCounterForCAS"
      },
      "index": {
        "description": "Just like the Data.Atomics CAS interface this routine returns an opaque ticket that can be used in CAS operations",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "readCounterForCAS",
        "normalized": "AtomicCounter-\u003eIO CTicket",
        "package": "atomic-primops",
        "partial": "Counter For CAS",
        "signature": "AtomicCounter-\u003eIO CTicket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter-Unboxed.html#v:writeCounter",
      "description": {
        "fct-descr": "\u003cp\u003eMake a non-atomic write to the counter.  No memory-barrier.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Counter.Unboxed",
        "fct-package": "atomic-primops",
        "fct-signature": "AtomicCounter -\u003e Int -\u003e IO ()",
        "fct-source": "src/Data-Atomics-Counter-Unboxed.html#writeCounter",
        "fct-type": "function",
        "title": "writeCounter"
      },
      "index": {
        "description": "Make non-atomic write to the counter No memory-barrier",
        "hierarchy": "Data Atomics Counter Unboxed",
        "module": "Data.Atomics.Counter.Unboxed",
        "name": "writeCounter",
        "normalized": "AtomicCounter-\u003eInt-\u003eIO()",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": "AtomicCounter-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Counter.html#",
      "description": {
        "fct-module": "Data.Atomics.Counter",
        "fct-package": "atomic-primops",
        "fct-signature": "module",
        "fct-source": "src/Data-Atomics-Counter.html",
        "fct-type": "module",
        "title": "Counter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Counter",
        "module": "Data.Atomics.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides only the raw primops (and necessary types) for atomic\n operations.  \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "module",
        "fct-source": "src/Data-Atomics-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module provides only the raw primops and necessary types for atomic operations",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#t:Ticket",
      "description": {
        "fct-descr": "\u003cp\u003eWhen performing compare-and-swaps, the \u003cem\u003eticket\u003c/em\u003e encapsulates proof\n that a thread observed a specific previous value of a mutable\n variable.  It is provided in lieu of the \u003ca\u003eold\u003c/a\u003e value to\n compare-and-swap.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "type",
        "fct-source": "src/Data-Atomics-Internal.html#Ticket",
        "fct-type": "type",
        "title": "Ticket"
      },
      "index": {
        "description": "When performing compare-and-swaps the ticket encapsulates proof that thread observed specific previous value of mutable variable It is provided in lieu of the old value to compare-and-swap",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "Ticket",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Ticket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:casArrayTicketed-35-",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe, machine-level atomic compare and swap on an element within an Array.  \n\u003c/p\u003e",
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableArray# RealWorld a -\u003e Int# -\u003e Ticket a -\u003e Ticket a -\u003e State# RealWorld -\u003e (#State# RealWorld, Int#, Ticket a#)",
        "fct-source": "src/Data-Atomics-Internal.html#casArrayTicketed%23",
        "fct-type": "function",
        "title": "casArrayTicketed#"
      },
      "index": {
        "description": "Unsafe machine-level atomic compare and swap on an element within an Array",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "casArrayTicketed#",
        "normalized": "MutableArray # RealWorld a-\u003eInt #-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)",
        "package": "atomic-primops",
        "partial": "Array Ticketed",
        "signature": "MutableArray # RealWorld a-\u003eInt #-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:casIntArray-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableByteArray# s -\u003e Int# -\u003e Int# -\u003e Int# -\u003e State# s -\u003e (#State# s, Int##)",
        "fct-source": "src/Data-Atomics-Internal.html#casIntArray%23",
        "fct-type": "function",
        "title": "casIntArray#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "casIntArray#",
        "normalized": "MutableByteArray # a-\u003eInt #-\u003eInt #-\u003eInt #-\u003eState # a-\u003e(#State # a,Int # #)",
        "package": "atomic-primops",
        "partial": "Int Array",
        "signature": "MutableByteArray # s-\u003eInt #-\u003eInt #-\u003eInt #-\u003eState # s-\u003e(#State # s,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:casMutVarTicketed-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "MutVar# RealWorld a -\u003e Ticket a -\u003e Ticket a -\u003e State# RealWorld -\u003e (#State# RealWorld, Int#, Ticket a#)",
        "fct-source": "src/Data-Atomics-Internal.html#casMutVarTicketed%23",
        "fct-type": "function",
        "title": "casMutVarTicketed#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "casMutVarTicketed#",
        "normalized": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)",
        "package": "atomic-primops",
        "partial": "Mut Var Ticketed",
        "signature": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eState # RealWorld-\u003e(#State # RealWorld,Int #,Ticket a #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:fetchAddIntArray-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableByteArray# s -\u003e Int# -\u003e Int# -\u003e State# s -\u003e (#State# s, Int##)",
        "fct-source": "src/Data-Atomics-Internal.html#fetchAddIntArray%23",
        "fct-type": "function",
        "title": "fetchAddIntArray#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "fetchAddIntArray#",
        "normalized": "MutableByteArray # a-\u003eInt #-\u003eInt #-\u003eState # a-\u003e(#State # a,Int # #)",
        "package": "atomic-primops",
        "partial": "Add Int Array",
        "signature": "MutableByteArray # s-\u003eInt #-\u003eInt #-\u003eState # s-\u003e(#State # s,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:readForCAS-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "MutVar# RealWorld a -\u003e State# RealWorld -\u003e (#State# RealWorld, Ticket a#)",
        "fct-source": "src/Data-Atomics-Internal.html#readForCAS%23",
        "fct-type": "function",
        "title": "readForCAS#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "readForCAS#",
        "normalized": "MutVar # RealWorld a-\u003eState # RealWorld-\u003e(#State # RealWorld,Ticket a #)",
        "package": "atomic-primops",
        "partial": "For CAS",
        "signature": "MutVar # RealWorld a-\u003eState # RealWorld-\u003e(#State # RealWorld,Ticket a #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:stg_loadLoadBarrier-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "State# RealWorld -\u003e (#State# RealWorld, Int##)",
        "fct-source": "src/Data-Atomics-Internal.html#stg_loadLoadBarrier%23",
        "fct-type": "function",
        "title": "stg_loadLoadBarrier#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "stg_loadLoadBarrier#",
        "normalized": "State # RealWorld-\u003e(#State # RealWorld,Int # #)",
        "package": "atomic-primops",
        "partial": "Load Barrier",
        "signature": "State # RealWorld-\u003e(#State # RealWorld,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:stg_storeLoadBarrier-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "State# RealWorld -\u003e (#State# RealWorld, Int##)",
        "fct-source": "src/Data-Atomics-Internal.html#stg_storeLoadBarrier%23",
        "fct-type": "function",
        "title": "stg_storeLoadBarrier#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "stg_storeLoadBarrier#",
        "normalized": "State # RealWorld-\u003e(#State # RealWorld,Int # #)",
        "package": "atomic-primops",
        "partial": "Load Barrier",
        "signature": "State # RealWorld-\u003e(#State # RealWorld,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics-Internal.html#v:stg_writeBarrier-35-",
      "description": {
        "fct-module": "Data.Atomics.Internal",
        "fct-package": "atomic-primops",
        "fct-signature": "State# RealWorld -\u003e (#State# RealWorld, Int##)",
        "fct-source": "src/Data-Atomics-Internal.html#stg_writeBarrier%23",
        "fct-type": "function",
        "title": "stg_writeBarrier#"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics Internal",
        "module": "Data.Atomics.Internal",
        "name": "stg_writeBarrier#",
        "normalized": "State # RealWorld-\u003e(#State # RealWorld,Int # #)",
        "package": "atomic-primops",
        "partial": "Barrier",
        "signature": "State # RealWorld-\u003e(#State # RealWorld,Int # #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides atomic memory operations on IORefs and Mutable Arrays.\n\u003c/p\u003e\u003cp\u003ePointer equality need not be maintained by a Haskell compiler.  For example, Int\n   values will frequently be boxed and unboxed, changing the pointer identity of\n   the thunk.  To deal with this, the compare-and-swap (CAS) approach used in this\n   module is uses a \u003cem\u003esealed\u003c/em\u003e representation of pointers into the Haskell heap\n   (\u003ccode\u003eTickets\u003c/code\u003e).  Currently, the user cannot coin new tickets, rather a \u003ccode\u003e\u003ca\u003eTicket\u003c/a\u003e\u003c/code\u003e\n   provides evidence of a past observation, and grants permission to make a future\n   change.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "module",
        "fct-source": "src/Data-Atomics.html",
        "fct-type": "module",
        "title": "Atomics"
      },
      "index": {
        "description": "Provides atomic memory operations on IORefs and Mutable Arrays Pointer equality need not be maintained by Haskell compiler For example Int values will frequently be boxed and unboxed changing the pointer identity of the thunk To deal with this the compare-and-swap CAS approach used in this module is uses sealed representation of pointers into the Haskell heap Tickets Currently the user cannot coin new tickets rather Ticket provides evidence of past observation and grants permission to make future change",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "Atomics",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Atomics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#t:Ticket",
      "description": {
        "fct-descr": "\u003cp\u003eWhen performing compare-and-swaps, the \u003cem\u003eticket\u003c/em\u003e encapsulates proof\n that a thread observed a specific previous value of a mutable\n variable.  It is provided in lieu of the \u003ca\u003eold\u003c/a\u003e value to\n compare-and-swap.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "type",
        "fct-source": "src/Data-Atomics-Internal.html#Ticket",
        "fct-type": "type",
        "title": "Ticket"
      },
      "index": {
        "description": "When performing compare-and-swaps the ticket encapsulates proof that thread observed specific previous value of mutable variable It is provided in lieu of the old value to compare-and-swap",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "Ticket",
        "normalized": "",
        "package": "atomic-primops",
        "partial": "Ticket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casArrayElem",
      "description": {
        "fct-descr": "\u003cp\u003eCompare-and-swap \n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableArray RealWorld a -\u003e Int -\u003e Ticket a -\u003e a -\u003e IO (Bool, Ticket a)",
        "fct-source": "src/Data-Atomics.html#casArrayElem",
        "fct-type": "function",
        "title": "casArrayElem"
      },
      "index": {
        "description": "Compare-and-swap",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casArrayElem",
        "normalized": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
        "package": "atomic-primops",
        "partial": "Array Elem",
        "signature": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casArrayElem2",
      "description": {
        "fct-descr": "\u003cp\u003eThis variant takes two tickets: the \u003ccode\u003enew\u003c/code\u003e value is a ticket rather than an\n arbitrary, lifted, Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableArray RealWorld a -\u003e Int -\u003e Ticket a -\u003e Ticket a -\u003e IO (Bool, Ticket a)",
        "fct-source": "src/Data-Atomics.html#casArrayElem2",
        "fct-type": "function",
        "title": "casArrayElem2"
      },
      "index": {
        "description": "This variant takes two tickets the new value is ticket rather than an arbitrary lifted Haskell value",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casArrayElem2",
        "normalized": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
        "package": "atomic-primops",
        "partial": "Array Elem",
        "signature": "MutableArray RealWorld a-\u003eInt-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casByteArrayInt",
      "description": {
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableByteArray RealWorld -\u003e Int -\u003e Int -\u003e Int -\u003e IO Int",
        "fct-source": "src/Data-Atomics.html#casByteArrayInt",
        "fct-type": "function",
        "title": "casByteArrayInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casByteArrayInt",
        "normalized": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Byte Array Int",
        "signature": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casIORef",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "IORef a-\u003e Ticket a-\u003e a-\u003e IO (Bool, Ticket a)",
        "fct-type": "function",
        "title": "casIORef"
      },
      "index": {
        "description": "Performs machine-level compare and swap operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the current value from the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casIORef",
        "normalized": "IORef a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
        "package": "atomic-primops",
        "partial": "IORef",
        "signature": "IORef a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casIORef2",
      "description": {
        "fct-descr": "\u003cp\u003eThis variant takes two tickets, i.e. the \u003ccode\u003enew\u003c/code\u003e value is a ticket rather than an\n arbitrary, lifted, Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "IORef a-\u003e Ticket a-\u003e Ticket a-\u003e IO (Bool, Ticket a)",
        "fct-type": "function",
        "title": "casIORef2"
      },
      "index": {
        "description": "This variant takes two tickets i.e the new value is ticket rather than an arbitrary lifted Haskell value",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casIORef2",
        "normalized": "IORef a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
        "package": "atomic-primops",
        "partial": "IORef",
        "signature": "IORef a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casMutVar",
      "description": {
        "fct-descr": "\u003cp\u003eMutVar counterpart of \u003ccode\u003e\u003ca\u003ecasIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutVar# RealWorld a -\u003e Ticket a -\u003e a -\u003e IO (Bool, Ticket a)",
        "fct-source": "src/Data-Atomics.html#casMutVar",
        "fct-type": "function",
        "title": "casMutVar"
      },
      "index": {
        "description": "MutVar counterpart of casIORef",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casMutVar",
        "normalized": "MutVar # RealWorld a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)",
        "package": "atomic-primops",
        "partial": "Mut Var",
        "signature": "MutVar # RealWorld a-\u003eTicket a-\u003ea-\u003eIO(Bool,Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:casMutVar2",
      "description": {
        "fct-descr": "\u003cp\u003eThis variant takes two tickets, i.e. the \u003ccode\u003enew\u003c/code\u003e value is a ticket rather than an\n arbitrary, lifted, Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutVar# RealWorld a -\u003e Ticket a -\u003e Ticket a -\u003e IO (Bool, Ticket a)",
        "fct-source": "src/Data-Atomics.html#casMutVar2",
        "fct-type": "function",
        "title": "casMutVar2"
      },
      "index": {
        "description": "This variant takes two tickets i.e the new value is ticket rather than an arbitrary lifted Haskell value",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "casMutVar2",
        "normalized": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)",
        "package": "atomic-primops",
        "partial": "Mut Var",
        "signature": "MutVar # RealWorld a-\u003eTicket a-\u003eTicket a-\u003eIO(Bool,Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:fetchAddByteArrayInt",
      "description": {
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutableByteArray RealWorld -\u003e Int -\u003e Int -\u003e IO Int",
        "fct-source": "src/Data-Atomics.html#fetchAddByteArrayInt",
        "fct-type": "function",
        "title": "fetchAddByteArrayInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "fetchAddByteArrayInt",
        "normalized": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eIO Int",
        "package": "atomic-primops",
        "partial": "Add Byte Array Int",
        "signature": "MutableByteArray RealWorld-\u003eInt-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:loadLoadBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eMemory barrier implemented by the GHC rts (SMP.h).\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Atomics.html#loadLoadBarrier",
        "fct-type": "function",
        "title": "loadLoadBarrier"
      },
      "index": {
        "description": "Memory barrier implemented by the GHC rts SMP.h",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "loadLoadBarrier",
        "normalized": "IO()",
        "package": "atomic-primops",
        "partial": "Load Barrier",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:peekTicket",
      "description": {
        "fct-descr": "\u003cp\u003eA ticket contains or can get the usable Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "Ticket a -\u003e a",
        "fct-source": "src/Data-Atomics.html#peekTicket",
        "fct-type": "function",
        "title": "peekTicket"
      },
      "index": {
        "description": "ticket contains or can get the usable Haskell value",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "peekTicket",
        "normalized": "Ticket a-\u003ea",
        "package": "atomic-primops",
        "partial": "Ticket",
        "signature": "Ticket a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:readArrayElem",
      "description": {
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "forall a.  MutableArray RealWorld a -\u003e Int -\u003e IO (Ticket a)",
        "fct-source": "src/Data-Atomics.html#readArrayElem",
        "fct-type": "function",
        "title": "readArrayElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "readArrayElem",
        "normalized": "a b MutableArray RealWorld c-\u003eInt-\u003eIO(Ticket c)",
        "package": "atomic-primops",
        "partial": "Array Elem",
        "signature": "forall a. MutableArray RealWorld a-\u003eInt-\u003eIO(Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:readForCAS",
      "description": {
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "IORef a -\u003e IO (Ticket a)",
        "fct-source": "src/Data-Atomics.html#readForCAS",
        "fct-type": "function",
        "title": "readForCAS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "readForCAS",
        "normalized": "IORef a-\u003eIO(Ticket a)",
        "package": "atomic-primops",
        "partial": "For CAS",
        "signature": "IORef a-\u003eIO(Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:readMutVarForCAS",
      "description": {
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "MutVar# RealWorld a -\u003e IO (Ticket a)",
        "fct-source": "src/Data-Atomics.html#readMutVarForCAS",
        "fct-type": "function",
        "title": "readMutVarForCAS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "readMutVarForCAS",
        "normalized": "MutVar # RealWorld a-\u003eIO(Ticket a)",
        "package": "atomic-primops",
        "partial": "Mut Var For CAS",
        "signature": "MutVar # RealWorld a-\u003eIO(Ticket a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:storeLoadBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eMemory barrier implemented by the GHC rts (SMP.h).\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Atomics.html#storeLoadBarrier",
        "fct-type": "function",
        "title": "storeLoadBarrier"
      },
      "index": {
        "description": "Memory barrier implemented by the GHC rts SMP.h",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "storeLoadBarrier",
        "normalized": "IO()",
        "package": "atomic-primops",
        "partial": "Load Barrier",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/atomic-primops/docs/Data-Atomics.html#v:writeBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eMemory barrier implemented by the GHC rts (SMP.h).\n\u003c/p\u003e",
        "fct-module": "Data.Atomics",
        "fct-package": "atomic-primops",
        "fct-signature": "IO ()",
        "fct-source": "src/Data-Atomics.html#writeBarrier",
        "fct-type": "function",
        "title": "writeBarrier"
      },
      "index": {
        "description": "Memory barrier implemented by the GHC rts SMP.h",
        "hierarchy": "Data Atomics",
        "module": "Data.Atomics",
        "name": "writeBarrier",
        "normalized": "IO()",
        "package": "atomic-primops",
        "partial": "Barrier",
        "signature": "IO()"
      }
    }
  }
]