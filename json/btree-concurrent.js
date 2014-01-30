[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent BTree with relaxed balance.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eB-Trees with Relaxed Balance\u003c/em\u003e,\n        Kim S. Larsen and Rolf Fagerberg, 1993\n          Department of Mathematics and Computer Science, Odense University, Denmark.\n\u003c/p\u003e\u003cp\u003eThis implementation is not full, and has some serious limitations:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The rebalance logic to handle underful leafs has not been implemented.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldli\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldri\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efindMax\u003c/a\u003e\u003c/code\u003e may fail\n if run in parallel with \u003ccode\u003e\u003ca\u003erebalanceProcess\u003c/a\u003e\u003c/code\u003e. The current implementations of\n these operations are therefore considered unsafe.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efindMax\u003c/a\u003e\u003c/code\u003e may fail in the case where the outer leaf is empty.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIt is important to note, that these limitations are limitations of the\n current implementation and not of the original design. They are solely due to\n lack of time.\n\u003c/p\u003e\u003cp\u003eTo clarify: \u003ccode\u003eSafe operations\u003c/code\u003e are those that support rebalancing during the\n operations, while \u003ccode\u003eunsafe operations\u003c/code\u003e may fail if run during rebalancing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-BTree.html",
        "fct-type": "module",
        "title": "BTree"
      },
      "index": {
        "description": "Concurrent BTree with relaxed balance This module is inspired by the paper B-Trees with Relaxed Balance Kim Larsen and Rolf Fagerberg Department of Mathematics and Computer Science Odense University Denmark This implementation is not full and has some serious limitations The rebalance logic to handle underful leafs has not been implemented toList foldli foldri search findMin and findMax may fail if run in parallel with rebalanceProcess The current implementations of these operations are therefore considered unsafe findMin and findMax may fail in the case where the outer leaf is empty It is important to note that these limitations are limitations of the current implementation and not of the original design They are solely due to lack of time To clarify Safe operations are those that support rebalancing during the operations while unsafe operations may fail if run during rebalancing",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "BTree",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "BTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:Interval",
      "description": {
        "fct-descr": "\u003cp\u003eNeeded to generate the split-keys used in branch nodes.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "class",
        "fct-source": "src/Data-BTree-BTree.html#Interval",
        "fct-type": "class",
        "title": "Interval"
      },
      "index": {
        "description": "Needed to generate the split-keys used in branch nodes",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "Interval",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eSome type-fu. Context (Key k) gives the context (Ord k, Serialize k, ...)\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "class",
        "fct-source": "src/Data-BTree-BTree.html#Key",
        "fct-type": "class",
        "title": "Key"
      },
      "index": {
        "description": "Some type-fu Context Key gives the context Ord Serialize",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "Key",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:TreeBackend",
      "description": {
        "fct-descr": "\u003cp\u003eType aliases to shorten cache type.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-BTree.html#TreeBackend",
        "fct-type": "type",
        "title": "TreeBackend"
      },
      "index": {
        "description": "Type aliases to shorten cache type",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "TreeBackend",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Tree Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:TreeResult",
      "description": {
        "fct-descr": "\u003cp\u003eType aliases to shorten result types.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-BTree.html#TreeResult",
        "fct-type": "type",
        "title": "TreeResult"
      },
      "index": {
        "description": "Type aliases to shorten result types",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "TreeResult",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Tree Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eSome type-fu. Context (Value v) gives the context (Eq v, Serialize v, ...)\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "class",
        "fct-source": "src/Data-BTree-BTree.html#Value",
        "fct-type": "class",
        "title": "Value"
      },
      "index": {
        "description": "Some type-fu Context Value gives the context Eq Serialize",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "Value",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003eGiven two keys, a \u003c c, compute a new key b, such that a \u003c= b \u003c c.\n Default is to choose a, however a smarter instance exist for ByteString.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e k -\u003e k",
        "fct-source": "src/Data-BTree-BTree.html#between",
        "fct-type": "method",
        "title": "between"
      },
      "index": {
        "description": "Given two keys compute new key such that Default is to choose however smarter instance exist for ByteString",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "between",
        "normalized": "a-\u003ea-\u003ea",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003ek-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key from the tree. The deleted value is returned as\n \u003ccode\u003eJust v\u003c/code\u003e if present, otherwise \u003ccode\u003eNothing\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cpre\u003e execTree p $ delete 42\n\u003c/pre\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "k-\u003e TreeResult m mc k v (Maybe v)",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key from the tree The deleted value is returned as Just if present otherwise Nothing is returned execTree delete",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "delete",
        "normalized": "a-\u003eTreeResult b c a d(Maybe d)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003eTreeResult m mc k v(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:execTree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecTree\u003c/a\u003e\u003c/code\u003e takes a tree parameter and a group of operations in a BTreeM\n monad and exectures the operations.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param st k v-\u003e BTreeM m st k v a-\u003e m a",
        "fct-type": "function",
        "title": "execTree"
      },
      "index": {
        "description": "execTree takes tree parameter and group of operations in BTreeM monad and exectures the operations",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "execTree",
        "normalized": "Param a b c-\u003eBTreeM d a b c e-\u003ed e",
        "package": "btree-concurrent",
        "partial": "Tree",
        "signature": "Param st k v-\u003eBTreeM m st k v a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:findMax",
      "description": {
        "fct-descr": "\u003cp\u003eLookup maximum key\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "BTreeM m p k v (k, v)",
        "fct-source": "src/Data-BTree-BTree.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "Lookup maximum key",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "findMax",
        "normalized": "BTreeM a b c d(c,d)",
        "package": "btree-concurrent",
        "partial": "Max",
        "signature": "BTreeM m p k v(k,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:findMin",
      "description": {
        "fct-descr": "\u003cp\u003eLookup minimum key\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "BTreeM m p k v (k, v)",
        "fct-source": "src/Data-BTree-BTree.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "Lookup minimum key",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "findMin",
        "normalized": "BTreeM a b c d(c,d)",
        "package": "btree-concurrent",
        "partial": "Min",
        "signature": "BTreeM m p k v(k,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:foldli",
      "description": {
        "fct-descr": "\u003cp\u003eFold with key in left to right order.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e TreeResult m mc k v a",
        "fct-source": "src/Data-BTree-BTree.html#foldli",
        "fct-type": "function",
        "title": "foldli"
      },
      "index": {
        "description": "Fold with key in left to right order",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "foldli",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eTreeResult d e b c a",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eTreeResult m mc k v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:foldri",
      "description": {
        "fct-descr": "\u003cp\u003eFold with key in right to left order.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e TreeResult m mc k v a",
        "fct-source": "src/Data-BTree-BTree.html#foldri",
        "fct-type": "function",
        "title": "foldri"
      },
      "index": {
        "description": "Fold with key in right to left order",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "foldri",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTreeResult d e a b c",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eTreeResult m mc k v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:height",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the height of the tree, i.e. the longest node path from root to leaf.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "BTreeM m p k v Int",
        "fct-source": "src/Data-BTree-BTree.html#height",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "Calculate the height of the tree i.e the longest node path from root to leaf",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "height",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert key-value pair into current tree. After this operation\n \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ek\u003c/code\u003e will yield \u003ccode\u003eJust v\u003c/code\u003e. If the key already exists it is overridden.\n If you want the overridden value, or want different behaviour when the key\n exists see \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e may leave the tree \u003cem\u003eunbalanced\u003c/em\u003e, skewed or with underfull nodes.\n The tree can be re-balanced by starting a \u003ccode\u003e\u003ca\u003erebalanceProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e execTree p $ insert 42 \"foobar\"\n\u003c/pre\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "k-\u003e v-\u003e TreeResult m mc k v ()",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert key-value pair into current tree After this operation lookup will yield Just If the key already exists it is overridden If you want the overridden value or want different behaviour when the key exists see modify insert may leave the tree unbalanced skewed or with underfull nodes The tree can be re-balanced by starting rebalanceProcess execTree insert foobar",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eTreeResult c d a b()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003ev-\u003eTreeResult m mc k v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup key in current tree.\n\u003c/p\u003e\u003cpre\u003e execTree p $ do insert 42 \"foo\"      -- ()\n                 a \u003c- lookup 42       -- Just \"foo\"\n                 insert 42 \"bar\"      -- ()\n                 b \u003c- lookup 42       -- Just \"bar\"\n                 delete 42            -- Just \"bar\"\n                 c \u003c- lookup 42       -- Nothing\n                 return (a, b, c)     -- (Just \"foo\", Just \"bar\", Nothing)\n\u003c/pre\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "k-\u003e TreeResult m mc k v (Maybe v)",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup key in current tree execTree do insert foo lookup Just foo insert bar lookup Just bar delete Just bar lookup Nothing return Just foo Just bar Nothing",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "lookup",
        "normalized": "a-\u003eTreeResult b c a d(Maybe d)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003eTreeResult m mc k v(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:makeParam",
      "description": {
        "fct-descr": "\u003cp\u003eMake a new tree parameter from order, root node and cache parameter. When\n no root node is given, \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e 0 will be used and a new tree initialised\n here. This may overwrite an existing tree. Is used together with \u003ccode\u003e\u003ca\u003eexecTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "Int-\u003e Maybe (Ref (Node k1 v1))-\u003e p-\u003e mIO (Param p k1 v1)",
        "fct-type": "function",
        "title": "makeParam"
      },
      "index": {
        "description": "Make new tree parameter from order root node and cache parameter When no root node is given Ref will be used and new tree initialised here This may overwrite an existing tree Is used together with execTree",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "makeParam",
        "normalized": "Int-\u003eMaybe(Ref(Node a b))-\u003ec-\u003ed(Param c a b)",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": "Int-\u003eMaybe(Ref(Node k v))-\u003ep-\u003emIO(Param p k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Replace the value of \u003ccode\u003ek\u003c/code\u003e with \u003ccode\u003ef v v'\u003c/code\u003e, where \u003ccode\u003ev'\u003c/code\u003e is the\n current value. The old value \u003ccode\u003ev'\u003c/code\u003e is returned after the replacement. If no\n current value exist, \u003ccode\u003ev\u003c/code\u003e is inserted.\n\u003c/p\u003e\u003cp\u003eThe semantics is the same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e . const\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e execTree p $ do delete 42\n                 modify subtract 42 1    -- inserts    (42,  1)\n                 modify subtract 42 1    -- updates to (42,  0)\n                 modify subtract 42 1    -- updates to (42, -1)\n\u003c/pre\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "(v -\u003e v -\u003e v)-\u003e k-\u003e v-\u003e TreeResult m mc k v (Maybe v)",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "log Replace the value of with where is the current value The old value is returned after the replacement If no current value exist is inserted The semantics is the same as insertLookupWithKey const execTree do delete modify subtract inserts modify subtract updates to modify subtract updates to",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "modify",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eTreeResult c d b a(Maybe a)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eTreeResult m mc k v(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:rebalanceProcess",
      "description": {
        "fct-descr": "\u003cp\u003eA process for background rebalancing. Start inside its own thread, since\n this will run forever. Stop by killing the thread.\n\u003c/p\u003e\u003cpre\u003e pid \u003c- forkIO $ rebalanceProcess p\n -- Perform safe tree operations\n killThread pid\n\u003c/pre\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param (CacheSTMP m2 k v) k v-\u003e m (MVar ThreadId)",
        "fct-type": "function",
        "title": "rebalanceProcess"
      },
      "index": {
        "description": "process for background rebalancing Start inside its own thread since this will run forever Stop by killing the thread pid forkIO rebalanceProcess Perform safe tree operations killThread pid",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "rebalanceProcess",
        "normalized": "Param(CacheSTMP a b c)b c-\u003ea(MVar ThreadId)",
        "package": "btree-concurrent",
        "partial": "Process",
        "signature": "Param(CacheSTMP m k v)k v-\u003em(MVar ThreadId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eSave the tree by flushing the underlying cache to the permanent store and\n return a ref to the root node.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "TreeResult m mc k v (Ref (Node k v))",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Save the tree by flushing the underlying cache to the permanent store and return ref to the root node",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "save",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003eA generalised way of querying the tree. Given two keys \u003ccode\u003ea \u003c= b\u003c/code\u003e the\n function needs to answer \u003ccode\u003eTrue\u003c/code\u003e or \u003ccode\u003eFalse\u003c/code\u003e as to whether the interval \u003ccode\u003e[a,\n b]\u003c/code\u003e contains interesting keys. No all keys in the interval need be\n interesting. This function will then return all interesting keys in an\n efficient way.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "((k, k) -\u003e Bool)-\u003e TreeResult m mc k v [(k, v)]",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "generalised way of querying the tree Given two keys the function needs to answer True or False as to whether the interval contains interesting keys No all keys in the interval need be interesting This function will then return all interesting keys in an efficient way",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "search",
        "normalized": "((a,a)-\u003eBool)-\u003eTreeResult b c a d[(a,d)]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "((k,k)-\u003eBool)-\u003eTreeResult m mc k v[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:search_",
      "description": {
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "((k, k) -\u003e Bool)-\u003e TreeResult m mc k v ()",
        "fct-type": "function",
        "title": "search_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "search_",
        "normalized": "((a,a)-\u003eBool)-\u003eTreeResult b c a d()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "((k,k)-\u003eBool)-\u003eTreeResult m mc k v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the tree into a list of key-value pairs. This function may crash\n if used together with \u003ccode\u003e\u003ca\u003erebalanceProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.BTree",
        "fct-package": "btree-concurrent",
        "fct-signature": "TreeResult m mc k v [(k, v)]",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert the tree into list of key-value pairs This function may crash if used together with rebalanceProcess",
        "hierarchy": "Data BTree BTree",
        "module": "Data.BTree.BTree",
        "name": "toList",
        "normalized": "TreeResult a b c d[(c,d)]",
        "package": "btree-concurrent",
        "partial": "List",
        "signature": "TreeResult m mc k v[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-Cache-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "Class",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#t:Cache",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "class",
        "fct-source": "src/Data-BTree-Cache-Class.html#Cache",
        "fct-type": "class",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "Cache",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#t:R",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Cache-Class.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "R",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:Final",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "Final b",
        "fct-source": "src/Data-BTree-Cache-Class.html#R",
        "fct-type": "function",
        "title": "Final"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "Final",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:Inter",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "forall a . Inter (IO a) (a -\u003e STM ())",
        "fct-source": "src/Data-BTree-Cache-Class.html#R",
        "fct-type": "function",
        "title": "Inter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "Inter",
        "normalized": "a b Inter(IO b)(b-\u003eSTM())",
        "package": "btree-concurrent",
        "partial": "Inter",
        "signature": "forall a Inter(IO a)(a-\u003eSTM())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:eval",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "p -\u003e m a -\u003e IO a",
        "fct-source": "src/Data-BTree-Cache-Class.html#eval",
        "fct-type": "method",
        "title": "eval"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "eval",
        "normalized": "a-\u003eb c-\u003eIO c",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "p-\u003em a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:fetch",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m (Maybe v)",
        "fct-source": "src/Data-BTree-Cache-Class.html#fetch",
        "fct-type": "method",
        "title": "fetch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "fetch",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:remove",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe k -\u003e k -\u003e m ()",
        "fct-source": "src/Data-BTree-Cache-Class.html#remove",
        "fct-type": "method",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "remove",
        "normalized": "Maybe a-\u003ea-\u003eb()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Maybe k-\u003ek-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:store",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe k -\u003e k -\u003e v -\u003e m ()",
        "fct-source": "src/Data-BTree-Cache-Class.html#store",
        "fct-type": "method",
        "title": "store"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "store",
        "normalized": "Maybe a-\u003ea-\u003eb-\u003ec()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Maybe k-\u003ek-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:sync",
      "description": {
        "fct-module": "Data.BTree.Cache.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "p -\u003e IO ()",
        "fct-source": "src/Data-BTree-Cache-Class.html#sync",
        "fct-type": "method",
        "title": "sync"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache Class",
        "module": "Data.BTree.Cache.Class",
        "name": "sync",
        "normalized": "a-\u003eIO()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "p-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-Cache-STM.html",
        "fct-type": "module",
        "title": "STM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "STM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:AccessTime",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-Cache-STM.html#AccessTime",
        "fct-type": "type",
        "title": "AccessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "AccessTime",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Access Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:CacheSTM",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BTree-Cache-STM.html#CacheSTM",
        "fct-type": "newtype",
        "title": "CacheSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "CacheSTM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Cache STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:Exist",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Cache-STM.html#Exist",
        "fct-type": "data",
        "title": "Exist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Exist",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:Param",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Param",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:Ref",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Cache-STM.html#Ref",
        "fct-type": "data",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Ref",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:State",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Cache-STM.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "State",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:CacheSTM",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "CacheSTM",
        "fct-source": "src/Data-BTree-Cache-STM.html#CacheSTM",
        "fct-type": "function",
        "title": "CacheSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "CacheSTM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Cache STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Exist",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Exist",
        "fct-source": "src/Data-BTree-Cache-STM.html#Exist",
        "fct-type": "function",
        "title": "Exist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Exist",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:NoExist",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "NoExist",
        "fct-source": "src/Data-BTree-Cache-STM.html#Exist",
        "fct-type": "function",
        "title": "NoExist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "NoExist",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "No Exist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Param",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Param",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Read",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Read !(Maybe v)",
        "fct-source": "src/Data-BTree-Cache-STM.html#State",
        "fct-type": "function",
        "title": "Read"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Read",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Ref",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Ref",
        "fct-source": "src/Data-BTree-Cache-STM.html#Ref",
        "fct-type": "function",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Ref",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Write",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Write !(Maybe k) !(Maybe v)",
        "fct-source": "src/Data-BTree-Cache-STM.html#State",
        "fct-type": "function",
        "title": "Write"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "Write",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:cacheSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Int",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "cacheSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "cacheSize",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:debug",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#debug",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "debug",
        "normalized": "a-\u003eb()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:equals",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "State t (Either ByteString b) -\u003e State t1 (Either ByteString b) -\u003e Bool",
        "fct-source": "src/Data-BTree-Cache-STM.html#equals",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "equals",
        "normalized": "State a(Either ByteString b)-\u003eState a(Either ByteString b)-\u003eBool",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "State t(Either ByteString b)-\u003eState t(Either ByteString b)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:evalCacheSTM",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param m k v -\u003e CacheSTM m k v a -\u003e IO a",
        "fct-source": "src/Data-BTree-Cache-STM.html#evalCacheSTM",
        "fct-type": "function",
        "title": "evalCacheSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "evalCacheSTM",
        "normalized": "Param a b c-\u003eCacheSTM a b c d-\u003eIO d",
        "package": "btree-concurrent",
        "partial": "Cache STM",
        "signature": "Param m k v-\u003eCacheSTM m k v a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:fail",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "IO () -\u003e CacheSTM m k v a",
        "fct-source": "src/Data-BTree-Cache-STM.html#fail",
        "fct-type": "function",
        "title": "fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "fail",
        "normalized": "IO()-\u003eCacheSTM a b c d",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "IO()-\u003eCacheSTM m k v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:fetch",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e CacheSTM m k v (Maybe v)",
        "fct-source": "src/Data-BTree-Cache-STM.html#fetch",
        "fct-type": "function",
        "title": "fetch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "fetch",
        "normalized": "a-\u003eCacheSTM b a c(Maybe c)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003eCacheSTM m k v(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:fetchGen",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Int -\u003e k -\u003e CacheSTM m k v (Maybe v)",
        "fct-source": "src/Data-BTree-Cache-STM.html#fetchGen",
        "fct-type": "function",
        "title": "fetchGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "fetchGen",
        "normalized": "Int-\u003ea-\u003eCacheSTM b a c(Maybe c)",
        "package": "btree-concurrent",
        "partial": "Gen",
        "signature": "Int-\u003ek-\u003eCacheSTM m k v(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flipWrite",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe v -\u003e Either (State k v) (State k1 v, t, State t1 v) -\u003e Either (State k v) (State k1 v, t, State t1 v)",
        "fct-source": "src/Data-BTree-Cache-STM.html#flipWrite",
        "fct-type": "function",
        "title": "flipWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "flipWrite",
        "normalized": "Maybe a-\u003eEither(State b a)(State b a,c,State c a)-\u003eEither(State b a)(State b a,c,State c a)",
        "package": "btree-concurrent",
        "partial": "Write",
        "signature": "Maybe v-\u003eEither(State k v)(State k v,t,State t v)-\u003eEither(State k v)(State k v,t,State t v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flush",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param m t a -\u003e IO ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "flush",
        "normalized": "Param a b c-\u003eIO()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Param m t a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flushKey",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k1 v1 -\u003e (k1, Ref t (Either ByteString a)) -\u003e CacheSTM m k v (Maybe (Either (State t (Either ByteString a)) (State t (Either ByteString a), Int, State t (Either ByteString a))))",
        "fct-source": "src/Data-BTree-Cache-STM.html#flushKey",
        "fct-type": "function",
        "title": "flushKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "flushKey",
        "normalized": "HashTableSTM a b-\u003e(a,Ref c(Either ByteString d))-\u003eCacheSTM e a b(Maybe(Either(State c(Either ByteString d))(State c(Either ByteString d),Int,State c(Either ByteString d))))",
        "package": "btree-concurrent",
        "partial": "Key",
        "signature": "HashTableSTM k v-\u003e(k,Ref t(Either ByteString a))-\u003eCacheSTM m k v(Maybe(Either(State t(Either ByteString a))(State t(Either ByteString a),Int,State t(Either ByteString a))))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flushQ",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar [(k, Ref k v)]",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "flushQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "flushQ",
        "normalized": "TVar[(a,Ref a b)]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "TVar[(k,Ref k v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:genActive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar Int",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "genActive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "genActive",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:genId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar Int",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "genId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "genId",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:getGen",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "a -\u003e Either t (t, a, t) -\u003e t",
        "fct-source": "src/Data-BTree-Cache-STM.html#getGen",
        "fct-type": "function",
        "title": "getGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "getGen",
        "normalized": "a-\u003eEither b(b,a,b)-\u003eb",
        "package": "btree-concurrent",
        "partial": "Gen",
        "signature": "a-\u003eEither t(t,a,t)-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:getRef",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e t (t1 STM) (Ref k (Either ByteString b))",
        "fct-source": "src/Data-BTree-Cache-STM.html#getRef",
        "fct-type": "function",
        "title": "getRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "getRef",
        "normalized": "a-\u003eb(b STM)(Ref a(Either ByteString c))",
        "package": "btree-concurrent",
        "partial": "Ref",
        "signature": "k-\u003et(t STM)(Ref k(Either ByteString b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:keys",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "CacheSTM m k v [k]",
        "fct-source": "src/Data-BTree-Cache-STM.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "keys",
        "normalized": "CacheSTM a b c[b]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "CacheSTM m k v[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:liftSTM",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "STM a -\u003e CacheSTM m k v a",
        "fct-source": "src/Data-BTree-Cache-STM.html#liftSTM",
        "fct-type": "function",
        "title": "liftSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "liftSTM",
        "normalized": "STM a-\u003eCacheSTM b c d a",
        "package": "btree-concurrent",
        "partial": "STM",
        "signature": "STM a-\u003eCacheSTM m k v a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:maybeQueue",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Bool -\u003e TVar (Either (State t2 t3) (State t6 t7, t4, t5)) -\u003e (k, Ref k v) -\u003e t (t1 STM) ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#maybeQueue",
        "fct-type": "function",
        "title": "maybeQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "maybeQueue",
        "normalized": "Bool-\u003eTVar(Either(State a a)(State a a,a,a))-\u003e(b,Ref b c)-\u003ea(a STM)()",
        "package": "btree-concurrent",
        "partial": "Queue",
        "signature": "Bool-\u003eTVar(Either(State t t)(State t t,t,t))-\u003e(k,Ref k v)-\u003et(t STM)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:mtoS",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe a -\u003e [Char]",
        "fct-source": "src/Data-BTree-Cache-STM.html#mtoS",
        "fct-type": "function",
        "title": "mtoS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "mtoS",
        "normalized": "Maybe a-\u003e[Char]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Maybe a-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:newRef",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe k -\u003e k -\u003e Maybe (Either ByteString v) -\u003e t (t1 STM) ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#newRef",
        "fct-type": "function",
        "title": "newRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "newRef",
        "normalized": "Maybe a-\u003ea-\u003eMaybe(Either ByteString b)-\u003ec(c STM)()",
        "package": "btree-concurrent",
        "partial": "Ref",
        "signature": "Maybe k-\u003ek-\u003eMaybe(Either ByteString v)-\u003et(t STM)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:refExt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar Exist",
        "fct-source": "src/Data-BTree-Cache-STM.html#Ref",
        "fct-type": "function",
        "title": "refExt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "refExt",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:refST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar (Either (State k v) (State k v, Int, State k v))",
        "fct-source": "src/Data-BTree-Cache-STM.html#Ref",
        "fct-type": "function",
        "title": "refST"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "refST",
        "normalized": "TVar(Either(State a b)(State a b,Int,State a b))",
        "package": "btree-concurrent",
        "partial": "ST",
        "signature": "TVar(Either(State k v)(State k v,Int,State k v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:remove",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe k -\u003e k -\u003e CacheSTM m k v ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "remove",
        "normalized": "Maybe a-\u003ea-\u003eCacheSTM b a c()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Maybe k-\u003ek-\u003eCacheSTM m k v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:runCacheSTM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "ReaderT (Param m k v) (ErrorT (IO ()) STM) a",
        "fct-source": "src/Data-BTree-Cache-STM.html#CacheSTM",
        "fct-type": "function",
        "title": "runCacheSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "runCacheSTM",
        "normalized": "ReaderT(Param a b c)(ErrorT(IO())STM)d",
        "package": "btree-concurrent",
        "partial": "Cache STM",
        "signature": "ReaderT(Param m k v)(ErrorT(IO())STM)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:sizedParam",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Int -\u003e (forall a.  m a -\u003e IO a) -\u003e IO (Param m k v)",
        "fct-source": "src/Data-BTree-Cache-STM.html#sizedParam",
        "fct-type": "function",
        "title": "sizedParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "sizedParam",
        "normalized": "Int-\u003e(a b c d-\u003eIO d)-\u003eIO(Param c e f)",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": "Int-\u003e(forall a. m a-\u003eIO a)-\u003eIO(Param m k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:stm",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "m a -\u003e t (t1 m) a",
        "fct-source": "src/Data-BTree-Cache-STM.html#stm",
        "fct-type": "function",
        "title": "stm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "stm",
        "normalized": "a b-\u003ec(c a)b",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "m a-\u003et(t m)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:store",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe k -\u003e k -\u003e v -\u003e CacheSTM m k v ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#store",
        "fct-type": "function",
        "title": "store"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "store",
        "normalized": "Maybe a-\u003ea-\u003eb-\u003eCacheSTM c a b()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Maybe k-\u003ek-\u003ev-\u003eCacheSTM m k v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:sync",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param m t b -\u003e IO ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#sync",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "sync",
        "normalized": "Param a b c-\u003eIO()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "Param m t b-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:table",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k (Ref k (Either ByteString v))",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "table"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "table",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:timestamp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "UTCTime",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "timestamp",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:toIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "forall a.  m a -\u003e IO a",
        "fct-source": "src/Data-BTree-Cache-STM.html#Param",
        "fct-type": "function",
        "title": "toIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "toIO",
        "normalized": "a b c d-\u003eIO d",
        "package": "btree-concurrent",
        "partial": "IO",
        "signature": "forall a. m a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:trace",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-BTree-Cache-STM.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "trace",
        "normalized": "a-\u003ea",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:updateTag",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Maybe k -\u003e k -\u003e CacheSTM m k v ()",
        "fct-source": "src/Data-BTree-Cache-STM.html#updateTag",
        "fct-type": "function",
        "title": "updateTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "updateTag",
        "normalized": "Maybe a-\u003ea-\u003eCacheSTM b a c()",
        "package": "btree-concurrent",
        "partial": "Tag",
        "signature": "Maybe k-\u003ek-\u003eCacheSTM m k v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:value",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "State t (Either ByteString b) -\u003e Maybe b",
        "fct-source": "src/Data-BTree-Cache-STM.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "value",
        "normalized": "State a(Either ByteString b)-\u003eMaybe b",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "State t(Either ByteString b)-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:withGeneration",
      "description": {
        "fct-module": "Data.BTree.Cache.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param m1 k v -\u003e (Int -\u003e m b) -\u003e m b",
        "fct-source": "src/Data-BTree-Cache-STM.html#withGeneration",
        "fct-type": "function",
        "title": "withGeneration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Cache STM",
        "module": "Data.BTree.Cache.STM",
        "name": "withGeneration",
        "normalized": "Param a b c-\u003e(Int-\u003ea d)-\u003ea d",
        "package": "btree-concurrent",
        "partial": "Generation",
        "signature": "Param m k v-\u003e(Int-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "Class",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:Cp",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-Class.html#Cp",
        "fct-type": "type",
        "title": "Cp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "Cp",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Cp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:N",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-Class.html#N",
        "fct-type": "type",
        "title": "N"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "N",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:R",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-Class.html#R",
        "fct-type": "type",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "R",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:S",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-Class.html#S",
        "fct-type": "type",
        "title": "S"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "S",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:Tree",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "class",
        "fct-source": "src/Data-BTree-Class.html#Tree",
        "fct-type": "class",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "Tree",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:delete",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m (Maybe v)",
        "fct-source": "src/Data-BTree-Class.html#delete",
        "fct-type": "method",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "delete",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:delete_",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m ()",
        "fct-source": "src/Data-BTree-Class.html#delete_",
        "fct-type": "method",
        "title": "delete_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "delete_",
        "normalized": "a-\u003eb()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:foldli",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e m a",
        "fct-source": "src/Data-BTree-Class.html#foldli",
        "fct-type": "method",
        "title": "foldli"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "foldli",
        "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003ed a",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:lookup",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m (Maybe v)",
        "fct-source": "src/Data-BTree-Class.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "lookup",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:member",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m Bool",
        "fct-source": "src/Data-BTree-Class.html#member",
        "fct-type": "method",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "member",
        "normalized": "a-\u003eb Bool",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:modify",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e m (Maybe v)",
        "fct-source": "src/Data-BTree-Class.html#modify",
        "fct-type": "method",
        "title": "modify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "modify",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec(Maybe a)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:modifyMany",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "[(v -\u003e v -\u003e v, k, v)] -\u003e m ()",
        "fct-source": "src/Data-BTree-Class.html#modifyMany",
        "fct-type": "method",
        "title": "modifyMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "modifyMany",
        "normalized": "[(a-\u003ea-\u003ea,b,a)]-\u003ec()",
        "package": "btree-concurrent",
        "partial": "Many",
        "signature": "[(v-\u003ev-\u003ev,k,v)]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:modify_",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e m ()",
        "fct-source": "src/Data-BTree-Class.html#modify_",
        "fct-type": "method",
        "title": "modify_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "modify_",
        "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:search",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "((k, k) -\u003e Bool) -\u003e m [(k, v)]",
        "fct-source": "src/Data-BTree-Class.html#search",
        "fct-type": "method",
        "title": "search"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "search",
        "normalized": "((a,a)-\u003eBool)-\u003eb[(a,c)]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "((k,k)-\u003eBool)-\u003em[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:toList",
      "description": {
        "fct-module": "Data.BTree.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "m [(k, v)]",
        "fct-source": "src/Data-BTree-Class.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Class",
        "module": "Data.BTree.Class",
        "name": "toList",
        "normalized": "a[(b,c)]",
        "package": "btree-concurrent",
        "partial": "List",
        "signature": "m[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA hashtable in STM.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-HashTable-STM.html",
        "fct-type": "module",
        "title": "STM"
      },
      "index": {
        "description": "hashtable in STM",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "STM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#t:HashTableSTM",
      "description": {
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-HashTable-STM.html#HashTableSTM",
        "fct-type": "data",
        "title": "HashTableSTM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "HashTableSTM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Hash Table STM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key from HashTable.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k v -\u003e k -\u003e STM ()",
        "fct-source": "src/Data-BTree-HashTable-STM.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key from HashTable",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "delete",
        "normalized": "HashTableSTM a b-\u003ea-\u003eSTM()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "HashTableSTM k v-\u003ek-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a key/value pair into HashTable.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k v -\u003e k -\u003e v -\u003e STM ()",
        "fct-source": "src/Data-BTree-HashTable-STM.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert key value pair into HashTable",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "insert",
        "normalized": "HashTableSTM a b-\u003ea-\u003eb-\u003eSTM()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "HashTableSTM k v-\u003ek-\u003ev-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Get a list of keys.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k v -\u003e STM [k]",
        "fct-source": "src/Data-BTree-HashTable-STM.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Get list of keys",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "keys",
        "normalized": "HashTableSTM a b-\u003eSTM[a]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "HashTableSTM k v-\u003eSTM[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup a key in HashTable.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k v -\u003e k -\u003e STM (Maybe v)",
        "fct-source": "src/Data-BTree-HashTable-STM.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup key in HashTable",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "lookup",
        "normalized": "HashTableSTM a b-\u003ea-\u003eSTM(Maybe b)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "HashTableSTM k v-\u003ek-\u003eSTM(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:newSized",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new HashTable with fixed size\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "Int -\u003e IO (HashTableSTM k v)",
        "fct-source": "src/Data-BTree-HashTable-STM.html#newSized",
        "fct-type": "function",
        "title": "newSized"
      },
      "index": {
        "description": "Create new HashTable with fixed size",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "newSized",
        "normalized": "Int-\u003eIO(HashTableSTM a b)",
        "package": "btree-concurrent",
        "partial": "Sized",
        "signature": "Int-\u003eIO(HashTableSTM k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Grab the size of the hash table.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k v -\u003e STM Int",
        "fct-source": "src/Data-BTree-HashTable-STM.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Grab the size of the hash table",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "size",
        "normalized": "HashTableSTM a b-\u003eSTM Int",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "HashTableSTM k v-\u003eSTM Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Get a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.BTree.HashTable.STM",
        "fct-package": "btree-concurrent",
        "fct-signature": "HashTableSTM k v -\u003e STM [(k, v)]",
        "fct-source": "src/Data-BTree-HashTable-STM.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Get list of key value pairs",
        "hierarchy": "Data BTree HashTable STM",
        "module": "Data.BTree.HashTable.STM",
        "name": "toList",
        "normalized": "HashTableSTM a b-\u003eSTM[(a,b)]",
        "package": "btree-concurrent",
        "partial": "List",
        "signature": "HashTableSTM k v-\u003eSTM[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-KVBackend-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Class",
        "module": "Data.BTree.KVBackend.Class",
        "name": "Class",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#t:KVBackend",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "class",
        "fct-source": "src/Data-BTree-KVBackend-Class.html#KVBackend",
        "fct-type": "class",
        "title": "KVBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Class",
        "module": "Data.BTree.KVBackend.Class",
        "name": "KVBackend",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "KVBackend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#v:fetch",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m (Maybe v)",
        "fct-source": "src/Data-BTree-KVBackend-Class.html#fetch",
        "fct-type": "method",
        "title": "fetch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Class",
        "module": "Data.BTree.KVBackend.Class",
        "name": "fetch",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em(Maybe v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#v:remove",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e m ()",
        "fct-source": "src/Data-BTree-KVBackend-Class.html#remove",
        "fct-type": "method",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Class",
        "module": "Data.BTree.KVBackend.Class",
        "name": "remove",
        "normalized": "a-\u003eb()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#v:store",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Class",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e v -\u003e m ()",
        "fct-source": "src/Data-BTree-KVBackend-Class.html#store",
        "fct-type": "method",
        "title": "store"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Class",
        "module": "Data.BTree.KVBackend.Class",
        "name": "store",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003ev-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-KVBackend-Files.html",
        "fct-type": "module",
        "title": "Files"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "Files",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#t:FilesKV",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#FilesKV",
        "fct-type": "newtype",
        "title": "FilesKV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "FilesKV",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Files KV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#t:Param",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "type",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#Param",
        "fct-type": "type",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "Param",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:FilesKV",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "FilesKV",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#FilesKV",
        "fct-type": "function",
        "title": "FilesKV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "FilesKV",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Files KV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:evalFilesKV",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "FilePath -\u003e FilesKV a -\u003e IO a",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#evalFilesKV",
        "fct-type": "function",
        "title": "evalFilesKV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "evalFilesKV",
        "normalized": "FilePath-\u003eFilesKV a-\u003eIO a",
        "package": "btree-concurrent",
        "partial": "Files KV",
        "signature": "FilePath-\u003eFilesKV a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:fetch",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e FilesKV (Maybe a)",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#fetch",
        "fct-type": "function",
        "title": "fetch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "fetch",
        "normalized": "a-\u003eFilesKV(Maybe b)",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003eFilesKV(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:filePath",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e FilesKV FilePath",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#filePath",
        "fct-type": "function",
        "title": "filePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "filePath",
        "normalized": "a-\u003eFilesKV FilePath",
        "package": "btree-concurrent",
        "partial": "Path",
        "signature": "k-\u003eFilesKV FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:remove",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e FilesKV ()",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "remove",
        "normalized": "a-\u003eFilesKV()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003eFilesKV()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:runFilesKV",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "ReaderT Param IO a",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#FilesKV",
        "fct-type": "function",
        "title": "runFilesKV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "runFilesKV",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Files KV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:store",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "k -\u003e a -\u003e FilesKV ()",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#store",
        "fct-type": "function",
        "title": "store"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "store",
        "normalized": "a-\u003eb-\u003eFilesKV()",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "k-\u003ea-\u003eFilesKV()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:traceThis",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Files",
        "fct-package": "btree-concurrent",
        "fct-signature": "b -\u003e b",
        "fct-source": "src/Data-BTree-KVBackend-Files.html#traceThis",
        "fct-type": "function",
        "title": "traceThis"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Files",
        "module": "Data.BTree.KVBackend.Files",
        "name": "traceThis",
        "normalized": "a-\u003ea",
        "package": "btree-concurrent",
        "partial": "This",
        "signature": "b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Util",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-KVBackend-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Util",
        "module": "Data.BTree.KVBackend.Util",
        "name": "Util",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#v:atomicFileWrite",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Util",
        "fct-package": "btree-concurrent",
        "fct-signature": "[Char] -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Data-BTree-KVBackend-Util.html#atomicFileWrite",
        "fct-type": "function",
        "title": "atomicFileWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Util",
        "module": "Data.BTree.KVBackend.Util",
        "name": "atomicFileWrite",
        "normalized": "[Char]-\u003eByteString-\u003eIO()",
        "package": "btree-concurrent",
        "partial": "File Write",
        "signature": "[Char]-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#v:safeReadFile",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Util",
        "fct-package": "btree-concurrent",
        "fct-signature": "FilePath -\u003e IO ByteString",
        "fct-source": "src/Data-BTree-KVBackend-Util.html#safeReadFile",
        "fct-type": "function",
        "title": "safeReadFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Util",
        "module": "Data.BTree.KVBackend.Util",
        "name": "safeReadFile",
        "normalized": "FilePath-\u003eIO ByteString",
        "package": "btree-concurrent",
        "partial": "Read File",
        "signature": "FilePath-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#v:safeWriteFile",
      "description": {
        "fct-module": "Data.BTree.KVBackend.Util",
        "fct-package": "btree-concurrent",
        "fct-signature": "[Char] -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Data-BTree-KVBackend-Util.html#safeWriteFile",
        "fct-type": "function",
        "title": "safeWriteFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree KVBackend Util",
        "module": "Data.BTree.KVBackend.Util",
        "name": "safeWriteFile",
        "normalized": "[Char]-\u003eByteString-\u003eIO()",
        "package": "btree-concurrent",
        "partial": "Write File",
        "signature": "[Char]-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "module",
        "fct-source": "src/Data-BTree-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Types",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:BTreeM",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BTree-Types.html#BTreeM",
        "fct-type": "newtype",
        "title": "BTreeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "BTreeM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "BTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:Node",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Types.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Node",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:Param",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "data",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Param",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:Ref",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BTree-Types.html#Ref",
        "fct-type": "newtype",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Ref",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:BTreeM",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "BTreeM",
        "fct-source": "src/Data-BTree-Types.html#BTreeM",
        "fct-type": "function",
        "title": "BTreeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "BTreeM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "BTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Branch",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "Branch [k] [Ref (Node k v)]",
        "fct-source": "src/Data-BTree-Types.html#Node",
        "fct-type": "function",
        "title": "Branch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Branch",
        "normalized": "Branch[a][Ref(Node a b)]",
        "package": "btree-concurrent",
        "partial": "Branch",
        "signature": "Branch[k][Ref(Node k v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Leaf",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "Leaf (Map k v)",
        "fct-source": "src/Data-BTree-Types.html#Node",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Leaf",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Param",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "Param",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Param",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Ref",
      "description": {
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "Ref Word64",
        "fct-source": "src/Data-BTree-Types.html#Ref",
        "fct-type": "function",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "Ref",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:marked",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "TChan k",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "function",
        "title": "marked"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "marked",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:order",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "Int",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "function",
        "title": "order"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "order",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:root",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar (Ref (Node k v))",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "root",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:runBTreeM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "ReaderT (Param st k v) m a",
        "fct-source": "src/Data-BTree-Types.html#BTreeM",
        "fct-type": "function",
        "title": "runBTreeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "runBTreeM",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "BTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:state",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "st",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "state",
        "normalized": "",
        "package": "btree-concurrent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:unused",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BTree.Types",
        "fct-package": "btree-concurrent",
        "fct-signature": "TVar [Ref (Node k v)]",
        "fct-source": "src/Data-BTree-Types.html#Param",
        "fct-type": "function",
        "title": "unused"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BTree Types",
        "module": "Data.BTree.Types",
        "name": "unused",
        "normalized": "TVar[Ref(Node a b)]",
        "package": "btree-concurrent",
        "partial": "",
        "signature": "TVar[Ref(Node k v)]"
      }
    }
  }
]