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
        "word": "MonadCatchIO-transformers-foreign"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module assumes that you are familiar with the funcitons\n  of the same name in Foreign.Marshall.Alloc, Foreign.Marshal.AllocArray\n  and in Foreign.ForeignPtr.\n\u003c/p\u003e\u003cp\u003eThe functions are generalized to work in any monad which is an\n  instance of MonadCatchIO.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "Foreign",
          "package": "MonadCatchIO-transformers-foreign",
          "source": "src/Control-Monad-CatchIO-Foreign.html",
          "type": "module"
        },
        "index": {
          "description": "This module assumes that you are familiar with the funcitons of the same name in Foreign.Marshall.Alloc Foreign.Marshal.AllocArray and in Foreign.ForeignPtr The functions are generalized to work in any monad which is an instance of MonadCatchIO",
          "hierarchy": "Control Monad CatchIO Foreign",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "Foreign",
          "package": "MonadCatchIO-transformers-foreign",
          "partial": "Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-transformers-foreign/docs/Control-Monad-CatchIO-Foreign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "alloca",
          "package": "MonadCatchIO-transformers-foreign",
          "signature": "(Ptr a -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-CatchIO-Foreign.html#alloca",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO Foreign",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "alloca",
          "normalized": "(Ptr a-\u003eb c)-\u003eb c",
          "package": "MonadCatchIO-transformers-foreign",
          "signature": "(Ptr a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-transformers-foreign/docs/Control-Monad-CatchIO-Foreign.html#v:alloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "allocaArray",
          "package": "MonadCatchIO-transformers-foreign",
          "signature": "Int -\u003e (Ptr a -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-CatchIO-Foreign.html#allocaArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO Foreign",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "allocaArray",
          "normalized": "Int-\u003e(Ptr a-\u003eb c)-\u003eb c",
          "package": "MonadCatchIO-transformers-foreign",
          "partial": "Array",
          "signature": "Int-\u003e(Ptr a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-transformers-foreign/docs/Control-Monad-CatchIO-Foreign.html#v:allocaArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "allocaArray0",
          "package": "MonadCatchIO-transformers-foreign",
          "signature": "Int -\u003e (Ptr a -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-CatchIO-Foreign.html#allocaArray0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO Foreign",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "allocaArray0",
          "normalized": "Int-\u003e(Ptr a-\u003eb c)-\u003eb c",
          "package": "MonadCatchIO-transformers-foreign",
          "partial": "Array",
          "signature": "Int-\u003e(Ptr a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-transformers-foreign/docs/Control-Monad-CatchIO-Foreign.html#v:allocaArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "allocaBytes",
          "package": "MonadCatchIO-transformers-foreign",
          "signature": "Int -\u003e (Ptr a -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-CatchIO-Foreign.html#allocaBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO Foreign",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "allocaBytes",
          "normalized": "Int-\u003e(Ptr a-\u003eb c)-\u003eb c",
          "package": "MonadCatchIO-transformers-foreign",
          "partial": "Bytes",
          "signature": "Int-\u003e(Ptr a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-transformers-foreign/docs/Control-Monad-CatchIO-Foreign.html#v:allocaBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "withForeignPtr",
          "package": "MonadCatchIO-transformers-foreign",
          "signature": "ForeignPtr a -\u003e (Ptr a -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-CatchIO-Foreign.html#withForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad CatchIO Foreign",
          "module": "Control.Monad.CatchIO.Foreign",
          "name": "withForeignPtr",
          "normalized": "ForeignPtr a-\u003e(Ptr a-\u003eb c)-\u003eb c",
          "package": "MonadCatchIO-transformers-foreign",
          "partial": "Foreign Ptr",
          "signature": "ForeignPtr a-\u003e(Ptr a-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MonadCatchIO-transformers-foreign/docs/Control-Monad-CatchIO-Foreign.html#v:withForeignPtr"
      }
    }
  ]
]