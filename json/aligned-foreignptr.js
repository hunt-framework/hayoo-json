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
        "word": "aligned-foreignptr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA properly aligned ForeignPtr type.\n This can be currently achieved only by wasting some bytes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "Aligned",
          "package": "aligned-foreignptr",
          "source": "src/Foreign-ForeignPtr-Aligned.html",
          "type": "module"
        },
        "index": {
          "description": "properly aligned ForeignPtr type This can be currently achieved only by wasting some bytes",
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "Aligned",
          "package": "aligned-foreignptr",
          "partial": "Aligned",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aligned ForeignPtr type\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "AlignedForeignPtr",
          "package": "aligned-foreignptr",
          "source": "src/Foreign-ForeignPtr-Aligned.html#AlignedForeignPtr",
          "type": "data"
        },
        "index": {
          "description": "The aligned ForeignPtr type",
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "AlignedForeignPtr",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#t:AlignedForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould be a power of two.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "Alignment",
          "package": "aligned-foreignptr",
          "source": "src/Foreign-ForeignPtr-Aligned.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Should be power of two",
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "Alignment",
          "package": "aligned-foreignptr",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"smart\" constructor which checks whether the input \n is a power of two.\n\u003c/p\u003e",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "align",
          "package": "aligned-foreignptr",
          "signature": "Int -\u003e Alignment",
          "source": "src/Foreign-ForeignPtr-Aligned.html#align",
          "type": "function"
        },
        "index": {
          "description": "smart constructor which checks whether the input is power of two",
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "align",
          "normalized": "Int-\u003eAlignment",
          "package": "aligned-foreignptr",
          "signature": "Int-\u003eAlignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "castAlignedForeignPtr",
          "package": "aligned-foreignptr",
          "signature": "AlignedForeignPtr a -\u003e AlignedForeignPtr b",
          "source": "src/Foreign-ForeignPtr-Aligned.html#castAlignedForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "castAlignedForeignPtr",
          "normalized": "AlignedForeignPtr a-\u003eAlignedForeignPtr b",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr",
          "signature": "AlignedForeignPtr a-\u003eAlignedForeignPtr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:castAlignedForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "finalizeAlignedForeignPtr",
          "package": "aligned-foreignptr",
          "signature": "AlignedForeignPtr a -\u003e IO ()",
          "source": "src/Foreign-ForeignPtr-Aligned.html#finalizeAlignedForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "finalizeAlignedForeignPtr",
          "normalized": "AlignedForeignPtr a-\u003eIO()",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr",
          "signature": "AlignedForeignPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:finalizeAlignedForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "fromAlignment",
          "package": "aligned-foreignptr",
          "signature": "Alignment -\u003e Int",
          "source": "src/Foreign-ForeignPtr-Aligned.html#fromAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "fromAlignment",
          "normalized": "Alignment-\u003eInt",
          "package": "aligned-foreignptr",
          "partial": "Alignment",
          "signature": "Alignment-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:fromAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "mallocAlignedForeignPtr",
          "package": "aligned-foreignptr",
          "signature": "Alignment -\u003e IO (AlignedForeignPtr a)",
          "source": "src/Foreign-ForeignPtr-Aligned.html#mallocAlignedForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "mallocAlignedForeignPtr",
          "normalized": "Alignment-\u003eIO(AlignedForeignPtr a)",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr",
          "signature": "Alignment-\u003eIO(AlignedForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:mallocAlignedForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "mallocAlignedForeignPtrArray",
          "package": "aligned-foreignptr",
          "signature": "Alignment -\u003e Int -\u003e IO (AlignedForeignPtr a)",
          "source": "src/Foreign-ForeignPtr-Aligned.html#mallocAlignedForeignPtrArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "mallocAlignedForeignPtrArray",
          "normalized": "Alignment-\u003eInt-\u003eIO(AlignedForeignPtr a)",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr Array",
          "signature": "Alignment-\u003eInt-\u003eIO(AlignedForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:mallocAlignedForeignPtrArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "mallocAlignedForeignPtrBytes",
          "package": "aligned-foreignptr",
          "signature": "Alignment -\u003e Int -\u003e IO (AlignedForeignPtr a)",
          "source": "src/Foreign-ForeignPtr-Aligned.html#mallocAlignedForeignPtrBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "mallocAlignedForeignPtrBytes",
          "normalized": "Alignment-\u003eInt-\u003eIO(AlignedForeignPtr a)",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr Bytes",
          "signature": "Alignment-\u003eInt-\u003eIO(AlignedForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:mallocAlignedForeignPtrBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "touchAlignedForeignPtr",
          "package": "aligned-foreignptr",
          "signature": "AlignedForeignPtr a -\u003e IO ()",
          "source": "src/Foreign-ForeignPtr-Aligned.html#touchAlignedForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "touchAlignedForeignPtr",
          "normalized": "AlignedForeignPtr a-\u003eIO()",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr",
          "signature": "AlignedForeignPtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:touchAlignedForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "withAlignedForeignPtr",
          "package": "aligned-foreignptr",
          "signature": "AlignedForeignPtr a -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "source": "src/Foreign-ForeignPtr-Aligned.html#withAlignedForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign ForeignPtr Aligned",
          "module": "Foreign.ForeignPtr.Aligned",
          "name": "withAlignedForeignPtr",
          "normalized": "AlignedForeignPtr a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "aligned-foreignptr",
          "partial": "Aligned Foreign Ptr",
          "signature": "AlignedForeignPtr a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aligned-foreignptr/docs/Foreign-ForeignPtr-Aligned.html#v:withAlignedForeignPtr"
      }
    }
  ]
]