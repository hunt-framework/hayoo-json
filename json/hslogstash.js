[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Branching.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003eWARNING: executables using this function must be compiled with -threaded\u003c/pre\u003e\u003cp\u003eThese functions let you connect several sinks to a single source, according to a branching strategy. For example :\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where\n\nimport Data.Conduit.Branching\nimport Data.Conduit\nimport qualified Data.Conduit.List as CL\nimport Control.Monad.IO.Class\n\nsrc :: Monad m =\u003e Producer m (Either Int String)\nsrc = CL.sourceList [Left 5, Left 4, Right \"five\", Right \"four\"]\n\nsinkString :: (Monad m, MonadIO m) =\u003e Sink (Either Int String) m ()\nsinkString = CL.mapM_ $ (Right x) -\u003e liftIO (putStrLn (\"This is a string: \" ++ x))\n\nsinkInt :: (Monad m, MonadIO m) =\u003e Sink (Either Int String) m ()\nsinkInt = CL.mapM_ $ (Left x) -\u003e liftIO (putStrLn (\"This is an integer: \" ++ show x))\n\nsinkLog :: (Monad m, MonadIO m) =\u003e Sink (Either Int String) m ()\nsinkLog = CL.mapM_ (liftIO . putStrLn . (\"Raw logging: \" ++) . show)\n\nmain :: IO ()\nmain = branchConduits src branching [sinkInt, sinkString, sinkLog]\n    where\n        branching (Left _) = [0,2]\n        branching (Right _) = [1,2]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Branching",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Branching.html",
        "fct-type": "module",
        "title": "Branching"
      },
      "index": {
        "description": "WARNING executables using this function must be compiled with threaded These functions let you connect several sinks to single source according to branching strategy For example module Main where import Data.Conduit.Branching import Data.Conduit import qualified Data.Conduit.List as CL import Control.Monad.IO.Class src Monad Producer Either Int String src CL.sourceList Left Left Right five Right four sinkString Monad MonadIO Sink Either Int String sinkString CL.mapM Right liftIO putStrLn This is string sinkInt Monad MonadIO Sink Either Int String sinkInt CL.mapM Left liftIO putStrLn This is an integer show sinkLog Monad MonadIO Sink Either Int String sinkLog CL.mapM liftIO putStrLn Raw logging show main IO main branchConduits src branching sinkInt sinkString sinkLog where branching Left branching Right",
        "hierarchy": "Data Conduit Branching",
        "module": "Data.Conduit.Branching",
        "name": "Branching",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Branching",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Branching.html#v:branchConduits",
      "description": {
        "fct-descr": "\u003cp\u003eA higher level function. Given a source, a branching function and\n a list of sinks, this will run the conduits until completion.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Branching",
        "fct-package": "hslogstash",
        "fct-signature": "Source (ResourceT IO) a-\u003e (a -\u003e [Int])-\u003e [Sink a (ResourceT IO) ()]-\u003e IO ()",
        "fct-type": "function",
        "title": "branchConduits"
      },
      "index": {
        "description": "higher level function Given source branching function and list of sinks this will run the conduits until completion",
        "hierarchy": "Data Conduit Branching",
        "module": "Data.Conduit.Branching",
        "name": "branchConduits",
        "normalized": "Source(ResourceT IO)a-\u003e(a-\u003e[Int])-\u003e[Sink a(ResourceT IO)()]-\u003eIO()",
        "package": "hslogstash",
        "partial": "Conduits",
        "signature": "Source(ResourceT IO)a-\u003e(a-\u003e[Int])-\u003e[Sink a(ResourceT IO)()]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Branching.html#v:mkBranchingConduit",
      "description": {
        "fct-descr": "\u003cp\u003eCreates the \u003cem\u003eplumbing\u003c/em\u003e that might be used to connect several conduits\n together, based on a branching function.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Branching",
        "fct-package": "hslogstash",
        "fct-signature": "Int-\u003e (a -\u003e [Int])-\u003e IO (Sink a m (), [Source m a])",
        "fct-type": "function",
        "title": "mkBranchingConduit"
      },
      "index": {
        "description": "Creates the plumbing that might be used to connect several conduits together based on branching function",
        "hierarchy": "Data Conduit Branching",
        "module": "Data.Conduit.Branching",
        "name": "mkBranchingConduit",
        "normalized": "Int-\u003e(a-\u003e[Int])-\u003eIO(Sink a b(),[Source b a])",
        "package": "hslogstash",
        "partial": "Branching Conduit",
        "signature": "Int-\u003e(a-\u003e[Int])-\u003eIO(Sink a m(),[Source m a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports \u003ca\u003eConduit\u003c/a\u003e interfaces to ElasticSearch.\nIt has been used intensively in production for several month now, but at a single site.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.ElasticSearch",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-ElasticSearch.html",
        "fct-type": "module",
        "title": "ElasticSearch"
      },
      "index": {
        "description": "This module exports Conduit interfaces to ElasticSearch It has been used intensively in production for several month now but at single site",
        "hierarchy": "Data Conduit ElasticSearch",
        "module": "Data.Conduit.ElasticSearch",
        "name": "ElasticSearch",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Elastic Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#v:esConduit",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a \u003ca\u003eLogstashMessage\u003c/a\u003e, and returns the result of the ElasticSearch request\n along with the value in case of errors, or ElasticSearch's values in case of\n success.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ElasticSearch",
        "fct-package": "hslogstash",
        "fct-signature": "Maybe Request-\u003e ByteString-\u003e Int-\u003e Text-\u003e Conduit [LogstashMessage] m [Either (LogstashMessage, Value) Value]",
        "fct-type": "function",
        "title": "esConduit"
      },
      "index": {
        "description": "Takes LogstashMessage and returns the result of the ElasticSearch request along with the value in case of errors or ElasticSearch values in case of success",
        "hierarchy": "Data Conduit ElasticSearch",
        "module": "Data.Conduit.ElasticSearch",
        "name": "esConduit",
        "normalized": "Maybe Request-\u003eByteString-\u003eInt-\u003eText-\u003eConduit[LogstashMessage]a[Either(LogstashMessage,Value)Value]",
        "package": "hslogstash",
        "partial": "Conduit",
        "signature": "Maybe Request-\u003eByteString-\u003eInt-\u003eText-\u003eConduit[LogstashMessage]m[Either(LogstashMessage,Value)Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#v:esScan",
      "description": {
        "fct-module": "Data.Conduit.ElasticSearch",
        "fct-package": "hslogstash",
        "fct-signature": "Maybe Request-\u003e ByteString-\u003e Int-\u003e ByteString-\u003e Int-\u003e Producer (ResourceT IO) (Either Value [Value])",
        "fct-type": "function",
        "title": "esScan"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit ElasticSearch",
        "module": "Data.Conduit.ElasticSearch",
        "name": "esScan",
        "normalized": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eInt-\u003eProducer(ResourceT IO)(Either Value[Value])",
        "package": "hslogstash",
        "partial": "Scan",
        "signature": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eInt-\u003eProducer(ResourceT IO)(Either Value[Value])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#v:esSearchSource",
      "description": {
        "fct-descr": "\u003cp\u003eA source of Logstash messages generated from an ElasticSearch query.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.ElasticSearch",
        "fct-package": "hslogstash",
        "fct-signature": "Maybe Request-\u003e ByteString-\u003e Int-\u003e ByteString-\u003e Value-\u003e Int-\u003e Int-\u003e Producer m (Either Value [LogstashMessage])",
        "fct-type": "function",
        "title": "esSearchSource"
      },
      "index": {
        "description": "source of Logstash messages generated from an ElasticSearch query",
        "hierarchy": "Data Conduit ElasticSearch",
        "module": "Data.Conduit.ElasticSearch",
        "name": "esSearchSource",
        "normalized": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eValue-\u003eInt-\u003eInt-\u003eProducer a(Either Value[LogstashMessage])",
        "package": "hslogstash",
        "partial": "Search Source",
        "signature": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eValue-\u003eInt-\u003eInt-\u003eProducer m(Either Value[LogstashMessage])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-FireHose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA firehose sink, letting client get through a port and read the sink\n output.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.FireHose",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-FireHose.html",
        "fct-type": "module",
        "title": "FireHose"
      },
      "index": {
        "description": "firehose sink letting client get through port and read the sink output",
        "hierarchy": "Data Conduit FireHose",
        "module": "Data.Conduit.FireHose",
        "name": "FireHose",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Fire Hose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-FireHose.html#v:fireHose",
      "description": {
        "fct-descr": "\u003cp\u003eA web server will be launched on the specified port. The request URL\n must be of the form /type1,type2,type3. The client will be fed all\n messages matching those types.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.FireHose",
        "fct-package": "hslogstash",
        "fct-signature": "Int-\u003e Int-\u003e IO (Conduit LogstashMessage m LogstashMessage)",
        "fct-type": "function",
        "title": "fireHose"
      },
      "index": {
        "description": "web server will be launched on the specified port The request URL must be of the form type1 type2 type3 The client will be fed all messages matching those types",
        "hierarchy": "Data Conduit FireHose",
        "module": "Data.Conduit.FireHose",
        "name": "fireHose",
        "normalized": "Int-\u003eInt-\u003eIO(Conduit LogstashMessage a LogstashMessage)",
        "package": "hslogstash",
        "partial": "Hose",
        "signature": "Int-\u003eInt-\u003eIO(Conduit LogstashMessage m LogstashMessage)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Logstash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReceive logstash messages from the network, and process them with\n a conduit.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Logstash",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Logstash.html",
        "fct-type": "module",
        "title": "Logstash"
      },
      "index": {
        "description": "Receive logstash messages from the network and process them with conduit",
        "hierarchy": "Data Conduit Logstash",
        "module": "Data.Conduit.Logstash",
        "name": "Logstash",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Logstash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Logstash.html#v:logstashListener",
      "description": {
        "fct-descr": "\u003cp\u003eThis creates a logstash network listener, given a TCP port.\n It will try to decode the Bytestring as UTF-8, and, if it fails, as\n Latin1.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Logstash",
        "fct-package": "hslogstash",
        "fct-signature": "Int-\u003e Sink (Either ByteString LogstashMessage) (ResourceT IO) ()-\u003e IO ()",
        "fct-type": "function",
        "title": "logstashListener"
      },
      "index": {
        "description": "This creates logstash network listener given TCP port It will try to decode the Bytestring as UTF-8 and if it fails as Latin1",
        "hierarchy": "Data Conduit Logstash",
        "module": "Data.Conduit.Logstash",
        "name": "logstashListener",
        "normalized": "Int-\u003eSink(Either ByteString LogstashMessage)(ResourceT IO)()-\u003eIO()",
        "package": "hslogstash",
        "partial": "Listener",
        "signature": "Int-\u003eSink(Either ByteString LogstashMessage)(ResourceT IO)()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious conduit functions, mostly related to grouping or separating\n the items handled by conduits.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Misc.html",
        "fct-type": "module",
        "title": "Misc"
      },
      "index": {
        "description": "Various conduit functions mostly related to grouping or separating the items handled by conduits",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "Misc",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Misc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a stream of lists into a stream of single elements.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "Conduit [a] m a",
        "fct-source": "src/Data-Conduit-Misc.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Converts stream of lists into stream of single elements",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "concat",
        "normalized": "Conduit[a]b a",
        "package": "hslogstash",
        "partial": "",
        "signature": "Conduit[a]m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:concatFlush",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a more general version of \u003ccode\u003e\u003ca\u003esimpleConcatFlush\u003c/a\u003e\u003c/code\u003e, where you\n provide your own fold.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "b -\u003e (b -\u003e a -\u003e ConduitM [a] (Flush a) m b) -\u003e Conduit [a] m (Flush a)",
        "fct-source": "src/Data-Conduit-Misc.html#concatFlush",
        "fct-type": "function",
        "title": "concatFlush"
      },
      "index": {
        "description": "This is more general version of simpleConcatFlush where you provide your own fold",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "concatFlush",
        "normalized": "a-\u003e(a-\u003eb-\u003eConduitM[b](Flush b)c a)-\u003eConduit[b]c(Flush b)",
        "package": "hslogstash",
        "partial": "Flush",
        "signature": "b-\u003e(b-\u003ea-\u003eConduitM[a](Flush a)m b)-\u003eConduit[a]m(Flush a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:concatFlushSum",
      "description": {
        "fct-descr": "\u003cp\u003eA generalized version of \u003ccode\u003e\u003ca\u003esimpleConcatFlush\u003c/a\u003e\u003c/code\u003e where some value is\n summed and the \u003ccode\u003e\u003ca\u003eFlush\u003c/a\u003e\u003c/code\u003e is sent when it reaches a threshold.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "(a -\u003e n)-\u003e n-\u003e Conduit [a] m (Flush a)",
        "fct-type": "function",
        "title": "concatFlushSum"
      },
      "index": {
        "description": "generalized version of simpleConcatFlush where some value is summed and the Flush is sent when it reaches threshold",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "concatFlushSum",
        "normalized": "(a-\u003eb)-\u003eb-\u003eConduit[a]c(Flush a)",
        "package": "hslogstash",
        "partial": "Flush Sum",
        "signature": "(a-\u003en)-\u003en-\u003eConduit[a]m(Flush a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:groupFlush",
      "description": {
        "fct-descr": "\u003cp\u003eRegroup a stream of (Flush a) into a stream of lists, using \u003ca\u003eFlush\u003c/a\u003e as\n the separator\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "Conduit (Flush a) m [a]",
        "fct-source": "src/Data-Conduit-Misc.html#groupFlush",
        "fct-type": "function",
        "title": "groupFlush"
      },
      "index": {
        "description": "Regroup stream of Flush into stream of lists using Flush as the separator",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "groupFlush",
        "normalized": "Conduit(Flush a)b[a]",
        "package": "hslogstash",
        "partial": "Flush",
        "signature": "Conduit(Flush a)m[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:mapFlushMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLike mapMaybe, but in a Flush. Will not touch the Flush values.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "(a -\u003e Maybe b) -\u003e Conduit (Flush a) m (Flush b)",
        "fct-source": "src/Data-Conduit-Misc.html#mapFlushMaybe",
        "fct-type": "function",
        "title": "mapFlushMaybe"
      },
      "index": {
        "description": "Like mapMaybe but in Flush Will not touch the Flush values",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "mapFlushMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eConduit(Flush a)c(Flush b)",
        "package": "hslogstash",
        "partial": "Flush Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eConduit(Flush a)m(Flush b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:mchunk",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to maybe, but for chunks\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "b -\u003e (a -\u003e b) -\u003e Flush a -\u003e b",
        "fct-source": "src/Data-Conduit-Misc.html#mchunk",
        "fct-type": "function",
        "title": "mchunk"
      },
      "index": {
        "description": "Analogous to maybe but for chunks",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "mchunk",
        "normalized": "a-\u003e(b-\u003ea)-\u003eFlush b-\u003ea",
        "package": "hslogstash",
        "partial": "",
        "signature": "b-\u003e(a-\u003eb)-\u003eFlush a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:simpleConcatFlush",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a stream of [a] into a stream of (Flush a). This is done by\n sending a Flush when the input is the empty list, or that we reached\n a certain threshold\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Misc",
        "fct-package": "hslogstash",
        "fct-signature": "Int -\u003e Conduit [a] m (Flush a)",
        "fct-source": "src/Data-Conduit-Misc.html#simpleConcatFlush",
        "fct-type": "function",
        "title": "simpleConcatFlush"
      },
      "index": {
        "description": "Converts stream of into stream of Flush This is done by sending Flush when the input is the empty list or that we reached certain threshold",
        "hierarchy": "Data Conduit Misc",
        "module": "Data.Conduit.Misc",
        "name": "simpleConcatFlush",
        "normalized": "Int-\u003eConduit[a]b(Flush a)",
        "package": "hslogstash",
        "partial": "Concat Flush",
        "signature": "Int-\u003eConduit[a]m(Flush a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Network-Retry.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork conduits that will retry sending messages forever \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Network.Retry",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Network-Retry.html",
        "fct-type": "module",
        "title": "Retry"
      },
      "index": {
        "description": "Network conduits that will retry sending messages forever",
        "hierarchy": "Data Conduit Network Retry",
        "module": "Data.Conduit.Network.Retry",
        "name": "Retry",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Retry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Network-Retry.html#v:sinkSocketRetry",
      "description": {
        "fct-descr": "\u003cp\u003eTentative \u003cem\u003esafe\u003c/em\u003e \u003ca\u003eSink\u003c/a\u003e for a \u003ca\u003eSocket\u003c/a\u003e. It should try reopening the \u003ca\u003eSocket\u003c/a\u003e\nevery time the call to \u003ccode\u003e\u003ca\u003esendAll\u003c/a\u003e\u003c/code\u003e fails. This means that some bytes might be sent\nmultiple times, if the socket fails in the middle of the sendAll call. This is\ntargeted at protocols where only a full message makes sense.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Network.Retry",
        "fct-package": "hslogstash",
        "fct-signature": "IO Socket -\u003e Int -\u003e IO () -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Network-Retry.html#sinkSocketRetry",
        "fct-type": "function",
        "title": "sinkSocketRetry"
      },
      "index": {
        "description": "Tentative safe Sink for Socket It should try reopening the Socket every time the call to sendAll fails This means that some bytes might be sent multiple times if the socket fails in the middle of the sendAll call This is targeted at protocols where only full message makes sense",
        "hierarchy": "Data Conduit Network Retry",
        "module": "Data.Conduit.Network.Retry",
        "name": "sinkSocketRetry",
        "normalized": "IO Socket-\u003eInt-\u003eIO()-\u003eConsumer ByteString a()",
        "package": "hslogstash",
        "partial": "Socket Retry",
        "signature": "IO Socket-\u003eInt-\u003eIO()-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Network-Retry.html#v:tcpSinkRetry",
      "description": {
        "fct-descr": "\u003cp\u003eA specialization of the previous Sink that opens a TCP connection.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Network.Retry",
        "fct-package": "hslogstash",
        "fct-signature": "ByteString -\u003e Int -\u003e Int -\u003e IO () -\u003e Consumer ByteString m ()",
        "fct-source": "src/Data-Conduit-Network-Retry.html#tcpSinkRetry",
        "fct-type": "function",
        "title": "tcpSinkRetry"
      },
      "index": {
        "description": "specialization of the previous Sink that opens TCP connection",
        "hierarchy": "Data Conduit Network Retry",
        "module": "Data.Conduit.Network.Retry",
        "name": "tcpSinkRetry",
        "normalized": "ByteString-\u003eInt-\u003eInt-\u003eIO()-\u003eConsumer ByteString a()",
        "package": "hslogstash",
        "partial": "Sink Retry",
        "signature": "ByteString-\u003eInt-\u003eInt-\u003eIO()-\u003eConsumer ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Redis.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuick conduit for reading from Redis lists. Not tested much, and probably quite slow.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Redis",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Redis.html",
        "fct-type": "module",
        "title": "Redis"
      },
      "index": {
        "description": "Quick conduit for reading from Redis lists Not tested much and probably quite slow",
        "hierarchy": "Data Conduit Redis",
        "module": "Data.Conduit.Redis",
        "name": "Redis",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Redis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Redis.html#v:redisSink",
      "description": {
        "fct-descr": "\u003cp\u003eA Sink that will let you write ByteStrings to a redis queue. It can be\n augmented with a logging function, that will be able to report errors.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Redis",
        "fct-package": "hslogstash",
        "fct-signature": "HostName-\u003e Int-\u003e ByteString-\u003e Maybe (ByteString -\u003e IO ())-\u003e Sink ByteString m ()",
        "fct-type": "function",
        "title": "redisSink"
      },
      "index": {
        "description": "Sink that will let you write ByteStrings to redis queue It can be augmented with logging function that will be able to report errors",
        "hierarchy": "Data Conduit Redis",
        "module": "Data.Conduit.Redis",
        "name": "redisSink",
        "normalized": "HostName-\u003eInt-\u003eByteString-\u003eMaybe(ByteString-\u003eIO())-\u003eSink ByteString a()",
        "package": "hslogstash",
        "partial": "Sink",
        "signature": "HostName-\u003eInt-\u003eByteString-\u003eMaybe(ByteString-\u003eIO())-\u003eSink ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Redis.html#v:redisSource",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a source that pops elements from a Redis list. It is capable\n of poping several elements at once, and will return lists of\n ByteStrings. You might then use \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e or the\n flushing facilities in \u003ca\u003eData.Conduit.Misc\u003c/a\u003e to work with individual\n elements.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Redis",
        "fct-package": "hslogstash",
        "fct-signature": "HostName-\u003e Int-\u003e ByteString-\u003e Int-\u003e Integer-\u003e Source m [ByteString]",
        "fct-type": "function",
        "title": "redisSource"
      },
      "index": {
        "description": "This is source that pops elements from Redis list It is capable of poping several elements at once and will return lists of ByteStrings You might then use concat or the flushing facilities in Data.Conduit.Misc to work with individual elements",
        "hierarchy": "Data Conduit Redis",
        "module": "Data.Conduit.Redis",
        "name": "redisSource",
        "normalized": "HostName-\u003eInt-\u003eByteString-\u003eInt-\u003eInteger-\u003eSource a[ByteString]",
        "package": "hslogstash",
        "partial": "Source",
        "signature": "HostName-\u003eInt-\u003eByteString-\u003eInt-\u003eInteger-\u003eSource m[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is not very well named, as it has almost nothing to do with\nLogstash. It is used to define counters that will then be logged by collectd.\n\u003c/p\u003e\u003cp\u003eYou should configure collectd to create a Unix socket :\n\u003c/p\u003e\u003cpre\u003e LoadPlugin unixsock\n\n \u003cPlugin \"unixsock\"\u003e\n    SocketFile \"/var/run/collectd-unixsock\"\n    SocketGroup \"collectdsocket\"\n    SocketPerms \"0660\"\n \u003c/Plugin\u003e\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Logstash-Counter.html",
        "fct-type": "module",
        "title": "Counter"
      },
      "index": {
        "description": "This module is not very well named as it has almost nothing to do with Logstash It is used to define counters that will then be logged by collectd You should configure collectd to create Unix socket LoadPlugin unixsock Plugin unixsock SocketFile var run collectd-unixsock SocketGroup collectdsocket SocketPerms Plugin",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#t:Counter",
      "description": {
        "fct-descr": "\u003cp\u003eThe opaque counter type. It is actually just a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "data",
        "fct-source": "src/Logstash-Counter.html#Counter",
        "fct-type": "data",
        "title": "Counter"
      },
      "index": {
        "description": "The opaque counter type It is actually just TVar Integer",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "Counter",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:counter2collectd",
      "description": {
        "fct-descr": "\u003cp\u003eThis registers a counter to a Collectd server. This can be used in this way :\n\u003c/p\u003e\u003cpre\u003e counter2collectd nbmsg \"/var/run/collectd-unixsock\" nodename \"logstash-shipper\" \"messages\"\n\u003c/pre\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "Counter-\u003e FilePath-\u003e String-\u003e String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "counter2collectd"
      },
      "index": {
        "description": "This registers counter to Collectd server This can be used in this way counter2collectd nbmsg var run collectd-unixsock nodename logstash-shipper messages",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "counter2collectd",
        "normalized": "Counter-\u003eFilePath-\u003eString-\u003eString-\u003eString-\u003eIO()",
        "package": "hslogstash",
        "partial": "",
        "signature": "Counter-\u003eFilePath-\u003eString-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:incrementCounter",
      "description": {
        "fct-descr": "\u003cp\u003eIncrements a counter.\n\u003c/p\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "Counter -\u003e IO ()",
        "fct-source": "src/Logstash-Counter.html#incrementCounter",
        "fct-type": "function",
        "title": "incrementCounter"
      },
      "index": {
        "description": "Increments counter",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "incrementCounter",
        "normalized": "Counter-\u003eIO()",
        "package": "hslogstash",
        "partial": "Counter",
        "signature": "Counter-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:incrementCounterConduit",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a conduits-specific function that will increase a counter for\n each piece of data that traverses this conduit. It will not alter the\n data.\n\u003c/p\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "Counter -\u003e Conduit a m a",
        "fct-source": "src/Logstash-Counter.html#incrementCounterConduit",
        "fct-type": "function",
        "title": "incrementCounterConduit"
      },
      "index": {
        "description": "This is conduits-specific function that will increase counter for each piece of data that traverses this conduit It will not alter the data",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "incrementCounterConduit",
        "normalized": "Counter-\u003eConduit a b a",
        "package": "hslogstash",
        "partial": "Counter Conduit",
        "signature": "Counter-\u003eConduit a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:newCounter",
      "description": {
        "fct-descr": "\u003cp\u003eGives you a new empty counter.\n\u003c/p\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "IO Counter",
        "fct-source": "src/Logstash-Counter.html#newCounter",
        "fct-type": "function",
        "title": "newCounter"
      },
      "index": {
        "description": "Gives you new empty counter",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "newCounter",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:readCounter",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current value of a counter.\n\u003c/p\u003e",
        "fct-module": "Logstash.Counter",
        "fct-package": "hslogstash",
        "fct-signature": "Counter -\u003e IO Integer",
        "fct-source": "src/Logstash-Counter.html#readCounter",
        "fct-type": "function",
        "title": "readCounter"
      },
      "index": {
        "description": "Retrieve the current value of counter",
        "hierarchy": "Logstash Counter",
        "module": "Logstash.Counter",
        "name": "readCounter",
        "normalized": "Counter-\u003eIO Integer",
        "package": "hslogstash",
        "partial": "Counter",
        "signature": "Counter-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module needs a lot of work. It will contain all the functions that\nare needed to send some \u003ca\u003eLogstashMessage\u003c/a\u003e to a Logstash server.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Logstash.IO",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Logstash-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "This module needs lot of work It will contain all the functions that are needed to send some LogstashMessage to Logstash server",
        "hierarchy": "Logstash IO",
        "module": "Logstash.IO",
        "name": "IO",
        "normalized": "",
        "package": "hslogstash",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-IO.html#v:sendSingleMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThis very simple function lets you send a single message to a Logstash\nserver, using the tcp input, configured in the following way:\n\u003c/p\u003e\u003cpre\u003e input {\n   tcp {\n     debug        =\u003e \"true\"\n     port         =\u003e \"12345\"\n     data_timeout =\u003e -1\n     format       =\u003e \"json_event\"\n     type         =\u003e \"somemessages\"\n   }\n }\n\u003c/pre\u003e",
        "fct-module": "Logstash.IO",
        "fct-package": "hslogstash",
        "fct-signature": "HostName -\u003e PortID -\u003e LogstashMessage -\u003e IO ()",
        "fct-source": "src/Logstash-IO.html#sendSingleMessage",
        "fct-type": "function",
        "title": "sendSingleMessage"
      },
      "index": {
        "description": "This very simple function lets you send single message to Logstash server using the tcp input configured in the following way input tcp debug true port data timeout format json event type somemessages",
        "hierarchy": "Logstash IO",
        "module": "Logstash.IO",
        "name": "sendSingleMessage",
        "normalized": "HostName-\u003ePortID-\u003eLogstashMessage-\u003eIO()",
        "package": "hslogstash",
        "partial": "Single Message",
        "signature": "HostName-\u003ePortID-\u003eLogstashMessage-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatypes, helper functions, and JSON instances for Logstash\n messages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "module",
        "fct-source": "src/Logstash-Message.html",
        "fct-type": "module",
        "title": "Message"
      },
      "index": {
        "description": "Datatypes helper functions and JSON instances for Logstash messages",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "Message",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#t:LogstashMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThe Logstash message, as described in \u003ca\u003ehttps://github.com/logstash/logstash/wiki/logstash's-internal-message-format\u003c/a\u003e.\nPlease note that it is good practice to forget about the timestamp when creating messages (set \u003ccode\u003e\u003ca\u003elogstashTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e), as it should be a responsability of the Logstash server to add it.\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "data",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "data",
        "title": "LogstashMessage"
      },
      "index": {
        "description": "The Logstash message as described in https github.com logstash logstash wiki logstash s-internal-message-format Please note that it is good practice to forget about the timestamp when creating messages set logstashTime to Nothing as it should be responsability of the Logstash server to add it",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "LogstashMessage",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Logstash Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:LogstashMessage",
      "description": {
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "LogstashMessage",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "LogstashMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "LogstashMessage",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Logstash Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:addLogstashTag",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a tag to a logstash message.\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Text-\u003e LogstashMessage-\u003e LogstashMessage",
        "fct-type": "function",
        "title": "addLogstashTag"
      },
      "index": {
        "description": "Adds tag to logstash message",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "addLogstashTag",
        "normalized": "Text-\u003eLogstashMessage-\u003eLogstashMessage",
        "package": "hslogstash",
        "partial": "Logstash Tag",
        "signature": "Text-\u003eLogstashMessage-\u003eLogstashMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:addLogstashTime",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the current timestamp if it is not provided.\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "LogstashMessage -\u003e IO LogstashMessage",
        "fct-source": "src/Logstash-Message.html#addLogstashTime",
        "fct-type": "function",
        "title": "addLogstashTime"
      },
      "index": {
        "description": "Adds the current timestamp if it is not provided",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "addLogstashTime",
        "normalized": "LogstashMessage-\u003eIO LogstashMessage",
        "package": "hslogstash",
        "partial": "Logstash Time",
        "signature": "LogstashMessage-\u003eIO LogstashMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:emptyLSMessage",
      "description": {
        "fct-descr": "\u003cp\u003eAs the name implies, this creates a dummy Logstash message, only\nupdating the message field.\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Text -\u003e LogstashMessage",
        "fct-source": "src/Logstash-Message.html#emptyLSMessage",
        "fct-type": "function",
        "title": "emptyLSMessage"
      },
      "index": {
        "description": "As the name implies this creates dummy Logstash message only updating the message field",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "emptyLSMessage",
        "normalized": "Text-\u003eLogstashMessage",
        "package": "hslogstash",
        "partial": "LSMessage",
        "signature": "Text-\u003eLogstashMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Text",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "logstashContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashContent",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Value",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "logstashFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashFields",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashSource",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Text",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "logstashSource"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashSource",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashTags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "[Text]",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "logstashTags"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashTags",
        "normalized": "[Text]",
        "package": "hslogstash",
        "partial": "Tags",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Maybe UTCTime",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "logstashTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashTime",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashTimestamp",
      "description": {
        "fct-descr": "\u003cp\u003eThis formats an UTCTime in what logstash expects\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "UTCTime -\u003e Text",
        "fct-source": "src/Logstash-Message.html#logstashTimestamp",
        "fct-type": "function",
        "title": "logstashTimestamp"
      },
      "index": {
        "description": "This formats an UTCTime in what logstash expects",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashTimestamp",
        "normalized": "UTCTime-\u003eText",
        "package": "hslogstash",
        "partial": "Timestamp",
        "signature": "UTCTime-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Text",
        "fct-source": "src/Logstash-Message.html#LogstashMessage",
        "fct-type": "function",
        "title": "logstashType"
      },
      "index": {
        "description": "",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "logstashType",
        "normalized": "",
        "package": "hslogstash",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:parseLogstashTime",
      "description": {
        "fct-descr": "\u003cp\u003eThis parses the logstash time format.\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Text -\u003e Maybe UTCTime",
        "fct-source": "src/Logstash-Message.html#parseLogstashTime",
        "fct-type": "function",
        "title": "parseLogstashTime"
      },
      "index": {
        "description": "This parses the logstash time format",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "parseLogstashTime",
        "normalized": "Text-\u003eMaybe UTCTime",
        "package": "hslogstash",
        "partial": "Logstash Time",
        "signature": "Text-\u003eMaybe UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:value2logstash",
      "description": {
        "fct-descr": "\u003cp\u003eThis will try to convert an arbitrary JSON value into\na \u003ca\u003eLogstashMessage\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Logstash.Message",
        "fct-package": "hslogstash",
        "fct-signature": "Value -\u003e Maybe LogstashMessage",
        "fct-source": "src/Logstash-Message.html#value2logstash",
        "fct-type": "function",
        "title": "value2logstash"
      },
      "index": {
        "description": "This will try to convert an arbitrary JSON value into LogstashMessage",
        "hierarchy": "Logstash Message",
        "module": "Logstash.Message",
        "name": "value2logstash",
        "normalized": "Value-\u003eMaybe LogstashMessage",
        "package": "hslogstash",
        "partial": "",
        "signature": "Value-\u003eMaybe LogstashMessage"
      }
    }
  }
]