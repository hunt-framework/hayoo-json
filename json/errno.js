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
        "word": "errno"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error.Errno",
          "name": "Errno",
          "package": "errno",
          "source": "src/Foreign-C-Error-Errno.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign C Error Errno",
          "module": "Foreign.C.Error.Errno",
          "name": "Errno",
          "package": "errno",
          "partial": "Errno",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/errno/docs/Foreign-C-Error-Errno.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error.Errno",
          "name": "withErrno",
          "package": "errno",
          "signature": "m a -\u003e ErrorT String m a",
          "source": "src/Foreign-C-Error-Errno.html#withErrno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error Errno",
          "module": "Foreign.C.Error.Errno",
          "name": "withErrno",
          "normalized": "a b-\u003eErrorT String a b",
          "package": "errno",
          "partial": "Errno",
          "signature": "m a-\u003eErrorT String m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/errno/docs/Foreign-C-Error-Errno.html#v:withErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.C.Error.Errno",
          "name": "withErrnoPred",
          "package": "errno",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e ErrorT String m a",
          "source": "src/Foreign-C-Error-Errno.html#withErrnoPred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign C Error Errno",
          "module": "Foreign.C.Error.Errno",
          "name": "withErrnoPred",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eErrorT String b a",
          "package": "errno",
          "partial": "Errno Pred",
          "signature": "(a-\u003eBool)-\u003em a-\u003eErrorT String m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/errno/docs/Foreign-C-Error-Errno.html#v:withErrnoPred"
      }
    }
  ]
]