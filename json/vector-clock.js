[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn approximate vector clock implementation in terms of\n \u003ca\u003eData.VectorClock.Simple\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "module",
        "fct-source": "src/Data-VectorClock-Approximate.html",
        "fct-type": "module",
        "title": "Approximate"
      },
      "index": {
        "description": "An approximate vector clock implementation in terms of Data.VectorClock.Simple",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "Approximate",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Approximate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#t:Relation",
      "description": {
        "fct-descr": "\u003cp\u003eThe relations two vector clocks may find themselves in.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "data",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "data",
        "title": "Relation"
      },
      "index": {
        "description": "The relations two vector clocks may find themselves in",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "Relation",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Relation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#t:VectorClock",
      "description": {
        "fct-descr": "\u003cp\u003eAn approximate vector clock is a normal vector clock, but several\n keys are mapped to the same value.  This can lead to \u003cem\u003efalse\u003c/em\u003e\n \u003cem\u003epositive\u003c/em\u003e \u003ccode\u003e\u003ca\u003erelation\u003c/a\u003e\u003c/code\u003es.  In other words, the fact that one vector\n clock causes another is no longer enough information to say that\n one message causes the other.  That said, experimental results show\n that approximate vector clocks have good results in practice; see\n the paper by R. Baldoni and M. Raynal for details.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "data",
        "fct-source": "src/Data-VectorClock-Approximate.html#VectorClock",
        "fct-type": "data",
        "title": "VectorClock"
      },
      "index": {
        "description": "An approximate vector clock is normal vector clock but several keys are mapped to the same value This can lead to false positive relation In other words the fact that one vector clock causes another is no longer enough information to say that one message causes the other That said experimental results show that approximate vector clocks have good results in practice see the paper by Baldoni and Raynal for details",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "VectorClock",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Vector Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:CausedBy",
      "description": {
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "CausedBy",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "function",
        "title": "CausedBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "CausedBy",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Caused By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:Causes",
      "description": {
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "Causes",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "function",
        "title": "Causes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "Causes",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Causes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:Concurrent",
      "description": {
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "Concurrent",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "function",
        "title": "Concurrent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "Concurrent",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:causes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  Short-hand for \u003ccode\u003erelation vc1 vc2 == Causes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Approximate.html#causes",
        "fct-type": "function",
        "title": "causes"
      },
      "index": {
        "description": "min Short-hand for relation vc1 vc2 Causes",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "causes",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  Combine two vector clocks entry-by-entry.  The\n size of the resulting vector clock is the maximum of the sizes of\n the given ones.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "(Int -\u003e Maybe b -\u003e Maybe b -\u003e Maybe b)-\u003e VectorClock a b-\u003e VectorClock a b-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "max Combine two vector clocks entry-by-entry The size of the resulting vector clock is the maximum of the sizes of the given ones",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "combine",
        "normalized": "(Int-\u003eMaybe a-\u003eMaybe a-\u003eMaybe a)-\u003eVectorClock b a-\u003eVectorClock b a-\u003eVectorClock b a",
        "package": "vector-clock",
        "partial": "",
        "signature": "(Int-\u003eMaybe b-\u003eMaybe b-\u003eMaybe b)-\u003eVectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Delete an entry from the vector clock.  If the requested\n entry does not exist, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Approximate.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an entry from the vector clock If the requested entry does not exist does nothing",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "delete",
        "normalized": "a-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(M)\u003c/em\u003e.  If \u003ccode\u003evc2 \u003ccode\u003e\u003ca\u003ecauses\u003c/a\u003e\u003c/code\u003e vc1\u003c/code\u003e, compute the smallest \u003ccode\u003evc3\u003c/code\u003e\n s.t. \u003ccode\u003emax vc3 vc2 == vc1\u003c/code\u003e.  Note that the \u003cem\u003efirst\u003c/em\u003e parameter is the\n newer vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
        "fct-source": "src/Data-VectorClock-Approximate.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "If vc2 causes vc1 compute the smallest vc3 s.t max vc3 vc2 vc1 Note that the first parameter is the newer vector clock",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "diff",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "Int-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty vector clock",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "empty",
        "normalized": "Int-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "Int-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert each entry in the list one at a time.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "Int-\u003e [(a, b)]-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Insert each entry in the list one at time",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "fromList",
        "normalized": "Int-\u003e[(a,b)]-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "List",
        "signature": "Int-\u003e[(a,b)]-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:inc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
        "fct-source": "src/Data-VectorClock-Approximate.html#inc",
        "fct-type": "function",
        "title": "inc"
      },
      "index": {
        "description": "Increment the entry for key",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "inc",
        "normalized": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:incWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.  If the key does not\n exist, assume it was the default.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "a-\u003e VectorClock a b-\u003e b-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "incWithDefault"
      },
      "index": {
        "description": "Increment the entry for key If the key does not exist assume it was the default",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "incWithDefault",
        "normalized": "a-\u003eVectorClock a b-\u003eb-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "With Default",
        "signature": "a-\u003eVectorClock a b-\u003eb-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert or replace the entry for a key.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e b -\u003e VectorClock a b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Approximate.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert or replace the entry for key",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Lookup the value for a key in the vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e Maybe b",
        "fct-source": "src/Data-VectorClock-Approximate.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value for key in the vector clock",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "lookup",
        "normalized": "a-\u003eVectorClock a b-\u003eMaybe b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:max",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  The maximum of the two vector clocks.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Approximate.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "max The maximum of the two vector clocks",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "max",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Is the given key a key in an entry of the vector clock?\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Approximate.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is the given key key in an entry of the vector clock",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "member",
        "normalized": "a-\u003eVectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Is the vector clock empty?\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Approximate.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the vector clock empty",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "null",
        "normalized": "VectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:relation",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  The relation between the two vector clocks.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e Relation",
        "fct-source": "src/Data-VectorClock-Approximate.html#relation",
        "fct-type": "function",
        "title": "relation"
      },
      "index": {
        "description": "min The relation between the two vector clocks",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "relation",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eRelation",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eRelation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  A vector clock with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "Int-\u003e a-\u003e b-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "vector clock with single element",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "singleton",
        "normalized": "Int-\u003ea-\u003eb-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "Int-\u003ea-\u003eb-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  The number of entries in the vector clock.  Note that\n this may be less than the \u003cem\u003esize\u003c/em\u003e at construction.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e Int",
        "fct-source": "src/Data-VectorClock-Approximate.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of entries in the vector clock Note that this may be less than the size at construction",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "size",
        "normalized": "VectorClock a b-\u003eInt",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  All the entries in the vector clock.  Note that this is\n \u003cem\u003enot\u003c/em\u003e the inverse of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.  Note that the keys are returned\n \u003cem\u003ehashed\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e [(Int, b)]",
        "fct-source": "src/Data-VectorClock-Approximate.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "All the entries in the vector clock Note that this is not the inverse of fromList Note that the keys are returned hashed",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "toList",
        "normalized": "VectorClock a b-\u003e[(Int,b)]",
        "package": "vector-clock",
        "partial": "List",
        "signature": "VectorClock a b-\u003e[(Int,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Check whether the vector clock is valid or not.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Approximate",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Approximate.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check whether the vector clock is valid or not",
        "hierarchy": "Data VectorClock Approximate",
        "module": "Data.VectorClock.Approximate",
        "name": "valid",
        "normalized": "VectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA vector clock implementation in terms of simply-linked lists.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "module",
        "fct-source": "src/Data-VectorClock-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "vector clock implementation in terms of simply-linked lists",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#t:Relation",
      "description": {
        "fct-descr": "\u003cp\u003eThe relations two vector clocks may find themselves in.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "data",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "data",
        "title": "Relation"
      },
      "index": {
        "description": "The relations two vector clocks may find themselves in",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "Relation",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Relation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#t:VectorClock",
      "description": {
        "fct-descr": "\u003cp\u003eA vector clock is, conceptually, an associtive list sorted by the\n value of the key, where each key appears only once.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "data",
        "fct-source": "src/Data-VectorClock-Simple.html#VectorClock",
        "fct-type": "data",
        "title": "VectorClock"
      },
      "index": {
        "description": "vector clock is conceptually an associtive list sorted by the value of the key where each key appears only once",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "VectorClock",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Vector Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:CausedBy",
      "description": {
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "CausedBy",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "function",
        "title": "CausedBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "CausedBy",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Caused By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:Causes",
      "description": {
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "Causes",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "function",
        "title": "Causes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "Causes",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Causes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:Concurrent",
      "description": {
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "Concurrent",
        "fct-source": "src/Data-VectorClock-Simple.html#Relation",
        "fct-type": "function",
        "title": "Concurrent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "Concurrent",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Concurrent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:causes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  Short-hand for \u003ccode\u003erelation vc1 vc2 == Causes\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Simple.html#causes",
        "fct-type": "function",
        "title": "causes"
      },
      "index": {
        "description": "min Short-hand for relation vc1 vc2 Causes",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "causes",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  Combine two vector clocks entry-by-entry.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "(a -\u003e Maybe b -\u003e Maybe b -\u003e Maybe b)-\u003e VectorClock a b-\u003e VectorClock a b-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "max Combine two vector clocks entry-by-entry",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "combine",
        "normalized": "(a-\u003eMaybe b-\u003eMaybe b-\u003eMaybe b)-\u003eVectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "(a-\u003eMaybe b-\u003eMaybe b-\u003eMaybe b)-\u003eVectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Delete an entry from the vector clock.  If the requested\n entry does not exist, does nothing.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Simple.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an entry from the vector clock If the requested entry does not exist does nothing",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "delete",
        "normalized": "a-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(M)\u003c/em\u003e.  If \u003ccode\u003evc2 \u003ccode\u003e\u003ca\u003ecauses\u003c/a\u003e\u003c/code\u003e vc1\u003c/code\u003e, compute the smallest \u003ccode\u003evc3\u003c/code\u003e\n s.t. \u003ccode\u003emax vc3 vc2 == vc1\u003c/code\u003e.  Note that the \u003cem\u003efirst\u003c/em\u003e parameter is the\n newer vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
        "fct-source": "src/Data-VectorClock-Simple.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "If vc2 causes vc1 compute the smallest vc3 s.t max vc3 vc2 vc1 Note that the first parameter is the newer vector clock",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "diff",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b",
        "fct-source": "src/Data-VectorClock-Simple.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty vector clock",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "empty",
        "normalized": "",
        "package": "vector-clock",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert each entry in the list one at a time.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "[(a, b)] -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Simple.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Insert each entry in the list one at time",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "fromList",
        "normalized": "[(a,b)]-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "List",
        "signature": "[(a,b)]-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:inc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
        "fct-source": "src/Data-VectorClock-Simple.html#inc",
        "fct-type": "function",
        "title": "inc"
      },
      "index": {
        "description": "Increment the entry for key",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "inc",
        "normalized": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:incWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.  If the key does not\n exist, assume it was the default.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a-\u003e VectorClock a b-\u003e b-\u003e VectorClock a b",
        "fct-type": "function",
        "title": "incWithDefault"
      },
      "index": {
        "description": "Increment the entry for key If the key does not exist assume it was the default",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "incWithDefault",
        "normalized": "a-\u003eVectorClock a b-\u003eb-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "With Default",
        "signature": "a-\u003eVectorClock a b-\u003eb-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert or replace the entry for a key.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e b -\u003e VectorClock a b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Simple.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert or replace the entry for key",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Lookup the value for a key in the vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e Maybe b",
        "fct-source": "src/Data-VectorClock-Simple.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value for key in the vector clock",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "lookup",
        "normalized": "a-\u003eVectorClock a b-\u003eMaybe b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:max",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  The maximum of the two vector clocks.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Simple.html#max",
        "fct-type": "function",
        "title": "max"
      },
      "index": {
        "description": "max The maximum of the two vector clocks",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "max",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Is the given key a key in an entry of the vector clock?\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Simple.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is the given key key in an entry of the vector clock",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "member",
        "normalized": "a-\u003eVectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eVectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Is the vector clock empty?\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Simple.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the vector clock empty",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "null",
        "normalized": "VectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:relation",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  The relation between the two vector clocks.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e VectorClock a b -\u003e Relation",
        "fct-source": "src/Data-VectorClock-Simple.html#relation",
        "fct-type": "function",
        "title": "relation"
      },
      "index": {
        "description": "min The relation between the two vector clocks",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "relation",
        "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eRelation",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eVectorClock a b-\u003eRelation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  A vector clock with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "a -\u003e b -\u003e VectorClock a b",
        "fct-source": "src/Data-VectorClock-Simple.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "vector clock with single element",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eVectorClock a b",
        "package": "vector-clock",
        "partial": "",
        "signature": "a-\u003eb-\u003eVectorClock a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  The number of entries in the vector clock.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e Int",
        "fct-source": "src/Data-VectorClock-Simple.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of entries in the vector clock",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "size",
        "normalized": "VectorClock a b-\u003eInt",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  All the entries in the vector clock.  Note that this is\n \u003cem\u003enot\u003c/em\u003e the inverse of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e [(a, b)]",
        "fct-source": "src/Data-VectorClock-Simple.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "All the entries in the vector clock Note that this is not the inverse of fromList",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "toList",
        "normalized": "VectorClock a b-\u003e[(a,b)]",
        "package": "vector-clock",
        "partial": "List",
        "signature": "VectorClock a b-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Check whether the vector clock is valid or not.\n\u003c/p\u003e",
        "fct-module": "Data.VectorClock.Simple",
        "fct-package": "vector-clock",
        "fct-signature": "VectorClock a b -\u003e Bool",
        "fct-source": "src/Data-VectorClock-Simple.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check whether the vector clock is valid or not",
        "hierarchy": "Data VectorClock Simple",
        "module": "Data.VectorClock.Simple",
        "name": "valid",
        "normalized": "VectorClock a b-\u003eBool",
        "package": "vector-clock",
        "partial": "",
        "signature": "VectorClock a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA vector clock implementation.\n\u003c/p\u003e\u003cp\u003eThis module re-exports \u003ca\u003eData.VectorClock.Simple\u003c/a\u003e, which is the\n fully-featured vector clock library.  If you wish to use\n approximate vector clocks, which are significantly smaller and have\n bounded size, but are not exact, use \u003ca\u003eData.VectorClock.Approximate\u003c/a\u003e\n instead.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003eFundamentals of Distributed Computing: A Practical Tour of\n Vector Clock Systems\u003c/code\u003e by R. Baldoni and M. Raynal for an overview\n of vector clocks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.VectorClock",
        "fct-package": "vector-clock",
        "fct-signature": "module",
        "fct-source": "src/Data-VectorClock.html",
        "fct-type": "module",
        "title": "VectorClock"
      },
      "index": {
        "description": "vector clock implementation This module re-exports Data.VectorClock.Simple which is the fully-featured vector clock library If you wish to use approximate vector clocks which are significantly smaller and have bounded size but are not exact use Data.VectorClock.Approximate instead See Fundamentals of Distributed Computing Practical Tour of Vector Clock Systems by Baldoni and Raynal for an overview of vector clocks",
        "hierarchy": "Data VectorClock",
        "module": "Data.VectorClock",
        "name": "VectorClock",
        "normalized": "",
        "package": "vector-clock",
        "partial": "Vector Clock",
        "signature": ""
      }
    }
  }
]