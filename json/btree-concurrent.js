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
        "word": "btree-concurrent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent BTree with relaxed balance.\n\u003c/p\u003e\u003cp\u003eThis module is inspired by the paper\n      \u003cem\u003eB-Trees with Relaxed Balance\u003c/em\u003e,\n        Kim S. Larsen and Rolf Fagerberg, 1993\n          Department of Mathematics and Computer Science, Odense University, Denmark.\n\u003c/p\u003e\u003cp\u003eThis implementation is not full, and has some serious limitations:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The rebalance logic to handle underful leafs has not been implemented.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldli\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efoldri\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efindMax\u003c/a\u003e\u003c/code\u003e may fail\n if run in parallel with \u003ccode\u003e\u003ca\u003erebalanceProcess\u003c/a\u003e\u003c/code\u003e. The current implementations of\n these operations are therefore considered unsafe.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efindMin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efindMax\u003c/a\u003e\u003c/code\u003e may fail in the case where the outer leaf is empty.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIt is important to note, that these limitations are limitations of the\n current implementation and not of the original design. They are solely due to\n lack of time.\n\u003c/p\u003e\u003cp\u003eTo clarify: \u003ccode\u003eSafe operations\u003c/code\u003e are those that support rebalancing during the\n operations, while \u003ccode\u003eunsafe operations\u003c/code\u003e may fail if run during rebalancing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BTree.BTree",
          "name": "BTree",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-BTree.html",
          "type": "module"
        },
        "index": {
          "description": "Concurrent BTree with relaxed balance This module is inspired by the paper B-Trees with Relaxed Balance Kim Larsen and Rolf Fagerberg Department of Mathematics and Computer Science Odense University Denmark This implementation is not full and has some serious limitations The rebalance logic to handle underful leafs has not been implemented toList foldli foldri search findMin and findMax may fail if run in parallel with rebalanceProcess The current implementations of these operations are therefore considered unsafe findMin and findMax may fail in the case where the outer leaf is empty It is important to note that these limitations are limitations of the current implementation and not of the original design They are solely due to lack of time To clarify Safe operations are those that support rebalancing during the operations while unsafe operations may fail if run during rebalancing",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "BTree",
          "package": "btree-concurrent",
          "partial": "BTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeeded to generate the split-keys used in branch nodes.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "Interval",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-BTree.html#Interval",
          "type": "class"
        },
        "index": {
          "description": "Needed to generate the split-keys used in branch nodes",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "Interval",
          "package": "btree-concurrent",
          "partial": "Interval",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome type-fu. Context (Key k) gives the context (Ord k, Serialize k, ...)\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "Key",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-BTree.html#Key",
          "type": "class"
        },
        "index": {
          "description": "Some type-fu Context Key gives the context Ord Serialize",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "Key",
          "package": "btree-concurrent",
          "partial": "Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType aliases to shorten cache type.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "TreeBackend",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-BTree.html#TreeBackend",
          "type": "type"
        },
        "index": {
          "description": "Type aliases to shorten cache type",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "TreeBackend",
          "package": "btree-concurrent",
          "partial": "Tree Backend",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:TreeBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType aliases to shorten result types.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "TreeResult",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-BTree.html#TreeResult",
          "type": "type"
        },
        "index": {
          "description": "Type aliases to shorten result types",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "TreeResult",
          "package": "btree-concurrent",
          "partial": "Tree Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:TreeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome type-fu. Context (Value v) gives the context (Eq v, Serialize v, ...)\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "Value",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-BTree.html#Value",
          "type": "class"
        },
        "index": {
          "description": "Some type-fu Context Value gives the context Eq Serialize",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "Value",
          "package": "btree-concurrent",
          "partial": "Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two keys, a \u003c c, compute a new key b, such that a \u003c= b \u003c c.\n Default is to choose a, however a smarter instance exist for ByteString.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "between",
          "package": "btree-concurrent",
          "signature": "k -\u003e k -\u003e k",
          "source": "src/Data-BTree-BTree.html#between",
          "type": "method"
        },
        "index": {
          "description": "Given two keys compute new key such that Default is to choose however smarter instance exist for ByteString",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "between",
          "normalized": "a-\u003ea-\u003ea",
          "package": "btree-concurrent",
          "signature": "k-\u003ek-\u003ek",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key from the tree. The deleted value is returned as\n \u003ccode\u003eJust v\u003c/code\u003e if present, otherwise \u003ccode\u003eNothing\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cpre\u003e execTree p $ delete 42\n\u003c/pre\u003e",
          "module": "Data.BTree.BTree",
          "name": "delete",
          "package": "btree-concurrent",
          "signature": "k-\u003e TreeResult m mc k v (Maybe v)",
          "type": "function"
        },
        "index": {
          "description": "log Delete key from the tree The deleted value is returned as Just if present otherwise Nothing is returned execTree delete",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "delete",
          "normalized": "a-\u003eTreeResult b c a d(Maybe d)",
          "package": "btree-concurrent",
          "signature": "k-\u003eTreeResult m mc k v(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecTree\u003c/a\u003e\u003c/code\u003e takes a tree parameter and a group of operations in a BTreeM\n monad and exectures the operations.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "execTree",
          "package": "btree-concurrent",
          "signature": "Param st k v-\u003e BTreeM m st k v a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "execTree takes tree parameter and group of operations in BTreeM monad and exectures the operations",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "execTree",
          "normalized": "Param a b c-\u003eBTreeM d a b c e-\u003ed e",
          "package": "btree-concurrent",
          "partial": "Tree",
          "signature": "Param st k v-\u003eBTreeM m st k v a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:execTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup maximum key\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "findMax",
          "package": "btree-concurrent",
          "signature": "BTreeM m p k v (k, v)",
          "source": "src/Data-BTree-BTree.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "Lookup maximum key",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "findMax",
          "normalized": "BTreeM a b c d(c,d)",
          "package": "btree-concurrent",
          "partial": "Max",
          "signature": "BTreeM m p k v(k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup minimum key\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "findMin",
          "package": "btree-concurrent",
          "signature": "BTreeM m p k v (k, v)",
          "source": "src/Data-BTree-BTree.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "Lookup minimum key",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "findMin",
          "normalized": "BTreeM a b c d(c,d)",
          "package": "btree-concurrent",
          "partial": "Min",
          "signature": "BTreeM m p k v(k,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold with key in left to right order.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "foldli",
          "package": "btree-concurrent",
          "signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e TreeResult m mc k v a",
          "source": "src/Data-BTree-BTree.html#foldli",
          "type": "function"
        },
        "index": {
          "description": "Fold with key in left to right order",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "foldli",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eTreeResult d e b c a",
          "package": "btree-concurrent",
          "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003eTreeResult m mc k v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:foldli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold with key in right to left order.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "foldri",
          "package": "btree-concurrent",
          "signature": "(k -\u003e v -\u003e a -\u003e a) -\u003e a -\u003e TreeResult m mc k v a",
          "source": "src/Data-BTree-BTree.html#foldri",
          "type": "function"
        },
        "index": {
          "description": "Fold with key in right to left order",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "foldri",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eTreeResult d e a b c",
          "package": "btree-concurrent",
          "signature": "(k-\u003ev-\u003ea-\u003ea)-\u003ea-\u003eTreeResult m mc k v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:foldri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the height of the tree, i.e. the longest node path from root to leaf.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "height",
          "package": "btree-concurrent",
          "signature": "BTreeM m p k v Int",
          "source": "src/Data-BTree-BTree.html#height",
          "type": "function"
        },
        "index": {
          "description": "Calculate the height of the tree i.e the longest node path from root to leaf",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "height",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert key-value pair into current tree. After this operation\n \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ek\u003c/code\u003e will yield \u003ccode\u003eJust v\u003c/code\u003e. If the key already exists it is overridden.\n If you want the overridden value, or want different behaviour when the key\n exists see \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e may leave the tree \u003cem\u003eunbalanced\u003c/em\u003e, skewed or with underfull nodes.\n The tree can be re-balanced by starting a \u003ccode\u003e\u003ca\u003erebalanceProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e execTree p $ insert 42 \"foobar\"\n\u003c/pre\u003e",
          "module": "Data.BTree.BTree",
          "name": "insert",
          "package": "btree-concurrent",
          "signature": "k-\u003e v-\u003e TreeResult m mc k v ()",
          "type": "function"
        },
        "index": {
          "description": "log Insert key-value pair into current tree After this operation lookup will yield Just If the key already exists it is overridden If you want the overridden value or want different behaviour when the key exists see modify insert may leave the tree unbalanced skewed or with underfull nodes The tree can be re-balanced by starting rebalanceProcess execTree insert foobar",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eTreeResult c d a b()",
          "package": "btree-concurrent",
          "signature": "k-\u003ev-\u003eTreeResult m mc k v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup key in current tree.\n\u003c/p\u003e\u003cpre\u003e execTree p $ do insert 42 \"foo\"      -- ()\n                 a \u003c- lookup 42       -- Just \"foo\"\n                 insert 42 \"bar\"      -- ()\n                 b \u003c- lookup 42       -- Just \"bar\"\n                 delete 42            -- Just \"bar\"\n                 c \u003c- lookup 42       -- Nothing\n                 return (a, b, c)     -- (Just \"foo\", Just \"bar\", Nothing)\n\u003c/pre\u003e",
          "module": "Data.BTree.BTree",
          "name": "lookup",
          "package": "btree-concurrent",
          "signature": "k-\u003e TreeResult m mc k v (Maybe v)",
          "type": "function"
        },
        "index": {
          "description": "log Lookup key in current tree execTree do insert foo lookup Just foo insert bar lookup Just bar delete Just bar lookup Nothing return Just foo Just bar Nothing",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "lookup",
          "normalized": "a-\u003eTreeResult b c a d(Maybe d)",
          "package": "btree-concurrent",
          "signature": "k-\u003eTreeResult m mc k v(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new tree parameter from order, root node and cache parameter. When\n no root node is given, \u003ccode\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/code\u003e 0 will be used and a new tree initialised\n here. This may overwrite an existing tree. Is used together with \u003ccode\u003e\u003ca\u003eexecTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "makeParam",
          "package": "btree-concurrent",
          "signature": "Int-\u003e Maybe (Ref (Node k1 v1))-\u003e p-\u003e mIO (Param p k1 v1)",
          "type": "function"
        },
        "index": {
          "description": "Make new tree parameter from order root node and cache parameter When no root node is given Ref will be used and new tree initialised here This may overwrite an existing tree Is used together with execTree",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "makeParam",
          "normalized": "Int-\u003eMaybe(Ref(Node a b))-\u003ec-\u003ed(Param c a b)",
          "package": "btree-concurrent",
          "partial": "Param",
          "signature": "Int-\u003eMaybe(Ref(Node k v))-\u003ep-\u003emIO(Param p k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:makeParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Replace the value of \u003ccode\u003ek\u003c/code\u003e with \u003ccode\u003ef v v'\u003c/code\u003e, where \u003ccode\u003ev'\u003c/code\u003e is the\n current value. The old value \u003ccode\u003ev'\u003c/code\u003e is returned after the replacement. If no\n current value exist, \u003ccode\u003ev\u003c/code\u003e is inserted.\n\u003c/p\u003e\u003cp\u003eThe semantics is the same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertLookupWithKey\u003c/a\u003e\u003c/code\u003e . const\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e execTree p $ do delete 42\n                 modify subtract 42 1    -- inserts    (42,  1)\n                 modify subtract 42 1    -- updates to (42,  0)\n                 modify subtract 42 1    -- updates to (42, -1)\n\u003c/pre\u003e",
          "module": "Data.BTree.BTree",
          "name": "modify",
          "package": "btree-concurrent",
          "signature": "(v -\u003e v -\u003e v)-\u003e k-\u003e v-\u003e TreeResult m mc k v (Maybe v)",
          "type": "function"
        },
        "index": {
          "description": "log Replace the value of with where is the current value The old value is returned after the replacement If no current value exist is inserted The semantics is the same as insertLookupWithKey const execTree do delete modify subtract inserts modify subtract updates to modify subtract updates to",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "modify",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eTreeResult c d b a(Maybe a)",
          "package": "btree-concurrent",
          "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003eTreeResult m mc k v(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process for background rebalancing. Start inside its own thread, since\n this will run forever. Stop by killing the thread.\n\u003c/p\u003e\u003cpre\u003e pid \u003c- forkIO $ rebalanceProcess p\n -- Perform safe tree operations\n killThread pid\n\u003c/pre\u003e",
          "module": "Data.BTree.BTree",
          "name": "rebalanceProcess",
          "package": "btree-concurrent",
          "signature": "Param (CacheSTMP m2 k v) k v-\u003e m (MVar ThreadId)",
          "type": "function"
        },
        "index": {
          "description": "process for background rebalancing Start inside its own thread since this will run forever Stop by killing the thread pid forkIO rebalanceProcess Perform safe tree operations killThread pid",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "rebalanceProcess",
          "normalized": "Param(CacheSTMP a b c)b c-\u003ea(MVar ThreadId)",
          "package": "btree-concurrent",
          "partial": "Process",
          "signature": "Param(CacheSTMP m k v)k v-\u003em(MVar ThreadId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:rebalanceProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the tree by flushing the underlying cache to the permanent store and\n return a ref to the root node.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "save",
          "package": "btree-concurrent",
          "signature": "TreeResult m mc k v (Ref (Node k v))",
          "type": "function"
        },
        "index": {
          "description": "Save the tree by flushing the underlying cache to the permanent store and return ref to the root node",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "save",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalised way of querying the tree. Given two keys \u003ccode\u003ea \u003c= b\u003c/code\u003e the\n function needs to answer \u003ccode\u003eTrue\u003c/code\u003e or \u003ccode\u003eFalse\u003c/code\u003e as to whether the interval \u003ccode\u003e[a,\n b]\u003c/code\u003e contains interesting keys. No all keys in the interval need be\n interesting. This function will then return all interesting keys in an\n efficient way.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "search",
          "package": "btree-concurrent",
          "signature": "((k, k) -\u003e Bool)-\u003e TreeResult m mc k v [(k, v)]",
          "type": "function"
        },
        "index": {
          "description": "generalised way of querying the tree Given two keys the function needs to answer True or False as to whether the interval contains interesting keys No all keys in the interval need be interesting This function will then return all interesting keys in an efficient way",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "search",
          "normalized": "((a,a)-\u003eBool)-\u003eTreeResult b c a d[(a,d)]",
          "package": "btree-concurrent",
          "signature": "((k,k)-\u003eBool)-\u003eTreeResult m mc k v[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.BTree",
          "name": "search_",
          "package": "btree-concurrent",
          "signature": "((k, k) -\u003e Bool)-\u003e TreeResult m mc k v ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "search_",
          "normalized": "((a,a)-\u003eBool)-\u003eTreeResult b c a d()",
          "package": "btree-concurrent",
          "signature": "((k,k)-\u003eBool)-\u003eTreeResult m mc k v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:search_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the tree into a list of key-value pairs. This function may crash\n if used together with \u003ccode\u003e\u003ca\u003erebalanceProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BTree.BTree",
          "name": "toList",
          "package": "btree-concurrent",
          "signature": "TreeResult m mc k v [(k, v)]",
          "type": "function"
        },
        "index": {
          "description": "Convert the tree into list of key-value pairs This function may crash if used together with rebalanceProcess",
          "hierarchy": "Data BTree BTree",
          "module": "Data.BTree.BTree",
          "name": "toList",
          "normalized": "TreeResult a b c d[(c,d)]",
          "package": "btree-concurrent",
          "partial": "List",
          "signature": "TreeResult m mc k v[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-BTree.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "Class",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "Class",
          "package": "btree-concurrent",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "Cache",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-Class.html#Cache",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "Cache",
          "package": "btree-concurrent",
          "partial": "Cache",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "R",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-Class.html#R",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "R",
          "package": "btree-concurrent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "Final",
          "package": "btree-concurrent",
          "signature": "Final b",
          "source": "src/Data-BTree-Cache-Class.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "Final",
          "package": "btree-concurrent",
          "partial": "Final",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:Final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "Inter",
          "package": "btree-concurrent",
          "signature": "forall a . Inter (IO a) (a -\u003e STM ())",
          "source": "src/Data-BTree-Cache-Class.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "Inter",
          "normalized": "a b Inter(IO b)(b-\u003eSTM())",
          "package": "btree-concurrent",
          "partial": "Inter",
          "signature": "forall a Inter(IO a)(a-\u003eSTM())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:Inter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "eval",
          "package": "btree-concurrent",
          "signature": "p -\u003e m a -\u003e IO a",
          "source": "src/Data-BTree-Cache-Class.html#eval",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "eval",
          "normalized": "a-\u003eb c-\u003eIO c",
          "package": "btree-concurrent",
          "signature": "p-\u003em a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "fetch",
          "package": "btree-concurrent",
          "signature": "k -\u003e m (Maybe v)",
          "source": "src/Data-BTree-Cache-Class.html#fetch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "fetch",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "btree-concurrent",
          "signature": "k-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "remove",
          "package": "btree-concurrent",
          "signature": "Maybe k -\u003e k -\u003e m ()",
          "source": "src/Data-BTree-Cache-Class.html#remove",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "remove",
          "normalized": "Maybe a-\u003ea-\u003eb()",
          "package": "btree-concurrent",
          "signature": "Maybe k-\u003ek-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "store",
          "package": "btree-concurrent",
          "signature": "Maybe k -\u003e k -\u003e v -\u003e m ()",
          "source": "src/Data-BTree-Cache-Class.html#store",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "store",
          "normalized": "Maybe a-\u003ea-\u003eb-\u003ec()",
          "package": "btree-concurrent",
          "signature": "Maybe k-\u003ek-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.Class",
          "name": "sync",
          "package": "btree-concurrent",
          "signature": "p -\u003e IO ()",
          "source": "src/Data-BTree-Cache-Class.html#sync",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Cache Class",
          "module": "Data.BTree.Cache.Class",
          "name": "sync",
          "normalized": "a-\u003eIO()",
          "package": "btree-concurrent",
          "signature": "p-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-Class.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "STM",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "STM",
          "package": "btree-concurrent",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "AccessTime",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html#AccessTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "AccessTime",
          "package": "btree-concurrent",
          "partial": "Access Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:AccessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "CacheSTM",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html#CacheSTM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "CacheSTM",
          "package": "btree-concurrent",
          "partial": "Cache STM",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:CacheSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Exist",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html#Exist",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Exist",
          "package": "btree-concurrent",
          "partial": "Exist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:Exist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Param",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Param",
          "package": "btree-concurrent",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Ref",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html#Ref",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Ref",
          "package": "btree-concurrent",
          "partial": "Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "State",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Cache-STM.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "State",
          "package": "btree-concurrent",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "CacheSTM",
          "package": "btree-concurrent",
          "signature": "CacheSTM",
          "source": "src/Data-BTree-Cache-STM.html#CacheSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "CacheSTM",
          "package": "btree-concurrent",
          "partial": "Cache STM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:CacheSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Exist",
          "package": "btree-concurrent",
          "signature": "Exist",
          "source": "src/Data-BTree-Cache-STM.html#Exist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Exist",
          "package": "btree-concurrent",
          "partial": "Exist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Exist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "NoExist",
          "package": "btree-concurrent",
          "signature": "NoExist",
          "source": "src/Data-BTree-Cache-STM.html#Exist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "NoExist",
          "package": "btree-concurrent",
          "partial": "No Exist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:NoExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Param",
          "package": "btree-concurrent",
          "signature": "Param",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Param",
          "package": "btree-concurrent",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Read",
          "package": "btree-concurrent",
          "signature": "Read !(Maybe v)",
          "source": "src/Data-BTree-Cache-STM.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Read",
          "package": "btree-concurrent",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Ref",
          "package": "btree-concurrent",
          "signature": "Ref",
          "source": "src/Data-BTree-Cache-STM.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Ref",
          "package": "btree-concurrent",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "Write",
          "package": "btree-concurrent",
          "signature": "Write !(Maybe k) !(Maybe v)",
          "source": "src/Data-BTree-Cache-STM.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "Write",
          "package": "btree-concurrent",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "cacheSize",
          "package": "btree-concurrent",
          "signature": "Int",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "cacheSize",
          "package": "btree-concurrent",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:cacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "debug",
          "package": "btree-concurrent",
          "signature": "a -\u003e m ()",
          "source": "src/Data-BTree-Cache-STM.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "debug",
          "normalized": "a-\u003eb()",
          "package": "btree-concurrent",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "equals",
          "package": "btree-concurrent",
          "signature": "State t (Either ByteString b) -\u003e State t1 (Either ByteString b) -\u003e Bool",
          "source": "src/Data-BTree-Cache-STM.html#equals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "equals",
          "normalized": "State a(Either ByteString b)-\u003eState a(Either ByteString b)-\u003eBool",
          "package": "btree-concurrent",
          "signature": "State t(Either ByteString b)-\u003eState t(Either ByteString b)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "evalCacheSTM",
          "package": "btree-concurrent",
          "signature": "Param m k v -\u003e CacheSTM m k v a -\u003e IO a",
          "source": "src/Data-BTree-Cache-STM.html#evalCacheSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "evalCacheSTM",
          "normalized": "Param a b c-\u003eCacheSTM a b c d-\u003eIO d",
          "package": "btree-concurrent",
          "partial": "Cache STM",
          "signature": "Param m k v-\u003eCacheSTM m k v a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:evalCacheSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "fail",
          "package": "btree-concurrent",
          "signature": "IO () -\u003e CacheSTM m k v a",
          "source": "src/Data-BTree-Cache-STM.html#fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "fail",
          "normalized": "IO()-\u003eCacheSTM a b c d",
          "package": "btree-concurrent",
          "signature": "IO()-\u003eCacheSTM m k v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "fetch",
          "package": "btree-concurrent",
          "signature": "k -\u003e CacheSTM m k v (Maybe v)",
          "source": "src/Data-BTree-Cache-STM.html#fetch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "fetch",
          "normalized": "a-\u003eCacheSTM b a c(Maybe c)",
          "package": "btree-concurrent",
          "signature": "k-\u003eCacheSTM m k v(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "fetchGen",
          "package": "btree-concurrent",
          "signature": "Int -\u003e k -\u003e CacheSTM m k v (Maybe v)",
          "source": "src/Data-BTree-Cache-STM.html#fetchGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "fetchGen",
          "normalized": "Int-\u003ea-\u003eCacheSTM b a c(Maybe c)",
          "package": "btree-concurrent",
          "partial": "Gen",
          "signature": "Int-\u003ek-\u003eCacheSTM m k v(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:fetchGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "flipWrite",
          "package": "btree-concurrent",
          "signature": "Maybe v -\u003e Either (State k v) (State k1 v, t, State t1 v) -\u003e Either (State k v) (State k1 v, t, State t1 v)",
          "source": "src/Data-BTree-Cache-STM.html#flipWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "flipWrite",
          "normalized": "Maybe a-\u003eEither(State b a)(State b a,c,State c a)-\u003eEither(State b a)(State b a,c,State c a)",
          "package": "btree-concurrent",
          "partial": "Write",
          "signature": "Maybe v-\u003eEither(State k v)(State k v,t,State t v)-\u003eEither(State k v)(State k v,t,State t v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flipWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "flush",
          "package": "btree-concurrent",
          "signature": "Param m t a -\u003e IO ()",
          "source": "src/Data-BTree-Cache-STM.html#flush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "flush",
          "normalized": "Param a b c-\u003eIO()",
          "package": "btree-concurrent",
          "signature": "Param m t a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "flushKey",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k1 v1 -\u003e (k1, Ref t (Either ByteString a)) -\u003e CacheSTM m k v (Maybe (Either (State t (Either ByteString a)) (State t (Either ByteString a), Int, State t (Either ByteString a))))",
          "source": "src/Data-BTree-Cache-STM.html#flushKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "flushKey",
          "normalized": "HashTableSTM a b-\u003e(a,Ref c(Either ByteString d))-\u003eCacheSTM e a b(Maybe(Either(State c(Either ByteString d))(State c(Either ByteString d),Int,State c(Either ByteString d))))",
          "package": "btree-concurrent",
          "partial": "Key",
          "signature": "HashTableSTM k v-\u003e(k,Ref t(Either ByteString a))-\u003eCacheSTM m k v(Maybe(Either(State t(Either ByteString a))(State t(Either ByteString a),Int,State t(Either ByteString a))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flushKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "flushQ",
          "package": "btree-concurrent",
          "signature": "TVar [(k, Ref k v)]",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "flushQ",
          "normalized": "TVar[(a,Ref a b)]",
          "package": "btree-concurrent",
          "signature": "TVar[(k,Ref k v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:flushQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "genActive",
          "package": "btree-concurrent",
          "signature": "TVar Int",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "genActive",
          "package": "btree-concurrent",
          "partial": "Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:genActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "genId",
          "package": "btree-concurrent",
          "signature": "TVar Int",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "genId",
          "package": "btree-concurrent",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:genId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "getGen",
          "package": "btree-concurrent",
          "signature": "a -\u003e Either t (t, a, t) -\u003e t",
          "source": "src/Data-BTree-Cache-STM.html#getGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "getGen",
          "normalized": "a-\u003eEither b(b,a,b)-\u003eb",
          "package": "btree-concurrent",
          "partial": "Gen",
          "signature": "a-\u003eEither t(t,a,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:getGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "getRef",
          "package": "btree-concurrent",
          "signature": "k -\u003e t (t1 STM) (Ref k (Either ByteString b))",
          "source": "src/Data-BTree-Cache-STM.html#getRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "getRef",
          "normalized": "a-\u003eb(b STM)(Ref a(Either ByteString c))",
          "package": "btree-concurrent",
          "partial": "Ref",
          "signature": "k-\u003et(t STM)(Ref k(Either ByteString b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:getRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "keys",
          "package": "btree-concurrent",
          "signature": "CacheSTM m k v [k]",
          "source": "src/Data-BTree-Cache-STM.html#keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "keys",
          "normalized": "CacheSTM a b c[b]",
          "package": "btree-concurrent",
          "signature": "CacheSTM m k v[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "liftSTM",
          "package": "btree-concurrent",
          "signature": "STM a -\u003e CacheSTM m k v a",
          "source": "src/Data-BTree-Cache-STM.html#liftSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "liftSTM",
          "normalized": "STM a-\u003eCacheSTM b c d a",
          "package": "btree-concurrent",
          "partial": "STM",
          "signature": "STM a-\u003eCacheSTM m k v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:liftSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "maybeQueue",
          "package": "btree-concurrent",
          "signature": "Bool -\u003e TVar (Either (State t2 t3) (State t6 t7, t4, t5)) -\u003e (k, Ref k v) -\u003e t (t1 STM) ()",
          "source": "src/Data-BTree-Cache-STM.html#maybeQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "maybeQueue",
          "normalized": "Bool-\u003eTVar(Either(State a a)(State a a,a,a))-\u003e(b,Ref b c)-\u003ea(a STM)()",
          "package": "btree-concurrent",
          "partial": "Queue",
          "signature": "Bool-\u003eTVar(Either(State t t)(State t t,t,t))-\u003e(k,Ref k v)-\u003et(t STM)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:maybeQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "mtoS",
          "package": "btree-concurrent",
          "signature": "Maybe a -\u003e [Char]",
          "source": "src/Data-BTree-Cache-STM.html#mtoS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "mtoS",
          "normalized": "Maybe a-\u003e[Char]",
          "package": "btree-concurrent",
          "signature": "Maybe a-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:mtoS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "newRef",
          "package": "btree-concurrent",
          "signature": "Maybe k -\u003e k -\u003e Maybe (Either ByteString v) -\u003e t (t1 STM) ()",
          "source": "src/Data-BTree-Cache-STM.html#newRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "newRef",
          "normalized": "Maybe a-\u003ea-\u003eMaybe(Either ByteString b)-\u003ec(c STM)()",
          "package": "btree-concurrent",
          "partial": "Ref",
          "signature": "Maybe k-\u003ek-\u003eMaybe(Either ByteString v)-\u003et(t STM)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "refExt",
          "package": "btree-concurrent",
          "signature": "TVar Exist",
          "source": "src/Data-BTree-Cache-STM.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "refExt",
          "package": "btree-concurrent",
          "partial": "Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:refExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "refST",
          "package": "btree-concurrent",
          "signature": "TVar (Either (State k v) (State k v, Int, State k v))",
          "source": "src/Data-BTree-Cache-STM.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "refST",
          "normalized": "TVar(Either(State a b)(State a b,Int,State a b))",
          "package": "btree-concurrent",
          "partial": "ST",
          "signature": "TVar(Either(State k v)(State k v,Int,State k v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:refST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "remove",
          "package": "btree-concurrent",
          "signature": "Maybe k -\u003e k -\u003e CacheSTM m k v ()",
          "source": "src/Data-BTree-Cache-STM.html#remove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "remove",
          "normalized": "Maybe a-\u003ea-\u003eCacheSTM b a c()",
          "package": "btree-concurrent",
          "signature": "Maybe k-\u003ek-\u003eCacheSTM m k v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "runCacheSTM",
          "package": "btree-concurrent",
          "signature": "ReaderT (Param m k v) (ErrorT (IO ()) STM) a",
          "source": "src/Data-BTree-Cache-STM.html#CacheSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "runCacheSTM",
          "normalized": "ReaderT(Param a b c)(ErrorT(IO())STM)d",
          "package": "btree-concurrent",
          "partial": "Cache STM",
          "signature": "ReaderT(Param m k v)(ErrorT(IO())STM)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:runCacheSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "sizedParam",
          "package": "btree-concurrent",
          "signature": "Int -\u003e (forall a.  m a -\u003e IO a) -\u003e IO (Param m k v)",
          "source": "src/Data-BTree-Cache-STM.html#sizedParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "sizedParam",
          "normalized": "Int-\u003e(a b c d-\u003eIO d)-\u003eIO(Param c e f)",
          "package": "btree-concurrent",
          "partial": "Param",
          "signature": "Int-\u003e(forall a. m a-\u003eIO a)-\u003eIO(Param m k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:sizedParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "stm",
          "package": "btree-concurrent",
          "signature": "m a -\u003e t (t1 m) a",
          "source": "src/Data-BTree-Cache-STM.html#stm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "stm",
          "normalized": "a b-\u003ec(c a)b",
          "package": "btree-concurrent",
          "signature": "m a-\u003et(t m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:stm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "store",
          "package": "btree-concurrent",
          "signature": "Maybe k -\u003e k -\u003e v -\u003e CacheSTM m k v ()",
          "source": "src/Data-BTree-Cache-STM.html#store",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "store",
          "normalized": "Maybe a-\u003ea-\u003eb-\u003eCacheSTM c a b()",
          "package": "btree-concurrent",
          "signature": "Maybe k-\u003ek-\u003ev-\u003eCacheSTM m k v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "sync",
          "package": "btree-concurrent",
          "signature": "Param m t b -\u003e IO ()",
          "source": "src/Data-BTree-Cache-STM.html#sync",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "sync",
          "normalized": "Param a b c-\u003eIO()",
          "package": "btree-concurrent",
          "signature": "Param m t b-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "table",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k (Ref k (Either ByteString v))",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "table",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "timestamp",
          "package": "btree-concurrent",
          "signature": "UTCTime",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "timestamp",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "toIO",
          "package": "btree-concurrent",
          "signature": "forall a.  m a -\u003e IO a",
          "source": "src/Data-BTree-Cache-STM.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "toIO",
          "normalized": "a b c d-\u003eIO d",
          "package": "btree-concurrent",
          "partial": "IO",
          "signature": "forall a. m a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:toIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "trace",
          "package": "btree-concurrent",
          "signature": "a -\u003e a",
          "source": "src/Data-BTree-Cache-STM.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "trace",
          "normalized": "a-\u003ea",
          "package": "btree-concurrent",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "updateTag",
          "package": "btree-concurrent",
          "signature": "Maybe k -\u003e k -\u003e CacheSTM m k v ()",
          "source": "src/Data-BTree-Cache-STM.html#updateTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "updateTag",
          "normalized": "Maybe a-\u003ea-\u003eCacheSTM b a c()",
          "package": "btree-concurrent",
          "partial": "Tag",
          "signature": "Maybe k-\u003ek-\u003eCacheSTM m k v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:updateTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "value",
          "package": "btree-concurrent",
          "signature": "State t (Either ByteString b) -\u003e Maybe b",
          "source": "src/Data-BTree-Cache-STM.html#value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "value",
          "normalized": "State a(Either ByteString b)-\u003eMaybe b",
          "package": "btree-concurrent",
          "signature": "State t(Either ByteString b)-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Cache.STM",
          "name": "withGeneration",
          "package": "btree-concurrent",
          "signature": "Param m1 k v -\u003e (Int -\u003e m b) -\u003e m b",
          "source": "src/Data-BTree-Cache-STM.html#withGeneration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Cache STM",
          "module": "Data.BTree.Cache.STM",
          "name": "withGeneration",
          "normalized": "Param a b c-\u003e(Int-\u003ea d)-\u003ea d",
          "package": "btree-concurrent",
          "partial": "Generation",
          "signature": "Param m k v-\u003e(Int-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Cache-STM.html#v:withGeneration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "Class",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "Class",
          "package": "btree-concurrent",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "Cp",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Class.html#Cp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "Cp",
          "package": "btree-concurrent",
          "partial": "Cp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:Cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "N",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Class.html#N",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "N",
          "package": "btree-concurrent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "R",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Class.html#R",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "R",
          "package": "btree-concurrent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "S",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Class.html#S",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "S",
          "package": "btree-concurrent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "Tree",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Class.html#Tree",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "Tree",
          "package": "btree-concurrent",
          "partial": "Tree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "delete",
          "package": "btree-concurrent",
          "signature": "k -\u003e m (Maybe v)",
          "source": "src/Data-BTree-Class.html#delete",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "delete",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "btree-concurrent",
          "signature": "k-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "delete_",
          "package": "btree-concurrent",
          "signature": "k -\u003e m ()",
          "source": "src/Data-BTree-Class.html#delete_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "delete_",
          "normalized": "a-\u003eb()",
          "package": "btree-concurrent",
          "signature": "k-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:delete_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "foldli",
          "package": "btree-concurrent",
          "signature": "(a -\u003e k -\u003e v -\u003e a) -\u003e a -\u003e m a",
          "source": "src/Data-BTree-Class.html#foldli",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "foldli",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003ed a",
          "package": "btree-concurrent",
          "signature": "(a-\u003ek-\u003ev-\u003ea)-\u003ea-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:foldli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "lookup",
          "package": "btree-concurrent",
          "signature": "k -\u003e m (Maybe v)",
          "source": "src/Data-BTree-Class.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "lookup",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "btree-concurrent",
          "signature": "k-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "member",
          "package": "btree-concurrent",
          "signature": "k -\u003e m Bool",
          "source": "src/Data-BTree-Class.html#member",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "member",
          "normalized": "a-\u003eb Bool",
          "package": "btree-concurrent",
          "signature": "k-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "modify",
          "package": "btree-concurrent",
          "signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e m (Maybe v)",
          "source": "src/Data-BTree-Class.html#modify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "modify",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec(Maybe a)",
          "package": "btree-concurrent",
          "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "modifyMany",
          "package": "btree-concurrent",
          "signature": "[(v -\u003e v -\u003e v, k, v)] -\u003e m ()",
          "source": "src/Data-BTree-Class.html#modifyMany",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "modifyMany",
          "normalized": "[(a-\u003ea-\u003ea,b,a)]-\u003ec()",
          "package": "btree-concurrent",
          "partial": "Many",
          "signature": "[(v-\u003ev-\u003ev,k,v)]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:modifyMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "modify_",
          "package": "btree-concurrent",
          "signature": "(v -\u003e v -\u003e v) -\u003e k -\u003e v -\u003e m ()",
          "source": "src/Data-BTree-Class.html#modify_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "modify_",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003ec()",
          "package": "btree-concurrent",
          "signature": "(v-\u003ev-\u003ev)-\u003ek-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:modify_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "search",
          "package": "btree-concurrent",
          "signature": "((k, k) -\u003e Bool) -\u003e m [(k, v)]",
          "source": "src/Data-BTree-Class.html#search",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "search",
          "normalized": "((a,a)-\u003eBool)-\u003eb[(a,c)]",
          "package": "btree-concurrent",
          "signature": "((k,k)-\u003eBool)-\u003em[(k,v)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Class",
          "name": "toList",
          "package": "btree-concurrent",
          "signature": "m [(k, v)]",
          "source": "src/Data-BTree-Class.html#toList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree Class",
          "module": "Data.BTree.Class",
          "name": "toList",
          "normalized": "a[(b,c)]",
          "package": "btree-concurrent",
          "partial": "List",
          "signature": "m[(k,v)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Class.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA hashtable in STM.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "STM",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-HashTable-STM.html",
          "type": "module"
        },
        "index": {
          "description": "hashtable in STM",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "STM",
          "package": "btree-concurrent",
          "partial": "STM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.HashTable.STM",
          "name": "HashTableSTM",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-HashTable-STM.html#HashTableSTM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "HashTableSTM",
          "package": "btree-concurrent",
          "partial": "Hash Table STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#t:HashTableSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key from HashTable.\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "delete",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v -\u003e k -\u003e STM ()",
          "source": "src/Data-BTree-HashTable-STM.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete key from HashTable",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "delete",
          "normalized": "HashTableSTM a b-\u003ea-\u003eSTM()",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v-\u003ek-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a key/value pair into HashTable.\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "insert",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v -\u003e k -\u003e v -\u003e STM ()",
          "source": "src/Data-BTree-HashTable-STM.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert key value pair into HashTable",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "insert",
          "normalized": "HashTableSTM a b-\u003ea-\u003eb-\u003eSTM()",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v-\u003ek-\u003ev-\u003eSTM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Get a list of keys.\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "keys",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v -\u003e STM [k]",
          "source": "src/Data-BTree-HashTable-STM.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Get list of keys",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "keys",
          "normalized": "HashTableSTM a b-\u003eSTM[a]",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v-\u003eSTM[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup a key in HashTable.\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "lookup",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v -\u003e k -\u003e STM (Maybe v)",
          "source": "src/Data-BTree-HashTable-STM.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup key in HashTable",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "lookup",
          "normalized": "HashTableSTM a b-\u003ea-\u003eSTM(Maybe b)",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v-\u003ek-\u003eSTM(Maybe v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new HashTable with fixed size\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "newSized",
          "package": "btree-concurrent",
          "signature": "Int -\u003e IO (HashTableSTM k v)",
          "source": "src/Data-BTree-HashTable-STM.html#newSized",
          "type": "function"
        },
        "index": {
          "description": "Create new HashTable with fixed size",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "newSized",
          "normalized": "Int-\u003eIO(HashTableSTM a b)",
          "package": "btree-concurrent",
          "partial": "Sized",
          "signature": "Int-\u003eIO(HashTableSTM k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:newSized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Grab the size of the hash table.\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "size",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v -\u003e STM Int",
          "source": "src/Data-BTree-HashTable-STM.html#size",
          "type": "function"
        },
        "index": {
          "description": "Grab the size of the hash table",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "size",
          "normalized": "HashTableSTM a b-\u003eSTM Int",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Get a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.BTree.HashTable.STM",
          "name": "toList",
          "package": "btree-concurrent",
          "signature": "HashTableSTM k v -\u003e STM [(k, v)]",
          "source": "src/Data-BTree-HashTable-STM.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Get list of key value pairs",
          "hierarchy": "Data BTree HashTable STM",
          "module": "Data.BTree.HashTable.STM",
          "name": "toList",
          "normalized": "HashTableSTM a b-\u003eSTM[(a,b)]",
          "package": "btree-concurrent",
          "partial": "List",
          "signature": "HashTableSTM k v-\u003eSTM[(k,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-HashTable-STM.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Class",
          "name": "Class",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-KVBackend-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Class",
          "module": "Data.BTree.KVBackend.Class",
          "name": "Class",
          "package": "btree-concurrent",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Class",
          "name": "KVBackend",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-KVBackend-Class.html#KVBackend",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Class",
          "module": "Data.BTree.KVBackend.Class",
          "name": "KVBackend",
          "package": "btree-concurrent",
          "partial": "KVBackend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#t:KVBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Class",
          "name": "fetch",
          "package": "btree-concurrent",
          "signature": "k -\u003e m (Maybe v)",
          "source": "src/Data-BTree-KVBackend-Class.html#fetch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Class",
          "module": "Data.BTree.KVBackend.Class",
          "name": "fetch",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "btree-concurrent",
          "signature": "k-\u003em(Maybe v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Class",
          "name": "remove",
          "package": "btree-concurrent",
          "signature": "k -\u003e m ()",
          "source": "src/Data-BTree-KVBackend-Class.html#remove",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Class",
          "module": "Data.BTree.KVBackend.Class",
          "name": "remove",
          "normalized": "a-\u003eb()",
          "package": "btree-concurrent",
          "signature": "k-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Class",
          "name": "store",
          "package": "btree-concurrent",
          "signature": "k -\u003e v -\u003e m ()",
          "source": "src/Data-BTree-KVBackend-Class.html#store",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Class",
          "module": "Data.BTree.KVBackend.Class",
          "name": "store",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "btree-concurrent",
          "signature": "k-\u003ev-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Class.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "Files",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-KVBackend-Files.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "Files",
          "package": "btree-concurrent",
          "partial": "Files",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "FilesKV",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-KVBackend-Files.html#FilesKV",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "FilesKV",
          "package": "btree-concurrent",
          "partial": "Files KV",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#t:FilesKV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "Param",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-KVBackend-Files.html#Param",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "Param",
          "package": "btree-concurrent",
          "partial": "Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "FilesKV",
          "package": "btree-concurrent",
          "signature": "FilesKV",
          "source": "src/Data-BTree-KVBackend-Files.html#FilesKV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "FilesKV",
          "package": "btree-concurrent",
          "partial": "Files KV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:FilesKV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "evalFilesKV",
          "package": "btree-concurrent",
          "signature": "FilePath -\u003e FilesKV a -\u003e IO a",
          "source": "src/Data-BTree-KVBackend-Files.html#evalFilesKV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "evalFilesKV",
          "normalized": "FilePath-\u003eFilesKV a-\u003eIO a",
          "package": "btree-concurrent",
          "partial": "Files KV",
          "signature": "FilePath-\u003eFilesKV a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:evalFilesKV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "fetch",
          "package": "btree-concurrent",
          "signature": "k -\u003e FilesKV (Maybe a)",
          "source": "src/Data-BTree-KVBackend-Files.html#fetch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "fetch",
          "normalized": "a-\u003eFilesKV(Maybe b)",
          "package": "btree-concurrent",
          "signature": "k-\u003eFilesKV(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "filePath",
          "package": "btree-concurrent",
          "signature": "k -\u003e FilesKV FilePath",
          "source": "src/Data-BTree-KVBackend-Files.html#filePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "filePath",
          "normalized": "a-\u003eFilesKV FilePath",
          "package": "btree-concurrent",
          "partial": "Path",
          "signature": "k-\u003eFilesKV FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:filePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "remove",
          "package": "btree-concurrent",
          "signature": "k -\u003e FilesKV ()",
          "source": "src/Data-BTree-KVBackend-Files.html#remove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "remove",
          "normalized": "a-\u003eFilesKV()",
          "package": "btree-concurrent",
          "signature": "k-\u003eFilesKV()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "runFilesKV",
          "package": "btree-concurrent",
          "signature": "ReaderT Param IO a",
          "source": "src/Data-BTree-KVBackend-Files.html#FilesKV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "runFilesKV",
          "package": "btree-concurrent",
          "partial": "Files KV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:runFilesKV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "store",
          "package": "btree-concurrent",
          "signature": "k -\u003e a -\u003e FilesKV ()",
          "source": "src/Data-BTree-KVBackend-Files.html#store",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "store",
          "normalized": "a-\u003eb-\u003eFilesKV()",
          "package": "btree-concurrent",
          "signature": "k-\u003ea-\u003eFilesKV()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Files",
          "name": "traceThis",
          "package": "btree-concurrent",
          "signature": "b -\u003e b",
          "source": "src/Data-BTree-KVBackend-Files.html#traceThis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Files",
          "module": "Data.BTree.KVBackend.Files",
          "name": "traceThis",
          "normalized": "a-\u003ea",
          "package": "btree-concurrent",
          "partial": "This",
          "signature": "b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Files.html#v:traceThis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Util",
          "name": "Util",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-KVBackend-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Util",
          "module": "Data.BTree.KVBackend.Util",
          "name": "Util",
          "package": "btree-concurrent",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Util",
          "name": "atomicFileWrite",
          "package": "btree-concurrent",
          "signature": "[Char] -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-BTree-KVBackend-Util.html#atomicFileWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Util",
          "module": "Data.BTree.KVBackend.Util",
          "name": "atomicFileWrite",
          "normalized": "[Char]-\u003eByteString-\u003eIO()",
          "package": "btree-concurrent",
          "partial": "File Write",
          "signature": "[Char]-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#v:atomicFileWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Util",
          "name": "safeReadFile",
          "package": "btree-concurrent",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-BTree-KVBackend-Util.html#safeReadFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Util",
          "module": "Data.BTree.KVBackend.Util",
          "name": "safeReadFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "btree-concurrent",
          "partial": "Read File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#v:safeReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.KVBackend.Util",
          "name": "safeWriteFile",
          "package": "btree-concurrent",
          "signature": "[Char] -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-BTree-KVBackend-Util.html#safeWriteFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree KVBackend Util",
          "module": "Data.BTree.KVBackend.Util",
          "name": "safeWriteFile",
          "normalized": "[Char]-\u003eByteString-\u003eIO()",
          "package": "btree-concurrent",
          "partial": "Write File",
          "signature": "[Char]-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-KVBackend-Util.html#v:safeWriteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Types",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Types",
          "package": "btree-concurrent",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "BTreeM",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Types.html#BTreeM",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "BTreeM",
          "package": "btree-concurrent",
          "partial": "BTree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:BTreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Node",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Types.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Node",
          "package": "btree-concurrent",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Param",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Param",
          "package": "btree-concurrent",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Ref",
          "package": "btree-concurrent",
          "source": "src/Data-BTree-Types.html#Ref",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Ref",
          "package": "btree-concurrent",
          "partial": "Ref",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "BTreeM",
          "package": "btree-concurrent",
          "signature": "BTreeM",
          "source": "src/Data-BTree-Types.html#BTreeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "BTreeM",
          "package": "btree-concurrent",
          "partial": "BTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:BTreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Branch",
          "package": "btree-concurrent",
          "signature": "Branch [k] [Ref (Node k v)]",
          "source": "src/Data-BTree-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Branch",
          "normalized": "Branch[a][Ref(Node a b)]",
          "package": "btree-concurrent",
          "partial": "Branch",
          "signature": "Branch[k][Ref(Node k v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Leaf",
          "package": "btree-concurrent",
          "signature": "Leaf (Map k v)",
          "source": "src/Data-BTree-Types.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Leaf",
          "package": "btree-concurrent",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Param",
          "package": "btree-concurrent",
          "signature": "Param",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Param",
          "package": "btree-concurrent",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "Ref",
          "package": "btree-concurrent",
          "signature": "Ref Word64",
          "source": "src/Data-BTree-Types.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "Ref",
          "package": "btree-concurrent",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "marked",
          "package": "btree-concurrent",
          "signature": "TChan k",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "marked",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:marked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "order",
          "package": "btree-concurrent",
          "signature": "Int",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "order",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "root",
          "package": "btree-concurrent",
          "signature": "TVar (Ref (Node k v))",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "root",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "runBTreeM",
          "package": "btree-concurrent",
          "signature": "ReaderT (Param st k v) m a",
          "source": "src/Data-BTree-Types.html#BTreeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "runBTreeM",
          "package": "btree-concurrent",
          "partial": "BTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:runBTreeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "state",
          "package": "btree-concurrent",
          "signature": "st",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "state",
          "package": "btree-concurrent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BTree.Types",
          "name": "unused",
          "package": "btree-concurrent",
          "signature": "TVar [Ref (Node k v)]",
          "source": "src/Data-BTree-Types.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BTree Types",
          "module": "Data.BTree.Types",
          "name": "unused",
          "normalized": "TVar[Ref(Node a b)]",
          "package": "btree-concurrent",
          "signature": "TVar[Ref(Node k v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/btree-concurrent/docs/Data-BTree-Types.html#v:unused"
      }
    }
  ]
]