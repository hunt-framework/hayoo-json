[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref-CAS.html#",
      "description": {
        "fct-module": "Data.Ref.CAS",
        "fct-package": "ref",
        "fct-signature": "module",
        "fct-source": "src/Data-Ref-CAS.html",
        "fct-type": "module",
        "title": "CAS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref CAS",
        "module": "Data.Ref.CAS",
        "name": "CAS",
        "normalized": "",
        "package": "ref",
        "partial": "CAS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref-CAS.html#v:casIORef",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ref.CAS",
        "fct-package": "ref",
        "fct-signature": "IORef a-\u003e a-\u003e a-\u003e IO (Bool, a)",
        "fct-type": "function",
        "title": "casIORef"
      },
      "index": {
        "description": "Performs machine-level compare and swap operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the current value from the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
        "hierarchy": "Data Ref CAS",
        "module": "Data.Ref.CAS",
        "name": "casIORef",
        "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
        "package": "ref",
        "partial": "IORef",
        "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref-CAS.html#v:casSTRef",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Ref.CAS",
        "fct-package": "ref",
        "fct-signature": "STRef s a-\u003e a-\u003e a-\u003e ST s (Bool, a)",
        "fct-type": "function",
        "title": "casSTRef"
      },
      "index": {
        "description": "Performs machine-level compare and swap operation on an STRef Returns tuple containing Bool which is True when swap is performed along with the current value from the STRef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
        "hierarchy": "Data Ref CAS",
        "module": "Data.Ref.CAS",
        "name": "casSTRef",
        "normalized": "STRef a b-\u003eb-\u003eb-\u003eST a(Bool,b)",
        "package": "ref",
        "partial": "STRef",
        "signature": "STRef s a-\u003ea-\u003ea-\u003eST s(Bool,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "module",
        "fct-source": "src/Data-Ref.html",
        "fct-type": "module",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "ref",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#t:Ref",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "class",
        "fct-source": "src/Data-Ref.html#Ref",
        "fct-type": "class",
        "title": "Ref"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "Ref",
        "normalized": "",
        "package": "ref",
        "partial": "Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:modifyRef",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "ref a -\u003e (a -\u003e a) -\u003e RefM ref ()",
        "fct-source": "src/Data-Ref.html#modifyRef",
        "fct-type": "method",
        "title": "modifyRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "modifyRef",
        "normalized": "a b-\u003e(b-\u003eb)-\u003eRefM a()",
        "package": "ref",
        "partial": "Ref",
        "signature": "ref a-\u003e(a-\u003ea)-\u003eRefM ref()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:modifyRef-39-",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "ref a -\u003e (a -\u003e a) -\u003e RefM ref ()",
        "fct-source": "src/Data-Ref.html#modifyRef%27",
        "fct-type": "method",
        "title": "modifyRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "modifyRef'",
        "normalized": "a b-\u003e(b-\u003eb)-\u003eRefM a()",
        "package": "ref",
        "partial": "Ref'",
        "signature": "ref a-\u003e(a-\u003ea)-\u003eRefM ref()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:newRef",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "a -\u003e RefM ref (ref a)",
        "fct-source": "src/Data-Ref.html#newRef",
        "fct-type": "method",
        "title": "newRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "newRef",
        "normalized": "a-\u003eRefM b(b a)",
        "package": "ref",
        "partial": "Ref",
        "signature": "a-\u003eRefM ref(ref a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:newRef-39-",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "a -\u003e RefM ref (ref a)",
        "fct-source": "src/Data-Ref.html#newRef%27",
        "fct-type": "method",
        "title": "newRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "newRef'",
        "normalized": "a-\u003eRefM b(b a)",
        "package": "ref",
        "partial": "Ref'",
        "signature": "a-\u003eRefM ref(ref a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:readRef",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "ref a -\u003e RefM ref a",
        "fct-source": "src/Data-Ref.html#readRef",
        "fct-type": "method",
        "title": "readRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "readRef",
        "normalized": "a b-\u003eRefM a b",
        "package": "ref",
        "partial": "Ref",
        "signature": "ref a-\u003eRefM ref a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:readRef-39-",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "ref a -\u003e RefM ref a",
        "fct-source": "src/Data-Ref.html#readRef%27",
        "fct-type": "method",
        "title": "readRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "readRef'",
        "normalized": "a b-\u003eRefM a b",
        "package": "ref",
        "partial": "Ref'",
        "signature": "ref a-\u003eRefM ref a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:writeRef",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "ref a -\u003e a -\u003e RefM ref ()",
        "fct-source": "src/Data-Ref.html#writeRef",
        "fct-type": "method",
        "title": "writeRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "writeRef",
        "normalized": "a b-\u003eb-\u003eRefM a()",
        "package": "ref",
        "partial": "Ref",
        "signature": "ref a-\u003ea-\u003eRefM ref()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:writeRef-39-",
      "description": {
        "fct-module": "Data.Ref",
        "fct-package": "ref",
        "fct-signature": "ref a -\u003e a -\u003e RefM ref ()",
        "fct-source": "src/Data-Ref.html#writeRef%27",
        "fct-type": "method",
        "title": "writeRef'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Ref",
        "module": "Data.Ref",
        "name": "writeRef'",
        "normalized": "a b-\u003eb-\u003eRefM a()",
        "package": "ref",
        "partial": "Ref'",
        "signature": "ref a-\u003ea-\u003eRefM ref()"
      }
    }
  }
]