[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApache style logger for WAI applications.\n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n module Main where\n\n import Blaze.ByteString.Builder (fromByteString)\n import Control.Monad.IO.Class (liftIO)\n import qualified Data.ByteString.Char8 as BS\n import Network.HTTP.Types (status200)\n import Network.Wai (Application, responseBuilder)\n import Network.Wai.Handler.Warp (run)\n import Network.Wai.Logger (withStdoutLogger, ApacheLogger)\n\n main :: IO ()\n main = withStdoutLogger $ \\aplogger -\u003e\n     run 3000 $ logApp aplogger\n\n logApp :: ApacheLogger -\u003e Application\n logApp aplogger req = do\n     liftIO $ aplogger req status (Just len)\n     return $ responseBuilder status hdr msg\n   where\n     status = status200\n     hdr = [(\"Content-Type\", \"text/plain\")\n           ,(\"Content-Length\", BS.pack (show len))]\n     pong = \"PONG\"\n     len = fromIntegral $ BS.length pong\n     msg = toLogStr pong\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Logger.html",
        "fct-type": "module",
        "title": "Logger"
      },
      "index": {
        "description": "Apache style logger for WAI applications An example LANGUAGE OverloadedStrings module Main where import Blaze.ByteString.Builder fromByteString import Control.Monad.IO.Class liftIO import qualified Data.ByteString.Char8 as BS import Network.HTTP.Types status200 import Network.Wai Application responseBuilder import Network.Wai.Handler.Warp run import Network.Wai.Logger withStdoutLogger ApacheLogger main IO main withStdoutLogger aplogger run logApp aplogger logApp ApacheLogger Application logApp aplogger req do liftIO aplogger req status Just len return responseBuilder status hdr msg where status status200 hdr Content-Type text plain Content-Length BS.pack show len pong PONG len fromIntegral BS.length pong msg toLogStr pong",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:ApacheLogger",
      "description": {
        "fct-descr": "\u003cp\u003eApache style logger.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLogger",
        "fct-type": "type",
        "title": "ApacheLogger"
      },
      "index": {
        "description": "Apache style logger",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "ApacheLogger",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Apache Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:ApacheLoggerActions",
      "description": {
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
        "fct-type": "data",
        "title": "ApacheLoggerActions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "ApacheLoggerActions",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Apache Logger Actions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:DateCacheGetter",
      "description": {
        "fct-descr": "\u003cp\u003eGetting cached \u003ccode\u003e\u003ca\u003eZonedDate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Logger-Date.html#DateCacheGetter",
        "fct-type": "type",
        "title": "DateCacheGetter"
      },
      "index": {
        "description": "Getting cached ZonedDate",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "DateCacheGetter",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Date Cache Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:DateCacheUpdater",
      "description": {
        "fct-descr": "\u003cp\u003eUpdateing cached \u003ccode\u003e\u003ca\u003eZonedDate\u003c/a\u003e\u003c/code\u003e. This should be called every second.\n   See the source code of \u003ccode\u003ewithStdoutLogger\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Logger-Date.html#DateCacheUpdater",
        "fct-type": "type",
        "title": "DateCacheUpdater"
      },
      "index": {
        "description": "Updateing cached ZonedDate This should be called every second See the source code of withStdoutLogger",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "DateCacheUpdater",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Date Cache Updater",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:FileLogSpec",
      "description": {
        "fct-descr": "\u003cp\u003eThe spec for logging files\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "FileLogSpec"
      },
      "index": {
        "description": "The spec for logging files",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "FileLogSpec",
        "normalized": "",
        "package": "wai-logger",
        "partial": "File Log Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:IPAddrSource",
      "description": {
        "fct-descr": "\u003cp\u003eSource from which the IP source address of the client is obtained.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
        "fct-type": "data",
        "title": "IPAddrSource"
      },
      "index": {
        "description": "Source from which the IP source address of the client is obtained",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "IPAddrSource",
        "normalized": "",
        "package": "wai-logger",
        "partial": "IPAddr Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:LogType",
      "description": {
        "fct-descr": "\u003cp\u003eLogger Type.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Logger.html#LogType",
        "fct-type": "data",
        "title": "LogType"
      },
      "index": {
        "description": "Logger Type",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "LogType",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Log Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:ZonedDate",
      "description": {
        "fct-descr": "\u003cp\u003eA type for zoned date.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Logger-Date.html#ZonedDate",
        "fct-type": "type",
        "title": "ZonedDate"
      },
      "index": {
        "description": "type for zoned date",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "ZonedDate",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Zoned Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:ApacheLoggerActions",
      "description": {
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "ApacheLoggerActions",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
        "fct-type": "function",
        "title": "ApacheLoggerActions"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "ApacheLoggerActions",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Apache Logger Actions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FileLogSpec",
      "description": {
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "FileLogSpec",
        "fct-type": "function",
        "title": "FileLogSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "FileLogSpec",
        "normalized": "",
        "package": "wai-logger",
        "partial": "File Log Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FromFallback",
      "description": {
        "fct-descr": "\u003cp\u003eFrom the peer address if header is not found.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "FromFallback",
        "fct-source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
        "fct-type": "function",
        "title": "FromFallback"
      },
      "index": {
        "description": "From the peer address if header is not found",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "FromFallback",
        "normalized": "",
        "package": "wai-logger",
        "partial": "From Fallback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FromHeader",
      "description": {
        "fct-descr": "\u003cp\u003eFrom X-Real-IP: or X-Forwarded-For: in the HTTP header.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "FromHeader",
        "fct-source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
        "fct-type": "function",
        "title": "FromHeader"
      },
      "index": {
        "description": "From X-Real-IP or X-Forwarded-For in the HTTP header",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "FromHeader",
        "normalized": "",
        "package": "wai-logger",
        "partial": "From Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FromSocket",
      "description": {
        "fct-descr": "\u003cp\u003eFrom the peer address of the HTTP connection.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "FromSocket",
        "fct-source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
        "fct-type": "function",
        "title": "FromSocket"
      },
      "index": {
        "description": "From the peer address of the HTTP connection",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "FromSocket",
        "normalized": "",
        "package": "wai-logger",
        "partial": "From Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogCallback",
      "description": {
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "LogCallback (LogStr -\u003e IO ()) (IO ())",
        "fct-source": "src/Network-Wai-Logger.html#LogType",
        "fct-type": "function",
        "title": "LogCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "LogCallback",
        "normalized": "LogCallback(LogStr-\u003eIO())(IO())",
        "package": "wai-logger",
        "partial": "Log Callback",
        "signature": "LogCallback(LogStr-\u003eIO())(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogFile",
      "description": {
        "fct-descr": "\u003cp\u003eLogging to a file.\n   \u003ccode\u003e\u003ca\u003eBufSize\u003c/a\u003e\u003c/code\u003e is a buffer size\n   for each capability.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "LogFile FileLogSpec BufSize",
        "fct-source": "src/Network-Wai-Logger.html#LogType",
        "fct-type": "function",
        "title": "LogFile"
      },
      "index": {
        "description": "Logging to file BufSize is buffer size for each capability",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "LogFile",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Log File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogNone",
      "description": {
        "fct-descr": "\u003cp\u003eNo logging.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "LogNone",
        "fct-source": "src/Network-Wai-Logger.html#LogType",
        "fct-type": "function",
        "title": "LogNone"
      },
      "index": {
        "description": "No logging",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "LogNone",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Log None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogStdout",
      "description": {
        "fct-descr": "\u003cp\u003eLogging to stdout.\n   \u003ccode\u003e\u003ca\u003eBufSize\u003c/a\u003e\u003c/code\u003e is a buffer size\n   for each capability.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "LogStdout BufSize",
        "fct-source": "src/Network-Wai-Logger.html#LogType",
        "fct-type": "function",
        "title": "LogStdout"
      },
      "index": {
        "description": "Logging to stdout BufSize is buffer size for each capability",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "LogStdout",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Log Stdout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:apacheLogger",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "ApacheLogger",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
        "fct-type": "function",
        "title": "apacheLogger"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "apacheLogger",
        "normalized": "",
        "package": "wai-logger",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:clockDateCacher",
      "description": {
        "fct-descr": "\u003cp\u003eReturning \u003ccode\u003e\u003ca\u003eDateCacheGetter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDateCacheUpdater\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "IO (DateCacheGetter, DateCacheUpdater)",
        "fct-source": "src/Network-Wai-Logger-Date.html#clockDateCacher",
        "fct-type": "function",
        "title": "clockDateCacher"
      },
      "index": {
        "description": "Returning DateCacheGetter and DateCacheUpdater",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "clockDateCacher",
        "normalized": "IO(DateCacheGetter,DateCacheUpdater)",
        "package": "wai-logger",
        "partial": "Date Cacher",
        "signature": "IO(DateCacheGetter,DateCacheUpdater)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:initLogger",
      "description": {
        "fct-descr": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eApacheLogger\u003c/a\u003e\u003c/code\u003e according to \u003ccode\u003e\u003ca\u003eLogType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "IPAddrSource -\u003e LogType -\u003e DateCacheGetter -\u003e IO ApacheLoggerActions",
        "fct-source": "src/Network-Wai-Logger.html#initLogger",
        "fct-type": "function",
        "title": "initLogger"
      },
      "index": {
        "description": "Creating ApacheLogger according to LogType",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "initLogger",
        "normalized": "IPAddrSource-\u003eLogType-\u003eDateCacheGetter-\u003eIO ApacheLoggerActions",
        "package": "wai-logger",
        "partial": "Logger",
        "signature": "IPAddrSource-\u003eLogType-\u003eDateCacheGetter-\u003eIO ApacheLoggerActions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logCheck",
      "description": {
        "fct-descr": "\u003cp\u003eChecking if a log file can be written if \u003ccode\u003e\u003ca\u003eLogType\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eLogFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "LogType -\u003e IO ()",
        "fct-source": "src/Network-Wai-Logger.html#logCheck",
        "fct-type": "function",
        "title": "logCheck"
      },
      "index": {
        "description": "Checking if log file can be written if LogType is LogFile",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "logCheck",
        "normalized": "LogType-\u003eIO()",
        "package": "wai-logger",
        "partial": "Check",
        "signature": "LogType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logFlusher",
      "description": {
        "fct-descr": "\u003cp\u003eFlushing log messages in the buffers.\n   This is explicitly called from your program.\n   Probably, one second and 10 seconds is proper to stdout and\n   log files, respectively.\n   See the source code of \u003ccode\u003e\u003ca\u003ewithStdoutLogger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
        "fct-type": "function",
        "title": "logFlusher"
      },
      "index": {
        "description": "Flushing log messages in the buffers This is explicitly called from your program Probably one second and seconds is proper to stdout and log files respectively See the source code of withStdoutLogger",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "logFlusher",
        "normalized": "IO()",
        "package": "wai-logger",
        "partial": "Flusher",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logRemover",
      "description": {
        "fct-descr": "\u003cp\u003eRemoving resources relating Apache logger.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
        "fct-type": "function",
        "title": "logRemover"
      },
      "index": {
        "description": "Removing resources relating Apache logger",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "logRemover",
        "normalized": "IO()",
        "package": "wai-logger",
        "partial": "Remover",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logRotator",
      "description": {
        "fct-descr": "\u003cp\u003eRotating log files.\n   This is explicitly called from your program.\n   Probably, 10 seconds is proper.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
        "fct-type": "function",
        "title": "logRotator"
      },
      "index": {
        "description": "Rotating log files This is explicitly called from your program Probably seconds is proper",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "logRotator",
        "normalized": "IO()",
        "package": "wai-logger",
        "partial": "Rotator",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:log_backup_number",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "log_backup_number"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "log_backup_number",
        "normalized": "",
        "package": "wai-logger",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:log_file",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "FilePath",
        "fct-type": "function",
        "title": "log_file"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "log_file",
        "normalized": "",
        "package": "wai-logger",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:log_file_size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "Integer",
        "fct-type": "function",
        "title": "log_file_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "log_file_size",
        "normalized": "",
        "package": "wai-logger",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:showSockAddr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eNumericAddress\u003c/code\u003e. If the address is\n   IPv4-embedded IPv6 address, the IPv4 is extracted.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "SockAddr -\u003e NumericAddress",
        "fct-source": "src/Network-Wai-Logger-IP.html#showSockAddr",
        "fct-type": "function",
        "title": "showSockAddr"
      },
      "index": {
        "description": "Convert SockAddr to NumericAddress If the address is IPv4-embedded IPv6 address the IPv4 is extracted",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "showSockAddr",
        "normalized": "SockAddr-\u003eNumericAddress",
        "package": "wai-logger",
        "partial": "Sock Addr",
        "signature": "SockAddr-\u003eNumericAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:withStdoutLogger",
      "description": {
        "fct-descr": "\u003cp\u003eExecuting a function which takes \u003ccode\u003e\u003ca\u003eApacheLogger\u003c/a\u003e\u003c/code\u003e.\n   This \u003ccode\u003e\u003ca\u003eApacheLogger\u003c/a\u003e\u003c/code\u003e writes log message to stdout.\n   Each buffer (4K bytes) is flushed every second.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Logger",
        "fct-package": "wai-logger",
        "fct-signature": "(ApacheLogger -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Wai-Logger.html#withStdoutLogger",
        "fct-type": "function",
        "title": "withStdoutLogger"
      },
      "index": {
        "description": "Executing function which takes ApacheLogger This ApacheLogger writes log message to stdout Each buffer bytes is flushed every second",
        "hierarchy": "Network Wai Logger",
        "module": "Network.Wai.Logger",
        "name": "withStdoutLogger",
        "normalized": "(ApacheLogger-\u003eIO a)-\u003eIO a",
        "package": "wai-logger",
        "partial": "Stdout Logger",
        "signature": "(ApacheLogger-\u003eIO a)-\u003eIO a"
      }
    }
  }
]