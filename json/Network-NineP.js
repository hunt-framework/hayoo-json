[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides one with the ability to pass her own monads in the callbacks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-EmbedIO.html",
        "fct-type": "module",
        "title": "EmbedIO"
      },
      "index": {
        "description": "Provides one with the ability to pass her own monads in the callbacks",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "EmbedIO",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Embed IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#t:EmbedIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eMonadIO\u003c/code\u003es that can be collapsed to and restored from a distinct value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-EmbedIO.html#EmbedIO",
        "fct-type": "class",
        "title": "EmbedIO"
      },
      "index": {
        "description": "MonadIO that can be collapsed to and restored from distinct value",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "EmbedIO",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Embed IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#t:Void",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty type. Used to represent state for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EmbedIO.html#Void",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "Empty type Used to represent state for IO monad",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "Void",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:bracketE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "m r -\u003e (r -\u003e m b) -\u003e (r -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-EmbedIO.html#bracketE",
        "fct-type": "function",
        "title": "bracketE"
      },
      "index": {
        "description": "bracket equivalent",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "bracketE",
        "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
        "package": "Network-NineP",
        "partial": "",
        "signature": "m r-\u003e(r-\u003em b)-\u003e(r-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:callback",
      "description": {
        "fct-descr": "\u003cp\u003eRun the monadic computation using supplied state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "o a -\u003e Content o -\u003e IO a",
        "fct-source": "src/Control-Monad-EmbedIO.html#callback",
        "fct-type": "method",
        "title": "callback"
      },
      "index": {
        "description": "Run the monadic computation using supplied state",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "callback",
        "normalized": "a b-\u003eContent a-\u003eIO b",
        "package": "Network-NineP",
        "partial": "",
        "signature": "o a-\u003eContent o-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:catchE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-EmbedIO.html#catchE",
        "fct-type": "function",
        "title": "catchE"
      },
      "index": {
        "description": "catch equivalent",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "catchE",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "Network-NineP",
        "partial": "",
        "signature": "m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003ePropagate an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation over the storage type to the monadic type.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "(Content o -\u003e IO a) -\u003e o a",
        "fct-source": "src/Control-Monad-EmbedIO.html#embed",
        "fct-type": "method",
        "title": "embed"
      },
      "index": {
        "description": "Propagate an IO operation over the storage type to the monadic type",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "embed",
        "normalized": "(Content a-\u003eIO b)-\u003ea b",
        "package": "Network-NineP",
        "partial": "",
        "signature": "(Content o-\u003eIO a)-\u003eo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:forkE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "m () -\u003e m ThreadId",
        "fct-source": "src/Control-Monad-EmbedIO.html#forkE",
        "fct-type": "function",
        "title": "forkE"
      },
      "index": {
        "description": "forkIO equivalent",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "forkE",
        "normalized": "a()-\u003ea ThreadId",
        "package": "Network-NineP",
        "partial": "",
        "signature": "m()-\u003em ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:handleE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-EmbedIO.html#handleE",
        "fct-type": "function",
        "title": "handleE"
      },
      "index": {
        "description": "handle equivalent",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "handleE",
        "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
        "package": "Network-NineP",
        "partial": "",
        "signature": "(e-\u003em a)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:throwE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "e -\u003e m a",
        "fct-source": "src/Control-Monad-EmbedIO.html#throwE",
        "fct-type": "function",
        "title": "throwE"
      },
      "index": {
        "description": "throw equivalent",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "throwE",
        "normalized": "a-\u003eb c",
        "package": "Network-NineP",
        "partial": "",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:tryE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EmbedIO",
        "fct-package": "Network-NineP",
        "fct-signature": "m a -\u003e m (Either e a)",
        "fct-source": "src/Control-Monad-EmbedIO.html#tryE",
        "fct-type": "function",
        "title": "tryE"
      },
      "index": {
        "description": "try equivalent",
        "hierarchy": "Control Monad EmbedIO",
        "module": "Control.Monad.EmbedIO",
        "name": "tryE",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "Network-NineP",
        "partial": "",
        "signature": "m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "module",
        "fct-source": "src/Network-NineP-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "Error",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#t:NineError",
      "description": {
        "fct-descr": "\u003cp\u003eThrowable errors\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "data",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "data",
        "title": "NineError"
      },
      "index": {
        "description": "Throwable errors",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "NineError",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Nine Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:EDir",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "EDir",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "EDir"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "EDir",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "EDir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENoAuthRequired",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "ENoAuthRequired",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "ENoAuthRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "ENoAuthRequired",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "ENo Auth Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENoFid",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "ENoFid Word32",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "ENoFid"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "ENoFid",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "ENo Fid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENoFile",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "ENoFile String",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "ENoFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "ENoFile",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "ENo File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENotADir",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "ENotADir",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "ENotADir"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "ENotADir",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "ENot ADir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENotImplemented",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "ENotImplemented String",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "ENotImplemented"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "ENotImplemented",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "ENot Implemented",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:EPermissionDenied",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "EPermissionDenied",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "EPermissionDenied"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "EPermissionDenied",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "EPermission Denied",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:OtherError",
      "description": {
        "fct-module": "Network.NineP.Error",
        "fct-package": "Network-NineP",
        "fct-signature": "OtherError String",
        "fct-source": "src/Network-NineP-Error.html#NineError",
        "fct-type": "function",
        "title": "OtherError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Error",
        "module": "Network.NineP.Error",
        "name": "OtherError",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Other Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher-level file patterns. Don't support read/write operations at offsets and handling stat changes as for now.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NineP.File",
        "fct-package": "Network-NineP",
        "fct-signature": "module",
        "fct-source": "src/Network-NineP-File.html",
        "fct-type": "module",
        "title": "File"
      },
      "index": {
        "description": "Higher-level file patterns Don support read write operations at offsets and handling stat changes as for now",
        "hierarchy": "Network NineP File",
        "module": "Network.NineP.File",
        "name": "File",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#v:chanFile",
      "description": {
        "fct-descr": "\u003cp\u003eA file that reads from and writes to the specified Chans\n\u003c/p\u003e",
        "fct-module": "Network.NineP.File",
        "fct-package": "Network-NineP",
        "fct-signature": "String-\u003e Maybe (Chan ByteString)-\u003e Maybe (Chan ByteString)-\u003e NineFile m",
        "fct-type": "function",
        "title": "chanFile"
      },
      "index": {
        "description": "file that reads from and writes to the specified Chans",
        "hierarchy": "Network NineP File",
        "module": "Network.NineP.File",
        "name": "chanFile",
        "normalized": "String-\u003eMaybe(Chan ByteString)-\u003eMaybe(Chan ByteString)-\u003eNineFile a",
        "package": "Network-NineP",
        "partial": "File",
        "signature": "String-\u003eMaybe(Chan ByteString)-\u003eMaybe(Chan ByteString)-\u003eNineFile m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#v:mVarFile",
      "description": {
        "fct-descr": "\u003cp\u003eA file that reads from and writes to the specified MVars\n\u003c/p\u003e",
        "fct-module": "Network.NineP.File",
        "fct-package": "Network-NineP",
        "fct-signature": "String-\u003e Maybe (MVar ByteString)-\u003e Maybe (MVar ByteString)-\u003e NineFile m",
        "fct-type": "function",
        "title": "mVarFile"
      },
      "index": {
        "description": "file that reads from and writes to the specified MVars",
        "hierarchy": "Network NineP File",
        "module": "Network.NineP.File",
        "name": "mVarFile",
        "normalized": "String-\u003eMaybe(MVar ByteString)-\u003eMaybe(MVar ByteString)-\u003eNineFile a",
        "package": "Network-NineP",
        "partial": "Var File",
        "signature": "String-\u003eMaybe(MVar ByteString)-\u003eMaybe(MVar ByteString)-\u003eNineFile m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#v:rwFile",
      "description": {
        "fct-descr": "\u003cp\u003eA file that reads and writes using simple user-specified callbacks\n\u003c/p\u003e",
        "fct-module": "Network.NineP.File",
        "fct-package": "Network-NineP",
        "fct-signature": "String-\u003e Maybe (m ByteString)-\u003e Maybe (ByteString -\u003e m ())-\u003e NineFile m",
        "fct-type": "function",
        "title": "rwFile"
      },
      "index": {
        "description": "file that reads and writes using simple user-specified callbacks",
        "hierarchy": "Network NineP File",
        "module": "Network.NineP.File",
        "name": "rwFile",
        "normalized": "String-\u003eMaybe(a ByteString)-\u003eMaybe(ByteString-\u003ea())-\u003eNineFile a",
        "package": "Network-NineP",
        "partial": "File",
        "signature": "String-\u003eMaybe(m ByteString)-\u003eMaybe(ByteString-\u003em())-\u003eNineFile m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eListening on sockets for the incoming requests.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "module",
        "fct-source": "src/Network-NineP-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "Listening on sockets for the incoming requests",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "Server",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eServer configuration.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "data",
        "fct-source": "src/Network-NineP-Internal-State.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Server configuration",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "Config",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#t:NineFile",
      "description": {
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "data",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "data",
        "title": "NineFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "NineFile",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Nine File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:Config",
      "description": {
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Config",
        "fct-source": "src/Network-NineP-Internal-State.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "Config",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:Directory",
      "description": {
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Directory",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "Directory"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "Directory",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:RegularFile",
      "description": {
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "RegularFile",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "RegularFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "RegularFile",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Regular File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:addr",
      "description": {
        "fct-descr": "\u003cp\u003eThe listening address. The syntax is taken from \u003ccode\u003ePlan 9\u003c/code\u003e operating system and has the form \u003ccode\u003eunix!/path/to/socket\u003c/code\u003e for unix socket files, and \u003ccode\u003etcp!hostname!port\u003c/code\u003e for tcp sockets.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "String",
        "fct-source": "src/Network-NineP-Internal-State.html#Config",
        "fct-type": "function",
        "title": "addr"
      },
      "index": {
        "description": "The listening address The syntax is taken from Plan operating system and has the form unix path to socket for unix socket files and tcp hostname port for tcp sockets",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "addr",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:boringDir",
      "description": {
        "fct-descr": "\u003cp\u003eA dumb directory that can't do anything but provide the files it contains.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "String -\u003e [(String, NineFile m)] -\u003e NineFile m",
        "fct-source": "src/Network-NineP-Internal-File.html#boringDir",
        "fct-type": "function",
        "title": "boringDir"
      },
      "index": {
        "description": "dumb directory that can do anything but provide the files it contains",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "boringDir",
        "normalized": "String-\u003e[(String,NineFile a)]-\u003eNineFile a",
        "package": "Network-NineP",
        "partial": "Dir",
        "signature": "String-\u003e[(String,NineFile m)]-\u003eNineFile m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:boringFile",
      "description": {
        "fct-descr": "\u003cp\u003eA dumb file that can't do anything.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "String -\u003e NineFile m",
        "fct-source": "src/Network-NineP-Internal-File.html#boringFile",
        "fct-type": "function",
        "title": "boringFile"
      },
      "index": {
        "description": "dumb file that can do anything",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "boringFile",
        "normalized": "String-\u003eNineFile a",
        "package": "Network-NineP",
        "partial": "File",
        "signature": "String-\u003eNineFile m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:descend",
      "description": {
        "fct-descr": "\u003cp\u003eA callback to address a specific file by its name. \u003ccode\u003e.\u003c/code\u003e and \u003ccode\u003e..\u003c/code\u003e are handled in the library.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "String -\u003e ErrorT NineError m (NineFile m)",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "descend"
      },
      "index": {
        "description": "callback to address specific file by its name and are handled in the library",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "descend",
        "normalized": "String-\u003eErrorT NineError a(NineFile a)",
        "package": "Network-NineP",
        "partial": "",
        "signature": "String-\u003eErrorT NineError m(NineFile m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:getFiles",
      "description": {
        "fct-descr": "\u003cp\u003eA callback to get the list of the files this directory contains. Must not contain \u003ccode\u003e.\u003c/code\u003e and \u003ccode\u003e..\u003c/code\u003e entries.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "m [NineFile m]",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "getFiles"
      },
      "index": {
        "description": "callback to get the list of the files this directory contains Must not contain and entries",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "getFiles",
        "normalized": "a[NineFile a]",
        "package": "Network-NineP",
        "partial": "Files",
        "signature": "m[NineFile m]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:monadState",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial state for the user-supplied monad. Use \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Content m",
        "fct-source": "src/Network-NineP-Internal-State.html#Config",
        "fct-type": "function",
        "title": "monadState"
      },
      "index": {
        "description": "The initial state for the user-supplied monad Use Void for IO",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "monadState",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:parent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "m (Maybe (NineFile m))",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "parent"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "parent",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:read",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Word64 -\u003e Word32 -\u003e ErrorT NineError m ByteString",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "read",
        "normalized": "Word-\u003eWord-\u003eErrorT NineError a ByteString",
        "package": "Network-NineP",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eErrorT NineError m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:remove",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "m ()",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "remove",
        "normalized": "a()",
        "package": "Network-NineP",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e/\u003c/code\u003e directory of the hosted filesystem.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "NineFile m",
        "fct-source": "src/Network-NineP-Internal-State.html#Config",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "The directory of the hosted filesystem",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "root",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:run9PServer",
      "description": {
        "fct-descr": "\u003cp\u003eRun the actual server\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Config m -\u003e IO ()",
        "fct-source": "src/Network-NineP-Server.html#run9PServer",
        "fct-type": "function",
        "title": "run9PServer"
      },
      "index": {
        "description": "Run the actual server",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "run9PServer",
        "normalized": "Config a-\u003eIO()",
        "package": "Network-NineP",
        "partial": "PServer",
        "signature": "Config m-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:stat",
      "description": {
        "fct-descr": "\u003cp\u003eThe directory stat must return only stat for \u003ccode\u003e.\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "m Stat",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "stat"
      },
      "index": {
        "description": "The directory stat must return only stat for",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "stat",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:version",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "m Word32",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "version",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:write",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Word64 -\u003e ByteString -\u003e ErrorT NineError m Word32",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "write",
        "normalized": "Word-\u003eByteString-\u003eErrorT NineError a Word",
        "package": "Network-NineP",
        "partial": "",
        "signature": "Word-\u003eByteString-\u003eErrorT NineError m Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:wstat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.NineP.Server",
        "fct-package": "Network-NineP",
        "fct-signature": "Stat -\u003e m ()",
        "fct-source": "src/Network-NineP-Internal-File.html#NineFile",
        "fct-type": "function",
        "title": "wstat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network NineP Server",
        "module": "Network.NineP.Server",
        "name": "wstat",
        "normalized": "Stat-\u003ea()",
        "package": "Network-NineP",
        "partial": "",
        "signature": "Stat-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library providing one with a somewhat higher level interface to 9P2000 protocol. Designed to facilitate rapid development of synthetic filesystems.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.NineP",
        "fct-package": "Network-NineP",
        "fct-signature": "module",
        "fct-source": "src/Network-NineP.html",
        "fct-type": "module",
        "title": "NineP"
      },
      "index": {
        "description": "library providing one with somewhat higher level interface to P2000 protocol Designed to facilitate rapid development of synthetic filesystems",
        "hierarchy": "Network NineP",
        "module": "Network.NineP",
        "name": "NineP",
        "normalized": "",
        "package": "Network-NineP",
        "partial": "Nine",
        "signature": ""
      }
    }
  }
]