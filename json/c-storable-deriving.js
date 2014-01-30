[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis primarily exports the CStorable typeclass, which may have its\n   methods automatically defaulted if it has a Generic instance.\n   Then, this instance can be transfered via the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "module",
        "fct-source": "src/Foreign-CStorable.html",
        "fct-type": "module",
        "title": "CStorable"
      },
      "index": {
        "description": "This primarily exports the CStorable typeclass which may have its methods automatically defaulted if it has Generic instance Then this instance can be transfered via the Storable constructor",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "CStorable",
        "normalized": "",
        "package": "c-storable-deriving",
        "partial": "CStorable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#t:CStorable",
      "description": {
        "fct-descr": "\u003cp\u003eThis typeclass is basically just a duplicate of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e. It exists\n   because I can't easily modify \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e, as it is part of base.\n\u003c/p\u003e",
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "class",
        "fct-source": "src/Foreign-CStorable-TypeClass.html#CStorable",
        "fct-type": "class",
        "title": "CStorable"
      },
      "index": {
        "description": "This typeclass is basically just duplicate of Storable It exists because can easily modify Storable as it is part of base",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "CStorable",
        "normalized": "",
        "package": "c-storable-deriving",
        "partial": "CStorable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#t:StorableWrap",
      "description": {
        "fct-descr": "\u003cp\u003eApplying the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e constructor to something which is Storable\n   gives it a corresponding CStorable instance.\n\u003c/p\u003e",
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "newtype",
        "fct-source": "src/Foreign-CStorable.html#StorableWrap",
        "fct-type": "newtype",
        "title": "StorableWrap"
      },
      "index": {
        "description": "Applying the Storable constructor to something which is Storable gives it corresponding CStorable instance",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "StorableWrap",
        "normalized": "",
        "package": "c-storable-deriving",
        "partial": "Storable Wrap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:Storable",
      "description": {
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "Storable a",
        "fct-source": "src/Foreign-CStorable.html#StorableWrap",
        "fct-type": "function",
        "title": "Storable"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "Storable",
        "normalized": "",
        "package": "c-storable-deriving",
        "partial": "Storable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cAlignment",
      "description": {
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Foreign-CStorable-TypeClass.html#cAlignment",
        "fct-type": "method",
        "title": "cAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "cAlignment",
        "normalized": "a-\u003eInt",
        "package": "c-storable-deriving",
        "partial": "Alignment",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cPeek",
      "description": {
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "Ptr a -\u003e IO a",
        "fct-source": "src/Foreign-CStorable-TypeClass.html#cPeek",
        "fct-type": "method",
        "title": "cPeek"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "cPeek",
        "normalized": "Ptr a-\u003eIO a",
        "package": "c-storable-deriving",
        "partial": "Peek",
        "signature": "Ptr a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cPoke",
      "description": {
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "Ptr a -\u003e a -\u003e IO ()",
        "fct-source": "src/Foreign-CStorable-TypeClass.html#cPoke",
        "fct-type": "method",
        "title": "cPoke"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "cPoke",
        "normalized": "Ptr a-\u003ea-\u003eIO()",
        "package": "c-storable-deriving",
        "partial": "Poke",
        "signature": "Ptr a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c-storable-deriving/docs/Foreign-CStorable.html#v:cSizeOf",
      "description": {
        "fct-module": "Foreign.CStorable",
        "fct-package": "c-storable-deriving",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Foreign-CStorable-TypeClass.html#cSizeOf",
        "fct-type": "method",
        "title": "cSizeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Foreign CStorable",
        "module": "Foreign.CStorable",
        "name": "cSizeOf",
        "normalized": "a-\u003eInt",
        "package": "c-storable-deriving",
        "partial": "Size Of",
        "signature": "a-\u003eInt"
      }
    }
  }
]