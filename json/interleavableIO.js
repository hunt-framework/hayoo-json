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
        "word": "interleavableIO"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides utilities to use functions that are not in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e as a callback in functions that expects an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleavableIO",
          "package": "interleavableIO",
          "source": "src/Control-Monad-Trans-InterleavableIO.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides utilities to use functions that are not in the IO Monad as callback in functions that expects an IO Monad",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleavableIO",
          "package": "interleavableIO",
          "partial": "Interleavable IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e types that instanciate this class can interleave an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n function, and be used as a callback in a function that asks for an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleavableIO",
          "package": "interleavableIO",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#InterleavableIO",
          "type": "class"
        },
        "index": {
          "description": "MonadIO types that instanciate this class can interleave an IO function and be used as callback in function that asks for an IO monad",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleavableIO",
          "package": "interleavableIO",
          "partial": "Interleavable IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#t:InterleavableIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError data type used in \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleaveErrorTException",
          "package": "interleavableIO",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#InterleaveErrorTException",
          "type": "data"
        },
        "index": {
          "description": "Error data type used in ErrorT instance",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleaveErrorTException",
          "package": "interleavableIO",
          "partial": "Interleave Error TException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#t:InterleaveErrorTException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleaveErrorTException",
          "package": "interleavableIO",
          "signature": "InterleaveErrorTException error",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#InterleaveErrorTException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "InterleaveErrorTException",
          "package": "interleavableIO",
          "partial": "Interleave Error TException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:InterleaveErrorTException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "callback",
          "package": "interleavableIO",
          "signature": "buffer -\u003e trans result -\u003e inner result",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#callback",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "callback",
          "normalized": "a-\u003eb c-\u003ed c",
          "package": "interleavableIO",
          "signature": "buffer-\u003etrans result-\u003einner result",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "embed",
          "package": "interleavableIO",
          "signature": "(buffer -\u003e inner result) -\u003e trans result",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#embed",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "embed",
          "normalized": "(a-\u003eb c)-\u003ed c",
          "package": "interleavableIO",
          "signature": "(buffer-\u003einner result)-\u003etrans result",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an utilitary function to the most simple use-case of this module.\n It makes it possible to use the function \u003ccode\u003ecaller\u003c/code\u003e, that needs an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n as input, with any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that instanciates \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "embedCallback",
          "package": "interleavableIO",
          "signature": "(innerFunction resultFunction -\u003e innerCaller resultCaller)-\u003e function resultFunction-\u003e caller resultCaller",
          "type": "function"
        },
        "index": {
          "description": "This is an utilitary function to the most simple use-case of this module It makes it possible to use the function caller that needs an IO as input with any Monad that instanciates InterleavableIO",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "embedCallback",
          "normalized": "(a b-\u003ec d)-\u003ee b-\u003ef d",
          "package": "interleavableIO",
          "partial": "Callback",
          "signature": "(innerFunction resultFunction-\u003einnerCaller resultCaller)-\u003efunction resultFunction-\u003ecaller resultCaller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:embedCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a utilitary function to construct new instances of\n \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e, in \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es that contain \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es.  It\n simply calls embed with an inner buffer that will be used by the inner\n instance of \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "embedInner",
          "package": "interleavableIO",
          "signature": "((buffer, innerBuffer) -\u003e inner result)-\u003e buffer-\u003e trans result",
          "type": "function"
        },
        "index": {
          "description": "This is utilitary function to construct new instances of InterleavableIO in Monad that contain InterleavableIO Monad It simply calls embed with an inner buffer that will be used by the inner instance of InterleavableIO",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "embedInner",
          "normalized": "((a,b)-\u003ec d)-\u003ea-\u003ee d",
          "package": "interleavableIO",
          "partial": "Inner",
          "signature": "((buffer,innerBuffer)-\u003einner result)-\u003ebuffer-\u003etrans result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:embedInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction useful to convert a pure \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad in a \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, to be\n used with the instance of \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "promoteReader",
          "package": "interleavableIO",
          "signature": "Reader reader result -\u003e monad result",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#promoteReader",
          "type": "function"
        },
        "index": {
          "description": "Function useful to convert pure Reader monad in ReaderT IO to be used with the instance of InterleavableIO ReaderT",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "promoteReader",
          "normalized": "Reader a b-\u003ec b",
          "package": "interleavableIO",
          "partial": "Reader",
          "signature": "Reader reader result-\u003emonad result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:promoteReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction useful to convert a pure \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad in a \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, to be\n used with the instance of \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "promoteState",
          "package": "interleavableIO",
          "signature": "State state result -\u003e monad result",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#promoteState",
          "type": "function"
        },
        "index": {
          "description": "Function useful to convert pure State monad in StateT IO to be used with the instance of InterleavableIO StateT",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "promoteState",
          "normalized": "State a b-\u003ec b",
          "package": "interleavableIO",
          "partial": "State",
          "signature": "State state result-\u003emonad result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:promoteState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction useful to convert a pure \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad in a \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e, to be\n used with the instance of \u003ccode\u003e\u003ca\u003eInterleavableIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "promoteWriter",
          "package": "interleavableIO",
          "signature": "Writer writer result -\u003e monad result",
          "source": "src/Control-Monad-Trans-InterleavableIO.html#promoteWriter",
          "type": "function"
        },
        "index": {
          "description": "Function useful to convert pure Writer monad in WriterT IO to be used with the instance of InterleavableIO WriterT",
          "hierarchy": "Control Monad Trans InterleavableIO",
          "module": "Control.Monad.Trans.InterleavableIO",
          "name": "promoteWriter",
          "normalized": "Writer a b-\u003ec b",
          "package": "interleavableIO",
          "partial": "Writer",
          "signature": "Writer writer result-\u003emonad result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interleavableIO/docs/Control-Monad-Trans-InterleavableIO.html#v:promoteWriter"
      }
    }
  ]
]