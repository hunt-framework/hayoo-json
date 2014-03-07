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
        "word": "pipes-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Binary",
          "name": "Binary",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Binary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "Binary",
          "package": "pipes-extra",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield individual bytes of the chunked input stream.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "bytes",
          "package": "pipes-extra",
          "signature": "Pipe ByteString Word8 m r",
          "source": "src/Control-Pipe-Binary.html#bytes",
          "type": "function"
        },
        "index": {
          "description": "Yield individual bytes of the chunked input stream",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "bytes",
          "package": "pipes-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop bytes as long as the given predicate holds, then act as an identity.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "dropWhile",
          "package": "pipes-extra",
          "signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m r",
          "source": "src/Control-Pipe-Binary.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Drop bytes as long as the given predicate holds then act as an identity",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a b",
          "package": "pipes-extra",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from a file.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "fileReader",
          "package": "pipes-extra",
          "signature": "FilePath -\u003e Pipe () ByteString m ()",
          "source": "src/Control-Pipe-Binary.html#fileReader",
          "type": "function"
        },
        "index": {
          "description": "Read data from file",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "fileReader",
          "normalized": "FilePath-\u003ePipe()ByteString a()",
          "package": "pipes-extra",
          "partial": "Reader",
          "signature": "FilePath-\u003ePipe()ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:fileReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to a file.\n\u003c/p\u003e\u003cp\u003eThe file is only opened if some data arrives into the pipe.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "fileWriter",
          "package": "pipes-extra",
          "signature": "FilePath -\u003e Pipe ByteString Void m r",
          "source": "src/Control-Pipe-Binary.html#fileWriter",
          "type": "function"
        },
        "index": {
          "description": "Write data to file The file is only opened if some data arrives into the pipe",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "fileWriter",
          "normalized": "FilePath-\u003ePipe ByteString Void a b",
          "package": "pipes-extra",
          "partial": "Writer",
          "signature": "FilePath-\u003ePipe ByteString Void m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:fileWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead data from an open handle.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "handleReader",
          "package": "pipes-extra",
          "signature": "Handle -\u003e Pipe () ByteString m ()",
          "source": "src/Control-Pipe-Binary.html#handleReader",
          "type": "function"
        },
        "index": {
          "description": "Read data from an open handle",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "handleReader",
          "normalized": "Handle-\u003ePipe()ByteString a()",
          "package": "pipes-extra",
          "partial": "Reader",
          "signature": "Handle-\u003ePipe()ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:handleReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to a handle.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "handleWriter",
          "package": "pipes-extra",
          "signature": "Handle -\u003e Pipe ByteString Void m r",
          "source": "src/Control-Pipe-Binary.html#handleWriter",
          "type": "function"
        },
        "index": {
          "description": "Write data to handle",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "handleWriter",
          "normalized": "Handle-\u003ePipe ByteString Void a b",
          "package": "pipes-extra",
          "partial": "Writer",
          "signature": "Handle-\u003ePipe ByteString Void m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:handleWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the chunked input stream into lines, and yield them individually.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "lines",
          "package": "pipes-extra",
          "signature": "Pipe ByteString ByteString m r",
          "source": "src/Control-Pipe-Binary.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Split the chunked input stream into lines and yield them individually",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "lines",
          "package": "pipes-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAct as an identity for the first \u003ccode\u003en\u003c/code\u003e bytes, then terminate returning the\n unconsumed portion of the last chunk.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "take",
          "package": "pipes-extra",
          "signature": "Int -\u003e Pipe ByteString ByteString m ByteString",
          "source": "src/Control-Pipe-Binary.html#take",
          "type": "function"
        },
        "index": {
          "description": "Act as an identity for the first bytes then terminate returning the unconsumed portion of the last chunk",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "take",
          "normalized": "Int-\u003ePipe ByteString ByteString a ByteString",
          "package": "pipes-extra",
          "signature": "Int-\u003ePipe ByteString ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAct as an identity as long as the given predicate holds, then terminate\n returning the unconsumed portion of the last chunk.\n\u003c/p\u003e",
          "module": "Control.Pipe.Binary",
          "name": "takeWhile",
          "package": "pipes-extra",
          "signature": "(Word8 -\u003e Bool) -\u003e Pipe ByteString ByteString m ByteString",
          "source": "src/Control-Pipe-Binary.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Act as an identity as long as the given predicate holds then terminate returning the unconsumed portion of the last chunk",
          "hierarchy": "Control Pipe Binary",
          "module": "Control.Pipe.Binary",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003ePipe ByteString ByteString a ByteString",
          "package": "pipes-extra",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003ePipe ByteString ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Binary.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "Coroutine",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Coroutine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "Coroutine",
          "package": "pipes-extra",
          "partial": "Coroutine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "Coroutine",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Coroutine.html#Coroutine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "Coroutine",
          "package": "pipes-extra",
          "partial": "Coroutine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#t:Coroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "coroutine",
          "package": "pipes-extra",
          "signature": "Pipe a b m r -\u003e Coroutine a b m r",
          "source": "src/Control-Pipe-Coroutine.html#coroutine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "coroutine",
          "normalized": "Pipe a b c d-\u003eCoroutine a b c d",
          "package": "pipes-extra",
          "signature": "Pipe a b m r-\u003eCoroutine a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:coroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "resume",
          "package": "pipes-extra",
          "signature": "Coroutine a b m r -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-Coroutine.html#resume",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "resume",
          "normalized": "Coroutine a b c d-\u003ePipe a b c d",
          "package": "pipes-extra",
          "signature": "Coroutine a b m r-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "step",
          "package": "pipes-extra",
          "signature": "Coroutine a b m r -\u003e Pipe a x m (Either r (b, Coroutine a b m r))",
          "source": "src/Control-Pipe-Coroutine.html#step",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "step",
          "normalized": "Coroutine a b c d-\u003ePipe a e c(Either d(b,Coroutine a b c d))",
          "package": "pipes-extra",
          "signature": "Coroutine a b m r-\u003ePipe a x m(Either r(b,Coroutine a b m r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "suspend",
          "package": "pipes-extra",
          "signature": "Pipe a b m r -\u003e Pipe a x m (Either r (b, Coroutine a b m r))",
          "source": "src/Control-Pipe-Coroutine.html#suspend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "suspend",
          "normalized": "Pipe a b c d-\u003ePipe a e c(Either d(b,Coroutine a b c d))",
          "package": "pipes-extra",
          "signature": "Pipe a b m r-\u003ePipe a x m(Either r(b,Coroutine a b m r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:suspend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Coroutine",
          "name": "terminate",
          "package": "pipes-extra",
          "signature": "Coroutine a b m r -\u003e Pipe a b m ()",
          "source": "src/Control-Pipe-Coroutine.html#terminate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Coroutine",
          "module": "Control.Pipe.Coroutine",
          "name": "terminate",
          "normalized": "Coroutine a b c d-\u003ePipe a b c()",
          "package": "pipes-extra",
          "signature": "Coroutine a b m r-\u003ePipe a b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Coroutine.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an alternative pipe implementation, \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e,\n providing an additional primitive \u003ccode\u003e\u003ca\u003eputback\u003c/a\u003e\u003c/code\u003e, which allows data to be\n inserted into the input stream of the current pipe.\n\u003c/p\u003e\u003cp\u003ePutbackPipes can be used to implement pipes with left-over data, and can be\n composed vertically (using the Monad instance), but not horizontally.\n\u003c/p\u003e\u003cp\u003eTo make use of a PutbackPipe within a \u003ccode\u003ePipeline\u003c/code\u003e, you need to convert it to\n a regular \u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003erunPutback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "PutbackPipe",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-PutbackPipe.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains an alternative pipe implementation PutbackPipe providing an additional primitive putback which allows data to be inserted into the input stream of the current pipe PutbackPipes can be used to implement pipes with left-over data and can be composed vertically using the Monad instance but not horizontally To make use of PutbackPipe within Pipeline you need to convert it to regular Pipe using runPutback",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "PutbackPipe",
          "package": "pipes-extra",
          "partial": "Putback Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "PutbackPipe",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-PutbackPipe.html#PutbackPipe",
          "type": "newtype"
        },
        "index": {
          "description": "The PutbackPipe data type",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "PutbackPipe",
          "package": "pipes-extra",
          "partial": "Putback Pipe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#t:PutbackPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.PutbackPipe",
          "name": "PutbackPipe",
          "package": "pipes-extra",
          "signature": "PutbackPipe",
          "source": "src/Control-Pipe-PutbackPipe.html#PutbackPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "PutbackPipe",
          "package": "pipes-extra",
          "partial": "Putback Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:PutbackPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eawait\u003c/a\u003e\u003c/code\u003e for regular pipes.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "await",
          "package": "pipes-extra",
          "signature": "PutbackPipe a b m a",
          "source": "src/Control-Pipe-PutbackPipe.html#await",
          "type": "function"
        },
        "index": {
          "description": "Same as await for regular pipes",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "await",
          "package": "pipes-extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e from a regular pipe.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "fromPipe",
          "package": "pipes-extra",
          "signature": "Pipe a b m r -\u003e PutbackPipe a b m r",
          "source": "src/Control-Pipe-PutbackPipe.html#fromPipe",
          "type": "function"
        },
        "index": {
          "description": "Create PutbackPipe from regular pipe",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "fromPipe",
          "normalized": "Pipe a b c d-\u003ePutbackPipe a b c d",
          "package": "pipes-extra",
          "partial": "Pipe",
          "signature": "Pipe a b m r-\u003ePutbackPipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:fromPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut back an element into the input stream.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "putback",
          "package": "pipes-extra",
          "signature": "a -\u003e PutbackPipe a b m ()",
          "source": "src/Control-Pipe-PutbackPipe.html#putback",
          "type": "function"
        },
        "index": {
          "description": "Put back an element into the input stream",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "putback",
          "normalized": "a-\u003ePutbackPipe a b c()",
          "package": "pipes-extra",
          "signature": "a-\u003ePutbackPipe a b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:putback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePutbackPipe\u003c/a\u003e\u003c/code\u003e to a regular pipe.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "runPutback",
          "package": "pipes-extra",
          "signature": "PutbackPipe a b m r -\u003e Pipe a b m r",
          "source": "src/Control-Pipe-PutbackPipe.html#runPutback",
          "type": "function"
        },
        "index": {
          "description": "Convert PutbackPipe to regular pipe",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "runPutback",
          "normalized": "PutbackPipe a b c d-\u003ePipe a b c d",
          "package": "pipes-extra",
          "partial": "Putback",
          "signature": "PutbackPipe a b m r-\u003ePipe a b m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:runPutback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003etryAwait\u003c/a\u003e\u003c/code\u003e for regular pipes.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "tryAwait",
          "package": "pipes-extra",
          "signature": "PutbackPipe a b m (Maybe a)",
          "source": "src/Control-Pipe-PutbackPipe.html#tryAwait",
          "type": "function"
        },
        "index": {
          "description": "Same as tryAwait for regular pipes",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "tryAwait",
          "package": "pipes-extra",
          "partial": "Await",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:tryAwait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.PutbackPipe",
          "name": "unPutback",
          "package": "pipes-extra",
          "signature": "Pipe (Either a a) (Either b a) m r",
          "source": "src/Control-Pipe-PutbackPipe.html#PutbackPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "unPutback",
          "package": "pipes-extra",
          "partial": "Putback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:unPutback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e for regular pipes.\n\u003c/p\u003e",
          "module": "Control.Pipe.PutbackPipe",
          "name": "yield",
          "package": "pipes-extra",
          "signature": "b -\u003e PutbackPipe a b m ()",
          "source": "src/Control-Pipe-PutbackPipe.html#yield",
          "type": "function"
        },
        "index": {
          "description": "Same as yield for regular pipes",
          "hierarchy": "Control Pipe PutbackPipe",
          "module": "Control.Pipe.PutbackPipe",
          "name": "yield",
          "normalized": "a-\u003ePutbackPipe b a c()",
          "package": "pipes-extra",
          "signature": "b-\u003ePutbackPipe a b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-PutbackPipe.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etee\u003c/a\u003e\u003c/code\u003e combinators act like \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also send a copy of the input to the\n supplied \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e (e.g. a file). This is typically done for the purpose of\n logging a pipeline, showing progress, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Pipe.Tee",
          "name": "Tee",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Tee.html",
          "type": "module"
        },
        "index": {
          "description": "The tee combinators act like idP but also send copy of the input to the supplied Consumer e.g file This is typically done for the purpose of logging pipeline showing progress etc",
          "hierarchy": "Control Pipe Tee",
          "module": "Control.Pipe.Tee",
          "name": "Tee",
          "package": "pipes-extra",
          "partial": "Tee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs like \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also passes a copy to the supplied consumer.\n\u003c/p\u003e",
          "module": "Control.Pipe.Tee",
          "name": "tee",
          "package": "pipes-extra",
          "signature": "Pipe a Void m r-\u003e Pipe a a m r",
          "type": "function"
        },
        "index": {
          "description": "Acts like idP but also passes copy to the supplied consumer",
          "hierarchy": "Control Pipe Tee",
          "module": "Control.Pipe.Tee",
          "name": "tee",
          "normalized": "Pipe a Void b c-\u003ePipe a a b c",
          "package": "pipes-extra",
          "signature": "Pipe a Void m r-\u003ePipe a a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#v:tee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs like \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also writes a copy to a file.\n\u003c/p\u003e",
          "module": "Control.Pipe.Tee",
          "name": "teeFile",
          "package": "pipes-extra",
          "signature": "(a -\u003e ByteString)-\u003e FilePath-\u003e Pipe a a m ()",
          "type": "function"
        },
        "index": {
          "description": "Acts like idP but also writes copy to file",
          "hierarchy": "Control Pipe Tee",
          "module": "Control.Pipe.Tee",
          "name": "teeFile",
          "normalized": "(a-\u003eByteString)-\u003eFilePath-\u003ePipe a a b()",
          "package": "pipes-extra",
          "partial": "File",
          "signature": "(a-\u003eByteString)-\u003eFilePath-\u003ePipe a a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#v:teeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs like, \u003ccode\u003e\u003ca\u003eidP\u003c/a\u003e\u003c/code\u003e, but also writes a copy to the specified log file.\n\u003c/p\u003e\u003cp\u003eThis function is equivalent to \u003ccode\u003eteeFile id\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Pipe.Tee",
          "name": "teeFileBS",
          "package": "pipes-extra",
          "signature": "FilePath-\u003e Pipe ByteString ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Acts like idP but also writes copy to the specified log file This function is equivalent to teeFile id",
          "hierarchy": "Control Pipe Tee",
          "module": "Control.Pipe.Tee",
          "name": "teeFileBS",
          "normalized": "FilePath-\u003ePipe ByteString ByteString a()",
          "package": "pipes-extra",
          "partial": "File BS",
          "signature": "FilePath-\u003ePipe ByteString ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Tee.html#v:teeFileBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "Zip",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Zip.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "Zip",
          "package": "pipes-extra",
          "partial": "Zip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "ProducerControl",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Zip.html#ProducerControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "ProducerControl",
          "package": "pipes-extra",
          "partial": "Producer Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#t:ProducerControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "ZipControl",
          "package": "pipes-extra",
          "source": "src/Control-Pipe-Zip.html#ZipControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "ZipControl",
          "package": "pipes-extra",
          "partial": "Zip Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#t:ZipControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "Done",
          "package": "pipes-extra",
          "signature": "Done r",
          "source": "src/Control-Pipe-Zip.html#ProducerControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "Done",
          "package": "pipes-extra",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "Error",
          "package": "pipes-extra",
          "signature": "Error SomeException",
          "source": "src/Control-Pipe-Zip.html#ProducerControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "Error",
          "package": "pipes-extra",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "LeftZ",
          "package": "pipes-extra",
          "signature": "LeftZ (ProducerControl r)",
          "source": "src/Control-Pipe-Zip.html#ZipControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "LeftZ",
          "package": "pipes-extra",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:LeftZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "RightZ",
          "package": "pipes-extra",
          "signature": "RightZ (ProducerControl r)",
          "source": "src/Control-Pipe-Zip.html#ZipControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "RightZ",
          "package": "pipes-extra",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:RightZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "controllable",
          "package": "pipes-extra",
          "signature": "Producer a m r -\u003e Pipe (Either () (ProducerControl r)) a m r",
          "source": "src/Control-Pipe-Zip.html#controllable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "controllable",
          "normalized": "Producer a b c-\u003ePipe(Either()(ProducerControl c))a b c",
          "package": "pipes-extra",
          "signature": "Producer a m r-\u003ePipe(Either()(ProducerControl r))a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:controllable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "controllable_",
          "package": "pipes-extra",
          "signature": "Producer a m r -\u003e Producer a m r",
          "source": "src/Control-Pipe-Zip.html#controllable_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "controllable_",
          "normalized": "Producer a b c-\u003eProducer a b c",
          "package": "pipes-extra",
          "signature": "Producer a m r-\u003eProducer a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:controllable_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "zip",
          "package": "pipes-extra",
          "signature": "Producer a m r -\u003e Producer b m r -\u003e Pipe (Either () (ZipControl r)) (Either a b) m r",
          "source": "src/Control-Pipe-Zip.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "zip",
          "normalized": "Producer a b c-\u003eProducer d b c-\u003ePipe(Either()(ZipControl c))(Either a d)b c",
          "package": "pipes-extra",
          "signature": "Producer a m r-\u003eProducer b m r-\u003ePipe(Either()(ZipControl r))(Either a b)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Pipe.Zip",
          "name": "zip_",
          "package": "pipes-extra",
          "signature": "Producer a m r -\u003e Producer b m r -\u003e Producer (Either a b) m r",
          "source": "src/Control-Pipe-Zip.html#zip_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Pipe Zip",
          "module": "Control.Pipe.Zip",
          "name": "zip_",
          "normalized": "Producer a b c-\u003eProducer d b c-\u003eProducer(Either a d)b c",
          "package": "pipes-extra",
          "signature": "Producer a m r-\u003eProducer b m r-\u003eProducer(Either a b)m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-extra/docs/Control-Pipe-Zip.html#v:zip_"
      }
    }
  ]
]