[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#t:WithLocking",
      "description": {
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#WithLocking",
        "fct-type": "unknown",
        "title": "WithLocking"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "WithLocking",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "With Locking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:Locking",
      "description": {
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#Locking",
        "fct-type": "unknown",
        "title": "Locking"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "Locking",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Locking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:addLocking",
      "description": {
        "fct-descr": "Add lock to object to ensure it's proper use in concurrent threads\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "h -\u003e IO (WithLocking h)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#addLocking",
        "fct-type": "unknown",
        "title": "addLocking"
      },
      "index": {
        "description": "Add lock to object to ensure it proper use in concurrent threads",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "addLocking",
        "normalized": "a-\u003eIO(WithLocking a)",
        "package": "ArrayRef",
        "partial": "Locking",
        "signature": "h-\u003eIO(WithLocking h)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock1",
      "description": {
        "fct-descr": "Lift 1-parameter action to operation on locked variable\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "(h -\u003e IO a) -\u003e lh -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock1",
        "fct-type": "unknown",
        "title": "liftLock1"
      },
      "index": {
        "description": "Lift parameter action to operation on locked variable",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "liftLock1",
        "normalized": "(a-\u003eIO b)-\u003ec-\u003eIO b",
        "package": "ArrayRef",
        "partial": "Lock",
        "signature": "(h-\u003eIO a)-\u003elh-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock2",
      "description": {
        "fct-descr": "Lift 2-parameter action to operation on locked variable\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "(h -\u003e t -\u003e IO a) -\u003e lh -\u003e t -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock2",
        "fct-type": "unknown",
        "title": "liftLock2"
      },
      "index": {
        "description": "Lift parameter action to operation on locked variable",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "liftLock2",
        "normalized": "(a-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eIO c",
        "package": "ArrayRef",
        "partial": "Lock",
        "signature": "(h-\u003et-\u003eIO a)-\u003elh-\u003et-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock3",
      "description": {
        "fct-descr": "Lift 3-parameter action to operation on locked variable\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "(h -\u003e t -\u003e t1 -\u003e IO a) -\u003e lh -\u003e t -\u003e t1 -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock3",
        "fct-type": "unknown",
        "title": "liftLock3"
      },
      "index": {
        "description": "Lift parameter action to operation on locked variable",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "liftLock3",
        "normalized": "(a-\u003eb-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eb-\u003eIO c",
        "package": "ArrayRef",
        "partial": "Lock",
        "signature": "(h-\u003et-\u003et-\u003eIO a)-\u003elh-\u003et-\u003et-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock4",
      "description": {
        "fct-descr": "Lift 4-parameter action to operation on locked variable\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "(h -\u003e t -\u003e t1 -\u003e t2 -\u003e IO a) -\u003e lh -\u003e t -\u003e t1 -\u003e t2 -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock4",
        "fct-type": "unknown",
        "title": "liftLock4"
      },
      "index": {
        "description": "Lift parameter action to operation on locked variable",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "liftLock4",
        "normalized": "(a-\u003eb-\u003eb-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eb-\u003eb-\u003eIO c",
        "package": "ArrayRef",
        "partial": "Lock",
        "signature": "(h-\u003et-\u003et-\u003et-\u003eIO a)-\u003elh-\u003et-\u003et-\u003et-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:liftLock5",
      "description": {
        "fct-descr": "Lift 5-parameter action to operation on locked variable\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "(h -\u003e t -\u003e t1 -\u003e t2 -\u003e t3 -\u003e IO a) -\u003e lh -\u003e t -\u003e t1 -\u003e t2 -\u003e t3 -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#liftLock5",
        "fct-type": "unknown",
        "title": "liftLock5"
      },
      "index": {
        "description": "Lift parameter action to operation on locked variable",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "liftLock5",
        "normalized": "(a-\u003eb-\u003eb-\u003eb-\u003eb-\u003eIO c)-\u003ed-\u003eb-\u003eb-\u003eb-\u003eb-\u003eIO c",
        "package": "ArrayRef",
        "partial": "Lock",
        "signature": "(h-\u003et-\u003et-\u003et-\u003et-\u003eIO a)-\u003elh-\u003et-\u003et-\u003et-\u003et-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:lock",
      "description": {
        "fct-descr": "Perform action while exclusively locking wrapped object\n (faster analog of using \u003ctt\u003e\u003ca\u003ewithMVar\u003c/a\u003e\u003c/tt\u003e for the same purpose)\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "lh -\u003e (h -\u003e IO a) -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#lock",
        "fct-type": "unknown",
        "title": "lock"
      },
      "index": {
        "description": "Perform action while exclusively locking wrapped object faster analog of using withMVar for the same purpose",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "lock",
        "normalized": "a-\u003e(b-\u003eIO c)-\u003eIO c",
        "package": "ArrayRef",
        "partial": "",
        "signature": "lh-\u003e(h-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Concurrent-LockingBZ.html#v:withLocking",
      "description": {
        "fct-descr": "Run \u003ctt\u003eaction\u003c/tt\u003e with locked version of object\n",
        "fct-module": "Control.Concurrent.LockingBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "h -\u003e (WithLocking h -\u003e IO a) -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Control-Concurrent-LockingBZ.html#withLocking",
        "fct-type": "unknown",
        "title": "withLocking"
      },
      "index": {
        "description": "Run action with locked version of object",
        "hierarchy": "Control Concurrent LockingBZ",
        "module": "Control.Concurrent.LockingBZ",
        "name": "withLocking",
        "normalized": "a-\u003e(WithLocking a-\u003eIO b)-\u003eIO b",
        "package": "ArrayRef",
        "partial": "Locking",
        "signature": "h-\u003e(WithLocking h-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#t:IOSpecific",
      "description": {
        "fct-descr": "Type functions which converts universal ST or IO types to IO-specific ones\n",
        "fct-module": "Control.Monad.STorIO",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific",
        "fct-type": "unknown",
        "title": "IOSpecific"
      },
      "index": {
        "description": "Type functions which converts universal ST or IO types to IO-specific ones",
        "hierarchy": "Control Monad STorIO",
        "module": "Control.Monad.STorIO",
        "name": "IOSpecific",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOSpecific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#t:IOSpecific2",
      "description": {
        "fct-module": "Control.Monad.STorIO",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific2",
        "fct-type": "unknown",
        "title": "IOSpecific2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STorIO",
        "module": "Control.Monad.STorIO",
        "name": "IOSpecific2",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOSpecific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#t:IOSpecific3",
      "description": {
        "fct-module": "Control.Monad.STorIO",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific3",
        "fct-type": "unknown",
        "title": "IOSpecific3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STorIO",
        "module": "Control.Monad.STorIO",
        "name": "IOSpecific3",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOSpecific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#v:STorIO",
      "description": {
        "fct-module": "Control.Monad.STorIO",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#STorIO",
        "fct-type": "unknown",
        "title": "STorIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STorIO",
        "module": "Control.Monad.STorIO",
        "name": "STorIO",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STor IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Control-Monad-STorIO.html#v:mLift",
      "description": {
        "fct-module": "Control.Monad.STorIO",
        "fct-package": "ArrayRef",
        "fct-signature": "(State# s -\u003e (#State# s, a#)) -\u003e m a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#mLift",
        "fct-type": "unknown",
        "title": "mLift"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad STorIO",
        "module": "Control.Monad.STorIO",
        "name": "mLift",
        "normalized": "(State # a-\u003e(#State # a,b #))-\u003ec b",
        "package": "ArrayRef",
        "partial": "Lift",
        "signature": "(State # s-\u003e(#State # s,a #))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Boxed.html#t:Array",
      "description": {
        "fct-module": "Data.ArrayBZ.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#Array",
        "fct-type": "unknown",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Boxed",
        "module": "Data.ArrayBZ.Boxed",
        "name": "Array",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Boxed.html#t:IOArray",
      "description": {
        "fct-descr": "Boxed mutable arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#IOArray",
        "fct-type": "unknown",
        "title": "IOArray"
      },
      "index": {
        "description": "Boxed mutable arrays in IO monad",
        "hierarchy": "Data ArrayBZ Boxed",
        "module": "Data.ArrayBZ.Boxed",
        "name": "IOArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Boxed.html#t:STArray",
      "description": {
        "fct-descr": "Boxed mutable arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#STArray",
        "fct-type": "unknown",
        "title": "STArray"
      },
      "index": {
        "description": "Boxed mutable arrays in ST monad",
        "hierarchy": "Data ArrayBZ Boxed",
        "module": "Data.ArrayBZ.Boxed",
        "name": "STArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#t:DiffArray",
      "description": {
        "fct-descr": "Fully polymorphic lazy boxed diff array.\n",
        "fct-module": "Data.ArrayBZ.Diff",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#DiffArray",
        "fct-type": "unknown",
        "title": "DiffArray"
      },
      "index": {
        "description": "Fully polymorphic lazy boxed diff array",
        "hierarchy": "Data ArrayBZ Diff",
        "module": "Data.ArrayBZ.Diff",
        "name": "DiffArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Diff Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#t:DiffUArray",
      "description": {
        "fct-descr": "Strict unboxed diff array, working only for elements\n of primitive types but more compact and usually faster than \u003ctt\u003e\u003ca\u003eDiffArray\u003c/a\u003e\u003c/tt\u003e.\nModule \u003ca\u003eData.ArrayBZ.Internals.IArray\u003c/a\u003e provides the interface\n of diff arrays. They are instances of class \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e.\nThese are really internal functions, but you will need them\n to make further \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e instances of various diff array types\n (for either more \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e types or more unboxed element types).\n",
        "fct-module": "Data.ArrayBZ.Diff",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#DiffUArray",
        "fct-type": "unknown",
        "title": "DiffUArray"
      },
      "index": {
        "description": "Strict unboxed diff array working only for elements of primitive types but more compact and usually faster than DiffArray Module Data.ArrayBZ.Internals.IArray provides the interface of diff arrays They are instances of class IArray These are really internal functions but you will need them to make further IArray instances of various diff array types for either more MArray types or more unboxed element types",
        "hierarchy": "Data ArrayBZ Diff",
        "module": "Data.ArrayBZ.Diff",
        "name": "DiffUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Diff UArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#t:IOToDiffArray",
      "description": {
        "fct-descr": "Type synonyms for the two most important IO array types.\n",
        "fct-module": "Data.ArrayBZ.Diff",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#IOToDiffArray",
        "fct-type": "unknown",
        "title": "IOToDiffArray"
      },
      "index": {
        "description": "Type synonyms for the two most important IO array types",
        "hierarchy": "Data ArrayBZ Diff",
        "module": "Data.ArrayBZ.Diff",
        "name": "IOToDiffArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOTo Diff Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#v:newDiffArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Diff",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#newDiffArray",
        "fct-type": "unknown",
        "title": "newDiffArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Diff",
        "module": "Data.ArrayBZ.Diff",
        "name": "newDiffArray",
        "normalized": "(a,a)-\u003e[(Int,b)]-\u003eIO(IOToDiffArray c a b)",
        "package": "ArrayRef",
        "partial": "Diff Array",
        "signature": "(i,i)-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#v:readDiffArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Diff",
        "fct-package": "ArrayRef",
        "fct-signature": "IOToDiffArray a i e -\u003e Int -\u003e IO e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#readDiffArray",
        "fct-type": "unknown",
        "title": "readDiffArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Diff",
        "module": "Data.ArrayBZ.Diff",
        "name": "readDiffArray",
        "normalized": "IOToDiffArray a b c-\u003eInt-\u003eIO c",
        "package": "ArrayRef",
        "partial": "Diff Array",
        "signature": "IOToDiffArray a i e-\u003eInt-\u003eIO e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Diff.html#v:replaceDiffArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Diff",
        "fct-package": "ArrayRef",
        "fct-signature": "IOToDiffArray a i e -\u003e [(Int, e)] -\u003e IO (IOToDiffArray a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Diff.html#replaceDiffArray",
        "fct-type": "unknown",
        "title": "replaceDiffArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Diff",
        "module": "Data.ArrayBZ.Diff",
        "name": "replaceDiffArray",
        "normalized": "IOToDiffArray a b c-\u003e[(Int,c)]-\u003eIO(IOToDiffArray a b c)",
        "package": "ArrayRef",
        "partial": "Diff Array",
        "signature": "IOToDiffArray a i e-\u003e[(Int,e)]-\u003eIO(IOToDiffArray a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:Dynamic",
      "description": {
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#Dynamic",
        "fct-type": "unknown",
        "title": "Dynamic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "Dynamic",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicIO",
      "description": {
        "fct-descr": "Dynamic arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicIO",
        "fct-type": "unknown",
        "title": "DynamicIO"
      },
      "index": {
        "description": "Dynamic arrays in IO monad",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "DynamicIO",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicIOArray",
      "description": {
        "fct-descr": "Dynamic version of IOArray\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicIOArray",
        "fct-type": "unknown",
        "title": "DynamicIOArray"
      },
      "index": {
        "description": "Dynamic version of IOArray",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "DynamicIOArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic IOArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicIOUArray",
      "description": {
        "fct-descr": "Dynamic version of IOUArray\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicIOUArray",
        "fct-type": "unknown",
        "title": "DynamicIOUArray"
      },
      "index": {
        "description": "Dynamic version of IOUArray",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "DynamicIOUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic IOUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicST",
      "description": {
        "fct-descr": "Dynamic arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicST",
        "fct-type": "unknown",
        "title": "DynamicST"
      },
      "index": {
        "description": "Dynamic arrays in ST monad",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "DynamicST",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicSTArray",
      "description": {
        "fct-descr": "Dynamic version of STArray\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicSTArray",
        "fct-type": "unknown",
        "title": "DynamicSTArray"
      },
      "index": {
        "description": "Dynamic version of STArray",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "DynamicSTArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic STArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:DynamicSTUArray",
      "description": {
        "fct-descr": "Dynamic version of STUArray\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#DynamicSTUArray",
        "fct-type": "unknown",
        "title": "DynamicSTUArray"
      },
      "index": {
        "description": "Dynamic version of STUArray",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "DynamicSTUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Dynamic STUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#t:GrowBoundsF",
      "description": {
        "fct-descr": "This type represents function that calculates new array bounds when it needs to grow\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#GrowBoundsF",
        "fct-type": "unknown",
        "title": "GrowBoundsF"
      },
      "index": {
        "description": "This type represents function that calculates new array bounds when it needs to grow",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "GrowBoundsF",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Grow Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:growMinimally",
      "description": {
        "fct-descr": "Grow minimally - only to include new index in array bounds. This growing\n method is compatible with any bounds type\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "(t, t) -\u003e t -\u003e (t, t)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#growMinimally",
        "fct-type": "unknown",
        "title": "growMinimally"
      },
      "index": {
        "description": "Grow minimally only to include new index in array bounds This growing method is compatible with any bounds type",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "growMinimally",
        "normalized": "(a,a)-\u003ea-\u003e(a,a)",
        "package": "ArrayRef",
        "partial": "Minimally",
        "signature": "(t,t)-\u003et-\u003e(t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:growTwoTimes",
      "description": {
        "fct-descr": "Grow number of elements at least 2 times. This growing method is compatible\n only with bounds belonging to class Num\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "(a, a) -\u003e a -\u003e (a, a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#growTwoTimes",
        "fct-type": "unknown",
        "title": "growTwoTimes"
      },
      "index": {
        "description": "Grow number of elements at least times This growing method is compatible only with bounds belonging to class Num",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "growTwoTimes",
        "normalized": "(a,a)-\u003ea-\u003e(a,a)",
        "package": "ArrayRef",
        "partial": "Two Times",
        "signature": "(a,a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:newDynamicArray",
      "description": {
        "fct-descr": "Create new dynamic array with default value for new cells set to \u003ctt\u003e\u003ca\u003einit\u003c/a\u003e\u003c/tt\u003e.\n   f is a growing strategy and may be \u003ctt\u003e\u003ca\u003enoGrow\u003c/a\u003e\u003c/tt\u003e, \u003ctt\u003e\u003ca\u003egrowMinimally\u003c/a\u003e\u003c/tt\u003e\n    or \u003ctt\u003e\u003ca\u003egrowTwoTimes\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "GrowBoundsF i -\u003e (i, i) -\u003e e -\u003e t (Dynamic r a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#newDynamicArray",
        "fct-type": "unknown",
        "title": "newDynamicArray"
      },
      "index": {
        "description": "Create new dynamic array with default value for new cells set to init is growing strategy and may be noGrow growMinimally or growTwoTimes",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "newDynamicArray",
        "normalized": "GrowBoundsF a-\u003e(a,a)-\u003eb-\u003ec(Dynamic d e a b)",
        "package": "ArrayRef",
        "partial": "Dynamic Array",
        "signature": "GrowBoundsF i-\u003e(i,i)-\u003ee-\u003et(Dynamic r a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:newDynamicArray_",
      "description": {
        "fct-descr": "Create new dynamic array where all new cells will remain uninitialized.\n   f is a growing strategy and may be \u003ctt\u003e\u003ca\u003enoGrow\u003c/a\u003e\u003c/tt\u003e, \u003ctt\u003e\u003ca\u003egrowMinimally\u003c/a\u003e\u003c/tt\u003e\n    or \u003ctt\u003e\u003ca\u003egrowTwoTimes\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "GrowBoundsF i -\u003e (i, i) -\u003e t (Dynamic r a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#newDynamicArray_",
        "fct-type": "unknown",
        "title": "newDynamicArray_"
      },
      "index": {
        "description": "Create new dynamic array where all new cells will remain uninitialized is growing strategy and may be noGrow growMinimally or growTwoTimes",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "newDynamicArray_",
        "normalized": "GrowBoundsF a-\u003e(a,a)-\u003eb(Dynamic c d a e)",
        "package": "ArrayRef",
        "partial": "Dynamic Array",
        "signature": "GrowBoundsF i-\u003e(i,i)-\u003et(Dynamic r a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:noGrow",
      "description": {
        "fct-descr": "No automatic growing at all. This \u003ca\u003egrowing\u003c/a\u003e method is compatible with any\n bounds type\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "t -\u003e t1 -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#noGrow",
        "fct-type": "unknown",
        "title": "noGrow"
      },
      "index": {
        "description": "No automatic growing at all This growing method is compatible with any bounds type",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "noGrow",
        "normalized": "a-\u003ea-\u003eb",
        "package": "ArrayRef",
        "partial": "Grow",
        "signature": "t-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Dynamic.html#v:resizeDynamicArray",
      "description": {
        "fct-descr": "Extend/shrink dynamic array to new bounds\n",
        "fct-module": "Data.ArrayBZ.Dynamic",
        "fct-package": "ArrayRef",
        "fct-signature": "Dynamic t1 a i t -\u003e (i, i) -\u003e t2 ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Dynamic.html#resizeDynamicArray",
        "fct-type": "unknown",
        "title": "resizeDynamicArray"
      },
      "index": {
        "description": "Extend shrink dynamic array to new bounds",
        "hierarchy": "Data ArrayBZ Dynamic",
        "module": "Data.ArrayBZ.Dynamic",
        "name": "resizeDynamicArray",
        "normalized": "Dynamic a b c a-\u003e(c,c)-\u003ea()",
        "package": "ArrayRef",
        "partial": "Dynamic Array",
        "signature": "Dynamic t a i t-\u003e(i,i)-\u003et()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#t:Array",
      "description": {
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#Array",
        "fct-type": "unknown",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "Array",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:!",
      "description": {
        "fct-descr": "Returns the element of an immutable array at the specified index.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e i -\u003e e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#%21",
        "fct-type": "unknown",
        "title": "!"
      },
      "index": {
        "description": "Returns the element of an immutable array at the specified index",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "!",
        "normalized": "a b c-\u003eb-\u003ec",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003ei-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v://",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an array and a list of pairs and returns an array identical to\nthe left argument except that it has been updated by the associations\nin the right argument.  For example, if m is a 1-origin, n by n matrix,\nthen \u003ctt\u003em//[((i,i), 0) | i \u003c- [1..n]]\u003c/tt\u003e is the same matrix, except with\nthe diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eAs with the \u003ctt\u003e\u003ca\u003earray\u003c/a\u003e\u003c/tt\u003e function, if any two associations in the list have\nthe same index, the value at that index is implementation-dependent.\n(In GHC, the last value specified for that index is used.\nOther implementations will also do this for unboxed arrays, but Haskell\n98 requires that for Array the value at such indices is bottom.)\n\u003c/p\u003e\u003cp\u003eFor most array types, this operation is O(\u003cem\u003en\u003c/em\u003e) where \u003cem\u003en\u003c/em\u003e is the size\nof the array.  However, the Data.Array.Diff.DiffArray type provides\nthis operation with complexity linear in the number of updates.\n\u003c/p\u003e",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [(i, e)] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#%2F%2F",
        "fct-type": "unknown",
        "title": "//"
      },
      "index": {
        "description": "Takes an array and list of pairs and returns an array identical to the left argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed As with the array function if any two associations in the list have the same index the value at that index is implementation-dependent In GHC the last value specified for that index is used Other implementations will also do this for unboxed arrays but Haskell requires that for Array the value at such indices is bottom For most array types this operation is where is the size of the array However the Data.Array.Diff.DiffArray type provides this operation with complexity linear in the number of updates",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "//",
        "normalized": "a b c-\u003e[(b,c)]-\u003ea b c",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[(i,e)]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:HasBounds",
      "description": {
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#HasBounds",
        "fct-type": "unknown",
        "title": "HasBounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "HasBounds",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Has Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:IArray",
      "description": {
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#IArray",
        "fct-type": "unknown",
        "title": "IArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "IArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:accum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ctt\u003eaccum f\u003c/tt\u003e takes an array and an association list and accumulates pairs\nfrom the list into the array with the accumulating function \u003ctt\u003ef\u003c/tt\u003e. Thus\n\u003ctt\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/tt\u003e can be defined using \u003ctt\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/tt\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \\\u003c- range b])\n\u003c/pre\u003e",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e -\u003e e' -\u003e e) -\u003e a i e -\u003e [(i, e')] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#accum",
        "fct-type": "unknown",
        "title": "accum"
      },
      "index": {
        "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "accum",
        "normalized": "(a-\u003eb-\u003ea)-\u003ec d a-\u003e[(d,b)]-\u003ec d a",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(e-\u003ee'-\u003ee)-\u003ea i e-\u003e[(i,e')]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:accumArray",
      "description": {
        "fct-descr": "An accumulating function\nA default element\nThe bounds of the array\nList of associations\nReturns: the array\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "e -\u003e e' -\u003e e-\u003e e-\u003e (i, i)-\u003e [(i, e')]-\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#accumArray",
        "fct-type": "unknown",
        "title": "accumArray"
      },
      "index": {
        "description": "An accumulating function default element The bounds of the array List of associations Returns the array",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "accumArray",
        "normalized": "a-\u003eb-\u003ea-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003ed c a",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "e-\u003ee'-\u003ee-\u003ee-\u003e(i,i)-\u003e[(i,e')]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:amap",
      "description": {
        "fct-descr": "Returns a new array derived from the original array by applying a\n function to each of the elements.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e' -\u003e e) -\u003e a i e' -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#amap",
        "fct-type": "unknown",
        "title": "amap"
      },
      "index": {
        "description": "Returns new array derived from the original array by applying function to each of the elements",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "amap",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(e'-\u003ee)-\u003ea i e'-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:array",
      "description": {
        "fct-descr": "bounds of the array: (lowest,highest)\nlist of associations\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i)-\u003e [(i, e)]-\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#array",
        "fct-type": "unknown",
        "title": "array"
      },
      "index": {
        "description": "bounds of the array lowest highest list of associations",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "array",
        "normalized": "(a,a)-\u003e[(a,b)]-\u003ec a b",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(i,i)-\u003e[(i,e)]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:assocs",
      "description": {
        "fct-descr": "Returns the contents of an array as a list of associations.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [(i, e)]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#assocs",
        "fct-type": "unknown",
        "title": "assocs"
      },
      "index": {
        "description": "Returns the contents of an array as list of associations",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "assocs",
        "normalized": "a b c-\u003e[(b,c)]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[(i,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:bounds",
      "description": {
        "fct-descr": "Extracts the bounds of an array\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e (i, i)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#bounds",
        "fct-type": "unknown",
        "title": "bounds"
      },
      "index": {
        "description": "Extracts the bounds of an array",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "bounds",
        "normalized": "a b c-\u003e(b,b)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:elems",
      "description": {
        "fct-descr": "Returns a list of all the elements of an array, in the same order\n as their indices.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [e]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#elems",
        "fct-type": "unknown",
        "title": "elems"
      },
      "index": {
        "description": "Returns list of all the elements of an array in the same order as their indices",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "elems",
        "normalized": "a b c-\u003e[c]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:indices",
      "description": {
        "fct-descr": "Returns a list of all the valid indices in an array.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [i]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#indices",
        "fct-type": "unknown",
        "title": "indices"
      },
      "index": {
        "description": "Returns list of all the valid indices in an array",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "indices",
        "normalized": "a b c-\u003e[b]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:ixmap",
      "description": {
        "fct-descr": "Returns a new array derived from the original array by applying a\n function to each of the indices.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#ixmap",
        "fct-type": "unknown",
        "title": "ixmap"
      },
      "index": {
        "description": "Returns new array derived from the original array by applying function to each of the indices",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "ixmap",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ec a d",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IArray.html#v:listArray",
      "description": {
        "fct-descr": "Constructs an immutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n",
        "fct-module": "Data.ArrayBZ.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e [e] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#listArray",
        "fct-type": "unknown",
        "title": "listArray"
      },
      "index": {
        "description": "Constructs an immutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
        "hierarchy": "Data ArrayBZ IArray",
        "module": "Data.ArrayBZ.IArray",
        "name": "listArray",
        "normalized": "(a,a)-\u003e[b]-\u003ec a b",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003e[e]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#t:IOArray",
      "description": {
        "fct-descr": "Boxed mutable arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.IO",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#IOArray",
        "fct-type": "unknown",
        "title": "IOArray"
      },
      "index": {
        "description": "Boxed mutable arrays in IO monad",
        "hierarchy": "Data ArrayBZ IO",
        "module": "Data.ArrayBZ.IO",
        "name": "IOArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#t:IOUArray",
      "description": {
        "fct-descr": "Unboxed mutable arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.IO",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#IOUArray",
        "fct-type": "unknown",
        "title": "IOUArray"
      },
      "index": {
        "description": "Unboxed mutable arrays in IO monad",
        "hierarchy": "Data ArrayBZ IO",
        "module": "Data.ArrayBZ.IO",
        "name": "IOUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:castIOUArray",
      "description": {
        "fct-descr": "Casts an \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
        "fct-module": "Data.ArrayBZ.IO",
        "fct-package": "ArrayRef",
        "fct-signature": "IOUArray i e -\u003e IOUArray i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castIOUArray",
        "fct-type": "unknown",
        "title": "castIOUArray"
      },
      "index": {
        "description": "Casts an IOUArray with one element type into IOUArray with different element type upper bound is recalculated",
        "hierarchy": "Data ArrayBZ IO",
        "module": "Data.ArrayBZ.IO",
        "name": "castIOUArray",
        "normalized": "IOUArray a b-\u003eIOUArray a c",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": "IOUArray i e-\u003eIOUArray i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:hGetArray",
      "description": {
        "fct-descr": "Handle to read from\nArray in which to place the values\nNumber of \u003ctt\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/tt\u003es to read\nReturns: the number of \u003ctt\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/tt\u003es actually\n read, which might be smaller than the number requested\n if the end of file was reached.\n",
        "fct-module": "Data.ArrayBZ.IO",
        "fct-package": "ArrayRef",
        "fct-signature": "Handle-\u003e IOUArray Int Word8-\u003e Int-\u003e IO Int",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-IO.html#hGetArray",
        "fct-type": "unknown",
        "title": "hGetArray"
      },
      "index": {
        "description": "Handle to read from Array in which to place the values Number of Word8 to read Returns the number of Word8 actually read which might be smaller than the number requested if the end of file was reached",
        "hierarchy": "Data ArrayBZ IO",
        "module": "Data.ArrayBZ.IO",
        "name": "hGetArray",
        "normalized": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO Int",
        "package": "ArrayRef",
        "partial": "Get Array",
        "signature": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-IO.html#v:hPutArray",
      "description": {
        "fct-descr": "Handle to write to\nArray to write from\nNumber of \u003ctt\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/tt\u003es to write\n",
        "fct-module": "Data.ArrayBZ.IO",
        "fct-package": "ArrayRef",
        "fct-signature": "Handle-\u003e IOUArray Int Word8-\u003e Int-\u003e IO ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-IO.html#hPutArray",
        "fct-type": "unknown",
        "title": "hPutArray"
      },
      "index": {
        "description": "Handle to write to Array to write from Number of Word8 to write",
        "hierarchy": "Data ArrayBZ IO",
        "module": "Data.ArrayBZ.IO",
        "name": "hPutArray",
        "normalized": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO()",
        "package": "ArrayRef",
        "partial": "Put Array",
        "signature": "Handle-\u003eIOUArray Int Word-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:Array",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#Array",
        "fct-type": "unknown",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "Array",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:BoxedMutableArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#BoxedMutableArray",
        "fct-type": "unknown",
        "title": "BoxedMutableArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "BoxedMutableArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Boxed Mutable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:IOArray",
      "description": {
        "fct-descr": "Boxed mutable arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#IOArray",
        "fct-type": "unknown",
        "title": "IOArray"
      },
      "index": {
        "description": "Boxed mutable arrays in IO monad",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "IOArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#t:STArray",
      "description": {
        "fct-descr": "Boxed mutable arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#STArray",
        "fct-type": "unknown",
        "title": "STArray"
      },
      "index": {
        "description": "Boxed mutable arrays in ST monad",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "STArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:doAccum",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "(t1 -\u003e t -\u003e t1) -\u003e [(Int, t)] -\u003e a i t1 -\u003e t2 ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#doAccum",
        "fct-type": "unknown",
        "title": "doAccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "doAccum",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(Int,a)]-\u003eb c a-\u003ea()",
        "package": "ArrayRef",
        "partial": "Accum",
        "signature": "(t-\u003et-\u003et)-\u003e[(Int,t)]-\u003ea i t-\u003et()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:doReplace",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "[(Int, e)] -\u003e a i e -\u003e t ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#doReplace",
        "fct-type": "unknown",
        "title": "doReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "doReplace",
        "normalized": "[(Int,a)]-\u003eb c a-\u003ed()",
        "package": "ArrayRef",
        "partial": "Replace",
        "signature": "[(Int,e)]-\u003ea i e-\u003et()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:freezeBA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "BoxedMutableArray t t1 t2 -\u003e t3 (Array t1 t2)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#freezeBA",
        "fct-type": "unknown",
        "title": "freezeBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "freezeBA",
        "normalized": "BoxedMutableArray a a a-\u003ea(Array a a)",
        "package": "ArrayRef",
        "partial": "BA",
        "signature": "BoxedMutableArray t t t-\u003et(Array t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:freezeIOArray",
      "description": {
        "fct-descr": "Freeze/thaw rules for IOArray\n",
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOArray i e -\u003e IO (Array i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#freezeIOArray",
        "fct-type": "unknown",
        "title": "freezeIOArray"
      },
      "index": {
        "description": "Freeze thaw rules for IOArray",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "freezeIOArray",
        "normalized": "IOArray a b-\u003eIO(Array a b)",
        "package": "ArrayRef",
        "partial": "IOArray",
        "signature": "IOArray i e-\u003eIO(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:freezeSTArray",
      "description": {
        "fct-descr": "Freeze/thaw rules for STArray\n",
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STArray s i e -\u003e ST s (Array i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#freezeSTArray",
        "fct-type": "unknown",
        "title": "freezeSTArray"
      },
      "index": {
        "description": "Freeze thaw rules for STArray",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "freezeSTArray",
        "normalized": "STArray a b c-\u003eST a(Array b c)",
        "package": "ArrayRef",
        "partial": "STArray",
        "signature": "STArray s i e-\u003eST s(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:iOArrayTc",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#iOArrayTc",
        "fct-type": "unknown",
        "title": "iOArrayTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "iOArrayTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "OArray Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:sizeOfBA",
      "description": {
        "fct-descr": "Number of array elements\n",
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "a a1 e -\u003e Int",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#sizeOfBA",
        "fct-type": "unknown",
        "title": "sizeOfBA"
      },
      "index": {
        "description": "Number of array elements",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "sizeOfBA",
        "normalized": "a a b-\u003eInt",
        "package": "ArrayRef",
        "partial": "Of BA",
        "signature": "a a e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:stArrayTc",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#stArrayTc",
        "fct-type": "unknown",
        "title": "stArrayTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "stArrayTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Array Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:thawBA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array t t1 -\u003e t2 (BoxedMutableArray s t t1)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#thawBA",
        "fct-type": "unknown",
        "title": "thawBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "thawBA",
        "normalized": "Array a a-\u003ea(BoxedMutableArray b a a)",
        "package": "ArrayRef",
        "partial": "BA",
        "signature": "Array t t-\u003et(BoxedMutableArray s t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:thawIOArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array i e -\u003e IO (IOArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#thawIOArray",
        "fct-type": "unknown",
        "title": "thawIOArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "thawIOArray",
        "normalized": "Array a b-\u003eIO(IOArray a b)",
        "package": "ArrayRef",
        "partial": "IOArray",
        "signature": "Array i e-\u003eIO(IOArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:thawSTArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array i e -\u003e ST s (STArray s i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#thawSTArray",
        "fct-type": "unknown",
        "title": "thawSTArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "thawSTArray",
        "normalized": "Array a b-\u003eST c(STArray c a b)",
        "package": "ArrayRef",
        "partial": "STArray",
        "signature": "Array i e-\u003eST s(STArray s i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeFreezeBA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "BoxedMutableArray t1 t t2 -\u003e t3 (Array t t2)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeFreezeBA",
        "fct-type": "unknown",
        "title": "unsafeFreezeBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "unsafeFreezeBA",
        "normalized": "BoxedMutableArray a a a-\u003ea(Array a a)",
        "package": "ArrayRef",
        "partial": "Freeze BA",
        "signature": "BoxedMutableArray t t t-\u003et(Array t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeFreezeIOArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOArray i e -\u003e IO (Array i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeFreezeIOArray",
        "fct-type": "unknown",
        "title": "unsafeFreezeIOArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "unsafeFreezeIOArray",
        "normalized": "IOArray a b-\u003eIO(Array a b)",
        "package": "ArrayRef",
        "partial": "Freeze IOArray",
        "signature": "IOArray i e-\u003eIO(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeFreezeSTArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STArray s i e -\u003e ST s (Array i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeFreezeSTArray",
        "fct-type": "unknown",
        "title": "unsafeFreezeSTArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "unsafeFreezeSTArray",
        "normalized": "STArray a b c-\u003eST a(Array b c)",
        "package": "ArrayRef",
        "partial": "Freeze STArray",
        "signature": "STArray s i e-\u003eST s(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeThawBA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array t t1 -\u003e t2 (BoxedMutableArray s t t1)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeThawBA",
        "fct-type": "unknown",
        "title": "unsafeThawBA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "unsafeThawBA",
        "normalized": "Array a a-\u003ea(BoxedMutableArray b a a)",
        "package": "ArrayRef",
        "partial": "Thaw BA",
        "signature": "Array t t-\u003et(BoxedMutableArray s t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeThawIOArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array i e -\u003e IO (IOArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeThawIOArray",
        "fct-type": "unknown",
        "title": "unsafeThawIOArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "unsafeThawIOArray",
        "normalized": "Array a b-\u003eIO(IOArray a b)",
        "package": "ArrayRef",
        "partial": "Thaw IOArray",
        "signature": "Array i e-\u003eIO(IOArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:unsafeThawSTArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array i e -\u003e ST s (STArray s i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#unsafeThawSTArray",
        "fct-type": "unknown",
        "title": "unsafeThawSTArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "unsafeThawSTArray",
        "normalized": "Array a b-\u003eST c(STArray c a b)",
        "package": "ArrayRef",
        "partial": "Thaw STArray",
        "signature": "Array i e-\u003eST s(STArray s i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:withArrayCopy",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "Array t t1 -\u003e (BoxedMutableArray s t t1 -\u003e t2 t3) -\u003e t2 (Array t t1)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#withArrayCopy",
        "fct-type": "unknown",
        "title": "withArrayCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "withArrayCopy",
        "normalized": "Array a a-\u003e(BoxedMutableArray b a a-\u003ea a)-\u003ea(Array a a)",
        "package": "ArrayRef",
        "partial": "Array Copy",
        "signature": "Array t t-\u003e(BoxedMutableArray s t t-\u003et t)-\u003et(Array t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Boxed.html#v:withNewArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Boxed",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e e -\u003e (BoxedMutableArray t2 i e -\u003e t t1) -\u003e t (Array i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#withNewArray",
        "fct-type": "unknown",
        "title": "withNewArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Boxed",
        "module": "Data.ArrayBZ.Internals.Boxed",
        "name": "withNewArray",
        "normalized": "(a,a)-\u003eb-\u003e(BoxedMutableArray c a b-\u003ec c)-\u003ec(Array a b)",
        "package": "ArrayRef",
        "partial": "New Array",
        "signature": "(i,i)-\u003ee-\u003e(BoxedMutableArray t i e-\u003et t)-\u003et(Array i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:!",
      "description": {
        "fct-descr": "Returns the element of an immutable array at the specified index.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e i -\u003e e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#%21",
        "fct-type": "unknown",
        "title": "!"
      },
      "index": {
        "description": "Returns the element of an immutable array at the specified index",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "!",
        "normalized": "a b c-\u003eb-\u003ec",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003ei-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v://",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an array and a list of pairs and returns an array identical to\nthe left argument except that it has been updated by the associations\nin the right argument.  For example, if m is a 1-origin, n by n matrix,\nthen \u003ctt\u003em//[((i,i), 0) | i \u003c- [1..n]]\u003c/tt\u003e is the same matrix, except with\nthe diagonal zeroed.\n\u003c/p\u003e\u003cp\u003eAs with the \u003ctt\u003e\u003ca\u003earray\u003c/a\u003e\u003c/tt\u003e function, if any two associations in the list have\nthe same index, the value at that index is implementation-dependent.\n(In GHC, the last value specified for that index is used.\nOther implementations will also do this for unboxed arrays, but Haskell\n98 requires that for Array the value at such indices is bottom.)\n\u003c/p\u003e\u003cp\u003eFor most array types, this operation is O(\u003cem\u003en\u003c/em\u003e) where \u003cem\u003en\u003c/em\u003e is the size\nof the array.  However, the Data.Array.Diff.DiffArray type provides\nthis operation with complexity linear in the number of updates.\n\u003c/p\u003e",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [(i, e)] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#%2F%2F",
        "fct-type": "unknown",
        "title": "//"
      },
      "index": {
        "description": "Takes an array and list of pairs and returns an array identical to the left argument except that it has been updated by the associations in the right argument For example if is origin by matrix then is the same matrix except with the diagonal zeroed As with the array function if any two associations in the list have the same index the value at that index is implementation-dependent In GHC the last value specified for that index is used Other implementations will also do this for unboxed arrays but Haskell requires that for Array the value at such indices is bottom For most array types this operation is where is the size of the array However the Data.Array.Diff.DiffArray type provides this operation with complexity linear in the number of updates",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "//",
        "normalized": "a b c-\u003e[(b,c)]-\u003ea b c",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[(i,e)]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:HasBounds",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#HasBounds",
        "fct-type": "unknown",
        "title": "HasBounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "HasBounds",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Has Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:IArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#IArray",
        "fct-type": "unknown",
        "title": "IArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "IArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:accum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ctt\u003eaccum f\u003c/tt\u003e takes an array and an association list and accumulates pairs\nfrom the list into the array with the accumulating function \u003ctt\u003ef\u003c/tt\u003e. Thus\n\u003ctt\u003e\u003ca\u003eaccumArray\u003c/a\u003e\u003c/tt\u003e can be defined using \u003ctt\u003e\u003ca\u003eaccum\u003c/a\u003e\u003c/tt\u003e:\n\u003c/p\u003e\u003cpre\u003e accumArray f z b = accum f (array b [(i, z) | i \\\u003c- range b])\n\u003c/pre\u003e",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e -\u003e e' -\u003e e) -\u003e a i e -\u003e [(i, e')] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#accum",
        "fct-type": "unknown",
        "title": "accum"
      },
      "index": {
        "description": "accum takes an array and an association list and accumulates pairs from the list into the array with the accumulating function Thus accumArray can be defined using accum accumArray accum array range",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "accum",
        "normalized": "(a-\u003eb-\u003ea)-\u003ec d a-\u003e[(d,b)]-\u003ec d a",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(e-\u003ee'-\u003ee)-\u003ea i e-\u003e[(i,e')]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:accumArray",
      "description": {
        "fct-descr": "An accumulating function\nA default element\nThe bounds of the array\nList of associations\nReturns: the array\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "e -\u003e e' -\u003e e-\u003e e-\u003e (i, i)-\u003e [(i, e')]-\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#accumArray",
        "fct-type": "unknown",
        "title": "accumArray"
      },
      "index": {
        "description": "An accumulating function default element The bounds of the array List of associations Returns the array",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "accumArray",
        "normalized": "a-\u003eb-\u003ea-\u003ea-\u003e(c,c)-\u003e[(c,b)]-\u003ed c a",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "e-\u003ee'-\u003ee-\u003ee-\u003e(i,i)-\u003e[(i,e')]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:amap",
      "description": {
        "fct-descr": "Returns a new array derived from the original array by applying a\n function to each of the elements.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e' -\u003e e) -\u003e a i e' -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#amap",
        "fct-type": "unknown",
        "title": "amap"
      },
      "index": {
        "description": "Returns new array derived from the original array by applying function to each of the elements",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "amap",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(e'-\u003ee)-\u003ea i e'-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:array",
      "description": {
        "fct-descr": "bounds of the array: (lowest,highest)\nlist of associations\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i)-\u003e [(i, e)]-\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#array",
        "fct-type": "unknown",
        "title": "array"
      },
      "index": {
        "description": "bounds of the array lowest highest list of associations",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "array",
        "normalized": "(a,a)-\u003e[(a,b)]-\u003ec a b",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(i,i)-\u003e[(i,e)]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:assocs",
      "description": {
        "fct-descr": "Returns the contents of an array as a list of associations.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [(i, e)]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#assocs",
        "fct-type": "unknown",
        "title": "assocs"
      },
      "index": {
        "description": "Returns the contents of an array as list of associations",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "assocs",
        "normalized": "a b c-\u003e[(b,c)]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[(i,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:bounds",
      "description": {
        "fct-descr": "Extracts the bounds of an array\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e (i, i)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#bounds",
        "fct-type": "unknown",
        "title": "bounds"
      },
      "index": {
        "description": "Extracts the bounds of an array",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "bounds",
        "normalized": "a b c-\u003e(b,b)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:cmpIArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e a i e -\u003e Ordering",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#cmpIArray",
        "fct-type": "unknown",
        "title": "cmpIArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "cmpIArray",
        "normalized": "a b c-\u003ea b c-\u003eOrdering",
        "package": "ArrayRef",
        "partial": "IArray",
        "signature": "a i e-\u003ea i e-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:cmpIntIArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a Int e -\u003e a Int e -\u003e Ordering",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#cmpIntIArray",
        "fct-type": "unknown",
        "title": "cmpIntIArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "cmpIntIArray",
        "normalized": "a Int b-\u003ea Int b-\u003eOrdering",
        "package": "ArrayRef",
        "partial": "Int IArray",
        "signature": "a Int e-\u003ea Int e-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:elems",
      "description": {
        "fct-descr": "Returns a list of all the elements of an array, in the same order\n as their indices.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [e]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#elems",
        "fct-type": "unknown",
        "title": "elems"
      },
      "index": {
        "description": "Returns list of all the elements of an array in the same order as their indices",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "elems",
        "normalized": "a b c-\u003e[c]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:eqIArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e a i e -\u003e Bool",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#eqIArray",
        "fct-type": "unknown",
        "title": "eqIArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "eqIArray",
        "normalized": "a b c-\u003ea b c-\u003eBool",
        "package": "ArrayRef",
        "partial": "IArray",
        "signature": "a i e-\u003ea i e-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:indices",
      "description": {
        "fct-descr": "Returns a list of all the valid indices in an array.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [i]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#indices",
        "fct-type": "unknown",
        "title": "indices"
      },
      "index": {
        "description": "Returns list of all the valid indices in an array",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "indices",
        "normalized": "a b c-\u003e[b]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:ixmap",
      "description": {
        "fct-descr": "Returns a new array derived from the original array by applying a\n function to each of the indices.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#ixmap",
        "fct-type": "unknown",
        "title": "ixmap"
      },
      "index": {
        "description": "Returns new array derived from the original array by applying function to each of the indices",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "ixmap",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ec a d",
        "package": "ArrayRef",
        "partial": "",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:listArray",
      "description": {
        "fct-descr": "Constructs an immutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n",
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e [e] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#listArray",
        "fct-type": "unknown",
        "title": "listArray"
      },
      "index": {
        "description": "Constructs an immutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "listArray",
        "normalized": "(a,a)-\u003e[b]-\u003ec a b",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003e[e]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:showsIArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "Int -\u003e a i e -\u003e ShowS",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#showsIArray",
        "fct-type": "unknown",
        "title": "showsIArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "showsIArray",
        "normalized": "Int-\u003ea b c-\u003eShowS",
        "package": "ArrayRef",
        "partial": "IArray",
        "signature": "Int-\u003ea i e-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeAccum",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e -\u003e e' -\u003e e) -\u003e a i e -\u003e [(Int, e')] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeAccum",
        "fct-type": "unknown",
        "title": "unsafeAccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "unsafeAccum",
        "normalized": "(a-\u003eb-\u003ea)-\u003ec d a-\u003e[(Int,b)]-\u003ec d a",
        "package": "ArrayRef",
        "partial": "Accum",
        "signature": "(e-\u003ee'-\u003ee)-\u003ea i e-\u003e[(Int,e')]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeAccumArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e -\u003e e' -\u003e e) -\u003e e -\u003e (i, i) -\u003e [(Int, e')] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeAccumArray",
        "fct-type": "unknown",
        "title": "unsafeAccumArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "unsafeAccumArray",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(c,c)-\u003e[(Int,b)]-\u003ed c a",
        "package": "ArrayRef",
        "partial": "Accum Array",
        "signature": "(e-\u003ee'-\u003ee)-\u003ee-\u003e(i,i)-\u003e[(Int,e')]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e [(Int, e)] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeArray",
        "fct-type": "unknown",
        "title": "unsafeArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "unsafeArray",
        "normalized": "(a,a)-\u003e[(Int,b)]-\u003ec a b",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003e[(Int,e)]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeAt",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e Int -\u003e e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeAt",
        "fct-type": "unknown",
        "title": "unsafeAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "unsafeAt",
        "normalized": "a b c-\u003eInt-\u003ec",
        "package": "ArrayRef",
        "partial": "At",
        "signature": "a i e-\u003eInt-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-IArray.html#v:unsafeReplace",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.IArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [(Int, e)] -\u003e a i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#unsafeReplace",
        "fct-type": "unknown",
        "title": "unsafeReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals IArray",
        "module": "Data.ArrayBZ.Internals.IArray",
        "name": "unsafeReplace",
        "normalized": "a b c-\u003e[(Int,c)]-\u003ea b c",
        "package": "ArrayRef",
        "partial": "Replace",
        "signature": "a i e-\u003e[(Int,e)]-\u003ea i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:HasMutableBounds",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#HasMutableBounds",
        "fct-type": "unknown",
        "title": "HasMutableBounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "HasMutableBounds",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Has Mutable Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:MArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#MArray",
        "fct-type": "unknown",
        "title": "MArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "MArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "MArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:arrEleBottom",
      "description": {
        "fct-descr": "Value used to initialize undefined array elements\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#arrEleBottom",
        "fct-type": "unknown",
        "title": "arrEleBottom"
      },
      "index": {
        "description": "Value used to initialize undefined array elements",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "arrEleBottom",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Ele Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:freeze",
      "description": {
        "fct-descr": "Converts a mutable array (any instance of \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e) to an\n immutable array (any instance of \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e) by taking a complete\n copy of it.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#freeze",
        "fct-type": "unknown",
        "title": "freeze"
      },
      "index": {
        "description": "Converts mutable array any instance of MArray to an immutable array any instance of IArray by taking complete copy of it",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "freeze",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getAssocs",
      "description": {
        "fct-descr": "Return a list of all the associations of a mutable array, in\n index order.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m [(i, e)]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getAssocs",
        "fct-type": "unknown",
        "title": "getAssocs"
      },
      "index": {
        "description": "Return list of all the associations of mutable array in index order",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "getAssocs",
        "normalized": "a b c-\u003ed[(b,c)]",
        "package": "ArrayRef",
        "partial": "Assocs",
        "signature": "a i e-\u003em[(i,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getBounds",
      "description": {
        "fct-descr": "Get the current bounds of an array\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (i, i)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getBounds",
        "fct-type": "unknown",
        "title": "getBounds"
      },
      "index": {
        "description": "Get the current bounds of an array",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "getBounds",
        "normalized": "a b c-\u003ed(b,b)",
        "package": "ArrayRef",
        "partial": "Bounds",
        "signature": "a i e-\u003em(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getElems",
      "description": {
        "fct-descr": "Return a list of all the elements of a mutable array\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m [e]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getElems",
        "fct-type": "unknown",
        "title": "getElems"
      },
      "index": {
        "description": "Return list of all the elements of mutable array",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "getElems",
        "normalized": "a b c-\u003ed[c]",
        "package": "ArrayRef",
        "partial": "Elems",
        "signature": "a i e-\u003em[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:getIndices",
      "description": {
        "fct-descr": "Return a list of all the indexes of a mutable array\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m [i]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getIndices",
        "fct-type": "unknown",
        "title": "getIndices"
      },
      "index": {
        "description": "Return list of all the indexes of mutable array",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "getIndices",
        "normalized": "a b c-\u003ed[b]",
        "package": "ArrayRef",
        "partial": "Indices",
        "signature": "a i e-\u003em[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:mapArray",
      "description": {
        "fct-descr": "Constructs a new array derived from the original array by applying a\n function to each of the elements.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e' -\u003e e) -\u003e a i e' -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#mapArray",
        "fct-type": "unknown",
        "title": "mapArray"
      },
      "index": {
        "description": "Constructs new array derived from the original array by applying function to each of the elements",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "mapArray",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ee(c d b)",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(e'-\u003ee)-\u003ea i e'-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:mapIndices",
      "description": {
        "fct-descr": "Constructs a new array derived from the original array by applying a\n function to each of the indices.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#mapIndices",
        "fct-type": "unknown",
        "title": "mapIndices"
      },
      "index": {
        "description": "Constructs new array derived from the original array by applying function to each of the indices",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "mapIndices",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ee(c a d)",
        "package": "ArrayRef",
        "partial": "Indices",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newArray",
      "description": {
        "fct-descr": "Builds a new array, with every element initialised to the supplied\n value.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e e -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newArray",
        "fct-type": "unknown",
        "title": "newArray"
      },
      "index": {
        "description": "Builds new array with every element initialised to the supplied value",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "newArray",
        "normalized": "(a,a)-\u003eb-\u003ec(d a b)",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003ee-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newArray_",
      "description": {
        "fct-descr": "Builds a new array, with every element initialised to undefined.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newArray_",
        "fct-type": "unknown",
        "title": "newArray_"
      },
      "index": {
        "description": "Builds new array with every element initialised to undefined",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "newArray_",
        "normalized": "(a,a)-\u003eb(c a d)",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:newListArray",
      "description": {
        "fct-descr": "Constructs a mutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e [e] -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newListArray",
        "fct-type": "unknown",
        "title": "newListArray"
      },
      "index": {
        "description": "Constructs mutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "newListArray",
        "normalized": "(a,a)-\u003e[b]-\u003ec(d a b)",
        "package": "ArrayRef",
        "partial": "List Array",
        "signature": "(i,i)-\u003e[e]-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:readArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e i -\u003e m e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#readArray",
        "fct-type": "unknown",
        "title": "readArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "readArray",
        "normalized": "a b c-\u003eb-\u003ed c",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "a i e-\u003ei-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:thaw",
      "description": {
        "fct-descr": "Converts an immutable array (any instance of \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e) into a\n mutable array (any instance of \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e) by taking a complete copy\n of it.\n",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#thaw",
        "fct-type": "unknown",
        "title": "thaw"
      },
      "index": {
        "description": "Converts an immutable array any instance of IArray into mutable array any instance of MArray by taking complete copy of it",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "thaw",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an mutable array into an immutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is safe to use, therefore, if\n   the mutable version is never modified after the freeze operation.\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Data.Array.IO.IOUArray -\u003e Data.Array.Unboxed.UArray\n\u003c/li\u003e\u003cli\u003e Data.Array.ST.STUArray -\u003e Data.Array.Unboxed.UArray\n\u003c/li\u003e\u003cli\u003e Data.Array.IO.IOArray -\u003e Data.Array.Array\n\u003c/li\u003e\u003cli\u003e Data.Array.ST.STArray -\u003e Data.Array.Array\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeFreeze",
        "fct-type": "unknown",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Converts an mutable array into an immutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is safe to use therefore if the mutable version is never modified after the freeze operation The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeFreeze Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them Data.Array.IO.IOUArray Data.Array.Unboxed.UArray Data.Array.ST.STUArray Data.Array.Unboxed.UArray Data.Array.IO.IOArray Data.Array.Array Data.Array.ST.STArray Data.Array.Array",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "unsafeFreeze",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "Freeze",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeRead",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e Int -\u003e m e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeRead",
        "fct-type": "unknown",
        "title": "unsafeRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "unsafeRead",
        "normalized": "a b c-\u003eInt-\u003ed c",
        "package": "ArrayRef",
        "partial": "Read",
        "signature": "a i e-\u003eInt-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeThaw",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an immutable array into a mutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is only safe to use,\n   therefore, if the immutable array is never referenced again in this\n   thread, and there is no possibility that it can be also referenced\n   in another thread.  If you use an unsafeThaw\u003cem\u003ewrite\u003c/em\u003eunsafeFreeze\n   sequence in a multi-threaded setting, then you must ensure that\n   this sequence is atomic with respect to other threads, or a garbage\n   collector crash may result (because the write may be writing to a\n   frozen array).\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ctt\u003e\u003ca\u003eunsafeThaw\u003c/a\u003e\u003c/tt\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Data.Array.Unboxed.UArray -\u003e Data.Array.IO.IOUArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Unboxed.UArray -\u003e Data.Array.ST.STUArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Array  -\u003e Data.Array.IO.IOArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Array  -\u003e Data.Array.ST.STArray\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeThaw",
        "fct-type": "unknown",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "Converts an immutable array into mutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is only safe to use therefore if the immutable array is never referenced again in this thread and there is no possibility that it can be also referenced in another thread If you use an unsafeThaw write unsafeFreeze sequence in multi-threaded setting then you must ensure that this sequence is atomic with respect to other threads or garbage collector crash may result because the write may be writing to frozen array The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeThaw Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them Data.Array.Unboxed.UArray Data.Array.IO.IOUArray Data.Array.Unboxed.UArray Data.Array.ST.STUArray Data.Array.Array Data.Array.IO.IOArray Data.Array.Array Data.Array.ST.STArray",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "unsafeThaw",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "Thaw",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:unsafeWrite",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e Int -\u003e e -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeWrite",
        "fct-type": "unknown",
        "title": "unsafeWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "unsafeWrite",
        "normalized": "a b c-\u003eInt-\u003ec-\u003ed()",
        "package": "ArrayRef",
        "partial": "Write",
        "signature": "a i e-\u003eInt-\u003ee-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-MArray.html#v:writeArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e i -\u003e e -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#writeArray",
        "fct-type": "unknown",
        "title": "writeArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals MArray",
        "module": "Data.ArrayBZ.Internals.MArray",
        "name": "writeArray",
        "normalized": "a b c-\u003eb-\u003ec-\u003ed()",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "a i e-\u003ei-\u003ee-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:IOUArray",
      "description": {
        "fct-descr": "Unboxed mutable arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#IOUArray",
        "fct-type": "unknown",
        "title": "IOUArray"
      },
      "index": {
        "description": "Unboxed mutable arrays in IO monad",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "IOUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:STUArray",
      "description": {
        "fct-descr": "Unboxed mutable arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#STUArray",
        "fct-type": "unknown",
        "title": "STUArray"
      },
      "index": {
        "description": "Unboxed mutable arrays in ST monad",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "STUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:UArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#UArray",
        "fct-type": "unknown",
        "title": "UArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "UArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "UArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#t:UnboxedMutableArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#UnboxedMutableArray",
        "fct-type": "unknown",
        "title": "UnboxedMutableArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "UnboxedMutableArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Unboxed Mutable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castIOUArray",
      "description": {
        "fct-descr": "Casts an \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOUArray i e -\u003e IOUArray i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castIOUArray",
        "fct-type": "unknown",
        "title": "castIOUArray"
      },
      "index": {
        "description": "Casts an IOUArray with one element type into IOUArray with different element type upper bound is recalculated",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "castIOUArray",
        "normalized": "IOUArray a b-\u003eIOUArray a c",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": "IOUArray i e-\u003eIOUArray i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castSTUArray",
      "description": {
        "fct-descr": "Casts an \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STUArray s i e -\u003e STUArray s i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castSTUArray",
        "fct-type": "unknown",
        "title": "castSTUArray"
      },
      "index": {
        "description": "Casts an STUArray with one element type into STUArray with different element type upper bound is recalculated",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "castSTUArray",
        "normalized": "STUArray a b c-\u003eSTUArray a b d",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": "STUArray s i e-\u003eSTUArray s i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:castUArray",
      "description": {
        "fct-descr": "\u003cp\u003eCasts to arrays with different element type\n\u003c/p\u003e\u003cp\u003eCasts an \u003ctt\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/tt\u003e with a\n different element type. All the elements of the resulting array\n are undefined (unless you know what you're doing...).\n Upper array bound is recalculated according to elements size,\n for example UArray (1,2) Word32 -\u003e UArray (1,8) Word8\n\u003c/p\u003e",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e UArray i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castUArray",
        "fct-type": "unknown",
        "title": "castUArray"
      },
      "index": {
        "description": "Casts to arrays with different element type Casts an UArray with one element type into UArray with different element type All the elements of the resulting array are undefined unless you know what you re doing Upper array bound is recalculated according to elements size for example UArray Word32 UArray Word8",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "castUArray",
        "normalized": "UArray a b-\u003eUArray a c",
        "package": "ArrayRef",
        "partial": "UArray",
        "signature": "UArray i e-\u003eUArray i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:doAccum",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "(t1 -\u003e t -\u003e t1) -\u003e [(Int, t)] -\u003e a i t1 -\u003e t2 ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#doAccum",
        "fct-type": "unknown",
        "title": "doAccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "doAccum",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(Int,a)]-\u003eb c a-\u003ea()",
        "package": "ArrayRef",
        "partial": "Accum",
        "signature": "(t-\u003et-\u003et)-\u003e[(Int,t)]-\u003ea i t-\u003et()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:doReplace",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "[(Int, e)] -\u003e a i e -\u003e t ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#doReplace",
        "fct-type": "unknown",
        "title": "doReplace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "doReplace",
        "normalized": "[(Int,a)]-\u003eb c a-\u003ed()",
        "package": "ArrayRef",
        "partial": "Replace",
        "signature": "[(Int,e)]-\u003ea i e-\u003et()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:freezeIOUArray",
      "description": {
        "fct-descr": "Freeze/thaw rules for IOUArray\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOUArray i e -\u003e IO (UArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#freezeIOUArray",
        "fct-type": "unknown",
        "title": "freezeIOUArray"
      },
      "index": {
        "description": "Freeze thaw rules for IOUArray",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "freezeIOUArray",
        "normalized": "IOUArray a b-\u003eIO(UArray a b)",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": "IOUArray i e-\u003eIO(UArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:freezeSTUArray",
      "description": {
        "fct-descr": "Freeze/thaw rules for STUArray\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STUArray s i e -\u003e ST s (UArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#freezeSTUArray",
        "fct-type": "unknown",
        "title": "freezeSTUArray"
      },
      "index": {
        "description": "Freeze thaw rules for STUArray",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "freezeSTUArray",
        "normalized": "STUArray a b c-\u003eST a(UArray b c)",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": "STUArray s i e-\u003eST s(UArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:freezeUA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UnboxedMutableArray t t1 t2 -\u003e t3 (UArray t1 t2)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#freezeUA",
        "fct-type": "unknown",
        "title": "freezeUA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "freezeUA",
        "normalized": "UnboxedMutableArray a a a-\u003ea(UArray a a)",
        "package": "ArrayRef",
        "partial": "UA",
        "signature": "UnboxedMutableArray t t t-\u003et(UArray t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:iOUArrayTc",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#iOUArrayTc",
        "fct-type": "unknown",
        "title": "iOUArrayTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "iOUArrayTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "OUArray Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:sizeOfUA",
      "description": {
        "fct-descr": "Array size in bytes\n",
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e Int",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#sizeOfUA",
        "fct-type": "unknown",
        "title": "sizeOfUA"
      },
      "index": {
        "description": "Array size in bytes",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "sizeOfUA",
        "normalized": "UArray a b-\u003eInt",
        "package": "ArrayRef",
        "partial": "Of UA",
        "signature": "UArray i e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:sizeOfUMA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UnboxedMutableArray s i e -\u003e Int",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#sizeOfUMA",
        "fct-type": "unknown",
        "title": "sizeOfUMA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "sizeOfUMA",
        "normalized": "UnboxedMutableArray a b c-\u003eInt",
        "package": "ArrayRef",
        "partial": "Of UMA",
        "signature": "UnboxedMutableArray s i e-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:stUArrayTc",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#stUArrayTc",
        "fct-type": "unknown",
        "title": "stUArrayTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "stUArrayTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "UArray Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:thawIOUArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e IO (IOUArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#thawIOUArray",
        "fct-type": "unknown",
        "title": "thawIOUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "thawIOUArray",
        "normalized": "UArray a b-\u003eIO(IOUArray a b)",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": "UArray i e-\u003eIO(IOUArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:thawSTUArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e ST s (STUArray s i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#thawSTUArray",
        "fct-type": "unknown",
        "title": "thawSTUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "thawSTUArray",
        "normalized": "UArray a b-\u003eST c(STUArray c a b)",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": "UArray i e-\u003eST s(STUArray s i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:thawUA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray t t1 -\u003e t2 (UnboxedMutableArray s t t1)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#thawUA",
        "fct-type": "unknown",
        "title": "thawUA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "thawUA",
        "normalized": "UArray a a-\u003ea(UnboxedMutableArray b a a)",
        "package": "ArrayRef",
        "partial": "UA",
        "signature": "UArray t t-\u003et(UnboxedMutableArray s t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:uArrayTc",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#uArrayTc",
        "fct-type": "unknown",
        "title": "uArrayTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "uArrayTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Array Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeFreezeIOUArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOUArray i e -\u003e IO (UArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeFreezeIOUArray",
        "fct-type": "unknown",
        "title": "unsafeFreezeIOUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "unsafeFreezeIOUArray",
        "normalized": "IOUArray a b-\u003eIO(UArray a b)",
        "package": "ArrayRef",
        "partial": "Freeze IOUArray",
        "signature": "IOUArray i e-\u003eIO(UArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeFreezeSTUArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STUArray s i e -\u003e ST s (UArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeFreezeSTUArray",
        "fct-type": "unknown",
        "title": "unsafeFreezeSTUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "unsafeFreezeSTUArray",
        "normalized": "STUArray a b c-\u003eST a(UArray b c)",
        "package": "ArrayRef",
        "partial": "Freeze STUArray",
        "signature": "STUArray s i e-\u003eST s(UArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeFreezeUA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UnboxedMutableArray t1 t t2 -\u003e t3 (UArray t t2)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeFreezeUA",
        "fct-type": "unknown",
        "title": "unsafeFreezeUA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "unsafeFreezeUA",
        "normalized": "UnboxedMutableArray a a a-\u003ea(UArray a a)",
        "package": "ArrayRef",
        "partial": "Freeze UA",
        "signature": "UnboxedMutableArray t t t-\u003et(UArray t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeThawIOUArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e IO (IOUArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeThawIOUArray",
        "fct-type": "unknown",
        "title": "unsafeThawIOUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "unsafeThawIOUArray",
        "normalized": "UArray a b-\u003eIO(IOUArray a b)",
        "package": "ArrayRef",
        "partial": "Thaw IOUArray",
        "signature": "UArray i e-\u003eIO(IOUArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeThawSTUArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e ST s (STUArray s i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeThawSTUArray",
        "fct-type": "unknown",
        "title": "unsafeThawSTUArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "unsafeThawSTUArray",
        "normalized": "UArray a b-\u003eST c(STUArray c a b)",
        "package": "ArrayRef",
        "partial": "Thaw STUArray",
        "signature": "UArray i e-\u003eST s(STUArray s i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:unsafeThawUA",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray t t1 -\u003e t2 (UnboxedMutableArray s t t1)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#unsafeThawUA",
        "fct-type": "unknown",
        "title": "unsafeThawUA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "unsafeThawUA",
        "normalized": "UArray a a-\u003ea(UnboxedMutableArray b a a)",
        "package": "ArrayRef",
        "partial": "Thaw UA",
        "signature": "UArray t t-\u003et(UnboxedMutableArray s t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:withArrayCopy",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray t t1 -\u003e (UnboxedMutableArray s t t1 -\u003e t2 t3) -\u003e t2 (UArray t t1)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#withArrayCopy",
        "fct-type": "unknown",
        "title": "withArrayCopy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "withArrayCopy",
        "normalized": "UArray a a-\u003e(UnboxedMutableArray b a a-\u003ea a)-\u003ea(UArray a a)",
        "package": "ArrayRef",
        "partial": "Array Copy",
        "signature": "UArray t t-\u003e(UnboxedMutableArray s t t-\u003et t)-\u003et(UArray t t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Internals-Unboxed.html#v:withNewArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Internals.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e e -\u003e (UnboxedMutableArray t2 i e -\u003e t t1) -\u003e t (UArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#withNewArray",
        "fct-type": "unknown",
        "title": "withNewArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Internals Unboxed",
        "module": "Data.ArrayBZ.Internals.Unboxed",
        "name": "withNewArray",
        "normalized": "(a,a)-\u003eb-\u003e(UnboxedMutableArray c a b-\u003ec c)-\u003ec(UArray a b)",
        "package": "ArrayRef",
        "partial": "New Array",
        "signature": "(i,i)-\u003ee-\u003e(UnboxedMutableArray t i e-\u003et t)-\u003et(UArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:HasBounds",
      "description": {
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#HasBounds",
        "fct-type": "unknown",
        "title": "HasBounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "HasBounds",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Has Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:HasMutableBounds",
      "description": {
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#HasMutableBounds",
        "fct-type": "unknown",
        "title": "HasMutableBounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "HasMutableBounds",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Has Mutable Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:MArray",
      "description": {
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#MArray",
        "fct-type": "unknown",
        "title": "MArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "MArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "MArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:bounds",
      "description": {
        "fct-descr": "Extracts the bounds of an array\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e (i, i)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#bounds",
        "fct-type": "unknown",
        "title": "bounds"
      },
      "index": {
        "description": "Extracts the bounds of an array",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "bounds",
        "normalized": "a b c-\u003e(b,b)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:freeze",
      "description": {
        "fct-descr": "Converts a mutable array (any instance of \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e) to an\n immutable array (any instance of \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e) by taking a complete\n copy of it.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#freeze",
        "fct-type": "unknown",
        "title": "freeze"
      },
      "index": {
        "description": "Converts mutable array any instance of MArray to an immutable array any instance of IArray by taking complete copy of it",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "freeze",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getAssocs",
      "description": {
        "fct-descr": "Return a list of all the associations of a mutable array, in\n index order.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m [(i, e)]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getAssocs",
        "fct-type": "unknown",
        "title": "getAssocs"
      },
      "index": {
        "description": "Return list of all the associations of mutable array in index order",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "getAssocs",
        "normalized": "a b c-\u003ed[(b,c)]",
        "package": "ArrayRef",
        "partial": "Assocs",
        "signature": "a i e-\u003em[(i,e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getBounds",
      "description": {
        "fct-descr": "Get the current bounds of an array\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (i, i)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getBounds",
        "fct-type": "unknown",
        "title": "getBounds"
      },
      "index": {
        "description": "Get the current bounds of an array",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "getBounds",
        "normalized": "a b c-\u003ed(b,b)",
        "package": "ArrayRef",
        "partial": "Bounds",
        "signature": "a i e-\u003em(i,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getElems",
      "description": {
        "fct-descr": "Return a list of all the elements of a mutable array\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m [e]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getElems",
        "fct-type": "unknown",
        "title": "getElems"
      },
      "index": {
        "description": "Return list of all the elements of mutable array",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "getElems",
        "normalized": "a b c-\u003ed[c]",
        "package": "ArrayRef",
        "partial": "Elems",
        "signature": "a i e-\u003em[e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:getIndices",
      "description": {
        "fct-descr": "Return a list of all the indexes of a mutable array\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m [i]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#getIndices",
        "fct-type": "unknown",
        "title": "getIndices"
      },
      "index": {
        "description": "Return list of all the indexes of mutable array",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "getIndices",
        "normalized": "a b c-\u003ed[b]",
        "package": "ArrayRef",
        "partial": "Indices",
        "signature": "a i e-\u003em[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:indices",
      "description": {
        "fct-descr": "Returns a list of all the valid indices in an array.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e [i]",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-IArray.html#indices",
        "fct-type": "unknown",
        "title": "indices"
      },
      "index": {
        "description": "Returns list of all the valid indices in an array",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "indices",
        "normalized": "a b c-\u003e[b]",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003e[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:mapArray",
      "description": {
        "fct-descr": "Constructs a new array derived from the original array by applying a\n function to each of the elements.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(e' -\u003e e) -\u003e a i e' -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#mapArray",
        "fct-type": "unknown",
        "title": "mapArray"
      },
      "index": {
        "description": "Constructs new array derived from the original array by applying function to each of the elements",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "mapArray",
        "normalized": "(a-\u003eb)-\u003ec d a-\u003ee(c d b)",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(e'-\u003ee)-\u003ea i e'-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:mapIndices",
      "description": {
        "fct-descr": "Constructs a new array derived from the original array by applying a\n function to each of the indices.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e (i -\u003e j) -\u003e a j e -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#mapIndices",
        "fct-type": "unknown",
        "title": "mapIndices"
      },
      "index": {
        "description": "Constructs new array derived from the original array by applying function to each of the indices",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "mapIndices",
        "normalized": "(a,a)-\u003e(a-\u003eb)-\u003ec b d-\u003ee(c a d)",
        "package": "ArrayRef",
        "partial": "Indices",
        "signature": "(i,i)-\u003e(i-\u003ej)-\u003ea j e-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:newArray",
      "description": {
        "fct-descr": "Builds a new array, with every element initialised to the supplied\n value.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e e -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newArray",
        "fct-type": "unknown",
        "title": "newArray"
      },
      "index": {
        "description": "Builds new array with every element initialised to the supplied value",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "newArray",
        "normalized": "(a,a)-\u003eb-\u003ec(d a b)",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003ee-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:newArray_",
      "description": {
        "fct-descr": "Builds a new array, with every element initialised to undefined.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newArray_",
        "fct-type": "unknown",
        "title": "newArray_"
      },
      "index": {
        "description": "Builds new array with every element initialised to undefined",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "newArray_",
        "normalized": "(a,a)-\u003eb(c a d)",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "(i,i)-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:newListArray",
      "description": {
        "fct-descr": "Constructs a mutable array from a list of initial elements.\n The list gives the elements of the array in ascending order\n beginning with the lowest index.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "(i, i) -\u003e [e] -\u003e m (a i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#newListArray",
        "fct-type": "unknown",
        "title": "newListArray"
      },
      "index": {
        "description": "Constructs mutable array from list of initial elements The list gives the elements of the array in ascending order beginning with the lowest index",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "newListArray",
        "normalized": "(a,a)-\u003e[b]-\u003ec(d a b)",
        "package": "ArrayRef",
        "partial": "List Array",
        "signature": "(i,i)-\u003e[e]-\u003em(a i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:readArray",
      "description": {
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e i -\u003e m e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#readArray",
        "fct-type": "unknown",
        "title": "readArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "readArray",
        "normalized": "a b c-\u003eb-\u003ed c",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "a i e-\u003ei-\u003em e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:thaw",
      "description": {
        "fct-descr": "Converts an immutable array (any instance of \u003ctt\u003e\u003ca\u003eIArray\u003c/a\u003e\u003c/tt\u003e) into a\n mutable array (any instance of \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e) by taking a complete copy\n of it.\n",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#thaw",
        "fct-type": "unknown",
        "title": "thaw"
      },
      "index": {
        "description": "Converts an immutable array any instance of IArray into mutable array any instance of MArray by taking complete copy of it",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "thaw",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an mutable array into an immutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is safe to use, therefore, if\n   the mutable version is never modified after the freeze operation.\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Data.Array.IO.IOUArray -\u003e Data.Array.Unboxed.UArray\n\u003c/li\u003e\u003cli\u003e Data.Array.ST.STUArray -\u003e Data.Array.Unboxed.UArray\n\u003c/li\u003e\u003cli\u003e Data.Array.IO.IOArray -\u003e Data.Array.Array\n\u003c/li\u003e\u003cli\u003e Data.Array.ST.STArray -\u003e Data.Array.Array\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeFreeze",
        "fct-type": "unknown",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Converts an mutable array into an immutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is safe to use therefore if the mutable version is never modified after the freeze operation The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeFreeze Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them Data.Array.IO.IOUArray Data.Array.Unboxed.UArray Data.Array.ST.STUArray Data.Array.Unboxed.UArray Data.Array.IO.IOArray Data.Array.Array Data.Array.ST.STArray Data.Array.Array",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "unsafeFreeze",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "Freeze",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:unsafeThaw",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an immutable array into a mutable array.  The\n   implementation may either simply cast the array from\n   one type to the other without copying the array, or it\n   may take a full copy of the array.\n\u003c/p\u003e\u003cp\u003eNote that because the array is possibly not copied, any subsequent\n   modifications made to the mutable version of the array may be\n   shared with the immutable version.  It is only safe to use,\n   therefore, if the immutable array is never referenced again in this\n   thread, and there is no possibility that it can be also referenced\n   in another thread.  If you use an unsafeThaw\u003cem\u003ewrite\u003c/em\u003eunsafeFreeze\n   sequence in a multi-threaded setting, then you must ensure that\n   this sequence is atomic with respect to other threads, or a garbage\n   collector crash may result (because the write may be writing to a\n   frozen array).\n\u003c/p\u003e\u003cp\u003eThe non-copying implementation is supported between certain pairs\n   of array types only; one constraint is that the array types must\n   have identical representations.  In GHC, The following pairs of\n   array types have a non-copying O(1) implementation of\n   \u003ctt\u003e\u003ca\u003eunsafeThaw\u003c/a\u003e\u003c/tt\u003e.  Because the optimised versions are enabled by\n   specialisations, you will need to compile with optimisation (-O) to\n   get them.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Data.Array.Unboxed.UArray -\u003e Data.Array.IO.IOUArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Unboxed.UArray -\u003e Data.Array.ST.STUArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Array  -\u003e Data.Array.IO.IOArray\n\u003c/li\u003e\u003cli\u003e Data.Array.Array  -\u003e Data.Array.ST.STArray\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e m (b i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#unsafeThaw",
        "fct-type": "unknown",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "Converts an immutable array into mutable array The implementation may either simply cast the array from one type to the other without copying the array or it may take full copy of the array Note that because the array is possibly not copied any subsequent modifications made to the mutable version of the array may be shared with the immutable version It is only safe to use therefore if the immutable array is never referenced again in this thread and there is no possibility that it can be also referenced in another thread If you use an unsafeThaw write unsafeFreeze sequence in multi-threaded setting then you must ensure that this sequence is atomic with respect to other threads or garbage collector crash may result because the write may be writing to frozen array The non-copying implementation is supported between certain pairs of array types only one constraint is that the array types must have identical representations In GHC The following pairs of array types have non-copying implementation of unsafeThaw Because the optimised versions are enabled by specialisations you will need to compile with optimisation to get them Data.Array.Unboxed.UArray Data.Array.IO.IOUArray Data.Array.Unboxed.UArray Data.Array.ST.STUArray Data.Array.Array Data.Array.IO.IOArray Data.Array.Array Data.Array.ST.STArray",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "unsafeThaw",
        "normalized": "a b c-\u003ed(e b c)",
        "package": "ArrayRef",
        "partial": "Thaw",
        "signature": "a i e-\u003em(b i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-MArray.html#v:writeArray",
      "description": {
        "fct-module": "Data.ArrayBZ.MArray",
        "fct-package": "ArrayRef",
        "fct-signature": "a i e -\u003e i -\u003e e -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-MArray.html#writeArray",
        "fct-type": "unknown",
        "title": "writeArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ MArray",
        "module": "Data.ArrayBZ.MArray",
        "name": "writeArray",
        "normalized": "a b c-\u003eb-\u003ec-\u003ed()",
        "package": "ArrayRef",
        "partial": "Array",
        "signature": "a i e-\u003ei-\u003ee-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#t:STArray",
      "description": {
        "fct-descr": "Boxed mutable arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.ST",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Boxed.html#STArray",
        "fct-type": "unknown",
        "title": "STArray"
      },
      "index": {
        "description": "Boxed mutable arrays in ST monad",
        "hierarchy": "Data ArrayBZ ST",
        "module": "Data.ArrayBZ.ST",
        "name": "STArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#t:STUArray",
      "description": {
        "fct-descr": "Unboxed mutable arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.ST",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#STUArray",
        "fct-type": "unknown",
        "title": "STUArray"
      },
      "index": {
        "description": "Unboxed mutable arrays in ST monad",
        "hierarchy": "Data ArrayBZ ST",
        "module": "Data.ArrayBZ.ST",
        "name": "STUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#v:castSTUArray",
      "description": {
        "fct-descr": "Casts an \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
        "fct-module": "Data.ArrayBZ.ST",
        "fct-package": "ArrayRef",
        "fct-signature": "STUArray s i e -\u003e STUArray s i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castSTUArray",
        "fct-type": "unknown",
        "title": "castSTUArray"
      },
      "index": {
        "description": "Casts an STUArray with one element type into STUArray with different element type upper bound is recalculated",
        "hierarchy": "Data ArrayBZ ST",
        "module": "Data.ArrayBZ.ST",
        "name": "castSTUArray",
        "normalized": "STUArray a b c-\u003eSTUArray a b d",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": "STUArray s i e-\u003eSTUArray s i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#v:runSTArray",
      "description": {
        "fct-descr": "A safe way to create and work with a mutable array before returning an\n immutable array for later perusal.  This function avoids copying\n the array before returning it - it uses \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e internally, but\n this wrapper is a safe interface to that function.\n",
        "fct-module": "Data.ArrayBZ.ST",
        "fct-package": "ArrayRef",
        "fct-signature": "(forall s.  ST s (STArray s i e)) -\u003e Array i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-ST.html#runSTArray",
        "fct-type": "unknown",
        "title": "runSTArray"
      },
      "index": {
        "description": "safe way to create and work with mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
        "hierarchy": "Data ArrayBZ ST",
        "module": "Data.ArrayBZ.ST",
        "name": "runSTArray",
        "normalized": "(a b ST c(STArray c d e))-\u003eArray d e",
        "package": "ArrayRef",
        "partial": "STArray",
        "signature": "(forall s. ST s(STArray s i e))-\u003eArray i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-ST.html#v:runSTUArray",
      "description": {
        "fct-descr": "A safe way to create and work with an unboxed mutable array before\n returning an immutable array for later perusal.  This function\n avoids copying the array before returning it - it uses\n \u003ctt\u003e\u003ca\u003eunsafeFreeze\u003c/a\u003e\u003c/tt\u003e internally, but this wrapper is a safe interface to\n that function.\n",
        "fct-module": "Data.ArrayBZ.ST",
        "fct-package": "ArrayRef",
        "fct-signature": "(forall s.  ST s (STUArray s i e)) -\u003e UArray i e",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-ST.html#runSTUArray",
        "fct-type": "unknown",
        "title": "runSTUArray"
      },
      "index": {
        "description": "safe way to create and work with an unboxed mutable array before returning an immutable array for later perusal This function avoids copying the array before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
        "hierarchy": "Data ArrayBZ ST",
        "module": "Data.ArrayBZ.ST",
        "name": "runSTUArray",
        "normalized": "(a b ST c(STUArray c d e))-\u003eUArray d e",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": "(forall s. ST s(STUArray s i e))-\u003eUArray i e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#t:StorableArray",
      "description": {
        "fct-descr": "Module \u003ca\u003eData.ArrayBZ.Internals.MArray\u003c/a\u003e provides the interface of storable arrays.\n They are instances of class \u003ctt\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/tt\u003e (with the \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e monad).\n",
        "fct-module": "Data.ArrayBZ.Storable",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#StorableArray",
        "fct-type": "unknown",
        "title": "StorableArray"
      },
      "index": {
        "description": "Module Data.ArrayBZ.Internals.MArray provides the interface of storable arrays They are instances of class MArray with the IO monad",
        "hierarchy": "Data ArrayBZ Storable",
        "module": "Data.ArrayBZ.Storable",
        "name": "StorableArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Storable Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#v:touchStorableArray",
      "description": {
        "fct-descr": "If you want to use it afterwards, ensure that you\n \u003ctt\u003e\u003ca\u003etouchStorableArray\u003c/a\u003e\u003c/tt\u003e after the last use of the pointer,\n so the array is not freed too early.\n",
        "fct-module": "Data.ArrayBZ.Storable",
        "fct-package": "ArrayRef",
        "fct-signature": "StorableArray i e -\u003e IO ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#touchStorableArray",
        "fct-type": "unknown",
        "title": "touchStorableArray"
      },
      "index": {
        "description": "If you want to use it afterwards ensure that you touchStorableArray after the last use of the pointer so the array is not freed too early",
        "hierarchy": "Data ArrayBZ Storable",
        "module": "Data.ArrayBZ.Storable",
        "name": "touchStorableArray",
        "normalized": "StorableArray a b-\u003eIO()",
        "package": "ArrayRef",
        "partial": "Storable Array",
        "signature": "StorableArray i e-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#v:unsafeForeignPtrToStorableArray",
      "description": {
        "fct-descr": "Construct a \u003ctt\u003e\u003ca\u003eStorableArray\u003c/a\u003e\u003c/tt\u003e from an arbitrary \u003ctt\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/tt\u003e.  It is\n the caller's responsibility to ensure that the \u003ctt\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/tt\u003e points to\n an area of memory sufficient for the specified bounds.\n",
        "fct-module": "Data.ArrayBZ.Storable",
        "fct-package": "ArrayRef",
        "fct-signature": "ForeignPtr e -\u003e (i, i) -\u003e IO (StorableArray i e)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#unsafeForeignPtrToStorableArray",
        "fct-type": "unknown",
        "title": "unsafeForeignPtrToStorableArray"
      },
      "index": {
        "description": "Construct StorableArray from an arbitrary ForeignPtr It is the caller responsibility to ensure that the ForeignPtr points to an area of memory sufficient for the specified bounds",
        "hierarchy": "Data ArrayBZ Storable",
        "module": "Data.ArrayBZ.Storable",
        "name": "unsafeForeignPtrToStorableArray",
        "normalized": "ForeignPtr a-\u003e(b,b)-\u003eIO(StorableArray b a)",
        "package": "ArrayRef",
        "partial": "Foreign Ptr To Storable Array",
        "signature": "ForeignPtr e-\u003e(i,i)-\u003eIO(StorableArray i e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Storable.html#v:withStorableArray",
      "description": {
        "fct-descr": "The pointer to the array contents is obtained by \u003ctt\u003e\u003ca\u003ewithStorableArray\u003c/a\u003e\u003c/tt\u003e.\n The idea is similar to \u003ctt\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/tt\u003e (used internally here).\n The pointer should be used only during execution of the \u003ctt\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/tt\u003e action\n retured by the function passed as argument to \u003ctt\u003e\u003ca\u003ewithStorableArray\u003c/a\u003e\u003c/tt\u003e.\n",
        "fct-module": "Data.ArrayBZ.Storable",
        "fct-package": "ArrayRef",
        "fct-signature": "StorableArray i e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Storable.html#withStorableArray",
        "fct-type": "unknown",
        "title": "withStorableArray"
      },
      "index": {
        "description": "The pointer to the array contents is obtained by withStorableArray The idea is similar to ForeignPtr used internally here The pointer should be used only during execution of the IO action retured by the function passed as argument to withStorableArray",
        "hierarchy": "Data ArrayBZ Storable",
        "module": "Data.ArrayBZ.Storable",
        "name": "withStorableArray",
        "normalized": "StorableArray a b-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
        "package": "ArrayRef",
        "partial": "Storable Array",
        "signature": "StorableArray i e-\u003e(Ptr e-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#t:IOUArray",
      "description": {
        "fct-descr": "Unboxed mutable arrays in IO monad\n",
        "fct-module": "Data.ArrayBZ.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#IOUArray",
        "fct-type": "unknown",
        "title": "IOUArray"
      },
      "index": {
        "description": "Unboxed mutable arrays in IO monad",
        "hierarchy": "Data ArrayBZ Unboxed",
        "module": "Data.ArrayBZ.Unboxed",
        "name": "IOUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#t:STUArray",
      "description": {
        "fct-descr": "Unboxed mutable arrays in ST monad\n",
        "fct-module": "Data.ArrayBZ.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#STUArray",
        "fct-type": "unknown",
        "title": "STUArray"
      },
      "index": {
        "description": "Unboxed mutable arrays in ST monad",
        "hierarchy": "Data ArrayBZ Unboxed",
        "module": "Data.ArrayBZ.Unboxed",
        "name": "STUArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#t:UArray",
      "description": {
        "fct-module": "Data.ArrayBZ.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#UArray",
        "fct-type": "unknown",
        "title": "UArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ArrayBZ Unboxed",
        "module": "Data.ArrayBZ.Unboxed",
        "name": "UArray",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "UArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#v:castIOUArray",
      "description": {
        "fct-descr": "Casts an \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eIOUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
        "fct-module": "Data.ArrayBZ.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOUArray i e -\u003e IOUArray i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castIOUArray",
        "fct-type": "unknown",
        "title": "castIOUArray"
      },
      "index": {
        "description": "Casts an IOUArray with one element type into IOUArray with different element type upper bound is recalculated",
        "hierarchy": "Data ArrayBZ Unboxed",
        "module": "Data.ArrayBZ.Unboxed",
        "name": "castIOUArray",
        "normalized": "IOUArray a b-\u003eIOUArray a c",
        "package": "ArrayRef",
        "partial": "IOUArray",
        "signature": "IOUArray i e-\u003eIOUArray i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#v:castSTUArray",
      "description": {
        "fct-descr": "Casts an \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/tt\u003e with a different\n element type (upper bound is recalculated).\n",
        "fct-module": "Data.ArrayBZ.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STUArray s i e -\u003e STUArray s i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castSTUArray",
        "fct-type": "unknown",
        "title": "castSTUArray"
      },
      "index": {
        "description": "Casts an STUArray with one element type into STUArray with different element type upper bound is recalculated",
        "hierarchy": "Data ArrayBZ Unboxed",
        "module": "Data.ArrayBZ.Unboxed",
        "name": "castSTUArray",
        "normalized": "STUArray a b c-\u003eSTUArray a b d",
        "package": "ArrayRef",
        "partial": "STUArray",
        "signature": "STUArray s i e-\u003eSTUArray s i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-ArrayBZ-Unboxed.html#v:castUArray",
      "description": {
        "fct-descr": "\u003cp\u003eCasts to arrays with different element type\n\u003c/p\u003e\u003cp\u003eCasts an \u003ctt\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/tt\u003e with one element type into \u003ctt\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/tt\u003e with a\n different element type. All the elements of the resulting array\n are undefined (unless you know what you're doing...).\n Upper array bound is recalculated according to elements size,\n for example UArray (1,2) Word32 -\u003e UArray (1,8) Word8\n\u003c/p\u003e",
        "fct-module": "Data.ArrayBZ.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UArray i e -\u003e UArray i e'",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-ArrayBZ-Internals-Unboxed.html#castUArray",
        "fct-type": "unknown",
        "title": "castUArray"
      },
      "index": {
        "description": "Casts to arrays with different element type Casts an UArray with one element type into UArray with different element type All the elements of the resulting array are undefined unless you know what you re doing Upper array bound is recalculated according to elements size for example UArray Word32 UArray Word8",
        "hierarchy": "Data ArrayBZ Unboxed",
        "module": "Data.ArrayBZ.Unboxed",
        "name": "castUArray",
        "normalized": "UArray a b-\u003eUArray a c",
        "package": "ArrayRef",
        "partial": "UArray",
        "signature": "UArray i e-\u003eUArray i e'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-HasDefaultValue.html#v:HasDefaultValue",
      "description": {
        "fct-module": "Data.HasDefaultValue",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-HasDefaultValue.html#HasDefaultValue",
        "fct-type": "unknown",
        "title": "HasDefaultValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HasDefaultValue",
        "module": "Data.HasDefaultValue",
        "name": "HasDefaultValue",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Has Default Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-HasDefaultValue.html#v:defaultValue",
      "description": {
        "fct-module": "Data.HasDefaultValue",
        "fct-package": "ArrayRef",
        "fct-signature": "a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-HasDefaultValue.html#defaultValue",
        "fct-type": "unknown",
        "title": "defaultValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HasDefaultValue",
        "module": "Data.HasDefaultValue",
        "name": "defaultValue",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#t:STURef",
      "description": {
        "fct-module": "Data.Ref.LazyST",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#STURef",
        "fct-type": "unknown",
        "title": "STURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref LazyST",
        "module": "Data.Ref.LazyST",
        "name": "STURef",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:modifySTURef",
      "description": {
        "fct-module": "Data.Ref.LazyST",
        "fct-package": "ArrayRef",
        "fct-signature": "STURef s a -\u003e (a -\u003e a) -\u003e ST s ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#modifySTURef",
        "fct-type": "unknown",
        "title": "modifySTURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref LazyST",
        "module": "Data.Ref.LazyST",
        "name": "modifySTURef",
        "normalized": "STURef a b-\u003e(b-\u003eb)-\u003eST a()",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "STURef s a-\u003e(a-\u003ea)-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:newSTURef",
      "description": {
        "fct-module": "Data.Ref.LazyST",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e ST s (STURef s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#newSTURef",
        "fct-type": "unknown",
        "title": "newSTURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref LazyST",
        "module": "Data.Ref.LazyST",
        "name": "newSTURef",
        "normalized": "a-\u003eST b(STURef b a)",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "a-\u003eST s(STURef s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:readSTURef",
      "description": {
        "fct-module": "Data.Ref.LazyST",
        "fct-package": "ArrayRef",
        "fct-signature": "STURef s a -\u003e ST s a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#readSTURef",
        "fct-type": "unknown",
        "title": "readSTURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref LazyST",
        "module": "Data.Ref.LazyST",
        "name": "readSTURef",
        "normalized": "STURef a b-\u003eST a b",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "STURef s a-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-LazyST.html#v:writeSTURef",
      "description": {
        "fct-module": "Data.Ref.LazyST",
        "fct-package": "ArrayRef",
        "fct-signature": "STURef s a -\u003e a -\u003e ST s ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-LazyST.html#writeSTURef",
        "fct-type": "unknown",
        "title": "writeSTURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref LazyST",
        "module": "Data.Ref.LazyST",
        "name": "writeSTURef",
        "normalized": "STURef a b-\u003eb-\u003eST a()",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "STURef s a-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#t:IOURef",
      "description": {
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "newtype",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#IOURef",
        "fct-type": "unknown",
        "title": "IOURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "IOURef",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOURef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#t:STURef",
      "description": {
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "newtype",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#STURef",
        "fct-type": "unknown",
        "title": "STURef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "STURef",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:ioURefTc",
      "description": {
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#ioURefTc",
        "fct-type": "unknown",
        "title": "ioURefTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "ioURefTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "URef Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:modifyIOURef",
      "description": {
        "fct-descr": "Modify contents of an \u003ctt\u003e\u003ca\u003eIOURef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOURef a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#modifyIOURef",
        "fct-type": "unknown",
        "title": "modifyIOURef"
      },
      "index": {
        "description": "Modify contents of an IOURef by applying pure function to it",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "modifyIOURef",
        "normalized": "IOURef a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "ArrayRef",
        "partial": "IOURef",
        "signature": "IOURef a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:modifySTURef",
      "description": {
        "fct-descr": "Modify contents of an \u003ctt\u003e\u003ca\u003eSTURef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STURef s a -\u003e (a -\u003e a) -\u003e ST s ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#modifySTURef",
        "fct-type": "unknown",
        "title": "modifySTURef"
      },
      "index": {
        "description": "Modify contents of an STURef by applying pure function to it",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "modifySTURef",
        "normalized": "STURef a b-\u003e(b-\u003eb)-\u003eST a()",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "STURef s a-\u003e(a-\u003ea)-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:newIOURef",
      "description": {
        "fct-descr": "Create new unboxed reference in IO monad\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e IO (IOURef a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#newIOURef",
        "fct-type": "unknown",
        "title": "newIOURef"
      },
      "index": {
        "description": "Create new unboxed reference in IO monad",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "newIOURef",
        "normalized": "a-\u003eIO(IOURef a)",
        "package": "ArrayRef",
        "partial": "IOURef",
        "signature": "a-\u003eIO(IOURef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:newSTURef",
      "description": {
        "fct-descr": "Create new unboxed reference in ST monad\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e ST s (STURef s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#newSTURef",
        "fct-type": "unknown",
        "title": "newSTURef"
      },
      "index": {
        "description": "Create new unboxed reference in ST monad",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "newSTURef",
        "normalized": "a-\u003eST b(STURef b a)",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "a-\u003eST s(STURef s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:readIOURef",
      "description": {
        "fct-descr": "Read current value of unboxed reference in IO monad\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOURef a -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#readIOURef",
        "fct-type": "unknown",
        "title": "readIOURef"
      },
      "index": {
        "description": "Read current value of unboxed reference in IO monad",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "readIOURef",
        "normalized": "IOURef a-\u003eIO a",
        "package": "ArrayRef",
        "partial": "IOURef",
        "signature": "IOURef a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:readSTURef",
      "description": {
        "fct-descr": "Read current value of unboxed reference in ST monad\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STURef s a -\u003e ST s a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#readSTURef",
        "fct-type": "unknown",
        "title": "readSTURef"
      },
      "index": {
        "description": "Read current value of unboxed reference in ST monad",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "readSTURef",
        "normalized": "STURef a b-\u003eST a b",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "STURef s a-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:stURefTc",
      "description": {
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "TyCon",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#stURefTc",
        "fct-type": "unknown",
        "title": "stURefTc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "stURefTc",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "URef Tc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:writeIOURef",
      "description": {
        "fct-descr": "Change value of unboxed reference in IO monad\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "IOURef a -\u003e a -\u003e IO ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#writeIOURef",
        "fct-type": "unknown",
        "title": "writeIOURef"
      },
      "index": {
        "description": "Change value of unboxed reference in IO monad",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "writeIOURef",
        "normalized": "IOURef a-\u003ea-\u003eIO()",
        "package": "ArrayRef",
        "partial": "IOURef",
        "signature": "IOURef a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Unboxed.html#v:writeSTURef",
      "description": {
        "fct-descr": "Change value of unboxed reference in ST monad\n",
        "fct-module": "Data.Ref.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "STURef s a -\u003e a -\u003e ST s ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Unboxed.html#writeSTURef",
        "fct-type": "unknown",
        "title": "writeSTURef"
      },
      "index": {
        "description": "Change value of unboxed reference in ST monad",
        "hierarchy": "Data Ref Unboxed",
        "module": "Data.Ref.Unboxed",
        "name": "writeSTURef",
        "normalized": "STURef a b-\u003eb-\u003eST a()",
        "package": "ArrayRef",
        "partial": "STURef",
        "signature": "STURef s a-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:Ref",
      "description": {
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#Ref",
        "fct-type": "unknown",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "Ref",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:URef",
      "description": {
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#URef",
        "fct-type": "unknown",
        "title": "URef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "URef",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "URef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyRef",
      "description": {
        "fct-descr": "Modify the contents of an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyRef",
        "fct-type": "unknown",
        "title": "modifyRef"
      },
      "index": {
        "description": "Modify the contents of an Ref by applying pure function to it",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "modifyRef",
        "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "ArrayRef",
        "partial": "Ref",
        "signature": "r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyRefM",
      "description": {
        "fct-descr": "Modify the contents of an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e by applying monadic computation to it\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e (a -\u003e m a) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyRefM",
        "fct-type": "unknown",
        "title": "modifyRefM"
      },
      "index": {
        "description": "Modify the contents of an Ref by applying monadic computation to it",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "modifyRefM",
        "normalized": "a b-\u003e(b-\u003ec b)-\u003ec()",
        "package": "ArrayRef",
        "partial": "Ref",
        "signature": "r a-\u003e(a-\u003em a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyURef",
      "description": {
        "fct-descr": "Modify the contents of an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyURef",
        "fct-type": "unknown",
        "title": "modifyURef"
      },
      "index": {
        "description": "Modify the contents of an URef by applying pure function to it",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "modifyURef",
        "normalized": "a b-\u003e(b-\u003eb)-\u003ec()",
        "package": "ArrayRef",
        "partial": "URef",
        "signature": "r a-\u003e(a-\u003ea)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:modifyURefM",
      "description": {
        "fct-descr": "Modify the contents of an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e by applying monadic computation to it\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e (a -\u003e m a) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#modifyURefM",
        "fct-type": "unknown",
        "title": "modifyURefM"
      },
      "index": {
        "description": "Modify the contents of an URef by applying monadic computation to it",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "modifyURefM",
        "normalized": "a b-\u003e(b-\u003ec b)-\u003ec()",
        "package": "ArrayRef",
        "partial": "URef",
        "signature": "r a-\u003e(a-\u003em a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:newRef",
      "description": {
        "fct-descr": "Create a new \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e with given initial value\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e m (r a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#newRef",
        "fct-type": "unknown",
        "title": "newRef"
      },
      "index": {
        "description": "Create new Ref with given initial value",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "newRef",
        "normalized": "a-\u003eb(c a)",
        "package": "ArrayRef",
        "partial": "Ref",
        "signature": "a-\u003em(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:newURef",
      "description": {
        "fct-descr": "Create a new \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e with given initial value\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e m (r a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#newURef",
        "fct-type": "unknown",
        "title": "newURef"
      },
      "index": {
        "description": "Create new URef with given initial value",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "newURef",
        "normalized": "a-\u003eb(c a)",
        "package": "ArrayRef",
        "partial": "URef",
        "signature": "a-\u003em(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:readRef",
      "description": {
        "fct-descr": "Read the value of an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e m a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#readRef",
        "fct-type": "unknown",
        "title": "readRef"
      },
      "index": {
        "description": "Read the value of an Ref",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "readRef",
        "normalized": "a b-\u003ec b",
        "package": "ArrayRef",
        "partial": "Ref",
        "signature": "r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:readURef",
      "description": {
        "fct-descr": "Read the value of an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e m a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#readURef",
        "fct-type": "unknown",
        "title": "readURef"
      },
      "index": {
        "description": "Read the value of an URef",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "readURef",
        "normalized": "a b-\u003ec b",
        "package": "ArrayRef",
        "partial": "URef",
        "signature": "r a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:writeRef",
      "description": {
        "fct-descr": "Write new value into an \u003ctt\u003e\u003ca\u003eRef\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e a -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#writeRef",
        "fct-type": "unknown",
        "title": "writeRef"
      },
      "index": {
        "description": "Write new value into an Ref",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "writeRef",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "ArrayRef",
        "partial": "Ref",
        "signature": "r a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref-Universal.html#v:writeURef",
      "description": {
        "fct-descr": "Write new value into an \u003ctt\u003e\u003ca\u003eURef\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.Ref.Universal",
        "fct-package": "ArrayRef",
        "fct-signature": "r a -\u003e a -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Ref-Universal.html#writeURef",
        "fct-type": "unknown",
        "title": "writeURef"
      },
      "index": {
        "description": "Write new value into an URef",
        "hierarchy": "Data Ref Universal",
        "module": "Data.Ref.Universal",
        "name": "writeURef",
        "normalized": "a b-\u003eb-\u003ec()",
        "package": "ArrayRef",
        "partial": "URef",
        "signature": "r a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref.html",
      "description": {
        "fct-descr": "References (mutable vars)\n",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Ref.html",
        "fct-type": "unknown",
        "title": ""
      },
      "index": {
        "description": "References mutable vars",
        "hierarchy": "",
        "module": "",
        "name": "",
        "normalized": "",
        "package": "",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:+=",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e b -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#%2B%3D",
        "fct-type": "unknown",
        "title": "+="
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "+=",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "ArrayRef",
        "partial": "",
        "signature": "r-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:-=",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e b -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#-%3D",
        "fct-type": "unknown",
        "title": "-="
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "-=",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "ArrayRef",
        "partial": "",
        "signature": "r-\u003eb-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:.\u003c-",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e (a -\u003e m a) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#.%3C-",
        "fct-type": "unknown",
        "title": ".\u003c-"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": ".\u003c-",
        "normalized": "a-\u003e(b-\u003ec b)-\u003ec()",
        "package": "ArrayRef",
        "partial": "",
        "signature": "r-\u003e(a-\u003em a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:.=",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e (b -\u003e b) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#.%3D",
        "fct-type": "unknown",
        "title": ".="
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": ".=",
        "normalized": "a-\u003e(b-\u003eb)-\u003ec()",
        "package": "ArrayRef",
        "partial": "",
        "signature": "r-\u003e(b-\u003eb)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:=:",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e a -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#%3D%3A",
        "fct-type": "unknown",
        "title": "=:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "=:",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "ArrayRef",
        "partial": "",
        "signature": "r-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:Mutable",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#Mutable",
        "fct-type": "unknown",
        "title": "Mutable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "Mutable",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Mutable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:hashUpdate",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "HashTable key val -\u003e key -\u003e val -\u003e IO Bool",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#hashUpdate",
        "fct-type": "unknown",
        "title": "hashUpdate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "hashUpdate",
        "normalized": "HashTable a b-\u003ea-\u003eb-\u003eIO Bool",
        "package": "ArrayRef",
        "partial": "Update",
        "signature": "HashTable key val-\u003ekey-\u003eval-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:modifyVar",
      "description": {
        "fct-descr": "Modify the contents of an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e by applying pure function to it\n",
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e (b -\u003e b) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#modifyVar",
        "fct-type": "unknown",
        "title": "modifyVar"
      },
      "index": {
        "description": "Modify the contents of an Mutable by applying pure function to it",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "modifyVar",
        "normalized": "a-\u003e(b-\u003eb)-\u003ec()",
        "package": "ArrayRef",
        "partial": "Var",
        "signature": "r-\u003e(b-\u003eb)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:modifyVarM",
      "description": {
        "fct-descr": "Modify the contents of an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e by applying monadic computation to it\n",
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e (a -\u003e m a) -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#modifyVarM",
        "fct-type": "unknown",
        "title": "modifyVarM"
      },
      "index": {
        "description": "Modify the contents of an Mutable by applying monadic computation to it",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "modifyVarM",
        "normalized": "a-\u003e(b-\u003ec b)-\u003ec()",
        "package": "ArrayRef",
        "partial": "Var",
        "signature": "r-\u003e(a-\u003em a)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:readVar",
      "description": {
        "fct-descr": "Read the value of an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e m a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#readVar",
        "fct-type": "unknown",
        "title": "readVar"
      },
      "index": {
        "description": "Read the value of an Mutable",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "readVar",
        "normalized": "a-\u003eb c",
        "package": "ArrayRef",
        "partial": "Var",
        "signature": "r-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:ref",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e m (r a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#ref",
        "fct-type": "unknown",
        "title": "ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "ref",
        "normalized": "a-\u003eb(c a)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a-\u003em(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:uref",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "a -\u003e m (r a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#uref",
        "fct-type": "unknown",
        "title": "uref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "uref",
        "normalized": "a-\u003eb(c a)",
        "package": "ArrayRef",
        "partial": "",
        "signature": "a-\u003em(r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:val",
      "description": {
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e m a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#val",
        "fct-type": "unknown",
        "title": "val"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "val",
        "normalized": "a-\u003eb c",
        "package": "ArrayRef",
        "partial": "",
        "signature": "r-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-SyntaxSugar.html#v:writeVar",
      "description": {
        "fct-descr": "Write new value into an \u003ctt\u003e\u003ca\u003eMutable\u003c/a\u003e\u003c/tt\u003e\n",
        "fct-module": "Data.SyntaxSugar",
        "fct-package": "ArrayRef",
        "fct-signature": "r -\u003e a -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-SyntaxSugar.html#writeVar",
        "fct-type": "unknown",
        "title": "writeVar"
      },
      "index": {
        "description": "Write new value into an Mutable",
        "hierarchy": "Data SyntaxSugar",
        "module": "Data.SyntaxSugar",
        "name": "writeVar",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "ArrayRef",
        "partial": "Var",
        "signature": "r-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#t:MUVec",
      "description": {
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#MUVec",
        "fct-type": "unknown",
        "title": "MUVec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "MUVec",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "MUVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#t:UVec",
      "description": {
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#UVec",
        "fct-type": "unknown",
        "title": "UVec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "UVec",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "UVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:Unboxed",
      "description": {
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#Unboxed",
        "fct-type": "unknown",
        "title": "Unboxed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:allocUnboxed",
      "description": {
        "fct-descr": "\u003cp\u003eAdditional operations on byte vectors\n\u003c/p\u003e\u003cp\u003eAlloc the mutable byte vector having elems elements of required type\n\u003c/p\u003e",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "elems -\u003e m (MUVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/Data-Unboxed.html#allocUnboxed",
        "fct-type": "unknown",
        "title": "allocUnboxed"
      },
      "index": {
        "description": "Additional operations on byte vectors Alloc the mutable byte vector having elems elements of required type",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "allocUnboxed",
        "normalized": "a-\u003eb(MUVec c d)",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "elems-\u003em(MUVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:castMUnboxed",
      "description": {
        "fct-descr": "Recast mutable unboxed vector\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s a -\u003e MUVec s b",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#castMUnboxed",
        "fct-type": "unknown",
        "title": "castMUnboxed"
      },
      "index": {
        "description": "Recast mutable unboxed vector",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "castMUnboxed",
        "normalized": "MUVec a b-\u003eMUVec a c",
        "package": "ArrayRef",
        "partial": "MUnboxed",
        "signature": "MUVec s a-\u003eMUVec s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:castUnboxed",
      "description": {
        "fct-descr": "Recast immutable unboxed vector\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec a -\u003e UVec b",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#castUnboxed",
        "fct-type": "unknown",
        "title": "castUnboxed"
      },
      "index": {
        "description": "Recast immutable unboxed vector",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "castUnboxed",
        "normalized": "UVec a-\u003eUVec b",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "UVec a-\u003eUVec b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:freezeUnboxed",
      "description": {
        "fct-descr": "Mutable-\u003eimmutable byte vector conversion which takes a copy of contents\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s a -\u003e Int -\u003e m (UVec a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#freezeUnboxed",
        "fct-type": "unknown",
        "title": "freezeUnboxed"
      },
      "index": {
        "description": "Mutable immutable byte vector conversion which takes copy of contents",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "freezeUnboxed",
        "normalized": "MUVec a b-\u003eInt-\u003ec(UVec b)",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "MUVec s a-\u003eInt-\u003em(UVec a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:indexUnboxed",
      "description": {
        "fct-descr": "Read the value from immutable byte vector at given index\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec value -\u003e index -\u003e value",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#indexUnboxed",
        "fct-type": "unknown",
        "title": "indexUnboxed"
      },
      "index": {
        "description": "Read the value from immutable byte vector at given index",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "indexUnboxed",
        "normalized": "UVec a-\u003eb-\u003ea",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "UVec value-\u003eindex-\u003evalue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:readUnboxed",
      "description": {
        "fct-descr": "Read the value from mutable byte vector at given index\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s value -\u003e index -\u003e m value",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#readUnboxed",
        "fct-type": "unknown",
        "title": "readUnboxed"
      },
      "index": {
        "description": "Read the value from mutable byte vector at given index",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "readUnboxed",
        "normalized": "MUVec a b-\u003ec-\u003ed b",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "MUVec s value-\u003eindex-\u003em value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:sizeOfUnboxed",
      "description": {
        "fct-descr": "How many bytes required to represent values of this type\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "value -\u003e Int",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#sizeOfUnboxed",
        "fct-type": "unknown",
        "title": "sizeOfUnboxed"
      },
      "index": {
        "description": "How many bytes required to represent values of this type",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "sizeOfUnboxed",
        "normalized": "a-\u003eInt",
        "package": "ArrayRef",
        "partial": "Of Unboxed",
        "signature": "value-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:thawUnboxed",
      "description": {
        "fct-descr": "Immutable-\u003emutable byte vector conversion which takes a copy of contents\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec a -\u003e Int -\u003e m (MUVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#thawUnboxed",
        "fct-type": "unknown",
        "title": "thawUnboxed"
      },
      "index": {
        "description": "Immutable mutable byte vector conversion which takes copy of contents",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "thawUnboxed",
        "normalized": "UVec a-\u003eInt-\u003eb(MUVec c a)",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "UVec a-\u003eInt-\u003em(MUVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:unsafeFreezeUnboxed",
      "description": {
        "fct-descr": "Mutable-\u003eimmutable byte vector on-place conversion\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s a -\u003e m (UVec a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#unsafeFreezeUnboxed",
        "fct-type": "unknown",
        "title": "unsafeFreezeUnboxed"
      },
      "index": {
        "description": "Mutable immutable byte vector on-place conversion",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "unsafeFreezeUnboxed",
        "normalized": "MUVec a b-\u003ec(UVec b)",
        "package": "ArrayRef",
        "partial": "Freeze Unboxed",
        "signature": "MUVec s a-\u003em(UVec a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:unsafeThawUnboxed",
      "description": {
        "fct-descr": "Immutable-\u003emutable byte vector on-place conversion\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec a -\u003e m (MUVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#unsafeThawUnboxed",
        "fct-type": "unknown",
        "title": "unsafeThawUnboxed"
      },
      "index": {
        "description": "Immutable mutable byte vector on-place conversion",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "unsafeThawUnboxed",
        "normalized": "UVec a-\u003eb(MUVec c a)",
        "package": "ArrayRef",
        "partial": "Thaw Unboxed",
        "signature": "UVec a-\u003em(MUVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/Data-Unboxed.html#v:writeUnboxed",
      "description": {
        "fct-descr": "Write the value to mutable byte vector at given index\n",
        "fct-module": "Data.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s value -\u003e index -\u003e value -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#writeUnboxed",
        "fct-type": "unknown",
        "title": "writeUnboxed"
      },
      "index": {
        "description": "Write the value to mutable byte vector at given index",
        "hierarchy": "Data Unboxed",
        "module": "Data.Unboxed",
        "name": "writeUnboxed",
        "normalized": "MUVec a b-\u003ec-\u003eb-\u003ed()",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "MUVec s value-\u003eindex-\u003evalue-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#t:MVec",
      "description": {
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#MVec",
        "fct-type": "unknown",
        "title": "MVec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "MVec",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "MVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#t:Vec",
      "description": {
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#Vec",
        "fct-type": "unknown",
        "title": "Vec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "Vec",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:allocBoxed",
      "description": {
        "fct-descr": "Alloc the mutable vector\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "elems -\u003e a -\u003e m (MVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#allocBoxed",
        "fct-type": "unknown",
        "title": "allocBoxed"
      },
      "index": {
        "description": "Alloc the mutable vector",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "allocBoxed",
        "normalized": "a-\u003eb-\u003ec(MVec d b)",
        "package": "ArrayRef",
        "partial": "Boxed",
        "signature": "elems-\u003ea-\u003em(MVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:freezeBoxed",
      "description": {
        "fct-descr": "Mutable-\u003eimmutable vector conversion which takes a copy of contents\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "MVec s a -\u003e Int -\u003e a -\u003e m (Vec a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#freezeBoxed",
        "fct-type": "unknown",
        "title": "freezeBoxed"
      },
      "index": {
        "description": "Mutable immutable vector conversion which takes copy of contents",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "freezeBoxed",
        "normalized": "MVec a b-\u003eInt-\u003eb-\u003ec(Vec b)",
        "package": "ArrayRef",
        "partial": "Boxed",
        "signature": "MVec s a-\u003eInt-\u003ea-\u003em(Vec a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:fromI#",
      "description": {
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "n -\u003e Int#",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#fromI%23",
        "fct-type": "unknown",
        "title": "fromI#"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "fromI#",
        "normalized": "a-\u003eInt #",
        "package": "ArrayRef",
        "partial": "",
        "signature": "n-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:indexBoxed",
      "description": {
        "fct-descr": "Read the value from immutable vector at given index\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "Vec value -\u003e index -\u003e value",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#indexBoxed",
        "fct-type": "unknown",
        "title": "indexBoxed"
      },
      "index": {
        "description": "Read the value from immutable vector at given index",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "indexBoxed",
        "normalized": "Vec a-\u003eb-\u003ea",
        "package": "ArrayRef",
        "partial": "Boxed",
        "signature": "Vec value-\u003eindex-\u003evalue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:readBoxed",
      "description": {
        "fct-descr": "Read the value from mutable vector at given index\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "MVec s value -\u003e index -\u003e m value",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#readBoxed",
        "fct-type": "unknown",
        "title": "readBoxed"
      },
      "index": {
        "description": "Read the value from mutable vector at given index",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "readBoxed",
        "normalized": "MVec a b-\u003ec-\u003ed b",
        "package": "ArrayRef",
        "partial": "Boxed",
        "signature": "MVec s value-\u003eindex-\u003em value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:thawBoxed",
      "description": {
        "fct-descr": "Immutable-\u003emutable vector conversion which takes a copy of contents\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "Vec a -\u003e Int -\u003e a -\u003e m (MVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#thawBoxed",
        "fct-type": "unknown",
        "title": "thawBoxed"
      },
      "index": {
        "description": "Immutable mutable vector conversion which takes copy of contents",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "thawBoxed",
        "normalized": "Vec a-\u003eInt-\u003ea-\u003eb(MVec c a)",
        "package": "ArrayRef",
        "partial": "Boxed",
        "signature": "Vec a-\u003eInt-\u003ea-\u003em(MVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:unsafeFreezeBoxed",
      "description": {
        "fct-descr": "Mutable-\u003eimmutable vector on-place conversion\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "MVec s a -\u003e m (Vec a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#unsafeFreezeBoxed",
        "fct-type": "unknown",
        "title": "unsafeFreezeBoxed"
      },
      "index": {
        "description": "Mutable immutable vector on-place conversion",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "unsafeFreezeBoxed",
        "normalized": "MVec a b-\u003ec(Vec b)",
        "package": "ArrayRef",
        "partial": "Freeze Boxed",
        "signature": "MVec s a-\u003em(Vec a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:unsafeThawBoxed",
      "description": {
        "fct-descr": "Immutable-\u003emutable vector on-place conversion\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "Vec a -\u003e m (MVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#unsafeThawBoxed",
        "fct-type": "unknown",
        "title": "unsafeThawBoxed"
      },
      "index": {
        "description": "Immutable mutable vector on-place conversion",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "unsafeThawBoxed",
        "normalized": "Vec a-\u003eb(MVec c a)",
        "package": "ArrayRef",
        "partial": "Thaw Boxed",
        "signature": "Vec a-\u003em(MVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-ArrBZ.html#v:writeBoxed",
      "description": {
        "fct-descr": "Write the value to mutable vector at given index\n",
        "fct-module": "GHC.ArrBZ",
        "fct-package": "ArrayRef",
        "fct-signature": "MVec s value -\u003e index -\u003e value -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-ArrBZ.html#writeBoxed",
        "fct-type": "unknown",
        "title": "writeBoxed"
      },
      "index": {
        "description": "Write the value to mutable vector at given index",
        "hierarchy": "GHC ArrBZ",
        "module": "GHC.ArrBZ",
        "name": "writeBoxed",
        "normalized": "MVec a b-\u003ec-\u003eb-\u003ed()",
        "package": "ArrayRef",
        "partial": "Boxed",
        "signature": "MVec s value-\u003eindex-\u003evalue-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:IOSpecific",
      "description": {
        "fct-descr": "Type functions which converts universal ST or IO types to IO-specific ones\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific",
        "fct-type": "unknown",
        "title": "IOSpecific"
      },
      "index": {
        "description": "Type functions which converts universal ST or IO types to IO-specific ones",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "IOSpecific",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOSpecific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:IOSpecific2",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific2",
        "fct-type": "unknown",
        "title": "IOSpecific2"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "IOSpecific2",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOSpecific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:IOSpecific3",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#IOSpecific3",
        "fct-type": "unknown",
        "title": "IOSpecific3"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "IOSpecific3",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "IOSpecific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:MUVec",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#MUVec",
        "fct-type": "unknown",
        "title": "MUVec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "MUVec",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "MUVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#t:UVec",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#UVec",
        "fct-type": "unknown",
        "title": "UVec"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "UVec",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "UVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:STorIO",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#STorIO",
        "fct-type": "unknown",
        "title": "STorIO"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "STorIO",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "STor IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:Unboxed",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#Unboxed",
        "fct-type": "unknown",
        "title": "Unboxed"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "Unboxed",
        "normalized": "",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:allocUnboxedBytes",
      "description": {
        "fct-descr": "Alloc the mutable byte vector\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "bytes -\u003e m (MUVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#allocUnboxedBytes",
        "fct-type": "unknown",
        "title": "allocUnboxedBytes"
      },
      "index": {
        "description": "Alloc the mutable byte vector",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "allocUnboxedBytes",
        "normalized": "a-\u003eb(MUVec c d)",
        "package": "ArrayRef",
        "partial": "Unboxed Bytes",
        "signature": "bytes-\u003em(MUVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:castMUnboxed",
      "description": {
        "fct-descr": "Recast mutable unboxed vector\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s a -\u003e MUVec s b",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#castMUnboxed",
        "fct-type": "unknown",
        "title": "castMUnboxed"
      },
      "index": {
        "description": "Recast mutable unboxed vector",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "castMUnboxed",
        "normalized": "MUVec a b-\u003eMUVec a c",
        "package": "ArrayRef",
        "partial": "MUnboxed",
        "signature": "MUVec s a-\u003eMUVec s b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:castUnboxed",
      "description": {
        "fct-descr": "Recast immutable unboxed vector\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec a -\u003e UVec b",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#castUnboxed",
        "fct-type": "unknown",
        "title": "castUnboxed"
      },
      "index": {
        "description": "Recast immutable unboxed vector",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "castUnboxed",
        "normalized": "UVec a-\u003eUVec b",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "UVec a-\u003eUVec b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:freezeUnboxed",
      "description": {
        "fct-descr": "Mutable-\u003eimmutable byte vector conversion which takes a copy of contents\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s a -\u003e Int -\u003e m (UVec a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#freezeUnboxed",
        "fct-type": "unknown",
        "title": "freezeUnboxed"
      },
      "index": {
        "description": "Mutable immutable byte vector conversion which takes copy of contents",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "freezeUnboxed",
        "normalized": "MUVec a b-\u003eInt-\u003ec(UVec b)",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "MUVec s a-\u003eInt-\u003em(UVec a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:fromI#",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "n -\u003e Int#",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#fromI%23",
        "fct-type": "unknown",
        "title": "fromI#"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "fromI#",
        "normalized": "a-\u003eInt #",
        "package": "ArrayRef",
        "partial": "",
        "signature": "n-\u003eInt #"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:indexUnboxed",
      "description": {
        "fct-descr": "Read the value from immutable byte vector at given index\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec value -\u003e index -\u003e value",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#indexUnboxed",
        "fct-type": "unknown",
        "title": "indexUnboxed"
      },
      "index": {
        "description": "Read the value from immutable byte vector at given index",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "indexUnboxed",
        "normalized": "UVec a-\u003eb-\u003ea",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "UVec value-\u003eindex-\u003evalue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:mLift",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "(State# s -\u003e (#State# s, a#)) -\u003e m a",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#mLift",
        "fct-type": "unknown",
        "title": "mLift"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "mLift",
        "normalized": "(State # a-\u003e(#State # a,b #))-\u003ec b",
        "package": "ArrayRef",
        "partial": "Lift",
        "signature": "(State # s-\u003e(#State # s,a #))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:memcpy",
      "description": {
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MutableByteArray# RealWorld -\u003e ByteArray# -\u003e Int# -\u003e IO ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#memcpy",
        "fct-type": "unknown",
        "title": "memcpy"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "memcpy",
        "normalized": "MutableByteArray # RealWorld-\u003eByteArray #-\u003eInt #-\u003eIO()",
        "package": "ArrayRef",
        "partial": "",
        "signature": "MutableByteArray # RealWorld-\u003eByteArray #-\u003eInt #-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:readUnboxed",
      "description": {
        "fct-descr": "Read the value from mutable byte vector at given index\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s value -\u003e index -\u003e m value",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#readUnboxed",
        "fct-type": "unknown",
        "title": "readUnboxed"
      },
      "index": {
        "description": "Read the value from mutable byte vector at given index",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "readUnboxed",
        "normalized": "MUVec a b-\u003ec-\u003ed b",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "MUVec s value-\u003eindex-\u003em value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:sizeOfUnboxed",
      "description": {
        "fct-descr": "How many bytes required to represent values of this type\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "value -\u003e Int",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#sizeOfUnboxed",
        "fct-type": "unknown",
        "title": "sizeOfUnboxed"
      },
      "index": {
        "description": "How many bytes required to represent values of this type",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "sizeOfUnboxed",
        "normalized": "a-\u003eInt",
        "package": "ArrayRef",
        "partial": "Of Unboxed",
        "signature": "value-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:thawUnboxed",
      "description": {
        "fct-descr": "Immutable-\u003emutable byte vector conversion which takes a copy of contents\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec a -\u003e Int -\u003e m (MUVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#thawUnboxed",
        "fct-type": "unknown",
        "title": "thawUnboxed"
      },
      "index": {
        "description": "Immutable mutable byte vector conversion which takes copy of contents",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "thawUnboxed",
        "normalized": "UVec a-\u003eInt-\u003eb(MUVec c a)",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "UVec a-\u003eInt-\u003em(MUVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:unsafeFreezeUnboxed",
      "description": {
        "fct-descr": "Mutable-\u003eimmutable byte vector on-place conversion\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s a -\u003e m (UVec a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#unsafeFreezeUnboxed",
        "fct-type": "unknown",
        "title": "unsafeFreezeUnboxed"
      },
      "index": {
        "description": "Mutable immutable byte vector on-place conversion",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "unsafeFreezeUnboxed",
        "normalized": "MUVec a b-\u003ec(UVec b)",
        "package": "ArrayRef",
        "partial": "Freeze Unboxed",
        "signature": "MUVec s a-\u003em(UVec a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:unsafeThawUnboxed",
      "description": {
        "fct-descr": "Immutable-\u003emutable byte vector on-place conversion\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "UVec a -\u003e m (MUVec s a)",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#unsafeThawUnboxed",
        "fct-type": "unknown",
        "title": "unsafeThawUnboxed"
      },
      "index": {
        "description": "Immutable mutable byte vector on-place conversion",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "unsafeThawUnboxed",
        "normalized": "UVec a-\u003eb(MUVec c a)",
        "package": "ArrayRef",
        "partial": "Thaw Unboxed",
        "signature": "UVec a-\u003em(MUVec s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ArrayRef/docs/GHC-Unboxed.html#v:writeUnboxed",
      "description": {
        "fct-descr": "Write the value to mutable byte vector at given index\n",
        "fct-module": "GHC.Unboxed",
        "fct-package": "ArrayRef",
        "fct-signature": "MUVec s value -\u003e index -\u003e value -\u003e m ()",
        "fct-source": "http://hackage.haskell.org/package/ArrayRef/docs/src/GHC-Unboxed.html#writeUnboxed",
        "fct-type": "unknown",
        "title": "writeUnboxed"
      },
      "index": {
        "description": "Write the value to mutable byte vector at given index",
        "hierarchy": "GHC Unboxed",
        "module": "GHC.Unboxed",
        "name": "writeUnboxed",
        "normalized": "MUVec a b-\u003ec-\u003eb-\u003ed()",
        "package": "ArrayRef",
        "partial": "Unboxed",
        "signature": "MUVec s value-\u003eindex-\u003evalue-\u003em()"
      }
    }
  }
]