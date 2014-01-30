[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for interacting with bytes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "Functions for interacting with bytes",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "conduit",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:conduitFile",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of the input to a file, and also send it along the\n pipeline. Similar in concept to the Unix command \u003ccode\u003etee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "FilePath -\u003e Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#conduitFile",
        "fct-type": "function",
        "title": "conduitFile"
      },
      "index": {
        "description": "Stream the contents of the input to file and also send it along the pipeline Similar in concept to the Unix command tee Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "conduitFile",
        "normalized": "FilePath-\u003eConduit ByteString a ByteString",
        "package": "conduit",
        "partial": "File",
        "signature": "FilePath-\u003eConduit ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:conduitHandle",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of the input to a \u003ccode\u003eHandle\u003c/code\u003e, and also send it along the\n pipeline. Similar in concept to the Unix command \u003ccode\u003etee\u003c/code\u003e. Like \u003ccode\u003esourceHandle\u003c/code\u003e,\n does not close the handle on completion. Related to: \u003ccode\u003econduitFile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.9\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Handle -\u003e Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#conduitHandle",
        "fct-type": "function",
        "title": "conduitHandle"
      },
      "index": {
        "description": "Stream the contents of the input to Handle and also send it along the pipeline Similar in concept to the Unix command tee Like sourceHandle does not close the handle on completion Related to conduitFile Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "conduitHandle",
        "normalized": "Handle-\u003eConduit ByteString a ByteString",
        "package": "conduit",
        "partial": "Handle",
        "signature": "Handle-\u003eConduit ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eDrop up to the given number of bytes.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Binary.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Drop up to the given number of bytes Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "drop",
        "normalized": "Int-\u003eConsumer ByteString a()",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore all bytes while the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Binary.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Ignore all bytes while the predicate returns True Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "dropWhile",
        "normalized": "(Word-\u003eBool)-\u003eConsumer ByteString a()",
        "package": "conduit",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next byte from the stream, if available.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Consumer ByteString m (Maybe Word8)",
        "fct-source": "src/Data-Conduit-Binary.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Return the next byte from the stream if available Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "head",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that only up to the given number of bytes are consume by the inner\n sink. Note that this does \u003cem\u003enot\u003c/em\u003e ensure that all of those bytes are in fact\n consumed.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "Ensure that only up to the given number of bytes are consume by the inner sink Note that this does not ensure that all of those bytes are in fact consumed Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "isolate",
        "normalized": "Int-\u003eConduit ByteString a ByteString",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConduit ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the input bytes into lines. In other words, split on the LF byte\n (10), and strip it from the output.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Split the input bytes into lines In other words split on the LF byte and strip it from the output Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "lines",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a computation on each \u003ccode\u003eWord8\u003c/code\u003e in a stream.\n\u003c/p\u003e\u003cp\u003eSince 1.0.10\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "(Word8 -\u003e m ()) -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Binary.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Perform computation on each Word8 in stream Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "mapM_",
        "normalized": "(Word-\u003ea())-\u003eConsumer ByteString a()",
        "package": "conduit",
        "partial": "",
        "signature": "(Word-\u003em())-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sinkCacheLength",
      "description": {
        "fct-descr": "\u003cp\u003eStream the input data into a temp file and count the number of bytes\n present. When complete, return a new \u003ccode\u003eSource\u003c/code\u003e reading from the temp file\n together with the length of the input in bytes.\n\u003c/p\u003e\u003cp\u003eAll resources will be cleaned up automatically.\n\u003c/p\u003e\u003cp\u003eSince 1.0.5\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Sink ByteString m1 (Word64, Source m2 ByteString)",
        "fct-source": "src/Data-Conduit-Binary.html#sinkCacheLength",
        "fct-type": "function",
        "title": "sinkCacheLength"
      },
      "index": {
        "description": "Stream the input data into temp file and count the number of bytes present When complete return new Source reading from the temp file together with the length of the input in bytes All resources will be cleaned up automatically Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sinkCacheLength",
        "normalized": "Sink ByteString a(Word,Source a ByteString)",
        "package": "conduit",
        "partial": "Cache Length",
        "signature": "Sink ByteString m(Word,Source m ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sinkFile",
      "description": {
        "fct-descr": "\u003cp\u003eStream all incoming data to the given file.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "FilePath -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Binary.html#sinkFile",
        "fct-type": "function",
        "title": "sinkFile"
      },
      "index": {
        "description": "Stream all incoming data to the given file Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sinkFile",
        "normalized": "FilePath-\u003eConsumer ByteString a()",
        "package": "conduit",
        "partial": "File",
        "signature": "FilePath-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sinkHandle",
      "description": {
        "fct-descr": "\u003cp\u003eStream all incoming data to the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. Note that this function\n will \u003cem\u003enot\u003c/em\u003e automatically close the \u003ccode\u003eHandle\u003c/code\u003e when processing completes.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Handle -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Binary.html#sinkHandle",
        "fct-type": "function",
        "title": "sinkHandle"
      },
      "index": {
        "description": "Stream all incoming data to the given Handle Note that this function will not automatically close the Handle when processing completes Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sinkHandle",
        "normalized": "Handle-\u003eConsumer ByteString a()",
        "package": "conduit",
        "partial": "Handle",
        "signature": "Handle-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sinkIOHandle",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative to \u003ccode\u003e\u003ca\u003esinkHandle\u003c/a\u003e\u003c/code\u003e.\n Instead of taking a pre-opened \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, it takes an action that opens\n a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e (in write mode), so that it can open it only when needed\n and close it as soon as possible.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "IO Handle -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Binary.html#sinkIOHandle",
        "fct-type": "function",
        "title": "sinkIOHandle"
      },
      "index": {
        "description": "An alternative to sinkHandle Instead of taking pre-opened Handle it takes an action that opens Handle in write mode so that it can open it only when needed and close it as soon as possible Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sinkIOHandle",
        "normalized": "IO Handle-\u003eConsumer ByteString a()",
        "package": "conduit",
        "partial": "IOHandle",
        "signature": "IO Handle-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sinkLbs",
      "description": {
        "fct-descr": "\u003cp\u003eConsume a stream of input into a lazy bytestring. Note that no lazy I/O\n is performed, but rather all content is read into memory strictly.\n\u003c/p\u003e\u003cp\u003eSince 1.0.5\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Sink ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#sinkLbs",
        "fct-type": "function",
        "title": "sinkLbs"
      },
      "index": {
        "description": "Consume stream of input into lazy bytestring Note that no lazy is performed but rather all content is read into memory strictly Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sinkLbs",
        "normalized": "",
        "package": "conduit",
        "partial": "Lbs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceFile",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of a file as binary data.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "FilePath -\u003e Producer m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#sourceFile",
        "fct-type": "function",
        "title": "sourceFile"
      },
      "index": {
        "description": "Stream the contents of file as binary data Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceFile",
        "normalized": "FilePath-\u003eProducer a ByteString",
        "package": "conduit",
        "partial": "File",
        "signature": "FilePath-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceFileRange",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of a file as binary data, starting from a certain\n offset and only consuming up to a certain number of bytes.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "FilePath-\u003e Maybe Integer-\u003e Maybe Integer-\u003e Producer m ByteString",
        "fct-type": "function",
        "title": "sourceFileRange"
      },
      "index": {
        "description": "Stream the contents of file as binary data starting from certain offset and only consuming up to certain number of bytes Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceFileRange",
        "normalized": "FilePath-\u003eMaybe Integer-\u003eMaybe Integer-\u003eProducer a ByteString",
        "package": "conduit",
        "partial": "File Range",
        "signature": "FilePath-\u003eMaybe Integer-\u003eMaybe Integer-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceHandle",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e as binary data. Note that this\n function will \u003cem\u003enot\u003c/em\u003e automatically close the \u003ccode\u003eHandle\u003c/code\u003e when processing\n completes, since it did not acquire the \u003ccode\u003eHandle\u003c/code\u003e in the first place.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Handle -\u003e Producer m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#sourceHandle",
        "fct-type": "function",
        "title": "sourceHandle"
      },
      "index": {
        "description": "Stream the contents of Handle as binary data Note that this function will not automatically close the Handle when processing completes since it did not acquire the Handle in the first place Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceHandle",
        "normalized": "Handle-\u003eProducer a ByteString",
        "package": "conduit",
        "partial": "Handle",
        "signature": "Handle-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceHandleRange",
      "description": {
        "fct-descr": "\u003cp\u003eStream the contents of a handle as binary data, starting from a certain\n offset and only consuming up to a certain number of bytes.\n\u003c/p\u003e\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Handle-\u003e Maybe Integer-\u003e Maybe Integer-\u003e Producer m ByteString",
        "fct-type": "function",
        "title": "sourceHandleRange"
      },
      "index": {
        "description": "Stream the contents of handle as binary data starting from certain offset and only consuming up to certain number of bytes Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceHandleRange",
        "normalized": "Handle-\u003eMaybe Integer-\u003eMaybe Integer-\u003eProducer a ByteString",
        "package": "conduit",
        "partial": "Handle Range",
        "signature": "Handle-\u003eMaybe Integer-\u003eMaybe Integer-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceHandleUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003esourceHandle\u003c/code\u003e, but instead of allocating a new buffer for each\n incoming chunk of data, reuses the same buffer. Therefore, the \u003ccode\u003eByteString\u003c/code\u003es\n yielded by this function are not referentially transparent between two\n different \u003ccode\u003eyield\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThis function will be slightly more efficient than \u003ccode\u003esourceHandle\u003c/code\u003e by\n avoiding allocations and reducing garbage collections, but should only be\n used if you can guarantee that you do not reuse a \u003ccode\u003eByteString\u003c/code\u003e (or any slice\n thereof) between two calls to \u003ccode\u003eawait\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.12\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Handle -\u003e Source m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#sourceHandleUnsafe",
        "fct-type": "function",
        "title": "sourceHandleUnsafe"
      },
      "index": {
        "description": "Same as sourceHandle but instead of allocating new buffer for each incoming chunk of data reuses the same buffer Therefore the ByteString yielded by this function are not referentially transparent between two different yield This function will be slightly more efficient than sourceHandle by avoiding allocations and reducing garbage collections but should only be used if you can guarantee that you do not reuse ByteString or any slice thereof between two calls to await Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceHandleUnsafe",
        "normalized": "Handle-\u003eSource a ByteString",
        "package": "conduit",
        "partial": "Handle Unsafe",
        "signature": "Handle-\u003eSource m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceIOHandle",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternative to \u003ccode\u003e\u003ca\u003esourceHandle\u003c/a\u003e\u003c/code\u003e.\n Instead of taking a pre-opened \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, it takes an action that opens\n a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e (in read mode), so that it can open it only when needed\n and closed it as soon as possible.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "IO Handle -\u003e Producer m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#sourceIOHandle",
        "fct-type": "function",
        "title": "sourceIOHandle"
      },
      "index": {
        "description": "An alternative to sourceHandle Instead of taking pre-opened Handle it takes an action that opens Handle in read mode so that it can open it only when needed and closed it as soon as possible Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceIOHandle",
        "normalized": "IO Handle-\u003eProducer a ByteString",
        "package": "conduit",
        "partial": "IOHandle",
        "signature": "IO Handle-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:sourceLbs",
      "description": {
        "fct-descr": "\u003cp\u003eStream the chunks from a lazy bytestring.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "ByteString -\u003e Producer m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#sourceLbs",
        "fct-type": "function",
        "title": "sourceLbs"
      },
      "index": {
        "description": "Stream the chunks from lazy bytestring Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "sourceLbs",
        "normalized": "ByteString-\u003eProducer a ByteString",
        "package": "conduit",
        "partial": "Lbs",
        "signature": "ByteString-\u003eProducer m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eTake the given number of bytes, if available.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Consumer ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Take the given number of bytes if available Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "take",
        "normalized": "Int-\u003eConsumer ByteString a ByteString",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConsumer ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Binary.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all bytes while the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Binary",
        "fct-package": "conduit",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Conduit ByteString m ByteString",
        "fct-source": "src/Data-Conduit-Binary.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Return all bytes while the predicate returns True Since",
        "hierarchy": "Data Conduit Binary",
        "module": "Data.Conduit.Binary",
        "name": "takeWhile",
        "normalized": "(Word-\u003eBool)-\u003eConduit ByteString a ByteString",
        "package": "conduit",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003eConduit ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "conduit",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:Conduit",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes a stream of input values and produces a stream of output values,\n without producing a final result.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Conduit",
        "fct-type": "type",
        "title": "Conduit"
      },
      "index": {
        "description": "Consumes stream of input values and produces stream of output values without producing final result Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Conduit",
        "normalized": "",
        "package": "conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:ConduitM",
      "description": {
        "fct-descr": "\u003cp\u003eCore datatype of the conduit package. This type represents a general\n component which can consume a stream of input values \u003ccode\u003ei\u003c/code\u003e, produce a stream\n of output values \u003ccode\u003eo\u003c/code\u003e, perform actions in the \u003ccode\u003em\u003c/code\u003e monad, and produce a final\n result \u003ccode\u003er\u003c/code\u003e. The type synonyms provided here are simply wrappers around this\n type.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Conduit-Internal.html#ConduitM",
        "fct-type": "newtype",
        "title": "ConduitM"
      },
      "index": {
        "description": "Core datatype of the conduit package This type represents general component which can consume stream of input values produce stream of output values perform actions in the monad and produce final result The type synonyms provided here are simply wrappers around this type Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "ConduitM",
        "normalized": "",
        "package": "conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:Consumer",
      "description": {
        "fct-descr": "\u003cp\u003eA component which consumes a stream of input values and produces a final\n result, regardless of the output stream. A \u003ccode\u003eConsumer\u003c/code\u003e is a generalization of\n a \u003ccode\u003eSink\u003c/code\u003e, and can be used as either a \u003ccode\u003eSink\u003c/code\u003e or a \u003ccode\u003eConduit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Consumer",
        "fct-type": "type",
        "title": "Consumer"
      },
      "index": {
        "description": "component which consumes stream of input values and produces final result regardless of the output stream Consumer is generalization of Sink and can be used as either Sink or Conduit Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Consumer",
        "normalized": "",
        "package": "conduit",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:Pipe",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying datatype for all the types in this package.  In has six\n type parameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003el\u003c/em\u003e is the type of values that may be left over from this \u003ccode\u003ePipe\u003c/code\u003e. A \u003ccode\u003ePipe\u003c/code\u003e\n with no leftovers would use \u003ccode\u003eVoid\u003c/code\u003e here, and one with leftovers would use\n the same type as the \u003cem\u003ei\u003c/em\u003e parameter. Leftovers are automatically provided to\n the next \u003ccode\u003ePipe\u003c/code\u003e in the monadic chain.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ei\u003c/em\u003e is the type of values for this \u003ccode\u003ePipe\u003c/code\u003e's input stream.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eo\u003c/em\u003e is the type of values for this \u003ccode\u003ePipe\u003c/code\u003e's output stream.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eu\u003c/em\u003e is the result type from the upstream \u003ccode\u003ePipe\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003em\u003c/em\u003e is the underlying monad.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003er\u003c/em\u003e is the result type.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA basic intuition is that every \u003ccode\u003ePipe\u003c/code\u003e produces a stream of output values\n (\u003cem\u003eo\u003c/em\u003e), and eventually indicates that this stream is terminated by sending a\n result (\u003cem\u003er\u003c/em\u003e). On the receiving end of a \u003ccode\u003ePipe\u003c/code\u003e, these become the \u003cem\u003ei\u003c/em\u003e and \u003cem\u003eu\u003c/em\u003e\n parameters.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Internal.html#Pipe",
        "fct-type": "data",
        "title": "Pipe"
      },
      "index": {
        "description": "The underlying datatype for all the types in this package In has six type parameters is the type of values that may be left over from this Pipe Pipe with no leftovers would use Void here and one with leftovers would use the same type as the parameter Leftovers are automatically provided to the next Pipe in the monadic chain is the type of values for this Pipe input stream is the type of values for this Pipe output stream is the result type from the upstream Pipe is the underlying monad is the result type basic intuition is that every Pipe produces stream of output values and eventually indicates that this stream is terminated by sending result On the receiving end of Pipe these become the and parameters Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Pipe",
        "normalized": "",
        "package": "conduit",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:Producer",
      "description": {
        "fct-descr": "\u003cp\u003eA component which produces a stream of output values, regardless of the\n input stream. A \u003ccode\u003eProducer\u003c/code\u003e is a generalization of a \u003ccode\u003eSource\u003c/code\u003e, and can be\n used as either a \u003ccode\u003eSource\u003c/code\u003e or a \u003ccode\u003eConduit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Producer",
        "fct-type": "type",
        "title": "Producer"
      },
      "index": {
        "description": "component which produces stream of output values regardless of the input stream Producer is generalization of Source and can be used as either Source or Conduit Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Producer",
        "normalized": "",
        "package": "conduit",
        "partial": "Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:ResumableSource",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eSource\u003c/code\u003e which has been started, but has not yet completed.\n\u003c/p\u003e\u003cp\u003eThis type contains both the current state of the \u003ccode\u003eSource\u003c/code\u003e, and the finalizer\n to be run to close it.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Internal.html#ResumableSource",
        "fct-type": "data",
        "title": "ResumableSource"
      },
      "index": {
        "description": "Source which has been started but has not yet completed This type contains both the current state of the Source and the finalizer to be run to close it Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "ResumableSource",
        "normalized": "",
        "package": "conduit",
        "partial": "Resumable Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes a stream of input values and produces a final result, without\n producing any output.\n\u003c/p\u003e\u003cpre\u003e type Sink i m r = ConduitM i Void m r\n\u003c/pre\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Sink",
        "fct-type": "type",
        "title": "Sink"
      },
      "index": {
        "description": "Consumes stream of input values and produces final result without producing any output type Sink ConduitM Void Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Sink",
        "normalized": "",
        "package": "conduit",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a stream of output values, without consuming any input or\n producing a final result.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Source",
        "fct-type": "type",
        "title": "Source"
      },
      "index": {
        "description": "Provides stream of output values without consuming any input or producing final result Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Source",
        "normalized": "",
        "package": "conduit",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:-60--43--60-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003e\u003e+\u003e\u003c/a\u003e\u003c/code\u003e, but reverse the order of the arguments.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe Void b c r1 m r2 -\u003e Pipe l a b r0 m r1 -\u003e Pipe l a c r0 m r2",
        "fct-source": "src/Data-Conduit-Internal.html#%3C%2B%3C",
        "fct-type": "function",
        "title": "(\u003c+\u003c)"
      },
      "index": {
        "description": "Same as but reverse the order of the arguments Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "(\u003c+\u003c) \u003c+\u003c",
        "normalized": "Pipe Void a b c d c-\u003ePipe e f a c d c-\u003ePipe e f b c d c",
        "package": "conduit",
        "partial": "",
        "signature": "Pipe Void b c r m r-\u003ePipe l a b r m r-\u003ePipe l a c r m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:-62--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eFuse together two \u003ccode\u003ePipe\u003c/code\u003es, connecting the output from the left to the\n input of the right.\n\u003c/p\u003e\u003cp\u003eNotice that the \u003cem\u003eleftover\u003c/em\u003e parameter for the \u003ccode\u003ePipe\u003c/code\u003es must be \u003ccode\u003eVoid\u003c/code\u003e. This\n ensures that there is no accidental data loss of leftovers during fusion. If\n you have a \u003ccode\u003ePipe\u003c/code\u003e with leftovers, you must first call \u003ccode\u003e\u003ca\u003einjectLeftovers\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l a b r0 m r1 -\u003e Pipe Void b c r1 m r2 -\u003e Pipe l a c r0 m r2",
        "fct-source": "src/Data-Conduit-Internal.html#%3E%2B%3E",
        "fct-type": "function",
        "title": "(\u003e+\u003e)"
      },
      "index": {
        "description": "Fuse together two Pipe connecting the output from the left to the input of the right Notice that the leftover parameter for the Pipe must be Void This ensures that there is no accidental data loss of leftovers during fusion If you have Pipe with leftovers you must first call injectLeftovers Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "(\u003e+\u003e) \u003e+\u003e",
        "normalized": "Pipe a b c d e d-\u003ePipe Void c f d e d-\u003ePipe a b f d e d",
        "package": "conduit",
        "partial": "",
        "signature": "Pipe l a b r m r-\u003ePipe Void b c r m r-\u003ePipe l a c r m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:ConduitM",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "ConduitM",
        "fct-source": "src/Data-Conduit-Internal.html#ConduitM",
        "fct-type": "function",
        "title": "ConduitM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "ConduitM",
        "normalized": "",
        "package": "conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003eProcessing with this \u003ccode\u003ePipe\u003c/code\u003e is complete, providing the final result.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Done r",
        "fct-source": "src/Data-Conduit-Internal.html#Pipe",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "Processing with this Pipe is complete providing the final result",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Done",
        "normalized": "",
        "package": "conduit",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:HaveOutput",
      "description": {
        "fct-descr": "\u003cp\u003eProvide new output to be sent downstream. This constructor has three\n fields: the next \u003ccode\u003ePipe\u003c/code\u003e to be used, a finalization function, and the\n output value.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "HaveOutput (Pipe l i o u m r) (m ()) o",
        "fct-source": "src/Data-Conduit-Internal.html#Pipe",
        "fct-type": "function",
        "title": "HaveOutput"
      },
      "index": {
        "description": "Provide new output to be sent downstream This constructor has three fields the next Pipe to be used finalization function and the output value",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "HaveOutput",
        "normalized": "HaveOutput(Pipe a b c d e f)(e())c",
        "package": "conduit",
        "partial": "Have Output",
        "signature": "HaveOutput(Pipe l i o u m r)(m())o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:Leftover",
      "description": {
        "fct-descr": "\u003cp\u003eReturn leftover input, which should be provided to future operations.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Leftover (Pipe l i o u m r) l",
        "fct-source": "src/Data-Conduit-Internal.html#Pipe",
        "fct-type": "function",
        "title": "Leftover"
      },
      "index": {
        "description": "Return leftover input which should be provided to future operations",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "Leftover",
        "normalized": "",
        "package": "conduit",
        "partial": "Leftover",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:NeedInput",
      "description": {
        "fct-descr": "\u003cp\u003eRequest more input from upstream. The first field takes a new input\n value and provides a new \u003ccode\u003ePipe\u003c/code\u003e. The second takes an upstream result\n value, which indicates that upstream is producing no more results.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "NeedInput (i -\u003e Pipe l i o u m r) (u -\u003e Pipe l i o u m r)",
        "fct-source": "src/Data-Conduit-Internal.html#Pipe",
        "fct-type": "function",
        "title": "NeedInput"
      },
      "index": {
        "description": "Request more input from upstream The first field takes new input value and provides new Pipe The second takes an upstream result value which indicates that upstream is producing no more results",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "NeedInput",
        "normalized": "NeedInput(a-\u003ePipe b a c d e f)(d-\u003ePipe b a c d e f)",
        "package": "conduit",
        "partial": "Need Input",
        "signature": "NeedInput(i-\u003ePipe l i o u m r)(u-\u003ePipe l i o u m r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:PipeM",
      "description": {
        "fct-descr": "\u003cp\u003eRequire running of a monadic action to get the next \u003ccode\u003ePipe\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "PipeM (m (Pipe l i o u m r))",
        "fct-source": "src/Data-Conduit-Internal.html#Pipe",
        "fct-type": "function",
        "title": "PipeM"
      },
      "index": {
        "description": "Require running of monadic action to get the next Pipe",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "PipeM",
        "normalized": "",
        "package": "conduit",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:ResumableSource",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "ResumableSource (Source m o) (m ())",
        "fct-source": "src/Data-Conduit-Internal.html#ResumableSource",
        "fct-type": "function",
        "title": "ResumableSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "ResumableSource",
        "normalized": "ResumableSource(Source a b)(a())",
        "package": "conduit",
        "partial": "Resumable Source",
        "signature": "ResumableSource(Source m o)(m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:addCleanup",
      "description": {
        "fct-descr": "\u003cp\u003eAdd some code to be run when the given \u003ccode\u003ePipe\u003c/code\u003e cleans up.\n\u003c/p\u003e\u003cp\u003eSince 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(Bool -\u003e m ())-\u003e Pipe l i o u m r-\u003e Pipe l i o u m r",
        "fct-type": "function",
        "title": "addCleanup"
      },
      "index": {
        "description": "Add some code to be run when the given Pipe cleans up Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "addCleanup",
        "normalized": "(Bool-\u003ea())-\u003ePipe b c d e a f-\u003ePipe b c d e a f",
        "package": "conduit",
        "partial": "Cleanup",
        "signature": "(Bool-\u003em())-\u003ePipe l i o u m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:await",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a single input value from upstream.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l i o u m (Maybe i)",
        "fct-source": "src/Data-Conduit-Internal.html#await",
        "fct-type": "function",
        "title": "await"
      },
      "index": {
        "description": "Wait for single input value from upstream Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "await",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:awaitE",
      "description": {
        "fct-descr": "\u003cp\u003eThis is similar to \u003ccode\u003eawait\u003c/code\u003e, but will return the upstream result value as\n \u003ccode\u003eLeft\u003c/code\u003e if available.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l i o u m (Either u i)",
        "fct-source": "src/Data-Conduit-Internal.html#awaitE",
        "fct-type": "function",
        "title": "awaitE"
      },
      "index": {
        "description": "This is similar to await but will return the upstream result value as Left if available Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "awaitE",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:awaitForever",
      "description": {
        "fct-descr": "\u003cp\u003eWait for input forever, calling the given inner \u003ccode\u003ePipe\u003c/code\u003e for each piece of\n new input. Returns the upstream result type.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(i -\u003e Pipe l i o r m r') -\u003e Pipe l i o r m r",
        "fct-source": "src/Data-Conduit-Internal.html#awaitForever",
        "fct-type": "function",
        "title": "awaitForever"
      },
      "index": {
        "description": "Wait for input forever calling the given inner Pipe for each piece of new input Returns the upstream result type Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "awaitForever",
        "normalized": "(a-\u003ePipe b a c d e f)-\u003ePipe b a c d e d",
        "package": "conduit",
        "partial": "Forever",
        "signature": "(i-\u003ePipe l i o r m r')-\u003ePipe l i o r m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:bracketP",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some allocation and run an inner \u003ccode\u003ePipe\u003c/code\u003e. Two guarantees are given\n about resource finalization:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e It will be \u003cem\u003eprompt\u003c/em\u003e. The finalization will be run as early as possible.\n\u003c/li\u003e\u003cli\u003e It is exception safe. Due to usage of \u003ccode\u003eresourcet\u003c/code\u003e, the finalization will\n    be run in the event of any exceptions.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "IO a -\u003e (a -\u003e IO ()) -\u003e (a -\u003e Pipe l i o u m r) -\u003e Pipe l i o u m r",
        "fct-source": "src/Data-Conduit-Internal.html#bracketP",
        "fct-type": "function",
        "title": "bracketP"
      },
      "index": {
        "description": "Perform some allocation and run an inner Pipe Two guarantees are given about resource finalization It will be prompt The finalization will be run as early as possible It is exception safe Due to usage of resourcet the finalization will be run in the event of any exceptions Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "bracketP",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003ePipe b c d e f g)-\u003ePipe b c d e f g",
        "package": "conduit",
        "partial": "",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003ePipe l i o u m r)-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:catchC",
      "description": {
        "fct-descr": "\u003cp\u003eCatch all exceptions thrown by the current component of the pipeline.\n\u003c/p\u003e\u003cp\u003eNote: this will \u003cem\u003enot\u003c/em\u003e catch exceptions thrown by other components! For\n example, if an exception is thrown in a \u003ccode\u003eSource\u003c/code\u003e feeding to a \u003ccode\u003eSink\u003c/code\u003e, and\n the \u003ccode\u003eSink\u003c/code\u003e uses \u003ccode\u003ecatchC\u003c/code\u003e, the exception will \u003cem\u003enot\u003c/em\u003e be caught.\n\u003c/p\u003e\u003cp\u003eDue to this behavior (as well as lack of async exception handling), you\n should not try to implement combinators such as \u003ccode\u003eonException\u003c/code\u003e in terms of this\n primitive function.\n\u003c/p\u003e\u003cp\u003eNote also that the exception handling will \u003cem\u003enot\u003c/em\u003e be applied to any\n finalizers generated by this conduit.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o m r -\u003e (e -\u003e ConduitM i o m r) -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit-Internal.html#catchC",
        "fct-type": "function",
        "title": "catchC"
      },
      "index": {
        "description": "Catch all exceptions thrown by the current component of the pipeline Note this will not catch exceptions thrown by other components For example if an exception is thrown in Source feeding to Sink and the Sink uses catchC the exception will not be caught Due to this behavior as well as lack of async exception handling you should not try to implement combinators such as onException in terms of this primitive function Note also that the exception handling will not be applied to any finalizers generated by this conduit Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "catchC",
        "normalized": "ConduitM a b c d-\u003e(e-\u003eConduitM a b c d)-\u003eConduitM a b c d",
        "package": "conduit",
        "partial": "",
        "signature": "ConduitM i o m r-\u003e(e-\u003eConduitM i o m r)-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:catchP",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecatchC\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l i o u m r -\u003e (e -\u003e Pipe l i o u m r) -\u003e Pipe l i o u m r",
        "fct-source": "src/Data-Conduit-Internal.html#catchP",
        "fct-type": "function",
        "title": "catchP"
      },
      "index": {
        "description": "See catchC for more details Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "catchP",
        "normalized": "Pipe a b c d e f-\u003e(g-\u003ePipe a b c d e f)-\u003ePipe a b c d e f",
        "package": "conduit",
        "partial": "",
        "signature": "Pipe l i o u m r-\u003e(e-\u003ePipe l i o u m r)-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:conduitToPipe",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Conduit i m o -\u003e Pipe l i o u m ()",
        "fct-source": "src/Data-Conduit-Internal.html#conduitToPipe",
        "fct-type": "function",
        "title": "conduitToPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "conduitToPipe",
        "normalized": "Conduit a b c-\u003ePipe d a c e b()",
        "package": "conduit",
        "partial": "To Pipe",
        "signature": "Conduit i m o-\u003ePipe l i o u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:connectResume",
      "description": {
        "fct-descr": "\u003cp\u003eConnect a \u003ccode\u003eSource\u003c/code\u003e to a \u003ccode\u003eSink\u003c/code\u003e until the latter closes. Returns both the\n most recent state of the \u003ccode\u003eSource\u003c/code\u003e and the result of the \u003ccode\u003eSink\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe use a \u003ccode\u003eResumableSource\u003c/code\u003e to keep track of the most recent finalizer\n provided by the \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "ResumableSource m o -\u003e Sink o m r -\u003e m (ResumableSource m o, r)",
        "fct-source": "src/Data-Conduit-Internal.html#connectResume",
        "fct-type": "function",
        "title": "connectResume"
      },
      "index": {
        "description": "Connect Source to Sink until the latter closes Returns both the most recent state of the Source and the result of the Sink We use ResumableSource to keep track of the most recent finalizer provided by the Source Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "connectResume",
        "normalized": "ResumableSource a b-\u003eSink b a c-\u003ea(ResumableSource a b,c)",
        "package": "conduit",
        "partial": "Resume",
        "signature": "ResumableSource m o-\u003eSink o m r-\u003em(ResumableSource m o,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:enumFromTo",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "o -\u003e o -\u003e Pipe l i o u m ()",
        "fct-source": "src/Data-Conduit-Internal.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003ePipe b c a d e()",
        "package": "conduit",
        "partial": "From To",
        "signature": "o-\u003eo-\u003ePipe l i o u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:handleC",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003eflip catchC\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(e -\u003e ConduitM i o m r) -\u003e ConduitM i o m r -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit-Internal.html#handleC",
        "fct-type": "function",
        "title": "handleC"
      },
      "index": {
        "description": "The same as flip catchC Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "handleC",
        "normalized": "(a-\u003eConduitM b c d e)-\u003eConduitM b c d e-\u003eConduitM b c d e",
        "package": "conduit",
        "partial": "",
        "signature": "(e-\u003eConduitM i o m r)-\u003eConduitM i o m r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:handleP",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003eflip catchP\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(e -\u003e Pipe l i o u m r) -\u003e Pipe l i o u m r -\u003e Pipe l i o u m r",
        "fct-source": "src/Data-Conduit-Internal.html#handleP",
        "fct-type": "function",
        "title": "handleP"
      },
      "index": {
        "description": "The same as flip catchP Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "handleP",
        "normalized": "(a-\u003ePipe b c d e f g)-\u003ePipe b c d e f g-\u003ePipe b c d e f g",
        "package": "conduit",
        "partial": "",
        "signature": "(e-\u003ePipe l i o u m r)-\u003ePipe l i o u m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:idP",
      "description": {
        "fct-descr": "\u003cp\u003eThe identity \u003ccode\u003ePipe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l a a r m r",
        "fct-source": "src/Data-Conduit-Internal.html#idP",
        "fct-type": "function",
        "title": "idP"
      },
      "index": {
        "description": "The identity Pipe Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "idP",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:injectLeftovers",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a \u003ccode\u003ePipe\u003c/code\u003e that provides leftovers to one which does not,\n allowing it to be composed.\n\u003c/p\u003e\u003cp\u003eThis function will provide any leftover values within this \u003ccode\u003ePipe\u003c/code\u003e to any\n calls to \u003ccode\u003eawait\u003c/code\u003e. If there are more leftover values than are demanded, the\n remainder are discarded.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe i i o u m r -\u003e Pipe l i o u m r",
        "fct-source": "src/Data-Conduit-Internal.html#injectLeftovers",
        "fct-type": "function",
        "title": "injectLeftovers"
      },
      "index": {
        "description": "Transforms Pipe that provides leftovers to one which does not allowing it to be composed This function will provide any leftover values within this Pipe to any calls to await If there are more leftover values than are demanded the remainder are discarded Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "injectLeftovers",
        "normalized": "Pipe a a b c d e-\u003ePipe f a b c d e",
        "package": "conduit",
        "partial": "Leftovers",
        "signature": "Pipe i i o u m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:leftover",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a single piece of leftover input to be consumed by the next pipe\n in the current monadic binding.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: it is highly encouraged to only return leftover values from input\n already consumed from upstream.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "l -\u003e Pipe l i o u m ()",
        "fct-source": "src/Data-Conduit-Internal.html#leftover",
        "fct-type": "function",
        "title": "leftover"
      },
      "index": {
        "description": "Provide single piece of leftover input to be consumed by the next pipe in the current monadic binding Note it is highly encouraged to only return leftover values from input already consumed from upstream Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "leftover",
        "normalized": "a-\u003ePipe a b c d e()",
        "package": "conduit",
        "partial": "",
        "signature": "l-\u003ePipe l i o u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:mapInput",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all the input values of a \u003ccode\u003ePipe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(i1 -\u003e i2)-\u003e (l2 -\u003e Maybe l1)-\u003e Pipe l2 i2 o u m r-\u003e Pipe l1 i1 o u m r",
        "fct-type": "function",
        "title": "mapInput"
      },
      "index": {
        "description": "Apply function to all the input values of Pipe Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "mapInput",
        "normalized": "(a-\u003ea)-\u003e(b-\u003eMaybe b)-\u003ePipe b a c d e f-\u003ePipe b a c d e f",
        "package": "conduit",
        "partial": "Input",
        "signature": "(i-\u003ei)-\u003e(l-\u003eMaybe l)-\u003ePipe l i o u m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:mapOutput",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all the output values of a \u003ccode\u003ePipe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis mimics the behavior of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e in pre-0.4\n days.\n\u003c/p\u003e\u003cp\u003eSince 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(o1 -\u003e o2) -\u003e Pipe l i o1 u m r -\u003e Pipe l i o2 u m r",
        "fct-source": "src/Data-Conduit-Internal.html#mapOutput",
        "fct-type": "function",
        "title": "mapOutput"
      },
      "index": {
        "description": "Apply function to all the output values of Pipe This mimics the behavior of fmap for Source and Conduit in pre-0.4 days Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "mapOutput",
        "normalized": "(a-\u003ea)-\u003ePipe b c a d e f-\u003ePipe b c a d e f",
        "package": "conduit",
        "partial": "Output",
        "signature": "(o-\u003eo)-\u003ePipe l i o u m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:mapOutputMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emapOutput\u003c/a\u003e\u003c/code\u003e, but use a function that returns \u003ccode\u003eMaybe\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(o1 -\u003e Maybe o2) -\u003e Pipe l i o1 u m r -\u003e Pipe l i o2 u m r",
        "fct-source": "src/Data-Conduit-Internal.html#mapOutputMaybe",
        "fct-type": "function",
        "title": "mapOutputMaybe"
      },
      "index": {
        "description": "Same as mapOutput but use function that returns Maybe values Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "mapOutputMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003ePipe b c a d e f-\u003ePipe b c a d e f",
        "package": "conduit",
        "partial": "Output Maybe",
        "signature": "(o-\u003eMaybe o)-\u003ePipe l i o u m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:pipe",
      "description": {
        "fct-descr": "\u003cp\u003eCompose a left and right pipe together into a complete pipe. The left pipe\n will be automatically closed when the right pipe finishes.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l a b r0 m r1 -\u003e Pipe Void b c r1 m r2 -\u003e Pipe l a c r0 m r2",
        "fct-source": "src/Data-Conduit-Internal.html#pipe",
        "fct-type": "function",
        "title": "pipe"
      },
      "index": {
        "description": "Compose left and right pipe together into complete pipe The left pipe will be automatically closed when the right pipe finishes Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "pipe",
        "normalized": "Pipe a b c d e d-\u003ePipe Void c f d e d-\u003ePipe a b f d e d",
        "package": "conduit",
        "partial": "",
        "signature": "Pipe l a b r m r-\u003ePipe Void b c r m r-\u003ePipe l a c r m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:pipeL",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epipe\u003c/a\u003e\u003c/code\u003e, but automatically applies \u003ccode\u003e\u003ca\u003einjectLeftovers\u003c/a\u003e\u003c/code\u003e to the right \u003ccode\u003ePipe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l a b r0 m r1 -\u003e Pipe b b c r1 m r2 -\u003e Pipe l a c r0 m r2",
        "fct-source": "src/Data-Conduit-Internal.html#pipeL",
        "fct-type": "function",
        "title": "pipeL"
      },
      "index": {
        "description": "Same as pipe but automatically applies injectLeftovers to the right Pipe Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "pipeL",
        "normalized": "Pipe a b c d e d-\u003ePipe c c f d e d-\u003ePipe a b f d e d",
        "package": "conduit",
        "partial": "",
        "signature": "Pipe l a b r m r-\u003ePipe b b c r m r-\u003ePipe l a c r m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:runPipe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a pipeline until processing completes.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe Void () Void () m r -\u003e m r",
        "fct-source": "src/Data-Conduit-Internal.html#runPipe",
        "fct-type": "function",
        "title": "runPipe"
      },
      "index": {
        "description": "Run pipeline until processing completes Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "runPipe",
        "normalized": "Pipe Void()Void()a b-\u003ea b",
        "package": "conduit",
        "partial": "Pipe",
        "signature": "Pipe Void()Void()m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:sinkToPipe",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Sink i m r -\u003e Pipe l i o u m r",
        "fct-source": "src/Data-Conduit-Internal.html#sinkToPipe",
        "fct-type": "function",
        "title": "sinkToPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "sinkToPipe",
        "normalized": "Sink a b c-\u003ePipe d a e f b c",
        "package": "conduit",
        "partial": "To Pipe",
        "signature": "Sink i m r-\u003ePipe l i o u m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:sourceList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list into a source.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "[a] -\u003e Pipe l i a u m ()",
        "fct-source": "src/Data-Conduit-Internal.html#sourceList",
        "fct-type": "function",
        "title": "sourceList"
      },
      "index": {
        "description": "Convert list into source Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "sourceList",
        "normalized": "[a]-\u003ePipe b c a d e()",
        "package": "conduit",
        "partial": "List",
        "signature": "[a]-\u003ePipe l i a u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:sourceToPipe",
      "description": {
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Source m o -\u003e Pipe l i o u m ()",
        "fct-source": "src/Data-Conduit-Internal.html#sourceToPipe",
        "fct-type": "function",
        "title": "sourceToPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "sourceToPipe",
        "normalized": "Source a b-\u003ePipe c d b e a()",
        "package": "conduit",
        "partial": "To Pipe",
        "signature": "Source m o-\u003ePipe l i o u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:toConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralize a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Sink a m b -\u003e Consumer a m b",
        "fct-source": "src/Data-Conduit-Internal.html#toConsumer",
        "fct-type": "function",
        "title": "toConsumer"
      },
      "index": {
        "description": "Generalize Sink to Consumer Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "toConsumer",
        "normalized": "Sink a b c-\u003eConsumer a b c",
        "package": "conduit",
        "partial": "Consumer",
        "signature": "Sink a m b-\u003eConsumer a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:toProducer",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralize a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-Internal.html#toProducer",
        "fct-type": "function",
        "title": "toProducer"
      },
      "index": {
        "description": "Generalize Source to Producer Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "toProducer",
        "normalized": "Source a b-\u003eProducer a b",
        "package": "conduit",
        "partial": "Producer",
        "signature": "Source m a-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:transPipe",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the monad that a \u003ccode\u003ePipe\u003c/code\u003e lives in.\n\u003c/p\u003e\u003cp\u003eNote that the monad transforming function will be run multiple times,\n resulting in unintuitive behavior in some cases. For a fuller treatment,\n please see:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://github.com/snoyberg/conduit/wiki/Dealing-with-monad-transformers\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis function is just a synonym for \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e Pipe l i o u m r -\u003e Pipe l i o u n r",
        "fct-source": "src/Data-Conduit-Internal.html#transPipe",
        "fct-type": "function",
        "title": "transPipe"
      },
      "index": {
        "description": "Transform the monad that Pipe lives in Note that the monad transforming function will be run multiple times resulting in unintuitive behavior in some cases For fuller treatment please see https github.com snoyberg conduit wiki Dealing-with-monad-transformers This function is just synonym for hoist Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "transPipe",
        "normalized": "(a b c d-\u003ee d)-\u003ePipe f g h i c j-\u003ePipe f g h i e j",
        "package": "conduit",
        "partial": "Pipe",
        "signature": "(forall a. m a-\u003en a)-\u003ePipe l i o u m r-\u003ePipe l i o u n r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:tryC",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003etry\u003c/code\u003e for use within a pipeline. See the comments in \u003ccode\u003ecatchC\u003c/code\u003e\n for more details.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o m r -\u003e ConduitM i o m (Either e r)",
        "fct-source": "src/Data-Conduit-Internal.html#tryC",
        "fct-type": "function",
        "title": "tryC"
      },
      "index": {
        "description": "version of try for use within pipeline See the comments in catchC for more details Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "tryC",
        "normalized": "ConduitM a b c d-\u003eConduitM a b c(Either e d)",
        "package": "conduit",
        "partial": "",
        "signature": "ConduitM i o m r-\u003eConduitM i o m(Either e r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:tryP",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etryC\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l i o u m r -\u003e Pipe l i o u m (Either e r)",
        "fct-source": "src/Data-Conduit-Internal.html#tryP",
        "fct-type": "function",
        "title": "tryP"
      },
      "index": {
        "description": "See tryC for more details Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "tryP",
        "normalized": "Pipe a b c d e f-\u003ePipe a b c d e(Either g f)",
        "package": "conduit",
        "partial": "",
        "signature": "Pipe l i o u m r-\u003ePipe l i o u m(Either e r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:unConduitM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe i i o () m r",
        "fct-source": "src/Data-Conduit-Internal.html#ConduitM",
        "fct-type": "function",
        "title": "unConduitM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "unConduitM",
        "normalized": "Pipe a a b()c d",
        "package": "conduit",
        "partial": "Conduit",
        "signature": "Pipe i i o()m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:unwrapResumable",
      "description": {
        "fct-descr": "\u003cp\u003eUnwraps a \u003ccode\u003eResumableSource\u003c/code\u003e into a \u003ccode\u003eSource\u003c/code\u003e and a finalizer.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eResumableSource\u003c/code\u003e represents a \u003ccode\u003eSource\u003c/code\u003e which has already been run, and\n therefore has a finalizer registered. As a result, if we want to turn it\n into a regular \u003ccode\u003eSource\u003c/code\u003e, we need to ensure that the finalizer will be run\n appropriately. By appropriately, I mean:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If a new finalizer is registered, the old one should not be called.\n\u003c/li\u003e\u003cli\u003e If the old one is called, it should not be called again.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function returns both a \u003ccode\u003eSource\u003c/code\u003e and a finalizer which ensures that the\n above two conditions hold. Once you call that finalizer, the \u003ccode\u003eSource\u003c/code\u003e is\n invalidated and cannot be used.\n\u003c/p\u003e\u003cp\u003eSince 0.5.2\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "ResumableSource m o -\u003e m (Source m o, m ())",
        "fct-source": "src/Data-Conduit-Internal.html#unwrapResumable",
        "fct-type": "function",
        "title": "unwrapResumable"
      },
      "index": {
        "description": "Unwraps ResumableSource into Source and finalizer ResumableSource represents Source which has already been run and therefore has finalizer registered As result if we want to turn it into regular Source we need to ensure that the finalizer will be run appropriately By appropriately mean If new finalizer is registered the old one should not be called If the old one is called it should not be called again This function returns both Source and finalizer which ensures that the above two conditions hold Once you call that finalizer the Source is invalidated and cannot be used Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "unwrapResumable",
        "normalized": "ResumableSource a b-\u003ea(Source a b,a())",
        "package": "conduit",
        "partial": "Resumable",
        "signature": "ResumableSource m o-\u003em(Source m o,m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:withUpstream",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a tuple of the upstream and downstream results. Note that this\n will force consumption of the entire input stream.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "Pipe l i o u m r -\u003e Pipe l i o u m (u, r)",
        "fct-source": "src/Data-Conduit-Internal.html#withUpstream",
        "fct-type": "function",
        "title": "withUpstream"
      },
      "index": {
        "description": "Returns tuple of the upstream and downstream results Note that this will force consumption of the entire input stream Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "withUpstream",
        "normalized": "Pipe a b c d e f-\u003ePipe a b c d e(d,f)",
        "package": "conduit",
        "partial": "Upstream",
        "signature": "Pipe l i o u m r-\u003ePipe l i o u m(u,r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eSend a single output value downstream. If the downstream \u003ccode\u003ePipe\u003c/code\u003e\n terminates, this \u003ccode\u003ePipe\u003c/code\u003e will terminate as well.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "o-\u003e Pipe l i o u m ()",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Send single output value downstream If the downstream Pipe terminates this Pipe will terminate as well Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "yield",
        "normalized": "a-\u003ePipe b c a d e()",
        "package": "conduit",
        "partial": "",
        "signature": "o-\u003ePipe l i o u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Internal.html#v:yieldOr",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003eyield\u003c/code\u003e, but additionally takes a finalizer to be run if the\n downstream \u003ccode\u003ePipe\u003c/code\u003e terminates.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Internal",
        "fct-package": "conduit",
        "fct-signature": "o-\u003e m ()-\u003e Pipe l i o u m ()",
        "fct-type": "function",
        "title": "yieldOr"
      },
      "index": {
        "description": "Similar to yield but additionally takes finalizer to be run if the downstream Pipe terminates Since",
        "hierarchy": "Data Conduit Internal",
        "module": "Data.Conduit.Internal",
        "name": "yieldOr",
        "normalized": "a-\u003eb()-\u003ePipe c d a e b()",
        "package": "conduit",
        "partial": "Or",
        "signature": "o-\u003em()-\u003ePipe l i o u m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUse lazy I/O for consuming the contents of a source. Warning: All normal\n warnings of lazy I/O apply. In particular, if you are using this with a\n \u003ccode\u003eResourceT\u003c/code\u003e transformer, you must force the list to be evaluated before\n exiting the \u003ccode\u003eResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Lazy",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Use lazy for consuming the contents of source Warning All normal warnings of lazy apply In particular if you are using this with ResourceT transformer you must force the list to be evaluated before exiting the ResourceT",
        "hierarchy": "Data Conduit Lazy",
        "module": "Data.Conduit.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "conduit",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lazy.html#v:lazyConsume",
      "description": {
        "fct-descr": "\u003cp\u003eUse lazy I/O to consume all elements from a \u003ccode\u003eSource\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function relies on \u003ccode\u003e\u003ca\u003emonadActive\u003c/a\u003e\u003c/code\u003e to determine if the underlying monadic\n state has been closed.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lazy",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e m [a]",
        "fct-source": "src/Data-Conduit-Lazy.html#lazyConsume",
        "fct-type": "function",
        "title": "lazyConsume"
      },
      "index": {
        "description": "Use lazy to consume all elements from Source This function relies on monadActive to determine if the underlying monadic state has been closed Since",
        "hierarchy": "Data Conduit Lazy",
        "module": "Data.Conduit.Lazy",
        "name": "lazyConsume",
        "normalized": "Source a b-\u003ea[b]",
        "package": "conduit",
        "partial": "Consume",
        "signature": "Source m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllow monad transformers to be run\u003cem\u003eeval\u003c/em\u003eexec in a section of conduit\n rather then needing to run across the whole conduit.  The circumvents many\n of the problems with breaking the monad transformer laws.  For more\n information, see the announcement blog post:\n \u003ca\u003ehttp://www.yesodweb.com/blog/2014/01/conduit-transformer-exception\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module was added in conduit 1.0.11.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "Allow monad transformers to be run eval exec in section of conduit rather then needing to run across the whole conduit The circumvents many of the problems with breaking the monad transformer laws For more information see the announcement blog post http www.yesodweb.com blog conduit-transformer-exception This module was added in conduit",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "conduit",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:catchErrorC",
      "description": {
        "fct-descr": "\u003cp\u003eCatch an error in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (ErrorT e m) r -\u003e (e -\u003e ConduitM i o (ErrorT e m) r) -\u003e ConduitM i o (ErrorT e m) r",
        "fct-source": "src/Data-Conduit-Lift.html#catchErrorC",
        "fct-type": "function",
        "title": "catchErrorC"
      },
      "index": {
        "description": "Catch an error in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "catchErrorC",
        "normalized": "ConduitM a b(ErrorT c d)e-\u003e(c-\u003eConduitM a b(ErrorT c d)e)-\u003eConduitM a b(ErrorT c d)e",
        "package": "conduit",
        "partial": "Error",
        "signature": "ConduitM i o(ErrorT e m)r-\u003e(e-\u003eConduitM i o(ErrorT e m)r)-\u003eConduitM i o(ErrorT e m)r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:distribute",
      "description": {
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM b o (t m) () -\u003e t (ConduitM b o m) ()",
        "fct-source": "src/Data-Conduit-Lift.html#distribute",
        "fct-type": "function",
        "title": "distribute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "distribute",
        "normalized": "ConduitM a b(c d)()-\u003ec(ConduitM a b d)()",
        "package": "conduit",
        "partial": "",
        "signature": "ConduitM b o(t m)()-\u003et(ConduitM b o m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:errorC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "t m (Either e b) -\u003e t (ErrorT e m) b",
        "fct-source": "src/Data-Conduit-Lift.html#errorC",
        "fct-type": "function",
        "title": "errorC"
      },
      "index": {
        "description": "Run ErrorT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "errorC",
        "normalized": "a b(Either c d)-\u003ea(ErrorT c b)d",
        "package": "conduit",
        "partial": "",
        "signature": "t m(Either e b)-\u003et(ErrorT e m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:evalRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e s -\u003e ConduitM i o (RWST r w s m) res -\u003e ConduitM i o m (res, w)",
        "fct-source": "src/Data-Conduit-Lift.html#evalRWSC",
        "fct-type": "function",
        "title": "evalRWSC"
      },
      "index": {
        "description": "Evaluate RWST in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "evalRWSC",
        "normalized": "a-\u003eb-\u003eConduitM c d(RWST a e b f)g-\u003eConduitM c d f(g,e)",
        "package": "conduit",
        "partial": "RWSC",
        "signature": "r-\u003es-\u003eConduitM i o(RWST r w s m)res-\u003eConduitM i o m(res,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:evalRWSSC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e s -\u003e ConduitM i o (RWST r w s m) res -\u003e ConduitM i o m (res, w)",
        "fct-source": "src/Data-Conduit-Lift.html#evalRWSSC",
        "fct-type": "function",
        "title": "evalRWSSC"
      },
      "index": {
        "description": "Evaluate RWST in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "evalRWSSC",
        "normalized": "a-\u003eb-\u003eConduitM c d(RWST a e b f)g-\u003eConduitM c d f(g,e)",
        "package": "conduit",
        "partial": "RWSSC",
        "signature": "r-\u003es-\u003eConduitM i o(RWST r w s m)res-\u003eConduitM i o m(res,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:evalStateC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "s -\u003e ConduitM i o (StateT s m) r -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit-Lift.html#evalStateC",
        "fct-type": "function",
        "title": "evalStateC"
      },
      "index": {
        "description": "Evaluate StateT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "evalStateC",
        "normalized": "a-\u003eConduitM b c(StateT a d)e-\u003eConduitM b c d e",
        "package": "conduit",
        "partial": "State",
        "signature": "s-\u003eConduitM i o(StateT s m)r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:evalStateSC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "s -\u003e ConduitM i o (StateT s m) r -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit-Lift.html#evalStateSC",
        "fct-type": "function",
        "title": "evalStateSC"
      },
      "index": {
        "description": "Evaluate StateT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "evalStateSC",
        "normalized": "a-\u003eConduitM b c(StateT a d)e-\u003eConduitM b c d e",
        "package": "conduit",
        "partial": "State SC",
        "signature": "s-\u003eConduitM i o(StateT s m)r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:execRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e s -\u003e ConduitM i o (RWST r w s m) res -\u003e ConduitM i o m (s, w)",
        "fct-source": "src/Data-Conduit-Lift.html#execRWSC",
        "fct-type": "function",
        "title": "execRWSC"
      },
      "index": {
        "description": "Execute RWST in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "execRWSC",
        "normalized": "a-\u003eb-\u003eConduitM c d(RWST a e b f)g-\u003eConduitM c d f(b,e)",
        "package": "conduit",
        "partial": "RWSC",
        "signature": "r-\u003es-\u003eConduitM i o(RWST r w s m)res-\u003eConduitM i o m(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:execRWSSC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e s -\u003e ConduitM i o (RWST r w s m) res -\u003e ConduitM i o m (s, w)",
        "fct-source": "src/Data-Conduit-Lift.html#execRWSSC",
        "fct-type": "function",
        "title": "execRWSSC"
      },
      "index": {
        "description": "Execute RWST in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "execRWSSC",
        "normalized": "a-\u003eb-\u003eConduitM c d(RWST a e b f)g-\u003eConduitM c d f(b,e)",
        "package": "conduit",
        "partial": "RWSSC",
        "signature": "r-\u003es-\u003eConduitM i o(RWST r w s m)res-\u003eConduitM i o m(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:execStateC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "s -\u003e ConduitM i o (StateT s m) r -\u003e ConduitM i o m s",
        "fct-source": "src/Data-Conduit-Lift.html#execStateC",
        "fct-type": "function",
        "title": "execStateC"
      },
      "index": {
        "description": "Execute StateT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "execStateC",
        "normalized": "a-\u003eConduitM b c(StateT a d)e-\u003eConduitM b c d a",
        "package": "conduit",
        "partial": "State",
        "signature": "s-\u003eConduitM i o(StateT s m)r-\u003eConduitM i o m s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:execStateSC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "s -\u003e ConduitM i o (StateT s m) r -\u003e ConduitM i o m s",
        "fct-source": "src/Data-Conduit-Lift.html#execStateSC",
        "fct-type": "function",
        "title": "execStateSC"
      },
      "index": {
        "description": "Execute StateT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "execStateSC",
        "normalized": "a-\u003eConduitM b c(StateT a d)e-\u003eConduitM b c d a",
        "package": "conduit",
        "partial": "State SC",
        "signature": "s-\u003eConduitM i o(StateT s m)r-\u003eConduitM i o m s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:execWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (WriterT w m) r -\u003e ConduitM i o m w",
        "fct-source": "src/Data-Conduit-Lift.html#execWriterC",
        "fct-type": "function",
        "title": "execWriterC"
      },
      "index": {
        "description": "Execute WriterT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "execWriterC",
        "normalized": "ConduitM a b(WriterT c d)e-\u003eConduitM a b d c",
        "package": "conduit",
        "partial": "Writer",
        "signature": "ConduitM i o(WriterT w m)r-\u003eConduitM i o m w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:execWriterSC",
      "description": {
        "fct-descr": "\u003cp\u003eExecute \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (WriterT w m) r -\u003e ConduitM i o m w",
        "fct-source": "src/Data-Conduit-Lift.html#execWriterSC",
        "fct-type": "function",
        "title": "execWriterSC"
      },
      "index": {
        "description": "Execute WriterT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "execWriterSC",
        "normalized": "ConduitM a b(WriterT c d)e-\u003eConduitM a b d c",
        "package": "conduit",
        "partial": "Writer SC",
        "signature": "ConduitM i o(WriterT w m)r-\u003eConduitM i o m w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:maybeC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "t m (Maybe b) -\u003e t (MaybeT m) b",
        "fct-source": "src/Data-Conduit-Lift.html#maybeC",
        "fct-type": "function",
        "title": "maybeC"
      },
      "index": {
        "description": "Wrap the base monad in MaybeT Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "maybeC",
        "normalized": "a b(Maybe c)-\u003ea(MaybeT b)c",
        "package": "conduit",
        "partial": "",
        "signature": "t m(Maybe b)-\u003et(MaybeT m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:readerC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "(t -\u003e t1 m b) -\u003e t1 (ReaderT t m) b",
        "fct-source": "src/Data-Conduit-Lift.html#readerC",
        "fct-type": "function",
        "title": "readerC"
      },
      "index": {
        "description": "Wrap the base monad in ReaderT Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "readerC",
        "normalized": "(a-\u003ea b c)-\u003ea(ReaderT a b)c",
        "package": "conduit",
        "partial": "",
        "signature": "(t-\u003et m b)-\u003et(ReaderT t m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runErrorC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eErrorT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (ErrorT e m) r -\u003e ConduitM i o m (Either e r)",
        "fct-source": "src/Data-Conduit-Lift.html#runErrorC",
        "fct-type": "function",
        "title": "runErrorC"
      },
      "index": {
        "description": "Run ErrorT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runErrorC",
        "normalized": "ConduitM a b(ErrorT c d)e-\u003eConduitM a b d(Either c e)",
        "package": "conduit",
        "partial": "Error",
        "signature": "ConduitM i o(ErrorT e m)r-\u003eConduitM i o m(Either e r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runMaybeC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (MaybeT m) r -\u003e ConduitM i o m (Maybe r)",
        "fct-source": "src/Data-Conduit-Lift.html#runMaybeC",
        "fct-type": "function",
        "title": "runMaybeC"
      },
      "index": {
        "description": "Run MaybeT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runMaybeC",
        "normalized": "ConduitM a b(MaybeT c)d-\u003eConduitM a b c(Maybe d)",
        "package": "conduit",
        "partial": "Maybe",
        "signature": "ConduitM i o(MaybeT m)r-\u003eConduitM i o m(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runRWSC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e s -\u003e ConduitM i o (RWST r w s m) res -\u003e ConduitM i o m (res, s, w)",
        "fct-source": "src/Data-Conduit-Lift.html#runRWSC",
        "fct-type": "function",
        "title": "runRWSC"
      },
      "index": {
        "description": "Run RWST in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runRWSC",
        "normalized": "a-\u003eb-\u003eConduitM c d(RWST a e b f)g-\u003eConduitM c d f(g,b,e)",
        "package": "conduit",
        "partial": "RWSC",
        "signature": "r-\u003es-\u003eConduitM i o(RWST r w s m)res-\u003eConduitM i o m(res,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runRWSSC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e s -\u003e ConduitM i o (RWST r w s m) res -\u003e ConduitM i o m (res, s, w)",
        "fct-source": "src/Data-Conduit-Lift.html#runRWSSC",
        "fct-type": "function",
        "title": "runRWSSC"
      },
      "index": {
        "description": "Run RWST in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runRWSSC",
        "normalized": "a-\u003eb-\u003eConduitM c d(RWST a e b f)g-\u003eConduitM c d f(g,b,e)",
        "package": "conduit",
        "partial": "RWSSC",
        "signature": "r-\u003es-\u003eConduitM i o(RWST r w s m)res-\u003eConduitM i o m(res,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runReaderC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eReaderT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "r -\u003e ConduitM i o (ReaderT r m) res -\u003e ConduitM i o m res",
        "fct-source": "src/Data-Conduit-Lift.html#runReaderC",
        "fct-type": "function",
        "title": "runReaderC"
      },
      "index": {
        "description": "Run ReaderT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runReaderC",
        "normalized": "a-\u003eConduitM b c(ReaderT a d)e-\u003eConduitM b c d e",
        "package": "conduit",
        "partial": "Reader",
        "signature": "r-\u003eConduitM i o(ReaderT r m)res-\u003eConduitM i o m res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runStateC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "s -\u003e ConduitM i o (StateT s m) r -\u003e ConduitM i o m (r, s)",
        "fct-source": "src/Data-Conduit-Lift.html#runStateC",
        "fct-type": "function",
        "title": "runStateC"
      },
      "index": {
        "description": "Run StateT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runStateC",
        "normalized": "a-\u003eConduitM b c(StateT a d)e-\u003eConduitM b c d(e,a)",
        "package": "conduit",
        "partial": "State",
        "signature": "s-\u003eConduitM i o(StateT s m)r-\u003eConduitM i o m(r,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runStateSC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "s -\u003e ConduitM i o (StateT s m) r -\u003e ConduitM i o m (r, s)",
        "fct-source": "src/Data-Conduit-Lift.html#runStateSC",
        "fct-type": "function",
        "title": "runStateSC"
      },
      "index": {
        "description": "Run StateT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runStateSC",
        "normalized": "a-\u003eConduitM b c(StateT a d)e-\u003eConduitM b c d(e,a)",
        "package": "conduit",
        "partial": "State SC",
        "signature": "s-\u003eConduitM i o(StateT s m)r-\u003eConduitM i o m(r,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runWriterC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (WriterT w m) r -\u003e ConduitM i o m (r, w)",
        "fct-source": "src/Data-Conduit-Lift.html#runWriterC",
        "fct-type": "function",
        "title": "runWriterC"
      },
      "index": {
        "description": "Run WriterT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runWriterC",
        "normalized": "ConduitM a b(WriterT c d)e-\u003eConduitM a b d(e,c)",
        "package": "conduit",
        "partial": "Writer",
        "signature": "ConduitM i o(WriterT w m)r-\u003eConduitM i o m(r,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:runWriterSC",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e in the base monad\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o (WriterT w m) r -\u003e ConduitM i o m (r, w)",
        "fct-source": "src/Data-Conduit-Lift.html#runWriterSC",
        "fct-type": "function",
        "title": "runWriterSC"
      },
      "index": {
        "description": "Run WriterT in the base monad Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "runWriterSC",
        "normalized": "ConduitM a b(WriterT c d)e-\u003eConduitM a b d(e,c)",
        "package": "conduit",
        "partial": "Writer SC",
        "signature": "ConduitM i o(WriterT w m)r-\u003eConduitM i o m(r,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:rwsC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "(t -\u003e t2 -\u003e t1 m (b, t2, w)) -\u003e t1 (RWST t w t2 m) b",
        "fct-source": "src/Data-Conduit-Lift.html#rwsC",
        "fct-type": "function",
        "title": "rwsC"
      },
      "index": {
        "description": "Wrap the base monad in RWST Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "rwsC",
        "normalized": "(a-\u003ea-\u003ea b(c,a,d))-\u003ea(RWST a d a b)c",
        "package": "conduit",
        "partial": "",
        "signature": "(t-\u003et-\u003et m(b,t,w))-\u003et(RWST t w t m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:rwsSC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eRWST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "(t -\u003e t2 -\u003e t1 m (b, t2, w)) -\u003e t1 (RWST t w t2 m) b",
        "fct-source": "src/Data-Conduit-Lift.html#rwsSC",
        "fct-type": "function",
        "title": "rwsSC"
      },
      "index": {
        "description": "Wrap the base monad in RWST Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "rwsSC",
        "normalized": "(a-\u003ea-\u003ea b(c,a,d))-\u003ea(RWST a d a b)c",
        "package": "conduit",
        "partial": "SC",
        "signature": "(t-\u003et-\u003et m(b,t,w))-\u003et(RWST t w t m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:stateC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "(t -\u003e t1 m (b, t)) -\u003e t1 (StateT t m) b",
        "fct-source": "src/Data-Conduit-Lift.html#stateC",
        "fct-type": "function",
        "title": "stateC"
      },
      "index": {
        "description": "Wrap the base monad in StateT Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "stateC",
        "normalized": "(a-\u003ea b(c,a))-\u003ea(StateT a b)c",
        "package": "conduit",
        "partial": "",
        "signature": "(t-\u003et m(b,t))-\u003et(StateT t m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:stateSC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "(t -\u003e t1 m (b, t)) -\u003e t1 (StateT t m) b",
        "fct-source": "src/Data-Conduit-Lift.html#stateSC",
        "fct-type": "function",
        "title": "stateSC"
      },
      "index": {
        "description": "Wrap the base monad in StateT Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "stateSC",
        "normalized": "(a-\u003ea b(c,a))-\u003ea(StateT a b)c",
        "package": "conduit",
        "partial": "SC",
        "signature": "(t-\u003et m(b,t))-\u003et(StateT t m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:writerC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "t m (b, w) -\u003e t (WriterT w m) b",
        "fct-source": "src/Data-Conduit-Lift.html#writerC",
        "fct-type": "function",
        "title": "writerC"
      },
      "index": {
        "description": "Wrap the base monad in WriterT Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "writerC",
        "normalized": "a b(c,d)-\u003ea(WriterT d b)c",
        "package": "conduit",
        "partial": "",
        "signature": "t m(b,w)-\u003et(WriterT w m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Lift.html#v:writerSC",
      "description": {
        "fct-descr": "\u003cp\u003eWrap the base monad in \u003ccode\u003e\u003ca\u003eWriterT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Lift",
        "fct-package": "conduit",
        "fct-signature": "t m (b, w) -\u003e t (WriterT w m) b",
        "fct-source": "src/Data-Conduit-Lift.html#writerSC",
        "fct-type": "function",
        "title": "writerSC"
      },
      "index": {
        "description": "Wrap the base monad in WriterT Since",
        "hierarchy": "Data Conduit Lift",
        "module": "Data.Conduit.Lift",
        "name": "writerSC",
        "normalized": "a b(c,d)-\u003ea(WriterT d b)c",
        "package": "conduit",
        "partial": "SC",
        "signature": "t m(b,w)-\u003et(WriterT w m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher-level functions to interact with the elements of a stream. Most of\n these are based on list functions.\n\u003c/p\u003e\u003cp\u003eNote that these functions all deal with individual elements of a stream as a\n sort of \"black box\", where there is no introspection of the contained\n elements. Values such as \u003ccode\u003eByteString\u003c/code\u003e and \u003ccode\u003eText\u003c/code\u003e will likely need to be\n treated specially to deal with their contents properly (\u003ccode\u003eWord8\u003c/code\u003e and \u003ccode\u003eChar\u003c/code\u003e,\n respectively). See the \u003ca\u003eData.Conduit.Binary\u003c/a\u003e and \u003ca\u003eData.Conduit.Text\u003c/a\u003e\n modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "Higher-level functions to interact with the elements of stream Most of these are based on list functions Note that these functions all deal with individual elements of stream as sort of black box where there is no introspection of the contained elements Values such as ByteString and Text will likely need to be treated specially to deal with their contents properly Word8 and Char respectively See the Data.Conduit.Binary and Data.Conduit.Text modules",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "List",
        "normalized": "",
        "package": "conduit",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:catMaybes",
      "description": {
        "fct-descr": "\u003cp\u003eFilter the \u003ccode\u003eJust\u003c/code\u003e values from a stream, discarding the \u003ccode\u003eNothing\u003c/code\u003e  values.\n\u003c/p\u003e\u003cp\u003eSince 0.5.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Conduit (Maybe a) m a",
        "fct-source": "src/Data-Conduit-List.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "Filter the Just values from stream discarding the Nothing values Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "catMaybes",
        "normalized": "",
        "package": "conduit",
        "partial": "Maybes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e. It puts all values from\n   \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e into stream.\n\u003c/p\u003e\u003cp\u003eSince 1.0.6\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Conduit (f a) m a",
        "fct-source": "src/Data-Conduit-List.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Generalization of catMaybes It puts all values from Foldable into stream Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "concat",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a transformation to all values in a stream, concatenating the output\n values.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e [b]) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Apply transformation to all values in stream concatenating the output values Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "concatMap",
        "normalized": "(a-\u003e[b])-\u003eConduit a c b",
        "package": "conduit",
        "partial": "Map",
        "signature": "(a-\u003e[b])-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:concatMapAccum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e with an accumulator.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e accum -\u003e (accum, [b])) -\u003e accum -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#concatMapAccum",
        "fct-type": "function",
        "title": "concatMapAccum"
      },
      "index": {
        "description": "concatMap with an accumulator Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "concatMapAccum",
        "normalized": "(a-\u003eb-\u003e(b,[c]))-\u003eb-\u003eConduit a d c",
        "package": "conduit",
        "partial": "Map Accum",
        "signature": "(a-\u003eaccum-\u003e(accum,[b]))-\u003eaccum-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:concatMapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e with an accumulator.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e accum -\u003e m (accum, [b])) -\u003e accum -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#concatMapAccumM",
        "fct-type": "function",
        "title": "concatMapAccumM"
      },
      "index": {
        "description": "concatMapM with an accumulator Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "concatMapAccumM",
        "normalized": "(a-\u003eb-\u003ec(b,[d]))-\u003eb-\u003eConduit a c d",
        "package": "conduit",
        "partial": "Map Accum",
        "signature": "(a-\u003eaccum-\u003em(accum,[b]))-\u003eaccum-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:concatMapM",
      "description": {
        "fct-descr": "\u003cp\u003eApply a monadic transformation to all values in a stream, concatenating\n the output values.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m [b]) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#concatMapM",
        "fct-type": "function",
        "title": "concatMapM"
      },
      "index": {
        "description": "Apply monadic transformation to all values in stream concatenating the output values Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "concatMapM",
        "normalized": "(a-\u003eb[c])-\u003eConduit a b c",
        "package": "conduit",
        "partial": "Map",
        "signature": "(a-\u003em[b])-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:consume",
      "description": {
        "fct-descr": "\u003cp\u003eConsume all values from the stream and return as a list. Note that this\n will pull all values into memory. For a lazy variant, see\n \u003ca\u003eData.Conduit.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Consumer a m [a]",
        "fct-source": "src/Data-Conduit-List.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Consume all values from the stream and return as list Note that this will pull all values into memory For lazy variant see Data.Conduit.Lazy Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "consume",
        "normalized": "Consumer a b[a]",
        "package": "conduit",
        "partial": "",
        "signature": "Consumer a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore a certain number of values in the stream. This function is\n semantically equivalent to:\n\u003c/p\u003e\u003cpre\u003e drop i = take i \u003e\u003e return ()\n\u003c/pre\u003e\u003cp\u003eHowever, \u003ccode\u003edrop\u003c/code\u003e is more efficient as it does not need to hold values in\n memory.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Consumer a m ()",
        "fct-source": "src/Data-Conduit-List.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Ignore certain number of values in the stream This function is semantically equivalent to drop take return However drop is more efficient as it does not need to hold values in memory Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "drop",
        "normalized": "Int-\u003eConsumer a b()",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConsumer a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:enumFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate from a value to a final value, inclusive, via \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is generally more efficient than using \u003ccode\u003ePrelude\u003c/code\u003e's \u003ccode\u003eenumFromTo\u003c/code\u003e and\n combining with \u003ccode\u003esourceList\u003c/code\u003e since this avoids any intermediate data\n structures.\n\u003c/p\u003e\u003cp\u003eSince 0.4.2\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "a -\u003e a -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-List.html#enumFromTo",
        "fct-type": "function",
        "title": "enumFromTo"
      },
      "index": {
        "description": "Enumerate from value to final value inclusive via succ This is generally more efficient than using Prelude enumFromTo and combining with sourceList since this avoids any intermediate data structures Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "enumFromTo",
        "normalized": "a-\u003ea-\u003eProducer b a",
        "package": "conduit",
        "partial": "From To",
        "signature": "a-\u003ea-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eKeep only values in the stream passing a given predicate.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e Bool) -\u003e Conduit a m a",
        "fct-source": "src/Data-Conduit-List.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Keep only values in the stream passing given predicate Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eConduit a b a",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eConduit a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eA strict left fold.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Consumer a m b",
        "fct-source": "src/Data-Conduit-List.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "strict left fold Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eConsumer b c a",
        "package": "conduit",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eConsumer a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic strict left fold.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Consumer a m b",
        "fct-source": "src/Data-Conduit-List.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "monadic strict left fold Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eConsumer b c a",
        "package": "conduit",
        "partial": "",
        "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eConsumer a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:foldMap",
      "description": {
        "fct-descr": "\u003cp\u003eA monoidal strict left fold.\n\u003c/p\u003e\u003cp\u003eSince 0.5.3\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e b) -\u003e Consumer a m b",
        "fct-source": "src/Data-Conduit-List.html#foldMap",
        "fct-type": "function",
        "title": "foldMap"
      },
      "index": {
        "description": "monoidal strict left fold Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "foldMap",
        "normalized": "(a-\u003eb)-\u003eConsumer a c b",
        "package": "conduit",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003eConsumer a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:foldMapM",
      "description": {
        "fct-descr": "\u003cp\u003eA monoidal strict left fold in a Monad.\n\u003c/p\u003e\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m b) -\u003e Consumer a m b",
        "fct-source": "src/Data-Conduit-List.html#foldMapM",
        "fct-type": "function",
        "title": "foldMapM"
      },
      "index": {
        "description": "monoidal strict left fold in Monad Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "foldMapM",
        "normalized": "(a-\u003eb c)-\u003eConsumer a b c",
        "package": "conduit",
        "partial": "Map",
        "signature": "(a-\u003em b)-\u003eConsumer a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eGrouping input according to an equality function.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e Conduit a m [a]",
        "fct-source": "src/Data-Conduit-List.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Grouping input according to an equality function Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "groupBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eConduit a b[a]",
        "package": "conduit",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003eConduit a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eTake a single value from the stream, if available.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Consumer a m (Maybe a)",
        "fct-source": "src/Data-Conduit-List.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Take single value from the stream if available Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "head",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that the inner sink consumes no more than the given number of\n values. Note this this does \u003cem\u003enot\u003c/em\u003e ensure that the sink consumes all of those\n values. To get the latter behavior, combine with \u003ccode\u003e\u003ca\u003esinkNull\u003c/a\u003e\u003c/code\u003e, e.g.:\n\u003c/p\u003e\u003cpre\u003e src $$ do\n     x \u003c- isolate count =$ do\n         x \u003c- someSink\n         sinkNull\n         return x\n     someOtherSink\n     ...\n\u003c/pre\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Conduit a m a",
        "fct-source": "src/Data-Conduit-List.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "Ensure that the inner sink consumes no more than the given number of values Note this this does not ensure that the sink consumes all of those values To get the latter behavior combine with sinkNull e.g src do isolate count do someSink sinkNull return someOtherSink Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "isolate",
        "normalized": "Int-\u003eConduit a b a",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConduit a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:iterM",
      "description": {
        "fct-descr": "\u003cp\u003eApply a monadic action on all values in a stream.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003eConduit\u003c/code\u003e can be used to perform a monadic side-effect for every\n value, whilst passing the value through the \u003ccode\u003eConduit\u003c/code\u003e as-is.\n\u003c/p\u003e\u003cpre\u003e iterM f = mapM (\\a -\u003e f a \u003e\u003e= \\() -\u003e return a)\n\u003c/pre\u003e\u003cp\u003eSince 0.5.6\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m ()) -\u003e Conduit a m a",
        "fct-source": "src/Data-Conduit-List.html#iterM",
        "fct-type": "function",
        "title": "iterM"
      },
      "index": {
        "description": "Apply monadic action on all values in stream This Conduit can be used to perform monadic side-effect for every value whilst passing the value through the Conduit as-is iterM mapM return Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "iterM",
        "normalized": "(a-\u003eb())-\u003eConduit a b a",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003em())-\u003eConduit a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003eProduces an infinite stream of repeated applications of f to x.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-List.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "Produces an infinite stream of repeated applications of to",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eProducer b a",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eApply a transformation to all values in a stream.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e b) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Apply transformation to all values in stream Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eConduit a c b",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:mapFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e. It applies function\n to all values in a stream and send values inside resulting\n \u003ccode\u003eFoldable\u003c/code\u003e downstream.\n\u003c/p\u003e\u003cp\u003eSince 1.0.6\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e f b) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#mapFoldable",
        "fct-type": "function",
        "title": "mapFoldable"
      },
      "index": {
        "description": "Generalization of mapMaybe and concatMap It applies function to all values in stream and send values inside resulting Foldable downstream Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "mapFoldable",
        "normalized": "(a-\u003eb c)-\u003eConduit a d c",
        "package": "conduit",
        "partial": "Foldable",
        "signature": "(a-\u003ef b)-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:mapFoldableM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic variant of \u003ccode\u003e\u003ca\u003emapFoldable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.6\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m (f b)) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#mapFoldableM",
        "fct-type": "function",
        "title": "mapFoldableM"
      },
      "index": {
        "description": "Monadic variant of mapFoldable Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "mapFoldableM",
        "normalized": "(a-\u003eb(c d))-\u003eConduit a b d",
        "package": "conduit",
        "partial": "Foldable",
        "signature": "(a-\u003em(f b))-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eApply a monadic transformation to all values in a stream.\n\u003c/p\u003e\u003cp\u003eIf you do not need the transformed values, and instead just want the monadic\n side-effects of running the action, see \u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m b) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Apply monadic transformation to all values in stream If you do not need the transformed values and instead just want the monadic side-effects of running the action see mapM Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eConduit a b c",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003eApply the action to all values in the stream.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m ()) -\u003e Consumer a m ()",
        "fct-source": "src/Data-Conduit-List.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "Apply the action to all values in the stream Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "mapM_",
        "normalized": "(a-\u003eb())-\u003eConsumer a b()",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003em())-\u003eConsumer a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eApply a transformation that may fail to all values in a stream, discarding\n the failures.\n\u003c/p\u003e\u003cp\u003eSince 0.5.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e Maybe b) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Apply transformation that may fail to all values in stream discarding the failures Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eConduit a c b",
        "package": "conduit",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:mapMaybeM",
      "description": {
        "fct-descr": "\u003cp\u003eApply a monadic transformation that may fail to all values in a stream,\n discarding the failures.\n\u003c/p\u003e\u003cp\u003eSince 0.5.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e m (Maybe b)) -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#mapMaybeM",
        "fct-type": "function",
        "title": "mapMaybeM"
      },
      "index": {
        "description": "Apply monadic transformation that may fail to all values in stream discarding the failures Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "mapMaybeM",
        "normalized": "(a-\u003eb(Maybe c))-\u003eConduit a b c",
        "package": "conduit",
        "partial": "Maybe",
        "signature": "(a-\u003em(Maybe b))-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eLook at the next value in the stream, if available. This function will not\n change the state of the stream.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Consumer a m (Maybe a)",
        "fct-source": "src/Data-Conduit-List.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Look at the next value in the stream if available This function will not change the state of the stream Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "peek",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:scanl",
      "description": {
        "fct-descr": "\u003cp\u003eAnalog of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e for lists.\n\u003c/p\u003e\u003cp\u003eSince 1.0.6\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e s -\u003e (s, b)) -\u003e s -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "Analog of scanl for lists Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "scanl",
        "normalized": "(a-\u003eb-\u003e(b,c))-\u003eb-\u003eConduit a d c",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003es-\u003e(s,b))-\u003es-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:scanlM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic scanl.\n\u003c/p\u003e\u003cp\u003eSince 1.0.6\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e s -\u003e m (s, b)) -\u003e s -\u003e Conduit a m b",
        "fct-source": "src/Data-Conduit-List.html#scanlM",
        "fct-type": "function",
        "title": "scanlM"
      },
      "index": {
        "description": "Monadic scanl Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "scanlM",
        "normalized": "(a-\u003eb-\u003ec(b,d))-\u003eb-\u003eConduit a c d",
        "package": "conduit",
        "partial": "",
        "signature": "(a-\u003es-\u003em(s,b))-\u003es-\u003eConduit a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003ePipe\u003c/code\u003e repeatedly, and output its result value downstream. Stops\n when no more input is available from upstream.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Consumer i m o-\u003e Conduit i m o",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Run Pipe repeatedly and output its result value downstream Stops when no more input is available from upstream Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "sequence",
        "normalized": "Consumer a b c-\u003eConduit a b c",
        "package": "conduit",
        "partial": "",
        "signature": "Consumer i m o-\u003eConduit i m o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:sinkNull",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore the remainder of values in the source. Particularly useful when\n combined with \u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Consumer a m ()",
        "fct-source": "src/Data-Conduit-List.html#sinkNull",
        "fct-type": "function",
        "title": "sinkNull"
      },
      "index": {
        "description": "Ignore the remainder of values in the source Particularly useful when combined with isolate Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "sinkNull",
        "normalized": "Consumer a b()",
        "package": "conduit",
        "partial": "Null",
        "signature": "Consumer a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:sourceList",
      "description": {
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "[a] -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-List.html#sourceList",
        "fct-type": "function",
        "title": "sourceList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "sourceList",
        "normalized": "[a]-\u003eProducer b a",
        "package": "conduit",
        "partial": "List",
        "signature": "[a]-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:sourceNull",
      "description": {
        "fct-descr": "\u003cp\u003eA source that outputs no values. Note that this is just a type-restricted\n synonym for \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Producer m a",
        "fct-source": "src/Data-Conduit-List.html#sourceNull",
        "fct-type": "function",
        "title": "sourceNull"
      },
      "index": {
        "description": "source that outputs no values Note that this is just type-restricted synonym for mempty Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "sourceNull",
        "normalized": "",
        "package": "conduit",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eTake some values from the stream and return as a list. If you want to\n instead create a conduit that pipes data to another sink, see \u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e.\n This function is semantically equivalent to:\n\u003c/p\u003e\u003cpre\u003e take i = isolate i =$ consume\n\u003c/pre\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Consumer a m [a]",
        "fct-source": "src/Data-Conduit-List.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Take some values from the stream and return as list If you want to instead create conduit that pipes data to another sink see isolate This function is semantically equivalent to take isolate consume Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "take",
        "normalized": "Int-\u003eConsumer a b[a]",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConsumer a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-List.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a source from a seed value.\n\u003c/p\u003e\u003cp\u003eSince 0.4.2\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.List",
        "fct-package": "conduit",
        "fct-signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-List.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "Generate source from seed value Since",
        "hierarchy": "Data Conduit List",
        "module": "Data.Conduit.List",
        "name": "unfold",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eProducer c b",
        "package": "conduit",
        "partial": "",
        "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandle streams of text.\n\u003c/p\u003e\u003cp\u003eParts of this code were taken from enumerator and adapted for conduits.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Handle streams of text Parts of this code were taken from enumerator and adapted for conduits",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "Text",
        "normalized": "",
        "package": "conduit",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#t:Codec",
      "description": {
        "fct-descr": "\u003cp\u003eA specific character encoding.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Text.html#Codec",
        "fct-type": "data",
        "title": "Codec"
      },
      "index": {
        "description": "specific character encoding Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "Codec",
        "normalized": "",
        "package": "conduit",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#t:TextException",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Text.html#TextException",
        "fct-type": "data",
        "title": "TextException"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "TextException",
        "normalized": "",
        "package": "conduit",
        "partial": "Text Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:DecodeException",
      "description": {
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "DecodeException Codec Word8",
        "fct-source": "src/Data-Conduit-Text.html#TextException",
        "fct-type": "function",
        "title": "DecodeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "DecodeException",
        "normalized": "",
        "package": "conduit",
        "partial": "Decode Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:EncodeException",
      "description": {
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "EncodeException Codec Char",
        "fct-source": "src/Data-Conduit-Text.html#TextException",
        "fct-type": "function",
        "title": "EncodeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "EncodeException",
        "normalized": "",
        "package": "conduit",
        "partial": "Encode Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:LengthExceeded",
      "description": {
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "LengthExceeded Int",
        "fct-source": "src/Data-Conduit-Text.html#TextException",
        "fct-type": "function",
        "title": "LengthExceeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "LengthExceeded",
        "normalized": "",
        "package": "conduit",
        "partial": "Length Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:TextException",
      "description": {
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "TextException SomeException",
        "fct-source": "src/Data-Conduit-Text.html#TextException",
        "fct-type": "function",
        "title": "TextException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "TextException",
        "normalized": "",
        "package": "conduit",
        "partial": "Text Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:ascii",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#ascii",
        "fct-type": "function",
        "title": "ascii"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "ascii",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert bytes into text, using the provided codec. If the codec is\n not capable of decoding an input byte sequence, an exception will be thrown.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec -\u003e Conduit ByteString m Text",
        "fct-source": "src/Data-Conduit-Text.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Convert bytes into text using the provided codec If the codec is not capable of decoding an input byte sequence an exception will be thrown Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "decode",
        "normalized": "Codec-\u003eConduit ByteString a Text",
        "package": "conduit",
        "partial": "",
        "signature": "Codec-\u003eConduit ByteString m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Consumer Text m ()",
        "fct-source": "src/Data-Conduit-Text.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "drop",
        "normalized": "Int-\u003eConsumer Text a()",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConsumer Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "(Char -\u003e Bool) -\u003e Consumer Text m ()",
        "fct-source": "src/Data-Conduit-Text.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "dropWhile",
        "normalized": "(Char-\u003eBool)-\u003eConsumer Text a()",
        "package": "conduit",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eConsumer Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert text into bytes, using the provided codec. If the codec is\n not capable of representing an input character, an exception will be thrown.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec -\u003e Conduit Text m ByteString",
        "fct-source": "src/Data-Conduit-Text.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Convert text into bytes using the provided codec If the codec is not capable of representing an input character an exception will be thrown Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "encode",
        "normalized": "Codec-\u003eConduit Text a ByteString",
        "package": "conduit",
        "partial": "",
        "signature": "Codec-\u003eConduit Text m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:foldLines",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "(a -\u003e ConduitM Text o m a) -\u003e a -\u003e ConduitM Text o m a",
        "fct-source": "src/Data-Conduit-Text.html#foldLines",
        "fct-type": "function",
        "title": "foldLines"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "foldLines",
        "normalized": "(a-\u003eConduitM Text b c a)-\u003ea-\u003eConduitM Text b c a",
        "package": "conduit",
        "partial": "Lines",
        "signature": "(a-\u003eConduitM Text o m a)-\u003ea-\u003eConduitM Text o m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:iso8859_1",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#iso8859_1",
        "fct-type": "function",
        "title": "iso8859_1"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "iso8859_1",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003eEmit each line separately\n\u003c/p\u003e\u003cp\u003eSince 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Conduit Text m Text",
        "fct-source": "src/Data-Conduit-Text.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Emit each line separately Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "lines",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:linesBounded",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of the lines function with an integer parameter.\n The text length of any emitted line\n never exceeds the value of the paramater. Whenever\n this is about to happen a LengthExceeded exception\n is thrown. This function should be used instead\n of the lines function whenever we are dealing with\n user input (e.g. a file upload) because we can't be sure that\n user input won't have extraordinarily large lines which would\n require large amounts of memory if consumed.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Conduit Text m Text",
        "fct-source": "src/Data-Conduit-Text.html#linesBounded",
        "fct-type": "function",
        "title": "linesBounded"
      },
      "index": {
        "description": "Variant of the lines function with an integer parameter The text length of any emitted line never exceeds the value of the paramater Whenever this is about to happen LengthExceeded exception is thrown This function should be used instead of the lines function whenever we are dealing with user input e.g file upload because we can be sure that user input won have extraordinarily large lines which would require large amounts of memory if consumed",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "linesBounded",
        "normalized": "Int-\u003eConduit Text a Text",
        "package": "conduit",
        "partial": "Bounded",
        "signature": "Int-\u003eConduit Text m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Int -\u003e Conduit Text m Text",
        "fct-source": "src/Data-Conduit-Text.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "take",
        "normalized": "Int-\u003eConduit Text a Text",
        "package": "conduit",
        "partial": "",
        "signature": "Int-\u003eConduit Text m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "(Char -\u003e Bool) -\u003e Conduit Text m Text",
        "fct-source": "src/Data-Conduit-Text.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "takeWhile",
        "normalized": "(Char-\u003eBool)-\u003eConduit Text a Text",
        "package": "conduit",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eConduit Text m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:utf16_be",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#utf16_be",
        "fct-type": "function",
        "title": "utf16_be"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "utf16_be",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:utf16_le",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#utf16_le",
        "fct-type": "function",
        "title": "utf16_le"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "utf16_le",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:utf32_be",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#utf32_be",
        "fct-type": "function",
        "title": "utf32_be"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "utf32_be",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:utf32_le",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#utf32_le",
        "fct-type": "function",
        "title": "utf32_le"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "utf32_le",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:utf8",
      "description": {
        "fct-descr": "\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Conduit-Text.html#utf8",
        "fct-type": "function",
        "title": "utf8"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "utf8",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Text.html#v:withLine",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.0.8\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Text",
        "fct-package": "conduit",
        "fct-signature": "Sink Text m a -\u003e Consumer Text m (Maybe a)",
        "fct-source": "src/Data-Conduit-Text.html#withLine",
        "fct-type": "function",
        "title": "withLine"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Data Conduit Text",
        "module": "Data.Conduit.Text",
        "name": "withLine",
        "normalized": "Sink Text a b-\u003eConsumer Text a(Maybe b)",
        "package": "conduit",
        "partial": "Line",
        "signature": "Sink Text m a-\u003eConsumer Text m(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious utility functions versions of \u003ccode\u003econduit\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Util",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Various utility functions versions of conduit",
        "hierarchy": "Data Conduit Util",
        "module": "Data.Conduit.Util",
        "name": "Util",
        "normalized": "",
        "package": "conduit",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Util.html#v:passthroughSink",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003eSink\u003c/code\u003e into a \u003ccode\u003eConduit\u003c/code\u003e in the following way:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All input passed to the \u003ccode\u003eSink\u003c/code\u003e is yielded downstream.\n\u003c/li\u003e\u003cli\u003e When the \u003ccode\u003eSink\u003c/code\u003e finishes processing, the result is passed to the provided to the finalizer function.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the \u003ccode\u003eSink\u003c/code\u003e will stop receiving input as soon as the downstream it\n is connected to shuts down.\n\u003c/p\u003e\u003cp\u003eAn example usage would be to write the result of a \u003ccode\u003eSink\u003c/code\u003e to some mutable\n variable while allowing other processing to continue.\n\u003c/p\u003e\u003cp\u003eSince 1.0.10\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Util",
        "fct-package": "conduit",
        "fct-signature": "Sink i m r-\u003e (r -\u003e m ())-\u003e Conduit i m i",
        "fct-type": "function",
        "title": "passthroughSink"
      },
      "index": {
        "description": "Turn Sink into Conduit in the following way All input passed to the Sink is yielded downstream When the Sink finishes processing the result is passed to the provided to the finalizer function Note that the Sink will stop receiving input as soon as the downstream it is connected to shuts down An example usage would be to write the result of Sink to some mutable variable while allowing other processing to continue Since",
        "hierarchy": "Data Conduit Util",
        "module": "Data.Conduit.Util",
        "name": "passthroughSink",
        "normalized": "Sink a b c-\u003e(c-\u003eb())-\u003eConduit a b a",
        "package": "conduit",
        "partial": "Sink",
        "signature": "Sink i m r-\u003e(r-\u003em())-\u003eConduit i m i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Util.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two sources. The new source will stop producing once either\n   source has been exhausted.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Util",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e Source m b -\u003e Source m (a, b)",
        "fct-source": "src/Data-Conduit-Util.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Combines two sources The new source will stop producing once either source has been exhausted Since",
        "hierarchy": "Data Conduit Util",
        "module": "Data.Conduit.Util",
        "name": "zip",
        "normalized": "Source a b-\u003eSource a c-\u003eSource a(b,c)",
        "package": "conduit",
        "partial": "",
        "signature": "Source m a-\u003eSource m b-\u003eSource m(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit-Util.html#v:zipSinks",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two sinks. The new sink will complete when both input sinks have\n   completed.\n\u003c/p\u003e\u003cp\u003eAny leftovers are discarded.\n\u003c/p\u003e\u003cp\u003eSince 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Util",
        "fct-package": "conduit",
        "fct-signature": "Sink i m r -\u003e Sink i m r' -\u003e Sink i m (r, r')",
        "fct-source": "src/Data-Conduit-Util.html#zipSinks",
        "fct-type": "function",
        "title": "zipSinks"
      },
      "index": {
        "description": "Combines two sinks The new sink will complete when both input sinks have completed Any leftovers are discarded Since",
        "hierarchy": "Data Conduit Util",
        "module": "Data.Conduit.Util",
        "name": "zipSinks",
        "normalized": "Sink a b c-\u003eSink a b d-\u003eSink a b(c,d)",
        "package": "conduit",
        "partial": "Sinks",
        "signature": "Sink i m r-\u003eSink i m r'-\u003eSink i m(r,r')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIf this is your first time with conduit, you should probably start with\n the tutorial:\n \u003ca\u003ehttps://haskell.fpcomplete.com/user/snoyberg/library-documentation/conduit-overview\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit.html",
        "fct-type": "module",
        "title": "Conduit"
      },
      "index": {
        "description": "If this is your first time with conduit you should probably start with the tutorial https haskell.fpcomplete.com user snoyberg library-documentation conduit-overview",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:Conduit",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes a stream of input values and produces a stream of output values,\n without producing a final result.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Conduit",
        "fct-type": "type",
        "title": "Conduit"
      },
      "index": {
        "description": "Consumes stream of input values and produces stream of output values without producing final result Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:ConduitM",
      "description": {
        "fct-descr": "\u003cp\u003eCore datatype of the conduit package. This type represents a general\n component which can consume a stream of input values \u003ccode\u003ei\u003c/code\u003e, produce a stream\n of output values \u003ccode\u003eo\u003c/code\u003e, perform actions in the \u003ccode\u003em\u003c/code\u003e monad, and produce a final\n result \u003ccode\u003er\u003c/code\u003e. The type synonyms provided here are simply wrappers around this\n type.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Internal.html#ConduitM",
        "fct-type": "data",
        "title": "ConduitM"
      },
      "index": {
        "description": "Core datatype of the conduit package This type represents general component which can consume stream of input values produce stream of output values perform actions in the monad and produce final result The type synonyms provided here are simply wrappers around this type Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "ConduitM",
        "normalized": "",
        "package": "conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:Consumer",
      "description": {
        "fct-descr": "\u003cp\u003eA component which consumes a stream of input values and produces a final\n result, regardless of the output stream. A \u003ccode\u003eConsumer\u003c/code\u003e is a generalization of\n a \u003ccode\u003eSink\u003c/code\u003e, and can be used as either a \u003ccode\u003eSink\u003c/code\u003e or a \u003ccode\u003eConduit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Consumer",
        "fct-type": "type",
        "title": "Consumer"
      },
      "index": {
        "description": "component which consumes stream of input values and produces final result regardless of the output stream Consumer is generalization of Sink and can be used as either Sink or Conduit Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Consumer",
        "normalized": "",
        "package": "conduit",
        "partial": "Consumer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:ExceptionT",
      "description": {
        "fct-descr": "\u003cp\u003eThe express purpose of this transformer is to allow non-\u003ccode\u003eIO\u003c/code\u003e-based monad\n stacks to catch exceptions via the \u003ccode\u003e\u003ca\u003eMonadThrow\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "ExceptionT"
      },
      "index": {
        "description": "The express purpose of this transformer is to allow non IO based monad stacks to catch exceptions via the MonadThrow typeclass Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "ExceptionT",
        "normalized": "",
        "package": "conduit",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:Flush",
      "description": {
        "fct-descr": "\u003cp\u003eProvide for a stream of data that can be flushed.\n\u003c/p\u003e\u003cp\u003eA number of \u003ccode\u003eConduit\u003c/code\u003es (e.g., zlib compression) need the ability to flush\n the stream at some point. This provides a single wrapper datatype to be used\n in all such circumstances.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit.html#Flush",
        "fct-type": "data",
        "title": "Flush"
      },
      "index": {
        "description": "Provide for stream of data that can be flushed number of Conduit e.g zlib compression need the ability to flush the stream at some point This provides single wrapper datatype to be used in all such circumstances Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Flush",
        "normalized": "",
        "package": "conduit",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:MonadBaseControl",
      "description": {
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadBaseControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "MonadBaseControl",
        "normalized": "",
        "package": "conduit",
        "partial": "Monad Base Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:MonadResource",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which allows for safe resource allocation. In theory, any monad\n transformer stack included a \u003ccode\u003eResourceT\u003c/code\u003e can be an instance of\n \u003ccode\u003eMonadResource\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003erunResourceT\u003c/code\u003e has a requirement for a \u003ccode\u003eMonadBaseControl IO m\u003c/code\u003e monad,\n which allows control operations to be lifted. A \u003ccode\u003eMonadResource\u003c/code\u003e does not\n have this requirement. This means that transformers such as \u003ccode\u003eContT\u003c/code\u003e can be\n an instance of \u003ccode\u003eMonadResource\u003c/code\u003e. However, the \u003ccode\u003eContT\u003c/code\u003e wrapper will need to be\n unwrapped before calling \u003ccode\u003erunResourceT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadResource"
      },
      "index": {
        "description": "Monad which allows for safe resource allocation In theory any monad transformer stack included ResourceT can be an instance of MonadResource Note runResourceT has requirement for MonadBaseControl IO monad which allows control operations to be lifted MonadResource does not have this requirement This means that transformers such as ContT can be an instance of MonadResource However the ContT wrapper will need to be unwrapped before calling runResourceT Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "MonadResource",
        "normalized": "",
        "package": "conduit",
        "partial": "Monad Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:MonadThrow",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e which can throw exceptions. Note that this does not work in a\n vanilla \u003ccode\u003eST\u003c/code\u003e or \u003ccode\u003eIdentity\u003c/code\u003e monad. Instead, you should use the \u003ccode\u003e\u003ca\u003eExceptionT\u003c/a\u003e\u003c/code\u003e\n transformer in your stack if you are dealing with a non-\u003ccode\u003eIO\u003c/code\u003e base monad.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadThrow"
      },
      "index": {
        "description": "Monad which can throw exceptions Note that this does not work in vanilla ST or Identity monad Instead you should use the ExceptionT transformer in your stack if you are dealing with non IO base monad Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "MonadThrow",
        "normalized": "",
        "package": "conduit",
        "partial": "Monad Throw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:MonadUnsafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eMonad\u003c/code\u003e based on some monad which allows running of some \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions,\n via unsafe calls. This applies to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e, for instance.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadUnsafeIO"
      },
      "index": {
        "description": "Monad based on some monad which allows running of some IO actions via unsafe calls This applies to IO and ST for instance Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "MonadUnsafeIO",
        "normalized": "",
        "package": "conduit",
        "partial": "Monad Unsafe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:Producer",
      "description": {
        "fct-descr": "\u003cp\u003eA component which produces a stream of output values, regardless of the\n input stream. A \u003ccode\u003eProducer\u003c/code\u003e is a generalization of a \u003ccode\u003eSource\u003c/code\u003e, and can be\n used as either a \u003ccode\u003eSource\u003c/code\u003e or a \u003ccode\u003eConduit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Producer",
        "fct-type": "type",
        "title": "Producer"
      },
      "index": {
        "description": "component which produces stream of output values regardless of the input stream Producer is generalization of Source and can be used as either Source or Conduit Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Producer",
        "normalized": "",
        "package": "conduit",
        "partial": "Producer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:ResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eThe Resource transformer. This transformer keeps track of all registered\n actions, and calls them upon exit (via \u003ccode\u003erunResourceT\u003c/code\u003e). Actions may be\n registered via \u003ccode\u003eregister\u003c/code\u003e, or resources may be allocated atomically via\n \u003ccode\u003eallocate\u003c/code\u003e. \u003ccode\u003eallocate\u003c/code\u003e corresponds closely to \u003ccode\u003ebracket\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReleasing may be performed before exit via the \u003ccode\u003erelease\u003c/code\u003e function. This is a\n highly recommended optimization, as it will ensure that scarce resources are\n freed early. Note that calling \u003ccode\u003erelease\u003c/code\u003e will deregister the action, so that\n a release action will only ever be called once.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ResourceT"
      },
      "index": {
        "description": "The Resource transformer This transformer keeps track of all registered actions and calls them upon exit via runResourceT Actions may be registered via register or resources may be allocated atomically via allocate allocate corresponds closely to bracket Releasing may be performed before exit via the release function This is highly recommended optimization as it will ensure that scarce resources are freed early Note that calling release will deregister the action so that release action will only ever be called once Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "ResourceT",
        "normalized": "",
        "package": "conduit",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:ResumableSource",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eSource\u003c/code\u003e which has been started, but has not yet completed.\n\u003c/p\u003e\u003cp\u003eThis type contains both the current state of the \u003ccode\u003eSource\u003c/code\u003e, and the finalizer\n to be run to close it.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Internal.html#ResumableSource",
        "fct-type": "data",
        "title": "ResumableSource"
      },
      "index": {
        "description": "Source which has been started but has not yet completed This type contains both the current state of the Source and the finalizer to be run to close it Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "ResumableSource",
        "normalized": "",
        "package": "conduit",
        "partial": "Resumable Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eConsumes a stream of input values and produces a final result, without\n producing any output.\n\u003c/p\u003e\u003cpre\u003e type Sink i m r = ConduitM i Void m r\n\u003c/pre\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Sink",
        "fct-type": "type",
        "title": "Sink"
      },
      "index": {
        "description": "Consumes stream of input values and produces final result without producing any output type Sink ConduitM Void Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Sink",
        "normalized": "",
        "package": "conduit",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a stream of output values, without consuming any input or\n producing a final result.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Internal.html#Source",
        "fct-type": "type",
        "title": "Source"
      },
      "index": {
        "description": "Provides stream of output values without consuming any input or producing final result Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Source",
        "normalized": "",
        "package": "conduit",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eThe connect operator, which pulls data from a source and pushes to a sink.\n If you would like to keep the \u003ccode\u003eSource\u003c/code\u003e open to be used for other\n operations, use the connect-and-resume operator \u003ccode\u003e\u003ca\u003e$$+\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e Sink a m b -\u003e m b",
        "fct-source": "src/Data-Conduit.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "The connect operator which pulls data from source and pushes to sink If you would like to keep the Source open to be used for other operations use the connect-and-resume operator Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "($$) $$",
        "normalized": "Source a b-\u003eSink b a c-\u003ea c",
        "package": "conduit",
        "partial": "",
        "signature": "Source m a-\u003eSink a m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-36--36--43-",
      "description": {
        "fct-descr": "\u003cp\u003eThe connect-and-resume operator. This does not close the \u003ccode\u003eSource\u003c/code\u003e, but\n instead returns it to be used again. This allows a \u003ccode\u003eSource\u003c/code\u003e to be used\n incrementally in a large program, without forcing the entire program to live\n in the \u003ccode\u003eSink\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eMnemonic: connect + do more.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e Sink a m b -\u003e m (ResumableSource m a, b)",
        "fct-source": "src/Data-Conduit.html#%24%24%2B",
        "fct-type": "function",
        "title": "($$+)"
      },
      "index": {
        "description": "The connect-and-resume operator This does not close the Source but instead returns it to be used again This allows Source to be used incrementally in large program without forcing the entire program to live in the Sink monad Mnemonic connect do more Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "($$+) $$+",
        "normalized": "Source a b-\u003eSink b a c-\u003ea(ResumableSource a b,c)",
        "package": "conduit",
        "partial": "",
        "signature": "Source m a-\u003eSink a m b-\u003em(ResumableSource m a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-36--36--43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eContinue processing after usage of \u003ccode\u003e$$+\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ResumableSource m a -\u003e Sink a m b -\u003e m (ResumableSource m a, b)",
        "fct-source": "src/Data-Conduit.html#%24%24%2B%2B",
        "fct-type": "function",
        "title": "($$++)"
      },
      "index": {
        "description": "Continue processing after usage of Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "($$++) $$++",
        "normalized": "ResumableSource a b-\u003eSink b a c-\u003ea(ResumableSource a b,c)",
        "package": "conduit",
        "partial": "",
        "signature": "ResumableSource m a-\u003eSink a m b-\u003em(ResumableSource m a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-36--36--43--45-",
      "description": {
        "fct-descr": "\u003cp\u003eComplete processing of a \u003ccode\u003eResumableSource\u003c/code\u003e. This will run the finalizer\n associated with the \u003ccode\u003eResumableSource\u003c/code\u003e. In order to guarantee process resource\n finalization, you \u003cem\u003emust\u003c/em\u003e use this operator after using \u003ccode\u003e$$+\u003c/code\u003e and \u003ccode\u003e$$++\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ResumableSource m a -\u003e Sink a m b -\u003e m b",
        "fct-source": "src/Data-Conduit.html#%24%24%2B-",
        "fct-type": "function",
        "title": "($$+-)"
      },
      "index": {
        "description": "Complete processing of ResumableSource This will run the finalizer associated with the ResumableSource In order to guarantee process resource finalization you must use this operator after using and Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "($$+-) $$+-",
        "normalized": "ResumableSource a b-\u003eSink b a c-\u003ea c",
        "package": "conduit",
        "partial": "",
        "signature": "ResumableSource m a-\u003eSink a m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-36--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft fuse, combining a source and a conduit together into a new source.\n\u003c/p\u003e\u003cp\u003eBoth the \u003ccode\u003eSource\u003c/code\u003e and \u003ccode\u003eConduit\u003c/code\u003e will be closed when the newly-created\n \u003ccode\u003eSource\u003c/code\u003e is closed.\n\u003c/p\u003e\u003cp\u003eLeftover data from the \u003ccode\u003eConduit\u003c/code\u003e will be discarded.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e Conduit a m b -\u003e Source m b",
        "fct-source": "src/Data-Conduit.html#%24%3D",
        "fct-type": "function",
        "title": "($=)"
      },
      "index": {
        "description": "Left fuse combining source and conduit together into new source Both the Source and Conduit will be closed when the newly-created Source is closed Leftover data from the Conduit will be discarded Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "($=) $=",
        "normalized": "Source a b-\u003eConduit b a c-\u003eSource a c",
        "package": "conduit",
        "partial": "",
        "signature": "Source m a-\u003eConduit a m b-\u003eSource m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-61--36-",
      "description": {
        "fct-descr": "\u003cp\u003eRight fuse, combining a conduit and a sink together into a new sink.\n\u003c/p\u003e\u003cp\u003eBoth the \u003ccode\u003eConduit\u003c/code\u003e and \u003ccode\u003eSink\u003c/code\u003e will be closed when the newly-created \u003ccode\u003eSink\u003c/code\u003e\n is closed.\n\u003c/p\u003e\u003cp\u003eLeftover data returned from the \u003ccode\u003eSink\u003c/code\u003e will be discarded.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Conduit a m b -\u003e Sink b m c -\u003e Sink a m c",
        "fct-source": "src/Data-Conduit.html#%3D%24",
        "fct-type": "function",
        "title": "(=$)"
      },
      "index": {
        "description": "Right fuse combining conduit and sink together into new sink Both the Conduit and Sink will be closed when the newly-created Sink is closed Leftover data returned from the Sink will be discarded Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "(=$) =$",
        "normalized": "Conduit a b c-\u003eSink c b d-\u003eSink a b d",
        "package": "conduit",
        "partial": "",
        "signature": "Conduit a m b-\u003eSink b m c-\u003eSink a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:-61--36--61-",
      "description": {
        "fct-descr": "\u003cp\u003eFusion operator, combining two \u003ccode\u003eConduit\u003c/code\u003es together into a new \u003ccode\u003eConduit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBoth \u003ccode\u003eConduit\u003c/code\u003es will be closed when the newly-created \u003ccode\u003eConduit\u003c/code\u003e is closed.\n\u003c/p\u003e\u003cp\u003eLeftover data returned from the right \u003ccode\u003eConduit\u003c/code\u003e will be discarded.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Conduit a m b -\u003e ConduitM b c m r -\u003e ConduitM a c m r",
        "fct-source": "src/Data-Conduit.html#%3D%24%3D",
        "fct-type": "function",
        "title": "(=$=)"
      },
      "index": {
        "description": "Fusion operator combining two Conduit together into new Conduit Both Conduit will be closed when the newly-created Conduit is closed Leftover data returned from the right Conduit will be discarded Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "(=$=) =$=",
        "normalized": "Conduit a b c-\u003eConduitM c d b e-\u003eConduitM a d b e",
        "package": "conduit",
        "partial": "",
        "signature": "Conduit a m b-\u003eConduitM b c m r-\u003eConduitM a c m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:Chunk",
      "description": {
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Chunk a",
        "fct-source": "src/Data-Conduit.html#Flush",
        "fct-type": "function",
        "title": "Chunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Chunk",
        "normalized": "",
        "package": "conduit",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:ExceptionT",
      "description": {
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ExceptionT",
        "fct-type": "function",
        "title": "ExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "ExceptionT",
        "normalized": "",
        "package": "conduit",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:Flush",
      "description": {
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Flush",
        "fct-source": "src/Data-Conduit.html#Flush",
        "fct-type": "function",
        "title": "Flush"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "Flush",
        "normalized": "",
        "package": "conduit",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:addCleanup",
      "description": {
        "fct-descr": "\u003cp\u003eAdd some code to be run when the given component cleans up.\n\u003c/p\u003e\u003cp\u003eThe supplied cleanup function will be given a \u003ccode\u003eTrue\u003c/code\u003e if the component ran to\n completion, or \u003ccode\u003eFalse\u003c/code\u003e if it terminated early due to a downstream component\n terminating.\n\u003c/p\u003e\u003cp\u003eNote that this function is not exception safe. For that, please use\n \u003ccode\u003e\u003ca\u003ebracketP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(Bool -\u003e m ()) -\u003e ConduitM i o m r -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit.html#addCleanup",
        "fct-type": "function",
        "title": "addCleanup"
      },
      "index": {
        "description": "Add some code to be run when the given component cleans up The supplied cleanup function will be given True if the component ran to completion or False if it terminated early due to downstream component terminating Note that this function is not exception safe For that please use bracketP Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "addCleanup",
        "normalized": "(Bool-\u003ea())-\u003eConduitM b c a d-\u003eConduitM b c a d",
        "package": "conduit",
        "partial": "Cleanup",
        "signature": "(Bool-\u003em())-\u003eConduitM i o m r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:await",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a single input value from upstream. If no data is available,\n returns \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Consumer i m (Maybe i)",
        "fct-source": "src/Data-Conduit.html#await",
        "fct-type": "function",
        "title": "await"
      },
      "index": {
        "description": "Wait for single input value from upstream If no data is available returns Nothing Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "await",
        "normalized": "",
        "package": "conduit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:awaitForever",
      "description": {
        "fct-descr": "\u003cp\u003eWait for input forever, calling the given inner component for each piece of\n new input. Returns the upstream result type.\n\u003c/p\u003e\u003cp\u003eThis function is provided as a convenience for the common pattern of\n \u003ccode\u003eawait\u003c/code\u003eing input, checking if it's \u003ccode\u003eJust\u003c/code\u003e and then looping.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(i -\u003e ConduitM i o m r) -\u003e ConduitM i o m ()",
        "fct-source": "src/Data-Conduit.html#awaitForever",
        "fct-type": "function",
        "title": "awaitForever"
      },
      "index": {
        "description": "Wait for input forever calling the given inner component for each piece of new input Returns the upstream result type This function is provided as convenience for the common pattern of await ing input checking if it Just and then looping Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "awaitForever",
        "normalized": "(a-\u003eConduitM a b c d)-\u003eConduitM a b c()",
        "package": "conduit",
        "partial": "Forever",
        "signature": "(i-\u003eConduitM i o m r)-\u003eConduitM i o m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:bracketP",
      "description": {
        "fct-descr": "\u003cp\u003ePerform some allocation and run an inner component. Two guarantees are\n given about resource finalization:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e It will be \u003cem\u003eprompt\u003c/em\u003e. The finalization will be run as early as possible.\n\u003c/li\u003e\u003cli\u003e It is exception safe. Due to usage of \u003ccode\u003eresourcet\u003c/code\u003e, the finalization will\n be run in the event of any exceptions.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "IO a -\u003e (a -\u003e IO ()) -\u003e (a -\u003e ConduitM i o m r) -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit.html#bracketP",
        "fct-type": "function",
        "title": "bracketP"
      },
      "index": {
        "description": "Perform some allocation and run an inner component Two guarantees are given about resource finalization It will be prompt The finalization will be run as early as possible It is exception safe Due to usage of resourcet the finalization will be run in the event of any exceptions Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "bracketP",
        "normalized": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eConduitM b c d e)-\u003eConduitM b c d e",
        "package": "conduit",
        "partial": "",
        "signature": "IO a-\u003e(a-\u003eIO())-\u003e(a-\u003eConduitM i o m r)-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:catchC",
      "description": {
        "fct-descr": "\u003cp\u003eCatch all exceptions thrown by the current component of the pipeline.\n\u003c/p\u003e\u003cp\u003eNote: this will \u003cem\u003enot\u003c/em\u003e catch exceptions thrown by other components! For\n example, if an exception is thrown in a \u003ccode\u003eSource\u003c/code\u003e feeding to a \u003ccode\u003eSink\u003c/code\u003e, and\n the \u003ccode\u003eSink\u003c/code\u003e uses \u003ccode\u003ecatchC\u003c/code\u003e, the exception will \u003cem\u003enot\u003c/em\u003e be caught.\n\u003c/p\u003e\u003cp\u003eDue to this behavior (as well as lack of async exception handling), you\n should not try to implement combinators such as \u003ccode\u003eonException\u003c/code\u003e in terms of this\n primitive function.\n\u003c/p\u003e\u003cp\u003eNote also that the exception handling will \u003cem\u003enot\u003c/em\u003e be applied to any\n finalizers generated by this conduit.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o m r -\u003e (e -\u003e ConduitM i o m r) -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit-Internal.html#catchC",
        "fct-type": "function",
        "title": "catchC"
      },
      "index": {
        "description": "Catch all exceptions thrown by the current component of the pipeline Note this will not catch exceptions thrown by other components For example if an exception is thrown in Source feeding to Sink and the Sink uses catchC the exception will not be caught Due to this behavior as well as lack of async exception handling you should not try to implement combinators such as onException in terms of this primitive function Note also that the exception handling will not be applied to any finalizers generated by this conduit Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "catchC",
        "normalized": "ConduitM a b c d-\u003e(e-\u003eConduitM a b c d)-\u003eConduitM a b c d",
        "package": "conduit",
        "partial": "",
        "signature": "ConduitM i o m r-\u003e(e-\u003eConduitM i o m r)-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:handleC",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003eflip catchC\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(e -\u003e ConduitM i o m r) -\u003e ConduitM i o m r -\u003e ConduitM i o m r",
        "fct-source": "src/Data-Conduit-Internal.html#handleC",
        "fct-type": "function",
        "title": "handleC"
      },
      "index": {
        "description": "The same as flip catchC Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "handleC",
        "normalized": "(a-\u003eConduitM b c d e)-\u003eConduitM b c d e-\u003eConduitM b c d e",
        "package": "conduit",
        "partial": "",
        "signature": "(e-\u003eConduitM i o m r)-\u003eConduitM i o m r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:leftover",
      "description": {
        "fct-descr": "\u003cp\u003eProvide a single piece of leftover input to be consumed by the next\n component in the current monadic binding.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: it is highly encouraged to only return leftover values from input\n already consumed from upstream.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "i -\u003e ConduitM i o m ()",
        "fct-source": "src/Data-Conduit.html#leftover",
        "fct-type": "function",
        "title": "leftover"
      },
      "index": {
        "description": "Provide single piece of leftover input to be consumed by the next component in the current monadic binding Note it is highly encouraged to only return leftover values from input already consumed from upstream Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "leftover",
        "normalized": "a-\u003eConduitM a b c()",
        "package": "conduit",
        "partial": "",
        "signature": "i-\u003eConduitM i o m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:mapInput",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all the input values of a \u003ccode\u003eConduitM\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(i1 -\u003e i2)-\u003e (i2 -\u003e Maybe i1)-\u003e ConduitM i2 o m r-\u003e ConduitM i1 o m r",
        "fct-type": "function",
        "title": "mapInput"
      },
      "index": {
        "description": "Apply function to all the input values of ConduitM Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "mapInput",
        "normalized": "(a-\u003ea)-\u003e(a-\u003eMaybe a)-\u003eConduitM a b c d-\u003eConduitM a b c d",
        "package": "conduit",
        "partial": "Input",
        "signature": "(i-\u003ei)-\u003e(i-\u003eMaybe i)-\u003eConduitM i o m r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:mapOutput",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all the output values of a \u003ccode\u003eConduitM\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis mimics the behavior of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e in pre-0.4\n days. It can also be simulated by fusing with the \u003ccode\u003emap\u003c/code\u003e conduit from\n \u003ca\u003eData.Conduit.List\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(o1 -\u003e o2) -\u003e ConduitM i o1 m r -\u003e ConduitM i o2 m r",
        "fct-source": "src/Data-Conduit.html#mapOutput",
        "fct-type": "function",
        "title": "mapOutput"
      },
      "index": {
        "description": "Apply function to all the output values of ConduitM This mimics the behavior of fmap for Source and Conduit in pre-0.4 days It can also be simulated by fusing with the map conduit from Data.Conduit.List Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "mapOutput",
        "normalized": "(a-\u003ea)-\u003eConduitM b a c d-\u003eConduitM b a c d",
        "package": "conduit",
        "partial": "Output",
        "signature": "(o-\u003eo)-\u003eConduitM i o m r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:mapOutputMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emapOutput\u003c/a\u003e\u003c/code\u003e, but use a function that returns \u003ccode\u003eMaybe\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(o1 -\u003e Maybe o2) -\u003e ConduitM i o1 m r -\u003e ConduitM i o2 m r",
        "fct-source": "src/Data-Conduit.html#mapOutputMaybe",
        "fct-type": "function",
        "title": "mapOutputMaybe"
      },
      "index": {
        "description": "Same as mapOutput but use function that returns Maybe values Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "mapOutputMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eConduitM b a c d-\u003eConduitM b a c d",
        "package": "conduit",
        "partial": "Output Maybe",
        "signature": "(o-\u003eMaybe o)-\u003eConduitM i o m r-\u003eConduitM i o m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:monadThrow",
      "description": {
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "e -\u003e m a",
        "fct-type": "method",
        "title": "monadThrow"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "monadThrow",
        "normalized": "a-\u003eb c",
        "package": "conduit",
        "partial": "Throw",
        "signature": "e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:runException",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003eExceptionT Identity\u003c/code\u003e stack.\n\u003c/p\u003e\u003cp\u003eSince 0.4.2\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ExceptionT Identity a -\u003e Either SomeException a",
        "fct-type": "function",
        "title": "runException"
      },
      "index": {
        "description": "Run an ExceptionT Identity stack Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "runException",
        "normalized": "ExceptionT Identity a-\u003eEither SomeException a",
        "package": "conduit",
        "partial": "Exception",
        "signature": "ExceptionT Identity a-\u003eEither SomeException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:runExceptionT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "m (Either SomeException a)",
        "fct-type": "function",
        "title": "runExceptionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "runExceptionT",
        "normalized": "",
        "package": "conduit",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:runExceptionT_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003erunExceptionT\u003c/a\u003e\u003c/code\u003e, but immediately \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e any exception returned.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ExceptionT m a -\u003e m a",
        "fct-type": "function",
        "title": "runExceptionT_"
      },
      "index": {
        "description": "Same as runExceptionT but immediately throw any exception returned Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "runExceptionT_",
        "normalized": "ExceptionT a b-\u003ea b",
        "package": "conduit",
        "partial": "Exception",
        "signature": "ExceptionT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:runException_",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003eExceptionT Identity\u003c/code\u003e stack, but immediately \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e any exception returned.\n\u003c/p\u003e\u003cp\u003eSince 0.4.2\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ExceptionT Identity a -\u003e a",
        "fct-type": "function",
        "title": "runException_"
      },
      "index": {
        "description": "Run an ExceptionT Identity stack but immediately throw any exception returned Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "runException_",
        "normalized": "ExceptionT Identity a-\u003ea",
        "package": "conduit",
        "partial": "Exception",
        "signature": "ExceptionT Identity a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:runResourceT",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e transformer, and call all registered release actions.\n\u003c/p\u003e\u003cp\u003eNote that there is some reference counting involved due to \u003ccode\u003e\u003ca\u003eresourceForkIO\u003c/a\u003e\u003c/code\u003e.\n If multiple threads are sharing the same collection of resources, only the\n last call to \u003ccode\u003erunResourceT\u003c/code\u003e will deallocate the resources.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ResourceT m a -\u003e m a",
        "fct-type": "function",
        "title": "runResourceT"
      },
      "index": {
        "description": "Unwrap ResourceT transformer and call all registered release actions Note that there is some reference counting involved due to resourceForkIO If multiple threads are sharing the same collection of resources only the last call to runResourceT will deallocate the resources Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "runResourceT",
        "normalized": "ResourceT a b-\u003ea b",
        "package": "conduit",
        "partial": "Resource",
        "signature": "ResourceT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:toConsumer",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralize a \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Sink a m b -\u003e Consumer a m b",
        "fct-source": "src/Data-Conduit-Internal.html#toConsumer",
        "fct-type": "function",
        "title": "toConsumer"
      },
      "index": {
        "description": "Generalize Sink to Consumer Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "toConsumer",
        "normalized": "Sink a b c-\u003eConsumer a b c",
        "package": "conduit",
        "partial": "Consumer",
        "signature": "Sink a m b-\u003eConsumer a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:toProducer",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralize a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.0.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "Source m a -\u003e Producer m a",
        "fct-source": "src/Data-Conduit-Internal.html#toProducer",
        "fct-type": "function",
        "title": "toProducer"
      },
      "index": {
        "description": "Generalize Source to Producer Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "toProducer",
        "normalized": "Source a b-\u003eProducer a b",
        "package": "conduit",
        "partial": "Producer",
        "signature": "Source m a-\u003eProducer m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:transPipe",
      "description": {
        "fct-descr": "\u003cp\u003eTransform the monad that a \u003ccode\u003eConduitM\u003c/code\u003e lives in.\n\u003c/p\u003e\u003cp\u003eNote that the monad transforming function will be run multiple times,\n resulting in unintuitive behavior in some cases. For a fuller treatment,\n please see:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://github.com/snoyberg/conduit/wiki/Dealing-with-monad-transformers\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis function is just a synonym for \u003ccode\u003e\u003ca\u003ehoist\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.4.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "(forall a.  m a -\u003e n a) -\u003e ConduitM i o m r -\u003e ConduitM i o n r",
        "fct-source": "src/Data-Conduit.html#transPipe",
        "fct-type": "function",
        "title": "transPipe"
      },
      "index": {
        "description": "Transform the monad that ConduitM lives in Note that the monad transforming function will be run multiple times resulting in unintuitive behavior in some cases For fuller treatment please see https github.com snoyberg conduit wiki Dealing-with-monad-transformers This function is just synonym for hoist Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "transPipe",
        "normalized": "(a b c d-\u003ee d)-\u003eConduitM f g c h-\u003eConduitM f g e h",
        "package": "conduit",
        "partial": "Pipe",
        "signature": "(forall a. m a-\u003en a)-\u003eConduitM i o m r-\u003eConduitM i o n r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:tryC",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003etry\u003c/code\u003e for use within a pipeline. See the comments in \u003ccode\u003ecatchC\u003c/code\u003e\n for more details.\n\u003c/p\u003e\u003cp\u003eSince 1.0.11\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ConduitM i o m r -\u003e ConduitM i o m (Either e r)",
        "fct-source": "src/Data-Conduit-Internal.html#tryC",
        "fct-type": "function",
        "title": "tryC"
      },
      "index": {
        "description": "version of try for use within pipeline See the comments in catchC for more details Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "tryC",
        "normalized": "ConduitM a b c d-\u003eConduitM a b c(Either e d)",
        "package": "conduit",
        "partial": "",
        "signature": "ConduitM i o m r-\u003eConduitM i o m(Either e r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:unsafeLiftIO",
      "description": {
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "IO a -\u003e m a",
        "fct-type": "method",
        "title": "unsafeLiftIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "unsafeLiftIO",
        "normalized": "IO a-\u003eb a",
        "package": "conduit",
        "partial": "Lift IO",
        "signature": "IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:unwrapResumable",
      "description": {
        "fct-descr": "\u003cp\u003eUnwraps a \u003ccode\u003eResumableSource\u003c/code\u003e into a \u003ccode\u003eSource\u003c/code\u003e and a finalizer.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eResumableSource\u003c/code\u003e represents a \u003ccode\u003eSource\u003c/code\u003e which has already been run, and\n therefore has a finalizer registered. As a result, if we want to turn it\n into a regular \u003ccode\u003eSource\u003c/code\u003e, we need to ensure that the finalizer will be run\n appropriately. By appropriately, I mean:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If a new finalizer is registered, the old one should not be called.\n\u003c/li\u003e\u003cli\u003e If the old one is called, it should not be called again.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis function returns both a \u003ccode\u003eSource\u003c/code\u003e and a finalizer which ensures that the\n above two conditions hold. Once you call that finalizer, the \u003ccode\u003eSource\u003c/code\u003e is\n invalidated and cannot be used.\n\u003c/p\u003e\u003cp\u003eSince 0.5.2\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "ResumableSource m o -\u003e m (Source m o, m ())",
        "fct-source": "src/Data-Conduit-Internal.html#unwrapResumable",
        "fct-type": "function",
        "title": "unwrapResumable"
      },
      "index": {
        "description": "Unwraps ResumableSource into Source and finalizer ResumableSource represents Source which has already been run and therefore has finalizer registered As result if we want to turn it into regular Source we need to ensure that the finalizer will be run appropriately By appropriately mean If new finalizer is registered the old one should not be called If the old one is called it should not be called again This function returns both Source and finalizer which ensures that the above two conditions hold Once you call that finalizer the Source is invalidated and cannot be used Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "unwrapResumable",
        "normalized": "ResumableSource a b-\u003ea(Source a b,a())",
        "package": "conduit",
        "partial": "Resumable",
        "signature": "ResumableSource m o-\u003em(Source m o,m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eSend a value downstream to the next component to consume. If the\n downstream component terminates, this call will never return control. If you\n would like to register a cleanup function, please use \u003ccode\u003e\u003ca\u003eyieldOr\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "o-\u003e ConduitM i o m ()",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Send value downstream to the next component to consume If the downstream component terminates this call will never return control If you would like to register cleanup function please use yieldOr instead Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "yield",
        "normalized": "a-\u003eConduitM b a c()",
        "package": "conduit",
        "partial": "",
        "signature": "o-\u003eConduitM i o m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/conduit/docs/Data-Conduit.html#v:yieldOr",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e, but additionally takes a finalizer to be run if the\n downstream component terminates.\n\u003c/p\u003e\u003cp\u003eSince 0.5.0\n\u003c/p\u003e",
        "fct-module": "Data.Conduit",
        "fct-package": "conduit",
        "fct-signature": "o-\u003e m ()-\u003e ConduitM i o m ()",
        "fct-type": "function",
        "title": "yieldOr"
      },
      "index": {
        "description": "Similar to yield but additionally takes finalizer to be run if the downstream component terminates Since",
        "hierarchy": "Data Conduit",
        "module": "Data.Conduit",
        "name": "yieldOr",
        "normalized": "a-\u003eb()-\u003eConduitM c a b()",
        "package": "conduit",
        "partial": "Or",
        "signature": "o-\u003em()-\u003eConduitM i o m()"
      }
    }
  }
]