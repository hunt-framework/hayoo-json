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
        "word": "ref"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref.CAS",
          "name": "CAS",
          "package": "ref",
          "source": "src/Data-Ref-CAS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ref CAS",
          "module": "Data.Ref.CAS",
          "name": "CAS",
          "package": "ref",
          "partial": "CAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref-CAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ref.CAS",
          "name": "casIORef",
          "package": "ref",
          "signature": "IORef a-\u003e a-\u003e a-\u003e IO (Bool, a)",
          "type": "function"
        },
        "index": {
          "description": "Performs machine-level compare and swap operation on an IORef Returns tuple containing Bool which is True when swap is performed along with the current value from the IORef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
          "hierarchy": "Data Ref CAS",
          "module": "Data.Ref.CAS",
          "name": "casIORef",
          "normalized": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "package": "ref",
          "partial": "IORef",
          "signature": "IORef a-\u003ea-\u003ea-\u003eIO(Bool,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref-CAS.html#v:casIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a machine-level compare and swap operation on an\n \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e. Returns a tuple containing a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when a\n swap is performed, along with the \u003ccode\u003ecurrent\u003c/code\u003e value from the \u003ccode\u003e\u003ca\u003eSTRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote \"compare\" here means pointer equality in the sense of\n \u003ccode\u003e\u003ca\u003ereallyUnsafePtrEquality#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Ref.CAS",
          "name": "casSTRef",
          "package": "ref",
          "signature": "STRef s a-\u003e a-\u003e a-\u003e ST s (Bool, a)",
          "type": "function"
        },
        "index": {
          "description": "Performs machine-level compare and swap operation on an STRef Returns tuple containing Bool which is True when swap is performed along with the current value from the STRef Note compare here means pointer equality in the sense of reallyUnsafePtrEquality",
          "hierarchy": "Data Ref CAS",
          "module": "Data.Ref.CAS",
          "name": "casSTRef",
          "normalized": "STRef a b-\u003eb-\u003eb-\u003eST a(Bool,b)",
          "package": "ref",
          "partial": "STRef",
          "signature": "STRef s a-\u003ea-\u003ea-\u003eST s(Bool,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref-CAS.html#v:casSTRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "Ref",
          "package": "ref",
          "source": "src/Data-Ref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "Ref",
          "package": "ref",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "Ref",
          "package": "ref",
          "source": "src/Data-Ref.html#Ref",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "Ref",
          "package": "ref",
          "partial": "Ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "modifyRef",
          "package": "ref",
          "signature": "ref a -\u003e (a -\u003e a) -\u003e RefM ref ()",
          "source": "src/Data-Ref.html#modifyRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "modifyRef",
          "normalized": "a b-\u003e(b-\u003eb)-\u003eRefM a()",
          "package": "ref",
          "partial": "Ref",
          "signature": "ref a-\u003e(a-\u003ea)-\u003eRefM ref()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "modifyRef'",
          "package": "ref",
          "signature": "ref a -\u003e (a -\u003e a) -\u003e RefM ref ()",
          "source": "src/Data-Ref.html#modifyRef%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "modifyRef'",
          "normalized": "a b-\u003e(b-\u003eb)-\u003eRefM a()",
          "package": "ref",
          "partial": "Ref'",
          "signature": "ref a-\u003e(a-\u003ea)-\u003eRefM ref()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:modifyRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "newRef",
          "package": "ref",
          "signature": "a -\u003e RefM ref (ref a)",
          "source": "src/Data-Ref.html#newRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "newRef",
          "normalized": "a-\u003eRefM b(b a)",
          "package": "ref",
          "partial": "Ref",
          "signature": "a-\u003eRefM ref(ref a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "newRef'",
          "package": "ref",
          "signature": "a -\u003e RefM ref (ref a)",
          "source": "src/Data-Ref.html#newRef%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "newRef'",
          "normalized": "a-\u003eRefM b(b a)",
          "package": "ref",
          "partial": "Ref'",
          "signature": "a-\u003eRefM ref(ref a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:newRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "readRef",
          "package": "ref",
          "signature": "ref a -\u003e RefM ref a",
          "source": "src/Data-Ref.html#readRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "readRef",
          "normalized": "a b-\u003eRefM a b",
          "package": "ref",
          "partial": "Ref",
          "signature": "ref a-\u003eRefM ref a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:readRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "readRef'",
          "package": "ref",
          "signature": "ref a -\u003e RefM ref a",
          "source": "src/Data-Ref.html#readRef%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "readRef'",
          "normalized": "a b-\u003eRefM a b",
          "package": "ref",
          "partial": "Ref'",
          "signature": "ref a-\u003eRefM ref a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:readRef-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "writeRef",
          "package": "ref",
          "signature": "ref a -\u003e a -\u003e RefM ref ()",
          "source": "src/Data-Ref.html#writeRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "writeRef",
          "normalized": "a b-\u003eb-\u003eRefM a()",
          "package": "ref",
          "partial": "Ref",
          "signature": "ref a-\u003ea-\u003eRefM ref()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:writeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "writeRef'",
          "package": "ref",
          "signature": "ref a -\u003e a -\u003e RefM ref ()",
          "source": "src/Data-Ref.html#writeRef%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "writeRef'",
          "normalized": "a b-\u003eb-\u003eRefM a()",
          "package": "ref",
          "partial": "Ref'",
          "signature": "ref a-\u003ea-\u003eRefM ref()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ref/docs/Data-Ref.html#v:writeRef-39-"
      }
    }
  ]
]