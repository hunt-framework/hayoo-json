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
        "word": "AC-VanillaArray"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo flavours of array: mutable and immutable. All are boxed,\n  lazy, and use zero-origin integers as indicies.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "Unsafe",
          "package": "AC-VanillaArray",
          "source": "src/Data-Array-Vanilla-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Two flavours of array mutable and immutable All are boxed lazy and use zero-origin integers as indicies",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "Unsafe",
          "package": "AC-VanillaArray",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of immutable arrays, with elements of type \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "IArray",
          "package": "AC-VanillaArray",
          "source": "src/Data-Array-Vanilla-Unsafe.html#IArray",
          "type": "data"
        },
        "index": {
          "description": "The type of immutable arrays with elements of type",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "IArray",
          "package": "AC-VanillaArray",
          "partial": "IArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#t:IArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of mutable arrays, with elements of type \u003ccode\u003ex\u003c/code\u003e.\n  These arrays live in the \u003ccode\u003eST\u003c/code\u003e monad, but you can use\n  \u003ccode\u003estToIO\u003c/code\u003e to convert this to \u003ccode\u003eIO\u003c/code\u003e if required.\n\u003c/p\u003e\u003cp\u003eTwo \u003ccode\u003eMArray\u003c/code\u003es are equal as per \u003ccode\u003e(==)\u003c/code\u003e if they are both\n  the exact same array (i.e., the same block of RAM).\n  Two seperate arrays which merely hold the same data are\n  \u003cem\u003enot\u003c/em\u003e considered equal. (This fact could change at any\n  second, after all.)\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "MArray",
          "package": "AC-VanillaArray",
          "source": "src/Data-Array-Vanilla-Unsafe.html#MArray",
          "type": "data"
        },
        "index": {
          "description": "The type of mutable arrays with elements of type These arrays live in the ST monad but you can use stToIO to convert this to IO if required Two MArray are equal as per if they are both the exact same array i.e the same block of RAM Two seperate arrays which merely hold the same data are not considered equal This fact could change at any second after all",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "MArray",
          "package": "AC-VanillaArray",
          "partial": "MArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#t:MArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an \u003ccode\u003eIArray\u003c/code\u003e. (Since \u003ccode\u003eIArrays\u003c/code\u003e are immutable,\n  this is a pure operation.)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e: No bounds checks. Indicies below \u003ccode\u003e0\u003c/code\u003e or\n  above \u003ccode\u003en-1\u003c/code\u003e will likely result in a program crash.\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "iarray_read",
          "package": "AC-VanillaArray",
          "signature": "IArray x -\u003e Int -\u003e x",
          "source": "src/Data-Array-Vanilla-Unsafe.html#iarray_read",
          "type": "function"
        },
        "index": {
          "description": "Read from an IArray Since IArrays are immutable this is pure operation Unsafe No bounds checks Indicies below or above n-1 will likely result in program crash",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "iarray_read",
          "normalized": "IArray a-\u003eInt-\u003ea",
          "package": "AC-VanillaArray",
          "signature": "IArray x-\u003eInt-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#v:iarray_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003eMArray\u003c/code\u003e which refers to the same memory\n  block as an existing \u003ccode\u003eIArray\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e: Mutating the \u003ccode\u003eMArray\u003c/code\u003e will cause the contents\n  of the \u003ccode\u003eIArray\u003c/code\u003e to mutate also, violating referential\n  transparency. (Avoid this by explicitly copying the data\n  after thawing and before mutating it.)\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "iarray_thaw",
          "package": "AC-VanillaArray",
          "signature": "IArray x -\u003e ST s (MArray s x)",
          "source": "src/Data-Array-Vanilla-Unsafe.html#iarray_thaw",
          "type": "function"
        },
        "index": {
          "description": "Create new MArray which refers to the same memory block as an existing IArray Unsafe Mutating the MArray will cause the contents of the IArray to mutate also violating referential transparency Avoid this by explicitly copying the data after thawing and before mutating it",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "iarray_thaw",
          "normalized": "IArray a-\u003eST b(MArray b a)",
          "package": "AC-VanillaArray",
          "signature": "IArray x-\u003eST s(MArray s x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#v:iarray_thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003eIArray\u003c/code\u003e which refers to the same memory\n  block as an existing \u003ccode\u003eMArray\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e: Mutating the \u003ccode\u003eMArray\u003c/code\u003e will cause the contents\n  of the \u003ccode\u003eIArray\u003c/code\u003e to mutate also, violating referential\n  transparency. (Avoid this by explicitly copying the data\n  before freezing.)\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_freeze",
          "package": "AC-VanillaArray",
          "signature": "MArray s x -\u003e ST s (IArray x)",
          "source": "src/Data-Array-Vanilla-Unsafe.html#marray_freeze",
          "type": "function"
        },
        "index": {
          "description": "Create new IArray which refers to the same memory block as an existing MArray Unsafe Mutating the MArray will cause the contents of the IArray to mutate also violating referential transparency Avoid this by explicitly copying the data before freezing",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_freeze",
          "normalized": "MArray a b-\u003eST a(IArray b)",
          "package": "AC-VanillaArray",
          "signature": "MArray s x-\u003eST s(IArray x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#v:marray_freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a brand new \u003ccode\u003eMArray\u003c/code\u003e, of the specified size, with\n  all elements set to the value provided. If the array\n  size is \u003ccode\u003en\u003c/code\u003e, valid indicies are from \u003ccode\u003e0\u003c/code\u003e to \u003ccode\u003en-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_new",
          "package": "AC-VanillaArray",
          "signature": "Int -\u003e x -\u003e ST s (MArray s x)",
          "source": "src/Data-Array-Vanilla-Unsafe.html#marray_new",
          "type": "function"
        },
        "index": {
          "description": "Create brand new MArray of the specified size with all elements set to the value provided If the array size is valid indicies are from to n-1",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_new",
          "normalized": "Int-\u003ea-\u003eST b(MArray b a)",
          "package": "AC-VanillaArray",
          "signature": "Int-\u003ex-\u003eST s(MArray s x)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#v:marray_new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from an \u003ccode\u003eMArray\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e: No bounds checks. Indicies below \u003ccode\u003e0\u003c/code\u003e or\n  above \u003ccode\u003en-1\u003c/code\u003e will likely result in a program crash.\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_read",
          "package": "AC-VanillaArray",
          "signature": "MArray s x -\u003e Int -\u003e ST s x",
          "source": "src/Data-Array-Vanilla-Unsafe.html#marray_read",
          "type": "function"
        },
        "index": {
          "description": "Read from an MArray Unsafe No bounds checks Indicies below or above n-1 will likely result in program crash",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_read",
          "normalized": "MArray a b-\u003eInt-\u003eST a b",
          "package": "AC-VanillaArray",
          "signature": "MArray s x-\u003eInt-\u003eST s x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#v:marray_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite to an \u003ccode\u003eMArray\u003c/code\u003e, replacing the element at the\n  specified index.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e: No bounds checks. Indicies below \u003ccode\u003e0\u003c/code\u003e or\n  above \u003ccode\u003en-1\u003c/code\u003e will likely result in a program crash\n  (if you're lucky), or weird data corruption\n  (if you're unlucky).\n\u003c/p\u003e",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_write",
          "package": "AC-VanillaArray",
          "signature": "MArray s x -\u003e Int -\u003e x -\u003e ST s ()",
          "source": "src/Data-Array-Vanilla-Unsafe.html#marray_write",
          "type": "function"
        },
        "index": {
          "description": "Write to an MArray replacing the element at the specified index Unsafe No bounds checks Indicies below or above n-1 will likely result in program crash if you re lucky or weird data corruption if you re unlucky",
          "hierarchy": "Data Array Vanilla Unsafe",
          "module": "Data.Array.Vanilla.Unsafe",
          "name": "marray_write",
          "normalized": "MArray a b-\u003eInt-\u003eb-\u003eST a()",
          "package": "AC-VanillaArray",
          "signature": "MArray s x-\u003eInt-\u003ex-\u003eST s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-VanillaArray/docs/Data-Array-Vanilla-Unsafe.html#v:marray_write"
      }
    }
  ]
]