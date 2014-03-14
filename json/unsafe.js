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
        "word": "unsafe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "Unsafe",
          "package": "unsafe",
          "source": "src/System-Unsafe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "Unsafe",
          "package": "unsafe",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "coerce",
          "package": "unsafe",
          "signature": "a -\u003e b",
          "source": "src/System-Unsafe.html#coerce",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "coerce",
          "normalized": "a-\u003eb",
          "package": "unsafe",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "foreignPtrToPtr",
          "package": "unsafe",
          "signature": "ForeignPtr a -\u003e Ptr a",
          "source": "src/System-Unsafe.html#foreignPtrToPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "foreignPtrToPtr",
          "normalized": "ForeignPtr a-\u003ePtr a",
          "package": "unsafe",
          "partial": "Ptr To Ptr",
          "signature": "ForeignPtr a-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:foreignPtrToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "interleaveIO",
          "package": "unsafe",
          "signature": "IO a -\u003e IO a",
          "source": "src/System-Unsafe.html#interleaveIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "interleaveIO",
          "normalized": "IO a-\u003eIO a",
          "package": "unsafe",
          "partial": "IO",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:interleaveIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "interleaveST",
          "package": "unsafe",
          "signature": "ST s a -\u003e ST s a",
          "source": "src/System-Unsafe.html#interleaveST",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "interleaveST",
          "normalized": "ST a b-\u003eST a b",
          "package": "unsafe",
          "partial": "ST",
          "signature": "ST s a-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:interleaveST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "ioToST",
          "package": "unsafe",
          "signature": "IO a -\u003e ST s a",
          "source": "src/System-Unsafe.html#ioToST",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "ioToST",
          "normalized": "IO a-\u003eST b a",
          "package": "unsafe",
          "partial": "To ST",
          "signature": "IO a-\u003eST s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:ioToST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "performIO",
          "package": "unsafe",
          "signature": "IO a -\u003e a",
          "source": "src/System-Unsafe.html#performIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "performIO",
          "normalized": "IO a-\u003ea",
          "package": "unsafe",
          "partial": "IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:performIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Unsafe",
          "name": "stToIO",
          "package": "unsafe",
          "signature": "ST s a -\u003e IO a",
          "source": "src/System-Unsafe.html#stToIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Unsafe",
          "module": "System.Unsafe",
          "name": "stToIO",
          "normalized": "ST a b-\u003eIO b",
          "package": "unsafe",
          "partial": "To IO",
          "signature": "ST s a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unsafe/docs/System-Unsafe.html#v:stToIO"
      }
    }
  ]
]