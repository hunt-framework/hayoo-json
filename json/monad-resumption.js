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
        "word": "monad-resumption"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reactive resumption monad transformer, based on the formulation in\n the article \u003ca\u003eCheap (But Functional) Threads\u003c/a\u003e\n by William L. Harrison and Adam Procter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "Reactive",
          "package": "monad-resumption",
          "source": "src/Control-Monad-Resumption-Reactive.html",
          "type": "module"
        },
        "index": {
          "description": "reactive resumption monad transformer based on the formulation in the article Cheap But Functional Threads by William Harrison and Adam Procter",
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "Reactive",
          "package": "monad-resumption",
          "partial": "Reactive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReactive resumption monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "ReacT",
          "package": "monad-resumption",
          "source": "src/Control-Monad-Resumption-Reactive.html#ReacT",
          "type": "newtype"
        },
        "index": {
          "description": "Reactive resumption monad transformer",
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "ReacT",
          "package": "monad-resumption",
          "partial": "Reac",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#t:ReacT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTennis operator.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "(\u003c~\u003e)",
          "package": "monad-resumption",
          "signature": "ReacT i o m a -\u003e ReacT o i m b -\u003e ResT m (Either a b)",
          "source": "src/Control-Monad-Resumption-Reactive.html#%3C~%3E",
          "type": "function"
        },
        "index": {
          "description": "Tennis operator",
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "(\u003c~\u003e) \u003c~\u003e",
          "normalized": "ReacT a b c d-\u003eReacT b a c e-\u003eResT c(Either d e)",
          "package": "monad-resumption",
          "signature": "ReacT i o m a-\u003eReacT o i m b-\u003eResT m(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:-60--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumption.Reactive",
          "name": "ReacT",
          "package": "monad-resumption",
          "signature": "ReacT",
          "source": "src/Control-Monad-Resumption-Reactive.html#ReacT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "ReacT",
          "package": "monad-resumption",
          "partial": "Reac",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:ReacT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumption.Reactive",
          "name": "deReacT",
          "package": "monad-resumption",
          "signature": "m (Either a (output, input -\u003e ReacT input output m a))",
          "source": "src/Control-Monad-Resumption-Reactive.html#ReacT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "deReacT",
          "normalized": "a(Either b(c,d-\u003eReacT d c a b))",
          "package": "monad-resumption",
          "partial": "Reac",
          "signature": "m(Either a(output,input-\u003eReacT input output m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:deReacT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic runner function.  Provide the ReacT and a handler in the underlying monad to run.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "runReacT",
          "package": "monad-resumption",
          "signature": "ReacT input output m a -\u003e (output -\u003e m input) -\u003e m a",
          "source": "src/Control-Monad-Resumption-Reactive.html#runReacT",
          "type": "function"
        },
        "index": {
          "description": "basic runner function Provide the ReacT and handler in the underlying monad to run",
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "runReacT",
          "normalized": "ReacT a b c d-\u003e(b-\u003ec a)-\u003ec d",
          "package": "monad-resumption",
          "partial": "Reac",
          "signature": "ReacT input output m a-\u003e(output-\u003em input)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:runReacT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs its argument, then waits for the next input and returns it.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "signal",
          "package": "monad-resumption",
          "signature": "output -\u003e ReacT input output m input",
          "source": "src/Control-Monad-Resumption-Reactive.html#signal",
          "type": "function"
        },
        "index": {
          "description": "Outputs its argument then waits for the next input and returns it",
          "hierarchy": "Control Monad Resumption Reactive",
          "module": "Control.Monad.Resumption.Reactive",
          "name": "signal",
          "normalized": "a-\u003eReacT b a c b",
          "package": "monad-resumption",
          "signature": "output-\u003eReacT input output m input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA resumption monad transformer, based on the formulation in the article\n \u003ca\u003eCheap (But Functional) Threads\u003c/a\u003e\n by William L. Harrison and Adam Procter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Resumption",
          "name": "Resumption",
          "package": "monad-resumption",
          "source": "src/Control-Monad-Resumption.html",
          "type": "module"
        },
        "index": {
          "description": "resumption monad transformer based on the formulation in the article Cheap But Functional Threads by William Harrison and Adam Procter",
          "hierarchy": "Control Monad Resumption",
          "module": "Control.Monad.Resumption",
          "name": "Resumption",
          "package": "monad-resumption",
          "partial": "Resumption",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResumption monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption",
          "name": "ResT",
          "package": "monad-resumption",
          "source": "src/Control-Monad-Resumption.html#ResT",
          "type": "newtype"
        },
        "index": {
          "description": "Resumption monad transformer",
          "hierarchy": "Control Monad Resumption",
          "module": "Control.Monad.Resumption",
          "name": "ResT",
          "package": "monad-resumption",
          "partial": "Res",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#t:ResT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumption",
          "name": "ResT",
          "package": "monad-resumption",
          "signature": "ResT",
          "source": "src/Control-Monad-Resumption.html#ResT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumption",
          "module": "Control.Monad.Resumption",
          "name": "ResT",
          "package": "monad-resumption",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:ResT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumption",
          "name": "deResT",
          "package": "monad-resumption",
          "signature": "m (Either a (ResT m a))",
          "source": "src/Control-Monad-Resumption.html#ResT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumption",
          "module": "Control.Monad.Resumption",
          "name": "deResT",
          "package": "monad-resumption",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:deResT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a resumptive computation to exhaustion, producing its final return\n value.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption",
          "name": "runResT",
          "package": "monad-resumption",
          "signature": "ResT m a -\u003e m a",
          "source": "src/Control-Monad-Resumption.html#runResT",
          "type": "function"
        },
        "index": {
          "description": "Runs resumptive computation to exhaustion producing its final return value",
          "hierarchy": "Control Monad Resumption",
          "module": "Control.Monad.Resumption",
          "name": "runResT",
          "normalized": "ResT a b-\u003ea b",
          "package": "monad-resumption",
          "partial": "Res",
          "signature": "ResT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:runResT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits until the next tick.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumption",
          "name": "tick",
          "package": "monad-resumption",
          "signature": "ResT m ()",
          "source": "src/Control-Monad-Resumption.html#tick",
          "type": "function"
        },
        "index": {
          "description": "Waits until the next tick",
          "hierarchy": "Control Monad Resumption",
          "module": "Control.Monad.Resumption",
          "name": "tick",
          "normalized": "ResT a()",
          "package": "monad-resumption",
          "signature": "ResT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:tick"
      }
    }
  ]
]