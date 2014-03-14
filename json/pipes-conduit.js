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
        "word": "pipes-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdapters to convert conduits to pipes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Pipe.Conduit",
          "name": "Conduit",
          "package": "pipes-conduit",
          "source": "src/Control-Pipe-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "Adapters to convert conduits to pipes",
          "hierarchy": "Control Pipe Conduit",
          "module": "Control.Pipe.Conduit",
          "name": "Conduit",
          "package": "pipes-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting pipe behaves like the original \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e, and closes it upon\n termination. Any unconsumed input is returned.\n\u003c/p\u003e",
          "module": "Control.Pipe.Conduit",
          "name": "conduitPipe",
          "package": "pipes-conduit",
          "signature": "Conduit a m b -\u003e Pipe a b (ResourceT m) (Maybe a)",
          "source": "src/Control-Pipe-Conduit.html#conduitPipe",
          "type": "function"
        },
        "index": {
          "description": "Convert Conduit to Pipe The resulting pipe behaves like the original Conduit and closes it upon termination Any unconsumed input is returned",
          "hierarchy": "Control Pipe Conduit",
          "module": "Control.Pipe.Conduit",
          "name": "conduitPipe",
          "normalized": "Conduit a b c-\u003ePipe a c(ResourceT b)(Maybe a)",
          "package": "pipes-conduit",
          "partial": "Pipe",
          "signature": "Conduit a m b-\u003ePipe a b(ResourceT m)(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:conduitPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, ignoring unconsumed input.\n\u003c/p\u003e",
          "module": "Control.Pipe.Conduit",
          "name": "conduitPipe_",
          "package": "pipes-conduit",
          "signature": "Conduit a m b -\u003e Pipe a b (ResourceT m) ()",
          "source": "src/Control-Pipe-Conduit.html#conduitPipe_",
          "type": "function"
        },
        "index": {
          "description": "Convert Conduit to Pipe ignoring unconsumed input",
          "hierarchy": "Control Pipe Conduit",
          "module": "Control.Pipe.Conduit",
          "name": "conduitPipe_",
          "normalized": "Conduit a b c-\u003ePipe a c(ResourceT b)()",
          "package": "pipes-conduit",
          "partial": "Pipe",
          "signature": "Conduit a m b-\u003ePipe a b(ResourceT m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:conduitPipe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOptional consumed input is returned, together with the sink result.\n\u003c/p\u003e",
          "module": "Control.Pipe.Conduit",
          "name": "sinkPipe",
          "package": "pipes-conduit",
          "signature": "Sink a m b -\u003e Pipe a x (ResourceT m) (Maybe a, b)",
          "source": "src/Control-Pipe-Conduit.html#sinkPipe",
          "type": "function"
        },
        "index": {
          "description": "Convert Sink into Pipe Optional consumed input is returned together with the sink result",
          "hierarchy": "Control Pipe Conduit",
          "module": "Control.Pipe.Conduit",
          "name": "sinkPipe",
          "normalized": "Sink a b c-\u003ePipe a d(ResourceT b)(Maybe a,c)",
          "package": "pipes-conduit",
          "partial": "Pipe",
          "signature": "Sink a m b-\u003ePipe a x(ResourceT m)(Maybe a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:sinkPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, ignoring results.\n\u003c/p\u003e",
          "module": "Control.Pipe.Conduit",
          "name": "sinkPipe_",
          "package": "pipes-conduit",
          "signature": "Sink a m b -\u003e Pipe a x (ResourceT m) ()",
          "source": "src/Control-Pipe-Conduit.html#sinkPipe_",
          "type": "function"
        },
        "index": {
          "description": "Convert Sink into Pipe ignoring results",
          "hierarchy": "Control Pipe Conduit",
          "module": "Control.Pipe.Conduit",
          "name": "sinkPipe_",
          "normalized": "Sink a b c-\u003ePipe a d(ResourceT b)()",
          "package": "pipes-conduit",
          "partial": "Pipe",
          "signature": "Sink a m b-\u003ePipe a x(ResourceT m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:sinkPipe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e which pulls from the \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e until\n exhaustion and yields the received data.\n\u003c/p\u003e",
          "module": "Control.Pipe.Conduit",
          "name": "sourcePipe",
          "package": "pipes-conduit",
          "signature": "Source m a -\u003e Pipe x a (ResourceT m) ()",
          "source": "src/Control-Pipe-Conduit.html#sourcePipe",
          "type": "function"
        },
        "index": {
          "description": "Convert Source into Pipe The resulting Pipe is Producer which pulls from the Source until exhaustion and yields the received data",
          "hierarchy": "Control Pipe Conduit",
          "module": "Control.Pipe.Conduit",
          "name": "sourcePipe",
          "normalized": "Source a b-\u003ePipe c b(ResourceT a)()",
          "package": "pipes-conduit",
          "partial": "Pipe",
          "signature": "Source m a-\u003ePipe x a(ResourceT m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-conduit/docs/Control-Pipe-Conduit.html#v:sourcePipe"
      }
    }
  ]
]