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
        "word": "combobuffer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Chord",
          "name": "Chord",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Chord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data RingBuffer Chord",
          "module": "Data.RingBuffer.Chord",
          "name": "Chord",
          "package": "combobuffer",
          "partial": "Chord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Chord",
          "name": "Chord",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Chord.html#Chord",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer Chord",
          "module": "Data.RingBuffer.Chord",
          "name": "Chord",
          "package": "combobuffer",
          "partial": "Chord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#t:Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Chord",
          "name": "cToVec",
          "package": "combobuffer",
          "signature": "Chord a -\u003e Vector a",
          "source": "src/Data-RingBuffer-Chord.html#cToVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer Chord",
          "module": "Data.RingBuffer.Chord",
          "name": "cToVec",
          "normalized": "Chord a-\u003eVector a",
          "package": "combobuffer",
          "partial": "To Vec",
          "signature": "Chord a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#v:cToVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean empty chord.\n\u003c/p\u003e",
          "module": "Data.RingBuffer.Chord",
          "name": "emptyChord",
          "package": "combobuffer",
          "signature": "a -\u003e Chord a",
          "source": "src/Data-RingBuffer-Chord.html#emptyChord",
          "type": "function"
        },
        "index": {
          "description": "an empty chord",
          "hierarchy": "Data RingBuffer Chord",
          "module": "Data.RingBuffer.Chord",
          "name": "emptyChord",
          "normalized": "a-\u003eChord a",
          "package": "combobuffer",
          "partial": "Chord",
          "signature": "a-\u003eChord a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Chord.html#v:emptyChord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eA RingBuffer is a fixed-length buffer that supports lookups anywhere in\n the structure and pushing new elements onto the front.  When a new value is\n pushed, the oldest value will be dropped.\n\u003c/p\u003e\u003cp\u003eThis module provides an implementation based on\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, with O(1) lookups and O(n) pushes.  Other\n modules provide implementations with different performance profiles.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RingBuffer.Class",
          "name": "Class",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The RingBuffer interface RingBuffer is fixed-length buffer that supports lookups anywhere in the structure and pushing new elements onto the front When new value is pushed the oldest value will be dropped This module provides an implementation based on Vector with lookups and pushes Other modules provide implementations with different performance profiles",
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "Class",
          "package": "combobuffer",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RingBuffer.Class\",\"Data.RingBuffer\"]",
          "name": "El",
          "package": "combobuffer",
          "signature": "El",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:El\",\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:El\"]"
        },
        "index": {
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "El",
          "package": "combobuffer",
          "partial": "El",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:El"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eInitializable\u003c/a\u003e\u003c/code\u003e with the given value at every position.\n Essentially a generalized \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.RingBuffer.Class",
          "name": "Initializable",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#Initializable",
          "type": "class"
        },
        "index": {
          "description": "Create new Initializable with the given value at every position Essentially generalized replicate",
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "Initializable",
          "package": "combobuffer",
          "partial": "Initializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:Initializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
          "module": "Data.RingBuffer.Class",
          "name": "RingBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#RingBuffer",
          "type": "class"
        },
        "index": {
          "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "RingBuffer",
          "package": "combobuffer",
          "partial": "Ring Buffer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#t:RingBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Class",
          "name": "(!)",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e El c",
          "source": "src/Data-RingBuffer-Class.html#%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "(!) !",
          "normalized": "a-\u003eInt-\u003eEl a",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eEl c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Class",
          "name": "length",
          "package": "combobuffer",
          "signature": "c -\u003e Int",
          "source": "src/Data-RingBuffer-Class.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "combobuffer",
          "signature": "c-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Class",
          "name": "newInit",
          "package": "combobuffer",
          "signature": "El c -\u003e Int -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#newInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "newInit",
          "normalized": "El a-\u003eInt-\u003ea",
          "package": "combobuffer",
          "partial": "Init",
          "signature": "El c-\u003eInt-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:newInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Class",
          "name": "push",
          "package": "combobuffer",
          "signature": "c -\u003e El c -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "push",
          "normalized": "a-\u003eEl a-\u003ea",
          "package": "combobuffer",
          "signature": "c-\u003eEl c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.Class",
          "name": "slice",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
          "source": "src/Data-RingBuffer-Class.html#slice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer Class",
          "module": "Data.RingBuffer.Class",
          "name": "slice",
          "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eInt-\u003e[El c]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-Class.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.ComboBuffer",
          "name": "ComboBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-ComboBuffer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data RingBuffer ComboBuffer",
          "module": "Data.RingBuffer.ComboBuffer",
          "name": "ComboBuffer",
          "package": "combobuffer",
          "partial": "Combo Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.ComboBuffer",
          "name": "ComboBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer ComboBuffer",
          "module": "Data.RingBuffer.ComboBuffer",
          "name": "ComboBuffer",
          "package": "combobuffer",
          "partial": "Combo Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#t:ComboBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RingBuffer.ComboBuffer\",\"Data.RingBuffer\"]",
          "name": "CB",
          "package": "combobuffer",
          "signature": "CB !Int !Int !(Vector a) !(Vector a) (Chord a)",
          "source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#v:CB\",\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:CB\"]"
        },
        "index": {
          "hierarchy": "Data RingBuffer ComboBuffer",
          "module": "Data.RingBuffer.ComboBuffer",
          "name": "CB",
          "package": "combobuffer",
          "partial": "CB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#v:CB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RingBuffer.ComboBuffer\",\"Data.RingBuffer\"]",
          "name": "CBOdd",
          "package": "combobuffer",
          "signature": "CBOdd !Int !Int !(Vector a) !(Vector a) (Chord a)",
          "source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#v:CBOdd\",\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:CBOdd\"]"
        },
        "index": {
          "hierarchy": "Data RingBuffer ComboBuffer",
          "module": "Data.RingBuffer.ComboBuffer",
          "name": "CBOdd",
          "package": "combobuffer",
          "partial": "CBOdd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-ComboBuffer.html#v:CBOdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRingBuffer\u003c/a\u003e\u003c/code\u003e implementation based on IntMaps.  Operations have the same\n complexity as the underlying IntMap\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "MapBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-MapBuffer.html",
          "type": "module"
        },
        "index": {
          "description": "RingBuffer implementation based on IntMaps Operations have the same complexity as the underlying IntMap",
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "MapBuffer",
          "package": "combobuffer",
          "partial": "Map Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eInitializable\u003c/a\u003e\u003c/code\u003e with the given value at every position.\n Essentially a generalized \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "Initializable",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#Initializable",
          "type": "class"
        },
        "index": {
          "description": "Create new Initializable with the given value at every position Essentially generalized replicate",
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "Initializable",
          "package": "combobuffer",
          "partial": "Initializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#t:Initializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.MapBuffer",
          "name": "MapBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "MapBuffer",
          "package": "combobuffer",
          "partial": "Map Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#t:MapBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#RingBuffer",
          "type": "class"
        },
        "index": {
          "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "partial": "Ring Buffer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#t:RingBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.MapBuffer",
          "name": "(!)",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e El c",
          "source": "src/Data-RingBuffer-Class.html#%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "(!) !",
          "normalized": "a-\u003eInt-\u003eEl a",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eEl c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.RingBuffer.MapBuffer\",\"Data.RingBuffer\"]",
          "name": "MB",
          "package": "combobuffer",
          "signature": "MB !Int !(IntMap a)",
          "source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:MB\",\"http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:MB\"]"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "MB",
          "package": "combobuffer",
          "partial": "MB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:MB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.MapBuffer",
          "name": "length",
          "package": "combobuffer",
          "signature": "c -\u003e Int",
          "source": "src/Data-RingBuffer-Class.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "combobuffer",
          "signature": "c-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.MapBuffer",
          "name": "newInit",
          "package": "combobuffer",
          "signature": "El c -\u003e Int -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#newInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "newInit",
          "normalized": "El a-\u003eInt-\u003ea",
          "package": "combobuffer",
          "partial": "Init",
          "signature": "El c-\u003eInt-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:newInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.MapBuffer",
          "name": "push",
          "package": "combobuffer",
          "signature": "c -\u003e El c -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "push",
          "normalized": "a-\u003eEl a-\u003ea",
          "package": "combobuffer",
          "signature": "c-\u003eEl c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.MapBuffer",
          "name": "slice",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
          "source": "src/Data-RingBuffer-Class.html#slice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer MapBuffer",
          "module": "Data.RingBuffer.MapBuffer",
          "name": "slice",
          "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eInt-\u003e[El c]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-MapBuffer.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrict vectors of doubles to length == 30\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RingBuffer.SVec",
          "name": "SVec",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html",
          "type": "module"
        },
        "index": {
          "description": "Strict vectors of doubles to length",
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "SVec",
          "package": "combobuffer",
          "partial": "SVec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T1",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T1",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T1",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T10",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T10",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T10",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T11",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T11",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T11",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T12",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T12",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T12",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T13",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T13",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T13",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T14",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T14",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T14",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T15",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T15",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T15",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T16",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T16",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T16",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T17",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T17",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T17",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T18",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T18",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T18",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T19",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T19",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T19",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T2",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T2",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T20",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T20",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T20",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T21",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T21",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T21",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T22",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T22",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T22",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T23",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T23",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T23",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T24",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T24",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T24",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T25",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T25",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T25",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T26",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T26",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T26",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T27",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T27",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T28",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T28",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T28",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T29",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T29",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T29",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T3",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T3",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T30",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T30",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T30",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T4",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T4",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T5",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T5",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T5",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T6",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T6",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T6",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T7",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T7",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T7",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T8",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T8",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T8",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T9",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#T9",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T9",
          "package": "combobuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:T9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 32-element polymorphic vector, maybe I should just use\n Data.Vector?\n\u003c/p\u003e",
          "module": "Data.RingBuffer.SVec",
          "name": "TVec32",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SVec.html#TVec32",
          "type": "data"
        },
        "index": {
          "description": "Generate element polymorphic vector maybe should just use Data.Vector",
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "TVec32",
          "package": "combobuffer",
          "partial": "TVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#t:TVec32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T1",
          "package": "combobuffer",
          "signature": "T1 !Double",
          "source": "src/Data-RingBuffer-SVec.html#T1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T1",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T10",
          "package": "combobuffer",
          "signature": "T10 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T10",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T11",
          "package": "combobuffer",
          "signature": "T11 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T11",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T11",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T12",
          "package": "combobuffer",
          "signature": "T12 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T12",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T12",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T13",
          "package": "combobuffer",
          "signature": "T13 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T13",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T14",
          "package": "combobuffer",
          "signature": "T14 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T14",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T14",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T15",
          "package": "combobuffer",
          "signature": "T15 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T15",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T16",
          "package": "combobuffer",
          "signature": "T16 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T16",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T17",
          "package": "combobuffer",
          "signature": "T17 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T17",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T17",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T18",
          "package": "combobuffer",
          "signature": "T18 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T18",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T18",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T19",
          "package": "combobuffer",
          "signature": "T19 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T19",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T19",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T2",
          "package": "combobuffer",
          "signature": "T2 !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T2",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T20",
          "package": "combobuffer",
          "signature": "T20 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T20",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T20",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T21",
          "package": "combobuffer",
          "signature": "T21 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T21",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T22",
          "package": "combobuffer",
          "signature": "T22 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T22",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T22",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T23",
          "package": "combobuffer",
          "signature": "T23 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T23",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T24",
          "package": "combobuffer",
          "signature": "T24 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T24",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T25",
          "package": "combobuffer",
          "signature": "T25 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T25",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T25",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T26",
          "package": "combobuffer",
          "signature": "T26 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T26",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T26"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T27",
          "package": "combobuffer",
          "signature": "T27 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T27",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T27"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T28",
          "package": "combobuffer",
          "signature": "T28 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T28",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T28",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T28"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T29",
          "package": "combobuffer",
          "signature": "T29 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T29",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T29",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T29"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T3",
          "package": "combobuffer",
          "signature": "T3 !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T3",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T30",
          "package": "combobuffer",
          "signature": "T30 !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T30",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T30",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T4",
          "package": "combobuffer",
          "signature": "T4 !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T4",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T5",
          "package": "combobuffer",
          "signature": "T5 !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T5",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T6",
          "package": "combobuffer",
          "signature": "T6 !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T6",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T7",
          "package": "combobuffer",
          "signature": "T7 !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T7",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T8",
          "package": "combobuffer",
          "signature": "T8 !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T8",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "T9",
          "package": "combobuffer",
          "signature": "T9 !Double !Double !Double !Double !Double !Double !Double !Double !Double",
          "source": "src/Data-RingBuffer-SVec.html#T9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "T9",
          "package": "combobuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:T9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SVec",
          "name": "TVec32",
          "package": "combobuffer",
          "signature": "TVec32 !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a !a",
          "source": "src/Data-RingBuffer-SVec.html#TVec32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer SVec",
          "module": "Data.RingBuffer.SVec",
          "name": "TVec32",
          "package": "combobuffer",
          "partial": "TVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SVec.html#v:TVec32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRingBuffer\u003c/a\u003e\u003c/code\u003e based on \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e.  Asymptotic behavior is quite\n good in all cases, but constant factors are very high.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "SeqBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SeqBuffer.html",
          "type": "module"
        },
        "index": {
          "description": "RingBuffer based on Seq Asymptotic behavior is quite good in all cases but constant factors are very high",
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "SeqBuffer",
          "package": "combobuffer",
          "partial": "Seq Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#RingBuffer",
          "type": "class"
        },
        "index": {
          "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "partial": "Ring Buffer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#t:RingBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "SeqBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SeqBuffer.html#SeqBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "SeqBuffer",
          "package": "combobuffer",
          "partial": "Seq Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#t:SeqBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "(!)",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e El c",
          "source": "src/Data-RingBuffer-Class.html#%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "(!) !",
          "normalized": "a-\u003eInt-\u003eEl a",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eEl c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "length",
          "package": "combobuffer",
          "signature": "c -\u003e Int",
          "source": "src/Data-RingBuffer-Class.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "combobuffer",
          "signature": "c-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new SeqBuffer, initialized to all 0's, of the given size\n\u003c/p\u003e",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "new",
          "package": "combobuffer",
          "signature": "Int -\u003e SeqBuffer a",
          "source": "src/Data-RingBuffer-SeqBuffer.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create new SeqBuffer initialized to all of the given size",
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "new",
          "normalized": "Int-\u003eSeqBuffer a",
          "package": "combobuffer",
          "signature": "Int-\u003eSeqBuffer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "push",
          "package": "combobuffer",
          "signature": "c -\u003e El c -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "push",
          "normalized": "a-\u003eEl a-\u003ea",
          "package": "combobuffer",
          "signature": "c-\u003eEl c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "slice",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
          "source": "src/Data-RingBuffer-Class.html#slice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer SeqBuffer",
          "module": "Data.RingBuffer.SeqBuffer",
          "name": "slice",
          "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eInt-\u003e[El c]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-SeqBuffer.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell splices to create  constant-sized vectors and RingBuffer\n instances for them\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RingBuffer.TGen",
          "name": "TGen",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-TGen.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell splices to create constant-sized vectors and RingBuffer instances for them",
          "hierarchy": "Data RingBuffer TGen",
          "module": "Data.RingBuffer.TGen",
          "name": "TGen",
          "package": "combobuffer",
          "partial": "TGen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-TGen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.TGen",
          "name": "mkVec",
          "package": "combobuffer",
          "signature": "Type -\u003e [TyVarBndr] -\u003e [Char] -\u003e Int -\u003e Q [Dec]",
          "source": "src/Data-RingBuffer-TGen.html#mkVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer TGen",
          "module": "Data.RingBuffer.TGen",
          "name": "mkVec",
          "normalized": "Type-\u003e[TyVarBndr]-\u003e[Char]-\u003eInt-\u003eQ[Dec]",
          "package": "combobuffer",
          "partial": "Vec",
          "signature": "Type-\u003e[TyVarBndr]-\u003e[Char]-\u003eInt-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-TGen.html#v:mkVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer.TGen",
          "name": "mkVecFromTo",
          "package": "combobuffer",
          "signature": "Int -\u003e Int -\u003e Type -\u003e [TyVarBndr] -\u003e [Char] -\u003e Q [Dec]",
          "source": "src/Data-RingBuffer-TGen.html#mkVecFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data RingBuffer TGen",
          "module": "Data.RingBuffer.TGen",
          "name": "mkVecFromTo",
          "normalized": "Int-\u003eInt-\u003eType-\u003e[TyVarBndr]-\u003e[Char]-\u003eQ[Dec]",
          "package": "combobuffer",
          "partial": "Vec From To",
          "signature": "Int-\u003eInt-\u003eType-\u003e[TyVarBndr]-\u003e[Char]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer-TGen.html#v:mkVecFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "partial": "Ring Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "ComboBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-ComboBuffer.html#ComboBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "ComboBuffer",
          "package": "combobuffer",
          "partial": "Combo Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:ComboBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eInitializable\u003c/a\u003e\u003c/code\u003e with the given value at every position.\n Essentially a generalized \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.RingBuffer",
          "name": "Initializable",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#Initializable",
          "type": "class"
        },
        "index": {
          "description": "Create new Initializable with the given value at every position Essentially generalized replicate",
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "Initializable",
          "package": "combobuffer",
          "partial": "Initializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:Initializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "MapBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-MapBuffer.html#MapBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "MapBuffer",
          "package": "combobuffer",
          "partial": "Map Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:MapBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RingBuffer interface.\n\u003c/p\u003e\u003cp\u003eInstances must define \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epush\u003c/a\u003e\u003c/code\u003e, and '(!)'.  Instances may define\n \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e for better performance.\n\u003c/p\u003e",
          "module": "Data.RingBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-Class.html#RingBuffer",
          "type": "class"
        },
        "index": {
          "description": "The RingBuffer interface Instances must define length push and Instances may define slice for better performance",
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "RingBuffer",
          "package": "combobuffer",
          "partial": "Ring Buffer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:RingBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "SeqBuffer",
          "package": "combobuffer",
          "source": "src/Data-RingBuffer-SeqBuffer.html#SeqBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "SeqBuffer",
          "package": "combobuffer",
          "partial": "Seq Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#t:SeqBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "(!)",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e El c",
          "source": "src/Data-RingBuffer-Class.html#%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "(!) !",
          "normalized": "a-\u003eInt-\u003eEl a",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eEl c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "length",
          "package": "combobuffer",
          "signature": "c -\u003e Int",
          "source": "src/Data-RingBuffer-Class.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "combobuffer",
          "signature": "c-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "newInit",
          "package": "combobuffer",
          "signature": "El c -\u003e Int -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#newInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "newInit",
          "normalized": "El a-\u003eInt-\u003ea",
          "package": "combobuffer",
          "partial": "Init",
          "signature": "El c-\u003eInt-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:newInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "push",
          "package": "combobuffer",
          "signature": "c -\u003e El c -\u003e c",
          "source": "src/Data-RingBuffer-Class.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "push",
          "normalized": "a-\u003eEl a-\u003ea",
          "package": "combobuffer",
          "signature": "c-\u003eEl c-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.RingBuffer",
          "name": "slice",
          "package": "combobuffer",
          "signature": "c -\u003e Int -\u003e Int -\u003e [El c]",
          "source": "src/Data-RingBuffer-Class.html#slice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data RingBuffer",
          "module": "Data.RingBuffer",
          "name": "slice",
          "normalized": "a-\u003eInt-\u003eInt-\u003e[El a]",
          "package": "combobuffer",
          "signature": "c-\u003eInt-\u003eInt-\u003e[El c]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/combobuffer/docs/Data-RingBuffer.html#v:slice"
      }
    }
  ]
]