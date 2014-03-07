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
        "word": "iteratee"
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
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base-LooseMap.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers Maps over restricted-element containers",
          "hierarchy": "Data Iteratee Base LooseMap",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee",
          "partial": "Loose Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base-LooseMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable map functions for containers that require class contexts on the\n element types.  For lists, this is identical to plain \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base-LooseMap.html#LooseMap",
          "type": "class"
        },
        "index": {
          "description": "Enable map functions for containers that require class contexts on the element types For lists this is identical to plain map",
          "hierarchy": "Data Iteratee Base LooseMap",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "LooseMap",
          "package": "iteratee",
          "partial": "Loose Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base-LooseMap.html#t:LooseMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "lMap",
          "package": "iteratee",
          "signature": "(el -\u003e el') -\u003e c el -\u003e c el'",
          "source": "src/Data-Iteratee-Base-LooseMap.html#lMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Base LooseMap",
          "module": "Data.Iteratee.Base.LooseMap",
          "name": "lMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "iteratee",
          "partial": "Map",
          "signature": "(el-\u003eel')-\u003ec el-\u003ec el'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base-LooseMap.html#v:lMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003cp\u003eSupport for IO enumerators\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base-ReadableChunk.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers Support for IO enumerators",
          "hierarchy": "Data Iteratee Base ReadableChunk",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee",
          "partial": "Readable Chunk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base-ReadableChunk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of streams which can be filled from a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.  Typically these\n are streams which can be read from a file, \u003ccode\u003eHandle\u003c/code\u003e, or similar resource.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base-ReadableChunk.html#ReadableChunk",
          "type": "class"
        },
        "index": {
          "description": "Class of streams which can be filled from Ptr Typically these are streams which can be read from file Handle or similar resource",
          "hierarchy": "Data Iteratee Base ReadableChunk",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "ReadableChunk",
          "package": "iteratee",
          "partial": "Readable Chunk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base-ReadableChunk.html#t:ReadableChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "readFromPtr",
          "package": "iteratee",
          "signature": "readFromPtr",
          "source": "src/Data-Iteratee-Base-ReadableChunk.html#readFromPtr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Base ReadableChunk",
          "module": "Data.Iteratee.Base.ReadableChunk",
          "name": "readFromPtr",
          "package": "iteratee",
          "partial": "From Ptr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base-ReadableChunk.html#v:readFromPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Base",
          "name": "Base",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Base",
          "package": "iteratee",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic iteratee\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base.html#Iteratee",
          "type": "newtype"
        },
        "index": {
          "description": "Monadic iteratee",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee",
          "partial": "Iteratee",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#t:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream is a (continuing) sequence of elements bundled in Chunks.\n The first variant indicates termination of the stream.\n Chunk a gives the currently available part of the stream.\n The stream is not terminated yet.\n The case (null Chunk) signifies a stream with no currently available\n data but which is still continuing. A stream processor should,\n informally speaking, ``suspend itself'' and wait for more data\n to arrive.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "Stream",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "stream is continuing sequence of elements bundled in Chunks The first variant indicates termination of the stream Chunk gives the currently available part of the stream The stream is not terminated yet The case null Chunk signifies stream with no currently available data but which is still continuing stream processor should informally speaking suspend itself and wait for more data to arrive",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Stream",
          "package": "iteratee",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe the status of a stream of data.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "StreamStatus",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "data"
        },
        "index": {
          "description": "Describe the status of stream of data",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "StreamStatus",
          "package": "iteratee",
          "partial": "Stream Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#t:StreamStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "Chunk",
          "package": "iteratee",
          "signature": "Chunk c",
          "source": "src/Data-Iteratee-Base.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Chunk",
          "package": "iteratee",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "DataRemaining",
          "package": "iteratee",
          "signature": "DataRemaining",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "DataRemaining",
          "package": "iteratee",
          "partial": "Data Remaining",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:DataRemaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "EOF",
          "package": "iteratee",
          "signature": "EOF (Maybe SomeException)",
          "source": "src/Data-Iteratee-Base.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "EOF",
          "package": "iteratee",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "EofError",
          "package": "iteratee",
          "signature": "EofError SomeException",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "EofError",
          "package": "iteratee",
          "partial": "Eof Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:EofError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "EofNoError",
          "package": "iteratee",
          "signature": "EofNoError",
          "source": "src/Data-Iteratee-Base.html#StreamStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "EofNoError",
          "package": "iteratee",
          "partial": "Eof No Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:EofNoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee",
          "signature": "Iteratee",
          "source": "src/Data-Iteratee-Base.html#Iteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "Iteratee",
          "package": "iteratee",
          "partial": "Iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:Iteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "icont",
          "package": "iteratee",
          "signature": "(Stream s -\u003e Iteratee s m a) -\u003e Maybe SomeException -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Base.html#icont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "icont",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eIteratee a b c",
          "package": "iteratee",
          "signature": "(Stream s-\u003eIteratee s m a)-\u003eMaybe SomeException-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:icont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "icontM",
          "package": "iteratee",
          "signature": "(Stream s -\u003e Iteratee s m a) -\u003e Maybe SomeException -\u003e m (Iteratee s m a)",
          "source": "src/Data-Iteratee-Base.html#icontM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "icontM",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eb(Iteratee a b c)",
          "package": "iteratee",
          "signature": "(Stream s-\u003eIteratee s m a)-\u003eMaybe SomeException-\u003em(Iteratee s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:icontM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "idone",
          "package": "iteratee",
          "signature": "a -\u003e Stream s -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Base.html#idone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "idone",
          "normalized": "a-\u003eStream b-\u003eIteratee b c a",
          "package": "iteratee",
          "signature": "a-\u003eStream s-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:idone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "idoneM",
          "package": "iteratee",
          "signature": "a -\u003e Stream s -\u003e m (Iteratee s m a)",
          "source": "src/Data-Iteratee-Base.html#idoneM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "idoneM",
          "normalized": "a-\u003eStream b-\u003ec(Iteratee b c a)",
          "package": "iteratee",
          "signature": "a-\u003eStream s-\u003em(Iteratee s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:idoneM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation in the inner monad of an iteratee, while threading\n through an accumulator.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "ifold",
          "package": "iteratee",
          "signature": "(forall r.  m r -\u003e acc -\u003e n (r, acc)) -\u003e acc -\u003e Iteratee s m a -\u003e Iteratee s n (a, acc)",
          "source": "src/Data-Iteratee-Base.html#ifold",
          "type": "function"
        },
        "index": {
          "description": "Lift computation in the inner monad of an iteratee while threading through an accumulator",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "ifold",
          "normalized": "(a b c d-\u003ee-\u003ef(d,e))-\u003ee-\u003eIteratee g c h-\u003eIteratee g f(h,e)",
          "package": "iteratee",
          "signature": "(forall r. m r-\u003eacc-\u003en(r,acc))-\u003eacc-\u003eIteratee s m a-\u003eIteratee s n(a,acc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:ifold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation in the inner monad of an iteratee.\n\u003c/p\u003e\u003cp\u003eA simple use would be to lift a logger iteratee to a monad stack.\n\u003c/p\u003e\u003cpre\u003e logger :: Iteratee String IO ()\n logger = mapChunksM_ putStrLn\n \n loggerG :: MonadIO m =\u003e Iteratee String m ()\n loggerG = ilift liftIO logger\n\u003c/pre\u003e\u003cp\u003eA more complex example would involve lifting an iteratee to work with\n interleaved streams.  See the example at \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "ilift",
          "package": "iteratee",
          "signature": "(forall r.  m r -\u003e n r) -\u003e Iteratee s m a -\u003e Iteratee s n a",
          "source": "src/Data-Iteratee-Base.html#ilift",
          "type": "function"
        },
        "index": {
          "description": "Lift computation in the inner monad of an iteratee simple use would be to lift logger iteratee to monad stack logger Iteratee String IO logger mapChunksM putStrLn loggerG MonadIO Iteratee String loggerG ilift liftIO logger more complex example would involve lifting an iteratee to work with interleaved streams See the example at merge",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "ilift",
          "normalized": "(a b c d-\u003ee d)-\u003eIteratee f c g-\u003eIteratee f e g",
          "package": "iteratee",
          "signature": "(forall r. m r-\u003en r)-\u003eIteratee s m a-\u003eIteratee s n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:ilift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "liftI",
          "package": "iteratee",
          "signature": "(Stream s -\u003e Iteratee s m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Base.html#liftI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "liftI",
          "normalized": "(Stream a-\u003eIteratee a b c)-\u003eIteratee a b c",
          "package": "iteratee",
          "signature": "(Stream s-\u003eIteratee s m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: This function will be removed, compare to \u003ccode\u003e\u003ca\u003eilift\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eTransform a computation inside an \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "mapIteratee",
          "package": "iteratee",
          "signature": "(m a -\u003e n b) -\u003e Iteratee s m a -\u003e Iteratee s n b",
          "source": "src/Data-Iteratee-Base.html#mapIteratee",
          "type": "function"
        },
        "index": {
          "description": "Deprecated This function will be removed compare to ilift Transform computation inside an Iteratee",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "mapIteratee",
          "normalized": "(a b-\u003ec d)-\u003eIteratee e a b-\u003eIteratee e c d",
          "package": "iteratee",
          "partial": "Iteratee",
          "signature": "(m a-\u003en b)-\u003eIteratee s m a-\u003eIteratee s n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:mapIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003eIteratee\u003c/code\u003e and disregard the unconsumed part of the\n stream.  If the iteratee is in an exception state, that exception is\n thrown with \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e.  Iteratees that do not terminate\n on \u003ccode\u003eEOF\u003c/code\u003e will throw \u003ccode\u003e\u003ca\u003eEofException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "run",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e m a",
          "source": "src/Data-Iteratee-Base.html#run",
          "type": "function"
        },
        "index": {
          "description": "Send EOF to the Iteratee and disregard the unconsumed part of the stream If the iteratee is in an exception state that exception is thrown with throw Iteratees that do not terminate on EOF will throw EofException",
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "run",
          "normalized": "Iteratee a b c-\u003eb c",
          "package": "iteratee",
          "signature": "Iteratee s m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Base",
          "name": "runIter",
          "package": "iteratee",
          "signature": "forall r.  (a -\u003e Stream s -\u003e m r) -\u003e ((Stream s -\u003e Iteratee s m a) -\u003e Maybe SomeException -\u003e m r) -\u003e m r",
          "source": "src/Data-Iteratee-Base.html#Iteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Base",
          "module": "Data.Iteratee.Base",
          "name": "runIter",
          "normalized": "a b(c-\u003eStream d-\u003ee f)-\u003e((Stream d-\u003eIteratee d e c)-\u003eMaybe SomeException-\u003ee f)-\u003ee f",
          "package": "iteratee",
          "partial": "Iter",
          "signature": "forall r.(a-\u003eStream s-\u003em r)-\u003e((Stream s-\u003eIteratee s m a)-\u003eMaybe SomeException-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:runIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e error message.  If the stream was terminated because\n of an error, keep the error message.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "setEOF",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "EOF",
          "signature": "Stream c-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:setEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an iteratee, returning either the result or the iteratee exception.\n Note that only internal iteratee exceptions will be returned; exceptions\n thrown with \u003ccode\u003eControl.Exception.throw\u003c/code\u003e or \u003ccode\u003eControl.Monad.CatchIO.throw\u003c/code\u003e will\n not be returned.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eIFException\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Base",
          "name": "tryRun",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Run",
          "signature": "Iteratee s m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Base.html#v:tryRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors, and transformers\n\u003c/p\u003e\u003cp\u003eIteratees for parsing binary data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "Binary",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers Iteratees for parsing binary data",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "Binary",
          "package": "iteratee",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate endian-ness.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "Endian",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Binary.html#Endian",
          "type": "data"
        },
        "index": {
          "description": "Indicate endian-ness",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "Endian",
          "package": "iteratee",
          "partial": "Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#t:Endian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeast Significan Byte is first (little-endian)\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "LSB",
          "package": "iteratee",
          "signature": "LSB",
          "source": "src/Data-Iteratee-Binary.html#Endian",
          "type": "function"
        },
        "index": {
          "description": "Least Significan Byte is first little-endian",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "LSB",
          "package": "iteratee",
          "partial": "LSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:LSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost Significant Byte is first (big-endian)\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "MSB",
          "package": "iteratee",
          "signature": "MSB",
          "source": "src/Data-Iteratee-Binary.html#Endian",
          "type": "function"
        },
        "index": {
          "description": "Most Significant Byte is first big-endian",
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "MSB",
          "package": "iteratee",
          "partial": "MSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:MSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead2",
          "package": "iteratee",
          "signature": "Endian -\u003e Iteratee s m Word16",
          "source": "src/Data-Iteratee-Binary.html#endianRead2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead2",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:endianRead2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3",
          "package": "iteratee",
          "signature": "Endian -\u003e Iteratee s m Word32",
          "source": "src/Data-Iteratee-Binary.html#endianRead3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:endianRead3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead 3 bytes in an endian manner.  If the first bit is set (negative),\n set the entire first byte so the Int32 will be negative as\n well.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead3i",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:endianRead3i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead4",
          "package": "iteratee",
          "signature": "Endian -\u003e Iteratee s m Word32",
          "source": "src/Data-Iteratee-Binary.html#endianRead4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead4",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:endianRead4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "endianRead8",
          "package": "iteratee",
          "signature": "Endian -\u003e Iteratee s m Word64",
          "source": "src/Data-Iteratee-Binary.html#endianRead8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "endianRead8",
          "normalized": "Endian-\u003eIteratee a b Word",
          "package": "iteratee",
          "partial": "Read",
          "signature": "Endian-\u003eIteratee s m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:endianRead8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "readWord16be_bs",
          "package": "iteratee",
          "signature": "Iteratee ByteString m Word16",
          "source": "src/Data-Iteratee-Binary.html#readWord16be_bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "readWord16be_bs",
          "package": "iteratee",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:readWord16be_bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "readWord16le_bs",
          "package": "iteratee",
          "signature": "Iteratee ByteString m Word16",
          "source": "src/Data-Iteratee-Binary.html#readWord16le_bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "readWord16le_bs",
          "package": "iteratee",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:readWord16le_bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "readWord32be_bs",
          "package": "iteratee",
          "signature": "Iteratee ByteString m Word32",
          "source": "src/Data-Iteratee-Binary.html#readWord32be_bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "readWord32be_bs",
          "package": "iteratee",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:readWord32be_bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "readWord32le_bs",
          "package": "iteratee",
          "signature": "Iteratee ByteString m Word32",
          "source": "src/Data-Iteratee-Binary.html#readWord32le_bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "readWord32le_bs",
          "package": "iteratee",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:readWord32le_bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "readWord64be_bs",
          "package": "iteratee",
          "signature": "Iteratee ByteString m Word64",
          "source": "src/Data-Iteratee-Binary.html#readWord64be_bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "readWord64be_bs",
          "package": "iteratee",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:readWord64be_bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Binary",
          "name": "readWord64le_bs",
          "package": "iteratee",
          "signature": "Iteratee ByteString m Word64",
          "source": "src/Data-Iteratee-Binary.html#readWord64le_bs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Binary",
          "module": "Data.Iteratee.Binary",
          "name": "readWord64le_bs",
          "package": "iteratee",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Binary.html#v:readWord64le_bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for Char-based iteratee processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Char",
          "name": "Char",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Char.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for Char-based iteratee processing",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "Char",
          "package": "iteratee",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the stream of characters to the stream of lines, and\n apply the given iteratee to enumerate the latter.\n The stream of lines is normally terminated by the empty line.\n When the stream of characters is terminated, the stream of lines\n is also terminated.\n This is the first proper iteratee-enumerator: it is the iteratee of the\n character stream and the enumerator of the line stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "enumLines",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Lines",
          "signature": "Enumeratee s[s]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#v:enumLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Char",
          "name": "enumLinesBS",
          "package": "iteratee",
          "signature": "Enumeratee ByteString [ByteString] m a",
          "source": "src/Data-Iteratee-Char.html#enumLinesBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "enumLinesBS",
          "normalized": "Enumeratee ByteString[ByteString]a b",
          "package": "iteratee",
          "partial": "Lines BS",
          "signature": "Enumeratee ByteString[ByteString]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#v:enumLinesBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the stream of characters to the stream of words, and\n apply the given iteratee to enumerate the latter.\n Words are delimited by white space.\n This is the analogue of List.words\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "enumWords",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Words",
          "signature": "Enumeratee s[s]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#v:enumWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Char",
          "name": "enumWordsBS",
          "package": "iteratee",
          "signature": "Enumeratee ByteString [ByteString] m a",
          "source": "src/Data-Iteratee-Char.html#enumWordsBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "enumWordsBS",
          "normalized": "Enumeratee ByteString[ByteString]a b",
          "package": "iteratee",
          "partial": "Words BS",
          "signature": "Enumeratee ByteString[ByteString]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#v:enumWordsBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint lines as they are received. This is the first \u003ccode\u003eimpure\u003c/code\u003e iteratee\n with non-trivial actions during chunk processing\n\u003c/p\u003e\u003cp\u003eOnly lines ending with a newline are printed,\n  data terminated with EOF is not printed.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "printLines",
          "package": "iteratee",
          "signature": "Iteratee String IO ()",
          "source": "src/Data-Iteratee-Char.html#printLines",
          "type": "function"
        },
        "index": {
          "description": "Print lines as they are received This is the first impure iteratee with non-trivial actions during chunk processing Only lines ending with newline are printed data terminated with EOF is not printed",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "printLines",
          "normalized": "Iteratee String IO()",
          "package": "iteratee",
          "partial": "Lines",
          "signature": "Iteratee String IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#v:printLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint lines as they are received.\n\u003c/p\u003e\u003cp\u003eAll lines are printed, including a line with a terminating EOF.\n  If the final line is terminated by EOF without a newline,\n  no newline is printed.\n  this function should be used in preference to printLines when possible,\n  as it is more efficient with long lines.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Char",
          "name": "printLinesUnterminated",
          "package": "iteratee",
          "signature": "Iteratee s IO ()",
          "source": "src/Data-Iteratee-Char.html#printLinesUnterminated",
          "type": "function"
        },
        "index": {
          "description": "Print lines as they are received All lines are printed including line with terminating EOF If the final line is terminated by EOF without newline no newline is printed this function should be used in preference to printLines when possible as it is more efficient with long lines",
          "hierarchy": "Data Iteratee Char",
          "module": "Data.Iteratee.Char",
          "name": "printLinesUnterminated",
          "normalized": "Iteratee a IO()",
          "package": "iteratee",
          "partial": "Lines Unterminated",
          "signature": "Iteratee s IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Char.html#v:printLinesUnterminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic and General Iteratees:\n Messaging and exception handling.\n\u003c/p\u003e\u003cp\u003eIteratees use an internal exception handling mechanism that is parallel to\n that provided by \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e.  This allows the iteratee framework\n to handle its own exceptions outside \u003ccode\u003eIO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIteratee exceptions are divided into two categories, \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003eIterExceptions\u003c/code\u003e are exceptions within an iteratee, and\n \u003ccode\u003eEnumExceptions\u003c/code\u003e are exceptions within an enumerator.\n\u003c/p\u003e\u003cp\u003eEnumerators can be constructed to handle an \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e with\n \u003ccode\u003eData.Iteratee.Iteratee.enumFromCallbackCatch\u003c/code\u003e.  If the enumerator detects\n an \u003ccode\u003eiteratee exception\u003c/code\u003e, the enumerator calls the provided exception handler.\n The enumerator is then able to continue feeding data to the iteratee,\n provided the exception was successfully handled.  If the handler could\n not handle the exception, the \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e is converted to an\n \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e and processing aborts.\n\u003c/p\u003e\u003cp\u003eExceptions can also be cleared by \u003ccode\u003eData.Iteratee.Iteratee.checkErr\u003c/code\u003e,\n although in this case the iteratee continuation cannot be recovered.\n\u003c/p\u003e\u003cp\u003eWhen viewed as Resumable Exceptions, iteratee exceptions provide a means\n for iteratees to send control messages to enumerators.  The \u003ccode\u003eseek\u003c/code\u003e\n implementation provides an example.  \u003ccode\u003eData.Iteratee.Iteratee.seek\u003c/code\u003e stores\n the current iteratee continuation and throws a \u003ccode\u003e\u003ca\u003eSeekException\u003c/a\u003e\u003c/code\u003e, which\n inherits from \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003eData.Iteratee.IO.enumHandleRandom\u003c/code\u003e is\n constructed with \u003ccode\u003eenumFromCallbackCatch\u003c/code\u003e and a handler that performs\n an \u003ccode\u003ehSeek\u003c/code\u003e.  Upon receiving the \u003ccode\u003e\u003ca\u003eSeekException\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eenumHandleRandom\u003c/code\u003e calls\n the handler, checks that it executed properly, and then continues with\n the stored continuation.\n\u003c/p\u003e\u003cp\u003eAs the exception hierarchy is open, users can extend it with custom\n exceptions and exception handlers to implement sophisticated messaging\n systems based upon resumable exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "Exception",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic and General Iteratees Messaging and exception handling Iteratees use an internal exception handling mechanism that is parallel to that provided by Exception This allows the iteratee framework to handle its own exceptions outside IO Iteratee exceptions are divided into two categories IterException and EnumException IterExceptions are exceptions within an iteratee and EnumExceptions are exceptions within an enumerator Enumerators can be constructed to handle an IterException with Data.Iteratee.Iteratee.enumFromCallbackCatch If the enumerator detects an iteratee exception the enumerator calls the provided exception handler The enumerator is then able to continue feeding data to the iteratee provided the exception was successfully handled If the handler could not handle the exception the IterException is converted to an EnumException and processing aborts Exceptions can also be cleared by Data.Iteratee.Iteratee.checkErr although in this case the iteratee continuation cannot be recovered When viewed as Resumable Exceptions iteratee exceptions provide means for iteratees to send control messages to enumerators The seek implementation provides an example Data.Iteratee.Iteratee.seek stores the current iteratee continuation and throws SeekException which inherits from IterException Data.Iteratee.IO.enumHandleRandom is constructed with enumFromCallbackCatch and handler that performs an hSeek Upon receiving the SeekException enumHandleRandom calls the handler checks that it executed properly and then continues with the stored continuation As the exception hierarchy is open users can extend it with custom exceptions and exception handlers to implement sophisticated messaging systems based upon resumable exceptions",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "Exception",
          "package": "iteratee",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eiteratee\u003c/code\u003e diverged upon receiving \u003ccode\u003eEOF\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#DivergentException",
          "type": "data"
        },
        "index": {
          "description": "The iteratee diverged upon receiving EOF",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee",
          "partial": "Divergent Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:DivergentException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#EnumException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee",
          "partial": "Enum Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:EnumException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumerator exception from a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#EnumStringException",
          "type": "data"
        },
        "index": {
          "description": "Create an enumerator exception from String",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee",
          "partial": "Enum String Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:EnumStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator received an \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e it could not handle.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#EnumUnhandledIterException",
          "type": "data"
        },
        "index": {
          "description": "The enumerator received an IterException it could not handle",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee",
          "partial": "Enum Unhandled Iter Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:EnumUnhandledIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eIteratee\u003c/code\u003e needs more data but received \u003ccode\u003eEOF\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#EofException",
          "type": "data"
        },
        "index": {
          "description": "The Iteratee needs more data but received EOF",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee",
          "partial": "Eof Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:EofException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "Exception",
          "package": "iteratee",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "Exception",
          "package": "iteratee",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for \u003ccode\u003eiteratee exceptions\u003c/code\u003e.  Only inheritants of \u003ccode\u003eIterException\u003c/code\u003e\n should be instances of this class.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#IException",
          "type": "class"
        },
        "index": {
          "description": "class for iteratee exceptions Only inheritants of IterException should be instances of this class",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IException",
          "package": "iteratee",
          "partial": "IException",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:IException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot of the Iteratee exception hierarchy.  \u003ccode\u003eIFException\u003c/code\u003e derives from\n \u003ccode\u003eControl.Exception.SomeException\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e,\n and all inheritants are descendents of \u003ccode\u003e\u003ca\u003eIFException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#IFException",
          "type": "data"
        },
        "index": {
          "description": "Root of the Iteratee exception hierarchy IFException derives from Control.Exception.SomeException EnumException IterException and all inheritants are descendents of IFException",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee",
          "partial": "IFException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:IFException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot of iteratee exceptions.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#IterException",
          "type": "data"
        },
        "index": {
          "description": "Root of iteratee exceptions",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee",
          "partial": "Iter Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:IterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eIteratee exception\u003c/code\u003e specified by a \u003ccode\u003eString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#IterStringException",
          "type": "data"
        },
        "index": {
          "description": "An Iteratee exception specified by String",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee",
          "partial": "Iter String Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:IterStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA seek request within an \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Exception.html#SeekException",
          "type": "data"
        },
        "index": {
          "description": "seek request within an Iteratee",
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee",
          "partial": "Seek Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#t:SeekException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee",
          "signature": "DivergentException",
          "source": "src/Data-Iteratee-Exception.html#DivergentException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "DivergentException",
          "package": "iteratee",
          "partial": "Divergent Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:DivergentException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee",
          "signature": "EnumException e",
          "source": "src/Data-Iteratee-Exception.html#EnumException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumException",
          "package": "iteratee",
          "partial": "Enum Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:EnumException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee",
          "signature": "EnumStringException String",
          "source": "src/Data-Iteratee-Exception.html#EnumStringException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumStringException",
          "package": "iteratee",
          "partial": "Enum String Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:EnumStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee",
          "signature": "EnumUnhandledIterException IterException",
          "source": "src/Data-Iteratee-Exception.html#EnumUnhandledIterException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EnumUnhandledIterException",
          "package": "iteratee",
          "partial": "Enum Unhandled Iter Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:EnumUnhandledIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee",
          "signature": "EofException",
          "source": "src/Data-Iteratee-Exception.html#EofException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "EofException",
          "package": "iteratee",
          "partial": "Eof Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:EofException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee",
          "signature": "IFException e",
          "source": "src/Data-Iteratee-Exception.html#IFException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IFException",
          "package": "iteratee",
          "partial": "IFException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:IFException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee",
          "signature": "IterException e",
          "source": "src/Data-Iteratee-Exception.html#IterException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterException",
          "package": "iteratee",
          "partial": "Iter Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:IterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee",
          "signature": "IterStringException String",
          "source": "src/Data-Iteratee-Exception.html#IterStringException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "IterStringException",
          "package": "iteratee",
          "partial": "Iter String Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:IterStringException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee",
          "signature": "SeekException FileOffset",
          "source": "src/Data-Iteratee-Exception.html#SeekException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "SeekException",
          "package": "iteratee",
          "partial": "Seek Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:SeekException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e from a string.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "enStrExc",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Str Exc",
          "signature": "String-\u003eEnumException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:enStrExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "fromException",
          "package": "iteratee",
          "signature": "SomeException -\u003e Maybe e",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "fromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "iteratee",
          "partial": "Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:fromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "fromIterException",
          "package": "iteratee",
          "signature": "IterException -\u003e Maybe e",
          "source": "src/Data-Iteratee-Exception.html#fromIterException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "fromIterException",
          "normalized": "IterException-\u003eMaybe a",
          "package": "iteratee",
          "partial": "Iter Exception",
          "signature": "IterException-\u003eMaybe e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:fromIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "iterExceptionFromException",
          "package": "iteratee",
          "signature": "SomeException -\u003e Maybe e",
          "source": "src/Data-Iteratee-Exception.html#iterExceptionFromException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "iterExceptionFromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "iteratee",
          "partial": "Exception From Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:iterExceptionFromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "iterExceptionToException",
          "package": "iteratee",
          "signature": "e -\u003e SomeException",
          "source": "src/Data-Iteratee-Exception.html#iterExceptionToException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "iterExceptionToException",
          "normalized": "a-\u003eSomeException",
          "package": "iteratee",
          "partial": "Exception To Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:iterExceptionToException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003eiteratee exception\u003c/code\u003e from a string.\n This convenience function wraps \u003ccode\u003e\u003ca\u003eIterStringException\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "iterStrExc",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Str Exc",
          "signature": "String-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:iterStrExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "toException",
          "package": "iteratee",
          "signature": "e -\u003e SomeException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "toException",
          "normalized": "a-\u003eSomeException",
          "package": "iteratee",
          "partial": "Exception",
          "signature": "e-\u003eSomeException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:toException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Exception",
          "name": "toIterException",
          "package": "iteratee",
          "signature": "e -\u003e IterException",
          "source": "src/Data-Iteratee-Exception.html#toIterException",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Iteratee Exception",
          "module": "Data.Iteratee.Exception",
          "name": "toIterException",
          "normalized": "a-\u003eIterException",
          "package": "iteratee",
          "partial": "Iter Exception",
          "signature": "e-\u003eIterException",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:toIterException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eIterException\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eEnumException\u003c/a\u003e\u003c/code\u003e.  Meant to be used\n within an \u003ccode\u003eEnumerator\u003c/code\u003e to signify that it could not handle the\n \u003ccode\u003eIterException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Exception",
          "name": "wrapIterExc",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Iter Exc",
          "signature": "IterException-\u003eEnumException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Exception.html#v:wrapIterExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom and Binary IO with generic Iteratees, using File Descriptors for IO.\n when available, these are the preferred functions for performing IO as they\n run in constant space and function properly with sockets, pipes, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "Fd",
          "package": "iteratee",
          "source": "src/Data-Iteratee-IO-Fd.html",
          "type": "module"
        },
        "index": {
          "description": "Random and Binary IO with generic Iteratees using File Descriptors for IO when available these are the preferred functions for performing IO as they run in constant space and function properly with sockets pipes etc",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "Fd",
          "package": "iteratee",
          "partial": "Fd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a POSIX File Descriptor.  This version enumerates\n over the entire contents of a file, in order, unless stopped by\n the iteratee.  In particular, seeking is not supported.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Fd\",\"Data.Iteratee.IO\"]",
          "name": "enumFd",
          "package": "iteratee",
          "signature": "Int -\u003e Fd -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO-Fd.html#enumFd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFd\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:enumFd\"]"
        },
        "index": {
          "description": "The enumerator of POSIX File Descriptor This version enumerates over the entire contents of file in order unless stopped by the iteratee In particular seeking is not supported",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFd",
          "normalized": "Int-\u003eFd-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "Fd",
          "signature": "Int-\u003eFd-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of enumFd that catches exceptions raised by the \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFdCatch",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Fd Catch",
          "signature": "Int-\u003eFd-\u003e(e-\u003em(Maybe EnumException))-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFdCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a POSIX File Descriptor: a variation of \u003ccode\u003eenumFd\u003c/code\u003e that\n supports RandomIO (seek requests).\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Fd\",\"Data.Iteratee.IO\"]",
          "name": "enumFdRandom",
          "package": "iteratee",
          "signature": "Int -\u003e Fd -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO-Fd.html#enumFdRandom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFdRandom\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:enumFdRandom\"]"
        },
        "index": {
          "description": "The enumerator of POSIX File Descriptor variation of enumFd that supports RandomIO seek requests",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFdRandom",
          "normalized": "Int-\u003eFd-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "Fd Random",
          "signature": "Int-\u003eFd-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFdRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Iteratee.IO.Fd\",\"Data.Iteratee.IO.Handle\"]",
          "name": "enumFile",
          "package": "iteratee",
          "signature": "Int-\u003e FilePath-\u003e Enumerator s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFile\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumFile\"]"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFile",
          "normalized": "Int-\u003eFilePath-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "File",
          "signature": "Int-\u003eFilePath-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Iteratee.IO.Fd\",\"Data.Iteratee.IO.Handle\"]",
          "name": "enumFileRandom",
          "package": "iteratee",
          "signature": "Int-\u003e FilePath-\u003e Enumerator s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFileRandom\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumFileRandom\"]"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "enumFileRandom",
          "normalized": "Int-\u003eFilePath-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "File Random",
          "signature": "Int-\u003eFilePath-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:enumFileRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given \u003ccode\u003eIteratee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverFd",
          "package": "iteratee",
          "signature": "Int-\u003e Iteratee s m a-\u003e FilePath-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Process file using the given Iteratee",
          "hierarchy": "Data Iteratee IO Fd",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverFd",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver Fd",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:fileDriverFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of fileDriverFd that supports seeking.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Fd",
          "name": "fileDriverRandomFd",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Driver Random Fd",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Fd.html#v:fileDriverRandomFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom and Binary IO with generic Iteratees.  These functions use Handles\n for IO operations, and are provided for compatibility.  When available,\n the File Descriptor based functions are preferred as these wastefully\n allocate memory rather than running in constant space.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "Handle",
          "package": "iteratee",
          "source": "src/Data-Iteratee-IO-Handle.html",
          "type": "module"
        },
        "index": {
          "description": "Random and Binary IO with generic Iteratees These functions use Handles for IO operations and are provided for compatibility When available the File Descriptor based functions are preferred as these wastefully allocate memory rather than running in constant space",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "Handle",
          "package": "iteratee",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (monadic) enumerator of a file Handle.  This version enumerates\n over the entire contents of a file, in order, unless stopped by\n the iteratee.  In particular, seeking is not supported.\n Data is read into a buffer of the specified size.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Handle\",\"Data.Iteratee.IO\"]",
          "name": "enumHandle",
          "package": "iteratee",
          "signature": "Int-\u003e Handle-\u003e Enumerator s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumHandle\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:enumHandle\"]"
        },
        "index": {
          "description": "The monadic enumerator of file Handle This version enumerates over the entire contents of file in order unless stopped by the iteratee In particular seeking is not supported Data is read into buffer of the specified size",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandle",
          "normalized": "Int-\u003eHandle-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "Handle",
          "signature": "Int-\u003eHandle-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumerator of a file handle that catches exceptions raised by\n the Iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandleCatch",
          "package": "iteratee",
          "signature": "Int-\u003e Handle-\u003e (e -\u003e m (Maybe EnumException))-\u003e Enumerator s m a",
          "type": "function"
        },
        "index": {
          "description": "An enumerator of file handle that catches exceptions raised by the Iteratee",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandleCatch",
          "normalized": "Int-\u003eHandle-\u003e(a-\u003eb(Maybe EnumException))-\u003eEnumerator c b d",
          "package": "iteratee",
          "partial": "Handle Catch",
          "signature": "Int-\u003eHandle-\u003e(e-\u003em(Maybe EnumException))-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumHandleCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe enumerator of a Handle: a variation of enumHandle that\n supports RandomIO (seek requests).\n Data is read into a buffer of the specified size.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO.Handle\",\"Data.Iteratee.IO\"]",
          "name": "enumHandleRandom",
          "package": "iteratee",
          "signature": "Int-\u003e Handle-\u003e Enumerator s m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumHandleRandom\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:enumHandleRandom\"]"
        },
        "index": {
          "description": "The enumerator of Handle variation of enumHandle that supports RandomIO seek requests Data is read into buffer of the specified size",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "enumHandleRandom",
          "normalized": "Int-\u003eHandle-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "Handle Random",
          "signature": "Int-\u003eHandle-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:enumHandleRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given \u003ccode\u003eIteratee\u003c/code\u003e.  This function wraps\n \u003ccode\u003eenumHandle\u003c/code\u003e as a convenience.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverHandle",
          "package": "iteratee",
          "signature": "Int-\u003e Iteratee s m a-\u003e FilePath-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumHandle as convenience",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverHandle",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver Handle",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:fileDriverHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003efileDriverHandle\u003c/code\u003e that supports seeking.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverRandomHandle",
          "package": "iteratee",
          "signature": "Int-\u003e Iteratee s m a-\u003e FilePath-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "version of fileDriverHandle that supports seeking",
          "hierarchy": "Data Iteratee IO Handle",
          "module": "Data.Iteratee.IO.Handle",
          "name": "fileDriverRandomHandle",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver Random Handle",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Handle.html#v:fileDriverRandomHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Interact",
          "name": "Interact",
          "package": "iteratee",
          "source": "src/Data-Iteratee-IO-Interact.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Interact",
          "module": "Data.Iteratee.IO.Interact",
          "name": "Interact",
          "package": "iteratee",
          "partial": "Interact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Interact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an IO function to choose what iteratee to run.\n -- Typically this function handles user interaction and\n -- returns with a simple iteratee such as \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eseek\u003c/a\u003e\u003c/code\u003e.\n --\n -- The IO function takes a value of type \u003ccode\u003ea\u003c/code\u003e as input, and\n -- should return 'Right a' to continue, or 'Left b'\n -- to terminate. Upon termination, ioIter will return 'Done b'.\n --\n -- The second argument to \u003ccode\u003e\u003ca\u003eioIter\u003c/a\u003e\u003c/code\u003e is used as the initial input\n -- to the IO function, and on each successive iteration the\n -- previously returned value is used as input. Put another way,\n -- the value of type \u003ccode\u003ea\u003c/code\u003e is used like a fold accumulator.\n -- The value of type \u003ccode\u003eb\u003c/code\u003e is typically some form of control code\n -- that the application uses to signal the reason for termination.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Interact",
          "name": "ioIter",
          "package": "iteratee",
          "signature": "(a -\u003e IO (Either b (Iteratee s m a))) -\u003e a -\u003e Iteratee s m b",
          "source": "src/Data-Iteratee-IO-Interact.html#ioIter",
          "type": "function"
        },
        "index": {
          "description": "Use an IO function to choose what iteratee to run Typically this function handles user interaction and returns with simple iteratee such as head or seek The IO function takes value of type as input and should return Right to continue or Left to terminate Upon termination ioIter will return Done The second argument to ioIter is used as the initial input to the IO function and on each successive iteration the previously returned value is used as input Put another way the value of type is used like fold accumulator The value of type is typically some form of control code that the application uses to signal the reason for termination",
          "hierarchy": "Data Iteratee IO Interact",
          "module": "Data.Iteratee.IO.Interact",
          "name": "ioIter",
          "normalized": "(a-\u003eIO(Either b(Iteratee c d a)))-\u003ea-\u003eIteratee c d b",
          "package": "iteratee",
          "partial": "Iter",
          "signature": "(a-\u003eIO(Either b(Iteratee s m a)))-\u003ea-\u003eIteratee s m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Interact.html#v:ioIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Posix",
          "name": "Posix",
          "package": "iteratee",
          "source": "src/Data-Iteratee-IO-Posix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Posix",
          "package": "iteratee",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell representation for \u003ccode\u003eerrno\u003c/code\u003e values.\n The implementation is deliberately exposed, to allow users to add\n their own definitions of \u003ccode\u003e\u003ca\u003eErrno\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee",
          "type": "newtype"
        },
        "index": {
          "description": "Haskell representation for errno values The implementation is deliberately exposed to allow users to add their own definitions of Errno values",
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee",
          "partial": "Errno",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#t:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Posix",
          "name": "FileOffset",
          "package": "iteratee",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "FileOffset",
          "package": "iteratee",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee",
          "signature": "Errno CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee IO Posix",
          "module": "Data.Iteratee.IO.Posix",
          "name": "Errno",
          "package": "iteratee",
          "partial": "Errno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#v:Errno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlas, GHC provides no function to read from Fd to an allocated buffer.\n The library function fdRead is not appropriate as it returns a string\n already. I'd rather get data from a buffer.\n Furthermore, fdRead (at least in GHC) allocates a new buffer each\n time it is called. This is a waste. Yet another problem with fdRead\n is in raising an exception on any IOError or even EOF. I'd rather\n avoid exceptions altogether.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "myfdRead",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Read",
          "signature": "Fd-\u003ePtr CChar-\u003eByteCount-\u003eIO(Either Errno ByteCount)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#v:myfdRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following fseek procedure throws no exceptions.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "myfdSeek",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Seek",
          "signature": "Fd-\u003eSeekMode-\u003eFileOffset-\u003eIO(Either Errno FileOffset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#v:myfdSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epoll if file descriptors have something to read\n Return the list of read-pending descriptors\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO.Posix",
          "name": "select'read'pending",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "[Fd]-\u003eIO(Either Errno[Fd])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO-Posix.html#v:select-39-read-39-pending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom and Binary IO with generic Iteratees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.IO",
          "name": "IO",
          "package": "iteratee",
          "source": "src/Data-Iteratee-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Random and Binary IO with generic Iteratees",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "IO",
          "package": "iteratee",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default buffer size.\n\u003c/p\u003e",
          "module": "Data.Iteratee.IO",
          "name": "defaultBufSize",
          "package": "iteratee",
          "signature": "Int",
          "source": "src/Data-Iteratee-IO.html#defaultBufSize",
          "type": "function"
        },
        "index": {
          "description": "The default buffer size",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "defaultBufSize",
          "package": "iteratee",
          "partial": "Buf Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:defaultBufSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO",
          "name": "enumFile",
          "package": "iteratee",
          "signature": "Int -\u003e FilePath -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO.html#enumFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "enumFile",
          "normalized": "Int-\u003eFilePath-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "File",
          "signature": "Int-\u003eFilePath-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:enumFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.IO",
          "name": "enumFileRandom",
          "package": "iteratee",
          "signature": "Int -\u003e FilePath -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-IO.html#enumFileRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "enumFileRandom",
          "normalized": "Int-\u003eFilePath-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "File Random",
          "signature": "Int-\u003eFilePath-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:enumFileRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given Iteratee.  This function wraps\n enumFd as a convenience.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriver",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriver",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriver\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee.html#v:fileDriver\"]"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumFd as convenience",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriver",
          "normalized": "Iteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver",
          "signature": "Iteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a file using the given Iteratee.  This function wraps\n enumFdRandom as a convenience.\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriverRandom",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriverRandom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriverRandom\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee.html#v:fileDriverRandom\"]"
        },
        "index": {
          "description": "Process file using the given Iteratee This function wraps enumFdRandom as convenience",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriverRandom",
          "normalized": "Iteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver Random",
          "signature": "Iteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriverRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriverRandomVBuf",
          "package": "iteratee",
          "signature": "Int -\u003e Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriverRandomVBuf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriverRandomVBuf\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee.html#v:fileDriverRandomVBuf\"]"
        },
        "index": {
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriverRandomVBuf",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver Random VBuf",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriverRandomVBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of fileDriver with a user-specified buffer size (in elements).\n\u003c/p\u003e",
          "module": "[\"Data.Iteratee.IO\",\"Data.Iteratee\"]",
          "name": "fileDriverVBuf",
          "package": "iteratee",
          "signature": "Int -\u003e Iteratee s m a -\u003e FilePath -\u003e m a",
          "source": "src/Data-Iteratee-IO.html#fileDriverVBuf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriverVBuf\",\"http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee.html#v:fileDriverVBuf\"]"
        },
        "index": {
          "description": "version of fileDriver with user-specified buffer size in elements",
          "hierarchy": "Data Iteratee IO",
          "module": "Data.Iteratee.IO",
          "name": "fileDriverVBuf",
          "normalized": "Int-\u003eIteratee a b c-\u003eFilePath-\u003eb c",
          "package": "iteratee",
          "partial": "Driver VBuf",
          "signature": "Int-\u003eIteratee s m a-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-IO.html#v:fileDriverVBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic and General Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "Iteratee",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic and General Iteratees incremental input parsers processors and transformers",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "Iteratee",
          "package": "iteratee",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumeratee",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Iteratee.html#Enumeratee",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumeratee",
          "package": "iteratee",
          "partial": "Enumeratee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#t:Enumeratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "EnumerateeHandler",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Iteratee.html#EnumerateeHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "EnumerateeHandler",
          "package": "iteratee",
          "partial": "Enumeratee Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#t:EnumerateeHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach enumerator takes an iteratee and returns an iteratee\n\u003c/p\u003e\u003cp\u003ean Enumerator is an iteratee transformer.\n The enumerator normally stops when the stream is terminated\n or when the iteratee moves to the done state, whichever comes first.\n When to stop is of course up to the enumerator...\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumerator",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Iteratee.html#Enumerator",
          "type": "type"
        },
        "index": {
          "description": "Each enumerator takes an iteratee and returns an iteratee an Enumerator is an iteratee transformer The enumerator normally stops when the stream is terminated or when the iteratee moves to the done state whichever comes first When to stop is of course up to the enumerator",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "Enumerator",
          "package": "iteratee",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "FileOffset",
          "package": "iteratee",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "FileOffset",
          "package": "iteratee",
          "partial": "File Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#t:FileOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines Enumerator which produces stream of \u003ccode\u003es\u003c/code\u003e and \u003ccode\u003eEnumeratee\u003c/code\u003e\n  which transforms stream of \u003ccode\u003es\u003c/code\u003e to stream\n  of \u003ccode\u003es'\u003c/code\u003e to into Enumerator which produces stream of \u003ccode\u003es'\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "($=)",
          "package": "iteratee",
          "signature": "(forall a.  Enumerator s m a) -\u003e Enumeratee s s' m b -\u003e Enumerator s' m b",
          "source": "src/Data-Iteratee-Iteratee.html#%24%3D",
          "type": "function"
        },
        "index": {
          "description": "Combines Enumerator which produces stream of and Enumeratee which transforms stream of to stream of to into Enumerator which produces stream of",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "($=) $=",
          "normalized": "(a b Enumerator c d e)-\u003eEnumeratee c f d g-\u003eEnumerator f d g",
          "package": "iteratee",
          "signature": "(forall a. Enumerator s m a)-\u003eEnumeratee s s' m b-\u003eEnumerator s' m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:-36--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenumeratee composition with the arguments flipped, see \u003ccode\u003e\u003ca\u003e\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003c\u003e\u003c)",
          "package": "iteratee",
          "signature": "Enumeratee s2 s3 m a -\u003e (forall x.  Enumeratee s1 s2 m x) -\u003e Enumeratee s1 s3 m a",
          "source": "src/Data-Iteratee-Iteratee.html#%3C%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "enumeratee composition with the arguments flipped see",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003c\u003e\u003c) \u003c\u003e\u003c",
          "normalized": "Enumeratee a a b c-\u003e(d e Enumeratee a a b f)-\u003eEnumeratee a a b c",
          "package": "iteratee",
          "signature": "Enumeratee s s m a-\u003e(forall x. Enumeratee s s m x)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:-60--62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines an Enumeratee from \u003ccode\u003es\u003c/code\u003e to \u003ccode\u003es'\u003c/code\u003e and an Iteratee that\n  consumes \u003ccode\u003es'\u003c/code\u003e into an Iteratee which consumes \u003ccode\u003es\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "(=$)",
          "package": "iteratee",
          "signature": "Enumeratee s s' m a -\u003e Iteratee s' m a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#%3D%24",
          "type": "function"
        },
        "index": {
          "description": "Combines an Enumeratee from to and an Iteratee that consumes into an Iteratee which consumes",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "(=$) =$",
          "normalized": "Enumeratee a b c d-\u003eIteratee b c d-\u003eIteratee a c d",
          "package": "iteratee",
          "signature": "Enumeratee s s' m a-\u003eIteratee s' m a-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:-61--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeratee composition\n Run the second enumeratee within the first.  In this example, stream2list\n is run within the 'take 10', which is itself run within 'take 15', resulting\n in 15 elements being consumed\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erun =\u003c\u003c enumPure1Chunk [1..1000 :: Int] (joinI $ (I.take 15 \u003e\u003c\u003e I.take 10) I.stream2list)\n\u003c/code\u003e\u003c/strong\u003e[1,2,3,4,5,6,7,8,9,10]\n\u003c/pre\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003e\u003c\u003e)",
          "package": "iteratee",
          "signature": "(forall x.  Enumeratee s1 s2 m x) -\u003e Enumeratee s2 s3 m a -\u003e Enumeratee s1 s3 m a",
          "source": "src/Data-Iteratee-Iteratee.html#%3E%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Enumeratee composition Run the second enumeratee within the first In this example stream2list is run within the take which is itself run within take resulting in elements being consumed run enumPure1Chunk Int joinI I.take I.take I.stream2list",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003e\u003c\u003e) \u003e\u003c\u003e",
          "normalized": "(a b Enumeratee c c d e)-\u003eEnumeratee c c d f-\u003eEnumeratee c c d f",
          "package": "iteratee",
          "signature": "(forall x. Enumeratee s s m x)-\u003eEnumeratee s s m a-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:-62--60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe composition of two enumerators: essentially the functional composition\n\u003c/p\u003e\u003cp\u003eIt is convenient to flip the order of the arguments of the composition\n though: in e1 \u003e\u003e\u003e e2, e1 is executed first\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "(\u003e\u003e\u003e)",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "Enumerator s m a-\u003eEnumerator s m a-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an iteratee produces an error.\n Returns \u003ccode\u003eRight a\u003c/code\u003e if it completes without errors, otherwise\n \u003ccode\u003eLeft SomeException\u003c/code\u003e. \u003ccode\u003e\u003ca\u003echeckErr\u003c/a\u003e\u003c/code\u003e is useful for iteratees that may not\n terminate, such as \u003ccode\u003eData.Iteratee.head\u003c/code\u003e with an empty stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "checkErr",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Err",
          "signature": "Iteratee s m a-\u003eIteratee s m(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:checkErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert one stream into another, not necessarily in lockstep.\n\u003c/p\u003e\u003cp\u003eThe transformer mapStream maps one element of the outer stream\n to one element of the nested stream.  The transformer below is more\n general: it may take several elements of the outer stream to produce\n one element of the inner stream, or the other way around.\n The transformation from one stream to the other is specified as\n Iteratee s m s'.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "convStream",
          "package": "iteratee",
          "signature": "Iteratee s m s' -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-Iteratee.html#convStream",
          "type": "function"
        },
        "index": {
          "description": "Convert one stream into another not necessarily in lockstep The transformer mapStream maps one element of the outer stream to one element of the nested stream The transformer below is more general it may take several elements of the outer stream to produce one element of the inner stream or the other way around The transformation from one stream to the other is specified as Iteratee",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "convStream",
          "normalized": "Iteratee a b c-\u003eEnumeratee a c b d",
          "package": "iteratee",
          "partial": "Stream",
          "signature": "Iteratee s m s'-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:convStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function for creating enumeratees.  Typical usage is demonstrated\n by the \u003ccode\u003ebreakE\u003c/code\u003e definition.\n\u003c/p\u003e\u003cpre\u003e breakE\n   :: (Monad m, LL.ListLike s el, NullPoint s)\n   =\u003e (el -\u003e Bool)\n   -\u003e Enumeratee s s m a\n breakE cpred = eneeCheckIfDone (liftI . step)\n  where\n   step k (Chunk s)\n       | LL.null s  = liftI (step k)\n       | otherwise  = case LL.break cpred s of\n         (str', tail')\n           | LL.null tail' -\u003e eneeCheckIfDone (liftI . step) . k $ Chunk str'\n           | otherwise     -\u003e idone (k $ Chunk str') (Chunk tail')\n   step k stream           =  idone (k stream) stream\n\u003c/pre\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDone",
          "package": "iteratee",
          "signature": "((Stream eli -\u003e Iteratee eli m a) -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-Iteratee.html#eneeCheckIfDone",
          "type": "function"
        },
        "index": {
          "description": "Utility function for creating enumeratees Typical usage is demonstrated by the breakE definition breakE Monad LL.ListLike el NullPoint el Bool Enumeratee breakE cpred eneeCheckIfDone liftI step where step Chunk LL.null liftI step otherwise case LL.break cpred of str tail LL.null tail eneeCheckIfDone liftI step Chunk str otherwise idone Chunk str Chunk tail step stream idone stream stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDone",
          "normalized": "((Stream a-\u003eIteratee a b c)-\u003eIteratee d b(Iteratee a b c))-\u003eEnumeratee d a b c",
          "package": "iteratee",
          "partial": "Check If Done",
          "signature": "((Stream eli-\u003eIteratee eli m a)-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:eneeCheckIfDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as eneeCheckIfDonePass, with one extra argument:\n a handler which is used\n to process any exceptions in a separate method.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDoneHandle",
          "package": "iteratee",
          "signature": "EnumerateeHandler eli elo m a -\u003e ((Stream eli -\u003e Iteratee eli m a) -\u003e Maybe SomeException -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-Iteratee.html#eneeCheckIfDoneHandle",
          "type": "function"
        },
        "index": {
          "description": "The same as eneeCheckIfDonePass with one extra argument handler which is used to process any exceptions in separate method",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDoneHandle",
          "normalized": "EnumerateeHandler a b c d-\u003e((Stream a-\u003eIteratee a c d)-\u003eMaybe SomeException-\u003eIteratee b c(Iteratee a c d))-\u003eEnumeratee b a c d",
          "package": "iteratee",
          "partial": "Check If Done Handle",
          "signature": "EnumerateeHandler eli elo m a-\u003e((Stream eli-\u003eIteratee eli m a)-\u003eMaybe SomeException-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:eneeCheckIfDoneHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDoneIgnore",
          "package": "iteratee",
          "signature": "((Stream eli -\u003e Iteratee eli m a) -\u003e Maybe SomeException -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-Iteratee.html#eneeCheckIfDoneIgnore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDoneIgnore",
          "normalized": "((Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eIteratee d b(Iteratee a b c))-\u003eEnumeratee d a b c",
          "package": "iteratee",
          "partial": "Check If Done Ignore",
          "signature": "((Stream eli-\u003eIteratee eli m a)-\u003eMaybe SomeException-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:eneeCheckIfDoneIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDonePass",
          "package": "iteratee",
          "signature": "((Stream eli -\u003e Iteratee eli m a) -\u003e Maybe SomeException -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-Iteratee.html#eneeCheckIfDonePass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "eneeCheckIfDonePass",
          "normalized": "((Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eIteratee d b(Iteratee a b c))-\u003eEnumeratee d a b c",
          "package": "iteratee",
          "partial": "Check If Done Pass",
          "signature": "((Stream eli-\u003eIteratee eli m a)-\u003eMaybe SomeException-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:eneeCheckIfDonePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if an iteratee has finished.\n\u003c/p\u003e\u003cp\u003eThis enumerator runs the iteratee, performing any monadic actions.\n If the result is True, the returned iteratee is done.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumCheckIfDone",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Check If Done",
          "signature": "Iteratee s m a-\u003em(Bool,Iteratee s m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumCheckIfDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the iteratee to the given stream.  This wraps \u003ccode\u003e\u003ca\u003eenumEof\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eenumErr\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eenumPure1Chunk\u003c/a\u003e\u003c/code\u003e, calling the appropriate enumerator\n based upon \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumChunk",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Chunk",
          "signature": "Stream s-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most primitive enumerator: applies the iteratee to the terminated\n stream. The result is the iteratee in the Done state.  It is an error\n if the iteratee does not terminate on EOF.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumEof",
          "package": "iteratee",
          "signature": "Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumEof",
          "type": "function"
        },
        "index": {
          "description": "The most primitive enumerator applies the iteratee to the terminated stream The result is the iteratee in the Done state It is an error if the iteratee does not terminate on EOF",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumEof",
          "package": "iteratee",
          "partial": "Eof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother primitive enumerator: tell the Iteratee the stream terminated\n with an error.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumErr",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Err",
          "signature": "e-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumerator from a callback function\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumFromCallback",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "From Callback",
          "signature": "(st-\u003em(Either SomeException((Bool,st),s)))-\u003est-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumFromCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an enumerator from a callback function with an exception handler.\n The exception handler is called if an iteratee reports an exception.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumFromCallbackCatch",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "From Callback Catch",
          "signature": "(st-\u003em(Either SomeException((Bool,st),s)))-\u003e(e-\u003em(Maybe EnumException))-\u003est-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumFromCallbackCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate chunks from a list\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumList",
          "package": "iteratee",
          "signature": "[s] -\u003e Enumerator s m a",
          "source": "src/Data-Iteratee-Iteratee.html#enumList",
          "type": "function"
        },
        "index": {
          "description": "Enumerate chunks from list",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumList",
          "normalized": "[a]-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "List",
          "signature": "[s]-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure 1-chunk enumerator\n\u003c/p\u003e\u003cp\u003eIt passes a given list of elements to the iteratee in one chunk\n This enumerator does no IO and is useful for testing of base parsing\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "enumPure1Chunk",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Pure Chunk",
          "signature": "s-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:enumPure1Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fold over chunks\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "foldChunksM",
          "package": "iteratee",
          "signature": "(a -\u003e s -\u003e m a) -\u003e a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#foldChunksM",
          "type": "function"
        },
        "index": {
          "description": "fold over chunks",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "foldChunksM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee b c a",
          "package": "iteratee",
          "partial": "Chunks",
          "signature": "(a-\u003es-\u003em a)-\u003ea-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:foldChunksM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current chunk from the stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "getChunk",
          "package": "iteratee",
          "signature": "Iteratee s m s",
          "source": "src/Data-Iteratee-Iteratee.html#getChunk",
          "type": "function"
        },
        "index": {
          "description": "Get the current chunk from the stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "getChunk",
          "package": "iteratee",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:getChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all chunks from the stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "getChunks",
          "package": "iteratee",
          "signature": "Iteratee s m [s]",
          "source": "src/Data-Iteratee-Iteratee.html#getChunks",
          "type": "function"
        },
        "index": {
          "description": "Get list of all chunks from the stream",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "getChunks",
          "normalized": "Iteratee a b[a]",
          "package": "iteratee",
          "partial": "Chunks",
          "signature": "Iteratee s m[s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:getChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity iteratee.  Doesn't do any processing of input.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "identity",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "Iteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the stream status of an iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "isStreamFinished",
          "package": "iteratee",
          "signature": "Iteratee s m (Maybe SomeException)",
          "source": "src/Data-Iteratee-Iteratee.html#isStreamFinished",
          "type": "function"
        },
        "index": {
          "description": "Get the stream status of an iteratee",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "isStreamFinished",
          "package": "iteratee",
          "partial": "Stream Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:isStreamFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollapse a nested iteratee.  The inner iteratee is terminated by \u003ccode\u003eEOF\u003c/code\u003e.\n   Errors are propagated through the result.\n\u003c/p\u003e\u003cp\u003eThe stream resumes from the point of the outer iteratee; any remaining\n  input in the inner iteratee will be lost.\n  Differs from \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e in that the inner iteratee is terminated,\n  and may have a different stream type than the result.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "joinI",
          "package": "iteratee",
          "signature": "Iteratee s m (Iteratee s' m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#joinI",
          "type": "function"
        },
        "index": {
          "description": "Collapse nested iteratee The inner iteratee is terminated by EOF Errors are propagated through the result The stream resumes from the point of the outer iteratee any remaining input in the inner iteratee will be lost Differs from join in that the inner iteratee is terminated and may have different stream type than the result",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "joinI",
          "normalized": "Iteratee a b(Iteratee c b d)-\u003eIteratee a b d",
          "package": "iteratee",
          "signature": "Iteratee s m(Iteratee s' m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:joinI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an iteratee inside a monad to an iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "joinIM",
          "package": "iteratee",
          "signature": "m (Iteratee s m a) -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Iteratee.html#joinIM",
          "type": "function"
        },
        "index": {
          "description": "Lift an iteratee inside monad to an iteratee",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "joinIM",
          "normalized": "a(Iteratee b a c)-\u003eIteratee b a c",
          "package": "iteratee",
          "partial": "IM",
          "signature": "m(Iteratee s m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:joinIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert one stream into another with the supplied mapping function.\n This function operates on whole chunks at a time, contrasting to\n \u003ccode\u003emapStream\u003c/code\u003e which operates on single elements.\n\u003c/p\u003e\u003cpre\u003e unpacker :: Enumeratee B.ByteString [Word8] m a\n unpacker = mapChunks B.unpack\n\u003c/pre\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "mapChunks",
          "package": "iteratee",
          "signature": "(s -\u003e s') -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-Iteratee.html#mapChunks",
          "type": "function"
        },
        "index": {
          "description": "Convert one stream into another with the supplied mapping function This function operates on whole chunks at time contrasting to mapStream which operates on single elements unpacker Enumeratee B.ByteString Word8 unpacker mapChunks B.unpack",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "mapChunks",
          "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
          "package": "iteratee",
          "partial": "Chunks",
          "signature": "(s-\u003es')-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:mapChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a stream of \u003ccode\u003es\u003c/code\u003e to a stream of \u003ccode\u003es'\u003c/code\u003e using the supplied function.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "mapChunksM",
          "package": "iteratee",
          "signature": "(s -\u003e m s') -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-Iteratee.html#mapChunksM",
          "type": "function"
        },
        "index": {
          "description": "Convert stream of to stream of using the supplied function",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "mapChunksM",
          "normalized": "(a-\u003eb c)-\u003eEnumeratee a c b d",
          "package": "iteratee",
          "partial": "Chunks",
          "signature": "(s-\u003em s')-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:mapChunksM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a monadic function over the chunks of the stream and ignore the\n result.  Useful for creating efficient monadic iteratee consumers, e.g.\n\u003c/p\u003e\u003cpre\u003e  logger = mapChunksM_ (liftIO . putStrLn)\n\u003c/pre\u003e\u003cp\u003ethese can be efficiently run in parallel with other iteratees via\n \u003ccode\u003eData.Iteratee.ListLike.zip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "mapChunksM_",
          "package": "iteratee",
          "signature": "(s -\u003e m b) -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-Iteratee.html#mapChunksM_",
          "type": "function"
        },
        "index": {
          "description": "Map monadic function over the chunks of the stream and ignore the result Useful for creating efficient monadic iteratee consumers e.g logger mapChunksM liftIO putStrLn these can be efficiently run in parallel with other iteratees via Data.Iteratee.ListLike.zip",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "mapChunksM_",
          "normalized": "(a-\u003eb c)-\u003eIteratee a b()",
          "package": "iteratee",
          "partial": "Chunks",
          "signature": "(s-\u003em b)-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:mapChunksM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine enumeration over two streams.  The merging enumeratee would\n typically be the result of \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003emergeByChunks\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003emerge\u003c/code\u003e for example).\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "mergeEnums",
          "package": "iteratee",
          "signature": "Enumerator s1 m a-\u003e Enumerator s2 (Iteratee s1 m) a-\u003e Enumeratee s2 s1 (Iteratee s1 m) a-\u003e Enumerator s1 m a",
          "type": "function"
        },
        "index": {
          "description": "Combine enumeration over two streams The merging enumeratee would typically be the result of merge or mergeByChunks see merge for example",
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "mergeEnums",
          "normalized": "Enumerator a b c-\u003eEnumerator a(Iteratee a b)c-\u003eEnumeratee a a(Iteratee a b)c-\u003eEnumerator a b c",
          "package": "iteratee",
          "partial": "Enums",
          "signature": "Enumerator s m a-\u003eEnumerator s(Iteratee s m)a-\u003eEnumeratee s s(Iteratee s m)a-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:mergeEnums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeek to a position in the stream\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "seek",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "FileOffset-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the rest of the stream\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "skipToEof",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "To Eof",
          "signature": "Iteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:skipToEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport and propagate an unrecoverable error.\n  Disregard the input first and then propagate the error.  This error\n cannot be handled by \u003ccode\u003e\u003ca\u003eenumFromCallbackCatch\u003c/a\u003e\u003c/code\u003e, although it can be cleared\n by \u003ccode\u003e\u003ca\u003echeckErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "throwErr",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Err",
          "signature": "SomeException-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:throwErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport and propagate a recoverable error.  This error can be handled by\n both \u003ccode\u003e\u003ca\u003eenumFromCallbackCatch\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003echeckErr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "throwRecoverableErr",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Recoverable Err",
          "signature": "SomeException-\u003e(Stream s-\u003eIteratee s m a)-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:throwRecoverableErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general stream converter.  Given a function to produce iteratee\n transformers and an initial state, convert the stream using iteratees\n generated by the function while continually updating the internal state.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Iteratee",
          "name": "unfoldConvStream",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Conv Stream",
          "signature": "(acc-\u003eIteratee s m(acc,s'))-\u003eacc-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:unfoldConvStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Iteratee",
          "name": "unfoldConvStreamCheck",
          "package": "iteratee",
          "signature": "(((Stream eli -\u003e Iteratee eli m a) -\u003e Maybe SomeException -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a) -\u003e (acc -\u003e Iteratee elo m (acc, eli)) -\u003e acc -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-Iteratee.html#unfoldConvStreamCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee Iteratee",
          "module": "Data.Iteratee.Iteratee",
          "name": "unfoldConvStreamCheck",
          "normalized": "(((Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eIteratee d b(Iteratee a b c))-\u003eEnumeratee d a b c)-\u003e(e-\u003eIteratee d b(e,a))-\u003ee-\u003eEnumeratee d a b c",
          "package": "iteratee",
          "partial": "Conv Stream Check",
          "signature": "(((Stream eli-\u003eIteratee eli m a)-\u003eMaybe SomeException-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a)-\u003e(acc-\u003eIteratee elo m(acc,eli))-\u003eacc-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Iteratee.html#v:unfoldConvStreamCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic Iteratees:\n incremental input parsers, processors and transformers\n\u003c/p\u003e\u003cp\u003eThis module provides many basic iteratees from which more complicated\n iteratees can be built.  In general these iteratees parallel those in\n \u003ccode\u003eData.List\u003c/code\u003e, with some additions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "ListLike",
          "package": "iteratee",
          "source": "src/Data-Iteratee-ListLike.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic Iteratees incremental input parsers processors and transformers This module provides many basic iteratees from which more complicated iteratees can be built In general these iteratees parallel those in Data.List with some additions",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "ListLike",
          "package": "iteratee",
          "partial": "List Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an element predicate and returns the (possibly empty) prefix of\n the stream.  None of the characters in the string satisfy the character\n predicate.\n If the stream is not terminated, the first character of the remaining stream\n satisfies the predicate.\n\u003c/p\u003e\u003cp\u003eN.B. \u003ccode\u003e\u003ca\u003ebreakE\u003c/a\u003e\u003c/code\u003e should be used in preference to \u003ccode\u003ebreak\u003c/code\u003e.\n \u003ccode\u003ebreak\u003c/code\u003e will retain all data until the predicate is met, which may\n result in a space leak.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.break\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "break",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Iteratee s m s",
          "source": "src/Data-Iteratee-ListLike.html#break",
          "type": "function"
        },
        "index": {
          "description": "Takes an element predicate and returns the possibly empty prefix of the stream None of the characters in the string satisfy the character predicate If the stream is not terminated the first character of the remaining stream satisfies the predicate N.B breakE should be used in preference to break break will retain all data until the predicate is met which may result in space leak The analogue of List.break",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eIteratee b c b",
          "package": "iteratee",
          "signature": "(el-\u003eBool)-\u003eIteratee s m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an element predicate and an iteratee, running the iteratee\n on all elements of the stream until the predicate is met.\n\u003c/p\u003e\u003cp\u003ethe following rule relates \u003ccode\u003ebreak\u003c/code\u003e to \u003ccode\u003ebreakE\u003c/code\u003e\n \u003ccode\u003ebreak\u003c/code\u003e pred === \u003ccode\u003ejoinI\u003c/code\u003e (\u003ccode\u003ebreakE\u003c/code\u003e pred stream2stream)\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ebreakE\u003c/code\u003e should be used in preference to \u003ccode\u003ebreak\u003c/code\u003e whenever possible.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "breakE",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#breakE",
          "type": "function"
        },
        "index": {
          "description": "Takes an element predicate and an iteratee running the iteratee on all elements of the stream until the predicate is met the following rule relates break to breakE break pred joinI breakE pred stream2stream breakE should be used in preference to break whenever possible",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "breakE",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee b b c d",
          "package": "iteratee",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:breakE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the length of the current chunk, or \u003ccode\u003eNothing\u003c/code\u003e if \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function consumes no input.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "chunkLength",
          "package": "iteratee",
          "signature": "Iteratee s m (Maybe Int)",
          "source": "src/Data-Iteratee-ListLike.html#chunkLength",
          "type": "function"
        },
        "index": {
          "description": "Get the length of the current chunk or Nothing if EOF This function consumes no input",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "chunkLength",
          "package": "iteratee",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:chunkLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an iteratee into one that keeps track of how much data it\n consumes.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "countConsumed",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m (a, n)",
          "source": "src/Data-Iteratee-ListLike.html#countConsumed",
          "type": "function"
        },
        "index": {
          "description": "Transform an iteratee into one that keeps track of how much data it consumes",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "countConsumed",
          "normalized": "Iteratee a b c-\u003eIteratee a b(c,d)",
          "package": "iteratee",
          "partial": "Consumed",
          "signature": "Iteratee s m a-\u003eIteratee s m(a,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:countConsumed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop n elements of the stream, if there are that many.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.drop\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "drop",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "Int-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip all elements while the predicate is true.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.dropWhile\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "dropWhile",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "While",
          "signature": "(el-\u003eBool)-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use Data.Iteratee.ListLike.zip\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eEnumerate two iteratees over a single stream simultaneously.\n  Deprecated, use \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eCompare to \u003ccode\u003ezip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPair",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m (a, b)",
          "source": "src/Data-Iteratee-ListLike.html#enumPair",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use Data.Iteratee.ListLike.zip Enumerate two iteratees over single stream simultaneously Deprecated use zip instead Compare to zip",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPair",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b(c,d)",
          "package": "iteratee",
          "partial": "Pair",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:enumPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure n-chunk enumerator\n It passes a given stream of elements to the iteratee in \u003ccode\u003en\u003c/code\u003e-sized chunks.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "enumPureNChunk",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Pure NChunk",
          "signature": "s-\u003eInt-\u003eEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:enumPureNChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate over two iteratees in parallel as long as the first iteratee\n is still consuming input.  The second iteratee will be terminated with EOF\n when the first iteratee has completed.  An example use is to determine\n how many elements an iteratee has consumed:\n\u003c/p\u003e\u003cpre\u003e snd \u003c$\u003e enumWith (dropWhile (\u003c5)) length\n\u003c/pre\u003e\u003cp\u003eCompare to \u003ccode\u003ezip\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "enumWith",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m (a, b)",
          "source": "src/Data-Iteratee-ListLike.html#enumWith",
          "type": "function"
        },
        "index": {
          "description": "Enumerate over two iteratees in parallel as long as the first iteratee is still consuming input The second iteratee will be terminated with EOF when the first iteratee has completed An example use is to determine how many elements an iteratee has consumed snd enumWith dropWhile length Compare to zip",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "enumWith",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b(c,d)",
          "package": "iteratee",
          "partial": "With",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:enumWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003eenumeratee\u003c/code\u003e with only elements from the stream that\n satisfy the predicate function.  The outer stream is completely consumed.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.filter\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "filter",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe analogue of \u003ccode\u003eControl.Monad.foldM\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldM",
          "package": "iteratee",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-ListLike.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "The analogue of Control.Monad.foldM",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003eIteratee d c a",
          "package": "iteratee",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.foldl\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "(a-\u003eel-\u003ea)-\u003ea-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold that is strict in the accumulator.\n This function should be used in preference to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e whenever possible.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.foldl'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl'",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "(a-\u003eel-\u003ea)-\u003ea-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of foldl with no base case.  Requires at least one element\n   in the stream.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.foldl1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl1",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "(el-\u003eel-\u003eel)-\u003eIteratee s m el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict variant of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "foldl1'",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "(el-\u003eel-\u003eel)-\u003eIteratee s m el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an iteratee to a \"greedy\" version.\n\u003c/p\u003e\u003cp\u003eWhen a chunk is received, repeatedly run the input iteratee\n until the entire chunk is consumed, then the outputs\n are combined (via \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cpre\u003e \u003e let l = [1..5::Int]\n \u003e run =\u003c\u003c enumPure1Chunk l (joinI (take 2 stream2list))\n [1,2]\n \u003e run =\u003c\u003c enumPure1Chunk l (greedy $ joinI (I.take 2 stream2list))\n [1,2,3,4,5]\n\u003c/pre\u003e\u003cp\u003eNote that a greedy iteratee will consume the entire input chunk and force\n the next chunk before returning a value.  A portion of the second chunk may\n be consumed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egreedy\u003c/a\u003e\u003c/code\u003e may be useful on the first parameter of \u003ccode\u003e\u003ca\u003econvStream\u003c/a\u003e\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e convStream (greedy someIter)\n\u003c/pre\u003e\u003cp\u003eto create more efficient converters.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "greedy",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-ListLike.html#greedy",
          "type": "function"
        },
        "index": {
          "description": "Convert an iteratee to greedy version When chunk is received repeatedly run the input iteratee until the entire chunk is consumed then the outputs are combined via mconcat let Int run enumPure1Chunk joinI take stream2list run enumPure1Chunk greedy joinI I.take stream2list Note that greedy iteratee will consume the entire input chunk and force the next chunk before returning value portion of the second chunk may be consumed greedy may be useful on the first parameter of convStream e.g convStream greedy someIter to create more efficient converters",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "greedy",
          "normalized": "Iteratee a b c-\u003eIteratee a b c",
          "package": "iteratee",
          "signature": "Iteratee s m a-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:greedy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eEnumeratee\u003c/a\u003e\u003c/code\u003e in which elements from the stream are\n grouped into \u003ccode\u003esz\u003c/code\u003e-sized blocks.  The final block may be smaller\n than sz.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "group",
          "package": "iteratee",
          "signature": "Int-\u003e Enumeratee s [s] m a",
          "type": "function"
        },
        "index": {
          "description": "Creates an Enumeratee in which elements from the stream are grouped into sz sized blocks The final block may be smaller than sz",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "group",
          "normalized": "Int-\u003eEnumeratee a[a]b c",
          "package": "iteratee",
          "signature": "Int-\u003eEnumeratee s[s]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003eenumeratee\u003c/code\u003e in which elements are grouped into\n contiguous blocks that are equal according to a predicate.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "groupBy",
          "package": "iteratee",
          "signature": "(el -\u003e el -\u003e Bool) -\u003e Enumeratee s [s] m a",
          "source": "src/Data-Iteratee-ListLike.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "Creates an enumeratee in which elements are grouped into contiguous blocks that are equal according to predicate The analogue of groupBy",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eEnumeratee b[b]c d",
          "package": "iteratee",
          "partial": "By",
          "signature": "(el-\u003eel-\u003eBool)-\u003eEnumeratee s[s]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to read the next element of the stream and return it\n Raise a (recoverable) error if the stream is terminated.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.head\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eBecause \u003ccode\u003ehead\u003c/code\u003e can raise an error, it shouldn't be used when constructing\n iteratees for \u003ccode\u003econvStream\u003c/code\u003e.  Use \u003ccode\u003etryHead\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "head",
          "package": "iteratee",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#head",
          "type": "function"
        },
        "index": {
          "description": "Attempt to read the next element of the stream and return it Raise recoverable error if the stream is terminated The analogue of List.head Because head can raise an error it shouldn be used when constructing iteratees for convStream Use tryHead instead",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "head",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence of characters, attempt to match them against\n the characters on the stream.  Return the count of how many\n characters matched.  The matched characters are removed from the\n stream.\n For example, if the stream contains \u003ccode\u003eabd\u003c/code\u003e, then (heads \u003ccode\u003eabc\u003c/code\u003e)\n will remove the characters \u003ccode\u003eab\u003c/code\u003e and return 2.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "heads",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "s-\u003eIteratee s m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:heads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a stream has received \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "isFinished",
          "package": "iteratee",
          "signature": "Iteratee s m Bool",
          "source": "src/Data-Iteratee-ListLike.html#isFinished",
          "type": "function"
        },
        "index": {
          "description": "Check if stream has received EOF",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "isFinished",
          "package": "iteratee",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:isFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to read the last element of the stream and return it\n Raise a (recoverable) error if the stream is terminated\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.last\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "last",
          "package": "iteratee",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#last",
          "type": "function"
        },
        "index": {
          "description": "Attempt to read the last element of the stream and return it Raise recoverable error if the stream is terminated The analogue of List.last",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "last",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total length of the remaining part of the stream.\n\u003c/p\u003e\u003cp\u003eThis forces evaluation of the entire stream.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.length\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "length",
          "package": "iteratee",
          "signature": "Iteratee s m a",
          "source": "src/Data-Iteratee-ListLike.html#length",
          "type": "function"
        },
        "index": {
          "description": "Return the total length of the remaining part of the stream This forces evaluation of the entire stream The analogue of List.length",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "length",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a monadic function over the elements of the stream and ignore the\n result.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "mapM_",
          "package": "iteratee",
          "signature": "(el -\u003e m b) -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-ListLike.html#mapM_",
          "type": "function"
        },
        "index": {
          "description": "Map monadic function over the elements of the stream and ignore the result",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003eIteratee d b()",
          "package": "iteratee",
          "signature": "(el-\u003em b)-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the stream: another iteratee transformer\n Given the stream of elements of the type \u003ccode\u003eel\u003c/code\u003e and the function \u003ccode\u003e(el-\u003eel')\u003c/code\u003e,\n build a nested stream of elements of the type \u003ccode\u003eel'\u003c/code\u003e and apply the\n given iteratee to it.\n\u003c/p\u003e\u003cp\u003eThe analog of \u003ccode\u003eList.map\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "mapStream",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Stream",
          "signature": "(el-\u003eel')-\u003eEnumeratee(s el)(s el')m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:mapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emerge\u003c/code\u003e offers another way to nest iteratees: as a monad stack.\n This allows for the possibility of interleaving data from multiple\n streams.\n\u003c/p\u003e\u003cpre\u003e -- print each element from a stream of lines.\n logger :: (MonadIO m) =\u003e Iteratee [ByteString] m ()\n logger = mapM_ (liftIO . putStrLn . B.unpack)\n\n -- combine alternating lines from two sources\n -- To see how this was derived, follow the types from\n -- 'ileaveLines logger' and work outwards.\n run =\u003c\u003c enumFile 10 \"file1\" (joinI $ enumLinesBS $\n           ( enumFile 10 \"file2\" . joinI . enumLinesBS $ joinI\n                 (ileaveLines logger)) \u003e\u003e= run)\n \n ileaveLines :: (Functor m, Monad m)\n   =\u003e Enumeratee [ByteString] [ByteString] (Iteratee [ByteString] m)\n        [ByteString]\n ileaveLines = merge (\\l1 l2 -\u003e\n    [B.pack \"f1:\\n\\t\" ,l1 ,B.pack \"f2:\\n\\t\" ,l2 ]\n \n \n\u003c/pre\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "merge",
          "package": "iteratee",
          "signature": "(el1 -\u003e el2 -\u003e b) -\u003e Enumeratee s2 b (Iteratee s1 m) a",
          "source": "src/Data-Iteratee-ListLike.html#merge",
          "type": "function"
        },
        "index": {
          "description": "merge offers another way to nest iteratees as monad stack This allows for the possibility of interleaving data from multiple streams print each element from stream of lines logger MonadIO Iteratee ByteString logger mapM liftIO putStrLn B.unpack combine alternating lines from two sources To see how this was derived follow the types from ileaveLines logger and work outwards run enumFile file1 joinI enumLinesBS enumFile file2 joinI enumLinesBS joinI ileaveLines logger run ileaveLines Functor Monad Enumeratee ByteString ByteString Iteratee ByteString ByteString ileaveLines merge l1 l2 B.pack f1 l1 B.pack f2 l2",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "merge",
          "normalized": "(a-\u003ea-\u003eb)-\u003eEnumeratee c b(Iteratee c d)e",
          "package": "iteratee",
          "signature": "(el-\u003eel-\u003eb)-\u003eEnumeratee s b(Iteratee s m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of merge which operates on chunks instead of elements.\n\u003c/p\u003e\u003cp\u003emergeByChunks offers more control than \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e terminates\n when the first stream terminates, however mergeByChunks will continue\n until both streams are exhausted.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeByChunks\u003c/a\u003e\u003c/code\u003e guarantees that both chunks passed to the merge function\n will have the same number of elements, although that number may vary\n between calls.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "mergeByChunks",
          "package": "iteratee",
          "signature": "(c1 -\u003e c2 -\u003e c3)-\u003e (c1 -\u003e c3)-\u003e (c2 -\u003e c3)-\u003e Enumeratee c2 c3 (Iteratee c1 m) a",
          "type": "function"
        },
        "index": {
          "description": "version of merge which operates on chunks instead of elements mergeByChunks offers more control than merge merge terminates when the first stream terminates however mergeByChunks will continue until both streams are exhausted mergeByChunks guarantees that both chunks passed to the merge function will have the same number of elements although that number may vary between calls",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "mergeByChunks",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003e(a-\u003ea)-\u003eEnumeratee a a(Iteratee a b)c",
          "package": "iteratee",
          "partial": "By Chunks",
          "signature": "(c-\u003ec-\u003ec)-\u003e(c-\u003ec)-\u003e(c-\u003ec)-\u003eEnumeratee c c(Iteratee c m)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:mergeByChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook ahead at the next element of the stream, without removing\n it from the stream.\n Return \u003ccode\u003eJust c\u003c/code\u003e if successful, return \u003ccode\u003eNothing\u003c/code\u003e if the stream is\n terminated by \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "peek",
          "package": "iteratee",
          "signature": "Iteratee s m (Maybe el)",
          "source": "src/Data-Iteratee-ListLike.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Look ahead at the next element of the stream without removing it from the stream Return Just if successful return Nothing if the stream is terminated by EOF",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "peek",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduct of a stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "product",
          "package": "iteratee",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#product",
          "type": "function"
        },
        "index": {
          "description": "Product of stream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "product",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the stream rigidly.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e, but the element type cannot change.\n This function is necessary for \u003ccode\u003eByteString\u003c/code\u003e and similar types\n that cannot have \u003ccode\u003e\u003ca\u003eLooseMap\u003c/a\u003e\u003c/code\u003e instances, and may be more efficient.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "rigidMapStream",
          "package": "iteratee",
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
          "package": "iteratee",
          "partial": "Map Stream",
          "signature": "(el-\u003eel)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:rigidMapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a chunk of \u003ccode\u003et\u003c/code\u003e elements length while consuming \u003ccode\u003ed\u003c/code\u003e elements\n   from the stream.  Useful for creating a 'rolling average' with\n  \u003ccode\u003e\u003ca\u003econvStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "roll",
          "package": "iteratee",
          "signature": "Int-\u003e Int-\u003e Iteratee s m s'",
          "type": "function"
        },
        "index": {
          "description": "Return chunk of elements length while consuming elements from the stream Useful for creating rolling average with convStream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "roll",
          "normalized": "Int-\u003eInt-\u003eIteratee a b c",
          "package": "iteratee",
          "signature": "Int-\u003eInt-\u003eIteratee s m s'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate a list of iteratees over a single stream simultaneously\n and discard the results. This is a different behavior than Prelude's\n sequence_ which runs iteratees in the list one after the other.\n\u003c/p\u003e\u003cp\u003eCompare to \u003ccode\u003ePrelude.sequence_\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "sequence_",
          "package": "iteratee",
          "signature": "[Iteratee s m a] -\u003e Iteratee s m ()",
          "source": "src/Data-Iteratee-ListLike.html#sequence_",
          "type": "function"
        },
        "index": {
          "description": "Enumerate list of iteratees over single stream simultaneously and discard the results This is different behavior than Prelude sequence which runs iteratees in the list one after the other Compare to Prelude.sequence",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "sequence_",
          "normalized": "[Iteratee a b c]-\u003eIteratee a b()",
          "package": "iteratee",
          "signature": "[Iteratee s m a]-\u003eIteratee s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a stream to the end and return all of its elements as a list.\n This iteratee returns all data from the stream *strictly*.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2list",
          "package": "iteratee",
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
          "package": "iteratee",
          "signature": "Iteratee s m[el]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:stream2list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a stream to the end and return all of its elements as a stream.\n This iteratee returns all data from the stream *strictly*.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2stream",
          "package": "iteratee",
          "signature": "Iteratee s m s",
          "source": "src/Data-Iteratee-ListLike.html#stream2stream",
          "type": "function"
        },
        "index": {
          "description": "Read stream to the end and return all of its elements as stream This iteratee returns all data from the stream strictly",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "stream2stream",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:stream2stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of a stream.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "sum",
          "package": "iteratee",
          "signature": "Iteratee s m el",
          "source": "src/Data-Iteratee-ListLike.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Sum of stream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "sum",
          "package": "iteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead n elements from a stream and apply the given iteratee to the\n stream of the read elements. Unless the stream is terminated early, we\n read exactly n elements, even if the iteratee has accepted fewer.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.take\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "take",
          "package": "iteratee",
          "signature": "Int-\u003e Enumeratee s s m a",
          "type": "function"
        },
        "index": {
          "description": "Read elements from stream and apply the given iteratee to the stream of the read elements Unless the stream is terminated early we read exactly elements even if the iteratee has accepted fewer The analogue of List.take",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "take",
          "normalized": "Int-\u003eEnumeratee a a b c",
          "package": "iteratee",
          "signature": "Int-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake \u003ccode\u003en\u003c/code\u003e elements from the current chunk, or the whole chunk if\n \u003ccode\u003en\u003c/code\u003e is greater.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "takeFromChunk",
          "package": "iteratee",
          "signature": "Int -\u003e Iteratee s m s",
          "source": "src/Data-Iteratee-ListLike.html#takeFromChunk",
          "type": "function"
        },
        "index": {
          "description": "Take elements from the current chunk or the whole chunk if is greater",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "takeFromChunk",
          "normalized": "Int-\u003eIteratee a b a",
          "package": "iteratee",
          "partial": "From Chunk",
          "signature": "Int-\u003eIteratee s m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:takeFromChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead n elements from a stream and apply the given iteratee to the\n stream of the read elements. If the given iteratee accepted fewer\n elements, we stop.\n This is the variation of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e with the early termination\n of processing of the outer stream once the processing of the inner stream\n finished early.\n\u003c/p\u003e\u003cp\u003eIteratees composed with \u003ccode\u003e\u003ca\u003etakeUpTo\u003c/a\u003e\u003c/code\u003e will consume only enough elements to\n reach a done state.  Any remaining data will be available in the outer\n stream.\n\u003c/p\u003e\u003cpre\u003e \u003e let iter = do\n h \u003c- joinI $ takeUpTo 5 I.head\n t \u003c- stream2list\n return (h,t)\n \n \u003e enumPureNChunk [1..10::Int] 3 iter \u003e\u003e= run \u003e\u003e= print\n (1,[2,3,4,5,6,7,8,9,10])\n \n \u003e enumPureNChunk [1..10::Int] 7 iter \u003e\u003e= run \u003e\u003e= print\n (1,[2,3,4,5,6,7,8,9,10])\n\u003c/pre\u003e\u003cp\u003ein each case, \u003ccode\u003eI.head\u003c/code\u003e consumes only one element, returning the remaining\n 4 elements to the outer stream\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "takeUpTo",
          "package": "iteratee",
          "signature": "Int -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#takeUpTo",
          "type": "function"
        },
        "index": {
          "description": "Read elements from stream and apply the given iteratee to the stream of the read elements If the given iteratee accepted fewer elements we stop This is the variation of take with the early termination of processing of the outer stream once the processing of the inner stream finished early Iteratees composed with takeUpTo will consume only enough elements to reach done state Any remaining data will be available in the outer stream let iter do joinI takeUpTo I.head stream2list return enumPureNChunk Int iter run print enumPureNChunk Int iter run print in each case I.head consumes only one element returning the remaining elements to the outer stream",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "takeUpTo",
          "normalized": "Int-\u003eEnumeratee a a b c",
          "package": "iteratee",
          "partial": "Up To",
          "signature": "Int-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:takeUpTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an element predicate and returns the (possibly empty)\n prefix of the stream. All characters\n in the string will satisfy the character predicate. If the stream\n is not terminated, the first character of the\n remaining stream will not satisfy the predicate.\n\u003c/p\u003e\u003cp\u003eThe analogue of \u003ccode\u003eList.takeWhile\u003c/code\u003e, see also \u003ccode\u003ebreak\u003c/code\u003e and \u003ccode\u003etakeWhileE\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "takeWhile",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Iteratee s m s",
          "source": "src/Data-Iteratee-ListLike.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Takes an element predicate and returns the possibly empty prefix of the stream All characters in the string will satisfy the character predicate If the stream is not terminated the first character of the remaining stream will not satisfy the predicate The analogue of List.takeWhile see also break and takeWhileE",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eIteratee b c b",
          "package": "iteratee",
          "partial": "While",
          "signature": "(el-\u003eBool)-\u003eIteratee s m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an element predicate and an iteratee, running the iteratee\n on all elements of the stream while the predicate is met.\n\u003c/p\u003e\u003cp\u003eThis is preferred to \u003ccode\u003etakeWhile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "takeWhileE",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-ListLike.html#takeWhileE",
          "type": "function"
        },
        "index": {
          "description": "Takes an element predicate and an iteratee running the iteratee on all elements of the stream while the predicate is met This is preferred to takeWhile",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "takeWhileE",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee b b c d",
          "package": "iteratee",
          "partial": "While",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:takeWhileE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003ehead\u003c/code\u003e, except it returns \u003ccode\u003eNothing\u003c/code\u003e if the stream\n is terminated.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "tryHead",
          "package": "iteratee",
          "signature": "Iteratee s m (Maybe el)",
          "source": "src/Data-Iteratee-ListLike.html#tryHead",
          "type": "function"
        },
        "index": {
          "description": "Similar to head except it returns Nothing if the stream is terminated",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "tryHead",
          "package": "iteratee",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:tryHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate two iteratees over a single stream simultaneously.\n\u003c/p\u003e\u003cp\u003eCompare to \u003ccode\u003eList.zip\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.ListLike",
          "name": "zip",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m (a, b)",
          "source": "src/Data-Iteratee-ListLike.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Enumerate two iteratees over single stream simultaneously Compare to List.zip",
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "zip",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b(c,d)",
          "package": "iteratee",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ListLike",
          "name": "zip3",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m c -\u003e Iteratee s m (a, b, c)",
          "source": "src/Data-Iteratee-ListLike.html#zip3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "zip3",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b e-\u003eIteratee a b(c,d,e)",
          "package": "iteratee",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m c-\u003eIteratee s m(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ListLike",
          "name": "zip4",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m c -\u003e Iteratee s m d -\u003e Iteratee s m (a, b, c, d)",
          "source": "src/Data-Iteratee-ListLike.html#zip4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "zip4",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b e-\u003eIteratee a b f-\u003eIteratee a b(c,d,e,f)",
          "package": "iteratee",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m c-\u003eIteratee s m d-\u003eIteratee s m(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.ListLike",
          "name": "zip5",
          "package": "iteratee",
          "signature": "Iteratee s m a -\u003e Iteratee s m b -\u003e Iteratee s m c -\u003e Iteratee s m d -\u003e Iteratee s m e -\u003e Iteratee s m (a, b, c, d, e)",
          "source": "src/Data-Iteratee-ListLike.html#zip5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Iteratee ListLike",
          "module": "Data.Iteratee.ListLike",
          "name": "zip5",
          "normalized": "Iteratee a b c-\u003eIteratee a b d-\u003eIteratee a b e-\u003eIteratee a b f-\u003eIteratee a b g-\u003eIteratee a b(c,d,e,f,g)",
          "package": "iteratee",
          "signature": "Iteratee s m a-\u003eIteratee s m b-\u003eIteratee s m c-\u003eIteratee s m d-\u003eIteratee s m e-\u003eIteratee s m(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-ListLike.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnumeratees - pass terminals variant.\n\u003c/p\u003e\u003cp\u003eProvides enumeratees that pass terminal markers (\u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e) to the inner\n \u003ccode\u003eiteratee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMost enumeratees, upon receipt of \u003ccode\u003eEOF\u003c/code\u003e, will enter a done state and return\n the inner iteratee without sending \u003ccode\u003eEOF\u003c/code\u003e to it.  This allows for composing\n enumerators as in:\n\u003c/p\u003e\u003cpre\u003e myEnum extraData i = do\n nested \u003c- enumFile \"file\" (mapChunks unpacker i)\n inner \u003c- run nested\n enumList extraData inner\n\u003c/pre\u003e\u003cp\u003eif \u003ccode\u003emapChunks unpacker\u003c/code\u003e sent \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e to the inner iteratee \u003ccode\u003ei\u003c/code\u003e, there would\n be no way to submit extra data to it after \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003eing the result from\n \u003ccode\u003eenumFile\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn certain cases, this is not the desired behavior.  Consider:\n\u003c/p\u003e\u003cpre\u003e consumer :: Iteratee String IO ()\n consumer = liftI (go 0)\n   where\n     go c (Chunk xs) = liftIO (putStr s) \u003e\u003e liftI (go c)\n     go 10 e         = liftIO (putStr \"10 loops complete\")\n                         \u003e\u003e idone () (Chunk \"\")\n     go n  e         = I.seek 0 \u003e\u003e liftI (go (n+1))\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003econsumer\u003c/code\u003e iteratee does not complete until after it has received \n 10 \u003ccode\u003eEOF\u003c/code\u003es.  If you attempt to use it in a standard enumeratee, it will\n never terminate.  When the outer enumeratee is terminated, the inner\n iteratee will remain in a \u003ccode\u003econt\u003c/code\u003e state, but in general there is no longer\n any valid data for the continuation.  The enumeratee itself must pass the\n EOF marker to the inner iteratee and remain in a cont state until the inner\n iteratee signals its completion.\n\u003c/p\u003e\u003cp\u003eAll enumeratees in this module will pass \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003e terminators to the inner\n iteratees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "PTerm",
          "package": "iteratee",
          "source": "src/Data-Iteratee-PTerm.html",
          "type": "module"
        },
        "index": {
          "description": "Enumeratees pass terminals variant Provides enumeratees that pass terminal markers EOF to the inner iteratee Most enumeratees upon receipt of EOF will enter done state and return the inner iteratee without sending EOF to it This allows for composing enumerators as in myEnum extraData do nested enumFile file mapChunks unpacker inner run nested enumList extraData inner if mapChunks unpacker sent EOF to the inner iteratee there would be no way to submit extra data to it after run ing the result from enumFile In certain cases this is not the desired behavior Consider consumer Iteratee String IO consumer liftI go where go Chunk xs liftIO putStr liftI go go liftIO putStr loops complete idone Chunk go I.seek liftI go The consumer iteratee does not complete until after it has received EOF If you attempt to use it in standard enumeratee it will never terminate When the outer enumeratee is terminated the inner iteratee will remain in cont state but in general there is no longer any valid data for the continuation The enumeratee itself must pass the EOF marker to the inner iteratee and remain in cont state until the inner iteratee signals its completion All enumeratees in this module will pass EOF terminators to the inner iteratees",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "PTerm",
          "package": "iteratee",
          "partial": "PTerm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ebreakE\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "breakEPT",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-PTerm.html#breakEPT",
          "type": "function"
        },
        "index": {
          "description": "variant of breakE that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "breakEPT",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee b b c d",
          "package": "iteratee",
          "partial": "EPT",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:breakEPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert one stream into another, not necessarily in lockstep.\n\u003c/p\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003econvStream\u003c/a\u003e\u003c/code\u003e that sends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es to the inner iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "convStreamPT",
          "package": "iteratee",
          "signature": "Iteratee s m s' -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-PTerm.html#convStreamPT",
          "type": "function"
        },
        "index": {
          "description": "Convert one stream into another not necessarily in lockstep version of convStream that sends EOF to the inner iteratee",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "convStreamPT",
          "normalized": "Iteratee a b c-\u003eEnumeratee a c b d",
          "package": "iteratee",
          "partial": "Stream PT",
          "signature": "Iteratee s m s'-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:convStreamPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "filterPT",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-PTerm.html#filterPT",
          "type": "function"
        },
        "index": {
          "description": "variant of filter that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "filterPT",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee b b c d",
          "package": "iteratee",
          "partial": "PT",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:filterPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a stream of \u003ccode\u003es\u003c/code\u003e to a stream of \u003ccode\u003es'\u003c/code\u003e using the supplied function.\n\u003c/p\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emapChunksM\u003c/a\u003e\u003c/code\u003e that sends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es to the inner iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "mapChunksMPT",
          "package": "iteratee",
          "signature": "(s -\u003e m s') -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-PTerm.html#mapChunksMPT",
          "type": "function"
        },
        "index": {
          "description": "Convert stream of to stream of using the supplied function version of mapChunksM that sends EOF to the inner iteratee",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "mapChunksMPT",
          "normalized": "(a-\u003eb c)-\u003eEnumeratee a c b d",
          "package": "iteratee",
          "partial": "Chunks MPT",
          "signature": "(s-\u003em s')-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:mapChunksMPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert one stream into another with the supplied mapping function.\n\u003c/p\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003emapChunks\u003c/a\u003e\u003c/code\u003e that sends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es to the inner iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "mapChunksPT",
          "package": "iteratee",
          "signature": "(s -\u003e s') -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-PTerm.html#mapChunksPT",
          "type": "function"
        },
        "index": {
          "description": "Convert one stream into another with the supplied mapping function version of mapChunks that sends EOF to the inner iteratee",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "mapChunksPT",
          "normalized": "(a-\u003eb)-\u003eEnumeratee a b c d",
          "package": "iteratee",
          "partial": "Chunks PT",
          "signature": "(s-\u003es')-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:mapChunksPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003emapStream\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "mapStreamPT",
          "package": "iteratee",
          "signature": "(el -\u003e el') -\u003e Enumeratee (s el) (s el') m a",
          "source": "src/Data-Iteratee-PTerm.html#mapStreamPT",
          "type": "function"
        },
        "index": {
          "description": "variant of mapStream that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "mapStreamPT",
          "normalized": "(a-\u003eb)-\u003eEnumeratee(c a)(c b)d e",
          "package": "iteratee",
          "partial": "Stream PT",
          "signature": "(el-\u003eel')-\u003eEnumeratee(s el)(s el')m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:mapStreamPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erigidMapStream\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "rigidMapStreamPT",
          "package": "iteratee",
          "signature": "(el -\u003e el) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-PTerm.html#rigidMapStreamPT",
          "type": "function"
        },
        "index": {
          "description": "variant of rigidMapStream that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "rigidMapStreamPT",
          "normalized": "(a-\u003ea)-\u003eEnumeratee b b c d",
          "package": "iteratee",
          "partial": "Map Stream PT",
          "signature": "(el-\u003eel)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:rigidMapStreamPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "takePT",
          "package": "iteratee",
          "signature": "Int-\u003e Enumeratee s s m a",
          "type": "function"
        },
        "index": {
          "description": "variant of take that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "takePT",
          "normalized": "Int-\u003eEnumeratee a a b c",
          "package": "iteratee",
          "partial": "PT",
          "signature": "Int-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:takePT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etakeUpTo\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "takeUpToPT",
          "package": "iteratee",
          "signature": "Int -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-PTerm.html#takeUpToPT",
          "type": "function"
        },
        "index": {
          "description": "variant of takeUpTo that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "takeUpToPT",
          "normalized": "Int-\u003eEnumeratee a a b c",
          "package": "iteratee",
          "partial": "Up To PT",
          "signature": "Int-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:takeUpToPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003etakeWhileE\u003c/a\u003e\u003c/code\u003e that passes \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "takeWhileEPT",
          "package": "iteratee",
          "signature": "(el -\u003e Bool) -\u003e Enumeratee s s m a",
          "source": "src/Data-Iteratee-PTerm.html#takeWhileEPT",
          "type": "function"
        },
        "index": {
          "description": "variant of takeWhileE that passes EOF",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "takeWhileEPT",
          "normalized": "(a-\u003eBool)-\u003eEnumeratee b b c d",
          "package": "iteratee",
          "partial": "While EPT",
          "signature": "(el-\u003eBool)-\u003eEnumeratee s s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:takeWhileEPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eunfoldConvStreamCheck\u003c/a\u003e\u003c/code\u003e that sends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es\n to the inner iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "unfoldConvStreamCheckPT",
          "package": "iteratee",
          "signature": "(((Stream eli -\u003e Iteratee eli m a) -\u003e Maybe SomeException -\u003e Iteratee elo m (Iteratee eli m a)) -\u003e Enumeratee elo eli m a) -\u003e (acc -\u003e Iteratee elo m (acc, eli)) -\u003e acc -\u003e Enumeratee elo eli m a",
          "source": "src/Data-Iteratee-PTerm.html#unfoldConvStreamCheckPT",
          "type": "function"
        },
        "index": {
          "description": "version of unfoldConvStreamCheck that sends EOF to the inner iteratee",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "unfoldConvStreamCheckPT",
          "normalized": "(((Stream a-\u003eIteratee a b c)-\u003eMaybe SomeException-\u003eIteratee d b(Iteratee a b c))-\u003eEnumeratee d a b c)-\u003e(e-\u003eIteratee d b(e,a))-\u003ee-\u003eEnumeratee d a b c",
          "package": "iteratee",
          "partial": "Conv Stream Check PT",
          "signature": "(((Stream eli-\u003eIteratee eli m a)-\u003eMaybe SomeException-\u003eIteratee elo m(Iteratee eli m a))-\u003eEnumeratee elo eli m a)-\u003e(acc-\u003eIteratee elo m(acc,eli))-\u003eacc-\u003eEnumeratee elo eli m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:unfoldConvStreamCheckPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general stream converter.\n\u003c/p\u003e\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eunfoldConvStream\u003c/a\u003e\u003c/code\u003e that sends \u003ccode\u003e\u003ca\u003eEOF\u003c/a\u003e\u003c/code\u003es to the inner iteratee.\n\u003c/p\u003e",
          "module": "Data.Iteratee.PTerm",
          "name": "unfoldConvStreamPT",
          "package": "iteratee",
          "signature": "(acc -\u003e Iteratee s m (acc, s')) -\u003e acc -\u003e Enumeratee s s' m a",
          "source": "src/Data-Iteratee-PTerm.html#unfoldConvStreamPT",
          "type": "function"
        },
        "index": {
          "description": "The most general stream converter version of unfoldConvStream that sends EOF to the inner iteratee",
          "hierarchy": "Data Iteratee PTerm",
          "module": "Data.Iteratee.PTerm",
          "name": "unfoldConvStreamPT",
          "normalized": "(a-\u003eIteratee b c(a,d))-\u003ea-\u003eEnumeratee b d c e",
          "package": "iteratee",
          "partial": "Conv Stream PT",
          "signature": "(acc-\u003eIteratee s m(acc,s'))-\u003eacc-\u003eEnumeratee s s' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-PTerm.html#v:unfoldConvStreamPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Iteratee.Parallel",
          "name": "Parallel",
          "package": "iteratee",
          "source": "src/Data-Iteratee-Parallel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Iteratee Parallel",
          "module": "Data.Iteratee.Parallel",
          "name": "Parallel",
          "package": "iteratee",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eparI\u003c/a\u003e\u003c/code\u003e with the parallelized iteratee lifted into an\n arbitrary MonadIO.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Parallel",
          "name": "liftParI",
          "package": "iteratee",
          "signature": "Iteratee s IO a -\u003e Iteratee s m a",
          "source": "src/Data-Iteratee-Parallel.html#liftParI",
          "type": "function"
        },
        "index": {
          "description": "variant of parI with the parallelized iteratee lifted into an arbitrary MonadIO",
          "hierarchy": "Data Iteratee Parallel",
          "module": "Data.Iteratee.Parallel",
          "name": "liftParI",
          "normalized": "Iteratee a IO b-\u003eIteratee a c b",
          "package": "iteratee",
          "partial": "Par",
          "signature": "Iteratee s IO a-\u003eIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Parallel.html#v:liftParI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a parallel map/reduce.  The \u003ccode\u003ebufsize\u003c/code\u003e parameter controls\n the maximum number of chunks to read at one time.  A larger bufsize\n allows for greater parallelism, but will require more memory.\n\u003c/p\u003e\u003cp\u003eImplementation of \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e sum :: (Monad m, LL.ListLike s, Nullable s) =\u003e Iteratee s m Int64\n sum = getSum \u003c$\u003e mapReduce 4 (Sum . LL.sum)\n\u003c/pre\u003e",
          "module": "Data.Iteratee.Parallel",
          "name": "mapReduce",
          "package": "iteratee",
          "signature": "Int-\u003e (s -\u003e b)-\u003e Iteratee s m b",
          "type": "function"
        },
        "index": {
          "description": "Perform parallel map reduce The bufsize parameter controls the maximum number of chunks to read at one time larger bufsize allows for greater parallelism but will require more memory Implementation of sum sum Monad LL.ListLike Nullable Iteratee Int64 sum getSum mapReduce Sum LL.sum",
          "hierarchy": "Data Iteratee Parallel",
          "module": "Data.Iteratee.Parallel",
          "name": "mapReduce",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eIteratee a c b",
          "package": "iteratee",
          "partial": "Reduce",
          "signature": "Int-\u003e(s-\u003eb)-\u003eIteratee s m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Parallel.html#v:mapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an Enumeratee into a parallel composable one, introducing\n  one step extra delay, see \u003ccode\u003e\u003ca\u003eparI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Parallel",
          "name": "parE",
          "package": "iteratee",
          "signature": "Enumeratee s1 s2 IO r -\u003e Enumeratee s1 s2 IO r",
          "source": "src/Data-Iteratee-Parallel.html#parE",
          "type": "function"
        },
        "index": {
          "description": "Transform an Enumeratee into parallel composable one introducing one step extra delay see parI",
          "hierarchy": "Data Iteratee Parallel",
          "module": "Data.Iteratee.Parallel",
          "name": "parE",
          "normalized": "Enumeratee a a IO b-\u003eEnumeratee a a IO b",
          "package": "iteratee",
          "signature": "Enumeratee s s IO r-\u003eEnumeratee s s IO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Parallel.html#v:parE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform usual Iteratee into parallel composable one, introducing\n one step extra delay.\n\u003c/p\u003e\u003cp\u003eEx - time spent in Enumerator working on x'th packet\n Ix - time spent in Iteratee working on x'th packet\n z - last packet, y = (z-1)'th packet\n\u003c/p\u003e\u003cp\u003eregular  Iteratee: E0 - I0,  E1 - I1,  E2 - I2        .. Ez -\u003e Iz\n parallel Iteratee: E0,   E1,  E2,       .. Ez\n                 _ I0_ I1_ .. Iy__ Iz\n\u003c/p\u003e",
          "module": "Data.Iteratee.Parallel",
          "name": "parI",
          "package": "iteratee",
          "signature": "Iteratee s IO a -\u003e Iteratee s IO a",
          "source": "src/Data-Iteratee-Parallel.html#parI",
          "type": "function"
        },
        "index": {
          "description": "Transform usual Iteratee into parallel composable one introducing one step extra delay Ex time spent in Enumerator working on th packet Ix time spent in Iteratee working on th packet last packet z-1 th packet regular Iteratee E0 I0 E1 I1 E2 I2 Ez Iz parallel Iteratee E0 E1 E2 Ez I0 I1 Iy Iz",
          "hierarchy": "Data Iteratee Parallel",
          "module": "Data.Iteratee.Parallel",
          "name": "parI",
          "normalized": "Iteratee a IO b-\u003eIteratee a IO b",
          "package": "iteratee",
          "signature": "Iteratee s IO a-\u003eIteratee s IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Parallel.html#v:parI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerate a list of iteratees over a single stream simultaneously\n and discard the results. Each iteratee runs in a separate forkIO thread,\n passes all errors from iteratees up.\n\u003c/p\u003e",
          "module": "Data.Iteratee.Parallel",
          "name": "psequence_",
          "package": "iteratee",
          "signature": "[Iteratee s IO a] -\u003e Iteratee s IO ()",
          "source": "src/Data-Iteratee-Parallel.html#psequence_",
          "type": "function"
        },
        "index": {
          "description": "Enumerate list of iteratees over single stream simultaneously and discard the results Each iteratee runs in separate forkIO thread passes all errors from iteratees up",
          "hierarchy": "Data Iteratee Parallel",
          "module": "Data.Iteratee.Parallel",
          "name": "psequence_",
          "normalized": "[Iteratee a IO b]-\u003eIteratee a IO()",
          "package": "iteratee",
          "signature": "[Iteratee s IO a]-\u003eIteratee s IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee-Parallel.html#v:psequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide iteratee-based IO as described in Oleg Kiselyov's paper 'http://okmij.org/ftp/Haskell/Iteratee/'.\n\u003c/p\u003e\u003cp\u003eOleg's original code uses lists to store buffers of data for reading in the iteratee.  This package allows the use of arbitrary types through use of the ListLike type class.\n\u003c/p\u003e\u003cp\u003eIteratees can be thought of as stream processor combinators.  Iteratees are combined to run in sequence or in parallel, and then processed by enumerators.  The result of the enumeration is another iteratee, which may then be used again, or have the result obtained via the \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cpre\u003e -- count the number of bytes in a file, reading at most 8192 bytes at a time\n import Data.Iteratee as I\n import Data.Iteratee.IO\n import Data.ByteString\n \n byteCounter :: Monad m =\u003e Iteratee ByteString m Int\n byteCounter = I.length\n \n countBytes = do\n   i' \u003c- enumFile 8192 \"/usr/share/dict/words\" byteCounter\n   result \u003c- run i'\n   print result\n\u003c/pre\u003e\u003cp\u003eIteratees can be combined to perform much more complex tasks.  The iteratee monad allows for sequencing iteratee operations.\n\u003c/p\u003e\u003cpre\u003e iter2 = do\n   I.drop 4\n   I.head\n\u003c/pre\u003e\u003cp\u003eIn addition to enumerations over files and Handles, enumerations can be programmatically generated.\n\u003c/p\u003e\u003cpre\u003e get5thElement = enumPure1Chunk [1..10] iter2 \u003e\u003e= run \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eIteratees can also work as stream transformers, called \u003ccode\u003e\u003ca\u003eEnumeratee\u003c/a\u003e\u003c/code\u003es.  A very simple example is provided by \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e.  When working with enumeratees, it's very common to collaps the nested iteratee with \u003ccode\u003e\u003ca\u003ejoinI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function returns the 5th element greater than 5.\n\u003c/p\u003e\u003cpre\u003e iterfilt = joinI $ I.filter (\u003e5) iter2\n find5thOver5 = enumPure1Chunk [10,1,4,6,7,4,2,8,5,9::Int] iterfilt \u003e\u003e= run \u003e\u003e= print\n\u003c/pre\u003e\u003cp\u003eAnother common use of iteratees is \u003ccode\u003e\u003ca\u003etakeUpTo\u003c/a\u003e\u003c/code\u003e, which guarantees that an iteratee consumes a bounded number of elements.  This is often useful when parsing data.  You can check how much data an iteratee has consumed with \u003ccode\u003e\u003ca\u003eenumWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e iter3 :: (Num el, Ord el, Monad m) =\u003e Iteratee [el] m (el,Int)\n iter3 = joinI (I.takeUpTo 100 (enumWith iterfilt I.length))\n\u003c/pre\u003e\u003cp\u003eMany more functions are provided, and there are many other useful ways to combine iteratees and enumerators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Iteratee",
          "name": "Iteratee",
          "package": "iteratee",
          "source": "src/Data-Iteratee.html",
          "type": "module"
        },
        "index": {
          "description": "Provide iteratee-based IO as described in Oleg Kiselyov paper http okmij.org ftp Haskell Iteratee Oleg original code uses lists to store buffers of data for reading in the iteratee This package allows the use of arbitrary types through use of the ListLike type class Iteratees can be thought of as stream processor combinators Iteratees are combined to run in sequence or in parallel and then processed by enumerators The result of the enumeration is another iteratee which may then be used again or have the result obtained via the run function count the number of bytes in file reading at most bytes at time import Data.Iteratee as import Data.Iteratee.IO import Data.ByteString byteCounter Monad Iteratee ByteString Int byteCounter I.length countBytes do enumFile usr share dict words byteCounter result run print result Iteratees can be combined to perform much more complex tasks The iteratee monad allows for sequencing iteratee operations iter2 do I.drop I.head In addition to enumerations over files and Handles enumerations can be programmatically generated get5thElement enumPure1Chunk iter2 run print Iteratees can also work as stream transformers called Enumeratee very simple example is provided by filter When working with enumeratees it very common to collaps the nested iteratee with joinI This function returns the th element greater than iterfilt joinI I.filter iter2 find5thOver5 enumPure1Chunk Int iterfilt run print Another common use of iteratees is takeUpTo which guarantees that an iteratee consumes bounded number of elements This is often useful when parsing data You can check how much data an iteratee has consumed with enumWith iter3 Num el Ord el Monad Iteratee el el Int iter3 joinI I.takeUpTo enumWith iterfilt I.length Many more functions are provided and there are many other useful ways to combine iteratees and enumerators",
          "hierarchy": "Data Iteratee",
          "module": "Data.Iteratee",
          "name": "Iteratee",
          "package": "iteratee",
          "partial": "Iteratee",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Iteratee.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNullPoint:\n Pointed types (usually containers) that can be empty.\n Corresponds to Data.Monoid.mempty\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee",
          "source": "src/Data-NullPoint.html",
          "type": "module"
        },
        "index": {
          "description": "NullPoint Pointed types usually containers that can be empty Corresponds to Data.Monoid.mempty",
          "hierarchy": "Data NullPoint",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee",
          "partial": "Null Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-NullPoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNullPoint class.  Containers that have a null representation, corresponding\n to Data.Monoid.mempty.\n\u003c/p\u003e",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee",
          "source": "src/Data-NullPoint.html#NullPoint",
          "type": "class"
        },
        "index": {
          "description": "NullPoint class Containers that have null representation corresponding to Data.Monoid.mempty",
          "hierarchy": "Data NullPoint",
          "module": "Data.NullPoint",
          "name": "NullPoint",
          "package": "iteratee",
          "partial": "Null Point",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-NullPoint.html#t:NullPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NullPoint",
          "name": "empty",
          "package": "iteratee",
          "signature": "c",
          "source": "src/Data-NullPoint.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data NullPoint",
          "module": "Data.NullPoint",
          "name": "empty",
          "package": "iteratee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-NullPoint.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNullable:\n test if a type (container) is null.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee",
          "source": "src/Data-Nullable.html",
          "type": "module"
        },
        "index": {
          "description": "Nullable test if type container is null",
          "hierarchy": "Data Nullable",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee",
          "partial": "Nullable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Nullable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNullable container class\n\u003c/p\u003e",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee",
          "source": "src/Data-Nullable.html#Nullable",
          "type": "class"
        },
        "index": {
          "description": "Nullable container class",
          "hierarchy": "Data Nullable",
          "module": "Data.Nullable",
          "name": "Nullable",
          "package": "iteratee",
          "partial": "Nullable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Nullable.html#t:Nullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nullable",
          "name": "nullC",
          "package": "iteratee",
          "signature": "c -\u003e Bool",
          "source": "src/Data-Nullable.html#nullC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Nullable",
          "module": "Data.Nullable",
          "name": "nullC",
          "normalized": "a-\u003eBool",
          "package": "iteratee",
          "signature": "c-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iteratee/docs/Data-Nullable.html#v:nullC"
      }
    }
  ]
]