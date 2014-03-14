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
        "word": "data-ref"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "Ref",
          "package": "data-ref",
          "source": "src/Data-Ref.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "Ref",
          "package": "data-ref",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "C",
          "package": "data-ref",
          "source": "src/Data-Ref.html#C",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "C",
          "package": "data-ref",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#t:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "T",
          "package": "data-ref",
          "source": "src/Data-Ref.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "T",
          "package": "data-ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "Cons",
          "package": "data-ref",
          "signature": "Cons",
          "source": "src/Data-Ref.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "Cons",
          "package": "data-ref",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "lift",
          "package": "data-ref",
          "signature": "T m a -\u003e T (t m) a",
          "source": "src/Data-Ref.html#lift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "lift",
          "normalized": "T a b-\u003eT(c a)b",
          "package": "data-ref",
          "signature": "T m a-\u003eT(t m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "liftIO",
          "package": "data-ref",
          "signature": "T IO a -\u003e T m a",
          "source": "src/Data-Ref.html#liftIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "liftIO",
          "normalized": "T IO a-\u003eT b a",
          "package": "data-ref",
          "partial": "IO",
          "signature": "T IO a-\u003eT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "modify",
          "package": "data-ref",
          "signature": "T m a -\u003e (a -\u003e a) -\u003e m ()",
          "source": "src/Data-Ref.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "modify",
          "normalized": "T a b-\u003e(b-\u003eb)-\u003ea()",
          "package": "data-ref",
          "signature": "T m a-\u003e(a-\u003ea)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "new",
          "package": "data-ref",
          "signature": "a -\u003e m (T m a)",
          "source": "src/Data-Ref.html#new",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "new",
          "normalized": "a-\u003eb(T b a)",
          "package": "data-ref",
          "signature": "a-\u003em(T m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "newCons",
          "package": "data-ref",
          "signature": "(a -\u003e m ref) -\u003e (ref -\u003e a -\u003e m ()) -\u003e (ref -\u003e m a) -\u003e a -\u003e m (T m a)",
          "source": "src/Data-Ref.html#newCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "newCons",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003ea-\u003eb())-\u003e(c-\u003eb a)-\u003ea-\u003eb(T b a)",
          "package": "data-ref",
          "partial": "Cons",
          "signature": "(a-\u003em ref)-\u003e(ref-\u003ea-\u003em())-\u003e(ref-\u003em a)-\u003ea-\u003em(T m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:newCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "newLifted",
          "package": "data-ref",
          "signature": "a -\u003e t m (T (t m) a)",
          "source": "src/Data-Ref.html#newLifted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "newLifted",
          "normalized": "a-\u003eb c(T(b c)a)",
          "package": "data-ref",
          "partial": "Lifted",
          "signature": "a-\u003et m(T(t m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:newLifted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "read",
          "package": "data-ref",
          "signature": "m a",
          "source": "src/Data-Ref.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "read",
          "package": "data-ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Ref",
          "name": "write",
          "package": "data-ref",
          "signature": "a -\u003e m ()",
          "source": "src/Data-Ref.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Ref",
          "module": "Data.Ref",
          "name": "write",
          "normalized": "a-\u003eb()",
          "package": "data-ref",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-ref/docs/Data-Ref.html#v:write"
      }
    }
  ]
]