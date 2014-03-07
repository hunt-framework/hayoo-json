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
        "word": "persistent-vector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a port of the persistent vector from clojure to Haskell.\n It is spine-strict and lazy in the elements.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on array mapped tries.  The complexity\n bounds given are mostly O(1), but only if you are willing to accept\n that the tree cannot have height greater than 7 on 32 bit systems\n and maybe 8 on 64 bit systems.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Persistent",
          "name": "Persistent",
          "package": "persistent-vector",
          "source": "src/Data-Vector-Persistent.html",
          "type": "module"
        },
        "index": {
          "description": "This is port of the persistent vector from clojure to Haskell It is spine-strict and lazy in the elements The implementation is based on array mapped tries The complexity bounds given are mostly but only if you are willing to accept that the tree cannot have height greater than on bit systems and maybe on bit systems",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "Persistent",
          "package": "persistent-vector",
          "partial": "Persistent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePersistent vectors based on array mapped tries\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "Vector",
          "package": "persistent-vector",
          "source": "src/Data-Vector-Persistent.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Persistent vectors based on array mapped tries",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "Vector",
          "package": "persistent-vector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Bulk update.\n\u003c/p\u003e\u003cpre\u003e v // updates\n\u003c/pre\u003e\u003cp\u003eFor each (index, element) pair in \u003ccode\u003eupdates\u003c/code\u003e, modify \u003ccode\u003ev\u003c/code\u003e such that\n the \u003ccode\u003eindex\u003c/code\u003eth position of \u003ccode\u003ev\u003c/code\u003e is \u003ccode\u003eelement\u003c/code\u003e.\n Indices in \u003ccode\u003eupdates\u003c/code\u003e that are not in \u003ccode\u003ev\u003c/code\u003e are ignored\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "(//)",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e [(Int, a)] -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Bulk update updates For each index element pair in updates modify such that the index th position of is element Indices in updates that are not in are ignored",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "(//) //",
          "normalized": "Vector a-\u003e[(Int,a)]-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Vector a-\u003e[(Int,a)]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Drop \u003ccode\u003ei\u003c/code\u003e elements from the front of the vector.\n\u003c/p\u003e\u003cp\u003eNote that this is just a wrapper around slice.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "drop",
          "package": "persistent-vector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Drop elements from the front of the vector Note that this is just wrapper around slice",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "drop",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) The empty vector\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "empty",
          "package": "persistent-vector",
          "signature": "Vector a",
          "source": "src/Data-Vector-Persistent.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "empty",
          "package": "persistent-vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Filter according to the predicate\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "filter",
          "package": "persistent-vector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter according to the predicate",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Strict left fold over the vector\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "foldl'",
          "package": "persistent-vector",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Vector a -\u003e b",
          "source": "src/Data-Vector-Persistent.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Strict left fold over the vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "persistent-vector",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Right fold over the vector\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "foldr",
          "package": "persistent-vector",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Vector a -\u003e b",
          "source": "src/Data-Vector-Persistent.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Right fold over the vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "package": "persistent-vector",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eVector a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Construct a vector from a list.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "fromList",
          "package": "persistent-vector",
          "signature": "[a] -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct vector from list",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "fromList",
          "normalized": "[a]-\u003eVector a",
          "package": "persistent-vector",
          "partial": "List",
          "signature": "[a]-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Bounds-checked indexing into a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "index",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e Int -\u003e Maybe a",
          "source": "src/Data-Vector-Persistent.html#index",
          "type": "function"
        },
        "index": {
          "description": "Bounds-checked indexing into vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "index",
          "normalized": "Vector a-\u003eInt-\u003eMaybe a",
          "package": "persistent-vector",
          "signature": "Vector a-\u003eInt-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Get the length of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "length",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e Int",
          "source": "src/Data-Vector-Persistent.html#length",
          "type": "function"
        },
        "index": {
          "description": "Get the length of the vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "length",
          "normalized": "Vector a-\u003eInt",
          "package": "persistent-vector",
          "signature": "Vector a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Map over the vector\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "map",
          "package": "persistent-vector",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Data-Vector-Persistent.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map over the vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "persistent-vector",
          "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Test to see if the vector is empty.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "null",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e Bool",
          "source": "src/Data-Vector-Persistent.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test to see if the vector is empty",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "null",
          "normalized": "Vector a-\u003eBool",
          "package": "persistent-vector",
          "signature": "Vector a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Return the elements that do and do not obey the predicate\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "partition",
          "package": "persistent-vector",
          "signature": "(a -\u003e Bool) -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-Vector-Persistent.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Return the elements that do and do not obey the predicate",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "persistent-vector",
          "signature": "(a-\u003eBool)-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Reverse a vector\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "reverse",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "reverse",
          "normalized": "Vector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n) Force a sliced vector to drop any unneeded space and\n references.\n\u003c/p\u003e\u003cp\u003eThis is a no-op for an un-sliced vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "shrink",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#shrink",
          "type": "function"
        },
        "index": {
          "description": "Force sliced vector to drop any unneeded space and references This is no-op for an un-sliced vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "shrink",
          "normalized": "Vector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:shrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Construct a vector with a single element.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "singleton",
          "package": "persistent-vector",
          "signature": "a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct vector with single element",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "singleton",
          "normalized": "a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Return a slice of \u003ccode\u003ev\u003c/code\u003e of length \u003ccode\u003elength\u003c/code\u003e starting at index\n \u003ccode\u003estart\u003c/code\u003e.  The returned vector may have fewer than \u003ccode\u003elength\u003c/code\u003e elements\n if the bounds are off on either side (the start is negative or\n length takes it past the end).\n\u003c/p\u003e\u003cp\u003eA slice of negative or zero length is the empty vector.\n\u003c/p\u003e\u003cpre\u003e slice start length v\n\u003c/pre\u003e\u003cp\u003eNote that a slice retains all of the references that the vector it\n is derived from has.  They are not reachable via any traversals and\n are not counted towards its size, but this may lead to references\n living longer than intended.  If is important to you that this not\n happen, call \u003ccode\u003e\u003ca\u003eshrink\u003c/a\u003e\u003c/code\u003e on the return value of \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e to drop unused\n space and references.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "slice",
          "package": "persistent-vector",
          "signature": "Int -\u003e Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Return slice of of length length starting at index start The returned vector may have fewer than length elements if the bounds are off on either side the start is negative or length takes it past the end slice of negative or zero length is the empty vector slice start length Note that slice retains all of the references that the vector it is derived from has They are not reachable via any traversals and are not counted towards its size but this may lead to references living longer than intended If is important to you that this not happen call shrink on the return value of slice to drop unused space and references",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "slice",
          "normalized": "Int-\u003eInt-\u003eVector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Int-\u003eInt-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Append an element to the end of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "snoc",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append an element to the end of the vector",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "snoc",
          "normalized": "Vector a-\u003ea-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Vector a-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Split the vector at the given position.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "splitAt",
          "package": "persistent-vector",
          "signature": "Int -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Data-Vector-Persistent.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Split the vector at the given position",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "splitAt",
          "normalized": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "persistent-vector",
          "partial": "At",
          "signature": "Int-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Take the first \u003ccode\u003ei\u003c/code\u003e elements of the vector.\n\u003c/p\u003e\u003cp\u003eNote that this is just a wrapper around slice and the resulting\n slice retains references that are inaccessible.  Use \u003ccode\u003e\u003ca\u003eshrink\u003c/a\u003e\u003c/code\u003e if\n this is undesirable.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "take",
          "package": "persistent-vector",
          "signature": "Int -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#take",
          "type": "function"
        },
        "index": {
          "description": "Take the first elements of the vector Note that this is just wrapper around slice and the resulting slice retains references that are inaccessible Use shrink if this is undesirable",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "take",
          "normalized": "Int-\u003eVector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Int-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Unchecked indexing into a vector.\n\u003c/p\u003e\u003cp\u003eNote that out-of-bounds indexing might not even crash - it will\n usually just return nonsense values.\n\u003c/p\u003e",
          "module": "Data.Vector.Persistent",
          "name": "unsafeIndex",
          "package": "persistent-vector",
          "signature": "Vector a -\u003e Int -\u003e a",
          "source": "src/Data-Vector-Persistent.html#unsafeIndex",
          "type": "function"
        },
        "index": {
          "description": "Unchecked indexing into vector Note that out-of-bounds indexing might not even crash it will usually just return nonsense values",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "unsafeIndex",
          "normalized": "Vector a-\u003eInt-\u003ea",
          "package": "persistent-vector",
          "partial": "Index",
          "signature": "Vector a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1) Update a single element at \u003ccode\u003eix\u003c/code\u003e with new value \u003ccode\u003eelt\u003c/code\u003e in\n \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e update ix elt v\n\u003c/pre\u003e",
          "module": "Data.Vector.Persistent",
          "name": "update",
          "package": "persistent-vector",
          "signature": "Int -\u003e a -\u003e Vector a -\u003e Vector a",
          "source": "src/Data-Vector-Persistent.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update single element at ix with new value elt in update ix elt",
          "hierarchy": "Data Vector Persistent",
          "module": "Data.Vector.Persistent",
          "name": "update",
          "normalized": "Int-\u003ea-\u003eVector a-\u003eVector a",
          "package": "persistent-vector",
          "signature": "Int-\u003ea-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/persistent-vector/docs/Data-Vector-Persistent.html#v:update"
      }
    }
  ]
]