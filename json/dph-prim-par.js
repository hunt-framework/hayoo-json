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
        "word": "dph-prim-par"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on distributed arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "Arrays",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on distributed arrays",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "Arrays",
          "package": "dph-prim-par",
          "partial": "Arrays",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a phantom parameter used to record whether a distributed value\n   is balanced evenly among the threads. It's used to signal this property\n   between RULES, but the actual value is never used.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "Distribution",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#Distribution",
          "type": "data"
        },
        "index": {
          "description": "This is phantom parameter used to record whether distributed value is balanced evenly among the threads It used to signal this property between RULES but the actual value is never used",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "Distribution",
          "package": "dph-prim-par",
          "partial": "Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "atomicUpdateD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist (Vector a) -\u003e Dist (Vector (Int, a)) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#atomicUpdateD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:atomicUpdateD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:atomicUpdateD\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "atomicUpdateD",
          "normalized": "Gang-\u003eDist(Vector a)-\u003eDist(Vector(Int,a))-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "Update",
          "signature": "Gang-\u003eDist(Vector a)-\u003eDist(Vector(Int,a))-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:atomicUpdateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "balanced",
          "package": "dph-prim-par",
          "signature": "Distribution",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#balanced",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:balanced\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:balanced\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "balanced",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:balanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "bpermuteD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Vector a -\u003e Dist (Vector Int) -\u003e Dist (Vector a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#bpermuteD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:bpermuteD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:bpermuteD\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "bpermuteD",
          "normalized": "Gang-\u003eVector a-\u003eDist(Vector Int)-\u003eDist(Vector a)",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eVector a-\u003eDist(Vector Int)-\u003eDist(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:bpermuteD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelectively combine the last elements of some chunks with the\n   first elements of others.\n\u003c/p\u003e\u003cp\u003eNOTE: This runs sequentially and should only be used for testing purposes.\n\u003c/p\u003e\u003cpre\u003e\n pprp $ splitD theGang unbalanced $ fromList [80, 10, 20, 40, 50, 10 :: Int]\n DVector lengths: [2,2,1,1]\n         chunks:  [[80,10],[20,40],[50],[10]]\n\npprp $ fst \n       $ carryD theGang (+) 0 \n          (mkDPrim $ fromList [True, False, True, False]) \n          (splitD theGang unbalanced $ fromList [80, 10, 20, 40, 50, 10 :: Int])\n\nDVector lengths: [1,2,0,1]\n          chunks: [[80],[30,40],[],[60]]\n\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "carryD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist Bool -\u003e Dist (Vector a) -\u003e (Dist (Vector a), a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#carryD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:carryD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:carryD\"]"
        },
        "index": {
          "description": "Selectively combine the last elements of some chunks with the first elements of others NOTE This runs sequentially and should only be used for testing purposes pprp splitD theGang unbalanced fromList Int DVector lengths chunks pprp fst carryD theGang mkDPrim fromList True False True False splitD theGang unbalanced fromList Int DVector lengths chunks",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "carryD",
          "normalized": "Gang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist Bool-\u003eDist(Vector a)-\u003e(Dist(Vector a),a)",
          "package": "dph-prim-par",
          "signature": "Gang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist Bool-\u003eDist(Vector a)-\u003e(Dist(Vector a),a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:carryD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a distributed array.\n   Join sums up the array lengths of each chunk, allocates a new result array, \n   and copies each chunk into the result.\n\u003c/p\u003e\u003cp\u003eNOTE: This is defined in terms of joinD_impl to avoid introducing loops\n         through RULES. Without it, splitJoinD would be a loop breaker.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "joinD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Distribution -\u003e Dist (Vector a) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:joinD\"]"
        },
        "index": {
          "description": "Join distributed array Join sums up the array lengths of each chunk allocates new result array and copies each chunk into the result NOTE This is defined in terms of joinD impl to avoid introducing loops through RULES Without it splitJoinD would be loop breaker",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "joinD",
          "normalized": "Gang-\u003eDistribution-\u003eDist(Vector a)-\u003eVector a",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDistribution-\u003eDist(Vector a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a distributed array, yielding a mutable global array\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "joinDM",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist (Vector a) -\u003e ST s (MVector s a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinDM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinDM\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:joinDM\"]"
        },
        "index": {
          "description": "Join distributed array yielding mutable global array",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "joinDM",
          "normalized": "Gang-\u003eDist(Vector a)-\u003eST b(MVector b a)",
          "package": "dph-prim-par",
          "partial": "DM",
          "signature": "Gang-\u003eDist(Vector a)-\u003eST s(MVector s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinDM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(threads).\n   Get the overall length of a distributed array.\n   This is implemented by reading the chunk length from each thread, \n   and summing them up.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "joinLengthD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist (Vector a) -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinLengthD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinLengthD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:joinLengthD\"]"
        },
        "index": {
          "description": "threads Get the overall length of distributed array This is implemented by reading the chunk length from each thread and summing them up",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "joinLengthD",
          "normalized": "Gang-\u003eDist(Vector a)-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Length",
          "signature": "Gang-\u003eDist(Vector a)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinLengthD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the distributed length of a distributed array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed.Data.Vector\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "lengthD",
          "package": "dph-prim-par",
          "signature": "Dist (Vector a) -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#lengthD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:lengthD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#v:lengthD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:lengthD\"]"
        },
        "index": {
          "description": "Yield the distributed length of distributed array",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "lengthD",
          "normalized": "Dist(Vector a)-\u003eDist Int",
          "package": "dph-prim-par",
          "signature": "Dist(Vector a)-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:lengthD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute for distributed arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "permuteD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist (Vector a) -\u003e Dist (Vector Int) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#permuteD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:permuteD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:permuteD\"]"
        },
        "index": {
          "description": "Permute for distributed arrays",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "permuteD",
          "normalized": "Gang-\u003eDist(Vector a)-\u003eDist(Vector Int)-\u003eVector a",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist(Vector a)-\u003eDist(Vector Int)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:permuteD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute an array over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e such that each threads gets the given\n   number of elements.\n\u003c/p\u003e\u003cpre\u003esplitAsD theGangN4 (splitLenD theGangN4 10) [1 2 3 4 5 6 7 8 9 0]\n      = [[1 2 3] [4 5 6] [7 8] [9 0]]\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "splitAsD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist Int -\u003e Vector a -\u003e Dist (Vector a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitAsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitAsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitAsD\"]"
        },
        "index": {
          "description": "Distribute an array over Gang such that each threads gets the given number of elements splitAsD theGangN4 splitLenD theGangN4",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "splitAsD",
          "normalized": "Gang-\u003eDist Int-\u003eVector a-\u003eDist(Vector a)",
          "package": "dph-prim-par",
          "partial": "As",
          "signature": "Gang-\u003eDist Int-\u003eVector a-\u003eDist(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitAsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute an array over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: This is defined in terms of splitD_impl to avoid introducing loops\n         through RULES. Without it, splitJoinD would be a loop breaker.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "splitD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Distribution -\u003e Vector a -\u003e Dist (Vector a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitD\"]"
        },
        "index": {
          "description": "Distribute an array over Gang NOTE This is defined in terms of splitD impl to avoid introducing loops through RULES Without it splitJoinD would be loop breaker",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "splitD",
          "normalized": "Gang-\u003eDistribution-\u003eVector a-\u003eDist(Vector a)",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDistribution-\u003eVector a-\u003eDist(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a vector over a gang, run a distributed computation, then\n   join the pieces together again.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "splitJoinD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e (Dist (Vector a) -\u003e Dist (Vector b)) -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitJoinD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitJoinD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitJoinD\"]"
        },
        "index": {
          "description": "Split vector over gang run distributed computation then join the pieces together again",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "splitJoinD",
          "normalized": "Gang-\u003e(Dist(Vector a)-\u003eDist(Vector b))-\u003eVector a-\u003eVector b",
          "package": "dph-prim-par",
          "partial": "Join",
          "signature": "Gang-\u003e(Dist(Vector a)-\u003eDist(Vector b))-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitJoinD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(threads).\n   Distribute an array length over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   Each thread holds the number of elements it's reponsible for.\n   If the array length doesn't split evenly among the threads then the first\n   threads get a few more elements.\n\u003c/p\u003e\u003cpre\u003esplitLenD theGangN4 511\n      = [128,128,128,127]\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "splitLenD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Int -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitLenD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitLenD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitLenD\"]"
        },
        "index": {
          "description": "threads Distribute an array length over Gang Each thread holds the number of elements it reponsible for If the array length doesn split evenly among the threads then the first threads get few more elements splitLenD theGangN4",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "splitLenD",
          "normalized": "Gang-\u003eInt-\u003eDist Int",
          "package": "dph-prim-par",
          "partial": "Len",
          "signature": "Gang-\u003eInt-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitLenD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(threads).\n   Distribute an array length over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   Each thread holds the number of elements it's responsible for, \n   and the index of the start of its chunk.\n\u003c/p\u003e\u003cpre\u003esplitLenIdxD theGangN4 511 \n      = [(128,0),(128,128),(128,256),(127,384)]\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "splitLenIdxD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Int -\u003e Dist (Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitLenIdxD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitLenIdxD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitLenIdxD\"]"
        },
        "index": {
          "description": "threads Distribute an array length over Gang Each thread holds the number of elements it responsible for and the index of the start of its chunk splitLenIdxD theGangN4",
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "splitLenIdxD",
          "normalized": "Gang-\u003eInt-\u003eDist(Int,Int)",
          "package": "dph-prim-par",
          "partial": "Len Idx",
          "signature": "Gang-\u003eInt-\u003eDist(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitLenIdxD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Arrays\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "unbalanced",
          "package": "dph-prim-par",
          "signature": "Distribution",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#unbalanced",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:unbalanced\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:unbalanced\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
          "name": "unbalanced",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:unbalanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic operations on distributed types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
          "name": "Basics",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html",
          "type": "module"
        },
        "index": {
          "description": "Basic operations on distributed types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
          "name": "Basics",
          "package": "dph-prim-par",
          "partial": "Basics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether to distributed values are equal. \n   This requires a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and hence can't be defined in terms of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Basics\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "eqD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist a -\u003e Dist a -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#eqD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:eqD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:eqD\"]"
        },
        "index": {
          "description": "Test whether to distributed values are equal This requires Gang and hence can be defined in terms of Eq",
          "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
          "name": "eqD",
          "normalized": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:eqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield all elements of a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, don't use in production code.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Basics\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "fromD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist a -\u003e [a]",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#fromD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:fromD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:fromD\"]"
        },
        "index": {
          "description": "Yield all elements of distributed value For debugging only don use in production code",
          "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
          "name": "fromD",
          "normalized": "Gang-\u003eDist a-\u003e[a]",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:fromD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether to distributed values are not equal.\n   This requires a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and hence can't be defined in terms of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Basics\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "neqD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist a -\u003e Dist a -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#neqD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:neqD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:neqD\"]"
        },
        "index": {
          "description": "Test whether to distributed values are not equal This requires Gang and hence can be defined in terms of Eq",
          "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
          "name": "neqD",
          "normalized": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:neqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a distributed value from the first \u003ccode\u003ep\u003c/code\u003e elements of a list.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, don't use in production code.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Basics\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "toD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e [a] -\u003e Dist a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#toD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:toD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:toD\"]"
        },
        "index": {
          "description": "Generate distributed value from the first elements of list For debugging only don use in production code",
          "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
          "name": "toD",
          "normalized": "Gang-\u003e[a]-\u003eDist a",
          "package": "dph-prim-par",
          "signature": "Gang-\u003e[a]-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:toD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard combinators for distributed types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "Combinators",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Standard combinators for distributed types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "Combinators",
          "package": "dph-prim-par",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat sort of thing is being computed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "What",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "data"
        },
        "index": {
          "description": "What sort of thing is being computed",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "What",
          "package": "dph-prim-par",
          "partial": "What",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#t:What"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WBpermute",
          "package": "dph-prim-par",
          "signature": "WBpermute",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WBpermute\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WBpermute\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WBpermute",
          "package": "dph-prim-par",
          "partial": "WBpermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WBpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WFMapGen",
          "package": "dph-prim-par",
          "signature": "WFMapGen What What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFMapGen\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WFMapGen\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WFMapGen",
          "package": "dph-prim-par",
          "partial": "WFMap Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFMapGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WFMapMap",
          "package": "dph-prim-par",
          "signature": "WFMapMap What What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFMapMap\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WFMapMap\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WFMapMap",
          "package": "dph-prim-par",
          "partial": "WFMap Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFMapMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WFZipMap",
          "package": "dph-prim-par",
          "signature": "WFZipMap What What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFZipMap\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WFZipMap\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WFZipMap",
          "package": "dph-prim-par",
          "partial": "WFZip Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFZipMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WJoinCopy",
          "package": "dph-prim-par",
          "signature": "WJoinCopy Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WJoinCopy\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WJoinCopy\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WJoinCopy",
          "package": "dph-prim-par",
          "partial": "WJoin Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WJoinCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WLength",
          "package": "dph-prim-par",
          "signature": "WLength",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WLength\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WLength\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WLength",
          "package": "dph-prim-par",
          "partial": "WLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WLengthIdx",
          "package": "dph-prim-par",
          "signature": "WLengthIdx",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WLengthIdx\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WLengthIdx\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WLengthIdx",
          "package": "dph-prim-par",
          "partial": "WLength Idx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WLengthIdx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WScalar",
          "package": "dph-prim-par",
          "signature": "WScalar",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WScalar\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WScalar\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WScalar",
          "package": "dph-prim-par",
          "partial": "WScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WSlice",
          "package": "dph-prim-par",
          "signature": "WSlice",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WSlice\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WSlice\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WSlice",
          "package": "dph-prim-par",
          "partial": "WSlice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "WZip",
          "package": "dph-prim-par",
          "signature": "WZip",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WZip\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WZip\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "WZip",
          "package": "dph-prim-par",
          "partial": "WZip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.What\"]",
          "name": "What",
          "package": "dph-prim-par",
          "signature": "What String",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:What\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:What\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "What",
          "package": "dph-prim-par",
          "partial": "What",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:What"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold all the instances of a distributed value.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "foldD",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e Dist a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#foldD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:foldD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:foldD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:foldD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:foldD\"]"
        },
        "index": {
          "description": "Fold all the instances of distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "foldD",
          "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea",
          "package": "dph-prim-par",
          "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:foldD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first elements of a distributed pair.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.Data.Tuple\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "fstD",
          "package": "dph-prim-par",
          "signature": "Dist (a, b) -\u003e Dist a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#fstD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:fstD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:fstD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:fstD\"]"
        },
        "index": {
          "description": "Extract the first elements of distributed pair",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "fstD",
          "normalized": "Dist(a,b)-\u003eDist a",
          "package": "dph-prim-par",
          "signature": "Dist(a,b)-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:fstD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function across all elements of a distributed value.\n   The worker function also gets the current thread index.\n   As opposed to \u003ccode\u003e\u003ca\u003eimapD'\u003c/a\u003e\u003c/code\u003e this version also deepSeqs each element before\n   passing it to the function.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "imapD",
          "package": "dph-prim-par",
          "signature": "What-\u003e Gang-\u003e (Int -\u003e a -\u003e b)-\u003e Dist a-\u003e Dist b",
          "type": "function"
        },
        "index": {
          "description": "Map function across all elements of distributed value The worker function also gets the current thread index As opposed to imapD this version also deepSeqs each element before passing it to the function",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "imapD",
          "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
          "package": "dph-prim-par",
          "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:imapD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two distributed values with the given function.\n   The worker function also gets the index of the current thread.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "izipWithD",
          "package": "dph-prim-par",
          "signature": "What-\u003e Gang-\u003e (Int -\u003e a -\u003e b -\u003e c)-\u003e Dist a-\u003e Dist b-\u003e Dist c",
          "type": "function"
        },
        "index": {
          "description": "Combine two distributed values with the given function The worker function also gets the index of the current thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "izipWithD",
          "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:izipWithD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of map and fold.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "mapAccumLD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e (acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Dist a -\u003e (acc, Dist b)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#mapAccumLD",
          "type": "function"
        },
        "index": {
          "description": "Combination of map and fold",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "mapAccumLD",
          "normalized": "Gang-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003eDist b-\u003e(a,Dist c)",
          "package": "dph-prim-par",
          "partial": "Accum LD",
          "signature": "Gang-\u003e(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eDist a-\u003e(acc,Dist b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:mapAccumLD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function to every instance of a distributed value.\n\u003c/p\u003e\u003cp\u003eThis applies the function to every thread, but not every value held\n   by the thread. If you want that then use something like:\n\u003c/p\u003e\u003cpre\u003emapD theGang (V.map (+ 1)) :: Dist (Vector Int) -\u003e Dist (Vector Int)\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "mapD",
          "package": "dph-prim-par",
          "signature": "What-\u003e Gang-\u003e (a -\u003e b)-\u003e Dist a-\u003e Dist b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:mapD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:mapD\"]"
        },
        "index": {
          "description": "Map function to every instance of distributed value This applies the function to every thread but not every value held by the thread If you want that then use something like mapD theGang V.map Dist Vector Int Dist Vector Int",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "mapD",
          "normalized": "What-\u003eGang-\u003e(a-\u003eb)-\u003eDist a-\u003eDist b",
          "package": "dph-prim-par",
          "signature": "What-\u003eGang-\u003e(a-\u003eb)-\u003eDist a-\u003eDist b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:mapD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix sum of the instances of a distributed value.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "scanD",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist a -\u003e (Dist a, a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#scanD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:scanD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:scanD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:scanD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:scanD\"]"
        },
        "index": {
          "description": "Prefix sum of the instances of distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "scanD",
          "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)",
          "package": "dph-prim-par",
          "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:scanD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second elements of a distributed pair.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.Data.Tuple\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "sndD",
          "package": "dph-prim-par",
          "signature": "Dist (a, b) -\u003e Dist b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#sndD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:sndD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:sndD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sndD\"]"
        },
        "index": {
          "description": "Extract the second elements of distributed pair",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "sndD",
          "normalized": "Dist(a,b)-\u003eDist b",
          "package": "dph-prim-par",
          "signature": "Dist(a,b)-\u003eDist b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:sndD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpairing of distributed values.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.Data.Tuple\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "unzipD",
          "package": "dph-prim-par",
          "signature": "Dist (a, b) -\u003e (Dist a, Dist b)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#unzipD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:unzipD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:unzipD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:unzipD\"]"
        },
        "index": {
          "description": "Unpairing of distributed values",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "unzipD",
          "normalized": "Dist(a,b)-\u003e(Dist a,Dist b)",
          "package": "dph-prim-par",
          "signature": "Dist(a,b)-\u003e(Dist a,Dist b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:unzipD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of distributed values.\n   The two values must belong to the same \u003ccode\u003eGang\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed.Data.Tuple\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "zipD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Dist b -\u003e Dist (a, b)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#zipD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:zipD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:zipD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:zipD\"]"
        },
        "index": {
          "description": "Pairing of distributed values The two values must belong to the same Gang",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "zipD",
          "normalized": "Dist a-\u003eDist b-\u003eDist(a,b)",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eDist b-\u003eDist(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:zipD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two distributed values with the given function.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Combinators\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "zipWithD",
          "package": "dph-prim-par",
          "signature": "What-\u003e Gang-\u003e (a -\u003e b -\u003e c)-\u003e Dist a-\u003e Dist b-\u003e Dist c",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:zipWithD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:zipWithD\"]"
        },
        "index": {
          "description": "Combine two distributed values with the given function",
          "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
          "name": "zipWithD",
          "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:zipWithD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
          "name": "Bool",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Bool",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
          "name": "Bool",
          "package": "dph-prim-par",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAND together all instances of a distributed \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.Bool\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "andD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#andD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#v:andD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:andD\"]"
        },
        "index": {
          "description": "AND together all instances of distributed Bool",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Bool",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
          "name": "andD",
          "normalized": "Gang-\u003eDist Bool-\u003eBool",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#v:andD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOR together all instances of a distributed \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.Bool\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "orD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#orD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#v:orD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:orD\"]"
        },
        "index": {
          "description": "OR together all instances of distributed Bool",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Bool",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
          "name": "orD",
          "normalized": "Gang-\u003eDist Bool-\u003eBool",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#v:orD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Maybes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Maybe",
          "name": "Maybe",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Maybes",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Maybe",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Maybe",
          "name": "Maybe",
          "package": "dph-prim-par",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of values of primitive types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Ordering",
          "name": "Ordering",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Ordering.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of values of primitive types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Ordering",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Ordering",
          "name": "Ordering",
          "package": "dph-prim-par",
          "partial": "Ordering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Ordering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDPrim\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e instances for scalar types. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar.Base",
          "name": "Base",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar-Base.html",
          "type": "module"
        },
        "index": {
          "description": "DPrim and DT instances for scalar types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar.Base",
          "name": "Base",
          "package": "dph-prim-par",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of values of primitive types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "Scalar",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of values of primitive types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "Scalar",
          "package": "dph-prim-par",
          "partial": "Scalar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
          "type": "class"
        },
        "index": {
          "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "deepSeqD",
          "package": "dph-prim-par",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
          "type": "method"
        },
        "index": {
          "description": "Ensure distributed value is fully evaluated",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "deepSeqD",
          "normalized": "a-\u003eb-\u003eb",
          "package": "dph-prim-par",
          "partial": "Seq",
          "signature": "a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:deepSeqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "indexD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Dist a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
          "type": "method"
        },
        "index": {
          "description": "Extract single element of an immutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "indexD",
          "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "signature": "String-\u003eDist a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:indexD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "measureD",
          "package": "dph-prim-par",
          "signature": "a -\u003e String",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
          "type": "method"
        },
        "index": {
          "description": "Show distributed value For debugging only",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "measureD",
          "normalized": "a-\u003eString",
          "package": "dph-prim-par",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:measureD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "newMD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e ST s (MDist a s)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
          "type": "method"
        },
        "index": {
          "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "newMD",
          "normalized": "Gang-\u003eST a(MDist b a)",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "Gang-\u003eST s(MDist a s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:newMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "readMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e ST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
          "type": "method"
        },
        "index": {
          "description": "Extract an element from mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "readMD",
          "normalized": "MDist a b-\u003eInt-\u003eST b a",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003eST s a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:readMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistribute a scalar.\n   Each thread gets its own copy of the same value.\n   Example:  scalarD theGangN4 10 = [10, 10, 10, 10] \n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.Scalar\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "scalarD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e a -\u003e Dist a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#scalarD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:scalarD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:scalarD\"]"
        },
        "index": {
          "description": "Distribute scalar Each thread gets its own copy of the same value Example scalarD theGangN4",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "scalarD",
          "normalized": "Gang-\u003ea-\u003eDist a",
          "package": "dph-prim-par",
          "signature": "Gang-\u003ea-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:scalarD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "sizeD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "sizeD",
          "normalized": "Dist a-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "sizeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "sizeMD",
          "normalized": "MDist a b-\u003eInt",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sizeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum all instances of a distributed number.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.Scalar\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "sumD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#sumD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sumD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sumD\"]"
        },
        "index": {
          "description": "Sum all instances of distributed number",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "sumD",
          "normalized": "Gang-\u003eDist a-\u003ea",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sumD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "unsafeFreezeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e ST s (Dist a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
          "type": "method"
        },
        "index": {
          "description": "Unsafely freeze mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "unsafeFreezeMD",
          "normalized": "MDist a b-\u003eST b(Dist a)",
          "package": "dph-prim-par",
          "partial": "Freeze MD",
          "signature": "MDist a s-\u003eST s(Dist a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:unsafeFreezeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "writeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
          "type": "method"
        },
        "index": {
          "description": "Write an element of mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
          "name": "writeMD",
          "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:writeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Tuples\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
          "name": "Tuple",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Tuples",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
          "name": "Tuple",
          "package": "dph-prim-par",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpairing of distributed values.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
          "name": "unzip3D",
          "package": "dph-prim-par",
          "signature": "Dist (a, b, c) -\u003e (Dist a, Dist b, Dist c)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#unzip3D",
          "type": "function"
        },
        "index": {
          "description": "Unpairing of distributed values",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
          "name": "unzip3D",
          "normalized": "Dist(a,b,c)-\u003e(Dist a,Dist b,Dist c)",
          "package": "dph-prim-par",
          "signature": "Dist(a,b,c)-\u003e(Dist a,Dist b,Dist c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:unzip3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairing of distributed values.\n \u003cem\u003eThe two values must belong to the same\u003c/em\u003e \u003ccode\u003eGang\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
          "name": "zip3D",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Dist b -\u003e Dist c -\u003e Dist (a, b, c)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#zip3D",
          "type": "function"
        },
        "index": {
          "description": "Pairing of distributed values The two values must belong to the same Gang",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
          "name": "zip3D",
          "normalized": "Dist a-\u003eDist b-\u003eDist c-\u003eDist(a,b,c)",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eDist b-\u003eDist c-\u003eDist(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:zip3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "Base",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "Base",
          "package": "dph-prim-par",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "lengthD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#lengthD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:lengthD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:lengthD\"]"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "lengthD",
          "normalized": "Dist USSegd-\u003eDist Int",
          "package": "dph-prim-par",
          "signature": "Dist USSegd-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:lengthD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "takeElementsD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeElementsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeElementsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeElementsD\"]"
        },
        "index": {
          "description": "Yield the number of data elements",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "takeElementsD",
          "normalized": "Dist USSegd-\u003eDist Int",
          "package": "dph-prim-par",
          "partial": "Elements",
          "signature": "Dist USSegd-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeElementsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "takeIndicesD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeIndicesD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeIndicesD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeIndicesD\"]"
        },
        "index": {
          "description": "Yield the segment indices",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "takeIndicesD",
          "normalized": "Dist USSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Indices",
          "signature": "Dist USSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeIndicesD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "takeLengthsD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeLengthsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeLengthsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeLengthsD\"]"
        },
        "index": {
          "description": "Yield the lengths of the individual segments",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "takeLengthsD",
          "normalized": "Dist USSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "Dist USSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeLengthsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the source ids\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "takeSourcesD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeSourcesD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeSourcesD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeSourcesD\"]"
        },
        "index": {
          "description": "Yield the source ids",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "takeSourcesD",
          "normalized": "Dist USSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Sources",
          "signature": "Dist USSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeSourcesD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "takeStartsD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeStartsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeStartsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeStartsD\"]"
        },
        "index": {
          "description": "Yield the starting indices",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "takeStartsD",
          "normalized": "Dist USSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Starts",
          "signature": "Dist USSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeStartsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the USegd\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "takeUSegdD",
          "package": "dph-prim-par",
          "signature": "Dist USSegd -\u003e Dist USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeUSegdD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeUSegdD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeUSegdD\"]"
        },
        "index": {
          "description": "Yield the USegd",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
          "name": "takeUSegdD",
          "normalized": "Dist USSegd-\u003eDist USegd",
          "package": "dph-prim-par",
          "partial": "USegd",
          "signature": "Dist USSegd-\u003eDist USegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeUSegdD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-DT.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-DT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on Distributed Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
          "name": "Split",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on Distributed Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
          "name": "Split",
          "package": "dph-prim-par",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a segment descriptor across the gang, element wise.\n   We try to put the same number of elements on each thread, which means\n   that segments are sometimes split across threads.\n\u003c/p\u003e\u003cp\u003eEach thread gets a slice of segment descriptor, the segid of the first \n   slice, and the offset of the first slice in its segment.\n\u003c/p\u003e\u003cp\u003eExample:\n    In this picture each X represents 5 elements, and we have 5 segements in total.\n\u003c/p\u003e\u003cpre\u003e   segs:    ----------------------- --- ------- --------------- -------------------\n    elems:  |X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|\n            |     thread1     |     thread2     |     thread3     |     thread4     |\n    segid:  0                 0                 3                 4\n    offset: 0                 45                0                 5\n\npprp $ splitSegdOnElemsD theGang \n          $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50 :: Int]\n\nsegd:    DUSegd lengths:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[45],[15,10,20],[40,5],[45]]\n                     indices:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[0], [0,15,25], [0,40],[0]]\n                    elements:  DInt [45,45,45,45]\n\nsegids: DInt [0,0,3,4]     (segment id of first slice on thread)\n    offsets: DInt [0,45,0,5]    (offset of that slice in its segment)\n\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USSegd\"]",
          "name": "splitSSegdOnElemsD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e USSegd -\u003e Dist ((USSegd, Int), Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#splitSSegdOnElemsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#v:splitSSegdOnElemsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:splitSSegdOnElemsD\"]"
        },
        "index": {
          "description": "Split segment descriptor across the gang element wise We try to put the same number of elements on each thread which means that segments are sometimes split across threads Each thread gets slice of segment descriptor the segid of the first slice and the offset of the first slice in its segment Example In this picture each represents elements and we have segements in total segs elems thread1 thread2 thread3 thread4 segid offset pprp splitSegdOnElemsD theGang lengthsToUSegd fromList Int segd DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt segids DInt segment id of first slice on thread offsets DInt offset of that slice in its segment",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
          "name": "splitSSegdOnElemsD",
          "normalized": "Gang-\u003eUSSegd-\u003eDist((USSegd,Int),Int)",
          "package": "dph-prim-par",
          "partial": "SSegd On Elems",
          "signature": "Gang-\u003eUSSegd-\u003eDist((USSegd,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#v:splitSSegdOnElemsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
          "name": "USSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
          "name": "USSegd",
          "package": "dph-prim-par",
          "partial": "USSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "Base",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "Base",
          "package": "dph-prim-par",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "lengthD",
          "package": "dph-prim-par",
          "signature": "Dist USegd -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#lengthD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:lengthD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:lengthD\"]"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "lengthD",
          "normalized": "Dist USegd-\u003eDist Int",
          "package": "dph-prim-par",
          "signature": "Dist USegd-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:lengthD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a distributed segment descriptor\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "mkDUSegdD",
          "package": "dph-prim-par",
          "signature": "Dist (Vector Int)-\u003e Dist (Vector Int)-\u003e Dist Int-\u003e Dist USegd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:mkDUSegdD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:mkDUSegdD\"]"
        },
        "index": {
          "description": "Construct distributed segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "mkDUSegdD",
          "normalized": "Dist(Vector Int)-\u003eDist(Vector Int)-\u003eDist Int-\u003eDist USegd",
          "package": "dph-prim-par",
          "partial": "DUSegd",
          "signature": "Dist(Vector Int)-\u003eDist(Vector Int)-\u003eDist Int-\u003eDist USegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:mkDUSegdD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "takeElementsD",
          "package": "dph-prim-par",
          "signature": "Dist USegd -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeElementsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeElementsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:takeElementsD\"]"
        },
        "index": {
          "description": "Yield the number of data elements",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "takeElementsD",
          "normalized": "Dist USegd-\u003eDist Int",
          "package": "dph-prim-par",
          "partial": "Elements",
          "signature": "Dist USegd-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeElementsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices of a segment descriptor.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "takeIndicesD",
          "package": "dph-prim-par",
          "signature": "Dist USegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeIndicesD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeIndicesD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:takeIndicesD\"]"
        },
        "index": {
          "description": "Yield the segment indices of segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "takeIndicesD",
          "normalized": "Dist USegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Indices",
          "signature": "Dist USegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeIndicesD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "takeLengthsD",
          "package": "dph-prim-par",
          "signature": "Dist USegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeLengthsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeLengthsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:takeLengthsD\"]"
        },
        "index": {
          "description": "Yield the lengths of the individual segments",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
          "name": "takeLengthsD",
          "normalized": "Dist USegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "Dist USegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeLengthsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-DT.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-DT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on Distributed Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "Split",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on Distributed Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "Split",
          "package": "dph-prim-par",
          "partial": "Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlue a distributed segment descriptor back into the original global one.\n   Prop:  glueSegdD gang $ splitSegdOnElems gang usegd = usegd\n\u003c/p\u003e\u003cp\u003eNOTE: This is runs sequentially and should only be used for testing purposes.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "glueSegdD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist ((USegd, Int), Int) -\u003e Dist USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#glueSegdD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:glueSegdD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:glueSegdD\"]"
        },
        "index": {
          "description": "Glue distributed segment descriptor back into the original global one Prop glueSegdD gang splitSegdOnElems gang usegd usegd NOTE This is runs sequentially and should only be used for testing purposes",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "glueSegdD",
          "normalized": "Gang-\u003eDist((USegd,Int),Int)-\u003eDist USegd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Gang-\u003eDist((USegd,Int),Int)-\u003eDist USegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:glueSegdD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etime O(segs)\n   Join a distributed segment descriptor into a global one.\n   This simply joins the distributed lengths and indices fields, but does\n   not reconstruct the original segment descriptor as it was before splitting.\n\u003c/p\u003e\u003cpre\u003e \u003e pprp $ joinSegdD theGang4 \n         $ fstD $ fstD $ splitSegdOnElemsD theGang\n         $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50]\n\nUSegd lengths:  [45,15,10,20,40,5,45]\n         indices:  [0,45,60,70,90,130,135]\n         elements: 180\n\u003c/pre\u003e\u003cp\u003eTODO: sequential runtime is O(segs) due to application of lengthsToUSegd\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "joinSegdD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist USegd -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#joinSegdD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:joinSegdD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:joinSegdD\"]"
        },
        "index": {
          "description": "time segs Join distributed segment descriptor into global one This simply joins the distributed lengths and indices fields but does not reconstruct the original segment descriptor as it was before splitting pprp joinSegdD theGang4 fstD fstD splitSegdOnElemsD theGang lengthsToUSegd fromList USegd lengths indices elements TODO sequential runtime is segs due to application of lengthsToUSegd",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "joinSegdD",
          "normalized": "Gang-\u003eDist USegd-\u003eUSegd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Gang-\u003eDist USegd-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:joinSegdD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "splitSD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist USegd -\u003e Vector a -\u003e Dist (Vector a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:splitSD\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "splitSD",
          "normalized": "Gang-\u003eDist USegd-\u003eVector a-\u003eDist(Vector a)",
          "package": "dph-prim-par",
          "partial": "SD",
          "signature": "Gang-\u003eDist USegd-\u003eVector a-\u003eDist(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a segment descriptor across the gang, element wise.\n   We try to put the same number of elements on each thread, which means\n   that segments are sometimes split across threads.\n\u003c/p\u003e\u003cp\u003eEach thread gets a slice of segment descriptor, the segid of the first \n   slice, and the offset of the first slice in its segment.\n\u003c/p\u003e\u003cp\u003eExample:\n    In this picture each X represents 5 elements, and we have 5 segements in total.\n\u003c/p\u003e\u003cpre\u003e  segs:    ----------------------- --- ------- --------------- -------------------\n    elems:  |X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|\n            |     thread1     |     thread2     |     thread3     |     thread4     |\n    segid:  0                 0                 3                 4\n    offset: 0                 45                0                 5\n\npprp $ splitSegdOnElemsD theGang4\n          $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50 :: Int]\n\nsegd:    DUSegd lengths:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[45],[15,10,20],[40,5],[45]]\n                     indices:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[0], [0,15,25], [0,40],[0]]\n                    elements:  DInt [45,45,45,45]\n\nsegids: DInt [0,0,3,4]     (segment id of first slice on thread)\n    offsets: DInt [0,45,0,5]    (offset of that slice in its segment)\n\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "splitSegdOnElemsD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e USegd -\u003e Dist ((USegd, Int), Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSegdOnElemsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSegdOnElemsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:splitSegdOnElemsD\"]"
        },
        "index": {
          "description": "Split segment descriptor across the gang element wise We try to put the same number of elements on each thread which means that segments are sometimes split across threads Each thread gets slice of segment descriptor the segid of the first slice and the offset of the first slice in its segment Example In this picture each represents elements and we have segements in total segs elems thread1 thread2 thread3 thread4 segid offset pprp splitSegdOnElemsD theGang4 lengthsToUSegd fromList Int segd DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt segids DInt segment id of first slice on thread offsets DInt offset of that slice in its segment",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "splitSegdOnElemsD",
          "normalized": "Gang-\u003eUSegd-\u003eDist((USegd,Int),Int)",
          "package": "dph-prim-par",
          "partial": "Segd On Elems",
          "signature": "Gang-\u003eUSegd-\u003eDist((USegd,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSegdOnElemsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a segment descriptor across the gang, segment wise.\n   Whole segments are placed on each thread, and we try to balance out\n   the segments so each thread has the same number of array elements.\n\u003c/p\u003e\u003cp\u003eWe don't split segments across threads, as this would limit our ability\n   to perform intra-thread fusion of lifted operations. The down side\n   of this is that if we have few segments with an un-even size distribution\n   then large segments can cause the gang to become unbalanced.\n\u003c/p\u003e\u003cp\u003eIn the following example the segment with size 100 dominates and\n   unbalances the gang. There is no reason to put any segments on the\n   the last thread because we need to wait for the first to finish anyway.\n\u003c/p\u003e\u003cpre\u003e \u003e pprp $ splitSegdOnSegsD theGang\n            $ lengthsToUSegd $ fromList [100, 10, 20, 40, 50  :: Int]\n\nDUSegd lengths:   DVector lengths:  [ 1,    3,         1,  0]\n                                chunks:  [[100],[10,20,40],[50],[]]\n\nindices:   DVector lengths:  [1,3,1,0]\n                                chunks:  [[0],  [0,10,30], [0], []]\n\nelements:  DInt [100,70,50,0]\n\u003c/pre\u003e\u003cp\u003eNOTE: This splitSegdOnSegsD function isn't currently used.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split\",\"Data.Array.Parallel.Unlifted.Distributed.Data.USegd\"]",
          "name": "splitSegdOnSegsD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e USegd -\u003e Dist USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSegdOnSegsD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSegdOnSegsD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:splitSegdOnSegsD\"]"
        },
        "index": {
          "description": "Split segment descriptor across the gang segment wise Whole segments are placed on each thread and we try to balance out the segments so each thread has the same number of array elements We don split segments across threads as this would limit our ability to perform intra-thread fusion of lifted operations The down side of this is that if we have few segments with an un-even size distribution then large segments can cause the gang to become unbalanced In the following example the segment with size dominates and unbalances the gang There is no reason to put any segments on the the last thread because we need to wait for the first to finish anyway pprp splitSegdOnSegsD theGang lengthsToUSegd fromList Int DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt NOTE This splitSegdOnSegsD function isn currently used",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
          "name": "splitSegdOnSegsD",
          "normalized": "Gang-\u003eUSegd-\u003eDist USegd",
          "package": "dph-prim-par",
          "partial": "Segd On Segs",
          "signature": "Gang-\u003eUSegd-\u003eDist USegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSegdOnSegsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
          "name": "USegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
          "name": "USegd",
          "package": "dph-prim-par",
          "partial": "USegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Virtual Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Virtual Segment Descriptors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "UVSegd",
          "package": "dph-prim-par",
          "partial": "UVSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "lengthD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#lengthD",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "lengthD",
          "normalized": "Dist UVSegd-\u003eDist Int",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:lengthD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeElementsD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeElementsD",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of data elements",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeElementsD",
          "normalized": "Dist UVSegd-\u003eDist Int",
          "package": "dph-prim-par",
          "partial": "Elements",
          "signature": "Dist UVSegd-\u003eDist Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeElementsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeIndicesD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeIndicesD",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment indices",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeIndicesD",
          "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Indices",
          "signature": "Dist UVSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeIndicesD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeLengthsD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeLengthsD",
          "type": "function"
        },
        "index": {
          "description": "Yield the lengths of the individual segments",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeLengthsD",
          "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "Dist UVSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeLengthsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the source ids\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeSourcesD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeSourcesD",
          "type": "function"
        },
        "index": {
          "description": "Yield the source ids",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeSourcesD",
          "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Sources",
          "signature": "Dist UVSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeSourcesD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeStartsD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeStartsD",
          "type": "function"
        },
        "index": {
          "description": "Yield the starting indices",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeStartsD",
          "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "Starts",
          "signature": "Dist UVSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeStartsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the USSegd\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeUSSegdD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeUSSegdD",
          "type": "function"
        },
        "index": {
          "description": "Yield the USSegd",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeUSSegdD",
          "normalized": "Dist UVSegd-\u003eDist USSegd",
          "package": "dph-prim-par",
          "partial": "USSegd",
          "signature": "Dist UVSegd-\u003eDist USSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeUSSegdD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the vsegids\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeVSegidsD",
          "package": "dph-prim-par",
          "signature": "Dist UVSegd -\u003e Dist (Vector Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeVSegidsD",
          "type": "function"
        },
        "index": {
          "description": "Yield the vsegids",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
          "name": "takeVSegidsD",
          "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
          "package": "dph-prim-par",
          "partial": "VSegids",
          "signature": "Dist UVSegd-\u003eDist(Vector Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeVSegidsD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of unit values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
          "name": "Unit",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of unit values",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Unit",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
          "name": "Unit",
          "package": "dph-prim-par",
          "partial": "Unit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a distributed unit.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
          "name": "unitD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Dist ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html#unitD",
          "type": "function"
        },
        "index": {
          "description": "Yield distributed unit",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Unit",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
          "name": "unitD",
          "normalized": "Gang-\u003eDist()",
          "package": "dph-prim-par",
          "signature": "Gang-\u003eDist()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html#v:unitD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Vectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Vector",
          "name": "Vector",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of Vectors",
          "hierarchy": "Data Array Parallel Unlifted Distributed Data Vector",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Vector",
          "name": "Vector",
          "package": "dph-prim-par",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of values of primitive types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "DPrim",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html",
          "type": "module"
        },
        "index": {
          "description": "Distribution of values of primitive types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "DPrim",
          "package": "dph-prim-par",
          "partial": "DPrim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor distributed primitive values, we can just store all the members in\n   a vector. The vector has the same length as the number of threads in the gang.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "DPrim",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#DPrim",
          "type": "class"
        },
        "index": {
          "description": "For distributed primitive values we can just store all the members in vector The vector has the same length as the number of threads in the gang",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "DPrim",
          "package": "dph-prim-par",
          "partial": "DPrim",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#t:DPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an immutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "mkDPrim",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e Dist e",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#mkDPrim",
          "type": "method"
        },
        "index": {
          "description": "Make an immutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "mkDPrim",
          "normalized": "Vector a-\u003eDist a",
          "package": "dph-prim-par",
          "partial": "DPrim",
          "signature": "Vector e-\u003eDist e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:mkDPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "mkMDPrim",
          "package": "dph-prim-par",
          "signature": "STVector s e -\u003e MDist e s",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#mkMDPrim",
          "type": "method"
        },
        "index": {
          "description": "Make mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "mkMDPrim",
          "normalized": "STVector a b-\u003eMDist b a",
          "package": "dph-prim-par",
          "partial": "MDPrim",
          "signature": "STVector s e-\u003eMDist e s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:mkMDPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the member corresponding to a thread index.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primIndexD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Dist a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primIndexD",
          "type": "function"
        },
        "index": {
          "description": "Get the member corresponding to thread index",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primIndexD",
          "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "partial": "Index",
          "signature": "String-\u003eDist a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primIndexD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new distributed value, having as many members as threads\n   in the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primNewMD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e ST s (MDist a s)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primNewMD",
          "type": "function"
        },
        "index": {
          "description": "Create new distributed value having as many members as threads in the given Gang",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primNewMD",
          "normalized": "Gang-\u003eST a(MDist b a)",
          "package": "dph-prim-par",
          "partial": "New MD",
          "signature": "Gang-\u003eST s(MDist a s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primNewMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the member of a distributed value corresponding to the given thread index.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primReadMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e ST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primReadMD",
          "type": "function"
        },
        "index": {
          "description": "Read the member of distributed value corresponding to the given thread index",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primReadMD",
          "normalized": "MDist a b-\u003eInt-\u003eST b a",
          "package": "dph-prim-par",
          "partial": "Read MD",
          "signature": "MDist a s-\u003eInt-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primReadMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of a distributed value, that is, the number of threads\n   in the gang that it was created for.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primSizeD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primSizeD",
          "type": "function"
        },
        "index": {
          "description": "Get the size of distributed value that is the number of threads in the gang that it was created for",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primSizeD",
          "normalized": "Dist a-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Size",
          "signature": "Dist a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primSizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of a distributed mutable value, that is, the number of threads\n   in the gang it was created for.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primSizeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primSizeMD",
          "type": "function"
        },
        "index": {
          "description": "Get the size of distributed mutable value that is the number of threads in the gang it was created for",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primSizeMD",
          "normalized": "MDist a b-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Size MD",
          "signature": "MDist a s-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primSizeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze a mutable distributed value to an immutable one.\n   You promise not to update the mutable one any further.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primUnsafeFreezeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e ST s (Dist a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primUnsafeFreezeMD",
          "type": "function"
        },
        "index": {
          "description": "Freeze mutable distributed value to an immutable one You promise not to update the mutable one any further",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primUnsafeFreezeMD",
          "normalized": "MDist a b-\u003eST b(Dist a)",
          "package": "dph-prim-par",
          "partial": "Unsafe Freeze MD",
          "signature": "MDist a s-\u003eST s(Dist a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primUnsafeFreezeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the member of a distributed value corresponding to the given thread index.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primWriteMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primWriteMD",
          "type": "function"
        },
        "index": {
          "description": "Write the member of distributed value corresponding to the given thread index",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "primWriteMD",
          "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
          "package": "dph-prim-par",
          "partial": "Write MD",
          "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primWriteMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack an immutable distributed value back into a vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "unDPrim",
          "package": "dph-prim-par",
          "signature": "Dist e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#unDPrim",
          "type": "method"
        },
        "index": {
          "description": "Unpack an immutable distributed value back into vector",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "unDPrim",
          "normalized": "Dist a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "DPrim",
          "signature": "Dist e-\u003eVector e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:unDPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a mutable distributed value back into a vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "unMDPrim",
          "package": "dph-prim-par",
          "signature": "MDist e s -\u003e STVector s e",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#unMDPrim",
          "type": "method"
        },
        "index": {
          "description": "Unpack mutable distributed value back into vector",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
          "name": "unMDPrim",
          "normalized": "MDist a b-\u003eSTVector b a",
          "package": "dph-prim-par",
          "partial": "MDPrim",
          "signature": "MDist e s-\u003eSTVector s e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:unMDPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
          "type": "class"
        },
        "index": {
          "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the sizes of the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and of the distributed value match.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.DT\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\"]",
          "name": "checkGangD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Gang -\u003e Dist a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#checkGangD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:checkGangD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:checkGangD\"]"
        },
        "index": {
          "description": "Check that the sizes of the Gang and of the distributed value match",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "checkGangD",
          "normalized": "String-\u003eGang-\u003eDist a-\u003eb-\u003eb",
          "package": "dph-prim-par",
          "partial": "Gang",
          "signature": "String-\u003eGang-\u003eDist a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:checkGangD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the sizes of the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and of the mutable distributed value match.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "checkGangMD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Gang -\u003e MDist a s -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#checkGangMD",
          "type": "function"
        },
        "index": {
          "description": "Check that the sizes of the Gang and of the mutable distributed value match",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "checkGangMD",
          "normalized": "String-\u003eGang-\u003eMDist a b-\u003ec-\u003ec",
          "package": "dph-prim-par",
          "partial": "Gang MD",
          "signature": "String-\u003eGang-\u003eMDist a s-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:checkGangMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow all members of a distributed value.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.DT\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "debugD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e String",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#debugD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:debugD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:debugD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:debugD\"]"
        },
        "index": {
          "description": "Show all members of distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "debugD",
          "normalized": "Dist a-\u003eString",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:debugD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "deepSeqD",
          "package": "dph-prim-par",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
          "type": "method"
        },
        "index": {
          "description": "Ensure distributed value is fully evaluated",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "deepSeqD",
          "normalized": "a-\u003eb-\u003eb",
          "package": "dph-prim-par",
          "partial": "Seq",
          "signature": "a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:deepSeqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "indexD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Dist a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
          "type": "method"
        },
        "index": {
          "description": "Extract single element of an immutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "indexD",
          "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "signature": "String-\u003eDist a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:indexD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "measureD",
          "package": "dph-prim-par",
          "signature": "a -\u003e String",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
          "type": "method"
        },
        "index": {
          "description": "Show distributed value For debugging only",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "measureD",
          "normalized": "a-\u003eString",
          "package": "dph-prim-par",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:measureD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a computation that can write its result to a mutable distributed value, \n   run the computation to generate an immutable distributed value.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.DT\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\"]",
          "name": "newD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e (forall s.  MDist a s -\u003e ST s ()) -\u003e Dist a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newD",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:newD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:newD\"]"
        },
        "index": {
          "description": "Given computation that can write its result to mutable distributed value run the computation to generate an immutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "newD",
          "normalized": "Gang-\u003e(a b MDist c d-\u003eST d())-\u003eDist c",
          "package": "dph-prim-par",
          "signature": "Gang-\u003e(forall s. MDist a s-\u003eST s())-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:newD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "newMD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e ST s (MDist a s)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
          "type": "method"
        },
        "index": {
          "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "newMD",
          "normalized": "Gang-\u003eST a(MDist b a)",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "Gang-\u003eST s(MDist a s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:newMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "readMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e ST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
          "type": "method"
        },
        "index": {
          "description": "Extract an element from mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "readMD",
          "normalized": "MDist a b-\u003eInt-\u003eST b a",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003eST s a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:readMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "sizeD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "sizeD",
          "normalized": "Dist a-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:sizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "sizeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "sizeMD",
          "normalized": "MDist a b-\u003eInt",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:sizeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "unsafeFreezeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e ST s (Dist a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
          "type": "method"
        },
        "index": {
          "description": "Unsafely freeze mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "unsafeFreezeMD",
          "normalized": "MDist a b-\u003eST b(Dist a)",
          "package": "dph-prim-par",
          "partial": "Freeze MD",
          "signature": "MDist a s-\u003eST s(Dist a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:unsafeFreezeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "writeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
          "type": "method"
        },
        "index": {
          "description": "Write an element of mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
          "name": "writeMD",
          "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:writeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistributed ST computations.\n\u003c/p\u003e\u003cp\u003eComputations of type \u003ccode\u003e\u003ca\u003eDistST\u003c/a\u003e\u003c/code\u003e are data-parallel computations which\n  are run on each thread of a gang. At the moment, they can only access the\n  element of a (possibly mutable) distributed value owned by the current\n  thread.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e Add facilities for implementing parallel scans etc.\n\u003c/p\u003e\u003cp\u003eTODO: \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "DistST",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html",
          "type": "module"
        },
        "index": {
          "description": "Distributed ST computations Computations of type DistST are data-parallel computations which are run on each thread of gang At the moment they can only access the element of possibly mutable distributed value owned by the current thread TODO Add facilities for implementing parallel scans etc TODO",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "DistST",
          "package": "dph-prim-par",
          "partial": "Dist ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData-parallel computations.\n   When applied to a thread gang, the computation implicitly knows the index\n   of the thread it's working on. Alternatively, if we know the thread index\n   then we can make a regular ST computation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "DistST",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#DistST",
          "type": "data"
        },
        "index": {
          "description": "Data-parallel computations When applied to thread gang the computation implicitly knows the index of the thread it working on Alternatively if we know the thread index then we can make regular ST computation",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "DistST",
          "package": "dph-prim-par",
          "partial": "Dist ST",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#t:DistST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a data-parallel computation, yielding the distributed result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "distST",
          "package": "dph-prim-par",
          "signature": "Comp -\u003e Gang -\u003e DistST s a -\u003e ST s (Dist a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#distST",
          "type": "function"
        },
        "index": {
          "description": "Execute data-parallel computation yielding the distributed result",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "distST",
          "normalized": "Comp-\u003eGang-\u003eDistST a b-\u003eST a(Dist b)",
          "package": "dph-prim-par",
          "partial": "ST",
          "signature": "Comp-\u003eGang-\u003eDistST s a-\u003eST s(Dist a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:distST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a data-parallel computation on a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The same DistST comutation runs on each thread.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "distST_",
          "package": "dph-prim-par",
          "signature": "Comp -\u003e Gang -\u003e DistST s () -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#distST_",
          "type": "function"
        },
        "index": {
          "description": "Execute data-parallel computation on Gang The same DistST comutation runs on each thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "distST_",
          "normalized": "Comp-\u003eGang-\u003eDistST a()-\u003eST a()",
          "package": "dph-prim-par",
          "partial": "ST",
          "signature": "Comp-\u003eGang-\u003eDistST s()-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:distST_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "mapDST",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (a -\u003e DistST s b) -\u003e Dist a -\u003e ST s (Dist b)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#mapDST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "mapDST",
          "normalized": "What-\u003eGang-\u003e(a-\u003eDistST b c)-\u003eDist a-\u003eST b(Dist c)",
          "package": "dph-prim-par",
          "partial": "DST",
          "signature": "What-\u003eGang-\u003e(a-\u003eDistST s b)-\u003eDist a-\u003eST s(Dist b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:mapDST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "mapDST_",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (a -\u003e DistST s ()) -\u003e Dist a -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#mapDST_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "mapDST_",
          "normalized": "What-\u003eGang-\u003e(a-\u003eDistST b())-\u003eDist a-\u003eST b()",
          "package": "dph-prim-par",
          "partial": "DST",
          "signature": "What-\u003eGang-\u003e(a-\u003eDistST s())-\u003eDist a-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:mapDST_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e element owned by the current thread.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "myD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e DistST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#myD",
          "type": "function"
        },
        "index": {
          "description": "Yields the Dist element owned by the current thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "myD",
          "normalized": "Dist a-\u003eDistST b a",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eDistST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:myD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the index of the current thread within its gang.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "myIndex",
          "package": "dph-prim-par",
          "signature": "DistST s Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#myIndex",
          "type": "function"
        },
        "index": {
          "description": "Yields the index of the current thread within its gang",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "myIndex",
          "package": "dph-prim-par",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:myIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the \u003ccode\u003e\u003ca\u003eMDist\u003c/a\u003e\u003c/code\u003e element owned by the current thread.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "readMyMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e DistST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#readMyMD",
          "type": "function"
        },
        "index": {
          "description": "Yields the MDist element owned by the current thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "readMyMD",
          "normalized": "MDist a b-\u003eDistST b a",
          "package": "dph-prim-par",
          "partial": "My MD",
          "signature": "MDist a s-\u003eDistST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:readMyMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a data-parallel computation, yielding the distributed result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "runDistST",
          "package": "dph-prim-par",
          "signature": "Comp -\u003e Gang -\u003e (forall s.  DistST s a) -\u003e Dist a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#runDistST",
          "type": "function"
        },
        "index": {
          "description": "Run data-parallel computation yielding the distributed result",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "runDistST",
          "normalized": "Comp-\u003eGang-\u003e(a b DistST c d)-\u003eDist d",
          "package": "dph-prim-par",
          "partial": "Dist ST",
          "signature": "Comp-\u003eGang-\u003e(forall s. DistST s a)-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:runDistST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "runDistST_seq",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e (forall s.  DistST s a) -\u003e Dist a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#runDistST_seq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "runDistST_seq",
          "normalized": "Gang-\u003e(a b DistST c d)-\u003eDist d",
          "package": "dph-prim-par",
          "partial": "Dist ST",
          "signature": "Gang-\u003e(forall s. DistST s a)-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:runDistST_seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e computation into the \u003ccode\u003e\u003ca\u003eDistST\u003c/a\u003e\u003c/code\u003e monad.\n   The lifted computation should be data parallel.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "stToDistST",
          "package": "dph-prim-par",
          "signature": "ST s a -\u003e DistST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#stToDistST",
          "type": "function"
        },
        "index": {
          "description": "Lifts an ST computation into the DistST monad The lifted computation should be data parallel",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "stToDistST",
          "normalized": "ST a b-\u003eDistST a b",
          "package": "dph-prim-par",
          "partial": "To Dist ST",
          "signature": "ST s a-\u003eDistST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:stToDistST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the \u003ccode\u003e\u003ca\u003eMDist\u003c/a\u003e\u003c/code\u003e element owned by the current thread.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "writeMyMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e a -\u003e DistST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#writeMyMD",
          "type": "function"
        },
        "index": {
          "description": "Writes the MDist element owned by the current thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "writeMyMD",
          "normalized": "MDist a b-\u003ea-\u003eDistST b()",
          "package": "dph-prim-par",
          "partial": "My MD",
          "signature": "MDist a s-\u003ea-\u003eDistST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:writeMyMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "zipWithDST",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (a -\u003e b -\u003e DistST s c) -\u003e Dist a -\u003e Dist b -\u003e ST s (Dist c)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#zipWithDST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "zipWithDST",
          "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST c d)-\u003eDist a-\u003eDist b-\u003eST c(Dist d)",
          "package": "dph-prim-par",
          "partial": "With DST",
          "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST s c)-\u003eDist a-\u003eDist b-\u003eST s(Dist c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:zipWithDST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "zipWithDST_",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (a -\u003e b -\u003e DistST s ()) -\u003e Dist a -\u003e Dist b -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#zipWithDST_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
          "name": "zipWithDST_",
          "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST c())-\u003eDist a-\u003eDist b-\u003eST c()",
          "package": "dph-prim-par",
          "partial": "With DST",
          "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST s())-\u003eDist a-\u003eDist b-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:zipWithDST_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGang primitives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "Gang",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html",
          "type": "module"
        },
        "index": {
          "description": "Gang primitives",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "Gang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads which execute arbitrary work requests.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "Gang",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Gang",
          "type": "data"
        },
        "index": {
          "description": "Gang is group of threads which execute arbitrary work requests",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "Gang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#t:Gang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "Workload",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Workload",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "Workload",
          "package": "dph-prim-par",
          "partial": "Workload",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#t:Workload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemory bound copy-like workload, \n   of the given number of bytes.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "WorkCopy",
          "package": "dph-prim-par",
          "signature": "WorkCopy Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Workload",
          "type": "function"
        },
        "index": {
          "description": "Memory bound copy-like workload of the given number of bytes",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "WorkCopy",
          "package": "dph-prim-par",
          "partial": "Work Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:WorkCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnknown workload. Just run it in parallel.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "WorkUnknown",
          "package": "dph-prim-par",
          "signature": "WorkUnknown",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Workload",
          "type": "function"
        },
        "index": {
          "description": "Unknown workload Just run it in parallel",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "WorkUnknown",
          "package": "dph-prim-par",
          "partial": "Work Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:WorkUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e with the given number of threads (at least 1).\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "forkGang",
          "package": "dph-prim-par",
          "signature": "Int -\u003e IO Gang",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#forkGang",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:forkGang\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:forkGang\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:forkGang\"]"
        },
        "index": {
          "description": "Fork Gang with the given number of threads at least",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "forkGang",
          "normalized": "Int-\u003eIO Gang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "signature": "Int-\u003eIO Gang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:forkGang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue work requests for the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and wait until they have been executed.\n   If the gang is already busy then just run the action in the requesting\n   thread. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "gangIO",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e String -\u003e Workload -\u003e (Int -\u003e IO ()) -\u003e IO ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangIO",
          "type": "function"
        },
        "index": {
          "description": "Issue work requests for the Gang and wait until they have been executed If the gang is already busy then just run the action in the requesting thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "gangIO",
          "normalized": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eIO())-\u003eIO()",
          "package": "dph-prim-par",
          "partial": "IO",
          "signature": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egangIO\u003c/a\u003e\u003c/code\u003e but in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "gangST",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e String -\u003e Workload -\u003e (Int -\u003e ST s ()) -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangST",
          "type": "function"
        },
        "index": {
          "description": "Same as gangIO but in the ST monad",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "gangST",
          "normalized": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eST a())-\u003eST a()",
          "package": "dph-prim-par",
          "partial": "ST",
          "signature": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eST s())-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of threads in the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "gangSize",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangSize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangSize\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:gangSize\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:gangSize\"]"
        },
        "index": {
          "description": "Yield the number of threads in the Gang",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "gangSize",
          "normalized": "Gang-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Size",
          "signature": "Gang-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequential gang has no threads.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\"]",
          "name": "seqGang",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e Gang",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#seqGang",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:seqGang\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:seqGang\"]"
        },
        "index": {
          "description": "sequential gang has no threads",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
          "name": "seqGang",
          "normalized": "Gang-\u003eGang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "signature": "Gang-\u003eGang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:seqGang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard combinators for distributed types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
          "name": "Operators",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html",
          "type": "module"
        },
        "index": {
          "description": "Standard combinators for distributed types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
          "name": "Operators",
          "package": "dph-prim-par",
          "partial": "Operators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a distributed value, given a function to create the instance\n   for each thread.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\"]",
          "name": "generateD",
          "package": "dph-prim-par",
          "signature": "What-\u003e Gang-\u003e (Int -\u003e a)-\u003e Dist a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:generateD\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:generateD\"]"
        },
        "index": {
          "description": "Create distributed value given function to create the instance for each thread",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
          "name": "generateD",
          "normalized": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
          "package": "dph-prim-par",
          "signature": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:generateD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a distributed value, but do it sequentially.\n\u003c/p\u003e\u003cp\u003eThis function is used when we want to operate on a distributed value, but\n   there isn't much data involved. For example, if we want to distribute \n   a single integer to each thread, then there's no need to fire up the \n   gang for this.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\"]",
          "name": "generateD_cheap",
          "package": "dph-prim-par",
          "signature": "What-\u003e Gang-\u003e (Int -\u003e a)-\u003e Dist a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:generateD_cheap\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:generateD_cheap\"]"
        },
        "index": {
          "description": "Create distributed value but do it sequentially This function is used when we want to operate on distributed value but there isn much data involved For example if we want to distribute single integer to each thread then there no need to fire up the gang for this",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
          "name": "generateD_cheap",
          "normalized": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
          "package": "dph-prim-par",
          "signature": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:generateD_cheap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function across all elements of a distributed value.\n   The worker function also gets the current thread index.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators\",\"Data.Array.Parallel.Unlifted.Distributed.Primitive\"]",
          "name": "imapD'",
          "package": "dph-prim-par",
          "signature": "What -\u003e Gang -\u003e (Int -\u003e a -\u003e b) -\u003e Dist a -\u003e Dist b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#imapD%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:imapD-39-\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:imapD-39-\"]"
        },
        "index": {
          "description": "Map function across all elements of distributed value The worker function also gets the current thread index",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
          "name": "imapD'",
          "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
          "package": "dph-prim-par",
          "partial": "D'",
          "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:imapD-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard combinators for distributed types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "Primitive",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive.html",
          "type": "module"
        },
        "index": {
          "description": "Standard combinators for distributed types",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "Primitive",
          "package": "dph-prim-par",
          "partial": "Primitive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
          "type": "class"
        },
        "index": {
          "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads which execute arbitrary work requests.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "Gang",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Gang",
          "type": "data"
        },
        "index": {
          "description": "Gang is group of threads which execute arbitrary work requests",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "Gang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#t:Gang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "deepSeqD",
          "package": "dph-prim-par",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
          "type": "method"
        },
        "index": {
          "description": "Ensure distributed value is fully evaluated",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "deepSeqD",
          "normalized": "a-\u003eb-\u003eb",
          "package": "dph-prim-par",
          "partial": "Seq",
          "signature": "a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:deepSeqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "indexD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Dist a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
          "type": "method"
        },
        "index": {
          "description": "Extract single element of an immutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "indexD",
          "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "signature": "String-\u003eDist a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:indexD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "measureD",
          "package": "dph-prim-par",
          "signature": "a -\u003e String",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
          "type": "method"
        },
        "index": {
          "description": "Show distributed value For debugging only",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "measureD",
          "normalized": "a-\u003eString",
          "package": "dph-prim-par",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:measureD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "newMD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e ST s (MDist a s)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
          "type": "method"
        },
        "index": {
          "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "newMD",
          "normalized": "Gang-\u003eST a(MDist b a)",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "Gang-\u003eST s(MDist a s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:newMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "readMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e ST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
          "type": "method"
        },
        "index": {
          "description": "Extract an element from mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "readMD",
          "normalized": "MDist a b-\u003eInt-\u003eST b a",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003eST s a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:readMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "sizeD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "sizeD",
          "normalized": "Dist a-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:sizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "sizeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "sizeMD",
          "normalized": "MDist a b-\u003eInt",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:sizeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDPH programs use this single, shared gang of threads.\n   The gang exists at top level, and is initialised at program start.\n\u003c/p\u003e\u003cp\u003eThe vectoriser guarantees that the gang is only used by a single\n   computation at a time. This is true because the program produced\n   by the vector only uses flat parallelism, so parallel computations\n   don't invoke further parallel computations. If the vectorised program\n   tries to use nested parallelism then there is a bug in the vectoriser,\n   and the code will run sequentially.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Distributed.Primitive\",\"Data.Array.Parallel.Unlifted.Distributed\"]",
          "name": "theGang",
          "package": "dph-prim-par",
          "signature": "Gang",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#theGang",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:theGang\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:theGang\"]"
        },
        "index": {
          "description": "DPH programs use this single shared gang of threads The gang exists at top level and is initialised at program start The vectoriser guarantees that the gang is only used by single computation at time This is true because the program produced by the vector only uses flat parallelism so parallel computations don invoke further parallel computations If the vectorised program tries to use nested parallelism then there is bug in the vectoriser and the code will run sequentially",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "theGang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:theGang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "unsafeFreezeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e ST s (Dist a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
          "type": "method"
        },
        "index": {
          "description": "Unsafely freeze mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "unsafeFreezeMD",
          "normalized": "MDist a b-\u003eST b(Dist a)",
          "package": "dph-prim-par",
          "partial": "Freeze MD",
          "signature": "MDist a s-\u003eST s(Dist a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:unsafeFreezeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "writeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
          "type": "method"
        },
        "index": {
          "description": "Write an element of mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
          "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
          "name": "writeMD",
          "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:writeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "What",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "What",
          "package": "dph-prim-par",
          "partial": "What",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat distributed computation we are doing.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "Comp",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
          "type": "data"
        },
        "index": {
          "description": "What distributed computation we are doing",
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "Comp",
          "package": "dph-prim-par",
          "partial": "Comp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#t:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat sort of thing is being computed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "What",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
          "type": "data"
        },
        "index": {
          "description": "What sort of thing is being computed",
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "What",
          "package": "dph-prim-par",
          "partial": "What",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#t:What"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CDist",
          "package": "dph-prim-par",
          "signature": "CDist What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CDist",
          "package": "dph-prim-par",
          "partial": "CDist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CFold",
          "package": "dph-prim-par",
          "signature": "CFold What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CFold",
          "package": "dph-prim-par",
          "partial": "CFold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CGen",
          "package": "dph-prim-par",
          "signature": "CGen Bool What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CGen",
          "package": "dph-prim-par",
          "partial": "CGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CMap",
          "package": "dph-prim-par",
          "signature": "CMap What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CMap",
          "package": "dph-prim-par",
          "partial": "CMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CScan",
          "package": "dph-prim-par",
          "signature": "CScan What",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Distributed What",
          "module": "Data.Array.Parallel.Unlifted.Distributed.What",
          "name": "CScan",
          "package": "dph-prim-par",
          "partial": "CScan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistributed types and operations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an internal API and shouldn't need to be used directly.\n     Client programs should use \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "Distributed",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed.html",
          "type": "module"
        },
        "index": {
          "description": "Distributed types and operations This is an internal API and shouldn need to be used directly Client programs should use Data.Array.Parallel.Unlifted",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "Distributed",
          "package": "dph-prim-par",
          "partial": "Distributed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "DT",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
          "type": "class"
        },
        "index": {
          "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "DT",
          "package": "dph-prim-par",
          "partial": "DT",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#t:DT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a phantom parameter used to record whether a distributed value\n   is balanced evenly among the threads. It's used to signal this property\n   between RULES, but the actual value is never used.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "Distribution",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#Distribution",
          "type": "data"
        },
        "index": {
          "description": "This is phantom parameter used to record whether distributed value is balanced evenly among the threads It used to signal this property between RULES but the actual value is never used",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "Distribution",
          "package": "dph-prim-par",
          "partial": "Distribution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#t:Distribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads which execute arbitrary work requests.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "Gang",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Gang",
          "type": "data"
        },
        "index": {
          "description": "Gang is group of threads which execute arbitrary work requests",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "Gang",
          "package": "dph-prim-par",
          "partial": "Gang",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#t:Gang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "deepSeqD",
          "package": "dph-prim-par",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
          "type": "method"
        },
        "index": {
          "description": "Ensure distributed value is fully evaluated",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "deepSeqD",
          "normalized": "a-\u003eb-\u003eb",
          "package": "dph-prim-par",
          "partial": "Seq",
          "signature": "a-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:deepSeqD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "indexD",
          "package": "dph-prim-par",
          "signature": "String -\u003e Dist a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
          "type": "method"
        },
        "index": {
          "description": "Extract single element of an immutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "indexD",
          "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "signature": "String-\u003eDist a-\u003eInt-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:indexD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "measureD",
          "package": "dph-prim-par",
          "signature": "a -\u003e String",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
          "type": "method"
        },
        "index": {
          "description": "Show distributed value For debugging only",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "measureD",
          "normalized": "a-\u003eString",
          "package": "dph-prim-par",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:measureD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "newMD",
          "package": "dph-prim-par",
          "signature": "Gang -\u003e ST s (MDist a s)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
          "type": "method"
        },
        "index": {
          "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "newMD",
          "normalized": "Gang-\u003eST a(MDist b a)",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "Gang-\u003eST s(MDist a s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:newMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "readMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e ST s a",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
          "type": "method"
        },
        "index": {
          "description": "Extract an element from mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "readMD",
          "normalized": "MDist a b-\u003eInt-\u003eST b a",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003eST s a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:readMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "sizeD",
          "package": "dph-prim-par",
          "signature": "Dist a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "sizeD",
          "normalized": "Dist a-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Dist a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sizeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "sizeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
          "type": "method"
        },
        "index": {
          "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "sizeMD",
          "normalized": "MDist a b-\u003eInt",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sizeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "unsafeFreezeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e ST s (Dist a)",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
          "type": "method"
        },
        "index": {
          "description": "Unsafely freeze mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "unsafeFreezeMD",
          "normalized": "MDist a b-\u003eST b(Dist a)",
          "package": "dph-prim-par",
          "partial": "Freeze MD",
          "signature": "MDist a s-\u003eST s(Dist a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:unsafeFreezeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "writeMD",
          "package": "dph-prim-par",
          "signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
          "source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
          "type": "method"
        },
        "index": {
          "description": "Write an element of mutable distributed value",
          "hierarchy": "Data Array Parallel Unlifted Distributed",
          "module": "Data.Array.Parallel.Unlifted.Distributed",
          "name": "writeMD",
          "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
          "package": "dph-prim-par",
          "partial": "MD",
          "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:writeMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic operations on parallel unlifted arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "Basics",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html",
          "type": "module"
        },
        "index": {
          "description": "Basic operations on parallel unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "Basics",
          "package": "dph-prim-par",
          "partial": "Basics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "emptyUP",
          "package": "dph-prim-par",
          "signature": "Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#emptyUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:emptyUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:emptyUP\"]"
        },
        "index": {
          "description": "Construct an empty array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "emptyUP",
          "package": "dph-prim-par",
          "partial": "UP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:emptyUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate each element of the array with its index\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "indexedUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e Vector (Int, e)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#indexedUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:indexedUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexedUP\"]"
        },
        "index": {
          "description": "Associate each element of the array with its index",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "indexedUP",
          "normalized": "Vector a-\u003eVector(Int,a)",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003eVector(Int,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:indexedUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave elements of two arrays\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "interleaveUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#interleaveUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:interleaveUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:interleaveUP\"]"
        },
        "index": {
          "description": "Interleave elements of two arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "interleaveUP",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:interleaveUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the length of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "lengthUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#lengthUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:lengthUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:lengthUP\"]"
        },
        "index": {
          "description": "Take the length of an array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "lengthUP",
          "normalized": "Vector a-\u003eInt",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:lengthUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Test whether the given array is empty\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "nullUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#nullUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:nullUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:nullUP\"]"
        },
        "index": {
          "description": "Test whether the given array is empty",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "nullUP",
          "normalized": "Vector a-\u003eBool",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:nullUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat an array the given number of times.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "repeatUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#repeatUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:repeatUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:repeatUP\"]"
        },
        "index": {
          "description": "Repeat an array the given number of times",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "repeatUP",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Int-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:repeatUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield an array where all elements contain the same value\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Basics\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "replicateUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#replicateUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:replicateUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:replicateUP\"]"
        },
        "index": {
          "description": "Yield an array where all elements contain the same value",
          "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
          "name": "replicateUP",
          "normalized": "Int-\u003ea-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Int-\u003ee-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:replicateUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel combinators for unlifted arrays. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "Combinators",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel combinators for unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "Combinators",
          "package": "dph-prim-par",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two vectors based on a selector. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The data vectors must have enough elements to satisfy the selector,\n     but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "combine2UP",
          "package": "dph-prim-par",
          "signature": "Vector Tag -\u003e UPSelRep2 -\u003e Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#combine2UP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:combine2UP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:combine2UP\"]"
        },
        "index": {
          "description": "Combine two vectors based on selector The data vectors must have enough elements to satisfy the selector but this is not checked",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "combine2UP",
          "normalized": "Vector Tag-\u003eUPSelRep-\u003eVector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector Tag-\u003eUPSelRep-\u003eVector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:combine2UP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two vectors based on a selector. \n   If the selector is true then take the element from the first vector, \n   otherwise take it from the second.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The data vectors must have enough elements to satisfy the flag vector, \n     but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "combineUP",
          "package": "dph-prim-par",
          "signature": "Vector Bool -\u003e Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#combineUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:combineUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:combineUP\"]"
        },
        "index": {
          "description": "Combine two vectors based on selector If the selector is true then take the element from the first vector otherwise take it from the second The data vectors must have enough elements to satisfy the flag vector but this is not checked",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "combineUP",
          "normalized": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:combineUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep elements that match the given predicate.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "filterUP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#filterUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:filterUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:filterUP\"]"
        },
        "index": {
          "description": "Keep elements that match the given predicate",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "filterUP",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:filterUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003efoldl1UP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "fold1UP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#fold1UP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:fold1UP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:fold1UP\"]"
        },
        "index": {
          "description": "Alias for foldl1UP",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "fold1UP",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:fold1UP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold.\n   Note that this function has more constraints on its parameters than the\n   standard fold function from the Haskell Prelude.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWe need these constraints so that we can partition the fold across \n   several threads. Each thread folds a chunk of the input vector, \n   then we fold together all the results in the main thread.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "foldUP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldUP\"]"
        },
        "index": {
          "description": "Undirected fold Note that this function has more constraints on its parameters than the standard fold function from the Haskell Prelude The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt We need these constraints so that we can partition the fold across several threads Each thread folds chunk of the input vector then we fold together all the results in the main thread",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "foldUP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over an array, using the first element of the vector as the\n   neural element.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector contains no elements then you'll get a bounds-check error.\n\u003c/li\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "foldl1UP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldl1UP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldl1UP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldl1UP\"]"
        },
        "index": {
          "description": "Left fold over an array using the first element of the vector as the neural element If the vector contains no elements then you ll get bounds-check error The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "foldl1UP",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldl1UP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft fold over an array. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector is empty then this returns the provided neural element.\n\u003c/li\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "foldlUP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldlUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldlUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldlUP\"]"
        },
        "index": {
          "description": "Left fold over an array If the vector is empty then this returns the provided neural element The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "foldlUP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldlUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker to all elements of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "mapUP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#mapUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:mapUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:mapUP\"]"
        },
        "index": {
          "description": "Apply worker to all elements of an array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "mapUP",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:mapUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake elements of an array where a flag value is true, and pack them into\n   the result. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The souce and flag arrays must have the same length, but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "packUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e Vector Bool -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#packUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:packUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:packUP\"]"
        },
        "index": {
          "description": "Take elements of an array where flag value is true and pack them into the result The souce and flag arrays must have the same length but this is not checked",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "packUP",
          "normalized": "Vector a-\u003eVector Bool-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003eVector Bool-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:packUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix scan. Similar to fold, but produce an array of the intermediate states.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "scanUP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#scanUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:scanUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:scanUP\"]"
        },
        "index": {
          "description": "Prefix scan Similar to fold but produce an array of the intermediate states The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "scanUP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:scanUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to correponding elements of two arrays.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Combinators\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "zipWithUP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#zipWithUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:zipWithUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:zipWithUP\"]"
        },
        "index": {
          "description": "Apply worker function to correponding elements of two arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
          "name": "zipWithUP",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "dph-prim-par",
          "partial": "With UP",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:zipWithUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnum-related parallel operations on unlifted arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
          "name": "Enum",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html",
          "type": "module"
        },
        "index": {
          "description": "Enum-related parallel operations on unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
          "name": "Enum",
          "package": "dph-prim-par",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Enum\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "enumFromStepLenEachUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromStepLenEachUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromStepLenEachUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromStepLenEachUP\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
          "name": "enumFromStepLenEachUP",
          "normalized": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "From Step Len Each UP",
          "signature": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromStepLenEachUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Enum\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "enumFromStepLenUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromStepLenUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromStepLenUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromStepLenUP\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
          "name": "enumFromStepLenUP",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "From Step Len UP",
          "signature": "Int-\u003eInt-\u003eInt-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromStepLenUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Enum\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "enumFromThenToUP",
          "package": "dph-prim-par",
          "signature": "a -\u003e a -\u003e a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromThenToUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromThenToUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromThenToUP\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
          "name": "enumFromThenToUP",
          "normalized": "a-\u003ea-\u003ea-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Then To UP",
          "signature": "a-\u003ea-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromThenToUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Enum\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "enumFromToUP",
          "package": "dph-prim-par",
          "signature": "a -\u003e a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromToUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromToUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromToUP\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
          "name": "enumFromToUP",
          "normalized": "a-\u003ea-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From To UP",
          "signature": "a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromToUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel combinators for segmented unboxed arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "Extracts",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel combinators for segmented unboxed arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "Extracts",
          "package": "dph-prim-par",
          "partial": "Extracts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy segments from a nested vectors and concatenate them into a new array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "extractsFromNestedUPSSegd",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vector (Vector a) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromNestedUPSSegd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromNestedUPSSegd\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromNestedUPSSegd\"]"
        },
        "index": {
          "description": "Copy segments from nested vectors and concatenate them into new array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "extractsFromNestedUPSSegd",
          "normalized": "UPSSegd-\u003eVector(Vector a)-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Nested UPSSegd",
          "signature": "UPSSegd-\u003eVector(Vector a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromNestedUPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "extractsFromVectorsUPSSegd",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPSSegd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPSSegd\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromVectorsUPSSegd\"]"
        },
        "index": {
          "description": "TODO make this parallel",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "extractsFromVectorsUPSSegd",
          "normalized": "UPSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vectors UPSSegd",
          "signature": "UPSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential extracts from USSegd and Segmap\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "extractsFromVectorsUPSSegdSegmap",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vectors a -\u003e Vector Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPSSegdSegmap",
          "type": "function"
        },
        "index": {
          "description": "Sequential extracts from USSegd and Segmap",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "extractsFromVectorsUPSSegdSegmap",
          "normalized": "UPSSegd-\u003eVectors a-\u003eVector Int-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vectors UPSSegd Segmap",
          "signature": "UPSSegd-\u003eVectors a-\u003eVector Int-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPSSegdSegmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential extracts from UPVSegd.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "extractsFromVectorsUPVSegd",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPVSegd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPVSegd\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromVectorsUPVSegd\"]"
        },
        "index": {
          "description": "Sequential extracts from UPVSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "extractsFromVectorsUPVSegd",
          "normalized": "UPVSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vectors UPVSegd",
          "signature": "UPVSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel extracts from UPVSegd and Segmap\n   TODO: This just distributes the segmap over the gang, and will be unbalanced\n         if there aren't many segments, or they have varying sizes.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "extractsFromVectorsUPVSegdP",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPVSegdP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPVSegdP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromVectorsUPVSegdP\"]"
        },
        "index": {
          "description": "Parallel extracts from UPVSegd and Segmap TODO This just distributes the segmap over the gang and will be unbalanced if there aren many segments or they have varying sizes",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "extractsFromVectorsUPVSegdP",
          "normalized": "UPVSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vectors UPVSegd",
          "signature": "UPVSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPVSegdP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup elements from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "indexsFromVector",
          "package": "dph-prim-par",
          "signature": "Vector a -\u003e Vector Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVector",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVector\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexsFromVector\"]"
        },
        "index": {
          "description": "Lookup elements from Vector TODO make this parallel",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "indexsFromVector",
          "normalized": "Vector a-\u003eVector Int-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vector",
          "signature": "Vector a-\u003eVector Int-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup elements from some Vectors through a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "indexsFromVectorsUPVSegd",
          "package": "dph-prim-par",
          "signature": "Vectors a -\u003e UPVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVectorsUPVSegd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVectorsUPVSegd\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexsFromVectorsUPVSegd\"]"
        },
        "index": {
          "description": "Lookup elements from some Vectors through UPVSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "indexsFromVectorsUPVSegd",
          "normalized": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vectors UPVSegd",
          "signature": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVectorsUPVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup elements from some \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e through a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Extracts\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "indexsFromVectorsUPVSegdP",
          "package": "dph-prim-par",
          "signature": "Vectors a -\u003e UPVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVectorsUPVSegdP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVectorsUPVSegdP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexsFromVectorsUPVSegdP\"]"
        },
        "index": {
          "description": "Lookup elements from some Vectors through UPVSegd TODO make this parallel",
          "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
          "name": "indexsFromVectorsUPVSegdP",
          "normalized": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "From Vectors UPVSegd",
          "signature": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVectorsUPVSegdP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel permutations for unlifted arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
          "name": "Permute",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel permutations for unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Permute",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
          "name": "Permute",
          "package": "dph-prim-par",
          "partial": "Permute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackwards permutation.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Permute\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "bpermuteUP",
          "package": "dph-prim-par",
          "signature": "Vector a -\u003e Vector Int -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html#bpermuteUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#v:bpermuteUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:bpermuteUP\"]"
        },
        "index": {
          "description": "Backwards permutation",
          "hierarchy": "Data Array Parallel Unlifted Parallel Permute",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
          "name": "bpermuteUP",
          "normalized": "Vector a-\u003eVector Int-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector a-\u003eVector Int-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#v:bpermuteUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate elements in an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Permute\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "updateUP",
          "package": "dph-prim-par",
          "signature": "Vector a -\u003e Vector (Int, a) -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html#updateUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#v:updateUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:updateUP\"]"
        },
        "index": {
          "description": "Update elements in an array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Permute",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
          "name": "updateUP",
          "normalized": "Vector a-\u003eVector(Int,a)-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector a-\u003eVector(Int,a)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#v:updateUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel combinators for segmented unboxed arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "Segmented",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel combinators for segmented unboxed arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "Segmented",
          "package": "dph-prim-par",
          "partial": "Segmented",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented append.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Segmented\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "appendSUP",
          "package": "dph-prim-par",
          "signature": "UPSegd-\u003e UPSegd-\u003e Vector a-\u003e UPSegd-\u003e Vector a-\u003e Vector a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:appendSUP\"]"
        },
        "index": {
          "description": "Segmented append",
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "appendSUP",
          "normalized": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "SUP",
          "signature": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Segmented\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "appendSUPV",
          "package": "dph-prim-par",
          "signature": "UPSegd-\u003e UPVSegd-\u003e Vectors a-\u003e UPVSegd-\u003e Vectors a-\u003e Vector a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUPV\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:appendSUPV\"]"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "appendSUPV",
          "normalized": "UPSegd-\u003eUPVSegd-\u003eVectors a-\u003eUPVSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "SUPV",
          "signature": "UPSegd-\u003eUPVSegd-\u003eVectors a-\u003eUPVSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUPV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented append.\n -old\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "appendSUP_old",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e UPSegd -\u003e Vector a -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#appendSUP_old",
          "type": "function"
        },
        "index": {
          "description": "Segmented append old",
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "appendSUP_old",
          "normalized": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "SUP",
          "signature": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUP_old"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular segmented fold.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Segmented\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "foldRUP",
          "package": "dph-prim-par",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Int -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#foldRUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:foldRUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldRUP\"]"
        },
        "index": {
          "description": "Regular segmented fold",
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "foldRUP",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eInt-\u003eVector b-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "RUP",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eInt-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:foldRUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented replication.\n   Each element in the vector is replicated the given number of times.\n\u003c/p\u003e\u003cpre\u003ereplicateRSUP 2 [1, 2, 3, 4, 5] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\u003c/pre\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Segmented\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "replicateRSUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#replicateRSUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:replicateRSUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:replicateRSUP\"]"
        },
        "index": {
          "description": "Segmented replication Each element in the vector is replicated the given number of times replicateRSUP",
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "replicateRSUP",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "RSUP",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:replicateRSUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular segmented sum.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Segmented\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "sumRUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#sumRUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:sumRUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:sumRUP\"]"
        },
        "index": {
          "description": "Regular segmented sum",
          "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
          "name": "sumRUP",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "RUP",
          "signature": "Int-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:sumRUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubarrays of flat unlifted arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
          "name": "Subarrays",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html",
          "type": "module"
        },
        "index": {
          "description": "Subarrays of flat unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Subarrays",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
          "name": "Subarrays",
          "package": "dph-prim-par",
          "partial": "Subarrays",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop a the element at the provided index from a vector.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Subarrays\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "dropUP",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#dropUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#v:dropUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:dropUP\"]"
        },
        "index": {
          "description": "Drop the element at the provided index from vector",
          "hierarchy": "Data Array Parallel Unlifted Parallel Subarrays",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
          "name": "dropUP",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Int-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#v:dropUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSum-like parallel combinators for unlifted arrays\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "Sums",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html",
          "type": "module"
        },
        "index": {
          "description": "Sum-like parallel combinators for unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "Sums",
          "package": "dph-prim-par",
          "partial": "Sums",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether all the elements in a array meet the given predicate.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "allUP",
          "package": "dph-prim-par",
          "signature": "(e -\u003e Bool) -\u003e Vector e -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#allUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:allUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:allUP\"]"
        },
        "index": {
          "description": "Check whether all the elements in array meet the given predicate",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "allUP",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(e-\u003eBool)-\u003eVector e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:allUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the logical AND of all the elements in a array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "andUP",
          "package": "dph-prim-par",
          "signature": "Vector Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#andUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:andUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:andUP\"]"
        },
        "index": {
          "description": "Compute the logical AND of all the elements in array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "andUP",
          "normalized": "Vector Bool-\u003eBool",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:andUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether any of the elements in a array meet the given predicate.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "anyUP",
          "package": "dph-prim-par",
          "signature": "(e -\u003e Bool) -\u003e Vector e -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#anyUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:anyUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:anyUP\"]"
        },
        "index": {
          "description": "Check whether any of the elements in array meet the given predicate",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "anyUP",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "(e-\u003eBool)-\u003eVector e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:anyUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the maximum element in an array under the given ordering\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "maximumByUP",
          "package": "dph-prim-par",
          "signature": "(e -\u003e e -\u003e Ordering) -\u003e Vector e -\u003e e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumByUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumByUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:maximumByUP\"]"
        },
        "index": {
          "description": "Determine the maximum element in an array under the given ordering",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "maximumByUP",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "By UP",
          "signature": "(e-\u003ee-\u003eOrdering)-\u003eVector e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumByUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the index of the maximum element in an array under the\n   given ordering\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "maximumIndexByUP",
          "package": "dph-prim-par",
          "signature": "(e -\u003e e -\u003e Ordering) -\u003e Vector e -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumIndexByUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumIndexByUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:maximumIndexByUP\"]"
        },
        "index": {
          "description": "Determine the index of the maximum element in an array under the given ordering",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "maximumIndexByUP",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Index By UP",
          "signature": "(e-\u003ee-\u003eOrdering)-\u003eVector e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumIndexByUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the maximum element in an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "maximumUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:maximumUP\"]"
        },
        "index": {
          "description": "Determine the maximum element in an array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "maximumUP",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the logical OR of all the elements in a array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "orUP",
          "package": "dph-prim-par",
          "signature": "Vector Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#orUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:orUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:orUP\"]"
        },
        "index": {
          "description": "Compute the logical OR of all the elements in array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "orUP",
          "normalized": "Vector Bool-\u003eBool",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:orUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the product of all the elements of an array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "productUP",
          "package": "dph-prim-par",
          "signature": "Vector e -\u003e e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#productUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:productUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:productUP\"]"
        },
        "index": {
          "description": "Compute the product of all the elements of an array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "productUP",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:productUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the sum all the elements of a array.\n\u003c/p\u003e",
          "module": "[\"Data.Array.Parallel.Unlifted.Parallel.Sums\",\"Data.Array.Parallel.Unlifted.Parallel\"]",
          "name": "sumUP",
          "package": "dph-prim-par",
          "signature": "Vector a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#sumUP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:sumUP\",\"http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:sumUP\"]"
        },
        "index": {
          "description": "Compute the sum all the elements of array",
          "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
          "name": "sumUP",
          "normalized": "Vector a-\u003ea",
          "package": "dph-prim-par",
          "partial": "UP",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:sumUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead/Show instances for segmented unlifted arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Text",
          "name": "Text",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Read Show instances for segmented unlifted arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel Text",
          "module": "Data.Array.Parallel.Unlifted.Parallel.Text",
          "name": "Text",
          "package": "dph-prim-par",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel Scattered Segment descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "UPSSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel Scattered Segment descriptors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "UPSSegd",
          "package": "dph-prim-par",
          "partial": "UPSSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel Scattered Segment sescriptor\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "UPSSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#UPSSegd",
          "type": "data"
        },
        "index": {
          "description": "Parallel Scattered Segment sescriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "UPSSegd",
          "package": "dph-prim-par",
          "partial": "UPSSegd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#t:UPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n)\n   Produce a segment descriptor that describes the result of appending two\n   segmented arrays.\n\u003c/p\u003e\u003cp\u003eAppending two nested arrays is an index space transformation. Because\n   a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e can contain segments from multiple flat data arrays, we can\n   represent the result of the append without copying elements from the\n   underlying flat data arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "appendWith",
          "package": "dph-prim-par",
          "signature": "UPSSegd-\u003e Int-\u003e UPSSegd-\u003e Int-\u003e UPSSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce segment descriptor that describes the result of appending two segmented arrays Appending two nested arrays is an index space transformation Because UPSSegd can contain segments from multiple flat data arrays we can represent the result of the append without copying elements from the underlying flat data arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "appendWith",
          "normalized": "UPSSegd-\u003eInt-\u003eUPSSegd-\u003eInt-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "UPSSegd-\u003eInt-\u003eUPSSegd-\u003eInt-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:appendWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "empty",
          "package": "dph-prim-par",
          "signature": "UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Yield an empty segment descriptor with no elements or segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "empty",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e, with a non-empty vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "fold1WithP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e UPSSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#fold1WithP",
          "type": "function"
        },
        "index": {
          "description": "Fold segments specified by UPSSegd with non-empty vector",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "fold1WithP",
          "normalized": "(a-\u003ea-\u003ea)-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:fold1WithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLow level function takes a per-element worker and a per-segment worker.\n   It folds all the segments with the per-segment worker, then uses the\n   per-element worker to fixup the partial results when a segment \n   is split across multiple threads.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "foldSegsWithP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e (USSegd -\u003e Vectors a -\u003e Vector a) -\u003e UPSSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#foldSegsWithP",
          "type": "function"
        },
        "index": {
          "description": "Fold the segments specified by UPSSegd Low level function takes per-element worker and per-segment worker It folds all the segments with the per-segment worker then uses the per-element worker to fixup the partial results when segment is split across multiple threads",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "foldSegsWithP",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(USSegd-\u003eVectors a-\u003eVector a)-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "Segs With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(USSegd-\u003eVectors a-\u003eVector a)-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:foldSegsWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "foldWithP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UPSSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#foldWithP",
          "type": "function"
        },
        "index": {
          "description": "Fold segments specified by UPSSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "foldWithP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:foldWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a plain \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e, by assuming that all segments\n   come from a single flat array with source id 0.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "fromUPSegd",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#fromUPSegd",
          "type": "function"
        },
        "index": {
          "description": "Promote plain UPSegd to UPSSegd by assuming that all segments come from single flat array with source id",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "fromUPSegd",
          "normalized": "UPSegd-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "UPSegd",
          "signature": "UPSegd-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:fromUPSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a global \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e to a parallel \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e by distributing\n   it across the gang.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "fromUSSegd",
          "package": "dph-prim-par",
          "signature": "USSegd -\u003e UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#fromUSSegd",
          "type": "function"
        },
        "index": {
          "description": "Promote global USSegd to parallel UPSSegd by distributing it across the gang",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "fromUSSegd",
          "normalized": "USSegd-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "USSegd",
          "signature": "USSegd-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:fromUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, segment index, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "getSeg",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Int -\u003e (Int, Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#getSeg",
          "type": "function"
        },
        "index": {
          "description": "Get the length segment index starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "getSeg",
          "normalized": "UPSSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "package": "dph-prim-par",
          "partial": "Seg",
          "signature": "UPSSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:getSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). True when the starts are identical to the usegd indices field and\n   the sources are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "isContiguous",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#isContiguous",
          "type": "function"
        },
        "index": {
          "description": "True when the starts are identical to the usegd indices field and the sources are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "isContiguous",
          "normalized": "UPSSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Contiguous",
          "signature": "UPSSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:isContiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "length",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "length",
          "normalized": "UPSSegd-\u003eInt",
          "package": "dph-prim-par",
          "signature": "UPSSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "mkUPSSegd",
          "package": "dph-prim-par",
          "signature": "Vector Int-\u003e Vector Int-\u003e UPSegd-\u003e UPSSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct new segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "mkUPSSegd",
          "normalized": "Vector Int-\u003eVector Int-\u003eUPSegd-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "UPSSegd",
          "signature": "Vector Int-\u003eVector Int-\u003eUPSegd-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:mkUPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1).\n   Yield a singleton segment descriptor.\n   The single segment covers the given number of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "singleton",
          "package": "dph-prim-par",
          "signature": "Int -\u003e UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Yield singleton segment descriptor The single segment covers the given number of elements",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "singleton",
          "normalized": "Int-\u003eUPSSegd",
          "package": "dph-prim-par",
          "signature": "Int-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum up segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "sumWithP",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vectors a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#sumWithP",
          "type": "function"
        },
        "index": {
          "description": "Sum up segments specified by UPSSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "sumWithP",
          "normalized": "UPSSegd-\u003eVectors a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "UPSSegd-\u003eVectors a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:sumWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the distributed \u003ccode\u003eUSegd\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeDistributed",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Dist ((USSegd, Int), Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeDistributed",
          "type": "function"
        },
        "index": {
          "description": "Yield the distributed USegd of UPSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeDistributed",
          "normalized": "UPSSegd-\u003eDist((USSegd,Int),Int)",
          "package": "dph-prim-par",
          "partial": "Distributed",
          "signature": "UPSSegd-\u003eDist((USSegd,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeDistributed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the total number of data elements.\n\u003c/p\u003e\u003cpre\u003etakeElements upssegd = sum (takeLengths upssegd)\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeElements",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeElements",
          "type": "function"
        },
        "index": {
          "description": "Yield the total number of data elements takeElements upssegd sum takeLengths upssegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeElements",
          "normalized": "UPSSegd-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Elements",
          "signature": "UPSSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeIndices",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeIndices",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment indices",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeIndices",
          "normalized": "UPSSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Indices",
          "signature": "UPSSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeLengths",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeLengths",
          "type": "function"
        },
        "index": {
          "description": "Yield the lengths of the individual segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeLengths",
          "normalized": "UPSSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "UPSSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the source ids.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeSources",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeSources",
          "type": "function"
        },
        "index": {
          "description": "Yield the source ids",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeSources",
          "normalized": "UPSSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Sources",
          "signature": "UPSSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeSources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeStarts",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeStarts",
          "type": "function"
        },
        "index": {
          "description": "Yield the starting indices",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeStarts",
          "normalized": "UPSSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Starts",
          "signature": "UPSSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeStarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the global \u003ccode\u003eUSegd\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeUSSegd",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e USSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeUSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the global USegd of UPSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "takeUSSegd",
          "normalized": "UPSSegd-\u003eUSSegd",
          "package": "dph-prim-par",
          "partial": "USSegd",
          "signature": "UPSSegd-\u003eUSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeUSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1).\n   Check the internal consistency of a scattered segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "valid",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of scattered segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
          "name": "valid",
          "normalized": "UPSSegd-\u003eBool",
          "package": "dph-prim-par",
          "signature": "UPSSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel segment descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "UPSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel segment descriptors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "UPSegd",
          "package": "dph-prim-par",
          "partial": "UPSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallel segment descriptor holds a global (undistributed) segment\n   desciptor, as well as a distributed version. The distributed version\n   describes how to split work on the segmented array over the gang. \n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "UPSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
          "type": "data"
        },
        "index": {
          "description": "parallel segment descriptor holds global undistributed segment desciptor as well as distributed version The distributed version describes how to split work on the segmented array over the gang",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "UPSegd",
          "package": "dph-prim-par",
          "partial": "UPSegd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#t:UPSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "UPSegd",
          "package": "dph-prim-par",
          "signature": "UPSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "UPSegd",
          "package": "dph-prim-par",
          "partial": "UPSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:UPSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "empty",
          "package": "dph-prim-par",
          "signature": "UPSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty segment descriptor with no elements or segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "empty",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e, with a non-empty vector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "fold1WithP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#fold1WithP",
          "type": "function"
        },
        "index": {
          "description": "Fold segments specified by UPSegd with non-empty vector",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "fold1WithP",
          "normalized": "(a-\u003ea-\u003ea)-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:fold1WithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold the segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis low level function takes a per-element worker and a per-segment worker.\n   It folds all the segments with the per-segment worker, then uses the\n   per-element worker to fixup the partial results when a segment \n   is split across multiple threads.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "foldSegsWithP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e (USegd -\u003e Vector a -\u003e Vector a) -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#foldSegsWithP",
          "type": "function"
        },
        "index": {
          "description": "Fold the segments specified by UPSegd This low level function takes per-element worker and per-segment worker It folds all the segments with the per-segment worker then uses the per-element worker to fixup the partial results when segment is split across multiple threads",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "foldSegsWithP",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(USegd-\u003eVector a-\u003eVector a)-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "Segs With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(USegd-\u003eVector a-\u003eVector a)-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:foldSegsWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "foldWithP",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#foldWithP",
          "type": "function"
        },
        "index": {
          "description": "Fold segments specified by UPSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "foldWithP",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:foldWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert an array of segment lengths into a parallel segment descriptor.\n\u003c/p\u003e\u003cp\u003eThe array contains the length of each segment, and we compute the \n   indices from that. Runtime is O(n) in the number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "fromLengths",
          "package": "dph-prim-par",
          "signature": "Vector Int -\u003e UPSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#fromLengths",
          "type": "function"
        },
        "index": {
          "description": "Convert an array of segment lengths into parallel segment descriptor The array contains the length of each segment and we compute the indices from that Runtime is in the number of segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "fromLengths",
          "normalized": "Vector Int-\u003eUPSegd",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "Vector Int-\u003eUPSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:fromLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a global \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e to a parallel \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e by distributing \n   it across the gang.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "fromUSegd",
          "package": "dph-prim-par",
          "signature": "USegd -\u003e UPSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#fromUSegd",
          "type": "function"
        },
        "index": {
          "description": "Convert global USegd to parallel UPSegd by distributing it across the gang",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "fromUSegd",
          "normalized": "USegd-\u003eUPSegd",
          "package": "dph-prim-par",
          "partial": "USegd",
          "signature": "USegd-\u003eUPSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:fromUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Yield a vector containing indicies that give the position of each \n         member of the flat array in its corresponding segment.\n\u003c/p\u003e\u003cpre\u003eindicesP (fromLengths [5, 2, 3]) = [0,1,2,3,4,0,1,0,1,2]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "indicesP",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#indicesP",
          "type": "function"
        },
        "index": {
          "description": "Yield vector containing indicies that give the position of each member of the flat array in its corresponding segment indicesP fromLengths",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "indicesP",
          "normalized": "UPSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "signature": "UPSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:indicesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "length",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "length",
          "normalized": "UPSegd-\u003eInt",
          "package": "dph-prim-par",
          "signature": "UPSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a new parallel segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "mkUPSegd",
          "package": "dph-prim-par",
          "signature": "Vector Int-\u003e Vector Int-\u003e Int-\u003e UPSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct new parallel segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "mkUPSegd",
          "normalized": "Vector Int-\u003eVector Int-\u003eInt-\u003eUPSegd",
          "package": "dph-prim-par",
          "partial": "UPSegd",
          "signature": "Vector Int-\u003eVector Int-\u003eInt-\u003eUPSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:mkUPSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopying segmented replication. Each element of the vector is physically \n   copied according to the length of each segment in the segment descriptor.\n\u003c/p\u003e\u003cpre\u003ereplicateWith (fromLengths [3, 1, 2]) [5, 6, 7] = [5, 5, 5, 6, 7, 7]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "replicateWithP",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#replicateWithP",
          "type": "function"
        },
        "index": {
          "description": "Copying segmented replication Each element of the vector is physically copied according to the length of each segment in the segment descriptor replicateWith fromLengths",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "replicateWithP",
          "normalized": "UPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "UPSegd-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:replicateWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "singleton",
          "package": "dph-prim-par",
          "signature": "Int -\u003e UPSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct singleton segment descriptor The single segment covers the given number of elements",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "singleton",
          "normalized": "Int-\u003eUPSegd",
          "package": "dph-prim-par",
          "signature": "Int-\u003eUPSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum up segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "sumWithP",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Vector e -\u003e Vector e",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#sumWithP",
          "type": "function"
        },
        "index": {
          "description": "Sum up segments specified by UPSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "sumWithP",
          "normalized": "UPSegd-\u003eVector a-\u003eVector a",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "UPSegd-\u003eVector e-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:sumWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the distributed \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe get a plain \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e for each chunk, the segment id of the first\n  slice in the chunk, and the starting offset of that slice in its segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeDistributed",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Dist ((USegd, Int), Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeDistributed",
          "type": "function"
        },
        "index": {
          "description": "Yield the distributed USegd of UPSegd We get plain USegd for each chunk the segment id of the first slice in the chunk and the starting offset of that slice in its segment",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeDistributed",
          "normalized": "UPSegd-\u003eDist((USegd,Int),Int)",
          "package": "dph-prim-par",
          "partial": "Distributed",
          "signature": "UPSegd-\u003eDist((USegd,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeDistributed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the total number of array elements.\n\u003c/p\u003e\u003cpre\u003etakeElements upsegd = sum (takeLengths upsegd)\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeElements",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeElements",
          "type": "function"
        },
        "index": {
          "description": "Yield the total number of array elements takeElements upsegd sum takeLengths upsegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeElements",
          "normalized": "UPSegd-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Elements",
          "signature": "UPSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeIndices",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeIndices",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment indices",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeIndices",
          "normalized": "UPSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Indices",
          "signature": "UPSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeLengths",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeLengths",
          "type": "function"
        },
        "index": {
          "description": "Yield the lengths of the individual segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeLengths",
          "normalized": "UPSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "UPSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the global \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeUSegd",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeUSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the global USegd of UPSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "takeUSegd",
          "normalized": "UPSegd-\u003eUSegd",
          "package": "dph-prim-par",
          "partial": "USegd",
          "signature": "UPSegd-\u003eUSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeUSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegment descriptor for each chunk, \n   along with segment id of first slice in the chunk,\n   and the offset of that slice in its segment.\n   See docs of \u003ccode\u003esplitSegdOfElemsD\u003c/code\u003e for an example.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "upsegd_dsegd",
          "package": "dph-prim-par",
          "signature": "Dist ((USegd, Int), Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
          "type": "function"
        },
        "index": {
          "description": "Segment descriptor for each chunk along with segment id of first slice in the chunk and the offset of that slice in its segment See docs of splitSegdOfElemsD for an example",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "upsegd_dsegd",
          "normalized": "Dist((USegd,Int),Int)",
          "package": "dph-prim-par",
          "signature": "Dist((USegd,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:upsegd_dsegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegment descriptor that describes the whole array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "upsegd_usegd",
          "package": "dph-prim-par",
          "signature": "USegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
          "type": "function"
        },
        "index": {
          "description": "Segment descriptor that describes the whole array",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "upsegd_usegd",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:upsegd_usegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1).\n   Check the internal consistency of a parallel segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "valid",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of parallel segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
          "name": "valid",
          "normalized": "UPSegd-\u003eBool",
          "package": "dph-prim-par",
          "signature": "UPSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel selectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "UPSel",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel selectors",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "UPSel",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains a selector \u003ccode\u003e\u003ca\u003eUSel2\u003c/a\u003e\u003c/code\u003e, as well as an \u003ccode\u003eUSelRep2\u003c/code\u003e which says how \n   to distribute this selector across the PEs. \n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003edph-prim-seq:Data.Array.Parallel.Unlifted.Sequential.Segmented.USel\u003c/code\u003e\n   for more discussion of what selectors are for.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "UPSel2",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#UPSel2",
          "type": "data"
        },
        "index": {
          "description": "Contains selector USel2 as well as an USelRep2 which says how to distribute this selector across the PEs See dph-prim-seq Data.Array.Parallel.Unlifted.Sequential.Segmented.USel for more discussion of what selectors are for",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "UPSel2",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#t:UPSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "UPSelRep2",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#UPSelRep2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "UPSelRep2",
          "package": "dph-prim-par",
          "partial": "UPSel Rep",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#t:UPSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the number of elements that will be taken from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSel2_0",
          "package": "dph-prim-par",
          "signature": "UPSel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSel2_0",
          "type": "function"
        },
        "index": {
          "description": "Get the number of elements that will be taken from the first array",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSel2_0",
          "normalized": "UPSel-\u003eInt",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "UPSel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSel2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the number of elements that will be taken from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSel2_1",
          "package": "dph-prim-par",
          "signature": "UPSel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSel2_1",
          "type": "function"
        },
        "index": {
          "description": "Get the number of elements that will be taken from the second array",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSel2_1",
          "normalized": "UPSel-\u003eInt",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "UPSel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSel2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Count the number of elements to take from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSelRep2_0",
          "package": "dph-prim-par",
          "signature": "Vector Tag -\u003e UPSelRep2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSelRep2_0",
          "type": "function"
        },
        "index": {
          "description": "Count the number of elements to take from the first array",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSelRep2_0",
          "normalized": "Vector Tag-\u003eUPSelRep-\u003eInt",
          "package": "dph-prim-par",
          "partial": "UPSel Rep",
          "signature": "Vector Tag-\u003eUPSelRep-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSelRep2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Count the number of elements to take from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSelRep2_1",
          "package": "dph-prim-par",
          "signature": "Vector Tag -\u003e UPSelRep2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSelRep2_1",
          "type": "function"
        },
        "index": {
          "description": "Count the number of elements to take from the second array",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "elementsUPSelRep2_1",
          "normalized": "Vector Tag-\u003eUPSelRep-\u003eInt",
          "package": "dph-prim-par",
          "partial": "UPSel Rep",
          "signature": "Vector Tag-\u003eUPSelRep-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSelRep2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the indices of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "indicesUPSel2",
          "package": "dph-prim-par",
          "signature": "UPSel2 -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#indicesUPSel2",
          "type": "function"
        },
        "index": {
          "description": "Get the indices of selector",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "indicesUPSel2",
          "normalized": "UPSel-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "UPSel-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:indicesUPSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "indicesUPSelRep2",
          "package": "dph-prim-par",
          "signature": "Vector Tag -\u003e UPSelRep2 -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#indicesUPSelRep2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "indicesUPSelRep2",
          "normalized": "Vector Tag-\u003eUPSelRep-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "UPSel Rep",
          "signature": "Vector Tag-\u003eUPSelRep-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:indicesUPSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a selector. Wrapper for \u003ccode\u003e\u003ca\u003eUPSel2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "mkUPSel2",
          "package": "dph-prim-par",
          "signature": "Vector Tag -\u003e Vector Int -\u003e Int -\u003e Int -\u003e UPSelRep2 -\u003e UPSel2",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#mkUPSel2",
          "type": "function"
        },
        "index": {
          "description": "Construct selector Wrapper for UPSel2",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "mkUPSel2",
          "normalized": "Vector Tag-\u003eVector Int-\u003eInt-\u003eInt-\u003eUPSelRep-\u003eUPSel",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "Vector Tag-\u003eVector Int-\u003eInt-\u003eInt-\u003eUPSelRep-\u003eUPSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:mkUPSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a \u003ccode\u003e\u003ca\u003eUPSelRep2\u003c/a\u003e\u003c/code\u003e from an array of tags.\n   This is used when parallelising a \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation.\n   See the docs for \u003ccode\u003e\u003ca\u003eUPSelRep2\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "mkUPSelRep2",
          "package": "dph-prim-par",
          "signature": "Vector Tag -\u003e UPSelRep2",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#mkUPSelRep2",
          "type": "function"
        },
        "index": {
          "description": "Computes UPSelRep2 from an array of tags This is used when parallelising combine operation See the docs for UPSelRep2 for details",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "mkUPSelRep2",
          "normalized": "Vector Tag-\u003eUPSelRep",
          "package": "dph-prim-par",
          "partial": "UPSel Rep",
          "signature": "Vector Tag-\u003eUPSelRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:mkUPSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the \u003ccode\u003e\u003ca\u003eUPSelRep2\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eUPSel2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "repUPSel2",
          "package": "dph-prim-par",
          "signature": "UPSel2 -\u003e UPSelRep2",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#repUPSel2",
          "type": "function"
        },
        "index": {
          "description": "Take the UPSelRep2 from UPSel2",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "repUPSel2",
          "normalized": "UPSel-\u003eUPSelRep",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "UPSel-\u003eUPSelRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:repUPSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the sequential \u003ccode\u003e\u003ca\u003eUSel2\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eUPSel2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "selUPSel2",
          "package": "dph-prim-par",
          "signature": "UPSel2 -\u003e USel2",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#selUPSel2",
          "type": "function"
        },
        "index": {
          "description": "Take the sequential USel2 from UPSel2",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "selUPSel2",
          "normalized": "UPSel-\u003eUSel",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "UPSel-\u003eUSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:selUPSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the tags of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "tagsUPSel2",
          "package": "dph-prim-par",
          "signature": "UPSel2 -\u003e Vector Tag",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#tagsUPSel2",
          "type": "function"
        },
        "index": {
          "description": "Get the tags of selector",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
          "name": "tagsUPSel2",
          "normalized": "UPSel-\u003eVector Tag",
          "package": "dph-prim-par",
          "partial": "UPSel",
          "signature": "UPSel-\u003eVector Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:tagsUPSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel virtual segment descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "UPVSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel virtual segment descriptors See Data.Array.Parallel.Unlifted for how this works",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "UPVSegd",
          "package": "dph-prim-par",
          "partial": "UPVSegd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel Virtual Segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "UPVSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#UPVSegd",
          "type": "data"
        },
        "index": {
          "description": "Parallel Virtual Segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "UPVSegd",
          "package": "dph-prim-par",
          "partial": "UPVSegd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#t:UPVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a segment descriptor that describes the result of appending two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "appendWith",
          "package": "dph-prim-par",
          "signature": "UPVSegd-\u003e Int-\u003e UPVSegd-\u003e Int-\u003e UPVSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce segment descriptor that describes the result of appending two arrays",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "appendWith",
          "normalized": "UPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "UPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:appendWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two virtual segment descriptors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "combine2",
          "package": "dph-prim-par",
          "signature": "UPSel2-\u003e UPVSegd-\u003e Int-\u003e UPVSegd-\u003e Int-\u003e UPVSegd",
          "type": "function"
        },
        "index": {
          "description": "Combine two virtual segment descriptors",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "combine2",
          "normalized": "UPSel-\u003eUPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd",
          "package": "dph-prim-par",
          "signature": "UPSel-\u003eUPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:combine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "empty",
          "package": "dph-prim-par",
          "signature": "UPVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty segment descriptor with no elements or segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "empty",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n   The result contains one virtual segment for every physical segment\n   defined by the \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "fromUPSSegd",
          "package": "dph-prim-par",
          "signature": "UPSSegd -\u003e UPVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#fromUPSSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote UPSSegd to UPVSegd The result contains one virtual segment for every physical segment defined by the UPSSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "fromUPSSegd",
          "normalized": "UPSSegd-\u003eUPVSegd",
          "package": "dph-prim-par",
          "partial": "UPSSegd",
          "signature": "UPSSegd-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:fromUPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n   All segments are assumed to come from a flat array with sourceid 0.\n   The result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "fromUPSegd",
          "package": "dph-prim-par",
          "signature": "UPSegd -\u003e UPVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#fromUPSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote UPSegd to UPVSegd All segments are assumed to come from flat array with sourceid The result contains one virtual segment for every physical segment the provided UPSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "fromUPSegd",
          "normalized": "UPSegd-\u003eUPVSegd",
          "package": "dph-prim-par",
          "partial": "UPSegd",
          "signature": "UPSegd-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:fromUPSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "getSeg",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Int -\u003e (Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#getSeg",
          "type": "function"
        },
        "index": {
          "description": "Get the length starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "getSeg",
          "normalized": "UPVSegd-\u003eInt-\u003e(Int,Int,Int)",
          "package": "dph-prim-par",
          "partial": "Seg",
          "signature": "UPVSegd-\u003eInt-\u003e(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:getSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). True when the starts are identical to the usegd indices field and\n   the sources are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "isContiguous",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#isContiguous",
          "type": "function"
        },
        "index": {
          "description": "True when the starts are identical to the usegd indices field and the sources are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "isContiguous",
          "normalized": "UPVSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Contiguous",
          "signature": "UPVSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:isContiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Checks whether all the segments are manifest (unshared / non-virtual).\n   If this is the case, then the vsegids field will be [0..len-1]. \n\u003c/p\u003e\u003cp\u003eConsumers can check this field, avoid demanding the vsegids field.\n   This can avoid the need for it to be constructed in the first place, due to\n   lazy evaluation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "isManifest",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#isManifest",
          "type": "function"
        },
        "index": {
          "description": "Checks whether all the segments are manifest unshared non-virtual If this is the case then the vsegids field will be len-1 Consumers can check this field avoid demanding the vsegids field This can avoid the need for it to be constructed in the first place due to lazy evaluation",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "isManifest",
          "normalized": "UPVSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Manifest",
          "signature": "UPVSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:isManifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "length",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the overall number of segments",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "length",
          "normalized": "UPVSegd-\u003eInt",
          "package": "dph-prim-par",
          "signature": "UPVSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a new virtual segment descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "mkUPVSegd",
          "package": "dph-prim-par",
          "signature": "Vector Int-\u003e UPSSegd-\u003e UPVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct new virtual segment descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "mkUPVSegd",
          "normalized": "Vector Int-\u003eUPSSegd-\u003eUPVSegd",
          "package": "dph-prim-par",
          "partial": "UPVSegd",
          "signature": "Vector Int-\u003eUPSSegd-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:mkUPVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e that describes an array created by replicating\n   a single segment several times.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "replicated",
          "package": "dph-prim-par",
          "signature": "Int-\u003e Int-\u003e UPVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct UPVSegd that describes an array created by replicating single segment several times",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "replicated",
          "normalized": "Int-\u003eInt-\u003eUPVSegd",
          "package": "dph-prim-par",
          "signature": "Int-\u003eInt-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:replicated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements in a flat array\n   with sourceid 0.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "singleton",
          "package": "dph-prim-par",
          "signature": "Int -\u003e UPVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct singleton segment descriptor The single segment covers the given number of elements in flat array with sourceid",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "singleton",
          "normalized": "Int-\u003eUPVSegd",
          "package": "dph-prim-par",
          "signature": "Int-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) or O(segs). Yield \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003es distributed over a logical view of this \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n   The complexity is only O(1) if this has already been evaluated.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeDistributed",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Dist ((USegd, Int), Int)",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeDistributed",
          "type": "function"
        },
        "index": {
          "description": "or segs Yield USegd distributed over logical view of this UPVSegd The complexity is only if this has already been evaluated",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeDistributed",
          "normalized": "UPVSegd-\u003eDist((USegd,Int),Int)",
          "package": "dph-prim-par",
          "partial": "Distributed",
          "signature": "UPVSegd-\u003eDist((USegd,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeDistributed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield the lengths of the segments described by a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeLengths",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeLengths",
          "type": "function"
        },
        "index": {
          "description": "segs Yield the lengths of the segments described by UPVSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeLengths",
          "normalized": "UPVSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "Lengths",
          "signature": "UPVSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeUPSSegd",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeUPSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the UPSSegd of UPVSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeUPSSegd",
          "normalized": "UPVSegd-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "UPSSegd",
          "signature": "UPVSegd-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeUPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eSee the note in \u003ccode\u003e\u003ca\u003etakeVSegidsRedundant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeUPSSegdRedundant",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeUPSSegdRedundant",
          "type": "function"
        },
        "index": {
          "description": "Take the UPSSegd of UPVSegd but don require that every physical segment is referenced by some virtual segment See the note in takeVSegidsRedundant",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeUPSSegdRedundant",
          "normalized": "UPVSegd-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "UPSSegd Redundant",
          "signature": "UPVSegd-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeUPSSegdRedundant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the virtual segment ids of \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeVSegids",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeVSegids",
          "type": "function"
        },
        "index": {
          "description": "Yield the virtual segment ids of UPVSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeVSegids",
          "normalized": "UPVSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "VSegids",
          "signature": "UPVSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeVSegids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the vsegids of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eIf you're just performing indexing and don't need the invariant that all\n   physical segments are reachable from some virtual segment, then use this\n   version as it's faster. This sidesteps the code that maintains the invariant.\n\u003c/p\u003e\u003cp\u003eThe stated O(1) complexity assumes that the array has already been fully\n   evalauted. If this is not the case then we can avoid demanding the result\n   of a prior computation on the vsegids, thus reducing the cost attributed\n   to that prior computation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeVSegidsRedundant",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Vector Int",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeVSegidsRedundant",
          "type": "function"
        },
        "index": {
          "description": "Take the vsegids of UPVSegd but don require that every physical segment is referenced by some virtual segment If you re just performing indexing and don need the invariant that all physical segments are reachable from some virtual segment then use this version as it faster This sidesteps the code that maintains the invariant The stated complexity assumes that the array has already been fully evalauted If this is not the case then we can avoid demanding the result of prior computation on the vsegids thus reducing the cost attributed to that prior computation",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "takeVSegidsRedundant",
          "normalized": "UPVSegd-\u003eVector Int",
          "package": "dph-prim-par",
          "partial": "VSegids Redundant",
          "signature": "UPVSegd-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeVSegidsRedundant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n   individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: Trying to take the \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e of a nested array that has been\n   constructed with replication can cause index space overflow. This is\n   because the virtual size of the corresponding flat data can be larger\n   than physical memory. If this happens then indices fields and \n   element count in the result will be invalid.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "unsafeDemoteToUPSSegd",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e UPSSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#unsafeDemoteToUPSSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield UPSSegd that describes each segment of UPVSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments WARNING Trying to take the UPSegd of nested array that has been constructed with replication can cause index space overflow This is because the virtual size of the corresponding flat data can be larger than physical memory If this happens then indices fields and element count in the result will be invalid",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "unsafeDemoteToUPSSegd",
          "normalized": "UPVSegd-\u003eUPSSegd",
          "package": "dph-prim-par",
          "partial": "Demote To UPSSegd",
          "signature": "UPVSegd-\u003eUPSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:unsafeDemoteToUPSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n   individually, assuming all segments have been concatenated to \n   remove scattering.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See the warning in \u003ccode\u003e\u003ca\u003eunsafeDemoteToUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "unsafeDemoteToUPSegd",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e UPSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#unsafeDemoteToUPSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield UPSegd that describes each segment of UPVSegd individually assuming all segments have been concatenated to remove scattering See the warning in unsafeDemoteToUPSSegd",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "unsafeDemoteToUPSegd",
          "normalized": "UPVSegd-\u003eUPSegd",
          "package": "dph-prim-par",
          "partial": "Demote To UPSegd",
          "signature": "UPVSegd-\u003eUPSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:unsafeDemoteToUPSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the vsegids of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, and then cull the physical\n   segment descriptor so that all physical segments are reachable from\n   some virtual segment.\n\u003c/p\u003e\u003cp\u003eThis function lets you perform filtering operations on the virtual segments,\n   while maintaining the invariant that all physical segments are referenced\n   by some virtual segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "updateVSegs",
          "package": "dph-prim-par",
          "signature": "(Vector Int -\u003e Vector Int) -\u003e UPVSegd -\u003e UPVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#updateVSegs",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of UPVSegd and then cull the physical segment descriptor so that all physical segments are reachable from some virtual segment This function lets you perform filtering operations on the virtual segments while maintaining the invariant that all physical segments are referenced by some virtual segment",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "updateVSegs",
          "normalized": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd",
          "package": "dph-prim-par",
          "partial": "VSegs",
          "signature": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:updateVSegs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the vsegids  of \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, where the result is guaranteed to\n   cover all physical segments.\n\u003c/p\u003e\u003cp\u003eUsing this version saves performing the \u003ccode\u003ecull\u003c/code\u003e operation which \n   discards unreachable physical segments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting vsegids must cover all physical segments.\n     If they do not then there will be physical segments that are not \n     reachable from some virtual segment, and subsequent operations\n     like segmented fold will have the wrong work complexity.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "updateVSegsReachable",
          "package": "dph-prim-par",
          "signature": "(Vector Int -\u003e Vector Int) -\u003e UPVSegd -\u003e UPVSegd",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#updateVSegsReachable",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of UPVSegd where the result is guaranteed to cover all physical segments Using this version saves performing the cull operation which discards unreachable physical segments The resulting vsegids must cover all physical segments If they do not then there will be physical segments that are not reachable from some virtual segment and subsequent operations like segmented fold will have the wrong work complexity",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "updateVSegsReachable",
          "normalized": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd",
          "package": "dph-prim-par",
          "partial": "VSegs Reachable",
          "signature": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:updateVSegsReachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Check the internal consistency of a virutal segmentation descriptor.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "valid",
          "package": "dph-prim-par",
          "signature": "UPVSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Check the internal consistency of virutal segmentation descriptor",
          "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
          "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
          "name": "valid",
          "normalized": "UPVSegd-\u003eBool",
          "package": "dph-prim-par",
          "signature": "UPVSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel operations on unlifted arrays\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an internal API and shouldn't need to be used directly.\n     Client programs should use \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted.Parallel",
          "name": "Parallel",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel operations on unlifted arrays This is an internal API and shouldn need to be used directly Client programs should use Data.Array.Parallel.Unlifted",
          "hierarchy": "Data Array Parallel Unlifted Parallel",
          "module": "Data.Array.Parallel.Unlifted.Parallel",
          "name": "Parallel",
          "package": "dph-prim-par",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel implementation of the segmented array API defined in \u003ccode\u003edph-prim-interface\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome of them don't yet have parallel implementations, so we fall back\n   to the sequential ones from \u003ccode\u003edph-prim-seq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Although this library is intended to be used as a target\n   for the DPH vectoriser, it is also fine to use it directly from non\n   DPH programs. However, this library does not support nested parallelism\n   by itself. If you try to run further parallel computations in the workers\n   passed to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e etc, then they will just run\n   sequentially.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Unlifted",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel implementation of the segmented array API defined in dph-prim-interface Some of them don yet have parallel implementations so we fall back to the sequential ones from dph-prim-seq WARNING Although this library is intended to be used as target for the DPH vectoriser it is also fine to use it directly from non DPH programs However this library does not support nested parallelism by itself If you try to run further parallel computations in the workers passed to map zipWith fold etc then they will just run sequentially",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Unlifted",
          "package": "dph-prim-par",
          "partial": "Unlifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrays are stored as unboxed vectors. \n   They have bulk-strict semantics, so demanding one element demands them all.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Array",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#Array",
          "type": "type"
        },
        "index": {
          "description": "Arrays are stored as unboxed vectors They have bulk-strict semantics so demanding one element demands them all",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Array",
          "package": "dph-prim-par",
          "partial": "Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Arrays",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#Arrays",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Arrays",
          "package": "dph-prim-par",
          "partial": "Arrays",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Arrays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elt",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#Elt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elt",
          "package": "dph-prim-par",
          "partial": "Elt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Elt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elts",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#Elts",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Elts",
          "package": "dph-prim-par",
          "partial": "Elts",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Elts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "IOElt",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#IOElt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "IOElt",
          "package": "dph-prim-par",
          "partial": "IOElt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:IOElt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#SSegd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SSegd",
          "package": "dph-prim-par",
          "partial": "SSegd",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:SSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Segd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#Segd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Segd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Segd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Sel2",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#Sel2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "Sel2",
          "package": "dph-prim-par",
          "partial": "Sel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Sel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SelRep2",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#SelRep2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "SelRep2",
          "package": "dph-prim-par",
          "partial": "Sel Rep",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:SelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "VSegd",
          "package": "dph-prim-par",
          "source": "src/Data-Array-Parallel-Unlifted.html#VSegd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "VSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:VSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Append two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "(+:+)",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#%2B%3A%2B",
          "type": "function"
        },
        "index": {
          "description": "length result Append two arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "(+:+) +:+",
          "normalized": "Array a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:-43-:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length source). Compute the conjunction of all elements in a boolean array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "and",
          "package": "dph-prim-par",
          "signature": "Array Bool -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#and",
          "type": "function"
        },
        "index": {
          "description": "length source Compute the conjunction of all elements in boolean array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "and",
          "normalized": "Array Bool-\u003eBool",
          "package": "dph-prim-par",
          "signature": "Array Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a segment descriptor that describes the result of appending two\n   segmented arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Int -\u003e SSegd -\u003e Int -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#appendSSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce segment descriptor that describes the result of appending two segmented arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendSSegd",
          "normalized": "SSegd-\u003eInt-\u003eSSegd-\u003eInt-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "SSegd",
          "signature": "SSegd-\u003eInt-\u003eSSegd-\u003eInt-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:appendSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a virtual segment descriptor that describes the result of \n   appending two segmented arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd-\u003e Int-\u003e VSegd-\u003e Int-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "Produce virtual segment descriptor that describes the result of appending two segmented arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appendVSegd",
          "normalized": "VSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "signature": "VSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:appendVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Segmented append.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_s",
          "package": "dph-prim-par",
          "signature": "Segd-\u003e Segd-\u003e Array a-\u003e Segd-\u003e Array a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Segmented append",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_s",
          "normalized": "Segd-\u003eSegd-\u003eArray a-\u003eSegd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Segd-\u003eSegd-\u003eArray a-\u003eSegd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:append_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_vs",
          "package": "dph-prim-par",
          "signature": "Segd-\u003e VSegd-\u003e Arrays a-\u003e VSegd-\u003e Arrays a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "append_vs",
          "normalized": "Segd-\u003eVSegd-\u003eArrays a-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Segd-\u003eVSegd-\u003eArrays a-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:append_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Append two \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, using work proportional to the length\n         of the outer array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appends",
          "package": "dph-prim-par",
          "signature": "Arrays a -\u003e Arrays a -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#appends",
          "type": "function"
        },
        "index": {
          "description": "Append two Arrays using work proportional to the length of the outer array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "appends",
          "normalized": "Arrays a-\u003eArrays a-\u003eArrays a",
          "package": "dph-prim-par",
          "signature": "Arrays a-\u003eArrays a-\u003eArrays a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:appends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Backwards permutation of array elements.\n\u003c/p\u003e\u003cpre\u003ebpermute [50, 60, 20, 30] [0, 3, 2] = [50, 30, 20]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermute",
          "package": "dph-prim-par",
          "signature": "Array a-\u003e Array Int-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Backwards permutation of array elements bpermute",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermute",
          "normalized": "Array a-\u003eArray Int-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray Int-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:bpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault backwards permutation.\n\u003c/p\u003e\u003cp\u003eThe values of the index-value pairs are written into the position in the\n   result array that is indicated by the corresponding index.\n\u003c/p\u003e\u003cp\u003eAll positions not covered by the index-value pairs will have the value\n   determined by the initialiser function for that index position.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermuteDft",
          "package": "dph-prim-par",
          "signature": "Int -\u003e (Int -\u003e e) -\u003e Array (Int, e) -\u003e Array e",
          "source": "src/Data-Array-Parallel-Unlifted.html#bpermuteDft",
          "type": "function"
        },
        "index": {
          "description": "Default backwards permutation The values of the index-value pairs are written into the position in the result array that is indicated by the corresponding index All positions not covered by the index-value pairs will have the value determined by the initialiser function for that index position",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "bpermuteDft",
          "normalized": "Int-\u003e(Int-\u003ea)-\u003eArray(Int,a)-\u003eArray a",
          "package": "dph-prim-par",
          "partial": "Dft",
          "signature": "Int-\u003e(Int-\u003ee)-\u003eArray(Int,e)-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:bpermuteDft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two arrays, \n    using a flags array to tell us where to get each element from.\n\u003c/p\u003e\u003cpre\u003ecombine [T, F, F, T, T, F] [1, 2, 3] [4, 5, 6] = [1, 4, 5, 2, 3, 6]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine",
          "package": "dph-prim-par",
          "signature": "Array Bool -\u003e Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two arrays using flags array to tell us where to get each element from combine",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine",
          "normalized": "Array Bool-\u003eArray a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array Bool-\u003eArray a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e, but use a precomputed selector to speed up the process.\n\u003c/p\u003e\u003cp\u003eSee the description of \u003ccode\u003e\u003ca\u003emkSel2\u003c/a\u003e\u003c/code\u003e for how this works.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2",
          "package": "dph-prim-par",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#combine2",
          "type": "function"
        },
        "index": {
          "description": "Like combine but use precomputed selector to speed up the process See the description of mkSel2 for how this works",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2",
          "normalized": "Array Tag-\u003eSelRep-\u003eArray a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array Tag-\u003eSelRep-\u003eArray a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:combine2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two virtual segment descriptors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2VSegd",
          "package": "dph-prim-par",
          "signature": "Sel2-\u003e VSegd-\u003e Int-\u003e VSegd-\u003e Int-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "Combine two virtual segment descriptors",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "combine2VSegd",
          "normalized": "Sel-\u003eVSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "signature": "Sel-\u003eVSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:combine2VSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of elements in array that are equal to the given value.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#count",
          "type": "function"
        },
        "index": {
          "description": "Count the number of elements in array that are equal to the given value",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count",
          "normalized": "Array a-\u003ea-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Array a-\u003ea-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegmented count.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_s",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Array a -\u003e a -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#count_s",
          "type": "function"
        },
        "index": {
          "description": "Segmented count",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_s",
          "normalized": "Segd-\u003eArray a-\u003ea-\u003eArray Int",
          "package": "dph-prim-par",
          "signature": "Segd-\u003eArray a-\u003ea-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:count_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScattered segmented count.\n\u003c/p\u003e\u003cp\u003eNOTE: This is a transitory interface, and will be removed in future versions.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_ss",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Vector (Array a) -\u003e a -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#count_ss",
          "type": "function"
        },
        "index": {
          "description": "Scattered segmented count NOTE This is transitory interface and will be removed in future versions",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "count_ss",
          "normalized": "SSegd-\u003eVector(Array a)-\u003ea-\u003eArray Int",
          "package": "dph-prim-par",
          "signature": "SSegd-\u003eVector(Array a)-\u003ea-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:count_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Drop elements from the front of an array, \n         returning the latter portion.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "drop",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#drop",
          "type": "function"
        },
        "index": {
          "description": "length result Drop elements from the front of an array returning the latter portion",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "drop",
          "normalized": "Int-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Int-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the total number of elements defined by a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the total number of elements defined by Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSegd",
          "normalized": "Segd-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Segd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements that will be taken from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_0",
          "package": "dph-prim-par",
          "signature": "Sel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSel2_0",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements that will be taken from the first array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_0",
          "normalized": "Sel-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Sel",
          "signature": "Sel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSel2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements that will be taken from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_1",
          "package": "dph-prim-par",
          "signature": "Sel2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSel2_1",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements that will be taken from the second array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSel2_1",
          "normalized": "Sel-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Sel",
          "signature": "Sel-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSel2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements to take from the first array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_0",
          "package": "dph-prim-par",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSelRep2_0",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements to take from the first array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_0",
          "normalized": "Array Tag-\u003eSelRep-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSelRep2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements to take from the second array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_1",
          "package": "dph-prim-par",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#elementsSelRep2_1",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements to take from the second array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "elementsSelRep2_1",
          "normalized": "Array Tag-\u003eSelRep-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSelRep2_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an array with no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "empty",
          "package": "dph-prim-par",
          "signature": "Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an array with no elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "empty",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySSegd",
          "package": "dph-prim-par",
          "signature": "SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptySSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySSegd",
          "package": "dph-prim-par",
          "partial": "SSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptySSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySegd",
          "package": "dph-prim-par",
          "signature": "Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptySegd",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptySegd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptySegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptyVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptyVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptyVSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptyVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e with no elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptys",
          "package": "dph-prim-par",
          "signature": "Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#emptys",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty Arrays with no elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "emptys",
          "package": "dph-prim-par",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLen",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromStepLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLen",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "From Step Len",
          "signature": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromStepLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLenEach",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Array Int -\u003e Array Int -\u003e Array Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromStepLenEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromStepLenEach",
          "normalized": "Int-\u003eArray Int-\u003eArray Int-\u003eArray Int-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "From Step Len Each",
          "signature": "Int-\u003eArray Int-\u003eArray Int-\u003eArray Int-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromStepLenEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromThenTo",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromThenTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromThenTo",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "From Then To",
          "signature": "Int-\u003eInt-\u003eInt-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromThenTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromTo",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Int -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "enumFromTo",
          "normalized": "Int-\u003eInt-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "From To",
          "signature": "Int-\u003eInt-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract a subrange of elements from an array.\n\u003c/p\u003e\u003cpre\u003eextract [23, 42, 93, 50, 27] 1 3  = [42, 93, 50]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extract",
          "package": "dph-prim-par",
          "signature": "Array a-\u003e Int-\u003e Int-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Extract subrange of elements from an array extract",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extract",
          "normalized": "Array a-\u003eInt-\u003eInt-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eInt-\u003eInt-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtract all the segments defined by the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e,\n   returning them concatenated in a fresh \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_ass",
          "package": "dph-prim-par",
          "signature": "SSegd-\u003e Arrays a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Extract segments defined by SSegd Extract all the segments defined by the SSegd from the Arrays returning them concatenated in fresh Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_ass",
          "normalized": "SSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "SSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extracts_ass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtract all the segments defined by the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e,\n   returning them concatenated in a fresh \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_avs",
          "package": "dph-prim-par",
          "signature": "VSegd-\u003e Arrays a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Extract segments defined by VSegd Extract all the segments defined by the VSegd from the Arrays returning them concatenated in fresh Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_avs",
          "normalized": "VSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "VSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extracts_avs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e from a vector of arrays.\n\u003c/p\u003e\u003cp\u003eNOTE: This is a transitory interface, and will be removed in future versions.\n         Use \u003ccode\u003e\u003ca\u003eextracts_ass\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_nss",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Vector (Array a) -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#extracts_nss",
          "type": "function"
        },
        "index": {
          "description": "length result Extract segments defined by SSegd from vector of arrays NOTE This is transitory interface and will be removed in future versions Use extracts ass instead",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "extracts_nss",
          "normalized": "SSegd-\u003eVector(Array a)-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "SSegd-\u003eVector(Array a)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extracts_nss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements from an array that match the given predicate.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "filter",
          "package": "dph-prim-par",
          "signature": "(a -\u003e Bool) -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements from an array that match the given predicate",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold over an array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Undirected fold over an array The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003ea",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold, using the first element to initialise the state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003cli\u003e If the array contains no elements then you'll get a bounds check \u003ccode\u003eerror\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e Array a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1",
          "type": "function"
        },
        "index": {
          "description": "Undirected fold using the first element to initialise the state The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt If the array contains no elements then you ll get bounds check error",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eArray a-\u003ea",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003eArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_s\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to initialise\n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_s",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1_s",
          "type": "function"
        },
        "index": {
          "description": "Like fold but using the first element of each segment to initialise the state of that segment Same preconditions as fold1",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_s",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSegd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003eSegd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_ss\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to intialise \n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_ss",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e SSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1_ss",
          "type": "function"
        },
        "index": {
          "description": "Like fold ss but using the first element of each segment to intialise the state of that segment Same preconditions as fold1",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_ss",
          "normalized": "(a-\u003ea-\u003ea)-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_vs\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to initialise \n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_vs",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e VSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold1_vs",
          "type": "function"
        },
        "index": {
          "description": "Like fold vs but using the first element of each segment to initialise the state of that segment Same preconditions as fold1",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold1_vs",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular segmented fold. \n\u003c/p\u003e\u003cp\u003eAll segements have the given length.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_r",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_r",
          "type": "function"
        },
        "index": {
          "description": "Regular segmented fold All segements have the given length Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_r",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected segmented fold. \n\u003c/p\u003e\u003cp\u003eAll segments are folded individually, and the result contains one\n   element for each segment. \n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_s",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_s",
          "type": "function"
        },
        "index": {
          "description": "Undirected segmented fold All segments are folded individually and the result contains one element for each segment Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_s",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eSegd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eSegd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected scattered segmented fold.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_s\u003c/a\u003e\u003c/code\u003e, but the segments can be scattered through an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_ss",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e SSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_ss",
          "type": "function"
        },
        "index": {
          "description": "Undirected scattered segmented fold Like fold but the segments can be scattered through an Arrays Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_ss",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eSSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUndirected fold over virtual segments.\n\u003c/p\u003e\u003cp\u003eThe physical segments defined by the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e are folded individually, \n   and these results are replicated according to the virtual segment\n   id table of the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e. The result contains as many elements as there\n   virtual segments.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_vs",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e VSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fold_vs",
          "type": "function"
        },
        "index": {
          "description": "Undirected fold over virtual segments The physical segments defined by the VSegd are folded individually and these results are replicated according to the virtual segment id table of the VSegd The result contains as many elements as there virtual segments Same preconditions as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fold_vs",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_vs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of elements to an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromList",
          "package": "dph-prim-par",
          "signature": "[a] -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list of elements to an array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromList",
          "normalized": "[a]-\u003eArray a",
          "package": "dph-prim-par",
          "partial": "List",
          "signature": "[a]-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(number of inner arrays). \n   Convert a boxed vector of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromVectors",
          "package": "dph-prim-par",
          "signature": "Vector (Array a) -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fromVectors",
          "type": "function"
        },
        "index": {
          "description": "number of inner arrays Convert boxed vector of Array to an Arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fromVectors",
          "normalized": "Vector(Array a)-\u003eArrays a",
          "package": "dph-prim-par",
          "partial": "Vectors",
          "signature": "Vector(Array a)-\u003eArrays a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fromVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the first elements of an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fsts",
          "package": "dph-prim-par",
          "signature": "Array (a, b) -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#fsts",
          "type": "function"
        },
        "index": {
          "description": "Take the first elements of an array of pairs",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "fsts",
          "normalized": "Array(a,b)-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array(a,b)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new array given its length and a function to compute each element.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "generate",
          "package": "dph-prim-par",
          "signature": "Int -\u003e (Int -\u003e a) -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#generate",
          "type": "function"
        },
        "index": {
          "description": "Generate new array given its length and function to compute each element",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "generate",
          "normalized": "Int-\u003e(Int-\u003ea)-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Int-\u003e(Int-\u003ea)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, segment index, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Int -\u003e (Int, Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted.html#getSegOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Get the length segment index starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfSSegd",
          "normalized": "SSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "package": "dph-prim-par",
          "partial": "Seg Of SSegd",
          "signature": "SSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:getSegOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Get the length, starting index, and source id of a segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Int -\u003e (Int, Int, Int)",
          "source": "src/Data-Array-Parallel-Unlifted.html#getSegOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Get the length starting index and source id of segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "getSegOfVSegd",
          "normalized": "VSegd-\u003eInt-\u003e(Int,Int,Int)",
          "package": "dph-prim-par",
          "partial": "Seg Of VSegd",
          "signature": "VSegd-\u003eInt-\u003e(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:getSegOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an array from a file.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hGet",
          "package": "dph-prim-par",
          "signature": "Handle -\u003e IO (Array a)",
          "source": "src/Data-Array-Parallel-Unlifted.html#hGet",
          "type": "function"
        },
        "index": {
          "description": "Read an array from file",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hGet",
          "normalized": "Handle-\u003eIO(Array a)",
          "package": "dph-prim-par",
          "partial": "Get",
          "signature": "Handle-\u003eIO(Array a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an array to a file.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hPut",
          "package": "dph-prim-par",
          "signature": "Handle -\u003e Array a -\u003e IO ()",
          "source": "src/Data-Array-Parallel-Unlifted.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Write an array to file",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "hPut",
          "normalized": "Handle-\u003eArray a-\u003eIO()",
          "package": "dph-prim-par",
          "partial": "Put",
          "signature": "Handle-\u003eArray a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a numbered element from an array.\n\u003c/p\u003e\u003cp\u003eThe first argument gives a source-code location for out-of-bounds errors.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "index",
          "package": "dph-prim-par",
          "signature": "String -\u003e Array a -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#index",
          "type": "function"
        },
        "index": {
          "description": "Retrieve numbered element from an array The first argument gives source-code location for out-of-bounds errors",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "index",
          "normalized": "String-\u003eArray a-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "signature": "String-\u003eArray a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Tag each element of an array with its index.\n\u003c/p\u003e\u003cpre\u003eindexed [42, 93, 13] = [(0, 42), (1, 93), (2, 13)]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexed",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array (Int, a)",
          "source": "src/Data-Array-Parallel-Unlifted.html#indexed",
          "type": "function"
        },
        "index": {
          "description": "length result Tag each element of an array with its index indexed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexed",
          "normalized": "Array a-\u003eArray(Int,a)",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Scattered indexing from a single \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is an alias for \u003ccode\u003e\u003ca\u003ebpermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array Int -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#indexs",
          "type": "function"
        },
        "index": {
          "description": "length result Scattered indexing from single Array This is an alias for bpermute",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs",
          "normalized": "Array a-\u003eArray Int-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray Int-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indexs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Scattered indexing through a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe index array contains pairs of segment id and the index within that \n   segment. \n\u003c/p\u003e\u003cp\u003eWe use the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e to map the pairs to 2D indices within the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, \n   and return an array of the resulting elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs_avs",
          "package": "dph-prim-par",
          "signature": "Arrays a-\u003e VSegd-\u003e Array (Int, Int)-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Scattered indexing through VSegd The index array contains pairs of segment id and the index within that segment We use the VSegd to map the pairs to indices within the Arrays and return an array of the resulting elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indexs_avs",
          "normalized": "Arrays a-\u003eVSegd-\u003eArray(Int,Int)-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Arrays a-\u003eVSegd-\u003eArray(Int,Int)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indexs_avs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the indices field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesOfSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the indices field of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment starting indices of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment starting indices of Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSegd",
          "normalized": "Segd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Segd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the indices array of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSel2",
          "package": "dph-prim-par",
          "signature": "Sel2 -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesSel2",
          "type": "function"
        },
        "index": {
          "description": "Yield the indices array of selector",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSel2",
          "normalized": "Sel-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Sel",
          "signature": "Sel-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the \u003ccode\u003eindices\u003c/code\u003e field from a \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSelRep2",
          "package": "dph-prim-par",
          "signature": "Array Tag -\u003e SelRep2 -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indicesSelRep2",
          "type": "function"
        },
        "index": {
          "description": "Take the indices field from SelRep2",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indicesSelRep2",
          "normalized": "Array Tag-\u003eSelRep-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Segmented indices. \n\u003c/p\u003e\u003cp\u003eConstruct an array containing containing the segments defined by the\n   given \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEach segment will contain the elements \u003ccode\u003e[0..len-1]\u003c/code\u003e where \u003ccode\u003elen\u003c/code\u003e is the\n   length of that segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indices_s",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#indices_s",
          "type": "function"
        },
        "index": {
          "description": "length result Segmented indices Construct an array containing containing the segments defined by the given Segd Each segment will contain the elements len-1 where len is the length of that segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "indices_s",
          "normalized": "Segd-\u003eArray Int",
          "package": "dph-prim-par",
          "signature": "Segd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indices_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave the elements of two arrays.\n\u003c/p\u003e\u003cpre\u003einterleave [1, 2, 3] [4, 5, 6] = [1, 4, 2, 5, 3, 6]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "interleave",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave the elements of two arrays interleave",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "interleave",
          "normalized": "Array a-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). True when a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e has been constructed by promoting a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#isContiguousSSegd",
          "type": "function"
        },
        "index": {
          "description": "True when SSegd has been constructed by promoting SSegd In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousSSegd",
          "normalized": "SSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Contiguous SSegd",
          "signature": "SSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:isContiguousSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). If true then the \u003ccode\u003estarts\u003c/code\u003e field is identical to the \u003ccode\u003eindices\u003c/code\u003e field\n         and the sourceids are all 0s.\n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat array, and\n   consumers can avoid looking at the real starts and sources fields.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#isContiguousVSegd",
          "type": "function"
        },
        "index": {
          "description": "If true then the starts field is identical to the indices field and the sourceids are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isContiguousVSegd",
          "normalized": "VSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Contiguous VSegd",
          "signature": "VSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:isContiguousVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). If true then the segments are all unshared, and the \u003ccode\u003evsegids\u003c/code\u003e field \n         be just \u003ccode\u003e[0..len-1]\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eConsumers can check this field to avoid demanding the \u003ccode\u003evsegids\u003c/code\u003e field.\n   This can avoid the need for it to be constructed in the first place, \n   due to lazy evaluation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isManifestVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#isManifestVSegd",
          "type": "function"
        },
        "index": {
          "description": "If true then the segments are all unshared and the vsegids field be just len-1 Consumers can check this field to avoid demanding the vsegids field This can avoid the need for it to be constructed in the first place due to lazy evaluation",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "isManifestVSegd",
          "normalized": "VSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Manifest VSegd",
          "signature": "VSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:isManifestVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of elements in an array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "length",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#length",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of elements in an array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "length",
          "normalized": "Array a-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfSSegd",
          "normalized": "SSegd-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthOfVSegd",
          "normalized": "VSegd-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Of VSegd",
          "signature": "VSegd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the length of Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthSegd",
          "normalized": "Segd-\u003eInt",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Segd-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the number of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e in an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengths",
          "package": "dph-prim-par",
          "signature": "Arrays a -\u003e Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengths",
          "type": "function"
        },
        "index": {
          "description": "Yield the number of Array in an Arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengths",
          "normalized": "Arrays a-\u003eInt",
          "package": "dph-prim-par",
          "signature": "Arrays a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsOfSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthsOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment lengths of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthsOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthsSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment lengths of Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsSegd",
          "normalized": "Segd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Segd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthsSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(max(segs, threads) . log segs). \n   Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e from an array of segment lengths.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsToSegd",
          "package": "dph-prim-par",
          "signature": "Array Int -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#lengthsToSegd",
          "type": "function"
        },
        "index": {
          "description": "max segs threads log segs Construct Segd from an array of segment lengths",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "lengthsToSegd",
          "normalized": "Array Int-\u003eSegd",
          "package": "dph-prim-par",
          "partial": "To Segd",
          "signature": "Array Int-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthsToSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to each element of an array, yielding a new array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "map",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b) -\u003e Array a -\u003e Array b",
          "source": "src/Data-Array-Parallel-Unlifted.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to each element of an array yielding new array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "package": "dph-prim-par",
          "signature": "(a-\u003eb)-\u003eArray a-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombination of map and bpermute.\n\u003c/p\u003e\u003cp\u003eThe advantage of using this combined version is that we don't need\n   to apply the parameter function to source elements that don't appear\n   in the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mbpermute",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b) -\u003e Array a -\u003e Array Int -\u003e Array b",
          "source": "src/Data-Array-Parallel-Unlifted.html#mbpermute",
          "type": "function"
        },
        "index": {
          "description": "Combination of map and bpermute The advantage of using this combined version is that we don need to apply the parameter function to source elements that don appear in the result",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mbpermute",
          "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray Int-\u003eArray b",
          "package": "dph-prim-par",
          "signature": "(a-\u003eb)-\u003eArray a-\u003eArray Int-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mbpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Scattered Segment Descriptor.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e is an extension of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e that that allows the segments to be\n   scattered through multiple flat arrays.\n\u003c/p\u003e\u003cp\u003eEach segment is associated with a source id that indicates what \n   flat array it is in, along with the starting index in that flat array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The segments need not cover the entire flat array.\n\u003c/li\u003e\u003cli\u003e Different segments may point to the same elements.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSSegd",
          "package": "dph-prim-par",
          "signature": "Array Int-\u003e Array Int-\u003e Segd-\u003e SSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Scattered Segment Descriptor SSegd is an extension of Segd that that allows the segments to be scattered through multiple flat arrays Each segment is associated with source id that indicates what flat array it is in along with the starting index in that flat array The segments need not cover the entire flat array Different segments may point to the same elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSSegd",
          "normalized": "Array Int-\u003eArray Int-\u003eSegd-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "SSegd",
          "signature": "Array Int-\u003eArray Int-\u003eSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(max(segs, threads) . log segs). Construct a segment descriptor.\n\u003c/p\u003e\u003cp\u003eA segment desciptor defines an irregular 2D array based on a flat, 1D array\n   of elements. The defined array is a nested array of segments, where every\n   segment covers some of the elements from the flat array. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The starting indices must be equal to \u003ccode\u003einit (scanl (+) 0 lengths)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e If you don't want to cover all the elements from the flat arrary then\n     use a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n   flat array data: [1 2 3 4 5 6 7 8]\n     (segmentation)  --- ----- - ---\n     segd  lengths: [2, 3, 1, 2]\n           indices: [0, 2, 5, 6]\n          elements: 8 \n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSegd",
          "package": "dph-prim-par",
          "signature": "Array Int-\u003e Array Int-\u003e Int-\u003e Segd",
          "type": "function"
        },
        "index": {
          "description": "max segs threads log segs Construct segment descriptor segment desciptor defines an irregular array based on flat array of elements The defined array is nested array of segments where every segment covers some of the elements from the flat array The starting indices must be equal to init scanl lengths If you don want to cover all the elements from the flat arrary then use SSegd instead Example flat array data segmentation segd lengths indices elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSegd",
          "normalized": "Array Int-\u003eArray Int-\u003eInt-\u003eSegd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Array Int-\u003eArray Int-\u003eInt-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a selector.\n\u003c/p\u003e\u003cp\u003eA selector is a description of how to perform a \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e\u003cp\u003eSuppose we are evaluating the following expression:\n\u003c/p\u003e\u003cpre\u003ecombine [F,F,T,F,T,T] [1,2,3] [4,5,6] = [4,5,1,6,2,3]\u003c/pre\u003e\u003cp\u003eThis is difficult to parallelise. For each element in the result, the\n   source array we get this element from depends on the tag values associated\n   with all previous elements.\n\u003c/p\u003e\u003cp\u003eHowever, if we going to apply \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e several times with the same flags array, \n   we can precompute a selector that tells us where to get each element. \n   The selector contains the original flags, as well as the source index telling\n   us where to get each element for the result array.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003etagsToIndices2 [F,F,T,F,T,T]   -- tags\n             = [0,1,0,2,1,2]   -- indices\n\u003c/pre\u003e\u003cp\u003eThis says get the first element from index 0 in the second array, \n     then from index 1 in the second array,\n     then index 0 in the first array ...\n\u003c/p\u003e\u003cp\u003eThe selector then consists of both the \u003ccode\u003etag\u003c/code\u003e and \u003ccode\u003eindices\u003c/code\u003e arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSel2",
          "package": "dph-prim-par",
          "signature": "Array Tag-\u003e Array Int-\u003e Int-\u003e Int-\u003e SelRep2-\u003e Sel2",
          "type": "function"
        },
        "index": {
          "description": "Construct selector selector is description of how to perform combine operation Suppose we are evaluating the following expression combine This is difficult to parallelise For each element in the result the source array we get this element from depends on the tag values associated with all previous elements However if we going to apply combine several times with the same flags array we can precompute selector that tells us where to get each element The selector contains the original flags as well as the source index telling us where to get each element for the result array For example tagsToIndices2 tags indices This says get the first element from index in the second array then from index in the second array then index in the first array The selector then consists of both the tag and indices arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSel2",
          "normalized": "Array Tag-\u003eArray Int-\u003eInt-\u003eInt-\u003eSelRep-\u003eSel",
          "package": "dph-prim-par",
          "partial": "Sel",
          "signature": "Array Tag-\u003eArray Int-\u003eInt-\u003eInt-\u003eSelRep-\u003eSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Construct a parallel selector representation.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e describes how to distribute the two data vectors\n   corresponding to a \u003ccode\u003e\u003ca\u003eSel2\u003c/a\u003e\u003c/code\u003e across several PEs.\n\u003c/p\u003e\u003cp\u003eSuppose we want to perform the following \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e\n combine [F,F,T,T,F,T,F,F,T] [A0,A1,A2,A3,A4] [B0,B1,B2,B3] \n   = [A0,A1,B0,B1,A2,B2,A3,A4,B3]\n\u003c/pre\u003e\u003cp\u003eThe first array is the flags array, that says which of the data arrays to\n   get each successive element from. As \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e is difficult to compute\n   in parallel, if we are going to perform several combines with the same\n   flags array, we can precompute a selector that tells us where to get each\n   element. The selector contains the original flags, as well as the source\n   index telling us where to get each element for the result array.\n\u003c/p\u003e\u003cpre\u003e\n flags:   [F,F,T,T,F,T,F,F,T]\n indices: [0,1,0,1,2,2,3,4,3]\n\u003c/pre\u003e\u003cp\u003eSuppose we want to distribute the combine operation across 3 PEs. It's\n  easy to split the selector like so:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n flags:   [F,F,T]            [T,F,T]           [F,F,T] \n indices: [0,1,0]            [1,2,2]           [3,4,3]\n\u003c/pre\u003e\u003cp\u003eWe now need to split the two data arrays. Each PE needs slices of the data\n  arrays that correspond to the parts of the selector that were given to it.\n  For the current example we get:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n data_A:   [A0,A1]            [A2]              [A3,A4]\n data_B:   [B0]               [B1,B2]           [B3]\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e contains the starting index and length of each of of these\n  slices:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n      ((0, 0), (2, 1))   ((2, 1), (1, 2))  ((3, 3), (2, 1))\n       indices   lens      indices  lens    indices  lens\n\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSelRep2",
          "package": "dph-prim-par",
          "signature": "Array Tag -\u003e SelRep2",
          "source": "src/Data-Array-Parallel-Unlifted.html#mkSelRep2",
          "type": "function"
        },
        "index": {
          "description": "Construct parallel selector representation SelRep2 describes how to distribute the two data vectors corresponding to Sel2 across several PEs Suppose we want to perform the following combine operation combine A0 A1 A2 A3 A4 B0 B1 B2 B3 A0 A1 B0 B1 A2 B2 A3 A4 B3 The first array is the flags array that says which of the data arrays to get each successive element from As combine is difficult to compute in parallel if we are going to perform several combines with the same flags array we can precompute selector that tells us where to get each element The selector contains the original flags as well as the source index telling us where to get each element for the result array flags indices Suppose we want to distribute the combine operation across PEs It easy to split the selector like so PE0 PE1 PE2 flags indices We now need to split the two data arrays Each PE needs slices of the data arrays that correspond to the parts of the selector that were given to it For the current example we get PE0 PE1 PE2 data A0 A1 A2 A3 A4 data B0 B1 B2 B3 The SelRep2 contains the starting index and length of each of of these slices PE0 PE1 PE2 indices lens indices lens indices lens",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkSelRep2",
          "normalized": "Array Tag-\u003eSelRep",
          "package": "dph-prim-par",
          "partial": "Sel Rep",
          "signature": "Array Tag-\u003eSelRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSelRep2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a Virtual Segment Descriptor.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e is an extension of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e that allows data from the underlying\n   flat array to be shared between segments. For example, you can define an array\n   of 10 virtual segments that all have the same length and elements as a\n   single physical segment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Internally we maintain the invariant that all physical segments must be\n     reachable by some virtual segment. This is needed to ensure that operations\n     such as \u003ccode\u003e\u003ca\u003efold_ss\u003c/a\u003e\u003c/code\u003e segmented fold have the right complexity. \n\u003c/li\u003e\u003cli\u003e If you don't need the invariant then you can sidestep the code that\n     maintains it by using the redundant versions of the following operators, \n     and sometimes get faster code.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkVSegd",
          "package": "dph-prim-par",
          "signature": "Array Int-\u003e SSegd-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Virtual Segment Descriptor VSegd is an extension of SSegd that allows data from the underlying flat array to be shared between segments For example you can define an array of virtual segments that all have the same length and elements as single physical segment Internally we maintain the invariant that all physical segments must be reachable by some virtual segment This is needed to ensure that operations such as fold ss segmented fold have the right complexity If you don need the invariant then you can sidestep the code that maintains it by using the redundant versions of the following operators and sometimes get faster code",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "mkVSegd",
          "normalized": "Array Int-\u003eSSegd-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "signature": "Array Int-\u003eSSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result).\n   Extract elements of an array where the associated flag is true.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pack",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array Bool -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#pack",
          "type": "function"
        },
        "index": {
          "description": "length result Extract elements of an array where the associated flag is true",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pack",
          "normalized": "Array a-\u003eArray Bool-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray Bool-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result).\n   Select the elements of an array that have a corresponding tag.\n\u003c/p\u003e\u003cpre\u003epackByTag [12, 24, 42, 93] [1, 0, 0, 1] 0 = [24, 42]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "packByTag",
          "package": "dph-prim-par",
          "signature": "Array a-\u003e Array Tag-\u003e Tag-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Select the elements of an array that have corresponding tag packByTag",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "packByTag",
          "normalized": "Array a-\u003eArray Tag-\u003eTag-\u003eArray a",
          "package": "dph-prim-par",
          "partial": "By Tag",
          "signature": "Array a-\u003eArray Tag-\u003eTag-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:packByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Forwards permutation of array elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "permute",
          "package": "dph-prim-par",
          "signature": "Array a-\u003e Array Int-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Forwards permutation of array elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "permute",
          "normalized": "Array a-\u003eArray Int-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray Int-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an array of flags indicating which elements match a given value.\n\u003c/p\u003e\u003cpre\u003epick [4, 5, 3, 6, 5, 2, 5] 5 = [F, T, F, F, T, F, T]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pick",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e a -\u003e Array Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#pick",
          "type": "function"
        },
        "index": {
          "description": "Compute an array of flags indicating which elements match given value pick",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "pick",
          "normalized": "Array a-\u003ea-\u003eArray Bool",
          "package": "dph-prim-par",
          "signature": "Array a-\u003ea-\u003eArray Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:pick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(max(segs, threads) . log segs). \n   Add the lengths of corresponding segments in two descriptors.\n\u003c/p\u003e\u003cpre\u003eplusSegd [lens: 2 3 1] [lens: 3 1 1] = [lens: 5 4 2]\u003c/pre\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "plusSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Segd -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#plusSegd",
          "type": "function"
        },
        "index": {
          "description": "max segs threads log segs Add the lengths of corresponding segments in two descriptors plusSegd lens lens lens",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "plusSegd",
          "normalized": "Segd-\u003eSegd-\u003eSegd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Segd-\u003eSegd-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:plusSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSSegdToVSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#promoteSSegdToVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain SSegd to VSegd The result contains one virtual segment for every physical segment the provided SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSSegdToVSegd",
          "normalized": "SSegd-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "SSegd To VSegd",
          "signature": "SSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:promoteSSegdToVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e, \n   assuming all segments are contiguous and come from a single array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToSSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#promoteSegdToSSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote Segd to SSegd assuming all segments are contiguous and come from single array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToSSegd",
          "normalized": "Segd-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "Segd To SSegd",
          "signature": "Segd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:promoteSegdToSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToVSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#promoteSegdToVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Promote plain Segd to VSegd The result contains one virtual segment for every physical segment the provided Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "promoteSegdToVSegd",
          "normalized": "Segd-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "Segd To VSegd",
          "signature": "Segd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:promoteSegdToVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an array of the given length full of random data.\n   Good for testing.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randomRs",
          "package": "dph-prim-par",
          "signature": "Int -\u003e (a, a) -\u003e g -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#randomRs",
          "type": "function"
        },
        "index": {
          "description": "Generate an array of the given length full of random data Good for testing",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randomRs",
          "normalized": "Int-\u003e(a,a)-\u003eb-\u003eArray a",
          "package": "dph-prim-par",
          "partial": "Rs",
          "signature": "Int-\u003e(a,a)-\u003eg-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an array of the given length full of random data. \n   Good for testing.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randoms",
          "package": "dph-prim-par",
          "signature": "Int -\u003e g -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#randoms",
          "type": "function"
        },
        "index": {
          "description": "Generate an array of the given length full of random data Good for testing",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "randoms",
          "normalized": "Int-\u003ea-\u003eArray b",
          "package": "dph-prim-par",
          "signature": "Int-\u003eg-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the parallel representation of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repSel2",
          "package": "dph-prim-par",
          "signature": "Sel2 -\u003e SelRep2",
          "source": "src/Data-Array-Parallel-Unlifted.html#repSel2",
          "type": "function"
        },
        "index": {
          "description": "Yield the parallel representation of selector",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repSel2",
          "normalized": "Sel-\u003eSelRep",
          "package": "dph-prim-par",
          "partial": "Sel",
          "signature": "Sel-\u003eSelRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:repSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Construct an array by copying a portion of another array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repeat",
          "package": "dph-prim-par",
          "signature": "Int-\u003e Int-\u003e Array a-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Construct an array by copying portion of another array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "repeat",
          "normalized": "Int-\u003eInt-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Int-\u003eInt-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). \n   Construct a new array by replicating a single element the given\n   number of times.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate",
          "package": "dph-prim-par",
          "signature": "Int -\u003e a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "length result Construct new array by replicating single element the given number of times",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Int-\u003ea-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Regular segmented replicate.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicate_s\u003c/a\u003e\u003c/code\u003e, but all segments are assumed to have the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_rs",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#replicate_rs",
          "type": "function"
        },
        "index": {
          "description": "length result Regular segmented replicate Like replicate but all segments are assumed to have the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_rs",
          "normalized": "Int-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Int-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicate_rs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eElements of the array are replicated according to the lengths of the \n   segments defined by the \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_s",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#replicate_s",
          "type": "function"
        },
        "index": {
          "description": "length result Segmented replicate Elements of the array are replicated according to the lengths of the segments defined by the Segd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicate_s",
          "normalized": "Segd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Segd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicate_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(len). Construct a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e that describes an array where all virtual \n   segments point to the same physical segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicatedVSegd",
          "package": "dph-prim-par",
          "signature": "Int-\u003e Int-\u003e VSegd",
          "type": "function"
        },
        "index": {
          "description": "len Construct VSegd that describes an array where all virtual segments point to the same physical segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "replicatedVSegd",
          "normalized": "Int-\u003eInt-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "signature": "Int-\u003eInt-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicatedVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003efoldl\u003c/code\u003e but return an array of the intermediate states, including\n   the final state that is computed by \u003ccode\u003efoldl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "scan",
          "package": "dph-prim-par",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#scan",
          "type": "function"
        },
        "index": {
          "description": "Similar to foldl but return an array of the intermediate states including the final state that is computed by foldl",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "scan",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSSegd",
          "package": "dph-prim-par",
          "signature": "Int -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletonSSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Segd containing single segment of the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSSegd",
          "normalized": "Int-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "SSegd",
          "signature": "Int-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletonSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSegd",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletonSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct Segd containing single segment of the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonSegd",
          "normalized": "Int-\u003eSegd",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Int-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletonSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonVSegd",
          "package": "dph-prim-par",
          "signature": "Int -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletonVSegd",
          "type": "function"
        },
        "index": {
          "description": "Construct VSegd containing single segment of the given length",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletonVSegd",
          "normalized": "Int-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "signature": "Int-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletonVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Construct an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e consisting of a single \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletons",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Arrays a",
          "source": "src/Data-Array-Parallel-Unlifted.html#singletons",
          "type": "function"
        },
        "index": {
          "description": "Construct an Arrays consisting of single Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "singletons",
          "normalized": "Array a-\u003eArrays a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArrays a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take the second elements of an array of pairs.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "snds",
          "package": "dph-prim-par",
          "signature": "Array (a, b) -\u003e Array b",
          "source": "src/Data-Array-Parallel-Unlifted.html#snds",
          "type": "function"
        },
        "index": {
          "description": "Take the second elements of an array of pairs",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "snds",
          "normalized": "Array(a,b)-\u003eArray b",
          "package": "dph-prim-par",
          "signature": "Array(a,b)-\u003eArray b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:snds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the sources field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sourcesOfSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#sourcesOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the sources field of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sourcesOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sourcesOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the starts field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "startsOfSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#startsOfSSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the starts field of SSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "startsOfSSegd",
          "normalized": "SSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Of SSegd",
          "signature": "SSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:startsOfSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Same as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum",
          "normalized": "Array a-\u003ea",
          "package": "dph-prim-par",
          "signature": "Array a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold_r (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_r",
          "package": "dph-prim-par",
          "signature": "Int -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum_r",
          "type": "function"
        },
        "index": {
          "description": "Same as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_r",
          "normalized": "Int-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Int-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold_s (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_s",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Array a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum_s",
          "type": "function"
        },
        "index": {
          "description": "Same as fold",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_s",
          "normalized": "Segd-\u003eArray a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Segd-\u003eArray a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003efold_ss (+) 0\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_ss",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Arrays a -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#sum_ss",
          "type": "function"
        },
        "index": {
          "description": "Same as fold ss",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "sum_ss",
          "normalized": "SSegd-\u003eArrays a-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "SSegd-\u003eArrays a-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the tags array of a selector.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsSel2",
          "package": "dph-prim-par",
          "signature": "Sel2 -\u003e Array Tag",
          "source": "src/Data-Array-Parallel-Unlifted.html#tagsSel2",
          "type": "function"
        },
        "index": {
          "description": "Yield the tags array of selector",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsSel2",
          "normalized": "Sel-\u003eArray Tag",
          "package": "dph-prim-par",
          "partial": "Sel",
          "signature": "Sel-\u003eArray Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:tagsSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Compute a selector from a tags array.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsToSel2",
          "package": "dph-prim-par",
          "signature": "Array Tag -\u003e Sel2",
          "source": "src/Data-Array-Parallel-Unlifted.html#tagsToSel2",
          "type": "function"
        },
        "index": {
          "description": "Compute selector from tags array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "tagsToSel2",
          "normalized": "Array Tag-\u003eSel",
          "package": "dph-prim-par",
          "partial": "To Sel",
          "signature": "Array Tag-\u003eSel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:tagsToSel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeLengthsOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeLengthsOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the segment lengths of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeLengthsOfVSegd",
          "normalized": "VSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "Lengths Of VSegd",
          "signature": "VSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeLengthsOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeSSegdOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the SSegd of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdOfVSegd",
          "normalized": "VSegd-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "SSegd Of VSegd",
          "signature": "VSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeSSegdOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eSee the note in \u003ccode\u003e\u003ca\u003etakeVSegidsRedundantOfVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdRedundantOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeSSegdRedundantOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the SSegd of VSegd but don require that every physical segment is referenced by some virtual segment See the note in takeVSegidsRedundantOfVSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeSSegdRedundantOfVSegd",
          "normalized": "VSegd-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "SSegd Redundant Of VSegd",
          "signature": "VSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeSSegdRedundantOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeVSegidsOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the vsegids of VSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsOfVSegd",
          "normalized": "VSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "VSegids Of VSegd",
          "signature": "VSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeVSegidsOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eIf you're just performing indexing and don't need the invariant that all\n   physical segments are reachable from some virtual segment, then use this\n   version as it's faster. This sidesteps the code that maintains the invariant.\n\u003c/p\u003e\u003cp\u003eThe stated O(1) complexity assumes that the array has already been fully\n   evalauted. If this is not the case then we can avoid demanding the result\n   of a prior computation on the \u003ccode\u003evsegids\u003c/code\u003e, thus reducing the cost attributed\n   to that prior computation.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsRedundantOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Array Int",
          "source": "src/Data-Array-Parallel-Unlifted.html#takeVSegidsRedundantOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Yield the vsegids of VSegd but don require that every physical segment is referenced by some virtual segment If you re just performing indexing and don need the invariant that all physical segments are reachable from some virtual segment then use this version as it faster This sidesteps the code that maintains the invariant The stated complexity assumes that the array has already been fully evalauted If this is not the case then we can avoid demanding the result of prior computation on the vsegids thus reducing the cost attributed to that prior computation",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "takeVSegidsRedundantOfVSegd",
          "normalized": "VSegd-\u003eArray Int",
          "package": "dph-prim-par",
          "partial": "VSegids Redundant Of VSegd",
          "signature": "VSegd-\u003eArray Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeVSegidsRedundantOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array to a list of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toList",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e [a]",
          "source": "src/Data-Array-Parallel-Unlifted.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert an array to list of elements",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toList",
          "normalized": "Array a-\u003e[a]",
          "package": "dph-prim-par",
          "partial": "List",
          "signature": "Array a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(number of inner arrays). \n   Convert an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e to a boxed vector of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toVectors",
          "package": "dph-prim-par",
          "signature": "Arrays a -\u003e Vector (Array a)",
          "source": "src/Data-Array-Parallel-Unlifted.html#toVectors",
          "type": "function"
        },
        "index": {
          "description": "number of inner arrays Convert an Arrays to boxed vector of Array",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "toVectors",
          "normalized": "Arrays a-\u003eVector(Array a)",
          "package": "dph-prim-par",
          "partial": "Vectors",
          "signature": "Arrays a-\u003eVector(Array a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:toVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). \n   Yield a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: Trying to take the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a nested array that has been\n   constructed with replication can cause index space overflow. This is\n   because the virtual size of the corresponding flat data can be larger\n   than physical memory. If this happens then indices fields and \n   element count in the result will be invalid.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSSegdOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e SSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeDemoteToSSegdOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield SSegd that describes each segment of VSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments WARNING Trying to take the SSegd of nested array that has been constructed with replication can cause index space overflow This is because the virtual size of the corresponding flat data can be larger than physical memory If this happens then indices fields and element count in the result will be invalid",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSSegdOfVSegd",
          "normalized": "VSegd-\u003eSSegd",
          "package": "dph-prim-par",
          "partial": "Demote To SSegd Of VSegd",
          "signature": "VSegd-\u003eSSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeDemoteToSSegdOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003eSee the warning in \u003ccode\u003e\u003ca\u003eunsafeDemoteToSSegdOfVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSegdOfVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Segd",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeDemoteToSegdOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "segs Yield Segd that describes each segment of VSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments See the warning in unsafeDemoteToSSegdOfVSegd",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeDemoteToSegdOfVSegd",
          "normalized": "VSegd-\u003eSegd",
          "package": "dph-prim-par",
          "partial": "Demote To Segd Of VSegd",
          "signature": "VSegd-\u003eSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeDemoteToSegdOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Retrieve a single element from an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, \n        given the outer and inner indices.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndex2s",
          "package": "dph-prim-par",
          "signature": "Arrays a -\u003e Int -\u003e Int -\u003e a",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeIndex2s",
          "type": "function"
        },
        "index": {
          "description": "Retrieve single element from an Arrays given the outer and inner indices",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndex2s",
          "normalized": "Arrays a-\u003eInt-\u003eInt-\u003ea",
          "package": "dph-prim-par",
          "partial": "Index",
          "signature": "Arrays a-\u003eInt-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeIndex2s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Take one of the outer \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndexs",
          "package": "dph-prim-par",
          "signature": "Arrays a -\u003e Int -\u003e Array a",
          "source": "src/Data-Array-Parallel-Unlifted.html#unsafeIndexs",
          "type": "function"
        },
        "index": {
          "description": "Take one of the outer Array from an Arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unsafeIndexs",
          "normalized": "Arrays a-\u003eInt-\u003eArray a",
          "package": "dph-prim-par",
          "partial": "Indexs",
          "signature": "Arrays a-\u003eInt-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeIndexs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip",
          "package": "dph-prim-par",
          "signature": "Array (a, b) -\u003e (Array a, Array b)",
          "source": "src/Data-Array-Parallel-Unlifted.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of pairs into pair of arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip",
          "normalized": "Array(a,b)-\u003e(Array a,Array b)",
          "package": "dph-prim-par",
          "signature": "Array(a,b)-\u003e(Array a,Array b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Unzip an array of triples into a triple of arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip3",
          "package": "dph-prim-par",
          "signature": "Array (a, b, c) -\u003e (Array a, Array b, Array c)",
          "source": "src/Data-Array-Parallel-Unlifted.html#unzip3",
          "type": "function"
        },
        "index": {
          "description": "Unzip an array of triples into triple of arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "unzip3",
          "normalized": "Array(a,b,c)-\u003e(Array a,Array b,Array c)",
          "package": "dph-prim-par",
          "signature": "Array(a,b,c)-\u003e(Array a,Array b,Array c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(length result). \n   Copy the source array while replacing some elements by new ones in the result.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "update",
          "package": "dph-prim-par",
          "signature": "Array a-\u003e Array (Int, a)-\u003e Array a",
          "type": "function"
        },
        "index": {
          "description": "length result Copy the source array while replacing some elements by new ones in the result",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "update",
          "normalized": "Array a-\u003eArray(Int,a)-\u003eArray a",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray(Int,a)-\u003eArray a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the \u003ccode\u003evsegids\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, and then cull the physical\n   segment descriptor so that all physical segments are reachable from\n   some virtual segment.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsOfVSegd",
          "package": "dph-prim-par",
          "signature": "(Array Int -\u003e Array Int) -\u003e VSegd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#updateVSegsOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of VSegd and then cull the physical segment descriptor so that all physical segments are reachable from some virtual segment",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsOfVSegd",
          "normalized": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegs Of VSegd",
          "signature": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:updateVSegsOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the \u003ccode\u003evsegids\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, where the result is guaranteed to\n   cover all physical segments.\n\u003c/p\u003e\u003cp\u003eUsing this version avoids performing the \u003ccode\u003ecull\u003c/code\u003e operation which \n   discards unreachable physical segments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting vsegids must cover all physical segments.\n     If they do not then there will be physical segments that are not \n     reachable from some virtual segment, and subsequent operations\n     like \u003ccode\u003efold_ss\u003c/code\u003e will have the wrong work complexity.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsReachableOfVSegd",
          "package": "dph-prim-par",
          "signature": "(Array Int -\u003e Array Int) -\u003e VSegd -\u003e VSegd",
          "source": "src/Data-Array-Parallel-Unlifted.html#updateVSegsReachableOfVSegd",
          "type": "function"
        },
        "index": {
          "description": "Update the vsegids of VSegd where the result is guaranteed to cover all physical segments Using this version avoids performing the cull operation which discards unreachable physical segments The resulting vsegids must cover all physical segments If they do not then there will be physical segments that are not reachable from some virtual segment and subsequent operations like fold ss will have the wrong work complexity",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "updateVSegsReachableOfVSegd",
          "normalized": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "package": "dph-prim-par",
          "partial": "VSegs Reachable Of VSegd",
          "signature": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:updateVSegsReachableOfVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSSegd",
          "package": "dph-prim-par",
          "signature": "SSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#validSSegd",
          "type": "function"
        },
        "index": {
          "description": "Check whether Segd is well formed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSSegd",
          "normalized": "SSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "SSegd",
          "signature": "SSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:validSSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSegd",
          "package": "dph-prim-par",
          "signature": "Segd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#validSegd",
          "type": "function"
        },
        "index": {
          "description": "Check whether Segd is well formed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validSegd",
          "normalized": "Segd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "Segd",
          "signature": "Segd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:validSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validVSegd",
          "package": "dph-prim-par",
          "signature": "VSegd -\u003e Bool",
          "source": "src/Data-Array-Parallel-Unlifted.html#validVSegd",
          "type": "function"
        },
        "index": {
          "description": "Check whether Segd is well formed",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "validVSegd",
          "normalized": "VSegd-\u003eBool",
          "package": "dph-prim-par",
          "partial": "VSegd",
          "signature": "VSegd-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:validVSegd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip two arrays into an array of pairs.\n   If one array is short, excess elements of the longer array are discarded.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array b -\u003e Array (a, b)",
          "source": "src/Data-Array-Parallel-Unlifted.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zip two arrays into an array of pairs If one array is short excess elements of the longer array are discarded",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip",
          "normalized": "Array a-\u003eArray b-\u003eArray(a,b)",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray b-\u003eArray(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Zip three arrays into an array of triples.\n   If one array is short, excess elements of the longer arrays are discarded.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip3",
          "package": "dph-prim-par",
          "signature": "Array a -\u003e Array b -\u003e Array c -\u003e Array (a, b, c)",
          "source": "src/Data-Array-Parallel-Unlifted.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Zip three arrays into an array of triples If one array is short excess elements of the longer arrays are discarded",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zip3",
          "normalized": "Array a-\u003eArray b-\u003eArray c-\u003eArray(a,b,c)",
          "package": "dph-prim-par",
          "signature": "Array a-\u003eArray b-\u003eArray c-\u003eArray(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to correponding elements of two arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c) -\u003e Array a -\u003e Array b -\u003e Array c",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to correponding elements of two arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eArray a-\u003eArray b-\u003eArray c",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eArray a-\u003eArray b-\u003eArray c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of three arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith3",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of three arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of four arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith4",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of four arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of five arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith5",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of five arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of six arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith6",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of six arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of seven arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith7",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g -\u003e Array h",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of seven arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a worker function to corresponding elements of six arrays.\n\u003c/p\u003e",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith8",
          "package": "dph-prim-par",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g -\u003e Array h -\u003e Array i",
          "source": "src/Data-Array-Parallel-Unlifted.html#zipWith8",
          "type": "function"
        },
        "index": {
          "description": "Apply worker function to corresponding elements of six arrays",
          "hierarchy": "Data Array Parallel Unlifted",
          "module": "Data.Array.Parallel.Unlifted",
          "name": "zipWith8",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h-\u003eArray i",
          "package": "dph-prim-par",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h-\u003eArray i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith8"
      }
    }
  ]
]