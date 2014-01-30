[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on distributed arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html",
        "fct-type": "module",
        "title": "Arrays"
      },
      "index": {
        "description": "Operations on distributed arrays",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "Arrays",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Arrays",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#t:Distribution",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a phantom parameter used to record whether a distributed value\n   is balanced evenly among the threads. It's used to signal this property\n   between RULES, but the actual value is never used.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#Distribution",
        "fct-type": "data",
        "title": "Distribution"
      },
      "index": {
        "description": "This is phantom parameter used to record whether distributed value is balanced evenly among the threads It used to signal this property between RULES but the actual value is never used",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "Distribution",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Distribution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:atomicUpdateD",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e Dist (Vector (Int, a)) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#atomicUpdateD",
        "fct-type": "function",
        "title": "atomicUpdateD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "atomicUpdateD",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eDist(Vector(Int,a))-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "Update",
        "signature": "Gang-\u003eDist(Vector a)-\u003eDist(Vector(Int,a))-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:balanced",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Distribution",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#balanced",
        "fct-type": "function",
        "title": "balanced"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "balanced",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:bpermuteD",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Vector a -\u003e Dist (Vector Int) -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#bpermuteD",
        "fct-type": "function",
        "title": "bpermuteD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "bpermuteD",
        "normalized": "Gang-\u003eVector a-\u003eDist(Vector Int)-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eVector a-\u003eDist(Vector Int)-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:carryD",
      "description": {
        "fct-descr": "\u003cp\u003eSelectively combine the last elements of some chunks with the\n   first elements of others.\n\u003c/p\u003e\u003cp\u003eNOTE: This runs sequentially and should only be used for testing purposes.\n\u003c/p\u003e\u003cpre\u003e\n pprp $ splitD theGang unbalanced $ fromList [80, 10, 20, 40, 50, 10 :: Int]\n DVector lengths: [2,2,1,1]\n         chunks:  [[80,10],[20,40],[50],[10]]\n\npprp $ fst \n       $ carryD theGang (+) 0 \n          (mkDPrim $ fromList [True, False, True, False]) \n          (splitD theGang unbalanced $ fromList [80, 10, 20, 40, 50, 10 :: Int])\n\nDVector lengths: [1,2,0,1]\n          chunks: [[80],[30,40],[],[60]]\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist Bool -\u003e Dist (Vector a) -\u003e (Dist (Vector a), a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#carryD",
        "fct-type": "function",
        "title": "carryD"
      },
      "index": {
        "description": "Selectively combine the last elements of some chunks with the first elements of others NOTE This runs sequentially and should only be used for testing purposes pprp splitD theGang unbalanced fromList Int DVector lengths chunks pprp fst carryD theGang mkDPrim fromList True False True False splitD theGang unbalanced fromList Int DVector lengths chunks",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "carryD",
        "normalized": "Gang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist Bool-\u003eDist(Vector a)-\u003e(Dist(Vector a),a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist Bool-\u003eDist(Vector a)-\u003e(Dist(Vector a),a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinD",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a distributed array.\n   Join sums up the array lengths of each chunk, allocates a new result array, \n   and copies each chunk into the result.\n\u003c/p\u003e\u003cp\u003eNOTE: This is defined in terms of joinD_impl to avoid introducing loops\n         through RULES. Without it, splitJoinD would be a loop breaker.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Distribution -\u003e Dist (Vector a) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinD",
        "fct-type": "function",
        "title": "joinD"
      },
      "index": {
        "description": "Join distributed array Join sums up the array lengths of each chunk allocates new result array and copies each chunk into the result NOTE This is defined in terms of joinD impl to avoid introducing loops through RULES Without it splitJoinD would be loop breaker",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "joinD",
        "normalized": "Gang-\u003eDistribution-\u003eDist(Vector a)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDistribution-\u003eDist(Vector a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinDM",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a distributed array, yielding a mutable global array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e ST s (MVector s a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinDM",
        "fct-type": "function",
        "title": "joinDM"
      },
      "index": {
        "description": "Join distributed array yielding mutable global array",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "joinDM",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eST b(MVector b a)",
        "package": "dph-prim-par",
        "partial": "DM",
        "signature": "Gang-\u003eDist(Vector a)-\u003eST s(MVector s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:joinLengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(threads).\n   Get the overall length of a distributed array.\n   This is implemented by reading the chunk length from each thread, \n   and summing them up.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinLengthD",
        "fct-type": "function",
        "title": "joinLengthD"
      },
      "index": {
        "description": "threads Get the overall length of distributed array This is implemented by reading the chunk length from each thread and summing them up",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "joinLengthD",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Length",
        "signature": "Gang-\u003eDist(Vector a)-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eYield the distributed length of a distributed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (Vector a) -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the distributed length of distributed array",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "lengthD",
        "normalized": "Dist(Vector a)-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(Vector a)-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:permuteD",
      "description": {
        "fct-descr": "\u003cp\u003ePermute for distributed arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e Dist (Vector Int) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#permuteD",
        "fct-type": "function",
        "title": "permuteD"
      },
      "index": {
        "description": "Permute for distributed arrays",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "permuteD",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eDist(Vector Int)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist(Vector a)-\u003eDist(Vector Int)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitAsD",
      "description": {
        "fct-descr": "\u003cp\u003eDistribute an array over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e such that each threads gets the given\n   number of elements.\n\u003c/p\u003e\u003cpre\u003esplitAsD theGangN4 (splitLenD theGangN4 10) [1 2 3 4 5 6 7 8 9 0]\n      = [[1 2 3] [4 5 6] [7 8] [9 0]]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist Int -\u003e Vector a -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitAsD",
        "fct-type": "function",
        "title": "splitAsD"
      },
      "index": {
        "description": "Distribute an array over Gang such that each threads gets the given number of elements splitAsD theGangN4 splitLenD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "splitAsD",
        "normalized": "Gang-\u003eDist Int-\u003eVector a-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "As",
        "signature": "Gang-\u003eDist Int-\u003eVector a-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitD",
      "description": {
        "fct-descr": "\u003cp\u003eDistribute an array over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: This is defined in terms of splitD_impl to avoid introducing loops\n         through RULES. Without it, splitJoinD would be a loop breaker.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Distribution -\u003e Vector a -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitD",
        "fct-type": "function",
        "title": "splitD"
      },
      "index": {
        "description": "Distribute an array over Gang NOTE This is defined in terms of splitD impl to avoid introducing loops through RULES Without it splitJoinD would be loop breaker",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "splitD",
        "normalized": "Gang-\u003eDistribution-\u003eVector a-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDistribution-\u003eVector a-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitJoinD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a vector over a gang, run a distributed computation, then\n   join the pieces together again.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (Dist (Vector a) -\u003e Dist (Vector b)) -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitJoinD",
        "fct-type": "function",
        "title": "splitJoinD"
      },
      "index": {
        "description": "Split vector over gang run distributed computation then join the pieces together again",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "splitJoinD",
        "normalized": "Gang-\u003e(Dist(Vector a)-\u003eDist(Vector b))-\u003eVector a-\u003eVector b",
        "package": "dph-prim-par",
        "partial": "Join",
        "signature": "Gang-\u003e(Dist(Vector a)-\u003eDist(Vector b))-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitLenD",
      "description": {
        "fct-descr": "\u003cp\u003eO(threads).\n   Distribute an array length over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   Each thread holds the number of elements it's reponsible for.\n   If the array length doesn't split evenly among the threads then the first\n   threads get a few more elements.\n\u003c/p\u003e\u003cpre\u003esplitLenD theGangN4 511\n      = [128,128,128,127]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitLenD",
        "fct-type": "function",
        "title": "splitLenD"
      },
      "index": {
        "description": "threads Distribute an array length over Gang Each thread holds the number of elements it reponsible for If the array length doesn split evenly among the threads then the first threads get few more elements splitLenD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "splitLenD",
        "normalized": "Gang-\u003eInt-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Len",
        "signature": "Gang-\u003eInt-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:splitLenIdxD",
      "description": {
        "fct-descr": "\u003cp\u003eO(threads).\n   Distribute an array length over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   Each thread holds the number of elements it's responsible for, \n   and the index of the start of its chunk.\n\u003c/p\u003e\u003cpre\u003esplitLenIdxD theGangN4 511 \n      = [(128,0),(128,128),(128,256),(127,384)]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int -\u003e Dist (Int, Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitLenIdxD",
        "fct-type": "function",
        "title": "splitLenIdxD"
      },
      "index": {
        "description": "threads Distribute an array length over Gang Each thread holds the number of elements it responsible for and the index of the start of its chunk splitLenIdxD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "splitLenIdxD",
        "normalized": "Gang-\u003eInt-\u003eDist(Int,Int)",
        "package": "dph-prim-par",
        "partial": "Len Idx",
        "signature": "Gang-\u003eInt-\u003eDist(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#v:unbalanced",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Distribution",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#unbalanced",
        "fct-type": "function",
        "title": "unbalanced"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Arrays",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Arrays",
        "name": "unbalanced",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic operations on distributed types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html",
        "fct-type": "module",
        "title": "Basics"
      },
      "index": {
        "description": "Basic operations on distributed types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "name": "Basics",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Basics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:eqD",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether to distributed values are equal. \n   This requires a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and hence can't be defined in terms of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e Dist a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#eqD",
        "fct-type": "function",
        "title": "eqD"
      },
      "index": {
        "description": "Test whether to distributed values are equal This requires Gang and hence can be defined in terms of Eq",
        "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "name": "eqD",
        "normalized": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003eDist a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:fromD",
      "description": {
        "fct-descr": "\u003cp\u003eYield all elements of a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, don't use in production code.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e [a]",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#fromD",
        "fct-type": "function",
        "title": "fromD"
      },
      "index": {
        "description": "Yield all elements of distributed value For debugging only don use in production code",
        "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "name": "fromD",
        "normalized": "Gang-\u003eDist a-\u003e[a]",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:neqD",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether to distributed values are not equal.\n   This requires a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and hence can't be defined in terms of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e Dist a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#neqD",
        "fct-type": "function",
        "title": "neqD"
      },
      "index": {
        "description": "Test whether to distributed values are not equal This requires Gang and hence can be defined in terms of Eq",
        "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "name": "neqD",
        "normalized": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003eDist a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Basics.html#v:toD",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a distributed value from the first \u003ccode\u003ep\u003c/code\u003e elements of a list.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, don't use in production code.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e [a] -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#toD",
        "fct-type": "function",
        "title": "toD"
      },
      "index": {
        "description": "Generate distributed value from the first elements of list For debugging only don use in production code",
        "hierarchy": "Data Array Parallel Unlifted Distributed Basics",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Basics",
        "name": "toD",
        "normalized": "Gang-\u003e[a]-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003e[a]-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard combinators for distributed types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Standard combinators for distributed types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#t:What",
      "description": {
        "fct-descr": "\u003cp\u003eWhat sort of thing is being computed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "data",
        "title": "What"
      },
      "index": {
        "description": "What sort of thing is being computed",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "What",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "What",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WBpermute",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WBpermute",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WBpermute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WBpermute",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WBpermute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFMapGen",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WFMapGen What What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WFMapGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WFMapGen",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WFMap Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFMapMap",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WFMapMap What What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WFMapMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WFMapMap",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WFMap Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WFZipMap",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WFZipMap What What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WFZipMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WFZipMap",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WFZip Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WJoinCopy",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WJoinCopy Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WJoinCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WJoinCopy",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WJoin Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WLength",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WLength",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WLength",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WLength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WLengthIdx",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WLengthIdx",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WLengthIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WLengthIdx",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WLength Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WScalar",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WScalar",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WSlice",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WSlice",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WSlice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WSlice",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WSlice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:WZip",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "WZip",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "WZip",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:What",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "What"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "What",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "What",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:foldD",
      "description": {
        "fct-descr": "\u003cp\u003eFold all the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e Dist a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#foldD",
        "fct-type": "function",
        "title": "foldD"
      },
      "index": {
        "description": "Fold all the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "foldD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:fstD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first elements of a distributed pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#fstD",
        "fct-type": "function",
        "title": "fstD"
      },
      "index": {
        "description": "Extract the first elements of distributed pair",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "fstD",
        "normalized": "Dist(a,b)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:imapD",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function across all elements of a distributed value.\n   The worker function also gets the current thread index.\n   As opposed to \u003ccode\u003e\u003ca\u003eimapD'\u003c/a\u003e\u003c/code\u003e this version also deepSeqs each element before\n   passing it to the function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (Int -\u003e a -\u003e b)-\u003e Dist a-\u003e Dist b",
        "fct-type": "function",
        "title": "imapD"
      },
      "index": {
        "description": "Map function across all elements of distributed value The worker function also gets the current thread index As opposed to imapD this version also deepSeqs each element before passing it to the function",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "imapD",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:izipWithD",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two distributed values with the given function.\n   The worker function also gets the index of the current thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (Int -\u003e a -\u003e b -\u003e c)-\u003e Dist a-\u003e Dist b-\u003e Dist c",
        "fct-type": "function",
        "title": "izipWithD"
      },
      "index": {
        "description": "Combine two distributed values with the given function The worker function also gets the index of the current thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "izipWithD",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:mapAccumLD",
      "description": {
        "fct-descr": "\u003cp\u003eCombination of map and fold.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Dist a -\u003e (acc, Dist b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#mapAccumLD",
        "fct-type": "function",
        "title": "mapAccumLD"
      },
      "index": {
        "description": "Combination of map and fold",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "mapAccumLD",
        "normalized": "Gang-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003eDist b-\u003e(a,Dist c)",
        "package": "dph-prim-par",
        "partial": "Accum LD",
        "signature": "Gang-\u003e(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eDist a-\u003e(acc,Dist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:mapD",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function to every instance of a distributed value.\n\u003c/p\u003e\u003cp\u003eThis applies the function to every thread, but not every value held\n   by the thread. If you want that then use something like:\n\u003c/p\u003e\u003cpre\u003emapD theGang (V.map (+ 1)) :: Dist (Vector Int) -\u003e Dist (Vector Int)\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (a -\u003e b)-\u003e Dist a-\u003e Dist b",
        "fct-type": "function",
        "title": "mapD"
      },
      "index": {
        "description": "Map function to every instance of distributed value This applies the function to every thread but not every value held by the thread If you want that then use something like mapD theGang V.map Dist Vector Int Dist Vector Int",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "mapD",
        "normalized": "What-\u003eGang-\u003e(a-\u003eb)-\u003eDist a-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003eb)-\u003eDist a-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:scanD",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix sum of the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist a -\u003e (Dist a, a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#scanD",
        "fct-type": "function",
        "title": "scanD"
      },
      "index": {
        "description": "Prefix sum of the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "scanD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:sndD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second elements of a distributed pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e Dist b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#sndD",
        "fct-type": "function",
        "title": "sndD"
      },
      "index": {
        "description": "Extract the second elements of distributed pair",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "sndD",
        "normalized": "Dist(a,b)-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:unzipD",
      "description": {
        "fct-descr": "\u003cp\u003eUnpairing of distributed values.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e (Dist a, Dist b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#unzipD",
        "fct-type": "function",
        "title": "unzipD"
      },
      "index": {
        "description": "Unpairing of distributed values",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "unzipD",
        "normalized": "Dist(a,b)-\u003e(Dist a,Dist b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003e(Dist a,Dist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:zipD",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of distributed values.\n   The two values must belong to the same \u003ccode\u003eGang\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Dist b -\u003e Dist (a, b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#zipD",
        "fct-type": "function",
        "title": "zipD"
      },
      "index": {
        "description": "Pairing of distributed values The two values must belong to the same Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "zipD",
        "normalized": "Dist a-\u003eDist b-\u003eDist(a,b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eDist b-\u003eDist(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Combinators.html#v:zipWithD",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two distributed values with the given function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (a -\u003e b -\u003e c)-\u003e Dist a-\u003e Dist b-\u003e Dist c",
        "fct-type": "function",
        "title": "zipWithD"
      },
      "index": {
        "description": "Combine two distributed values with the given function",
        "hierarchy": "Data Array Parallel Unlifted Distributed Combinators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Combinators",
        "name": "zipWithD",
        "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html",
        "fct-type": "module",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Bool",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
        "name": "Bool",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#v:andD",
      "description": {
        "fct-descr": "\u003cp\u003eAND together all instances of a distributed \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#andD",
        "fct-type": "function",
        "title": "andD"
      },
      "index": {
        "description": "AND together all instances of distributed Bool",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Bool",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
        "name": "andD",
        "normalized": "Gang-\u003eDist Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#v:orD",
      "description": {
        "fct-descr": "\u003cp\u003eOR together all instances of a distributed \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#orD",
        "fct-type": "function",
        "title": "orD"
      },
      "index": {
        "description": "OR together all instances of distributed Bool",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Bool",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Bool",
        "name": "orD",
        "normalized": "Gang-\u003eDist Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Maybe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Maybes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Maybe",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Maybe.html",
        "fct-type": "module",
        "title": "Maybe"
      },
      "index": {
        "description": "Distribution of Maybes",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Maybe",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Maybe",
        "name": "Maybe",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Ordering.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of values of primitive types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Ordering",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Ordering.html",
        "fct-type": "module",
        "title": "Ordering"
      },
      "index": {
        "description": "Distribution of values of primitive types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Ordering",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Ordering",
        "name": "Ordering",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eDPrim\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e instances for scalar types. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "DPrim and DT instances for scalar types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar.Base",
        "name": "Base",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of values of primitive types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html",
        "fct-type": "module",
        "title": "Scalar"
      },
      "index": {
        "description": "Distribution of values of primitive types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "Scalar",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#t:DT",
      "description": {
        "fct-descr": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
        "fct-type": "class",
        "title": "DT"
      },
      "index": {
        "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:deepSeqD",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
        "fct-type": "method",
        "title": "deepSeqD"
      },
      "index": {
        "description": "Ensure distributed value is fully evaluated",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "deepSeqD",
        "normalized": "a-\u003eb-\u003eb",
        "package": "dph-prim-par",
        "partial": "Seq",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:indexD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Dist a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
        "fct-type": "method",
        "title": "indexD"
      },
      "index": {
        "description": "Extract single element of an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "indexD",
        "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "String-\u003eDist a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:measureD",
      "description": {
        "fct-descr": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
        "fct-type": "method",
        "title": "measureD"
      },
      "index": {
        "description": "Show distributed value For debugging only",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "measureD",
        "normalized": "a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:newMD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e ST s (MDist a s)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
        "fct-type": "method",
        "title": "newMD"
      },
      "index": {
        "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "newMD",
        "normalized": "Gang-\u003eST a(MDist b a)",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "Gang-\u003eST s(MDist a s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:readMD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e ST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
        "fct-type": "method",
        "title": "readMD"
      },
      "index": {
        "description": "Extract an element from mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "readMD",
        "normalized": "MDist a b-\u003eInt-\u003eST b a",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:scalarD",
      "description": {
        "fct-descr": "\u003cp\u003eDistribute a scalar.\n   Each thread gets its own copy of the same value.\n   Example:  scalarD theGangN4 10 = [10, 10, 10, 10] \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e a -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#scalarD",
        "fct-type": "function",
        "title": "scalarD"
      },
      "index": {
        "description": "Distribute scalar Each thread gets its own copy of the same value Example scalarD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "scalarD",
        "normalized": "Gang-\u003ea-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003ea-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sizeD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
        "fct-type": "method",
        "title": "sizeD"
      },
      "index": {
        "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "sizeD",
        "normalized": "Dist a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sizeMD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
        "fct-type": "method",
        "title": "sizeMD"
      },
      "index": {
        "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "sizeMD",
        "normalized": "MDist a b-\u003eInt",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:sumD",
      "description": {
        "fct-descr": "\u003cp\u003eSum all instances of a distributed number.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#sumD",
        "fct-type": "function",
        "title": "sumD"
      },
      "index": {
        "description": "Sum all instances of distributed number",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "sumD",
        "normalized": "Gang-\u003eDist a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:unsafeFreezeMD",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e ST s (Dist a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
        "fct-type": "method",
        "title": "unsafeFreezeMD"
      },
      "index": {
        "description": "Unsafely freeze mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "unsafeFreezeMD",
        "normalized": "MDist a b-\u003eST b(Dist a)",
        "package": "dph-prim-par",
        "partial": "Freeze MD",
        "signature": "MDist a s-\u003eST s(Dist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#v:writeMD",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
        "fct-type": "method",
        "title": "writeMD"
      },
      "index": {
        "description": "Write an element of mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Scalar",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Scalar",
        "name": "writeMD",
        "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Tuples\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html",
        "fct-type": "module",
        "title": "Tuple"
      },
      "index": {
        "description": "Distribution of Tuples",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "Tuple",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:fstD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first elements of a distributed pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#fstD",
        "fct-type": "function",
        "title": "fstD"
      },
      "index": {
        "description": "Extract the first elements of distributed pair",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "fstD",
        "normalized": "Dist(a,b)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:sndD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second elements of a distributed pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e Dist b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#sndD",
        "fct-type": "function",
        "title": "sndD"
      },
      "index": {
        "description": "Extract the second elements of distributed pair",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "sndD",
        "normalized": "Dist(a,b)-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:unzip3D",
      "description": {
        "fct-descr": "\u003cp\u003eUnpairing of distributed values.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b, c) -\u003e (Dist a, Dist b, Dist c)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#unzip3D",
        "fct-type": "function",
        "title": "unzip3D"
      },
      "index": {
        "description": "Unpairing of distributed values",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "unzip3D",
        "normalized": "Dist(a,b,c)-\u003e(Dist a,Dist b,Dist c)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b,c)-\u003e(Dist a,Dist b,Dist c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:unzipD",
      "description": {
        "fct-descr": "\u003cp\u003eUnpairing of distributed values.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e (Dist a, Dist b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#unzipD",
        "fct-type": "function",
        "title": "unzipD"
      },
      "index": {
        "description": "Unpairing of distributed values",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "unzipD",
        "normalized": "Dist(a,b)-\u003e(Dist a,Dist b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003e(Dist a,Dist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:zip3D",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of distributed values.\n \u003cem\u003eThe two values must belong to the same\u003c/em\u003e \u003ccode\u003eGang\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Dist b -\u003e Dist c -\u003e Dist (a, b, c)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#zip3D",
        "fct-type": "function",
        "title": "zip3D"
      },
      "index": {
        "description": "Pairing of distributed values The two values must belong to the same Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "zip3D",
        "normalized": "Dist a-\u003eDist b-\u003eDist c-\u003eDist(a,b,c)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eDist b-\u003eDist c-\u003eDist(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#v:zipD",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of distributed values.\n   The two values must belong to the same \u003ccode\u003eGang\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Dist b -\u003e Dist (a, b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#zipD",
        "fct-type": "function",
        "title": "zipD"
      },
      "index": {
        "description": "Pairing of distributed values The two values must belong to the same Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Tuple",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Tuple",
        "name": "zipD",
        "normalized": "Dist a-\u003eDist b-\u003eDist(a,b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eDist b-\u003eDist(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Distribution of Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "Base",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "lengthD",
        "normalized": "Dist USSegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist USSegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeElementsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeElementsD",
        "fct-type": "function",
        "title": "takeElementsD"
      },
      "index": {
        "description": "Yield the number of data elements",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "takeElementsD",
        "normalized": "Dist USSegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "Dist USSegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeIndicesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeIndicesD",
        "fct-type": "function",
        "title": "takeIndicesD"
      },
      "index": {
        "description": "Yield the segment indices",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "takeIndicesD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeLengthsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeLengthsD",
        "fct-type": "function",
        "title": "takeLengthsD"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "takeLengthsD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeSourcesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the source ids\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeSourcesD",
        "fct-type": "function",
        "title": "takeSourcesD"
      },
      "index": {
        "description": "Yield the source ids",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "takeSourcesD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Sources",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeStartsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeStartsD",
        "fct-type": "function",
        "title": "takeStartsD"
      },
      "index": {
        "description": "Yield the starting indices",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "takeStartsD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Starts",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#v:takeUSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the USegd\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeUSegdD",
        "fct-type": "function",
        "title": "takeUSegdD"
      },
      "index": {
        "description": "Yield the USegd",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Base",
        "name": "takeUSegdD",
        "normalized": "Dist USSegd-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "USegd",
        "signature": "Dist USSegd-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-DT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-DT.html",
        "fct-type": "module",
        "title": "DT"
      },
      "index": {
        "description": "Distribution of Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.DT",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on Distributed Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html",
        "fct-type": "module",
        "title": "Split"
      },
      "index": {
        "description": "Operations on Distributed Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
        "name": "Split",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#v:splitSSegdOnElemsD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a segment descriptor across the gang, element wise.\n   We try to put the same number of elements on each thread, which means\n   that segments are sometimes split across threads.\n\u003c/p\u003e\u003cp\u003eEach thread gets a slice of segment descriptor, the segid of the first \n   slice, and the offset of the first slice in its segment.\n\u003c/p\u003e\u003cp\u003eExample:\n    In this picture each X represents 5 elements, and we have 5 segements in total.\n\u003c/p\u003e\u003cpre\u003e   segs:    ----------------------- --- ------- --------------- -------------------\n    elems:  |X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|\n            |     thread1     |     thread2     |     thread3     |     thread4     |\n    segid:  0                 0                 3                 4\n    offset: 0                 45                0                 5\n\npprp $ splitSegdOnElemsD theGang \n          $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50 :: Int]\n\nsegd:    DUSegd lengths:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[45],[15,10,20],[40,5],[45]]\n                     indices:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[0], [0,15,25], [0,40],[0]]\n                    elements:  DInt [45,45,45,45]\n\nsegids: DInt [0,0,3,4]     (segment id of first slice on thread)\n    offsets: DInt [0,45,0,5]    (offset of that slice in its segment)\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e USSegd -\u003e Dist ((USSegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#splitSSegdOnElemsD",
        "fct-type": "function",
        "title": "splitSSegdOnElemsD"
      },
      "index": {
        "description": "Split segment descriptor across the gang element wise We try to put the same number of elements on each thread which means that segments are sometimes split across threads Each thread gets slice of segment descriptor the segid of the first slice and the offset of the first slice in its segment Example In this picture each represents elements and we have segements in total segs elems thread1 thread2 thread3 thread4 segid offset pprp splitSegdOnElemsD theGang lengthsToUSegd fromList Int segd DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt segids DInt segment id of first slice on thread offsets DInt offset of that slice in its segment",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd.Split",
        "name": "splitSSegdOnElemsD",
        "normalized": "Gang-\u003eUSSegd-\u003eDist((USSegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "SSegd On Elems",
        "signature": "Gang-\u003eUSSegd-\u003eDist((USSegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html",
        "fct-type": "module",
        "title": "USSegd"
      },
      "index": {
        "description": "Distribution of Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "USSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "USSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "lengthD",
        "normalized": "Dist USSegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist USSegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:splitSSegdOnElemsD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a segment descriptor across the gang, element wise.\n   We try to put the same number of elements on each thread, which means\n   that segments are sometimes split across threads.\n\u003c/p\u003e\u003cp\u003eEach thread gets a slice of segment descriptor, the segid of the first \n   slice, and the offset of the first slice in its segment.\n\u003c/p\u003e\u003cp\u003eExample:\n    In this picture each X represents 5 elements, and we have 5 segements in total.\n\u003c/p\u003e\u003cpre\u003e   segs:    ----------------------- --- ------- --------------- -------------------\n    elems:  |X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|\n            |     thread1     |     thread2     |     thread3     |     thread4     |\n    segid:  0                 0                 3                 4\n    offset: 0                 45                0                 5\n\npprp $ splitSegdOnElemsD theGang \n          $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50 :: Int]\n\nsegd:    DUSegd lengths:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[45],[15,10,20],[40,5],[45]]\n                     indices:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[0], [0,15,25], [0,40],[0]]\n                    elements:  DInt [45,45,45,45]\n\nsegids: DInt [0,0,3,4]     (segment id of first slice on thread)\n    offsets: DInt [0,45,0,5]    (offset of that slice in its segment)\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e USSegd -\u003e Dist ((USSegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Split.html#splitSSegdOnElemsD",
        "fct-type": "function",
        "title": "splitSSegdOnElemsD"
      },
      "index": {
        "description": "Split segment descriptor across the gang element wise We try to put the same number of elements on each thread which means that segments are sometimes split across threads Each thread gets slice of segment descriptor the segid of the first slice and the offset of the first slice in its segment Example In this picture each represents elements and we have segements in total segs elems thread1 thread2 thread3 thread4 segid offset pprp splitSegdOnElemsD theGang lengthsToUSegd fromList Int segd DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt segids DInt segment id of first slice on thread offsets DInt offset of that slice in its segment",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "splitSSegdOnElemsD",
        "normalized": "Gang-\u003eUSSegd-\u003eDist((USSegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "SSegd On Elems",
        "signature": "Gang-\u003eUSSegd-\u003eDist((USSegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeElementsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeElementsD",
        "fct-type": "function",
        "title": "takeElementsD"
      },
      "index": {
        "description": "Yield the number of data elements",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "takeElementsD",
        "normalized": "Dist USSegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "Dist USSegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeIndicesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeIndicesD",
        "fct-type": "function",
        "title": "takeIndicesD"
      },
      "index": {
        "description": "Yield the segment indices",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "takeIndicesD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeLengthsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeLengthsD",
        "fct-type": "function",
        "title": "takeLengthsD"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "takeLengthsD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeSourcesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the source ids\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeSourcesD",
        "fct-type": "function",
        "title": "takeSourcesD"
      },
      "index": {
        "description": "Yield the source ids",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "takeSourcesD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Sources",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeStartsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeStartsD",
        "fct-type": "function",
        "title": "takeStartsD"
      },
      "index": {
        "description": "Yield the starting indices",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "takeStartsD",
        "normalized": "Dist USSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Starts",
        "signature": "Dist USSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd.html#v:takeUSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the USegd\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USSegd -\u003e Dist USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USSegd-Base.html#takeUSegdD",
        "fct-type": "function",
        "title": "takeUSegdD"
      },
      "index": {
        "description": "Yield the USegd",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USSegd",
        "name": "takeUSegdD",
        "normalized": "Dist USSegd-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "USegd",
        "signature": "Dist USSegd-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Distribution of Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "name": "Base",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "name": "lengthD",
        "normalized": "Dist USegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist USegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:mkDUSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a distributed segment descriptor\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (Vector Int)-\u003e Dist (Vector Int)-\u003e Dist Int-\u003e Dist USegd",
        "fct-type": "function",
        "title": "mkDUSegdD"
      },
      "index": {
        "description": "Construct distributed segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "name": "mkDUSegdD",
        "normalized": "Dist(Vector Int)-\u003eDist(Vector Int)-\u003eDist Int-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "DUSegd",
        "signature": "Dist(Vector Int)-\u003eDist(Vector Int)-\u003eDist Int-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeElementsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeElementsD",
        "fct-type": "function",
        "title": "takeElementsD"
      },
      "index": {
        "description": "Yield the number of data elements",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "name": "takeElementsD",
        "normalized": "Dist USegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "Dist USegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeIndicesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices of a segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeIndicesD",
        "fct-type": "function",
        "title": "takeIndicesD"
      },
      "index": {
        "description": "Yield the segment indices of segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "name": "takeIndicesD",
        "normalized": "Dist USegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "Dist USegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#v:takeLengthsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeLengthsD",
        "fct-type": "function",
        "title": "takeLengthsD"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Base",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Base",
        "name": "takeLengthsD",
        "normalized": "Dist USegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "Dist USegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-DT.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-DT.html",
        "fct-type": "module",
        "title": "DT"
      },
      "index": {
        "description": "Distribution of Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.DT",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on Distributed Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html",
        "fct-type": "module",
        "title": "Split"
      },
      "index": {
        "description": "Operations on Distributed Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "name": "Split",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:glueSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eGlue a distributed segment descriptor back into the original global one.\n   Prop:  glueSegdD gang $ splitSegdOnElems gang usegd = usegd\n\u003c/p\u003e\u003cp\u003eNOTE: This is runs sequentially and should only be used for testing purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist ((USegd, Int), Int) -\u003e Dist USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#glueSegdD",
        "fct-type": "function",
        "title": "glueSegdD"
      },
      "index": {
        "description": "Glue distributed segment descriptor back into the original global one Prop glueSegdD gang splitSegdOnElems gang usegd usegd NOTE This is runs sequentially and should only be used for testing purposes",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "name": "glueSegdD",
        "normalized": "Gang-\u003eDist((USegd,Int),Int)-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Gang-\u003eDist((USegd,Int),Int)-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:joinSegdD",
      "description": {
        "fct-descr": "\u003cp\u003etime O(segs)\n   Join a distributed segment descriptor into a global one.\n   This simply joins the distributed lengths and indices fields, but does\n   not reconstruct the original segment descriptor as it was before splitting.\n\u003c/p\u003e\u003cpre\u003e \u003e pprp $ joinSegdD theGang4 \n         $ fstD $ fstD $ splitSegdOnElemsD theGang\n         $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50]\n\nUSegd lengths:  [45,15,10,20,40,5,45]\n         indices:  [0,45,60,70,90,130,135]\n         elements: 180\n\u003c/pre\u003e\u003cp\u003eTODO: sequential runtime is O(segs) due to application of lengthsToUSegd\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist USegd -\u003e USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#joinSegdD",
        "fct-type": "function",
        "title": "joinSegdD"
      },
      "index": {
        "description": "time segs Join distributed segment descriptor into global one This simply joins the distributed lengths and indices fields but does not reconstruct the original segment descriptor as it was before splitting pprp joinSegdD theGang4 fstD fstD splitSegdOnElemsD theGang lengthsToUSegd fromList USegd lengths indices elements TODO sequential runtime is segs due to application of lengthsToUSegd",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "name": "joinSegdD",
        "normalized": "Gang-\u003eDist USegd-\u003eUSegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Gang-\u003eDist USegd-\u003eUSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSD",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist USegd -\u003e Vector a -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSD",
        "fct-type": "function",
        "title": "splitSD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "name": "splitSD",
        "normalized": "Gang-\u003eDist USegd-\u003eVector a-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "SD",
        "signature": "Gang-\u003eDist USegd-\u003eVector a-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSegdOnElemsD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a segment descriptor across the gang, element wise.\n   We try to put the same number of elements on each thread, which means\n   that segments are sometimes split across threads.\n\u003c/p\u003e\u003cp\u003eEach thread gets a slice of segment descriptor, the segid of the first \n   slice, and the offset of the first slice in its segment.\n\u003c/p\u003e\u003cp\u003eExample:\n    In this picture each X represents 5 elements, and we have 5 segements in total.\n\u003c/p\u003e\u003cpre\u003e  segs:    ----------------------- --- ------- --------------- -------------------\n    elems:  |X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|\n            |     thread1     |     thread2     |     thread3     |     thread4     |\n    segid:  0                 0                 3                 4\n    offset: 0                 45                0                 5\n\npprp $ splitSegdOnElemsD theGang4\n          $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50 :: Int]\n\nsegd:    DUSegd lengths:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[45],[15,10,20],[40,5],[45]]\n                     indices:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[0], [0,15,25], [0,40],[0]]\n                    elements:  DInt [45,45,45,45]\n\nsegids: DInt [0,0,3,4]     (segment id of first slice on thread)\n    offsets: DInt [0,45,0,5]    (offset of that slice in its segment)\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e USegd -\u003e Dist ((USegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSegdOnElemsD",
        "fct-type": "function",
        "title": "splitSegdOnElemsD"
      },
      "index": {
        "description": "Split segment descriptor across the gang element wise We try to put the same number of elements on each thread which means that segments are sometimes split across threads Each thread gets slice of segment descriptor the segid of the first slice and the offset of the first slice in its segment Example In this picture each represents elements and we have segements in total segs elems thread1 thread2 thread3 thread4 segid offset pprp splitSegdOnElemsD theGang4 lengthsToUSegd fromList Int segd DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt segids DInt segment id of first slice on thread offsets DInt offset of that slice in its segment",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "name": "splitSegdOnElemsD",
        "normalized": "Gang-\u003eUSegd-\u003eDist((USegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "Segd On Elems",
        "signature": "Gang-\u003eUSegd-\u003eDist((USegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#v:splitSegdOnSegsD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a segment descriptor across the gang, segment wise.\n   Whole segments are placed on each thread, and we try to balance out\n   the segments so each thread has the same number of array elements.\n\u003c/p\u003e\u003cp\u003eWe don't split segments across threads, as this would limit our ability\n   to perform intra-thread fusion of lifted operations. The down side\n   of this is that if we have few segments with an un-even size distribution\n   then large segments can cause the gang to become unbalanced.\n\u003c/p\u003e\u003cp\u003eIn the following example the segment with size 100 dominates and\n   unbalances the gang. There is no reason to put any segments on the\n   the last thread because we need to wait for the first to finish anyway.\n\u003c/p\u003e\u003cpre\u003e \u003e pprp $ splitSegdOnSegsD theGang\n            $ lengthsToUSegd $ fromList [100, 10, 20, 40, 50  :: Int]\n\nDUSegd lengths:   DVector lengths:  [ 1,    3,         1,  0]\n                                chunks:  [[100],[10,20,40],[50],[]]\n\nindices:   DVector lengths:  [1,3,1,0]\n                                chunks:  [[0],  [0,10,30], [0], []]\n\nelements:  DInt [100,70,50,0]\n\u003c/pre\u003e\u003cp\u003eNOTE: This splitSegdOnSegsD function isn't currently used.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e USegd -\u003e Dist USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSegdOnSegsD",
        "fct-type": "function",
        "title": "splitSegdOnSegsD"
      },
      "index": {
        "description": "Split segment descriptor across the gang segment wise Whole segments are placed on each thread and we try to balance out the segments so each thread has the same number of array elements We don split segments across threads as this would limit our ability to perform intra-thread fusion of lifted operations The down side of this is that if we have few segments with an un-even size distribution then large segments can cause the gang to become unbalanced In the following example the segment with size dominates and unbalances the gang There is no reason to put any segments on the the last thread because we need to wait for the first to finish anyway pprp splitSegdOnSegsD theGang lengthsToUSegd fromList Int DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt NOTE This splitSegdOnSegsD function isn currently used",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd Split",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd.Split",
        "name": "splitSegdOnSegsD",
        "normalized": "Gang-\u003eUSegd-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "Segd On Segs",
        "signature": "Gang-\u003eUSegd-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html",
        "fct-type": "module",
        "title": "USegd"
      },
      "index": {
        "description": "Distribution of Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "USegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "USegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:glueSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eGlue a distributed segment descriptor back into the original global one.\n   Prop:  glueSegdD gang $ splitSegdOnElems gang usegd = usegd\n\u003c/p\u003e\u003cp\u003eNOTE: This is runs sequentially and should only be used for testing purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist ((USegd, Int), Int) -\u003e Dist USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#glueSegdD",
        "fct-type": "function",
        "title": "glueSegdD"
      },
      "index": {
        "description": "Glue distributed segment descriptor back into the original global one Prop glueSegdD gang splitSegdOnElems gang usegd usegd NOTE This is runs sequentially and should only be used for testing purposes",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "glueSegdD",
        "normalized": "Gang-\u003eDist((USegd,Int),Int)-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Gang-\u003eDist((USegd,Int),Int)-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:joinSegdD",
      "description": {
        "fct-descr": "\u003cp\u003etime O(segs)\n   Join a distributed segment descriptor into a global one.\n   This simply joins the distributed lengths and indices fields, but does\n   not reconstruct the original segment descriptor as it was before splitting.\n\u003c/p\u003e\u003cpre\u003e \u003e pprp $ joinSegdD theGang4 \n         $ fstD $ fstD $ splitSegdOnElemsD theGang\n         $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50]\n\nUSegd lengths:  [45,15,10,20,40,5,45]\n         indices:  [0,45,60,70,90,130,135]\n         elements: 180\n\u003c/pre\u003e\u003cp\u003eTODO: sequential runtime is O(segs) due to application of lengthsToUSegd\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist USegd -\u003e USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#joinSegdD",
        "fct-type": "function",
        "title": "joinSegdD"
      },
      "index": {
        "description": "time segs Join distributed segment descriptor into global one This simply joins the distributed lengths and indices fields but does not reconstruct the original segment descriptor as it was before splitting pprp joinSegdD theGang4 fstD fstD splitSegdOnElemsD theGang lengthsToUSegd fromList USegd lengths indices elements TODO sequential runtime is segs due to application of lengthsToUSegd",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "joinSegdD",
        "normalized": "Gang-\u003eDist USegd-\u003eUSegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Gang-\u003eDist USegd-\u003eUSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "lengthD",
        "normalized": "Dist USegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist USegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:mkDUSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a distributed segment descriptor\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (Vector Int)-\u003e Dist (Vector Int)-\u003e Dist Int-\u003e Dist USegd",
        "fct-type": "function",
        "title": "mkDUSegdD"
      },
      "index": {
        "description": "Construct distributed segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "mkDUSegdD",
        "normalized": "Dist(Vector Int)-\u003eDist(Vector Int)-\u003eDist Int-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "DUSegd",
        "signature": "Dist(Vector Int)-\u003eDist(Vector Int)-\u003eDist Int-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:splitSD",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist USegd -\u003e Vector a -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSD",
        "fct-type": "function",
        "title": "splitSD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "splitSD",
        "normalized": "Gang-\u003eDist USegd-\u003eVector a-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "SD",
        "signature": "Gang-\u003eDist USegd-\u003eVector a-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:splitSegdOnElemsD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a segment descriptor across the gang, element wise.\n   We try to put the same number of elements on each thread, which means\n   that segments are sometimes split across threads.\n\u003c/p\u003e\u003cp\u003eEach thread gets a slice of segment descriptor, the segid of the first \n   slice, and the offset of the first slice in its segment.\n\u003c/p\u003e\u003cp\u003eExample:\n    In this picture each X represents 5 elements, and we have 5 segements in total.\n\u003c/p\u003e\u003cpre\u003e  segs:    ----------------------- --- ------- --------------- -------------------\n    elems:  |X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|X X X X X X X X X|\n            |     thread1     |     thread2     |     thread3     |     thread4     |\n    segid:  0                 0                 3                 4\n    offset: 0                 45                0                 5\n\npprp $ splitSegdOnElemsD theGang4\n          $ lengthsToUSegd $ fromList [60, 10, 20, 40, 50 :: Int]\n\nsegd:    DUSegd lengths:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[45],[15,10,20],[40,5],[45]]\n                     indices:  DVector lengths: [1,3,2,1]\n                                        chunks:  [[0], [0,15,25], [0,40],[0]]\n                    elements:  DInt [45,45,45,45]\n\nsegids: DInt [0,0,3,4]     (segment id of first slice on thread)\n    offsets: DInt [0,45,0,5]    (offset of that slice in its segment)\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e USegd -\u003e Dist ((USegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSegdOnElemsD",
        "fct-type": "function",
        "title": "splitSegdOnElemsD"
      },
      "index": {
        "description": "Split segment descriptor across the gang element wise We try to put the same number of elements on each thread which means that segments are sometimes split across threads Each thread gets slice of segment descriptor the segid of the first slice and the offset of the first slice in its segment Example In this picture each represents elements and we have segements in total segs elems thread1 thread2 thread3 thread4 segid offset pprp splitSegdOnElemsD theGang4 lengthsToUSegd fromList Int segd DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt segids DInt segment id of first slice on thread offsets DInt offset of that slice in its segment",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "splitSegdOnElemsD",
        "normalized": "Gang-\u003eUSegd-\u003eDist((USegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "Segd On Elems",
        "signature": "Gang-\u003eUSegd-\u003eDist((USegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:splitSegdOnSegsD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a segment descriptor across the gang, segment wise.\n   Whole segments are placed on each thread, and we try to balance out\n   the segments so each thread has the same number of array elements.\n\u003c/p\u003e\u003cp\u003eWe don't split segments across threads, as this would limit our ability\n   to perform intra-thread fusion of lifted operations. The down side\n   of this is that if we have few segments with an un-even size distribution\n   then large segments can cause the gang to become unbalanced.\n\u003c/p\u003e\u003cp\u003eIn the following example the segment with size 100 dominates and\n   unbalances the gang. There is no reason to put any segments on the\n   the last thread because we need to wait for the first to finish anyway.\n\u003c/p\u003e\u003cpre\u003e \u003e pprp $ splitSegdOnSegsD theGang\n            $ lengthsToUSegd $ fromList [100, 10, 20, 40, 50  :: Int]\n\nDUSegd lengths:   DVector lengths:  [ 1,    3,         1,  0]\n                                chunks:  [[100],[10,20,40],[50],[]]\n\nindices:   DVector lengths:  [1,3,1,0]\n                                chunks:  [[0],  [0,10,30], [0], []]\n\nelements:  DInt [100,70,50,0]\n\u003c/pre\u003e\u003cp\u003eNOTE: This splitSegdOnSegsD function isn't currently used.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e USegd -\u003e Dist USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Split.html#splitSegdOnSegsD",
        "fct-type": "function",
        "title": "splitSegdOnSegsD"
      },
      "index": {
        "description": "Split segment descriptor across the gang segment wise Whole segments are placed on each thread and we try to balance out the segments so each thread has the same number of array elements We don split segments across threads as this would limit our ability to perform intra-thread fusion of lifted operations The down side of this is that if we have few segments with an un-even size distribution then large segments can cause the gang to become unbalanced In the following example the segment with size dominates and unbalances the gang There is no reason to put any segments on the the last thread because we need to wait for the first to finish anyway pprp splitSegdOnSegsD theGang lengthsToUSegd fromList Int DUSegd lengths DVector lengths chunks indices DVector lengths chunks elements DInt NOTE This splitSegdOnSegsD function isn currently used",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "splitSegdOnSegsD",
        "normalized": "Gang-\u003eUSegd-\u003eDist USegd",
        "package": "dph-prim-par",
        "partial": "Segd On Segs",
        "signature": "Gang-\u003eUSegd-\u003eDist USegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:takeElementsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeElementsD",
        "fct-type": "function",
        "title": "takeElementsD"
      },
      "index": {
        "description": "Yield the number of data elements",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "takeElementsD",
        "normalized": "Dist USegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "Dist USegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:takeIndicesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices of a segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeIndicesD",
        "fct-type": "function",
        "title": "takeIndicesD"
      },
      "index": {
        "description": "Yield the segment indices of segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "takeIndicesD",
        "normalized": "Dist USegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "Dist USegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-USegd.html#v:takeLengthsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist USegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-USegd-Base.html#takeLengthsD",
        "fct-type": "function",
        "title": "takeLengthsD"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data USegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.USegd",
        "name": "takeLengthsD",
        "normalized": "Dist USegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "Dist USegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Virtual Segment Descriptors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html",
        "fct-type": "module",
        "title": "UVSegd"
      },
      "index": {
        "description": "Distribution of Virtual Segment Descriptors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "UVSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UVSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "lengthD",
        "normalized": "Dist UVSegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist UVSegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeElementsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of data elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeElementsD",
        "fct-type": "function",
        "title": "takeElementsD"
      },
      "index": {
        "description": "Yield the number of data elements",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeElementsD",
        "normalized": "Dist UVSegd-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "Dist UVSegd-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeIndicesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeIndicesD",
        "fct-type": "function",
        "title": "takeIndicesD"
      },
      "index": {
        "description": "Yield the segment indices",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeIndicesD",
        "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "Dist UVSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeLengthsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeLengthsD",
        "fct-type": "function",
        "title": "takeLengthsD"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeLengthsD",
        "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "Dist UVSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeSourcesD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the source ids\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeSourcesD",
        "fct-type": "function",
        "title": "takeSourcesD"
      },
      "index": {
        "description": "Yield the source ids",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeSourcesD",
        "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Sources",
        "signature": "Dist UVSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeStartsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeStartsD",
        "fct-type": "function",
        "title": "takeStartsD"
      },
      "index": {
        "description": "Yield the starting indices",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeStartsD",
        "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "Starts",
        "signature": "Dist UVSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeUSSegdD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the USSegd\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist USSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeUSSegdD",
        "fct-type": "function",
        "title": "takeUSSegdD"
      },
      "index": {
        "description": "Yield the USSegd",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeUSSegdD",
        "normalized": "Dist UVSegd-\u003eDist USSegd",
        "package": "dph-prim-par",
        "partial": "USSegd",
        "signature": "Dist UVSegd-\u003eDist USSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#v:takeVSegidsD",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the vsegids\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist UVSegd -\u003e Dist (Vector Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-UVSegd.html#takeVSegidsD",
        "fct-type": "function",
        "title": "takeVSegidsD"
      },
      "index": {
        "description": "Yield the vsegids",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data UVSegd",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.UVSegd",
        "name": "takeVSegidsD",
        "normalized": "Dist UVSegd-\u003eDist(Vector Int)",
        "package": "dph-prim-par",
        "partial": "VSegids",
        "signature": "Dist UVSegd-\u003eDist(Vector Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of unit values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html",
        "fct-type": "module",
        "title": "Unit"
      },
      "index": {
        "description": "Distribution of unit values",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Unit",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
        "name": "Unit",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html#v:unitD",
      "description": {
        "fct-descr": "\u003cp\u003eYield a distributed unit.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Unit.html#unitD",
        "fct-type": "function",
        "title": "unitD"
      },
      "index": {
        "description": "Yield distributed unit",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Unit",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Unit",
        "name": "unitD",
        "normalized": "Gang-\u003eDist()",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of Vectors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Vector",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Distribution of Vectors",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Vector",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eYield the distributed length of a distributed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Data.Vector",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (Vector a) -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the distributed length of distributed array",
        "hierarchy": "Data Array Parallel Unlifted Distributed Data Vector",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Data.Vector",
        "name": "lengthD",
        "normalized": "Dist(Vector a)-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(Vector a)-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistribution of values of primitive types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html",
        "fct-type": "module",
        "title": "DPrim"
      },
      "index": {
        "description": "Distribution of values of primitive types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "DPrim",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DPrim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#t:DPrim",
      "description": {
        "fct-descr": "\u003cp\u003eFor distributed primitive values, we can just store all the members in\n   a vector. The vector has the same length as the number of threads in the gang.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#DPrim",
        "fct-type": "class",
        "title": "DPrim"
      },
      "index": {
        "description": "For distributed primitive values we can just store all the members in vector The vector has the same length as the number of threads in the gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "DPrim",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DPrim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:mkDPrim",
      "description": {
        "fct-descr": "\u003cp\u003eMake an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Dist e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#mkDPrim",
        "fct-type": "method",
        "title": "mkDPrim"
      },
      "index": {
        "description": "Make an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "mkDPrim",
        "normalized": "Vector a-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "DPrim",
        "signature": "Vector e-\u003eDist e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:mkMDPrim",
      "description": {
        "fct-descr": "\u003cp\u003eMake a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "STVector s e -\u003e MDist e s",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#mkMDPrim",
        "fct-type": "method",
        "title": "mkMDPrim"
      },
      "index": {
        "description": "Make mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "mkMDPrim",
        "normalized": "STVector a b-\u003eMDist b a",
        "package": "dph-prim-par",
        "partial": "MDPrim",
        "signature": "STVector s e-\u003eMDist e s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primIndexD",
      "description": {
        "fct-descr": "\u003cp\u003eGet the member corresponding to a thread index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Dist a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primIndexD",
        "fct-type": "function",
        "title": "primIndexD"
      },
      "index": {
        "description": "Get the member corresponding to thread index",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primIndexD",
        "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "Index",
        "signature": "String-\u003eDist a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primNewMD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new distributed value, having as many members as threads\n   in the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e ST s (MDist a s)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primNewMD",
        "fct-type": "function",
        "title": "primNewMD"
      },
      "index": {
        "description": "Create new distributed value having as many members as threads in the given Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primNewMD",
        "normalized": "Gang-\u003eST a(MDist b a)",
        "package": "dph-prim-par",
        "partial": "New MD",
        "signature": "Gang-\u003eST s(MDist a s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primReadMD",
      "description": {
        "fct-descr": "\u003cp\u003eRead the member of a distributed value corresponding to the given thread index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e ST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primReadMD",
        "fct-type": "function",
        "title": "primReadMD"
      },
      "index": {
        "description": "Read the member of distributed value corresponding to the given thread index",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primReadMD",
        "normalized": "MDist a b-\u003eInt-\u003eST b a",
        "package": "dph-prim-par",
        "partial": "Read MD",
        "signature": "MDist a s-\u003eInt-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primSizeD",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size of a distributed value, that is, the number of threads\n   in the gang that it was created for.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primSizeD",
        "fct-type": "function",
        "title": "primSizeD"
      },
      "index": {
        "description": "Get the size of distributed value that is the number of threads in the gang that it was created for",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primSizeD",
        "normalized": "Dist a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Size",
        "signature": "Dist a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primSizeMD",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size of a distributed mutable value, that is, the number of threads\n   in the gang it was created for.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primSizeMD",
        "fct-type": "function",
        "title": "primSizeMD"
      },
      "index": {
        "description": "Get the size of distributed mutable value that is the number of threads in the gang it was created for",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primSizeMD",
        "normalized": "MDist a b-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Size MD",
        "signature": "MDist a s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primUnsafeFreezeMD",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze a mutable distributed value to an immutable one.\n   You promise not to update the mutable one any further.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e ST s (Dist a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primUnsafeFreezeMD",
        "fct-type": "function",
        "title": "primUnsafeFreezeMD"
      },
      "index": {
        "description": "Freeze mutable distributed value to an immutable one You promise not to update the mutable one any further",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primUnsafeFreezeMD",
        "normalized": "MDist a b-\u003eST b(Dist a)",
        "package": "dph-prim-par",
        "partial": "Unsafe Freeze MD",
        "signature": "MDist a s-\u003eST s(Dist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:primWriteMD",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the member of a distributed value corresponding to the given thread index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#primWriteMD",
        "fct-type": "function",
        "title": "primWriteMD"
      },
      "index": {
        "description": "Write the member of distributed value corresponding to the given thread index",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "primWriteMD",
        "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "dph-prim-par",
        "partial": "Write MD",
        "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:unDPrim",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack an immutable distributed value back into a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#unDPrim",
        "fct-type": "method",
        "title": "unDPrim"
      },
      "index": {
        "description": "Unpack an immutable distributed value back into vector",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "unDPrim",
        "normalized": "Dist a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "DPrim",
        "signature": "Dist e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#v:unMDPrim",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a mutable distributed value back into a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist e s -\u003e STVector s e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DPrim.html#unMDPrim",
        "fct-type": "method",
        "title": "unMDPrim"
      },
      "index": {
        "description": "Unpack mutable distributed value back into vector",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DPrim",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DPrim",
        "name": "unMDPrim",
        "normalized": "MDist a b-\u003eSTVector b a",
        "package": "dph-prim-par",
        "partial": "MDPrim",
        "signature": "MDist e s-\u003eSTVector s e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html",
        "fct-type": "module",
        "title": "DT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#t:DT",
      "description": {
        "fct-descr": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
        "fct-type": "class",
        "title": "DT"
      },
      "index": {
        "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:checkGangD",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that the sizes of the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and of the distributed value match.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Gang -\u003e Dist a -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#checkGangD",
        "fct-type": "function",
        "title": "checkGangD"
      },
      "index": {
        "description": "Check that the sizes of the Gang and of the distributed value match",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "checkGangD",
        "normalized": "String-\u003eGang-\u003eDist a-\u003eb-\u003eb",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "String-\u003eGang-\u003eDist a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:checkGangMD",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that the sizes of the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and of the mutable distributed value match.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Gang -\u003e MDist a s -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#checkGangMD",
        "fct-type": "function",
        "title": "checkGangMD"
      },
      "index": {
        "description": "Check that the sizes of the Gang and of the mutable distributed value match",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "checkGangMD",
        "normalized": "String-\u003eGang-\u003eMDist a b-\u003ec-\u003ec",
        "package": "dph-prim-par",
        "partial": "Gang MD",
        "signature": "String-\u003eGang-\u003eMDist a s-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:debugD",
      "description": {
        "fct-descr": "\u003cp\u003eShow all members of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#debugD",
        "fct-type": "function",
        "title": "debugD"
      },
      "index": {
        "description": "Show all members of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "debugD",
        "normalized": "Dist a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:deepSeqD",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
        "fct-type": "method",
        "title": "deepSeqD"
      },
      "index": {
        "description": "Ensure distributed value is fully evaluated",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "deepSeqD",
        "normalized": "a-\u003eb-\u003eb",
        "package": "dph-prim-par",
        "partial": "Seq",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:indexD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Dist a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
        "fct-type": "method",
        "title": "indexD"
      },
      "index": {
        "description": "Extract single element of an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "indexD",
        "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "String-\u003eDist a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:measureD",
      "description": {
        "fct-descr": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
        "fct-type": "method",
        "title": "measureD"
      },
      "index": {
        "description": "Show distributed value For debugging only",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "measureD",
        "normalized": "a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:newD",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a computation that can write its result to a mutable distributed value, \n   run the computation to generate an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (forall s.  MDist a s -\u003e ST s ()) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newD",
        "fct-type": "function",
        "title": "newD"
      },
      "index": {
        "description": "Given computation that can write its result to mutable distributed value run the computation to generate an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "newD",
        "normalized": "Gang-\u003e(a b MDist c d-\u003eST d())-\u003eDist c",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003e(forall s. MDist a s-\u003eST s())-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:newMD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e ST s (MDist a s)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
        "fct-type": "method",
        "title": "newMD"
      },
      "index": {
        "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "newMD",
        "normalized": "Gang-\u003eST a(MDist b a)",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "Gang-\u003eST s(MDist a s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:readMD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e ST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
        "fct-type": "method",
        "title": "readMD"
      },
      "index": {
        "description": "Extract an element from mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "readMD",
        "normalized": "MDist a b-\u003eInt-\u003eST b a",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:sizeD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
        "fct-type": "method",
        "title": "sizeD"
      },
      "index": {
        "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "sizeD",
        "normalized": "Dist a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:sizeMD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
        "fct-type": "method",
        "title": "sizeMD"
      },
      "index": {
        "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "sizeMD",
        "normalized": "MDist a b-\u003eInt",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:unsafeFreezeMD",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e ST s (Dist a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
        "fct-type": "method",
        "title": "unsafeFreezeMD"
      },
      "index": {
        "description": "Unsafely freeze mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "unsafeFreezeMD",
        "normalized": "MDist a b-\u003eST b(Dist a)",
        "package": "dph-prim-par",
        "partial": "Freeze MD",
        "signature": "MDist a s-\u003eST s(Dist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#v:writeMD",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
        "fct-type": "method",
        "title": "writeMD"
      },
      "index": {
        "description": "Write an element of mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DT",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DT",
        "name": "writeMD",
        "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistributed ST computations.\n\u003c/p\u003e\u003cp\u003eComputations of type \u003ccode\u003e\u003ca\u003eDistST\u003c/a\u003e\u003c/code\u003e are data-parallel computations which\n  are run on each thread of a gang. At the moment, they can only access the\n  element of a (possibly mutable) distributed value owned by the current\n  thread.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTODO:\u003c/em\u003e Add facilities for implementing parallel scans etc.\n\u003c/p\u003e\u003cp\u003eTODO: \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html",
        "fct-type": "module",
        "title": "DistST"
      },
      "index": {
        "description": "Distributed ST computations Computations of type DistST are data-parallel computations which are run on each thread of gang At the moment they can only access the element of possibly mutable distributed value owned by the current thread TODO Add facilities for implementing parallel scans etc TODO",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "DistST",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Dist ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#t:DistST",
      "description": {
        "fct-descr": "\u003cp\u003eData-parallel computations.\n   When applied to a thread gang, the computation implicitly knows the index\n   of the thread it's working on. Alternatively, if we know the thread index\n   then we can make a regular ST computation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#DistST",
        "fct-type": "data",
        "title": "DistST"
      },
      "index": {
        "description": "Data-parallel computations When applied to thread gang the computation implicitly knows the index of the thread it working on Alternatively if we know the thread index then we can make regular ST computation",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "DistST",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Dist ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:distST",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a data-parallel computation, yielding the distributed result.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "Comp -\u003e Gang -\u003e DistST s a -\u003e ST s (Dist a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#distST",
        "fct-type": "function",
        "title": "distST"
      },
      "index": {
        "description": "Execute data-parallel computation yielding the distributed result",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "distST",
        "normalized": "Comp-\u003eGang-\u003eDistST a b-\u003eST a(Dist b)",
        "package": "dph-prim-par",
        "partial": "ST",
        "signature": "Comp-\u003eGang-\u003eDistST s a-\u003eST s(Dist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:distST_",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a data-parallel computation on a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The same DistST comutation runs on each thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "Comp -\u003e Gang -\u003e DistST s () -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#distST_",
        "fct-type": "function",
        "title": "distST_"
      },
      "index": {
        "description": "Execute data-parallel computation on Gang The same DistST comutation runs on each thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "distST_",
        "normalized": "Comp-\u003eGang-\u003eDistST a()-\u003eST a()",
        "package": "dph-prim-par",
        "partial": "ST",
        "signature": "Comp-\u003eGang-\u003eDistST s()-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:mapDST",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e DistST s b) -\u003e Dist a -\u003e ST s (Dist b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#mapDST",
        "fct-type": "function",
        "title": "mapDST"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "mapDST",
        "normalized": "What-\u003eGang-\u003e(a-\u003eDistST b c)-\u003eDist a-\u003eST b(Dist c)",
        "package": "dph-prim-par",
        "partial": "DST",
        "signature": "What-\u003eGang-\u003e(a-\u003eDistST s b)-\u003eDist a-\u003eST s(Dist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:mapDST_",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e DistST s ()) -\u003e Dist a -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#mapDST_",
        "fct-type": "function",
        "title": "mapDST_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "mapDST_",
        "normalized": "What-\u003eGang-\u003e(a-\u003eDistST b())-\u003eDist a-\u003eST b()",
        "package": "dph-prim-par",
        "partial": "DST",
        "signature": "What-\u003eGang-\u003e(a-\u003eDistST s())-\u003eDist a-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:myD",
      "description": {
        "fct-descr": "\u003cp\u003eYields the \u003ccode\u003e\u003ca\u003eDist\u003c/a\u003e\u003c/code\u003e element owned by the current thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e DistST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#myD",
        "fct-type": "function",
        "title": "myD"
      },
      "index": {
        "description": "Yields the Dist element owned by the current thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "myD",
        "normalized": "Dist a-\u003eDistST b a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eDistST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:myIndex",
      "description": {
        "fct-descr": "\u003cp\u003eYields the index of the current thread within its gang.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "DistST s Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#myIndex",
        "fct-type": "function",
        "title": "myIndex"
      },
      "index": {
        "description": "Yields the index of the current thread within its gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "myIndex",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:readMyMD",
      "description": {
        "fct-descr": "\u003cp\u003eYields the \u003ccode\u003e\u003ca\u003eMDist\u003c/a\u003e\u003c/code\u003e element owned by the current thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e DistST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#readMyMD",
        "fct-type": "function",
        "title": "readMyMD"
      },
      "index": {
        "description": "Yields the MDist element owned by the current thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "readMyMD",
        "normalized": "MDist a b-\u003eDistST b a",
        "package": "dph-prim-par",
        "partial": "My MD",
        "signature": "MDist a s-\u003eDistST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:runDistST",
      "description": {
        "fct-descr": "\u003cp\u003eRun a data-parallel computation, yielding the distributed result.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "Comp -\u003e Gang -\u003e (forall s.  DistST s a) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#runDistST",
        "fct-type": "function",
        "title": "runDistST"
      },
      "index": {
        "description": "Run data-parallel computation yielding the distributed result",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "runDistST",
        "normalized": "Comp-\u003eGang-\u003e(a b DistST c d)-\u003eDist d",
        "package": "dph-prim-par",
        "partial": "Dist ST",
        "signature": "Comp-\u003eGang-\u003e(forall s. DistST s a)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:runDistST_seq",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (forall s.  DistST s a) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#runDistST_seq",
        "fct-type": "function",
        "title": "runDistST_seq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "runDistST_seq",
        "normalized": "Gang-\u003e(a b DistST c d)-\u003eDist d",
        "package": "dph-prim-par",
        "partial": "Dist ST",
        "signature": "Gang-\u003e(forall s. DistST s a)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:stToDistST",
      "description": {
        "fct-descr": "\u003cp\u003eLifts an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e computation into the \u003ccode\u003e\u003ca\u003eDistST\u003c/a\u003e\u003c/code\u003e monad.\n   The lifted computation should be data parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "ST s a -\u003e DistST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#stToDistST",
        "fct-type": "function",
        "title": "stToDistST"
      },
      "index": {
        "description": "Lifts an ST computation into the DistST monad The lifted computation should be data parallel",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "stToDistST",
        "normalized": "ST a b-\u003eDistST a b",
        "package": "dph-prim-par",
        "partial": "To Dist ST",
        "signature": "ST s a-\u003eDistST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:writeMyMD",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the \u003ccode\u003e\u003ca\u003eMDist\u003c/a\u003e\u003c/code\u003e element owned by the current thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e a -\u003e DistST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#writeMyMD",
        "fct-type": "function",
        "title": "writeMyMD"
      },
      "index": {
        "description": "Writes the MDist element owned by the current thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "writeMyMD",
        "normalized": "MDist a b-\u003ea-\u003eDistST b()",
        "package": "dph-prim-par",
        "partial": "My MD",
        "signature": "MDist a s-\u003ea-\u003eDistST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:zipWithDST",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e b -\u003e DistST s c) -\u003e Dist a -\u003e Dist b -\u003e ST s (Dist c)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#zipWithDST",
        "fct-type": "function",
        "title": "zipWithDST"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "zipWithDST",
        "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST c d)-\u003eDist a-\u003eDist b-\u003eST c(Dist d)",
        "package": "dph-prim-par",
        "partial": "With DST",
        "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST s c)-\u003eDist a-\u003eDist b-\u003eST s(Dist c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#v:zipWithDST_",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e b -\u003e DistST s ()) -\u003e Dist a -\u003e Dist b -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DistST.html#zipWithDST_",
        "fct-type": "function",
        "title": "zipWithDST_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive DistST",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.DistST",
        "name": "zipWithDST_",
        "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST c())-\u003eDist a-\u003eDist b-\u003eST c()",
        "package": "dph-prim-par",
        "partial": "With DST",
        "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003eDistST s())-\u003eDist a-\u003eDist b-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGang primitives.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html",
        "fct-type": "module",
        "title": "Gang"
      },
      "index": {
        "description": "Gang primitives",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "Gang",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#t:Gang",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads which execute arbitrary work requests.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Gang",
        "fct-type": "data",
        "title": "Gang"
      },
      "index": {
        "description": "Gang is group of threads which execute arbitrary work requests",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "Gang",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#t:Workload",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Workload",
        "fct-type": "data",
        "title": "Workload"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "Workload",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Workload",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:WorkCopy",
      "description": {
        "fct-descr": "\u003cp\u003eMemory bound copy-like workload, \n   of the given number of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "WorkCopy Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Workload",
        "fct-type": "function",
        "title": "WorkCopy"
      },
      "index": {
        "description": "Memory bound copy-like workload of the given number of bytes",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "WorkCopy",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Work Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:WorkUnknown",
      "description": {
        "fct-descr": "\u003cp\u003eUnknown workload. Just run it in parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "WorkUnknown",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Workload",
        "fct-type": "function",
        "title": "WorkUnknown"
      },
      "index": {
        "description": "Unknown workload Just run it in parallel",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "WorkUnknown",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Work Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:forkGang",
      "description": {
        "fct-descr": "\u003cp\u003eFork a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e with the given number of threads (at least 1).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e IO Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#forkGang",
        "fct-type": "function",
        "title": "forkGang"
      },
      "index": {
        "description": "Fork Gang with the given number of threads at least",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "forkGang",
        "normalized": "Int-\u003eIO Gang",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "Int-\u003eIO Gang"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangIO",
      "description": {
        "fct-descr": "\u003cp\u003eIssue work requests for the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and wait until they have been executed.\n   If the gang is already busy then just run the action in the requesting\n   thread. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e String -\u003e Workload -\u003e (Int -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangIO",
        "fct-type": "function",
        "title": "gangIO"
      },
      "index": {
        "description": "Issue work requests for the Gang and wait until they have been executed If the gang is already busy then just run the action in the requesting thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "gangIO",
        "normalized": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eIO())-\u003eIO()",
        "package": "dph-prim-par",
        "partial": "IO",
        "signature": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangST",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egangIO\u003c/a\u003e\u003c/code\u003e but in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e String -\u003e Workload -\u003e (Int -\u003e ST s ()) -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangST",
        "fct-type": "function",
        "title": "gangST"
      },
      "index": {
        "description": "Same as gangIO but in the ST monad",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "gangST",
        "normalized": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eST a())-\u003eST a()",
        "package": "dph-prim-par",
        "partial": "ST",
        "signature": "Gang-\u003eString-\u003eWorkload-\u003e(Int-\u003eST s())-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:gangSize",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of threads in the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangSize",
        "fct-type": "function",
        "title": "gangSize"
      },
      "index": {
        "description": "Yield the number of threads in the Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "gangSize",
        "normalized": "Gang-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Size",
        "signature": "Gang-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#v:seqGang",
      "description": {
        "fct-descr": "\u003cp\u003eA sequential gang has no threads.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#seqGang",
        "fct-type": "function",
        "title": "seqGang"
      },
      "index": {
        "description": "sequential gang has no threads",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Gang",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Gang",
        "name": "seqGang",
        "normalized": "Gang-\u003eGang",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "Gang-\u003eGang"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard combinators for distributed types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html",
        "fct-type": "module",
        "title": "Operators"
      },
      "index": {
        "description": "Standard combinators for distributed types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "name": "Operators",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Operators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:foldD",
      "description": {
        "fct-descr": "\u003cp\u003eFold all the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e Dist a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#foldD",
        "fct-type": "function",
        "title": "foldD"
      },
      "index": {
        "description": "Fold all the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "name": "foldD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:generateD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a distributed value, given a function to create the instance\n   for each thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (Int -\u003e a)-\u003e Dist a",
        "fct-type": "function",
        "title": "generateD"
      },
      "index": {
        "description": "Create distributed value given function to create the instance for each thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "name": "generateD",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:generateD_cheap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a distributed value, but do it sequentially.\n\u003c/p\u003e\u003cp\u003eThis function is used when we want to operate on a distributed value, but\n   there isn't much data involved. For example, if we want to distribute \n   a single integer to each thread, then there's no need to fire up the \n   gang for this.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (Int -\u003e a)-\u003e Dist a",
        "fct-type": "function",
        "title": "generateD_cheap"
      },
      "index": {
        "description": "Create distributed value but do it sequentially This function is used when we want to operate on distributed value but there isn much data involved For example if we want to distribute single integer to each thread then there no need to fire up the gang for this",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "name": "generateD_cheap",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:imapD-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function across all elements of a distributed value.\n   The worker function also gets the current thread index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (Int -\u003e a -\u003e b) -\u003e Dist a -\u003e Dist b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#imapD%27",
        "fct-type": "function",
        "title": "imapD'"
      },
      "index": {
        "description": "Map function across all elements of distributed value The worker function also gets the current thread index",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "name": "imapD'",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "D'",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#v:scanD",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix sum of the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist a -\u003e (Dist a, a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#scanD",
        "fct-type": "function",
        "title": "scanD"
      },
      "index": {
        "description": "Prefix sum of the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive Operators",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive.Operators",
        "name": "scanD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard combinators for distributed types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive.html",
        "fct-type": "module",
        "title": "Primitive"
      },
      "index": {
        "description": "Standard combinators for distributed types",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "Primitive",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#t:DT",
      "description": {
        "fct-descr": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
        "fct-type": "class",
        "title": "DT"
      },
      "index": {
        "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#t:Gang",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads which execute arbitrary work requests.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Gang",
        "fct-type": "data",
        "title": "Gang"
      },
      "index": {
        "description": "Gang is group of threads which execute arbitrary work requests",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "Gang",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:checkGangD",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that the sizes of the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and of the distributed value match.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Gang -\u003e Dist a -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#checkGangD",
        "fct-type": "function",
        "title": "checkGangD"
      },
      "index": {
        "description": "Check that the sizes of the Gang and of the distributed value match",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "checkGangD",
        "normalized": "String-\u003eGang-\u003eDist a-\u003eb-\u003eb",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "String-\u003eGang-\u003eDist a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:debugD",
      "description": {
        "fct-descr": "\u003cp\u003eShow all members of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#debugD",
        "fct-type": "function",
        "title": "debugD"
      },
      "index": {
        "description": "Show all members of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "debugD",
        "normalized": "Dist a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:deepSeqD",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
        "fct-type": "method",
        "title": "deepSeqD"
      },
      "index": {
        "description": "Ensure distributed value is fully evaluated",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "deepSeqD",
        "normalized": "a-\u003eb-\u003eb",
        "package": "dph-prim-par",
        "partial": "Seq",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:foldD",
      "description": {
        "fct-descr": "\u003cp\u003eFold all the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e Dist a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#foldD",
        "fct-type": "function",
        "title": "foldD"
      },
      "index": {
        "description": "Fold all the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "foldD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:forkGang",
      "description": {
        "fct-descr": "\u003cp\u003eFork a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e with the given number of threads (at least 1).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e IO Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#forkGang",
        "fct-type": "function",
        "title": "forkGang"
      },
      "index": {
        "description": "Fork Gang with the given number of threads at least",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "forkGang",
        "normalized": "Int-\u003eIO Gang",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "Int-\u003eIO Gang"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:gangSize",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of threads in the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangSize",
        "fct-type": "function",
        "title": "gangSize"
      },
      "index": {
        "description": "Yield the number of threads in the Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "gangSize",
        "normalized": "Gang-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Size",
        "signature": "Gang-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:generateD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a distributed value, given a function to create the instance\n   for each thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (Int -\u003e a)-\u003e Dist a",
        "fct-type": "function",
        "title": "generateD"
      },
      "index": {
        "description": "Create distributed value given function to create the instance for each thread",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "generateD",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:generateD_cheap",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a distributed value, but do it sequentially.\n\u003c/p\u003e\u003cp\u003eThis function is used when we want to operate on a distributed value, but\n   there isn't much data involved. For example, if we want to distribute \n   a single integer to each thread, then there's no need to fire up the \n   gang for this.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (Int -\u003e a)-\u003e Dist a",
        "fct-type": "function",
        "title": "generateD_cheap"
      },
      "index": {
        "description": "Create distributed value but do it sequentially This function is used when we want to operate on distributed value but there isn much data involved For example if we want to distribute single integer to each thread then there no need to fire up the gang for this",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "generateD_cheap",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:imapD-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function across all elements of a distributed value.\n   The worker function also gets the current thread index.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (Int -\u003e a -\u003e b) -\u003e Dist a -\u003e Dist b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#imapD%27",
        "fct-type": "function",
        "title": "imapD'"
      },
      "index": {
        "description": "Map function across all elements of distributed value The worker function also gets the current thread index",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "imapD'",
        "normalized": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "D'",
        "signature": "What-\u003eGang-\u003e(Int-\u003ea-\u003eb)-\u003eDist a-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:indexD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Dist a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
        "fct-type": "method",
        "title": "indexD"
      },
      "index": {
        "description": "Extract single element of an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "indexD",
        "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "String-\u003eDist a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:measureD",
      "description": {
        "fct-descr": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
        "fct-type": "method",
        "title": "measureD"
      },
      "index": {
        "description": "Show distributed value For debugging only",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "measureD",
        "normalized": "a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:newD",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a computation that can write its result to a mutable distributed value, \n   run the computation to generate an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (forall s.  MDist a s -\u003e ST s ()) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newD",
        "fct-type": "function",
        "title": "newD"
      },
      "index": {
        "description": "Given computation that can write its result to mutable distributed value run the computation to generate an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "newD",
        "normalized": "Gang-\u003e(a b MDist c d-\u003eST d())-\u003eDist c",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003e(forall s. MDist a s-\u003eST s())-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:newMD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e ST s (MDist a s)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
        "fct-type": "method",
        "title": "newMD"
      },
      "index": {
        "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "newMD",
        "normalized": "Gang-\u003eST a(MDist b a)",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "Gang-\u003eST s(MDist a s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:readMD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e ST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
        "fct-type": "method",
        "title": "readMD"
      },
      "index": {
        "description": "Extract an element from mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "readMD",
        "normalized": "MDist a b-\u003eInt-\u003eST b a",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:scanD",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix sum of the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist a -\u003e (Dist a, a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#scanD",
        "fct-type": "function",
        "title": "scanD"
      },
      "index": {
        "description": "Prefix sum of the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "scanD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:seqGang",
      "description": {
        "fct-descr": "\u003cp\u003eA sequential gang has no threads.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#seqGang",
        "fct-type": "function",
        "title": "seqGang"
      },
      "index": {
        "description": "sequential gang has no threads",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "seqGang",
        "normalized": "Gang-\u003eGang",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "Gang-\u003eGang"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:sizeD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
        "fct-type": "method",
        "title": "sizeD"
      },
      "index": {
        "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "sizeD",
        "normalized": "Dist a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:sizeMD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
        "fct-type": "method",
        "title": "sizeMD"
      },
      "index": {
        "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "sizeMD",
        "normalized": "MDist a b-\u003eInt",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:theGang",
      "description": {
        "fct-descr": "\u003cp\u003eDPH programs use this single, shared gang of threads.\n   The gang exists at top level, and is initialised at program start.\n\u003c/p\u003e\u003cp\u003eThe vectoriser guarantees that the gang is only used by a single\n   computation at a time. This is true because the program produced\n   by the vector only uses flat parallelism, so parallel computations\n   don't invoke further parallel computations. If the vectorised program\n   tries to use nested parallelism then there is a bug in the vectoriser,\n   and the code will run sequentially.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#theGang",
        "fct-type": "function",
        "title": "theGang"
      },
      "index": {
        "description": "DPH programs use this single shared gang of threads The gang exists at top level and is initialised at program start The vectoriser guarantees that the gang is only used by single computation at time This is true because the program produced by the vector only uses flat parallelism so parallel computations don invoke further parallel computations If the vectorised program tries to use nested parallelism then there is bug in the vectoriser and the code will run sequentially",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "theGang",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:unsafeFreezeMD",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e ST s (Dist a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
        "fct-type": "method",
        "title": "unsafeFreezeMD"
      },
      "index": {
        "description": "Unsafely freeze mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "unsafeFreezeMD",
        "normalized": "MDist a b-\u003eST b(Dist a)",
        "package": "dph-prim-par",
        "partial": "Freeze MD",
        "signature": "MDist a s-\u003eST s(Dist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#v:writeMD",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
        "fct-type": "method",
        "title": "writeMD"
      },
      "index": {
        "description": "Write an element of mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed Primitive",
        "module": "Data.Array.Parallel.Unlifted.Distributed.Primitive",
        "name": "writeMD",
        "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html",
        "fct-type": "module",
        "title": "What"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "What",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "What",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#t:Comp",
      "description": {
        "fct-descr": "\u003cp\u003eWhat distributed computation we are doing.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
        "fct-type": "data",
        "title": "Comp"
      },
      "index": {
        "description": "What distributed computation we are doing",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "Comp",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Comp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#t:What",
      "description": {
        "fct-descr": "\u003cp\u003eWhat sort of thing is being computed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "data",
        "title": "What"
      },
      "index": {
        "description": "What sort of thing is being computed",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "What",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "What",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CDist",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "CDist What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
        "fct-type": "function",
        "title": "CDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "CDist",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "CDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CFold",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "CFold What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
        "fct-type": "function",
        "title": "CFold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "CFold",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "CFold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CGen",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "CGen Bool What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
        "fct-type": "function",
        "title": "CGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "CGen",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "CGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CMap",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "CMap What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
        "fct-type": "function",
        "title": "CMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "CMap",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "CMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:CScan",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "CScan What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#Comp",
        "fct-type": "function",
        "title": "CScan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "CScan",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "CScan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WBpermute",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WBpermute",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WBpermute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WBpermute",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WBpermute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WFMapGen",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WFMapGen What What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WFMapGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WFMapGen",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WFMap Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WFMapMap",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WFMapMap What What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WFMapMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WFMapMap",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WFMap Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WFZipMap",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WFZipMap What What",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WFZipMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WFZipMap",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WFZip Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WJoinCopy",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WJoinCopy Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WJoinCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WJoinCopy",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WJoin Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WLength",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WLength",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WLength",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WLength",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WLengthIdx",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WLengthIdx",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WLengthIdx"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WLengthIdx",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WLength Idx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WScalar",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WScalar",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WScalar",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WScalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WSlice",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WSlice",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WSlice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WSlice",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WSlice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:WZip",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "WZip",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "WZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "WZip",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "WZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed-What.html#v:What",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "fct-package": "dph-prim-par",
        "fct-signature": "What String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-What.html#What",
        "fct-type": "function",
        "title": "What"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed What",
        "module": "Data.Array.Parallel.Unlifted.Distributed.What",
        "name": "What",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "What",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDistributed types and operations.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an internal API and shouldn't need to be used directly.\n     Client programs should use \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed.html",
        "fct-type": "module",
        "title": "Distributed"
      },
      "index": {
        "description": "Distributed types and operations This is an internal API and shouldn need to be used directly Client programs should use Data.Array.Parallel.Unlifted",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "Distributed",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Distributed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#t:DT",
      "description": {
        "fct-descr": "\u003cp\u003eClass of distributable types. Instances of \u003ccode\u003e\u003ca\u003eDT\u003c/a\u003e\u003c/code\u003e can be\n   distributed across all workers of a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e. \n   All such types must be hyperstrict as we do not want to pass thunks\n   into distributed computations.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#DT",
        "fct-type": "class",
        "title": "DT"
      },
      "index": {
        "description": "Class of distributable types Instances of DT can be distributed across all workers of Gang All such types must be hyperstrict as we do not want to pass thunks into distributed computations",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "DT",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "DT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#t:Distribution",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a phantom parameter used to record whether a distributed value\n   is balanced evenly among the threads. It's used to signal this property\n   between RULES, but the actual value is never used.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#Distribution",
        "fct-type": "data",
        "title": "Distribution"
      },
      "index": {
        "description": "This is phantom parameter used to record whether distributed value is balanced evenly among the threads It used to signal this property between RULES but the actual value is never used",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "Distribution",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Distribution",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#t:Gang",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e is a group of threads which execute arbitrary work requests.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#Gang",
        "fct-type": "data",
        "title": "Gang"
      },
      "index": {
        "description": "Gang is group of threads which execute arbitrary work requests",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "Gang",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:andD",
      "description": {
        "fct-descr": "\u003cp\u003eAND together all instances of a distributed \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#andD",
        "fct-type": "function",
        "title": "andD"
      },
      "index": {
        "description": "AND together all instances of distributed Bool",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "andD",
        "normalized": "Gang-\u003eDist Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:atomicUpdateD",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e Dist (Vector (Int, a)) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#atomicUpdateD",
        "fct-type": "function",
        "title": "atomicUpdateD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "atomicUpdateD",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eDist(Vector(Int,a))-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "Update",
        "signature": "Gang-\u003eDist(Vector a)-\u003eDist(Vector(Int,a))-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:balanced",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Distribution",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#balanced",
        "fct-type": "function",
        "title": "balanced"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "balanced",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:bpermuteD",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Vector a -\u003e Dist (Vector Int) -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#bpermuteD",
        "fct-type": "function",
        "title": "bpermuteD"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "bpermuteD",
        "normalized": "Gang-\u003eVector a-\u003eDist(Vector Int)-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eVector a-\u003eDist(Vector Int)-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:carryD",
      "description": {
        "fct-descr": "\u003cp\u003eSelectively combine the last elements of some chunks with the\n   first elements of others.\n\u003c/p\u003e\u003cp\u003eNOTE: This runs sequentially and should only be used for testing purposes.\n\u003c/p\u003e\u003cpre\u003e\n pprp $ splitD theGang unbalanced $ fromList [80, 10, 20, 40, 50, 10 :: Int]\n DVector lengths: [2,2,1,1]\n         chunks:  [[80,10],[20,40],[50],[10]]\n\npprp $ fst \n       $ carryD theGang (+) 0 \n          (mkDPrim $ fromList [True, False, True, False]) \n          (splitD theGang unbalanced $ fromList [80, 10, 20, 40, 50, 10 :: Int])\n\nDVector lengths: [1,2,0,1]\n          chunks: [[80],[30,40],[],[60]]\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist Bool -\u003e Dist (Vector a) -\u003e (Dist (Vector a), a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#carryD",
        "fct-type": "function",
        "title": "carryD"
      },
      "index": {
        "description": "Selectively combine the last elements of some chunks with the first elements of others NOTE This runs sequentially and should only be used for testing purposes pprp splitD theGang unbalanced fromList Int DVector lengths chunks pprp fst carryD theGang mkDPrim fromList True False True False splitD theGang unbalanced fromList Int DVector lengths chunks",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "carryD",
        "normalized": "Gang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist Bool-\u003eDist(Vector a)-\u003e(Dist(Vector a),a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist Bool-\u003eDist(Vector a)-\u003e(Dist(Vector a),a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:debugD",
      "description": {
        "fct-descr": "\u003cp\u003eShow all members of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#debugD",
        "fct-type": "function",
        "title": "debugD"
      },
      "index": {
        "description": "Show all members of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "debugD",
        "normalized": "Dist a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:deepSeqD",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure a distributed value is fully evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e b -\u003e b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#deepSeqD",
        "fct-type": "method",
        "title": "deepSeqD"
      },
      "index": {
        "description": "Ensure distributed value is fully evaluated",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "deepSeqD",
        "normalized": "a-\u003eb-\u003eb",
        "package": "dph-prim-par",
        "partial": "Seq",
        "signature": "a-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:eqD",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether to distributed values are equal. \n   This requires a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and hence can't be defined in terms of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e Dist a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#eqD",
        "fct-type": "function",
        "title": "eqD"
      },
      "index": {
        "description": "Test whether to distributed values are equal This requires Gang and hence can be defined in terms of Eq",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "eqD",
        "normalized": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003eDist a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:foldD",
      "description": {
        "fct-descr": "\u003cp\u003eFold all the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e Dist a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#foldD",
        "fct-type": "function",
        "title": "foldD"
      },
      "index": {
        "description": "Fold all the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "foldD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003eDist a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:forkGang",
      "description": {
        "fct-descr": "\u003cp\u003eFork a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e with the given number of threads (at least 1).\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e IO Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#forkGang",
        "fct-type": "function",
        "title": "forkGang"
      },
      "index": {
        "description": "Fork Gang with the given number of threads at least",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "forkGang",
        "normalized": "Int-\u003eIO Gang",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": "Int-\u003eIO Gang"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:fromD",
      "description": {
        "fct-descr": "\u003cp\u003eYield all elements of a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, don't use in production code.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e [a]",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#fromD",
        "fct-type": "function",
        "title": "fromD"
      },
      "index": {
        "description": "Yield all elements of distributed value For debugging only don use in production code",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "fromD",
        "normalized": "Gang-\u003eDist a-\u003e[a]",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:fstD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first elements of a distributed pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#fstD",
        "fct-type": "function",
        "title": "fstD"
      },
      "index": {
        "description": "Extract the first elements of distributed pair",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "fstD",
        "normalized": "Dist(a,b)-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:gangSize",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of threads in the \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Gang.html#gangSize",
        "fct-type": "function",
        "title": "gangSize"
      },
      "index": {
        "description": "Yield the number of threads in the Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "gangSize",
        "normalized": "Gang-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Size",
        "signature": "Gang-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:indexD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a single element of an immutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Dist a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#indexD",
        "fct-type": "method",
        "title": "indexD"
      },
      "index": {
        "description": "Extract single element of an immutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "indexD",
        "normalized": "String-\u003eDist a-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "String-\u003eDist a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:joinD",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a distributed array.\n   Join sums up the array lengths of each chunk, allocates a new result array, \n   and copies each chunk into the result.\n\u003c/p\u003e\u003cp\u003eNOTE: This is defined in terms of joinD_impl to avoid introducing loops\n         through RULES. Without it, splitJoinD would be a loop breaker.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Distribution -\u003e Dist (Vector a) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinD",
        "fct-type": "function",
        "title": "joinD"
      },
      "index": {
        "description": "Join distributed array Join sums up the array lengths of each chunk allocates new result array and copies each chunk into the result NOTE This is defined in terms of joinD impl to avoid introducing loops through RULES Without it splitJoinD would be loop breaker",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "joinD",
        "normalized": "Gang-\u003eDistribution-\u003eDist(Vector a)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDistribution-\u003eDist(Vector a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:joinDM",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a distributed array, yielding a mutable global array\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e ST s (MVector s a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinDM",
        "fct-type": "function",
        "title": "joinDM"
      },
      "index": {
        "description": "Join distributed array yielding mutable global array",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "joinDM",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eST b(MVector b a)",
        "package": "dph-prim-par",
        "partial": "DM",
        "signature": "Gang-\u003eDist(Vector a)-\u003eST s(MVector s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:joinLengthD",
      "description": {
        "fct-descr": "\u003cp\u003eO(threads).\n   Get the overall length of a distributed array.\n   This is implemented by reading the chunk length from each thread, \n   and summing them up.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#joinLengthD",
        "fct-type": "function",
        "title": "joinLengthD"
      },
      "index": {
        "description": "threads Get the overall length of distributed array This is implemented by reading the chunk length from each thread and summing them up",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "joinLengthD",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Length",
        "signature": "Gang-\u003eDist(Vector a)-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:lengthD",
      "description": {
        "fct-descr": "\u003cp\u003eYield the distributed length of a distributed array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (Vector a) -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Vector.html#lengthD",
        "fct-type": "function",
        "title": "lengthD"
      },
      "index": {
        "description": "Yield the distributed length of distributed array",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "lengthD",
        "normalized": "Dist(Vector a)-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(Vector a)-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:mapD",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function to every instance of a distributed value.\n\u003c/p\u003e\u003cp\u003eThis applies the function to every thread, but not every value held\n   by the thread. If you want that then use something like:\n\u003c/p\u003e\u003cpre\u003emapD theGang (V.map (+ 1)) :: Dist (Vector Int) -\u003e Dist (Vector Int)\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (a -\u003e b)-\u003e Dist a-\u003e Dist b",
        "fct-type": "function",
        "title": "mapD"
      },
      "index": {
        "description": "Map function to every instance of distributed value This applies the function to every thread but not every value held by the thread If you want that then use something like mapD theGang V.map Dist Vector Int Dist Vector Int",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "mapD",
        "normalized": "What-\u003eGang-\u003e(a-\u003eb)-\u003eDist a-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003eb)-\u003eDist a-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:measureD",
      "description": {
        "fct-descr": "\u003cp\u003eShow a distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#measureD",
        "fct-type": "method",
        "title": "measureD"
      },
      "index": {
        "description": "Show distributed value For debugging only",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "measureD",
        "normalized": "a-\u003eString",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:neqD",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether to distributed values are not equal.\n   This requires a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e and hence can't be defined in terms of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e Dist a -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#neqD",
        "fct-type": "function",
        "title": "neqD"
      },
      "index": {
        "description": "Test whether to distributed values are not equal This requires Gang and hence can be defined in terms of Eq",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "neqD",
        "normalized": "Gang-\u003eDist a-\u003eDist a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003eDist a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:newMD",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unitialised distributed value for the given \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   The gang is used (only) to know how many elements are needed\n   in the distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e ST s (MDist a s)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#newMD",
        "fct-type": "method",
        "title": "newMD"
      },
      "index": {
        "description": "Create an unitialised distributed value for the given Gang The gang is used only to know how many elements are needed in the distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "newMD",
        "normalized": "Gang-\u003eST a(MDist b a)",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "Gang-\u003eST s(MDist a s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:orD",
      "description": {
        "fct-descr": "\u003cp\u003eOR together all instances of a distributed \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Bool.html#orD",
        "fct-type": "function",
        "title": "orD"
      },
      "index": {
        "description": "OR together all instances of distributed Bool",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "orD",
        "normalized": "Gang-\u003eDist Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:permuteD",
      "description": {
        "fct-descr": "\u003cp\u003ePermute for distributed arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist (Vector a) -\u003e Dist (Vector Int) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#permuteD",
        "fct-type": "function",
        "title": "permuteD"
      },
      "index": {
        "description": "Permute for distributed arrays",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "permuteD",
        "normalized": "Gang-\u003eDist(Vector a)-\u003eDist(Vector Int)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist(Vector a)-\u003eDist(Vector Int)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:readMD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract an element from a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e ST s a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#readMD",
        "fct-type": "method",
        "title": "readMD"
      },
      "index": {
        "description": "Extract an element from mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "readMD",
        "normalized": "MDist a b-\u003eInt-\u003eST b a",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:scalarD",
      "description": {
        "fct-descr": "\u003cp\u003eDistribute a scalar.\n   Each thread gets its own copy of the same value.\n   Example:  scalarD theGangN4 10 = [10, 10, 10, 10] \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e a -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#scalarD",
        "fct-type": "function",
        "title": "scalarD"
      },
      "index": {
        "description": "Distribute scalar Each thread gets its own copy of the same value Example scalarD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "scalarD",
        "normalized": "Gang-\u003ea-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003ea-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:scanD",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix sum of the instances of a distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "What -\u003e Gang -\u003e (a -\u003e a -\u003e a) -\u003e a -\u003e Dist a -\u003e (Dist a, a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-Operators.html#scanD",
        "fct-type": "function",
        "title": "scanD"
      },
      "index": {
        "description": "Prefix sum of the instances of distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "scanD",
        "normalized": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "What-\u003eGang-\u003e(a-\u003ea-\u003ea)-\u003ea-\u003eDist a-\u003e(Dist a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sizeD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeD",
        "fct-type": "method",
        "title": "sizeD"
      },
      "index": {
        "description": "Number of elements in the distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "sizeD",
        "normalized": "Dist a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sizeMD",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements in the mutable distributed value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, as code shouldn't be sensitive to the return value.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#sizeMD",
        "fct-type": "method",
        "title": "sizeMD"
      },
      "index": {
        "description": "Number of elements in the mutable distributed value For debugging only as code shouldn be sensitive to the return value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "sizeMD",
        "normalized": "MDist a b-\u003eInt",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sndD",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second elements of a distributed pair.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e Dist b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#sndD",
        "fct-type": "function",
        "title": "sndD"
      },
      "index": {
        "description": "Extract the second elements of distributed pair",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "sndD",
        "normalized": "Dist(a,b)-\u003eDist b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003eDist b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitAsD",
      "description": {
        "fct-descr": "\u003cp\u003eDistribute an array over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e such that each threads gets the given\n   number of elements.\n\u003c/p\u003e\u003cpre\u003esplitAsD theGangN4 (splitLenD theGangN4 10) [1 2 3 4 5 6 7 8 9 0]\n      = [[1 2 3] [4 5 6] [7 8] [9 0]]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist Int -\u003e Vector a -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitAsD",
        "fct-type": "function",
        "title": "splitAsD"
      },
      "index": {
        "description": "Distribute an array over Gang such that each threads gets the given number of elements splitAsD theGangN4 splitLenD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "splitAsD",
        "normalized": "Gang-\u003eDist Int-\u003eVector a-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "As",
        "signature": "Gang-\u003eDist Int-\u003eVector a-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitD",
      "description": {
        "fct-descr": "\u003cp\u003eDistribute an array over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNOTE: This is defined in terms of splitD_impl to avoid introducing loops\n         through RULES. Without it, splitJoinD would be a loop breaker.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Distribution -\u003e Vector a -\u003e Dist (Vector a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitD",
        "fct-type": "function",
        "title": "splitD"
      },
      "index": {
        "description": "Distribute an array over Gang NOTE This is defined in terms of splitD impl to avoid introducing loops through RULES Without it splitJoinD would be loop breaker",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "splitD",
        "normalized": "Gang-\u003eDistribution-\u003eVector a-\u003eDist(Vector a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDistribution-\u003eVector a-\u003eDist(Vector a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitJoinD",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a vector over a gang, run a distributed computation, then\n   join the pieces together again.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e (Dist (Vector a) -\u003e Dist (Vector b)) -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitJoinD",
        "fct-type": "function",
        "title": "splitJoinD"
      },
      "index": {
        "description": "Split vector over gang run distributed computation then join the pieces together again",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "splitJoinD",
        "normalized": "Gang-\u003e(Dist(Vector a)-\u003eDist(Vector b))-\u003eVector a-\u003eVector b",
        "package": "dph-prim-par",
        "partial": "Join",
        "signature": "Gang-\u003e(Dist(Vector a)-\u003eDist(Vector b))-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitLenD",
      "description": {
        "fct-descr": "\u003cp\u003eO(threads).\n   Distribute an array length over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   Each thread holds the number of elements it's reponsible for.\n   If the array length doesn't split evenly among the threads then the first\n   threads get a few more elements.\n\u003c/p\u003e\u003cpre\u003esplitLenD theGangN4 511\n      = [128,128,128,127]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int -\u003e Dist Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitLenD",
        "fct-type": "function",
        "title": "splitLenD"
      },
      "index": {
        "description": "threads Distribute an array length over Gang Each thread holds the number of elements it reponsible for If the array length doesn split evenly among the threads then the first threads get few more elements splitLenD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "splitLenD",
        "normalized": "Gang-\u003eInt-\u003eDist Int",
        "package": "dph-prim-par",
        "partial": "Len",
        "signature": "Gang-\u003eInt-\u003eDist Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:splitLenIdxD",
      "description": {
        "fct-descr": "\u003cp\u003eO(threads).\n   Distribute an array length over a \u003ccode\u003e\u003ca\u003eGang\u003c/a\u003e\u003c/code\u003e.\n   Each thread holds the number of elements it's responsible for, \n   and the index of the start of its chunk.\n\u003c/p\u003e\u003cpre\u003esplitLenIdxD theGangN4 511 \n      = [(128,0),(128,128),(128,256),(127,384)]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Int -\u003e Dist (Int, Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#splitLenIdxD",
        "fct-type": "function",
        "title": "splitLenIdxD"
      },
      "index": {
        "description": "threads Distribute an array length over Gang Each thread holds the number of elements it responsible for and the index of the start of its chunk splitLenIdxD theGangN4",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "splitLenIdxD",
        "normalized": "Gang-\u003eInt-\u003eDist(Int,Int)",
        "package": "dph-prim-par",
        "partial": "Len Idx",
        "signature": "Gang-\u003eInt-\u003eDist(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:sumD",
      "description": {
        "fct-descr": "\u003cp\u003eSum all instances of a distributed number.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e Dist a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Scalar.html#sumD",
        "fct-type": "function",
        "title": "sumD"
      },
      "index": {
        "description": "Sum all instances of distributed number",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "sumD",
        "normalized": "Gang-\u003eDist a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003eDist a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:theGang",
      "description": {
        "fct-descr": "\u003cp\u003eDPH programs use this single, shared gang of threads.\n   The gang exists at top level, and is initialised at program start.\n\u003c/p\u003e\u003cp\u003eThe vectoriser guarantees that the gang is only used by a single\n   computation at a time. This is true because the program produced\n   by the vector only uses flat parallelism, so parallel computations\n   don't invoke further parallel computations. If the vectorised program\n   tries to use nested parallelism then there is a bug in the vectoriser,\n   and the code will run sequentially.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive.html#theGang",
        "fct-type": "function",
        "title": "theGang"
      },
      "index": {
        "description": "DPH programs use this single shared gang of threads The gang exists at top level and is initialised at program start The vectoriser guarantees that the gang is only used by single computation at time This is true because the program produced by the vector only uses flat parallelism so parallel computations don invoke further parallel computations If the vectorised program tries to use nested parallelism then there is bug in the vectoriser and the code will run sequentially",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "theGang",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Gang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:toD",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a distributed value from the first \u003ccode\u003ep\u003c/code\u003e elements of a list.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For debugging only, don't use in production code.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Gang -\u003e [a] -\u003e Dist a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Basics.html#toD",
        "fct-type": "function",
        "title": "toD"
      },
      "index": {
        "description": "Generate distributed value from the first elements of list For debugging only don use in production code",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "toD",
        "normalized": "Gang-\u003e[a]-\u003eDist a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Gang-\u003e[a]-\u003eDist a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:unbalanced",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Distribution",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Arrays.html#unbalanced",
        "fct-type": "function",
        "title": "unbalanced"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "unbalanced",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:unsafeFreezeMD",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafely freeze a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e ST s (Dist a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#unsafeFreezeMD",
        "fct-type": "method",
        "title": "unsafeFreezeMD"
      },
      "index": {
        "description": "Unsafely freeze mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "unsafeFreezeMD",
        "normalized": "MDist a b-\u003eST b(Dist a)",
        "package": "dph-prim-par",
        "partial": "Freeze MD",
        "signature": "MDist a s-\u003eST s(Dist a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:unzipD",
      "description": {
        "fct-descr": "\u003cp\u003eUnpairing of distributed values.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist (a, b) -\u003e (Dist a, Dist b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#unzipD",
        "fct-type": "function",
        "title": "unzipD"
      },
      "index": {
        "description": "Unpairing of distributed values",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "unzipD",
        "normalized": "Dist(a,b)-\u003e(Dist a,Dist b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist(a,b)-\u003e(Dist a,Dist b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:writeMD",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an element of a mutable distributed value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "MDist a s -\u003e Int -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Primitive-DT.html#writeMD",
        "fct-type": "method",
        "title": "writeMD"
      },
      "index": {
        "description": "Write an element of mutable distributed value",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "writeMD",
        "normalized": "MDist a b-\u003eInt-\u003ea-\u003eST b()",
        "package": "dph-prim-par",
        "partial": "MD",
        "signature": "MDist a s-\u003eInt-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:zipD",
      "description": {
        "fct-descr": "\u003cp\u003ePairing of distributed values.\n   The two values must belong to the same \u003ccode\u003eGang\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist a -\u003e Dist b -\u003e Dist (a, b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Distributed-Data-Tuple.html#zipD",
        "fct-type": "function",
        "title": "zipD"
      },
      "index": {
        "description": "Pairing of distributed values The two values must belong to the same Gang",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "zipD",
        "normalized": "Dist a-\u003eDist b-\u003eDist(a,b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist a-\u003eDist b-\u003eDist(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Distributed.html#v:zipWithD",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two distributed values with the given function.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Distributed",
        "fct-package": "dph-prim-par",
        "fct-signature": "What-\u003e Gang-\u003e (a -\u003e b -\u003e c)-\u003e Dist a-\u003e Dist b-\u003e Dist c",
        "fct-type": "function",
        "title": "zipWithD"
      },
      "index": {
        "description": "Combine two distributed values with the given function",
        "hierarchy": "Data Array Parallel Unlifted Distributed",
        "module": "Data.Array.Parallel.Unlifted.Distributed",
        "name": "zipWithD",
        "normalized": "What-\u003eGang-\u003e(a-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "What-\u003eGang-\u003e(a-\u003eb-\u003ec)-\u003eDist a-\u003eDist b-\u003eDist c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic operations on parallel unlifted arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html",
        "fct-type": "module",
        "title": "Basics"
      },
      "index": {
        "description": "Basic operations on parallel unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "Basics",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Basics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:emptyUP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#emptyUP",
        "fct-type": "function",
        "title": "emptyUP"
      },
      "index": {
        "description": "Construct an empty array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "emptyUP",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:indexedUP",
      "description": {
        "fct-descr": "\u003cp\u003eAssociate each element of the array with its index\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Vector (Int, e)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#indexedUP",
        "fct-type": "function",
        "title": "indexedUP"
      },
      "index": {
        "description": "Associate each element of the array with its index",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "indexedUP",
        "normalized": "Vector a-\u003eVector(Int,a)",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eVector(Int,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:interleaveUP",
      "description": {
        "fct-descr": "\u003cp\u003eInterleave elements of two arrays\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#interleaveUP",
        "fct-type": "function",
        "title": "interleaveUP"
      },
      "index": {
        "description": "Interleave elements of two arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "interleaveUP",
        "normalized": "Vector a-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:lengthUP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the length of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#lengthUP",
        "fct-type": "function",
        "title": "lengthUP"
      },
      "index": {
        "description": "Take the length of an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "lengthUP",
        "normalized": "Vector a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:nullUP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Test whether the given array is empty\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#nullUP",
        "fct-type": "function",
        "title": "nullUP"
      },
      "index": {
        "description": "Test whether the given array is empty",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "nullUP",
        "normalized": "Vector a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:repeatUP",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat an array the given number of times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#repeatUP",
        "fct-type": "function",
        "title": "repeatUP"
      },
      "index": {
        "description": "Repeat an array the given number of times",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "repeatUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Int-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Basics.html#v:replicateUP",
      "description": {
        "fct-descr": "\u003cp\u003eYield an array where all elements contain the same value\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#replicateUP",
        "fct-type": "function",
        "title": "replicateUP"
      },
      "index": {
        "description": "Yield an array where all elements contain the same value",
        "hierarchy": "Data Array Parallel Unlifted Parallel Basics",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Basics",
        "name": "replicateUP",
        "normalized": "Int-\u003ea-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Int-\u003ee-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel combinators for unlifted arrays. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Parallel combinators for unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:combine2UP",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two vectors based on a selector. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The data vectors must have enough elements to satisfy the selector,\n     but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e UPSelRep2 -\u003e Vector a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#combine2UP",
        "fct-type": "function",
        "title": "combine2UP"
      },
      "index": {
        "description": "Combine two vectors based on selector The data vectors must have enough elements to satisfy the selector but this is not checked",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "combine2UP",
        "normalized": "Vector Tag-\u003eUPSelRep-\u003eVector a-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Tag-\u003eUPSelRep-\u003eVector a-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:combineUP",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two vectors based on a selector. \n   If the selector is true then take the element from the first vector, \n   otherwise take it from the second.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The data vectors must have enough elements to satisfy the flag vector, \n     but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Bool -\u003e Vector a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#combineUP",
        "fct-type": "function",
        "title": "combineUP"
      },
      "index": {
        "description": "Combine two vectors based on selector If the selector is true then take the element from the first vector otherwise take it from the second The data vectors must have enough elements to satisfy the flag vector but this is not checked",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "combineUP",
        "normalized": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:filterUP",
      "description": {
        "fct-descr": "\u003cp\u003eKeep elements that match the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#filterUP",
        "fct-type": "function",
        "title": "filterUP"
      },
      "index": {
        "description": "Keep elements that match the given predicate",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "filterUP",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:fold1UP",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003efoldl1UP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#fold1UP",
        "fct-type": "function",
        "title": "fold1UP"
      },
      "index": {
        "description": "Alias for foldl1UP",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "fold1UP",
        "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldUP",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected fold.\n   Note that this function has more constraints on its parameters than the\n   standard fold function from the Haskell Prelude.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWe need these constraints so that we can partition the fold across \n   several threads. Each thread folds a chunk of the input vector, \n   then we fold together all the results in the main thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldUP",
        "fct-type": "function",
        "title": "foldUP"
      },
      "index": {
        "description": "Undirected fold Note that this function has more constraints on its parameters than the standard fold function from the Haskell Prelude The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt We need these constraints so that we can partition the fold across several threads Each thread folds chunk of the input vector then we fold together all the results in the main thread",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "foldUP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldl1UP",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array, using the first element of the vector as the\n   neural element.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector contains no elements then you'll get a bounds-check error.\n\u003c/li\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldl1UP",
        "fct-type": "function",
        "title": "foldl1UP"
      },
      "index": {
        "description": "Left fold over an array using the first element of the vector as the neural element If the vector contains no elements then you ll get bounds-check error The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "foldl1UP",
        "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:foldlUP",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector is empty then this returns the provided neural element.\n\u003c/li\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldlUP",
        "fct-type": "function",
        "title": "foldlUP"
      },
      "index": {
        "description": "Left fold over an array If the vector is empty then this returns the provided neural element The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "foldlUP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:mapUP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker to all elements of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#mapUP",
        "fct-type": "function",
        "title": "mapUP"
      },
      "index": {
        "description": "Apply worker to all elements of an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "mapUP",
        "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:packUP",
      "description": {
        "fct-descr": "\u003cp\u003eTake elements of an array where a flag value is true, and pack them into\n   the result. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The souce and flag arrays must have the same length, but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Vector Bool -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#packUP",
        "fct-type": "function",
        "title": "packUP"
      },
      "index": {
        "description": "Take elements of an array where flag value is true and pack them into the result The souce and flag arrays must have the same length but this is not checked",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "packUP",
        "normalized": "Vector a-\u003eVector Bool-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eVector Bool-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:scanUP",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix scan. Similar to fold, but produce an array of the intermediate states.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#scanUP",
        "fct-type": "function",
        "title": "scanUP"
      },
      "index": {
        "description": "Prefix scan Similar to fold but produce an array of the intermediate states The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "scanUP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#v:zipWithUP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to correponding elements of two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#zipWithUP",
        "fct-type": "function",
        "title": "zipWithUP"
      },
      "index": {
        "description": "Apply worker function to correponding elements of two arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Combinators",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Combinators",
        "name": "zipWithUP",
        "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
        "package": "dph-prim-par",
        "partial": "With UP",
        "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnum-related parallel operations on unlifted arrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html",
        "fct-type": "module",
        "title": "Enum"
      },
      "index": {
        "description": "Enum-related parallel operations on unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "name": "Enum",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromStepLenEachUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromStepLenEachUP",
        "fct-type": "function",
        "title": "enumFromStepLenEachUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "name": "enumFromStepLenEachUP",
        "normalized": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "From Step Len Each UP",
        "signature": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromStepLenUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromStepLenUP",
        "fct-type": "function",
        "title": "enumFromStepLenUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "name": "enumFromStepLenUP",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "From Step Len UP",
        "signature": "Int-\u003eInt-\u003eInt-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromThenToUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e a -\u003e a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromThenToUP",
        "fct-type": "function",
        "title": "enumFromThenToUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "name": "enumFromThenToUP",
        "normalized": "a-\u003ea-\u003ea-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Then To UP",
        "signature": "a-\u003ea-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Enum.html#v:enumFromToUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromToUP",
        "fct-type": "function",
        "title": "enumFromToUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel Enum",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Enum",
        "name": "enumFromToUP",
        "normalized": "a-\u003ea-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From To UP",
        "signature": "a-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel combinators for segmented unboxed arrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html",
        "fct-type": "module",
        "title": "Extracts"
      },
      "index": {
        "description": "Parallel combinators for segmented unboxed arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "Extracts",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Extracts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromNestedUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCopy segments from a nested vectors and concatenate them into a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vector (Vector a) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromNestedUPSSegd",
        "fct-type": "function",
        "title": "extractsFromNestedUPSSegd"
      },
      "index": {
        "description": "Copy segments from nested vectors and concatenate them into new array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "extractsFromNestedUPSSegd",
        "normalized": "UPSSegd-\u003eVector(Vector a)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Nested UPSSegd",
        "signature": "UPSSegd-\u003eVector(Vector a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPSSegd",
        "fct-type": "function",
        "title": "extractsFromVectorsUPSSegd"
      },
      "index": {
        "description": "TODO make this parallel",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "extractsFromVectorsUPSSegd",
        "normalized": "UPSSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPSSegd",
        "signature": "UPSSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPSSegdSegmap",
      "description": {
        "fct-descr": "\u003cp\u003eSequential extracts from USSegd and Segmap\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vectors a -\u003e Vector Int -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPSSegdSegmap",
        "fct-type": "function",
        "title": "extractsFromVectorsUPSSegdSegmap"
      },
      "index": {
        "description": "Sequential extracts from USSegd and Segmap",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "extractsFromVectorsUPSSegdSegmap",
        "normalized": "UPSSegd-\u003eVectors a-\u003eVector Int-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPSSegd Segmap",
        "signature": "UPSSegd-\u003eVectors a-\u003eVector Int-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eSequential extracts from UPVSegd.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPVSegd",
        "fct-type": "function",
        "title": "extractsFromVectorsUPVSegd"
      },
      "index": {
        "description": "Sequential extracts from UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "extractsFromVectorsUPVSegd",
        "normalized": "UPVSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "UPVSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:extractsFromVectorsUPVSegdP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel extracts from UPVSegd and Segmap\n   TODO: This just distributes the segmap over the gang, and will be unbalanced\n         if there aren't many segments, or they have varying sizes.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPVSegdP",
        "fct-type": "function",
        "title": "extractsFromVectorsUPVSegdP"
      },
      "index": {
        "description": "Parallel extracts from UPVSegd and Segmap TODO This just distributes the segmap over the gang and will be unbalanced if there aren many segments or they have varying sizes",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "extractsFromVectorsUPVSegdP",
        "normalized": "UPVSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "UPVSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVector",
      "description": {
        "fct-descr": "\u003cp\u003eLookup elements from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e Vector Int -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVector",
        "fct-type": "function",
        "title": "indexsFromVector"
      },
      "index": {
        "description": "Lookup elements from Vector TODO make this parallel",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "indexsFromVector",
        "normalized": "Vector a-\u003eVector Int-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vector",
        "signature": "Vector a-\u003eVector Int-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVectorsUPVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eLookup elements from some Vectors through a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vectors a -\u003e UPVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVectorsUPVSegd",
        "fct-type": "function",
        "title": "indexsFromVectorsUPVSegd"
      },
      "index": {
        "description": "Lookup elements from some Vectors through UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "indexsFromVectorsUPVSegd",
        "normalized": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#v:indexsFromVectorsUPVSegdP",
      "description": {
        "fct-descr": "\u003cp\u003eLookup elements from some \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e through a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vectors a -\u003e UPVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVectorsUPVSegdP",
        "fct-type": "function",
        "title": "indexsFromVectorsUPVSegdP"
      },
      "index": {
        "description": "Lookup elements from some Vectors through UPVSegd TODO make this parallel",
        "hierarchy": "Data Array Parallel Unlifted Parallel Extracts",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Extracts",
        "name": "indexsFromVectorsUPVSegdP",
        "normalized": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel permutations for unlifted arrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html",
        "fct-type": "module",
        "title": "Permute"
      },
      "index": {
        "description": "Parallel permutations for unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Permute",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
        "name": "Permute",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Permute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#v:bpermuteUP",
      "description": {
        "fct-descr": "\u003cp\u003eBackwards permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e Vector Int -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html#bpermuteUP",
        "fct-type": "function",
        "title": "bpermuteUP"
      },
      "index": {
        "description": "Backwards permutation",
        "hierarchy": "Data Array Parallel Unlifted Parallel Permute",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
        "name": "bpermuteUP",
        "normalized": "Vector a-\u003eVector Int-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector a-\u003eVector Int-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Permute.html#v:updateUP",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate elements in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e Vector (Int, a) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html#updateUP",
        "fct-type": "function",
        "title": "updateUP"
      },
      "index": {
        "description": "Update elements in an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Permute",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Permute",
        "name": "updateUP",
        "normalized": "Vector a-\u003eVector(Int,a)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector a-\u003eVector(Int,a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel combinators for segmented unboxed arrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html",
        "fct-type": "module",
        "title": "Segmented"
      },
      "index": {
        "description": "Parallel combinators for segmented unboxed arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "Segmented",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Segmented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUP",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented append.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd-\u003e UPSegd-\u003e Vector a-\u003e UPSegd-\u003e Vector a-\u003e Vector a",
        "fct-type": "function",
        "title": "appendSUP"
      },
      "index": {
        "description": "Segmented append",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "appendSUP",
        "normalized": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "SUP",
        "signature": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUPV",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd-\u003e UPVSegd-\u003e Vectors a-\u003e UPVSegd-\u003e Vectors a-\u003e Vector a",
        "fct-type": "function",
        "title": "appendSUPV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "appendSUPV",
        "normalized": "UPSegd-\u003eUPVSegd-\u003eVectors a-\u003eUPVSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "SUPV",
        "signature": "UPSegd-\u003eUPVSegd-\u003eVectors a-\u003eUPVSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:appendSUP_old",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented append.\n -old\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e UPSegd -\u003e Vector a -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#appendSUP_old",
        "fct-type": "function",
        "title": "appendSUP_old"
      },
      "index": {
        "description": "Segmented append old",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "appendSUP_old",
        "normalized": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "SUP",
        "signature": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:foldRUP",
      "description": {
        "fct-descr": "\u003cp\u003eRegular segmented fold.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Int -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#foldRUP",
        "fct-type": "function",
        "title": "foldRUP"
      },
      "index": {
        "description": "Regular segmented fold",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "foldRUP",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eInt-\u003eVector b-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "RUP",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eInt-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:replicateRSUP",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented replication.\n   Each element in the vector is replicated the given number of times.\n\u003c/p\u003e\u003cpre\u003ereplicateRSUP 2 [1, 2, 3, 4, 5] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#replicateRSUP",
        "fct-type": "function",
        "title": "replicateRSUP"
      },
      "index": {
        "description": "Segmented replication Each element in the vector is replicated the given number of times replicateRSUP",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "replicateRSUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "RSUP",
        "signature": "Int-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#v:sumRUP",
      "description": {
        "fct-descr": "\u003cp\u003eRegular segmented sum.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#sumRUP",
        "fct-type": "function",
        "title": "sumRUP"
      },
      "index": {
        "description": "Regular segmented sum",
        "hierarchy": "Data Array Parallel Unlifted Parallel Segmented",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Segmented",
        "name": "sumRUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "RUP",
        "signature": "Int-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubarrays of flat unlifted arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html",
        "fct-type": "module",
        "title": "Subarrays"
      },
      "index": {
        "description": "Subarrays of flat unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Subarrays",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
        "name": "Subarrays",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Subarrays",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#v:dropUP",
      "description": {
        "fct-descr": "\u003cp\u003eDrop a the element at the provided index from a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#dropUP",
        "fct-type": "function",
        "title": "dropUP"
      },
      "index": {
        "description": "Drop the element at the provided index from vector",
        "hierarchy": "Data Array Parallel Unlifted Parallel Subarrays",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Subarrays",
        "name": "dropUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Int-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSum-like parallel combinators for unlifted arrays\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html",
        "fct-type": "module",
        "title": "Sums"
      },
      "index": {
        "description": "Sum-like parallel combinators for unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "Sums",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Sums",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:allUP",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether all the elements in a array meet the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e Bool) -\u003e Vector e -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#allUP",
        "fct-type": "function",
        "title": "allUP"
      },
      "index": {
        "description": "Check whether all the elements in array meet the given predicate",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "allUP",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(e-\u003eBool)-\u003eVector e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:andUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the logical AND of all the elements in a array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#andUP",
        "fct-type": "function",
        "title": "andUP"
      },
      "index": {
        "description": "Compute the logical AND of all the elements in array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "andUP",
        "normalized": "Vector Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:anyUP",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether any of the elements in a array meet the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e Bool) -\u003e Vector e -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#anyUP",
        "fct-type": "function",
        "title": "anyUP"
      },
      "index": {
        "description": "Check whether any of the elements in array meet the given predicate",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "anyUP",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(e-\u003eBool)-\u003eVector e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumByUP",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the maximum element in an array under the given ordering\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e e -\u003e Ordering) -\u003e Vector e -\u003e e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumByUP",
        "fct-type": "function",
        "title": "maximumByUP"
      },
      "index": {
        "description": "Determine the maximum element in an array under the given ordering",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "maximumByUP",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "By UP",
        "signature": "(e-\u003ee-\u003eOrdering)-\u003eVector e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumIndexByUP",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the index of the maximum element in an array under the\n   given ordering\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e e -\u003e Ordering) -\u003e Vector e -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumIndexByUP",
        "fct-type": "function",
        "title": "maximumIndexByUP"
      },
      "index": {
        "description": "Determine the index of the maximum element in an array under the given ordering",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "maximumIndexByUP",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Index By UP",
        "signature": "(e-\u003ee-\u003eOrdering)-\u003eVector e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:maximumUP",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the maximum element in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumUP",
        "fct-type": "function",
        "title": "maximumUP"
      },
      "index": {
        "description": "Determine the maximum element in an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "maximumUP",
        "normalized": "Vector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:orUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the logical OR of all the elements in a array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#orUP",
        "fct-type": "function",
        "title": "orUP"
      },
      "index": {
        "description": "Compute the logical OR of all the elements in array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "orUP",
        "normalized": "Vector Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:productUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the product of all the elements of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#productUP",
        "fct-type": "function",
        "title": "productUP"
      },
      "index": {
        "description": "Compute the product of all the elements of an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "productUP",
        "normalized": "Vector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Sums.html#v:sumUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the sum all the elements of a array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#sumUP",
        "fct-type": "function",
        "title": "sumUP"
      },
      "index": {
        "description": "Compute the sum all the elements of array",
        "hierarchy": "Data Array Parallel Unlifted Parallel Sums",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Sums",
        "name": "sumUP",
        "normalized": "Vector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead/Show instances for segmented unlifted arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.Text",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Read Show instances for segmented unlifted arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel Text",
        "module": "Data.Array.Parallel.Unlifted.Parallel.Text",
        "name": "Text",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel Scattered Segment descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html",
        "fct-type": "module",
        "title": "UPSSegd"
      },
      "index": {
        "description": "Parallel Scattered Segment descriptors See Data.Array.Parallel.Unlifted for how this works",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "UPSSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#t:UPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eParallel Scattered Segment sescriptor\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#UPSSegd",
        "fct-type": "data",
        "title": "UPSSegd"
      },
      "index": {
        "description": "Parallel Scattered Segment sescriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "UPSSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:appendWith",
      "description": {
        "fct-descr": "\u003cp\u003eO(n)\n   Produce a segment descriptor that describes the result of appending two\n   segmented arrays.\n\u003c/p\u003e\u003cp\u003eAppending two nested arrays is an index space transformation. Because\n   a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e can contain segments from multiple flat data arrays, we can\n   represent the result of the append without copying elements from the\n   underlying flat data arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd-\u003e Int-\u003e UPSSegd-\u003e Int-\u003e UPSSegd",
        "fct-type": "function",
        "title": "appendWith"
      },
      "index": {
        "description": "Produce segment descriptor that describes the result of appending two segmented arrays Appending two nested arrays is an index space transformation Because UPSSegd can contain segments from multiple flat data arrays we can represent the result of the append without copying elements from the underlying flat data arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "appendWith",
        "normalized": "UPSSegd-\u003eInt-\u003eUPSSegd-\u003eInt-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "UPSSegd-\u003eInt-\u003eUPSSegd-\u003eInt-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Yield an empty segment descriptor with no elements or segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "empty",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:fold1WithP",
      "description": {
        "fct-descr": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e, with a non-empty vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UPSSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#fold1WithP",
        "fct-type": "function",
        "title": "fold1WithP"
      },
      "index": {
        "description": "Fold segments specified by UPSSegd with non-empty vector",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "fold1WithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eUPSSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:foldSegsWithP",
      "description": {
        "fct-descr": "\u003cp\u003eFold the segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLow level function takes a per-element worker and a per-segment worker.\n   It folds all the segments with the per-segment worker, then uses the\n   per-element worker to fixup the partial results when a segment \n   is split across multiple threads.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (USSegd -\u003e Vectors a -\u003e Vector a) -\u003e UPSSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#foldSegsWithP",
        "fct-type": "function",
        "title": "foldSegsWithP"
      },
      "index": {
        "description": "Fold the segments specified by UPSSegd Low level function takes per-element worker and per-segment worker It folds all the segments with the per-segment worker then uses the per-element worker to fixup the partial results when segment is split across multiple threads",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "foldSegsWithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(USSegd-\u003eVectors a-\u003eVector a)-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "Segs With",
        "signature": "(a-\u003ea-\u003ea)-\u003e(USSegd-\u003eVectors a-\u003eVector a)-\u003eUPSSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:foldWithP",
      "description": {
        "fct-descr": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UPSSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#foldWithP",
        "fct-type": "function",
        "title": "foldWithP"
      },
      "index": {
        "description": "Fold segments specified by UPSSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "foldWithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:fromUPSegd",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a plain \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e, by assuming that all segments\n   come from a single flat array with source id 0.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#fromUPSegd",
        "fct-type": "function",
        "title": "fromUPSegd"
      },
      "index": {
        "description": "Promote plain UPSegd to UPSSegd by assuming that all segments come from single flat array with source id",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "fromUPSegd",
        "normalized": "UPSegd-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "UPSegd",
        "signature": "UPSegd-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:fromUSSegd",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a global \u003ccode\u003e\u003ca\u003eUSSegd\u003c/a\u003e\u003c/code\u003e to a parallel \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e by distributing\n   it across the gang.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "USSegd -\u003e UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#fromUSSegd",
        "fct-type": "function",
        "title": "fromUSSegd"
      },
      "index": {
        "description": "Promote global USSegd to parallel UPSSegd by distributing it across the gang",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "fromUSSegd",
        "normalized": "USSegd-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "USSegd",
        "signature": "USSegd-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:getSeg",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the length, segment index, starting index, and source id of a segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Int -\u003e (Int, Int, Int, Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#getSeg",
        "fct-type": "function",
        "title": "getSeg"
      },
      "index": {
        "description": "Get the length segment index starting index and source id of segment",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "getSeg",
        "normalized": "UPSSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
        "package": "dph-prim-par",
        "partial": "Seg",
        "signature": "UPSSegd-\u003eInt-\u003e(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:isContiguous",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). True when the starts are identical to the usegd indices field and\n   the sources are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#isContiguous",
        "fct-type": "function",
        "title": "isContiguous"
      },
      "index": {
        "description": "True when the starts are identical to the usegd indices field and the sources are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "isContiguous",
        "normalized": "UPSSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Contiguous",
        "signature": "UPSSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "length",
        "normalized": "UPSSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPSSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:mkUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Int-\u003e Vector Int-\u003e UPSegd-\u003e UPSSegd",
        "fct-type": "function",
        "title": "mkUPSSegd"
      },
      "index": {
        "description": "Construct new segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "mkUPSSegd",
        "normalized": "Vector Int-\u003eVector Int-\u003eUPSegd-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "UPSSegd",
        "signature": "Vector Int-\u003eVector Int-\u003eUPSegd-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1).\n   Yield a singleton segment descriptor.\n   The single segment covers the given number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Yield singleton segment descriptor The single segment covers the given number of elements",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "singleton",
        "normalized": "Int-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:sumWithP",
      "description": {
        "fct-descr": "\u003cp\u003eSum up segments specified by a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#sumWithP",
        "fct-type": "function",
        "title": "sumWithP"
      },
      "index": {
        "description": "Sum up segments specified by UPSSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "sumWithP",
        "normalized": "UPSSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "UPSSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeDistributed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the distributed \u003ccode\u003eUSegd\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Dist ((USSegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeDistributed",
        "fct-type": "function",
        "title": "takeDistributed"
      },
      "index": {
        "description": "Yield the distributed USegd of UPSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeDistributed",
        "normalized": "UPSSegd-\u003eDist((USSegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "Distributed",
        "signature": "UPSSegd-\u003eDist((USSegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeElements",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the total number of data elements.\n\u003c/p\u003e\u003cpre\u003etakeElements upssegd = sum (takeLengths upssegd)\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeElements",
        "fct-type": "function",
        "title": "takeElements"
      },
      "index": {
        "description": "Yield the total number of data elements takeElements upssegd sum takeLengths upssegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeElements",
        "normalized": "UPSSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "UPSSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeIndices",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeIndices",
        "fct-type": "function",
        "title": "takeIndices"
      },
      "index": {
        "description": "Yield the segment indices",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeIndices",
        "normalized": "UPSSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "UPSSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeLengths",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeLengths",
        "fct-type": "function",
        "title": "takeLengths"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeLengths",
        "normalized": "UPSSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "UPSSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeSources",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the source ids.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeSources",
        "fct-type": "function",
        "title": "takeSources"
      },
      "index": {
        "description": "Yield the source ids",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeSources",
        "normalized": "UPSSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Sources",
        "signature": "UPSSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeStarts",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the starting indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeStarts",
        "fct-type": "function",
        "title": "takeStarts"
      },
      "index": {
        "description": "Yield the starting indices",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeStarts",
        "normalized": "UPSSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Starts",
        "signature": "UPSSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:takeUSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the global \u003ccode\u003eUSegd\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e USSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#takeUSSegd",
        "fct-type": "function",
        "title": "takeUSSegd"
      },
      "index": {
        "description": "Yield the global USegd of UPSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "takeUSSegd",
        "normalized": "UPSSegd-\u003eUSSegd",
        "package": "dph-prim-par",
        "partial": "USSegd",
        "signature": "UPSSegd-\u003eUSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eO(1).\n   Check the internal consistency of a scattered segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSSegd.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check the internal consistency of scattered segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSSegd",
        "name": "valid",
        "normalized": "UPSSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPSSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel segment descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html",
        "fct-type": "module",
        "title": "UPSegd"
      },
      "index": {
        "description": "Parallel segment descriptors See Data.Array.Parallel.Unlifted for how this works",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "UPSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#t:UPSegd",
      "description": {
        "fct-descr": "\u003cp\u003eA parallel segment descriptor holds a global (undistributed) segment\n   desciptor, as well as a distributed version. The distributed version\n   describes how to split work on the segmented array over the gang. \n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
        "fct-type": "data",
        "title": "UPSegd"
      },
      "index": {
        "description": "parallel segment descriptor holds global undistributed segment desciptor as well as distributed version The distributed version describes how to split work on the segmented array over the gang",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "UPSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:UPSegd",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
        "fct-type": "function",
        "title": "UPSegd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "UPSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty segment descriptor with no elements or segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "empty",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:fold1WithP",
      "description": {
        "fct-descr": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e, with a non-empty vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#fold1WithP",
        "fct-type": "function",
        "title": "fold1WithP"
      },
      "index": {
        "description": "Fold segments specified by UPSegd with non-empty vector",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "fold1WithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003eUPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eUPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:foldSegsWithP",
      "description": {
        "fct-descr": "\u003cp\u003eFold the segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis low level function takes a per-element worker and a per-segment worker.\n   It folds all the segments with the per-segment worker, then uses the\n   per-element worker to fixup the partial results when a segment \n   is split across multiple threads.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (USegd -\u003e Vector a -\u003e Vector a) -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#foldSegsWithP",
        "fct-type": "function",
        "title": "foldSegsWithP"
      },
      "index": {
        "description": "Fold the segments specified by UPSegd This low level function takes per-element worker and per-segment worker It folds all the segments with the per-segment worker then uses the per-element worker to fixup the partial results when segment is split across multiple threads",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "foldSegsWithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(USegd-\u003eVector a-\u003eVector a)-\u003eUPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "Segs With",
        "signature": "(a-\u003ea-\u003ea)-\u003e(USegd-\u003eVector a-\u003eVector a)-\u003eUPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:foldWithP",
      "description": {
        "fct-descr": "\u003cp\u003eFold segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e UPSegd -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#foldWithP",
        "fct-type": "function",
        "title": "foldWithP"
      },
      "index": {
        "description": "Fold segments specified by UPSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "foldWithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eUPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:fromLengths",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Convert an array of segment lengths into a parallel segment descriptor.\n\u003c/p\u003e\u003cp\u003eThe array contains the length of each segment, and we compute the \n   indices from that. Runtime is O(n) in the number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Int -\u003e UPSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#fromLengths",
        "fct-type": "function",
        "title": "fromLengths"
      },
      "index": {
        "description": "Convert an array of segment lengths into parallel segment descriptor The array contains the length of each segment and we compute the indices from that Runtime is in the number of segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "fromLengths",
        "normalized": "Vector Int-\u003eUPSegd",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "Vector Int-\u003eUPSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:fromUSegd",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a global \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e to a parallel \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e by distributing \n   it across the gang.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "USegd -\u003e UPSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#fromUSegd",
        "fct-type": "function",
        "title": "fromUSegd"
      },
      "index": {
        "description": "Convert global USegd to parallel UPSegd by distributing it across the gang",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "fromUSegd",
        "normalized": "USegd-\u003eUPSegd",
        "package": "dph-prim-par",
        "partial": "USegd",
        "signature": "USegd-\u003eUPSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:indicesP",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Yield a vector containing indicies that give the position of each \n         member of the flat array in its corresponding segment.\n\u003c/p\u003e\u003cpre\u003eindicesP (fromLengths [5, 2, 3]) = [0,1,2,3,4,0,1,0,1,2]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#indicesP",
        "fct-type": "function",
        "title": "indicesP"
      },
      "index": {
        "description": "Yield vector containing indicies that give the position of each member of the flat array in its corresponding segment indicesP fromLengths",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "indicesP",
        "normalized": "UPSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "length",
        "normalized": "UPSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:mkUPSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a new parallel segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Int-\u003e Vector Int-\u003e Int-\u003e UPSegd",
        "fct-type": "function",
        "title": "mkUPSegd"
      },
      "index": {
        "description": "Construct new parallel segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "mkUPSegd",
        "normalized": "Vector Int-\u003eVector Int-\u003eInt-\u003eUPSegd",
        "package": "dph-prim-par",
        "partial": "UPSegd",
        "signature": "Vector Int-\u003eVector Int-\u003eInt-\u003eUPSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:replicateWithP",
      "description": {
        "fct-descr": "\u003cp\u003eCopying segmented replication. Each element of the vector is physically \n   copied according to the length of each segment in the segment descriptor.\n\u003c/p\u003e\u003cpre\u003ereplicateWith (fromLengths [3, 1, 2]) [5, 6, 7] = [5, 5, 5, 6, 7, 7]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#replicateWithP",
        "fct-type": "function",
        "title": "replicateWithP"
      },
      "index": {
        "description": "Copying segmented replication Each element of the vector is physically copied according to the length of each segment in the segment descriptor replicateWith fromLengths",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "replicateWithP",
        "normalized": "UPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "UPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e UPSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct singleton segment descriptor The single segment covers the given number of elements",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "singleton",
        "normalized": "Int-\u003eUPSegd",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eUPSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:sumWithP",
      "description": {
        "fct-descr": "\u003cp\u003eSum up segments specified by a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#sumWithP",
        "fct-type": "function",
        "title": "sumWithP"
      },
      "index": {
        "description": "Sum up segments specified by UPSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "sumWithP",
        "normalized": "UPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "UPSegd-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeDistributed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the distributed \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe get a plain \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e for each chunk, the segment id of the first\n  slice in the chunk, and the starting offset of that slice in its segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Dist ((USegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeDistributed",
        "fct-type": "function",
        "title": "takeDistributed"
      },
      "index": {
        "description": "Yield the distributed USegd of UPSegd We get plain USegd for each chunk the segment id of the first slice in the chunk and the starting offset of that slice in its segment",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "takeDistributed",
        "normalized": "UPSegd-\u003eDist((USegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "Distributed",
        "signature": "UPSegd-\u003eDist((USegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeElements",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the total number of array elements.\n\u003c/p\u003e\u003cpre\u003etakeElements upsegd = sum (takeLengths upsegd)\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeElements",
        "fct-type": "function",
        "title": "takeElements"
      },
      "index": {
        "description": "Yield the total number of array elements takeElements upsegd sum takeLengths upsegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "takeElements",
        "normalized": "UPSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Elements",
        "signature": "UPSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeIndices",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeIndices",
        "fct-type": "function",
        "title": "takeIndices"
      },
      "index": {
        "description": "Yield the segment indices",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "takeIndices",
        "normalized": "UPSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Indices",
        "signature": "UPSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeLengths",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the lengths of the individual segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeLengths",
        "fct-type": "function",
        "title": "takeLengths"
      },
      "index": {
        "description": "Yield the lengths of the individual segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "takeLengths",
        "normalized": "UPSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "UPSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:takeUSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the global \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#takeUSegd",
        "fct-type": "function",
        "title": "takeUSegd"
      },
      "index": {
        "description": "Yield the global USegd of UPSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "takeUSegd",
        "normalized": "UPSegd-\u003eUSegd",
        "package": "dph-prim-par",
        "partial": "USegd",
        "signature": "UPSegd-\u003eUSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:upsegd_dsegd",
      "description": {
        "fct-descr": "\u003cp\u003eSegment descriptor for each chunk, \n   along with segment id of first slice in the chunk,\n   and the offset of that slice in its segment.\n   See docs of \u003ccode\u003esplitSegdOfElemsD\u003c/code\u003e for an example.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Dist ((USegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
        "fct-type": "function",
        "title": "upsegd_dsegd"
      },
      "index": {
        "description": "Segment descriptor for each chunk along with segment id of first slice in the chunk and the offset of that slice in its segment See docs of splitSegdOfElemsD for an example",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "upsegd_dsegd",
        "normalized": "Dist((USegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Dist((USegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:upsegd_usegd",
      "description": {
        "fct-descr": "\u003cp\u003eSegment descriptor that describes the whole array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "!USegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#UPSegd",
        "fct-type": "function",
        "title": "upsegd_usegd"
      },
      "index": {
        "description": "Segment descriptor that describes the whole array",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "upsegd_usegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eO(1).\n   Check the internal consistency of a parallel segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSegd.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check the internal consistency of parallel segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSegd",
        "name": "valid",
        "normalized": "UPSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel selectors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html",
        "fct-type": "module",
        "title": "UPSel"
      },
      "index": {
        "description": "Parallel selectors",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "UPSel",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#t:UPSel2",
      "description": {
        "fct-descr": "\u003cp\u003eContains a selector \u003ccode\u003e\u003ca\u003eUSel2\u003c/a\u003e\u003c/code\u003e, as well as an \u003ccode\u003eUSelRep2\u003c/code\u003e which says how \n   to distribute this selector across the PEs. \n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003edph-prim-seq:Data.Array.Parallel.Unlifted.Sequential.Segmented.USel\u003c/code\u003e\n   for more discussion of what selectors are for.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#UPSel2",
        "fct-type": "data",
        "title": "UPSel2"
      },
      "index": {
        "description": "Contains selector USel2 as well as an USelRep2 which says how to distribute this selector across the PEs See dph-prim-seq Data.Array.Parallel.Unlifted.Sequential.Segmented.USel for more discussion of what selectors are for",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "UPSel2",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#t:UPSelRep2",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#UPSelRep2",
        "fct-type": "type",
        "title": "UPSelRep2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "UPSelRep2",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPSel Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSel2_0",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the number of elements that will be taken from the first array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSel2_0",
        "fct-type": "function",
        "title": "elementsUPSel2_0"
      },
      "index": {
        "description": "Get the number of elements that will be taken from the first array",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "elementsUPSel2_0",
        "normalized": "UPSel-\u003eInt",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "UPSel-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSel2_1",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the number of elements that will be taken from the second array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSel2_1",
        "fct-type": "function",
        "title": "elementsUPSel2_1"
      },
      "index": {
        "description": "Get the number of elements that will be taken from the second array",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "elementsUPSel2_1",
        "normalized": "UPSel-\u003eInt",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "UPSel-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSelRep2_0",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Count the number of elements to take from the first array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e UPSelRep2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSelRep2_0",
        "fct-type": "function",
        "title": "elementsUPSelRep2_0"
      },
      "index": {
        "description": "Count the number of elements to take from the first array",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "elementsUPSelRep2_0",
        "normalized": "Vector Tag-\u003eUPSelRep-\u003eInt",
        "package": "dph-prim-par",
        "partial": "UPSel Rep",
        "signature": "Vector Tag-\u003eUPSelRep-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:elementsUPSelRep2_1",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Count the number of elements to take from the second array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e UPSelRep2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#elementsUPSelRep2_1",
        "fct-type": "function",
        "title": "elementsUPSelRep2_1"
      },
      "index": {
        "description": "Count the number of elements to take from the second array",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "elementsUPSelRep2_1",
        "normalized": "Vector Tag-\u003eUPSelRep-\u003eInt",
        "package": "dph-prim-par",
        "partial": "UPSel Rep",
        "signature": "Vector Tag-\u003eUPSelRep-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:indicesUPSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the indices of a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2 -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#indicesUPSel2",
        "fct-type": "function",
        "title": "indicesUPSel2"
      },
      "index": {
        "description": "Get the indices of selector",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "indicesUPSel2",
        "normalized": "UPSel-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "UPSel-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:indicesUPSelRep2",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e UPSelRep2 -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#indicesUPSelRep2",
        "fct-type": "function",
        "title": "indicesUPSelRep2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "indicesUPSelRep2",
        "normalized": "Vector Tag-\u003eUPSelRep-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "UPSel Rep",
        "signature": "Vector Tag-\u003eUPSelRep-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:mkUPSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a selector. Wrapper for \u003ccode\u003e\u003ca\u003eUPSel2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e Vector Int -\u003e Int -\u003e Int -\u003e UPSelRep2 -\u003e UPSel2",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#mkUPSel2",
        "fct-type": "function",
        "title": "mkUPSel2"
      },
      "index": {
        "description": "Construct selector Wrapper for UPSel2",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "mkUPSel2",
        "normalized": "Vector Tag-\u003eVector Int-\u003eInt-\u003eInt-\u003eUPSelRep-\u003eUPSel",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "Vector Tag-\u003eVector Int-\u003eInt-\u003eInt-\u003eUPSelRep-\u003eUPSel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:mkUPSelRep2",
      "description": {
        "fct-descr": "\u003cp\u003eComputes a \u003ccode\u003e\u003ca\u003eUPSelRep2\u003c/a\u003e\u003c/code\u003e from an array of tags.\n   This is used when parallelising a \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation.\n   See the docs for \u003ccode\u003e\u003ca\u003eUPSelRep2\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e UPSelRep2",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#mkUPSelRep2",
        "fct-type": "function",
        "title": "mkUPSelRep2"
      },
      "index": {
        "description": "Computes UPSelRep2 from an array of tags This is used when parallelising combine operation See the docs for UPSelRep2 for details",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "mkUPSelRep2",
        "normalized": "Vector Tag-\u003eUPSelRep",
        "package": "dph-prim-par",
        "partial": "UPSel Rep",
        "signature": "Vector Tag-\u003eUPSelRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:repUPSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the \u003ccode\u003e\u003ca\u003eUPSelRep2\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eUPSel2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2 -\u003e UPSelRep2",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#repUPSel2",
        "fct-type": "function",
        "title": "repUPSel2"
      },
      "index": {
        "description": "Take the UPSelRep2 from UPSel2",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "repUPSel2",
        "normalized": "UPSel-\u003eUPSelRep",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "UPSel-\u003eUPSelRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:selUPSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the sequential \u003ccode\u003e\u003ca\u003eUSel2\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eUPSel2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2 -\u003e USel2",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#selUPSel2",
        "fct-type": "function",
        "title": "selUPSel2"
      },
      "index": {
        "description": "Take the sequential USel2 from UPSel2",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "selUPSel2",
        "normalized": "UPSel-\u003eUSel",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "UPSel-\u003eUSel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#v:tagsUPSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the tags of a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2 -\u003e Vector Tag",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPSel.html#tagsUPSel2",
        "fct-type": "function",
        "title": "tagsUPSel2"
      },
      "index": {
        "description": "Get the tags of selector",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPSel",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPSel",
        "name": "tagsUPSel2",
        "normalized": "UPSel-\u003eVector Tag",
        "package": "dph-prim-par",
        "partial": "UPSel",
        "signature": "UPSel-\u003eVector Tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel virtual segment descriptors.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e for how this works.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html",
        "fct-type": "module",
        "title": "UPVSegd"
      },
      "index": {
        "description": "Parallel virtual segment descriptors See Data.Array.Parallel.Unlifted for how this works",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "UPVSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPVSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#t:UPVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eParallel Virtual Segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "data",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#UPVSegd",
        "fct-type": "data",
        "title": "UPVSegd"
      },
      "index": {
        "description": "Parallel Virtual Segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "UPVSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UPVSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:appendWith",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a segment descriptor that describes the result of appending two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd-\u003e Int-\u003e UPVSegd-\u003e Int-\u003e UPVSegd",
        "fct-type": "function",
        "title": "appendWith"
      },
      "index": {
        "description": "Produce segment descriptor that describes the result of appending two arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "appendWith",
        "normalized": "UPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "UPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:combine2",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two virtual segment descriptors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSel2-\u003e UPVSegd-\u003e Int-\u003e UPVSegd-\u003e Int-\u003e UPVSegd",
        "fct-type": "function",
        "title": "combine2"
      },
      "index": {
        "description": "Combine two virtual segment descriptors",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "combine2",
        "normalized": "UPSel-\u003eUPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPSel-\u003eUPVSegd-\u003eInt-\u003eUPVSegd-\u003eInt-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty segment descriptor, with no elements or segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an empty segment descriptor with no elements or segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "empty",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:fromUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n   The result contains one virtual segment for every physical segment\n   defined by the \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e UPVSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#fromUPSSegd",
        "fct-type": "function",
        "title": "fromUPSSegd"
      },
      "index": {
        "description": "segs Promote UPSSegd to UPVSegd The result contains one virtual segment for every physical segment defined by the UPSSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "fromUPSSegd",
        "normalized": "UPSSegd-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "UPSSegd",
        "signature": "UPSSegd-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:fromUPSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n   All segments are assumed to come from a flat array with sourceid 0.\n   The result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd -\u003e UPVSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#fromUPSegd",
        "fct-type": "function",
        "title": "fromUPSegd"
      },
      "index": {
        "description": "segs Promote UPSegd to UPVSegd All segments are assumed to come from flat array with sourceid The result contains one virtual segment for every physical segment the provided UPSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "fromUPSegd",
        "normalized": "UPSegd-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "UPSegd",
        "signature": "UPSegd-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:getSeg",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the length, starting index, and source id of a segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Int -\u003e (Int, Int, Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#getSeg",
        "fct-type": "function",
        "title": "getSeg"
      },
      "index": {
        "description": "Get the length starting index and source id of segment",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "getSeg",
        "normalized": "UPVSegd-\u003eInt-\u003e(Int,Int,Int)",
        "package": "dph-prim-par",
        "partial": "Seg",
        "signature": "UPVSegd-\u003eInt-\u003e(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:isContiguous",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). True when the starts are identical to the usegd indices field and\n   the sources are all 0's. \n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#isContiguous",
        "fct-type": "function",
        "title": "isContiguous"
      },
      "index": {
        "description": "True when the starts are identical to the usegd indices field and the sources are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "isContiguous",
        "normalized": "UPVSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Contiguous",
        "signature": "UPVSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:isManifest",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Checks whether all the segments are manifest (unshared / non-virtual).\n   If this is the case, then the vsegids field will be [0..len-1]. \n\u003c/p\u003e\u003cp\u003eConsumers can check this field, avoid demanding the vsegids field.\n   This can avoid the need for it to be constructed in the first place, due to\n   lazy evaluation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#isManifest",
        "fct-type": "function",
        "title": "isManifest"
      },
      "index": {
        "description": "Checks whether all the segments are manifest unshared non-virtual If this is the case then the vsegids field will be len-1 Consumers can check this field avoid demanding the vsegids field This can avoid the need for it to be constructed in the first place due to lazy evaluation",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "isManifest",
        "normalized": "UPVSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Manifest",
        "signature": "UPVSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the overall number of segments.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Yield the overall number of segments",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "length",
        "normalized": "UPVSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPVSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:mkUPVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a new virtual segment descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Int-\u003e UPSSegd-\u003e UPVSegd",
        "fct-type": "function",
        "title": "mkUPVSegd"
      },
      "index": {
        "description": "Construct new virtual segment descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "mkUPVSegd",
        "normalized": "Vector Int-\u003eUPSSegd-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "UPVSegd",
        "signature": "Vector Int-\u003eUPSSegd-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:replicated",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e that describes an array created by replicating\n   a single segment several times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int-\u003e Int-\u003e UPVSegd",
        "fct-type": "function",
        "title": "replicated"
      },
      "index": {
        "description": "Construct UPVSegd that describes an array created by replicating single segment several times",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "replicated",
        "normalized": "Int-\u003eInt-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a singleton segment descriptor.\n   The single segment covers the given number of elements in a flat array\n   with sourceid 0.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e UPVSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct singleton segment descriptor The single segment covers the given number of elements in flat array with sourceid",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "singleton",
        "normalized": "Int-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeDistributed",
      "description": {
        "fct-descr": "\u003cp\u003eO(1) or O(segs). Yield \u003ccode\u003e\u003ca\u003eUSegd\u003c/a\u003e\u003c/code\u003es distributed over a logical view of this \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n   The complexity is only O(1) if this has already been evaluated.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Dist ((USegd, Int), Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeDistributed",
        "fct-type": "function",
        "title": "takeDistributed"
      },
      "index": {
        "description": "or segs Yield USegd distributed over logical view of this UPVSegd The complexity is only if this has already been evaluated",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "takeDistributed",
        "normalized": "UPVSegd-\u003eDist((USegd,Int),Int)",
        "package": "dph-prim-par",
        "partial": "Distributed",
        "signature": "UPVSegd-\u003eDist((USegd,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeLengths",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Yield the lengths of the segments described by a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeLengths",
        "fct-type": "function",
        "title": "takeLengths"
      },
      "index": {
        "description": "segs Yield the lengths of the segments described by UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "takeLengths",
        "normalized": "UPVSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "Lengths",
        "signature": "UPVSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeUPSSegd",
        "fct-type": "function",
        "title": "takeUPSSegd"
      },
      "index": {
        "description": "Yield the UPSSegd of UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "takeUPSSegd",
        "normalized": "UPVSegd-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "UPSSegd",
        "signature": "UPVSegd-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeUPSSegdRedundant",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eSee the note in \u003ccode\u003e\u003ca\u003etakeVSegidsRedundant\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeUPSSegdRedundant",
        "fct-type": "function",
        "title": "takeUPSSegdRedundant"
      },
      "index": {
        "description": "Take the UPSSegd of UPVSegd but don require that every physical segment is referenced by some virtual segment See the note in takeVSegidsRedundant",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "takeUPSSegdRedundant",
        "normalized": "UPVSegd-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "UPSSegd Redundant",
        "signature": "UPVSegd-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeVSegids",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the virtual segment ids of \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeVSegids",
        "fct-type": "function",
        "title": "takeVSegids"
      },
      "index": {
        "description": "Yield the virtual segment ids of UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "takeVSegids",
        "normalized": "UPVSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "VSegids",
        "signature": "UPVSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:takeVSegidsRedundant",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the vsegids of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eIf you're just performing indexing and don't need the invariant that all\n   physical segments are reachable from some virtual segment, then use this\n   version as it's faster. This sidesteps the code that maintains the invariant.\n\u003c/p\u003e\u003cp\u003eThe stated O(1) complexity assumes that the array has already been fully\n   evalauted. If this is not the case then we can avoid demanding the result\n   of a prior computation on the vsegids, thus reducing the cost attributed\n   to that prior computation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#takeVSegidsRedundant",
        "fct-type": "function",
        "title": "takeVSegidsRedundant"
      },
      "index": {
        "description": "Take the vsegids of UPVSegd but don require that every physical segment is referenced by some virtual segment If you re just performing indexing and don need the invariant that all physical segments are reachable from some virtual segment then use this version as it faster This sidesteps the code that maintains the invariant The stated complexity assumes that the array has already been fully evalauted If this is not the case then we can avoid demanding the result of prior computation on the vsegids thus reducing the cost attributed to that prior computation",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "takeVSegidsRedundant",
        "normalized": "UPVSegd-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "VSegids Redundant",
        "signature": "UPVSegd-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:unsafeDemoteToUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eUPSSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n   individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: Trying to take the \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e of a nested array that has been\n   constructed with replication can cause index space overflow. This is\n   because the virtual size of the corresponding flat data can be larger\n   than physical memory. If this happens then indices fields and \n   element count in the result will be invalid.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e UPSSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#unsafeDemoteToUPSSegd",
        "fct-type": "function",
        "title": "unsafeDemoteToUPSSegd"
      },
      "index": {
        "description": "segs Yield UPSSegd that describes each segment of UPVSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments WARNING Trying to take the UPSegd of nested array that has been constructed with replication can cause index space overflow This is because the virtual size of the corresponding flat data can be larger than physical memory If this happens then indices fields and element count in the result will be invalid",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "unsafeDemoteToUPSSegd",
        "normalized": "UPVSegd-\u003eUPSSegd",
        "package": "dph-prim-par",
        "partial": "Demote To UPSSegd",
        "signature": "UPVSegd-\u003eUPSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:unsafeDemoteToUPSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eUPSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n   individually, assuming all segments have been concatenated to \n   remove scattering.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e See the warning in \u003ccode\u003e\u003ca\u003eunsafeDemoteToUPSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e UPSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#unsafeDemoteToUPSegd",
        "fct-type": "function",
        "title": "unsafeDemoteToUPSegd"
      },
      "index": {
        "description": "segs Yield UPSegd that describes each segment of UPVSegd individually assuming all segments have been concatenated to remove scattering See the warning in unsafeDemoteToUPSSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "unsafeDemoteToUPSegd",
        "normalized": "UPVSegd-\u003eUPSegd",
        "package": "dph-prim-par",
        "partial": "Demote To UPSegd",
        "signature": "UPVSegd-\u003eUPSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:updateVSegs",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the vsegids of a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, and then cull the physical\n   segment descriptor so that all physical segments are reachable from\n   some virtual segment.\n\u003c/p\u003e\u003cp\u003eThis function lets you perform filtering operations on the virtual segments,\n   while maintaining the invariant that all physical segments are referenced\n   by some virtual segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(Vector Int -\u003e Vector Int) -\u003e UPVSegd -\u003e UPVSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#updateVSegs",
        "fct-type": "function",
        "title": "updateVSegs"
      },
      "index": {
        "description": "Update the vsegids of UPVSegd and then cull the physical segment descriptor so that all physical segments are reachable from some virtual segment This function lets you perform filtering operations on the virtual segments while maintaining the invariant that all physical segments are referenced by some virtual segment",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "updateVSegs",
        "normalized": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "VSegs",
        "signature": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:updateVSegsReachable",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the vsegids  of \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e, where the result is guaranteed to\n   cover all physical segments.\n\u003c/p\u003e\u003cp\u003eUsing this version saves performing the \u003ccode\u003ecull\u003c/code\u003e operation which \n   discards unreachable physical segments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting vsegids must cover all physical segments.\n     If they do not then there will be physical segments that are not \n     reachable from some virtual segment, and subsequent operations\n     like segmented fold will have the wrong work complexity.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "(Vector Int -\u003e Vector Int) -\u003e UPVSegd -\u003e UPVSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#updateVSegsReachable",
        "fct-type": "function",
        "title": "updateVSegsReachable"
      },
      "index": {
        "description": "Update the vsegids of UPVSegd where the result is guaranteed to cover all physical segments Using this version saves performing the cull operation which discards unreachable physical segments The resulting vsegids must cover all physical segments If they do not then there will be physical segments that are not reachable from some virtual segment and subsequent operations like segmented fold will have the wrong work complexity",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "updateVSegsReachable",
        "normalized": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd",
        "package": "dph-prim-par",
        "partial": "VSegs Reachable",
        "signature": "(Vector Int-\u003eVector Int)-\u003eUPVSegd-\u003eUPVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Check the internal consistency of a virutal segmentation descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-UPVSegd.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check the internal consistency of virutal segmentation descriptor",
        "hierarchy": "Data Array Parallel Unlifted Parallel UPVSegd",
        "module": "Data.Array.Parallel.Unlifted.Parallel.UPVSegd",
        "name": "valid",
        "normalized": "UPVSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "UPVSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel operations on unlifted arrays\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This is an internal API and shouldn't need to be used directly.\n     Client programs should use \u003ca\u003eData.Array.Parallel.Unlifted\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "Parallel operations on unlifted arrays This is an internal API and shouldn need to be used directly Client programs should use Data.Array.Parallel.Unlifted",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:allUP",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether all the elements in a array meet the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e Bool) -\u003e Vector e -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#allUP",
        "fct-type": "function",
        "title": "allUP"
      },
      "index": {
        "description": "Check whether all the elements in array meet the given predicate",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "allUP",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(e-\u003eBool)-\u003eVector e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:andUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the logical AND of all the elements in a array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#andUP",
        "fct-type": "function",
        "title": "andUP"
      },
      "index": {
        "description": "Compute the logical AND of all the elements in array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "andUP",
        "normalized": "Vector Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:anyUP",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether any of the elements in a array meet the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e Bool) -\u003e Vector e -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#anyUP",
        "fct-type": "function",
        "title": "anyUP"
      },
      "index": {
        "description": "Check whether any of the elements in array meet the given predicate",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "anyUP",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(e-\u003eBool)-\u003eVector e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:appendSUP",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented append.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd-\u003e UPSegd-\u003e Vector a-\u003e UPSegd-\u003e Vector a-\u003e Vector a",
        "fct-type": "function",
        "title": "appendSUP"
      },
      "index": {
        "description": "Segmented append",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "appendSUP",
        "normalized": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "SUP",
        "signature": "UPSegd-\u003eUPSegd-\u003eVector a-\u003eUPSegd-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:appendSUPV",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSegd-\u003e UPVSegd-\u003e Vectors a-\u003e UPVSegd-\u003e Vectors a-\u003e Vector a",
        "fct-type": "function",
        "title": "appendSUPV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "appendSUPV",
        "normalized": "UPSegd-\u003eUPVSegd-\u003eVectors a-\u003eUPVSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "SUPV",
        "signature": "UPSegd-\u003eUPVSegd-\u003eVectors a-\u003eUPVSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:bpermuteUP",
      "description": {
        "fct-descr": "\u003cp\u003eBackwards permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e Vector Int -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html#bpermuteUP",
        "fct-type": "function",
        "title": "bpermuteUP"
      },
      "index": {
        "description": "Backwards permutation",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "bpermuteUP",
        "normalized": "Vector a-\u003eVector Int-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector a-\u003eVector Int-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:combine2UP",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two vectors based on a selector. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The data vectors must have enough elements to satisfy the selector,\n     but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Tag -\u003e UPSelRep2 -\u003e Vector a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#combine2UP",
        "fct-type": "function",
        "title": "combine2UP"
      },
      "index": {
        "description": "Combine two vectors based on selector The data vectors must have enough elements to satisfy the selector but this is not checked",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "combine2UP",
        "normalized": "Vector Tag-\u003eUPSelRep-\u003eVector a-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Tag-\u003eUPSelRep-\u003eVector a-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:combineUP",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two vectors based on a selector. \n   If the selector is true then take the element from the first vector, \n   otherwise take it from the second.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The data vectors must have enough elements to satisfy the flag vector, \n     but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Bool -\u003e Vector a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#combineUP",
        "fct-type": "function",
        "title": "combineUP"
      },
      "index": {
        "description": "Combine two vectors based on selector If the selector is true then take the element from the first vector otherwise take it from the second The data vectors must have enough elements to satisfy the flag vector but this is not checked",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "combineUP",
        "normalized": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Bool-\u003eVector a-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:dropUP",
      "description": {
        "fct-descr": "\u003cp\u003eDrop a the element at the provided index from a vector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Subarrays.html#dropUP",
        "fct-type": "function",
        "title": "dropUP"
      },
      "index": {
        "description": "Drop the element at the provided index from vector",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "dropUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Int-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:emptyUP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#emptyUP",
        "fct-type": "function",
        "title": "emptyUP"
      },
      "index": {
        "description": "Construct an empty array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "emptyUP",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromStepLenEachUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromStepLenEachUP",
        "fct-type": "function",
        "title": "enumFromStepLenEachUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "enumFromStepLenEachUP",
        "normalized": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "From Step Len Each UP",
        "signature": "Int-\u003eVector Int-\u003eVector Int-\u003eVector Int-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromStepLenUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Vector Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromStepLenUP",
        "fct-type": "function",
        "title": "enumFromStepLenUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "enumFromStepLenUP",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eVector Int",
        "package": "dph-prim-par",
        "partial": "From Step Len UP",
        "signature": "Int-\u003eInt-\u003eInt-\u003eVector Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromThenToUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e a -\u003e a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromThenToUP",
        "fct-type": "function",
        "title": "enumFromThenToUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "enumFromThenToUP",
        "normalized": "a-\u003ea-\u003ea-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Then To UP",
        "signature": "a-\u003ea-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:enumFromToUP",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "a -\u003e a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Enum.html#enumFromToUP",
        "fct-type": "function",
        "title": "enumFromToUP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "enumFromToUP",
        "normalized": "a-\u003ea-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From To UP",
        "signature": "a-\u003ea-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromNestedUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCopy segments from a nested vectors and concatenate them into a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vector (Vector a) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromNestedUPSSegd",
        "fct-type": "function",
        "title": "extractsFromNestedUPSSegd"
      },
      "index": {
        "description": "Copy segments from nested vectors and concatenate them into new array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "extractsFromNestedUPSSegd",
        "normalized": "UPSSegd-\u003eVector(Vector a)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Nested UPSSegd",
        "signature": "UPSSegd-\u003eVector(Vector a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromVectorsUPSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPSSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPSSegd",
        "fct-type": "function",
        "title": "extractsFromVectorsUPSSegd"
      },
      "index": {
        "description": "TODO make this parallel",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "extractsFromVectorsUPSSegd",
        "normalized": "UPSSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPSSegd",
        "signature": "UPSSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromVectorsUPVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eSequential extracts from UPVSegd.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPVSegd",
        "fct-type": "function",
        "title": "extractsFromVectorsUPVSegd"
      },
      "index": {
        "description": "Sequential extracts from UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "extractsFromVectorsUPVSegd",
        "normalized": "UPVSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "UPVSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:extractsFromVectorsUPVSegdP",
      "description": {
        "fct-descr": "\u003cp\u003eParallel extracts from UPVSegd and Segmap\n   TODO: This just distributes the segmap over the gang, and will be unbalanced\n         if there aren't many segments, or they have varying sizes.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "UPVSegd -\u003e Vectors a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#extractsFromVectorsUPVSegdP",
        "fct-type": "function",
        "title": "extractsFromVectorsUPVSegdP"
      },
      "index": {
        "description": "Parallel extracts from UPVSegd and Segmap TODO This just distributes the segmap over the gang and will be unbalanced if there aren many segments or they have varying sizes",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "extractsFromVectorsUPVSegdP",
        "normalized": "UPVSegd-\u003eVectors a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "UPVSegd-\u003eVectors a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:filterUP",
      "description": {
        "fct-descr": "\u003cp\u003eKeep elements that match the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#filterUP",
        "fct-type": "function",
        "title": "filterUP"
      },
      "index": {
        "description": "Keep elements that match the given predicate",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "filterUP",
        "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:fold1UP",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003efoldl1UP\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#fold1UP",
        "fct-type": "function",
        "title": "fold1UP"
      },
      "index": {
        "description": "Alias for foldl1UP",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "fold1UP",
        "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldRUP",
      "description": {
        "fct-descr": "\u003cp\u003eRegular segmented fold.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Int -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#foldRUP",
        "fct-type": "function",
        "title": "foldRUP"
      },
      "index": {
        "description": "Regular segmented fold",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "foldRUP",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eInt-\u003eVector b-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "RUP",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eInt-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldUP",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected fold.\n   Note that this function has more constraints on its parameters than the\n   standard fold function from the Haskell Prelude.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWe need these constraints so that we can partition the fold across \n   several threads. Each thread folds a chunk of the input vector, \n   then we fold together all the results in the main thread.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldUP",
        "fct-type": "function",
        "title": "foldUP"
      },
      "index": {
        "description": "Undirected fold Note that this function has more constraints on its parameters than the standard fold function from the Haskell Prelude The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt We need these constraints so that we can partition the fold across several threads Each thread folds chunk of the input vector then we fold together all the results in the main thread",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "foldUP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldl1UP",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array, using the first element of the vector as the\n   neural element.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector contains no elements then you'll get a bounds-check error.\n\u003c/li\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldl1UP",
        "fct-type": "function",
        "title": "foldl1UP"
      },
      "index": {
        "description": "Left fold over an array using the first element of the vector as the neural element If the vector contains no elements then you ll get bounds-check error The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "foldl1UP",
        "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:foldlUP",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fold over an array. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector is empty then this returns the provided neural element.\n\u003c/li\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#foldlUP",
        "fct-type": "function",
        "title": "foldlUP"
      },
      "index": {
        "description": "Left fold over an array If the vector is empty then this returns the provided neural element The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "foldlUP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexedUP",
      "description": {
        "fct-descr": "\u003cp\u003eAssociate each element of the array with its index\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Vector (Int, e)",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#indexedUP",
        "fct-type": "function",
        "title": "indexedUP"
      },
      "index": {
        "description": "Associate each element of the array with its index",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "indexedUP",
        "normalized": "Vector a-\u003eVector(Int,a)",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eVector(Int,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexsFromVector",
      "description": {
        "fct-descr": "\u003cp\u003eLookup elements from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e Vector Int -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVector",
        "fct-type": "function",
        "title": "indexsFromVector"
      },
      "index": {
        "description": "Lookup elements from Vector TODO make this parallel",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "indexsFromVector",
        "normalized": "Vector a-\u003eVector Int-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vector",
        "signature": "Vector a-\u003eVector Int-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexsFromVectorsUPVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eLookup elements from some Vectors through a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vectors a -\u003e UPVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVectorsUPVSegd",
        "fct-type": "function",
        "title": "indexsFromVectorsUPVSegd"
      },
      "index": {
        "description": "Lookup elements from some Vectors through UPVSegd",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "indexsFromVectorsUPVSegd",
        "normalized": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:indexsFromVectorsUPVSegdP",
      "description": {
        "fct-descr": "\u003cp\u003eLookup elements from some \u003ccode\u003e\u003ca\u003eVectors\u003c/a\u003e\u003c/code\u003e through a \u003ccode\u003e\u003ca\u003eUPVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO: make this parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vectors a -\u003e UPVSegd -\u003e Vector (Int, Int) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Extracts.html#indexsFromVectorsUPVSegdP",
        "fct-type": "function",
        "title": "indexsFromVectorsUPVSegdP"
      },
      "index": {
        "description": "Lookup elements from some Vectors through UPVSegd TODO make this parallel",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "indexsFromVectorsUPVSegdP",
        "normalized": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "From Vectors UPVSegd",
        "signature": "Vectors a-\u003eUPVSegd-\u003eVector(Int,Int)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:interleaveUP",
      "description": {
        "fct-descr": "\u003cp\u003eInterleave elements of two arrays\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#interleaveUP",
        "fct-type": "function",
        "title": "interleaveUP"
      },
      "index": {
        "description": "Interleave elements of two arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "interleaveUP",
        "normalized": "Vector a-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:lengthUP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the length of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#lengthUP",
        "fct-type": "function",
        "title": "lengthUP"
      },
      "index": {
        "description": "Take the length of an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "lengthUP",
        "normalized": "Vector a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:mapUP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker to all elements of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#mapUP",
        "fct-type": "function",
        "title": "mapUP"
      },
      "index": {
        "description": "Apply worker to all elements of an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "mapUP",
        "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:maximumByUP",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the maximum element in an array under the given ordering\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e e -\u003e Ordering) -\u003e Vector e -\u003e e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumByUP",
        "fct-type": "function",
        "title": "maximumByUP"
      },
      "index": {
        "description": "Determine the maximum element in an array under the given ordering",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "maximumByUP",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "By UP",
        "signature": "(e-\u003ee-\u003eOrdering)-\u003eVector e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:maximumIndexByUP",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the index of the maximum element in an array under the\n   given ordering\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(e -\u003e e -\u003e Ordering) -\u003e Vector e -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumIndexByUP",
        "fct-type": "function",
        "title": "maximumIndexByUP"
      },
      "index": {
        "description": "Determine the index of the maximum element in an array under the given ordering",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "maximumIndexByUP",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eVector a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Index By UP",
        "signature": "(e-\u003ee-\u003eOrdering)-\u003eVector e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:maximumUP",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the maximum element in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#maximumUP",
        "fct-type": "function",
        "title": "maximumUP"
      },
      "index": {
        "description": "Determine the maximum element in an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "maximumUP",
        "normalized": "Vector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:nullUP",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Test whether the given array is empty\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#nullUP",
        "fct-type": "function",
        "title": "nullUP"
      },
      "index": {
        "description": "Test whether the given array is empty",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "nullUP",
        "normalized": "Vector a-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:orUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the logical OR of all the elements in a array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#orUP",
        "fct-type": "function",
        "title": "orUP"
      },
      "index": {
        "description": "Compute the logical OR of all the elements in array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "orUP",
        "normalized": "Vector Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:packUP",
      "description": {
        "fct-descr": "\u003cp\u003eTake elements of an array where a flag value is true, and pack them into\n   the result. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The souce and flag arrays must have the same length, but this is not checked.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e Vector Bool -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#packUP",
        "fct-type": "function",
        "title": "packUP"
      },
      "index": {
        "description": "Take elements of an array where flag value is true and pack them into the result The souce and flag arrays must have the same length but this is not checked",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "packUP",
        "normalized": "Vector a-\u003eVector Bool-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003eVector Bool-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:productUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the product of all the elements of an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector e -\u003e e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#productUP",
        "fct-type": "function",
        "title": "productUP"
      },
      "index": {
        "description": "Compute the product of all the elements of an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "productUP",
        "normalized": "Vector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:repeatUP",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat an array the given number of times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#repeatUP",
        "fct-type": "function",
        "title": "repeatUP"
      },
      "index": {
        "description": "Repeat an array the given number of times",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "repeatUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Int-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:replicateRSUP",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented replication.\n   Each element in the vector is replicated the given number of times.\n\u003c/p\u003e\u003cpre\u003ereplicateRSUP 2 [1, 2, 3, 4, 5] = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#replicateRSUP",
        "fct-type": "function",
        "title": "replicateRSUP"
      },
      "index": {
        "description": "Segmented replication Each element in the vector is replicated the given number of times replicateRSUP",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "replicateRSUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "RSUP",
        "signature": "Int-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:replicateUP",
      "description": {
        "fct-descr": "\u003cp\u003eYield an array where all elements contain the same value\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Basics.html#replicateUP",
        "fct-type": "function",
        "title": "replicateUP"
      },
      "index": {
        "description": "Yield an array where all elements contain the same value",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "replicateUP",
        "normalized": "Int-\u003ea-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Int-\u003ee-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:scanUP",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix scan. Similar to fold, but produce an array of the intermediate states.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker,\n     see \u003ccode\u003e\u003ca\u003efoldUP\u003c/a\u003e\u003c/code\u003e for discussion.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector a -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#scanUP",
        "fct-type": "function",
        "title": "scanUP"
      },
      "index": {
        "description": "Prefix scan Similar to fold but produce an array of the intermediate states The worker function must be associative The provided starting element must be neutral with respect to the worker see foldUP for discussion",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "scanUP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:sumRUP",
      "description": {
        "fct-descr": "\u003cp\u003eRegular segmented sum.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Vector e -\u003e Vector e",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Segmented.html#sumRUP",
        "fct-type": "function",
        "title": "sumRUP"
      },
      "index": {
        "description": "Regular segmented sum",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "sumRUP",
        "normalized": "Int-\u003eVector a-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "RUP",
        "signature": "Int-\u003eVector e-\u003eVector e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:sumUP",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the sum all the elements of a array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Sums.html#sumUP",
        "fct-type": "function",
        "title": "sumUP"
      },
      "index": {
        "description": "Compute the sum all the elements of array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "sumUP",
        "normalized": "Vector a-\u003ea",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:updateUP",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate elements in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector a -\u003e Vector (Int, a) -\u003e Vector a",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Permute.html#updateUP",
        "fct-type": "function",
        "title": "updateUP"
      },
      "index": {
        "description": "Update elements in an array",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "updateUP",
        "normalized": "Vector a-\u003eVector(Int,a)-\u003eVector a",
        "package": "dph-prim-par",
        "partial": "UP",
        "signature": "Vector a-\u003eVector(Int,a)-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted-Parallel.html#v:zipWithUP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to correponding elements of two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted.Parallel",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
        "fct-source": "src/Data-Array-Parallel-Unlifted-Parallel-Combinators.html#zipWithUP",
        "fct-type": "function",
        "title": "zipWithUP"
      },
      "index": {
        "description": "Apply worker function to correponding elements of two arrays",
        "hierarchy": "Data Array Parallel Unlifted Parallel",
        "module": "Data.Array.Parallel.Unlifted.Parallel",
        "name": "zipWithUP",
        "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
        "package": "dph-prim-par",
        "partial": "With UP",
        "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel implementation of the segmented array API defined in \u003ccode\u003edph-prim-interface\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome of them don't yet have parallel implementations, so we fall back\n   to the sequential ones from \u003ccode\u003edph-prim-seq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING:\u003c/em\u003e Although this library is intended to be used as a target\n   for the DPH vectoriser, it is also fine to use it directly from non\n   DPH programs. However, this library does not support nested parallelism\n   by itself. If you try to run further parallel computations in the workers\n   passed to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e etc, then they will just run\n   sequentially.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "module",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html",
        "fct-type": "module",
        "title": "Unlifted"
      },
      "index": {
        "description": "Parallel implementation of the segmented array API defined in dph-prim-interface Some of them don yet have parallel implementations so we fall back to the sequential ones from dph-prim-seq WARNING Although this library is intended to be used as target for the DPH vectoriser it is also fine to use it directly from non DPH programs However this library does not support nested parallelism by itself If you try to run further parallel computations in the workers passed to map zipWith fold etc then they will just run sequentially",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Unlifted",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Unlifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eArrays are stored as unboxed vectors. \n   They have bulk-strict semantics, so demanding one element demands them all.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#Array",
        "fct-type": "type",
        "title": "Array"
      },
      "index": {
        "description": "Arrays are stored as unboxed vectors They have bulk-strict semantics so demanding one element demands them all",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Array",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Arrays",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#Arrays",
        "fct-type": "type",
        "title": "Arrays"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Arrays",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Arrays",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Elt",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#Elt",
        "fct-type": "class",
        "title": "Elt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Elt",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Elt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Elts",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#Elts",
        "fct-type": "class",
        "title": "Elts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Elts",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Elts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:IOElt",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "class",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#IOElt",
        "fct-type": "class",
        "title": "IOElt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "IOElt",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "IOElt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:SSegd",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#SSegd",
        "fct-type": "type",
        "title": "SSegd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "SSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "SSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Segd",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#Segd",
        "fct-type": "type",
        "title": "Segd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Segd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:Sel2",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#Sel2",
        "fct-type": "type",
        "title": "Sel2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "Sel2",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:SelRep2",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#SelRep2",
        "fct-type": "type",
        "title": "SelRep2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "SelRep2",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Sel Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#t:VSegd",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "type",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#VSegd",
        "fct-type": "type",
        "title": "VSegd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "VSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:-43-:-43-",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Append two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#%2B%3A%2B",
        "fct-type": "function",
        "title": "(+:+)"
      },
      "index": {
        "description": "length result Append two arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "(+:+) +:+",
        "normalized": "Array a-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eO(length source). Compute the conjunction of all elements in a boolean array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Bool -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "length source Compute the conjunction of all elements in boolean array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "and",
        "normalized": "Array Bool-\u003eBool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:appendSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a segment descriptor that describes the result of appending two\n   segmented arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Int -\u003e SSegd -\u003e Int -\u003e SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#appendSSegd",
        "fct-type": "function",
        "title": "appendSSegd"
      },
      "index": {
        "description": "Produce segment descriptor that describes the result of appending two segmented arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "appendSSegd",
        "normalized": "SSegd-\u003eInt-\u003eSSegd-\u003eInt-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "SSegd",
        "signature": "SSegd-\u003eInt-\u003eSSegd-\u003eInt-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:appendVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a virtual segment descriptor that describes the result of \n   appending two segmented arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd-\u003e Int-\u003e VSegd-\u003e Int-\u003e VSegd",
        "fct-type": "function",
        "title": "appendVSegd"
      },
      "index": {
        "description": "Produce virtual segment descriptor that describes the result of appending two segmented arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "appendVSegd",
        "normalized": "VSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": "VSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:append_s",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Segmented append.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd-\u003e Segd-\u003e Array a-\u003e Segd-\u003e Array a-\u003e Array a",
        "fct-type": "function",
        "title": "append_s"
      },
      "index": {
        "description": "length result Segmented append",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "append_s",
        "normalized": "Segd-\u003eSegd-\u003eArray a-\u003eSegd-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Segd-\u003eSegd-\u003eArray a-\u003eSegd-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:append_vs",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd-\u003e VSegd-\u003e Arrays a-\u003e VSegd-\u003e Arrays a-\u003e Array a",
        "fct-type": "function",
        "title": "append_vs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "append_vs",
        "normalized": "Segd-\u003eVSegd-\u003eArrays a-\u003eVSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Segd-\u003eVSegd-\u003eArrays a-\u003eVSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:appends",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Append two \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, using work proportional to the length\n         of the outer array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a -\u003e Arrays a -\u003e Arrays a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#appends",
        "fct-type": "function",
        "title": "appends"
      },
      "index": {
        "description": "Append two Arrays using work proportional to the length of the outer array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "appends",
        "normalized": "Arrays a-\u003eArrays a-\u003eArrays a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Arrays a-\u003eArrays a-\u003eArrays a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:bpermute",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Backwards permutation of array elements.\n\u003c/p\u003e\u003cpre\u003ebpermute [50, 60, 20, 30] [0, 3, 2] = [50, 30, 20]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a-\u003e Array Int-\u003e Array a",
        "fct-type": "function",
        "title": "bpermute"
      },
      "index": {
        "description": "length result Backwards permutation of array elements bpermute",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "bpermute",
        "normalized": "Array a-\u003eArray Int-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray Int-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:bpermuteDft",
      "description": {
        "fct-descr": "\u003cp\u003eDefault backwards permutation.\n\u003c/p\u003e\u003cp\u003eThe values of the index-value pairs are written into the position in the\n   result array that is indicated by the corresponding index.\n\u003c/p\u003e\u003cp\u003eAll positions not covered by the index-value pairs will have the value\n   determined by the initialiser function for that index position.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e (Int -\u003e e) -\u003e Array (Int, e) -\u003e Array e",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#bpermuteDft",
        "fct-type": "function",
        "title": "bpermuteDft"
      },
      "index": {
        "description": "Default backwards permutation The values of the index-value pairs are written into the position in the result array that is indicated by the corresponding index All positions not covered by the index-value pairs will have the value determined by the initialiser function for that index position",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "bpermuteDft",
        "normalized": "Int-\u003e(Int-\u003ea)-\u003eArray(Int,a)-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "Dft",
        "signature": "Int-\u003e(Int-\u003ee)-\u003eArray(Int,e)-\u003eArray e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two arrays, \n    using a flags array to tell us where to get each element from.\n\u003c/p\u003e\u003cpre\u003ecombine [T, F, F, T, T, F] [1, 2, 3] [4, 5, 6] = [1, 4, 5, 2, 3, 6]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Bool -\u003e Array a -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "Combine two arrays using flags array to tell us where to get each element from combine",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "combine",
        "normalized": "Array Bool-\u003eArray a-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array Bool-\u003eArray a-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:combine2",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e, but use a precomputed selector to speed up the process.\n\u003c/p\u003e\u003cp\u003eSee the description of \u003ccode\u003e\u003ca\u003emkSel2\u003c/a\u003e\u003c/code\u003e for how this works.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag -\u003e SelRep2 -\u003e Array a -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#combine2",
        "fct-type": "function",
        "title": "combine2"
      },
      "index": {
        "description": "Like combine but use precomputed selector to speed up the process See the description of mkSel2 for how this works",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "combine2",
        "normalized": "Array Tag-\u003eSelRep-\u003eArray a-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array Tag-\u003eSelRep-\u003eArray a-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:combine2VSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two virtual segment descriptors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Sel2-\u003e VSegd-\u003e Int-\u003e VSegd-\u003e Int-\u003e VSegd",
        "fct-type": "function",
        "title": "combine2VSegd"
      },
      "index": {
        "description": "Combine two virtual segment descriptors",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "combine2VSegd",
        "normalized": "Sel-\u003eVSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": "Sel-\u003eVSegd-\u003eInt-\u003eVSegd-\u003eInt-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of elements in array that are equal to the given value.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Count the number of elements in array that are equal to the given value",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "count",
        "normalized": "Array a-\u003ea-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:count_s",
      "description": {
        "fct-descr": "\u003cp\u003eSegmented count.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Array a -\u003e a -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#count_s",
        "fct-type": "function",
        "title": "count_s"
      },
      "index": {
        "description": "Segmented count",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "count_s",
        "normalized": "Segd-\u003eArray a-\u003ea-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Segd-\u003eArray a-\u003ea-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:count_ss",
      "description": {
        "fct-descr": "\u003cp\u003eScattered segmented count.\n\u003c/p\u003e\u003cp\u003eNOTE: This is a transitory interface, and will be removed in future versions.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Vector (Array a) -\u003e a -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#count_ss",
        "fct-type": "function",
        "title": "count_ss"
      },
      "index": {
        "description": "Scattered segmented count NOTE This is transitory interface and will be removed in future versions",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "count_ss",
        "normalized": "SSegd-\u003eVector(Array a)-\u003ea-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "SSegd-\u003eVector(Array a)-\u003ea-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Drop elements from the front of an array, \n         returning the latter portion.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "length result Drop elements from the front of an array returning the latter portion",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "drop",
        "normalized": "Int-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the total number of elements defined by a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#elementsSegd",
        "fct-type": "function",
        "title": "elementsSegd"
      },
      "index": {
        "description": "Yield the total number of elements defined by Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "elementsSegd",
        "normalized": "Segd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Segd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSel2_0",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of elements that will be taken from the first array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Sel2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#elementsSel2_0",
        "fct-type": "function",
        "title": "elementsSel2_0"
      },
      "index": {
        "description": "Yield the number of elements that will be taken from the first array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "elementsSel2_0",
        "normalized": "Sel-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": "Sel-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSel2_1",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of elements that will be taken from the second array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Sel2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#elementsSel2_1",
        "fct-type": "function",
        "title": "elementsSel2_1"
      },
      "index": {
        "description": "Yield the number of elements that will be taken from the second array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "elementsSel2_1",
        "normalized": "Sel-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": "Sel-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSelRep2_0",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of elements to take from the first array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag -\u003e SelRep2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#elementsSelRep2_0",
        "fct-type": "function",
        "title": "elementsSelRep2_0"
      },
      "index": {
        "description": "Yield the number of elements to take from the first array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "elementsSelRep2_0",
        "normalized": "Array Tag-\u003eSelRep-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Sel Rep",
        "signature": "Array Tag-\u003eSelRep-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:elementsSelRep2_1",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of elements to take from the second array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag -\u003e SelRep2 -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#elementsSelRep2_1",
        "fct-type": "function",
        "title": "elementsSelRep2_1"
      },
      "index": {
        "description": "Yield the number of elements to take from the second array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "elementsSelRep2_1",
        "normalized": "Array Tag-\u003eSelRep-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Sel Rep",
        "signature": "Array Tag-\u003eSelRep-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an array with no elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct an array with no elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "empty",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptySSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#emptySSegd",
        "fct-type": "function",
        "title": "emptySSegd"
      },
      "index": {
        "description": "Construct an empty SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "emptySSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "SSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptySegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#emptySegd",
        "fct-type": "function",
        "title": "emptySegd"
      },
      "index": {
        "description": "Construct an empty Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "emptySegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptyVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#emptyVSegd",
        "fct-type": "function",
        "title": "emptyVSegd"
      },
      "index": {
        "description": "Construct an empty SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "emptyVSegd",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:emptys",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an empty \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e with no elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#emptys",
        "fct-type": "function",
        "title": "emptys"
      },
      "index": {
        "description": "Construct an empty Arrays with no elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "emptys",
        "normalized": "",
        "package": "dph-prim-par",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromStepLen",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#enumFromStepLen",
        "fct-type": "function",
        "title": "enumFromStepLen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "enumFromStepLen",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "From Step Len",
        "signature": "Int-\u003eInt-\u003eInt-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromStepLenEach",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Array Int -\u003e Array Int -\u003e Array Int -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#enumFromStepLenEach",
        "fct-type": "function",
        "title": "enumFromStepLenEach"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "enumFromStepLenEach",
        "normalized": "Int-\u003eArray Int-\u003eArray Int-\u003eArray Int-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "From Step Len Each",
        "signature": "Int-\u003eArray Int-\u003eArray Int-\u003eArray Int-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromThenTo",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#enumFromThenTo",
        "fct-type": "function",
        "title": "enumFromThenTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "enumFromThenTo",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "From Then To",
        "signature": "Int-\u003eInt-\u003eInt-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:enumFromTo",
      "description": {
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Int -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "enumFromTo",
        "normalized": "Int-\u003eInt-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "From To",
        "signature": "Int-\u003eInt-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extract",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Extract a subrange of elements from an array.\n\u003c/p\u003e\u003cpre\u003eextract [23, 42, 93, 50, 27] 1 3  = [42, 93, 50]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a-\u003e Int-\u003e Int-\u003e Array a",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "length result Extract subrange of elements from an array extract",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "extract",
        "normalized": "Array a-\u003eInt-\u003eInt-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eInt-\u003eInt-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extracts_ass",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtract all the segments defined by the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e,\n   returning them concatenated in a fresh \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd-\u003e Arrays a-\u003e Array a",
        "fct-type": "function",
        "title": "extracts_ass"
      },
      "index": {
        "description": "length result Extract segments defined by SSegd Extract all the segments defined by the SSegd from the Arrays returning them concatenated in fresh Array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "extracts_ass",
        "normalized": "SSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "SSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extracts_avs",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExtract all the segments defined by the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e,\n   returning them concatenated in a fresh \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd-\u003e Arrays a-\u003e Array a",
        "fct-type": "function",
        "title": "extracts_avs"
      },
      "index": {
        "description": "length result Extract segments defined by VSegd Extract all the segments defined by the VSegd from the Arrays returning them concatenated in fresh Array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "extracts_avs",
        "normalized": "VSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "VSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:extracts_nss",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Extract segments defined by a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e from a vector of arrays.\n\u003c/p\u003e\u003cp\u003eNOTE: This is a transitory interface, and will be removed in future versions.\n         Use \u003ccode\u003e\u003ca\u003eextracts_ass\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Vector (Array a) -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#extracts_nss",
        "fct-type": "function",
        "title": "extracts_nss"
      },
      "index": {
        "description": "length result Extract segments defined by SSegd from vector of arrays NOTE This is transitory interface and will be removed in future versions Use extracts ass instead",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "extracts_nss",
        "normalized": "SSegd-\u003eVector(Array a)-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "SSegd-\u003eVector(Array a)-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the elements from an array that match the given predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e Bool) -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Extract the elements from an array that match the given predicate",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected fold over an array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Undirected fold over an array The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected fold, using the first element to initialise the state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The worker function must be associative.\n\u003c/li\u003e\u003cli\u003e The provided starting element must be neutral with respect to the worker.\n     For example 0 is neutral wrt (+) and 1 is neutral wrt (*).\n\u003c/li\u003e\u003cli\u003e If the array contains no elements then you'll get a bounds check \u003ccode\u003eerror\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Array a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold1",
        "fct-type": "function",
        "title": "fold1"
      },
      "index": {
        "description": "Undirected fold using the first element to initialise the state The worker function must be associative The provided starting element must be neutral with respect to the worker For example is neutral wrt and is neutral wrt If the array contains no elements then you ll get bounds check error",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold1",
        "normalized": "(a-\u003ea-\u003ea)-\u003eArray a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eArray a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1_s",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_s\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to initialise\n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Segd -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold1_s",
        "fct-type": "function",
        "title": "fold1_s"
      },
      "index": {
        "description": "Like fold but using the first element of each segment to initialise the state of that segment Same preconditions as fold1",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold1_s",
        "normalized": "(a-\u003ea-\u003ea)-\u003eSegd-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eSegd-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1_ss",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_ss\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to intialise \n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e SSegd -\u003e Arrays a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold1_ss",
        "fct-type": "function",
        "title": "fold1_ss"
      },
      "index": {
        "description": "Like fold ss but using the first element of each segment to intialise the state of that segment Same preconditions as fold1",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold1_ss",
        "normalized": "(a-\u003ea-\u003ea)-\u003eSSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eSSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold1_vs",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_vs\u003c/a\u003e\u003c/code\u003e, but using the first element of each segment to initialise \n   the state of that segment.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e VSegd -\u003e Arrays a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold1_vs",
        "fct-type": "function",
        "title": "fold1_vs"
      },
      "index": {
        "description": "Like fold vs but using the first element of each segment to initialise the state of that segment Same preconditions as fold1",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold1_vs",
        "normalized": "(a-\u003ea-\u003ea)-\u003eVSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eVSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_r",
      "description": {
        "fct-descr": "\u003cp\u003eRegular segmented fold. \n\u003c/p\u003e\u003cp\u003eAll segements have the given length.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Int -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold_r",
        "fct-type": "function",
        "title": "fold_r"
      },
      "index": {
        "description": "Regular segmented fold All segements have the given length Same preconditions as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold_r",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eInt-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_s",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected segmented fold. \n\u003c/p\u003e\u003cp\u003eAll segments are folded individually, and the result contains one\n   element for each segment. \n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Segd -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold_s",
        "fct-type": "function",
        "title": "fold_s"
      },
      "index": {
        "description": "Undirected segmented fold All segments are folded individually and the result contains one element for each segment Same preconditions as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold_s",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eSegd-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eSegd-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_ss",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected scattered segmented fold.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efold_s\u003c/a\u003e\u003c/code\u003e, but the segments can be scattered through an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e SSegd -\u003e Arrays a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold_ss",
        "fct-type": "function",
        "title": "fold_ss"
      },
      "index": {
        "description": "Undirected scattered segmented fold Like fold but the segments can be scattered through an Arrays Same preconditions as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold_ss",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eSSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eSSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fold_vs",
      "description": {
        "fct-descr": "\u003cp\u003eUndirected fold over virtual segments.\n\u003c/p\u003e\u003cp\u003eThe physical segments defined by the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e are folded individually, \n   and these results are replicated according to the virtual segment\n   id table of the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e. The result contains as many elements as there\n   virtual segments.\n\u003c/p\u003e\u003cp\u003eSame preconditions as \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e VSegd -\u003e Arrays a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fold_vs",
        "fct-type": "function",
        "title": "fold_vs"
      },
      "index": {
        "description": "Undirected fold over virtual segments The physical segments defined by the VSegd are folded individually and these results are replicated according to the virtual segment id table of the VSegd The result contains as many elements as there virtual segments Same preconditions as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fold_vs",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of elements to an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "[a] -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list of elements to an array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fromList",
        "normalized": "[a]-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "List",
        "signature": "[a]-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fromVectors",
      "description": {
        "fct-descr": "\u003cp\u003eO(number of inner arrays). \n   Convert a boxed vector of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Vector (Array a) -\u003e Arrays a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fromVectors",
        "fct-type": "function",
        "title": "fromVectors"
      },
      "index": {
        "description": "number of inner arrays Convert boxed vector of Array to an Arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fromVectors",
        "normalized": "Vector(Array a)-\u003eArrays a",
        "package": "dph-prim-par",
        "partial": "Vectors",
        "signature": "Vector(Array a)-\u003eArrays a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:fsts",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the first elements of an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array (a, b) -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#fsts",
        "fct-type": "function",
        "title": "fsts"
      },
      "index": {
        "description": "Take the first elements of an array of pairs",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "fsts",
        "normalized": "Array(a,b)-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array(a,b)-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:generate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new array given its length and a function to compute each element.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e (Int -\u003e a) -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#generate",
        "fct-type": "function",
        "title": "generate"
      },
      "index": {
        "description": "Generate new array given its length and function to compute each element",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "generate",
        "normalized": "Int-\u003e(Int-\u003ea)-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003e(Int-\u003ea)-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:getSegOfSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the length, segment index, starting index, and source id of a segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Int -\u003e (Int, Int, Int, Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#getSegOfSSegd",
        "fct-type": "function",
        "title": "getSegOfSSegd"
      },
      "index": {
        "description": "Get the length segment index starting index and source id of segment",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "getSegOfSSegd",
        "normalized": "SSegd-\u003eInt-\u003e(Int,Int,Int,Int)",
        "package": "dph-prim-par",
        "partial": "Seg Of SSegd",
        "signature": "SSegd-\u003eInt-\u003e(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:getSegOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Get the length, starting index, and source id of a segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Int -\u003e (Int, Int, Int)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#getSegOfVSegd",
        "fct-type": "function",
        "title": "getSegOfVSegd"
      },
      "index": {
        "description": "Get the length starting index and source id of segment",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "getSegOfVSegd",
        "normalized": "VSegd-\u003eInt-\u003e(Int,Int,Int)",
        "package": "dph-prim-par",
        "partial": "Seg Of VSegd",
        "signature": "VSegd-\u003eInt-\u003e(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:hGet",
      "description": {
        "fct-descr": "\u003cp\u003eRead an array from a file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Handle -\u003e IO (Array a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#hGet",
        "fct-type": "function",
        "title": "hGet"
      },
      "index": {
        "description": "Read an array from file",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "hGet",
        "normalized": "Handle-\u003eIO(Array a)",
        "package": "dph-prim-par",
        "partial": "Get",
        "signature": "Handle-\u003eIO(Array a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:hPut",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an array to a file.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Handle -\u003e Array a -\u003e IO ()",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#hPut",
        "fct-type": "function",
        "title": "hPut"
      },
      "index": {
        "description": "Write an array to file",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "hPut",
        "normalized": "Handle-\u003eArray a-\u003eIO()",
        "package": "dph-prim-par",
        "partial": "Put",
        "signature": "Handle-\u003eArray a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Retrieve a numbered element from an array.\n\u003c/p\u003e\u003cp\u003eThe first argument gives a source-code location for out-of-bounds errors.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "String -\u003e Array a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Retrieve numbered element from an array The first argument gives source-code location for out-of-bounds errors",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "index",
        "normalized": "String-\u003eArray a-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "String-\u003eArray a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indexed",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Tag each element of an array with its index.\n\u003c/p\u003e\u003cpre\u003eindexed [42, 93, 13] = [(0, 42), (1, 93), (2, 13)]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array (Int, a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indexed",
        "fct-type": "function",
        "title": "indexed"
      },
      "index": {
        "description": "length result Tag each element of an array with its index indexed",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indexed",
        "normalized": "Array a-\u003eArray(Int,a)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray(Int,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indexs",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Scattered indexing from a single \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is an alias for \u003ccode\u003e\u003ca\u003ebpermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array Int -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indexs",
        "fct-type": "function",
        "title": "indexs"
      },
      "index": {
        "description": "length result Scattered indexing from single Array This is an alias for bpermute",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indexs",
        "normalized": "Array a-\u003eArray Int-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray Int-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indexs_avs",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Scattered indexing through a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe index array contains pairs of segment id and the index within that \n   segment. \n\u003c/p\u003e\u003cp\u003eWe use the \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e to map the pairs to 2D indices within the \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, \n   and return an array of the resulting elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a-\u003e VSegd-\u003e Array (Int, Int)-\u003e Array a",
        "fct-type": "function",
        "title": "indexs_avs"
      },
      "index": {
        "description": "length result Scattered indexing through VSegd The index array contains pairs of segment id and the index within that segment We use the VSegd to map the pairs to indices within the Arrays and return an array of the resulting elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indexs_avs",
        "normalized": "Arrays a-\u003eVSegd-\u003eArray(Int,Int)-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Arrays a-\u003eVSegd-\u003eArray(Int,Int)-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesOfSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the indices field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indicesOfSSegd",
        "fct-type": "function",
        "title": "indicesOfSSegd"
      },
      "index": {
        "description": "Yield the indices field of SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indicesOfSSegd",
        "normalized": "SSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Of SSegd",
        "signature": "SSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment starting indices of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indicesSegd",
        "fct-type": "function",
        "title": "indicesSegd"
      },
      "index": {
        "description": "Yield the segment starting indices of Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indicesSegd",
        "normalized": "Segd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Segd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the indices array of a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Sel2 -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indicesSel2",
        "fct-type": "function",
        "title": "indicesSel2"
      },
      "index": {
        "description": "Yield the indices array of selector",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indicesSel2",
        "normalized": "Sel-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": "Sel-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indicesSelRep2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the \u003ccode\u003eindices\u003c/code\u003e field from a \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag -\u003e SelRep2 -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indicesSelRep2",
        "fct-type": "function",
        "title": "indicesSelRep2"
      },
      "index": {
        "description": "Take the indices field from SelRep2",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indicesSelRep2",
        "normalized": "Array Tag-\u003eSelRep-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Sel Rep",
        "signature": "Array Tag-\u003eSelRep-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:indices_s",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Segmented indices. \n\u003c/p\u003e\u003cp\u003eConstruct an array containing containing the segments defined by the\n   given \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEach segment will contain the elements \u003ccode\u003e[0..len-1]\u003c/code\u003e where \u003ccode\u003elen\u003c/code\u003e is the\n   length of that segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#indices_s",
        "fct-type": "function",
        "title": "indices_s"
      },
      "index": {
        "description": "length result Segmented indices Construct an array containing containing the segments defined by the given Segd Each segment will contain the elements len-1 where len is the length of that segment",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "indices_s",
        "normalized": "Segd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Segd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:interleave",
      "description": {
        "fct-descr": "\u003cp\u003eInterleave the elements of two arrays.\n\u003c/p\u003e\u003cpre\u003einterleave [1, 2, 3] [4, 5, 6] = [1, 4, 2, 5, 3, 6]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#interleave",
        "fct-type": "function",
        "title": "interleave"
      },
      "index": {
        "description": "Interleave the elements of two arrays interleave",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "interleave",
        "normalized": "Array a-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:isContiguousSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). True when a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e has been constructed by promoting a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat\n   array, and consumers can avoid looking at the real starts and\n   sources fields.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#isContiguousSSegd",
        "fct-type": "function",
        "title": "isContiguousSSegd"
      },
      "index": {
        "description": "True when SSegd has been constructed by promoting SSegd In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "isContiguousSSegd",
        "normalized": "SSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Contiguous SSegd",
        "signature": "SSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:isContiguousVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). If true then the \u003ccode\u003estarts\u003c/code\u003e field is identical to the \u003ccode\u003eindices\u003c/code\u003e field\n         and the sourceids are all 0s.\n\u003c/p\u003e\u003cp\u003eIn this case all the data elements are in one contiguous flat array, and\n   consumers can avoid looking at the real starts and sources fields.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#isContiguousVSegd",
        "fct-type": "function",
        "title": "isContiguousVSegd"
      },
      "index": {
        "description": "If true then the starts field is identical to the indices field and the sourceids are all In this case all the data elements are in one contiguous flat array and consumers can avoid looking at the real starts and sources fields",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "isContiguousVSegd",
        "normalized": "VSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Contiguous VSegd",
        "signature": "VSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:isManifestVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). If true then the segments are all unshared, and the \u003ccode\u003evsegids\u003c/code\u003e field \n         be just \u003ccode\u003e[0..len-1]\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eConsumers can check this field to avoid demanding the \u003ccode\u003evsegids\u003c/code\u003e field.\n   This can avoid the need for it to be constructed in the first place, \n   due to lazy evaluation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#isManifestVSegd",
        "fct-type": "function",
        "title": "isManifestVSegd"
      },
      "index": {
        "description": "If true then the segments are all unshared and the vsegids field be just len-1 Consumers can check this field to avoid demanding the vsegids field This can avoid the need for it to be constructed in the first place due to lazy evaluation",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "isManifestVSegd",
        "normalized": "VSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Manifest VSegd",
        "signature": "VSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of elements in an array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Yield the number of elements in an array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "length",
        "normalized": "Array a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthOfSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengthOfSSegd",
        "fct-type": "function",
        "title": "lengthOfSSegd"
      },
      "index": {
        "description": "Yield the length of SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengthOfSSegd",
        "normalized": "SSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Of SSegd",
        "signature": "SSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengthOfVSegd",
        "fct-type": "function",
        "title": "lengthOfVSegd"
      },
      "index": {
        "description": "Yield the length of VSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengthOfVSegd",
        "normalized": "VSegd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Of VSegd",
        "signature": "VSegd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the length of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengthSegd",
        "fct-type": "function",
        "title": "lengthSegd"
      },
      "index": {
        "description": "Yield the length of Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengthSegd",
        "normalized": "Segd-\u003eInt",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Segd-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengths",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the number of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e in an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a -\u003e Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengths",
        "fct-type": "function",
        "title": "lengths"
      },
      "index": {
        "description": "Yield the number of Array in an Arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengths",
        "normalized": "Arrays a-\u003eInt",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Arrays a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthsOfSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengthsOfSSegd",
        "fct-type": "function",
        "title": "lengthsOfSSegd"
      },
      "index": {
        "description": "Yield the segment lengths of SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengthsOfSSegd",
        "normalized": "SSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Of SSegd",
        "signature": "SSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthsSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengthsSegd",
        "fct-type": "function",
        "title": "lengthsSegd"
      },
      "index": {
        "description": "Yield the segment lengths of Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengthsSegd",
        "normalized": "Segd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Segd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:lengthsToSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(max(segs, threads) . log segs). \n   Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e from an array of segment lengths.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Int -\u003e Segd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#lengthsToSegd",
        "fct-type": "function",
        "title": "lengthsToSegd"
      },
      "index": {
        "description": "max segs threads log segs Construct Segd from an array of segment lengths",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "lengthsToSegd",
        "normalized": "Array Int-\u003eSegd",
        "package": "dph-prim-par",
        "partial": "To Segd",
        "signature": "Array Int-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to each element of an array, yielding a new array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b) -\u003e Array a -\u003e Array b",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply worker function to each element of an array yielding new array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eArray a-\u003eArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mbpermute",
      "description": {
        "fct-descr": "\u003cp\u003eCombination of map and bpermute.\n\u003c/p\u003e\u003cp\u003eThe advantage of using this combined version is that we don't need\n   to apply the parameter function to source elements that don't appear\n   in the result.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b) -\u003e Array a -\u003e Array Int -\u003e Array b",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#mbpermute",
        "fct-type": "function",
        "title": "mbpermute"
      },
      "index": {
        "description": "Combination of map and bpermute The advantage of using this combined version is that we don need to apply the parameter function to source elements that don appear in the result",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "mbpermute",
        "normalized": "(a-\u003eb)-\u003eArray a-\u003eArray Int-\u003eArray b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eArray a-\u003eArray Int-\u003eArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a Scattered Segment Descriptor.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e is an extension of a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e that that allows the segments to be\n   scattered through multiple flat arrays.\n\u003c/p\u003e\u003cp\u003eEach segment is associated with a source id that indicates what \n   flat array it is in, along with the starting index in that flat array.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The segments need not cover the entire flat array.\n\u003c/li\u003e\u003cli\u003e Different segments may point to the same elements.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Int-\u003e Array Int-\u003e Segd-\u003e SSegd",
        "fct-type": "function",
        "title": "mkSSegd"
      },
      "index": {
        "description": "Construct Scattered Segment Descriptor SSegd is an extension of Segd that that allows the segments to be scattered through multiple flat arrays Each segment is associated with source id that indicates what flat array it is in along with the starting index in that flat array The segments need not cover the entire flat array Different segments may point to the same elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "mkSSegd",
        "normalized": "Array Int-\u003eArray Int-\u003eSegd-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "SSegd",
        "signature": "Array Int-\u003eArray Int-\u003eSegd-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(max(segs, threads) . log segs). Construct a segment descriptor.\n\u003c/p\u003e\u003cp\u003eA segment desciptor defines an irregular 2D array based on a flat, 1D array\n   of elements. The defined array is a nested array of segments, where every\n   segment covers some of the elements from the flat array. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The starting indices must be equal to \u003ccode\u003einit (scanl (+) 0 lengths)\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e If you don't want to cover all the elements from the flat arrary then\n     use a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n   flat array data: [1 2 3 4 5 6 7 8]\n     (segmentation)  --- ----- - ---\n     segd  lengths: [2, 3, 1, 2]\n           indices: [0, 2, 5, 6]\n          elements: 8 \n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Int-\u003e Array Int-\u003e Int-\u003e Segd",
        "fct-type": "function",
        "title": "mkSegd"
      },
      "index": {
        "description": "max segs threads log segs Construct segment descriptor segment desciptor defines an irregular array based on flat array of elements The defined array is nested array of segments where every segment covers some of the elements from the flat array The starting indices must be equal to init scanl lengths If you don want to cover all the elements from the flat arrary then use SSegd instead Example flat array data segmentation segd lengths indices elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "mkSegd",
        "normalized": "Array Int-\u003eArray Int-\u003eInt-\u003eSegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Array Int-\u003eArray Int-\u003eInt-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a selector.\n\u003c/p\u003e\u003cp\u003eA selector is a description of how to perform a \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e\u003cp\u003eSuppose we are evaluating the following expression:\n\u003c/p\u003e\u003cpre\u003ecombine [F,F,T,F,T,T] [1,2,3] [4,5,6] = [4,5,1,6,2,3]\u003c/pre\u003e\u003cp\u003eThis is difficult to parallelise. For each element in the result, the\n   source array we get this element from depends on the tag values associated\n   with all previous elements.\n\u003c/p\u003e\u003cp\u003eHowever, if we going to apply \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e several times with the same flags array, \n   we can precompute a selector that tells us where to get each element. \n   The selector contains the original flags, as well as the source index telling\n   us where to get each element for the result array.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003etagsToIndices2 [F,F,T,F,T,T]   -- tags\n             = [0,1,0,2,1,2]   -- indices\n\u003c/pre\u003e\u003cp\u003eThis says get the first element from index 0 in the second array, \n     then from index 1 in the second array,\n     then index 0 in the first array ...\n\u003c/p\u003e\u003cp\u003eThe selector then consists of both the \u003ccode\u003etag\u003c/code\u003e and \u003ccode\u003eindices\u003c/code\u003e arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag-\u003e Array Int-\u003e Int-\u003e Int-\u003e SelRep2-\u003e Sel2",
        "fct-type": "function",
        "title": "mkSel2"
      },
      "index": {
        "description": "Construct selector selector is description of how to perform combine operation Suppose we are evaluating the following expression combine This is difficult to parallelise For each element in the result the source array we get this element from depends on the tag values associated with all previous elements However if we going to apply combine several times with the same flags array we can precompute selector that tells us where to get each element The selector contains the original flags as well as the source index telling us where to get each element for the result array For example tagsToIndices2 tags indices This says get the first element from index in the second array then from index in the second array then index in the first array The selector then consists of both the tag and indices arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "mkSel2",
        "normalized": "Array Tag-\u003eArray Int-\u003eInt-\u003eInt-\u003eSelRep-\u003eSel",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": "Array Tag-\u003eArray Int-\u003eInt-\u003eInt-\u003eSelRep-\u003eSel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkSelRep2",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Construct a parallel selector representation.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e describes how to distribute the two data vectors\n   corresponding to a \u003ccode\u003e\u003ca\u003eSel2\u003c/a\u003e\u003c/code\u003e across several PEs.\n\u003c/p\u003e\u003cp\u003eSuppose we want to perform the following \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e\n combine [F,F,T,T,F,T,F,F,T] [A0,A1,A2,A3,A4] [B0,B1,B2,B3] \n   = [A0,A1,B0,B1,A2,B2,A3,A4,B3]\n\u003c/pre\u003e\u003cp\u003eThe first array is the flags array, that says which of the data arrays to\n   get each successive element from. As \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e is difficult to compute\n   in parallel, if we are going to perform several combines with the same\n   flags array, we can precompute a selector that tells us where to get each\n   element. The selector contains the original flags, as well as the source\n   index telling us where to get each element for the result array.\n\u003c/p\u003e\u003cpre\u003e\n flags:   [F,F,T,T,F,T,F,F,T]\n indices: [0,1,0,1,2,2,3,4,3]\n\u003c/pre\u003e\u003cp\u003eSuppose we want to distribute the combine operation across 3 PEs. It's\n  easy to split the selector like so:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n flags:   [F,F,T]            [T,F,T]           [F,F,T] \n indices: [0,1,0]            [1,2,2]           [3,4,3]\n\u003c/pre\u003e\u003cp\u003eWe now need to split the two data arrays. Each PE needs slices of the data\n  arrays that correspond to the parts of the selector that were given to it.\n  For the current example we get:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n data_A:   [A0,A1]            [A2]              [A3,A4]\n data_B:   [B0]               [B1,B2]           [B3]\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSelRep2\u003c/a\u003e\u003c/code\u003e contains the starting index and length of each of of these\n  slices:\n\u003c/p\u003e\u003cpre\u003e\n            PE0                PE1               PE2\n      ((0, 0), (2, 1))   ((2, 1), (1, 2))  ((3, 3), (2, 1))\n       indices   lens      indices  lens    indices  lens\n\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag -\u003e SelRep2",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#mkSelRep2",
        "fct-type": "function",
        "title": "mkSelRep2"
      },
      "index": {
        "description": "Construct parallel selector representation SelRep2 describes how to distribute the two data vectors corresponding to Sel2 across several PEs Suppose we want to perform the following combine operation combine A0 A1 A2 A3 A4 B0 B1 B2 B3 A0 A1 B0 B1 A2 B2 A3 A4 B3 The first array is the flags array that says which of the data arrays to get each successive element from As combine is difficult to compute in parallel if we are going to perform several combines with the same flags array we can precompute selector that tells us where to get each element The selector contains the original flags as well as the source index telling us where to get each element for the result array flags indices Suppose we want to distribute the combine operation across PEs It easy to split the selector like so PE0 PE1 PE2 flags indices We now need to split the two data arrays Each PE needs slices of the data arrays that correspond to the parts of the selector that were given to it For the current example we get PE0 PE1 PE2 data A0 A1 A2 A3 A4 data B0 B1 B2 B3 The SelRep2 contains the starting index and length of each of of these slices PE0 PE1 PE2 indices lens indices lens indices lens",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "mkSelRep2",
        "normalized": "Array Tag-\u003eSelRep",
        "package": "dph-prim-par",
        "partial": "Sel Rep",
        "signature": "Array Tag-\u003eSelRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:mkVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a Virtual Segment Descriptor.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e is an extension of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e that allows data from the underlying\n   flat array to be shared between segments. For example, you can define an array\n   of 10 virtual segments that all have the same length and elements as a\n   single physical segment.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Internally we maintain the invariant that all physical segments must be\n     reachable by some virtual segment. This is needed to ensure that operations\n     such as \u003ccode\u003e\u003ca\u003efold_ss\u003c/a\u003e\u003c/code\u003e segmented fold have the right complexity. \n\u003c/li\u003e\u003cli\u003e If you don't need the invariant then you can sidestep the code that\n     maintains it by using the redundant versions of the following operators, \n     and sometimes get faster code.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Int-\u003e SSegd-\u003e VSegd",
        "fct-type": "function",
        "title": "mkVSegd"
      },
      "index": {
        "description": "Construct Virtual Segment Descriptor VSegd is an extension of SSegd that allows data from the underlying flat array to be shared between segments For example you can define an array of virtual segments that all have the same length and elements as single physical segment Internally we maintain the invariant that all physical segments must be reachable by some virtual segment This is needed to ensure that operations such as fold ss segmented fold have the right complexity If you don need the invariant then you can sidestep the code that maintains it by using the redundant versions of the following operators and sometimes get faster code",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "mkVSegd",
        "normalized": "Array Int-\u003eSSegd-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": "Array Int-\u003eSSegd-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result).\n   Extract elements of an array where the associated flag is true.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array Bool -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "length result Extract elements of an array where the associated flag is true",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "pack",
        "normalized": "Array a-\u003eArray Bool-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray Bool-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:packByTag",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result).\n   Select the elements of an array that have a corresponding tag.\n\u003c/p\u003e\u003cpre\u003epackByTag [12, 24, 42, 93] [1, 0, 0, 1] 0 = [24, 42]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a-\u003e Array Tag-\u003e Tag-\u003e Array a",
        "fct-type": "function",
        "title": "packByTag"
      },
      "index": {
        "description": "length result Select the elements of an array that have corresponding tag packByTag",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "packByTag",
        "normalized": "Array a-\u003eArray Tag-\u003eTag-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "By Tag",
        "signature": "Array a-\u003eArray Tag-\u003eTag-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Forwards permutation of array elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a-\u003e Array Int-\u003e Array a",
        "fct-type": "function",
        "title": "permute"
      },
      "index": {
        "description": "length result Forwards permutation of array elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "permute",
        "normalized": "Array a-\u003eArray Int-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray Int-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:pick",
      "description": {
        "fct-descr": "\u003cp\u003eCompute an array of flags indicating which elements match a given value.\n\u003c/p\u003e\u003cpre\u003epick [4, 5, 3, 6, 5, 2, 5] 5 = [F, T, F, F, T, F, T]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e a -\u003e Array Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#pick",
        "fct-type": "function",
        "title": "pick"
      },
      "index": {
        "description": "Compute an array of flags indicating which elements match given value pick",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "pick",
        "normalized": "Array a-\u003ea-\u003eArray Bool",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003ea-\u003eArray Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:plusSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(max(segs, threads) . log segs). \n   Add the lengths of corresponding segments in two descriptors.\n\u003c/p\u003e\u003cpre\u003eplusSegd [lens: 2 3 1] [lens: 3 1 1] = [lens: 5 4 2]\u003c/pre\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Segd -\u003e Segd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#plusSegd",
        "fct-type": "function",
        "title": "plusSegd"
      },
      "index": {
        "description": "max segs threads log segs Add the lengths of corresponding segments in two descriptors plusSegd lens lens lens",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "plusSegd",
        "normalized": "Segd-\u003eSegd-\u003eSegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Segd-\u003eSegd-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:promoteSSegdToVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e VSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#promoteSSegdToVSegd",
        "fct-type": "function",
        "title": "promoteSSegdToVSegd"
      },
      "index": {
        "description": "segs Promote plain SSegd to VSegd The result contains one virtual segment for every physical segment the provided SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "promoteSSegdToVSegd",
        "normalized": "SSegd-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "SSegd To VSegd",
        "signature": "SSegd-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:promoteSegdToSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Promote a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e, \n   assuming all segments are contiguous and come from a single array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#promoteSegdToSSegd",
        "fct-type": "function",
        "title": "promoteSegdToSSegd"
      },
      "index": {
        "description": "segs Promote Segd to SSegd assuming all segments are contiguous and come from single array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "promoteSegdToSSegd",
        "normalized": "Segd-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "Segd To SSegd",
        "signature": "Segd-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:promoteSegdToVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Promote a plain \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe result contains one virtual segment for every physical segment\n   the provided \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e VSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#promoteSegdToVSegd",
        "fct-type": "function",
        "title": "promoteSegdToVSegd"
      },
      "index": {
        "description": "segs Promote plain Segd to VSegd The result contains one virtual segment for every physical segment the provided Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "promoteSegdToVSegd",
        "normalized": "Segd-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "Segd To VSegd",
        "signature": "Segd-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:randomRs",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an array of the given length full of random data.\n   Good for testing.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e (a, a) -\u003e g -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#randomRs",
        "fct-type": "function",
        "title": "randomRs"
      },
      "index": {
        "description": "Generate an array of the given length full of random data Good for testing",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "randomRs",
        "normalized": "Int-\u003e(a,a)-\u003eb-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "Rs",
        "signature": "Int-\u003e(a,a)-\u003eg-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:randoms",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an array of the given length full of random data. \n   Good for testing.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e g -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#randoms",
        "fct-type": "function",
        "title": "randoms"
      },
      "index": {
        "description": "Generate an array of the given length full of random data Good for testing",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "randoms",
        "normalized": "Int-\u003ea-\u003eArray b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eg-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:repSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the parallel representation of a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Sel2 -\u003e SelRep2",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#repSel2",
        "fct-type": "function",
        "title": "repSel2"
      },
      "index": {
        "description": "Yield the parallel representation of selector",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "repSel2",
        "normalized": "Sel-\u003eSelRep",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": "Sel-\u003eSelRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Construct an array by copying a portion of another array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int-\u003e Int-\u003e Array a-\u003e Array a",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "length result Construct an array by copying portion of another array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "repeat",
        "normalized": "Int-\u003eInt-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). \n   Construct a new array by replicating a single element the given\n   number of times.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "length result Construct new array by replicating single element the given number of times",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "replicate",
        "normalized": "Int-\u003ea-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003ea-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicate_rs",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Regular segmented replicate.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ereplicate_s\u003c/a\u003e\u003c/code\u003e, but all segments are assumed to have the given length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#replicate_rs",
        "fct-type": "function",
        "title": "replicate_rs"
      },
      "index": {
        "description": "length result Regular segmented replicate Like replicate but all segments are assumed to have the given length",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "replicate_rs",
        "normalized": "Int-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicate_s",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). Segmented replicate.\n\u003c/p\u003e\u003cp\u003eElements of the array are replicated according to the lengths of the \n   segments defined by the \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#replicate_s",
        "fct-type": "function",
        "title": "replicate_s"
      },
      "index": {
        "description": "length result Segmented replicate Elements of the array are replicated according to the lengths of the segments defined by the Segd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "replicate_s",
        "normalized": "Segd-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Segd-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:replicatedVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(len). Construct a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e that describes an array where all virtual \n   segments point to the same physical segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int-\u003e Int-\u003e VSegd",
        "fct-type": "function",
        "title": "replicatedVSegd"
      },
      "index": {
        "description": "len Construct VSegd that describes an array where all virtual segments point to the same physical segment",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "replicatedVSegd",
        "normalized": "Int-\u003eInt-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": "Int-\u003eInt-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:scan",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003efoldl\u003c/code\u003e but return an array of the intermediate states, including\n   the final state that is computed by \u003ccode\u003efoldl\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#scan",
        "fct-type": "function",
        "title": "scan"
      },
      "index": {
        "description": "Similar to foldl but return an array of the intermediate states including the final state that is computed by foldl",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "scan",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletonSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#singletonSSegd",
        "fct-type": "function",
        "title": "singletonSSegd"
      },
      "index": {
        "description": "Construct Segd containing single segment of the given length",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "singletonSSegd",
        "normalized": "Int-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "SSegd",
        "signature": "Int-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletonSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Segd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#singletonSegd",
        "fct-type": "function",
        "title": "singletonSegd"
      },
      "index": {
        "description": "Construct Segd containing single segment of the given length",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "singletonSegd",
        "normalized": "Int-\u003eSegd",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Int-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletonVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e containing a single segment of the given length.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e VSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#singletonVSegd",
        "fct-type": "function",
        "title": "singletonVSegd"
      },
      "index": {
        "description": "Construct VSegd containing single segment of the given length",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "singletonVSegd",
        "normalized": "Int-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": "Int-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:singletons",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Construct an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e consisting of a single \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Arrays a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#singletons",
        "fct-type": "function",
        "title": "singletons"
      },
      "index": {
        "description": "Construct an Arrays consisting of single Array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "singletons",
        "normalized": "Array a-\u003eArrays a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArrays a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:snds",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take the second elements of an array of pairs.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array (a, b) -\u003e Array b",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#snds",
        "fct-type": "function",
        "title": "snds"
      },
      "index": {
        "description": "Take the second elements of an array of pairs",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "snds",
        "normalized": "Array(a,b)-\u003eArray b",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array(a,b)-\u003eArray b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sourcesOfSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the sources field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#sourcesOfSSegd",
        "fct-type": "function",
        "title": "sourcesOfSSegd"
      },
      "index": {
        "description": "Yield the sources field of SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "sourcesOfSSegd",
        "normalized": "SSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Of SSegd",
        "signature": "SSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:startsOfSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the starts field of a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#startsOfSSegd",
        "fct-type": "function",
        "title": "startsOfSSegd"
      },
      "index": {
        "description": "Yield the starts field of SSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "startsOfSSegd",
        "normalized": "SSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Of SSegd",
        "signature": "SSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003efold (+) 0\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#sum",
        "fct-type": "function",
        "title": "sum"
      },
      "index": {
        "description": "Same as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "sum",
        "normalized": "Array a-\u003ea",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum_r",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003efold_r (+) 0\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Int -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#sum_r",
        "fct-type": "function",
        "title": "sum_r"
      },
      "index": {
        "description": "Same as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "sum_r",
        "normalized": "Int-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Int-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum_s",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003efold_s (+) 0\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Array a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#sum_s",
        "fct-type": "function",
        "title": "sum_s"
      },
      "index": {
        "description": "Same as fold",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "sum_s",
        "normalized": "Segd-\u003eArray a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Segd-\u003eArray a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:sum_ss",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003efold_ss (+) 0\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Arrays a -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#sum_ss",
        "fct-type": "function",
        "title": "sum_ss"
      },
      "index": {
        "description": "Same as fold ss",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "sum_ss",
        "normalized": "SSegd-\u003eArrays a-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "SSegd-\u003eArrays a-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:tagsSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the tags array of a selector.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Sel2 -\u003e Array Tag",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#tagsSel2",
        "fct-type": "function",
        "title": "tagsSel2"
      },
      "index": {
        "description": "Yield the tags array of selector",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "tagsSel2",
        "normalized": "Sel-\u003eArray Tag",
        "package": "dph-prim-par",
        "partial": "Sel",
        "signature": "Sel-\u003eArray Tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:tagsToSel2",
      "description": {
        "fct-descr": "\u003cp\u003eO(n). Compute a selector from a tags array.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array Tag -\u003e Sel2",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#tagsToSel2",
        "fct-type": "function",
        "title": "tagsToSel2"
      },
      "index": {
        "description": "Compute selector from tags array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "tagsToSel2",
        "normalized": "Array Tag-\u003eSel",
        "package": "dph-prim-par",
        "partial": "To Sel",
        "signature": "Array Tag-\u003eSel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeLengthsOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the segment lengths of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#takeLengthsOfVSegd",
        "fct-type": "function",
        "title": "takeLengthsOfVSegd"
      },
      "index": {
        "description": "Yield the segment lengths of VSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "takeLengthsOfVSegd",
        "normalized": "VSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "Lengths Of VSegd",
        "signature": "VSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeSSegdOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#takeSSegdOfVSegd",
        "fct-type": "function",
        "title": "takeSSegdOfVSegd"
      },
      "index": {
        "description": "Yield the SSegd of VSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "takeSSegdOfVSegd",
        "normalized": "VSegd-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "SSegd Of VSegd",
        "signature": "VSegd-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeSSegdRedundantOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eSee the note in \u003ccode\u003e\u003ca\u003etakeVSegidsRedundantOfVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#takeSSegdRedundantOfVSegd",
        "fct-type": "function",
        "title": "takeSSegdRedundantOfVSegd"
      },
      "index": {
        "description": "Yield the SSegd of VSegd but don require that every physical segment is referenced by some virtual segment See the note in takeVSegidsRedundantOfVSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "takeSSegdRedundantOfVSegd",
        "normalized": "VSegd-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "SSegd Redundant Of VSegd",
        "signature": "VSegd-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeVSegidsOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#takeVSegidsOfVSegd",
        "fct-type": "function",
        "title": "takeVSegidsOfVSegd"
      },
      "index": {
        "description": "Yield the vsegids of VSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "takeVSegidsOfVSegd",
        "normalized": "VSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "VSegids Of VSegd",
        "signature": "VSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:takeVSegidsRedundantOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Yield the vsegids of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, but don't require that every physical\n   segment is referenced by some virtual segment.\n\u003c/p\u003e\u003cp\u003eIf you're just performing indexing and don't need the invariant that all\n   physical segments are reachable from some virtual segment, then use this\n   version as it's faster. This sidesteps the code that maintains the invariant.\n\u003c/p\u003e\u003cp\u003eThe stated O(1) complexity assumes that the array has already been fully\n   evalauted. If this is not the case then we can avoid demanding the result\n   of a prior computation on the \u003ccode\u003evsegids\u003c/code\u003e, thus reducing the cost attributed\n   to that prior computation.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Array Int",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#takeVSegidsRedundantOfVSegd",
        "fct-type": "function",
        "title": "takeVSegidsRedundantOfVSegd"
      },
      "index": {
        "description": "Yield the vsegids of VSegd but don require that every physical segment is referenced by some virtual segment If you re just performing indexing and don need the invariant that all physical segments are reachable from some virtual segment then use this version as it faster This sidesteps the code that maintains the invariant The stated complexity assumes that the array has already been fully evalauted If this is not the case then we can avoid demanding the result of prior computation on the vsegids thus reducing the cost attributed to that prior computation",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "takeVSegidsRedundantOfVSegd",
        "normalized": "VSegd-\u003eArray Int",
        "package": "dph-prim-par",
        "partial": "VSegids Redundant Of VSegd",
        "signature": "VSegd-\u003eArray Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an array to a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e [a]",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert an array to list of elements",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "toList",
        "normalized": "Array a-\u003e[a]",
        "package": "dph-prim-par",
        "partial": "List",
        "signature": "Array a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:toVectors",
      "description": {
        "fct-descr": "\u003cp\u003eO(number of inner arrays). \n   Convert an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e to a boxed vector of \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a -\u003e Vector (Array a)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#toVectors",
        "fct-type": "function",
        "title": "toVectors"
      },
      "index": {
        "description": "number of inner arrays Convert an Arrays to boxed vector of Array",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "toVectors",
        "normalized": "Arrays a-\u003eVector(Array a)",
        "package": "dph-prim-par",
        "partial": "Vectors",
        "signature": "Arrays a-\u003eVector(Array a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeDemoteToSSegdOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). \n   Yield a \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWARNING\u003c/em\u003e: Trying to take the \u003ccode\u003e\u003ca\u003eSSegd\u003c/a\u003e\u003c/code\u003e of a nested array that has been\n   constructed with replication can cause index space overflow. This is\n   because the virtual size of the corresponding flat data can be larger\n   than physical memory. If this happens then indices fields and \n   element count in the result will be invalid.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e SSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#unsafeDemoteToSSegdOfVSegd",
        "fct-type": "function",
        "title": "unsafeDemoteToSSegdOfVSegd"
      },
      "index": {
        "description": "segs Yield SSegd that describes each segment of VSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments WARNING Trying to take the SSegd of nested array that has been constructed with replication can cause index space overflow This is because the virtual size of the corresponding flat data can be larger than physical memory If this happens then indices fields and element count in the result will be invalid",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "unsafeDemoteToSSegdOfVSegd",
        "normalized": "VSegd-\u003eSSegd",
        "package": "dph-prim-par",
        "partial": "Demote To SSegd Of VSegd",
        "signature": "VSegd-\u003eSSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeDemoteToSegdOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eO(segs). Yield a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e that describes each segment of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e individually.\n\u003c/p\u003e\u003cp\u003eBy doing this we lose information about which virtual segments\n   correspond to the same physical segments.\n\u003c/p\u003e\u003cp\u003eSee the warning in \u003ccode\u003e\u003ca\u003eunsafeDemoteToSSegdOfVSegd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Segd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#unsafeDemoteToSegdOfVSegd",
        "fct-type": "function",
        "title": "unsafeDemoteToSegdOfVSegd"
      },
      "index": {
        "description": "segs Yield Segd that describes each segment of VSegd individually By doing this we lose information about which virtual segments correspond to the same physical segments See the warning in unsafeDemoteToSSegdOfVSegd",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "unsafeDemoteToSegdOfVSegd",
        "normalized": "VSegd-\u003eSegd",
        "package": "dph-prim-par",
        "partial": "Demote To Segd Of VSegd",
        "signature": "VSegd-\u003eSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeIndex2s",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Retrieve a single element from an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e, \n        given the outer and inner indices.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a -\u003e Int -\u003e Int -\u003e a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#unsafeIndex2s",
        "fct-type": "function",
        "title": "unsafeIndex2s"
      },
      "index": {
        "description": "Retrieve single element from an Arrays given the outer and inner indices",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "unsafeIndex2s",
        "normalized": "Arrays a-\u003eInt-\u003eInt-\u003ea",
        "package": "dph-prim-par",
        "partial": "Index",
        "signature": "Arrays a-\u003eInt-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unsafeIndexs",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Take one of the outer \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eArrays\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Arrays a -\u003e Int -\u003e Array a",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#unsafeIndexs",
        "fct-type": "function",
        "title": "unsafeIndexs"
      },
      "index": {
        "description": "Take one of the outer Array from an Arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "unsafeIndexs",
        "normalized": "Arrays a-\u003eInt-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "Indexs",
        "signature": "Arrays a-\u003eInt-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unzip",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Unzip an array of pairs into a pair of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array (a, b) -\u003e (Array a, Array b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "Unzip an array of pairs into pair of arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "unzip",
        "normalized": "Array(a,b)-\u003e(Array a,Array b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array(a,b)-\u003e(Array a,Array b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:unzip3",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Unzip an array of triples into a triple of arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array (a, b, c) -\u003e (Array a, Array b, Array c)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#unzip3",
        "fct-type": "function",
        "title": "unzip3"
      },
      "index": {
        "description": "Unzip an array of triples into triple of arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "unzip3",
        "normalized": "Array(a,b,c)-\u003e(Array a,Array b,Array c)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array(a,b,c)-\u003e(Array a,Array b,Array c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eO(length result). \n   Copy the source array while replacing some elements by new ones in the result.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a-\u003e Array (Int, a)-\u003e Array a",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "length result Copy the source array while replacing some elements by new ones in the result",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "update",
        "normalized": "Array a-\u003eArray(Int,a)-\u003eArray a",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray(Int,a)-\u003eArray a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:updateVSegsOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the \u003ccode\u003evsegids\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, and then cull the physical\n   segment descriptor so that all physical segments are reachable from\n   some virtual segment.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(Array Int -\u003e Array Int) -\u003e VSegd -\u003e VSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#updateVSegsOfVSegd",
        "fct-type": "function",
        "title": "updateVSegsOfVSegd"
      },
      "index": {
        "description": "Update the vsegids of VSegd and then cull the physical segment descriptor so that all physical segments are reachable from some virtual segment",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "updateVSegsOfVSegd",
        "normalized": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegs Of VSegd",
        "signature": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:updateVSegsReachableOfVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the \u003ccode\u003evsegids\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eVSegd\u003c/a\u003e\u003c/code\u003e, where the result is guaranteed to\n   cover all physical segments.\n\u003c/p\u003e\u003cp\u003eUsing this version avoids performing the \u003ccode\u003ecull\u003c/code\u003e operation which \n   discards unreachable physical segments.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting vsegids must cover all physical segments.\n     If they do not then there will be physical segments that are not \n     reachable from some virtual segment, and subsequent operations\n     like \u003ccode\u003efold_ss\u003c/code\u003e will have the wrong work complexity.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(Array Int -\u003e Array Int) -\u003e VSegd -\u003e VSegd",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#updateVSegsReachableOfVSegd",
        "fct-type": "function",
        "title": "updateVSegsReachableOfVSegd"
      },
      "index": {
        "description": "Update the vsegids of VSegd where the result is guaranteed to cover all physical segments Using this version avoids performing the cull operation which discards unreachable physical segments The resulting vsegids must cover all physical segments If they do not then there will be physical segments that are not reachable from some virtual segment and subsequent operations like fold ss will have the wrong work complexity",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "updateVSegsReachableOfVSegd",
        "normalized": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd",
        "package": "dph-prim-par",
        "partial": "VSegs Reachable Of VSegd",
        "signature": "(Array Int-\u003eArray Int)-\u003eVSegd-\u003eVSegd"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:validSSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "SSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#validSSegd",
        "fct-type": "function",
        "title": "validSSegd"
      },
      "index": {
        "description": "Check whether Segd is well formed",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "validSSegd",
        "normalized": "SSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "SSegd",
        "signature": "SSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:validSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Segd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#validSegd",
        "fct-type": "function",
        "title": "validSegd"
      },
      "index": {
        "description": "Check whether Segd is well formed",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "validSegd",
        "normalized": "Segd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "Segd",
        "signature": "Segd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:validVSegd",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a \u003ccode\u003e\u003ca\u003eSegd\u003c/a\u003e\u003c/code\u003e is well formed.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "VSegd -\u003e Bool",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#validVSegd",
        "fct-type": "function",
        "title": "validVSegd"
      },
      "index": {
        "description": "Check whether Segd is well formed",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "validVSegd",
        "normalized": "VSegd-\u003eBool",
        "package": "dph-prim-par",
        "partial": "VSegd",
        "signature": "VSegd-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip two arrays into an array of pairs.\n   If one array is short, excess elements of the longer array are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array b -\u003e Array (a, b)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Zip two arrays into an array of pairs If one array is short excess elements of the longer array are discarded",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zip",
        "normalized": "Array a-\u003eArray b-\u003eArray(a,b)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray b-\u003eArray(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Zip three arrays into an array of triples.\n   If one array is short, excess elements of the longer arrays are discarded.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "Array a -\u003e Array b -\u003e Array c -\u003e Array (a, b, c)",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "Zip three arrays into an array of triples If one array is short excess elements of the longer arrays are discarded",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zip3",
        "normalized": "Array a-\u003eArray b-\u003eArray c-\u003eArray(a,b,c)",
        "package": "dph-prim-par",
        "partial": "",
        "signature": "Array a-\u003eArray b-\u003eArray c-\u003eArray(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to correponding elements of two arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Array a -\u003e Array b -\u003e Array c",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Apply worker function to correponding elements of two arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eArray a-\u003eArray b-\u003eArray c",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eArray a-\u003eArray b-\u003eArray c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to corresponding elements of three arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Apply worker function to corresponding elements of three arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to corresponding elements of four arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "Apply worker function to corresponding elements of four arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to corresponding elements of five arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "Apply worker function to corresponding elements of five arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to corresponding elements of six arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "Apply worker function to corresponding elements of six arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith6",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to corresponding elements of seven arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g -\u003e Array h",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "Apply worker function to corresponding elements of seven arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith7",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dph-prim-par/docs/Data-Array-Parallel-Unlifted.html#v:zipWith8",
      "description": {
        "fct-descr": "\u003cp\u003eApply a worker function to corresponding elements of six arrays.\n\u003c/p\u003e",
        "fct-module": "Data.Array.Parallel.Unlifted",
        "fct-package": "dph-prim-par",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h -\u003e i) -\u003e Array a -\u003e Array b -\u003e Array c -\u003e Array d -\u003e Array e -\u003e Array f -\u003e Array g -\u003e Array h -\u003e Array i",
        "fct-source": "src/Data-Array-Parallel-Unlifted.html#zipWith8",
        "fct-type": "function",
        "title": "zipWith8"
      },
      "index": {
        "description": "Apply worker function to corresponding elements of six arrays",
        "hierarchy": "Data Array Parallel Unlifted",
        "module": "Data.Array.Parallel.Unlifted",
        "name": "zipWith8",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h-\u003eArray i",
        "package": "dph-prim-par",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh-\u003ei)-\u003eArray a-\u003eArray b-\u003eArray c-\u003eArray d-\u003eArray e-\u003eArray f-\u003eArray g-\u003eArray h-\u003eArray i"
      }
    }
  }
]