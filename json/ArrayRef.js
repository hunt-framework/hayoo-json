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
        "word": "ArrayRef"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.LockingBZ",
          "name": "WithLocking",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#WithLocking",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "WithLocking",
          "package": "ArrayRef",
          "partial": "With Locking",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#t:WithLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.LockingBZ",
          "name": "Locking",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#Locking",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "Locking",
          "package": "ArrayRef",
          "partial": "Locking",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:Locking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Add lock to object to ensure it's proper use in concurrent threads\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "addLocking",
          "package": "ArrayRef",
          "signature": "h -\u003e IO (WithLocking h)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#addLocking",
          "type": "function"
        },
        "index": {
          "description": "Add lock to object to ensure it proper use in concurrent threads",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "addLocking",
          "normalized": "a-\u003eIO(WithLocking a)",
          "package": "ArrayRef",
          "partial": "Locking",
          "signature": "h-\u003eIO(WithLocking h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:addLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lift 1-parameter action to operation on locked variable\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock1",
          "package": "ArrayRef",
          "signature": "(h -\u003e IO a) -\u003e lh -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock1",
          "type": "function"
        },
        "index": {
          "description": "Lift parameter action to operation on locked variable",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock1",
          "normalized": "(a-\u003eIO b)-\u003ec-\u003eIO b",
          "package": "ArrayRef",
          "partial": "Lock",
          "signature": "(h-\u003eIO a)-\u003elh-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lift 2-parameter action to operation on locked variable\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock2",
          "package": "ArrayRef",
          "signature": "(h -\u003e t -\u003e IO a) -\u003e lh -\u003e t -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock2",
          "type": "function"
        },
        "index": {
          "description": "Lift parameter action to operation on locked variable",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock2",
          "normalized": "(a-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eIO c",
          "package": "ArrayRef",
          "partial": "Lock",
          "signature": "(h-\u003et-\u003eIO a)-\u003elh-\u003et-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lift 3-parameter action to operation on locked variable\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock3",
          "package": "ArrayRef",
          "signature": "(h -\u003e t -\u003e t1 -\u003e IO a) -\u003e lh -\u003e t -\u003e t1 -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock3",
          "type": "function"
        },
        "index": {
          "description": "Lift parameter action to operation on locked variable",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock3",
          "normalized": "(a-\u003eb-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eb-\u003eIO c",
          "package": "ArrayRef",
          "partial": "Lock",
          "signature": "(h-\u003et-\u003et-\u003eIO a)-\u003elh-\u003et-\u003et-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lift 4-parameter action to operation on locked variable\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock4",
          "package": "ArrayRef",
          "signature": "(h -\u003e t -\u003e t1 -\u003e t2 -\u003e IO a) -\u003e lh -\u003e t -\u003e t1 -\u003e t2 -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock4",
          "type": "function"
        },
        "index": {
          "description": "Lift parameter action to operation on locked variable",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock4",
          "normalized": "(a-\u003eb-\u003eb-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eb-\u003eb-\u003eIO c",
          "package": "ArrayRef",
          "partial": "Lock",
          "signature": "(h-\u003et-\u003et-\u003et-\u003eIO a)-\u003elh-\u003et-\u003et-\u003et-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Lift 5-parameter action to operation on locked variable\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock5",
          "package": "ArrayRef",
          "signature": "(h -\u003e t -\u003e t1 -\u003e t2 -\u003e t3 -\u003e IO a) -\u003e lh -\u003e t -\u003e t1 -\u003e t2 -\u003e t3 -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock5",
          "type": "function"
        },
        "index": {
          "description": "Lift parameter action to operation on locked variable",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "liftLock5",
          "normalized": "(a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eb-\u003eb-\u003eb-\u003eIO c",
          "package": "ArrayRef",
          "partial": "Lock",
          "signature": "(h-\u003et-\u003et-\u003et-\u003et-\u003eIO a)-\u003elh-\u003et-\u003et-\u003et-\u003et-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Perform action while exclusively locking wrapped object\n (faster analog of using \u003ctt\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/tt\u003e for the same purpose)\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "lock",
          "package": "ArrayRef",
          "signature": "lh -\u003e (h -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#lock",
          "type": "function"
        },
        "index": {
          "description": "Perform action while exclusively locking wrapped object faster analog of using withMVar for the same purpose",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "lock",
          "normalized": "a-\u003e(b-\u003eIO c)-\u003eIO c",
          "package": "ArrayRef",
          "signature": "lh-\u003e(h-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run \u003ctt\u003eaction\u003c/tt\u003e with locked version of object\n",
          "module": "Control.Concurrent.LockingBZ",
          "name": "withLocking",
          "package": "ArrayRef",
          "signature": "h -\u003e (WithLocking h -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#withLocking",
          "type": "function"
        },
        "index": {
          "description": "Run action with locked version of object",
          "hierarchy": "Control Concurrent LockingBZ",
          "module": "Control.Concurrent.LockingBZ",
          "name": "withLocking",
          "normalized": "a-\u003e(WithLocking a-\u003eIO b)-\u003eIO b",
          "package": "ArrayRef",
          "partial": "Locking",
          "signature": "h-\u003e(WithLocking h-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:withLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type functions which converts universal ST or IO types to IO-specific ones\n",
          "module": "Control.Monad.STorIO",
          "name": "IOSpecific",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific",
          "type": "type"
        },
        "index": {
          "description": "Type functions which converts universal ST or IO types to IO-specific ones",
          "hierarchy": "Control Monad STorIO",
          "module": "Control.Monad.STorIO",
          "name": "IOSpecific",
          "package": "ArrayRef",
          "partial": "IOSpecific",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#t:IOSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STorIO",
          "name": "IOSpecific2",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad STorIO",
          "module": "Control.Monad.STorIO",
          "name": "IOSpecific2",
          "package": "ArrayRef",
          "partial": "IOSpecific",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#t:IOSpecific2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STorIO",
          "name": "IOSpecific3",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad STorIO",
          "module": "Control.Monad.STorIO",
          "name": "IOSpecific3",
          "package": "ArrayRef",
          "partial": "IOSpecific",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#t:IOSpecific3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.STorIO",
          "name": "STorIO",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#STorIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad STorIO",
          "module": "Control.Monad.STorIO",
          "name": "STorIO",
          "package": "ArrayRef",
          "partial": "STor IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#v:STorIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.STorIO\",\"GHC.Unboxed\"]",
          "name": "mLift",
          "package": "ArrayRef",
          "signature": "(State# s -\u003e (#State# s, a#)) -\u003e m a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#mLift",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#v:mLift\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:mLift\"]"
        },
        "index": {
          "hierarchy": "Control Monad STorIO",
          "module": "Control.Monad.STorIO",
          "name": "mLift",
          "normalized": "(State # a-\u003e(#State # a,b #))-\u003ec b",
          "package": "ArrayRef",
          "partial": "Lift",
          "signature": "(State # s-\u003e(#State # s,a #))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#v:mLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Boxed",
          "name": "Array",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#Array",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Boxed",
          "module": "Data.ArrayBZ.Boxed",
          "name": "Array",
          "package": "ArrayRef",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Boxed.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Boxed mutable arrays in IO monad\n",
          "module": "Data.ArrayBZ.Boxed",
          "name": "IOArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#IOArray",
          "type": "type"
        },
        "index": {
          "description": "Boxed mutable arrays in IO monad",
          "hierarchy": "Data ArrayBZ Boxed",
          "module": "Data.ArrayBZ.Boxed",
          "name": "IOArray",
          "package": "ArrayRef",
          "partial": "IOArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Boxed.html#t:IOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Boxed mutable arrays in ST monad\n",
          "module": "Data.ArrayBZ.Boxed",
          "name": "STArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#STArray",
          "type": "type"
        },
        "index": {
          "description": "Boxed mutable arrays in ST monad",
          "hierarchy": "Data ArrayBZ Boxed",
          "module": "Data.ArrayBZ.Boxed",
          "name": "STArray",
          "package": "ArrayRef",
          "partial": "STArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Boxed.html#t:STArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Fully polymorphic lazy boxed diff array.\n",
          "module": "Data.ArrayBZ.Diff",
          "name": "DiffArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#DiffArray",
          "type": "type"
        },
        "index": {
          "description": "Fully polymorphic lazy boxed diff array",
          "hierarchy": "Data ArrayBZ Diff",
          "module": "Data.ArrayBZ.Diff",
          "name": "DiffArray",
          "package": "ArrayRef",
          "partial": "Diff Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#t:DiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Strict unboxed diff array, working only for elements\n of primitive types but more compact and usually faster than \u003ctt\u003e\u003ca\u003eDiffArray\u003c/a\u003e\u003c/tt\u003e.\nModule \u003ca\u003eData.ArrayBZ.Internals.IArray\u003c/a\u003e provides the interface\n of diff arrays. They are instances of class \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e.\nThese are really internal functions, but you will need them\n to make further \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e instances of various diff array types\n (for either more \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e types or more unboxed element types).\n",
          "module": "Data.ArrayBZ.Diff",
          "name": "DiffUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#DiffUArray",
          "type": "type"
        },
        "index": {
          "description": "Strict unboxed diff array working only for elements of primitive types but more compact and usually faster than DiffArray Module Data.ArrayBZ.Internals.IArray provides the interface of diff arrays They are instances of class IArray These are really internal functions but you will need them to make further IArray instances of various diff array types for either more MArray types or more unboxed element types",
          "hierarchy": "Data ArrayBZ Diff",
          "module": "Data.ArrayBZ.Diff",
          "name": "DiffUArray",
          "package": "ArrayRef",
          "partial": "Diff UArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#t:DiffUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type synonyms for the two most important IO array types.\n",
          "module": "Data.ArrayBZ.Diff",
          "name": "IOToDiffArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#IOToDiffArray",
          "type": "data"
        },
        "index": {
          "description": "Type synonyms for the two most important IO array types",
          "hierarchy": "Data ArrayBZ Diff",
          "module": "Data.ArrayBZ.Diff",
          "name": "IOToDiffArray",
          "package": "ArrayRef",
          "partial": "IOTo Diff Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#t:IOToDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Diff",
          "name": "newDiffArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#newDiffArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Diff",
          "module": "Data.ArrayBZ.Diff",
          "name": "newDiffArray",
          "normalized": "(a,a)-\u003e[(Int,b)]-\u003eIO(IOToDiffArray c a b)",
          "package": "ArrayRef",
          "partial": "Diff Array",
          "signature": "(i,i)-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#v:newDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Diff",
          "name": "readDiffArray",
          "package": "ArrayRef",
          "signature": "IOToDiffArray a i e -\u003e Int -\u003e IO e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#readDiffArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Diff",
          "module": "Data.ArrayBZ.Diff",
          "name": "readDiffArray",
          "normalized": "IOToDiffArray a b c-\u003eInt-\u003eIO c",
          "package": "ArrayRef",
          "partial": "Diff Array",
          "signature": "IOToDiffArray a i e-\u003eInt-\u003eIO e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#v:readDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Diff",
          "name": "replaceDiffArray",
          "package": "ArrayRef",
          "signature": "IOToDiffArray a i e -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#replaceDiffArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Diff",
          "module": "Data.ArrayBZ.Diff",
          "name": "replaceDiffArray",
          "normalized": "IOToDiffArray a b c-\u003e[(Int,c)]-\u003eIO(IOToDiffArray a b c)",
          "package": "ArrayRef",
          "partial": "Diff Array",
          "signature": "IOToDiffArray a i e-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#v:replaceDiffArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Dynamic",
          "name": "Dynamic",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#Dynamic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "Dynamic",
          "package": "ArrayRef",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic arrays in IO monad\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicIO",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicIO",
          "type": "type"
        },
        "index": {
          "description": "Dynamic arrays in IO monad",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicIO",
          "package": "ArrayRef",
          "partial": "Dynamic IO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic version of IOArray\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicIOArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicIOArray",
          "type": "type"
        },
        "index": {
          "description": "Dynamic version of IOArray",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicIOArray",
          "package": "ArrayRef",
          "partial": "Dynamic IOArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicIOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic version of IOUArray\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicIOUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicIOUArray",
          "type": "type"
        },
        "index": {
          "description": "Dynamic version of IOUArray",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicIOUArray",
          "package": "ArrayRef",
          "partial": "Dynamic IOUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic arrays in ST monad\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicST",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicST",
          "type": "type"
        },
        "index": {
          "description": "Dynamic arrays in ST monad",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicST",
          "package": "ArrayRef",
          "partial": "Dynamic ST",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic version of STArray\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicSTArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicSTArray",
          "type": "type"
        },
        "index": {
          "description": "Dynamic version of STArray",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicSTArray",
          "package": "ArrayRef",
          "partial": "Dynamic STArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dynamic version of STUArray\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicSTUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicSTUArray",
          "type": "type"
        },
        "index": {
          "description": "Dynamic version of STUArray",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "DynamicSTUArray",
          "package": "ArrayRef",
          "partial": "Dynamic STUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "This type represents function that calculates new array bounds when it needs to grow\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "GrowBoundsF",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#GrowBoundsF",
          "type": "type"
        },
        "index": {
          "description": "This type represents function that calculates new array bounds when it needs to grow",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "GrowBoundsF",
          "package": "ArrayRef",
          "partial": "Grow Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:GrowBoundsF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Grow minimally - only to include new index in array bounds. This growing\n method is compatible with any bounds type\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "growMinimally",
          "package": "ArrayRef",
          "signature": "(t, t) -\u003e t -\u003e (t, t)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#growMinimally",
          "type": "function"
        },
        "index": {
          "description": "Grow minimally only to include new index in array bounds This growing method is compatible with any bounds type",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "growMinimally",
          "normalized": "(a,a)-\u003ea-\u003e(a,a)",
          "package": "ArrayRef",
          "partial": "Minimally",
          "signature": "(t,t)-\u003et-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:growMinimally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Grow number of elements at least 2 times. This growing method is compatible\n only with bounds belonging to class Num\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "growTwoTimes",
          "package": "ArrayRef",
          "signature": "(a, a) -\u003e a -\u003e (a, a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#growTwoTimes",
          "type": "function"
        },
        "index": {
          "description": "Grow number of elements at least times This growing method is compatible only with bounds belonging to class Num",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "growTwoTimes",
          "normalized": "(a,a)-\u003ea-\u003e(a,a)",
          "package": "ArrayRef",
          "partial": "Two Times",
          "signature": "(a,a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:growTwoTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create new dynamic array with default value for new cells set to \u003ctt\u003e\u003ca\u003einit\u003c/a\u003e\u003c/tt\u003e.\n   f is a growing strategy and may be \u003ctt\u003e\u003ca\u003enoGrow\u003c/a\u003e\u003c/tt\u003e, \u003ctt\u003e\u003ca\u003egrowMinimally\u003c/a\u003e\u003c/tt\u003e\n    or \u003ctt\u003e\u003ca\u003egrowTwoTimes\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "newDynamicArray",
          "package": "ArrayRef",
          "signature": "GrowBoundsF i -\u003e (i, i) -\u003e e -\u003e t (Dynamic r a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#newDynamicArray",
          "type": "function"
        },
        "index": {
          "description": "Create new dynamic array with default value for new cells set to init is growing strategy and may be noGrow growMinimally or growTwoTimes",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "newDynamicArray",
          "normalized": "GrowBoundsF a-\u003e(a,a)-\u003eb-\u003ec(Dynamic d e a b)",
          "package": "ArrayRef",
          "partial": "Dynamic Array",
          "signature": "GrowBoundsF i-\u003e(i,i)-\u003ee-\u003et(Dynamic r a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:newDynamicArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create new dynamic array where all new cells will remain uninitialized.\n   f is a growing strategy and may be \u003ctt\u003e\u003ca\u003enoGrow\u003c/a\u003e\u003c/tt\u003e, \u003ctt\u003e\u003ca\u003egrowMinimally\u003c/a\u003e\u003c/tt\u003e\n    or \u003ctt\u003e\u003ca\u003egrowTwoTimes\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "newDynamicArray_",
          "package": "ArrayRef",
          "signature": "GrowBoundsF i -\u003e (i, i) -\u003e t (Dynamic r a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#newDynamicArray_",
          "type": "function"
        },
        "index": {
          "description": "Create new dynamic array where all new cells will remain uninitialized is growing strategy and may be noGrow growMinimally or growTwoTimes",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "newDynamicArray_",
          "normalized": "GrowBoundsF a-\u003e(a,a)-\u003eb(Dynamic c d a e)",
          "package": "ArrayRef",
          "partial": "Dynamic Array",
          "signature": "GrowBoundsF i-\u003e(i,i)-\u003et(Dynamic r a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:newDynamicArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "No automatic growing at all. This \u003ca\u003egrowing\u003c/a\u003e method is compatible with any\n bounds type\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "noGrow",
          "package": "ArrayRef",
          "signature": "t -\u003e t1 -\u003e a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#noGrow",
          "type": "function"
        },
        "index": {
          "description": "No automatic growing at all This growing method is compatible with any bounds type",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "noGrow",
          "normalized": "a-\u003ea-\u003eb",
          "package": "ArrayRef",
          "partial": "Grow",
          "signature": "t-\u003et-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:noGrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extend/shrink dynamic array to new bounds\n",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "resizeDynamicArray",
          "package": "ArrayRef",
          "signature": "Dynamic t1 a i t -\u003e (i, i) -\u003e t2 ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#resizeDynamicArray",
          "type": "function"
        },
        "index": {
          "description": "Extend shrink dynamic array to new bounds",
          "hierarchy": "Data ArrayBZ Dynamic",
          "module": "Data.ArrayBZ.Dynamic",
          "name": "resizeDynamicArray",
          "normalized": "Dynamic a b c a-\u003e(c,c)-\u003ea()",
          "package": "ArrayRef",
          "partial": "Dynamic Array",
          "signature": "Dynamic t a i t-\u003e(i,i)-\u003et()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:resizeDynamicArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.IArray",
          "name": "Array",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#Array",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "Array",
          "package": "ArrayRef",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the element of an immutable array at the specified index.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "!",
          "package": "ArrayRef",
          "signature": "a i e -\u003e i -\u003e e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:!\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:!\"]"
        },
        "index": {
          "description": "Returns the element of an immutable array at the specified index",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "!",
          "normalized": "a b c-\u003eb-\u003ec",
          "package": "ArrayRef",
          "signature": "a i e-\u003ei-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:!"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an array and a list of pairs and returns an array identical to\nthe left argument except that it has been updated by the associations\nin the right argument.  For example, if m is a 1-origin, n by n matrix,\nthen \u003ctt\u003em//[((i,i), 0) | i \u003c- [1..n]]\u003c/tt\u003e is the same matrix, except with\nthe diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eAs with the \u003ctt\u003e\u003ca\u003earray\u003c/a\u003e\u003c/tt\u003e function, if any two associations in the list have\nthe same index, the value at that index is implementation-dependent.\n(In GHC, the last value specified for that index is used.\nOther implementations will also do this for unboxed arrays, but Haskell\n98 requires that for Array the value at such indices is bottom.)\n\u003c/p\u003e\u003cp\u003eFor most array types, this operation is O(\u003cem\u003en\u003c/em\u003e) where \u003cem\u003en\u003c/em\u003e is the size\nof the array.  However, the Data.Array.Diff.DiffArray type provides\nthis operation with complexity linear in the number of updates.\n\u003c/p\u003e",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "//",
          "package": "ArrayRef",
          "signature": "a i e -\u003e [(i, e)] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#%2F%2F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v://\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v://\"]"
        },
        "index": {
          "description": "Takes an array and list of pairs and returns an array identical to the left argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed As with the array function if any two associations in the list have the same index the value at that index is implementation-dependent In GHC the last value specified for that index is used Other implementations will also do this for unboxed arrays but Haskell requires that for Array the value at such indices is bottom For most array types this operation is where is the size of the array However the Data.Array.Diff.DiffArray type provides this operation with complexity linear in the number of updates",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "//",
          "normalized": "a b c-\u003e[(b,c)]-\u003ea b c",
          "package": "ArrayRef",
          "signature": "a i e-\u003e[(i,e)]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v://"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.IArray",
          "name": "HasBounds",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#HasBounds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "HasBounds",
          "package": "ArrayRef",
          "partial": "Has Bounds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:HasBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.IArray",
          "name": "IArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#IArray",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "IArray",
          "package": "ArrayRef",
          "partial": "IArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:IArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003eaccum f\u003c/tt\u003e takes an array and an association list and accumulates pairs\nfrom the list into the array with the accumulating function \u003ctt\u003ef\u003c/tt\u003e. Thus\n\u003ctt\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/tt\u003e can be defined using \u003ctt\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/tt\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \\\u003c- range b])\n\u003c/pre\u003e",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "accum",
          "package": "ArrayRef",
          "signature": "(e -\u003e e' -\u003e e) -\u003e a i e -\u003e [(i, e')] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#accum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:accum\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:accum\"]"
        },
        "index": {
          "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "accum",
          "normalized": "(a-\u003eb-\u003ea)-\u003ec d a-\u003e[(d,b)]-\u003ec d a",
          "package": "ArrayRef",
          "signature": "(e-\u003ee'-\u003ee)-\u003ea i e-\u003e[(i,e')]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An accumulating function\nA default element\nThe bounds of the array\nList of associations\nReturns: the array\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "accumArray",
          "package": "ArrayRef",
          "signature": "e -\u003e e' -\u003e e-\u003e e-\u003e (i, i)-\u003e [(i, e')]-\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#accumArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:accumArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:accumArray\"]"
        },
        "index": {
          "description": "An accumulating function default element The bounds of the array List of associations Returns the array",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "accumArray",
          "normalized": "a-\u003eb-\u003ea-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003ed c a",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "e-\u003ee'-\u003ee-\u003ee-\u003e(i,i)-\u003e[(i,e')]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:accumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns a new array derived from the original array by applying a\n function to each of the elements.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "amap",
          "package": "ArrayRef",
          "signature": "(e' -\u003e e) -\u003e a i e' -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#amap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:amap\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:amap\"]"
        },
        "index": {
          "description": "Returns new array derived from the original array by applying function to each of the elements",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "amap",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "ArrayRef",
          "signature": "(e'-\u003ee)-\u003ea i e'-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:amap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "bounds of the array: (lowest,highest)\nlist of associations\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "array",
          "package": "ArrayRef",
          "signature": "(i, i)-\u003e [(i, e)]-\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#array",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:array\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:array\"]"
        },
        "index": {
          "description": "bounds of the array lowest highest list of associations",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "array",
          "normalized": "(a,a)-\u003e[(a,b)]-\u003ec a b",
          "package": "ArrayRef",
          "signature": "(i,i)-\u003e[(i,e)]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns the contents of an array as a list of associations.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "assocs",
          "package": "ArrayRef",
          "signature": "a i e -\u003e [(i, e)]",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#assocs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:assocs\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:assocs\"]"
        },
        "index": {
          "description": "Returns the contents of an array as list of associations",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "assocs",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "ArrayRef",
          "signature": "a i e-\u003e[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extracts the bounds of an array\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "bounds",
          "package": "ArrayRef",
          "signature": "a i e -\u003e (i, i)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#bounds",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:bounds\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:bounds\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:bounds\"]"
        },
        "index": {
          "description": "Extracts the bounds of an array",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "bounds",
          "normalized": "a b c-\u003e(b,b)",
          "package": "ArrayRef",
          "signature": "a i e-\u003e(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns a list of all the elements of an array, in the same order\n as their indices.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "elems",
          "package": "ArrayRef",
          "signature": "a i e -\u003e [e]",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#elems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:elems\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:elems\"]"
        },
        "index": {
          "description": "Returns list of all the elements of an array in the same order as their indices",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "elems",
          "normalized": "a b c-\u003e[c]",
          "package": "ArrayRef",
          "signature": "a i e-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns a list of all the valid indices in an array.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "indices",
          "package": "ArrayRef",
          "signature": "a i e -\u003e [i]",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#indices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:indices\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:indices\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:indices\"]"
        },
        "index": {
          "description": "Returns list of all the valid indices in an array",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "indices",
          "normalized": "a b c-\u003e[b]",
          "package": "ArrayRef",
          "signature": "a i e-\u003e[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns a new array derived from the original array by applying a\n function to each of the indices.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "ixmap",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#ixmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:ixmap\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:ixmap\"]"
        },
        "index": {
          "description": "Returns new array derived from the original array by applying function to each of the indices",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "ixmap",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "ArrayRef",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Constructs an immutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n",
          "module": "[\"Data.ArrayBZ.IArray\",\"Data.ArrayBZ.Internals.IArray\"]",
          "name": "listArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e [e] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#listArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:listArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:listArray\"]"
        },
        "index": {
          "description": "Constructs an immutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
          "hierarchy": "Data ArrayBZ IArray",
          "module": "Data.ArrayBZ.IArray",
          "name": "listArray",
          "normalized": "(a,a)-\u003e[b]-\u003ec a b",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "(i,i)-\u003e[e]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:listArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Boxed mutable arrays in IO monad\n",
          "module": "Data.ArrayBZ.IO",
          "name": "IOArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#IOArray",
          "type": "type"
        },
        "index": {
          "description": "Boxed mutable arrays in IO monad",
          "hierarchy": "Data ArrayBZ IO",
          "module": "Data.ArrayBZ.IO",
          "name": "IOArray",
          "package": "ArrayRef",
          "partial": "IOArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#t:IOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unboxed mutable arrays in IO monad\n",
          "module": "Data.ArrayBZ.IO",
          "name": "IOUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#IOUArray",
          "type": "type"
        },
        "index": {
          "description": "Unboxed mutable arrays in IO monad",
          "hierarchy": "Data ArrayBZ IO",
          "module": "Data.ArrayBZ.IO",
          "name": "IOUArray",
          "package": "ArrayRef",
          "partial": "IOUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#t:IOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Casts an \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
          "module": "[\"Data.ArrayBZ.IO\",\"Data.ArrayBZ.Internals.Unboxed\",\"Data.ArrayBZ.Unboxed\"]",
          "name": "castIOUArray",
          "package": "ArrayRef",
          "signature": "IOUArray i e -\u003e IOUArray i e'",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castIOUArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:castIOUArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castIOUArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#v:castIOUArray\"]"
        },
        "index": {
          "description": "Casts an IOUArray with one element type into IOUArray with different element type upper bound is recalculated",
          "hierarchy": "Data ArrayBZ IO",
          "module": "Data.ArrayBZ.IO",
          "name": "castIOUArray",
          "normalized": "IOUArray a b-\u003eIOUArray a c",
          "package": "ArrayRef",
          "partial": "IOUArray",
          "signature": "IOUArray i e-\u003eIOUArray i e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:castIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Handle to read from\nArray in which to place the values\nNumber of \u003ctt\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/tt\u003es to read\nReturns: the number of \u003ctt\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/tt\u003es actually\n read, which might be smaller than the number requested\n if the end of file was reached.\n",
          "module": "Data.ArrayBZ.IO",
          "name": "hGetArray",
          "package": "ArrayRef",
          "signature": "Handle-\u003e IOUArray Int Word8-\u003e Int-\u003e IO Int",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-IO.html#hGetArray",
          "type": "function"
        },
        "index": {
          "description": "Handle to read from Array in which to place the values Number of Word8 to read Returns the number of Word8 actually read which might be smaller than the number requested if the end of file was reached",
          "hierarchy": "Data ArrayBZ IO",
          "module": "Data.ArrayBZ.IO",
          "name": "hGetArray",
          "normalized": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO Int",
          "package": "ArrayRef",
          "partial": "Get Array",
          "signature": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:hGetArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Handle to write to\nArray to write from\nNumber of \u003ctt\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/tt\u003es to write\n",
          "module": "Data.ArrayBZ.IO",
          "name": "hPutArray",
          "package": "ArrayRef",
          "signature": "Handle-\u003e IOUArray Int Word8-\u003e Int-\u003e IO ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-IO.html#hPutArray",
          "type": "function"
        },
        "index": {
          "description": "Handle to write to Array to write from Number of Word8 to write",
          "hierarchy": "Data ArrayBZ IO",
          "module": "Data.ArrayBZ.IO",
          "name": "hPutArray",
          "normalized": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO()",
          "package": "ArrayRef",
          "partial": "Put Array",
          "signature": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:hPutArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "Array",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#Array",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "Array",
          "package": "ArrayRef",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "BoxedMutableArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#BoxedMutableArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "BoxedMutableArray",
          "package": "ArrayRef",
          "partial": "Boxed Mutable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:BoxedMutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Boxed mutable arrays in IO monad\n",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "IOArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#IOArray",
          "type": "type"
        },
        "index": {
          "description": "Boxed mutable arrays in IO monad",
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "IOArray",
          "package": "ArrayRef",
          "partial": "IOArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:IOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Boxed mutable arrays in ST monad\n",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "STArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#STArray",
          "type": "type"
        },
        "index": {
          "description": "Boxed mutable arrays in ST monad",
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "STArray",
          "package": "ArrayRef",
          "partial": "STArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:STArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "doAccum",
          "package": "ArrayRef",
          "signature": "(t1 -\u003e t -\u003e t1) -\u003e [(Int, t)] -\u003e a i t1 -\u003e t2 ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#doAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "doAccum",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Int,a)]-\u003eb c a-\u003ea()",
          "package": "ArrayRef",
          "partial": "Accum",
          "signature": "(t-\u003et-\u003et)-\u003e[(Int,t)]-\u003ea i t-\u003et()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:doAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "doReplace",
          "package": "ArrayRef",
          "signature": "[(Int, e)] -\u003e a i e -\u003e t ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#doReplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "doReplace",
          "normalized": "[(Int,a)]-\u003eb c a-\u003ed()",
          "package": "ArrayRef",
          "partial": "Replace",
          "signature": "[(Int,e)]-\u003ea i e-\u003et()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:doReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "freezeBA",
          "package": "ArrayRef",
          "signature": "BoxedMutableArray t t1 t2 -\u003e t3 (Array t1 t2)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#freezeBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "freezeBA",
          "normalized": "BoxedMutableArray a a a-\u003ea(Array a a)",
          "package": "ArrayRef",
          "partial": "BA",
          "signature": "BoxedMutableArray t t t-\u003et(Array t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:freezeBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Freeze/thaw rules for IOArray\n",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "freezeIOArray",
          "package": "ArrayRef",
          "signature": "IOArray i e -\u003e IO (Array i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#freezeIOArray",
          "type": "function"
        },
        "index": {
          "description": "Freeze thaw rules for IOArray",
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "freezeIOArray",
          "normalized": "IOArray a b-\u003eIO(Array a b)",
          "package": "ArrayRef",
          "partial": "IOArray",
          "signature": "IOArray i e-\u003eIO(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:freezeIOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Freeze/thaw rules for STArray\n",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "freezeSTArray",
          "package": "ArrayRef",
          "signature": "STArray s i e -\u003e ST s (Array i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#freezeSTArray",
          "type": "function"
        },
        "index": {
          "description": "Freeze thaw rules for STArray",
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "freezeSTArray",
          "normalized": "STArray a b c-\u003eST a(Array b c)",
          "package": "ArrayRef",
          "partial": "STArray",
          "signature": "STArray s i e-\u003eST s(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:freezeSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "iOArrayTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#iOArrayTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "iOArrayTc",
          "package": "ArrayRef",
          "partial": "OArray Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:iOArrayTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Number of array elements\n",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "sizeOfBA",
          "package": "ArrayRef",
          "signature": "a a1 e -\u003e Int",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#sizeOfBA",
          "type": "function"
        },
        "index": {
          "description": "Number of array elements",
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "sizeOfBA",
          "normalized": "a a b-\u003eInt",
          "package": "ArrayRef",
          "partial": "Of BA",
          "signature": "a a e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:sizeOfBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "stArrayTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#stArrayTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "stArrayTc",
          "package": "ArrayRef",
          "partial": "Array Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:stArrayTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "thawBA",
          "package": "ArrayRef",
          "signature": "Array t t1 -\u003e t2 (BoxedMutableArray s t t1)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#thawBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "thawBA",
          "normalized": "Array a a-\u003ea(BoxedMutableArray b a a)",
          "package": "ArrayRef",
          "partial": "BA",
          "signature": "Array t t-\u003et(BoxedMutableArray s t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:thawBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "thawIOArray",
          "package": "ArrayRef",
          "signature": "Array i e -\u003e IO (IOArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#thawIOArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "thawIOArray",
          "normalized": "Array a b-\u003eIO(IOArray a b)",
          "package": "ArrayRef",
          "partial": "IOArray",
          "signature": "Array i e-\u003eIO(IOArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:thawIOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "thawSTArray",
          "package": "ArrayRef",
          "signature": "Array i e -\u003e ST s (STArray s i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#thawSTArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "thawSTArray",
          "normalized": "Array a b-\u003eST c(STArray c a b)",
          "package": "ArrayRef",
          "partial": "STArray",
          "signature": "Array i e-\u003eST s(STArray s i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:thawSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeFreezeBA",
          "package": "ArrayRef",
          "signature": "BoxedMutableArray t1 t t2 -\u003e t3 (Array t t2)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeFreezeBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeFreezeBA",
          "normalized": "BoxedMutableArray a a a-\u003ea(Array a a)",
          "package": "ArrayRef",
          "partial": "Freeze BA",
          "signature": "BoxedMutableArray t t t-\u003et(Array t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeFreezeBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeFreezeIOArray",
          "package": "ArrayRef",
          "signature": "IOArray i e -\u003e IO (Array i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeFreezeIOArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeFreezeIOArray",
          "normalized": "IOArray a b-\u003eIO(Array a b)",
          "package": "ArrayRef",
          "partial": "Freeze IOArray",
          "signature": "IOArray i e-\u003eIO(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeFreezeIOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeFreezeSTArray",
          "package": "ArrayRef",
          "signature": "STArray s i e -\u003e ST s (Array i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeFreezeSTArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeFreezeSTArray",
          "normalized": "STArray a b c-\u003eST a(Array b c)",
          "package": "ArrayRef",
          "partial": "Freeze STArray",
          "signature": "STArray s i e-\u003eST s(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeFreezeSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeThawBA",
          "package": "ArrayRef",
          "signature": "Array t t1 -\u003e t2 (BoxedMutableArray s t t1)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeThawBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeThawBA",
          "normalized": "Array a a-\u003ea(BoxedMutableArray b a a)",
          "package": "ArrayRef",
          "partial": "Thaw BA",
          "signature": "Array t t-\u003et(BoxedMutableArray s t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeThawBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeThawIOArray",
          "package": "ArrayRef",
          "signature": "Array i e -\u003e IO (IOArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeThawIOArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeThawIOArray",
          "normalized": "Array a b-\u003eIO(IOArray a b)",
          "package": "ArrayRef",
          "partial": "Thaw IOArray",
          "signature": "Array i e-\u003eIO(IOArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeThawIOArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeThawSTArray",
          "package": "ArrayRef",
          "signature": "Array i e -\u003e ST s (STArray s i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeThawSTArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "unsafeThawSTArray",
          "normalized": "Array a b-\u003eST c(STArray c a b)",
          "package": "ArrayRef",
          "partial": "Thaw STArray",
          "signature": "Array i e-\u003eST s(STArray s i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeThawSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "withArrayCopy",
          "package": "ArrayRef",
          "signature": "Array t t1 -\u003e (BoxedMutableArray s t t1 -\u003e t2 t3) -\u003e t2 (Array t t1)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#withArrayCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "withArrayCopy",
          "normalized": "Array a a-\u003e(BoxedMutableArray b a a-\u003ea a)-\u003ea(Array a a)",
          "package": "ArrayRef",
          "partial": "Array Copy",
          "signature": "Array t t-\u003e(BoxedMutableArray s t t-\u003et t)-\u003et(Array t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:withArrayCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "withNewArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e e -\u003e (BoxedMutableArray t2 i e -\u003e t t1) -\u003e t (Array i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#withNewArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Boxed",
          "module": "Data.ArrayBZ.Internals.Boxed",
          "name": "withNewArray",
          "normalized": "(a,a)-\u003eb-\u003e(BoxedMutableArray c a b-\u003ec c)-\u003ec(Array a b)",
          "package": "ArrayRef",
          "partial": "New Array",
          "signature": "(i,i)-\u003ee-\u003e(BoxedMutableArray t i e-\u003et t)-\u003et(Array i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:withNewArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "HasBounds",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#HasBounds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "HasBounds",
          "package": "ArrayRef",
          "partial": "Has Bounds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:HasBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "IArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#IArray",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "IArray",
          "package": "ArrayRef",
          "partial": "IArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:IArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "cmpIArray",
          "package": "ArrayRef",
          "signature": "a i e -\u003e a i e -\u003e Ordering",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#cmpIArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "cmpIArray",
          "normalized": "a b c-\u003ea b c-\u003eOrdering",
          "package": "ArrayRef",
          "partial": "IArray",
          "signature": "a i e-\u003ea i e-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:cmpIArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "cmpIntIArray",
          "package": "ArrayRef",
          "signature": "a Int e -\u003e a Int e -\u003e Ordering",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#cmpIntIArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "cmpIntIArray",
          "normalized": "a Int b-\u003ea Int b-\u003eOrdering",
          "package": "ArrayRef",
          "partial": "Int IArray",
          "signature": "a Int e-\u003ea Int e-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:cmpIntIArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "eqIArray",
          "package": "ArrayRef",
          "signature": "a i e -\u003e a i e -\u003e Bool",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#eqIArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "eqIArray",
          "normalized": "a b c-\u003ea b c-\u003eBool",
          "package": "ArrayRef",
          "partial": "IArray",
          "signature": "a i e-\u003ea i e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:eqIArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "showsIArray",
          "package": "ArrayRef",
          "signature": "Int -\u003e a i e -\u003e ShowS",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#showsIArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "showsIArray",
          "normalized": "Int-\u003ea b c-\u003eShowS",
          "package": "ArrayRef",
          "partial": "IArray",
          "signature": "Int-\u003ea i e-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:showsIArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeAccum",
          "package": "ArrayRef",
          "signature": "(e -\u003e e' -\u003e e) -\u003e a i e -\u003e [(Int, e')] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeAccum",
          "normalized": "(a-\u003eb-\u003ea)-\u003ec d a-\u003e[(Int,b)]-\u003ec d a",
          "package": "ArrayRef",
          "partial": "Accum",
          "signature": "(e-\u003ee'-\u003ee)-\u003ea i e-\u003e[(Int,e')]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeAccumArray",
          "package": "ArrayRef",
          "signature": "(e -\u003e e' -\u003e e) -\u003e e -\u003e (i, i) -\u003e [(Int, e')] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeAccumArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeAccumArray",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(Int,b)]-\u003ed c a",
          "package": "ArrayRef",
          "partial": "Accum Array",
          "signature": "(e-\u003ee'-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(Int,e')]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeAccumArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e [(Int, e)] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeArray",
          "normalized": "(a,a)-\u003e[(Int,b)]-\u003ec a b",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "(i,i)-\u003e[(Int,e)]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeAt",
          "package": "ArrayRef",
          "signature": "a i e -\u003e Int -\u003e e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeAt",
          "normalized": "a b c-\u003eInt-\u003ec",
          "package": "ArrayRef",
          "partial": "At",
          "signature": "a i e-\u003eInt-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeReplace",
          "package": "ArrayRef",
          "signature": "a i e -\u003e [(Int, e)] -\u003e a i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeReplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals IArray",
          "module": "Data.ArrayBZ.Internals.IArray",
          "name": "unsafeReplace",
          "normalized": "a b c-\u003e[(Int,c)]-\u003ea b c",
          "package": "ArrayRef",
          "partial": "Replace",
          "signature": "a i e-\u003e[(Int,e)]-\u003ea i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "HasMutableBounds",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#HasMutableBounds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "HasMutableBounds",
          "package": "ArrayRef",
          "partial": "Has Mutable Bounds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:HasMutableBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "MArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#MArray",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "MArray",
          "package": "ArrayRef",
          "partial": "MArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Value used to initialize undefined array elements\n",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "arrEleBottom",
          "package": "ArrayRef",
          "signature": "a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#arrEleBottom",
          "type": "function"
        },
        "index": {
          "description": "Value used to initialize undefined array elements",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "arrEleBottom",
          "package": "ArrayRef",
          "partial": "Ele Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:arrEleBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Converts a mutable array (any instance of \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e) to an\n immutable array (any instance of \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e) by taking a complete\n copy of it.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "freeze",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m (b i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#freeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:freeze\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:freeze\"]"
        },
        "index": {
          "description": "Converts mutable array any instance of MArray to an immutable array any instance of IArray by taking complete copy of it",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "freeze",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "ArrayRef",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return a list of all the associations of a mutable array, in\n index order.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "getAssocs",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m [(i, e)]",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getAssocs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getAssocs\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getAssocs\"]"
        },
        "index": {
          "description": "Return list of all the associations of mutable array in index order",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "getAssocs",
          "normalized": "a b c-\u003ed[(b,c)]",
          "package": "ArrayRef",
          "partial": "Assocs",
          "signature": "a i e-\u003em[(i,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getAssocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Get the current bounds of an array\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "getBounds",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m (i, i)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getBounds",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getBounds\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getBounds\"]"
        },
        "index": {
          "description": "Get the current bounds of an array",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "getBounds",
          "normalized": "a b c-\u003ed(b,b)",
          "package": "ArrayRef",
          "partial": "Bounds",
          "signature": "a i e-\u003em(i,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return a list of all the elements of a mutable array\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "getElems",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m [e]",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getElems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getElems\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getElems\"]"
        },
        "index": {
          "description": "Return list of all the elements of mutable array",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "getElems",
          "normalized": "a b c-\u003ed[c]",
          "package": "ArrayRef",
          "partial": "Elems",
          "signature": "a i e-\u003em[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Return a list of all the indexes of a mutable array\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "getIndices",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m [i]",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getIndices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getIndices\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getIndices\"]"
        },
        "index": {
          "description": "Return list of all the indexes of mutable array",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "getIndices",
          "normalized": "a b c-\u003ed[b]",
          "package": "ArrayRef",
          "partial": "Indices",
          "signature": "a i e-\u003em[i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Constructs a new array derived from the original array by applying a\n function to each of the elements.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "mapArray",
          "package": "ArrayRef",
          "signature": "(e' -\u003e e) -\u003e a i e' -\u003e m (a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#mapArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:mapArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:mapArray\"]"
        },
        "index": {
          "description": "Constructs new array derived from the original array by applying function to each of the elements",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "mapArray",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ee(c d b)",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "(e'-\u003ee)-\u003ea i e'-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:mapArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Constructs a new array derived from the original array by applying a\n function to each of the indices.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "mapIndices",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e m (a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#mapIndices",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:mapIndices\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:mapIndices\"]"
        },
        "index": {
          "description": "Constructs new array derived from the original array by applying function to each of the indices",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "mapIndices",
          "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ee(c a d)",
          "package": "ArrayRef",
          "partial": "Indices",
          "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:mapIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Builds a new array, with every element initialised to the supplied\n value.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "newArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e e -\u003e m (a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:newArray\"]"
        },
        "index": {
          "description": "Builds new array with every element initialised to the supplied value",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "newArray",
          "normalized": "(a,a)-\u003eb-\u003ec(d a b)",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "(i,i)-\u003ee-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Builds a new array, with every element initialised to undefined.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "newArray_",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e m (a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newArray_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newArray_\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:newArray_\"]"
        },
        "index": {
          "description": "Builds new array with every element initialised to undefined",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "newArray_",
          "normalized": "(a,a)-\u003eb(c a d)",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "(i,i)-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newArray_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Constructs a mutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "newListArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e [e] -\u003e m (a i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newListArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newListArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:newListArray\"]"
        },
        "index": {
          "description": "Constructs mutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "newListArray",
          "normalized": "(a,a)-\u003e[b]-\u003ec(d a b)",
          "package": "ArrayRef",
          "partial": "List Array",
          "signature": "(i,i)-\u003e[e]-\u003em(a i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newListArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "readArray",
          "package": "ArrayRef",
          "signature": "a i e -\u003e i -\u003e m e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#readArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:readArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:readArray\"]"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "readArray",
          "normalized": "a b c-\u003eb-\u003ed c",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "a i e-\u003ei-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Converts an immutable array (any instance of \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e) into a\n mutable array (any instance of \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e) by taking a complete copy\n of it.\n",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "thaw",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m (b i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#thaw",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:thaw\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:thaw\"]"
        },
        "index": {
          "description": "Converts an immutable array any instance of IArray into mutable array any instance of MArray by taking complete copy of it",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "thaw",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "ArrayRef",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an mutable array into an immutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is safe to use, therefore, if\n   the mutable version is never modified after the freeze operation.\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Data.Array.IO.IOUArray -\u003e Data.Array.Unboxed.UArray\n\u003c/li\u003e\u003cli\u003e Data.Array.ST.STUArray -\u003e Data.Array.Unboxed.UArray\n\u003c/li\u003e\u003cli\u003e Data.Array.IO.IOArray -\u003e Data.Array.Array\n\u003c/li\u003e\u003cli\u003e Data.Array.ST.STArray -\u003e Data.Array.Array\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "unsafeFreeze",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m (b i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeFreeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeFreeze\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:unsafeFreeze\"]"
        },
        "index": {
          "description": "Converts an mutable array into an immutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is safe to use therefore if the mutable version is never modified after the freeze operation The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeFreeze Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them Data.Array.IO.IOUArray Data.Array.Unboxed.UArray Data.Array.ST.STUArray Data.Array.Unboxed.UArray Data.Array.IO.IOArray Data.Array.Array Data.Array.ST.STArray Data.Array.Array",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "unsafeFreeze",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "ArrayRef",
          "partial": "Freeze",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "unsafeRead",
          "package": "ArrayRef",
          "signature": "a i e -\u003e Int -\u003e m e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "unsafeRead",
          "normalized": "a b c-\u003eInt-\u003ed c",
          "package": "ArrayRef",
          "partial": "Read",
          "signature": "a i e-\u003eInt-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an immutable array into a mutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is only safe to use,\n   therefore, if the immutable array is never referenced again in this\n   thread, and there is no possibility that it can be also referenced\n   in another thread.  If you use an unsafeThaw\u003cem\u003ewrite\u003c/em\u003eunsafeFreeze\n   sequence in a multi-threaded setting, then you must ensure that\n   this sequence is atomic with respect to other threads, or a garbage\n   collector crash may result (because the write may be writing to a\n   frozen array).\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ctt\u003e\u003ca\u003eunsafeThaw\u003c/a\u003e\u003c/tt\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Data.Array.Unboxed.UArray -\u003e Data.Array.IO.IOUArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Unboxed.UArray -\u003e Data.Array.ST.STUArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Array  -\u003e Data.Array.IO.IOArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Array  -\u003e Data.Array.ST.STArray\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "unsafeThaw",
          "package": "ArrayRef",
          "signature": "a i e -\u003e m (b i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeThaw",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeThaw\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:unsafeThaw\"]"
        },
        "index": {
          "description": "Converts an immutable array into mutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is only safe to use therefore if the immutable array is never referenced again in this thread and there is no possibility that it can be also referenced in another thread If you use an unsafeThaw write unsafeFreeze sequence in multi-threaded setting then you must ensure that this sequence is atomic with respect to other threads or garbage collector crash may result because the write may be writing to frozen array The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeThaw Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them Data.Array.Unboxed.UArray Data.Array.IO.IOUArray Data.Array.Unboxed.UArray Data.Array.ST.STUArray Data.Array.Array Data.Array.IO.IOArray Data.Array.Array Data.Array.ST.STArray",
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "unsafeThaw",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "ArrayRef",
          "partial": "Thaw",
          "signature": "a i e-\u003em(b i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeThaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "unsafeWrite",
          "package": "ArrayRef",
          "signature": "a i e -\u003e Int -\u003e e -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "unsafeWrite",
          "normalized": "a b c-\u003eInt-\u003ec-\u003ed()",
          "package": "ArrayRef",
          "partial": "Write",
          "signature": "a i e-\u003eInt-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ArrayBZ.Internals.MArray\",\"Data.ArrayBZ.MArray\"]",
          "name": "writeArray",
          "package": "ArrayRef",
          "signature": "a i e -\u003e i -\u003e e -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#writeArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:writeArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:writeArray\"]"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals MArray",
          "module": "Data.ArrayBZ.Internals.MArray",
          "name": "writeArray",
          "normalized": "a b c-\u003eb-\u003ec-\u003ed()",
          "package": "ArrayRef",
          "partial": "Array",
          "signature": "a i e-\u003ei-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:writeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unboxed mutable arrays in IO monad\n",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "IOUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#IOUArray",
          "type": "type"
        },
        "index": {
          "description": "Unboxed mutable arrays in IO monad",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "IOUArray",
          "package": "ArrayRef",
          "partial": "IOUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:IOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unboxed mutable arrays in ST monad\n",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "STUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#STUArray",
          "type": "type"
        },
        "index": {
          "description": "Unboxed mutable arrays in ST monad",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "STUArray",
          "package": "ArrayRef",
          "partial": "STUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:STUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "UArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#UArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "UArray",
          "package": "ArrayRef",
          "partial": "UArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:UArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "UnboxedMutableArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#UnboxedMutableArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "UnboxedMutableArray",
          "package": "ArrayRef",
          "partial": "Unboxed Mutable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:UnboxedMutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Casts an \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
          "module": "[\"Data.ArrayBZ.Internals.Unboxed\",\"Data.ArrayBZ.ST\",\"Data.ArrayBZ.Unboxed\"]",
          "name": "castSTUArray",
          "package": "ArrayRef",
          "signature": "STUArray s i e -\u003e STUArray s i e'",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castSTUArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castSTUArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#v:castSTUArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#v:castSTUArray\"]"
        },
        "index": {
          "description": "Casts an STUArray with one element type into STUArray with different element type upper bound is recalculated",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "castSTUArray",
          "normalized": "STUArray a b c-\u003eSTUArray a b d",
          "package": "ArrayRef",
          "partial": "STUArray",
          "signature": "STUArray s i e-\u003eSTUArray s i e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCasts to arrays with different element type\n\u003c/p\u003e\u003cp\u003eCasts an \u003ctt\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/tt\u003e with a\n different element type. All the elements of the resulting array\n are undefined (unless you know what you're doing...).\n Upper array bound is recalculated according to elements size,\n for example UArray (1,2) Word32 -\u003e UArray (1,8) Word8\n\u003c/p\u003e",
          "module": "[\"Data.ArrayBZ.Internals.Unboxed\",\"Data.ArrayBZ.Unboxed\"]",
          "name": "castUArray",
          "package": "ArrayRef",
          "signature": "UArray i e -\u003e UArray i e'",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castUArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castUArray\",\"http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#v:castUArray\"]"
        },
        "index": {
          "description": "Casts to arrays with different element type Casts an UArray with one element type into UArray with different element type All the elements of the resulting array are undefined unless you know what you re doing Upper array bound is recalculated according to elements size for example UArray Word32 UArray Word8",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "castUArray",
          "normalized": "UArray a b-\u003eUArray a c",
          "package": "ArrayRef",
          "partial": "UArray",
          "signature": "UArray i e-\u003eUArray i e'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "doAccum",
          "package": "ArrayRef",
          "signature": "(t1 -\u003e t -\u003e t1) -\u003e [(Int, t)] -\u003e a i t1 -\u003e t2 ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#doAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "doAccum",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(Int,a)]-\u003eb c a-\u003ea()",
          "package": "ArrayRef",
          "partial": "Accum",
          "signature": "(t-\u003et-\u003et)-\u003e[(Int,t)]-\u003ea i t-\u003et()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:doAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "doReplace",
          "package": "ArrayRef",
          "signature": "[(Int, e)] -\u003e a i e -\u003e t ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#doReplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "doReplace",
          "normalized": "[(Int,a)]-\u003eb c a-\u003ed()",
          "package": "ArrayRef",
          "partial": "Replace",
          "signature": "[(Int,e)]-\u003ea i e-\u003et()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:doReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Freeze/thaw rules for IOUArray\n",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "freezeIOUArray",
          "package": "ArrayRef",
          "signature": "IOUArray i e -\u003e IO (UArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#freezeIOUArray",
          "type": "function"
        },
        "index": {
          "description": "Freeze thaw rules for IOUArray",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "freezeIOUArray",
          "normalized": "IOUArray a b-\u003eIO(UArray a b)",
          "package": "ArrayRef",
          "partial": "IOUArray",
          "signature": "IOUArray i e-\u003eIO(UArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:freezeIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Freeze/thaw rules for STUArray\n",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "freezeSTUArray",
          "package": "ArrayRef",
          "signature": "STUArray s i e -\u003e ST s (UArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#freezeSTUArray",
          "type": "function"
        },
        "index": {
          "description": "Freeze thaw rules for STUArray",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "freezeSTUArray",
          "normalized": "STUArray a b c-\u003eST a(UArray b c)",
          "package": "ArrayRef",
          "partial": "STUArray",
          "signature": "STUArray s i e-\u003eST s(UArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:freezeSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "freezeUA",
          "package": "ArrayRef",
          "signature": "UnboxedMutableArray t t1 t2 -\u003e t3 (UArray t1 t2)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#freezeUA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "freezeUA",
          "normalized": "UnboxedMutableArray a a a-\u003ea(UArray a a)",
          "package": "ArrayRef",
          "partial": "UA",
          "signature": "UnboxedMutableArray t t t-\u003et(UArray t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:freezeUA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "iOUArrayTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#iOUArrayTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "iOUArrayTc",
          "package": "ArrayRef",
          "partial": "OUArray Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:iOUArrayTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Array size in bytes\n",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "sizeOfUA",
          "package": "ArrayRef",
          "signature": "UArray i e -\u003e Int",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#sizeOfUA",
          "type": "function"
        },
        "index": {
          "description": "Array size in bytes",
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "sizeOfUA",
          "normalized": "UArray a b-\u003eInt",
          "package": "ArrayRef",
          "partial": "Of UA",
          "signature": "UArray i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:sizeOfUA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "sizeOfUMA",
          "package": "ArrayRef",
          "signature": "UnboxedMutableArray s i e -\u003e Int",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#sizeOfUMA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "sizeOfUMA",
          "normalized": "UnboxedMutableArray a b c-\u003eInt",
          "package": "ArrayRef",
          "partial": "Of UMA",
          "signature": "UnboxedMutableArray s i e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:sizeOfUMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "stUArrayTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#stUArrayTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "stUArrayTc",
          "package": "ArrayRef",
          "partial": "UArray Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:stUArrayTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "thawIOUArray",
          "package": "ArrayRef",
          "signature": "UArray i e -\u003e IO (IOUArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#thawIOUArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "thawIOUArray",
          "normalized": "UArray a b-\u003eIO(IOUArray a b)",
          "package": "ArrayRef",
          "partial": "IOUArray",
          "signature": "UArray i e-\u003eIO(IOUArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:thawIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "thawSTUArray",
          "package": "ArrayRef",
          "signature": "UArray i e -\u003e ST s (STUArray s i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#thawSTUArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "thawSTUArray",
          "normalized": "UArray a b-\u003eST c(STUArray c a b)",
          "package": "ArrayRef",
          "partial": "STUArray",
          "signature": "UArray i e-\u003eST s(STUArray s i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:thawSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "thawUA",
          "package": "ArrayRef",
          "signature": "UArray t t1 -\u003e t2 (UnboxedMutableArray s t t1)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#thawUA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "thawUA",
          "normalized": "UArray a a-\u003ea(UnboxedMutableArray b a a)",
          "package": "ArrayRef",
          "partial": "UA",
          "signature": "UArray t t-\u003et(UnboxedMutableArray s t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:thawUA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "uArrayTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#uArrayTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "uArrayTc",
          "package": "ArrayRef",
          "partial": "Array Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:uArrayTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeFreezeIOUArray",
          "package": "ArrayRef",
          "signature": "IOUArray i e -\u003e IO (UArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeFreezeIOUArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeFreezeIOUArray",
          "normalized": "IOUArray a b-\u003eIO(UArray a b)",
          "package": "ArrayRef",
          "partial": "Freeze IOUArray",
          "signature": "IOUArray i e-\u003eIO(UArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeFreezeIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeFreezeSTUArray",
          "package": "ArrayRef",
          "signature": "STUArray s i e -\u003e ST s (UArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeFreezeSTUArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeFreezeSTUArray",
          "normalized": "STUArray a b c-\u003eST a(UArray b c)",
          "package": "ArrayRef",
          "partial": "Freeze STUArray",
          "signature": "STUArray s i e-\u003eST s(UArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeFreezeSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeFreezeUA",
          "package": "ArrayRef",
          "signature": "UnboxedMutableArray t1 t t2 -\u003e t3 (UArray t t2)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeFreezeUA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeFreezeUA",
          "normalized": "UnboxedMutableArray a a a-\u003ea(UArray a a)",
          "package": "ArrayRef",
          "partial": "Freeze UA",
          "signature": "UnboxedMutableArray t t t-\u003et(UArray t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeFreezeUA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeThawIOUArray",
          "package": "ArrayRef",
          "signature": "UArray i e -\u003e IO (IOUArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeThawIOUArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeThawIOUArray",
          "normalized": "UArray a b-\u003eIO(IOUArray a b)",
          "package": "ArrayRef",
          "partial": "Thaw IOUArray",
          "signature": "UArray i e-\u003eIO(IOUArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeThawIOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeThawSTUArray",
          "package": "ArrayRef",
          "signature": "UArray i e -\u003e ST s (STUArray s i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeThawSTUArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeThawSTUArray",
          "normalized": "UArray a b-\u003eST c(STUArray c a b)",
          "package": "ArrayRef",
          "partial": "Thaw STUArray",
          "signature": "UArray i e-\u003eST s(STUArray s i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeThawSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeThawUA",
          "package": "ArrayRef",
          "signature": "UArray t t1 -\u003e t2 (UnboxedMutableArray s t t1)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeThawUA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "unsafeThawUA",
          "normalized": "UArray a a-\u003ea(UnboxedMutableArray b a a)",
          "package": "ArrayRef",
          "partial": "Thaw UA",
          "signature": "UArray t t-\u003et(UnboxedMutableArray s t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeThawUA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "withArrayCopy",
          "package": "ArrayRef",
          "signature": "UArray t t1 -\u003e (UnboxedMutableArray s t t1 -\u003e t2 t3) -\u003e t2 (UArray t t1)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#withArrayCopy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "withArrayCopy",
          "normalized": "UArray a a-\u003e(UnboxedMutableArray b a a-\u003ea a)-\u003ea(UArray a a)",
          "package": "ArrayRef",
          "partial": "Array Copy",
          "signature": "UArray t t-\u003e(UnboxedMutableArray s t t-\u003et t)-\u003et(UArray t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:withArrayCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "withNewArray",
          "package": "ArrayRef",
          "signature": "(i, i) -\u003e e -\u003e (UnboxedMutableArray t2 i e -\u003e t t1) -\u003e t (UArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#withNewArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Internals Unboxed",
          "module": "Data.ArrayBZ.Internals.Unboxed",
          "name": "withNewArray",
          "normalized": "(a,a)-\u003eb-\u003e(UnboxedMutableArray c a b-\u003ec c)-\u003ec(UArray a b)",
          "package": "ArrayRef",
          "partial": "New Array",
          "signature": "(i,i)-\u003ee-\u003e(UnboxedMutableArray t i e-\u003et t)-\u003et(UArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:withNewArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.MArray",
          "name": "HasBounds",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#HasBounds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ MArray",
          "module": "Data.ArrayBZ.MArray",
          "name": "HasBounds",
          "package": "ArrayRef",
          "partial": "Has Bounds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:HasBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.MArray",
          "name": "HasMutableBounds",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#HasMutableBounds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ MArray",
          "module": "Data.ArrayBZ.MArray",
          "name": "HasMutableBounds",
          "package": "ArrayRef",
          "partial": "Has Mutable Bounds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:HasMutableBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.MArray",
          "name": "MArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#MArray",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data ArrayBZ MArray",
          "module": "Data.ArrayBZ.MArray",
          "name": "MArray",
          "package": "ArrayRef",
          "partial": "MArray",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Boxed mutable arrays in ST monad\n",
          "module": "Data.ArrayBZ.ST",
          "name": "STArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#STArray",
          "type": "type"
        },
        "index": {
          "description": "Boxed mutable arrays in ST monad",
          "hierarchy": "Data ArrayBZ ST",
          "module": "Data.ArrayBZ.ST",
          "name": "STArray",
          "package": "ArrayRef",
          "partial": "STArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#t:STArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unboxed mutable arrays in ST monad\n",
          "module": "Data.ArrayBZ.ST",
          "name": "STUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#STUArray",
          "type": "type"
        },
        "index": {
          "description": "Unboxed mutable arrays in ST monad",
          "hierarchy": "Data ArrayBZ ST",
          "module": "Data.ArrayBZ.ST",
          "name": "STUArray",
          "package": "ArrayRef",
          "partial": "STUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#t:STUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A safe way to create and work with a mutable array before returning an\n immutable array for later perusal.  This function avoids copying\n the array before returning it - it uses \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e internally, but\n this wrapper is a safe interface to that function.\n",
          "module": "Data.ArrayBZ.ST",
          "name": "runSTArray",
          "package": "ArrayRef",
          "signature": "(forall s.  ST s (STArray s i e)) -\u003e Array i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-ST.html#runSTArray",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
          "hierarchy": "Data ArrayBZ ST",
          "module": "Data.ArrayBZ.ST",
          "name": "runSTArray",
          "normalized": "(a b ST c(STArray c d e))-\u003eArray d e",
          "package": "ArrayRef",
          "partial": "STArray",
          "signature": "(forall s. ST s(STArray s i e))-\u003eArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#v:runSTArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A safe way to create and work with an unboxed mutable array before\n returning an immutable array for later perusal.  This function\n avoids copying the array before returning it - it uses\n \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e internally, but this wrapper is a safe interface to\n that function.\n",
          "module": "Data.ArrayBZ.ST",
          "name": "runSTUArray",
          "package": "ArrayRef",
          "signature": "(forall s.  ST s (STUArray s i e)) -\u003e UArray i e",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-ST.html#runSTUArray",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with an unboxed mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
          "hierarchy": "Data ArrayBZ ST",
          "module": "Data.ArrayBZ.ST",
          "name": "runSTUArray",
          "normalized": "(a b ST c(STUArray c d e))-\u003eUArray d e",
          "package": "ArrayRef",
          "partial": "STUArray",
          "signature": "(forall s. ST s(STUArray s i e))-\u003eUArray i e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#v:runSTUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Module \u003ca\u003eData.ArrayBZ.Internals.MArray\u003c/a\u003e provides the interface of storable arrays.\n They are instances of class \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e (with the \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e monad).\n",
          "module": "Data.ArrayBZ.Storable",
          "name": "StorableArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#StorableArray",
          "type": "data"
        },
        "index": {
          "description": "Module Data.ArrayBZ.Internals.MArray provides the interface of storable arrays They are instances of class MArray with the IO monad",
          "hierarchy": "Data ArrayBZ Storable",
          "module": "Data.ArrayBZ.Storable",
          "name": "StorableArray",
          "package": "ArrayRef",
          "partial": "Storable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#t:StorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "If you want to use it afterwards, ensure that you\n \u003ctt\u003e\u003ca\u003etouchStorableArray\u003c/a\u003e\u003c/tt\u003e after the last use of the pointer,\n so the array is not freed too early.\n",
          "module": "Data.ArrayBZ.Storable",
          "name": "touchStorableArray",
          "package": "ArrayRef",
          "signature": "StorableArray i e -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#touchStorableArray",
          "type": "function"
        },
        "index": {
          "description": "If you want to use it afterwards ensure that you touchStorableArray after the last use of the pointer so the array is not freed too early",
          "hierarchy": "Data ArrayBZ Storable",
          "module": "Data.ArrayBZ.Storable",
          "name": "touchStorableArray",
          "normalized": "StorableArray a b-\u003eIO()",
          "package": "ArrayRef",
          "partial": "Storable Array",
          "signature": "StorableArray i e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#v:touchStorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Construct a \u003ctt\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/tt\u003e from an arbitrary \u003ctt\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/tt\u003e.  It is\n the caller's responsibility to ensure that the \u003ctt\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/tt\u003e points to\n an area of memory sufficient for the specified bounds.\n",
          "module": "Data.ArrayBZ.Storable",
          "name": "unsafeForeignPtrToStorableArray",
          "package": "ArrayRef",
          "signature": "ForeignPtr e -\u003e (i, i) -\u003e IO (StorableArray i e)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#unsafeForeignPtrToStorableArray",
          "type": "function"
        },
        "index": {
          "description": "Construct StorableArray from an arbitrary ForeignPtr It is the caller responsibility to ensure that the ForeignPtr points to an area of memory sufficient for the specified bounds",
          "hierarchy": "Data ArrayBZ Storable",
          "module": "Data.ArrayBZ.Storable",
          "name": "unsafeForeignPtrToStorableArray",
          "normalized": "ForeignPtr a-\u003e(b,b)-\u003eIO(StorableArray b a)",
          "package": "ArrayRef",
          "partial": "Foreign Ptr To Storable Array",
          "signature": "ForeignPtr e-\u003e(i,i)-\u003eIO(StorableArray i e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#v:unsafeForeignPtrToStorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The pointer to the array contents is obtained by \u003ctt\u003e\u003ca\u003ewithStorableArray\u003c/a\u003e\u003c/tt\u003e.\n The idea is similar to \u003ctt\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/tt\u003e (used internally here).\n The pointer should be used only during execution of the \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e action\n retured by the function passed as argument to \u003ctt\u003e\u003ca\u003ewithStorableArray\u003c/a\u003e\u003c/tt\u003e.\n",
          "module": "Data.ArrayBZ.Storable",
          "name": "withStorableArray",
          "package": "ArrayRef",
          "signature": "StorableArray i e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#withStorableArray",
          "type": "function"
        },
        "index": {
          "description": "The pointer to the array contents is obtained by withStorableArray The idea is similar to ForeignPtr used internally here The pointer should be used only during execution of the IO action retured by the function passed as argument to withStorableArray",
          "hierarchy": "Data ArrayBZ Storable",
          "module": "Data.ArrayBZ.Storable",
          "name": "withStorableArray",
          "normalized": "StorableArray a b-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "package": "ArrayRef",
          "partial": "Storable Array",
          "signature": "StorableArray i e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#v:withStorableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unboxed mutable arrays in IO monad\n",
          "module": "Data.ArrayBZ.Unboxed",
          "name": "IOUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#IOUArray",
          "type": "type"
        },
        "index": {
          "description": "Unboxed mutable arrays in IO monad",
          "hierarchy": "Data ArrayBZ Unboxed",
          "module": "Data.ArrayBZ.Unboxed",
          "name": "IOUArray",
          "package": "ArrayRef",
          "partial": "IOUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#t:IOUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Unboxed mutable arrays in ST monad\n",
          "module": "Data.ArrayBZ.Unboxed",
          "name": "STUArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#STUArray",
          "type": "type"
        },
        "index": {
          "description": "Unboxed mutable arrays in ST monad",
          "hierarchy": "Data ArrayBZ Unboxed",
          "module": "Data.ArrayBZ.Unboxed",
          "name": "STUArray",
          "package": "ArrayRef",
          "partial": "STUArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#t:STUArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ArrayBZ.Unboxed",
          "name": "UArray",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#UArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data ArrayBZ Unboxed",
          "module": "Data.ArrayBZ.Unboxed",
          "name": "UArray",
          "package": "ArrayRef",
          "partial": "UArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#t:UArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HasDefaultValue",
          "name": "HasDefaultValue",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-HasDefaultValue.html#HasDefaultValue",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data HasDefaultValue",
          "module": "Data.HasDefaultValue",
          "name": "HasDefaultValue",
          "package": "ArrayRef",
          "partial": "Has Default Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-HasDefaultValue.html#v:HasDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HasDefaultValue",
          "name": "defaultValue",
          "package": "ArrayRef",
          "signature": "a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-HasDefaultValue.html#defaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HasDefaultValue",
          "module": "Data.HasDefaultValue",
          "name": "defaultValue",
          "package": "ArrayRef",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-HasDefaultValue.html#v:defaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.LazyST",
          "name": "STURef",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#STURef",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Ref LazyST",
          "module": "Data.Ref.LazyST",
          "name": "STURef",
          "package": "ArrayRef",
          "partial": "STURef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#t:STURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.LazyST",
          "name": "modifySTURef",
          "package": "ArrayRef",
          "signature": "STURef s a -\u003e (a -\u003e a) -\u003e ST s ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#modifySTURef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref LazyST",
          "module": "Data.Ref.LazyST",
          "name": "modifySTURef",
          "normalized": "STURef a b-\u003e(b-\u003eb)-\u003eST a()",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "STURef s a-\u003e(a-\u003ea)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:modifySTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.LazyST",
          "name": "newSTURef",
          "package": "ArrayRef",
          "signature": "a -\u003e ST s (STURef s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#newSTURef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref LazyST",
          "module": "Data.Ref.LazyST",
          "name": "newSTURef",
          "normalized": "a-\u003eST b(STURef b a)",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "a-\u003eST s(STURef s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:newSTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.LazyST",
          "name": "readSTURef",
          "package": "ArrayRef",
          "signature": "STURef s a -\u003e ST s a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#readSTURef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref LazyST",
          "module": "Data.Ref.LazyST",
          "name": "readSTURef",
          "normalized": "STURef a b-\u003eST a b",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "STURef s a-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:readSTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.LazyST",
          "name": "writeSTURef",
          "package": "ArrayRef",
          "signature": "STURef s a -\u003e a -\u003e ST s ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#writeSTURef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref LazyST",
          "module": "Data.Ref.LazyST",
          "name": "writeSTURef",
          "normalized": "STURef a b-\u003eb-\u003eST a()",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "STURef s a-\u003ea-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:writeSTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.Unboxed",
          "name": "IOURef",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#IOURef",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "IOURef",
          "package": "ArrayRef",
          "partial": "IOURef",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#t:IOURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.Unboxed",
          "name": "STURef",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#STURef",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "STURef",
          "package": "ArrayRef",
          "partial": "STURef",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#t:STURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.Unboxed",
          "name": "ioURefTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#ioURefTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "ioURefTc",
          "package": "ArrayRef",
          "partial": "URef Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:ioURefTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify contents of an \u003ctt\u003e\u003ca\u003eIOURef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
          "module": "Data.Ref.Unboxed",
          "name": "modifyIOURef",
          "package": "ArrayRef",
          "signature": "IOURef a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#modifyIOURef",
          "type": "function"
        },
        "index": {
          "description": "Modify contents of an IOURef by applying pure function to it",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "modifyIOURef",
          "normalized": "IOURef a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "ArrayRef",
          "partial": "IOURef",
          "signature": "IOURef a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:modifyIOURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify contents of an \u003ctt\u003e\u003ca\u003eSTURef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
          "module": "Data.Ref.Unboxed",
          "name": "modifySTURef",
          "package": "ArrayRef",
          "signature": "STURef s a -\u003e (a -\u003e a) -\u003e ST s ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#modifySTURef",
          "type": "function"
        },
        "index": {
          "description": "Modify contents of an STURef by applying pure function to it",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "modifySTURef",
          "normalized": "STURef a b-\u003e(b-\u003eb)-\u003eST a()",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "STURef s a-\u003e(a-\u003ea)-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:modifySTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create new unboxed reference in IO monad\n",
          "module": "Data.Ref.Unboxed",
          "name": "newIOURef",
          "package": "ArrayRef",
          "signature": "a -\u003e IO (IOURef a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#newIOURef",
          "type": "function"
        },
        "index": {
          "description": "Create new unboxed reference in IO monad",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "newIOURef",
          "normalized": "a-\u003eIO(IOURef a)",
          "package": "ArrayRef",
          "partial": "IOURef",
          "signature": "a-\u003eIO(IOURef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:newIOURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create new unboxed reference in ST monad\n",
          "module": "Data.Ref.Unboxed",
          "name": "newSTURef",
          "package": "ArrayRef",
          "signature": "a -\u003e ST s (STURef s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#newSTURef",
          "type": "function"
        },
        "index": {
          "description": "Create new unboxed reference in ST monad",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "newSTURef",
          "normalized": "a-\u003eST b(STURef b a)",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "a-\u003eST s(STURef s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:newSTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read current value of unboxed reference in IO monad\n",
          "module": "Data.Ref.Unboxed",
          "name": "readIOURef",
          "package": "ArrayRef",
          "signature": "IOURef a -\u003e IO a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#readIOURef",
          "type": "function"
        },
        "index": {
          "description": "Read current value of unboxed reference in IO monad",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "readIOURef",
          "normalized": "IOURef a-\u003eIO a",
          "package": "ArrayRef",
          "partial": "IOURef",
          "signature": "IOURef a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:readIOURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read current value of unboxed reference in ST monad\n",
          "module": "Data.Ref.Unboxed",
          "name": "readSTURef",
          "package": "ArrayRef",
          "signature": "STURef s a -\u003e ST s a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#readSTURef",
          "type": "function"
        },
        "index": {
          "description": "Read current value of unboxed reference in ST monad",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "readSTURef",
          "normalized": "STURef a b-\u003eST a b",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "STURef s a-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:readSTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.Unboxed",
          "name": "stURefTc",
          "package": "ArrayRef",
          "signature": "TyCon",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#stURefTc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "stURefTc",
          "package": "ArrayRef",
          "partial": "URef Tc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:stURefTc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Change value of unboxed reference in IO monad\n",
          "module": "Data.Ref.Unboxed",
          "name": "writeIOURef",
          "package": "ArrayRef",
          "signature": "IOURef a -\u003e a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#writeIOURef",
          "type": "function"
        },
        "index": {
          "description": "Change value of unboxed reference in IO monad",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "writeIOURef",
          "normalized": "IOURef a-\u003ea-\u003eIO()",
          "package": "ArrayRef",
          "partial": "IOURef",
          "signature": "IOURef a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:writeIOURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Change value of unboxed reference in ST monad\n",
          "module": "Data.Ref.Unboxed",
          "name": "writeSTURef",
          "package": "ArrayRef",
          "signature": "STURef s a -\u003e a -\u003e ST s ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#writeSTURef",
          "type": "function"
        },
        "index": {
          "description": "Change value of unboxed reference in ST monad",
          "hierarchy": "Data Ref Unboxed",
          "module": "Data.Ref.Unboxed",
          "name": "writeSTURef",
          "normalized": "STURef a b-\u003eb-\u003eST a()",
          "package": "ArrayRef",
          "partial": "STURef",
          "signature": "STURef s a-\u003ea-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:writeSTURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.Universal",
          "name": "Ref",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#Ref",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "Ref",
          "package": "ArrayRef",
          "partial": "Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.Universal",
          "name": "URef",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#URef",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "URef",
          "package": "ArrayRef",
          "partial": "URef",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:URef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify the contents of an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
          "module": "Data.Ref.Universal",
          "name": "modifyRef",
          "package": "ArrayRef",
          "signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyRef",
          "type": "function"
        },
        "index": {
          "description": "Modify the contents of an Ref by applying pure function to it",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "modifyRef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "ArrayRef",
          "partial": "Ref",
          "signature": "r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify the contents of an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e by applying monadic computation to it\n",
          "module": "Data.Ref.Universal",
          "name": "modifyRefM",
          "package": "ArrayRef",
          "signature": "r a -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyRefM",
          "type": "function"
        },
        "index": {
          "description": "Modify the contents of an Ref by applying monadic computation to it",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "modifyRefM",
          "normalized": "a b-\u003e(b-\u003ec b)-\u003ec()",
          "package": "ArrayRef",
          "partial": "Ref",
          "signature": "r a-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyRefM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify the contents of an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
          "module": "Data.Ref.Universal",
          "name": "modifyURef",
          "package": "ArrayRef",
          "signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyURef",
          "type": "function"
        },
        "index": {
          "description": "Modify the contents of an URef by applying pure function to it",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "modifyURef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "ArrayRef",
          "partial": "URef",
          "signature": "r a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify the contents of an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e by applying monadic computation to it\n",
          "module": "Data.Ref.Universal",
          "name": "modifyURefM",
          "package": "ArrayRef",
          "signature": "r a -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyURefM",
          "type": "function"
        },
        "index": {
          "description": "Modify the contents of an URef by applying monadic computation to it",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "modifyURefM",
          "normalized": "a b-\u003e(b-\u003ec b)-\u003ec()",
          "package": "ArrayRef",
          "partial": "URef",
          "signature": "r a-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyURefM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a new \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e with given initial value\n",
          "module": "Data.Ref.Universal",
          "name": "newRef",
          "package": "ArrayRef",
          "signature": "a -\u003e m (r a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#newRef",
          "type": "function"
        },
        "index": {
          "description": "Create new Ref with given initial value",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "newRef",
          "normalized": "a-\u003eb(c a)",
          "package": "ArrayRef",
          "partial": "Ref",
          "signature": "a-\u003em(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create a new \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e with given initial value\n",
          "module": "Data.Ref.Universal",
          "name": "newURef",
          "package": "ArrayRef",
          "signature": "a -\u003e m (r a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#newURef",
          "type": "function"
        },
        "index": {
          "description": "Create new URef with given initial value",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "newURef",
          "normalized": "a-\u003eb(c a)",
          "package": "ArrayRef",
          "partial": "URef",
          "signature": "a-\u003em(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:newURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value of an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.Ref.Universal",
          "name": "readRef",
          "package": "ArrayRef",
          "signature": "r a -\u003e m a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#readRef",
          "type": "function"
        },
        "index": {
          "description": "Read the value of an Ref",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "readRef",
          "normalized": "a b-\u003ec b",
          "package": "ArrayRef",
          "partial": "Ref",
          "signature": "r a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value of an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.Ref.Universal",
          "name": "readURef",
          "package": "ArrayRef",
          "signature": "r a -\u003e m a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#readURef",
          "type": "function"
        },
        "index": {
          "description": "Read the value of an URef",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "readURef",
          "normalized": "a b-\u003ec b",
          "package": "ArrayRef",
          "partial": "URef",
          "signature": "r a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:readURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Write new value into an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.Ref.Universal",
          "name": "writeRef",
          "package": "ArrayRef",
          "signature": "r a -\u003e a -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#writeRef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into an Ref",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "writeRef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "ArrayRef",
          "partial": "Ref",
          "signature": "r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Write new value into an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.Ref.Universal",
          "name": "writeURef",
          "package": "ArrayRef",
          "signature": "r a -\u003e a -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#writeURef",
          "type": "function"
        },
        "index": {
          "description": "Write new value into an URef",
          "hierarchy": "Data Ref Universal",
          "module": "Data.Ref.Universal",
          "name": "writeURef",
          "normalized": "a b-\u003eb-\u003ec()",
          "package": "ArrayRef",
          "partial": "URef",
          "signature": "r a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:writeURef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "References (mutable vars)\n",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref.html",
          "type": "unknown"
        },
        "index": {
          "description": "References mutable vars",
          "type": "unknown"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref.html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "+=",
          "package": "ArrayRef",
          "signature": "r -\u003e b -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#%2B%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "+=",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "ArrayRef",
          "signature": "r-\u003eb-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:+="
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "-=",
          "package": "ArrayRef",
          "signature": "r -\u003e b -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#-%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "-=",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "ArrayRef",
          "signature": "r-\u003eb-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:-="
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": ".\u003c-",
          "package": "ArrayRef",
          "signature": "r -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#.%3C-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": ".\u003c-",
          "normalized": "a-\u003e(b-\u003ec b)-\u003ec()",
          "package": "ArrayRef",
          "signature": "r-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:.\u003c-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": ".=",
          "package": "ArrayRef",
          "signature": "r -\u003e (b -\u003e b) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#.%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": ".=",
          "normalized": "a-\u003e(b-\u003eb)-\u003ec()",
          "package": "ArrayRef",
          "signature": "r-\u003e(b-\u003eb)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:.="
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "=:",
          "package": "ArrayRef",
          "signature": "r -\u003e a -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "=:",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "ArrayRef",
          "signature": "r-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:=:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "Mutable",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#Mutable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "Mutable",
          "package": "ArrayRef",
          "partial": "Mutable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "hashUpdate",
          "package": "ArrayRef",
          "signature": "HashTable key val -\u003e key -\u003e val -\u003e IO Bool",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#hashUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "hashUpdate",
          "normalized": "HashTable a b-\u003ea-\u003eb-\u003eIO Bool",
          "package": "ArrayRef",
          "partial": "Update",
          "signature": "HashTable key val-\u003ekey-\u003eval-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:hashUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify the contents of an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
          "module": "Data.SyntaxSugar",
          "name": "modifyVar",
          "package": "ArrayRef",
          "signature": "r -\u003e (b -\u003e b) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#modifyVar",
          "type": "function"
        },
        "index": {
          "description": "Modify the contents of an Mutable by applying pure function to it",
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "modifyVar",
          "normalized": "a-\u003e(b-\u003eb)-\u003ec()",
          "package": "ArrayRef",
          "partial": "Var",
          "signature": "r-\u003e(b-\u003eb)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:modifyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Modify the contents of an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e by applying monadic computation to it\n",
          "module": "Data.SyntaxSugar",
          "name": "modifyVarM",
          "package": "ArrayRef",
          "signature": "r -\u003e (a -\u003e m a) -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#modifyVarM",
          "type": "function"
        },
        "index": {
          "description": "Modify the contents of an Mutable by applying monadic computation to it",
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "modifyVarM",
          "normalized": "a-\u003e(b-\u003ec b)-\u003ec()",
          "package": "ArrayRef",
          "partial": "Var",
          "signature": "r-\u003e(a-\u003em a)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:modifyVarM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value of an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.SyntaxSugar",
          "name": "readVar",
          "package": "ArrayRef",
          "signature": "r -\u003e m a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Read the value of an Mutable",
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "readVar",
          "normalized": "a-\u003eb c",
          "package": "ArrayRef",
          "partial": "Var",
          "signature": "r-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "ref",
          "package": "ArrayRef",
          "signature": "a -\u003e m (r a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "ref",
          "normalized": "a-\u003eb(c a)",
          "package": "ArrayRef",
          "signature": "a-\u003em(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "uref",
          "package": "ArrayRef",
          "signature": "a -\u003e m (r a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#uref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "uref",
          "normalized": "a-\u003eb(c a)",
          "package": "ArrayRef",
          "signature": "a-\u003em(r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:uref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SyntaxSugar",
          "name": "val",
          "package": "ArrayRef",
          "signature": "r -\u003e m a",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "val",
          "normalized": "a-\u003eb c",
          "package": "ArrayRef",
          "signature": "r-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Write new value into an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e\n",
          "module": "Data.SyntaxSugar",
          "name": "writeVar",
          "package": "ArrayRef",
          "signature": "r -\u003e a -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#writeVar",
          "type": "function"
        },
        "index": {
          "description": "Write new value into an Mutable",
          "hierarchy": "Data SyntaxSugar",
          "module": "Data.SyntaxSugar",
          "name": "writeVar",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "ArrayRef",
          "partial": "Var",
          "signature": "r-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:writeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unboxed",
          "name": "MUVec",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#MUVec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "MUVec",
          "package": "ArrayRef",
          "partial": "MUVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#t:MUVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unboxed",
          "name": "UVec",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#UVec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "UVec",
          "package": "ArrayRef",
          "partial": "UVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#t:UVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unboxed",
          "name": "Unboxed",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#Unboxed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "Unboxed",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:Unboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional operations on byte vectors\n\u003c/p\u003e\u003cp\u003eAlloc the mutable byte vector having elems elements of required type\n\u003c/p\u003e",
          "module": "Data.Unboxed",
          "name": "allocUnboxed",
          "package": "ArrayRef",
          "signature": "elems -\u003e m (MUVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Unboxed.html#allocUnboxed",
          "type": "function"
        },
        "index": {
          "description": "Additional operations on byte vectors Alloc the mutable byte vector having elems elements of required type",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "allocUnboxed",
          "normalized": "a-\u003eb(MUVec c d)",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "elems-\u003em(MUVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:allocUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Recast mutable unboxed vector\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "castMUnboxed",
          "package": "ArrayRef",
          "signature": "MUVec s a -\u003e MUVec s b",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#castMUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:castMUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:castMUnboxed\"]"
        },
        "index": {
          "description": "Recast mutable unboxed vector",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "castMUnboxed",
          "normalized": "MUVec a b-\u003eMUVec a c",
          "package": "ArrayRef",
          "partial": "MUnboxed",
          "signature": "MUVec s a-\u003eMUVec s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:castMUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Recast immutable unboxed vector\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "castUnboxed",
          "package": "ArrayRef",
          "signature": "UVec a -\u003e UVec b",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#castUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:castUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:castUnboxed\"]"
        },
        "index": {
          "description": "Recast immutable unboxed vector",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "castUnboxed",
          "normalized": "UVec a-\u003eUVec b",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "UVec a-\u003eUVec b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:castUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Mutable-\u003eimmutable byte vector conversion which takes a copy of contents\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "freezeUnboxed",
          "package": "ArrayRef",
          "signature": "MUVec s a -\u003e Int -\u003e m (UVec a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#freezeUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:freezeUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:freezeUnboxed\"]"
        },
        "index": {
          "description": "Mutable immutable byte vector conversion which takes copy of contents",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "freezeUnboxed",
          "normalized": "MUVec a b-\u003eInt-\u003ec(UVec b)",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "MUVec s a-\u003eInt-\u003em(UVec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:freezeUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value from immutable byte vector at given index\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "indexUnboxed",
          "package": "ArrayRef",
          "signature": "UVec value -\u003e index -\u003e value",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#indexUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:indexUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:indexUnboxed\"]"
        },
        "index": {
          "description": "Read the value from immutable byte vector at given index",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "indexUnboxed",
          "normalized": "UVec a-\u003eb-\u003ea",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "UVec value-\u003eindex-\u003evalue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:indexUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value from mutable byte vector at given index\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "readUnboxed",
          "package": "ArrayRef",
          "signature": "MUVec s value -\u003e index -\u003e m value",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#readUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:readUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:readUnboxed\"]"
        },
        "index": {
          "description": "Read the value from mutable byte vector at given index",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "readUnboxed",
          "normalized": "MUVec a b-\u003ec-\u003ed b",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "MUVec s value-\u003eindex-\u003em value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:readUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "How many bytes required to represent values of this type\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "sizeOfUnboxed",
          "package": "ArrayRef",
          "signature": "value -\u003e Int",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#sizeOfUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:sizeOfUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:sizeOfUnboxed\"]"
        },
        "index": {
          "description": "How many bytes required to represent values of this type",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "sizeOfUnboxed",
          "normalized": "a-\u003eInt",
          "package": "ArrayRef",
          "partial": "Of Unboxed",
          "signature": "value-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:sizeOfUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Immutable-\u003emutable byte vector conversion which takes a copy of contents\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "thawUnboxed",
          "package": "ArrayRef",
          "signature": "UVec a -\u003e Int -\u003e m (MUVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#thawUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:thawUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:thawUnboxed\"]"
        },
        "index": {
          "description": "Immutable mutable byte vector conversion which takes copy of contents",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "thawUnboxed",
          "normalized": "UVec a-\u003eInt-\u003eb(MUVec c a)",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "UVec a-\u003eInt-\u003em(MUVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:thawUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Mutable-\u003eimmutable byte vector on-place conversion\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "unsafeFreezeUnboxed",
          "package": "ArrayRef",
          "signature": "MUVec s a -\u003e m (UVec a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#unsafeFreezeUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:unsafeFreezeUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:unsafeFreezeUnboxed\"]"
        },
        "index": {
          "description": "Mutable immutable byte vector on-place conversion",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "unsafeFreezeUnboxed",
          "normalized": "MUVec a b-\u003ec(UVec b)",
          "package": "ArrayRef",
          "partial": "Freeze Unboxed",
          "signature": "MUVec s a-\u003em(UVec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:unsafeFreezeUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Immutable-\u003emutable byte vector on-place conversion\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "unsafeThawUnboxed",
          "package": "ArrayRef",
          "signature": "UVec a -\u003e m (MUVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#unsafeThawUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:unsafeThawUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:unsafeThawUnboxed\"]"
        },
        "index": {
          "description": "Immutable mutable byte vector on-place conversion",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "unsafeThawUnboxed",
          "normalized": "UVec a-\u003eb(MUVec c a)",
          "package": "ArrayRef",
          "partial": "Thaw Unboxed",
          "signature": "UVec a-\u003em(MUVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:unsafeThawUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Write the value to mutable byte vector at given index\n",
          "module": "[\"Data.Unboxed\",\"GHC.Unboxed\"]",
          "name": "writeUnboxed",
          "package": "ArrayRef",
          "signature": "MUVec s value -\u003e index -\u003e value -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#writeUnboxed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:writeUnboxed\",\"http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:writeUnboxed\"]"
        },
        "index": {
          "description": "Write the value to mutable byte vector at given index",
          "hierarchy": "Data Unboxed",
          "module": "Data.Unboxed",
          "name": "writeUnboxed",
          "normalized": "MUVec a b-\u003ec-\u003eb-\u003ed()",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "signature": "MUVec s value-\u003eindex-\u003evalue-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:writeUnboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ArrBZ",
          "name": "MVec",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#MVec",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "MVec",
          "package": "ArrayRef",
          "partial": "MVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#t:MVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ArrBZ",
          "name": "Vec",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#Vec",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "Vec",
          "package": "ArrayRef",
          "partial": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Alloc the mutable vector\n",
          "module": "GHC.ArrBZ",
          "name": "allocBoxed",
          "package": "ArrayRef",
          "signature": "elems -\u003e a -\u003e m (MVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#allocBoxed",
          "type": "function"
        },
        "index": {
          "description": "Alloc the mutable vector",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "allocBoxed",
          "normalized": "a-\u003eb-\u003ec(MVec d b)",
          "package": "ArrayRef",
          "partial": "Boxed",
          "signature": "elems-\u003ea-\u003em(MVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:allocBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Mutable-\u003eimmutable vector conversion which takes a copy of contents\n",
          "module": "GHC.ArrBZ",
          "name": "freezeBoxed",
          "package": "ArrayRef",
          "signature": "MVec s a -\u003e Int -\u003e a -\u003e m (Vec a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#freezeBoxed",
          "type": "function"
        },
        "index": {
          "description": "Mutable immutable vector conversion which takes copy of contents",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "freezeBoxed",
          "normalized": "MVec a b-\u003eInt-\u003eb-\u003ec(Vec b)",
          "package": "ArrayRef",
          "partial": "Boxed",
          "signature": "MVec s a-\u003eInt-\u003ea-\u003em(Vec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:freezeBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.ArrBZ",
          "name": "fromI#",
          "package": "ArrayRef",
          "signature": "n -\u003e Int#",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#fromI%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "fromI#",
          "normalized": "a-\u003eInt #",
          "package": "ArrayRef",
          "signature": "n-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:fromI#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value from immutable vector at given index\n",
          "module": "GHC.ArrBZ",
          "name": "indexBoxed",
          "package": "ArrayRef",
          "signature": "Vec value -\u003e index -\u003e value",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#indexBoxed",
          "type": "function"
        },
        "index": {
          "description": "Read the value from immutable vector at given index",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "indexBoxed",
          "normalized": "Vec a-\u003eb-\u003ea",
          "package": "ArrayRef",
          "partial": "Boxed",
          "signature": "Vec value-\u003eindex-\u003evalue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:indexBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read the value from mutable vector at given index\n",
          "module": "GHC.ArrBZ",
          "name": "readBoxed",
          "package": "ArrayRef",
          "signature": "MVec s value -\u003e index -\u003e m value",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#readBoxed",
          "type": "function"
        },
        "index": {
          "description": "Read the value from mutable vector at given index",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "readBoxed",
          "normalized": "MVec a b-\u003ec-\u003ed b",
          "package": "ArrayRef",
          "partial": "Boxed",
          "signature": "MVec s value-\u003eindex-\u003em value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:readBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Immutable-\u003emutable vector conversion which takes a copy of contents\n",
          "module": "GHC.ArrBZ",
          "name": "thawBoxed",
          "package": "ArrayRef",
          "signature": "Vec a -\u003e Int -\u003e a -\u003e m (MVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#thawBoxed",
          "type": "function"
        },
        "index": {
          "description": "Immutable mutable vector conversion which takes copy of contents",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "thawBoxed",
          "normalized": "Vec a-\u003eInt-\u003ea-\u003eb(MVec c a)",
          "package": "ArrayRef",
          "partial": "Boxed",
          "signature": "Vec a-\u003eInt-\u003ea-\u003em(MVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:thawBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Mutable-\u003eimmutable vector on-place conversion\n",
          "module": "GHC.ArrBZ",
          "name": "unsafeFreezeBoxed",
          "package": "ArrayRef",
          "signature": "MVec s a -\u003e m (Vec a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#unsafeFreezeBoxed",
          "type": "function"
        },
        "index": {
          "description": "Mutable immutable vector on-place conversion",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "unsafeFreezeBoxed",
          "normalized": "MVec a b-\u003ec(Vec b)",
          "package": "ArrayRef",
          "partial": "Freeze Boxed",
          "signature": "MVec s a-\u003em(Vec a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:unsafeFreezeBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Immutable-\u003emutable vector on-place conversion\n",
          "module": "GHC.ArrBZ",
          "name": "unsafeThawBoxed",
          "package": "ArrayRef",
          "signature": "Vec a -\u003e m (MVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#unsafeThawBoxed",
          "type": "function"
        },
        "index": {
          "description": "Immutable mutable vector on-place conversion",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "unsafeThawBoxed",
          "normalized": "Vec a-\u003eb(MVec c a)",
          "package": "ArrayRef",
          "partial": "Thaw Boxed",
          "signature": "Vec a-\u003em(MVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:unsafeThawBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Write the value to mutable vector at given index\n",
          "module": "GHC.ArrBZ",
          "name": "writeBoxed",
          "package": "ArrayRef",
          "signature": "MVec s value -\u003e index -\u003e value -\u003e m ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#writeBoxed",
          "type": "function"
        },
        "index": {
          "description": "Write the value to mutable vector at given index",
          "hierarchy": "GHC ArrBZ",
          "module": "GHC.ArrBZ",
          "name": "writeBoxed",
          "normalized": "MVec a b-\u003ec-\u003eb-\u003ed()",
          "package": "ArrayRef",
          "partial": "Boxed",
          "signature": "MVec s value-\u003eindex-\u003evalue-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:writeBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Type functions which converts universal ST or IO types to IO-specific ones\n",
          "module": "GHC.Unboxed",
          "name": "IOSpecific",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific",
          "type": "type"
        },
        "index": {
          "description": "Type functions which converts universal ST or IO types to IO-specific ones",
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "IOSpecific",
          "package": "ArrayRef",
          "partial": "IOSpecific",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:IOSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "IOSpecific2",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific2",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "IOSpecific2",
          "package": "ArrayRef",
          "partial": "IOSpecific",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:IOSpecific2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "IOSpecific3",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific3",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "IOSpecific3",
          "package": "ArrayRef",
          "partial": "IOSpecific",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:IOSpecific3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "MUVec",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#MUVec",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "MUVec",
          "package": "ArrayRef",
          "partial": "MUVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:MUVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "UVec",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#UVec",
          "type": "data"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "UVec",
          "package": "ArrayRef",
          "partial": "UVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:UVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "STorIO",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#STorIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "STorIO",
          "package": "ArrayRef",
          "partial": "STor IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:STorIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "Unboxed",
          "package": "ArrayRef",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#Unboxed",
          "type": "class"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "Unboxed",
          "package": "ArrayRef",
          "partial": "Unboxed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:Unboxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Alloc the mutable byte vector\n",
          "module": "GHC.Unboxed",
          "name": "allocUnboxedBytes",
          "package": "ArrayRef",
          "signature": "bytes -\u003e m (MUVec s a)",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#allocUnboxedBytes",
          "type": "function"
        },
        "index": {
          "description": "Alloc the mutable byte vector",
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "allocUnboxedBytes",
          "normalized": "a-\u003eb(MUVec c d)",
          "package": "ArrayRef",
          "partial": "Unboxed Bytes",
          "signature": "bytes-\u003em(MUVec s a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:allocUnboxedBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "fromI#",
          "package": "ArrayRef",
          "signature": "n -\u003e Int#",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#fromI%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "fromI#",
          "normalized": "a-\u003eInt #",
          "package": "ArrayRef",
          "signature": "n-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:fromI#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Unboxed",
          "name": "memcpy",
          "package": "ArrayRef",
          "signature": "MutableByteArray# RealWorld -\u003e ByteArray# -\u003e Int# -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#memcpy",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Unboxed",
          "module": "GHC.Unboxed",
          "name": "memcpy",
          "normalized": "MutableByteArray # RealWorld-\u003eByteArray #-\u003eInt #-\u003eIO()",
          "package": "ArrayRef",
          "signature": "MutableByteArray # RealWorld-\u003eByteArray #-\u003eInt #-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:memcpy"
      }
    }
  ]
]