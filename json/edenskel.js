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
        "word": "edenskel"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines auxiliary functions for \n programming with the parallel functional language Eden.\n\u003c/p\u003e\u003cp\u003eDepends on GHC. Using standard GHC, you will get a threaded simulation of Eden. \n Use the forked GHC-Eden compiler from http://www.mathematik.uni-marburg.de/~eden \n for a parallel build.\n\u003c/p\u003e\u003cp\u003eEden Group ( http://www.mathematik.uni-marburg.de/~eden )\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "Auxiliary",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines auxiliary functions for programming with the parallel functional language Eden Depends on GHC Using standard GHC you will get threaded simulation of Eden Use the forked GHC-Eden compiler from http www.mathematik.uni-marburg.de eden for parallel build Eden Group http www.mathematik.uni-marburg.de eden",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "Auxiliary",
          "package": "edenskel",
          "partial": "Auxiliary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a list of chunks of length \u003ccode\u003e d\u003c/code\u003e .\n\u003c/p\u003e\u003cp\u003eResult: list of chunks (blocks)\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "chunk",
          "package": "edenskel",
          "signature": "Int-\u003e [a]-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "Creates list of chunks of length Result list of chunks blocks",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "chunk",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "edenskel",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTask distribution according to worker requests.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "distribute",
          "package": "edenskel",
          "signature": "Int-\u003e [Int]-\u003e [t]-\u003e [[t]]",
          "type": "function"
        },
        "index": {
          "description": "Task distribution according to worker requests",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "distribute",
          "normalized": "Int-\u003e[Int]-\u003e[a]-\u003e[[a]]",
          "package": "edenskel",
          "signature": "Int-\u003e[Int]-\u003e[t]-\u003e[[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:distribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch two Remote Data values\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "fetch2",
          "package": "edenskel",
          "signature": "RD a -\u003e RD b -\u003e (a, b)",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#fetch2",
          "type": "function"
        },
        "index": {
          "description": "Fetch two Remote Data values",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "fetch2",
          "normalized": "RD a-\u003eRD b-\u003e(a,b)",
          "package": "edenskel",
          "signature": "RD a-\u003eRD b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:fetch2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch a matrix of Remote Data\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "fetchRDss",
          "package": "edenskel",
          "signature": "[[RD a]] -\u003e [[a]]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#fetchRDss",
          "type": "function"
        },
        "index": {
          "description": "Fetch matrix of Remote Data",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "fetchRDss",
          "normalized": "[[RD a]]-\u003e[[a]]",
          "package": "edenskel",
          "partial": "RDss",
          "signature": "[[RD a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:fetchRDss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lazy list is an infinite stream\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy",
          "package": "edenskel",
          "signature": "[a] -\u003e [a]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#lazy",
          "type": "function"
        },
        "index": {
          "description": "lazy list is an infinite stream",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy",
          "normalized": "[a]-\u003e[a]",
          "package": "edenskel",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:lazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elazy in first argument\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy1Zip",
          "package": "edenskel",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#lazy1Zip",
          "type": "function"
        },
        "index": {
          "description": "lazy in first argument",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy1Zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "edenskel",
          "partial": "Zip",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:lazy1Zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elazy in first argument\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy1ZipWith",
          "package": "edenskel",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#lazy1ZipWith",
          "type": "function"
        },
        "index": {
          "description": "lazy in first argument",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy1ZipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "edenskel",
          "partial": "Zip With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:lazy1ZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elazy in second argument\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy2Zip",
          "package": "edenskel",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#lazy2Zip",
          "type": "function"
        },
        "index": {
          "description": "lazy in second argument",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy2Zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "edenskel",
          "partial": "Zip",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:lazy2Zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elazy in second argument\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy2ZipWith",
          "package": "edenskel",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#lazy2ZipWith",
          "type": "function"
        },
        "index": {
          "description": "lazy in second argument",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazy2ZipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "edenskel",
          "partial": "Zip With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:lazy2ZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elazy in tail lists\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazyTranspose",
          "package": "edenskel",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#lazyTranspose",
          "type": "function"
        },
        "index": {
          "description": "lazy in tail lists",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "lazyTranspose",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "edenskel",
          "partial": "Transpose",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:lazyTranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of non-deterministic list merging, which applies a strategy to list elements prior to merging them and stops the additional merge thread (the suckIO_S thread) when only one input stream is left.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "mergeS",
          "package": "edenskel",
          "signature": "[[a]] -\u003e Strategy a -\u003e [a]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#mergeS",
          "type": "function"
        },
        "index": {
          "description": "variant of non-deterministic list merging which applies strategy to list elements prior to merging them and stops the additional merge thread the suckIO thread when only one input stream is left",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "mergeS",
          "normalized": "[[a]]-\u003eStrategy a-\u003e[a]",
          "package": "edenskel",
          "signature": "[[a]]-\u003eStrategy a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:mergeS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple shuffling - inverse to round robin distribution\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "shuffle",
          "package": "edenskel",
          "signature": "[[a]]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Simple shuffling inverse to round robin distribution",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "shuffle",
          "normalized": "[[a]]-\u003e[a]",
          "package": "edenskel",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpawn a matrix of processes\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "spawnPss",
          "package": "edenskel",
          "signature": "[[Process a b]] -\u003e [[a]] -\u003e [[b]]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#spawnPss",
          "type": "function"
        },
        "index": {
          "description": "Spawn matrix of processes",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "spawnPss",
          "normalized": "[[Process a b]]-\u003e[[a]]-\u003e[[b]]",
          "package": "edenskel",
          "partial": "Pss",
          "signature": "[[Process a b]]-\u003e[[a]]-\u003e[[b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:spawnPss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock distribution, \u003ccode\u003e splitIntoN \u003c/code\u003e distributes one list on n lists with\n  equal distribution ((+-1) without precondition on length).\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "splitIntoN",
          "package": "edenskel",
          "signature": "Int-\u003e [a]-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "Block distribution splitIntoN distributes one list on lists with equal distribution without precondition on length",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "splitIntoN",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "edenskel",
          "partial": "Into",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:splitIntoN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "takeEach",
          "package": "edenskel",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#takeEach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "takeEach",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "edenskel",
          "partial": "Each",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:takeEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etranspose for matrices of rectangular shape (rows of equal length). Top level list of the resulting matrix is defined as soon as the first row of the original matrix is closed.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "transposeRt",
          "package": "edenskel",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#transposeRt",
          "type": "function"
        },
        "index": {
          "description": "transpose for matrices of rectangular shape rows of equal length Top level list of the resulting matrix is defined as soon as the first row of the original matrix is closed",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "transposeRt",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "edenskel",
          "partial": "Rt",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:transposeRt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD",
          "package": "edenskel",
          "signature": "(RD a -\u003e RD b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD",
          "normalized": "(RD a-\u003eRD b)-\u003ea-\u003eb",
          "package": "edenskel",
          "partial": "Lift RD",
          "signature": "(RD a-\u003eRD b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unLiftRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003eliftRD\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD2",
          "package": "edenskel",
          "signature": "(RD a -\u003e RD b -\u003e RD c)-\u003e a-\u003e b-\u003e c",
          "type": "function"
        },
        "index": {
          "description": "see liftRD",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD2",
          "normalized": "(RD a-\u003eRD b-\u003eRD c)-\u003ea-\u003eb-\u003ec",
          "package": "edenskel",
          "partial": "Lift RD",
          "signature": "(RD a-\u003eRD b-\u003eRD c)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unLiftRD2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003eliftRD\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD3",
          "package": "edenskel",
          "signature": "(RD a -\u003e RD b -\u003e RD c -\u003e RD d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#unLiftRD3",
          "type": "function"
        },
        "index": {
          "description": "see liftRD",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD3",
          "normalized": "(RD a-\u003eRD b-\u003eRD c-\u003eRD d)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "edenskel",
          "partial": "Lift RD",
          "signature": "(RD a-\u003eRD b-\u003eRD c-\u003eRD d)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unLiftRD3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee \u003ccode\u003eliftRD\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD4",
          "package": "edenskel",
          "signature": "(RD a -\u003e RD b -\u003e RD c -\u003e RD d -\u003e RD e) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e e",
          "source": "src/Control-Parallel-Eden-EdenSkel-Auxiliary.html#unLiftRD4",
          "type": "function"
        },
        "index": {
          "description": "see liftRD",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unLiftRD4",
          "normalized": "(RD a-\u003eRD b-\u003eRD c-\u003eRD d-\u003eRD e)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "package": "edenskel",
          "partial": "Lift RD",
          "signature": "(RD a-\u003eRD b-\u003eRD c-\u003eRD d-\u003eRD e)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unLiftRD4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse function to \u003ccode\u003e splitIntoN \u003c/code\u003e - alias for concat.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unSplit",
          "package": "edenskel",
          "signature": "[[a]]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Inverse function to splitIntoN alias for concat",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unSplit",
          "normalized": "[[a]]-\u003e[a]",
          "package": "edenskel",
          "partial": "Split",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse function to \u003ccode\u003e chunk \u003c/code\u003e - alias for concat.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unchunk",
          "package": "edenskel",
          "signature": "[[a]]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Inverse function to chunk alias for concat",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unchunk",
          "normalized": "[[a]]-\u003e[a]",
          "package": "edenskel",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unchunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound robin distribution - inverse to shuffle\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unshuffle",
          "package": "edenskel",
          "signature": "Int-\u003e [a]-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "Round robin distribution inverse to shuffle",
          "hierarchy": "Control Parallel Eden EdenSkel Auxiliary",
          "module": "Control.Parallel.Eden.EdenSkel.Auxiliary",
          "name": "unshuffle",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "edenskel",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-Auxiliary.html#v:unshuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines divide-and-conquer skeletons for \n the parallel functional language Eden.\n\u003c/p\u003e\u003cp\u003eAll divide-and-conquer algorithms are parameterised with control functions\n which decide if a problem is trivial, how to solve a trivial problem, \n how to split a non-trivial problem into smaller problems and how to combine solutions \n of subproblems into a solution of the problem.\n\u003c/p\u003e\u003cp\u003eDepends on GHC. Using standard GHC, you will get a threaded simulation of Eden. \n Use the forked GHC-Eden compiler from http://www.mathematik.uni-marburg.de/~eden \n for a parallel build.\n\u003c/p\u003e\u003cp\u003eEden Group ( http://www.mathematik.uni-marburg.de/~eden )\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "DCSkels",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines divide-and-conquer skeletons for the parallel functional language Eden All divide-and-conquer algorithms are parameterised with control functions which decide if problem is trivial how to solve trivial problem how to split non-trivial problem into smaller problems and how to combine solutions of subproblems into solution of the problem Depends on GHC Using standard GHC you will get threaded simulation of Eden Use the forked GHC-Eden compiler from http www.mathematik.uni-marburg.de eden for parallel build Eden Group http www.mathematik.uni-marburg.de eden",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "DCSkels",
          "package": "edenskel",
          "partial": "DCSkels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "DivideConquer",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#DivideConquer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "DivideConquer",
          "package": "edenskel",
          "partial": "Divide Conquer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#t:DivideConquer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simple interface (deprecated): combine function without input\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "DivideConquerSimple",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#DivideConquerSimple",
          "type": "type"
        },
        "index": {
          "description": "The simple interface deprecated combine function without input",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "DivideConquerSimple",
          "package": "edenskel",
          "partial": "Divide Conquer Simple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#t:DivideConquerSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential Version.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dc",
          "package": "edenskel",
          "signature": "DivideConquer a b",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#dc",
          "type": "function"
        },
        "index": {
          "description": "Sequential Version",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dc",
          "package": "edenskel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edisDCdepth\u003c/a\u003e\u003c/code\u003e but uses simple DC Interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e DivideConquerSimple a b",
          "type": "function"
        },
        "index": {
          "description": "Like disDCdepth but uses simple DC Interface",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN",
          "normalized": "Int-\u003eInt-\u003eDivideConquerSimple a b",
          "package": "edenskel",
          "signature": "Int-\u003eInt-\u003eDivideConquerSimple a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dcN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edisDCn\u003c/a\u003e\u003c/code\u003e but uses simple DC Interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN'",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e DivideConquerSimple a b",
          "type": "function"
        },
        "index": {
          "description": "Like disDCn but uses simple DC Interface",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN'",
          "normalized": "Int-\u003eInt-\u003eDivideConquerSimple a b",
          "package": "edenskel",
          "partial": "N'",
          "signature": "Int-\u003eInt-\u003eDivideConquerSimple a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dcN-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edisDC\u003c/a\u003e\u003c/code\u003e, but differs in demand control and uses simple DC Interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcNTickets",
          "package": "edenskel",
          "signature": "Int-\u003e Places-\u003e DivideConquerSimple a b",
          "type": "function"
        },
        "index": {
          "description": "Like disDC but differs in demand control and uses simple DC Interface",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcNTickets",
          "normalized": "Int-\u003ePlaces-\u003eDivideConquerSimple a b",
          "package": "edenskel",
          "partial": "NTickets",
          "signature": "Int-\u003ePlaces-\u003eDivideConquerSimple a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dcNTickets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edisDC\u003c/a\u003e\u003c/code\u003e, but differs in demand control.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcNTickets_c",
          "package": "edenskel",
          "signature": "Int-\u003e Places-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Like disDC but differs in demand control",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcNTickets_c",
          "normalized": "Int-\u003ePlaces-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "NTickets",
          "signature": "Int-\u003ePlaces-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dcNTickets_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edisDCdepth\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN_c",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Same as disDCdepth",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN_c",
          "normalized": "Int-\u003eInt-\u003eDivideConquer a b",
          "package": "edenskel",
          "signature": "Int-\u003eInt-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dcN_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edisDCn\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN_c'",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Same as disDCn",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "dcN_c'",
          "normalized": "Int-\u003eInt-\u003eDivideConquer a b",
          "package": "edenskel",
          "signature": "Int-\u003eInt-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:dcN_c-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistributed-expansion divide-and-conquer skeleton\n  (tutorial version, similar to dcNTickets).\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "disDC",
          "package": "edenskel",
          "signature": "Int-\u003e Places-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Distributed-expansion divide-and-conquer skeleton tutorial version similar to dcNTickets",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "disDC",
          "normalized": "Int-\u003ePlaces-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "DC",
          "signature": "Int-\u003ePlaces-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:disDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDC skeleton with fixed branching degree, parallel depth control and explicit process \n placement (tree-shaped process creation, one task in each recursive step stays local).\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "disDCdepth",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "DC skeleton with fixed branching degree parallel depth control and explicit process placement tree-shaped process creation one task in each recursive step stays local",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "disDCdepth",
          "normalized": "Int-\u003eInt-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "DCdepth",
          "signature": "Int-\u003eInt-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:disDCdepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edisDCdepth\u003c/a\u003e\u003c/code\u003e, but controls parallelism by limiting the number of processes instead of the parallel depth.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "disDCn",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Like disDCdepth but controls parallelism by limiting the number of processes instead of the parallel depth",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "disDCn",
          "normalized": "Int-\u003eInt-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "DCn",
          "signature": "Int-\u003eInt-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:disDCn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStraightforward implementation.\n\u003c/p\u003e\u003cp\u003eThe straightforward method to parallelise divide-and-conquer\n algorithms is to unfold the call tree onto different\n processors. The process scheme unfolds the call tree on processors chosen by the\n runtime environment. Round-Robin distribution is unfavourable for this\n skeleton, better use runtime option \u003ccode\u003e-qrnd\u003c/code\u003e when using it.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divCon",
          "package": "edenskel",
          "signature": "DivideConquerSimple a b",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#divCon",
          "type": "function"
        },
        "index": {
          "description": "Straightforward implementation The straightforward method to parallelise divide-and-conquer algorithms is to unfold the call tree onto different processors The process scheme unfolds the call tree on processors chosen by the runtime environment Round-Robin distribution is unfavourable for this skeleton better use runtime option qrnd when using it",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divCon",
          "package": "edenskel",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eparDC\u003c/a\u003e\u003c/code\u003e but uses simple DC Interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConD",
          "package": "edenskel",
          "signature": "Int-\u003e DivideConquerSimple a b",
          "type": "function"
        },
        "index": {
          "description": "Like parDC but uses simple DC Interface",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConD",
          "normalized": "Int-\u003eDivideConquerSimple a b",
          "package": "edenskel",
          "partial": "Con",
          "signature": "Int-\u003eDivideConquerSimple a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divConD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eparDC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConD_c",
          "package": "edenskel",
          "signature": "Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Same as parDC",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConD_c",
          "normalized": "Int-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "Con",
          "signature": "Int-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divConD_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike as \u003ccode\u003e\u003ca\u003eflatDC\u003c/a\u003e\u003c/code\u003e but uses simple DC Interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConFlat",
          "package": "edenskel",
          "signature": "((a -\u003e b) -\u003e [a] -\u003e [b])-\u003e Int-\u003e DivideConquerSimple a b",
          "type": "function"
        },
        "index": {
          "description": "Like as flatDC but uses simple DC Interface",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConFlat",
          "normalized": "((a-\u003eb)-\u003e[a]-\u003e[b])-\u003eInt-\u003eDivideConquerSimple a b",
          "package": "edenskel",
          "partial": "Con Flat",
          "signature": "((a-\u003eb)-\u003e[a]-\u003e[b])-\u003eInt-\u003eDivideConquerSimple a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divConFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTutorial version, same as \u003ccode\u003e\u003ca\u003eflatDC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConFlat_c",
          "package": "edenskel",
          "signature": "((a -\u003e b) -\u003e [a] -\u003e [b])-\u003e Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Tutorial version same as flatDC",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConFlat_c",
          "normalized": "((a-\u003eb)-\u003e[a]-\u003e[b])-\u003eInt-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "Con Flat",
          "signature": "((a-\u003eb)-\u003e[a]-\u003e[b])-\u003eInt-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divConFlat_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edc\u003c/a\u003e\u003c/code\u003e but uses simple DC Interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConSeq",
          "package": "edenskel",
          "signature": "DivideConquerSimple a b",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#divConSeq",
          "type": "function"
        },
        "index": {
          "description": "Like dc but uses simple DC Interface",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConSeq",
          "package": "edenskel",
          "partial": "Con Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divConSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConSeq_c",
          "package": "edenskel",
          "signature": "DivideConquer a b",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#divConSeq_c",
          "type": "function"
        },
        "index": {
          "description": "Same as dc",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divConSeq_c",
          "package": "edenskel",
          "partial": "Con Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divConSeq_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edivCon\u003c/a\u003e\u003c/code\u003e but with different combine signature (takes the original problem as additional input).\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divCon_c",
          "package": "edenskel",
          "signature": "DivideConquer a b",
          "source": "src/Control-Parallel-Eden-EdenSkel-DCSkels.html#divCon_c",
          "type": "function"
        },
        "index": {
          "description": "Like divCon but with different combine signature takes the original problem as additional input",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "divCon_c",
          "package": "edenskel",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:divCon_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDC Skeleton with flat expansion of upper DC-tree levels, takes custom map \n skeletons to solve expanded tasks (a sequential map skeleton leads to a \n sequential DC-skeleton).\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "flatDC",
          "package": "edenskel",
          "signature": "((a -\u003e b) -\u003e [a] -\u003e [b])-\u003e Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "DC Skeleton with flat expansion of upper DC-tree levels takes custom map skeletons to solve expanded tasks sequential map skeleton leads to sequential DC-skeleton",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "flatDC",
          "normalized": "((a-\u003eb)-\u003e[a]-\u003e[b])-\u003eInt-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "DC",
          "signature": "((a-\u003eb)-\u003e[a]-\u003e[b])-\u003eInt-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:flatDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoffline distributed-expansion divide-and-conquer skeleton.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "offline_disDC",
          "package": "edenskel",
          "signature": "Int-\u003e [Int]-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "offline distributed-expansion divide-and-conquer skeleton",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "offline_disDC",
          "normalized": "Int-\u003e[Int]-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "DC",
          "signature": "Int-\u003e[Int]-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:offline_disDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple parMap parallelisation with depth control but\n no placement control. This variant allows to\n give an additional depth parameter for the recursion, proceeding in a\n sequential manner when \u003ccode\u003edepth=0\u003c/code\u003e. The process scheme unfolds the call \n tree on processors chosen by the runtime environment. Round-Robin \n distribution is unfavourable for this skeleton, better use RTS option \n \u003ccode\u003e+RTS -qrnd\u003c/code\u003e when using it.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "parDC",
          "package": "edenskel",
          "signature": "Int-\u003e DivideConquer a b",
          "type": "function"
        },
        "index": {
          "description": "Simple parMap parallelisation with depth control but no placement control This variant allows to give an additional depth parameter for the recursion proceeding in sequential manner when depth The process scheme unfolds the call tree on processors chosen by the runtime environment Round-Robin distribution is unfavourable for this skeleton better use RTS option RTS qrnd when using it",
          "hierarchy": "Control Parallel Eden EdenSkel DCSkels",
          "module": "Control.Parallel.Eden.EdenSkel.DCSkels",
          "name": "parDC",
          "normalized": "Int-\u003eDivideConquer a b",
          "package": "edenskel",
          "partial": "DC",
          "signature": "Int-\u003eDivideConquer a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-DCSkels.html#v:parDC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines iteration skeletons for Eden.\n\u003c/p\u003e\u003cp\u003eDepends on the Eden Compiler.\n\u003c/p\u003e\u003cp\u003eEden Project\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.IterSkels",
          "name": "IterSkels",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-IterSkels.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines iteration skeletons for Eden Depends on the Eden Compiler Eden Project",
          "hierarchy": "Control Parallel Eden EdenSkel IterSkels",
          "module": "Control.Parallel.Eden.EdenSkel.IterSkels",
          "name": "IterSkels",
          "package": "edenskel",
          "partial": "Iter Skels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-IterSkels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe iterUntil skeleton is an iterated map skeleton. Each worker\n function transforms one local worker state and one task per iteration.\n The result is the next local state and the iterations\n result, which is send back to the master. The master transforms the\n output of all tasks of one iteration and a local master state into\n the worker inputs of the next iteration and a new master state\n using the combine function (output: Right tasks masterState) or\n decides to terminate the iteration (output: Left result). The input\n transformation function generates all initial worker states and\n initial worker tasks and the initial master state from the skeleton.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.IterSkels",
          "name": "iterUntil",
          "package": "edenskel",
          "signature": "(inp -\u003e ([wl], [t], ml))-\u003e (wl -\u003e t -\u003e (sr, wl))-\u003e (ml -\u003e [sr] -\u003e Either r ([t], ml))-\u003e inp-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "The iterUntil skeleton is an iterated map skeleton Each worker function transforms one local worker state and one task per iteration The result is the next local state and the iterations result which is send back to the master The master transforms the output of all tasks of one iteration and local master state into the worker inputs of the next iteration and new master state using the combine function output Right tasks masterState or decides to terminate the iteration output Left result The input transformation function generates all initial worker states and initial worker tasks and the initial master state from the skeleton",
          "hierarchy": "Control Parallel Eden EdenSkel IterSkels",
          "module": "Control.Parallel.Eden.EdenSkel.IterSkels",
          "name": "iterUntil",
          "normalized": "(a-\u003e([b],[c],d))-\u003e(b-\u003ec-\u003e(e,b))-\u003e(d-\u003e[e]-\u003eEither f([c],d))-\u003ea-\u003ef",
          "package": "edenskel",
          "partial": "Until",
          "signature": "(inp-\u003e([wl],[t],ml))-\u003e(wl-\u003et-\u003e(sr,wl))-\u003e(ml-\u003e[sr]-\u003eEither r([t],ml))-\u003einp-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-IterSkels.html#v:iterUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the basic implementation, using places for explicit process\n | placement of the worker processes.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.IterSkels",
          "name": "iterUntilAt",
          "package": "edenskel",
          "signature": "Places-\u003e (inp -\u003e ([wl], [t], ml))-\u003e (wl -\u003e t -\u003e (sr, wl))-\u003e (ml -\u003e [sr] -\u003e Either r ([t], ml))-\u003e inp-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "This is the basic implementation using places for explicit process placement of the worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel IterSkels",
          "module": "Control.Parallel.Eden.EdenSkel.IterSkels",
          "name": "iterUntilAt",
          "normalized": "Places-\u003e(a-\u003e([b],[c],d))-\u003e(b-\u003ec-\u003e(e,b))-\u003e(d-\u003e[e]-\u003eEither f([c],d))-\u003ea-\u003ef",
          "package": "edenskel",
          "partial": "Until At",
          "signature": "Places-\u003e(inp-\u003e([wl],[t],ml))-\u003e(wl-\u003et-\u003e(sr,wl))-\u003e(ml-\u003e[sr]-\u003eEither r([t],ml))-\u003einp-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-IterSkels.html#v:iterUntilAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines map-reduce skeletons for \n the parallel functional language Eden.\n\u003c/p\u003e\u003cp\u003eDepends on GHC. Using standard GHC, you will get a threaded simulation of Eden. \n Use the forked GHC-Eden compiler from http://www.mathematik.uni-marburg.de/~eden \n for a parallel build.\n\u003c/p\u003e\u003cp\u003eEden Group ( http://www.mathematik.uni-marburg.de/~eden )\n Depends on the Eden Compiler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "MapRedSkels",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines map-reduce skeletons for the parallel functional language Eden Depends on GHC Using standard GHC you will get threaded simulation of Eden Use the forked GHC-Eden compiler from http www.mathematik.uni-marburg.de eden for parallel build Eden Group http www.mathematik.uni-marburg.de eden Depends on the Eden Compiler",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "MapRedSkels",
          "package": "edenskel",
          "partial": "Map Red Skels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "mapRedl",
          "package": "edenskel",
          "signature": "(c -\u003e b -\u003e c)-\u003e c-\u003e (a -\u003e b)-\u003e [a]-\u003e c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "mapRedl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c-\u003eb)-\u003e[c]-\u003ea",
          "package": "edenskel",
          "partial": "Redl",
          "signature": "(c-\u003eb-\u003ec)-\u003ec-\u003e(a-\u003eb)-\u003e[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:mapRedl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "mapRedl'",
          "package": "edenskel",
          "signature": "(c -\u003e b -\u003e c)-\u003e c-\u003e (a -\u003e b)-\u003e [a]-\u003e c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "mapRedl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c-\u003eb)-\u003e[c]-\u003ea",
          "package": "edenskel",
          "partial": "Redl'",
          "signature": "(c-\u003eb-\u003ec)-\u003ec-\u003e(a-\u003eb)-\u003e[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:mapRedl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "mapRedr",
          "package": "edenskel",
          "signature": "(b -\u003e c -\u003e c)-\u003e c-\u003e (a -\u003e b)-\u003e [a]-\u003e c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "mapRedr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e(c-\u003ea)-\u003e[c]-\u003eb",
          "package": "edenskel",
          "partial": "Redr",
          "signature": "(b-\u003ec-\u003ec)-\u003ec-\u003e(a-\u003eb)-\u003e[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:mapRedr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffline parMapRedl skeleton - as many processes as noPe. \n local pre-folding per PE and final folding of PE-results \n via different fold variants, \n BUT local selection of input sub-list by worker processes\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "offlineParMapRedl",
          "package": "edenskel",
          "signature": "(b -\u003e b -\u003e b) -\u003e b -\u003e (a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#offlineParMapRedl",
          "type": "function"
        },
        "index": {
          "description": "Offline parMapRedl skeleton as many processes as noPe local pre-folding per PE and final folding of PE-results via different fold variants BUT local selection of input sub-list by worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "offlineParMapRedl",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003e[b]-\u003ea",
          "package": "edenskel",
          "partial": "Par Map Redl",
          "signature": "(b-\u003eb-\u003eb)-\u003eb-\u003e(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:offlineParMapRedl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffline parMapRedl' skeleton - as many processes as noPe. \n local pre-folding per PE and final folding of PE-results \n via different fold variants, \n BUT local selection of input sub-list by worker processes\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "offlineParMapRedl'",
          "package": "edenskel",
          "signature": "(b -\u003e b -\u003e b) -\u003e b -\u003e (a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#offlineParMapRedl%27",
          "type": "function"
        },
        "index": {
          "description": "Offline parMapRedl skeleton as many processes as noPe local pre-folding per PE and final folding of PE-results via different fold variants BUT local selection of input sub-list by worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "offlineParMapRedl'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003e[b]-\u003ea",
          "package": "edenskel",
          "partial": "Par Map Redl'",
          "signature": "(b-\u003eb-\u003eb)-\u003eb-\u003e(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:offlineParMapRedl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffline parMapRedr skeleton - as many processes as noPe. \n local pre-folding per PE and final folding of PE-results \n via different fold variants, \n BUT local selection of input sub-list by worker processes\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "offlineParMapRedr",
          "package": "edenskel",
          "signature": "(b -\u003e b -\u003e b) -\u003e b -\u003e (a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#offlineParMapRedr",
          "type": "function"
        },
        "index": {
          "description": "Offline parMapRedr skeleton as many processes as noPe local pre-folding per PE and final folding of PE-results via different fold variants BUT local selection of input sub-list by worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "offlineParMapRedr",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003e[b]-\u003ea",
          "package": "edenskel",
          "partial": "Par Map Redr",
          "signature": "(b-\u003eb-\u003eb)-\u003eb-\u003e(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:offlineParMapRedr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic parMapRedl skeleton - as many processes as noPe. \n local pre-folding per PE and final folding of PE-results \n via different fold variants\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "parMapRedl",
          "package": "edenskel",
          "signature": "(b -\u003e b -\u003e b) -\u003e b -\u003e (a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#parMapRedl",
          "type": "function"
        },
        "index": {
          "description": "Basic parMapRedl skeleton as many processes as noPe local pre-folding per PE and final folding of PE-results via different fold variants",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "parMapRedl",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003e[b]-\u003ea",
          "package": "edenskel",
          "partial": "Map Redl",
          "signature": "(b-\u003eb-\u003eb)-\u003eb-\u003e(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:parMapRedl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic parMapRedl' skeleton - as many processes as noPe. \n local pre-folding per PE and final folding of PE-results \n via different fold variants\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "parMapRedl'",
          "package": "edenskel",
          "signature": "(b -\u003e b -\u003e b) -\u003e b -\u003e (a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#parMapRedl%27",
          "type": "function"
        },
        "index": {
          "description": "Basic parMapRedl skeleton as many processes as noPe local pre-folding per PE and final folding of PE-results via different fold variants",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "parMapRedl'",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003e[b]-\u003ea",
          "package": "edenskel",
          "partial": "Map Redl'",
          "signature": "(b-\u003eb-\u003eb)-\u003eb-\u003e(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:parMapRedl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic parMapRedr skeleton - as many processes as noPe. \n local pre-folding per PE and final folding of PE-results \n via different fold variants\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "parMapRedr",
          "package": "edenskel",
          "signature": "(b -\u003e b -\u003e b) -\u003e b -\u003e (a -\u003e b) -\u003e [a] -\u003e b",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#parMapRedr",
          "type": "function"
        },
        "index": {
          "description": "Basic parMapRedr skeleton as many processes as noPe local pre-folding per PE and final folding of PE-results via different fold variants",
          "hierarchy": "Control Parallel Eden EdenSkel MapRedSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapRedSkels",
          "name": "parMapRedr",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003e(b-\u003ea)-\u003e[b]-\u003ea",
          "package": "edenskel",
          "partial": "Map Redr",
          "signature": "(b-\u003eb-\u003eb)-\u003eb-\u003e(a-\u003eb)-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapRedSkels.html#v:parMapRedr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines map-like skeletons for \n the parallel functional language Eden.\n\u003c/p\u003e\u003cp\u003eDepends on GHC. Using standard GHC, you will get a threaded simulation of Eden. \n Use the forked GHC-Eden compiler from http://www.mathematik.uni-marburg.de/~eden \n for a parallel build.\n\u003c/p\u003e\u003cp\u003eEden Group ( http://www.mathematik.uni-marburg.de/~eden )\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "MapSkels",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-MapSkels.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines map-like skeletons for the parallel functional language Eden Depends on GHC Using standard GHC you will get threaded simulation of Eden Use the forked GHC-Eden compiler from http www.mathematik.uni-marburg.de eden for parallel build Eden Group http www.mathematik.uni-marburg.de eden",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "MapSkels",
          "package": "edenskel",
          "partial": "Map Skels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA farm distributes its input to a number of worker processes.\n The distribution function divides the input list into \n sublists - each sublist is input to one worker process, the \n number of worker processes is determined by the number of \n sublists. The results of the worker processes are \n then combined using the combination function.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emapFarmS\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emapFarmB\u003c/a\u003e\u003c/code\u003e if you want a simpler interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farm",
          "package": "edenskel",
          "signature": "([a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "farm distributes its input to number of worker processes The distribution function divides the input list into sublists each sublist is input to one worker process the number of worker processes is determined by the number of sublists The results of the worker processes are then combined using the combination function Use mapFarmS or mapFarmB if you want simpler interface",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farm",
          "normalized": "([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:farm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA farm distributes its input to a number of worker processes.\n This version takes places for instantiation.\n The distribution function divides the input list into \n sublists - each sublist is input to one worker process, the \n number of worker processes is determined by the number of \n sublists. The results of the worker processes are \n then combined using the combination function.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emap_farm\u003c/a\u003e\u003c/code\u003e if you want a simpler interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmAt",
          "package": "edenskel",
          "signature": "Places-\u003e ([a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "farm distributes its input to number of worker processes This version takes places for instantiation The distribution function divides the input list into sublists each sublist is input to one worker process the number of worker processes is determined by the number of sublists The results of the worker processes are then combined using the combination function Use map farm if you want simpler interface",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmAt",
          "normalized": "Places-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "At",
          "signature": "Places-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:farmAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003efarm\u003c/a\u003e\u003c/code\u003e, but uses a fixed block distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmB",
          "package": "edenskel",
          "signature": "Int-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Like the farm but uses fixed block distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmB",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:farmB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated, use the \u003ccode\u003e\u003ca\u003efarm\u003c/a\u003e\u003c/code\u003e;\n \u003ccode\u003efarmClassic\u003c/code\u003e distributes its input to a number of worker processes.\n This is the Classic version as described in the Eden standard reference \n \u003ca\u003eParallel Functional Programming in Eden\u003c/a\u003e.\n The distribution function is expected to divide the input list into \n the given number of sublists. In the new farm the number of sublists is \n determined only by the distribution function.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emap_farm\u003c/a\u003e\u003c/code\u003e if you want a simpler interface.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmClassic",
          "package": "edenskel",
          "signature": "Int-\u003e (Int -\u003e [a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use the farm farmClassic distributes its input to number of worker processes This is the Classic version as described in the Eden standard reference Parallel Functional Programming in Eden The distribution function is expected to divide the input list into the given number of sublists In the new farm the number of sublists is determined only by the distribution function Use map farm if you want simpler interface",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmClassic",
          "normalized": "Int-\u003e(Int-\u003e[a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Classic",
          "signature": "Int-\u003e(Int-\u003e[a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:farmClassic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003efarm\u003c/a\u003e\u003c/code\u003e, but uses a fixed round-robin distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmS",
          "package": "edenskel",
          "signature": "Int-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Like the farm but uses fixed round-robin distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "farmS",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:farmS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel map variant with map interface using (max (noPe-1) 1) worker processes. Skeletons ending on \u003ccode\u003eS\u003c/code\u003e use round-robin distribution, skeletons ending on \u003ccode\u003eB\u003c/code\u003e use block distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapFarmB",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Parallel map variant with map interface using max noPe-1 worker processes Skeletons ending on use round-robin distribution skeletons ending on use block distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapFarmB",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:mapFarmB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel map variant with map interface using (max (noPe-1) 1) worker processes. Skeletons ending on \u003ccode\u003eS\u003c/code\u003e use round-robin distribution, skeletons ending on \u003ccode\u003eB\u003c/code\u003e use block distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapFarmS",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Parallel map variant with map interface using max noPe-1 worker processes Skeletons ending on use round-robin distribution skeletons ending on use block distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapFarmS",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:mapFarmS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel map variant with map interface using (max (noPe-1) 1) worker processes. Skeletons ending on \u003ccode\u003eS\u003c/code\u003e use round-robin distribution, skeletons ending on \u003ccode\u003eB\u003c/code\u003e use block distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapOfflineFarmB",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Parallel map variant with map interface using max noPe-1 worker processes Skeletons ending on use round-robin distribution skeletons ending on use block distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapOfflineFarmB",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Offline Farm",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:mapOfflineFarmB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel map variant with map interface using (max (noPe-1) 1) worker processes. Skeletons ending on \u003ccode\u003eS\u003c/code\u003e use round-robin distribution, skeletons ending on \u003ccode\u003eB\u003c/code\u003e use block distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapOfflineFarmS",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Parallel map variant with map interface using max noPe-1 worker processes Skeletons ending on use round-robin distribution skeletons ending on use block distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "mapOfflineFarmS",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Offline Farm",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:mapOfflineFarmS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Parallel map variants with map interface using noPe worker processes.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_farm",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Parallel map variants with map interface using noPe worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_farm",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:map_farm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Parallel map variants with map interface using noPe worker processes.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_offlineFarm",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Parallel map variants with map interface using noPe worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_offlineFarm",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:map_offlineFarm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Same as \u003ccode\u003e\u003ca\u003eparMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_par",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Same as parMap",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_par",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:map_par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Parallel map variants with map interface using noPe worker processes.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_ssf",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Parallel map variants with map interface using noPe worker processes",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "map_ssf",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:map_ssf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffline farm (alias direct mapping): Like the farm, but\n tasks are evaluated inside the workers (less communication\n overhead). Tasks are mapped inside each generated process\n abstraction avoiding evaluating and sending them. This often\n reduces the communication overhead because unevaluated data is\n usually much smaller than evaluated data.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emap_offlineFarm\u003c/a\u003e\u003c/code\u003e if you want a simpler interface.\n\u003c/p\u003e\u003cp\u003eNotice: The offline farm receives the number of processes to be created\n as its first parameter. \n The task lists structure has to be completely defined\n before process instantiation takes place.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarm",
          "package": "edenskel",
          "signature": "Int-\u003e ([a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Offline farm alias direct mapping Like the farm but tasks are evaluated inside the workers less communication overhead Tasks are mapped inside each generated process abstraction avoiding evaluating and sending them This often reduces the communication overhead because unevaluated data is usually much smaller than evaluated data Use map offlineFarm if you want simpler interface Notice The offline farm receives the number of processes to be created as its first parameter The task lists structure has to be completely defined before process instantiation takes place",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarm",
          "normalized": "Int-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm",
          "signature": "Int-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:offlineFarm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffline farm with explicit placement (alias self-service farm or\n direct mapping): Like the farm, but tasks are evaluated inside the\n workers (less communication overhead). Tasks are mapped inside each\n generated process abstraction, avoiding evaluating and sending\n them. This often reduces the communication overhead because\n unevaluated data is usually much smaller than evaluated data.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emap_offlineFarm\u003c/a\u003e\u003c/code\u003e if you want a simpler interface.\n\u003c/p\u003e\u003cp\u003eNotice: The task lists structure has to be completely defined\n before process instantiation takes place.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarmAt",
          "package": "edenskel",
          "signature": "Places-\u003e Int-\u003e ([a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Offline farm with explicit placement alias self-service farm or direct mapping Like the farm but tasks are evaluated inside the workers less communication overhead Tasks are mapped inside each generated process abstraction avoiding evaluating and sending them This often reduces the communication overhead because unevaluated data is usually much smaller than evaluated data Use map offlineFarm if you want simpler interface Notice The task lists structure has to be completely defined before process instantiation takes place",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarmAt",
          "normalized": "Places-\u003eInt-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm At",
          "signature": "Places-\u003eInt-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:offlineFarmAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003eofflineFarm\u003c/a\u003e\u003c/code\u003e, but with fixed block distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarmB",
          "package": "edenskel",
          "signature": "Int-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Like the offlineFarm but with fixed block distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarmB",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm",
          "signature": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:offlineFarmB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003eofflineFarm\u003c/a\u003e\u003c/code\u003e, but with fixed round-robin distribution of tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarmS",
          "package": "edenskel",
          "signature": "Int-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Like the offlineFarm but with fixed round-robin distribution of tasks",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offlineFarmS",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Farm",
          "signature": "Int-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:offlineFarmS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated: Same as \u003ccode\u003e\u003ca\u003eofflineFarm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offline_farm",
          "package": "edenskel",
          "signature": "Int-\u003e ([a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Same as offlineFarm",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "offline_farm",
          "normalized": "Int-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "Int-\u003e([a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:offline_farm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic parMap Skeleton - one process for each list element\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "parMap",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Basic parMap Skeleton one process for each list element",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "parMap",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:parMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic parMap Skeleton - one process for each list element. This version takes \n places for instantiation on particular PEs. \n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "parMapAt",
          "package": "edenskel",
          "signature": "Places-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Basic parMap Skeleton one process for each list element This version takes places for instantiation on particular PEs",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "parMapAt",
          "normalized": "Places-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Map At",
          "signature": "Places-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:parMapAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process ranch is a generalized (or super-) farm.  Arbitrary input \n is transformed into a list of inputs for the worker processes (one worker \n for each transformed value). The worker inputs are processed by the worker function.\n The results of the worker processes are then reduced using the reduction function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "ranch",
          "package": "edenskel",
          "signature": "(a -\u003e [b])-\u003e ([c] -\u003e d)-\u003e (b -\u003e c)-\u003e a-\u003e d",
          "type": "function"
        },
        "index": {
          "description": "process ranch is generalized or super farm Arbitrary input is transformed into list of inputs for the worker processes one worker for each transformed value The worker inputs are processed by the worker function The results of the worker processes are then reduced using the reduction function",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "ranch",
          "normalized": "(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "package": "edenskel",
          "signature": "(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:ranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA process ranch is a generalized (or super-) farm. This version takes \n places for instantiation. Arbitrary input is transformed into a list of inputs \n for the worker processes (one worker for each transformed value). The worker \n inputs are processed by the worker function.\n The results of the worker processes are then reduced using the reduction function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "ranchAt",
          "package": "edenskel",
          "signature": "Places-\u003e (a -\u003e [b])-\u003e ([c] -\u003e d)-\u003e (b -\u003e c)-\u003e a-\u003e d",
          "type": "function"
        },
        "index": {
          "description": "process ranch is generalized or super farm This version takes places for instantiation Arbitrary input is transformed into list of inputs for the worker processes one worker for each transformed value The worker inputs are processed by the worker function The results of the worker processes are then reduced using the reduction function",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "ranchAt",
          "normalized": "Places-\u003e(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "package": "edenskel",
          "partial": "At",
          "signature": "Places-\u003e(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e(b-\u003ec)-\u003ea-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:ranchAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated, use \u003ccode\u003e\u003ca\u003eofflineFarm\u003c/a\u003e\u003c/code\u003e; \n Self service farm. Like the farm, but\n tasks are evaluated in the workers (less communication overhead).\n This is the classic version. The distribution function is expected\n to divide the input list into the given number of sublists. In the\n new self service farm the number of sublists is determined only by\n the distribution function.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emap_ssf\u003c/a\u003e\u003c/code\u003e if you want a simpler interface.\n\u003c/p\u003e\u003cp\u003eNotice: The task lists structure has to be completely defined\n before process instantiation takes place.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "ssf",
          "package": "edenskel",
          "signature": "Int-\u003e (Int -\u003e [a] -\u003e [[a]])-\u003e ([[b]] -\u003e [b])-\u003e (a -\u003e b)-\u003e [a]-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use offlineFarm Self service farm Like the farm but tasks are evaluated in the workers less communication overhead This is the classic version The distribution function is expected to divide the input list into the given number of sublists In the new self service farm the number of sublists is determined only by the distribution function Use map ssf if you want simpler interface Notice The task lists structure has to be completely defined before process instantiation takes place",
          "hierarchy": "Control Parallel Eden EdenSkel MapSkels",
          "module": "Control.Parallel.Eden.EdenSkel.MapSkels",
          "name": "ssf",
          "normalized": "Int-\u003e(Int-\u003e[a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "Int-\u003e(Int-\u003e[a]-\u003e[[a]])-\u003e([[b]]-\u003e[b])-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-MapSkels.html#v:ssf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines topology skeletons for the parallel functional\n language Eden. Topology skeletons are skeletons that implement a network of\n processes interconnected by a characteristic communication topology.\n\u003c/p\u003e\u003cp\u003eDepends on GHC. Using standard GHC, you will get a threaded simulation of Eden. \n Use the forked GHC-Eden compiler from http://www.mathematik.uni-marburg.de/~eden \n for a parallel build.\n\u003c/p\u003e\u003cp\u003eEden Group ( http://www.mathematik.uni-marburg.de/~eden )\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "TopoSkels",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-TopoSkels.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines topology skeletons for the parallel functional language Eden Topology skeletons are skeletons that implement network of processes interconnected by characteristic communication topology Depends on GHC Using standard GHC you will get threaded simulation of Eden Use the forked GHC-Eden compiler from http www.mathematik.uni-marburg.de eden for parallel build Eden Group http www.mathematik.uni-marburg.de eden",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "TopoSkels",
          "package": "edenskel",
          "partial": "Topo Skels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an all-gather using a butterfly scheme (based on allReduceRDAt). \n The initial transformation is applied in  the processes to obtain the values that will be reduced.\n The final combine function is used to create a processes outputs from the initial input and the \n gathered values.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherBuFlyRD",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e (a -\u003e [b] -\u003e c)-\u003e [RD a]-\u003e [RD c]",
          "type": "function"
        },
        "index": {
          "description": "Performs an all-gather using butterfly scheme based on allReduceRDAt The initial transformation is applied in the processes to obtain the values that will be reduced The final combine function is used to create processes outputs from the initial input and the gathered values",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherBuFlyRD",
          "normalized": "(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "Gather Bu Fly RD",
          "signature": "(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allGatherBuFlyRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an all-gather using a butterfly scheme (based on allReduceRDAt). \n The initial transformation is applied in  the processes to obtain the values that will be reduced.\n The final combine function is used to create a processes outputs from the initial input and the \n gathered values.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherBuFlyRDAt",
          "package": "edenskel",
          "signature": "Places-\u003e (a -\u003e b)-\u003e (a -\u003e [b] -\u003e c)-\u003e [RD a]-\u003e [RD c]",
          "type": "function"
        },
        "index": {
          "description": "Performs an all-gather using butterfly scheme based on allReduceRDAt The initial transformation is applied in the processes to obtain the values that will be reduced The final combine function is used to create processes outputs from the initial input and the gathered values",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherBuFlyRDAt",
          "normalized": "Places-\u003e(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "Gather Bu Fly RDAt",
          "signature": "Places-\u003e(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allGatherBuFlyRDAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an all-gather using all to all comunication (based on allToAllRDAt). \n The initial transformation is applied in  the processes to obtain the values that will be reduced.\n The final combine function is used to create a processes outputs from the initial input and the \n gathered values.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherRD",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e (a -\u003e [b] -\u003e c)-\u003e [RD a]-\u003e [RD c]",
          "type": "function"
        },
        "index": {
          "description": "Performs an all-gather using all to all comunication based on allToAllRDAt The initial transformation is applied in the processes to obtain the values that will be reduced The final combine function is used to create processes outputs from the initial input and the gathered values",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherRD",
          "normalized": "(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "Gather RD",
          "signature": "(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allGatherRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an all-gather using all to all comunication (based on allToAllRDAt).\n The initial transformation is applied in  the processes to obtain the values that will be reduced.\n The final combine function is used to create a processes outputs from the initial input and the \n gathered values.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherRDAt",
          "package": "edenskel",
          "signature": "Places-\u003e (a -\u003e b)-\u003e (a -\u003e [b] -\u003e c)-\u003e [RD a]-\u003e [RD c]",
          "type": "function"
        },
        "index": {
          "description": "Performs an all-gather using all to all comunication based on allToAllRDAt The initial transformation is applied in the processes to obtain the values that will be reduced The final combine function is used to create processes outputs from the initial input and the gathered values",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allGatherRDAt",
          "normalized": "Places-\u003e(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "Gather RDAt",
          "signature": "Places-\u003e(a-\u003eb)-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allGatherRDAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an all-reduce with the reduce function using a butterfly scheme.\n The initial transformation is applied in the processes to obtain the values\n that will be reduced. The final combine function is used to create a processes outputs.\n result from the initial input and the reduced value.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allReduceRD",
          "package": "edenskel",
          "signature": "(a -\u003e b)-\u003e (b -\u003e b -\u003e b)-\u003e (a -\u003e b -\u003e c)-\u003e [RD a]-\u003e [RD c]",
          "type": "function"
        },
        "index": {
          "description": "Performs an all-reduce with the reduce function using butterfly scheme The initial transformation is applied in the processes to obtain the values that will be reduced The final combine function is used to create processes outputs result from the initial input and the reduced value",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allReduceRD",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(a-\u003eb-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "Reduce RD",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(a-\u003eb-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allReduceRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an all-reduce with the reduce function using a butterfly scheme.\n The initial transformation is applied in the processes to obtain the values\n that will be reduced. The final combine function is used to create a processes output.\n result from the initial input and the reduced value.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allReduceRDAt",
          "package": "edenskel",
          "signature": "Places-\u003e (a -\u003e b)-\u003e (b -\u003e b -\u003e b)-\u003e (a -\u003e b -\u003e c)-\u003e [RD a]-\u003e [RD c]",
          "type": "function"
        },
        "index": {
          "description": "Performs an all-reduce with the reduce function using butterfly scheme The initial transformation is applied in the processes to obtain the values that will be reduced The final combine function is used to create processes output result from the initial input and the reduced value",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allReduceRDAt",
          "normalized": "Places-\u003e(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(a-\u003eb-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "Reduce RDAt",
          "signature": "Places-\u003e(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003e(a-\u003eb-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allReduceRDAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe skeleton creates as many processes as elements in the input list (\u003ccode\u003enp\u003c/code\u003e). \n The processes get all-to-all connected, each process input is transformed to \n \u003ccode\u003enp\u003c/code\u003e intermediate values by the first parameter function, where the \u003ccode\u003ei\u003c/code\u003e-th value\n will be send to process \u003ccode\u003ei\u003c/code\u003e. The second transformation function combines the initial\n input and the \u003ccode\u003enp\u003c/code\u003e received intermediate values to the final output.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allToAllRD",
          "package": "edenskel",
          "signature": "(Int -\u003e a -\u003e [i])-\u003e (a -\u003e [i] -\u003e b)-\u003e [RD a]-\u003e [RD b]",
          "type": "function"
        },
        "index": {
          "description": "The skeleton creates as many processes as elements in the input list np The processes get all-to-all connected each process input is transformed to np intermediate values by the first parameter function where the th value will be send to process The second transformation function combines the initial input and the np received intermediate values to the final output",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allToAllRD",
          "normalized": "(Int-\u003ea-\u003e[b])-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "To All RD",
          "signature": "(Int-\u003ea-\u003e[i])-\u003e(a-\u003e[i]-\u003eb)-\u003e[RD a]-\u003e[RD b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allToAllRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe skeleton creates as many processes as elements in the input list (\u003ccode\u003enp\u003c/code\u003e). \n The processes get all-to-all connected, each process input is transformed to \n \u003ccode\u003enp\u003c/code\u003e intermediate values by the first parameter function, where the \u003ccode\u003ei\u003c/code\u003e-th value\n will be send to process \u003ccode\u003ei\u003c/code\u003e. The second transformation function combines the initial\n input and the \u003ccode\u003enp\u003c/code\u003e received intermediate values to the final output.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allToAllRDAt",
          "package": "edenskel",
          "signature": "Places-\u003e (Int -\u003e a -\u003e [i])-\u003e (a -\u003e [i] -\u003e b)-\u003e [RD a]-\u003e [RD b]",
          "type": "function"
        },
        "index": {
          "description": "The skeleton creates as many processes as elements in the input list np The processes get all-to-all connected each process input is transformed to np intermediate values by the first parameter function where the th value will be send to process The second transformation function combines the initial input and the np received intermediate values to the final output",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "allToAllRDAt",
          "normalized": "Places-\u003e(Int-\u003ea-\u003e[b])-\u003e(a-\u003e[b]-\u003ec)-\u003e[RD a]-\u003e[RD c]",
          "package": "edenskel",
          "partial": "To All RDAt",
          "signature": "Places-\u003e(Int-\u003ea-\u003e[i])-\u003e(a-\u003e[i]-\u003eb)-\u003e[RD a]-\u003e[RD b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:allToAllRDAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel transposition for matrizes which are row-wise round robin distributed among the machines, the transposed result matrix is also row-wise round robin distributed.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "parTransposeRD",
          "package": "edenskel",
          "signature": "[RD [[b]]]-\u003e [RD [[b]]]",
          "type": "function"
        },
        "index": {
          "description": "Parallel transposition for matrizes which are row-wise round robin distributed among the machines the transposed result matrix is also row-wise round robin distributed",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "parTransposeRD",
          "normalized": "[RD[[a]]]-\u003e[RD[[a]]]",
          "package": "edenskel",
          "partial": "Transpose RD",
          "signature": "[RD[[b]]]-\u003e[RD[[b]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:parTransposeRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel transposition for matrizes which are row-wise round robin distributed among the machines, the transposed result matrix is also row-wise round robin distributed.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "parTransposeRDAt",
          "package": "edenskel",
          "signature": "Places-\u003e [RD [[b]]]-\u003e [RD [[b]]]",
          "type": "function"
        },
        "index": {
          "description": "Parallel transposition for matrizes which are row-wise round robin distributed among the machines the transposed result matrix is also row-wise round robin distributed",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "parTransposeRDAt",
          "normalized": "Places-\u003e[RD[[a]]]-\u003e[RD[[a]]]",
          "package": "edenskel",
          "partial": "Transpose RDAt",
          "signature": "Places-\u003e[RD[[b]]]-\u003e[RD[[b]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:parTransposeRDAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple pipe where the parent process creates all pipe processes. The processes communicate their results via the caller process. \n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "pipe",
          "package": "edenskel",
          "signature": "[a -\u003e a]-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Simple pipe where the parent process creates all pipe processes The processes communicate their results via the caller process",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "pipe",
          "normalized": "[a-\u003ea]-\u003ea-\u003ea",
          "package": "edenskel",
          "signature": "[a-\u003ea]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess pipe where the processes communicate their Remote Data handles via the caller process but fetch the actual data from their predecessor processes\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "pipeRD",
          "package": "edenskel",
          "signature": "[a -\u003e a]-\u003e RD a-\u003e RD a",
          "type": "function"
        },
        "index": {
          "description": "Process pipe where the processes communicate their Remote Data handles via the caller process but fetch the actual data from their predecessor processes",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "pipeRD",
          "normalized": "[a-\u003ea]-\u003eRD a-\u003eRD a",
          "package": "edenskel",
          "partial": "RD",
          "signature": "[a-\u003ea]-\u003eRD a-\u003eRD a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:pipeRD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ring establishes a ring topology, the ring process function\n transforms the initial input of a ring process and the input stream from the ring into the \n ring output stream and the ring processes final result. The \n same function is used by every ring process. Use ringFl\n if you need different functions in the processes. Use ringAt if \n explicit placement is desired.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ring",
          "package": "edenskel",
          "signature": "(i -\u003e [a])-\u003e ([b] -\u003e o)-\u003e (a -\u003e [r] -\u003e (b, [r]))-\u003e i-\u003e o",
          "type": "function"
        },
        "index": {
          "description": "The ring establishes ring topology the ring process function transforms the initial input of ring process and the input stream from the ring into the ring output stream and the ring processes final result The same function is used by every ring process Use ringFl if you need different functions in the processes Use ringAt if explicit placement is desired",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ring",
          "normalized": "(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e(b-\u003e[e]-\u003e(c,[e]))-\u003ea-\u003ed",
          "package": "edenskel",
          "signature": "(i-\u003e[a])-\u003e([b]-\u003eo)-\u003e(a-\u003e[r]-\u003e(b,[r]))-\u003ei-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkeleton \u003ccode\u003eringAt\u003c/code\u003e establishes a ring topology, the ring process function\n transforms the initial input of a ring process and the input stream from the ring into the \n ring output stream and the ring processes' final result. The \n same function is used by every ring process. Use ringFlAt\n if you need different functions in the processes. This version uses explicit placement.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringAt",
          "package": "edenskel",
          "signature": "Places-\u003e (i -\u003e [a])-\u003e ([b] -\u003e o)-\u003e (a -\u003e [r] -\u003e (b, [r]))-\u003e i-\u003e o",
          "type": "function"
        },
        "index": {
          "description": "Skeleton ringAt establishes ring topology the ring process function transforms the initial input of ring process and the input stream from the ring into the ring output stream and the ring processes final result The same function is used by every ring process Use ringFlAt if you need different functions in the processes This version uses explicit placement",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringAt",
          "normalized": "Places-\u003e(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e(b-\u003e[e]-\u003e(c,[e]))-\u003ea-\u003ed",
          "package": "edenskel",
          "partial": "At",
          "signature": "Places-\u003e(i-\u003e[a])-\u003e([b]-\u003eo)-\u003e(a-\u003e[r]-\u003e(b,[r]))-\u003ei-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:ringAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ringFl establishes a ring topology, the ring process functions\n transform the initial input of a ring process and the input stream from the ring into the \n ring output stream and the ring processes' final result. Every ring process \n applies an individual function which e.g. allows to route individual offline input into the \n ring processes. Use ringFlAt if explicit placement is desired.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringFl",
          "package": "edenskel",
          "signature": "(i -\u003e [a])-\u003e ([b] -\u003e o)-\u003e [a -\u003e [r] -\u003e (b, [r])]-\u003e i-\u003e o",
          "type": "function"
        },
        "index": {
          "description": "The ringFl establishes ring topology the ring process functions transform the initial input of ring process and the input stream from the ring into the ring output stream and the ring processes final result Every ring process applies an individual function which e.g allows to route individual offline input into the ring processes Use ringFlAt if explicit placement is desired",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringFl",
          "normalized": "(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e[b-\u003e[e]-\u003e(c,[e])]-\u003ea-\u003ed",
          "package": "edenskel",
          "partial": "Fl",
          "signature": "(i-\u003e[a])-\u003e([b]-\u003eo)-\u003e[a-\u003e[r]-\u003e(b,[r])]-\u003ei-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:ringFl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ringFlAt establishes a ring topology, the ring process functions\n transform the initial input of a ring process and the input stream from the ring into the \n ring output stream and the ring processes' final result. Every ring process  \n applies its individual function which e.g. allows to route individual offline input into the \n ring processes. This version uses explicit placement.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringFlAt",
          "package": "edenskel",
          "signature": "Places-\u003e (i -\u003e [a])-\u003e ([b] -\u003e o)-\u003e [a -\u003e [r] -\u003e (b, [r])]-\u003e i-\u003e o",
          "type": "function"
        },
        "index": {
          "description": "The ringFlAt establishes ring topology the ring process functions transform the initial input of ring process and the input stream from the ring into the ring output stream and the ring processes final result Every ring process applies its individual function which e.g allows to route individual offline input into the ring processes This version uses explicit placement",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringFlAt",
          "normalized": "Places-\u003e(a-\u003e[b])-\u003e([c]-\u003ed)-\u003e[b-\u003e[e]-\u003e(c,[e])]-\u003ea-\u003ed",
          "package": "edenskel",
          "partial": "Fl At",
          "signature": "Places-\u003e(i-\u003e[a])-\u003e([b]-\u003eo)-\u003e[a-\u003e[r]-\u003e(b,[r])]-\u003ei-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:ringFlAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple ring skeleton (tutorial version) \n using remote data for providing direct inter-ring communication  \n without input distribution and output combination  \n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringSimple",
          "package": "edenskel",
          "signature": "(i -\u003e r -\u003e (o, r))-\u003e [i]-\u003e [o]",
          "type": "function"
        },
        "index": {
          "description": "Simple ring skeleton tutorial version using remote data for providing direct inter-ring communication without input distribution and output combination",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "ringSimple",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003e[a]-\u003e[c]",
          "package": "edenskel",
          "partial": "Simple",
          "signature": "(i-\u003er-\u003e(o,r))-\u003e[i]-\u003e[o]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:ringSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel torus skeleton (tutorial version) with stream rotation in 2 directions: initial inputs for each torus element are given. The node function is used on each torus element to transform the initial input and a stream of inputs from each direction to a stream of outputs to each direction. Each torus input should have the same size in both dimensions, otherwise the smaller input will determine the size of the torus.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "torus",
          "package": "edenskel",
          "signature": "(c -\u003e [a] -\u003e [b] -\u003e (d, [a], [b]))-\u003e [[c]]-\u003e [[d]]",
          "type": "function"
        },
        "index": {
          "description": "Parallel torus skeleton tutorial version with stream rotation in directions initial inputs for each torus element are given The node function is used on each torus element to transform the initial input and stream of inputs from each direction to stream of outputs to each direction Each torus input should have the same size in both dimensions otherwise the smaller input will determine the size of the torus",
          "hierarchy": "Control Parallel Eden EdenSkel TopoSkels",
          "module": "Control.Parallel.Eden.EdenSkel.TopoSkels",
          "name": "torus",
          "normalized": "(a-\u003e[b]-\u003e[c]-\u003e(d,[b],[c]))-\u003e[[a]]-\u003e[[d]]",
          "package": "edenskel",
          "signature": "(c-\u003e[a]-\u003e[b]-\u003e(d,[a],[b]))-\u003e[[c]]-\u003e[[d]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-TopoSkels.html#v:torus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell module defines workpool skeletons for dynamic task\n distribution for the parallel functional language Eden.\n\u003c/p\u003e\u003cp\u003eDepends on GHC. Using standard GHC, you will get a threaded simulation of Eden. \n Use the forked GHC-Eden compiler from http://www.mathematik.uni-marburg.de/~eden \n for a parallel build.\n\u003c/p\u003e\u003cp\u003eEden Group ( http://www.mathematik.uni-marburg.de/~eden )\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "WPSkels",
          "package": "edenskel",
          "source": "src/Control-Parallel-Eden-EdenSkel-WPSkels.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell module defines workpool skeletons for dynamic task distribution for the parallel functional language Eden Depends on GHC Using standard GHC you will get threaded simulation of Eden Use the forked GHC-Eden compiler from http www.mathematik.uni-marburg.de eden for parallel build Eden Group http www.mathematik.uni-marburg.de eden",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "WPSkels",
          "package": "edenskel",
          "partial": "WPSkels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA distributed workpool skeleton that uses task generation and a global state (s) with a total order.\n Split and Detatch policy must give tasks away (may not produce empty lists), unless all tasks are pruned!\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "distribWPAt",
          "package": "edenskel",
          "signature": "Places-\u003e ((t, s) -\u003e (Maybe (r', s), [t]))-\u003e (Maybe ofT -\u003e Maybe onT -\u003e [t])-\u003e ([Maybe (r', s)] -\u003e s -\u003e r)-\u003e ([t] -\u003e [t] -\u003e s -\u003e [t])-\u003e ([t] -\u003e s -\u003e ([t], Maybe (t, s)))-\u003e ([t] -\u003e s -\u003e ([t], [t]))-\u003e (s -\u003e s -\u003e Bool)-\u003e s-\u003e [ofT]-\u003e [onT]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "distributed workpool skeleton that uses task generation and global state with total order Split and Detatch policy must give tasks away may not produce empty lists unless all tasks are pruned",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "distribWPAt",
          "normalized": "Places-\u003e((a,b)-\u003e(Maybe(c,b),[a]))-\u003e(Maybe d-\u003eMaybe e-\u003e[a])-\u003e([Maybe(c,b)]-\u003eb-\u003ef)-\u003e([a]-\u003e[a]-\u003eb-\u003e[a])-\u003e([a]-\u003eb-\u003e([a],Maybe(a,b)))-\u003e([a]-\u003eb-\u003e([a],[a]))-\u003e(b-\u003eb-\u003eBool)-\u003eb-\u003e[d]-\u003e[e]-\u003e[f]",
          "package": "edenskel",
          "partial": "WPAt",
          "signature": "Places-\u003e((t,s)-\u003e(Maybe(r',s),[t]))-\u003e(Maybe ofT-\u003eMaybe onT-\u003e[t])-\u003e([Maybe(r',s)]-\u003es-\u003er)-\u003e([t]-\u003e[t]-\u003es-\u003e[t])-\u003e([t]-\u003es-\u003e([t],Maybe(t,s)))-\u003e([t]-\u003es-\u003e([t],[t]))-\u003e(s-\u003es-\u003eBool)-\u003es-\u003e[ofT]-\u003e[onT]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:distribWPAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated, same as \u003ccode\u003e\u003ca\u003eworkpoolSortedNonBlock\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "masterWorker",
          "package": "edenskel",
          "signature": "Int -\u003e Int -\u003e (a -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/Control-Parallel-Eden-EdenSkel-WPSkels.html#masterWorker",
          "type": "function"
        },
        "index": {
          "description": "Deprecated same as workpoolSortedNonBlock",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "masterWorker",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Worker",
          "signature": "Int-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:masterWorker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated, same as \u003ccode\u003e\u003ca\u003ewpDNI\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "mwDNI",
          "package": "edenskel",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e (t -\u003e (r, [t])) -\u003e [t] -\u003e [r]",
          "source": "src/Control-Parallel-Eden-EdenSkel-WPSkels.html#mwDNI",
          "type": "function"
        },
        "index": {
          "description": "Deprecated same as wpDNI",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "mwDNI",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(a-\u003e(b,[a]))-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "DNI",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(t-\u003e(r,[t]))-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:mwDNI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated, same as \u003ccode\u003e\u003ca\u003ewpDynNested\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "mwDynNested",
          "package": "edenskel",
          "signature": "[Int] -\u003e [Int] -\u003e (t -\u003e (r, [t])) -\u003e [t] -\u003e [r]",
          "source": "src/Control-Parallel-Eden-EdenSkel-WPSkels.html#mwDynNested",
          "type": "function"
        },
        "index": {
          "description": "Deprecated same as wpDynNested",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "mwDynNested",
          "normalized": "[Int]-\u003e[Int]-\u003e(a-\u003e(b,[a]))-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Dyn Nested",
          "signature": "[Int]-\u003e[Int]-\u003e(t-\u003e(r,[t]))-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:mwDynNested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated, same as \u003ccode\u003e\u003ca\u003ewpNested\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "mwNested",
          "package": "edenskel",
          "signature": "[Int] -\u003e [Int] -\u003e (t -\u003e r) -\u003e [t] -\u003e [r]",
          "source": "src/Control-Parallel-Eden-EdenSkel-WPSkels.html#mwNested",
          "type": "function"
        },
        "index": {
          "description": "Deprecated same as wpNested",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "mwNested",
          "normalized": "[Int]-\u003e[Int]-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Nested",
          "signature": "[Int]-\u003e[Int]-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:mwNested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple workpool (result list in non-deterministic order)\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpool",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Simple workpool result list in non-deterministic order Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpool",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "signature": "Int-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple workpool (result list in non-deterministic order)\n This version takes places for instantiation.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolAt",
          "package": "edenskel",
          "signature": "Places-\u003e Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Simple workpool result list in non-deterministic order This version takes places for instantiation Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolAt",
          "normalized": "Places-\u003eInt-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "At",
          "signature": "Places-\u003eInt-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorkpool version with one result stream for each worker and meta\n information about the task distribution.\n This meta-skeleton can be used to define workpool-skeletons which\n can reestablish the result list order.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolAuxAt",
          "package": "edenskel",
          "signature": "Places-\u003e Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e ([Int], [[Int]], [[r]])",
          "type": "function"
        },
        "index": {
          "description": "Workpool version with one result stream for each worker and meta information about the task distribution This meta-skeleton can be used to define workpool-skeletons which can reestablish the result list order Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolAuxAt",
          "normalized": "Places-\u003eInt-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e([Int],[[Int]],[[b]])",
          "package": "edenskel",
          "partial": "Aux At",
          "signature": "Places-\u003eInt-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e([Int],[[Int]],[[r]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolAuxAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple workpool  with additional reduce function for worker outputs.\n This version takes places for instantiation.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolReduce",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e (r' -\u003e r -\u003e r)-\u003e r-\u003e (t -\u003e r')-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Simple workpool with additional reduce function for worker outputs This version takes places for instantiation Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolReduce",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003e(c-\u003ea)-\u003e[c]-\u003e[b]",
          "package": "edenskel",
          "partial": "Reduce",
          "signature": "Int-\u003eInt-\u003e(r'-\u003er-\u003er)-\u003er-\u003e(t-\u003er')-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple workpool with additional reduce function for worker outputs.\n This version takes places for instantiation.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolReduceAt",
          "package": "edenskel",
          "signature": "Places-\u003e Int-\u003e Int-\u003e (r' -\u003e r -\u003e r)-\u003e r-\u003e (t -\u003e r')-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Simple workpool with additional reduce function for worker outputs This version takes places for instantiation Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolReduceAt",
          "normalized": "Places-\u003eInt-\u003eInt-\u003e(a-\u003eb-\u003eb)-\u003eb-\u003e(c-\u003ea)-\u003e[c]-\u003e[b]",
          "package": "edenskel",
          "partial": "Reduce At",
          "signature": "Places-\u003eInt-\u003eInt-\u003e(r'-\u003er-\u003er)-\u003er-\u003e(t-\u003er')-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolReduceAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorted workpool: Efficient implementation using a the\n distribution lookup list.\n\u003c/p\u003e\u003cp\u003eNotice: Results in the order of the tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSorted",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Sorted workpool Efficient implementation using the distribution lookup list Notice Results in the order of the tasks",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSorted",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Sorted",
          "signature": "Int-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolSorted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorted workpool (results in the order of the tasks).\n This version takes places for instantiation. \n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSortedAt",
          "package": "edenskel",
          "signature": "Places-\u003e Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Sorted workpool results in the order of the tasks This version takes places for instantiation",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSortedAt",
          "normalized": "Places-\u003eInt-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Sorted At",
          "signature": "Places-\u003eInt-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolSortedAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking sorted workpool (results in the order of the\n tasks). Result list is structurally defined up to the position\n where tasks are distributed, independent of the received worker\n results. This version needs still performance testing.  This\n version takes places for instantiation.\n\u003c/p\u003e\u003cp\u003eNotice: Results in the order of the tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSortedNonBlock",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking sorted workpool results in the order of the tasks Result list is structurally defined up to the position where tasks are distributed independent of the received worker results This version needs still performance testing This version takes places for instantiation Notice Results in the order of the tasks",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSortedNonBlock",
          "normalized": "Int-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Sorted Non Block",
          "signature": "Int-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolSortedNonBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking sorted workpool. Result list is structurally defined\n up to the position where tasks are distributed, independent of the\n received worker results. This version needs still performance\n testing.\n\u003c/p\u003e\u003cp\u003eNotice: Results in the order of the tasks.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSortedNonBlockAt",
          "package": "edenskel",
          "signature": "Places-\u003e Int-\u003e Int-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Non-blocking sorted workpool Result list is structurally defined up to the position where tasks are distributed independent of the received worker results This version needs still performance testing Notice Results in the order of the tasks",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "workpoolSortedNonBlockAt",
          "normalized": "Places-\u003eInt-\u003eInt-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Sorted Non Block At",
          "signature": "Places-\u003eInt-\u003eInt-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:workpoolSortedNonBlockAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple interface for \u003ccode\u003e\u003ca\u003ewpDynNested\u003c/a\u003e\u003c/code\u003e. Parameters are the number of child processes, the first\n level branching degree, the nesting depth (use 1 for a\n single master), and the task prefetch amount for the worker level.\n All processes that are not needed for the submasters are\n used for the workers. If the number of submasters in the last level\n and the number of remaining child processes are prime to each\n other, then the next larger divisor is chosen for the number of\n workers.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "wpDNI",
          "package": "edenskel",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e (t -\u003e (r, [t]))-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Simple interface for wpDynNested Parameters are the number of child processes the first level branching degree the nesting depth use for single master and the task prefetch amount for the worker level All processes that are not needed for the submasters are used for the workers If the number of submasters in the last level and the number of remaining child processes are prime to each other then the next larger divisor is chosen for the number of workers Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "wpDNI",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(a-\u003e(b,[a]))-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "DNI",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e(t-\u003e(r,[t]))-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:wpDNI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHierachical WP-Skeleton with dynamic task creation. The worker\n function is mapped to the worker input stream (list type). A worker\n produces a tuple of result and dynamicly created tasks for each\n processed task. The workers are located on the leaves of a\n WP-hierarchy, in the intermediate levels are submasters which unload\n the master by streamlining 'result/newtask' streams of their child\n processes into a single result/newtask stream. Furthermore, the\n submasters retain locally half of the tasks which are \n dynamically created by the workers in their subtree.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "wpDynNested",
          "package": "edenskel",
          "signature": "[Int]-\u003e [Int]-\u003e (t -\u003e (r, [t]))-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Hierachical WP-Skeleton with dynamic task creation The worker function is mapped to the worker input stream list type worker produces tuple of result and dynamicly created tasks for each processed task The workers are located on the leaves of WP-hierarchy in the intermediate levels are submasters which unload the master by streamlining result newtask streams of their child processes into single result newtask stream Furthermore the submasters retain locally half of the tasks which are dynamically created by the workers in their subtree Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "wpDynNested",
          "normalized": "[Int]-\u003e[Int]-\u003e(a-\u003e(b,[a]))-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Dyn Nested",
          "signature": "[Int]-\u003e[Int]-\u003e(t-\u003e(r,[t]))-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:wpDynNested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHierachical WP-Skeleton. The worker\n function is mapped to the worker input stream (list type). A worker\n produces a result. The workers are located on the leaves of a\n WP-hierarchy, in the intermediate levels are submasters which unload\n the master by streaming \u003ccode\u003eresult\u003c/code\u003e streams of their child\n processes into a single result stream.\n\u003c/p\u003e\u003cp\u003eNotice: Result list in non-deterministic order.\n\u003c/p\u003e",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "wpNested",
          "package": "edenskel",
          "signature": "[Int]-\u003e [Int]-\u003e (t -\u003e r)-\u003e [t]-\u003e [r]",
          "type": "function"
        },
        "index": {
          "description": "Hierachical WP-Skeleton The worker function is mapped to the worker input stream list type worker produces result The workers are located on the leaves of WP-hierarchy in the intermediate levels are submasters which unload the master by streaming result streams of their child processes into single result stream Notice Result list in non-deterministic order",
          "hierarchy": "Control Parallel Eden EdenSkel WPSkels",
          "module": "Control.Parallel.Eden.EdenSkel.WPSkels",
          "name": "wpNested",
          "normalized": "[Int]-\u003e[Int]-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "edenskel",
          "partial": "Nested",
          "signature": "[Int]-\u003e[Int]-\u003e(t-\u003er)-\u003e[t]-\u003e[r]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/edenskel/docs/Control-Parallel-Eden-EdenSkel-WPSkels.html#v:wpNested"
      }
    }
  ]
]