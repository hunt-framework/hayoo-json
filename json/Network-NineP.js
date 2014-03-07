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
        "word": "Network-NineP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides one with the ability to pass her own monads in the callbacks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "EmbedIO",
          "package": "Network-NineP",
          "source": "src/Control-Monad-EmbedIO.html",
          "type": "module"
        },
        "index": {
          "description": "Provides one with the ability to pass her own monads in the callbacks",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "EmbedIO",
          "package": "Network-NineP",
          "partial": "Embed IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadIO\u003c/code\u003es that can be collapsed to and restored from a distinct value.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "EmbedIO",
          "package": "Network-NineP",
          "source": "src/Control-Monad-EmbedIO.html#EmbedIO",
          "type": "class"
        },
        "index": {
          "description": "MonadIO that can be collapsed to and restored from distinct value",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "EmbedIO",
          "package": "Network-NineP",
          "partial": "Embed IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#t:EmbedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty type. Used to represent state for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "Void",
          "package": "Network-NineP",
          "source": "src/Control-Monad-EmbedIO.html#Void",
          "type": "data"
        },
        "index": {
          "description": "Empty type Used to represent state for IO monad",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "Void",
          "package": "Network-NineP",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "bracketE",
          "package": "Network-NineP",
          "signature": "m r -\u003e (r -\u003e m b) -\u003e (r -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-EmbedIO.html#bracketE",
          "type": "function"
        },
        "index": {
          "description": "bracket equivalent",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "bracketE",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "Network-NineP",
          "signature": "m r-\u003e(r-\u003em b)-\u003e(r-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:bracketE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the monadic computation using supplied state.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "callback",
          "package": "Network-NineP",
          "signature": "o a -\u003e Content o -\u003e IO a",
          "source": "src/Control-Monad-EmbedIO.html#callback",
          "type": "method"
        },
        "index": {
          "description": "Run the monadic computation using supplied state",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "callback",
          "normalized": "a b-\u003eContent a-\u003eIO b",
          "package": "Network-NineP",
          "signature": "o a-\u003eContent o-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "catchE",
          "package": "Network-NineP",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-EmbedIO.html#catchE",
          "type": "function"
        },
        "index": {
          "description": "catch equivalent",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "catchE",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "Network-NineP",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:catchE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagate an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e operation over the storage type to the monadic type.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "embed",
          "package": "Network-NineP",
          "signature": "(Content o -\u003e IO a) -\u003e o a",
          "source": "src/Control-Monad-EmbedIO.html#embed",
          "type": "method"
        },
        "index": {
          "description": "Propagate an IO operation over the storage type to the monadic type",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "embed",
          "normalized": "(Content a-\u003eIO b)-\u003ea b",
          "package": "Network-NineP",
          "signature": "(Content o-\u003eIO a)-\u003eo a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "forkE",
          "package": "Network-NineP",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-Monad-EmbedIO.html#forkE",
          "type": "function"
        },
        "index": {
          "description": "forkIO equivalent",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "forkE",
          "normalized": "a()-\u003ea ThreadId",
          "package": "Network-NineP",
          "signature": "m()-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:forkE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "handleE",
          "package": "Network-NineP",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-EmbedIO.html#handleE",
          "type": "function"
        },
        "index": {
          "description": "handle equivalent",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "handleE",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "Network-NineP",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:handleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "throwE",
          "package": "Network-NineP",
          "signature": "e -\u003e m a",
          "source": "src/Control-Monad-EmbedIO.html#throwE",
          "type": "function"
        },
        "index": {
          "description": "throw equivalent",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "throwE",
          "normalized": "a-\u003eb c",
          "package": "Network-NineP",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:throwE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EmbedIO",
          "name": "tryE",
          "package": "Network-NineP",
          "signature": "m a -\u003e m (Either e a)",
          "source": "src/Control-Monad-EmbedIO.html#tryE",
          "type": "function"
        },
        "index": {
          "description": "try equivalent",
          "hierarchy": "Control Monad EmbedIO",
          "module": "Control.Monad.EmbedIO",
          "name": "tryE",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "Network-NineP",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Control-Monad-EmbedIO.html#v:tryE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "Error",
          "package": "Network-NineP",
          "source": "src/Network-NineP-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "Error",
          "package": "Network-NineP",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrowable errors\n\u003c/p\u003e",
          "module": "Network.NineP.Error",
          "name": "NineError",
          "package": "Network-NineP",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "data"
        },
        "index": {
          "description": "Throwable errors",
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "NineError",
          "package": "Network-NineP",
          "partial": "Nine Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#t:NineError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "EDir",
          "package": "Network-NineP",
          "signature": "EDir",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "EDir",
          "package": "Network-NineP",
          "partial": "EDir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:EDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "ENoAuthRequired",
          "package": "Network-NineP",
          "signature": "ENoAuthRequired",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "ENoAuthRequired",
          "package": "Network-NineP",
          "partial": "ENo Auth Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENoAuthRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "ENoFid",
          "package": "Network-NineP",
          "signature": "ENoFid Word32",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "ENoFid",
          "package": "Network-NineP",
          "partial": "ENo Fid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENoFid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "ENoFile",
          "package": "Network-NineP",
          "signature": "ENoFile String",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "ENoFile",
          "package": "Network-NineP",
          "partial": "ENo File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENoFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "ENotADir",
          "package": "Network-NineP",
          "signature": "ENotADir",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "ENotADir",
          "package": "Network-NineP",
          "partial": "ENot ADir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENotADir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "ENotImplemented",
          "package": "Network-NineP",
          "signature": "ENotImplemented String",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "ENotImplemented",
          "package": "Network-NineP",
          "partial": "ENot Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:ENotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "EPermissionDenied",
          "package": "Network-NineP",
          "signature": "EPermissionDenied",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "EPermissionDenied",
          "package": "Network-NineP",
          "partial": "EPermission Denied",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:EPermissionDenied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Error",
          "name": "OtherError",
          "package": "Network-NineP",
          "signature": "OtherError String",
          "source": "src/Network-NineP-Error.html#NineError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Error",
          "module": "Network.NineP.Error",
          "name": "OtherError",
          "package": "Network-NineP",
          "partial": "Other Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Error.html#v:OtherError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher-level file patterns. Don't support read/write operations at offsets and handling stat changes as for now.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NineP.File",
          "name": "File",
          "package": "Network-NineP",
          "source": "src/Network-NineP-File.html",
          "type": "module"
        },
        "index": {
          "description": "Higher-level file patterns Don support read write operations at offsets and handling stat changes as for now",
          "hierarchy": "Network NineP File",
          "module": "Network.NineP.File",
          "name": "File",
          "package": "Network-NineP",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file that reads from and writes to the specified Chans\n\u003c/p\u003e",
          "module": "Network.NineP.File",
          "name": "chanFile",
          "package": "Network-NineP",
          "signature": "String-\u003e Maybe (Chan ByteString)-\u003e Maybe (Chan ByteString)-\u003e NineFile m",
          "type": "function"
        },
        "index": {
          "description": "file that reads from and writes to the specified Chans",
          "hierarchy": "Network NineP File",
          "module": "Network.NineP.File",
          "name": "chanFile",
          "normalized": "String-\u003eMaybe(Chan ByteString)-\u003eMaybe(Chan ByteString)-\u003eNineFile a",
          "package": "Network-NineP",
          "partial": "File",
          "signature": "String-\u003eMaybe(Chan ByteString)-\u003eMaybe(Chan ByteString)-\u003eNineFile m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#v:chanFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file that reads from and writes to the specified MVars\n\u003c/p\u003e",
          "module": "Network.NineP.File",
          "name": "mVarFile",
          "package": "Network-NineP",
          "signature": "String-\u003e Maybe (MVar ByteString)-\u003e Maybe (MVar ByteString)-\u003e NineFile m",
          "type": "function"
        },
        "index": {
          "description": "file that reads from and writes to the specified MVars",
          "hierarchy": "Network NineP File",
          "module": "Network.NineP.File",
          "name": "mVarFile",
          "normalized": "String-\u003eMaybe(MVar ByteString)-\u003eMaybe(MVar ByteString)-\u003eNineFile a",
          "package": "Network-NineP",
          "partial": "Var File",
          "signature": "String-\u003eMaybe(MVar ByteString)-\u003eMaybe(MVar ByteString)-\u003eNineFile m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#v:mVarFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file that reads and writes using simple user-specified callbacks\n\u003c/p\u003e",
          "module": "Network.NineP.File",
          "name": "rwFile",
          "package": "Network-NineP",
          "signature": "String-\u003e Maybe (m ByteString)-\u003e Maybe (ByteString -\u003e m ())-\u003e NineFile m",
          "type": "function"
        },
        "index": {
          "description": "file that reads and writes using simple user-specified callbacks",
          "hierarchy": "Network NineP File",
          "module": "Network.NineP.File",
          "name": "rwFile",
          "normalized": "String-\u003eMaybe(a ByteString)-\u003eMaybe(ByteString-\u003ea())-\u003eNineFile a",
          "package": "Network-NineP",
          "partial": "File",
          "signature": "String-\u003eMaybe(m ByteString)-\u003eMaybe(ByteString-\u003em())-\u003eNineFile m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-File.html#v:rwFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eListening on sockets for the incoming requests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NineP.Server",
          "name": "Server",
          "package": "Network-NineP",
          "source": "src/Network-NineP-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Listening on sockets for the incoming requests",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "Server",
          "package": "Network-NineP",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer configuration.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "Config",
          "package": "Network-NineP",
          "source": "src/Network-NineP-Internal-State.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Server configuration",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "Config",
          "package": "Network-NineP",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "NineFile",
          "package": "Network-NineP",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "NineFile",
          "package": "Network-NineP",
          "partial": "Nine File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#t:NineFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "Config",
          "package": "Network-NineP",
          "signature": "Config",
          "source": "src/Network-NineP-Internal-State.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "Config",
          "package": "Network-NineP",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "Directory",
          "package": "Network-NineP",
          "signature": "Directory",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "Directory",
          "package": "Network-NineP",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "RegularFile",
          "package": "Network-NineP",
          "signature": "RegularFile",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "RegularFile",
          "package": "Network-NineP",
          "partial": "Regular File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:RegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe listening address. The syntax is taken from \u003ccode\u003ePlan 9\u003c/code\u003e operating system and has the form \u003ccode\u003eunix!/path/to/socket\u003c/code\u003e for unix socket files, and \u003ccode\u003etcp!hostname!port\u003c/code\u003e for tcp sockets.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "addr",
          "package": "Network-NineP",
          "signature": "String",
          "source": "src/Network-NineP-Internal-State.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The listening address The syntax is taken from Plan operating system and has the form unix path to socket for unix socket files and tcp hostname port for tcp sockets",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "addr",
          "package": "Network-NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dumb directory that can't do anything but provide the files it contains.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "boringDir",
          "package": "Network-NineP",
          "signature": "String -\u003e [(String, NineFile m)] -\u003e NineFile m",
          "source": "src/Network-NineP-Internal-File.html#boringDir",
          "type": "function"
        },
        "index": {
          "description": "dumb directory that can do anything but provide the files it contains",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "boringDir",
          "normalized": "String-\u003e[(String,NineFile a)]-\u003eNineFile a",
          "package": "Network-NineP",
          "partial": "Dir",
          "signature": "String-\u003e[(String,NineFile m)]-\u003eNineFile m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:boringDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dumb file that can't do anything.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "boringFile",
          "package": "Network-NineP",
          "signature": "String -\u003e NineFile m",
          "source": "src/Network-NineP-Internal-File.html#boringFile",
          "type": "function"
        },
        "index": {
          "description": "dumb file that can do anything",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "boringFile",
          "normalized": "String-\u003eNineFile a",
          "package": "Network-NineP",
          "partial": "File",
          "signature": "String-\u003eNineFile m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:boringFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA callback to address a specific file by its name. \u003ccode\u003e.\u003c/code\u003e and \u003ccode\u003e..\u003c/code\u003e are handled in the library.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "descend",
          "package": "Network-NineP",
          "signature": "String -\u003e ErrorT NineError m (NineFile m)",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "description": "callback to address specific file by its name and are handled in the library",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "descend",
          "normalized": "String-\u003eErrorT NineError a(NineFile a)",
          "package": "Network-NineP",
          "signature": "String-\u003eErrorT NineError m(NineFile m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA callback to get the list of the files this directory contains. Must not contain \u003ccode\u003e.\u003c/code\u003e and \u003ccode\u003e..\u003c/code\u003e entries.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "getFiles",
          "package": "Network-NineP",
          "signature": "m [NineFile m]",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "description": "callback to get the list of the files this directory contains Must not contain and entries",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "getFiles",
          "normalized": "a[NineFile a]",
          "package": "Network-NineP",
          "partial": "Files",
          "signature": "m[NineFile m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:getFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial state for the user-supplied monad. Use \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "monadState",
          "package": "Network-NineP",
          "signature": "Content m",
          "source": "src/Network-NineP-Internal-State.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The initial state for the user-supplied monad Use Void for IO",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "monadState",
          "package": "Network-NineP",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:monadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "parent",
          "package": "Network-NineP",
          "signature": "m (Maybe (NineFile m))",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "parent",
          "package": "Network-NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "read",
          "package": "Network-NineP",
          "signature": "Word64 -\u003e Word32 -\u003e ErrorT NineError m ByteString",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "read",
          "normalized": "Word-\u003eWord-\u003eErrorT NineError a ByteString",
          "package": "Network-NineP",
          "signature": "Word-\u003eWord-\u003eErrorT NineError m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "remove",
          "package": "Network-NineP",
          "signature": "m ()",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "remove",
          "normalized": "a()",
          "package": "Network-NineP",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e/\u003c/code\u003e directory of the hosted filesystem.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "root",
          "package": "Network-NineP",
          "signature": "NineFile m",
          "source": "src/Network-NineP-Internal-State.html#Config",
          "type": "function"
        },
        "index": {
          "description": "The directory of the hosted filesystem",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "root",
          "package": "Network-NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the actual server\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "run9PServer",
          "package": "Network-NineP",
          "signature": "Config m -\u003e IO ()",
          "source": "src/Network-NineP-Server.html#run9PServer",
          "type": "function"
        },
        "index": {
          "description": "Run the actual server",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "run9PServer",
          "normalized": "Config a-\u003eIO()",
          "package": "Network-NineP",
          "partial": "PServer",
          "signature": "Config m-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:run9PServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory stat must return only stat for \u003ccode\u003e.\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.NineP.Server",
          "name": "stat",
          "package": "Network-NineP",
          "signature": "m Stat",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "description": "The directory stat must return only stat for",
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "stat",
          "package": "Network-NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "version",
          "package": "Network-NineP",
          "signature": "m Word32",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "version",
          "package": "Network-NineP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "write",
          "package": "Network-NineP",
          "signature": "Word64 -\u003e ByteString -\u003e ErrorT NineError m Word32",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "write",
          "normalized": "Word-\u003eByteString-\u003eErrorT NineError a Word",
          "package": "Network-NineP",
          "signature": "Word-\u003eByteString-\u003eErrorT NineError m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.NineP.Server",
          "name": "wstat",
          "package": "Network-NineP",
          "signature": "Stat -\u003e m ()",
          "source": "src/Network-NineP-Internal-File.html#NineFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network NineP Server",
          "module": "Network.NineP.Server",
          "name": "wstat",
          "normalized": "Stat-\u003ea()",
          "package": "Network-NineP",
          "signature": "Stat-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP-Server.html#v:wstat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library providing one with a somewhat higher level interface to 9P2000 protocol. Designed to facilitate rapid development of synthetic filesystems.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.NineP",
          "name": "NineP",
          "package": "Network-NineP",
          "source": "src/Network-NineP.html",
          "type": "module"
        },
        "index": {
          "description": "library providing one with somewhat higher level interface to P2000 protocol Designed to facilitate rapid development of synthetic filesystems",
          "hierarchy": "Network NineP",
          "module": "Network.NineP",
          "name": "NineP",
          "package": "Network-NineP",
          "partial": "Nine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Network-NineP/docs/Network-NineP.html#"
      }
    }
  ]
]