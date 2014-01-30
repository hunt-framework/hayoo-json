[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reactive resumption monad transforemer, based on the formulation in\n the article \u003ca\u003eCheap (But Functional) Threads\u003c/a\u003e\n by William L. Harrison and Adam Procter.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Resumption.Reactive",
        "fct-package": "monad-resumption",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Resumption-Reactive.html",
        "fct-type": "module",
        "title": "Reactive"
      },
      "index": {
        "description": "reactive resumption monad transforemer based on the formulation in the article Cheap But Functional Threads by William Harrison and Adam Procter",
        "hierarchy": "Control Monad Resumption Reactive",
        "module": "Control.Monad.Resumption.Reactive",
        "name": "Reactive",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Reactive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#t:ReacT",
      "description": {
        "fct-descr": "\u003cp\u003eReactive resumption monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumption.Reactive",
        "fct-package": "monad-resumption",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Resumption-Reactive.html#ReacT",
        "fct-type": "newtype",
        "title": "ReacT"
      },
      "index": {
        "description": "Reactive resumption monad transformer",
        "hierarchy": "Control Monad Resumption Reactive",
        "module": "Control.Monad.Resumption.Reactive",
        "name": "ReacT",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Reac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:-60--126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTennis operator.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumption.Reactive",
        "fct-package": "monad-resumption",
        "fct-signature": "ReacT i o m a -\u003e ReacT o i m b -\u003e ResT m (Either a b)",
        "fct-source": "src/Control-Monad-Resumption-Reactive.html#%3C~%3E",
        "fct-type": "function",
        "title": "(\u003c~\u003e)"
      },
      "index": {
        "description": "Tennis operator",
        "hierarchy": "Control Monad Resumption Reactive",
        "module": "Control.Monad.Resumption.Reactive",
        "name": "(\u003c~\u003e) \u003c~\u003e",
        "normalized": "ReacT a b c d-\u003eReacT b a c e-\u003eResT c(Either d e)",
        "package": "monad-resumption",
        "partial": "",
        "signature": "ReacT i o m a-\u003eReacT o i m b-\u003eResT m(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:ReacT",
      "description": {
        "fct-module": "Control.Monad.Resumption.Reactive",
        "fct-package": "monad-resumption",
        "fct-signature": "ReacT",
        "fct-source": "src/Control-Monad-Resumption-Reactive.html#ReacT",
        "fct-type": "function",
        "title": "ReacT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumption Reactive",
        "module": "Control.Monad.Resumption.Reactive",
        "name": "ReacT",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Reac",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:deReacT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Resumption.Reactive",
        "fct-package": "monad-resumption",
        "fct-signature": "m (Either a (output, input -\u003e ReacT input output m a))",
        "fct-source": "src/Control-Monad-Resumption-Reactive.html#ReacT",
        "fct-type": "function",
        "title": "deReacT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumption Reactive",
        "module": "Control.Monad.Resumption.Reactive",
        "name": "deReacT",
        "normalized": "a(Either b(c,d-\u003eReacT d c a b))",
        "package": "monad-resumption",
        "partial": "Reac",
        "signature": "m(Either a(output,input-\u003eReacT input output m a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption-Reactive.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eOutputs its argument, then waits for the next input and returns it.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumption.Reactive",
        "fct-package": "monad-resumption",
        "fct-signature": "output -\u003e ReacT input output m input",
        "fct-source": "src/Control-Monad-Resumption-Reactive.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Outputs its argument then waits for the next input and returns it",
        "hierarchy": "Control Monad Resumption Reactive",
        "module": "Control.Monad.Resumption.Reactive",
        "name": "signal",
        "normalized": "a-\u003eReacT b a c b",
        "package": "monad-resumption",
        "partial": "",
        "signature": "output-\u003eReacT input output m input"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA resumption monad transformer, based on the formulation in the article\n \u003ca\u003eCheap (But Functional) Threads\u003c/a\u003e\n by William L. Harrison and Adam Procter.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Resumption",
        "fct-package": "monad-resumption",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Resumption.html",
        "fct-type": "module",
        "title": "Resumption"
      },
      "index": {
        "description": "resumption monad transformer based on the formulation in the article Cheap But Functional Threads by William Harrison and Adam Procter",
        "hierarchy": "Control Monad Resumption",
        "module": "Control.Monad.Resumption",
        "name": "Resumption",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Resumption",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#t:ResT",
      "description": {
        "fct-descr": "\u003cp\u003eResumption monad transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumption",
        "fct-package": "monad-resumption",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Resumption.html#ResT",
        "fct-type": "newtype",
        "title": "ResT"
      },
      "index": {
        "description": "Resumption monad transformer",
        "hierarchy": "Control Monad Resumption",
        "module": "Control.Monad.Resumption",
        "name": "ResT",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Res",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:ResT",
      "description": {
        "fct-module": "Control.Monad.Resumption",
        "fct-package": "monad-resumption",
        "fct-signature": "ResT",
        "fct-source": "src/Control-Monad-Resumption.html#ResT",
        "fct-type": "function",
        "title": "ResT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumption",
        "module": "Control.Monad.Resumption",
        "name": "ResT",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Res",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:deResT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Resumption",
        "fct-package": "monad-resumption",
        "fct-signature": "m (Either a (ResT m a))",
        "fct-source": "src/Control-Monad-Resumption.html#ResT",
        "fct-type": "function",
        "title": "deResT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumption",
        "module": "Control.Monad.Resumption",
        "name": "deResT",
        "normalized": "",
        "package": "monad-resumption",
        "partial": "Res",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:runResT",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a resumptive computation to exhaustion, producing its final return\n value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumption",
        "fct-package": "monad-resumption",
        "fct-signature": "ResT m a -\u003e m a",
        "fct-source": "src/Control-Monad-Resumption.html#runResT",
        "fct-type": "function",
        "title": "runResT"
      },
      "index": {
        "description": "Runs resumptive computation to exhaustion producing its final return value",
        "hierarchy": "Control Monad Resumption",
        "module": "Control.Monad.Resumption",
        "name": "runResT",
        "normalized": "ResT a b-\u003ea b",
        "package": "monad-resumption",
        "partial": "Res",
        "signature": "ResT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monad-resumption/docs/Control-Monad-Resumption.html#v:tick",
      "description": {
        "fct-descr": "\u003cp\u003eWaits until the next tick.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumption",
        "fct-package": "monad-resumption",
        "fct-signature": "ResT m ()",
        "fct-source": "src/Control-Monad-Resumption.html#tick",
        "fct-type": "function",
        "title": "tick"
      },
      "index": {
        "description": "Waits until the next tick",
        "hierarchy": "Control Monad Resumption",
        "module": "Control.Monad.Resumption",
        "name": "tick",
        "normalized": "ResT a()",
        "package": "monad-resumption",
        "partial": "",
        "signature": "ResT m()"
      }
    }
  }
]