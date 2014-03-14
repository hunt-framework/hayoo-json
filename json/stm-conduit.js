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
        "word": "stm-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e Introduction\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eContains a combinator for concurrently joining a producer and a consumer,\n   such that the producer may continue to produce (up to the queue size) as\n   the consumer is concurrently consuming.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Async",
          "name": "Async",
          "package": "stm-conduit",
          "source": "src/Data-Conduit-Async.html",
          "type": "module"
        },
        "index": {
          "description": "Introduction Contains combinator for concurrently joining producer and consumer such that the producer may continue to produce up to the queue size as the consumer is concurrently consuming",
          "hierarchy": "Data Conduit Async",
          "module": "Data.Conduit.Async",
          "name": "Async",
          "package": "stm-conduit",
          "partial": "Async",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-Async.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operator form of \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e.  In general you should be able to replace\n   any use of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e$$&\u003c/a\u003e\u003c/code\u003e and suddenly reap the benefit of\n   concurrency, if your conduits were spending time waiting on each other.\n\u003c/p\u003e",
          "module": "Data.Conduit.Async",
          "name": "($$&)",
          "package": "stm-conduit",
          "signature": "Producer m a -\u003e Consumer a m b -\u003e m b",
          "source": "src/Data-Conduit-Async.html#%24%24%26",
          "type": "function"
        },
        "index": {
          "description": "An operator form of buffer In general you should be able to replace any use of with and suddenly reap the benefit of concurrency if your conduits were spending time waiting on each other",
          "hierarchy": "Data Conduit Async",
          "module": "Data.Conduit.Async",
          "name": "($$&) $$&",
          "normalized": "Producer a b-\u003eConsumer b a c-\u003ea c",
          "package": "stm-conduit",
          "signature": "Producer m a-\u003eConsumer a m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-Async.html#v:-36--36--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcurrently join the producer and consumer, using a bounded queue of the\n   given size.  The producer will block when the queue is full, if it is\n   producing faster than the consumers is taking from it.  Likewise, if the\n   consumer races ahead, it will block until more input is available.\n\u003c/p\u003e\u003cp\u003eExceptions are properly managed and propagated between the two sides, so\n   the net effect should be equivalent to not using buffer at all, save for\n   the concurrent interleaving of effects.\n\u003c/p\u003e",
          "module": "Data.Conduit.Async",
          "name": "buffer",
          "package": "stm-conduit",
          "signature": "Int -\u003e Producer m a -\u003e Consumer a m b -\u003e m b",
          "source": "src/Data-Conduit-Async.html#buffer",
          "type": "function"
        },
        "index": {
          "description": "Concurrently join the producer and consumer using bounded queue of the given size The producer will block when the queue is full if it is producing faster than the consumers is taking from it Likewise if the consumer races ahead it will block until more input is available Exceptions are properly managed and propagated between the two sides so the net effect should be equivalent to not using buffer at all save for the concurrent interleaving of effects",
          "hierarchy": "Data Conduit Async",
          "module": "Data.Conduit.Async",
          "name": "buffer",
          "normalized": "Int-\u003eProducer a b-\u003eConsumer b a c-\u003ea c",
          "package": "stm-conduit",
          "signature": "Int-\u003eProducer m a-\u003eConsumer a m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-Async.html#v:buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ebuffer\u003c/a\u003e\u003c/code\u003e, except that when the bounded queue is overflowed, the\n   excess is cached in a local file so that consumption from upstream may\n   continue.  When the queue becomes exhausted by yielding, it is filled\n   from the cache until all elements have been yielded.\n\u003c/p\u003e\u003cp\u003eNote that the maximum amount of memory consumed is equal to (2 *\n   memorySize + 1), so take this into account when picking a chunking size.\n\u003c/p\u003e",
          "module": "Data.Conduit.Async",
          "name": "bufferToFile",
          "package": "stm-conduit",
          "signature": "Int-\u003e Maybe Int-\u003e FilePath-\u003e Producer m a-\u003e Consumer a m b-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Like buffer except that when the bounded queue is overflowed the excess is cached in local file so that consumption from upstream may continue When the queue becomes exhausted by yielding it is filled from the cache until all elements have been yielded Note that the maximum amount of memory consumed is equal to memorySize so take this into account when picking chunking size",
          "hierarchy": "Data Conduit Async",
          "module": "Data.Conduit.Async",
          "name": "bufferToFile",
          "normalized": "Int-\u003eMaybe Int-\u003eFilePath-\u003eProducer a b-\u003eConsumer b a c-\u003ea c",
          "package": "stm-conduit",
          "partial": "To File",
          "signature": "Int-\u003eMaybe Int-\u003eFilePath-\u003eProducer m a-\u003eConsumer a m b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-Async.html#v:bufferToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrain input values into an asynchronous action in the base monad via a\n   bounded \u003ccode\u003e\u003ca\u003eTBQueue\u003c/a\u003e\u003c/code\u003e.  This is effectively the dual of \u003ccode\u003e\u003ca\u003egatherFrom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Async",
          "name": "drainTo",
          "package": "stm-conduit",
          "signature": "Int-\u003e (TBQueue (Maybe i) -\u003e m r)-\u003e Consumer i m r",
          "type": "function"
        },
        "index": {
          "description": "Drain input values into an asynchronous action in the base monad via bounded TBQueue This is effectively the dual of gatherFrom",
          "hierarchy": "Data Conduit Async",
          "module": "Data.Conduit.Async",
          "name": "drainTo",
          "normalized": "Int-\u003e(TBQueue(Maybe a)-\u003eb c)-\u003eConsumer a b c",
          "package": "stm-conduit",
          "partial": "To",
          "signature": "Int-\u003e(TBQueue(Maybe i)-\u003em r)-\u003eConsumer i m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-Async.html#v:drainTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGather output values asynchronously from an action in the base monad and\n   then yield them downstream.  This provides a means of working around the\n   restriction that \u003ccode\u003e\u003ca\u003eConduitM\u003c/a\u003e\u003c/code\u003e cannot be an instance of \u003ccode\u003e\u003ca\u003eMonadBaseControl\u003c/a\u003e\u003c/code\u003e\n   in order to, for example, yield values from within a Haskell callback\n   function called from a C library.\n\u003c/p\u003e",
          "module": "Data.Conduit.Async",
          "name": "gatherFrom",
          "package": "stm-conduit",
          "signature": "Int-\u003e (TBQueue o -\u003e m ())-\u003e Producer m o",
          "type": "function"
        },
        "index": {
          "description": "Gather output values asynchronously from an action in the base monad and then yield them downstream This provides means of working around the restriction that ConduitM cannot be an instance of MonadBaseControl in order to for example yield values from within Haskell callback function called from library",
          "hierarchy": "Data Conduit Async",
          "module": "Data.Conduit.Async",
          "name": "gatherFrom",
          "normalized": "Int-\u003e(TBQueue a-\u003eb())-\u003eProducer b a",
          "package": "stm-conduit",
          "partial": "From",
          "signature": "Int-\u003e(TBQueue o-\u003em())-\u003eProducer m o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-Async.html#v:gatherFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e Introduction\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eContains a simple source and sink for linking together conduits in\n   in different threads. Usage is so easy, it's best explained with an\n   example:\n\u003c/p\u003e\u003cp\u003eWe first create a channel for communication...\n\u003c/p\u003e\u003cpre\u003e do chan \u003c- atomically $ newTBMChan 16\n\u003c/pre\u003e\u003cp\u003eThen we fork a new thread loading a wackton of pictures into memory. The\n   data (pictures, in this case) will be streamed down the channel to whatever\n   is on the other side.\n\u003c/p\u003e\u003cpre\u003e    _ \u003c- forkIO . runResourceT $ loadTextures lotsOfPictures $$ sinkTBMChan chan\n\u003c/pre\u003e\u003cp\u003eFinally, we connect something to the other end of the channel. In this\n   case, we connect a sink which uploads the textures one by one to the\n   graphics card.\n\u003c/p\u003e\u003cpre\u003e    runResourceT $ sourceTBMChan chan $$ Conduit.mapM_ (liftIO . uploadToGraphicsCard)\n\u003c/pre\u003e\u003cp\u003eBy running the two tasks in parallel, we no longer have to wait for one\n   texture to upload to the graphics card before reading the next one from\n   disk. This avoids the common switching of bottlenecks (such as between the\n   disk and graphics memory) that most loading processes seem to love.\n\u003c/p\u003e\u003cp\u003eControl.Concurrent.STM.TMChan and Control.Concurrent.STM.TBMChan are\n   re-exported for convenience.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Caveats\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt is recommended to use TBMChan as much as possible, and generally avoid\n   TMChan usage. TMChans are unbounded, and if used, the conduit pipeline\n   will no longer use a bounded amount of space. They will essentially leak\n   memory if the writer is faster than the reader.\n\u003c/p\u003e\u003cp\u003eTherefore, use bounded channels as much as possible, preferably with a\n   high bound so it will be hit infrequently.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "TMChan",
          "package": "stm-conduit",
          "source": "src/Data-Conduit-TMChan.html",
          "type": "module"
        },
        "index": {
          "description": "Introduction Contains simple source and sink for linking together conduits in in different threads Usage is so easy it best explained with an example We first create channel for communication do chan atomically newTBMChan Then we fork new thread loading wackton of pictures into memory The data pictures in this case will be streamed down the channel to whatever is on the other side forkIO runResourceT loadTextures lotsOfPictures sinkTBMChan chan Finally we connect something to the other end of the channel In this case we connect sink which uploads the textures one by one to the graphics card runResourceT sourceTBMChan chan Conduit.mapM liftIO uploadToGraphicsCard By running the two tasks in parallel we no longer have to wait for one texture to upload to the graphics card before reading the next one from disk This avoids the common switching of bottlenecks such as between the disk and graphics memory that most loading processes seem to love Control.Concurrent.STM.TMChan and Control.Concurrent.STM.TBMChan are re-exported for convenience Caveats It is recommended to use TBMChan as much as possible and generally avoid TMChan usage TMChans are unbounded and if used the conduit pipeline will no longer use bounded amount of space They will essentially leak memory if the writer is faster than the reader Therefore use bounded channels as much as possible preferably with high bound so it will be hit infrequently",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "TMChan",
          "package": "stm-conduit",
          "partial": "TMChan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two sources with an unbounded channel, creating a new source\n   which pulls data from a mix of the two sources: whichever produces first.\n\u003c/p\u003e\u003cp\u003eThe order of the new source's data is undefined, but it will be some\n   combination of the two given sources.\n\u003c/p\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "(\u003e=\u003c)",
          "package": "stm-conduit",
          "signature": "Source (ResourceT m) a -\u003e Source (ResourceT m) a -\u003e ResourceT m (Source (ResourceT m) a)",
          "source": "src/Data-Conduit-TMChan.html#%3E%3D%3C",
          "type": "function"
        },
        "index": {
          "description": "Combines two sources with an unbounded channel creating new source which pulls data from mix of the two sources whichever produces first The order of the new source data is undefined but it will be some combination of the two given sources",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "(\u003e=\u003c) \u003e=\u003c",
          "normalized": "Source(ResourceT a)b-\u003eSource(ResourceT a)b-\u003eResourceT a(Source(ResourceT a)b)",
          "package": "stm-conduit",
          "signature": "Source(ResourceT m)a-\u003eSource(ResourceT m)a-\u003eResourceT m(Source(ResourceT m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#v:-62--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges a list of sources, putting them all into a bounded channel, and\n   returns a source which can be pulled from to pull from all the given\n   sources in a first-come-first-serve basis.\n\u003c/p\u003e\u003cp\u003eThe order of the new source's data is undefined, but it will be some\n   combination of the given sources.\n\u003c/p\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "mergeSources",
          "package": "stm-conduit",
          "signature": "[Source (ResourceT m) a]-\u003e Int-\u003e ResourceT m (Source (ResourceT m) a)",
          "type": "function"
        },
        "index": {
          "description": "Merges list of sources putting them all into bounded channel and returns source which can be pulled from to pull from all the given sources in first-come-first-serve basis The order of the new source data is undefined but it will be some combination of the given sources",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "mergeSources",
          "normalized": "[Source(ResourceT a)b]-\u003eInt-\u003eResourceT a(Source(ResourceT a)b)",
          "package": "stm-conduit",
          "partial": "Sources",
          "signature": "[Source(ResourceT m)a]-\u003eInt-\u003eResourceT m(Source(ResourceT m)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#v:mergeSources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a TBMChan. As data is pushed into the sink, it\n   will magically begin to appear in the channel. If the channel is full,\n   the sink will block until space frees up.\n\u003c/p\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "sinkTBMChan",
          "package": "stm-conduit",
          "signature": "TBMChan a-\u003e Bool-\u003e Sink a m ()",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TBMChan As data is pushed into the sink it will magically begin to appear in the channel If the channel is full the sink will block until space frees up",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "sinkTBMChan",
          "normalized": "TBMChan a-\u003eBool-\u003eSink a b()",
          "package": "stm-conduit",
          "partial": "TBMChan",
          "signature": "TBMChan a-\u003eBool-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#v:sinkTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a TMChan. As data is pushed into this sink, it\n   will magically begin to appear in the channel.\n\u003c/p\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "sinkTMChan",
          "package": "stm-conduit",
          "signature": "TMChan a-\u003e Bool-\u003e Sink a m ()",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TMChan As data is pushed into this sink it will magically begin to appear in the channel",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "sinkTMChan",
          "normalized": "TMChan a-\u003eBool-\u003eSink a b()",
          "package": "stm-conduit",
          "partial": "TMChan",
          "signature": "TMChan a-\u003eBool-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#v:sinkTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a TBMChan. As data is pushed into the channel, the\n   source will read it and pass it down the conduit pipeline. When the\n   channel is closed, the source will close also.\n\u003c/p\u003e\u003cp\u003eIf the channel fills up, the pipeline will stall until values are read.\n\u003c/p\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "sourceTBMChan",
          "package": "stm-conduit",
          "signature": "TBMChan a -\u003e Source m a",
          "source": "src/Data-Conduit-TMChan.html#sourceTBMChan",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TBMChan As data is pushed into the channel the source will read it and pass it down the conduit pipeline When the channel is closed the source will close also If the channel fills up the pipeline will stall until values are read",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "sourceTBMChan",
          "normalized": "TBMChan a-\u003eSource b a",
          "package": "stm-conduit",
          "partial": "TBMChan",
          "signature": "TBMChan a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#v:sourceTBMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a TMChan. As data is pushed into the channel, the\n   source will read it and pass it down the conduit pipeline. When the\n   channel is closed, the source will close also.\n\u003c/p\u003e",
          "module": "Data.Conduit.TMChan",
          "name": "sourceTMChan",
          "package": "stm-conduit",
          "signature": "TMChan a -\u003e Source m a",
          "source": "src/Data-Conduit-TMChan.html#sourceTMChan",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TMChan As data is pushed into the channel the source will read it and pass it down the conduit pipeline When the channel is closed the source will close also",
          "hierarchy": "Data Conduit TMChan",
          "module": "Data.Conduit.TMChan",
          "name": "sourceTMChan",
          "normalized": "TMChan a-\u003eSource b a",
          "package": "stm-conduit",
          "partial": "TMChan",
          "signature": "TMChan a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TMChan.html#v:sourceTMChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eContains a simple source and sink linking together conduits in\n   different threads. For extended examples of usage and bottlenecks\n   see \u003ccode\u003e\u003ca\u003eTMChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTQueue is an amoritized FIFO queue behaves like TChan, with two\n   important differences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e it's faster (but amortized thus the cost of individual operations\n     may vary a lot)\n\u003c/li\u003e\u003cli\u003e it doesn't provide equivalent of the dupTChan and cloneTChan\n     operations\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere is short description of data structures:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e TQueue   - unbounded infinite queue\n\u003c/li\u003e\u003cli\u003e TBQueue  - bounded infinite queue\n\u003c/li\u003e\u003cli\u003e TMQueue  - unbounded finite (closable) queue\n\u003c/li\u003e\u003cli\u003e TBMQueue - bounded finite (closable) queue\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eCaveats\n\u003c/p\u003e\u003cp\u003eInfinite operations means that source doesn't know when stream is\n   ended so one need to use other methods of finishing stream like\n   sending an exception or finish conduit in downstream.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "TQueue",
          "package": "stm-conduit",
          "source": "src/Data-Conduit-TQueue.html",
          "type": "module"
        },
        "index": {
          "description": "Contains simple source and sink linking together conduits in different threads For extended examples of usage and bottlenecks see TMChan TQueue is an amoritized FIFO queue behaves like TChan with two important differences it faster but amortized thus the cost of individual operations may vary lot it doesn provide equivalent of the dupTChan and cloneTChan operations Here is short description of data structures TQueue unbounded infinite queue TBQueue bounded infinite queue TMQueue unbounded finite closable queue TBMQueue bounded finite closable queue Caveats Infinite operations means that source doesn know when stream is ended so one need to use other methods of finishing stream like sending an exception or finish conduit in downstream",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "TQueue",
          "package": "stm-conduit",
          "partial": "TQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTBMQueue\u003c/a\u003e. As data is pushed into this sink, it\n   will magically begin to appear in the queue.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTBMQueue",
          "package": "stm-conduit",
          "signature": "TBMQueue a-\u003e Bool-\u003e Sink a m ()",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TBMQueue As data is pushed into this sink it will magically begin to appear in the queue",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTBMQueue",
          "normalized": "TBMQueue a-\u003eBool-\u003eSink a b()",
          "package": "stm-conduit",
          "partial": "TBMQueue",
          "signature": "TBMQueue a-\u003eBool-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sinkTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTBQueue\u003c/a\u003e. As data is pushed into this sink, it\n   will magically begin to appear in the queue. Boolean argument is used\n   to specify if queue should be closed when the sink is closed.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTBQueue",
          "package": "stm-conduit",
          "signature": "TBQueue a -\u003e Sink a m ()",
          "source": "src/Data-Conduit-TQueue.html#sinkTBQueue",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TBQueue As data is pushed into this sink it will magically begin to appear in the queue Boolean argument is used to specify if queue should be closed when the sink is closed",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTBQueue",
          "normalized": "TBQueue a-\u003eSink a b()",
          "package": "stm-conduit",
          "partial": "TBQueue",
          "signature": "TBQueue a-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sinkTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTMQueue\u003c/a\u003e. As data is pushed into this sink, it\n   will magically begin to appear in the queue.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTMQueue",
          "package": "stm-conduit",
          "signature": "TMQueue a-\u003e Bool-\u003e Sink a m ()",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TMQueue As data is pushed into this sink it will magically begin to appear in the queue",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTMQueue",
          "normalized": "TMQueue a-\u003eBool-\u003eSink a b()",
          "package": "stm-conduit",
          "partial": "TMQueue",
          "signature": "TMQueue a-\u003eBool-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sinkTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTQueue\u003c/a\u003e. As data is pushed into this sink, it\n   will magically begin to appear in the queue.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTQueue",
          "package": "stm-conduit",
          "signature": "TQueue a -\u003e Sink a m ()",
          "source": "src/Data-Conduit-TQueue.html#sinkTQueue",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TQueue As data is pushed into this sink it will magically begin to appear in the queue",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sinkTQueue",
          "normalized": "TQueue a-\u003eSink a b()",
          "package": "stm-conduit",
          "partial": "TQueue",
          "signature": "TQueue a-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sinkTQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTBMQueue\u003c/a\u003e. As data is pushed into the queue, the\n   source will read it and pass it down the conduit pipeline. When the\n   queue is closed, the source will close also.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTBMQueue",
          "package": "stm-conduit",
          "signature": "TBMQueue a -\u003e Source m a",
          "source": "src/Data-Conduit-TQueue.html#sourceTBMQueue",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TBMQueue As data is pushed into the queue the source will read it and pass it down the conduit pipeline When the queue is closed the source will close also",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTBMQueue",
          "normalized": "TBMQueue a-\u003eSource b a",
          "package": "stm-conduit",
          "partial": "TBMQueue",
          "signature": "TBMQueue a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sourceTBMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTBQueue\u003c/a\u003e. As data is pushed into the queue, the\n   source will read it and pass it down the conduit pipeline.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTBQueue",
          "package": "stm-conduit",
          "signature": "TBQueue a -\u003e Source m a",
          "source": "src/Data-Conduit-TQueue.html#sourceTBQueue",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TBQueue As data is pushed into the queue the source will read it and pass it down the conduit pipeline",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTBQueue",
          "normalized": "TBQueue a-\u003eSource b a",
          "package": "stm-conduit",
          "partial": "TBQueue",
          "signature": "TBQueue a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sourceTBQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTMQueue\u003c/a\u003e. As data is pushed into the queue, the\n   source will read it and pass it down the conduit pipeline. When the\n   queue is closed, the source will close also.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTMQueue",
          "package": "stm-conduit",
          "signature": "TMQueue a -\u003e Source m a",
          "source": "src/Data-Conduit-TQueue.html#sourceTMQueue",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TMQueue As data is pushed into the queue the source will read it and pass it down the conduit pipeline When the queue is closed the source will close also",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTMQueue",
          "normalized": "TMQueue a-\u003eSource b a",
          "package": "stm-conduit",
          "partial": "TMQueue",
          "signature": "TMQueue a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sourceTMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple wrapper around a \u003ca\u003eTQueue\u003c/a\u003e. As data is pushed into the queue, the\n   source will read it and pass it down the conduit pipeline.\n\u003c/p\u003e",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTQueue",
          "package": "stm-conduit",
          "signature": "TQueue a -\u003e Source m a",
          "source": "src/Data-Conduit-TQueue.html#sourceTQueue",
          "type": "function"
        },
        "index": {
          "description": "simple wrapper around TQueue As data is pushed into the queue the source will read it and pass it down the conduit pipeline",
          "hierarchy": "Data Conduit TQueue",
          "module": "Data.Conduit.TQueue",
          "name": "sourceTQueue",
          "normalized": "TQueue a-\u003eSource b a",
          "package": "stm-conduit",
          "partial": "TQueue",
          "signature": "TQueue a-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-conduit/docs/Data-Conduit-TQueue.html#v:sourceTQueue"
      }
    }
  ]
]