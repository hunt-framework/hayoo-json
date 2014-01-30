[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#",
      "description": {
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "module",
        "fct-source": "src/Data-SimpleIndex.html",
        "fct-type": "module",
        "title": "SimpleIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "SimpleIndex",
        "normalized": "",
        "package": "simple-index",
        "partial": "Simple Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#t:Indexed",
      "description": {
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "data",
        "fct-source": "src/Data-SimpleIndex.html#Indexed",
        "fct-type": "data",
        "title": "Indexed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "Indexed",
        "normalized": "",
        "package": "simple-index",
        "partial": "Indexed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#t:SimpleIx",
      "description": {
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "class",
        "fct-source": "src/Data-SimpleIndex.html#SimpleIx",
        "fct-type": "class",
        "title": "SimpleIx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "SimpleIx",
        "normalized": "",
        "package": "simple-index",
        "partial": "Simple Ix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create",
      "description": {
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "Indexed a (I1 a) (I2 a) (I3 a) (I4 a) (I5 a) (I6 a)",
        "fct-source": "src/Data-SimpleIndex.html#create",
        "fct-type": "method",
        "title": "create"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create",
        "normalized": "",
        "package": "simple-index",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create1",
      "description": {
        "fct-descr": "\u003cp\u003eUse this function to create an Indexed data type with only 1 index for your type\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "(a -\u003e i1)-\u003e Indexed a i1 () () () () ()",
        "fct-type": "function",
        "title": "create1"
      },
      "index": {
        "description": "Use this function to create an Indexed data type with only index for your type",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create1",
        "normalized": "(a-\u003eb)-\u003eIndexed a b()()()()()",
        "package": "simple-index",
        "partial": "",
        "signature": "(a-\u003ei)-\u003eIndexed a i()()()()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create2",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Indexed data type with 2 indexes for your type\n create2 :: forall a i1 i2 i3 i4 i5 i6. (Eq i1, Eq i2, Eq i3, Eq i4, Eq i5, Eq i6, Hashable i1,\n          Hashable i2, Hashable i3, Hashable i4, Hashable i5, Hashable i6, SafeCopy a) \n        =\u003e (a -\u003e i1) \n        -- ^ The function that returns the first index for your datatype\n        -\u003e (a -\u003e i2) \n        -- ^ The function that returns the second index for your datatype\n        -\u003e Indexed a i1 i2 i3 i4 i5 i6\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "(a -\u003e i1) -\u003e (a -\u003e i2) -\u003e Indexed a i1 i2 i3 i4 i5 i6",
        "fct-source": "src/Data-SimpleIndex.html#create2",
        "fct-type": "function",
        "title": "create2"
      },
      "index": {
        "description": "Create an Indexed data type with indexes for your type create2 forall i1 i2 i3 i4 i5 i6 Eq i1 Eq i2 Eq i3 Eq i4 Eq i5 Eq i6 Hashable i1 Hashable i2 Hashable i3 Hashable i4 Hashable i5 Hashable i6 SafeCopy i1 The function that returns the first index for your datatype i2 The function that returns the second index for your datatype Indexed i1 i2 i3 i4 i5 i6",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create2",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b b b",
        "package": "simple-index",
        "partial": "",
        "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i i i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create3",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Indexed data type with 3 indexes for your type\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e Indexed a i1 i2 i3 () () ()",
        "fct-type": "function",
        "title": "create3"
      },
      "index": {
        "description": "Create an Indexed data type with indexes for your type",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create3",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b()()()",
        "package": "simple-index",
        "partial": "",
        "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i()()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create4",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Indexed data type with 4 indexes for your type\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e (a -\u003e i4)-\u003e Indexed a i1 i2 i3 i4 () ()",
        "fct-type": "function",
        "title": "create4"
      },
      "index": {
        "description": "Create an Indexed data type with indexes for your type",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create4",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b()()",
        "package": "simple-index",
        "partial": "",
        "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create5",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Indexed data type with 5 indexes for your type\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e (a -\u003e i4)-\u003e (a -\u003e i5)-\u003e Indexed a i1 i2 i3 i4 i5 ()",
        "fct-type": "function",
        "title": "create5"
      },
      "index": {
        "description": "Create an Indexed data type with indexes for your type",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create5",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b b()",
        "package": "simple-index",
        "partial": "",
        "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i i()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:create6",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an Indexed data type with 6 indexes for your type\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "(a -\u003e i1)-\u003e (a -\u003e i2)-\u003e (a -\u003e i3)-\u003e (a -\u003e i4)-\u003e (a -\u003e i5)-\u003e (a -\u003e i6)-\u003e Indexed a i1 i2 i3 i4 i5 i6",
        "fct-type": "function",
        "title": "create6"
      },
      "index": {
        "description": "Create an Indexed data type with indexes for your type",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "create6",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003eIndexed a b b b b b b",
        "package": "simple-index",
        "partial": "",
        "signature": "(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003e(a-\u003ei)-\u003eIndexed a i i i i i i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixDelete",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a value from the Indexed data type and updates all the information\n in the indexes\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "Indexed a k i2 i3 i4 i5 i6 -\u003e a -\u003e Indexed a k i2 i3 i4 i5 i6",
        "fct-source": "src/Data-SimpleIndex.html#ixDelete",
        "fct-type": "function",
        "title": "ixDelete"
      },
      "index": {
        "description": "Deletes value from the Indexed data type and updates all the information in the indexes",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixDelete",
        "normalized": "Indexed a b c c c c c-\u003ea-\u003eIndexed a b c c c c c",
        "package": "simple-index",
        "partial": "Delete",
        "signature": "Indexed a k i i i i i-\u003ea-\u003eIndexed a k i i i i i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixInsert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a new value into the Indexed data type and updates all the information\n in the indexes\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "Indexed a k4 k3 k2 k1 k i6 -\u003e a -\u003e Indexed a k4 k3 k2 k1 k i6",
        "fct-source": "src/Data-SimpleIndex.html#ixInsert",
        "fct-type": "function",
        "title": "ixInsert"
      },
      "index": {
        "description": "Inserts new value into the Indexed data type and updates all the information in the indexes",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixInsert",
        "normalized": "Indexed a b b b b b c-\u003ea-\u003eIndexed a b b b b b c",
        "package": "simple-index",
        "partial": "Insert",
        "signature": "Indexed a k k k k k i-\u003ea-\u003eIndexed a k k k k k i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead1",
      "description": {
        "fct-descr": "\u003cp\u003eReads your datatype from the Indexed data by looking up a first index value\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "b -\u003e Indexed a b t2 t3 t4 t5 t6 -\u003e Maybe a",
        "fct-source": "src/Data-SimpleIndex.html#ixRead1",
        "fct-type": "function",
        "title": "ixRead1"
      },
      "index": {
        "description": "Reads your datatype from the Indexed data by looking up first index value",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixRead1",
        "normalized": "a-\u003eIndexed b a c c c c c-\u003eMaybe b",
        "package": "simple-index",
        "partial": "Read",
        "signature": "b-\u003eIndexed a b t t t t t-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead2",
      "description": {
        "fct-descr": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the second index\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "b -\u003e Indexed a t1 b t3 t4 t5 t6 -\u003e Maybe a",
        "fct-source": "src/Data-SimpleIndex.html#ixRead2",
        "fct-type": "function",
        "title": "ixRead2"
      },
      "index": {
        "description": "Reads your datatype from the Indexed data by looking up value on the second index",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixRead2",
        "normalized": "a-\u003eIndexed b c a c c c c-\u003eMaybe b",
        "package": "simple-index",
        "partial": "Read",
        "signature": "b-\u003eIndexed a t b t t t t-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead3",
      "description": {
        "fct-descr": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the third index\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "b -\u003e Indexed a t1 t2 b t4 t5 t6 -\u003e Maybe a",
        "fct-source": "src/Data-SimpleIndex.html#ixRead3",
        "fct-type": "function",
        "title": "ixRead3"
      },
      "index": {
        "description": "Reads your datatype from the Indexed data by looking up value on the third index",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixRead3",
        "normalized": "a-\u003eIndexed b c c a c c c-\u003eMaybe b",
        "package": "simple-index",
        "partial": "Read",
        "signature": "b-\u003eIndexed a t t b t t t-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead4",
      "description": {
        "fct-descr": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the fourth index\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "b -\u003e Indexed a t1 t2 t3 b t5 t6 -\u003e Maybe a",
        "fct-source": "src/Data-SimpleIndex.html#ixRead4",
        "fct-type": "function",
        "title": "ixRead4"
      },
      "index": {
        "description": "Reads your datatype from the Indexed data by looking up value on the fourth index",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixRead4",
        "normalized": "a-\u003eIndexed b c c c a c c-\u003eMaybe b",
        "package": "simple-index",
        "partial": "Read",
        "signature": "b-\u003eIndexed a t t t b t t-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead5",
      "description": {
        "fct-descr": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the fifth index\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "b -\u003e Indexed a t1 t2 t3 t4 b t6 -\u003e Maybe a",
        "fct-source": "src/Data-SimpleIndex.html#ixRead5",
        "fct-type": "function",
        "title": "ixRead5"
      },
      "index": {
        "description": "Reads your datatype from the Indexed data by looking up value on the fifth index",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixRead5",
        "normalized": "a-\u003eIndexed b c c c c a c-\u003eMaybe b",
        "package": "simple-index",
        "partial": "Read",
        "signature": "b-\u003eIndexed a t t t t b t-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixRead6",
      "description": {
        "fct-descr": "\u003cp\u003eReads your datatype from the Indexed data by looking up a value on the sixth index\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "b -\u003e Indexed a t1 t2 t3 t4 t5 b -\u003e Maybe a",
        "fct-source": "src/Data-SimpleIndex.html#ixRead6",
        "fct-type": "function",
        "title": "ixRead6"
      },
      "index": {
        "description": "Reads your datatype from the Indexed data by looking up value on the sixth index",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixRead6",
        "normalized": "a-\u003eIndexed b c c c c c a-\u003eMaybe b",
        "package": "simple-index",
        "partial": "Read",
        "signature": "b-\u003eIndexed a t t t t t b-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-index/docs/Data-SimpleIndex.html#v:ixUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates a value in the Indexed data type and all the information\n in the indexes\n\u003c/p\u003e",
        "fct-module": "Data.SimpleIndex",
        "fct-package": "simple-index",
        "fct-signature": "Indexed a k i2 i3 i4 i5 i6 -\u003e k -\u003e (a -\u003e a) -\u003e Maybe (Indexed a k i2 i3 i4 i5 i6)",
        "fct-source": "src/Data-SimpleIndex.html#ixUpdate",
        "fct-type": "function",
        "title": "ixUpdate"
      },
      "index": {
        "description": "Updates value in the Indexed data type and all the information in the indexes",
        "hierarchy": "Data SimpleIndex",
        "module": "Data.SimpleIndex",
        "name": "ixUpdate",
        "normalized": "Indexed a b c c c c c-\u003eb-\u003e(a-\u003ea)-\u003eMaybe(Indexed a b c c c c c)",
        "package": "simple-index",
        "partial": "Update",
        "signature": "Indexed a k i i i i i-\u003ek-\u003e(a-\u003ea)-\u003eMaybe(Indexed a k i i i i i)"
      }
    }
  }
]