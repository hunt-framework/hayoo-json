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
        "word": "simple-index"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SimpleIndex",
          "name": "SimpleIndex",
          "package": "simple-index",
          "source": "src/Data-SimpleIndex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "SimpleIndex",
          "package": "simple-index",
          "partial": "Simple Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SimpleIndex",
          "name": "Indexed",
          "package": "simple-index",
          "source": "src/Data-SimpleIndex.html#Indexed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "Indexed",
          "package": "simple-index",
          "partial": "Indexed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#t:Indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SimpleIndex",
          "name": "SimpleIx",
          "package": "simple-index",
          "source": "src/Data-SimpleIndex.html#SimpleIx",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "SimpleIx",
          "package": "simple-index",
          "partial": "Simple Ix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#t:SimpleIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SimpleIndex",
          "name": "create",
          "package": "simple-index",
          "signature": "Indexed a (I1 a) (I2 a) (I3 a) (I4 a) (I5 a) (I6 a)",
          "source": "src/Data-SimpleIndex.html#create",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create",
          "package": "simple-index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this function to create an Indexed data type with only 1 index for your type\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "create1",
          "package": "simple-index",
          "signature": "(a -\u003e i1)-\u003e Indexed a i1 () () () () ()",
          "type": "function"
        },
        "index": {
          "description": "Use this function to create an Indexed data type with only index for your type",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create1",
          "normalized": "(a-\u003eb)-\u003eIndexed a b()()()()()",
          "package": "simple-index",
          "signature": "(a-\u003ei)-\u003eIndexed a i()()()()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Indexed data type with 2 indexes for your type\n create2 :: forall a i1 i2 i3 i4 i5 i6. (Eq i1, Eq i2, Eq i3, Eq i4, Eq i5, Eq i6, Hashable i1,\n          Hashable i2, Hashable i3, Hashable i4, Hashable i5, Hashable i6, SafeCopy a) \n        =\u003e (a -\u003e i1) \n        -- ^ The function that returns the first index for your datatype\n        -\u003e (a -\u003e i2) \n        -- ^ The function that returns the second index for your datatype\n        -\u003e Indexed a i1 i2 i3 i4 i5 i6\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "create2",
          "package": "simple-index",
          "signature": "(a -\u003e i1) -\u003e (a -\u003e i2) -\u003e Indexed a i1 i2 i3 i4 i5 i6",
          "source": "src/Data-SimpleIndex.html#create2",
          "type": "function"
        },
        "index": {
          "description": "Create an Indexed data type with indexes for your type create2 forall i1 i2 i3 i4 i5 i6 Eq i1 Eq i2 Eq i3 Eq i4 Eq i5 Eq i6 Hashable i1 Hashable i2 Hashable i3 Hashable i4 Hashable i5 Hashable i6 SafeCopy i1 The function that returns the first index for your datatype i2 The function that returns the second index for your datatype Indexed i1 i2 i3 i4 i5 i6",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create2",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b b b",
          "package": "simple-index",
          "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i i i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Indexed data type with 3 indexes for your type\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "create3",
          "package": "simple-index",
          "signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e Indexed a i1 i2 i3 () () ()",
          "type": "function"
        },
        "index": {
          "description": "Create an Indexed data type with indexes for your type",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create3",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b()()()",
          "package": "simple-index",
          "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i()()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Indexed data type with 4 indexes for your type\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "create4",
          "package": "simple-index",
          "signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e (a -\u003e i4)-\u003e Indexed a i1 i2 i3 i4 () ()",
          "type": "function"
        },
        "index": {
          "description": "Create an Indexed data type with indexes for your type",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create4",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b()()",
          "package": "simple-index",
          "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Indexed data type with 5 indexes for your type\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "create5",
          "package": "simple-index",
          "signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e (a -\u003e i4)-\u003e (a -\u003e i5)-\u003e Indexed a i1 i2 i3 i4 i5 ()",
          "type": "function"
        },
        "index": {
          "description": "Create an Indexed data type with indexes for your type",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create5",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b b()",
          "package": "simple-index",
          "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i i()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an Indexed data type with 6 indexes for your type\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "create6",
          "package": "simple-index",
          "signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e (a -\u003e i4)-\u003e (a -\u003e i5)-\u003e (a -\u003e i6)-\u003e Indexed a i1 i2 i3 i4 i5 i6",
          "type": "function"
        },
        "index": {
          "description": "Create an Indexed data type with indexes for your type",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "create6",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b b b",
          "package": "simple-index",
          "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i i i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a value from the Indexed data type and updates all the information\n in the indexes\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixDelete",
          "package": "simple-index",
          "signature": "Indexed a k i2 i3 i4 i5 i6 -\u003e a -\u003e Indexed a k i2 i3 i4 i5 i6",
          "source": "src/Data-SimpleIndex.html#ixDelete",
          "type": "function"
        },
        "index": {
          "description": "Deletes value from the Indexed data type and updates all the information in the indexes",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixDelete",
          "normalized": "Indexed a b c c c c c-\u003ea-\u003eIndexed a b c c c c c",
          "package": "simple-index",
          "partial": "Delete",
          "signature": "Indexed a k i i i i i-\u003ea-\u003eIndexed a k i i i i i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into the Indexed data type and updates all the information\n in the indexes\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixInsert",
          "package": "simple-index",
          "signature": "Indexed a k4 k3 k2 k1 k i6 -\u003e a -\u003e Indexed a k4 k3 k2 k1 k i6",
          "source": "src/Data-SimpleIndex.html#ixInsert",
          "type": "function"
        },
        "index": {
          "description": "Inserts new value into the Indexed data type and updates all the information in the indexes",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixInsert",
          "normalized": "Indexed a b b b b b c-\u003ea-\u003eIndexed a b b b b b c",
          "package": "simple-index",
          "partial": "Insert",
          "signature": "Indexed a k k k k k i-\u003ea-\u003eIndexed a k k k k k i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads your datatype from the Indexed data by looking up a first index value\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixRead1",
          "package": "simple-index",
          "signature": "b -\u003e Indexed a b t2 t3 t4 t5 t6 -\u003e Maybe a",
          "source": "src/Data-SimpleIndex.html#ixRead1",
          "type": "function"
        },
        "index": {
          "description": "Reads your datatype from the Indexed data by looking up first index value",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixRead1",
          "normalized": "a-\u003eIndexed b a c c c c c-\u003eMaybe b",
          "package": "simple-index",
          "partial": "Read",
          "signature": "b-\u003eIndexed a b t t t t t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the second index\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixRead2",
          "package": "simple-index",
          "signature": "b -\u003e Indexed a t1 b t3 t4 t5 t6 -\u003e Maybe a",
          "source": "src/Data-SimpleIndex.html#ixRead2",
          "type": "function"
        },
        "index": {
          "description": "Reads your datatype from the Indexed data by looking up value on the second index",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixRead2",
          "normalized": "a-\u003eIndexed b c a c c c c-\u003eMaybe b",
          "package": "simple-index",
          "partial": "Read",
          "signature": "b-\u003eIndexed a t b t t t t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the third index\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixRead3",
          "package": "simple-index",
          "signature": "b -\u003e Indexed a t1 t2 b t4 t5 t6 -\u003e Maybe a",
          "source": "src/Data-SimpleIndex.html#ixRead3",
          "type": "function"
        },
        "index": {
          "description": "Reads your datatype from the Indexed data by looking up value on the third index",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixRead3",
          "normalized": "a-\u003eIndexed b c c a c c c-\u003eMaybe b",
          "package": "simple-index",
          "partial": "Read",
          "signature": "b-\u003eIndexed a t t b t t t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the fourth index\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixRead4",
          "package": "simple-index",
          "signature": "b -\u003e Indexed a t1 t2 t3 b t5 t6 -\u003e Maybe a",
          "source": "src/Data-SimpleIndex.html#ixRead4",
          "type": "function"
        },
        "index": {
          "description": "Reads your datatype from the Indexed data by looking up value on the fourth index",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixRead4",
          "normalized": "a-\u003eIndexed b c c c a c c-\u003eMaybe b",
          "package": "simple-index",
          "partial": "Read",
          "signature": "b-\u003eIndexed a t t t b t t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the fifth index\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixRead5",
          "package": "simple-index",
          "signature": "b -\u003e Indexed a t1 t2 t3 t4 b t6 -\u003e Maybe a",
          "source": "src/Data-SimpleIndex.html#ixRead5",
          "type": "function"
        },
        "index": {
          "description": "Reads your datatype from the Indexed data by looking up value on the fifth index",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixRead5",
          "normalized": "a-\u003eIndexed b c c c c a c-\u003eMaybe b",
          "package": "simple-index",
          "partial": "Read",
          "signature": "b-\u003eIndexed a t t t t b t-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the sixth index\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixRead6",
          "package": "simple-index",
          "signature": "b -\u003e Indexed a t1 t2 t3 t4 t5 b -\u003e Maybe a",
          "source": "src/Data-SimpleIndex.html#ixRead6",
          "type": "function"
        },
        "index": {
          "description": "Reads your datatype from the Indexed data by looking up value on the sixth index",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixRead6",
          "normalized": "a-\u003eIndexed b c c c c c a-\u003eMaybe b",
          "package": "simple-index",
          "partial": "Read",
          "signature": "b-\u003eIndexed a t t t t t b-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a value in the Indexed data type and all the information\n in the indexes\n\u003c/p\u003e",
          "module": "Data.SimpleIndex",
          "name": "ixUpdate",
          "package": "simple-index",
          "signature": "Indexed a k i2 i3 i4 i5 i6 -\u003e k -\u003e (a -\u003e a) -\u003e Maybe (Indexed a k i2 i3 i4 i5 i6)",
          "source": "src/Data-SimpleIndex.html#ixUpdate",
          "type": "function"
        },
        "index": {
          "description": "Updates value in the Indexed data type and all the information in the indexes",
          "hierarchy": "Data SimpleIndex",
          "module": "Data.SimpleIndex",
          "name": "ixUpdate",
          "normalized": "Indexed a b c c c c c-\u003eb-\u003e(a-\u003ea)-\u003eMaybe(Indexed a b c c c c c)",
          "package": "simple-index",
          "partial": "Update",
          "signature": "Indexed a k i i i i i-\u003ek-\u003e(a-\u003ea)-\u003eMaybe(Indexed a k i i i i i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixUpdate"
      }
    }
  ]
]