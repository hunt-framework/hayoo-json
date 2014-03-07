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
        "word": "vector-clock"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn approximate vector clock implementation in terms of\n \u003ca\u003eData.VectorClock.Simple\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "Approximate",
          "package": "vector-clock",
          "source": "src/Data-VectorClock-Approximate.html",
          "type": "module"
        },
        "index": {
          "description": "An approximate vector clock implementation in terms of Data.VectorClock.Simple",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "Approximate",
          "package": "vector-clock",
          "partial": "Approximate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe relations two vector clocks may find themselves in.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "Relation",
          "package": "vector-clock",
          "source": "src/Data-VectorClock-Simple.html#Relation",
          "type": "data"
        },
        "index": {
          "description": "The relations two vector clocks may find themselves in",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "Relation",
          "package": "vector-clock",
          "partial": "Relation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#t:Relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn approximate vector clock is a normal vector clock, but several\n keys are mapped to the same value.  This can lead to \u003cem\u003efalse\u003c/em\u003e\n \u003cem\u003epositive\u003c/em\u003e \u003ccode\u003e\u003ca\u003erelation\u003c/a\u003e\u003c/code\u003es.  In other words, the fact that one vector\n clock causes another is no longer enough information to say that\n one message causes the other.  That said, experimental results show\n that approximate vector clocks have good results in practice; see\n the paper by R. Baldoni and M. Raynal for details.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "VectorClock",
          "package": "vector-clock",
          "source": "src/Data-VectorClock-Approximate.html#VectorClock",
          "type": "data"
        },
        "index": {
          "description": "An approximate vector clock is normal vector clock but several keys are mapped to the same value This can lead to false positive relation In other words the fact that one vector clock causes another is no longer enough information to say that one message causes the other That said experimental results show that approximate vector clocks have good results in practice see the paper by Baldoni and Raynal for details",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "VectorClock",
          "package": "vector-clock",
          "partial": "Vector Clock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#t:VectorClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.VectorClock.Approximate\",\"Data.VectorClock.Simple\"]",
          "name": "CausedBy",
          "package": "vector-clock",
          "signature": "CausedBy",
          "source": "src/Data-VectorClock-Simple.html#Relation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:CausedBy\",\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:CausedBy\"]"
        },
        "index": {
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "CausedBy",
          "package": "vector-clock",
          "partial": "Caused By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:CausedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.VectorClock.Approximate\",\"Data.VectorClock.Simple\"]",
          "name": "Causes",
          "package": "vector-clock",
          "signature": "Causes",
          "source": "src/Data-VectorClock-Simple.html#Relation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:Causes\",\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:Causes\"]"
        },
        "index": {
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "Causes",
          "package": "vector-clock",
          "partial": "Causes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:Causes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.VectorClock.Approximate\",\"Data.VectorClock.Simple\"]",
          "name": "Concurrent",
          "package": "vector-clock",
          "signature": "Concurrent",
          "source": "src/Data-VectorClock-Simple.html#Relation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:Concurrent\",\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:Concurrent\"]"
        },
        "index": {
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "Concurrent",
          "package": "vector-clock",
          "partial": "Concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:Concurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  Short-hand for \u003ccode\u003erelation vc1 vc2 == Causes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "causes",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Approximate.html#causes",
          "type": "function"
        },
        "index": {
          "description": "min Short-hand for relation vc1 vc2 Causes",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "causes",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:causes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  Combine two vector clocks entry-by-entry.  The\n size of the resulting vector clock is the maximum of the sizes of\n the given ones.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "combine",
          "package": "vector-clock",
          "signature": "(Int -\u003e Maybe b -\u003e Maybe b -\u003e Maybe b)-\u003e VectorClock a b-\u003e VectorClock a b-\u003e VectorClock a b",
          "type": "function"
        },
        "index": {
          "description": "max Combine two vector clocks entry-by-entry The size of the resulting vector clock is the maximum of the sizes of the given ones",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "combine",
          "normalized": "(Int-\u003eMaybe a-\u003eMaybe a-\u003eMaybe a)-\u003eVectorClock b a-\u003eVectorClock b a-\u003eVectorClock b a",
          "package": "vector-clock",
          "signature": "(Int-\u003eMaybe b-\u003eMaybe b-\u003eMaybe b)-\u003eVectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Delete an entry from the vector clock.  If the requested\n entry does not exist, does nothing.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "delete",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Approximate.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an entry from the vector clock If the requested entry does not exist does nothing",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "delete",
          "normalized": "a-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(M)\u003c/em\u003e.  If \u003ccode\u003evc2 \u003ccode\u003e\u003ca\u003ecauses\u003c/a\u003e\u003c/code\u003e vc1\u003c/code\u003e, compute the smallest \u003ccode\u003evc3\u003c/code\u003e\n s.t. \u003ccode\u003emax vc3 vc2 == vc1\u003c/code\u003e.  Note that the \u003cem\u003efirst\u003c/em\u003e parameter is the\n newer vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "diff",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
          "source": "src/Data-VectorClock-Approximate.html#diff",
          "type": "function"
        },
        "index": {
          "description": "If vc2 causes vc1 compute the smallest vc3 s.t max vc3 vc2 vc1 Note that the first parameter is the newer vector clock",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "diff",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "empty",
          "package": "vector-clock",
          "signature": "Int-\u003e VectorClock a b",
          "type": "function"
        },
        "index": {
          "description": "The empty vector clock",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "empty",
          "normalized": "Int-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "Int-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert each entry in the list one at a time.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "fromList",
          "package": "vector-clock",
          "signature": "Int-\u003e [(a, b)]-\u003e VectorClock a b",
          "type": "function"
        },
        "index": {
          "description": "Insert each entry in the list one at time",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "fromList",
          "normalized": "Int-\u003e[(a,b)]-\u003eVectorClock a b",
          "package": "vector-clock",
          "partial": "List",
          "signature": "Int-\u003e[(a,b)]-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "inc",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
          "source": "src/Data-VectorClock-Approximate.html#inc",
          "type": "function"
        },
        "index": {
          "description": "Increment the entry for key",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "inc",
          "normalized": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.  If the key does not\n exist, assume it was the default.\n\u003c/p\u003e",
          "module": "[\"Data.VectorClock.Approximate\",\"Data.VectorClock.Simple\"]",
          "name": "incWithDefault",
          "package": "vector-clock",
          "signature": "a-\u003e VectorClock a b-\u003e b-\u003e VectorClock a b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:incWithDefault\",\"http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:incWithDefault\"]"
        },
        "index": {
          "description": "Increment the entry for key If the key does not exist assume it was the default",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "incWithDefault",
          "normalized": "a-\u003eVectorClock a b-\u003eb-\u003eVectorClock a b",
          "package": "vector-clock",
          "partial": "With Default",
          "signature": "a-\u003eVectorClock a b-\u003eb-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:incWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert or replace the entry for a key.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "insert",
          "package": "vector-clock",
          "signature": "a -\u003e b -\u003e VectorClock a b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Approximate.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert or replace the entry for key",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Lookup the value for a key in the vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "lookup",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e Maybe b",
          "source": "src/Data-VectorClock-Approximate.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value for key in the vector clock",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "lookup",
          "normalized": "a-\u003eVectorClock a b-\u003eMaybe b",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  The maximum of the two vector clocks.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "max",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Approximate.html#max",
          "type": "function"
        },
        "index": {
          "description": "max The maximum of the two vector clocks",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "max",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Is the given key a key in an entry of the vector clock?\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "member",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Approximate.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the given key key in an entry of the vector clock",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "member",
          "normalized": "a-\u003eVectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Is the vector clock empty?\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "null",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Approximate.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the vector clock empty",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "null",
          "normalized": "VectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  The relation between the two vector clocks.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "relation",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e Relation",
          "source": "src/Data-VectorClock-Approximate.html#relation",
          "type": "function"
        },
        "index": {
          "description": "min The relation between the two vector clocks",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "relation",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eRelation",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eRelation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  A vector clock with a single element.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "singleton",
          "package": "vector-clock",
          "signature": "Int-\u003e a-\u003e b-\u003e VectorClock a b",
          "type": "function"
        },
        "index": {
          "description": "vector clock with single element",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "singleton",
          "normalized": "Int-\u003ea-\u003eb-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "Int-\u003ea-\u003eb-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  The number of entries in the vector clock.  Note that\n this may be less than the \u003cem\u003esize\u003c/em\u003e at construction.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "size",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e Int",
          "source": "src/Data-VectorClock-Approximate.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of entries in the vector clock Note that this may be less than the size at construction",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "size",
          "normalized": "VectorClock a b-\u003eInt",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  All the entries in the vector clock.  Note that this is\n \u003cem\u003enot\u003c/em\u003e the inverse of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.  Note that the keys are returned\n \u003cem\u003ehashed\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "toList",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e [(Int, b)]",
          "source": "src/Data-VectorClock-Approximate.html#toList",
          "type": "function"
        },
        "index": {
          "description": "All the entries in the vector clock Note that this is not the inverse of fromList Note that the keys are returned hashed",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "toList",
          "normalized": "VectorClock a b-\u003e[(Int,b)]",
          "package": "vector-clock",
          "partial": "List",
          "signature": "VectorClock a b-\u003e[(Int,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Check whether the vector clock is valid or not.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Approximate",
          "name": "valid",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Approximate.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check whether the vector clock is valid or not",
          "hierarchy": "Data VectorClock Approximate",
          "module": "Data.VectorClock.Approximate",
          "name": "valid",
          "normalized": "VectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Approximate.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA vector clock implementation in terms of simply-linked lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "Simple",
          "package": "vector-clock",
          "source": "src/Data-VectorClock-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "vector clock implementation in terms of simply-linked lists",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "Simple",
          "package": "vector-clock",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe relations two vector clocks may find themselves in.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "Relation",
          "package": "vector-clock",
          "source": "src/Data-VectorClock-Simple.html#Relation",
          "type": "data"
        },
        "index": {
          "description": "The relations two vector clocks may find themselves in",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "Relation",
          "package": "vector-clock",
          "partial": "Relation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#t:Relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector clock is, conceptually, an associtive list sorted by the\n value of the key, where each key appears only once.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "VectorClock",
          "package": "vector-clock",
          "source": "src/Data-VectorClock-Simple.html#VectorClock",
          "type": "data"
        },
        "index": {
          "description": "vector clock is conceptually an associtive list sorted by the value of the key where each key appears only once",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "VectorClock",
          "package": "vector-clock",
          "partial": "Vector Clock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#t:VectorClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  Short-hand for \u003ccode\u003erelation vc1 vc2 == Causes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "causes",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Simple.html#causes",
          "type": "function"
        },
        "index": {
          "description": "min Short-hand for relation vc1 vc2 Causes",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "causes",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:causes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  Combine two vector clocks entry-by-entry.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "combine",
          "package": "vector-clock",
          "signature": "(a -\u003e Maybe b -\u003e Maybe b -\u003e Maybe b)-\u003e VectorClock a b-\u003e VectorClock a b-\u003e VectorClock a b",
          "type": "function"
        },
        "index": {
          "description": "max Combine two vector clocks entry-by-entry",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "combine",
          "normalized": "(a-\u003eMaybe b-\u003eMaybe b-\u003eMaybe b)-\u003eVectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "(a-\u003eMaybe b-\u003eMaybe b-\u003eMaybe b)-\u003eVectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Delete an entry from the vector clock.  If the requested\n entry does not exist, does nothing.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "delete",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Simple.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an entry from the vector clock If the requested entry does not exist does nothing",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "delete",
          "normalized": "a-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(M)\u003c/em\u003e.  If \u003ccode\u003evc2 \u003ccode\u003e\u003ca\u003ecauses\u003c/a\u003e\u003c/code\u003e vc1\u003c/code\u003e, compute the smallest \u003ccode\u003evc3\u003c/code\u003e\n s.t. \u003ccode\u003emax vc3 vc2 == vc1\u003c/code\u003e.  Note that the \u003cem\u003efirst\u003c/em\u003e parameter is the\n newer vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "diff",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
          "source": "src/Data-VectorClock-Simple.html#diff",
          "type": "function"
        },
        "index": {
          "description": "If vc2 causes vc1 compute the smallest vc3 s.t max vc3 vc2 vc1 Note that the first parameter is the newer vector clock",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "diff",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  The empty vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "empty",
          "package": "vector-clock",
          "signature": "VectorClock a b",
          "source": "src/Data-VectorClock-Simple.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty vector clock",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "empty",
          "package": "vector-clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert each entry in the list one at a time.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "fromList",
          "package": "vector-clock",
          "signature": "[(a, b)] -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Simple.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Insert each entry in the list one at time",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eVectorClock a b",
          "package": "vector-clock",
          "partial": "List",
          "signature": "[(a,b)]-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Increment the entry for a key.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "inc",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e Maybe (VectorClock a b)",
          "source": "src/Data-VectorClock-Simple.html#inc",
          "type": "function"
        },
        "index": {
          "description": "Increment the entry for key",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "inc",
          "normalized": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eMaybe(VectorClock a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Insert or replace the entry for a key.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "insert",
          "package": "vector-clock",
          "signature": "a -\u003e b -\u003e VectorClock a b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Simple.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert or replace the entry for key",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "a-\u003eb-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Lookup the value for a key in the vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "lookup",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e Maybe b",
          "source": "src/Data-VectorClock-Simple.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value for key in the vector clock",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "lookup",
          "normalized": "a-\u003eVectorClock a b-\u003eMaybe b",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(max(N, M))\u003c/em\u003e.  The maximum of the two vector clocks.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "max",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Simple.html#max",
          "type": "function"
        },
        "index": {
          "description": "max The maximum of the two vector clocks",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "max",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Is the given key a key in an entry of the vector clock?\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "member",
          "package": "vector-clock",
          "signature": "a -\u003e VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Simple.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the given key key in an entry of the vector clock",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "member",
          "normalized": "a-\u003eVectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "a-\u003eVectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  Is the vector clock empty?\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "null",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Simple.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the vector clock empty",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "null",
          "normalized": "VectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(min(N, M))\u003c/em\u003e.  The relation between the two vector clocks.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "relation",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e VectorClock a b -\u003e Relation",
          "source": "src/Data-VectorClock-Simple.html#relation",
          "type": "function"
        },
        "index": {
          "description": "min The relation between the two vector clocks",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "relation",
          "normalized": "VectorClock a b-\u003eVectorClock a b-\u003eRelation",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eVectorClock a b-\u003eRelation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  A vector clock with a single element.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "singleton",
          "package": "vector-clock",
          "signature": "a -\u003e b -\u003e VectorClock a b",
          "source": "src/Data-VectorClock-Simple.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "vector clock with single element",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eVectorClock a b",
          "package": "vector-clock",
          "signature": "a-\u003eb-\u003eVectorClock a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  The number of entries in the vector clock.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "size",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e Int",
          "source": "src/Data-VectorClock-Simple.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of entries in the vector clock",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "size",
          "normalized": "VectorClock a b-\u003eInt",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.  All the entries in the vector clock.  Note that this is\n \u003cem\u003enot\u003c/em\u003e the inverse of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "toList",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e [(a, b)]",
          "source": "src/Data-VectorClock-Simple.html#toList",
          "type": "function"
        },
        "index": {
          "description": "All the entries in the vector clock Note that this is not the inverse of fromList",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "toList",
          "normalized": "VectorClock a b-\u003e[(a,b)]",
          "package": "vector-clock",
          "partial": "List",
          "signature": "VectorClock a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(N)\u003c/em\u003e.  Check whether the vector clock is valid or not.\n\u003c/p\u003e",
          "module": "Data.VectorClock.Simple",
          "name": "valid",
          "package": "vector-clock",
          "signature": "VectorClock a b -\u003e Bool",
          "source": "src/Data-VectorClock-Simple.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check whether the vector clock is valid or not",
          "hierarchy": "Data VectorClock Simple",
          "module": "Data.VectorClock.Simple",
          "name": "valid",
          "normalized": "VectorClock a b-\u003eBool",
          "package": "vector-clock",
          "signature": "VectorClock a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock-Simple.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA vector clock implementation.\n\u003c/p\u003e\u003cp\u003eThis module re-exports \u003ca\u003eData.VectorClock.Simple\u003c/a\u003e, which is the\n fully-featured vector clock library.  If you wish to use\n approximate vector clocks, which are significantly smaller and have\n bounded size, but are not exact, use \u003ca\u003eData.VectorClock.Approximate\u003c/a\u003e\n instead.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003eFundamentals of Distributed Computing: A Practical Tour of\n Vector Clock Systems\u003c/code\u003e by R. Baldoni and M. Raynal for an overview\n of vector clocks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.VectorClock",
          "name": "VectorClock",
          "package": "vector-clock",
          "source": "src/Data-VectorClock.html",
          "type": "module"
        },
        "index": {
          "description": "vector clock implementation This module re-exports Data.VectorClock.Simple which is the fully-featured vector clock library If you wish to use approximate vector clocks which are significantly smaller and have bounded size but are not exact use Data.VectorClock.Approximate instead See Fundamentals of Distributed Computing Practical Tour of Vector Clock Systems by Baldoni and Raynal for an overview of vector clocks",
          "hierarchy": "Data VectorClock",
          "module": "Data.VectorClock",
          "name": "VectorClock",
          "package": "vector-clock",
          "partial": "Vector Clock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-clock/docs/Data-VectorClock.html#"
      }
    }
  ]
]