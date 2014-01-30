[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#",
      "description": {
        "fct-module": "Data.RingBuffer.Chord",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-Chord.html",
        "fct-type": "module",
        "title": "Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Chord",
        "module": "Data.RingBuffer.Chord",
        "name": "Chord",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#t:Chord",
      "description": {
        "fct-module": "Data.RingBuffer.Chord",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-Chord.html#Chord",
        "fct-type": "data",
        "title": "Chord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Chord",
        "module": "Data.RingBuffer.Chord",
        "name": "Chord",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#v:cToVec",
      "description": {
        "fct-module": "Data.RingBuffer.Chord",
        "fct-package": "combobuffer",
        "fct-signature": "Chord a -\u003e Vector a",
        "fct-source": "src/Data-RingBuffer-Chord.html#cToVec",
        "fct-type": "function",
        "title": "cToVec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Chord",
        "module": "Data.RingBuffer.Chord",
        "name": "cToVec",
        "normalized": "Chord a-\u003eVector a",
        "package": "combobuffer",
        "partial": "To Vec",
        "signature": "Chord a-\u003eVector a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#v:emptyChord",
      "description": {
        "fct-descr": "\u003cp\u003ean empty chord.\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.Chord",
        "fct-package": "combobuffer",
        "fct-signature": "a -\u003e Chord a",
        "fct-source": "src/Data-RingBuffer-Chord.html#emptyChord",
        "fct-type": "function",
        "title": "emptyChord"
      },
      "index": {
        "description": "an empty chord",
        "hierarchy": "Data RingBuffer Chord",
        "module": "Data.RingBuffer.Chord",
        "name": "emptyChord",
        "normalized": "a-\u003eChord a",
        "package": "combobuffer",
        "partial": "Chord",
        "signature": "a-\u003eChord a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eA RingBuffer is a fixed-length buffer that supports lookups anywhere in\n the structure and pushing new elements onto the front.  When a new value is\n pushed, the oldest value will be dropped.\n\u003c/p\u003e\u003cp\u003eThis module provides an implementation based on\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, with O(1) lookups and O(n) pushes.  Other\n modules provide implementations with different performance profiles.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "The RingBuffer interface RingBuffer is fixed-length buffer that supports lookups anywhere in the structure and pushing new elements onto the front When new value is pushed the oldest value will be dropped This module provides an implementation based on Vector with lookups and pushes Other modules provide implementations with different performance profiles",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "Class",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:El",
      "description": {
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "El",
        "fct-type": "function",
        "title": "El"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "El",
        "normalized": "",
        "package": "combobuffer",
        "partial": "El",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:Initializable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eInitializable\u003c/a\u003e\u003c/code\u003e with the given value at every position.\n Essentially a generalized \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#Initializable",
        "fct-type": "class",
        "title": "Initializable"
      },
      "index": {
        "description": "Create new Initializable with the given value at every position Essentially generalized replicate",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "Initializable",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Initializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:RingBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#RingBuffer",
        "fct-type": "class",
        "title": "RingBuffer"
      },
      "index": {
        "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "RingBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Ring Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:-33-",
      "description": {
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e El c",
        "fct-source": "src/Data-RingBuffer-Class.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "(!) !",
        "normalized": "a-\u003eInt-\u003eEl a",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eEl c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:length",
      "description": {
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int",
        "fct-source": "src/Data-RingBuffer-Class.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:newInit",
      "description": {
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "El c -\u003e Int -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#newInit",
        "fct-type": "method",
        "title": "newInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "newInit",
        "normalized": "El a-\u003eInt-\u003ea",
        "package": "combobuffer",
        "partial": "Init",
        "signature": "El c-\u003eInt-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:push",
      "description": {
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e El c -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#push",
        "fct-type": "method",
        "title": "push"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "push",
        "normalized": "a-\u003eEl a-\u003ea",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eEl c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:slice",
      "description": {
        "fct-module": "Data.RingBuffer.Class",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
        "fct-source": "src/Data-RingBuffer-Class.html#slice",
        "fct-type": "method",
        "title": "slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer Class",
        "module": "Data.RingBuffer.Class",
        "name": "slice",
        "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eInt-\u003e[El c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#",
      "description": {
        "fct-module": "Data.RingBuffer.ComboBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html",
        "fct-type": "module",
        "title": "ComboBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer ComboBuffer",
        "module": "Data.RingBuffer.ComboBuffer",
        "name": "ComboBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Combo Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#t:ComboBuffer",
      "description": {
        "fct-module": "Data.RingBuffer.ComboBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
        "fct-type": "data",
        "title": "ComboBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer ComboBuffer",
        "module": "Data.RingBuffer.ComboBuffer",
        "name": "ComboBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Combo Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#v:CB",
      "description": {
        "fct-module": "Data.RingBuffer.ComboBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "CB !Int !Int !(Vector a) !(Vector a) (Chord a)",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
        "fct-type": "function",
        "title": "CB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer ComboBuffer",
        "module": "Data.RingBuffer.ComboBuffer",
        "name": "CB",
        "normalized": "",
        "package": "combobuffer",
        "partial": "CB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#v:CBOdd",
      "description": {
        "fct-module": "Data.RingBuffer.ComboBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "CBOdd !Int !Int !(Vector a) !(Vector a) (Chord a)",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
        "fct-type": "function",
        "title": "CBOdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer ComboBuffer",
        "module": "Data.RingBuffer.ComboBuffer",
        "name": "CBOdd",
        "normalized": "",
        "package": "combobuffer",
        "partial": "CBOdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRingBuffer\u003c/a\u003e\u003c/code\u003e implementation based on IntMaps.  Operations have the same\n complexity as the underlying IntMap\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-MapBuffer.html",
        "fct-type": "module",
        "title": "MapBuffer"
      },
      "index": {
        "description": "RingBuffer implementation based on IntMaps Operations have the same complexity as the underlying IntMap",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "MapBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Map Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#t:Initializable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eInitializable\u003c/a\u003e\u003c/code\u003e with the given value at every position.\n Essentially a generalized \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#Initializable",
        "fct-type": "class",
        "title": "Initializable"
      },
      "index": {
        "description": "Create new Initializable with the given value at every position Essentially generalized replicate",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "Initializable",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Initializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#t:MapBuffer",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
        "fct-type": "data",
        "title": "MapBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "MapBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Map Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#t:RingBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#RingBuffer",
        "fct-type": "class",
        "title": "RingBuffer"
      },
      "index": {
        "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "RingBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Ring Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:-33-",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e El c",
        "fct-source": "src/Data-RingBuffer-Class.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "(!) !",
        "normalized": "a-\u003eInt-\u003eEl a",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eEl c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:MB",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "MB !Int !(IntMap a)",
        "fct-source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
        "fct-type": "function",
        "title": "MB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "MB",
        "normalized": "",
        "package": "combobuffer",
        "partial": "MB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:length",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int",
        "fct-source": "src/Data-RingBuffer-Class.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:newInit",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "El c -\u003e Int -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#newInit",
        "fct-type": "method",
        "title": "newInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "newInit",
        "normalized": "El a-\u003eInt-\u003ea",
        "package": "combobuffer",
        "partial": "Init",
        "signature": "El c-\u003eInt-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:push",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e El c -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#push",
        "fct-type": "method",
        "title": "push"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "push",
        "normalized": "a-\u003eEl a-\u003ea",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eEl c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:slice",
      "description": {
        "fct-module": "Data.RingBuffer.MapBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
        "fct-source": "src/Data-RingBuffer-Class.html#slice",
        "fct-type": "method",
        "title": "slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer MapBuffer",
        "module": "Data.RingBuffer.MapBuffer",
        "name": "slice",
        "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eInt-\u003e[El c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict vectors of doubles to length == 30\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-SVec.html",
        "fct-type": "module",
        "title": "SVec"
      },
      "index": {
        "description": "Strict vectors of doubles to length",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "SVec",
        "normalized": "",
        "package": "combobuffer",
        "partial": "SVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T1",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T1",
        "fct-type": "data",
        "title": "T1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T1",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T10",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T10",
        "fct-type": "data",
        "title": "T10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T10",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T11",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T11",
        "fct-type": "data",
        "title": "T11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T11",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T12",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T12",
        "fct-type": "data",
        "title": "T12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T12",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T13",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T13",
        "fct-type": "data",
        "title": "T13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T13",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T14",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T14",
        "fct-type": "data",
        "title": "T14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T14",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T15",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T15",
        "fct-type": "data",
        "title": "T15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T15",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T16",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T16",
        "fct-type": "data",
        "title": "T16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T16",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T17",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T17",
        "fct-type": "data",
        "title": "T17"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T17",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T18",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T18",
        "fct-type": "data",
        "title": "T18"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T18",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T19",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T19",
        "fct-type": "data",
        "title": "T19"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T19",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T2",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T2",
        "fct-type": "data",
        "title": "T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T2",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T20",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T20",
        "fct-type": "data",
        "title": "T20"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T20",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T21",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T21",
        "fct-type": "data",
        "title": "T21"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T21",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T22",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T22",
        "fct-type": "data",
        "title": "T22"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T22",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T23",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T23",
        "fct-type": "data",
        "title": "T23"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T23",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T24",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T24",
        "fct-type": "data",
        "title": "T24"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T24",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T25",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T25",
        "fct-type": "data",
        "title": "T25"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T25",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T26",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T26",
        "fct-type": "data",
        "title": "T26"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T26",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T27",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T27",
        "fct-type": "data",
        "title": "T27"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T27",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T28",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T28",
        "fct-type": "data",
        "title": "T28"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T28",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T29",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T29",
        "fct-type": "data",
        "title": "T29"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T29",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T3",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T3",
        "fct-type": "data",
        "title": "T3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T3",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T30",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T30",
        "fct-type": "data",
        "title": "T30"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T30",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T4",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T4",
        "fct-type": "data",
        "title": "T4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T4",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T5",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T5",
        "fct-type": "data",
        "title": "T5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T5",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T6",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T6",
        "fct-type": "data",
        "title": "T6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T6",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T7",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T7",
        "fct-type": "data",
        "title": "T7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T7",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T8",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T8",
        "fct-type": "data",
        "title": "T8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T8",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T9",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#T9",
        "fct-type": "data",
        "title": "T9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T9",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:TVec32",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a 32-element polymorphic vector, maybe I should just use\n Data.Vector?\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SVec.html#TVec32",
        "fct-type": "data",
        "title": "TVec32"
      },
      "index": {
        "description": "Generate element polymorphic vector maybe should just use Data.Vector",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "TVec32",
        "normalized": "",
        "package": "combobuffer",
        "partial": "TVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T1",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T1 !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T1",
        "fct-type": "function",
        "title": "T1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T1",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T10",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T10 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T10",
        "fct-type": "function",
        "title": "T10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T10",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T11",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T11 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T11",
        "fct-type": "function",
        "title": "T11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T11",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T12",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T12 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T12",
        "fct-type": "function",
        "title": "T12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T12",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T13",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T13 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T13",
        "fct-type": "function",
        "title": "T13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T13",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T14",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T14 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T14",
        "fct-type": "function",
        "title": "T14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T14",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T15",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T15 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T15",
        "fct-type": "function",
        "title": "T15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T15",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T16",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T16 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T16",
        "fct-type": "function",
        "title": "T16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T16",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T17",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T17 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T17",
        "fct-type": "function",
        "title": "T17"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T17",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T18",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T18 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T18",
        "fct-type": "function",
        "title": "T18"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T18",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T19",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T19 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T19",
        "fct-type": "function",
        "title": "T19"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T19",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T2",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T2 !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T2",
        "fct-type": "function",
        "title": "T2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T2",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T20",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T20 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T20",
        "fct-type": "function",
        "title": "T20"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T20",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T21",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T21 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T21",
        "fct-type": "function",
        "title": "T21"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T21",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T22",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T22 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T22",
        "fct-type": "function",
        "title": "T22"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T22",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T23",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T23 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T23",
        "fct-type": "function",
        "title": "T23"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T23",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T24",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T24 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T24",
        "fct-type": "function",
        "title": "T24"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T24",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T25",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T25 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T25",
        "fct-type": "function",
        "title": "T25"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T25",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T26",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T26 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T26",
        "fct-type": "function",
        "title": "T26"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T26",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T27",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T27 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T27",
        "fct-type": "function",
        "title": "T27"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T27",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T28",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T28 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T28",
        "fct-type": "function",
        "title": "T28"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T28",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T29",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T29 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T29",
        "fct-type": "function",
        "title": "T29"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T29",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T3",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T3 !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T3",
        "fct-type": "function",
        "title": "T3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T3",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T30",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T30 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T30",
        "fct-type": "function",
        "title": "T30"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T30",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T4",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T4 !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T4",
        "fct-type": "function",
        "title": "T4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T4",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T5",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T5 !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T5",
        "fct-type": "function",
        "title": "T5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T5",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T6",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T6 !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T6",
        "fct-type": "function",
        "title": "T6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T6",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T7",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T7 !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T7",
        "fct-type": "function",
        "title": "T7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T7",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T8",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T8 !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T8",
        "fct-type": "function",
        "title": "T8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T8",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T9",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "T9 !Double !Double !Double !Double !Double !Double !Double !Double !Double",
        "fct-source": "src/Data-RingBuffer-SVec.html#T9",
        "fct-type": "function",
        "title": "T9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "T9",
        "normalized": "",
        "package": "combobuffer",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:TVec32",
      "description": {
        "fct-module": "Data.RingBuffer.SVec",
        "fct-package": "combobuffer",
        "fct-signature": "TVec32 !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a",
        "fct-source": "src/Data-RingBuffer-SVec.html#TVec32",
        "fct-type": "function",
        "title": "TVec32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SVec",
        "module": "Data.RingBuffer.SVec",
        "name": "TVec32",
        "normalized": "",
        "package": "combobuffer",
        "partial": "TVec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRingBuffer\u003c/a\u003e\u003c/code\u003e based on \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.  Asymptotic behavior is quite\n good in all cases, but constant factors are very high.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-SeqBuffer.html",
        "fct-type": "module",
        "title": "SeqBuffer"
      },
      "index": {
        "description": "RingBuffer based on Seq Asymptotic behavior is quite good in all cases but constant factors are very high",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "SeqBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Seq Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#t:RingBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#RingBuffer",
        "fct-type": "class",
        "title": "RingBuffer"
      },
      "index": {
        "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "RingBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Ring Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#t:SeqBuffer",
      "description": {
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SeqBuffer.html#SeqBuffer",
        "fct-type": "data",
        "title": "SeqBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "SeqBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Seq Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:-33-",
      "description": {
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e El c",
        "fct-source": "src/Data-RingBuffer-Class.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "(!) !",
        "normalized": "a-\u003eInt-\u003eEl a",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eEl c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:length",
      "description": {
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int",
        "fct-source": "src/Data-RingBuffer-Class.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new SeqBuffer, initialized to all 0's, of the given size\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "Int -\u003e SeqBuffer a",
        "fct-source": "src/Data-RingBuffer-SeqBuffer.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new SeqBuffer initialized to all of the given size",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "new",
        "normalized": "Int-\u003eSeqBuffer a",
        "package": "combobuffer",
        "partial": "",
        "signature": "Int-\u003eSeqBuffer a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:push",
      "description": {
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e El c -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#push",
        "fct-type": "method",
        "title": "push"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "push",
        "normalized": "a-\u003eEl a-\u003ea",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eEl c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:slice",
      "description": {
        "fct-module": "Data.RingBuffer.SeqBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
        "fct-source": "src/Data-RingBuffer-Class.html#slice",
        "fct-type": "method",
        "title": "slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer SeqBuffer",
        "module": "Data.RingBuffer.SeqBuffer",
        "name": "slice",
        "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eInt-\u003e[El c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-TGen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell splices to create  constant-sized vectors and RingBuffer\n instances for them\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.RingBuffer.TGen",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer-TGen.html",
        "fct-type": "module",
        "title": "TGen"
      },
      "index": {
        "description": "Template Haskell splices to create constant-sized vectors and RingBuffer instances for them",
        "hierarchy": "Data RingBuffer TGen",
        "module": "Data.RingBuffer.TGen",
        "name": "TGen",
        "normalized": "",
        "package": "combobuffer",
        "partial": "TGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-TGen.html#v:mkVec",
      "description": {
        "fct-module": "Data.RingBuffer.TGen",
        "fct-package": "combobuffer",
        "fct-signature": "Type -\u003e [TyVarBndr] -\u003e [Char] -\u003e Int -\u003e Q [Dec]",
        "fct-source": "src/Data-RingBuffer-TGen.html#mkVec",
        "fct-type": "function",
        "title": "mkVec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer TGen",
        "module": "Data.RingBuffer.TGen",
        "name": "mkVec",
        "normalized": "Type-\u003e[TyVarBndr]-\u003e[Char]-\u003eInt-\u003eQ[Dec]",
        "package": "combobuffer",
        "partial": "Vec",
        "signature": "Type-\u003e[TyVarBndr]-\u003e[Char]-\u003eInt-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-TGen.html#v:mkVecFromTo",
      "description": {
        "fct-module": "Data.RingBuffer.TGen",
        "fct-package": "combobuffer",
        "fct-signature": "Int -\u003e Int -\u003e Type -\u003e [TyVarBndr] -\u003e [Char] -\u003e Q [Dec]",
        "fct-source": "src/Data-RingBuffer-TGen.html#mkVecFromTo",
        "fct-type": "function",
        "title": "mkVecFromTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer TGen",
        "module": "Data.RingBuffer.TGen",
        "name": "mkVecFromTo",
        "normalized": "Int-\u003eInt-\u003eType-\u003e[TyVarBndr]-\u003e[Char]-\u003eQ[Dec]",
        "package": "combobuffer",
        "partial": "Vec From To",
        "signature": "Int-\u003eInt-\u003eType-\u003e[TyVarBndr]-\u003e[Char]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "module",
        "fct-source": "src/Data-RingBuffer.html",
        "fct-type": "module",
        "title": "RingBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "RingBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Ring Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:ComboBuffer",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
        "fct-type": "data",
        "title": "ComboBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "ComboBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Combo Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:El",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "El",
        "fct-type": "function",
        "title": "El"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "El",
        "normalized": "",
        "package": "combobuffer",
        "partial": "El",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:Initializable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eInitializable\u003c/a\u003e\u003c/code\u003e with the given value at every position.\n Essentially a generalized \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#Initializable",
        "fct-type": "class",
        "title": "Initializable"
      },
      "index": {
        "description": "Create new Initializable with the given value at every position Essentially generalized replicate",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "Initializable",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Initializable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:MapBuffer",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
        "fct-type": "data",
        "title": "MapBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "MapBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Map Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:RingBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "class",
        "fct-source": "src/Data-RingBuffer-Class.html#RingBuffer",
        "fct-type": "class",
        "title": "RingBuffer"
      },
      "index": {
        "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "RingBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Ring Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:SeqBuffer",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "data",
        "fct-source": "src/Data-RingBuffer-SeqBuffer.html#SeqBuffer",
        "fct-type": "data",
        "title": "SeqBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "SeqBuffer",
        "normalized": "",
        "package": "combobuffer",
        "partial": "Seq Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:-33-",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e El c",
        "fct-source": "src/Data-RingBuffer-Class.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "(!) !",
        "normalized": "a-\u003eInt-\u003eEl a",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eEl c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:CB",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "CB !Int !Int !(Vector a) !(Vector a) (Chord a)",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
        "fct-type": "function",
        "title": "CB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "CB",
        "normalized": "",
        "package": "combobuffer",
        "partial": "CB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:CBOdd",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "CBOdd !Int !Int !(Vector a) !(Vector a) (Chord a)",
        "fct-source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
        "fct-type": "function",
        "title": "CBOdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "CBOdd",
        "normalized": "",
        "package": "combobuffer",
        "partial": "CBOdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:MB",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "MB !Int !(IntMap a)",
        "fct-source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
        "fct-type": "function",
        "title": "MB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "MB",
        "normalized": "",
        "package": "combobuffer",
        "partial": "MB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:length",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int",
        "fct-source": "src/Data-RingBuffer-Class.html#length",
        "fct-type": "method",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "length",
        "normalized": "a-\u003eInt",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:newInit",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "El c -\u003e Int -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#newInit",
        "fct-type": "method",
        "title": "newInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "newInit",
        "normalized": "El a-\u003eInt-\u003ea",
        "package": "combobuffer",
        "partial": "Init",
        "signature": "El c-\u003eInt-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:push",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e El c -\u003e c",
        "fct-source": "src/Data-RingBuffer-Class.html#push",
        "fct-type": "method",
        "title": "push"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "push",
        "normalized": "a-\u003eEl a-\u003ea",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eEl c-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:slice",
      "description": {
        "fct-module": "Data.RingBuffer",
        "fct-package": "combobuffer",
        "fct-signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
        "fct-source": "src/Data-RingBuffer-Class.html#slice",
        "fct-type": "method",
        "title": "slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data RingBuffer",
        "module": "Data.RingBuffer",
        "name": "slice",
        "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
        "package": "combobuffer",
        "partial": "",
        "signature": "c-\u003eInt-\u003eInt-\u003e[El c]"
      }
    }
  }
]