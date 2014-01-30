[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eByte-oriented alternatives to \u003ca\u003eData.Enumerator.List\u003c/a\u003e. Note that the\n enumeratees in this module must unpack their inputs to work properly. If\n you do not need to handle leftover input on a byte-by-byte basis, the\n chunk-oriented versions will be much faster.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator.Binary as EB\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Enumerator-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "Byte-oriented alternatives to Data.Enumerator.List Note that the enumeratees in this module must unpack their inputs to work properly If you do not need to handle leftover input on byte-by-byte basis the chunk-oriented versions will be much faster This module is intended to be imported qualified import qualified Data.Enumerator.Binary as EB Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "enumerator",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte\n and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e ByteString) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "concatMap applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "concatMap",
        "normalized": "(Word-\u003eByteString)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(Word-\u003eByteString)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Word8 -\u003e (s, ByteString)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#concatMapAccum",
        "fct-type": "function",
        "title": "concatMapAccum"
      },
      "index": {
        "description": "Similar to concatMap but with stateful step function Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "concatMapAccum",
        "normalized": "(a-\u003eWord-\u003e(a,ByteString))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
        "package": "enumerator",
        "partial": "Map Accum",
        "signature": "(s-\u003eWord-\u003e(s,ByteString))-\u003es-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Word8 -\u003e m (s, ByteString)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#concatMapAccumM",
        "fct-type": "function",
        "title": "concatMapAccumM"
      },
      "index": {
        "description": "Similar to concatMapM but with stateful step function Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "concatMapAccumM",
        "normalized": "(a-\u003eWord-\u003eb(a,ByteString))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
        "package": "enumerator",
        "partial": "Map Accum",
        "signature": "(s-\u003eWord-\u003em(s,ByteString))-\u003es-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte and feeds the\n resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e m ByteString) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#concatMapM",
        "fct-type": "function",
        "title": "concatMapM"
      },
      "index": {
        "description": "concatMapM applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "concatMapM",
        "normalized": "(Word-\u003ea ByteString)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(Word-\u003em ByteString)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:consume",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m ByteString",
        "fct-source": "src/Data-Enumerator-Binary.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "consume takeWhile const True Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "consume",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e ignores \u003cem\u003en\u003c/em\u003e bytes of input from the stream.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Data-Enumerator-Binary.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop ignores bytes of input from the stream Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "drop",
        "normalized": "Integer-\u003eIteratee ByteString a()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e ignores input from the stream\n until the first byte which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Data-Enumerator-Binary.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile ignores input from the stream until the first byte which does not match the predicate Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "dropWhile",
        "normalized": "(Word-\u003eBool)-\u003eIteratee ByteString a()",
        "package": "enumerator",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumFile",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a file path in binary mode, and passes the handle to\n \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e. The file will be closed when enumeration finishes.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "FilePath -\u003e Enumerator ByteString IO b",
        "fct-source": "src/Data-Enumerator-Binary.html#enumFile",
        "fct-type": "function",
        "title": "enumFile"
      },
      "index": {
        "description": "Opens file path in binary mode and passes the handle to enumHandle The file will be closed when enumeration finishes Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "enumFile",
        "normalized": "FilePath-\u003eEnumerator ByteString IO a",
        "package": "enumerator",
        "partial": "File",
        "signature": "FilePath-\u003eEnumerator ByteString IO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumFileRange",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a file path in binary mode, and passes the handle to\n \u003ccode\u003e\u003ca\u003eenumHandleRange\u003c/a\u003e\u003c/code\u003e. The file will be closed when enumeration finishes.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "FilePath-\u003e Maybe Integer-\u003e Maybe Integer-\u003e Enumerator ByteString IO b",
        "fct-type": "function",
        "title": "enumFileRange"
      },
      "index": {
        "description": "Opens file path in binary mode and passes the handle to enumHandleRange The file will be closed when enumeration finishes Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "enumFileRange",
        "normalized": "FilePath-\u003eMaybe Integer-\u003eMaybe Integer-\u003eEnumerator ByteString IO a",
        "package": "enumerator",
        "partial": "File Range",
        "signature": "FilePath-\u003eMaybe Integer-\u003eMaybe Integer-\u003eEnumerator ByteString IO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumHandle",
      "description": {
        "fct-descr": "\u003cp\u003eRead bytes (in chunks of the given buffer size) from the handle, and\n stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. If an exception occurs during file IO,\n enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be returned. Exceptions from the\n iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThis enumerator blocks until at least one byte is available from the\n handle, and might read less than the maximum buffer size in some\n cases.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with no encoding, and in \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer-\u003e Handle-\u003e Enumerator ByteString m b",
        "fct-type": "function",
        "title": "enumHandle"
      },
      "index": {
        "description": "Read bytes in chunks of the given buffer size from the handle and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught This enumerator blocks until at least one byte is available from the handle and might read less than the maximum buffer size in some cases The handle should be opened with no encoding and in ReadMode or ReadWriteMode Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "enumHandle",
        "normalized": "Integer-\u003eHandle-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "Handle",
        "signature": "Integer-\u003eHandle-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumHandleRange",
      "description": {
        "fct-descr": "\u003cp\u003eRead bytes (in chunks of the given buffer size) from the handle, and\n stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. If an exception occurs during file IO,\n enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be returned. Exceptions from the\n iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThis enumerator blocks until at least one byte is available from the\n handle, and might read less than the maximum buffer size in some\n cases.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with no encoding, and in \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an offset is specified, the handle will be seeked to that offset\n before reading. If the handle cannot be seeked, an error will be\n thrown.\n\u003c/p\u003e\u003cp\u003eIf a maximum count is specified, the number of bytes read will not\n exceed that count.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer-\u003e Maybe Integer-\u003e Maybe Integer-\u003e Handle-\u003e Enumerator ByteString m b",
        "fct-type": "function",
        "title": "enumHandleRange"
      },
      "index": {
        "description": "Read bytes in chunks of the given buffer size from the handle and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught This enumerator blocks until at least one byte is available from the handle and might read less than the maximum buffer size in some cases The handle should be opened with no encoding and in ReadMode or ReadWriteMode If an offset is specified the handle will be seeked to that offset before reading If the handle cannot be seeked an error will be thrown If maximum count is specified the number of bytes read will not exceed that count Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "enumHandleRange",
        "normalized": "Integer-\u003eMaybe Integer-\u003eMaybe Integer-\u003eHandle-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "Handle Range",
        "signature": "Integer-\u003eMaybe Integer-\u003eMaybe Integer-\u003eHandle-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a predicate to the stream. The inner iteratee only receives\n characters for which the predicate is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Applies predicate to the stream The inner iteratee only receives characters for which the predicate is True Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "filter",
        "normalized": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:filterM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic predicate to the stream. The inner iteratee only\n receives bytes for which the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e m Bool) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "Applies monadic predicate to the stream The inner iteratee only receives bytes for which the predicate returns True Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "filterM",
        "normalized": "(Word-\u003ea Bool)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003em Bool)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the entire input stream with a strict left fold, one byte\n at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e Word8 -\u003e b) -\u003e b -\u003e Iteratee ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Consume the entire input stream with strict left fold one byte at time Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "fold",
        "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eIteratee ByteString b a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003eWord-\u003eb)-\u003eb-\u003eIteratee ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the entire input stream with a strict monadic left fold, one\n byte at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e Word8 -\u003e m b) -\u003e b -\u003e Iteratee ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "Consume the entire input stream with strict monadic left fold one byte at time Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "foldM",
        "normalized": "(a-\u003eWord-\u003eb a)-\u003ea-\u003eIteratee ByteString b a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003eWord-\u003em b)-\u003eb-\u003eIteratee ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:generateM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e, except the computation may terminate the stream by\n returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "m (Maybe Word8) -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#generateM",
        "fct-type": "function",
        "title": "generateM"
      },
      "index": {
        "description": "Like repeatM except the computation may terminate the stream by returning Nothing Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "generateM",
        "normalized": "a(Maybe Word)-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "m(Maybe Word)-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next byte from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m (Maybe Word8)",
        "fct-source": "src/Data-Enumerator-Binary.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Get the next byte from the stream or Nothing if the stream has ended Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "head",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:head_",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next element from the stream, or raise an error if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m Word8",
        "fct-source": "src/Data-Enumerator-Binary.html#head_",
        "fct-type": "function",
        "title": "head_"
      },
      "index": {
        "description": "Get the next element from the stream or raise an error if the stream has ended Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "head_",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e reads at most \u003cem\u003en\u003c/em\u003e bytes from the stream, and passes them\n to its iteratee. If the iteratee finishes early, bytes continue to be\n consumed from the outer stream until \u003cem\u003en\u003c/em\u003e have been consumed.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "isolate reads at most bytes from the stream and passes them to its iteratee If the iteratee finishes early bytes continue to be consumed from the outer stream until have been consumed Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "isolate",
        "normalized": "Integer-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:isolateWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolateWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e reads bytes from the stream until \u003cem\u003ep\u003c/em\u003e is false, and\n passes them to its iteratee. If the iteratee finishes early, bytes\n continue to be consumed from the outer stream until \u003cem\u003ep\u003c/em\u003e is false.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#isolateWhile",
        "fct-type": "function",
        "title": "isolateWhile"
      },
      "index": {
        "description": "isolateWhile reads bytes from the stream until is false and passes them to its iteratee If the iteratee finishes early bytes continue to be consumed from the outer stream until is false Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "isolateWhile",
        "normalized": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:iterHandle",
      "description": {
        "fct-descr": "\u003cp\u003eRead bytes from a stream and write them to a handle. If an exception\n occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be\n returned.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with no encoding, and in \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Handle -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Data-Enumerator-Binary.html#iterHandle",
        "fct-type": "function",
        "title": "iterHandle"
      },
      "index": {
        "description": "Read bytes from stream and write them to handle If an exception occurs during file IO enumeration will stop and Error will be returned The handle should be opened with no encoding and in WriteMode or ReadWriteMode Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "iterHandle",
        "normalized": "Handle-\u003eIteratee ByteString a()",
        "package": "enumerator",
        "partial": "Handle",
        "signature": "Handle-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e enumerates an infinite stream of\n repeated applications of \u003cem\u003ef\u003c/em\u003e to \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Word8) -\u003e Word8 -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "iterate enumerates an infinite stream of repeated applications of to Analogous to iterate Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "iterate",
        "normalized": "(Word-\u003eWord)-\u003eWord-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003eWord)-\u003eWord-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:iterateM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, except the iteration\n function is monadic.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e m Word8) -\u003e Word8 -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#iterateM",
        "fct-type": "function",
        "title": "iterateM"
      },
      "index": {
        "description": "Similar to iterate except the iteration function is monadic Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "iterateM",
        "normalized": "(Word-\u003ea Word)-\u003eWord-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003em Word)-\u003eWord-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Word8) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "map",
        "normalized": "(Word-\u003eWord)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003eWord)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Word8 -\u003e (s, Word8)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Similar to map but with stateful step function Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "mapAccum",
        "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
        "package": "enumerator",
        "partial": "Accum",
        "signature": "(s-\u003eWord-\u003e(s,Word))-\u003es-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Word8 -\u003e m (s, Word8)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#mapAccumM",
        "fct-type": "function",
        "title": "mapAccumM"
      },
      "index": {
        "description": "Similar to mapM but with stateful step function Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "mapAccumM",
        "normalized": "(a-\u003eWord-\u003eb(a,Word))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
        "package": "enumerator",
        "partial": "Accum",
        "signature": "(s-\u003eWord-\u003em(s,Word))-\u003es-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e m Word8) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "mapM applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "mapM",
        "normalized": "(Word-\u003ea Word)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003em Word)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte, and\n discards the results.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e m ()) -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Data-Enumerator-Binary.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "mapM applies to each input byte and discards the results Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "mapM_",
        "normalized": "(Word-\u003ea())-\u003eIteratee ByteString a()",
        "package": "enumerator",
        "partial": "",
        "signature": "(Word-\u003em())-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates an infinite stream of a single byte.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Word8 -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Enumerates an infinite stream of single byte Analogous to repeat Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "repeat",
        "normalized": "Word-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Word-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:repeatM",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates an infinite stream of byte. Each byte is computed by the\n underlying monad.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "m Word8 -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#repeatM",
        "fct-type": "function",
        "title": "repeatM"
      },
      "index": {
        "description": "Enumerates an infinite stream of byte Each byte is computed by the underlying monad Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "repeatM",
        "normalized": "a Word-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "m Word-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e enumerates a stream containing\n \u003cem\u003en\u003c/em\u003e copies of \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Word8 -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "replicate enumerates stream containing copies of Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "replicate",
        "normalized": "Integer-\u003eWord-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eWord-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n m_x\u003c/code\u003e enumerates a stream of \u003cem\u003en\u003c/em\u003e bytes, with each byte\n computed by \u003cem\u003em_x\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e m Word8 -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "replicateM enumerates stream of bytes with each byte computed by Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "replicateM",
        "normalized": "Integer-\u003ea Word-\u003eEnumerator ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003em Word-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:require",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erequire\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e buffers input until at least \u003cem\u003en\u003c/em\u003e bytes are available, or\n throws an error if the stream ends early.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee ByteString m ()",
        "fct-source": "src/Data-Enumerator-Binary.html#require",
        "fct-type": "function",
        "title": "require"
      },
      "index": {
        "description": "require buffers input until at least bytes are available or throws an error if the stream ends early Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "require",
        "normalized": "Integer-\u003eIteratee ByteString a()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:splitWhen",
      "description": {
        "fct-descr": "\u003cp\u003eSplit on bytes satisfying a given predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Enumeratee ByteString ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#splitWhen",
        "fct-type": "function",
        "title": "splitWhen"
      },
      "index": {
        "description": "Split on bytes satisfying given predicate Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "splitWhen",
        "normalized": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString a b",
        "package": "enumerator",
        "partial": "When",
        "signature": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e extracts the next \u003cem\u003en\u003c/em\u003e bytes from the\n stream, as a lazy\n ByteString.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee ByteString m ByteString",
        "fct-source": "src/Data-Enumerator-Binary.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take extracts the next bytes from the stream as lazy ByteString Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "take",
        "normalized": "Integer-\u003eIteratee ByteString a ByteString",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e extracts input from the stream until the first byte which\n does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Iteratee ByteString m ByteString",
        "fct-source": "src/Data-Enumerator-Binary.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile extracts input from the stream until the first byte which does not match the predicate Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "takeWhile",
        "normalized": "(Word-\u003eBool)-\u003eIteratee ByteString a ByteString",
        "package": "enumerator",
        "partial": "While",
        "signature": "(Word-\u003eBool)-\u003eIteratee ByteString m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates a stream of bytes by repeatedly applying a function to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Maybe (Word8, s)) -\u003e s -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "Enumerates stream of bytes by repeatedly applying function to some state Similar to iterate Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "unfold",
        "normalized": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eEnumerator ByteString b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(s-\u003eMaybe(Word,s))-\u003es-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:unfoldM",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates a stream of bytes by repeatedly applying a computation to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e m (Maybe (Word8, s))) -\u003e s -\u003e Enumerator ByteString m b",
        "fct-source": "src/Data-Enumerator-Binary.html#unfoldM",
        "fct-type": "function",
        "title": "unfoldM"
      },
      "index": {
        "description": "Enumerates stream of bytes by repeatedly applying computation to some state Similar to iterateM Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "unfoldM",
        "normalized": "(a-\u003eb(Maybe(Word,a)))-\u003ea-\u003eEnumerator ByteString b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(s-\u003em(Maybe(Word,s)))-\u003es-\u003eEnumerator ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m (b1, b2)",
        "fct-source": "src/Data-Enumerator-Binary.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Analogous to zip Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zip",
        "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through three iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m (b1, b2, b3)",
        "fct-source": "src/Data-Enumerator-Binary.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "Pass input from stream through three iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip3 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zip3",
        "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip4",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through four iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m (b1, b2, b3, b4)",
        "fct-source": "src/Data-Enumerator-Binary.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "Pass input from stream through four iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip4 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zip4",
        "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip5",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through five iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m (b1, b2, b3, b4, b5)",
        "fct-source": "src/Data-Enumerator-Binary.html#zip5",
        "fct-type": "function",
        "title": "zip5"
      },
      "index": {
        "description": "Pass input from stream through five iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip5 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zip5",
        "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip6",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through six iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m (b1, b2, b3, b4, b5, b6)",
        "fct-source": "src/Data-Enumerator-Binary.html#zip6",
        "fct-type": "function",
        "title": "zip6"
      },
      "index": {
        "description": "Pass input from stream through six iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip6 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zip6",
        "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip7",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through seven iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m b7 -\u003e Iteratee ByteString m (b1, b2, b3, b4, b5, b6, b7)",
        "fct-source": "src/Data-Enumerator-Binary.html#zip7",
        "fct-type": "function",
        "title": "zip7"
      },
      "index": {
        "description": "Pass input from stream through seven iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip7 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zip7",
        "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m c",
        "fct-source": "src/Data-Enumerator-Binary.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zipWith",
        "normalized": "(a-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m c",
        "fct-source": "src/Data-Enumerator-Binary.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith3 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zipWith3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m c",
        "fct-source": "src/Data-Enumerator-Binary.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith4 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zipWith4",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m c",
        "fct-source": "src/Data-Enumerator-Binary.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith5 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zipWith5",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m c",
        "fct-source": "src/Data-Enumerator-Binary.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith6 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zipWith6",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Binary",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e b7 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m b7 -\u003e Iteratee ByteString m c",
        "fct-source": "src/Data-Enumerator-Binary.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith7 Since",
        "hierarchy": "Data Enumerator Binary",
        "module": "Data.Enumerator.Binary",
        "name": "zipWith7",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore enumerator types, and some useful primitives.\n\u003c/p\u003e\u003cp\u003eBe careful when using the functions defined in this module, as they will\n allow you to create iteratees which violate the monad laws.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Enumerator-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Core enumerator types and some useful primitives Be careful when using the functions defined in this module as they will allow you to create iteratees which violate the monad laws",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "enumerator",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Enumeratee",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeratee acts as a stream adapter; place one between an enumerator\n and an iteratee, and it changes the type or contents of the input stream.\n\u003c/p\u003e\u003cp\u003eMost users will want to combine enumerators, enumeratees, and iteratees\n using the stream combinators \u003ccode\u003ejoinI\u003c/code\u003e and \u003ccode\u003ejoinE\u003c/code\u003e, or their operator aliases\n \u003ccode\u003e(=$)\u003c/code\u003e and \u003ccode\u003e($=)\u003c/code\u003e. These combinators are used to manage how left-over input\n is passed between elements of the data processing pipeline.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "type",
        "fct-source": "src/Data-Enumerator-Internal.html#Enumeratee",
        "fct-type": "type",
        "title": "Enumeratee"
      },
      "index": {
        "description": "An enumeratee acts as stream adapter place one between an enumerator and an iteratee and it changes the type or contents of the input stream Most users will want to combine enumerators enumeratees and iteratees using the stream combinators joinI and joinE or their operator aliases and These combinators are used to manage how left-over input is passed between elements of the data processing pipeline",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Enumeratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Enumeratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Enumerator",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerators are sources of data, to be consumed by iteratees.\n Enumerators typically read from an external source (parser, handle,\n random generator, etc), then feed chunks into an tteratee until:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input source runs out of data.\n\u003c/li\u003e\u003cli\u003e The iteratee yields a result value.\n\u003c/li\u003e\u003cli\u003e The iteratee throws an exception.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "type",
        "fct-source": "src/Data-Enumerator-Internal.html#Enumerator",
        "fct-type": "type",
        "title": "Enumerator"
      },
      "index": {
        "description": "Enumerators are sources of data to be consumed by iteratees Enumerators typically read from an external source parser handle random generator etc then feed chunks into an tteratee until The input source runs out of data The iteratee yields result value The iteratee throws an exception",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Enumerator",
        "normalized": "",
        "package": "enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Iteratee",
      "description": {
        "fct-descr": "\u003cp\u003eThe primary data type for this library; an iteratee consumes\n chunks of input from a stream until it either yields a value or\n encounters an error.\n\u003c/p\u003e\u003cp\u003eCompatibility note: \u003ccode\u003eIteratee\u003c/code\u003e will become abstract in \u003ccode\u003eenumerator_0.5\u003c/code\u003e. If\n you depend on internal implementation details, please import\n \u003ccode\u003e\u003ca\u003eData.Enumerator.Internal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Enumerator-Internal.html#Iteratee",
        "fct-type": "newtype",
        "title": "Iteratee"
      },
      "index": {
        "description": "The primary data type for this library an iteratee consumes chunks of input from stream until it either yields value or encounters an error Compatibility note Iteratee will become abstract in enumerator If you depend on internal implementation details please import Data.Enumerator.Internal",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Iteratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Step",
      "description": {
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "data",
        "fct-source": "src/Data-Enumerator-Internal.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Step",
        "normalized": "",
        "package": "enumerator",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Stream",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e is a sequence of chunks generated by an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003eChunks\u003c/a\u003e\u003c/code\u003e [])\u003c/code\u003e is used to indicate that a stream is still active, but\n currently has no available data. Iteratees should ignore empty chunks.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "data",
        "fct-source": "src/Data-Enumerator-Internal.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "Stream is sequence of chunks generated by an Enumerator Chunks is used to indicate that stream is still active but currently has no available data Iteratees should ignore empty chunks",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Stream",
        "normalized": "",
        "package": "enumerator",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e) = (\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eThis is somewhat easier to read when constructing an iteratee from many\n processing stages. You can treat it like \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and read the data flow\n from left to right.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "This is somewhat easier to read when constructing an iteratee from many processing stages You can treat it like and read the data flow from left to right Since",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "($$) $$",
        "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-60--61--61--60-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003c==\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Enumerator a m b -\u003e Step a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3C%3D%3D%3C",
        "fct-type": "function",
        "title": "(\u003c==\u003c)"
      },
      "index": {
        "description": "flip Since",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "(\u003c==\u003c) \u003c==\u003c",
        "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eEnumerator a b c-\u003eStep a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eEnumerator a m b-\u003eStep a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-61--61--60--60-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3D%3D%3C%3C",
        "fct-type": "function",
        "title": "(==\u003c\u003c)"
      },
      "index": {
        "description": "flip",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "(==\u003c\u003c) ==\u003c\u003c",
        "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-62--61--61--62-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e) enum1 enum2 step = enum1 step \u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e enum2\u003c/pre\u003e\u003cp\u003eThe moral equivalent of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for iteratees.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Enumerator a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Step a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3E%3D%3D%3E",
        "fct-type": "function",
        "title": "(\u003e==\u003e)"
      },
      "index": {
        "description": "enum1 enum2 step enum1 step enum2 The moral equivalent of for iteratees Since",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "(\u003e==\u003e) \u003e==\u003e",
        "normalized": "Enumerator a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eStep a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "Enumerator a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eStep a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-62--62--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eThe most primitive stream operator. \u003ccode\u003eiter \u003e\u003e== enum\u003c/code\u003e returns a new\n iteratee which will read from \u003ccode\u003eenum\u003c/code\u003e before continuing.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3E%3E%3D%3D",
        "fct-type": "function",
        "title": "(\u003e\u003e==)"
      },
      "index": {
        "description": "The most primitive stream operator iter enum returns new iteratee which will read from enum before continuing",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "(\u003e\u003e==) \u003e\u003e==",
        "normalized": "Iteratee a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Chunks",
      "description": {
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Chunks [a]",
        "fct-source": "src/Data-Enumerator-Internal.html#Stream",
        "fct-type": "function",
        "title": "Chunks"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Chunks",
        "normalized": "Chunks[a]",
        "package": "enumerator",
        "partial": "Chunks",
        "signature": "Chunks[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Continue",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e is capable of accepting more input. Note that more input\n is not necessarily required; the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e might be able to generate a\n value immediately if it receives \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Continue (Stream a -\u003e Iteratee a m b)",
        "fct-source": "src/Data-Enumerator-Internal.html#Step",
        "fct-type": "function",
        "title": "Continue"
      },
      "index": {
        "description": "The Iteratee is capable of accepting more input Note that more input is not necessarily required the Iteratee might be able to generate value immediately if it receives EOF",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Continue",
        "normalized": "Continue(Stream a-\u003eIteratee a b c)",
        "package": "enumerator",
        "partial": "Continue",
        "signature": "Continue(Stream a-\u003eIteratee a m b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:EOF",
      "description": {
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "EOF",
        "fct-source": "src/Data-Enumerator-Internal.html#Stream",
        "fct-type": "function",
        "title": "EOF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "EOF",
        "normalized": "",
        "package": "enumerator",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Error",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e encountered an error which prevents it from proceeding\n further.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Error SomeException",
        "fct-source": "src/Data-Enumerator-Internal.html#Step",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "The Iteratee encountered an error which prevents it from proceeding further",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Error",
        "normalized": "",
        "package": "enumerator",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Iteratee",
      "description": {
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee",
        "fct-source": "src/Data-Enumerator-Internal.html#Iteratee",
        "fct-type": "function",
        "title": "Iteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Iteratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Yield",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e cannot receive any more input, and has generated a\n result. Included in this value is left-over input, which can be passed to\n composed \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Yield b (Stream a)",
        "fct-source": "src/Data-Enumerator-Internal.html#Step",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "The Iteratee cannot receive any more input and has generated result Included in this value is left-over input which can be passed to composed Iteratee",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "Yield",
        "normalized": "",
        "package": "enumerator",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkContinue0",
      "description": {
        "fct-descr": "\u003cp\u003eA common pattern in \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e implementations is to check whether\n the inner \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e has finished, and if so, to return its output.\n \u003ccode\u003e\u003ca\u003echeckContinue0\u003c/a\u003e\u003c/code\u003e passes its parameter a continuation if the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e\n can still consume input; if not, it returns the iteratee's step.\n\u003c/p\u003e\u003cp\u003eThe type signature here is a bit crazy, but it's actually very easy to\n use. Take this code:\n\u003c/p\u003e\u003cpre\u003e repeat :: Monad m =\u003e a -\u003e Enumerator a m b\n repeat x = loop where\n \tloop (Continue k) = k (Chunks [x]) \u003e\u003e== loop\n \tloop step = returnI step\n\u003c/pre\u003e\u003cp\u003eAnd rewrite it without the boilerplate:\n\u003c/p\u003e\u003cpre\u003e repeat :: Monad m =\u003e a -\u003e Enumerator a m b\n repeat x = checkContinue0 $ \\loop k -\u003e k (Chunks [x] \u003e\u003e== loop\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "(Enumerator a m b -\u003e (Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b) -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#checkContinue0",
        "fct-type": "function",
        "title": "checkContinue0"
      },
      "index": {
        "description": "common pattern in Enumerator implementations is to check whether the inner Iteratee has finished and if so to return its output checkContinue0 passes its parameter continuation if the Iteratee can still consume input if not it returns the iteratee step The type signature here is bit crazy but it actually very easy to use Take this code repeat Monad Enumerator repeat loop where loop Continue Chunks loop loop step returnI step And rewrite it without the boilerplate repeat Monad Enumerator repeat checkContinue0 loop Chunks loop Since",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "checkContinue0",
        "normalized": "(Enumerator a b c-\u003e(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c)-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "Continue",
        "signature": "(Enumerator a m b-\u003e(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b)-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkContinue1",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echeckContinue0\u003c/a\u003e\u003c/code\u003e, but allows each loop step to use a state value:\n\u003c/p\u003e\u003cpre\u003e iterate :: Monad m =\u003e (a -\u003e a) -\u003e a -\u003e Enumerator a m b\n iterate f = checkContinue1 $ \\loop a k -\u003e k (Chunks [a]) \u003e\u003e== loop (f a)\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "((s1 -\u003e Enumerator a m b) -\u003e s1 -\u003e (Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b) -\u003e s1 -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#checkContinue1",
        "fct-type": "function",
        "title": "checkContinue1"
      },
      "index": {
        "description": "Like checkContinue0 but allows each loop step to use state value iterate Monad Enumerator iterate checkContinue1 loop Chunks loop Since",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "checkContinue1",
        "normalized": "((a-\u003eEnumerator b c d)-\u003ea-\u003e(Stream b-\u003eIteratee b c d)-\u003eIteratee b c d)-\u003ea-\u003eEnumerator b c d",
        "package": "enumerator",
        "partial": "Continue",
        "signature": "((s-\u003eEnumerator a m b)-\u003es-\u003e(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b)-\u003es-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkDone",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003echeckDone\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003echeckDoneEx\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eChunks\u003c/a\u003e\u003c/code\u003e [])\u003c/pre\u003e\u003cp\u003eUse this for enumeratees which do not have an input buffer.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "((Stream a -\u003e Iteratee a m b) -\u003e Iteratee a' m (Step a m b)) -\u003e Enumeratee a' a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#checkDone",
        "fct-type": "function",
        "title": "checkDone"
      },
      "index": {
        "description": "checkDone checkDoneEx Chunks Use this for enumeratees which do not have an input buffer",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "checkDone",
        "normalized": "((Stream a-\u003eIteratee a b c)-\u003eIteratee d b(Step a b c))-\u003eEnumeratee d a b c",
        "package": "enumerator",
        "partial": "Done",
        "signature": "((Stream a-\u003eIteratee a m b)-\u003eIteratee a' m(Step a m b))-\u003eEnumeratee a' a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkDoneEx",
      "description": {
        "fct-descr": "\u003cp\u003eA common pattern in \u003ccode\u003e\u003ca\u003eEnumeratee\u003c/a\u003e\u003c/code\u003e implementations is to check whether\n the inner \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e has finished, and if so, to return its output.\n \u003ccode\u003e\u003ca\u003echeckDone\u003c/a\u003e\u003c/code\u003e passes its parameter a continuation if the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e\n can still consume input, or yields otherwise.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.3\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Stream a' -\u003e ((Stream a -\u003e Iteratee a m b) -\u003e Iteratee a' m (Step a m b)) -\u003e Enumeratee a' a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#checkDoneEx",
        "fct-type": "function",
        "title": "checkDoneEx"
      },
      "index": {
        "description": "common pattern in Enumeratee implementations is to check whether the inner Iteratee has finished and if so to return its output checkDone passes its parameter continuation if the Iteratee can still consume input or yields otherwise Since",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "checkDoneEx",
        "normalized": "Stream a-\u003e((Stream b-\u003eIteratee b c d)-\u003eIteratee a c(Step b c d))-\u003eEnumeratee a b c d",
        "package": "enumerator",
        "partial": "Done Ex",
        "signature": "Stream a'-\u003e((Stream a-\u003eIteratee a m b)-\u003eIteratee a' m(Step a m b))-\u003eEnumeratee a' a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:continue",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e k = \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eContinue\u003c/a\u003e\u003c/code\u003e k)\u003c/pre\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "(Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "continue returnI Continue",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "continue",
        "normalized": "(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:enumEOF",
      "description": {
        "fct-descr": "\u003cp\u003eSends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e to its iteratee. Most clients should use \u003ccode\u003erun\u003c/code\u003e or \u003ccode\u003erun_\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#enumEOF",
        "fct-type": "function",
        "title": "enumEOF"
      },
      "index": {
        "description": "Sends EOF to its iteratee Most clients should use run or run instead",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "enumEOF",
        "normalized": "",
        "package": "enumerator",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:returnI",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e step = \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e (return step)\u003c/pre\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "Step a m b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#returnI",
        "fct-type": "function",
        "title": "returnI"
      },
      "index": {
        "description": "returnI step Iteratee return step",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "returnI",
        "normalized": "Step a b c-\u003eIteratee a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "Step a m b-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:runIteratee",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "m (Step a m b)",
        "fct-source": "src/Data-Enumerator-Internal.html#Iteratee",
        "fct-type": "function",
        "title": "runIteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "runIteratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:yield",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e x extra = \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e x extra)\u003c/pre\u003e\u003cp\u003eWARNING: due to the current encoding of iteratees in this library,\n careless use of the \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e primitive may violate the monad laws.\n To prevent this, always make sure that an iteratee never yields\n extra data unless it has received at least one input element.\n\u003c/p\u003e\u003cp\u003eMore strictly, iteratees may not yield data that they did not\n receive as input. Don't use \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e to &#8220;inject&#8221; elements\n into the stream.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Internal",
        "fct-package": "enumerator",
        "fct-signature": "b -\u003e Stream a -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Internal.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "yield extra returnI Yield extra WARNING due to the current encoding of iteratees in this library careless use of the yield primitive may violate the monad laws To prevent this always make sure that an iteratee never yields extra data unless it has received at least one input element More strictly iteratees may not yield data that they did not receive as input Don use yield to inject elements into the stream",
        "hierarchy": "Data Enumerator Internal",
        "module": "Data.Enumerator.Internal",
        "name": "yield",
        "normalized": "a-\u003eStream b-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "",
        "signature": "b-\u003eStream a-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator.List as EL\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Enumerator-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "This module is intended to be imported qualified import qualified Data.Enumerator.List as EL Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "List",
        "normalized": "",
        "package": "enumerator",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element\n and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e [ai]) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "concatMap applies to each input element and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "concatMap",
        "normalized": "(a-\u003e[b])-\u003eEnumeratee a b c d",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(ao-\u003e[ai])-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e ao -\u003e (s, [ai])) -\u003e s -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#concatMapAccum",
        "fct-type": "function",
        "title": "concatMapAccum"
      },
      "index": {
        "description": "Similar to concatMap but with stateful step function Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "concatMapAccum",
        "normalized": "(a-\u003eb-\u003e(a,[c]))-\u003ea-\u003eEnumeratee b c d e",
        "package": "enumerator",
        "partial": "Map Accum",
        "signature": "(s-\u003eao-\u003e(s,[ai]))-\u003es-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e ao -\u003e m (s, [ai])) -\u003e s -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#concatMapAccumM",
        "fct-type": "function",
        "title": "concatMapAccumM"
      },
      "index": {
        "description": "Similar to concatMapM but with stateful step function Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "concatMapAccumM",
        "normalized": "(a-\u003eb-\u003ec(a,[d]))-\u003ea-\u003eEnumeratee b d c e",
        "package": "enumerator",
        "partial": "Map Accum",
        "signature": "(s-\u003eao-\u003em(s,[ai]))-\u003es-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and feeds the\n resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e m [ai]) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#concatMapM",
        "fct-type": "function",
        "title": "concatMapM"
      },
      "index": {
        "description": "concatMapM applies to each input element and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "concatMapM",
        "normalized": "(a-\u003eb[c])-\u003eEnumeratee a c b d",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(ao-\u003em[ai])-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:consume",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m [a]",
        "fct-source": "src/Data-Enumerator-List.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "consume takeWhile const True Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "consume",
        "normalized": "Iteratee a b[a]",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e ignores \u003cem\u003en\u003c/em\u003e input elements from the stream.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee a m ()",
        "fct-source": "src/Data-Enumerator-List.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop ignores input elements from the stream Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "drop",
        "normalized": "Integer-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e ignores input from the stream\n until the first element which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Iteratee a m ()",
        "fct-source": "src/Data-Enumerator-List.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile ignores input from the stream until the first element which does not match the predicate Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a predicate to the stream. The inner iteratee only receives\n elements for which the predicate is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-List.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Applies predicate to the stream The inner iteratee only receives elements for which the predicate is True Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:filterM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic predicate to the stream. The inner iteratee only\n receives elements for which the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e m Bool) -\u003e Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-List.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "Applies monadic predicate to the stream The inner iteratee only receives elements for which the predicate returns True Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "filterM",
        "normalized": "(a-\u003eb Bool)-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the entire input stream with a strict left fold, one element\n at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-List.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Consume the entire input stream with strict left fold one element at time Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the entire input stream with a strict monadic left fold, one\n element at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-List.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "Consume the entire input stream with strict monadic left fold one element at time Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:generateM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e, except the computation may terminate the stream by\n returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "m (Maybe a) -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#generateM",
        "fct-type": "function",
        "title": "generateM"
      },
      "index": {
        "description": "Like repeatM except the computation may terminate the stream by returning Nothing Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "generateM",
        "normalized": "a(Maybe b)-\u003eEnumerator b a c",
        "package": "enumerator",
        "partial": "",
        "signature": "m(Maybe a)-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next element from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m (Maybe a)",
        "fct-source": "src/Data-Enumerator-List.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Get the next element from the stream or Nothing if the stream has ended Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "head",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:head_",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next element from the stream, or raise an error if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m a",
        "fct-source": "src/Data-Enumerator-List.html#head_",
        "fct-type": "function",
        "title": "head_"
      },
      "index": {
        "description": "Get the next element from the stream or raise an error if the stream has ended Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "head_",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e reads at most \u003cem\u003en\u003c/em\u003e elements from the stream, and passes them\n to its iteratee. If the iteratee finishes early, elements continue to be\n consumed from the outer stream until \u003cem\u003en\u003c/em\u003e have been consumed.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-List.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "isolate reads at most elements from the stream and passes them to its iteratee If the iteratee finishes early elements continue to be consumed from the outer stream until have been consumed Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "isolate",
        "normalized": "Integer-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:isolateWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolateWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e reads elements from the stream until \u003cem\u003ep\u003c/em\u003e is false, and\n passes them to its iteratee. If the iteratee finishes early, elements\n continue to be consumed from the outer stream until \u003cem\u003ep\u003c/em\u003e is false.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-List.html#isolateWhile",
        "fct-type": "function",
        "title": "isolateWhile"
      },
      "index": {
        "description": "isolateWhile reads elements from the stream until is false and passes them to its iteratee If the iteratee finishes early elements continue to be consumed from the outer stream until is false Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "isolateWhile",
        "normalized": "(a-\u003eBool)-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e enumerates an infinite stream of\n repeated applications of \u003cem\u003ef\u003c/em\u003e to \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "iterate enumerates an infinite stream of repeated applications of to Analogous to iterate Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:iterateM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, except the iteration\n function is monadic.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#iterateM",
        "fct-type": "function",
        "title": "iterateM"
      },
      "index": {
        "description": "Similar to iterate except the iteration function is monadic Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "iterateM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e ai) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map applies to each input element and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
        "package": "enumerator",
        "partial": "",
        "signature": "(ao-\u003eai)-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e ao -\u003e (s, ai)) -\u003e s -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Similar to map but with stateful step function Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "mapAccum",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumeratee b c d e",
        "package": "enumerator",
        "partial": "Accum",
        "signature": "(s-\u003eao-\u003e(s,ai))-\u003es-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e ao -\u003e m (s, ai)) -\u003e s -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#mapAccumM",
        "fct-type": "function",
        "title": "mapAccumM"
      },
      "index": {
        "description": "Similar to mapM but with stateful step function Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "mapAccumM",
        "normalized": "(a-\u003eb-\u003ec(a,d))-\u003ea-\u003eEnumeratee b d c e",
        "package": "enumerator",
        "partial": "Accum",
        "signature": "(s-\u003eao-\u003em(s,ai))-\u003es-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e m ai) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-List.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "mapM applies to each input element and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eEnumeratee a c b d",
        "package": "enumerator",
        "partial": "",
        "signature": "(ao-\u003em ai)-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element, and\n discards the results.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e m b) -\u003e Iteratee a m ()",
        "fct-source": "src/Data-Enumerator-List.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "mapM applies to each input element and discards the results Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "mapM_",
        "normalized": "(a-\u003eb c)-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates an infinite stream of a single element.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Enumerates an infinite stream of single element Analogous to repeat Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "repeat",
        "normalized": "a-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "a-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:repeatM",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates an infinite stream of element. Each element is computed by\n the underlying monad.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "m a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#repeatM",
        "fct-type": "function",
        "title": "repeatM"
      },
      "index": {
        "description": "Enumerates an infinite stream of element Each element is computed by the underlying monad Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "repeatM",
        "normalized": "a b-\u003eEnumerator b a c",
        "package": "enumerator",
        "partial": "",
        "signature": "m a-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e enumerates a stream containing\n \u003cem\u003en\u003c/em\u003e copies of \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "replicate enumerates stream containing copies of Analogous to replicate Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "replicate",
        "normalized": "Integer-\u003ea-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003ea-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n m_x\u003c/code\u003e enumerates a stream of \u003cem\u003en\u003c/em\u003e elements, with each\n element computed by \u003cem\u003em_x\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e m a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "replicateM enumerates stream of elements with each element computed by Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "replicateM",
        "normalized": "Integer-\u003ea b-\u003eEnumerator b a c",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003em a-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:require",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erequire\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e buffers input until at least \u003cem\u003en\u003c/em\u003e elements are available, or\n throws an error if the stream ends early.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee a m ()",
        "fct-source": "src/Data-Enumerator-List.html#require",
        "fct-type": "function",
        "title": "require"
      },
      "index": {
        "description": "require buffers input until at least elements are available or throws an error if the stream ends early Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "require",
        "normalized": "Integer-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:splitWhen",
      "description": {
        "fct-descr": "\u003cp\u003eSplit on elements satisfying a given predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Enumeratee a [a] m b",
        "fct-source": "src/Data-Enumerator-List.html#splitWhen",
        "fct-type": "function",
        "title": "splitWhen"
      },
      "index": {
        "description": "Split on elements satisfying given predicate Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "splitWhen",
        "normalized": "(a-\u003eBool)-\u003eEnumeratee a[a]b c",
        "package": "enumerator",
        "partial": "When",
        "signature": "(a-\u003eBool)-\u003eEnumeratee a[a]m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e extracts the next \u003cem\u003en\u003c/em\u003e elements from the\n stream, as a list.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee a m [a]",
        "fct-source": "src/Data-Enumerator-List.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take extracts the next elements from the stream as list Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "take",
        "normalized": "Integer-\u003eIteratee a b[a]",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e extracts input from the stream until the first element\n which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Iteratee a m [a]",
        "fct-source": "src/Data-Enumerator-List.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile extracts input from the stream until the first element which does not match the predicate Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003eIteratee a b[a]",
        "package": "enumerator",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eIteratee a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates a stream of elements by repeatedly applying a function to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Maybe (a, s)) -\u003e s -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "Enumerates stream of elements by repeatedly applying function to some state Similar to iterate Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "unfold",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eEnumerator b c d",
        "package": "enumerator",
        "partial": "",
        "signature": "(s-\u003eMaybe(a,s))-\u003es-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:unfoldM",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates a stream of elements by repeatedly applying a computation to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e m (Maybe (a, s))) -\u003e s -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-List.html#unfoldM",
        "fct-type": "function",
        "title": "unfoldM"
      },
      "index": {
        "description": "Enumerates stream of elements by repeatedly applying computation to some state Similar to iterateM Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "unfoldM",
        "normalized": "(a-\u003eb(Maybe(c,a)))-\u003ea-\u003eEnumerator c b d",
        "package": "enumerator",
        "partial": "",
        "signature": "(s-\u003em(Maybe(a,s)))-\u003es-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:unique",
      "description": {
        "fct-descr": "\u003cp\u003eRemove duplicate elements from a stream, passing through the first\n instance of each value.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003enub\u003c/code\u003e, but more efficient because it uses a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e\n internally.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-List.html#unique",
        "fct-type": "function",
        "title": "unique"
      },
      "index": {
        "description": "Remove duplicate elements from stream passing through the first instance of each value Similar to nub but more efficient because it uses Set internally Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "unique",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m (b1, b2)",
        "fct-source": "src/Data-Enumerator-List.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Analogous to zip Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zip",
        "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through three iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m (b1, b2, b3)",
        "fct-source": "src/Data-Enumerator-List.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "Pass input from stream through three iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip3 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zip3",
        "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip4",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through four iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m (b1, b2, b3, b4)",
        "fct-source": "src/Data-Enumerator-List.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "Pass input from stream through four iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip4 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zip4",
        "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip5",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through five iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m (b1, b2, b3, b4, b5)",
        "fct-source": "src/Data-Enumerator-List.html#zip5",
        "fct-type": "function",
        "title": "zip5"
      },
      "index": {
        "description": "Pass input from stream through five iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip5 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zip5",
        "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c,c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip6",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through six iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m (b1, b2, b3, b4, b5, b6)",
        "fct-source": "src/Data-Enumerator-List.html#zip6",
        "fct-type": "function",
        "title": "zip6"
      },
      "index": {
        "description": "Pass input from stream through six iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip6 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zip6",
        "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c,c,c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip7",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through seven iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m b7 -\u003e Iteratee a m (b1, b2, b3, b4, b5, b6, b7)",
        "fct-source": "src/Data-Enumerator-List.html#zip7",
        "fct-type": "function",
        "title": "zip7"
      },
      "index": {
        "description": "Pass input from stream through seven iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip7 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zip7",
        "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c,c,c,c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m c",
        "fct-source": "src/Data-Enumerator-List.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zipWith",
        "normalized": "(a-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m c",
        "fct-source": "src/Data-Enumerator-List.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith3 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zipWith3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m c",
        "fct-source": "src/Data-Enumerator-List.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith4 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zipWith4",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m c",
        "fct-source": "src/Data-Enumerator-List.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith5 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zipWith5",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m c",
        "fct-source": "src/Data-Enumerator-List.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith6 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zipWith6",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.List",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e b7 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m b7 -\u003e Iteratee a m c",
        "fct-source": "src/Data-Enumerator-List.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith7 Since",
        "hierarchy": "Data Enumerator List",
        "module": "Data.Enumerator.List",
        "name": "zipWith7",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCharacter-oriented alternatives to \u003ca\u003eData.Enumerator.List\u003c/a\u003e. Note that the\n enumeratees in this module must unpack their inputs to work properly. If\n you do not need to handle leftover input on a char-by-char basis, the\n chunk-oriented versions will be much faster.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator.Text as ET\n\u003c/pre\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Enumerator-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Character-oriented alternatives to Data.Enumerator.List Note that the enumeratees in this module must unpack their inputs to work properly If you do not need to handle leftover input on char-by-char basis the chunk-oriented versions will be much faster This module is intended to be imported qualified import qualified Data.Enumerator.Text as ET Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "Text",
        "normalized": "",
        "package": "enumerator",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#t:Codec",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "data",
        "fct-source": "src/Data-Enumerator-Text.html#Codec",
        "fct-type": "data",
        "title": "Codec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "Codec",
        "normalized": "",
        "package": "enumerator",
        "partial": "Codec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:ascii",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#ascii",
        "fct-type": "function",
        "title": "ascii"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "ascii",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input\n character and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Text) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "concatMap applies to each input character and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "concatMap",
        "normalized": "(Char-\u003eText)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(Char-\u003eText)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Char -\u003e (s, Text)) -\u003e s -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#concatMapAccum",
        "fct-type": "function",
        "title": "concatMapAccum"
      },
      "index": {
        "description": "Similar to concatMap but with stateful step function Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "concatMapAccum",
        "normalized": "(a-\u003eChar-\u003e(a,Text))-\u003ea-\u003eEnumeratee Text Text b c",
        "package": "enumerator",
        "partial": "Map Accum",
        "signature": "(s-\u003eChar-\u003e(s,Text))-\u003es-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Char -\u003e m (s, Text)) -\u003e s -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#concatMapAccumM",
        "fct-type": "function",
        "title": "concatMapAccumM"
      },
      "index": {
        "description": "Similar to concatMapM but with stateful step function Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "concatMapAccumM",
        "normalized": "(a-\u003eChar-\u003eb(a,Text))-\u003ea-\u003eEnumeratee Text Text b c",
        "package": "enumerator",
        "partial": "Map Accum",
        "signature": "(s-\u003eChar-\u003em(s,Text))-\u003es-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character and feeds the\n resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e m Text) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#concatMapM",
        "fct-type": "function",
        "title": "concatMapM"
      },
      "index": {
        "description": "concatMapM applies to each input character and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "concatMapM",
        "normalized": "(Char-\u003ea Text)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(Char-\u003em Text)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:consume",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m Text",
        "fct-source": "src/Data-Enumerator-Text.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "consume takeWhile const True Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "consume",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert bytes into text, using the provided codec. If the codec is\n not capable of decoding an input byte sequence, an error will be thrown.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec -\u003e Enumeratee ByteString Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Convert bytes into text using the provided codec If the codec is not capable of decoding an input byte sequence an error will be thrown Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "decode",
        "normalized": "Codec-\u003eEnumeratee ByteString Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Codec-\u003eEnumeratee ByteString Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e ignores \u003cem\u003en\u003c/em\u003e characters of input from the stream.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee Text m ()",
        "fct-source": "src/Data-Enumerator-Text.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop ignores characters of input from the stream Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "drop",
        "normalized": "Integer-\u003eIteratee Text a()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e ignores input from the stream\n until the first character which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Bool) -\u003e Iteratee Text m ()",
        "fct-source": "src/Data-Enumerator-Text.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile ignores input from the stream until the first character which does not match the predicate Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "dropWhile",
        "normalized": "(Char-\u003eBool)-\u003eIteratee Text a()",
        "package": "enumerator",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eIteratee Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert text into bytes, using the provided codec. If the codec is\n not capable of representing an input character, an error will be thrown.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec -\u003e Enumeratee Text ByteString m b",
        "fct-source": "src/Data-Enumerator-Text.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Convert text into bytes using the provided codec If the codec is not capable of representing an input character an error will be thrown Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "encode",
        "normalized": "Codec-\u003eEnumeratee Text ByteString a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Codec-\u003eEnumeratee Text ByteString m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:enumFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead lines of text from a file, and stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n If an exception occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n will be returned. Exceptions from the iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThe file will be opened in text mode, and will be closed when the\n \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e\u003cp\u003eThis function may be significantly slower than using\n \u003ccode\u003eData.Enumerator.Binary.enumFile\u003c/code\u003e, due to the additional overhead of\n decoding input data to Unicode. Users who can depend on their input files\n being in a certain encoding (such as UTF8) are encouraged to use binary\n input and \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eChanged in 0.4.18: Lines streamed from \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFile\u003c/a\u003e\u003c/code\u003e now\n include their trailing newline.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "FilePath -\u003e Enumerator Text IO b",
        "fct-source": "src/Data-Enumerator-Text.html#enumFile",
        "fct-type": "function",
        "title": "enumFile"
      },
      "index": {
        "description": "Read lines of text from file and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught The file will be opened in text mode and will be closed when the Iteratee finishes This function may be significantly slower than using Data.Enumerator.Binary.enumFile due to the additional overhead of decoding input data to Unicode Users who can depend on their input files being in certain encoding such as UTF8 are encouraged to use binary input and decode Changed in Lines streamed from enumHandle and enumFile now include their trailing newline Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "enumFile",
        "normalized": "FilePath-\u003eEnumerator Text IO a",
        "package": "enumerator",
        "partial": "File",
        "signature": "FilePath-\u003eEnumerator Text IO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:enumHandle",
      "description": {
        "fct-descr": "\u003cp\u003eRead lines of text from a handle, and stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n If an exception occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n will be returned. Exceptions from the iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with an appropriate text encoding, and\n in \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function may be significantly slower than using\n \u003ccode\u003eData.Enumerator.Binary.enumHandle\u003c/code\u003e, due to the additional overhead of\n decoding input data to Unicode. Users who can depend on their input files\n being in a certain encoding (such as UTF8) are encouraged to use binary\n input and \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eChanged in 0.4.18: Lines streamed from \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFile\u003c/a\u003e\u003c/code\u003e now\n include their trailing newline.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Handle -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#enumHandle",
        "fct-type": "function",
        "title": "enumHandle"
      },
      "index": {
        "description": "Read lines of text from handle and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught The handle should be opened with an appropriate text encoding and in ReadMode or ReadWriteMode This function may be significantly slower than using Data.Enumerator.Binary.enumHandle due to the additional overhead of decoding input data to Unicode Users who can depend on their input files being in certain encoding such as UTF8 are encouraged to use binary input and decode Changed in Lines streamed from enumHandle and enumFile now include their trailing newline Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "enumHandle",
        "normalized": "Handle-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "Handle",
        "signature": "Handle-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a predicate to the stream. The inner iteratee only receives\n characters for which the predicate is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Bool) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Applies predicate to the stream The inner iteratee only receives characters for which the predicate is True Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "filter",
        "normalized": "(Char-\u003eBool)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:filterM",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a monadic predicate to the stream. The inner iteratee only\n receives characters for which the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e m Bool) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "Applies monadic predicate to the stream The inner iteratee only receives characters for which the predicate returns True Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "filterM",
        "normalized": "(Char-\u003ea Bool)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003em Bool)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the entire input stream with a strict left fold, one character\n at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e Char -\u003e b) -\u003e b -\u003e Iteratee Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Consume the entire input stream with strict left fold one character at time Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "fold",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eIteratee Text b a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003eChar-\u003eb)-\u003eb-\u003eIteratee Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:foldM",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the entire input stream with a strict monadic left fold, one\n character at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e Char -\u003e m b) -\u003e b -\u003e Iteratee Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "Consume the entire input stream with strict monadic left fold one character at time Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "foldM",
        "normalized": "(a-\u003eChar-\u003eb a)-\u003ea-\u003eIteratee Text b a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003eChar-\u003em b)-\u003eb-\u003eIteratee Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:generateM",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e, except the computation may terminate the stream by\n returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "m (Maybe Char) -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#generateM",
        "fct-type": "function",
        "title": "generateM"
      },
      "index": {
        "description": "Like repeatM except the computation may terminate the stream by returning Nothing Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "generateM",
        "normalized": "a(Maybe Char)-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "m(Maybe Char)-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next character from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m (Maybe Char)",
        "fct-source": "src/Data-Enumerator-Text.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Get the next character from the stream or Nothing if the stream has ended Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "head",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:head_",
      "description": {
        "fct-descr": "\u003cp\u003eGet the next element from the stream, or raise an error if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m Char",
        "fct-source": "src/Data-Enumerator-Text.html#head_",
        "fct-type": "function",
        "title": "head_"
      },
      "index": {
        "description": "Get the next element from the stream or raise an error if the stream has ended Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "head_",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iso8859_1",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#iso8859_1",
        "fct-type": "function",
        "title": "iso8859_1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "iso8859_1",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:isolate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e reads at most \u003cem\u003en\u003c/em\u003e characters from the stream, and passes\n them to its iteratee. If the iteratee finishes early, characters continue\n to be consumed from the outer stream until \u003cem\u003en\u003c/em\u003e have been consumed.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#isolate",
        "fct-type": "function",
        "title": "isolate"
      },
      "index": {
        "description": "isolate reads at most characters from the stream and passes them to its iteratee If the iteratee finishes early characters continue to be consumed from the outer stream until have been consumed Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "isolate",
        "normalized": "Integer-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:isolateWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolateWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e reads characters from the stream until \u003cem\u003ep\u003c/em\u003e is false, and\n passes them to its iteratee. If the iteratee finishes early, characters\n continue to be consumed from the outer stream until \u003cem\u003ep\u003c/em\u003e is false.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Bool) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#isolateWhile",
        "fct-type": "function",
        "title": "isolateWhile"
      },
      "index": {
        "description": "isolateWhile reads characters from the stream until is false and passes them to its iteratee If the iteratee finishes early characters continue to be consumed from the outer stream until is false Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "isolateWhile",
        "normalized": "(Char-\u003eBool)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iterHandle",
      "description": {
        "fct-descr": "\u003cp\u003eRead text from a stream and write it to a handle. If an exception\n occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be\n returned.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with an appropriate text encoding, and\n in \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Handle -\u003e Iteratee Text m ()",
        "fct-source": "src/Data-Enumerator-Text.html#iterHandle",
        "fct-type": "function",
        "title": "iterHandle"
      },
      "index": {
        "description": "Read text from stream and write it to handle If an exception occurs during file IO enumeration will stop and Error will be returned The handle should be opened with an appropriate text encoding and in WriteMode or ReadWriteMode Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "iterHandle",
        "normalized": "Handle-\u003eIteratee Text a()",
        "package": "enumerator",
        "partial": "Handle",
        "signature": "Handle-\u003eIteratee Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iterate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e enumerates an infinite stream of\n repeated applications of \u003cem\u003ef\u003c/em\u003e to \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Char) -\u003e Char -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "iterate enumerates an infinite stream of repeated applications of to Analogous to iterate Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "iterate",
        "normalized": "(Char-\u003eChar)-\u003eChar-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003eChar)-\u003eChar-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iterateM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, except the iteration\n function is monadic.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e m Char) -\u003e Char -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#iterateM",
        "fct-type": "function",
        "title": "iterateM"
      },
      "index": {
        "description": "Similar to iterate except the iteration function is monadic Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "iterateM",
        "normalized": "(Char-\u003ea Char)-\u003eChar-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003em Char)-\u003eChar-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:lines",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esplitWhen\u003c/a\u003e\u003c/code\u003e (== '\\n')\u003c/pre\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "lines splitWhen Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "lines",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Char) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map applies to each input character and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "map",
        "normalized": "(Char-\u003eChar)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003eChar)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Char -\u003e (s, Char)) -\u003e s -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Similar to map but with stateful step function Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "mapAccum",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eEnumeratee Text Text b c",
        "package": "enumerator",
        "partial": "Accum",
        "signature": "(s-\u003eChar-\u003e(s,Char))-\u003es-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Char -\u003e m (s, Char)) -\u003e s -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#mapAccumM",
        "fct-type": "function",
        "title": "mapAccumM"
      },
      "index": {
        "description": "Similar to mapM but with stateful step function Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "mapAccumM",
        "normalized": "(a-\u003eChar-\u003eb(a,Char))-\u003ea-\u003eEnumeratee Text Text b c",
        "package": "enumerator",
        "partial": "Accum",
        "signature": "(s-\u003eChar-\u003em(s,Char))-\u003es-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character\n and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e m Char) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "mapM applies to each input character and feeds the resulting outputs to the inner iteratee Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "mapM",
        "normalized": "(Char-\u003ea Char)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003em Char)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapM_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character,\n and discards the results.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e m ()) -\u003e Iteratee Text m ()",
        "fct-source": "src/Data-Enumerator-Text.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "mapM applies to each input character and discards the results Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "mapM_",
        "normalized": "(Char-\u003ea())-\u003eIteratee Text a()",
        "package": "enumerator",
        "partial": "",
        "signature": "(Char-\u003em())-\u003eIteratee Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:repeat",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates an infinite stream of a single character.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Char -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Enumerates an infinite stream of single character Analogous to repeat Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "repeat",
        "normalized": "Char-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Char-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:repeatM",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates an infinite stream of characters. Each character is computed\n by the underlying monad.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "m Char -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#repeatM",
        "fct-type": "function",
        "title": "repeatM"
      },
      "index": {
        "description": "Enumerates an infinite stream of characters Each character is computed by the underlying monad Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "repeatM",
        "normalized": "a Char-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "m Char-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e enumerates a stream containing\n \u003cem\u003en\u003c/em\u003e copies of \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Char -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "replicate enumerates stream containing copies of Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "replicate",
        "normalized": "Integer-\u003eChar-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eChar-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n m_x\u003c/code\u003e enumerates a stream of \u003cem\u003en\u003c/em\u003e characters, with each\n character computed by \u003cem\u003em_x\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e m Char -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "replicateM enumerates stream of characters with each character computed by Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "replicateM",
        "normalized": "Integer-\u003ea Char-\u003eEnumerator Text a b",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003em Char-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:require",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erequire\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e buffers input until at least \u003cem\u003en\u003c/em\u003e characters are available,\n or throws an error if the stream ends early.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee Text m ()",
        "fct-source": "src/Data-Enumerator-Text.html#require",
        "fct-type": "function",
        "title": "require"
      },
      "index": {
        "description": "require buffers input until at least characters are available or throws an error if the stream ends early Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "require",
        "normalized": "Integer-\u003eIteratee Text a()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee Text m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:splitWhen",
      "description": {
        "fct-descr": "\u003cp\u003eSplit on characters satisfying a given predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Bool) -\u003e Enumeratee Text Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#splitWhen",
        "fct-type": "function",
        "title": "splitWhen"
      },
      "index": {
        "description": "Split on characters satisfying given predicate Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "splitWhen",
        "normalized": "(Char-\u003eBool)-\u003eEnumeratee Text Text a b",
        "package": "enumerator",
        "partial": "When",
        "signature": "(Char-\u003eBool)-\u003eEnumeratee Text Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e extracts the next \u003cem\u003en\u003c/em\u003e characters from\n the stream, as a lazy Text.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee Text m Text",
        "fct-source": "src/Data-Enumerator-Text.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take extracts the next characters from the stream as lazy Text Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "take",
        "normalized": "Integer-\u003eIteratee Text a Text",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee Text m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e extracts input from the stream until the first character\n which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(Char -\u003e Bool) -\u003e Iteratee Text m Text",
        "fct-source": "src/Data-Enumerator-Text.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile extracts input from the stream until the first character which does not match the predicate Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "takeWhile",
        "normalized": "(Char-\u003eBool)-\u003eIteratee Text a Text",
        "package": "enumerator",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eIteratee Text m Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates a stream of characters by repeatedly applying a function to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e Maybe (Char, s)) -\u003e s -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#unfold",
        "fct-type": "function",
        "title": "unfold"
      },
      "index": {
        "description": "Enumerates stream of characters by repeatedly applying function to some state Similar to iterate Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "unfold",
        "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eEnumerator Text b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(s-\u003eMaybe(Char,s))-\u003es-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:unfoldM",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerates a stream of characters by repeatedly applying a computation\n to some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(s -\u003e m (Maybe (Char, s))) -\u003e s -\u003e Enumerator Text m b",
        "fct-source": "src/Data-Enumerator-Text.html#unfoldM",
        "fct-type": "function",
        "title": "unfoldM"
      },
      "index": {
        "description": "Enumerates stream of characters by repeatedly applying computation to some state Similar to iterateM Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "unfoldM",
        "normalized": "(a-\u003eb(Maybe(Char,a)))-\u003ea-\u003eEnumerator Text b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(s-\u003em(Maybe(Char,s)))-\u003es-\u003eEnumerator Text m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf16_be",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#utf16_be",
        "fct-type": "function",
        "title": "utf16_be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "utf16_be",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf16_le",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#utf16_le",
        "fct-type": "function",
        "title": "utf16_le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "utf16_le",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf32_be",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#utf32_be",
        "fct-type": "function",
        "title": "utf32_be"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "utf32_be",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf32_le",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#utf32_le",
        "fct-type": "function",
        "title": "utf32_le"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "utf32_le",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf8",
      "description": {
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Codec",
        "fct-source": "src/Data-Enumerator-Text.html#utf8",
        "fct-type": "function",
        "title": "utf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "utf8",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m (b1, b2)",
        "fct-source": "src/Data-Enumerator-Text.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Analogous to zip Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zip",
        "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip3",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through three iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m (b1, b2, b3)",
        "fct-source": "src/Data-Enumerator-Text.html#zip3",
        "fct-type": "function",
        "title": "zip3"
      },
      "index": {
        "description": "Pass input from stream through three iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip3 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zip3",
        "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip4",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through four iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m (b1, b2, b3, b4)",
        "fct-source": "src/Data-Enumerator-Text.html#zip4",
        "fct-type": "function",
        "title": "zip4"
      },
      "index": {
        "description": "Pass input from stream through four iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip4 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zip4",
        "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip5",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through five iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m (b1, b2, b3, b4, b5)",
        "fct-source": "src/Data-Enumerator-Text.html#zip5",
        "fct-type": "function",
        "title": "zip5"
      },
      "index": {
        "description": "Pass input from stream through five iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip5 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zip5",
        "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip6",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through six iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m (b1, b2, b3, b4, b5, b6)",
        "fct-source": "src/Data-Enumerator-Text.html#zip6",
        "fct-type": "function",
        "title": "zip6"
      },
      "index": {
        "description": "Pass input from stream through six iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip6 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zip6",
        "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip7",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through seven iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m b7 -\u003e Iteratee Text m (b1, b2, b3, b4, b5, b6, b7)",
        "fct-source": "src/Data-Enumerator-Text.html#zip7",
        "fct-type": "function",
        "title": "zip7"
      },
      "index": {
        "description": "Pass input from stream through seven iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip7 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zip7",
        "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b,b,b,b)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b,b,b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m c",
        "fct-source": "src/Data-Enumerator-Text.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zipWith",
        "normalized": "(a-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith3",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m c",
        "fct-source": "src/Data-Enumerator-Text.html#zipWith3",
        "fct-type": "function",
        "title": "zipWith3"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith3 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zipWith3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith4",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m c",
        "fct-source": "src/Data-Enumerator-Text.html#zipWith4",
        "fct-type": "function",
        "title": "zipWith4"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith4 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zipWith4",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith5",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m c",
        "fct-source": "src/Data-Enumerator-Text.html#zipWith5",
        "fct-type": "function",
        "title": "zipWith5"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith5 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zipWith5",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith6",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m c",
        "fct-source": "src/Data-Enumerator-Text.html#zipWith6",
        "fct-type": "function",
        "title": "zipWith6"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith6 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zipWith6",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith7",
      "description": {
        "fct-descr": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Text",
        "fct-package": "enumerator",
        "fct-signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e b7 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m b7 -\u003e Iteratee Text m c",
        "fct-source": "src/Data-Enumerator-Text.html#zipWith7",
        "fct-type": "function",
        "title": "zipWith7"
      },
      "index": {
        "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith7 Since",
        "hierarchy": "Data Enumerator Text",
        "module": "Data.Enumerator.Text",
        "name": "zipWith7",
        "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
        "package": "enumerator",
        "partial": "With",
        "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for running monad transformers within\n iteratees. Most types defined in the \"transformers\" library are\n supported.\n\u003c/p\u003e\u003cp\u003eFunctions suffixed with an apostrophe (\u003ccode\u003e'\u003c/code\u003e) apply to the strict variant\n of their transformer type.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Enumerator-Trans.html",
        "fct-type": "module",
        "title": "Trans"
      },
      "index": {
        "description": "This module provides functions for running monad transformers within iteratees Most types defined in the transformers library are supported Functions suffixed with an apostrophe apply to the strict variant of their transformer type Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "Trans",
        "normalized": "",
        "package": "enumerator",
        "partial": "Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalRWSI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eevalRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#evalRWSI",
        "fct-type": "function",
        "title": "evalRWSI"
      },
      "index": {
        "description": "Lifted version of lazy evalRWST Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "evalRWSI",
        "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,d)",
        "package": "enumerator",
        "partial": "RWSI",
        "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalRWSI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eevalRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#evalRWSI%27",
        "fct-type": "function",
        "title": "evalRWSI'"
      },
      "index": {
        "description": "Lifted version of strict evalRWST Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "evalRWSI'",
        "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,d)",
        "package": "enumerator",
        "partial": "RWSI'",
        "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalStateI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eevalStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Trans.html#evalStateI",
        "fct-type": "function",
        "title": "evalStateI"
      },
      "index": {
        "description": "Lifted version of lazy evalStateT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "evalStateI",
        "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c d",
        "package": "enumerator",
        "partial": "State",
        "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalStateI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eevalStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Trans.html#evalStateI%27",
        "fct-type": "function",
        "title": "evalStateI'"
      },
      "index": {
        "description": "Lifted version of strict evalStateT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "evalStateI'",
        "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c d",
        "package": "enumerator",
        "partial": "State I'",
        "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execRWSI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eexecRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (s, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#execRWSI",
        "fct-type": "function",
        "title": "execRWSI"
      },
      "index": {
        "description": "Lifted version of lazy execRWST Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "execRWSI",
        "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(b,d)",
        "package": "enumerator",
        "partial": "RWSI",
        "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execRWSI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eexecRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (s, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#execRWSI%27",
        "fct-type": "function",
        "title": "execRWSI'"
      },
      "index": {
        "description": "Lifted version of strict execRWST Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "execRWSI'",
        "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(b,d)",
        "package": "enumerator",
        "partial": "RWSI'",
        "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execWriterI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eexecWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m w",
        "fct-source": "src/Data-Enumerator-Trans.html#execWriterI",
        "fct-type": "function",
        "title": "execWriterI"
      },
      "index": {
        "description": "Lifted version of lazy execWriterT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "execWriterI",
        "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c b",
        "package": "enumerator",
        "partial": "Writer",
        "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execWriterI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eexecWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m w",
        "fct-source": "src/Data-Enumerator-Trans.html#execWriterI%27",
        "fct-type": "function",
        "title": "execWriterI'"
      },
      "index": {
        "description": "Lifted version of strict execWriterT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "execWriterI'",
        "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c b",
        "package": "enumerator",
        "partial": "Writer I'",
        "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runErrorI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of \u003ccode\u003erunErrorT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (ErrorT e m) b -\u003e Iteratee a m (Either e b)",
        "fct-source": "src/Data-Enumerator-Trans.html#runErrorI",
        "fct-type": "function",
        "title": "runErrorI"
      },
      "index": {
        "description": "Lifted version of runErrorT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runErrorI",
        "normalized": "Iteratee a(ErrorT b c)d-\u003eIteratee a c(Either b d)",
        "package": "enumerator",
        "partial": "Error",
        "signature": "Iteratee a(ErrorT e m)b-\u003eIteratee a m(Either e b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runIdentityI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of \u003ccode\u003erunIdentityT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (IdentityT m) b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Trans.html#runIdentityI",
        "fct-type": "function",
        "title": "runIdentityI"
      },
      "index": {
        "description": "Lifted version of runIdentityT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runIdentityI",
        "normalized": "Iteratee a(IdentityT b)c-\u003eIteratee a b c",
        "package": "enumerator",
        "partial": "Identity",
        "signature": "Iteratee a(IdentityT m)b-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runMaybeI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of \u003ccode\u003erunMaybeT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (MaybeT m) b -\u003e Iteratee a m (Maybe b)",
        "fct-source": "src/Data-Enumerator-Trans.html#runMaybeI",
        "fct-type": "function",
        "title": "runMaybeI"
      },
      "index": {
        "description": "Lifted version of runMaybeT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runMaybeI",
        "normalized": "Iteratee a(MaybeT b)c-\u003eIteratee a b(Maybe c)",
        "package": "enumerator",
        "partial": "Maybe",
        "signature": "Iteratee a(MaybeT m)b-\u003eIteratee a m(Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runRWSI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003erunRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, s, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#runRWSI",
        "fct-type": "function",
        "title": "runRWSI"
      },
      "index": {
        "description": "Lifted version of lazy runRWST Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runRWSI",
        "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,b,d)",
        "package": "enumerator",
        "partial": "RWSI",
        "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runRWSI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003erunRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, s, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#runRWSI%27",
        "fct-type": "function",
        "title": "runRWSI'"
      },
      "index": {
        "description": "Lifted version of strict runRWST Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runRWSI'",
        "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,b,d)",
        "package": "enumerator",
        "partial": "RWSI'",
        "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,s,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runReaderI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of \u003ccode\u003erunReaderT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "r -\u003e Iteratee a (ReaderT r m) b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Trans.html#runReaderI",
        "fct-type": "function",
        "title": "runReaderI"
      },
      "index": {
        "description": "Lifted version of runReaderT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runReaderI",
        "normalized": "a-\u003eIteratee b(ReaderT a c)d-\u003eIteratee b c d",
        "package": "enumerator",
        "partial": "Reader",
        "signature": "r-\u003eIteratee a(ReaderT r m)b-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runStateI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003erunStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m (b, s)",
        "fct-source": "src/Data-Enumerator-Trans.html#runStateI",
        "fct-type": "function",
        "title": "runStateI"
      },
      "index": {
        "description": "Lifted version of lazy runStateT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runStateI",
        "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c(d,a)",
        "package": "enumerator",
        "partial": "State",
        "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m(b,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runStateI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003erunStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m (b, s)",
        "fct-source": "src/Data-Enumerator-Trans.html#runStateI%27",
        "fct-type": "function",
        "title": "runStateI'"
      },
      "index": {
        "description": "Lifted version of strict runStateT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runStateI'",
        "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c(d,a)",
        "package": "enumerator",
        "partial": "State I'",
        "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m(b,s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runWriterI",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003erunWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m (b, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#runWriterI",
        "fct-type": "function",
        "title": "runWriterI"
      },
      "index": {
        "description": "Lifted version of lazy runWriterT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runWriterI",
        "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c(d,b)",
        "package": "enumerator",
        "partial": "Writer",
        "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runWriterI-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLifted version of (strict) \u003ccode\u003erunWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator.Trans",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m (b, w)",
        "fct-source": "src/Data-Enumerator-Trans.html#runWriterI%27",
        "fct-type": "function",
        "title": "runWriterI'"
      },
      "index": {
        "description": "Lifted version of strict runWriterT Since",
        "hierarchy": "Data Enumerator Trans",
        "module": "Data.Enumerator.Trans",
        "name": "runWriterI'",
        "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c(d,b)",
        "package": "enumerator",
        "partial": "Writer I'",
        "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m(b,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor compatibility reasons, this module should imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator as E\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "module",
        "fct-source": "src/Data-Enumerator.html",
        "fct-type": "module",
        "title": "Enumerator"
      },
      "index": {
        "description": "For compatibility reasons this module should imported qualified import qualified Data.Enumerator as",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#t:Enumeratee",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeratee acts as a stream adapter; place one between an enumerator\n and an iteratee, and it changes the type or contents of the input stream.\n\u003c/p\u003e\u003cp\u003eMost users will want to combine enumerators, enumeratees, and iteratees\n using the stream combinators \u003ccode\u003ejoinI\u003c/code\u003e and \u003ccode\u003ejoinE\u003c/code\u003e, or their operator aliases\n \u003ccode\u003e(=$)\u003c/code\u003e and \u003ccode\u003e($=)\u003c/code\u003e. These combinators are used to manage how left-over input\n is passed between elements of the data processing pipeline.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "type",
        "fct-source": "src/Data-Enumerator-Internal.html#Enumeratee",
        "fct-type": "type",
        "title": "Enumeratee"
      },
      "index": {
        "description": "An enumeratee acts as stream adapter place one between an enumerator and an iteratee and it changes the type or contents of the input stream Most users will want to combine enumerators enumeratees and iteratees using the stream combinators joinI and joinE or their operator aliases and These combinators are used to manage how left-over input is passed between elements of the data processing pipeline",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "Enumeratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Enumeratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#t:Enumerator",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerators are sources of data, to be consumed by iteratees.\n Enumerators typically read from an external source (parser, handle,\n random generator, etc), then feed chunks into an tteratee until:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input source runs out of data.\n\u003c/li\u003e\u003cli\u003e The iteratee yields a result value.\n\u003c/li\u003e\u003cli\u003e The iteratee throws an exception.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "type",
        "fct-source": "src/Data-Enumerator-Internal.html#Enumerator",
        "fct-type": "type",
        "title": "Enumerator"
      },
      "index": {
        "description": "Enumerators are sources of data to be consumed by iteratees Enumerators typically read from an external source parser handle random generator etc then feed chunks into an tteratee until The input source runs out of data The iteratee yields result value The iteratee throws an exception",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "Enumerator",
        "normalized": "",
        "package": "enumerator",
        "partial": "Enumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#t:Iteratee",
      "description": {
        "fct-descr": "\u003cp\u003eThe primary data type for this library; an iteratee consumes\n chunks of input from a stream until it either yields a value or\n encounters an error.\n\u003c/p\u003e\u003cp\u003eCompatibility note: \u003ccode\u003eIteratee\u003c/code\u003e will become abstract in \u003ccode\u003eenumerator_0.5\u003c/code\u003e. If\n you depend on internal implementation details, please import\n \u003ccode\u003e\u003ca\u003eData.Enumerator.Internal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Enumerator-Internal.html#Iteratee",
        "fct-type": "newtype",
        "title": "Iteratee"
      },
      "index": {
        "description": "The primary data type for this library an iteratee consumes chunks of input from stream until it either yields value or encounters an error Compatibility note Iteratee will become abstract in enumerator If you depend on internal implementation details please import Data.Enumerator.Internal",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "Iteratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e) = (\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eThis is somewhat easier to read when constructing an iteratee from many\n processing stages. You can treat it like \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and read the data flow\n from left to right.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%24%24",
        "fct-type": "function",
        "title": "($$)"
      },
      "index": {
        "description": "This is somewhat easier to read when constructing an iteratee from many processing stages You can treat it like and read the data flow from left to right Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "($$) $$",
        "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-36--61-",
      "description": {
        "fct-descr": "\u003cp\u003e&#8220;Wraps&#8221; an enumerator \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting enumerator will generate \u003cem\u003ewrapper\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eAs an example, consider an enumerator that yields line character counts\n for a text file (e.g. for source code readability checking):\n\u003c/p\u003e\u003cpre\u003e enumFileCounts :: FilePath -\u003e Enumerator Int IO b\n\u003c/pre\u003e\u003cp\u003eIt could be written with either \u003ccode\u003e\u003ca\u003ejoinE\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e($=)\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Data.Text as T\n import Data.Enumerator.List as EL\n import Data.Enumerator.Text as ET\n\n enumFileCounts path = joinE (enumFile path) (EL.map T.length)\n enumFileCounts path = enumFile path $= EL.map T.length\n\u003c/pre\u003e\u003cp\u003eCompatibility note: in version 0.4.15, the associativity of \u003ccode\u003e($=)\u003c/code\u003e was\n changed from \u003ccode\u003einfixr 0\u003c/code\u003e to \u003ccode\u003einfixl 1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Enumerator ao m (Step ai m b) -\u003e Enumeratee ao ai m b -\u003e Enumerator ai m b",
        "fct-source": "src/Data-Enumerator.html#%24%3D",
        "fct-type": "function",
        "title": "($=)"
      },
      "index": {
        "description": "Wraps an enumerator inner in an enumeratee wrapper The resulting enumerator will generate wrapper output type As an example consider an enumerator that yields line character counts for text file e.g for source code readability checking enumFileCounts FilePath Enumerator Int IO It could be written with either joinE or import Data.Text as import Data.Enumerator.List as EL import Data.Enumerator.Text as ET enumFileCounts path joinE enumFile path EL.map T.length enumFileCounts path enumFile path EL.map T.length Compatibility note in version the associativity of was changed from infixr to infixl Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "($=) $=",
        "normalized": "Enumerator a b(Step c b d)-\u003eEnumeratee a c b d-\u003eEnumerator c b d",
        "package": "enumerator",
        "partial": "",
        "signature": "Enumerator ao m(Step ai m b)-\u003eEnumeratee ao ai m b-\u003eEnumerator ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-60--61--61--60-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003c==\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Enumerator a m b -\u003e Step a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3C%3D%3D%3C",
        "fct-type": "function",
        "title": "(\u003c==\u003c)"
      },
      "index": {
        "description": "flip Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "(\u003c==\u003c) \u003c==\u003c",
        "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eEnumerator a b c-\u003eStep a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eEnumerator a m b-\u003eStep a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-61--36-",
      "description": {
        "fct-descr": "\u003cp\u003e&#8220;Wraps&#8221; an iteratee \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting iteratee will consume \u003cem\u003ewrapper\u003c/em\u003e&#8217;s input type and\n yield \u003cem\u003einner\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eNote: if the inner iteratee yields leftover input when it finishes,\n that extra will be discarded.\n\u003c/p\u003e\u003cp\u003eAs an example, consider an iteratee that converts a stream of UTF8-encoded\n bytes into a single \u003ccode\u003eText\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e consumeUTF8 :: Monad m =\u003e Iteratee ByteString m Text\n\u003c/pre\u003e\u003cp\u003eIt could be written with either \u003ccode\u003e\u003ca\u003ejoinI\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(=$)\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator.Text as ET\n\n consumeUTF8 = joinI (decode utf8 $$ ET.consume)\n consumeUTF8 = decode utf8 =$ ET.consume\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Enumeratee ao ai m b -\u003e Iteratee ai m b -\u003e Iteratee ao m b",
        "fct-source": "src/Data-Enumerator.html#%3D%24",
        "fct-type": "function",
        "title": "(=$)"
      },
      "index": {
        "description": "Wraps an iteratee inner in an enumeratee wrapper The resulting iteratee will consume wrapper input type and yield inner output type Note if the inner iteratee yields leftover input when it finishes that extra will be discarded As an example consider an iteratee that converts stream of UTF8-encoded bytes into single Text consumeUTF8 Monad Iteratee ByteString Text It could be written with either joinI or import Data.Enumerator.Text as ET consumeUTF8 joinI decode utf8 ET.consume consumeUTF8 decode utf8 ET.consume Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "(=$) =$",
        "normalized": "Enumeratee a b c d-\u003eIteratee b c d-\u003eIteratee a c d",
        "package": "enumerator",
        "partial": "",
        "signature": "Enumeratee ao ai m b-\u003eIteratee ai m b-\u003eIteratee ao m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-61--36--61-",
      "description": {
        "fct-descr": "\u003cp\u003eComposes two enumeratees.\n\u003c/p\u003e\u003cp\u003eNote that if the inner enumeratee yields left-over input, this will be\n discarded.\n\u003c/p\u003e\u003cp\u003eExample: converting bytes into lower-case text:\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString\n import Data.Text\n import Data.Enumerator.List as EnumList\n import Data.Enumerator.Text\n\n decodeAndLower :: Monad m =\u003e Enumeratee ByteString Text m b\n decodeAndLower = decode utf8 =$= EnumList.map toLower\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.17\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Enumeratee a1 a2 m (Step a3 m b) -\u003e Enumeratee a2 a3 m b -\u003e Enumeratee a1 a3 m b",
        "fct-source": "src/Data-Enumerator.html#%3D%24%3D",
        "fct-type": "function",
        "title": "(=$=)"
      },
      "index": {
        "description": "Composes two enumeratees Note that if the inner enumeratee yields left-over input this will be discarded Example converting bytes into lower-case text import Data.ByteString import Data.Text import Data.Enumerator.List as EnumList import Data.Enumerator.Text decodeAndLower Monad Enumeratee ByteString Text decodeAndLower decode utf8 EnumList.map toLower Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "(=$=) =$=",
        "normalized": "Enumeratee a a b(Step a b c)-\u003eEnumeratee a a b c-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "Enumeratee a a m(Step a m b)-\u003eEnumeratee a a m b-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-61--61--60--60-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3D%3D%3C%3C",
        "fct-type": "function",
        "title": "(==\u003c\u003c)"
      },
      "index": {
        "description": "flip",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "(==\u003c\u003c) ==\u003c\u003c",
        "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-62--61--61--62-",
      "description": {
        "fct-descr": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e) enum1 enum2 step = enum1 step \u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e enum2\u003c/pre\u003e\u003cp\u003eThe moral equivalent of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for iteratees.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Enumerator a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Step a m b -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3E%3D%3D%3E",
        "fct-type": "function",
        "title": "(\u003e==\u003e)"
      },
      "index": {
        "description": "enum1 enum2 step enum1 step enum2 The moral equivalent of for iteratees Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "(\u003e==\u003e) \u003e==\u003e",
        "normalized": "Enumerator a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eStep a b c-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "Enumerator a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eStep a m b-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-62--62--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eThe most primitive stream operator. \u003ccode\u003eiter \u003e\u003e== enum\u003c/code\u003e returns a new\n iteratee which will read from \u003ccode\u003eenum\u003c/code\u003e before continuing.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a' m b'",
        "fct-source": "src/Data-Enumerator-Internal.html#%3E%3E%3D%3D",
        "fct-type": "function",
        "title": "(\u003e\u003e==)"
      },
      "index": {
        "description": "The most primitive stream operator iter enum returns new iteratee which will read from enum before continuing",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "(\u003e\u003e==) \u003e\u003e==",
        "normalized": "Iteratee a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eIteratee d b e",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a' m b'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:Iteratee",
      "description": {
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee",
        "fct-source": "src/Data-Enumerator-Internal.html#Iteratee",
        "fct-type": "function",
        "title": "Iteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "Iteratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:break",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Iteratee a m [a]",
        "fct-source": "src/Data-Enumerator-Compatibility.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "Deprecated Use takeWhile instead Deprecated in use takeWhile instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "break",
        "normalized": "(a-\u003eBool)-\u003eIteratee a b[a]",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eIteratee a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:catchError",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the iteratee, and calls an exception handler if an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e is\n returned. By handling errors within the enumerator library, and requiring\n all errors to be represented by \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e, libraries with\n varying error types can be easily composed.\n\u003c/p\u003e\u003cp\u003eWARNING: Within the error handler, it is difficult or impossible to know\n how much input the original iteratee has consumed. Users are strongly\n advised to wrap all uses of \u003ccode\u003ecatchError\u003c/code\u003e with an appropriate isolation\n enumeratee, such as \u003ccode\u003eData.Enumerator.List.isolate\u003c/code\u003e or\n \u003ccode\u003eData.Enumerator.Binary.isolate\u003c/code\u003e, which will handle input framing even\n in the face of unexpected errors.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b -\u003e (SomeException -\u003e Iteratee a m b) -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator.html#catchError",
        "fct-type": "function",
        "title": "catchError"
      },
      "index": {
        "description": "Runs the iteratee and calls an exception handler if an Error is returned By handling errors within the enumerator library and requiring all errors to be represented by SomeException libraries with varying error types can be easily composed WARNING Within the error handler it is difficult or impossible to know how much input the original iteratee has consumed Users are strongly advised to wrap all uses of catchError with an appropriate isolation enumeratee such as Data.Enumerator.List.isolate or Data.Enumerator.Binary.isolate which will handle input framing even in the face of unexpected errors Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "catchError",
        "normalized": "Iteratee a b c-\u003e(SomeException-\u003eIteratee a b c)-\u003eIteratee a b c",
        "package": "enumerator",
        "partial": "Error",
        "signature": "Iteratee a m b-\u003e(SomeException-\u003eIteratee a m b)-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:concatEnums",
      "description": {
        "fct-descr": "\u003cp\u003eCompose a list of \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e).\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "[Enumerator a m b] -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator.html#concatEnums",
        "fct-type": "function",
        "title": "concatEnums"
      },
      "index": {
        "description": "Compose list of Enumerator using",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "concatEnums",
        "normalized": "[Enumerator a b c]-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "Enums",
        "signature": "[Enumerator a m b]-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.concatMap instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.3\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e [ai]) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.concatMap instead Deprecated in use concatMap instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "concatMap",
        "normalized": "(a-\u003e[b])-\u003eEnumeratee a b c d",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(ao-\u003e[ai])-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:concatMapM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.concatMapM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e m [ai]) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#concatMapM",
        "fct-type": "function",
        "title": "concatMapM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.concatMapM instead Deprecated in use concatMapM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "concatMapM",
        "normalized": "(a-\u003eb[c])-\u003eEnumeratee a c b d",
        "package": "enumerator",
        "partial": "Map",
        "signature": "(ao-\u003em[ai])-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:consume",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m [a]",
        "fct-source": "src/Data-Enumerator-Compatibility.html#consume",
        "fct-type": "function",
        "title": "consume"
      },
      "index": {
        "description": "Deprecated Use consume instead Deprecated in use consume instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "consume",
        "normalized": "Iteratee a b[a]",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:drop",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e Iteratee a m ()",
        "fct-source": "src/Data-Enumerator-Compatibility.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Deprecated Use drop instead Deprecated in use drop instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "drop",
        "normalized": "Integer-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Iteratee a m ()",
        "fct-source": "src/Data-Enumerator-Compatibility.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "Deprecated Use dropWhile instead Deprecated in use dropWhile instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:enumList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumList\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e enumerates \u003cem\u003exs\u003c/em\u003e as a stream, passing \u003cem\u003en\u003c/em\u003e inputs per\n chunk. This is primarily useful for testing, debugging, and REPL\n exploration.\n\u003c/p\u003e\u003cp\u003eCompatibility note: In version 0.5, \u003ccode\u003e\u003ca\u003eenumList\u003c/a\u003e\u003c/code\u003e will be changed to the\n type:\n\u003c/p\u003e\u003cpre\u003e enumList :: Monad m =\u003e [a] -\u003e Enumerator a m b\n\u003c/pre\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e [a] -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator.html#enumList",
        "fct-type": "function",
        "title": "enumList"
      },
      "index": {
        "description": "enumList xs enumerates xs as stream passing inputs per chunk This is primarily useful for testing debugging and REPL exploration Compatibility note In version enumList will be changed to the type enumList Monad Enumerator",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "enumList",
        "normalized": "Integer-\u003e[a]-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "List",
        "signature": "Integer-\u003e[a]-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:enumLists",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumLists\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e enumerates \u003cem\u003exs\u003c/em\u003e as a stream, where each element is a\n separate chunk. This is primarily useful for testing and debugging.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.15\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "[[a]] -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator.html#enumLists",
        "fct-type": "function",
        "title": "enumLists"
      },
      "index": {
        "description": "enumLists xs enumerates xs as stream where each element is separate chunk This is primarily useful for testing and debugging Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "enumLists",
        "normalized": "[[a]]-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "Lists",
        "signature": "[[a]]-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:filter",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.filter instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.filter instead Deprecated in use filter instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:filterM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.filterM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efilterM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e m Bool) -\u003e Enumeratee a a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#filterM",
        "fct-type": "function",
        "title": "filterM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.filterM instead Deprecated in use filterM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "filterM",
        "normalized": "(a-\u003eb Bool)-\u003eEnumeratee a a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003em Bool)-\u003eEnumeratee a a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:foldM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.foldM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#foldM",
        "fct-type": "function",
        "title": "foldM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.foldM instead Deprecated in use foldM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "foldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:foldl",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:generateM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.generateM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003egenerateM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "m (Maybe a) -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#generateM",
        "fct-type": "function",
        "title": "generateM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.generateM instead Deprecated in use generateM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "generateM",
        "normalized": "a(Maybe b)-\u003eEnumerator b a c",
        "package": "enumerator",
        "partial": "",
        "signature": "m(Maybe a)-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:head",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m (Maybe a)",
        "fct-source": "src/Data-Enumerator-Compatibility.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Deprecated Use head instead Deprecated in use head instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "head",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:isEOF",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a stream has reached EOF. Note that if the stream is not\n at EOF, \u003ccode\u003eisEOF\u003c/code\u003e may cause data to be read from the enumerator.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m Bool",
        "fct-source": "src/Data-Enumerator.html#isEOF",
        "fct-type": "function",
        "title": "isEOF"
      },
      "index": {
        "description": "Check whether stream has reached EOF Note that if the stream is not at EOF isEOF may cause data to be read from the enumerator",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "isEOF",
        "normalized": "",
        "package": "enumerator",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:iterate",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.iterate instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e a) -\u003e a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#iterate",
        "fct-type": "function",
        "title": "iterate"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.iterate instead Deprecated in use iterate instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "iterate",
        "normalized": "(a-\u003ea)-\u003ea-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003ea)-\u003ea-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:iterateM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.iterateM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e m a) -\u003e a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#iterateM",
        "fct-type": "function",
        "title": "iterateM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.iterateM instead Deprecated in use iterateM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "iterateM",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003em a)-\u003ea-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:joinE",
      "description": {
        "fct-descr": "\u003cp\u003e&#8220;Wraps&#8221; an enumerator \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting enumerator will generate \u003cem\u003ewrapper\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eSee the documentation for (\u003ccode\u003e\u003ca\u003e$=\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ejoinE enum enee = enum $= enee\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Enumerator ao m (Step ai m b) -\u003e Enumeratee ao ai m b -\u003e Enumerator ai m b",
        "fct-source": "src/Data-Enumerator.html#joinE",
        "fct-type": "function",
        "title": "joinE"
      },
      "index": {
        "description": "Wraps an enumerator inner in an enumeratee wrapper The resulting enumerator will generate wrapper output type See the documentation for joinE enum enee enum enee Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "joinE",
        "normalized": "Enumerator a b(Step c b d)-\u003eEnumeratee a c b d-\u003eEnumerator c b d",
        "package": "enumerator",
        "partial": "",
        "signature": "Enumerator ao m(Step ai m b)-\u003eEnumeratee ao ai m b-\u003eEnumerator ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:joinI",
      "description": {
        "fct-descr": "\u003cp\u003e&#8220;Wraps&#8221; an iteratee \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting iteratee will consume \u003cem\u003ewrapper\u003c/em\u003e&#8217;s input type and\n yield \u003cem\u003einner\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eSee the documentation for (\u003ccode\u003e\u003ca\u003e=$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ejoinI (enum $$ iter) = enum =$ iter\u003c/pre\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m (Step a' m b) -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator.html#joinI",
        "fct-type": "function",
        "title": "joinI"
      },
      "index": {
        "description": "Wraps an iteratee inner in an enumeratee wrapper The resulting iteratee will consume wrapper input type and yield inner output type See the documentation for joinI enum iter enum iter",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "joinI",
        "normalized": "Iteratee a b(Step c b d)-\u003eIteratee a b d",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m(Step a' m b)-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eGet the last element in the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eConsumes the entire stream.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m (Maybe a)",
        "fct-source": "src/Data-Enumerator.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Get the last element in the stream or Nothing if the stream has ended Consumes the entire stream",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "last",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eGet how many elements remained in the stream.\n\u003c/p\u003e\u003cp\u003eConsumes the entire stream.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m Integer",
        "fct-source": "src/Data-Enumerator.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Get how many elements remained in the stream Consumes the entire stream",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "length",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftFoldL",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#liftFoldL",
        "fct-type": "function",
        "title": "liftFoldL"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "liftFoldL",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "Fold",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftFoldL-39-",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#liftFoldL%27",
        "fct-type": "function",
        "title": "liftFoldL'"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "liftFoldL'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "Fold L'",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftFoldM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.foldM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#liftFoldM",
        "fct-type": "function",
        "title": "liftFoldM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.foldM instead Deprecated in use foldM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "liftFoldM",
        "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "Fold",
        "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftI",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(Stream a -\u003e Step a m b) -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#liftI",
        "fct-type": "function",
        "title": "liftI"
      },
      "index": {
        "description": "Deprecated Use continue instead Deprecated in use continue instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "liftI",
        "normalized": "(Stream a-\u003eStep a b c)-\u003eIteratee a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "(Stream a-\u003eStep a m b)-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftTrans",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e onto a monad transformer, re-wrapping its\n inner monadic values.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b -\u003e Iteratee a (t m) b",
        "fct-source": "src/Data-Enumerator.html#liftTrans",
        "fct-type": "function",
        "title": "liftTrans"
      },
      "index": {
        "description": "Lift an Iteratee onto monad transformer re-wrapping its inner monadic values Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "liftTrans",
        "normalized": "Iteratee a b c-\u003eIteratee a(d b)c",
        "package": "enumerator",
        "partial": "Trans",
        "signature": "Iteratee a m b-\u003eIteratee a(t m)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:map",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.map instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e ai) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.map instead Deprecated in use map instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
        "package": "enumerator",
        "partial": "",
        "signature": "(ao-\u003eai)-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:mapM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.mapM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.3\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(ao -\u003e m ai) -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.mapM instead Deprecated in use mapM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eEnumeratee a c b d",
        "package": "enumerator",
        "partial": "",
        "signature": "(ao-\u003em ai)-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003ePeek at the next element in the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n has ended.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m (Maybe a)",
        "fct-source": "src/Data-Enumerator.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "Peek at the next element in the stream or Nothing if the stream has ended",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "peek",
        "normalized": "",
        "package": "enumerator",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:printChunks",
      "description": {
        "fct-descr": "\u003cp\u003ePrint chunks as they're received from the enumerator, optionally\n printing empty chunks.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Bool-\u003e Iteratee a m ()",
        "fct-type": "function",
        "title": "printChunks"
      },
      "index": {
        "description": "Print chunks as they re received from the enumerator optionally printing empty chunks",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "printChunks",
        "normalized": "Bool-\u003eIteratee a b()",
        "package": "enumerator",
        "partial": "Chunks",
        "signature": "Bool-\u003eIteratee a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:repeat",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.repeat instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#repeat",
        "fct-type": "function",
        "title": "repeat"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.repeat instead Deprecated in use repeat instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "repeat",
        "normalized": "a-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "a-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:repeatM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.repeatM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "m a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#repeatM",
        "fct-type": "function",
        "title": "repeatM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.repeatM instead Deprecated in use repeatM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "repeatM",
        "normalized": "a b-\u003eEnumerator b a c",
        "package": "enumerator",
        "partial": "",
        "signature": "m a-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:replicate",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.replicate instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.replicate instead Deprecated in use replicate instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "replicate",
        "normalized": "Integer-\u003ea-\u003eEnumerator a b c",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003ea-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.replicateM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Integer -\u003e m a -\u003e Enumerator a m b",
        "fct-source": "src/Data-Enumerator-Compatibility.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "Deprecated Use Data.Enumerator.List.replicateM instead Deprecated in use replicateM instead Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "replicateM",
        "normalized": "Integer-\u003ea b-\u003eEnumerator b a c",
        "package": "enumerator",
        "partial": "",
        "signature": "Integer-\u003em a-\u003eEnumerator a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun an iteratee until it finishes, and return either the final value\n (if it succeeded) or the error (if it failed).\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.List as EL\n\n main = do\n     result \u003c- run (EL.iterate succ 'A' $$ EL.take 5)\n     case result of\n         Left exc -\u003e putStrLn (\"Got an exception: \" ++ show exc)\n         Right chars -\u003e putStrLn (\"Got characters: \" ++ show chars)\n\u003c/pre\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b -\u003e m (Either SomeException b)",
        "fct-source": "src/Data-Enumerator.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run an iteratee until it finishes and return either the final value if it succeeded or the error if it failed import Data.Enumerator import Data.Enumerator.List as EL main do result run EL.iterate succ EL.take case result of Left exc putStrLn Got an exception show exc Right chars putStrLn Got characters show chars",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "run",
        "normalized": "Iteratee a b c-\u003eb(Either SomeException c)",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003em(Either SomeException b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:runIteratee",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "m (Step a m b)",
        "fct-source": "src/Data-Enumerator-Internal.html#Iteratee",
        "fct-type": "function",
        "title": "runIteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "runIteratee",
        "normalized": "",
        "package": "enumerator",
        "partial": "Iteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:runLists",
      "description": {
        "fct-descr": "\u003cp\u003eRun an iteratee with the given input, and return either the final value\n (if it succeeded) or the error (if it failed).\n\u003c/p\u003e\u003cp\u003eSince: 0.4.15\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "[[a]] -\u003e Iteratee a Identity b -\u003e Either SomeException b",
        "fct-source": "src/Data-Enumerator.html#runLists",
        "fct-type": "function",
        "title": "runLists"
      },
      "index": {
        "description": "Run an iteratee with the given input and return either the final value if it succeeded or the error if it failed Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "runLists",
        "normalized": "[[a]]-\u003eIteratee a Identity b-\u003eEither SomeException b",
        "package": "enumerator",
        "partial": "Lists",
        "signature": "[[a]]-\u003eIteratee a Identity b-\u003eEither SomeException b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:runLists_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunLists\u003c/a\u003e\u003c/code\u003e, except errors are converted to exceptions and thrown.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.15\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "[[a]] -\u003e Iteratee a Identity b -\u003e b",
        "fct-source": "src/Data-Enumerator.html#runLists_",
        "fct-type": "function",
        "title": "runLists_"
      },
      "index": {
        "description": "Like runLists except errors are converted to exceptions and thrown Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "runLists_",
        "normalized": "[[a]]-\u003eIteratee a Identity b-\u003eb",
        "package": "enumerator",
        "partial": "Lists",
        "signature": "[[a]]-\u003eIteratee a Identity b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:run_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, except errors are converted to exceptions and thrown.\n Primarily useful for small scripts or other simple cases.\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.List as EL\n\n main = do\n     chars \u003c- run_ (EL.iterate succ 'A' $$ EL.take 5)\n     putStrLn (\"Got characters: \" ++ show chars)\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.1\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee a m b -\u003e m b",
        "fct-source": "src/Data-Enumerator.html#run_",
        "fct-type": "function",
        "title": "run_"
      },
      "index": {
        "description": "Like run except errors are converted to exceptions and thrown Primarily useful for small scripts or other simple cases import Data.Enumerator import Data.Enumerator.List as EL main do chars run EL.iterate succ EL.take putStrLn Got characters show chars Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "run_",
        "normalized": "Iteratee a b c-\u003eb c",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee a m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:sequence",
      "description": {
        "fct-descr": "\u003cp\u003eFeeds outer input elements into the provided iteratee until it yields\n an inner input, passes that to the inner iteratee, and then loops.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "Iteratee ao m ai -\u003e Enumeratee ao ai m b",
        "fct-source": "src/Data-Enumerator.html#sequence",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "Feeds outer input elements into the provided iteratee until it yields an inner input passes that to the inner iteratee and then loops",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "sequence",
        "normalized": "Iteratee a b c-\u003eEnumeratee a c b d",
        "package": "enumerator",
        "partial": "",
        "signature": "Iteratee ao m ai-\u003eEnumeratee ao ai m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:span",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "(a -\u003e Bool) -\u003e Iteratee a m [a]",
        "fct-source": "src/Data-Enumerator-Compatibility.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Deprecated Use takeWhile instead Deprecated in use takeWhile instead",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eIteratee a b[a]",
        "package": "enumerator",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eIteratee a m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eThe moral equivalent of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e for iteratees.\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "e -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator.html#throwError",
        "fct-type": "function",
        "title": "throwError"
      },
      "index": {
        "description": "The moral equivalent of throwIO for iteratees",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "throwError",
        "normalized": "a-\u003eIteratee b c d",
        "package": "enumerator",
        "partial": "Error",
        "signature": "e-\u003eIteratee a m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:tryIO",
      "description": {
        "fct-descr": "\u003cp\u003eTry to run an IO computation. If it throws an exception, the exception\n is caught and passed to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
        "fct-module": "Data.Enumerator",
        "fct-package": "enumerator",
        "fct-signature": "IO b -\u003e Iteratee a m b",
        "fct-source": "src/Data-Enumerator.html#tryIO",
        "fct-type": "function",
        "title": "tryIO"
      },
      "index": {
        "description": "Try to run an IO computation If it throws an exception the exception is caught and passed to throwError Since",
        "hierarchy": "Data Enumerator",
        "module": "Data.Enumerator",
        "name": "tryIO",
        "normalized": "IO a-\u003eIteratee b c a",
        "package": "enumerator",
        "partial": "IO",
        "signature": "IO b-\u003eIteratee a m b"
      }
    }
  }
]