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
        "word": "hslogstash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cpre\u003eWARNING: executables using this function must be compiled with -threaded\u003c/pre\u003e\u003cp\u003eThese functions let you connect several sinks to a single source, according to a branching strategy. For example :\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where\n\nimport Data.Conduit.Branching\nimport Data.Conduit\nimport qualified Data.Conduit.List as CL\nimport Control.Monad.IO.Class\n\nsrc :: Monad m =\u003e Producer m (Either Int String)\nsrc = CL.sourceList [Left 5, Left 4, Right \"five\", Right \"four\"]\n\nsinkString :: (Monad m, MonadIO m) =\u003e Sink (Either Int String) m ()\nsinkString = CL.mapM_ $ (Right x) -\u003e liftIO (putStrLn (\"This is a string: \" ++ x))\n\nsinkInt :: (Monad m, MonadIO m) =\u003e Sink (Either Int String) m ()\nsinkInt = CL.mapM_ $ (Left x) -\u003e liftIO (putStrLn (\"This is an integer: \" ++ show x))\n\nsinkLog :: (Monad m, MonadIO m) =\u003e Sink (Either Int String) m ()\nsinkLog = CL.mapM_ (liftIO . putStrLn . (\"Raw logging: \" ++) . show)\n\nmain :: IO ()\nmain = branchConduits src branching [sinkInt, sinkString, sinkLog]\n    where\n        branching (Left _) = [0,2]\n        branching (Right _) = [1,2]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Branching",
          "name": "Branching",
          "package": "hslogstash",
          "source": "src/Data-Conduit-Branching.html",
          "type": "module"
        },
        "index": {
          "description": "WARNING executables using this function must be compiled with threaded These functions let you connect several sinks to single source according to branching strategy For example module Main where import Data.Conduit.Branching import Data.Conduit import qualified Data.Conduit.List as CL import Control.Monad.IO.Class src Monad Producer Either Int String src CL.sourceList Left Left Right five Right four sinkString Monad MonadIO Sink Either Int String sinkString CL.mapM Right liftIO putStrLn This is string sinkInt Monad MonadIO Sink Either Int String sinkInt CL.mapM Left liftIO putStrLn This is an integer show sinkLog Monad MonadIO Sink Either Int String sinkLog CL.mapM liftIO putStrLn Raw logging show main IO main branchConduits src branching sinkInt sinkString sinkLog where branching Left branching Right",
          "hierarchy": "Data Conduit Branching",
          "module": "Data.Conduit.Branching",
          "name": "Branching",
          "package": "hslogstash",
          "partial": "Branching",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Branching.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA higher level function. Given a source, a branching function and\n a list of sinks, this will run the conduits until completion.\n\u003c/p\u003e",
          "module": "Data.Conduit.Branching",
          "name": "branchConduits",
          "package": "hslogstash",
          "signature": "Source (ResourceT IO) a-\u003e (a -\u003e [Int])-\u003e [Sink a (ResourceT IO) ()]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "higher level function Given source branching function and list of sinks this will run the conduits until completion",
          "hierarchy": "Data Conduit Branching",
          "module": "Data.Conduit.Branching",
          "name": "branchConduits",
          "normalized": "Source(ResourceT IO)a-\u003e(a-\u003e[Int])-\u003e[Sink a(ResourceT IO)()]-\u003eIO()",
          "package": "hslogstash",
          "partial": "Conduits",
          "signature": "Source(ResourceT IO)a-\u003e(a-\u003e[Int])-\u003e[Sink a(ResourceT IO)()]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Branching.html#v:branchConduits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the \u003cem\u003eplumbing\u003c/em\u003e that might be used to connect several conduits\n together, based on a branching function.\n\u003c/p\u003e",
          "module": "Data.Conduit.Branching",
          "name": "mkBranchingConduit",
          "package": "hslogstash",
          "signature": "Int-\u003e (a -\u003e [Int])-\u003e IO (Sink a m (), [Source m a])",
          "type": "function"
        },
        "index": {
          "description": "Creates the plumbing that might be used to connect several conduits together based on branching function",
          "hierarchy": "Data Conduit Branching",
          "module": "Data.Conduit.Branching",
          "name": "mkBranchingConduit",
          "normalized": "Int-\u003e(a-\u003e[Int])-\u003eIO(Sink a b(),[Source b a])",
          "package": "hslogstash",
          "partial": "Branching Conduit",
          "signature": "Int-\u003e(a-\u003e[Int])-\u003eIO(Sink a m(),[Source m a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Branching.html#v:mkBranchingConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports \u003ca\u003eConduit\u003c/a\u003e interfaces to ElasticSearch.\nIt has been used intensively in production for several month now, but at a single site.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.ElasticSearch",
          "name": "ElasticSearch",
          "package": "hslogstash",
          "source": "src/Data-Conduit-ElasticSearch.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports Conduit interfaces to ElasticSearch It has been used intensively in production for several month now but at single site",
          "hierarchy": "Data Conduit ElasticSearch",
          "module": "Data.Conduit.ElasticSearch",
          "name": "ElasticSearch",
          "package": "hslogstash",
          "partial": "Elastic Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ca\u003eLogstashMessage\u003c/a\u003e, and returns the result of the ElasticSearch request\n along with the value in case of errors, or ElasticSearch's values in case of\n success.\n\u003c/p\u003e",
          "module": "Data.Conduit.ElasticSearch",
          "name": "esConduit",
          "package": "hslogstash",
          "signature": "Maybe Request-\u003e ByteString-\u003e Int-\u003e Text-\u003e Conduit [LogstashMessage] m [Either (LogstashMessage, Value) Value]",
          "type": "function"
        },
        "index": {
          "description": "Takes LogstashMessage and returns the result of the ElasticSearch request along with the value in case of errors or ElasticSearch values in case of success",
          "hierarchy": "Data Conduit ElasticSearch",
          "module": "Data.Conduit.ElasticSearch",
          "name": "esConduit",
          "normalized": "Maybe Request-\u003eByteString-\u003eInt-\u003eText-\u003eConduit[LogstashMessage]a[Either(LogstashMessage,Value)Value]",
          "package": "hslogstash",
          "partial": "Conduit",
          "signature": "Maybe Request-\u003eByteString-\u003eInt-\u003eText-\u003eConduit[LogstashMessage]m[Either(LogstashMessage,Value)Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#v:esConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this function for 'scanning' requests, using the scroll feature.\n\u003c/p\u003e",
          "module": "Data.Conduit.ElasticSearch",
          "name": "esScan",
          "package": "hslogstash",
          "signature": "Maybe Request-\u003e ByteString-\u003e Int-\u003e ByteString-\u003e Int-\u003e Producer (ResourceT IO) (Either Value [Value])",
          "type": "function"
        },
        "index": {
          "description": "Use this function for scanning requests using the scroll feature",
          "hierarchy": "Data Conduit ElasticSearch",
          "module": "Data.Conduit.ElasticSearch",
          "name": "esScan",
          "normalized": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eInt-\u003eProducer(ResourceT IO)(Either Value[Value])",
          "package": "hslogstash",
          "partial": "Scan",
          "signature": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eInt-\u003eProducer(ResourceT IO)(Either Value[Value])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#v:esScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA source of Logstash messages generated from an ElasticSearch query.\n\u003c/p\u003e",
          "module": "Data.Conduit.ElasticSearch",
          "name": "esSearchSource",
          "package": "hslogstash",
          "signature": "Maybe Request-\u003e ByteString-\u003e Int-\u003e ByteString-\u003e Value-\u003e Int-\u003e Int-\u003e Producer m (Either Value [LogstashMessage])",
          "type": "function"
        },
        "index": {
          "description": "source of Logstash messages generated from an ElasticSearch query",
          "hierarchy": "Data Conduit ElasticSearch",
          "module": "Data.Conduit.ElasticSearch",
          "name": "esSearchSource",
          "normalized": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eValue-\u003eInt-\u003eInt-\u003eProducer a(Either Value[LogstashMessage])",
          "package": "hslogstash",
          "partial": "Search Source",
          "signature": "Maybe Request-\u003eByteString-\u003eInt-\u003eByteString-\u003eValue-\u003eInt-\u003eInt-\u003eProducer m(Either Value[LogstashMessage])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-ElasticSearch.html#v:esSearchSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA firehose conduit, spawning a web server that will allow for the\n observation of the messages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.FireHose",
          "name": "FireHose",
          "package": "hslogstash",
          "source": "src/Data-Conduit-FireHose.html",
          "type": "module"
        },
        "index": {
          "description": "firehose conduit spawning web server that will allow for the observation of the messages",
          "hierarchy": "Data Conduit FireHose",
          "module": "Data.Conduit.FireHose",
          "name": "FireHose",
          "package": "hslogstash",
          "partial": "Fire Hose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-FireHose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA web server will be launched on the specified port. Clients can\nrequest URLs of the form /type1,type2,type3. They will be fed all\n\u003ccode\u003e\u003ca\u003eLogstashMessage\u003c/a\u003e\u003c/code\u003e matching one of the given types.\n\u003c/p\u003e\u003cp\u003eHere is a sample usage :\n\u003c/p\u003e\u003cpre\u003e -- run the fire hose on port 13400\n fh \u003c- fireHose 13400 10\n logstashListener lport (printErrors =$ CL.mapM (liftIO . addLogstashTime) -- add the time\n                                     =$ fh\n                                     =$ CL.map (BSL.toStrict . encode) -- turn into a bytestring\n                                     =$ redisSink host port queue (Just logfunc)) -- store to redis\n\u003c/pre\u003e",
          "module": "Data.Conduit.FireHose",
          "name": "fireHose",
          "package": "hslogstash",
          "signature": "Int-\u003e Int-\u003e IO (Conduit LogstashMessage m LogstashMessage)",
          "type": "function"
        },
        "index": {
          "description": "web server will be launched on the specified port Clients can request URLs of the form type1 type2 type3 They will be fed all LogstashMessage matching one of the given types Here is sample usage run the fire hose on port fh fireHose logstashListener lport printErrors CL.mapM liftIO addLogstashTime add the time fh CL.map BSL.toStrict encode turn into bytestring redisSink host port queue Just logfunc store to redis",
          "hierarchy": "Data Conduit FireHose",
          "module": "Data.Conduit.FireHose",
          "name": "fireHose",
          "normalized": "Int-\u003eInt-\u003eIO(Conduit LogstashMessage a LogstashMessage)",
          "package": "hslogstash",
          "partial": "Hose",
          "signature": "Int-\u003eInt-\u003eIO(Conduit LogstashMessage m LogstashMessage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-FireHose.html#v:fireHose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReceive logstash messages from the network, and process them with\n a conduit.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Logstash",
          "name": "Logstash",
          "package": "hslogstash",
          "source": "src/Data-Conduit-Logstash.html",
          "type": "module"
        },
        "index": {
          "description": "Receive logstash messages from the network and process them with conduit",
          "hierarchy": "Data Conduit Logstash",
          "module": "Data.Conduit.Logstash",
          "name": "Logstash",
          "package": "hslogstash",
          "partial": "Logstash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Logstash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis creates a logstash network listener, given a TCP port.\n It will try to decode the Bytestring as UTF-8, and, if it fails, as\n Latin1.\n\u003c/p\u003e",
          "module": "Data.Conduit.Logstash",
          "name": "logstashListener",
          "package": "hslogstash",
          "signature": "Int-\u003e Sink (Either ByteString LogstashMessage) (ResourceT IO) ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "This creates logstash network listener given TCP port It will try to decode the Bytestring as UTF-8 and if it fails as Latin1",
          "hierarchy": "Data Conduit Logstash",
          "module": "Data.Conduit.Logstash",
          "name": "logstashListener",
          "normalized": "Int-\u003eSink(Either ByteString LogstashMessage)(ResourceT IO)()-\u003eIO()",
          "package": "hslogstash",
          "partial": "Listener",
          "signature": "Int-\u003eSink(Either ByteString LogstashMessage)(ResourceT IO)()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Logstash.html#v:logstashListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes JSON data from ByteStrings that can be encoded in UTF-8 or\n latin1.\n\u003c/p\u003e",
          "module": "Data.Conduit.Logstash",
          "name": "tryDecode",
          "package": "hslogstash",
          "signature": "ByteString -\u003e Either ByteString a",
          "source": "src/Data-Conduit-Logstash.html#tryDecode",
          "type": "function"
        },
        "index": {
          "description": "Decodes JSON data from ByteStrings that can be encoded in UTF-8 or latin1",
          "hierarchy": "Data Conduit Logstash",
          "module": "Data.Conduit.Logstash",
          "name": "tryDecode",
          "normalized": "ByteString-\u003eEither ByteString a",
          "package": "hslogstash",
          "partial": "Decode",
          "signature": "ByteString-\u003eEither ByteString a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Logstash.html#v:tryDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious conduit functions, mostly related to grouping or separating\n the items handled by conduits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Misc",
          "name": "Misc",
          "package": "hslogstash",
          "source": "src/Data-Conduit-Misc.html",
          "type": "module"
        },
        "index": {
          "description": "Various conduit functions mostly related to grouping or separating the items handled by conduits",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "Misc",
          "package": "hslogstash",
          "partial": "Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a stream of lists into a stream of single elements.\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "concat",
          "package": "hslogstash",
          "signature": "Conduit [a] m a",
          "source": "src/Data-Conduit-Misc.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Converts stream of lists into stream of single elements",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "concat",
          "normalized": "Conduit[a]b a",
          "package": "hslogstash",
          "signature": "Conduit[a]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a more general version of \u003ccode\u003e\u003ca\u003esimpleConcatFlush\u003c/a\u003e\u003c/code\u003e, where you\n provide your own fold.\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "concatFlush",
          "package": "hslogstash",
          "signature": "b -\u003e (b -\u003e a -\u003e ConduitM [a] (Flush a) m b) -\u003e Conduit [a] m (Flush a)",
          "source": "src/Data-Conduit-Misc.html#concatFlush",
          "type": "function"
        },
        "index": {
          "description": "This is more general version of simpleConcatFlush where you provide your own fold",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "concatFlush",
          "normalized": "a-\u003e(a-\u003eb-\u003eConduitM[b](Flush b)c a)-\u003eConduit[b]c(Flush b)",
          "package": "hslogstash",
          "partial": "Flush",
          "signature": "b-\u003e(b-\u003ea-\u003eConduitM[a](Flush a)m b)-\u003eConduit[a]m(Flush a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:concatFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized version of \u003ccode\u003e\u003ca\u003esimpleConcatFlush\u003c/a\u003e\u003c/code\u003e where some value is\n summed and the \u003ccode\u003e\u003ca\u003eFlush\u003c/a\u003e\u003c/code\u003e is sent when it reaches a threshold.\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "concatFlushSum",
          "package": "hslogstash",
          "signature": "(a -\u003e n)-\u003e n-\u003e Conduit [a] m (Flush a)",
          "type": "function"
        },
        "index": {
          "description": "generalized version of simpleConcatFlush where some value is summed and the Flush is sent when it reaches threshold",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "concatFlushSum",
          "normalized": "(a-\u003eb)-\u003eb-\u003eConduit[a]c(Flush a)",
          "package": "hslogstash",
          "partial": "Flush Sum",
          "signature": "(a-\u003en)-\u003en-\u003eConduit[a]m(Flush a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:concatFlushSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegroup a stream of (Flush a) into a stream of lists, using \u003ca\u003eFlush\u003c/a\u003e as\n the separator\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "groupFlush",
          "package": "hslogstash",
          "signature": "Conduit (Flush a) m [a]",
          "source": "src/Data-Conduit-Misc.html#groupFlush",
          "type": "function"
        },
        "index": {
          "description": "Regroup stream of Flush into stream of lists using Flush as the separator",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "groupFlush",
          "normalized": "Conduit(Flush a)b[a]",
          "package": "hslogstash",
          "partial": "Flush",
          "signature": "Conduit(Flush a)m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:groupFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike mapMaybe, but in a Flush. Will not touch the Flush values.\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "mapFlushMaybe",
          "package": "hslogstash",
          "signature": "(a -\u003e Maybe b) -\u003e Conduit (Flush a) m (Flush b)",
          "source": "src/Data-Conduit-Misc.html#mapFlushMaybe",
          "type": "function"
        },
        "index": {
          "description": "Like mapMaybe but in Flush Will not touch the Flush values",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "mapFlushMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eConduit(Flush a)c(Flush b)",
          "package": "hslogstash",
          "partial": "Flush Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eConduit(Flush a)m(Flush b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:mapFlushMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to maybe, but for chunks\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "mchunk",
          "package": "hslogstash",
          "signature": "b -\u003e (a -\u003e b) -\u003e Flush a -\u003e b",
          "source": "src/Data-Conduit-Misc.html#mchunk",
          "type": "function"
        },
        "index": {
          "description": "Analogous to maybe but for chunks",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "mchunk",
          "normalized": "a-\u003e(b-\u003ea)-\u003eFlush b-\u003ea",
          "package": "hslogstash",
          "signature": "b-\u003e(a-\u003eb)-\u003eFlush a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:mchunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a stream of [a] into a stream of (Flush a). This is done by\n sending a Flush when the input is the empty list, or that we reached\n a certain threshold\n\u003c/p\u003e",
          "module": "Data.Conduit.Misc",
          "name": "simpleConcatFlush",
          "package": "hslogstash",
          "signature": "Int -\u003e Conduit [a] m (Flush a)",
          "source": "src/Data-Conduit-Misc.html#simpleConcatFlush",
          "type": "function"
        },
        "index": {
          "description": "Converts stream of into stream of Flush This is done by sending Flush when the input is the empty list or that we reached certain threshold",
          "hierarchy": "Data Conduit Misc",
          "module": "Data.Conduit.Misc",
          "name": "simpleConcatFlush",
          "normalized": "Int-\u003eConduit[a]b(Flush a)",
          "package": "hslogstash",
          "partial": "Concat Flush",
          "signature": "Int-\u003eConduit[a]m(Flush a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Misc.html#v:simpleConcatFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork conduits that will retry sending messages forever \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Network.Retry",
          "name": "Retry",
          "package": "hslogstash",
          "source": "src/Data-Conduit-Network-Retry.html",
          "type": "module"
        },
        "index": {
          "description": "Network conduits that will retry sending messages forever",
          "hierarchy": "Data Conduit Network Retry",
          "module": "Data.Conduit.Network.Retry",
          "name": "Retry",
          "package": "hslogstash",
          "partial": "Retry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Network-Retry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTentative \u003cem\u003esafe\u003c/em\u003e \u003ca\u003eSink\u003c/a\u003e for a \u003ca\u003eSocket\u003c/a\u003e. It should try reopening the \u003ca\u003eSocket\u003c/a\u003e\nevery time the call to \u003ccode\u003e\u003ca\u003esendAll\u003c/a\u003e\u003c/code\u003e fails. This means that some bytes might be sent\nmultiple times, if the socket fails in the middle of the sendAll call. This is\ntargeted at protocols where only a full message makes sense.\n\u003c/p\u003e",
          "module": "Data.Conduit.Network.Retry",
          "name": "sinkSocketRetry",
          "package": "hslogstash",
          "signature": "IO Socket -\u003e Int -\u003e IO () -\u003e Consumer ByteString m ()",
          "source": "src/Data-Conduit-Network-Retry.html#sinkSocketRetry",
          "type": "function"
        },
        "index": {
          "description": "Tentative safe Sink for Socket It should try reopening the Socket every time the call to sendAll fails This means that some bytes might be sent multiple times if the socket fails in the middle of the sendAll call This is targeted at protocols where only full message makes sense",
          "hierarchy": "Data Conduit Network Retry",
          "module": "Data.Conduit.Network.Retry",
          "name": "sinkSocketRetry",
          "normalized": "IO Socket-\u003eInt-\u003eIO()-\u003eConsumer ByteString a()",
          "package": "hslogstash",
          "partial": "Socket Retry",
          "signature": "IO Socket-\u003eInt-\u003eIO()-\u003eConsumer ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Network-Retry.html#v:sinkSocketRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialization of the previous Sink that opens a TCP connection.\n\u003c/p\u003e",
          "module": "Data.Conduit.Network.Retry",
          "name": "tcpSinkRetry",
          "package": "hslogstash",
          "signature": "ByteString -\u003e Int -\u003e Int -\u003e IO () -\u003e Consumer ByteString m ()",
          "source": "src/Data-Conduit-Network-Retry.html#tcpSinkRetry",
          "type": "function"
        },
        "index": {
          "description": "specialization of the previous Sink that opens TCP connection",
          "hierarchy": "Data Conduit Network Retry",
          "module": "Data.Conduit.Network.Retry",
          "name": "tcpSinkRetry",
          "normalized": "ByteString-\u003eInt-\u003eInt-\u003eIO()-\u003eConsumer ByteString a()",
          "package": "hslogstash",
          "partial": "Sink Retry",
          "signature": "ByteString-\u003eInt-\u003eInt-\u003eIO()-\u003eConsumer ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Network-Retry.html#v:tcpSinkRetry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuick conduit for reading from Redis lists. Not tested much, and probably quite slow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Redis",
          "name": "Redis",
          "package": "hslogstash",
          "source": "src/Data-Conduit-Redis.html",
          "type": "module"
        },
        "index": {
          "description": "Quick conduit for reading from Redis lists Not tested much and probably quite slow",
          "hierarchy": "Data Conduit Redis",
          "module": "Data.Conduit.Redis",
          "name": "Redis",
          "package": "hslogstash",
          "partial": "Redis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Redis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Sink that will let you write ByteStrings to a redis queue. It can be\n augmented with a logging function, that will be able to report errors.\n\u003c/p\u003e",
          "module": "Data.Conduit.Redis",
          "name": "redisSink",
          "package": "hslogstash",
          "signature": "HostName-\u003e Int-\u003e ByteString-\u003e Maybe (ByteString -\u003e IO ())-\u003e Sink ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Sink that will let you write ByteStrings to redis queue It can be augmented with logging function that will be able to report errors",
          "hierarchy": "Data Conduit Redis",
          "module": "Data.Conduit.Redis",
          "name": "redisSink",
          "normalized": "HostName-\u003eInt-\u003eByteString-\u003eMaybe(ByteString-\u003eIO())-\u003eSink ByteString a()",
          "package": "hslogstash",
          "partial": "Sink",
          "signature": "HostName-\u003eInt-\u003eByteString-\u003eMaybe(ByteString-\u003eIO())-\u003eSink ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Redis.html#v:redisSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a source that pops elements from a Redis list. It is capable\n of poping several elements at once, and will return lists of\n ByteStrings. You might then use \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e or the\n flushing facilities in \u003ca\u003eData.Conduit.Misc\u003c/a\u003e to work with individual\n elements.\n\u003c/p\u003e",
          "module": "Data.Conduit.Redis",
          "name": "redisSource",
          "package": "hslogstash",
          "signature": "HostName-\u003e Int-\u003e ByteString-\u003e Int-\u003e Integer-\u003e Source m [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "This is source that pops elements from Redis list It is capable of poping several elements at once and will return lists of ByteStrings You might then use concat or the flushing facilities in Data.Conduit.Misc to work with individual elements",
          "hierarchy": "Data Conduit Redis",
          "module": "Data.Conduit.Redis",
          "name": "redisSource",
          "normalized": "HostName-\u003eInt-\u003eByteString-\u003eInt-\u003eInteger-\u003eSource a[ByteString]",
          "package": "hslogstash",
          "partial": "Source",
          "signature": "HostName-\u003eInt-\u003eByteString-\u003eInt-\u003eInteger-\u003eSource m[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Data-Conduit-Redis.html#v:redisSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is not very well named, as it has almost nothing to do with\nLogstash. It is used to define counters that will then be logged by collectd.\n\u003c/p\u003e\u003cp\u003eYou should configure collectd to create a Unix socket :\n\u003c/p\u003e\u003cpre\u003e LoadPlugin unixsock\n\n \u003cPlugin \"unixsock\"\u003e\n    SocketFile \"/var/run/collectd-unixsock\"\n    SocketGroup \"collectdsocket\"\n    SocketPerms \"0660\"\n \u003c/Plugin\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Logstash.Counter",
          "name": "Counter",
          "package": "hslogstash",
          "source": "src/Logstash-Counter.html",
          "type": "module"
        },
        "index": {
          "description": "This module is not very well named as it has almost nothing to do with Logstash It is used to define counters that will then be logged by collectd You should configure collectd to create Unix socket LoadPlugin unixsock Plugin unixsock SocketFile var run collectd-unixsock SocketGroup collectdsocket SocketPerms Plugin",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "Counter",
          "package": "hslogstash",
          "partial": "Counter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opaque counter type. It is actually just a \u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Logstash.Counter",
          "name": "Counter",
          "package": "hslogstash",
          "source": "src/Logstash-Counter.html#Counter",
          "type": "data"
        },
        "index": {
          "description": "The opaque counter type It is actually just TVar Integer",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "Counter",
          "package": "hslogstash",
          "partial": "Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis registers a counter to a Collectd server. This can be used in this way :\n\u003c/p\u003e\u003cpre\u003e counter2collectd nbmsg \"/var/run/collectd-unixsock\" nodename \"logstash-shipper\" \"messages\"\n\u003c/pre\u003e",
          "module": "Logstash.Counter",
          "name": "counter2collectd",
          "package": "hslogstash",
          "signature": "Counter-\u003e FilePath-\u003e String-\u003e String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "This registers counter to Collectd server This can be used in this way counter2collectd nbmsg var run collectd-unixsock nodename logstash-shipper messages",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "counter2collectd",
          "normalized": "Counter-\u003eFilePath-\u003eString-\u003eString-\u003eString-\u003eIO()",
          "package": "hslogstash",
          "signature": "Counter-\u003eFilePath-\u003eString-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:counter2collectd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrements a counter.\n\u003c/p\u003e",
          "module": "Logstash.Counter",
          "name": "incrementCounter",
          "package": "hslogstash",
          "signature": "Counter -\u003e IO ()",
          "source": "src/Logstash-Counter.html#incrementCounter",
          "type": "function"
        },
        "index": {
          "description": "Increments counter",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "incrementCounter",
          "normalized": "Counter-\u003eIO()",
          "package": "hslogstash",
          "partial": "Counter",
          "signature": "Counter-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:incrementCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a conduits-specific function that will increase a counter for\n each piece of data that traverses this conduit. It will not alter the\n data.\n\u003c/p\u003e",
          "module": "Logstash.Counter",
          "name": "incrementCounterConduit",
          "package": "hslogstash",
          "signature": "Counter -\u003e Conduit a m a",
          "source": "src/Logstash-Counter.html#incrementCounterConduit",
          "type": "function"
        },
        "index": {
          "description": "This is conduits-specific function that will increase counter for each piece of data that traverses this conduit It will not alter the data",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "incrementCounterConduit",
          "normalized": "Counter-\u003eConduit a b a",
          "package": "hslogstash",
          "partial": "Counter Conduit",
          "signature": "Counter-\u003eConduit a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:incrementCounterConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives you a new empty counter.\n\u003c/p\u003e",
          "module": "Logstash.Counter",
          "name": "newCounter",
          "package": "hslogstash",
          "signature": "IO Counter",
          "source": "src/Logstash-Counter.html#newCounter",
          "type": "function"
        },
        "index": {
          "description": "Gives you new empty counter",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "newCounter",
          "package": "hslogstash",
          "partial": "Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:newCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current value of a counter.\n\u003c/p\u003e",
          "module": "Logstash.Counter",
          "name": "readCounter",
          "package": "hslogstash",
          "signature": "Counter -\u003e IO Integer",
          "source": "src/Logstash-Counter.html#readCounter",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current value of counter",
          "hierarchy": "Logstash Counter",
          "module": "Logstash.Counter",
          "name": "readCounter",
          "normalized": "Counter-\u003eIO Integer",
          "package": "hslogstash",
          "partial": "Counter",
          "signature": "Counter-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Counter.html#v:readCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module needs a lot of work. It will contain all the functions that\nare needed to send some \u003ca\u003eLogstashMessage\u003c/a\u003e to a Logstash server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Logstash.IO",
          "name": "IO",
          "package": "hslogstash",
          "source": "src/Logstash-IO.html",
          "type": "module"
        },
        "index": {
          "description": "This module needs lot of work It will contain all the functions that are needed to send some LogstashMessage to Logstash server",
          "hierarchy": "Logstash IO",
          "module": "Logstash.IO",
          "name": "IO",
          "package": "hslogstash",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis very simple function lets you send a single message to a Logstash\nserver, using the tcp input, configured in the following way:\n\u003c/p\u003e\u003cpre\u003e input {\n   tcp {\n     debug        =\u003e \"true\"\n     port         =\u003e \"12345\"\n     data_timeout =\u003e -1\n     format       =\u003e \"json_event\"\n     type         =\u003e \"somemessages\"\n   }\n }\n\u003c/pre\u003e",
          "module": "Logstash.IO",
          "name": "sendSingleMessage",
          "package": "hslogstash",
          "signature": "HostName -\u003e PortID -\u003e LogstashMessage -\u003e IO ()",
          "source": "src/Logstash-IO.html#sendSingleMessage",
          "type": "function"
        },
        "index": {
          "description": "This very simple function lets you send single message to Logstash server using the tcp input configured in the following way input tcp debug true port data timeout format json event type somemessages",
          "hierarchy": "Logstash IO",
          "module": "Logstash.IO",
          "name": "sendSingleMessage",
          "normalized": "HostName-\u003ePortID-\u003eLogstashMessage-\u003eIO()",
          "package": "hslogstash",
          "partial": "Single Message",
          "signature": "HostName-\u003ePortID-\u003eLogstashMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-IO.html#v:sendSingleMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDatatypes, helper functions, and JSON instances for Logstash\n messages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Logstash.Message",
          "name": "Message",
          "package": "hslogstash",
          "source": "src/Logstash-Message.html",
          "type": "module"
        },
        "index": {
          "description": "Datatypes helper functions and JSON instances for Logstash messages",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "Message",
          "package": "hslogstash",
          "partial": "Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Logstash message, as described in \u003ca\u003ehttps://github.com/logstash/logstash/wiki/logstash's-internal-message-format\u003c/a\u003e.\nPlease note that it is good practice to forget about the timestamp when creating messages (set \u003ccode\u003e\u003ca\u003elogstashTime\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e), as it should be a responsability of the Logstash server to add it.\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "LogstashMessage",
          "package": "hslogstash",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "data"
        },
        "index": {
          "description": "The Logstash message as described in https github.com logstash logstash wiki logstash s-internal-message-format Please note that it is good practice to forget about the timestamp when creating messages set logstashTime to Nothing as it should be responsability of the Logstash server to add it",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "LogstashMessage",
          "package": "hslogstash",
          "partial": "Logstash Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#t:LogstashMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "LogstashMessage",
          "package": "hslogstash",
          "signature": "LogstashMessage",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "LogstashMessage",
          "package": "hslogstash",
          "partial": "Logstash Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:LogstashMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a tag to a logstash message.\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "addLogstashTag",
          "package": "hslogstash",
          "signature": "Text-\u003e LogstashMessage-\u003e LogstashMessage",
          "type": "function"
        },
        "index": {
          "description": "Adds tag to logstash message",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "addLogstashTag",
          "normalized": "Text-\u003eLogstashMessage-\u003eLogstashMessage",
          "package": "hslogstash",
          "partial": "Logstash Tag",
          "signature": "Text-\u003eLogstashMessage-\u003eLogstashMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:addLogstashTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the current timestamp if it is not provided.\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "addLogstashTime",
          "package": "hslogstash",
          "signature": "LogstashMessage -\u003e IO LogstashMessage",
          "source": "src/Logstash-Message.html#addLogstashTime",
          "type": "function"
        },
        "index": {
          "description": "Adds the current timestamp if it is not provided",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "addLogstashTime",
          "normalized": "LogstashMessage-\u003eIO LogstashMessage",
          "package": "hslogstash",
          "partial": "Logstash Time",
          "signature": "LogstashMessage-\u003eIO LogstashMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:addLogstashTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the name implies, this creates a dummy Logstash message, only\nupdating the message field.\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "emptyLSMessage",
          "package": "hslogstash",
          "signature": "Text -\u003e LogstashMessage",
          "source": "src/Logstash-Message.html#emptyLSMessage",
          "type": "function"
        },
        "index": {
          "description": "As the name implies this creates dummy Logstash message only updating the message field",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "emptyLSMessage",
          "normalized": "Text-\u003eLogstashMessage",
          "package": "hslogstash",
          "partial": "LSMessage",
          "signature": "Text-\u003eLogstashMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:emptyLSMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "logstashContent",
          "package": "hslogstash",
          "signature": "Text",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashContent",
          "package": "hslogstash",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "logstashFields",
          "package": "hslogstash",
          "signature": "Value",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashFields",
          "package": "hslogstash",
          "partial": "Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "logstashSource",
          "package": "hslogstash",
          "signature": "Text",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashSource",
          "package": "hslogstash",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "logstashTags",
          "package": "hslogstash",
          "signature": "[Text]",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashTags",
          "normalized": "[Text]",
          "package": "hslogstash",
          "partial": "Tags",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "logstashTime",
          "package": "hslogstash",
          "signature": "Maybe UTCTime",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashTime",
          "package": "hslogstash",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis formats an UTCTime in what logstash expects\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "logstashTimestamp",
          "package": "hslogstash",
          "signature": "UTCTime -\u003e Text",
          "source": "src/Logstash-Message.html#logstashTimestamp",
          "type": "function"
        },
        "index": {
          "description": "This formats an UTCTime in what logstash expects",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashTimestamp",
          "normalized": "UTCTime-\u003eText",
          "package": "hslogstash",
          "partial": "Timestamp",
          "signature": "UTCTime-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Logstash.Message",
          "name": "logstashType",
          "package": "hslogstash",
          "signature": "Text",
          "source": "src/Logstash-Message.html#LogstashMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "logstashType",
          "package": "hslogstash",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:logstashType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parses the logstash time format.\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "parseLogstashTime",
          "package": "hslogstash",
          "signature": "Text -\u003e Maybe UTCTime",
          "source": "src/Logstash-Message.html#parseLogstashTime",
          "type": "function"
        },
        "index": {
          "description": "This parses the logstash time format",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "parseLogstashTime",
          "normalized": "Text-\u003eMaybe UTCTime",
          "package": "hslogstash",
          "partial": "Logstash Time",
          "signature": "Text-\u003eMaybe UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:parseLogstashTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will try to convert an arbitrary JSON value into\na \u003ca\u003eLogstashMessage\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Logstash.Message",
          "name": "value2logstash",
          "package": "hslogstash",
          "signature": "Value -\u003e Maybe LogstashMessage",
          "source": "src/Logstash-Message.html#value2logstash",
          "type": "function"
        },
        "index": {
          "description": "This will try to convert an arbitrary JSON value into LogstashMessage",
          "hierarchy": "Logstash Message",
          "module": "Logstash.Message",
          "name": "value2logstash",
          "normalized": "Value-\u003eMaybe LogstashMessage",
          "package": "hslogstash",
          "signature": "Value-\u003eMaybe LogstashMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslogstash/docs/Logstash-Message.html#v:value2logstash"
      }
    }
  ]
]