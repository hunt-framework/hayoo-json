[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapters to convert conduits to pipes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Pipe.Conduit",
        "fct-package": "pipes-conduit",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Conduit.html",
        "fct-type": "module",
        "title": "Conduit"
      },
      "index": {
        "description": "Adapters to convert conduits to pipes",
        "hierarchy": "Control Pipe Conduit",
        "module": "Control.Pipe.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "pipes-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:conduitPipe",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting pipe behaves like the original \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e, and closes it upon\n termination. Any unconsumed input is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Conduit",
        "fct-package": "pipes-conduit",
        "fct-signature": "Conduit a m b -\u003e Pipe a b (ResourceT m) (Maybe a)",
        "fct-source": "src/Control-Pipe-Conduit.html#conduitPipe",
        "fct-type": "function",
        "title": "conduitPipe"
      },
      "index": {
        "description": "Convert Conduit to Pipe The resulting pipe behaves like the original Conduit and closes it upon termination Any unconsumed input is returned",
        "hierarchy": "Control Pipe Conduit",
        "module": "Control.Pipe.Conduit",
        "name": "conduitPipe",
        "normalized": "Conduit a b c-\u003ePipe a c(ResourceT b)(Maybe a)",
        "package": "pipes-conduit",
        "partial": "Pipe",
        "signature": "Conduit a m b-\u003ePipe a b(ResourceT m)(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:conduitPipe_",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, ignoring unconsumed input.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Conduit",
        "fct-package": "pipes-conduit",
        "fct-signature": "Conduit a m b -\u003e Pipe a b (ResourceT m) ()",
        "fct-source": "src/Control-Pipe-Conduit.html#conduitPipe_",
        "fct-type": "function",
        "title": "conduitPipe_"
      },
      "index": {
        "description": "Convert Conduit to Pipe ignoring unconsumed input",
        "hierarchy": "Control Pipe Conduit",
        "module": "Control.Pipe.Conduit",
        "name": "conduitPipe_",
        "normalized": "Conduit a b c-\u003ePipe a c(ResourceT b)()",
        "package": "pipes-conduit",
        "partial": "Pipe",
        "signature": "Conduit a m b-\u003ePipe a b(ResourceT m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:sinkPipe",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOptional consumed input is returned, together with the sink result.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Conduit",
        "fct-package": "pipes-conduit",
        "fct-signature": "Sink a m b -\u003e Pipe a x (ResourceT m) (Maybe a, b)",
        "fct-source": "src/Control-Pipe-Conduit.html#sinkPipe",
        "fct-type": "function",
        "title": "sinkPipe"
      },
      "index": {
        "description": "Convert Sink into Pipe Optional consumed input is returned together with the sink result",
        "hierarchy": "Control Pipe Conduit",
        "module": "Control.Pipe.Conduit",
        "name": "sinkPipe",
        "normalized": "Sink a b c-\u003ePipe a d(ResourceT b)(Maybe a,c)",
        "package": "pipes-conduit",
        "partial": "Pipe",
        "signature": "Sink a m b-\u003ePipe a x(ResourceT m)(Maybe a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:sinkPipe_",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, ignoring results.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Conduit",
        "fct-package": "pipes-conduit",
        "fct-signature": "Sink a m b -\u003e Pipe a x (ResourceT m) ()",
        "fct-source": "src/Control-Pipe-Conduit.html#sinkPipe_",
        "fct-type": "function",
        "title": "sinkPipe_"
      },
      "index": {
        "description": "Convert Sink into Pipe ignoring results",
        "hierarchy": "Control Pipe Conduit",
        "module": "Control.Pipe.Conduit",
        "name": "sinkPipe_",
        "normalized": "Sink a b c-\u003ePipe a d(ResourceT b)()",
        "package": "pipes-conduit",
        "partial": "Pipe",
        "signature": "Sink a m b-\u003ePipe a x(ResourceT m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:sourcePipe",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e which pulls from the \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e until\n exhaustion and yields the received data.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Conduit",
        "fct-package": "pipes-conduit",
        "fct-signature": "Source m a -\u003e Pipe x a (ResourceT m) ()",
        "fct-source": "src/Control-Pipe-Conduit.html#sourcePipe",
        "fct-type": "function",
        "title": "sourcePipe"
      },
      "index": {
        "description": "Convert Source into Pipe The resulting Pipe is Producer which pulls from the Source until exhaustion and yields the received data",
        "hierarchy": "Control Pipe Conduit",
        "module": "Control.Pipe.Conduit",
        "name": "sourcePipe",
        "normalized": "Source a b-\u003ePipe c b(ResourceT a)()",
        "package": "pipes-conduit",
        "partial": "Pipe",
        "signature": "Source m a-\u003ePipe x a(ResourceT m)()"
      }
    }
  }
]