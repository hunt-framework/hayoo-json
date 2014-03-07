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
        "word": "c-storable-deriving"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis primarily exports the CStorable typeclass, which may have its\n   methods automatically defaulted if it has a Generic instance.\n   Then, this instance can be transfered via the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.CStorable",
          "name": "CStorable",
          "package": "c-storable-deriving",
          "source": "src/Foreign-CStorable.html",
          "type": "module"
        },
        "index": {
          "description": "This primarily exports the CStorable typeclass which may have its methods automatically defaulted if it has Generic instance Then this instance can be transfered via the Storable constructor",
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "CStorable",
          "package": "c-storable-deriving",
          "partial": "CStorable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis typeclass is basically just a duplicate of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e. It exists\n   because I can't easily modify \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e, as it is part of base.\n\u003c/p\u003e",
          "module": "Foreign.CStorable",
          "name": "CStorable",
          "package": "c-storable-deriving",
          "source": "src/Foreign-CStorable-TypeClass.html#CStorable",
          "type": "class"
        },
        "index": {
          "description": "This typeclass is basically just duplicate of Storable It exists because can easily modify Storable as it is part of base",
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "CStorable",
          "package": "c-storable-deriving",
          "partial": "CStorable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#t:CStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplying the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e constructor to something which is Storable\n   gives it a corresponding CStorable instance.\n\u003c/p\u003e",
          "module": "Foreign.CStorable",
          "name": "StorableWrap",
          "package": "c-storable-deriving",
          "source": "src/Foreign-CStorable.html#StorableWrap",
          "type": "newtype"
        },
        "index": {
          "description": "Applying the Storable constructor to something which is Storable gives it corresponding CStorable instance",
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "StorableWrap",
          "package": "c-storable-deriving",
          "partial": "Storable Wrap",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#t:StorableWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.CStorable",
          "name": "Storable",
          "package": "c-storable-deriving",
          "signature": "Storable a",
          "source": "src/Foreign-CStorable.html#StorableWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "Storable",
          "package": "c-storable-deriving",
          "partial": "Storable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:Storable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.CStorable",
          "name": "cAlignment",
          "package": "c-storable-deriving",
          "signature": "a -\u003e Int",
          "source": "src/Foreign-CStorable-TypeClass.html#cAlignment",
          "type": "method"
        },
        "index": {
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "cAlignment",
          "normalized": "a-\u003eInt",
          "package": "c-storable-deriving",
          "partial": "Alignment",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.CStorable",
          "name": "cPeek",
          "package": "c-storable-deriving",
          "signature": "Ptr a -\u003e IO a",
          "source": "src/Foreign-CStorable-TypeClass.html#cPeek",
          "type": "method"
        },
        "index": {
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "cPeek",
          "normalized": "Ptr a-\u003eIO a",
          "package": "c-storable-deriving",
          "partial": "Peek",
          "signature": "Ptr a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cPeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.CStorable",
          "name": "cPoke",
          "package": "c-storable-deriving",
          "signature": "Ptr a -\u003e a -\u003e IO ()",
          "source": "src/Foreign-CStorable-TypeClass.html#cPoke",
          "type": "method"
        },
        "index": {
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "cPoke",
          "normalized": "Ptr a-\u003ea-\u003eIO()",
          "package": "c-storable-deriving",
          "partial": "Poke",
          "signature": "Ptr a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cPoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.CStorable",
          "name": "cSizeOf",
          "package": "c-storable-deriving",
          "signature": "a -\u003e Int",
          "source": "src/Foreign-CStorable-TypeClass.html#cSizeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Foreign CStorable",
          "module": "Foreign.CStorable",
          "name": "cSizeOf",
          "normalized": "a-\u003eInt",
          "package": "c-storable-deriving",
          "partial": "Size Of",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cSizeOf"
      }
    }
  ]
]