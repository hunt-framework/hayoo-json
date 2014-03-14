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
        "word": "enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eByte-oriented alternatives to \u003ca\u003eData.Enumerator.List\u003c/a\u003e. Note that the\n enumeratees in this module must unpack their inputs to work properly. If\n you do not need to handle leftover input on a byte-by-byte basis, the\n chunk-oriented versions will be much faster.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator.Binary as EB\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "Binary",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Byte-oriented alternatives to Data.Enumerator.List Note that the enumeratees in this module must unpack their inputs to work properly If you do not need to handle leftover input on byte-by-byte basis the chunk-oriented versions will be much faster This module is intended to be imported qualified import qualified Data.Enumerator.Binary as EB Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "Binary",
          "package": "enumerator",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte\n and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "concatMap",
          "package": "enumerator",
          "signature": "(Word8 -\u003e ByteString) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "concatMap applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "concatMap",
          "normalized": "(Word-\u003eByteString)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(Word-\u003eByteString)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "concatMapAccum",
          "package": "enumerator",
          "signature": "(s -\u003e Word8 -\u003e (s, ByteString)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#concatMapAccum",
          "type": "function"
        },
        "index": {
          "description": "Similar to concatMap but with stateful step function Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "concatMapAccum",
          "normalized": "(a-\u003eWord-\u003e(a,ByteString))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
          "package": "enumerator",
          "partial": "Map Accum",
          "signature": "(s-\u003eWord-\u003e(s,ByteString))-\u003es-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "concatMapAccumM",
          "package": "enumerator",
          "signature": "(s -\u003e Word8 -\u003e m (s, ByteString)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#concatMapAccumM",
          "type": "function"
        },
        "index": {
          "description": "Similar to concatMapM but with stateful step function Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "concatMapAccumM",
          "normalized": "(a-\u003eWord-\u003eb(a,ByteString))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
          "package": "enumerator",
          "partial": "Map Accum",
          "signature": "(s-\u003eWord-\u003em(s,ByteString))-\u003es-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte and feeds the\n resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "concatMapM",
          "package": "enumerator",
          "signature": "(Word8 -\u003e m ByteString) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#concatMapM",
          "type": "function"
        },
        "index": {
          "description": "concatMapM applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "concatMapM",
          "normalized": "(Word-\u003ea ByteString)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(Word-\u003em ByteString)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "consume",
          "package": "enumerator",
          "signature": "Iteratee ByteString m ByteString",
          "source": "src/Data-Enumerator-Binary.html#consume",
          "type": "function"
        },
        "index": {
          "description": "consume takeWhile const True Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "consume",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e ignores \u003cem\u003en\u003c/em\u003e bytes of input from the stream.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "drop",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee ByteString m ()",
          "source": "src/Data-Enumerator-Binary.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop ignores bytes of input from the stream Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "drop",
          "normalized": "Integer-\u003eIteratee ByteString a()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e ignores input from the stream\n until the first byte which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "dropWhile",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Bool) -\u003e Iteratee ByteString m ()",
          "source": "src/Data-Enumerator-Binary.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile ignores input from the stream until the first byte which does not match the predicate Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003eIteratee ByteString a()",
          "package": "enumerator",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a file path in binary mode, and passes the handle to\n \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e. The file will be closed when enumeration finishes.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "enumFile",
          "package": "enumerator",
          "signature": "FilePath -\u003e Enumerator ByteString IO b",
          "source": "src/Data-Enumerator-Binary.html#enumFile",
          "type": "function"
        },
        "index": {
          "description": "Opens file path in binary mode and passes the handle to enumHandle The file will be closed when enumeration finishes Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "enumFile",
          "normalized": "FilePath-\u003eEnumerator ByteString IO a",
          "package": "enumerator",
          "partial": "File",
          "signature": "FilePath-\u003eEnumerator ByteString IO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a file path in binary mode, and passes the handle to\n \u003ccode\u003e\u003ca\u003eenumHandleRange\u003c/a\u003e\u003c/code\u003e. The file will be closed when enumeration finishes.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "enumFileRange",
          "package": "enumerator",
          "signature": "FilePath-\u003e Maybe Integer-\u003e Maybe Integer-\u003e Enumerator ByteString IO b",
          "type": "function"
        },
        "index": {
          "description": "Opens file path in binary mode and passes the handle to enumHandleRange The file will be closed when enumeration finishes Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "enumFileRange",
          "normalized": "FilePath-\u003eMaybe Integer-\u003eMaybe Integer-\u003eEnumerator ByteString IO a",
          "package": "enumerator",
          "partial": "File Range",
          "signature": "FilePath-\u003eMaybe Integer-\u003eMaybe Integer-\u003eEnumerator ByteString IO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumFileRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead bytes (in chunks of the given buffer size) from the handle, and\n stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. If an exception occurs during file IO,\n enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be returned. Exceptions from the\n iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThis enumerator blocks until at least one byte is available from the\n handle, and might read less than the maximum buffer size in some\n cases.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with no encoding, and in \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "enumHandle",
          "package": "enumerator",
          "signature": "Integer-\u003e Handle-\u003e Enumerator ByteString m b",
          "type": "function"
        },
        "index": {
          "description": "Read bytes in chunks of the given buffer size from the handle and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught This enumerator blocks until at least one byte is available from the handle and might read less than the maximum buffer size in some cases The handle should be opened with no encoding and in ReadMode or ReadWriteMode Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "enumHandle",
          "normalized": "Integer-\u003eHandle-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "partial": "Handle",
          "signature": "Integer-\u003eHandle-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead bytes (in chunks of the given buffer size) from the handle, and\n stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e. If an exception occurs during file IO,\n enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be returned. Exceptions from the\n iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThis enumerator blocks until at least one byte is available from the\n handle, and might read less than the maximum buffer size in some\n cases.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with no encoding, and in \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an offset is specified, the handle will be seeked to that offset\n before reading. If the handle cannot be seeked, an error will be\n thrown.\n\u003c/p\u003e\u003cp\u003eIf a maximum count is specified, the number of bytes read will not\n exceed that count.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "enumHandleRange",
          "package": "enumerator",
          "signature": "Integer-\u003e Maybe Integer-\u003e Maybe Integer-\u003e Handle-\u003e Enumerator ByteString m b",
          "type": "function"
        },
        "index": {
          "description": "Read bytes in chunks of the given buffer size from the handle and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught This enumerator blocks until at least one byte is available from the handle and might read less than the maximum buffer size in some cases The handle should be opened with no encoding and in ReadMode or ReadWriteMode If an offset is specified the handle will be seeked to that offset before reading If the handle cannot be seeked an error will be thrown If maximum count is specified the number of bytes read will not exceed that count Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "enumHandleRange",
          "normalized": "Integer-\u003eMaybe Integer-\u003eMaybe Integer-\u003eHandle-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "partial": "Handle Range",
          "signature": "Integer-\u003eMaybe Integer-\u003eMaybe Integer-\u003eHandle-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:enumHandleRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a predicate to the stream. The inner iteratee only receives\n characters for which the predicate is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "filter",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Bool) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Applies predicate to the stream The inner iteratee only receives characters for which the predicate is True Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "filter",
          "normalized": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "signature": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic predicate to the stream. The inner iteratee only\n receives bytes for which the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "filterM",
          "package": "enumerator",
          "signature": "(Word8 -\u003e m Bool) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#filterM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic predicate to the stream The inner iteratee only receives bytes for which the predicate returns True Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "filterM",
          "normalized": "(Word-\u003ea Bool)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "signature": "(Word-\u003em Bool)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the entire input stream with a strict left fold, one byte\n at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "fold",
          "package": "enumerator",
          "signature": "(b -\u003e Word8 -\u003e b) -\u003e b -\u003e Iteratee ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Consume the entire input stream with strict left fold one byte at time Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "fold",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eIteratee ByteString b a",
          "package": "enumerator",
          "signature": "(b-\u003eWord-\u003eb)-\u003eb-\u003eIteratee ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the entire input stream with a strict monadic left fold, one\n byte at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "foldM",
          "package": "enumerator",
          "signature": "(b -\u003e Word8 -\u003e m b) -\u003e b -\u003e Iteratee ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Consume the entire input stream with strict monadic left fold one byte at time Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "foldM",
          "normalized": "(a-\u003eWord-\u003eb a)-\u003ea-\u003eIteratee ByteString b a",
          "package": "enumerator",
          "signature": "(b-\u003eWord-\u003em b)-\u003eb-\u003eIteratee ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e, except the computation may terminate the stream by\n returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "generateM",
          "package": "enumerator",
          "signature": "m (Maybe Word8) -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#generateM",
          "type": "function"
        },
        "index": {
          "description": "Like repeatM except the computation may terminate the stream by returning Nothing Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "generateM",
          "normalized": "a(Maybe Word)-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "m(Maybe Word)-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:generateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next byte from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "head",
          "package": "enumerator",
          "signature": "Iteratee ByteString m (Maybe Word8)",
          "source": "src/Data-Enumerator-Binary.html#head",
          "type": "function"
        },
        "index": {
          "description": "Get the next byte from the stream or Nothing if the stream has ended Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "head",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next element from the stream, or raise an error if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "head_",
          "package": "enumerator",
          "signature": "Iteratee ByteString m Word8",
          "source": "src/Data-Enumerator-Binary.html#head_",
          "type": "function"
        },
        "index": {
          "description": "Get the next element from the stream or raise an error if the stream has ended Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "head_",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:head_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e reads at most \u003cem\u003en\u003c/em\u003e bytes from the stream, and passes them\n to its iteratee. If the iteratee finishes early, bytes continue to be\n consumed from the outer stream until \u003cem\u003en\u003c/em\u003e have been consumed.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "isolate",
          "package": "enumerator",
          "signature": "Integer -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#isolate",
          "type": "function"
        },
        "index": {
          "description": "isolate reads at most bytes from the stream and passes them to its iteratee If the iteratee finishes early bytes continue to be consumed from the outer stream until have been consumed Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "isolate",
          "normalized": "Integer-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "signature": "Integer-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:isolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolateWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e reads bytes from the stream until \u003cem\u003ep\u003c/em\u003e is false, and\n passes them to its iteratee. If the iteratee finishes early, bytes\n continue to be consumed from the outer stream until \u003cem\u003ep\u003c/em\u003e is false.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "isolateWhile",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Bool) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#isolateWhile",
          "type": "function"
        },
        "index": {
          "description": "isolateWhile reads bytes from the stream until is false and passes them to its iteratee If the iteratee finishes early bytes continue to be consumed from the outer stream until is false Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "isolateWhile",
          "normalized": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:isolateWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead bytes from a stream and write them to a handle. If an exception\n occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be\n returned.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with no encoding, and in \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "iterHandle",
          "package": "enumerator",
          "signature": "Handle -\u003e Iteratee ByteString m ()",
          "source": "src/Data-Enumerator-Binary.html#iterHandle",
          "type": "function"
        },
        "index": {
          "description": "Read bytes from stream and write them to handle If an exception occurs during file IO enumeration will stop and Error will be returned The handle should be opened with no encoding and in WriteMode or ReadWriteMode Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "iterHandle",
          "normalized": "Handle-\u003eIteratee ByteString a()",
          "package": "enumerator",
          "partial": "Handle",
          "signature": "Handle-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:iterHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e enumerates an infinite stream of\n repeated applications of \u003cem\u003ef\u003c/em\u003e to \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "iterate",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Word8) -\u003e Word8 -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate enumerates an infinite stream of repeated applications of to Analogous to iterate Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "iterate",
          "normalized": "(Word-\u003eWord)-\u003eWord-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "(Word-\u003eWord)-\u003eWord-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, except the iteration\n function is monadic.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "iterateM",
          "package": "enumerator",
          "signature": "(Word8 -\u003e m Word8) -\u003e Word8 -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#iterateM",
          "type": "function"
        },
        "index": {
          "description": "Similar to iterate except the iteration function is monadic Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "iterateM",
          "normalized": "(Word-\u003ea Word)-\u003eWord-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "(Word-\u003em Word)-\u003eWord-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "map",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Word8) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#map",
          "type": "function"
        },
        "index": {
          "description": "map applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "map",
          "normalized": "(Word-\u003eWord)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "signature": "(Word-\u003eWord)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "mapAccum",
          "package": "enumerator",
          "signature": "(s -\u003e Word8 -\u003e (s, Word8)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Similar to map but with stateful step function Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "mapAccum",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
          "package": "enumerator",
          "partial": "Accum",
          "signature": "(s-\u003eWord-\u003e(s,Word))-\u003es-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "mapAccumM",
          "package": "enumerator",
          "signature": "(s -\u003e Word8 -\u003e m (s, Word8)) -\u003e s -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#mapAccumM",
          "type": "function"
        },
        "index": {
          "description": "Similar to mapM but with stateful step function Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "mapAccumM",
          "normalized": "(a-\u003eWord-\u003eb(a,Word))-\u003ea-\u003eEnumeratee ByteString ByteString b c",
          "package": "enumerator",
          "partial": "Accum",
          "signature": "(s-\u003eWord-\u003em(s,Word))-\u003es-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "mapM",
          "package": "enumerator",
          "signature": "(Word8 -\u003e m Word8) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "mapM applies to each input byte and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "mapM",
          "normalized": "(Word-\u003ea Word)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "signature": "(Word-\u003em Word)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input byte, and\n discards the results.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "mapM_",
          "package": "enumerator",
          "signature": "(Word8 -\u003e m ()) -\u003e Iteratee ByteString m ()",
          "source": "src/Data-Enumerator-Binary.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "mapM applies to each input byte and discards the results Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "mapM_",
          "normalized": "(Word-\u003ea())-\u003eIteratee ByteString a()",
          "package": "enumerator",
          "signature": "(Word-\u003em())-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates an infinite stream of a single byte.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "repeat",
          "package": "enumerator",
          "signature": "Word8 -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Enumerates an infinite stream of single byte Analogous to repeat Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "repeat",
          "normalized": "Word-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "Word-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates an infinite stream of byte. Each byte is computed by the\n underlying monad.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "repeatM",
          "package": "enumerator",
          "signature": "m Word8 -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#repeatM",
          "type": "function"
        },
        "index": {
          "description": "Enumerates an infinite stream of byte Each byte is computed by the underlying monad Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "repeatM",
          "normalized": "a Word-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "m Word-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e enumerates a stream containing\n \u003cem\u003en\u003c/em\u003e copies of \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "replicate",
          "package": "enumerator",
          "signature": "Integer -\u003e Word8 -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate enumerates stream containing copies of Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "replicate",
          "normalized": "Integer-\u003eWord-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "Integer-\u003eWord-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n m_x\u003c/code\u003e enumerates a stream of \u003cem\u003en\u003c/em\u003e bytes, with each byte\n computed by \u003cem\u003em_x\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "replicateM",
          "package": "enumerator",
          "signature": "Integer -\u003e m Word8 -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#replicateM",
          "type": "function"
        },
        "index": {
          "description": "replicateM enumerates stream of bytes with each byte computed by Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "replicateM",
          "normalized": "Integer-\u003ea Word-\u003eEnumerator ByteString a b",
          "package": "enumerator",
          "signature": "Integer-\u003em Word-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erequire\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e buffers input until at least \u003cem\u003en\u003c/em\u003e bytes are available, or\n throws an error if the stream ends early.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "require",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee ByteString m ()",
          "source": "src/Data-Enumerator-Binary.html#require",
          "type": "function"
        },
        "index": {
          "description": "require buffers input until at least bytes are available or throws an error if the stream ends early Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "require",
          "normalized": "Integer-\u003eIteratee ByteString a()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on bytes satisfying a given predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "splitWhen",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Bool) -\u003e Enumeratee ByteString ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#splitWhen",
          "type": "function"
        },
        "index": {
          "description": "Split on bytes satisfying given predicate Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "splitWhen",
          "normalized": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString a b",
          "package": "enumerator",
          "partial": "When",
          "signature": "(Word-\u003eBool)-\u003eEnumeratee ByteString ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:splitWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e extracts the next \u003cem\u003en\u003c/em\u003e bytes from the\n stream, as a lazy\n ByteString.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "take",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee ByteString m ByteString",
          "source": "src/Data-Enumerator-Binary.html#take",
          "type": "function"
        },
        "index": {
          "description": "take extracts the next bytes from the stream as lazy ByteString Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "take",
          "normalized": "Integer-\u003eIteratee ByteString a ByteString",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e extracts input from the stream until the first byte which\n does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "takeWhile",
          "package": "enumerator",
          "signature": "(Word8 -\u003e Bool) -\u003e Iteratee ByteString m ByteString",
          "source": "src/Data-Enumerator-Binary.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile extracts input from the stream until the first byte which does not match the predicate Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eIteratee ByteString a ByteString",
          "package": "enumerator",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eIteratee ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a stream of bytes by repeatedly applying a function to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "unfold",
          "package": "enumerator",
          "signature": "(s -\u003e Maybe (Word8, s)) -\u003e s -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "Enumerates stream of bytes by repeatedly applying function to some state Similar to iterate Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "unfold",
          "normalized": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eEnumerator ByteString b c",
          "package": "enumerator",
          "signature": "(s-\u003eMaybe(Word,s))-\u003es-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a stream of bytes by repeatedly applying a computation to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "unfoldM",
          "package": "enumerator",
          "signature": "(s -\u003e m (Maybe (Word8, s))) -\u003e s -\u003e Enumerator ByteString m b",
          "source": "src/Data-Enumerator-Binary.html#unfoldM",
          "type": "function"
        },
        "index": {
          "description": "Enumerates stream of bytes by repeatedly applying computation to some state Similar to iterateM Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "unfoldM",
          "normalized": "(a-\u003eb(Maybe(Word,a)))-\u003ea-\u003eEnumerator ByteString b c",
          "package": "enumerator",
          "signature": "(s-\u003em(Maybe(Word,s)))-\u003es-\u003eEnumerator ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zip",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m (b1, b2)",
          "source": "src/Data-Enumerator-Binary.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Analogous to zip Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zip",
          "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b)",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through three iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zip3",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m (b1, b2, b3)",
          "source": "src/Data-Enumerator-Binary.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through three iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip3 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zip3",
          "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through four iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zip4",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m (b1, b2, b3, b4)",
          "source": "src/Data-Enumerator-Binary.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through four iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip4 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zip4",
          "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through five iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zip5",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m (b1, b2, b3, b4, b5)",
          "source": "src/Data-Enumerator-Binary.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through five iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip5 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zip5",
          "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through six iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zip6",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m (b1, b2, b3, b4, b5, b6)",
          "source": "src/Data-Enumerator-Binary.html#zip6",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through six iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip6 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zip6",
          "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through seven iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zip7",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m b7 -\u003e Iteratee ByteString m (b1, b2, b3, b4, b5, b6, b7)",
          "source": "src/Data-Enumerator-Binary.html#zip7",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through seven iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip7 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zip7",
          "normalized": "Iteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a b-\u003eIteratee ByteString a(b,b,b,b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m(b,b,b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m c",
          "source": "src/Data-Enumerator-Binary.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith3",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m c",
          "source": "src/Data-Enumerator-Binary.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith3 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith4",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m c",
          "source": "src/Data-Enumerator-Binary.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith4 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith5",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m c",
          "source": "src/Data-Enumerator-Binary.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith5 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith6",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m c",
          "source": "src/Data-Enumerator-Binary.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith6 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith6",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith7",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e b7 -\u003e c) -\u003e Iteratee ByteString m b1 -\u003e Iteratee ByteString m b2 -\u003e Iteratee ByteString m b3 -\u003e Iteratee ByteString m b4 -\u003e Iteratee ByteString m b5 -\u003e Iteratee ByteString m b6 -\u003e Iteratee ByteString m b7 -\u003e Iteratee ByteString m c",
          "source": "src/Data-Enumerator-Binary.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith7 Since",
          "hierarchy": "Data Enumerator Binary",
          "module": "Data.Enumerator.Binary",
          "name": "zipWith7",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c a-\u003eIteratee ByteString c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m b-\u003eIteratee ByteString m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Binary.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore enumerator types, and some useful primitives.\n\u003c/p\u003e\u003cp\u003eBe careful when using the functions defined in this module, as they will\n allow you to create iteratees which violate the monad laws.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Internal",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Core enumerator types and some useful primitives Be careful when using the functions defined in this module as they will allow you to create iteratees which violate the monad laws",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Internal",
          "package": "enumerator",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee acts as a stream adapter; place one between an enumerator\n and an iteratee, and it changes the type or contents of the input stream.\n\u003c/p\u003e\u003cp\u003eMost users will want to combine enumerators, enumeratees, and iteratees\n using the stream combinators \u003ccode\u003ejoinI\u003c/code\u003e and \u003ccode\u003ejoinE\u003c/code\u003e, or their operator aliases\n \u003ccode\u003e(=$)\u003c/code\u003e and \u003ccode\u003e($=)\u003c/code\u003e. These combinators are used to manage how left-over input\n is passed between elements of the data processing pipeline.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Enumeratee",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Enumeratee",
          "type": "type"
        },
        "index": {
          "description": "An enumeratee acts as stream adapter place one between an enumerator and an iteratee and it changes the type or contents of the input stream Most users will want to combine enumerators enumeratees and iteratees using the stream combinators joinI and joinE or their operator aliases and These combinators are used to manage how left-over input is passed between elements of the data processing pipeline",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Enumeratee",
          "package": "enumerator",
          "partial": "Enumeratee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Enumeratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerators are sources of data, to be consumed by iteratees.\n Enumerators typically read from an external source (parser, handle,\n random generator, etc), then feed chunks into an tteratee until:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input source runs out of data.\n\u003c/li\u003e\u003cli\u003e The iteratee yields a result value.\n\u003c/li\u003e\u003cli\u003e The iteratee throws an exception.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Enumerator",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Enumerator",
          "type": "type"
        },
        "index": {
          "description": "Enumerators are sources of data to be consumed by iteratees Enumerators typically read from an external source parser handle random generator etc then feed chunks into an tteratee until The input source runs out of data The iteratee yields result value The iteratee throws an exception",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Enumerator",
          "package": "enumerator",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primary data type for this library; an iteratee consumes\n chunks of input from a stream until it either yields a value or\n encounters an error.\n\u003c/p\u003e\u003cp\u003eCompatibility note: \u003ccode\u003eIteratee\u003c/code\u003e will become abstract in \u003ccode\u003eenumerator_0.5\u003c/code\u003e. If\n you depend on internal implementation details, please import\n \u003ccode\u003e\u003ca\u003eData.Enumerator.Internal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Iteratee",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Iteratee",
          "type": "newtype"
        },
        "index": {
          "description": "The primary data type for this library an iteratee consumes chunks of input from stream until it either yields value or encounters an error Compatibility note Iteratee will become abstract in enumerator If you depend on internal implementation details please import Data.Enumerator.Internal",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Iteratee",
          "package": "enumerator",
          "partial": "Iteratee",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Internal",
          "name": "Step",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Step",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Step",
          "package": "enumerator",
          "partial": "Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e is a sequence of chunks generated by an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(\u003ccode\u003e\u003ca\u003eChunks\u003c/a\u003e\u003c/code\u003e [])\u003c/code\u003e is used to indicate that a stream is still active, but\n currently has no available data. Iteratees should ignore empty chunks.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Stream",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "Stream is sequence of chunks generated by an Enumerator Chunks is used to indicate that stream is still active but currently has no available data Iteratees should ignore empty chunks",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Stream",
          "package": "enumerator",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e) = (\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eThis is somewhat easier to read when constructing an iteratee from many\n processing stages. You can treat it like \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, and read the data flow\n from left to right.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "($$)",
          "package": "enumerator",
          "signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
          "source": "src/Data-Enumerator-Internal.html#%24%24",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-36--36-\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-36--36-\"]"
        },
        "index": {
          "description": "This is somewhat easier to read when constructing an iteratee from many processing stages You can treat it like and read the data flow from left to right Since",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "($$) $$",
          "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
          "package": "enumerator",
          "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003c==\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "(\u003c==\u003c)",
          "package": "enumerator",
          "signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Enumerator a m b -\u003e Step a m b -\u003e Iteratee a' m b'",
          "source": "src/Data-Enumerator-Internal.html#%3C%3D%3D%3C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-60--61--61--60-\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-60--61--61--60-\"]"
        },
        "index": {
          "description": "flip Since",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "(\u003c==\u003c) \u003c==\u003c",
          "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eEnumerator a b c-\u003eStep a b c-\u003eIteratee d b e",
          "package": "enumerator",
          "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eEnumerator a m b-\u003eStep a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-60--61--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e==\u003c\u003c\u003c/a\u003e\u003c/code\u003e) = flip (\u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "(==\u003c\u003c)",
          "package": "enumerator",
          "signature": "(Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a m b -\u003e Iteratee a' m b'",
          "source": "src/Data-Enumerator-Internal.html#%3D%3D%3C%3C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-61--61--60--60-\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-61--61--60--60-\"]"
        },
        "index": {
          "description": "flip",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "(==\u003c\u003c) ==\u003c\u003c",
          "normalized": "(Step a b c-\u003eIteratee d b e)-\u003eIteratee a b c-\u003eIteratee d b e",
          "package": "enumerator",
          "signature": "(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-61--61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e) enum1 enum2 step = enum1 step \u003ccode\u003e\u003ca\u003e\u003e\u003e==\u003c/a\u003e\u003c/code\u003e enum2\u003c/pre\u003e\u003cp\u003eThe moral equivalent of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e=\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e for iteratees.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "(\u003e==\u003e)",
          "package": "enumerator",
          "signature": "Enumerator a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Step a m b -\u003e Iteratee a' m b'",
          "source": "src/Data-Enumerator-Internal.html#%3E%3D%3D%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-62--61--61--62-\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-62--61--61--62-\"]"
        },
        "index": {
          "description": "enum1 enum2 step enum1 step enum2 The moral equivalent of for iteratees Since",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "(\u003e==\u003e) \u003e==\u003e",
          "normalized": "Enumerator a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eStep a b c-\u003eIteratee d b e",
          "package": "enumerator",
          "signature": "Enumerator a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eStep a m b-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-62--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most primitive stream operator. \u003ccode\u003eiter \u003e\u003e== enum\u003c/code\u003e returns a new\n iteratee which will read from \u003ccode\u003eenum\u003c/code\u003e before continuing.\n\u003c/p\u003e",
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "(\u003e\u003e==)",
          "package": "enumerator",
          "signature": "Iteratee a m b -\u003e (Step a m b -\u003e Iteratee a' m b') -\u003e Iteratee a' m b'",
          "source": "src/Data-Enumerator-Internal.html#%3E%3E%3D%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-62--62--61--61-\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-62--62--61--61-\"]"
        },
        "index": {
          "description": "The most primitive stream operator iter enum returns new iteratee which will read from enum before continuing",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "(\u003e\u003e==) \u003e\u003e==",
          "normalized": "Iteratee a b c-\u003e(Step a b c-\u003eIteratee d b e)-\u003eIteratee d b e",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003e(Step a m b-\u003eIteratee a' m b')-\u003eIteratee a' m b'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:-62--62--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Internal",
          "name": "Chunks",
          "package": "enumerator",
          "signature": "Chunks [a]",
          "source": "src/Data-Enumerator-Internal.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Chunks",
          "normalized": "Chunks[a]",
          "package": "enumerator",
          "partial": "Chunks",
          "signature": "Chunks[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Chunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e is capable of accepting more input. Note that more input\n is not necessarily required; the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e might be able to generate a\n value immediately if it receives \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Continue",
          "package": "enumerator",
          "signature": "Continue (Stream a -\u003e Iteratee a m b)",
          "source": "src/Data-Enumerator-Internal.html#Step",
          "type": "function"
        },
        "index": {
          "description": "The Iteratee is capable of accepting more input Note that more input is not necessarily required the Iteratee might be able to generate value immediately if it receives EOF",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Continue",
          "normalized": "Continue(Stream a-\u003eIteratee a b c)",
          "package": "enumerator",
          "partial": "Continue",
          "signature": "Continue(Stream a-\u003eIteratee a m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Internal",
          "name": "EOF",
          "package": "enumerator",
          "signature": "EOF",
          "source": "src/Data-Enumerator-Internal.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "EOF",
          "package": "enumerator",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e encountered an error which prevents it from proceeding\n further.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Error",
          "package": "enumerator",
          "signature": "Error SomeException",
          "source": "src/Data-Enumerator-Internal.html#Step",
          "type": "function"
        },
        "index": {
          "description": "The Iteratee encountered an error which prevents it from proceeding further",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Error",
          "package": "enumerator",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "Iteratee",
          "package": "enumerator",
          "signature": "Iteratee",
          "source": "src/Data-Enumerator-Internal.html#Iteratee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Iteratee\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:Iteratee\"]"
        },
        "index": {
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Iteratee",
          "package": "enumerator",
          "partial": "Iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e cannot receive any more input, and has generated a\n result. Included in this value is left-over input, which can be passed to\n composed \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "Yield",
          "package": "enumerator",
          "signature": "Yield b (Stream a)",
          "source": "src/Data-Enumerator-Internal.html#Step",
          "type": "function"
        },
        "index": {
          "description": "The Iteratee cannot receive any more input and has generated result Included in this value is left-over input which can be passed to composed Iteratee",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "Yield",
          "package": "enumerator",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:Yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA common pattern in \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e implementations is to check whether\n the inner \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e has finished, and if so, to return its output.\n \u003ccode\u003e\u003ca\u003echeckContinue0\u003c/a\u003e\u003c/code\u003e passes its parameter a continuation if the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e\n can still consume input; if not, it returns the iteratee's step.\n\u003c/p\u003e\u003cp\u003eThe type signature here is a bit crazy, but it's actually very easy to\n use. Take this code:\n\u003c/p\u003e\u003cpre\u003e repeat :: Monad m =\u003e a -\u003e Enumerator a m b\n repeat x = loop where\n \tloop (Continue k) = k (Chunks [x]) \u003e\u003e== loop\n \tloop step = returnI step\n\u003c/pre\u003e\u003cp\u003eAnd rewrite it without the boilerplate:\n\u003c/p\u003e\u003cpre\u003e repeat :: Monad m =\u003e a -\u003e Enumerator a m b\n repeat x = checkContinue0 $ \\loop k -\u003e k (Chunks [x] \u003e\u003e== loop\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "checkContinue0",
          "package": "enumerator",
          "signature": "(Enumerator a m b -\u003e (Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b) -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Internal.html#checkContinue0",
          "type": "function"
        },
        "index": {
          "description": "common pattern in Enumerator implementations is to check whether the inner Iteratee has finished and if so to return its output checkContinue0 passes its parameter continuation if the Iteratee can still consume input if not it returns the iteratee step The type signature here is bit crazy but it actually very easy to use Take this code repeat Monad Enumerator repeat loop where loop Continue Chunks loop loop step returnI step And rewrite it without the boilerplate repeat Monad Enumerator repeat checkContinue0 loop Chunks loop Since",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "checkContinue0",
          "normalized": "(Enumerator a b c-\u003e(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c)-\u003eEnumerator a b c",
          "package": "enumerator",
          "partial": "Continue",
          "signature": "(Enumerator a m b-\u003e(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b)-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkContinue0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echeckContinue0\u003c/a\u003e\u003c/code\u003e, but allows each loop step to use a state value:\n\u003c/p\u003e\u003cpre\u003e iterate :: Monad m =\u003e (a -\u003e a) -\u003e a -\u003e Enumerator a m b\n iterate f = checkContinue1 $ \\loop a k -\u003e k (Chunks [a]) \u003e\u003e== loop (f a)\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "checkContinue1",
          "package": "enumerator",
          "signature": "((s1 -\u003e Enumerator a m b) -\u003e s1 -\u003e (Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b) -\u003e s1 -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Internal.html#checkContinue1",
          "type": "function"
        },
        "index": {
          "description": "Like checkContinue0 but allows each loop step to use state value iterate Monad Enumerator iterate checkContinue1 loop Chunks loop Since",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "checkContinue1",
          "normalized": "((a-\u003eEnumerator b c d)-\u003ea-\u003e(Stream b-\u003eIteratee b c d)-\u003eIteratee b c d)-\u003ea-\u003eEnumerator b c d",
          "package": "enumerator",
          "partial": "Continue",
          "signature": "((s-\u003eEnumerator a m b)-\u003es-\u003e(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b)-\u003es-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkContinue1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003echeckDone\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003echeckDoneEx\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eChunks\u003c/a\u003e\u003c/code\u003e [])\u003c/pre\u003e\u003cp\u003eUse this for enumeratees which do not have an input buffer.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "checkDone",
          "package": "enumerator",
          "signature": "((Stream a -\u003e Iteratee a m b) -\u003e Iteratee a' m (Step a m b)) -\u003e Enumeratee a' a m b",
          "source": "src/Data-Enumerator-Internal.html#checkDone",
          "type": "function"
        },
        "index": {
          "description": "checkDone checkDoneEx Chunks Use this for enumeratees which do not have an input buffer",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "checkDone",
          "normalized": "((Stream a-\u003eIteratee a b c)-\u003eIteratee d b(Step a b c))-\u003eEnumeratee d a b c",
          "package": "enumerator",
          "partial": "Done",
          "signature": "((Stream a-\u003eIteratee a m b)-\u003eIteratee a' m(Step a m b))-\u003eEnumeratee a' a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA common pattern in \u003ccode\u003e\u003ca\u003eEnumeratee\u003c/a\u003e\u003c/code\u003e implementations is to check whether\n the inner \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e has finished, and if so, to return its output.\n \u003ccode\u003e\u003ca\u003echeckDone\u003c/a\u003e\u003c/code\u003e passes its parameter a continuation if the \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e\n can still consume input, or yields otherwise.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.3\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "checkDoneEx",
          "package": "enumerator",
          "signature": "Stream a' -\u003e ((Stream a -\u003e Iteratee a m b) -\u003e Iteratee a' m (Step a m b)) -\u003e Enumeratee a' a m b",
          "source": "src/Data-Enumerator-Internal.html#checkDoneEx",
          "type": "function"
        },
        "index": {
          "description": "common pattern in Enumeratee implementations is to check whether the inner Iteratee has finished and if so to return its output checkDone passes its parameter continuation if the Iteratee can still consume input or yields otherwise Since",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "checkDoneEx",
          "normalized": "Stream a-\u003e((Stream b-\u003eIteratee b c d)-\u003eIteratee a c(Step b c d))-\u003eEnumeratee a b c d",
          "package": "enumerator",
          "partial": "Done Ex",
          "signature": "Stream a'-\u003e((Stream a-\u003eIteratee a m b)-\u003eIteratee a' m(Step a m b))-\u003eEnumeratee a' a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:checkDoneEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e k = \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eContinue\u003c/a\u003e\u003c/code\u003e k)\u003c/pre\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "continue",
          "package": "enumerator",
          "signature": "(Stream a -\u003e Iteratee a m b) -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Internal.html#continue",
          "type": "function"
        },
        "index": {
          "description": "continue returnI Continue",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "continue",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "enumerator",
          "signature": "(Stream a-\u003eIteratee a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e to its iteratee. Most clients should use \u003ccode\u003erun\u003c/code\u003e or \u003ccode\u003erun_\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "enumEOF",
          "package": "enumerator",
          "signature": "Enumerator a m b",
          "source": "src/Data-Enumerator-Internal.html#enumEOF",
          "type": "function"
        },
        "index": {
          "description": "Sends EOF to its iteratee Most clients should use run or run instead",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "enumEOF",
          "package": "enumerator",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:enumEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e step = \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e (return step)\u003c/pre\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "returnI",
          "package": "enumerator",
          "signature": "Step a m b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Internal.html#returnI",
          "type": "function"
        },
        "index": {
          "description": "returnI step Iteratee return step",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "returnI",
          "normalized": "Step a b c-\u003eIteratee a b c",
          "package": "enumerator",
          "signature": "Step a m b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:returnI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Enumerator.Internal\",\"Data.Enumerator\"]",
          "name": "runIteratee",
          "package": "enumerator",
          "signature": "m (Step a m b)",
          "source": "src/Data-Enumerator-Internal.html#Iteratee",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:runIteratee\",\"http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:runIteratee\"]"
        },
        "index": {
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "runIteratee",
          "package": "enumerator",
          "partial": "Iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:runIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e x extra = \u003ccode\u003e\u003ca\u003ereturnI\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eYield\u003c/a\u003e\u003c/code\u003e x extra)\u003c/pre\u003e\u003cp\u003eWARNING: due to the current encoding of iteratees in this library,\n careless use of the \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e primitive may violate the monad laws.\n To prevent this, always make sure that an iteratee never yields\n extra data unless it has received at least one input element.\n\u003c/p\u003e\u003cp\u003eMore strictly, iteratees may not yield data that they did not\n receive as input. Don't use \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e to &#8220;inject&#8221; elements\n into the stream.\n\u003c/p\u003e",
          "module": "Data.Enumerator.Internal",
          "name": "yield",
          "package": "enumerator",
          "signature": "b -\u003e Stream a -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Internal.html#yield",
          "type": "function"
        },
        "index": {
          "description": "yield extra returnI Yield extra WARNING due to the current encoding of iteratees in this library careless use of the yield primitive may violate the monad laws To prevent this always make sure that an iteratee never yields extra data unless it has received at least one input element More strictly iteratees may not yield data that they did not receive as input Don use yield to inject elements into the stream",
          "hierarchy": "Data Enumerator Internal",
          "module": "Data.Enumerator.Internal",
          "name": "yield",
          "normalized": "a-\u003eStream b-\u003eIteratee b c a",
          "package": "enumerator",
          "signature": "b-\u003eStream a-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Internal.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator.List as EL\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Enumerator.List",
          "name": "List",
          "package": "enumerator",
          "source": "src/Data-Enumerator-List.html",
          "type": "module"
        },
        "index": {
          "description": "This module is intended to be imported qualified import qualified Data.Enumerator.List as EL Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "List",
          "package": "enumerator",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element\n and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "concatMap",
          "package": "enumerator",
          "signature": "(ao -\u003e [ai]) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "concatMap applies to each input element and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003eEnumeratee a b c d",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(ao-\u003e[ai])-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "concatMapAccum",
          "package": "enumerator",
          "signature": "(s -\u003e ao -\u003e (s, [ai])) -\u003e s -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#concatMapAccum",
          "type": "function"
        },
        "index": {
          "description": "Similar to concatMap but with stateful step function Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "concatMapAccum",
          "normalized": "(a-\u003eb-\u003e(a,[c]))-\u003ea-\u003eEnumeratee b c d e",
          "package": "enumerator",
          "partial": "Map Accum",
          "signature": "(s-\u003eao-\u003e(s,[ai]))-\u003es-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "concatMapAccumM",
          "package": "enumerator",
          "signature": "(s -\u003e ao -\u003e m (s, [ai])) -\u003e s -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#concatMapAccumM",
          "type": "function"
        },
        "index": {
          "description": "Similar to concatMapM but with stateful step function Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "concatMapAccumM",
          "normalized": "(a-\u003eb-\u003ec(a,[d]))-\u003ea-\u003eEnumeratee b d c e",
          "package": "enumerator",
          "partial": "Map Accum",
          "signature": "(s-\u003eao-\u003em(s,[ai]))-\u003es-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and feeds the\n resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "concatMapM",
          "package": "enumerator",
          "signature": "(ao -\u003e m [ai]) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#concatMapM",
          "type": "function"
        },
        "index": {
          "description": "concatMapM applies to each input element and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "concatMapM",
          "normalized": "(a-\u003eb[c])-\u003eEnumeratee a c b d",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(ao-\u003em[ai])-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "consume",
          "package": "enumerator",
          "signature": "Iteratee a m [a]",
          "source": "src/Data-Enumerator-List.html#consume",
          "type": "function"
        },
        "index": {
          "description": "consume takeWhile const True Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "consume",
          "normalized": "Iteratee a b[a]",
          "package": "enumerator",
          "signature": "Iteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e ignores \u003cem\u003en\u003c/em\u003e input elements from the stream.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "drop",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee a m ()",
          "source": "src/Data-Enumerator-List.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop ignores input elements from the stream Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "drop",
          "normalized": "Integer-\u003eIteratee a b()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e ignores input from the stream\n until the first element which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "dropWhile",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Iteratee a m ()",
          "source": "src/Data-Enumerator-List.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile ignores input from the stream until the first element which does not match the predicate Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eIteratee a b()",
          "package": "enumerator",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a predicate to the stream. The inner iteratee only receives\n elements for which the predicate is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "filter",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Enumeratee a a m b",
          "source": "src/Data-Enumerator-List.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Applies predicate to the stream The inner iteratee only receives elements for which the predicate is True Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "signature": "(a-\u003eBool)-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic predicate to the stream. The inner iteratee only\n receives elements for which the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "filterM",
          "package": "enumerator",
          "signature": "(a -\u003e m Bool) -\u003e Enumeratee a a m b",
          "source": "src/Data-Enumerator-List.html#filterM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic predicate to the stream The inner iteratee only receives elements for which the predicate returns True Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "signature": "(a-\u003em Bool)-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the entire input stream with a strict left fold, one element\n at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "fold",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-List.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Consume the entire input stream with strict left fold one element at time Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the entire input stream with a strict monadic left fold, one\n element at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "foldM",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-List.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Consume the entire input stream with strict monadic left fold one element at time Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e, except the computation may terminate the stream by\n returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "generateM",
          "package": "enumerator",
          "signature": "m (Maybe a) -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#generateM",
          "type": "function"
        },
        "index": {
          "description": "Like repeatM except the computation may terminate the stream by returning Nothing Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "generateM",
          "normalized": "a(Maybe b)-\u003eEnumerator b a c",
          "package": "enumerator",
          "signature": "m(Maybe a)-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:generateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next element from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "head",
          "package": "enumerator",
          "signature": "Iteratee a m (Maybe a)",
          "source": "src/Data-Enumerator-List.html#head",
          "type": "function"
        },
        "index": {
          "description": "Get the next element from the stream or Nothing if the stream has ended Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "head",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next element from the stream, or raise an error if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "head_",
          "package": "enumerator",
          "signature": "Iteratee a m a",
          "source": "src/Data-Enumerator-List.html#head_",
          "type": "function"
        },
        "index": {
          "description": "Get the next element from the stream or raise an error if the stream has ended Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "head_",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:head_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e reads at most \u003cem\u003en\u003c/em\u003e elements from the stream, and passes them\n to its iteratee. If the iteratee finishes early, elements continue to be\n consumed from the outer stream until \u003cem\u003en\u003c/em\u003e have been consumed.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "isolate",
          "package": "enumerator",
          "signature": "Integer -\u003e Enumeratee a a m b",
          "source": "src/Data-Enumerator-List.html#isolate",
          "type": "function"
        },
        "index": {
          "description": "isolate reads at most elements from the stream and passes them to its iteratee If the iteratee finishes early elements continue to be consumed from the outer stream until have been consumed Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "isolate",
          "normalized": "Integer-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "signature": "Integer-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:isolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolateWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e reads elements from the stream until \u003cem\u003ep\u003c/em\u003e is false, and\n passes them to its iteratee. If the iteratee finishes early, elements\n continue to be consumed from the outer stream until \u003cem\u003ep\u003c/em\u003e is false.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "isolateWhile",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Enumeratee a a m b",
          "source": "src/Data-Enumerator-List.html#isolateWhile",
          "type": "function"
        },
        "index": {
          "description": "isolateWhile reads elements from the stream until is false and passes them to its iteratee If the iteratee finishes early elements continue to be consumed from the outer stream until is false Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "isolateWhile",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:isolateWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e enumerates an infinite stream of\n repeated applications of \u003cem\u003ef\u003c/em\u003e to \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "iterate",
          "package": "enumerator",
          "signature": "(a -\u003e a) -\u003e a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate enumerates an infinite stream of repeated applications of to Analogous to iterate Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "(a-\u003ea)-\u003ea-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, except the iteration\n function is monadic.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "iterateM",
          "package": "enumerator",
          "signature": "(a -\u003e m a) -\u003e a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#iterateM",
          "type": "function"
        },
        "index": {
          "description": "Similar to iterate except the iteration function is monadic Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "iterateM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "(a-\u003em a)-\u003ea-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "map",
          "package": "enumerator",
          "signature": "(ao -\u003e ai) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#map",
          "type": "function"
        },
        "index": {
          "description": "map applies to each input element and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
          "package": "enumerator",
          "signature": "(ao-\u003eai)-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "mapAccum",
          "package": "enumerator",
          "signature": "(s -\u003e ao -\u003e (s, ai)) -\u003e s -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Similar to map but with stateful step function Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumeratee b c d e",
          "package": "enumerator",
          "partial": "Accum",
          "signature": "(s-\u003eao-\u003e(s,ai))-\u003es-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "mapAccumM",
          "package": "enumerator",
          "signature": "(s -\u003e ao -\u003e m (s, ai)) -\u003e s -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#mapAccumM",
          "type": "function"
        },
        "index": {
          "description": "Similar to mapM but with stateful step function Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "mapAccumM",
          "normalized": "(a-\u003eb-\u003ec(a,d))-\u003ea-\u003eEnumeratee b d c e",
          "package": "enumerator",
          "partial": "Accum",
          "signature": "(s-\u003eao-\u003em(s,ai))-\u003es-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "mapM",
          "package": "enumerator",
          "signature": "(ao -\u003e m ai) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-List.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "mapM applies to each input element and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eEnumeratee a c b d",
          "package": "enumerator",
          "signature": "(ao-\u003em ai)-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input element, and\n discards the results.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "mapM_",
          "package": "enumerator",
          "signature": "(a -\u003e m b) -\u003e Iteratee a m ()",
          "source": "src/Data-Enumerator-List.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "mapM applies to each input element and discards the results Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003eIteratee a b()",
          "package": "enumerator",
          "signature": "(a-\u003em b)-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates an infinite stream of a single element.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "repeat",
          "package": "enumerator",
          "signature": "a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Enumerates an infinite stream of single element Analogous to repeat Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "repeat",
          "normalized": "a-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "a-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates an infinite stream of element. Each element is computed by\n the underlying monad.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "repeatM",
          "package": "enumerator",
          "signature": "m a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#repeatM",
          "type": "function"
        },
        "index": {
          "description": "Enumerates an infinite stream of element Each element is computed by the underlying monad Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "repeatM",
          "normalized": "a b-\u003eEnumerator b a c",
          "package": "enumerator",
          "signature": "m a-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e enumerates a stream containing\n \u003cem\u003en\u003c/em\u003e copies of \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "replicate",
          "package": "enumerator",
          "signature": "Integer -\u003e a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate enumerates stream containing copies of Analogous to replicate Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "replicate",
          "normalized": "Integer-\u003ea-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "Integer-\u003ea-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n m_x\u003c/code\u003e enumerates a stream of \u003cem\u003en\u003c/em\u003e elements, with each\n element computed by \u003cem\u003em_x\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "replicateM",
          "package": "enumerator",
          "signature": "Integer -\u003e m a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#replicateM",
          "type": "function"
        },
        "index": {
          "description": "replicateM enumerates stream of elements with each element computed by Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "replicateM",
          "normalized": "Integer-\u003ea b-\u003eEnumerator b a c",
          "package": "enumerator",
          "signature": "Integer-\u003em a-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erequire\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e buffers input until at least \u003cem\u003en\u003c/em\u003e elements are available, or\n throws an error if the stream ends early.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "require",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee a m ()",
          "source": "src/Data-Enumerator-List.html#require",
          "type": "function"
        },
        "index": {
          "description": "require buffers input until at least elements are available or throws an error if the stream ends early Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "require",
          "normalized": "Integer-\u003eIteratee a b()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on elements satisfying a given predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "splitWhen",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Enumeratee a [a] m b",
          "source": "src/Data-Enumerator-List.html#splitWhen",
          "type": "function"
        },
        "index": {
          "description": "Split on elements satisfying given predicate Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "splitWhen",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee a[a]b c",
          "package": "enumerator",
          "partial": "When",
          "signature": "(a-\u003eBool)-\u003eEnumeratee a[a]m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:splitWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e extracts the next \u003cem\u003en\u003c/em\u003e elements from the\n stream, as a list.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "take",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee a m [a]",
          "source": "src/Data-Enumerator-List.html#take",
          "type": "function"
        },
        "index": {
          "description": "take extracts the next elements from the stream as list Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "take",
          "normalized": "Integer-\u003eIteratee a b[a]",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e extracts input from the stream until the first element\n which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "takeWhile",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Iteratee a m [a]",
          "source": "src/Data-Enumerator-List.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile extracts input from the stream until the first element which does not match the predicate Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eIteratee a b[a]",
          "package": "enumerator",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eIteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a stream of elements by repeatedly applying a function to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "unfold",
          "package": "enumerator",
          "signature": "(s -\u003e Maybe (a, s)) -\u003e s -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "Enumerates stream of elements by repeatedly applying function to some state Similar to iterate Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "unfold",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eEnumerator b c d",
          "package": "enumerator",
          "signature": "(s-\u003eMaybe(a,s))-\u003es-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a stream of elements by repeatedly applying a computation to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "unfoldM",
          "package": "enumerator",
          "signature": "(s -\u003e m (Maybe (a, s))) -\u003e s -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-List.html#unfoldM",
          "type": "function"
        },
        "index": {
          "description": "Enumerates stream of elements by repeatedly applying computation to some state Similar to iterateM Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "unfoldM",
          "normalized": "(a-\u003eb(Maybe(c,a)))-\u003ea-\u003eEnumerator c b d",
          "package": "enumerator",
          "signature": "(s-\u003em(Maybe(a,s)))-\u003es-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove duplicate elements from a stream, passing through the first\n instance of each value.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003enub\u003c/code\u003e, but more efficient because it uses a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e\n internally.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "unique",
          "package": "enumerator",
          "signature": "Enumeratee a a m b",
          "source": "src/Data-Enumerator-List.html#unique",
          "type": "function"
        },
        "index": {
          "description": "Remove duplicate elements from stream passing through the first instance of each value Similar to nub but more efficient because it uses Set internally Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "unique",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zip",
          "package": "enumerator",
          "signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m (b1, b2)",
          "source": "src/Data-Enumerator-List.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Analogous to zip Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zip",
          "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through three iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zip3",
          "package": "enumerator",
          "signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m (b1, b2, b3)",
          "source": "src/Data-Enumerator-List.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through three iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip3 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zip3",
          "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through four iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zip4",
          "package": "enumerator",
          "signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m (b1, b2, b3, b4)",
          "source": "src/Data-Enumerator-List.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through four iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip4 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zip4",
          "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through five iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zip5",
          "package": "enumerator",
          "signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m (b1, b2, b3, b4, b5)",
          "source": "src/Data-Enumerator-List.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through five iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip5 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zip5",
          "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c,c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through six iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zip6",
          "package": "enumerator",
          "signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m (b1, b2, b3, b4, b5, b6)",
          "source": "src/Data-Enumerator-List.html#zip6",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through six iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip6 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zip6",
          "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c,c,c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through seven iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zip7",
          "package": "enumerator",
          "signature": "Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m b7 -\u003e Iteratee a m (b1, b2, b3, b4, b5, b6, b7)",
          "source": "src/Data-Enumerator-List.html#zip7",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through seven iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip7 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zip7",
          "normalized": "Iteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b c-\u003eIteratee a b(c,c,c,c,c,c,c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m(b,b,b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zipWith",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m c",
          "source": "src/Data-Enumerator-List.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zipWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zipWith3",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m c",
          "source": "src/Data-Enumerator-List.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith3 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zipWith3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zipWith4",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m c",
          "source": "src/Data-Enumerator-List.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith4 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zipWith4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zipWith5",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m c",
          "source": "src/Data-Enumerator-List.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith5 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zipWith5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zipWith6",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m c",
          "source": "src/Data-Enumerator-List.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith6 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zipWith6",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.List",
          "name": "zipWith7",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e b7 -\u003e c) -\u003e Iteratee a m b1 -\u003e Iteratee a m b2 -\u003e Iteratee a m b3 -\u003e Iteratee a m b4 -\u003e Iteratee a m b5 -\u003e Iteratee a m b6 -\u003e Iteratee a m b7 -\u003e Iteratee a m c",
          "source": "src/Data-Enumerator-List.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith7 Since",
          "hierarchy": "Data Enumerator List",
          "module": "Data.Enumerator.List",
          "name": "zipWith7",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d a-\u003eIteratee c d b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m b-\u003eIteratee a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-List.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCharacter-oriented alternatives to \u003ca\u003eData.Enumerator.List\u003c/a\u003e. Note that the\n enumeratees in this module must unpack their inputs to work properly. If\n you do not need to handle leftover input on a char-by-char basis, the\n chunk-oriented versions will be much faster.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator.Text as ET\n\u003c/pre\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Enumerator.Text",
          "name": "Text",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Character-oriented alternatives to Data.Enumerator.List Note that the enumeratees in this module must unpack their inputs to work properly If you do not need to handle leftover input on char-by-char basis the chunk-oriented versions will be much faster This module is intended to be imported qualified import qualified Data.Enumerator.Text as ET Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "Text",
          "package": "enumerator",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "Codec",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Text.html#Codec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "Codec",
          "package": "enumerator",
          "partial": "Codec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#t:Codec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "ascii",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#ascii",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "ascii",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input\n character and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "concatMap",
          "package": "enumerator",
          "signature": "(Char -\u003e Text) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "concatMap applies to each input character and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "concatMap",
          "normalized": "(Char-\u003eText)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(Char-\u003eText)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "concatMapAccum",
          "package": "enumerator",
          "signature": "(s -\u003e Char -\u003e (s, Text)) -\u003e s -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#concatMapAccum",
          "type": "function"
        },
        "index": {
          "description": "Similar to concatMap but with stateful step function Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "concatMapAccum",
          "normalized": "(a-\u003eChar-\u003e(a,Text))-\u003ea-\u003eEnumeratee Text Text b c",
          "package": "enumerator",
          "partial": "Map Accum",
          "signature": "(s-\u003eChar-\u003e(s,Text))-\u003es-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "concatMapAccumM",
          "package": "enumerator",
          "signature": "(s -\u003e Char -\u003e m (s, Text)) -\u003e s -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#concatMapAccumM",
          "type": "function"
        },
        "index": {
          "description": "Similar to concatMapM but with stateful step function Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "concatMapAccumM",
          "normalized": "(a-\u003eChar-\u003eb(a,Text))-\u003ea-\u003eEnumeratee Text Text b c",
          "package": "enumerator",
          "partial": "Map Accum",
          "signature": "(s-\u003eChar-\u003em(s,Text))-\u003es-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character and feeds the\n resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "concatMapM",
          "package": "enumerator",
          "signature": "(Char -\u003e m Text) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#concatMapM",
          "type": "function"
        },
        "index": {
          "description": "concatMapM applies to each input character and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "concatMapM",
          "normalized": "(Char-\u003ea Text)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(Char-\u003em Text)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e (const True)\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "consume",
          "package": "enumerator",
          "signature": "Iteratee Text m Text",
          "source": "src/Data-Enumerator-Text.html#consume",
          "type": "function"
        },
        "index": {
          "description": "consume takeWhile const True Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "consume",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert bytes into text, using the provided codec. If the codec is\n not capable of decoding an input byte sequence, an error will be thrown.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "decode",
          "package": "enumerator",
          "signature": "Codec -\u003e Enumeratee ByteString Text m b",
          "source": "src/Data-Enumerator-Text.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Convert bytes into text using the provided codec If the codec is not capable of decoding an input byte sequence an error will be thrown Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "decode",
          "normalized": "Codec-\u003eEnumeratee ByteString Text a b",
          "package": "enumerator",
          "signature": "Codec-\u003eEnumeratee ByteString Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e ignores \u003cem\u003en\u003c/em\u003e characters of input from the stream.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "drop",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee Text m ()",
          "source": "src/Data-Enumerator-Text.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop ignores characters of input from the stream Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "drop",
          "normalized": "Integer-\u003eIteratee Text a()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee Text m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e ignores input from the stream\n until the first character which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "dropWhile",
          "package": "enumerator",
          "signature": "(Char -\u003e Bool) -\u003e Iteratee Text m ()",
          "source": "src/Data-Enumerator-Text.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile ignores input from the stream until the first character which does not match the predicate Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eIteratee Text a()",
          "package": "enumerator",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eIteratee Text m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert text into bytes, using the provided codec. If the codec is\n not capable of representing an input character, an error will be thrown.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "encode",
          "package": "enumerator",
          "signature": "Codec -\u003e Enumeratee Text ByteString m b",
          "source": "src/Data-Enumerator-Text.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convert text into bytes using the provided codec If the codec is not capable of representing an input character an error will be thrown Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "encode",
          "normalized": "Codec-\u003eEnumeratee Text ByteString a b",
          "package": "enumerator",
          "signature": "Codec-\u003eEnumeratee Text ByteString m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead lines of text from a file, and stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n If an exception occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n will be returned. Exceptions from the iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThe file will be opened in text mode, and will be closed when the\n \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e finishes.\n\u003c/p\u003e\u003cp\u003eThis function may be significantly slower than using\n \u003ccode\u003eData.Enumerator.Binary.enumFile\u003c/code\u003e, due to the additional overhead of\n decoding input data to Unicode. Users who can depend on their input files\n being in a certain encoding (such as UTF8) are encouraged to use binary\n input and \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eChanged in 0.4.18: Lines streamed from \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFile\u003c/a\u003e\u003c/code\u003e now\n include their trailing newline.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "enumFile",
          "package": "enumerator",
          "signature": "FilePath -\u003e Enumerator Text IO b",
          "source": "src/Data-Enumerator-Text.html#enumFile",
          "type": "function"
        },
        "index": {
          "description": "Read lines of text from file and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught The file will be opened in text mode and will be closed when the Iteratee finishes This function may be significantly slower than using Data.Enumerator.Binary.enumFile due to the additional overhead of decoding input data to Unicode Users who can depend on their input files being in certain encoding such as UTF8 are encouraged to use binary input and decode Changed in Lines streamed from enumHandle and enumFile now include their trailing newline Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "enumFile",
          "normalized": "FilePath-\u003eEnumerator Text IO a",
          "package": "enumerator",
          "partial": "File",
          "signature": "FilePath-\u003eEnumerator Text IO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:enumFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead lines of text from a handle, and stream them to an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e.\n If an exception occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e\n will be returned. Exceptions from the iteratee are not caught.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with an appropriate text encoding, and\n in \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function may be significantly slower than using\n \u003ccode\u003eData.Enumerator.Binary.enumHandle\u003c/code\u003e, due to the additional overhead of\n decoding input data to Unicode. Users who can depend on their input files\n being in a certain encoding (such as UTF8) are encouraged to use binary\n input and \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eChanged in 0.4.18: Lines streamed from \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eenumFile\u003c/a\u003e\u003c/code\u003e now\n include their trailing newline.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "enumHandle",
          "package": "enumerator",
          "signature": "Handle -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#enumHandle",
          "type": "function"
        },
        "index": {
          "description": "Read lines of text from handle and stream them to an Iteratee If an exception occurs during file IO enumeration will stop and Error will be returned Exceptions from the iteratee are not caught The handle should be opened with an appropriate text encoding and in ReadMode or ReadWriteMode This function may be significantly slower than using Data.Enumerator.Binary.enumHandle due to the additional overhead of decoding input data to Unicode Users who can depend on their input files being in certain encoding such as UTF8 are encouraged to use binary input and decode Changed in Lines streamed from enumHandle and enumFile now include their trailing newline Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "enumHandle",
          "normalized": "Handle-\u003eEnumerator Text a b",
          "package": "enumerator",
          "partial": "Handle",
          "signature": "Handle-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:enumHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a predicate to the stream. The inner iteratee only receives\n characters for which the predicate is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "filter",
          "package": "enumerator",
          "signature": "(Char -\u003e Bool) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Applies predicate to the stream The inner iteratee only receives characters for which the predicate is True Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "signature": "(Char-\u003eBool)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a monadic predicate to the stream. The inner iteratee only\n receives characters for which the predicate returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "filterM",
          "package": "enumerator",
          "signature": "(Char -\u003e m Bool) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#filterM",
          "type": "function"
        },
        "index": {
          "description": "Applies monadic predicate to the stream The inner iteratee only receives characters for which the predicate returns True Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "filterM",
          "normalized": "(Char-\u003ea Bool)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "signature": "(Char-\u003em Bool)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the entire input stream with a strict left fold, one character\n at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "fold",
          "package": "enumerator",
          "signature": "(b -\u003e Char -\u003e b) -\u003e b -\u003e Iteratee Text m b",
          "source": "src/Data-Enumerator-Text.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Consume the entire input stream with strict left fold one character at time Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "fold",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eIteratee Text b a",
          "package": "enumerator",
          "signature": "(b-\u003eChar-\u003eb)-\u003eb-\u003eIteratee Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the entire input stream with a strict monadic left fold, one\n character at a time.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "foldM",
          "package": "enumerator",
          "signature": "(b -\u003e Char -\u003e m b) -\u003e b -\u003e Iteratee Text m b",
          "source": "src/Data-Enumerator-Text.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Consume the entire input stream with strict monadic left fold one character at time Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "foldM",
          "normalized": "(a-\u003eChar-\u003eb a)-\u003ea-\u003eIteratee Text b a",
          "package": "enumerator",
          "signature": "(b-\u003eChar-\u003em b)-\u003eb-\u003eIteratee Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e, except the computation may terminate the stream by\n returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "generateM",
          "package": "enumerator",
          "signature": "m (Maybe Char) -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#generateM",
          "type": "function"
        },
        "index": {
          "description": "Like repeatM except the computation may terminate the stream by returning Nothing Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "generateM",
          "normalized": "a(Maybe Char)-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "m(Maybe Char)-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:generateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next character from the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream has\n ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "head",
          "package": "enumerator",
          "signature": "Iteratee Text m (Maybe Char)",
          "source": "src/Data-Enumerator-Text.html#head",
          "type": "function"
        },
        "index": {
          "description": "Get the next character from the stream or Nothing if the stream has ended Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "head",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next element from the stream, or raise an error if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "head_",
          "package": "enumerator",
          "signature": "Iteratee Text m Char",
          "source": "src/Data-Enumerator-Text.html#head_",
          "type": "function"
        },
        "index": {
          "description": "Get the next element from the stream or raise an error if the stream has ended Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "head_",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:head_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "iso8859_1",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#iso8859_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "iso8859_1",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iso8859_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolate\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e reads at most \u003cem\u003en\u003c/em\u003e characters from the stream, and passes\n them to its iteratee. If the iteratee finishes early, characters continue\n to be consumed from the outer stream until \u003cem\u003en\u003c/em\u003e have been consumed.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "isolate",
          "package": "enumerator",
          "signature": "Integer -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#isolate",
          "type": "function"
        },
        "index": {
          "description": "isolate reads at most characters from the stream and passes them to its iteratee If the iteratee finishes early characters continue to be consumed from the outer stream until have been consumed Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "isolate",
          "normalized": "Integer-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "signature": "Integer-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:isolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisolateWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e reads characters from the stream until \u003cem\u003ep\u003c/em\u003e is false, and\n passes them to its iteratee. If the iteratee finishes early, characters\n continue to be consumed from the outer stream until \u003cem\u003ep\u003c/em\u003e is false.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "isolateWhile",
          "package": "enumerator",
          "signature": "(Char -\u003e Bool) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#isolateWhile",
          "type": "function"
        },
        "index": {
          "description": "isolateWhile reads characters from the stream until is false and passes them to its iteratee If the iteratee finishes early characters continue to be consumed from the outer stream until is false Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "isolateWhile",
          "normalized": "(Char-\u003eBool)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:isolateWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead text from a stream and write it to a handle. If an exception\n occurs during file IO, enumeration will stop and \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e will be\n returned.\n\u003c/p\u003e\u003cp\u003eThe handle should be opened with an appropriate text encoding, and\n in \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "iterHandle",
          "package": "enumerator",
          "signature": "Handle -\u003e Iteratee Text m ()",
          "source": "src/Data-Enumerator-Text.html#iterHandle",
          "type": "function"
        },
        "index": {
          "description": "Read text from stream and write it to handle If an exception occurs during file IO enumeration will stop and Error will be returned The handle should be opened with an appropriate text encoding and in WriteMode or ReadWriteMode Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "iterHandle",
          "normalized": "Handle-\u003eIteratee Text a()",
          "package": "enumerator",
          "partial": "Handle",
          "signature": "Handle-\u003eIteratee Text m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iterHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e enumerates an infinite stream of\n repeated applications of \u003cem\u003ef\u003c/em\u003e to \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "iterate",
          "package": "enumerator",
          "signature": "(Char -\u003e Char) -\u003e Char -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate enumerates an infinite stream of repeated applications of to Analogous to iterate Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "iterate",
          "normalized": "(Char-\u003eChar)-\u003eChar-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "(Char-\u003eChar)-\u003eChar-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e, except the iteration\n function is monadic.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "iterateM",
          "package": "enumerator",
          "signature": "(Char -\u003e m Char) -\u003e Char -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#iterateM",
          "type": "function"
        },
        "index": {
          "description": "Similar to iterate except the iteration function is monadic Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "iterateM",
          "normalized": "(Char-\u003ea Char)-\u003eChar-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "(Char-\u003em Char)-\u003eChar-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003esplitWhen\u003c/a\u003e\u003c/code\u003e (== '\\n')\u003c/pre\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "lines",
          "package": "enumerator",
          "signature": "Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines splitWhen Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "lines",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character and\n feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "map",
          "package": "enumerator",
          "signature": "(Char -\u003e Char) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#map",
          "type": "function"
        },
        "index": {
          "description": "map applies to each input character and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "signature": "(Char-\u003eChar)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "mapAccum",
          "package": "enumerator",
          "signature": "(s -\u003e Char -\u003e (s, Char)) -\u003e s -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Similar to map but with stateful step function Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "mapAccum",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eEnumeratee Text Text b c",
          "package": "enumerator",
          "partial": "Accum",
          "signature": "(s-\u003eChar-\u003e(s,Char))-\u003es-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but with a stateful step\n function.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "mapAccumM",
          "package": "enumerator",
          "signature": "(s -\u003e Char -\u003e m (s, Char)) -\u003e s -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#mapAccumM",
          "type": "function"
        },
        "index": {
          "description": "Similar to mapM but with stateful step function Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "mapAccumM",
          "normalized": "(a-\u003eChar-\u003eb(a,Char))-\u003ea-\u003eEnumeratee Text Text b c",
          "package": "enumerator",
          "partial": "Accum",
          "signature": "(s-\u003eChar-\u003em(s,Char))-\u003es-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character\n and feeds the resulting outputs to the inner iteratee.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "mapM",
          "package": "enumerator",
          "signature": "(Char -\u003e m Char) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "mapM applies to each input character and feeds the resulting outputs to the inner iteratee Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "mapM",
          "normalized": "(Char-\u003ea Char)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "signature": "(Char-\u003em Char)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e applies \u003cem\u003ef\u003c/em\u003e to each input character,\n and discards the results.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.11\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "mapM_",
          "package": "enumerator",
          "signature": "(Char -\u003e m ()) -\u003e Iteratee Text m ()",
          "source": "src/Data-Enumerator-Text.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "mapM applies to each input character and discards the results Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "mapM_",
          "normalized": "(Char-\u003ea())-\u003eIteratee Text a()",
          "package": "enumerator",
          "signature": "(Char-\u003em())-\u003eIteratee Text m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates an infinite stream of a single character.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "repeat",
          "package": "enumerator",
          "signature": "Char -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Enumerates an infinite stream of single character Analogous to repeat Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "repeat",
          "normalized": "Char-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "Char-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates an infinite stream of characters. Each character is computed\n by the underlying monad.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "repeatM",
          "package": "enumerator",
          "signature": "m Char -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#repeatM",
          "type": "function"
        },
        "index": {
          "description": "Enumerates an infinite stream of characters Each character is computed by the underlying monad Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "repeatM",
          "normalized": "a Char-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "m Char-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e enumerates a stream containing\n \u003cem\u003en\u003c/em\u003e copies of \u003cem\u003ex\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "replicate",
          "package": "enumerator",
          "signature": "Integer -\u003e Char -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate enumerates stream containing copies of Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "replicate",
          "normalized": "Integer-\u003eChar-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "Integer-\u003eChar-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e n m_x\u003c/code\u003e enumerates a stream of \u003cem\u003en\u003c/em\u003e characters, with each\n character computed by \u003cem\u003em_x\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "replicateM",
          "package": "enumerator",
          "signature": "Integer -\u003e m Char -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#replicateM",
          "type": "function"
        },
        "index": {
          "description": "replicateM enumerates stream of characters with each character computed by Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "replicateM",
          "normalized": "Integer-\u003ea Char-\u003eEnumerator Text a b",
          "package": "enumerator",
          "signature": "Integer-\u003em Char-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erequire\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e buffers input until at least \u003cem\u003en\u003c/em\u003e characters are available,\n or throws an error if the stream ends early.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "require",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee Text m ()",
          "source": "src/Data-Enumerator-Text.html#require",
          "type": "function"
        },
        "index": {
          "description": "require buffers input until at least characters are available or throws an error if the stream ends early Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "require",
          "normalized": "Integer-\u003eIteratee Text a()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee Text m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on characters satisfying a given predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "splitWhen",
          "package": "enumerator",
          "signature": "(Char -\u003e Bool) -\u003e Enumeratee Text Text m b",
          "source": "src/Data-Enumerator-Text.html#splitWhen",
          "type": "function"
        },
        "index": {
          "description": "Split on characters satisfying given predicate Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "splitWhen",
          "normalized": "(Char-\u003eBool)-\u003eEnumeratee Text Text a b",
          "package": "enumerator",
          "partial": "When",
          "signature": "(Char-\u003eBool)-\u003eEnumeratee Text Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:splitWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n\u003c/code\u003e extracts the next \u003cem\u003en\u003c/em\u003e characters from\n the stream, as a lazy Text.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "take",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee Text m Text",
          "source": "src/Data-Enumerator-Text.html#take",
          "type": "function"
        },
        "index": {
          "description": "take extracts the next characters from the stream as lazy Text Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "take",
          "normalized": "Integer-\u003eIteratee Text a Text",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee Text m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e extracts input from the stream until the first character\n which does not match the predicate.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "takeWhile",
          "package": "enumerator",
          "signature": "(Char -\u003e Bool) -\u003e Iteratee Text m Text",
          "source": "src/Data-Enumerator-Text.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile extracts input from the stream until the first character which does not match the predicate Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eIteratee Text a Text",
          "package": "enumerator",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eIteratee Text m Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a stream of characters by repeatedly applying a function to\n some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "unfold",
          "package": "enumerator",
          "signature": "(s -\u003e Maybe (Char, s)) -\u003e s -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "Enumerates stream of characters by repeatedly applying function to some state Similar to iterate Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "unfold",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eEnumerator Text b c",
          "package": "enumerator",
          "signature": "(s-\u003eMaybe(Char,s))-\u003es-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerates a stream of characters by repeatedly applying a computation\n to some state.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.8\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "unfoldM",
          "package": "enumerator",
          "signature": "(s -\u003e m (Maybe (Char, s))) -\u003e s -\u003e Enumerator Text m b",
          "source": "src/Data-Enumerator-Text.html#unfoldM",
          "type": "function"
        },
        "index": {
          "description": "Enumerates stream of characters by repeatedly applying computation to some state Similar to iterateM Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "unfoldM",
          "normalized": "(a-\u003eb(Maybe(Char,a)))-\u003ea-\u003eEnumerator Text b c",
          "package": "enumerator",
          "signature": "(s-\u003em(Maybe(Char,s)))-\u003es-\u003eEnumerator Text m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:unfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "utf16_be",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#utf16_be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "utf16_be",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf16_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "utf16_le",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#utf16_le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "utf16_le",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf16_le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "utf32_be",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#utf32_be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "utf32_be",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf32_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "utf32_le",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#utf32_le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "utf32_le",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf32_le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Enumerator.Text",
          "name": "utf8",
          "package": "enumerator",
          "signature": "Codec",
          "source": "src/Data-Enumerator-Text.html#utf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "utf8",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zip",
          "package": "enumerator",
          "signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m (b1, b2)",
          "source": "src/Data-Enumerator-Text.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Analogous to zip Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zip",
          "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b)",
          "package": "enumerator",
          "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through three iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zip3",
          "package": "enumerator",
          "signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m (b1, b2, b3)",
          "source": "src/Data-Enumerator-Text.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through three iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip3 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zip3",
          "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through four iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zip4",
          "package": "enumerator",
          "signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m (b1, b2, b3, b4)",
          "source": "src/Data-Enumerator-Text.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through four iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip4 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zip4",
          "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through five iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zip5",
          "package": "enumerator",
          "signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m (b1, b2, b3, b4, b5)",
          "source": "src/Data-Enumerator-Text.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through five iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip5 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zip5",
          "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through six iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zip6",
          "package": "enumerator",
          "signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m (b1, b2, b3, b4, b5, b6)",
          "source": "src/Data-Enumerator-Text.html#zip6",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through six iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip6 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zip6",
          "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through seven iteratees at once. Excess input is\n yielded if it was not consumed by any iteratee.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zip7",
          "package": "enumerator",
          "signature": "Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m b7 -\u003e Iteratee Text m (b1, b2, b3, b4, b5, b6, b7)",
          "source": "src/Data-Enumerator-Text.html#zip7",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through seven iteratees at once Excess input is yielded if it was not consumed by any iteratee Analogous to zip7 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zip7",
          "normalized": "Iteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a b-\u003eIteratee Text a(b,b,b,b,b,b,b)",
          "package": "enumerator",
          "signature": "Iteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m(b,b,b,b,b,b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zipWith",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m c",
          "source": "src/Data-Enumerator-Text.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zipWith",
          "normalized": "(a-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zipWith3",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m c",
          "source": "src/Data-Enumerator-Text.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith3 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zipWith3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zipWith4",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m c",
          "source": "src/Data-Enumerator-Text.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith4 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zipWith4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zipWith5",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m c",
          "source": "src/Data-Enumerator-Text.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith5 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zipWith5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zipWith6",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m c",
          "source": "src/Data-Enumerator-Text.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith6 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zipWith6",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass input from a stream through two iteratees at once. Excess input is\n yielded if it was not consumed by either iteratee. Output from the\n iteratees is combined with a user-provided function.\n\u003c/p\u003e\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.14\n\u003c/p\u003e",
          "module": "Data.Enumerator.Text",
          "name": "zipWith7",
          "package": "enumerator",
          "signature": "(b1 -\u003e b2 -\u003e b3 -\u003e b4 -\u003e b5 -\u003e b6 -\u003e b7 -\u003e c) -\u003e Iteratee Text m b1 -\u003e Iteratee Text m b2 -\u003e Iteratee Text m b3 -\u003e Iteratee Text m b4 -\u003e Iteratee Text m b5 -\u003e Iteratee Text m b6 -\u003e Iteratee Text m b7 -\u003e Iteratee Text m c",
          "source": "src/Data-Enumerator-Text.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "Pass input from stream through two iteratees at once Excess input is yielded if it was not consumed by either iteratee Output from the iteratees is combined with user-provided function Analogous to zipWith7 Since",
          "hierarchy": "Data Enumerator Text",
          "module": "Data.Enumerator.Text",
          "name": "zipWith7",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c a-\u003eIteratee Text c b",
          "package": "enumerator",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003eb-\u003ec)-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m b-\u003eIteratee Text m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Text.html#v:zipWith7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for running monad transformers within\n iteratees. Most types defined in the \"transformers\" library are\n supported.\n\u003c/p\u003e\u003cp\u003eFunctions suffixed with an apostrophe (\u003ccode\u003e'\u003c/code\u003e) apply to the strict variant\n of their transformer type.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "Trans",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for running monad transformers within iteratees Most types defined in the transformers library are supported Functions suffixed with an apostrophe apply to the strict variant of their transformer type Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "Trans",
          "package": "enumerator",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eevalRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "evalRWSI",
          "package": "enumerator",
          "signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, w)",
          "source": "src/Data-Enumerator-Trans.html#evalRWSI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy evalRWST Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "evalRWSI",
          "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,d)",
          "package": "enumerator",
          "partial": "RWSI",
          "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalRWSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eevalRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "evalRWSI'",
          "package": "enumerator",
          "signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, w)",
          "source": "src/Data-Enumerator-Trans.html#evalRWSI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict evalRWST Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "evalRWSI'",
          "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,d)",
          "package": "enumerator",
          "partial": "RWSI'",
          "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalRWSI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eevalStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "evalStateI",
          "package": "enumerator",
          "signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Trans.html#evalStateI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy evalStateT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "evalStateI",
          "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c d",
          "package": "enumerator",
          "partial": "State",
          "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalStateI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eevalStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "evalStateI'",
          "package": "enumerator",
          "signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Trans.html#evalStateI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict evalStateT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "evalStateI'",
          "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c d",
          "package": "enumerator",
          "partial": "State I'",
          "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:evalStateI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eexecRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "execRWSI",
          "package": "enumerator",
          "signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (s, w)",
          "source": "src/Data-Enumerator-Trans.html#execRWSI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy execRWST Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "execRWSI",
          "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(b,d)",
          "package": "enumerator",
          "partial": "RWSI",
          "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execRWSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eexecRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "execRWSI'",
          "package": "enumerator",
          "signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (s, w)",
          "source": "src/Data-Enumerator-Trans.html#execRWSI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict execRWST Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "execRWSI'",
          "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(b,d)",
          "package": "enumerator",
          "partial": "RWSI'",
          "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execRWSI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003eexecWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "execWriterI",
          "package": "enumerator",
          "signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m w",
          "source": "src/Data-Enumerator-Trans.html#execWriterI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy execWriterT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "execWriterI",
          "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c b",
          "package": "enumerator",
          "partial": "Writer",
          "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execWriterI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003eexecWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "execWriterI'",
          "package": "enumerator",
          "signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m w",
          "source": "src/Data-Enumerator-Trans.html#execWriterI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict execWriterT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "execWriterI'",
          "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c b",
          "package": "enumerator",
          "partial": "Writer I'",
          "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:execWriterI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of \u003ccode\u003erunErrorT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runErrorI",
          "package": "enumerator",
          "signature": "Iteratee a (ErrorT e m) b -\u003e Iteratee a m (Either e b)",
          "source": "src/Data-Enumerator-Trans.html#runErrorI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of runErrorT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runErrorI",
          "normalized": "Iteratee a(ErrorT b c)d-\u003eIteratee a c(Either b d)",
          "package": "enumerator",
          "partial": "Error",
          "signature": "Iteratee a(ErrorT e m)b-\u003eIteratee a m(Either e b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runErrorI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of \u003ccode\u003erunIdentityT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runIdentityI",
          "package": "enumerator",
          "signature": "Iteratee a (IdentityT m) b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Trans.html#runIdentityI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of runIdentityT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runIdentityI",
          "normalized": "Iteratee a(IdentityT b)c-\u003eIteratee a b c",
          "package": "enumerator",
          "partial": "Identity",
          "signature": "Iteratee a(IdentityT m)b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runIdentityI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of \u003ccode\u003erunMaybeT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runMaybeI",
          "package": "enumerator",
          "signature": "Iteratee a (MaybeT m) b -\u003e Iteratee a m (Maybe b)",
          "source": "src/Data-Enumerator-Trans.html#runMaybeI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of runMaybeT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runMaybeI",
          "normalized": "Iteratee a(MaybeT b)c-\u003eIteratee a b(Maybe c)",
          "package": "enumerator",
          "partial": "Maybe",
          "signature": "Iteratee a(MaybeT m)b-\u003eIteratee a m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runMaybeI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003erunRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runRWSI",
          "package": "enumerator",
          "signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, s, w)",
          "source": "src/Data-Enumerator-Trans.html#runRWSI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy runRWST Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runRWSI",
          "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,b,d)",
          "package": "enumerator",
          "partial": "RWSI",
          "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runRWSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003erunRWST\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runRWSI'",
          "package": "enumerator",
          "signature": "r -\u003e s -\u003e Iteratee a (RWST r w s m) b -\u003e Iteratee a m (b, s, w)",
          "source": "src/Data-Enumerator-Trans.html#runRWSI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict runRWST Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runRWSI'",
          "normalized": "a-\u003eb-\u003eIteratee c(RWST a d b e)f-\u003eIteratee c e(f,b,d)",
          "package": "enumerator",
          "partial": "RWSI'",
          "signature": "r-\u003es-\u003eIteratee a(RWST r w s m)b-\u003eIteratee a m(b,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runRWSI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of \u003ccode\u003erunReaderT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runReaderI",
          "package": "enumerator",
          "signature": "r -\u003e Iteratee a (ReaderT r m) b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Trans.html#runReaderI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of runReaderT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runReaderI",
          "normalized": "a-\u003eIteratee b(ReaderT a c)d-\u003eIteratee b c d",
          "package": "enumerator",
          "partial": "Reader",
          "signature": "r-\u003eIteratee a(ReaderT r m)b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runReaderI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003erunStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runStateI",
          "package": "enumerator",
          "signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m (b, s)",
          "source": "src/Data-Enumerator-Trans.html#runStateI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy runStateT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runStateI",
          "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c(d,a)",
          "package": "enumerator",
          "partial": "State",
          "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m(b,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runStateI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003erunStateT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runStateI'",
          "package": "enumerator",
          "signature": "s -\u003e Iteratee a (StateT s m) b -\u003e Iteratee a m (b, s)",
          "source": "src/Data-Enumerator-Trans.html#runStateI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict runStateT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runStateI'",
          "normalized": "a-\u003eIteratee b(StateT a c)d-\u003eIteratee b c(d,a)",
          "package": "enumerator",
          "partial": "State I'",
          "signature": "s-\u003eIteratee a(StateT s m)b-\u003eIteratee a m(b,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runStateI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (lazy) \u003ccode\u003erunWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runWriterI",
          "package": "enumerator",
          "signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m (b, w)",
          "source": "src/Data-Enumerator-Trans.html#runWriterI",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of lazy runWriterT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runWriterI",
          "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c(d,b)",
          "package": "enumerator",
          "partial": "Writer",
          "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m(b,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runWriterI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted version of (strict) \u003ccode\u003erunWriterT\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSince: 0.4.16\n\u003c/p\u003e",
          "module": "Data.Enumerator.Trans",
          "name": "runWriterI'",
          "package": "enumerator",
          "signature": "Iteratee a (WriterT w m) b -\u003e Iteratee a m (b, w)",
          "source": "src/Data-Enumerator-Trans.html#runWriterI%27",
          "type": "function"
        },
        "index": {
          "description": "Lifted version of strict runWriterT Since",
          "hierarchy": "Data Enumerator Trans",
          "module": "Data.Enumerator.Trans",
          "name": "runWriterI'",
          "normalized": "Iteratee a(WriterT b c)d-\u003eIteratee a c(d,b)",
          "package": "enumerator",
          "partial": "Writer I'",
          "signature": "Iteratee a(WriterT w m)b-\u003eIteratee a m(b,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator-Trans.html#v:runWriterI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor compatibility reasons, this module should imported qualified:\n\u003c/p\u003e\u003cpre\u003e\n import qualified Data.Enumerator as E\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Enumerator",
          "name": "Enumerator",
          "package": "enumerator",
          "source": "src/Data-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "For compatibility reasons this module should imported qualified import qualified Data.Enumerator as",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "Enumerator",
          "package": "enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee acts as a stream adapter; place one between an enumerator\n and an iteratee, and it changes the type or contents of the input stream.\n\u003c/p\u003e\u003cp\u003eMost users will want to combine enumerators, enumeratees, and iteratees\n using the stream combinators \u003ccode\u003ejoinI\u003c/code\u003e and \u003ccode\u003ejoinE\u003c/code\u003e, or their operator aliases\n \u003ccode\u003e(=$)\u003c/code\u003e and \u003ccode\u003e($=)\u003c/code\u003e. These combinators are used to manage how left-over input\n is passed between elements of the data processing pipeline.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "Enumeratee",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Enumeratee",
          "type": "type"
        },
        "index": {
          "description": "An enumeratee acts as stream adapter place one between an enumerator and an iteratee and it changes the type or contents of the input stream Most users will want to combine enumerators enumeratees and iteratees using the stream combinators joinI and joinE or their operator aliases and These combinators are used to manage how left-over input is passed between elements of the data processing pipeline",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "Enumeratee",
          "package": "enumerator",
          "partial": "Enumeratee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#t:Enumeratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerators are sources of data, to be consumed by iteratees.\n Enumerators typically read from an external source (parser, handle,\n random generator, etc), then feed chunks into an tteratee until:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The input source runs out of data.\n\u003c/li\u003e\u003cli\u003e The iteratee yields a result value.\n\u003c/li\u003e\u003cli\u003e The iteratee throws an exception.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Enumerator",
          "name": "Enumerator",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Enumerator",
          "type": "type"
        },
        "index": {
          "description": "Enumerators are sources of data to be consumed by iteratees Enumerators typically read from an external source parser handle random generator etc then feed chunks into an tteratee until The input source runs out of data The iteratee yields result value The iteratee throws an exception",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "Enumerator",
          "package": "enumerator",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primary data type for this library; an iteratee consumes\n chunks of input from a stream until it either yields a value or\n encounters an error.\n\u003c/p\u003e\u003cp\u003eCompatibility note: \u003ccode\u003eIteratee\u003c/code\u003e will become abstract in \u003ccode\u003eenumerator_0.5\u003c/code\u003e. If\n you depend on internal implementation details, please import\n \u003ccode\u003e\u003ca\u003eData.Enumerator.Internal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "Iteratee",
          "package": "enumerator",
          "source": "src/Data-Enumerator-Internal.html#Iteratee",
          "type": "newtype"
        },
        "index": {
          "description": "The primary data type for this library an iteratee consumes chunks of input from stream until it either yields value or encounters an error Compatibility note Iteratee will become abstract in enumerator If you depend on internal implementation details please import Data.Enumerator.Internal",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "Iteratee",
          "package": "enumerator",
          "partial": "Iteratee",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#t:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an enumerator \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting enumerator will generate \u003cem\u003ewrapper\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eAs an example, consider an enumerator that yields line character counts\n for a text file (e.g. for source code readability checking):\n\u003c/p\u003e\u003cpre\u003e enumFileCounts :: FilePath -\u003e Enumerator Int IO b\n\u003c/pre\u003e\u003cp\u003eIt could be written with either \u003ccode\u003e\u003ca\u003ejoinE\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e($=)\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Data.Text as T\n import Data.Enumerator.List as EL\n import Data.Enumerator.Text as ET\n\n enumFileCounts path = joinE (enumFile path) (EL.map T.length)\n enumFileCounts path = enumFile path $= EL.map T.length\n\u003c/pre\u003e\u003cp\u003eCompatibility note: in version 0.4.15, the associativity of \u003ccode\u003e($=)\u003c/code\u003e was\n changed from \u003ccode\u003einfixr 0\u003c/code\u003e to \u003ccode\u003einfixl 1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "($=)",
          "package": "enumerator",
          "signature": "Enumerator ao m (Step ai m b) -\u003e Enumeratee ao ai m b -\u003e Enumerator ai m b",
          "source": "src/Data-Enumerator.html#%24%3D",
          "type": "function"
        },
        "index": {
          "description": "Wraps an enumerator inner in an enumeratee wrapper The resulting enumerator will generate wrapper output type As an example consider an enumerator that yields line character counts for text file e.g for source code readability checking enumFileCounts FilePath Enumerator Int IO It could be written with either joinE or import Data.Text as import Data.Enumerator.List as EL import Data.Enumerator.Text as ET enumFileCounts path joinE enumFile path EL.map T.length enumFileCounts path enumFile path EL.map T.length Compatibility note in version the associativity of was changed from infixr to infixl Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "($=) $=",
          "normalized": "Enumerator a b(Step c b d)-\u003eEnumeratee a c b d-\u003eEnumerator c b d",
          "package": "enumerator",
          "signature": "Enumerator ao m(Step ai m b)-\u003eEnumeratee ao ai m b-\u003eEnumerator ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an iteratee \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting iteratee will consume \u003cem\u003ewrapper\u003c/em\u003e&#8217;s input type and\n yield \u003cem\u003einner\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eNote: if the inner iteratee yields leftover input when it finishes,\n that extra will be discarded.\n\u003c/p\u003e\u003cp\u003eAs an example, consider an iteratee that converts a stream of UTF8-encoded\n bytes into a single \u003ccode\u003eText\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e consumeUTF8 :: Monad m =\u003e Iteratee ByteString m Text\n\u003c/pre\u003e\u003cp\u003eIt could be written with either \u003ccode\u003e\u003ca\u003ejoinI\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e(=$)\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator.Text as ET\n\n consumeUTF8 = joinI (decode utf8 $$ ET.consume)\n consumeUTF8 = decode utf8 =$ ET.consume\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "(=$)",
          "package": "enumerator",
          "signature": "Enumeratee ao ai m b -\u003e Iteratee ai m b -\u003e Iteratee ao m b",
          "source": "src/Data-Enumerator.html#%3D%24",
          "type": "function"
        },
        "index": {
          "description": "Wraps an iteratee inner in an enumeratee wrapper The resulting iteratee will consume wrapper input type and yield inner output type Note if the inner iteratee yields leftover input when it finishes that extra will be discarded As an example consider an iteratee that converts stream of UTF8-encoded bytes into single Text consumeUTF8 Monad Iteratee ByteString Text It could be written with either joinI or import Data.Enumerator.Text as ET consumeUTF8 joinI decode utf8 ET.consume consumeUTF8 decode utf8 ET.consume Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "(=$) =$",
          "normalized": "Enumeratee a b c d-\u003eIteratee b c d-\u003eIteratee a c d",
          "package": "enumerator",
          "signature": "Enumeratee ao ai m b-\u003eIteratee ai m b-\u003eIteratee ao m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-61--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposes two enumeratees.\n\u003c/p\u003e\u003cp\u003eNote that if the inner enumeratee yields left-over input, this will be\n discarded.\n\u003c/p\u003e\u003cp\u003eExample: converting bytes into lower-case text:\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString\n import Data.Text\n import Data.Enumerator.List as EnumList\n import Data.Enumerator.Text\n\n decodeAndLower :: Monad m =\u003e Enumeratee ByteString Text m b\n decodeAndLower = decode utf8 =$= EnumList.map toLower\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.17\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "(=$=)",
          "package": "enumerator",
          "signature": "Enumeratee a1 a2 m (Step a3 m b) -\u003e Enumeratee a2 a3 m b -\u003e Enumeratee a1 a3 m b",
          "source": "src/Data-Enumerator.html#%3D%24%3D",
          "type": "function"
        },
        "index": {
          "description": "Composes two enumeratees Note that if the inner enumeratee yields left-over input this will be discarded Example converting bytes into lower-case text import Data.ByteString import Data.Text import Data.Enumerator.List as EnumList import Data.Enumerator.Text decodeAndLower Monad Enumeratee ByteString Text decodeAndLower decode utf8 EnumList.map toLower Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "(=$=) =$=",
          "normalized": "Enumeratee a a b(Step a b c)-\u003eEnumeratee a a b c-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "signature": "Enumeratee a a m(Step a m b)-\u003eEnumeratee a a m b-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:-61--36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "break",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Iteratee a m [a]",
          "source": "src/Data-Enumerator-Compatibility.html#break",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use takeWhile instead Deprecated in use takeWhile instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eIteratee a b[a]",
          "package": "enumerator",
          "signature": "(a-\u003eBool)-\u003eIteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the iteratee, and calls an exception handler if an \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e is\n returned. By handling errors within the enumerator library, and requiring\n all errors to be represented by \u003ccode\u003e\u003ca\u003eSomeException\u003c/a\u003e\u003c/code\u003e, libraries with\n varying error types can be easily composed.\n\u003c/p\u003e\u003cp\u003eWARNING: Within the error handler, it is difficult or impossible to know\n how much input the original iteratee has consumed. Users are strongly\n advised to wrap all uses of \u003ccode\u003ecatchError\u003c/code\u003e with an appropriate isolation\n enumeratee, such as \u003ccode\u003eData.Enumerator.List.isolate\u003c/code\u003e or\n \u003ccode\u003eData.Enumerator.Binary.isolate\u003c/code\u003e, which will handle input framing even\n in the face of unexpected errors.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "catchError",
          "package": "enumerator",
          "signature": "Iteratee a m b -\u003e (SomeException -\u003e Iteratee a m b) -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator.html#catchError",
          "type": "function"
        },
        "index": {
          "description": "Runs the iteratee and calls an exception handler if an Error is returned By handling errors within the enumerator library and requiring all errors to be represented by SomeException libraries with varying error types can be easily composed WARNING Within the error handler it is difficult or impossible to know how much input the original iteratee has consumed Users are strongly advised to wrap all uses of catchError with an appropriate isolation enumeratee such as Data.Enumerator.List.isolate or Data.Enumerator.Binary.isolate which will handle input framing even in the face of unexpected errors Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "catchError",
          "normalized": "Iteratee a b c-\u003e(SomeException-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "enumerator",
          "partial": "Error",
          "signature": "Iteratee a m b-\u003e(SomeException-\u003eIteratee a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a list of \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003e==\u003e\u003c/a\u003e\u003c/code\u003e).\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "concatEnums",
          "package": "enumerator",
          "signature": "[Enumerator a m b] -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator.html#concatEnums",
          "type": "function"
        },
        "index": {
          "description": "Compose list of Enumerator using",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "concatEnums",
          "normalized": "[Enumerator a b c]-\u003eEnumerator a b c",
          "package": "enumerator",
          "partial": "Enums",
          "signature": "[Enumerator a m b]-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:concatEnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.concatMap instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.3\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "concatMap",
          "package": "enumerator",
          "signature": "(ao -\u003e [ai]) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-Compatibility.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.concatMap instead Deprecated in use concatMap instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003eEnumeratee a b c d",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(ao-\u003e[ai])-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.concatMapM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003econcatMapM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "concatMapM",
          "package": "enumerator",
          "signature": "(ao -\u003e m [ai]) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-Compatibility.html#concatMapM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.concatMapM instead Deprecated in use concatMapM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "concatMapM",
          "normalized": "(a-\u003eb[c])-\u003eEnumeratee a c b d",
          "package": "enumerator",
          "partial": "Map",
          "signature": "(ao-\u003em[ai])-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:concatMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003econsume\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "consume",
          "package": "enumerator",
          "signature": "Iteratee a m [a]",
          "source": "src/Data-Enumerator-Compatibility.html#consume",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use consume instead Deprecated in use consume instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "consume",
          "normalized": "Iteratee a b[a]",
          "package": "enumerator",
          "signature": "Iteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "drop",
          "package": "enumerator",
          "signature": "Integer -\u003e Iteratee a m ()",
          "source": "src/Data-Enumerator-Compatibility.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use drop instead Deprecated in use drop instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "drop",
          "normalized": "Integer-\u003eIteratee a b()",
          "package": "enumerator",
          "signature": "Integer-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "dropWhile",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Iteratee a m ()",
          "source": "src/Data-Enumerator-Compatibility.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use dropWhile instead Deprecated in use dropWhile instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eIteratee a b()",
          "package": "enumerator",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumList\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e enumerates \u003cem\u003exs\u003c/em\u003e as a stream, passing \u003cem\u003en\u003c/em\u003e inputs per\n chunk. This is primarily useful for testing, debugging, and REPL\n exploration.\n\u003c/p\u003e\u003cp\u003eCompatibility note: In version 0.5, \u003ccode\u003e\u003ca\u003eenumList\u003c/a\u003e\u003c/code\u003e will be changed to the\n type:\n\u003c/p\u003e\u003cpre\u003e enumList :: Monad m =\u003e [a] -\u003e Enumerator a m b\n\u003c/pre\u003e",
          "module": "Data.Enumerator",
          "name": "enumList",
          "package": "enumerator",
          "signature": "Integer -\u003e [a] -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator.html#enumList",
          "type": "function"
        },
        "index": {
          "description": "enumList xs enumerates xs as stream passing inputs per chunk This is primarily useful for testing debugging and REPL exploration Compatibility note In version enumList will be changed to the type enumList Monad Enumerator",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "enumList",
          "normalized": "Integer-\u003e[a]-\u003eEnumerator a b c",
          "package": "enumerator",
          "partial": "List",
          "signature": "Integer-\u003e[a]-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:enumList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eenumLists\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e enumerates \u003cem\u003exs\u003c/em\u003e as a stream, where each element is a\n separate chunk. This is primarily useful for testing and debugging.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.15\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "enumLists",
          "package": "enumerator",
          "signature": "[[a]] -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator.html#enumLists",
          "type": "function"
        },
        "index": {
          "description": "enumLists xs enumerates xs as stream where each element is separate chunk This is primarily useful for testing and debugging Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "enumLists",
          "normalized": "[[a]]-\u003eEnumerator a b c",
          "package": "enumerator",
          "partial": "Lists",
          "signature": "[[a]]-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:enumLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.filter instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "filter",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Enumeratee a a m b",
          "source": "src/Data-Enumerator-Compatibility.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.filter instead Deprecated in use filter instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "signature": "(a-\u003eBool)-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.filterM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efilterM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "filterM",
          "package": "enumerator",
          "signature": "(a -\u003e m Bool) -\u003e Enumeratee a a m b",
          "source": "src/Data-Enumerator-Compatibility.html#filterM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.filterM instead Deprecated in use filterM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003eEnumeratee a a b c",
          "package": "enumerator",
          "signature": "(a-\u003em Bool)-\u003eEnumeratee a a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.foldM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "foldM",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.foldM instead Deprecated in use foldM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "foldl",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "foldl'",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.generateM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003egenerateM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "generateM",
          "package": "enumerator",
          "signature": "m (Maybe a) -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#generateM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.generateM instead Deprecated in use generateM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "generateM",
          "normalized": "a(Maybe b)-\u003eEnumerator b a c",
          "package": "enumerator",
          "signature": "m(Maybe a)-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:generateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "head",
          "package": "enumerator",
          "signature": "Iteratee a m (Maybe a)",
          "source": "src/Data-Enumerator-Compatibility.html#head",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use head instead Deprecated in use head instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "head",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a stream has reached EOF. Note that if the stream is not\n at EOF, \u003ccode\u003eisEOF\u003c/code\u003e may cause data to be read from the enumerator.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "isEOF",
          "package": "enumerator",
          "signature": "Iteratee a m Bool",
          "source": "src/Data-Enumerator.html#isEOF",
          "type": "function"
        },
        "index": {
          "description": "Check whether stream has reached EOF Note that if the stream is not at EOF isEOF may cause data to be read from the enumerator",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "isEOF",
          "package": "enumerator",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.iterate instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "iterate",
          "package": "enumerator",
          "signature": "(a -\u003e a) -\u003e a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.iterate instead Deprecated in use iterate instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "(a-\u003ea)-\u003ea-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.iterateM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003eiterateM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "iterateM",
          "package": "enumerator",
          "signature": "(a -\u003e m a) -\u003e a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#iterateM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.iterateM instead Deprecated in use iterateM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "iterateM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "(a-\u003em a)-\u003ea-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an enumerator \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting enumerator will generate \u003cem\u003ewrapper\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eSee the documentation for (\u003ccode\u003e\u003ca\u003e$=\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ejoinE enum enee = enum $= enee\u003c/pre\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "joinE",
          "package": "enumerator",
          "signature": "Enumerator ao m (Step ai m b) -\u003e Enumeratee ao ai m b -\u003e Enumerator ai m b",
          "source": "src/Data-Enumerator.html#joinE",
          "type": "function"
        },
        "index": {
          "description": "Wraps an enumerator inner in an enumeratee wrapper The resulting enumerator will generate wrapper output type See the documentation for joinE enum enee enum enee Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "joinE",
          "normalized": "Enumerator a b(Step c b d)-\u003eEnumeratee a c b d-\u003eEnumerator c b d",
          "package": "enumerator",
          "signature": "Enumerator ao m(Step ai m b)-\u003eEnumeratee ao ai m b-\u003eEnumerator ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:joinE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#8220;Wraps&#8221; an iteratee \u003cem\u003einner\u003c/em\u003e in an enumeratee \u003cem\u003ewrapper\u003c/em\u003e.\n The resulting iteratee will consume \u003cem\u003ewrapper\u003c/em\u003e&#8217;s input type and\n yield \u003cem\u003einner\u003c/em\u003e&#8217;s output type.\n\u003c/p\u003e\u003cp\u003eSee the documentation for (\u003ccode\u003e\u003ca\u003e=$\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003ejoinI (enum $$ iter) = enum =$ iter\u003c/pre\u003e",
          "module": "Data.Enumerator",
          "name": "joinI",
          "package": "enumerator",
          "signature": "Iteratee a m (Step a' m b) -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator.html#joinI",
          "type": "function"
        },
        "index": {
          "description": "Wraps an iteratee inner in an enumeratee wrapper The resulting iteratee will consume wrapper input type and yield inner output type See the documentation for joinI enum iter enum iter",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "joinI",
          "normalized": "Iteratee a b(Step c b d)-\u003eIteratee a b d",
          "package": "enumerator",
          "signature": "Iteratee a m(Step a' m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:joinI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last element in the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n has ended.\n\u003c/p\u003e\u003cp\u003eConsumes the entire stream.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "last",
          "package": "enumerator",
          "signature": "Iteratee a m (Maybe a)",
          "source": "src/Data-Enumerator.html#last",
          "type": "function"
        },
        "index": {
          "description": "Get the last element in the stream or Nothing if the stream has ended Consumes the entire stream",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "last",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet how many elements remained in the stream.\n\u003c/p\u003e\u003cp\u003eConsumes the entire stream.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "length",
          "package": "enumerator",
          "signature": "Iteratee a m Integer",
          "source": "src/Data-Enumerator.html#length",
          "type": "function"
        },
        "index": {
          "description": "Get how many elements remained in the stream Consumes the entire stream",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "length",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "liftFoldL",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#liftFoldL",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "liftFoldL",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "partial": "Fold",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftFoldL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.fold instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "liftFoldL'",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#liftFoldL%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.fold instead Deprecated in use fold instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "liftFoldL'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "partial": "Fold L'",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftFoldL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.foldM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "liftFoldM",
          "package": "enumerator",
          "signature": "(b -\u003e a -\u003e m b) -\u003e b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#liftFoldM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.foldM instead Deprecated in use foldM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "liftFoldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
          "package": "enumerator",
          "partial": "Fold",
          "signature": "(b-\u003ea-\u003em b)-\u003eb-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftFoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003econtinue\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "liftI",
          "package": "enumerator",
          "signature": "(Stream a -\u003e Step a m b) -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator-Compatibility.html#liftI",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use continue instead Deprecated in use continue instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "liftI",
          "normalized": "(Stream a-\u003eStep a b c)-\u003eIteratee a b c",
          "package": "enumerator",
          "signature": "(Stream a-\u003eStep a m b)-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIteratee\u003c/a\u003e\u003c/code\u003e onto a monad transformer, re-wrapping its\n inner monadic values.\n\u003c/p\u003e\u003cp\u003eSince: 0.1.1\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "liftTrans",
          "package": "enumerator",
          "signature": "Iteratee a m b -\u003e Iteratee a (t m) b",
          "source": "src/Data-Enumerator.html#liftTrans",
          "type": "function"
        },
        "index": {
          "description": "Lift an Iteratee onto monad transformer re-wrapping its inner monadic values Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "liftTrans",
          "normalized": "Iteratee a b c-\u003eIteratee a(d b)c",
          "package": "enumerator",
          "partial": "Trans",
          "signature": "Iteratee a m b-\u003eIteratee a(t m)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:liftTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.map instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "map",
          "package": "enumerator",
          "signature": "(ao -\u003e ai) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-Compatibility.html#map",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.map instead Deprecated in use map instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
          "package": "enumerator",
          "signature": "(ao-\u003eai)-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.mapM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.3\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "mapM",
          "package": "enumerator",
          "signature": "(ao -\u003e m ai) -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator-Compatibility.html#mapM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.mapM instead Deprecated in use mapM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003eEnumeratee a c b d",
          "package": "enumerator",
          "signature": "(ao-\u003em ai)-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeek at the next element in the stream, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the stream\n has ended.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "peek",
          "package": "enumerator",
          "signature": "Iteratee a m (Maybe a)",
          "source": "src/Data-Enumerator.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Peek at the next element in the stream or Nothing if the stream has ended",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "peek",
          "package": "enumerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint chunks as they're received from the enumerator, optionally\n printing empty chunks.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "printChunks",
          "package": "enumerator",
          "signature": "Bool-\u003e Iteratee a m ()",
          "type": "function"
        },
        "index": {
          "description": "Print chunks as they re received from the enumerator optionally printing empty chunks",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "printChunks",
          "normalized": "Bool-\u003eIteratee a b()",
          "package": "enumerator",
          "partial": "Chunks",
          "signature": "Bool-\u003eIteratee a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:printChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.repeat instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "repeat",
          "package": "enumerator",
          "signature": "a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.repeat instead Deprecated in use repeat instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "repeat",
          "normalized": "a-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "a-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.repeatM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003erepeatM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "repeatM",
          "package": "enumerator",
          "signature": "m a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#repeatM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.repeatM instead Deprecated in use repeatM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "repeatM",
          "normalized": "a b-\u003eEnumerator b a c",
          "package": "enumerator",
          "signature": "m a-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.replicate instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "replicate",
          "package": "enumerator",
          "signature": "Integer -\u003e a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.replicate instead Deprecated in use replicate instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "replicate",
          "normalized": "Integer-\u003ea-\u003eEnumerator a b c",
          "package": "enumerator",
          "signature": "Integer-\u003ea-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Enumerator.List.replicateM instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.8: use \u003ccode\u003e\u003ca\u003ereplicateM\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003cp\u003eSince: 0.4.5\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "replicateM",
          "package": "enumerator",
          "signature": "Integer -\u003e m a -\u003e Enumerator a m b",
          "source": "src/Data-Enumerator-Compatibility.html#replicateM",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.Enumerator.List.replicateM instead Deprecated in use replicateM instead Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "replicateM",
          "normalized": "Integer-\u003ea b-\u003eEnumerator b a c",
          "package": "enumerator",
          "signature": "Integer-\u003em a-\u003eEnumerator a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an iteratee until it finishes, and return either the final value\n (if it succeeded) or the error (if it failed).\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.List as EL\n\n main = do\n     result \u003c- run (EL.iterate succ 'A' $$ EL.take 5)\n     case result of\n         Left exc -\u003e putStrLn (\"Got an exception: \" ++ show exc)\n         Right chars -\u003e putStrLn (\"Got characters: \" ++ show chars)\n\u003c/pre\u003e",
          "module": "Data.Enumerator",
          "name": "run",
          "package": "enumerator",
          "signature": "Iteratee a m b -\u003e m (Either SomeException b)",
          "source": "src/Data-Enumerator.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run an iteratee until it finishes and return either the final value if it succeeded or the error if it failed import Data.Enumerator import Data.Enumerator.List as EL main do result run EL.iterate succ EL.take case result of Left exc putStrLn Got an exception show exc Right chars putStrLn Got characters show chars",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "run",
          "normalized": "Iteratee a b c-\u003eb(Either SomeException c)",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003em(Either SomeException b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an iteratee with the given input, and return either the final value\n (if it succeeded) or the error (if it failed).\n\u003c/p\u003e\u003cp\u003eSince: 0.4.15\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "runLists",
          "package": "enumerator",
          "signature": "[[a]] -\u003e Iteratee a Identity b -\u003e Either SomeException b",
          "source": "src/Data-Enumerator.html#runLists",
          "type": "function"
        },
        "index": {
          "description": "Run an iteratee with the given input and return either the final value if it succeeded or the error if it failed Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "runLists",
          "normalized": "[[a]]-\u003eIteratee a Identity b-\u003eEither SomeException b",
          "package": "enumerator",
          "partial": "Lists",
          "signature": "[[a]]-\u003eIteratee a Identity b-\u003eEither SomeException b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:runLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunLists\u003c/a\u003e\u003c/code\u003e, except errors are converted to exceptions and thrown.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.15\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "runLists_",
          "package": "enumerator",
          "signature": "[[a]] -\u003e Iteratee a Identity b -\u003e b",
          "source": "src/Data-Enumerator.html#runLists_",
          "type": "function"
        },
        "index": {
          "description": "Like runLists except errors are converted to exceptions and thrown Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "runLists_",
          "normalized": "[[a]]-\u003eIteratee a Identity b-\u003eb",
          "package": "enumerator",
          "partial": "Lists",
          "signature": "[[a]]-\u003eIteratee a Identity b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:runLists_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e, except errors are converted to exceptions and thrown.\n Primarily useful for small scripts or other simple cases.\n\u003c/p\u003e\u003cpre\u003e import Data.Enumerator\n import Data.Enumerator.List as EL\n\n main = do\n     chars \u003c- run_ (EL.iterate succ 'A' $$ EL.take 5)\n     putStrLn (\"Got characters: \" ++ show chars)\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.1\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "run_",
          "package": "enumerator",
          "signature": "Iteratee a m b -\u003e m b",
          "source": "src/Data-Enumerator.html#run_",
          "type": "function"
        },
        "index": {
          "description": "Like run except errors are converted to exceptions and thrown Primarily useful for small scripts or other simple cases import Data.Enumerator import Data.Enumerator.List as EL main do chars run EL.iterate succ EL.take putStrLn Got characters show chars Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "run_",
          "normalized": "Iteratee a b c-\u003eb c",
          "package": "enumerator",
          "signature": "Iteratee a m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:run_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeeds outer input elements into the provided iteratee until it yields\n an inner input, passes that to the inner iteratee, and then loops.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "sequence",
          "package": "enumerator",
          "signature": "Iteratee ao m ai -\u003e Enumeratee ao ai m b",
          "source": "src/Data-Enumerator.html#sequence",
          "type": "function"
        },
        "index": {
          "description": "Feeds outer input elements into the provided iteratee until it yields an inner input passes that to the inner iteratee and then loops",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "sequence",
          "normalized": "Iteratee a b c-\u003eEnumeratee a c b d",
          "package": "enumerator",
          "signature": "Iteratee ao m ai-\u003eEnumeratee ao ai m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated in 0.4.5: use \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "span",
          "package": "enumerator",
          "signature": "(a -\u003e Bool) -\u003e Iteratee a m [a]",
          "source": "src/Data-Enumerator-Compatibility.html#span",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use takeWhile instead Deprecated in use takeWhile instead",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eIteratee a b[a]",
          "package": "enumerator",
          "signature": "(a-\u003eBool)-\u003eIteratee a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe moral equivalent of \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e for iteratees.\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "throwError",
          "package": "enumerator",
          "signature": "e -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator.html#throwError",
          "type": "function"
        },
        "index": {
          "description": "The moral equivalent of throwIO for iteratees",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "throwError",
          "normalized": "a-\u003eIteratee b c d",
          "package": "enumerator",
          "partial": "Error",
          "signature": "e-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to run an IO computation. If it throws an exception, the exception\n is caught and passed to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.4.9\n\u003c/p\u003e",
          "module": "Data.Enumerator",
          "name": "tryIO",
          "package": "enumerator",
          "signature": "IO b -\u003e Iteratee a m b",
          "source": "src/Data-Enumerator.html#tryIO",
          "type": "function"
        },
        "index": {
          "description": "Try to run an IO computation If it throws an exception the exception is caught and passed to throwError Since",
          "hierarchy": "Data Enumerator",
          "module": "Data.Enumerator",
          "name": "tryIO",
          "normalized": "IO a-\u003eIteratee b c a",
          "package": "enumerator",
          "partial": "IO",
          "signature": "IO b-\u003eIteratee a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumerator/docs/Data-Enumerator.html#v:tryIO"
      }
    }
  ]
]