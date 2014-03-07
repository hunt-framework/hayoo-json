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
        "word": "iteratee-mtl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees: incremental input parsers, processors, and transformers\n\u003c/p\u003e\u003cp\u003eMaps over restricted-element containers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base-LooseMap.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers Maps over restricted-element containers",
          "hierarchy": "Data Iteratee Base LooseMap",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee-mtl",
          "partial": "Loose Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base-LooseMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable map functions for containers that require class contexts on the\n element types.  For lists, this is identical to plain \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base-LooseMap.html#LooseMap",
          "type": "class"
        },
        "index": {
          "description": "Enable map functions for containers that require class contexts on the element types For lists this is identical to plain map",
          "hierarchy": "Data Iteratee Base LooseMap",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee-mtl",
          "partial": "Loose Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base-LooseMap.html#t:LooseMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "lMap",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e el') -\u003e c el -\u003e c el'",
          "source": "src/Data-Iteratee-Base-LooseMap.html#lMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Base LooseMap",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "lMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "iteratee-mtl",
          "partial": "Map",
          "signature": "(el-\u003eel')-\u003ec el-\u003ec el'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base-LooseMap.html#v:lMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003cp\u003eSupport for IO enumerators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base-ReadableChunk.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers Support for IO enumerators",
          "hierarchy": "Data Iteratee Base ReadableChunk",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee-mtl",
          "partial": "Readable Chunk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base-ReadableChunk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of streams which can be filled from a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.  Typically these\n are streams which can be read from a file, \u003ccode\u003eHandle\u003c/code\u003e, or similar resource.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base-ReadableChunk.html#ReadableChunk",
          "type": "class"
        },
        "index": {
          "description": "Class of streams which can be filled from Ptr Typically these are streams which can be read from file Handle or similar resource",
          "hierarchy": "Data Iteratee Base ReadableChunk",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee-mtl",
          "partial": "Readable Chunk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base-ReadableChunk.html#t:ReadableChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "readFromPtr",
          "package": "iteratee-mtl",
          "signature": "readFromPtr",
          "source": "src/Data-Iteratee-Base-ReadableChunk.html#readFromPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Base ReadableChunk",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "readFromPtr",
          "package": "iteratee-mtl",
          "partial": "From Ptr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base-ReadableChunk.html#v:readFromPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Base",
          "name": "Base",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Base",
          "package": "iteratee-mtl",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic iteratee\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base.html#Iteratee",
          "type": "newtype"
        },
        "index": {
          "description": "Monadic iteratee",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "partial": "Iteratee",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#t:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream is a (continuing) sequence of elements bundled in Chunks.\n The first variant indicates termination of the stream.\n Chunk a gives the currently available part of the stream.\n The stream is not terminated yet.\n The case (null Chunk) signifies a stream with no currently available\n data but which is still continuing. A stream processor should,\n informally speaking, ``suspend itself'' and wait for more data\n to arrive.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "Stream",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "stream is continuing sequence of elements bundled in Chunks The first variant indicates termination of the stream Chunk gives the currently available part of the stream The stream is not terminated yet The case null Chunk signifies stream with no currently available data but which is still continuing stream processor should informally speaking suspend itself and wait for more data to arrive",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Stream",
          "package": "iteratee-mtl",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the status of a stream of data.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "StreamStatus",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "data"
        },
        "index": {
          "description": "Describe the status of stream of data",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "StreamStatus",
          "package": "iteratee-mtl",
          "partial": "Stream Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#t:StreamStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "Chunk",
          "package": "iteratee-mtl",
          "signature": "Chunk c",
          "source": "src/Data-Iteratee-Base.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Chunk",
          "package": "iteratee-mtl",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "DataRemaining",
          "package": "iteratee-mtl",
          "signature": "DataRemaining",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "DataRemaining",
          "package": "iteratee-mtl",
          "partial": "Data Remaining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:DataRemaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "EOF",
          "package": "iteratee-mtl",
          "signature": "EOF (Maybe SomeException)",
          "source": "src/Data-Iteratee-Base.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "EOF",
          "package": "iteratee-mtl",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "EofError",
          "package": "iteratee-mtl",
          "signature": "EofError SomeException",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "EofError",
          "package": "iteratee-mtl",
          "partial": "Eof Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:EofError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "EofNoError",
          "package": "iteratee-mtl",
          "signature": "EofNoError",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "EofNoError",
          "package": "iteratee-mtl",
          "partial": "Eof No Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:EofNoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "signature": "Iteratee",
          "source": "src/Data-Iteratee-Base.html#Iteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "partial": "Iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "icont",
          "package": "iteratee-mtl",
          "signature": "(Stream s -\u003e Iteratee s m a) -\u003e Maybe SomeException -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Base.html#icont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "icont",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eIteratee a b c",
          "package": "iteratee-mtl",
          "signature": "(Stream s-\u003eIteratee s m a)-\u003eMaybe SomeException-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:icont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "icontM",
          "package": "iteratee-mtl",
          "signature": "(Stream s -\u003e Iteratee s m a) -\u003e Maybe SomeException -\u003e m (Iteratee s m a)",
          "source": "src/Data-Iteratee-Base.html#icontM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "icontM",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eb(Iteratee a b c)",
          "package": "iteratee-mtl",
          "signature": "(Stream s-\u003eIteratee s m a)-\u003eMaybe SomeException-\u003em(Iteratee s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:icontM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "idone",
          "package": "iteratee-mtl",
          "signature": "a -\u003e Stream s -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Base.html#idone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "idone",
          "normalized": "a-\u003eStream b-\u003eIteratee b c a",
          "package": "iteratee-mtl",
          "signature": "a-\u003eStream s-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:idone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "idoneM",
          "package": "iteratee-mtl",
          "signature": "a -\u003e Stream s -\u003e m (Iteratee s m a)",
          "source": "src/Data-Iteratee-Base.html#idoneM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "idoneM",
          "normalized": "a-\u003eStream b-\u003ec(Iteratee b c a)",
          "package": "iteratee-mtl",
          "signature": "a-\u003eStream s-\u003em(Iteratee s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:idoneM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "liftI",
          "package": "iteratee-mtl",
          "signature": "(Stream s -\u003e Iteratee s m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Base.html#liftI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "liftI",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "iteratee-mtl",
          "signature": "(Stream s-\u003eIteratee s m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a computation inside an \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "mapIteratee",
          "package": "iteratee-mtl",
          "signature": "(m a -\u003e n b) -\u003e Iteratee s m a -\u003e Iteratee s n b",
          "source": "src/Data-Iteratee-Base.html#mapIteratee",
          "type": "function"
        },
        "index": {
          "description": "Transform computation inside an Iteratee",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "mapIteratee",
          "normalized": "(a b-\u003ec d)-\u003eIteratee e a b-\u003eIteratee e c d",
          "package": "iteratee-mtl",
          "partial": "Iteratee",
          "signature": "(m a-\u003en b)-\u003eIteratee s m a-\u003eIteratee s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:mapIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003eIteratee\u003c/code\u003e and disregard the unconsumed part of the\n stream.  If the iteratee is in an exception state, that exception is\n thrown with \u003ccode\u003eControl.Exception.throw\u003c/code\u003e.  Iteratees that do not terminate\n on \u003ccode\u003eEOF\u003c/code\u003e will throw \u003ccode\u003e\u003ca\u003eEofException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "run",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e m a",
          "source": "src/Data-Iteratee-Base.html#run",
          "type": "function"
        },
        "index": {
          "description": "Send EOF to the Iteratee and disregard the unconsumed part of the stream If the iteratee is in an exception state that exception is thrown with Control.Exception.throw Iteratees that do not terminate on EOF will throw EofException",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "run",
          "normalized": "Iteratee a b c-\u003eb c",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "runIter",
          "package": "iteratee-mtl",
          "signature": "forall r.  (a -\u003e Stream s -\u003e m r) -\u003e ((Stream s -\u003e Iteratee s m a) -\u003e Maybe SomeException -\u003e m r) -\u003e m r",
          "source": "src/Data-Iteratee-Base.html#Iteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "runIter",
          "normalized": "a b(c-\u003eStream d-\u003ee f)-\u003e((Stream d-\u003eIteratee d e c)-\u003eMaybe SomeException-\u003ee f)-\u003ee f",
          "package": "iteratee-mtl",
          "partial": "Iter",
          "signature": "forall r.(a-\u003eStream s-\u003em r)-\u003e((Stream s-\u003eIteratee s m a)-\u003eMaybe SomeException-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:runIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e error message.  If the stream was terminated because\n of an error, keep the error message.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "setEOF",
          "package": "iteratee-mtl",
          "signature": "Stream c -\u003e SomeException",
          "source": "src/Data-Iteratee-Base.html#setEOF",
          "type": "function"
        },
        "index": {
          "description": "Produce the EOF error message If the stream was terminated because of an error keep the error message",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "setEOF",
          "normalized": "Stream a-\u003eSomeException",
          "package": "iteratee-mtl",
          "partial": "EOF",
          "signature": "Stream c-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:setEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an iteratee, returning either the result or the iteratee exception.\n Note that only internal iteratee exceptions will be returned; exceptions\n thrown with \u003ccode\u003eControl.Exception.throw\u003c/code\u003e or \u003ccode\u003eControl.Monad.CatchIO.throw\u003c/code\u003e will\n not be returned.\n See \u003ccode\u003e\u003ca\u003eIFException\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "tryRun",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e m (Either e a)",
          "source": "src/Data-Iteratee-Base.html#tryRun",
          "type": "function"
        },
        "index": {
          "description": "Run an iteratee returning either the result or the iteratee exception Note that only internal iteratee exceptions will be returned exceptions thrown with Control.Exception.throw or Control.Monad.CatchIO.throw will not be returned See IFException for details",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "tryRun",
          "normalized": "Iteratee a b c-\u003eb(Either d c)",
          "package": "iteratee-mtl",
          "partial": "Run",
          "signature": "Iteratee s m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Base.html#v:tryRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors, and transformers\n\u003c/p\u003e\u003cp\u003eIteratees for parsing binary data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "Binary",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers Iteratees for parsing binary data",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "Binary",
          "package": "iteratee-mtl",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate endian-ness.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "Endian",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Binary.html#Endian",
          "type": "data"
        },
        "index": {
          "description": "Indicate endian-ness",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "Endian",
          "package": "iteratee-mtl",
          "partial": "Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#t:Endian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeast Significan Byte is first (little-endian)\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "LSB",
          "package": "iteratee-mtl",
          "signature": "LSB",
          "source": "src/Data-Iteratee-Binary.html#Endian",
          "type": "function"
        },
        "index": {
          "description": "Least Significan Byte is first little-endian",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "LSB",
          "package": "iteratee-mtl",
          "partial": "LSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#v:LSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost Significant Byte is first (big-endian)\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "MSB",
          "package": "iteratee-mtl",
          "signature": "MSB",
          "source": "src/Data-Iteratee-Binary.html#Endian",
          "type": "function"
        },
        "index": {
          "description": "Most Significant Byte is first big-endian",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "MSB",
          "package": "iteratee-mtl",
          "partial": "MSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#v:MSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead2",
          "package": "iteratee-mtl",
          "signature": "Endian -\u003e Iteratee s m Word16",
          "source": "src/Data-Iteratee-Binary.html#endianRead2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead2",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee-mtl",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#v:endianRead2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3",
          "package": "iteratee-mtl",
          "signature": "Endian -\u003e Iteratee s m Word32",
          "source": "src/Data-Iteratee-Binary.html#endianRead3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee-mtl",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#v:endianRead3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 3 bytes in an endian manner.  If the first bit is set (negative),\n set the entire first byte so the Int32 will be negative as\n well.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3i",
          "package": "iteratee-mtl",
          "signature": "Endian -\u003e Iteratee s m Int32",
          "source": "src/Data-Iteratee-Binary.html#endianRead3i",
          "type": "function"
        },
        "index": {
          "description": "Read bytes in an endian manner If the first bit is set negative set the entire first byte so the Int32 will be negative as well",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3i",
          "normalized": "Endian-\u003eIteratee a b Int",
          "package": "iteratee-mtl",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#v:endianRead3i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead4",
          "package": "iteratee-mtl",
          "signature": "Endian -\u003e Iteratee s m Word32",
          "source": "src/Data-Iteratee-Binary.html#endianRead4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead4",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee-mtl",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Binary.html#v:endianRead4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for Char-based iteratee processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Char",
          "name": "Char",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for Char-based iteratee processing",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "Char",
          "package": "iteratee-mtl",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the stream of characters to the stream of lines, and\n apply the given iteratee to enumerate the latter.\n The stream of lines is normally terminated by the empty line.\n When the stream of characters is terminated, the stream of lines\n is also terminated.\n This is the first proper iteratee-enumerator: it is the iteratee of the\n character stream and the enumerator of the line stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "enumLines",
          "package": "iteratee-mtl",
          "signature": "Enumeratee s [s] m a",
          "source": "src/Data-Iteratee-Char.html#enumLines",
          "type": "function"
        },
        "index": {
          "description": "Convert the stream of characters to the stream of lines and apply the given iteratee to enumerate the latter The stream of lines is normally terminated by the empty line When the stream of characters is terminated the stream of lines is also terminated This is the first proper iteratee-enumerator it is the iteratee of the character stream and the enumerator of the line stream",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "enumLines",
          "normalized": "Enumeratee a[a]b c",
          "package": "iteratee-mtl",
          "partial": "Lines",
          "signature": "Enumeratee s[s]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Char.html#v:enumLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Char",
          "name": "enumLinesBS",
          "package": "iteratee-mtl",
          "signature": "Enumeratee ByteString [ByteString] m a",
          "source": "src/Data-Iteratee-Char.html#enumLinesBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "enumLinesBS",
          "normalized": "Enumeratee ByteString[ByteString]a b",
          "package": "iteratee-mtl",
          "partial": "Lines BS",
          "signature": "Enumeratee ByteString[ByteString]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Char.html#v:enumLinesBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the stream of characters to the stream of words, and\n apply the given iteratee to enumerate the latter.\n Words are delimited by white space.\n This is the analogue of List.words\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "enumWords",
          "package": "iteratee-mtl",
          "signature": "Enumeratee s [s] m a",
          "source": "src/Data-Iteratee-Char.html#enumWords",
          "type": "function"
        },
        "index": {
          "description": "Convert the stream of characters to the stream of words and apply the given iteratee to enumerate the latter Words are delimited by white space This is the analogue of List.words",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "enumWords",
          "normalized": "Enumeratee a[a]b c",
          "package": "iteratee-mtl",
          "partial": "Words",
          "signature": "Enumeratee s[s]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Char.html#v:enumWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Char",
          "name": "enumWordsBS",
          "package": "iteratee-mtl",
          "signature": "Enumeratee ByteString [ByteString] m a",
          "source": "src/Data-Iteratee-Char.html#enumWordsBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "enumWordsBS",
          "normalized": "Enumeratee ByteString[ByteString]a b",
          "package": "iteratee-mtl",
          "partial": "Words BS",
          "signature": "Enumeratee ByteString[ByteString]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Char.html#v:enumWordsBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint lines as they are received. This is the first \u003ccode\u003eimpure\u003c/code\u003e iteratee\n with non-trivial actions during chunk processing\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "printLines",
          "package": "iteratee-mtl",
          "signature": "Iteratee String IO ()",
          "source": "src/Data-Iteratee-Char.html#printLines",
          "type": "function"
        },
        "index": {
          "description": "Print lines as they are received This is the first impure iteratee with non-trivial actions during chunk processing",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "printLines",
          "normalized": "Iteratee String IO()",
          "package": "iteratee-mtl",
          "partial": "Lines",
          "signature": "Iteratee String IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Char.html#v:printLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic and General Iteratees:\n Messaging and exception handling.\n\u003c/p\u003e\u003cp\u003eIteratees use an internal exception handling mechanism that is parallel to\n that provided by \u003ccode\u003eControl.Exception\u003c/code\u003e.  This allows the iteratee framework\n to handle its own exceptions outside \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIteratee exceptions are divided into two categories, \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003eIterExceptions\u003c/code\u003e are exceptions within an iteratee, and\n \u003ccode\u003eEnumExceptions\u003c/code\u003e are exceptions within an enumerator.\n\u003c/p\u003e\u003cp\u003eEnumerators can be constructed to handle an \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003eData.Iteratee.Iteratee.enumFromCallbackCatch\u003c/code\u003e.  If the enumerator detects\n an \u003ccode\u003eiteratee exception\u003c/code\u003e, the enumerator calls the provided exception handler.\n The enumerator is then able to continue feeding data to the iteratee,\n provided the exception was successfully handled.  If the handler could\n not handle the exception, the \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e is converted to an\n \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e and processing aborts.\n\u003c/p\u003e\u003cp\u003eExceptions can also be cleared by \u003ccode\u003eData.Iteratee.Iteratee.checkErr\u003c/code\u003e,\n although in this case the iteratee continuation cannot be recovered.\n\u003c/p\u003e\u003cp\u003eWhen viewed as Resumable Exceptions, iteratee exceptions provide a means\n for iteratees to send control messages to enumerators.  The \u003ccode\u003eseek\u003c/code\u003e\n implementation provides an example.  \u003ccode\u003eData.Iteratee.Iteratee.seek\u003c/code\u003e stores\n the current iteratee continuation and throws a \u003ccode\u003e\u003ca\u003eSeekException\u003c/a\u003e\u003c/code\u003e, which\n inherits from \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003eData.Iteratee.IO.enumHandleRandom\u003c/code\u003e is\n constructed with \u003ccode\u003eenumFromCallbackCatch\u003c/code\u003e and a handler that performs\n an \u003ccode\u003ehSeek\u003c/code\u003e.  Upon receiving the \u003ccode\u003e\u003ca\u003eSeekException\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eenumHandleRandom\u003c/code\u003e calls\n the handler, checks that it executed properly, and then continues with\n the stored continuation.\n\u003c/p\u003e\u003cp\u003eAs the exception hierarchy is open, users can extend it with custom\n exceptions and exception handlers to implement sophisticated messaging\n systems based upon resumable exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "Exception",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic and General Iteratees Messaging and exception handling Iteratees use an internal exception handling mechanism that is parallel to that provided by Control.Exception This allows the iteratee framework to handle its own exceptions outside IO Iteratee exceptions are divided into two categories IterException and EnumException IterExceptions are exceptions within an iteratee and EnumExceptions are exceptions within an enumerator Enumerators can be constructed to handle an IterException with Data.Iteratee.Iteratee.enumFromCallbackCatch If the enumerator detects an iteratee exception the enumerator calls the provided exception handler The enumerator is then able to continue feeding data to the iteratee provided the exception was successfully handled If the handler could not handle the exception the IterException is converted to an EnumException and processing aborts Exceptions can also be cleared by Data.Iteratee.Iteratee.checkErr although in this case the iteratee continuation cannot be recovered When viewed as Resumable Exceptions iteratee exceptions provide means for iteratees to send control messages to enumerators The seek implementation provides an example Data.Iteratee.Iteratee.seek stores the current iteratee continuation and throws SeekException which inherits from IterException Data.Iteratee.IO.enumHandleRandom is constructed with enumFromCallbackCatch and handler that performs an hSeek Upon receiving the SeekException enumHandleRandom calls the handler checks that it executed properly and then continues with the stored continuation As the exception hierarchy is open users can extend it with custom exceptions and exception handlers to implement sophisticated messaging systems based upon resumable exceptions",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "Exception",
          "package": "iteratee-mtl",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eiteratee\u003c/code\u003e diverged upon receiving \u003ccode\u003eEOF\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#DivergentException",
          "type": "data"
        },
        "index": {
          "description": "The iteratee diverged upon receiving EOF",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee-mtl",
          "partial": "Divergent Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:DivergentException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#EnumException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee-mtl",
          "partial": "Enum Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:EnumException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumerator exception from a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#EnumStringException",
          "type": "data"
        },
        "index": {
          "description": "Create an enumerator exception from String",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee-mtl",
          "partial": "Enum String Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:EnumStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator received an \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e it could not handle.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#EnumUnhandledIterException",
          "type": "data"
        },
        "index": {
          "description": "The enumerator received an IterException it could not handle",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee-mtl",
          "partial": "Enum Unhandled Iter Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:EnumUnhandledIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eIteratee\u003c/code\u003e needs more data but received \u003ccode\u003eEOF\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#EofException",
          "type": "data"
        },
        "index": {
          "description": "The Iteratee needs more data but received EOF",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee-mtl",
          "partial": "Eof Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:EofException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for \u003ccode\u003eiteratee exceptions\u003c/code\u003e.  Only inheritants of \u003ccode\u003eIterException\u003c/code\u003e\n should be instances of this class.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#IException",
          "type": "class"
        },
        "index": {
          "description": "class for iteratee exceptions Only inheritants of IterException should be instances of this class",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IException",
          "package": "iteratee-mtl",
          "partial": "IException",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:IException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot of the Iteratee exception hierarchy.  \u003ccode\u003eIFException\u003c/code\u003e derives from\n \u003ccode\u003eControl.Exception.SomeException\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e,\n and all inheritants are descendents of \u003ccode\u003e\u003ca\u003eIFException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#IFException",
          "type": "data"
        },
        "index": {
          "description": "Root of the Iteratee exception hierarchy IFException derives from Control.Exception.SomeException EnumException IterException and all inheritants are descendents of IFException",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee-mtl",
          "partial": "IFException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:IFException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot of iteratee exceptions.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#IterException",
          "type": "data"
        },
        "index": {
          "description": "Root of iteratee exceptions",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee-mtl",
          "partial": "Iter Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:IterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eIteratee exception\u003c/code\u003e specified by a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#IterStringException",
          "type": "data"
        },
        "index": {
          "description": "An Iteratee exception specified by String",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee-mtl",
          "partial": "Iter String Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:IterStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA seek request within an \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Exception.html#SeekException",
          "type": "data"
        },
        "index": {
          "description": "seek request within an Iteratee",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee-mtl",
          "partial": "Seek Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#t:SeekException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee-mtl",
          "signature": "DivergentException",
          "source": "src/Data-Iteratee-Exception.html#DivergentException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee-mtl",
          "partial": "Divergent Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:DivergentException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee-mtl",
          "signature": "EnumException e",
          "source": "src/Data-Iteratee-Exception.html#EnumException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee-mtl",
          "partial": "Enum Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:EnumException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee-mtl",
          "signature": "EnumStringException String",
          "source": "src/Data-Iteratee-Exception.html#EnumStringException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee-mtl",
          "partial": "Enum String Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:EnumStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee-mtl",
          "signature": "EnumUnhandledIterException IterException",
          "source": "src/Data-Iteratee-Exception.html#EnumUnhandledIterException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee-mtl",
          "partial": "Enum Unhandled Iter Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:EnumUnhandledIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee-mtl",
          "signature": "EofException",
          "source": "src/Data-Iteratee-Exception.html#EofException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee-mtl",
          "partial": "Eof Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:EofException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee-mtl",
          "signature": "IFException e",
          "source": "src/Data-Iteratee-Exception.html#IFException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee-mtl",
          "partial": "IFException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:IFException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee-mtl",
          "signature": "IterException e",
          "source": "src/Data-Iteratee-Exception.html#IterException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee-mtl",
          "partial": "Iter Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:IterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee-mtl",
          "signature": "IterStringException String",
          "source": "src/Data-Iteratee-Exception.html#IterStringException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee-mtl",
          "partial": "Iter String Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:IterStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee-mtl",
          "signature": "SeekException FileOffset",
          "source": "src/Data-Iteratee-Exception.html#SeekException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee-mtl",
          "partial": "Seek Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:SeekException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e from a string.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "enStrExc",
          "package": "iteratee-mtl",
          "signature": "String -\u003e EnumException",
          "source": "src/Data-Iteratee-Exception.html#enStrExc",
          "type": "function"
        },
        "index": {
          "description": "Create an EnumException from string",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "enStrExc",
          "normalized": "String-\u003eEnumException",
          "package": "iteratee-mtl",
          "partial": "Str Exc",
          "signature": "String-\u003eEnumException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:enStrExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "fromIterException",
          "package": "iteratee-mtl",
          "signature": "IterException -\u003e Maybe e",
          "source": "src/Data-Iteratee-Exception.html#fromIterException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "fromIterException",
          "normalized": "IterException-\u003eMaybe a",
          "package": "iteratee-mtl",
          "partial": "Iter Exception",
          "signature": "IterException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:fromIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003eiteratee exception\u003c/code\u003e from a string.\n This convenience function wraps \u003ccode\u003e\u003ca\u003eIterStringException\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "iterStrExc",
          "package": "iteratee-mtl",
          "signature": "String -\u003e SomeException",
          "source": "src/Data-Iteratee-Exception.html#iterStrExc",
          "type": "function"
        },
        "index": {
          "description": "Create an iteratee exception from string This convenience function wraps IterStringException and toException",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "iterStrExc",
          "normalized": "String-\u003eSomeException",
          "package": "iteratee-mtl",
          "partial": "Str Exc",
          "signature": "String-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:iterStrExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "toIterException",
          "package": "iteratee-mtl",
          "signature": "e -\u003e IterException",
          "source": "src/Data-Iteratee-Exception.html#toIterException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "toIterException",
          "normalized": "a-\u003eIterException",
          "package": "iteratee-mtl",
          "partial": "Iter Exception",
          "signature": "e-\u003eIterException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:toIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e.  Meant to be used\n within an \u003ccode\u003eEnumerator\u003c/code\u003e to signify that it could not handle the\n \u003ccode\u003eIterException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "wrapIterExc",
          "package": "iteratee-mtl",
          "signature": "IterException -\u003e EnumException",
          "source": "src/Data-Iteratee-Exception.html#wrapIterExc",
          "type": "function"
        },
        "index": {
          "description": "Convert an IterException to an EnumException Meant to be used within an Enumerator to signify that it could not handle the IterException",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "wrapIterExc",
          "normalized": "IterException-\u003eEnumException",
          "package": "iteratee-mtl",
          "partial": "Iter Exc",
          "signature": "IterException-\u003eEnumException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Exception.html#v:wrapIterExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom and Binary IO with generic Iteratees, using File Descriptors for IO.\n when available, these are the preferred functions for performing IO as they\n run in constant space and function properly with sockets, pipes, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "Fd",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-IO-Fd.html",
          "type": "module"
        },
        "index": {
          "description": "Random and Binary IO with generic Iteratees using File Descriptors for IO when available these are the preferred functions for performing IO as they run in constant space and function properly with sockets pipes etc",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "Fd",
          "package": "iteratee-mtl",
          "partial": "Fd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a POSIX File Descriptor.  This version enumerates\n over the entire contents of a file, in order, unless stopped by\n the iteratee.  In particular, seeking is not supported.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Fd\",\"Data.Iteratee.IO\"]",
          "name": "enumFd",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Fd -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO-Fd.html#enumFd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:enumFd\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:enumFd\"]"
        },
        "index": {
          "description": "The enumerator of POSIX File Descriptor This version enumerates over the entire contents of file in order unless stopped by the iteratee In particular seeking is not supported",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFd",
          "normalized": "Int-\u003eFd-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Fd",
          "signature": "Int-\u003eFd-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:enumFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of enumFd that catches exceptions raised by the \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFdCatch",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Fd -\u003e (e -\u003e m (Maybe EnumException)) -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO-Fd.html#enumFdCatch",
          "type": "function"
        },
        "index": {
          "description": "variant of enumFd that catches exceptions raised by the Iteratee",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFdCatch",
          "normalized": "Int-\u003eFd-\u003e(a-\u003eb(Maybe EnumException))-\u003eEnumerator c b d",
          "package": "iteratee-mtl",
          "partial": "Fd Catch",
          "signature": "Int-\u003eFd-\u003e(e-\u003em(Maybe EnumException))-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:enumFdCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a POSIX File Descriptor: a variation of \u003ccode\u003eenumFd\u003c/code\u003e that\n supports RandomIO (seek requests).\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Fd\",\"Data.Iteratee.IO\"]",
          "name": "enumFdRandom",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Fd -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO-Fd.html#enumFdRandom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:enumFdRandom\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:enumFdRandom\"]"
        },
        "index": {
          "description": "The enumerator of POSIX File Descriptor variation of enumFd that supports RandomIO seek requests",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFdRandom",
          "normalized": "Int-\u003eFd-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Fd Random",
          "signature": "Int-\u003eFd-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:enumFdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverFd",
          "package": "iteratee-mtl",
          "signature": "Int-\u003e Iteratee s m a-\u003e FilePath-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Process file using the given Iteratee",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverFd",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver Fd",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:fileDriverFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of fileDriverFd that supports seeking.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverRandomFd",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO-Fd.html#fileDriverRandomFd",
          "type": "function"
        },
        "index": {
          "description": "version of fileDriverFd that supports seeking",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverRandomFd",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver Random Fd",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Fd.html#v:fileDriverRandomFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom and Binary IO with generic Iteratees.  These functions use Handles\n for IO operations, and are provided for compatibility.  When available,\n the File Descriptor based functions are preferred as these wastefully\n allocate memory rather than running in constant space.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "Handle",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-IO-Handle.html",
          "type": "module"
        },
        "index": {
          "description": "Random and Binary IO with generic Iteratees These functions use Handles for IO operations and are provided for compatibility When available the File Descriptor based functions are preferred as these wastefully allocate memory rather than running in constant space",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "Handle",
          "package": "iteratee-mtl",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (monadic) enumerator of a file Handle.  This version enumerates\n over the entire contents of a file, in order, unless stopped by\n the iteratee.  In particular, seeking is not supported.\n Data is read into a buffer of the specified size.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Handle\",\"Data.Iteratee.IO\"]",
          "name": "enumHandle",
          "package": "iteratee-mtl",
          "signature": "Int-\u003e Handle-\u003e Enumerator s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:enumHandle\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:enumHandle\"]"
        },
        "index": {
          "description": "The monadic enumerator of file Handle This version enumerates over the entire contents of file in order unless stopped by the iteratee In particular seeking is not supported Data is read into buffer of the specified size",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandle",
          "normalized": "Int-\u003eHandle-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Handle",
          "signature": "Int-\u003eHandle-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:enumHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumerator of a file handle that catches exceptions raised by\n the Iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandleCatch",
          "package": "iteratee-mtl",
          "signature": "Int-\u003e Handle-\u003e (e -\u003e m (Maybe EnumException))-\u003e Enumerator s m a",
          "type": "function"
        },
        "index": {
          "description": "An enumerator of file handle that catches exceptions raised by the Iteratee",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandleCatch",
          "normalized": "Int-\u003eHandle-\u003e(a-\u003eb(Maybe EnumException))-\u003eEnumerator c b d",
          "package": "iteratee-mtl",
          "partial": "Handle Catch",
          "signature": "Int-\u003eHandle-\u003e(e-\u003em(Maybe EnumException))-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:enumHandleCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a Handle: a variation of enumHandle that\n supports RandomIO (seek requests).\n Data is read into a buffer of the specified size.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Handle\",\"Data.Iteratee.IO\"]",
          "name": "enumHandleRandom",
          "package": "iteratee-mtl",
          "signature": "Int-\u003e Handle-\u003e Enumerator s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:enumHandleRandom\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:enumHandleRandom\"]"
        },
        "index": {
          "description": "The enumerator of Handle variation of enumHandle that supports RandomIO seek requests Data is read into buffer of the specified size",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandleRandom",
          "normalized": "Int-\u003eHandle-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Handle Random",
          "signature": "Int-\u003eHandle-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:enumHandleRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given \u003ccode\u003eIteratee\u003c/code\u003e.  This function wraps\n \u003ccode\u003eenumHandle\u003c/code\u003e as a convenience.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverHandle",
          "package": "iteratee-mtl",
          "signature": "Int-\u003e Iteratee s m a-\u003e FilePath-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumHandle as convenience",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverHandle",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver Handle",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:fileDriverHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003efileDriverHandle\u003c/code\u003e that supports seeking.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverRandomHandle",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO-Handle.html#fileDriverRandomHandle",
          "type": "function"
        },
        "index": {
          "description": "version of fileDriverHandle that supports seeking",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverRandomHandle",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver Random Handle",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Handle.html#v:fileDriverRandomHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Posix",
          "name": "Posix",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-IO-Posix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Posix",
          "package": "iteratee-mtl",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell representation for \u003ccode\u003eerrno\u003c/code\u003e values.\n The implementation is deliberately exposed, to allow users to add\n their own definitions of \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee-mtl",
          "type": "newtype"
        },
        "index": {
          "description": "Haskell representation for errno values The implementation is deliberately exposed to allow users to add their own definitions of Errno values",
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee-mtl",
          "partial": "Errno",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#t:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Posix",
          "name": "FileOffset",
          "package": "iteratee-mtl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "FileOffset",
          "package": "iteratee-mtl",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee-mtl",
          "signature": "Errno CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee-mtl",
          "partial": "Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#v:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlas, GHC provides no function to read from Fd to an allocated buffer.\n The library function fdRead is not appropriate as it returns a string\n already. I'd rather get data from a buffer.\n Furthermore, fdRead (at least in GHC) allocates a new buffer each\n time it is called. This is a waste. Yet another problem with fdRead\n is in raising an exception on any IOError or even EOF. I'd rather\n avoid exceptions altogether.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "myfdRead",
          "package": "iteratee-mtl",
          "signature": "Fd -\u003e Ptr CChar -\u003e ByteCount -\u003e IO (Either Errno ByteCount)",
          "source": "src/Data-Iteratee-IO-Posix.html#myfdRead",
          "type": "function"
        },
        "index": {
          "description": "Alas GHC provides no function to read from Fd to an allocated buffer The library function fdRead is not appropriate as it returns string already rather get data from buffer Furthermore fdRead at least in GHC allocates new buffer each time it is called This is waste Yet another problem with fdRead is in raising an exception on any IOError or even EOF rather avoid exceptions altogether",
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "myfdRead",
          "normalized": "Fd-\u003ePtr CChar-\u003eByteCount-\u003eIO(Either Errno ByteCount)",
          "package": "iteratee-mtl",
          "partial": "Read",
          "signature": "Fd-\u003ePtr CChar-\u003eByteCount-\u003eIO(Either Errno ByteCount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#v:myfdRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following fseek procedure throws no exceptions.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "myfdSeek",
          "package": "iteratee-mtl",
          "signature": "Fd -\u003e SeekMode -\u003e FileOffset -\u003e IO (Either Errno FileOffset)",
          "source": "src/Data-Iteratee-IO-Posix.html#myfdSeek",
          "type": "function"
        },
        "index": {
          "description": "The following fseek procedure throws no exceptions",
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "myfdSeek",
          "normalized": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO(Either Errno FileOffset)",
          "package": "iteratee-mtl",
          "partial": "Seek",
          "signature": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO(Either Errno FileOffset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#v:myfdSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epoll if file descriptors have something to read\n Return the list of read-pending descriptors\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "select'read'pending",
          "package": "iteratee-mtl",
          "signature": "[Fd] -\u003e IO (Either Errno [Fd])",
          "source": "src/Data-Iteratee-IO-Posix.html#select%27read%27pending",
          "type": "function"
        },
        "index": {
          "description": "poll if file descriptors have something to read Return the list of read-pending descriptors",
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "select'read'pending",
          "normalized": "[Fd]-\u003eIO(Either Errno[Fd])",
          "package": "iteratee-mtl",
          "signature": "[Fd]-\u003eIO(Either Errno[Fd])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO-Posix.html#v:select-39-read-39-pending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom and Binary IO with generic Iteratees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.IO",
          "name": "IO",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Random and Binary IO with generic Iteratees",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "IO",
          "package": "iteratee-mtl",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given Iteratee.  This function wraps\n enumFd as a convenience.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriver",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriver",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriver\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee.html#v:fileDriver\"]"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumFd as convenience",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriver",
          "normalized": "Iteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver",
          "signature": "Iteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given Iteratee.  This function wraps\n enumFdRandom as a convenience.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriverRandom",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriverRandom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriverRandom\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee.html#v:fileDriverRandom\"]"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumFdRandom as convenience",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriverRandom",
          "normalized": "Iteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver Random",
          "signature": "Iteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriverRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriverRandomVBuf",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriverRandomVBuf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriverRandomVBuf\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee.html#v:fileDriverRandomVBuf\"]"
        },
        "index": {
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriverRandomVBuf",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver Random VBuf",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriverRandomVBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of fileDriver with a user-specified buffer size (in elements).\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriverVBuf",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriverVBuf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriverVBuf\",\"http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee.html#v:fileDriverVBuf\"]"
        },
        "index": {
          "description": "version of fileDriver with user-specified buffer size in elements",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriverVBuf",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee-mtl",
          "partial": "Driver VBuf",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-IO.html#v:fileDriverVBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic and General Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic and General Iteratees incremental input parsers processors and transformers",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumeratee",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Iteratee.html#Enumeratee",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumeratee",
          "package": "iteratee-mtl",
          "partial": "Enumeratee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#t:Enumeratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach enumerator takes an iteratee and returns an iteratee\n an Enumerator is an iteratee transformer.\n The enumerator normally stops when the stream is terminated\n or when the iteratee moves to the done state, whichever comes first.\n When to stop is of course up to the enumerator...\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumerator",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-Iteratee.html#Enumerator",
          "type": "type"
        },
        "index": {
          "description": "Each enumerator takes an iteratee and returns an iteratee an Enumerator is an iteratee transformer The enumerator normally stops when the stream is terminated or when the iteratee moves to the done state whichever comes first When to stop is of course up to the enumerator",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumerator",
          "package": "iteratee-mtl",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "FileOffset",
          "package": "iteratee-mtl",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "FileOffset",
          "package": "iteratee-mtl",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe composition of two enumerators: essentially the functional composition\n It is convenient to flip the order of the arguments of the composition\n though: in e1 \u003e\u003e\u003e e2, e1 is executed first\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003e\u003e\u003e)",
          "package": "iteratee-mtl",
          "signature": "Enumerator s m a -\u003e Enumerator s m a -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "The composition of two enumerators essentially the functional composition It is convenient to flip the order of the arguments of the composition though in e1 e2 e1 is executed first",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "Enumerator a b c-\u003eEnumerator a b c-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "signature": "Enumerator s m a-\u003eEnumerator s m a-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an iteratee produces an error.\n Returns \u003ccode\u003eRight a\u003c/code\u003e if it completes without errors, otherwise\n \u003ccode\u003eLeft SomeException\u003c/code\u003e. \u003ccode\u003e\u003ca\u003echeckErr\u003c/a\u003e\u003c/code\u003e is useful for iteratees that may not\n terminate, such as \u003ccode\u003eData.Iteratee.head\u003c/code\u003e with an empty stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "checkErr",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e Iteratee s m (Either SomeException a)",
          "source": "src/Data-Iteratee-Iteratee.html#checkErr",
          "type": "function"
        },
        "index": {
          "description": "Check if an iteratee produces an error Returns Right if it completes without errors otherwise Left SomeException checkErr is useful for iteratees that may not terminate such as Data.Iteratee.head with an empty stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "checkErr",
          "normalized": "Iteratee a b c-\u003eIteratee a b(Either SomeException c)",
          "package": "iteratee-mtl",
          "partial": "Err",
          "signature": "Iteratee s m a-\u003eIteratee s m(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:checkErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert one stream into another, not necessarily in lockstep.\n The transformer mapStream maps one element of the outer stream\n to one element of the nested stream.  The transformer below is more\n general: it may take several elements of the outer stream to produce\n one element of the inner stream, or the other way around.\n The transformation from one stream to the other is specified as\n Iteratee s el s'.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "convStream",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m s' -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-Iteratee.html#convStream",
          "type": "function"
        },
        "index": {
          "description": "Convert one stream into another not necessarily in lockstep The transformer mapStream maps one element of the outer stream to one element of the nested stream The transformer below is more general it may take several elements of the outer stream to produce one element of the inner stream or the other way around The transformation from one stream to the other is specified as Iteratee el",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "convStream",
          "normalized": "Iteratee a b c-\u003eEnumeratee a c b d",
          "package": "iteratee-mtl",
          "partial": "Stream",
          "signature": "Iteratee s m s'-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:convStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDone",
          "package": "iteratee-mtl",
          "signature": "((Stream eli -\u003e Iteratee eli m a) -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-Iteratee.html#eneeCheckIfDone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDone",
          "normalized": "((Stream a-\u003eIteratee a b c)-\u003eIteratee d b(Iteratee a b c))-\u003eEnumeratee d a b c",
          "package": "iteratee-mtl",
          "partial": "Check If Done",
          "signature": "((Stream eli-\u003eIteratee eli m a)-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:eneeCheckIfDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if an iteratee has finished.\n This enumerator runs the iteratee, performing any monadic actions.\n If the result is True, the returned iteratee is done.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumCheckIfDone",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e m (Bool, Iteratee s m a)",
          "source": "src/Data-Iteratee-Iteratee.html#enumCheckIfDone",
          "type": "function"
        },
        "index": {
          "description": "Checks if an iteratee has finished This enumerator runs the iteratee performing any monadic actions If the result is True the returned iteratee is done",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumCheckIfDone",
          "normalized": "Iteratee a b c-\u003eb(Bool,Iteratee a b c)",
          "package": "iteratee-mtl",
          "partial": "Check If Done",
          "signature": "Iteratee s m a-\u003em(Bool,Iteratee s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumCheckIfDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the iteratee to the given stream.  This wraps \u003ccode\u003e\u003ca\u003eenumEof\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eenumErr\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eenumPure1Chunk\u003c/a\u003e\u003c/code\u003e, calling the appropriate enumerator\n based upon \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumChunk",
          "package": "iteratee-mtl",
          "signature": "Stream s -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumChunk",
          "type": "function"
        },
        "index": {
          "description": "Applies the iteratee to the given stream This wraps enumEof enumErr and enumPure1Chunk calling the appropriate enumerator based upon Stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumChunk",
          "normalized": "Stream a-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Chunk",
          "signature": "Stream s-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most primitive enumerator: applies the iteratee to the terminated\n stream. The result is the iteratee in the Done state.  It is an error\n if the iteratee does not terminate on EOF.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumEof",
          "package": "iteratee-mtl",
          "signature": "Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumEof",
          "type": "function"
        },
        "index": {
          "description": "The most primitive enumerator applies the iteratee to the terminated stream The result is the iteratee in the Done state It is an error if the iteratee does not terminate on EOF",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumEof",
          "package": "iteratee-mtl",
          "partial": "Eof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother primitive enumerator: tell the Iteratee the stream terminated\n with an error.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumErr",
          "package": "iteratee-mtl",
          "signature": "e -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumErr",
          "type": "function"
        },
        "index": {
          "description": "Another primitive enumerator tell the Iteratee the stream terminated with an error",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumErr",
          "normalized": "a-\u003eEnumerator b c d",
          "package": "iteratee-mtl",
          "partial": "Err",
          "signature": "e-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumerator from a callback function\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumFromCallback",
          "package": "iteratee-mtl",
          "signature": "(st -\u003e m (Either SomeException ((Bool, st), s))) -\u003e st -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumFromCallback",
          "type": "function"
        },
        "index": {
          "description": "Create an enumerator from callback function",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumFromCallback",
          "normalized": "(a-\u003eb(Either SomeException((Bool,a),c)))-\u003ea-\u003eEnumerator c b d",
          "package": "iteratee-mtl",
          "partial": "From Callback",
          "signature": "(st-\u003em(Either SomeException((Bool,st),s)))-\u003est-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumFromCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumerator from a callback function with an exception handler.\n The exception handler is called if an iteratee reports an exception.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumFromCallbackCatch",
          "package": "iteratee-mtl",
          "signature": "(st -\u003e m (Either SomeException ((Bool, st), s))) -\u003e (e -\u003e m (Maybe EnumException)) -\u003e st -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumFromCallbackCatch",
          "type": "function"
        },
        "index": {
          "description": "Create an enumerator from callback function with an exception handler The exception handler is called if an iteratee reports an exception",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumFromCallbackCatch",
          "normalized": "(a-\u003eb(Either SomeException((Bool,a),c)))-\u003e(d-\u003eb(Maybe EnumException))-\u003ea-\u003eEnumerator c b e",
          "package": "iteratee-mtl",
          "partial": "From Callback Catch",
          "signature": "(st-\u003em(Either SomeException((Bool,st),s)))-\u003e(e-\u003em(Maybe EnumException))-\u003est-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumFromCallbackCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure 1-chunk enumerator\n It passes a given list of elements to the iteratee in one chunk\n This enumerator does no IO and is useful for testing of base parsing\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumPure1Chunk",
          "package": "iteratee-mtl",
          "signature": "s -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumPure1Chunk",
          "type": "function"
        },
        "index": {
          "description": "The pure chunk enumerator It passes given list of elements to the iteratee in one chunk This enumerator does no IO and is useful for testing of base parsing",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumPure1Chunk",
          "normalized": "a-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Pure Chunk",
          "signature": "s-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:enumPure1Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity iteratee.  Doesn't do any processing of input.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "identity",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m ()",
          "source": "src/Data-Iteratee-Iteratee.html#identity",
          "type": "function"
        },
        "index": {
          "description": "The identity iteratee Doesn do any processing of input",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "identity",
          "normalized": "Iteratee a b()",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the stream status of an iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "isStreamFinished",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m (Maybe SomeException)",
          "source": "src/Data-Iteratee-Iteratee.html#isStreamFinished",
          "type": "function"
        },
        "index": {
          "description": "Get the stream status of an iteratee",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "isStreamFinished",
          "package": "iteratee-mtl",
          "partial": "Stream Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:isStreamFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "joinI",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m (Iteratee s' m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#joinI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "joinI",
          "normalized": "Iteratee a b(Iteratee c b d)-\u003eIteratee a b d",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m(Iteratee s' m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:joinI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "joinIM",
          "package": "iteratee-mtl",
          "signature": "m (Iteratee s m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#joinIM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "joinIM",
          "normalized": "a(Iteratee b a c)-\u003eIteratee b a c",
          "package": "iteratee-mtl",
          "partial": "IM",
          "signature": "m(Iteratee s m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:joinIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek to a position in the stream\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "seek",
          "package": "iteratee-mtl",
          "signature": "FileOffset -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-Iteratee.html#seek",
          "type": "function"
        },
        "index": {
          "description": "Seek to position in the stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "seek",
          "normalized": "FileOffset-\u003eIteratee a b()",
          "package": "iteratee-mtl",
          "signature": "FileOffset-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the rest of the stream\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "skipToEof",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m ()",
          "source": "src/Data-Iteratee-Iteratee.html#skipToEof",
          "type": "function"
        },
        "index": {
          "description": "Skip the rest of the stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "skipToEof",
          "normalized": "Iteratee a b()",
          "package": "iteratee-mtl",
          "partial": "To Eof",
          "signature": "Iteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:skipToEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport and propagate an unrecoverable error.\n  Disregard the input first and then propagate the error.  This error\n cannot be handled by \u003ccode\u003e\u003ca\u003eenumFromCallbackCatch\u003c/a\u003e\u003c/code\u003e, although it can be cleared\n by \u003ccode\u003e\u003ca\u003echeckErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "throwErr",
          "package": "iteratee-mtl",
          "signature": "SomeException -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#throwErr",
          "type": "function"
        },
        "index": {
          "description": "Report and propagate an unrecoverable error Disregard the input first and then propagate the error This error cannot be handled by enumFromCallbackCatch although it can be cleared by checkErr",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "throwErr",
          "normalized": "SomeException-\u003eIteratee a b c",
          "package": "iteratee-mtl",
          "partial": "Err",
          "signature": "SomeException-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:throwErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport and propagate a recoverable error.  This error can be handled by\n both \u003ccode\u003e\u003ca\u003eenumFromCallbackCatch\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003echeckErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "throwRecoverableErr",
          "package": "iteratee-mtl",
          "signature": "SomeException -\u003e (Stream s -\u003e Iteratee s m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#throwRecoverableErr",
          "type": "function"
        },
        "index": {
          "description": "Report and propagate recoverable error This error can be handled by both enumFromCallbackCatch and checkErr",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "throwRecoverableErr",
          "normalized": "SomeException-\u003e(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "iteratee-mtl",
          "partial": "Recoverable Err",
          "signature": "SomeException-\u003e(Stream s-\u003eIteratee s m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:throwRecoverableErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general stream converter.  Given a function to produce iteratee\n transformers and an initial state, convert the stream using iteratees\n generated by the function while continually updating the internal state.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "unfoldConvStream",
          "package": "iteratee-mtl",
          "signature": "(acc -\u003e Iteratee s m (acc, s')) -\u003e acc -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-Iteratee.html#unfoldConvStream",
          "type": "function"
        },
        "index": {
          "description": "The most general stream converter Given function to produce iteratee transformers and an initial state convert the stream using iteratees generated by the function while continually updating the internal state",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "unfoldConvStream",
          "normalized": "(a-\u003eIteratee b c(a,d))-\u003ea-\u003eEnumeratee b d c e",
          "package": "iteratee-mtl",
          "partial": "Conv Stream",
          "signature": "(acc-\u003eIteratee s m(acc,s'))-\u003eacc-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-Iteratee.html#v:unfoldConvStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003cp\u003eThis module provides many basic iteratees from which more complicated\n iteratees can be built.  In general these iteratees parallel those in\n \u003ccode\u003eData.List\u003c/code\u003e, with some additions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "ListLike",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee-ListLike.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers This module provides many basic iteratees from which more complicated iteratees can be built In general these iteratees parallel those in Data.List with some additions",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "ListLike",
          "package": "iteratee-mtl",
          "partial": "List Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an element predicate and returns the (possibly empty) prefix of\n the stream.  None of the characters in the string satisfy the character\n predicate.\n If the stream is not terminated, the first character of the remaining stream\n satisfies the predicate.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.break\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "break",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e Bool) -\u003e Iteratee s m s",
          "source": "src/Data-Iteratee-ListLike.html#break",
          "type": "function"
        },
        "index": {
          "description": "Takes an element predicate and returns the possibly empty prefix of the stream None of the characters in the string satisfy the character predicate If the stream is not terminated the first character of the remaining stream satisfies the predicate The analogue of List.break",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eIteratee b c b",
          "package": "iteratee-mtl",
          "signature": "(el-\u003eBool)-\u003eIteratee s m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop n elements of the stream, if there are that many.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.drop\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "drop",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-ListLike.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Drop elements of the stream if there are that many The analogue of List.drop",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "drop",
          "normalized": "Int-\u003eIteratee a b()",
          "package": "iteratee-mtl",
          "signature": "Int-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip all elements while the predicate is true.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.dropWhile\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "dropWhile",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e Bool) -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-ListLike.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Skip all elements while the predicate is true The analogue of List.dropWhile",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eIteratee b c()",
          "package": "iteratee-mtl",
          "partial": "While",
          "signature": "(el-\u003eBool)-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate two iteratees over a single stream simultaneously.\n\u003c/p\u003e\u003cp\u003eCompare to \u003ccode\u003ezip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPair",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m (a, b)",
          "source": "src/Data-Iteratee-ListLike.html#enumPair",
          "type": "function"
        },
        "index": {
          "description": "Enumerate two iteratees over single stream simultaneously Compare to zip",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPair",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b(c,d)",
          "package": "iteratee-mtl",
          "partial": "Pair",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:enumPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure n-chunk enumerator\n It passes a given stream of elements to the iteratee in \u003ccode\u003en\u003c/code\u003e-sized chunks.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPureNChunk",
          "package": "iteratee-mtl",
          "signature": "s -\u003e Int -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-ListLike.html#enumPureNChunk",
          "type": "function"
        },
        "index": {
          "description": "The pure n-chunk enumerator It passes given stream of elements to the iteratee in sized chunks",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPureNChunk",
          "normalized": "a-\u003eInt-\u003eEnumerator a b c",
          "package": "iteratee-mtl",
          "partial": "Pure NChunk",
          "signature": "s-\u003eInt-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:enumPureNChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003eenumeratee\u003c/code\u003e with only elements from the stream that\n satisfy the predicate function.  The outer stream is completely consumed.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.filter\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "filter",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e Bool) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Creates an enumeratee with only elements from the stream that satisfy the predicate function The outer stream is completely consumed The analogue of List.filter",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee b b c d",
          "package": "iteratee-mtl",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.foldl\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl",
          "package": "iteratee-mtl",
          "signature": "(a -\u003e el -\u003e a) -\u003e a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-ListLike.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Left-associative fold The analogue of List.foldl",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee c d a",
          "package": "iteratee-mtl",
          "signature": "(a-\u003eel-\u003ea)-\u003ea-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold that is strict in the accumulator.\n This function should be used in preference to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e whenever possible.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.foldl'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl'",
          "package": "iteratee-mtl",
          "signature": "(a -\u003e el -\u003e a) -\u003e a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-ListLike.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "Left-associative fold that is strict in the accumulator This function should be used in preference to foldl whenever possible The analogue of List.foldl",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIteratee c d a",
          "package": "iteratee-mtl",
          "signature": "(a-\u003eel-\u003ea)-\u003ea-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of foldl with no base case.  Requires at least one element\n   in the stream.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.foldl1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl1",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e el -\u003e el) -\u003e Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "Variant of foldl with no base case Requires at least one element in the stream The analogue of List.foldl1",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eIteratee b c a",
          "package": "iteratee-mtl",
          "signature": "(el-\u003eel-\u003eel)-\u003eIteratee s m el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl1'",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e el -\u003e el) -\u003e Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "Strict variant of foldl1",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eIteratee b c a",
          "package": "iteratee-mtl",
          "signature": "(el-\u003eel-\u003eel)-\u003eIteratee s m el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to read the next element of the stream and return it\n Raise a (recoverable) error if the stream is terminated\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.head\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "head",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#head",
          "type": "function"
        },
        "index": {
          "description": "Attempt to read the next element of the stream and return it Raise recoverable error if the stream is terminated The analogue of List.head",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "head",
          "package": "iteratee-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence of characters, attempt to match them against\n the characters on the stream.  Return the count of how many\n characters matched.  The matched characters are removed from the\n stream.\n For example, if the stream contains \u003ca\u003eabd\u003c/a\u003e, then (heads \u003ca\u003eabc\u003c/a\u003e)\n will remove the characters \u003ca\u003eab\u003c/a\u003e and return 2.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "heads",
          "package": "iteratee-mtl",
          "signature": "s -\u003e Iteratee s m Int",
          "source": "src/Data-Iteratee-ListLike.html#heads",
          "type": "function"
        },
        "index": {
          "description": "Given sequence of characters attempt to match them against the characters on the stream Return the count of how many characters matched The matched characters are removed from the stream For example if the stream contains abd then heads abc will remove the characters ab and return",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "heads",
          "normalized": "a-\u003eIteratee a b Int",
          "package": "iteratee-mtl",
          "signature": "s-\u003eIteratee s m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:heads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a stream has received \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "isFinished",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m Bool",
          "source": "src/Data-Iteratee-ListLike.html#isFinished",
          "type": "function"
        },
        "index": {
          "description": "Check if stream has received EOF",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "isFinished",
          "package": "iteratee-mtl",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:isFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total length of the remaining part of the stream.\n This forces evaluation of the entire stream.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.length\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "length",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ListLike.html#length",
          "type": "function"
        },
        "index": {
          "description": "Return the total length of the remaining part of the stream This forces evaluation of the entire stream The analogue of List.length",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "length",
          "package": "iteratee-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the stream: another iteratee transformer\n Given the stream of elements of the type \u003ccode\u003eel\u003c/code\u003e and the function \u003ccode\u003eel-\u003eel'\u003c/code\u003e,\n build a nested stream of elements of the type \u003ccode\u003eel'\u003c/code\u003e and apply the\n given iteratee to it.\n\u003c/p\u003e\u003cp\u003eThe analog of \u003ccode\u003eList.map\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "mapStream",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e el') -\u003e Enumeratee (s el) (s el') m a",
          "source": "src/Data-Iteratee-ListLike.html#mapStream",
          "type": "function"
        },
        "index": {
          "description": "Map the stream another iteratee transformer Given the stream of elements of the type el and the function el el build nested stream of elements of the type el and apply the given iteratee to it The analog of List.map",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "mapStream",
          "normalized": "(a-\u003eb)-\u003eEnumeratee(c a)(c b)d e",
          "package": "iteratee-mtl",
          "partial": "Stream",
          "signature": "(el-\u003eel')-\u003eEnumeratee(s el)(s el')m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:mapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook ahead at the next element of the stream, without removing\n it from the stream.\n Return \u003ccode\u003eJust c\u003c/code\u003e if successful, return \u003ccode\u003eNothing\u003c/code\u003e if the stream is\n terminated by EOF.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "peek",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m (Maybe el)",
          "source": "src/Data-Iteratee-ListLike.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Look ahead at the next element of the stream without removing it from the stream Return Just if successful return Nothing if the stream is terminated by EOF",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "peek",
          "package": "iteratee-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct of a stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "product",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#product",
          "type": "function"
        },
        "index": {
          "description": "Product of stream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "product",
          "package": "iteratee-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the stream rigidly.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e, but the element type cannot change.\n This function is necessary for \u003ccode\u003eByteString\u003c/code\u003e and similar types\n that cannot have \u003ccode\u003e\u003ca\u003eLooseMap\u003c/a\u003e\u003c/code\u003e instances, and may be more efficient.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "rigidMapStream",
          "package": "iteratee-mtl",
          "signature": "(el -\u003e el) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#rigidMapStream",
          "type": "function"
        },
        "index": {
          "description": "Map the stream rigidly Like mapStream but the element type cannot change This function is necessary for ByteString and similar types that cannot have LooseMap instances and may be more efficient",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "rigidMapStream",
          "normalized": "(a-\u003ea)-\u003eEnumeratee b b c d",
          "package": "iteratee-mtl",
          "partial": "Map Stream",
          "signature": "(el-\u003eel)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:rigidMapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a chunk of \u003ccode\u003et\u003c/code\u003e elements length, while consuming \u003ccode\u003ed\u003c/code\u003e elements\n   from the stream.  Useful for creating a \u003ca\u003erolling average\u003c/a\u003e with convStream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "roll",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Int -\u003e Iteratee s m s'",
          "source": "src/Data-Iteratee-ListLike.html#roll",
          "type": "function"
        },
        "index": {
          "description": "Return chunk of elements length while consuming elements from the stream Useful for creating rolling average with convStream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "roll",
          "normalized": "Int-\u003eInt-\u003eIteratee a b c",
          "package": "iteratee-mtl",
          "signature": "Int-\u003eInt-\u003eIteratee s m s'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a stream to the end and return all of its elements as a list.\n This iteratee returns all data from the stream *strictly*.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2list",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m [el]",
          "source": "src/Data-Iteratee-ListLike.html#stream2list",
          "type": "function"
        },
        "index": {
          "description": "Read stream to the end and return all of its elements as list This iteratee returns all data from the stream strictly",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2list",
          "normalized": "Iteratee a b[c]",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m[el]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:stream2list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a stream to the end and return all of its elements as a stream.\n This iteratee returns all data from the stream *strictly*.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2stream",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m s",
          "source": "src/Data-Iteratee-ListLike.html#stream2stream",
          "type": "function"
        },
        "index": {
          "description": "Read stream to the end and return all of its elements as stream This iteratee returns all data from the stream strictly",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2stream",
          "package": "iteratee-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:stream2stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of a stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "sum",
          "package": "iteratee-mtl",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Sum of stream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "sum",
          "package": "iteratee-mtl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead n elements from a stream and apply the given iteratee to the\n stream of the read elements. Unless the stream is terminated early, we\n read exactly n elements, even if the iteratee has accepted fewer.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.take\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "take",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#take",
          "type": "function"
        },
        "index": {
          "description": "Read elements from stream and apply the given iteratee to the stream of the read elements Unless the stream is terminated early we read exactly elements even if the iteratee has accepted fewer The analogue of List.take",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "take",
          "normalized": "Int-\u003eEnumeratee a a b c",
          "package": "iteratee-mtl",
          "signature": "Int-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead n elements from a stream and apply the given iteratee to the\n stream of the read elements. If the given iteratee accepted fewer\n elements, we stop.\n This is the variation of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e with the early termination\n of processing of the outer stream once the processing of the inner stream\n finished early.\n\u003c/p\u003e\u003cp\u003eN.B. If the inner iteratee finishes early, remaining data within the current\n chunk will be dropped.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "takeUpTo",
          "package": "iteratee-mtl",
          "signature": "Int -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#takeUpTo",
          "type": "function"
        },
        "index": {
          "description": "Read elements from stream and apply the given iteratee to the stream of the read elements If the given iteratee accepted fewer elements we stop This is the variation of take with the early termination of processing of the outer stream once the processing of the inner stream finished early N.B If the inner iteratee finishes early remaining data within the current chunk will be dropped",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "takeUpTo",
          "normalized": "Int-\u003eEnumeratee a a b c",
          "package": "iteratee-mtl",
          "partial": "Up To",
          "signature": "Int-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee-ListLike.html#v:takeUpTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide iteratee-based IO as described in Oleg Kiselyov's paper http:\u003cem/\u003eokmij.org\u003cem\u003eftp\u003c/em\u003eHaskell\u003cem\u003eIteratee\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eOleg's original code uses lists to store buffers of data for reading in the iteratee.  This package allows the use of arbitrary types through use of the StreamChunk type class.  See Data.Iteratee.WrappedByteString for implementation details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "source": "src/Data-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "Provide iteratee-based IO as described in Oleg Kiselyov paper http okmij.org ftp Haskell Iteratee Oleg original code uses lists to store buffers of data for reading in the iteratee This package allows the use of arbitrary types through use of the StreamChunk type class See Data.Iteratee.WrappedByteString for implementation details",
          "hierarchy": "Data Iteratee",
          "module": "Data.Iteratee",
          "name": "Iteratee",
          "package": "iteratee-mtl",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNullPoint:\n Pointed types (usually containers) that can be empty.\n Corresponds to Data.Monoid.mempty\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee-mtl",
          "source": "src/Data-NullPoint.html",
          "type": "module"
        },
        "index": {
          "description": "NullPoint Pointed types usually containers that can be empty Corresponds to Data.Monoid.mempty",
          "hierarchy": "Data NullPoint",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee-mtl",
          "partial": "Null Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-NullPoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNullPoint class.  Containers that have a null representation, corresponding\n to Data.Monoid.mempty.\n\u003c/p\u003e",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee-mtl",
          "source": "src/Data-NullPoint.html#NullPoint",
          "type": "class"
        },
        "index": {
          "description": "NullPoint class Containers that have null representation corresponding to Data.Monoid.mempty",
          "hierarchy": "Data NullPoint",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee-mtl",
          "partial": "Null Point",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-NullPoint.html#t:NullPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NullPoint",
          "name": "empty",
          "package": "iteratee-mtl",
          "signature": "c",
          "source": "src/Data-NullPoint.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data NullPoint",
          "module": "Data.NullPoint",
          "name": "empty",
          "package": "iteratee-mtl",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-NullPoint.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNullable:\n test if a type (container) is null.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee-mtl",
          "source": "src/Data-Nullable.html",
          "type": "module"
        },
        "index": {
          "description": "Nullable test if type container is null",
          "hierarchy": "Data Nullable",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee-mtl",
          "partial": "Nullable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Nullable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNullable container class\n\u003c/p\u003e",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee-mtl",
          "source": "src/Data-Nullable.html#Nullable",
          "type": "class"
        },
        "index": {
          "description": "Nullable container class",
          "hierarchy": "Data Nullable",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee-mtl",
          "partial": "Nullable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Nullable.html#t:Nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nullable",
          "name": "null",
          "package": "iteratee-mtl",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Nullable.html#null",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Nullable",
          "module": "Data.Nullable",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "iteratee-mtl",
          "signature": "c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee-mtl/docs/Data-Nullable.html#v:null"
      }
    }
  ]
]