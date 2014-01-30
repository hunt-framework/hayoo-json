[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#",
      "description": {
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:bytes",
      "description": {
        "fct-descr": "\u003cp\u003eYield individual bytes of the chunked input stream.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe ByteString Word8 m r",
        "fct-source": "src/Control-Pipe-Binary.html#bytes",
        "fct-type": "function",
        "title": "bytes"
      },
      "index": {
        "description": "Yield individual bytes of the chunked input stream",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "bytes",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eDrop bytes as long as the given predicate holds, then act as an identity.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m r",
        "fct-source": "src/Control-Pipe-Binary.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Drop bytes as long as the given predicate holds then act as an identity",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "dropWhile",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a b",
        "package": "pipes-extra",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:fileReader",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from a file.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "FilePath -\u003e Pipe () ByteString m ()",
        "fct-source": "src/Control-Pipe-Binary.html#fileReader",
        "fct-type": "function",
        "title": "fileReader"
      },
      "index": {
        "description": "Read data from file",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "fileReader",
        "normalized": "FilePath-\u003ePipe()ByteString a()",
        "package": "pipes-extra",
        "partial": "Reader",
        "signature": "FilePath-\u003ePipe()ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:fileWriter",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a file.\n\u003c/p\u003e\u003cp\u003eThe file is only opened if some data arrives into the pipe.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "FilePath -\u003e Pipe ByteString Void m r",
        "fct-source": "src/Control-Pipe-Binary.html#fileWriter",
        "fct-type": "function",
        "title": "fileWriter"
      },
      "index": {
        "description": "Write data to file The file is only opened if some data arrives into the pipe",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "fileWriter",
        "normalized": "FilePath-\u003ePipe ByteString Void a b",
        "package": "pipes-extra",
        "partial": "Writer",
        "signature": "FilePath-\u003ePipe ByteString Void m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:handleReader",
      "description": {
        "fct-descr": "\u003cp\u003eRead data from an open handle.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "Handle -\u003e Pipe () ByteString m ()",
        "fct-source": "src/Control-Pipe-Binary.html#handleReader",
        "fct-type": "function",
        "title": "handleReader"
      },
      "index": {
        "description": "Read data from an open handle",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "handleReader",
        "normalized": "Handle-\u003ePipe()ByteString a()",
        "package": "pipes-extra",
        "partial": "Reader",
        "signature": "Handle-\u003ePipe()ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:handleWriter",
      "description": {
        "fct-descr": "\u003cp\u003eWrite data to a handle.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "Handle -\u003e Pipe ByteString Void m r",
        "fct-source": "src/Control-Pipe-Binary.html#handleWriter",
        "fct-type": "function",
        "title": "handleWriter"
      },
      "index": {
        "description": "Write data to handle",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "handleWriter",
        "normalized": "Handle-\u003ePipe ByteString Void a b",
        "package": "pipes-extra",
        "partial": "Writer",
        "signature": "Handle-\u003ePipe ByteString Void m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the chunked input stream into lines, and yield them individually.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe ByteString ByteString m r",
        "fct-source": "src/Control-Pipe-Binary.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split the chunked input stream into lines and yield them individually",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "lines",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eAct as an identity for the first \u003ccode\u003en\u003c/code\u003e bytes, then terminate returning the\n unconsumed portion of the last chunk.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "Int -\u003e Pipe ByteString ByteString m ByteString",
        "fct-source": "src/Control-Pipe-Binary.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Act as an identity for the first bytes then terminate returning the unconsumed portion of the last chunk",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "take",
        "normalized": "Int-\u003ePipe ByteString ByteString a ByteString",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Int-\u003ePipe ByteString ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eAct as an identity as long as the given predicate holds, then terminate\n returning the unconsumed portion of the last chunk.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Binary",
        "fct-package": "pipes-extra",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m ByteString",
        "fct-source": "src/Control-Pipe-Binary.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Act as an identity as long as the given predicate holds then terminate returning the unconsumed portion of the last chunk",
        "hierarchy": "Control Pipe Binary",
        "module": "Control.Pipe.Binary",
        "name": "takeWhile",
        "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a ByteString",
        "package": "pipes-extra",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Coroutine.html",
        "fct-type": "module",
        "title": "Coroutine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#t:Coroutine",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Pipe-Coroutine.html#Coroutine",
        "fct-type": "data",
        "title": "Coroutine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "Coroutine",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Coroutine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:coroutine",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe a b m r -\u003e Coroutine a b m r",
        "fct-source": "src/Control-Pipe-Coroutine.html#coroutine",
        "fct-type": "function",
        "title": "coroutine"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "coroutine",
        "normalized": "Pipe a b c d-\u003eCoroutine a b c d",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Pipe a b m r-\u003eCoroutine a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:resume",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "Coroutine a b m r -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-Coroutine.html#resume",
        "fct-type": "function",
        "title": "resume"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "resume",
        "normalized": "Coroutine a b c d-\u003ePipe a b c d",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Coroutine a b m r-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:step",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "Coroutine a b m r -\u003e Pipe a x m (Either r (b, Coroutine a b m r))",
        "fct-source": "src/Control-Pipe-Coroutine.html#step",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "step",
        "normalized": "Coroutine a b c d-\u003ePipe a e c(Either d(b,Coroutine a b c d))",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Coroutine a b m r-\u003ePipe a x m(Either r(b,Coroutine a b m r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:suspend",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe a b m r -\u003e Pipe a x m (Either r (b, Coroutine a b m r))",
        "fct-source": "src/Control-Pipe-Coroutine.html#suspend",
        "fct-type": "function",
        "title": "suspend"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "suspend",
        "normalized": "Pipe a b c d-\u003ePipe a e c(Either d(b,Coroutine a b c d))",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Pipe a b m r-\u003ePipe a x m(Either r(b,Coroutine a b m r))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:terminate",
      "description": {
        "fct-module": "Control.Pipe.Coroutine",
        "fct-package": "pipes-extra",
        "fct-signature": "Coroutine a b m r -\u003e Pipe a b m ()",
        "fct-source": "src/Control-Pipe-Coroutine.html#terminate",
        "fct-type": "function",
        "title": "terminate"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Coroutine",
        "module": "Control.Pipe.Coroutine",
        "name": "terminate",
        "normalized": "Coroutine a b c d-\u003ePipe a b c()",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Coroutine a b m r-\u003ePipe a b m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an alternative pipe implementation, \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e,\n providing an additional primitive \u003ccode\u003e\u003ca\u003eputback\u003c/a\u003e\u003c/code\u003e, which allows data to be\n inserted into the input stream of the current pipe.\n\u003c/p\u003e\u003cp\u003ePutbackPipes can be used to implement pipes with left-over data, and can be\n composed vertically (using the Monad instance), but not horizontally.\n\u003c/p\u003e\u003cp\u003eTo make use of a PutbackPipe within a \u003ccode\u003ePipeline\u003c/code\u003e, you need to convert it to\n a regular \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunPutback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-PutbackPipe.html",
        "fct-type": "module",
        "title": "PutbackPipe"
      },
      "index": {
        "description": "This module contains an alternative pipe implementation PutbackPipe providing an additional primitive putback which allows data to be inserted into the input stream of the current pipe PutbackPipes can be used to implement pipes with left-over data and can be composed vertically using the Monad instance but not horizontally To make use of PutbackPipe within Pipeline you need to convert it to regular Pipe using runPutback",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "PutbackPipe",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Putback Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#t:PutbackPipe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#PutbackPipe",
        "fct-type": "newtype",
        "title": "PutbackPipe"
      },
      "index": {
        "description": "The PutbackPipe data type",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "PutbackPipe",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Putback Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:PutbackPipe",
      "description": {
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "PutbackPipe",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#PutbackPipe",
        "fct-type": "function",
        "title": "PutbackPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "PutbackPipe",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Putback Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:await",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e for regular pipes.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "PutbackPipe a b m a",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#await",
        "fct-type": "function",
        "title": "await"
      },
      "index": {
        "description": "Same as await for regular pipes",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "await",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:fromPipe",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e from a regular pipe.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe a b m r -\u003e PutbackPipe a b m r",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#fromPipe",
        "fct-type": "function",
        "title": "fromPipe"
      },
      "index": {
        "description": "Create PutbackPipe from regular pipe",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "fromPipe",
        "normalized": "Pipe a b c d-\u003ePutbackPipe a b c d",
        "package": "pipes-extra",
        "partial": "Pipe",
        "signature": "Pipe a b m r-\u003ePutbackPipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:putback",
      "description": {
        "fct-descr": "\u003cp\u003ePut back an element into the input stream.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "a -\u003e PutbackPipe a b m ()",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#putback",
        "fct-type": "function",
        "title": "putback"
      },
      "index": {
        "description": "Put back an element into the input stream",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "putback",
        "normalized": "a-\u003ePutbackPipe a b c()",
        "package": "pipes-extra",
        "partial": "",
        "signature": "a-\u003ePutbackPipe a b m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:runPutback",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e to a regular pipe.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "PutbackPipe a b m r -\u003e Pipe a b m r",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#runPutback",
        "fct-type": "function",
        "title": "runPutback"
      },
      "index": {
        "description": "Convert PutbackPipe to regular pipe",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "runPutback",
        "normalized": "PutbackPipe a b c d-\u003ePipe a b c d",
        "package": "pipes-extra",
        "partial": "Putback",
        "signature": "PutbackPipe a b m r-\u003ePipe a b m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:tryAwait",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etryAwait\u003c/a\u003e\u003c/code\u003e for regular pipes.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "PutbackPipe a b m (Maybe a)",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#tryAwait",
        "fct-type": "function",
        "title": "tryAwait"
      },
      "index": {
        "description": "Same as tryAwait for regular pipes",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "tryAwait",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Await",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:unPutback",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe (Either a a) (Either b a) m r",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#PutbackPipe",
        "fct-type": "function",
        "title": "unPutback"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "unPutback",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Putback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e for regular pipes.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.PutbackPipe",
        "fct-package": "pipes-extra",
        "fct-signature": "b -\u003e PutbackPipe a b m ()",
        "fct-source": "src/Control-Pipe-PutbackPipe.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Same as yield for regular pipes",
        "hierarchy": "Control Pipe PutbackPipe",
        "module": "Control.Pipe.PutbackPipe",
        "name": "yield",
        "normalized": "a-\u003ePutbackPipe b a c()",
        "package": "pipes-extra",
        "partial": "",
        "signature": "b-\u003ePutbackPipe a b m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etee\u003c/a\u003e\u003c/code\u003e combinators act like \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also send a copy of the input to the\n supplied \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e (e.g. a file). This is typically done for the purpose of\n logging a pipeline, showing progress, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Pipe.Tee",
        "fct-package": "pipes-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Tee.html",
        "fct-type": "module",
        "title": "Tee"
      },
      "index": {
        "description": "The tee combinators act like idP but also send copy of the input to the supplied Consumer e.g file This is typically done for the purpose of logging pipeline showing progress etc",
        "hierarchy": "Control Pipe Tee",
        "module": "Control.Pipe.Tee",
        "name": "Tee",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Tee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#v:tee",
      "description": {
        "fct-descr": "\u003cp\u003eActs like \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also passes a copy to the supplied consumer.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Tee",
        "fct-package": "pipes-extra",
        "fct-signature": "Pipe a Void m r-\u003e Pipe a a m r",
        "fct-type": "function",
        "title": "tee"
      },
      "index": {
        "description": "Acts like idP but also passes copy to the supplied consumer",
        "hierarchy": "Control Pipe Tee",
        "module": "Control.Pipe.Tee",
        "name": "tee",
        "normalized": "Pipe a Void b c-\u003ePipe a a b c",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Pipe a Void m r-\u003ePipe a a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#v:teeFile",
      "description": {
        "fct-descr": "\u003cp\u003eActs like \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also writes a copy to a file.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Tee",
        "fct-package": "pipes-extra",
        "fct-signature": "(a -\u003e ByteString)-\u003e FilePath-\u003e Pipe a a m ()",
        "fct-type": "function",
        "title": "teeFile"
      },
      "index": {
        "description": "Acts like idP but also writes copy to file",
        "hierarchy": "Control Pipe Tee",
        "module": "Control.Pipe.Tee",
        "name": "teeFile",
        "normalized": "(a-\u003eByteString)-\u003eFilePath-\u003ePipe a a b()",
        "package": "pipes-extra",
        "partial": "File",
        "signature": "(a-\u003eByteString)-\u003eFilePath-\u003ePipe a a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#v:teeFileBS",
      "description": {
        "fct-descr": "\u003cp\u003eActs like, \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also writes a copy to the specified log file.\n\u003c/p\u003e\u003cp\u003eThis function is equivalent to \u003ccode\u003eteeFile id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Pipe.Tee",
        "fct-package": "pipes-extra",
        "fct-signature": "FilePath-\u003e Pipe ByteString ByteString m ()",
        "fct-type": "function",
        "title": "teeFileBS"
      },
      "index": {
        "description": "Acts like idP but also writes copy to the specified log file This function is equivalent to teeFile id",
        "hierarchy": "Control Pipe Tee",
        "module": "Control.Pipe.Tee",
        "name": "teeFileBS",
        "normalized": "FilePath-\u003ePipe ByteString ByteString a()",
        "package": "pipes-extra",
        "partial": "File BS",
        "signature": "FilePath-\u003ePipe ByteString ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Pipe-Zip.html",
        "fct-type": "module",
        "title": "Zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "Zip",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Zip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#t:ProducerControl",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Pipe-Zip.html#ProducerControl",
        "fct-type": "data",
        "title": "ProducerControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "ProducerControl",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Producer Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#t:ZipControl",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Pipe-Zip.html#ZipControl",
        "fct-type": "data",
        "title": "ZipControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "ZipControl",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Zip Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:Done",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "Done r",
        "fct-source": "src/Control-Pipe-Zip.html#ProducerControl",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "Done",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:Error",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "Error SomeException",
        "fct-source": "src/Control-Pipe-Zip.html#ProducerControl",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "Error",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:LeftZ",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "LeftZ (ProducerControl r)",
        "fct-source": "src/Control-Pipe-Zip.html#ZipControl",
        "fct-type": "function",
        "title": "LeftZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "LeftZ",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:RightZ",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "RightZ (ProducerControl r)",
        "fct-source": "src/Control-Pipe-Zip.html#ZipControl",
        "fct-type": "function",
        "title": "RightZ"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "RightZ",
        "normalized": "",
        "package": "pipes-extra",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:controllable",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "Producer a m r -\u003e Pipe (Either () (ProducerControl r)) a m r",
        "fct-source": "src/Control-Pipe-Zip.html#controllable",
        "fct-type": "function",
        "title": "controllable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "controllable",
        "normalized": "Producer a b c-\u003ePipe(Either()(ProducerControl c))a b c",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Producer a m r-\u003ePipe(Either()(ProducerControl r))a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:controllable_",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "Producer a m r -\u003e Producer a m r",
        "fct-source": "src/Control-Pipe-Zip.html#controllable_",
        "fct-type": "function",
        "title": "controllable_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "controllable_",
        "normalized": "Producer a b c-\u003eProducer a b c",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Producer a m r-\u003eProducer a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:zip",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "Producer a m r -\u003e Producer b m r -\u003e Pipe (Either () (ZipControl r)) (Either a b) m r",
        "fct-source": "src/Control-Pipe-Zip.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "zip",
        "normalized": "Producer a b c-\u003eProducer d b c-\u003ePipe(Either()(ZipControl c))(Either a d)b c",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Producer a m r-\u003eProducer b m r-\u003ePipe(Either()(ZipControl r))(Either a b)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:zip_",
      "description": {
        "fct-module": "Control.Pipe.Zip",
        "fct-package": "pipes-extra",
        "fct-signature": "Producer a m r -\u003e Producer b m r -\u003e Producer (Either a b) m r",
        "fct-source": "src/Control-Pipe-Zip.html#zip_",
        "fct-type": "function",
        "title": "zip_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Pipe Zip",
        "module": "Control.Pipe.Zip",
        "name": "zip_",
        "normalized": "Producer a b c-\u003eProducer d b c-\u003eProducer(Either a d)b c",
        "package": "pipes-extra",
        "partial": "",
        "signature": "Producer a m r-\u003eProducer b m r-\u003eProducer(Either a b)m r"
      }
    }
  }
]