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
        "word": "wai-logger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApache style logger for WAI applications.\n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE OverloadedStrings #-}\n module Main where\n\n import Blaze.ByteString.Builder (fromByteString)\n import Control.Monad.IO.Class (liftIO)\n import qualified Data.ByteString.Char8 as BS\n import Network.HTTP.Types (status200)\n import Network.Wai (Application, responseBuilder)\n import Network.Wai.Handler.Warp (run)\n import Network.Wai.Logger (withStdoutLogger, ApacheLogger)\n\n main :: IO ()\n main = withStdoutLogger $ \\aplogger -\u003e\n     run 3000 $ logApp aplogger\n\n logApp :: ApacheLogger -\u003e Application\n logApp aplogger req = do\n     liftIO $ aplogger req status (Just len)\n     return $ responseBuilder status hdr msg\n   where\n     status = status200\n     hdr = [(\"Content-Type\", \"text/plain\")\n           ,(\"Content-Length\", BS.pack (show len))]\n     pong = \"PONG\"\n     len = fromIntegral $ BS.length pong\n     msg = toLogStr pong\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Wai.Logger",
          "name": "Logger",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger.html",
          "type": "module"
        },
        "index": {
          "description": "Apache style logger for WAI applications An example LANGUAGE OverloadedStrings module Main where import Blaze.ByteString.Builder fromByteString import Control.Monad.IO.Class liftIO import qualified Data.ByteString.Char8 as BS import Network.HTTP.Types status200 import Network.Wai Application responseBuilder import Network.Wai.Handler.Warp run import Network.Wai.Logger withStdoutLogger ApacheLogger main IO main withStdoutLogger aplogger run logApp aplogger logApp ApacheLogger Application logApp aplogger req do liftIO aplogger req status Just len return responseBuilder status hdr msg where status status200 hdr Content-Type text plain Content-Length BS.pack show len pong PONG len fromIntegral BS.length pong msg toLogStr pong",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "Logger",
          "package": "wai-logger",
          "partial": "Logger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApache style logger.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "ApacheLogger",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger.html#ApacheLogger",
          "type": "type"
        },
        "index": {
          "description": "Apache style logger",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "ApacheLogger",
          "package": "wai-logger",
          "partial": "Apache Logger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:ApacheLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "ApacheLoggerActions",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "ApacheLoggerActions",
          "package": "wai-logger",
          "partial": "Apache Logger Actions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:ApacheLoggerActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting cached \u003ccode\u003e\u003ca\u003eZonedDate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "DateCacheGetter",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger-Date.html#DateCacheGetter",
          "type": "type"
        },
        "index": {
          "description": "Getting cached ZonedDate",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "DateCacheGetter",
          "package": "wai-logger",
          "partial": "Date Cache Getter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:DateCacheGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdateing cached \u003ccode\u003e\u003ca\u003eZonedDate\u003c/a\u003e\u003c/code\u003e. This should be called every second.\n   See the source code of \u003ccode\u003ewithStdoutLogger\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "DateCacheUpdater",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger-Date.html#DateCacheUpdater",
          "type": "type"
        },
        "index": {
          "description": "Updateing cached ZonedDate This should be called every second See the source code of withStdoutLogger",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "DateCacheUpdater",
          "package": "wai-logger",
          "partial": "Date Cache Updater",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:DateCacheUpdater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe spec for logging files\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "FileLogSpec",
          "package": "wai-logger",
          "type": "data"
        },
        "index": {
          "description": "The spec for logging files",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "FileLogSpec",
          "package": "wai-logger",
          "partial": "File Log Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:FileLogSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSource from which the IP source address of the client is obtained.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "IPAddrSource",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
          "type": "data"
        },
        "index": {
          "description": "Source from which the IP source address of the client is obtained",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "IPAddrSource",
          "package": "wai-logger",
          "partial": "IPAddr Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:IPAddrSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogger Type.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "LogType",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger.html#LogType",
          "type": "data"
        },
        "index": {
          "description": "Logger Type",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "LogType",
          "package": "wai-logger",
          "partial": "Log Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:LogType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for zoned date.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "ZonedDate",
          "package": "wai-logger",
          "source": "src/Network-Wai-Logger-Date.html#ZonedDate",
          "type": "type"
        },
        "index": {
          "description": "type for zoned date",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "ZonedDate",
          "package": "wai-logger",
          "partial": "Zoned Date",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#t:ZonedDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "ApacheLoggerActions",
          "package": "wai-logger",
          "signature": "ApacheLoggerActions",
          "source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "ApacheLoggerActions",
          "package": "wai-logger",
          "partial": "Apache Logger Actions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:ApacheLoggerActions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "FileLogSpec",
          "package": "wai-logger",
          "signature": "FileLogSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "FileLogSpec",
          "package": "wai-logger",
          "partial": "File Log Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FileLogSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom the peer address if header is not found.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "FromFallback",
          "package": "wai-logger",
          "signature": "FromFallback",
          "source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
          "type": "function"
        },
        "index": {
          "description": "From the peer address if header is not found",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "FromFallback",
          "package": "wai-logger",
          "partial": "From Fallback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FromFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom X-Real-IP: or X-Forwarded-For: in the HTTP header.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "FromHeader",
          "package": "wai-logger",
          "signature": "FromHeader",
          "source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
          "type": "function"
        },
        "index": {
          "description": "From X-Real-IP or X-Forwarded-For in the HTTP header",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "FromHeader",
          "package": "wai-logger",
          "partial": "From Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FromHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrom the peer address of the HTTP connection.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "FromSocket",
          "package": "wai-logger",
          "signature": "FromSocket",
          "source": "src/Network-Wai-Logger-Apache.html#IPAddrSource",
          "type": "function"
        },
        "index": {
          "description": "From the peer address of the HTTP connection",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "FromSocket",
          "package": "wai-logger",
          "partial": "From Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:FromSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "LogCallback",
          "package": "wai-logger",
          "signature": "LogCallback (LogStr -\u003e IO ()) (IO ())",
          "source": "src/Network-Wai-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "LogCallback",
          "normalized": "LogCallback(LogStr-\u003eIO())(IO())",
          "package": "wai-logger",
          "partial": "Log Callback",
          "signature": "LogCallback(LogStr-\u003eIO())(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging to a file.\n   \u003ccode\u003e\u003ca\u003eBufSize\u003c/a\u003e\u003c/code\u003e is a buffer size\n   for each capability.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "LogFile",
          "package": "wai-logger",
          "signature": "LogFile FileLogSpec BufSize",
          "source": "src/Network-Wai-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "description": "Logging to file BufSize is buffer size for each capability",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "LogFile",
          "package": "wai-logger",
          "partial": "Log File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo logging.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "LogNone",
          "package": "wai-logger",
          "signature": "LogNone",
          "source": "src/Network-Wai-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "description": "No logging",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "LogNone",
          "package": "wai-logger",
          "partial": "Log None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogging to stdout.\n   \u003ccode\u003e\u003ca\u003eBufSize\u003c/a\u003e\u003c/code\u003e is a buffer size\n   for each capability.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "LogStdout",
          "package": "wai-logger",
          "signature": "LogStdout BufSize",
          "source": "src/Network-Wai-Logger.html#LogType",
          "type": "function"
        },
        "index": {
          "description": "Logging to stdout BufSize is buffer size for each capability",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "LogStdout",
          "package": "wai-logger",
          "partial": "Log Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:LogStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "apacheLogger",
          "package": "wai-logger",
          "signature": "ApacheLogger",
          "source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "apacheLogger",
          "package": "wai-logger",
          "partial": "Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:apacheLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturning \u003ccode\u003e\u003ca\u003eDateCacheGetter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDateCacheUpdater\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "clockDateCacher",
          "package": "wai-logger",
          "signature": "IO (DateCacheGetter, DateCacheUpdater)",
          "source": "src/Network-Wai-Logger-Date.html#clockDateCacher",
          "type": "function"
        },
        "index": {
          "description": "Returning DateCacheGetter and DateCacheUpdater",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "clockDateCacher",
          "normalized": "IO(DateCacheGetter,DateCacheUpdater)",
          "package": "wai-logger",
          "partial": "Date Cacher",
          "signature": "IO(DateCacheGetter,DateCacheUpdater)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:clockDateCacher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating \u003ccode\u003e\u003ca\u003eApacheLogger\u003c/a\u003e\u003c/code\u003e according to \u003ccode\u003e\u003ca\u003eLogType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "initLogger",
          "package": "wai-logger",
          "signature": "IPAddrSource -\u003e LogType -\u003e DateCacheGetter -\u003e IO ApacheLoggerActions",
          "source": "src/Network-Wai-Logger.html#initLogger",
          "type": "function"
        },
        "index": {
          "description": "Creating ApacheLogger according to LogType",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "initLogger",
          "normalized": "IPAddrSource-\u003eLogType-\u003eDateCacheGetter-\u003eIO ApacheLoggerActions",
          "package": "wai-logger",
          "partial": "Logger",
          "signature": "IPAddrSource-\u003eLogType-\u003eDateCacheGetter-\u003eIO ApacheLoggerActions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:initLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecking if a log file can be written if \u003ccode\u003e\u003ca\u003eLogType\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eLogFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "logCheck",
          "package": "wai-logger",
          "signature": "LogType -\u003e IO ()",
          "source": "src/Network-Wai-Logger.html#logCheck",
          "type": "function"
        },
        "index": {
          "description": "Checking if log file can be written if LogType is LogFile",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "logCheck",
          "normalized": "LogType-\u003eIO()",
          "package": "wai-logger",
          "partial": "Check",
          "signature": "LogType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlushing log messages in the buffers.\n   This is explicitly called from your program.\n   Probably, one second and 10 seconds is proper to stdout and\n   log files, respectively.\n   See the source code of \u003ccode\u003e\u003ca\u003ewithStdoutLogger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "logFlusher",
          "package": "wai-logger",
          "signature": "IO ()",
          "source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
          "type": "function"
        },
        "index": {
          "description": "Flushing log messages in the buffers This is explicitly called from your program Probably one second and seconds is proper to stdout and log files respectively See the source code of withStdoutLogger",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "logFlusher",
          "normalized": "IO()",
          "package": "wai-logger",
          "partial": "Flusher",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logFlusher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoving resources relating Apache logger.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "logRemover",
          "package": "wai-logger",
          "signature": "IO ()",
          "source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
          "type": "function"
        },
        "index": {
          "description": "Removing resources relating Apache logger",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "logRemover",
          "normalized": "IO()",
          "package": "wai-logger",
          "partial": "Remover",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logRemover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotating log files.\n   This is explicitly called from your program.\n   Probably, 10 seconds is proper.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "logRotator",
          "package": "wai-logger",
          "signature": "IO ()",
          "source": "src/Network-Wai-Logger.html#ApacheLoggerActions",
          "type": "function"
        },
        "index": {
          "description": "Rotating log files This is explicitly called from your program Probably seconds is proper",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "logRotator",
          "normalized": "IO()",
          "package": "wai-logger",
          "partial": "Rotator",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:logRotator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "log_backup_number",
          "package": "wai-logger",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "log_backup_number",
          "package": "wai-logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:log_backup_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "log_file",
          "package": "wai-logger",
          "signature": "FilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "log_file",
          "package": "wai-logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:log_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Logger",
          "name": "log_file_size",
          "package": "wai-logger",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "log_file_size",
          "package": "wai-logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:log_file_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eSockAddr\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eNumericAddress\u003c/code\u003e. If the address is\n   IPv4-embedded IPv6 address, the IPv4 is extracted.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "showSockAddr",
          "package": "wai-logger",
          "signature": "SockAddr -\u003e NumericAddress",
          "source": "src/Network-Wai-Logger-IP.html#showSockAddr",
          "type": "function"
        },
        "index": {
          "description": "Convert SockAddr to NumericAddress If the address is IPv4-embedded IPv6 address the IPv4 is extracted",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "showSockAddr",
          "normalized": "SockAddr-\u003eNumericAddress",
          "package": "wai-logger",
          "partial": "Sock Addr",
          "signature": "SockAddr-\u003eNumericAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:showSockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecuting a function which takes \u003ccode\u003e\u003ca\u003eApacheLogger\u003c/a\u003e\u003c/code\u003e.\n   This \u003ccode\u003e\u003ca\u003eApacheLogger\u003c/a\u003e\u003c/code\u003e writes log message to stdout.\n   Each buffer (4K bytes) is flushed every second.\n\u003c/p\u003e",
          "module": "Network.Wai.Logger",
          "name": "withStdoutLogger",
          "package": "wai-logger",
          "signature": "(ApacheLogger -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Wai-Logger.html#withStdoutLogger",
          "type": "function"
        },
        "index": {
          "description": "Executing function which takes ApacheLogger This ApacheLogger writes log message to stdout Each buffer bytes is flushed every second",
          "hierarchy": "Network Wai Logger",
          "module": "Network.Wai.Logger",
          "name": "withStdoutLogger",
          "normalized": "(ApacheLogger-\u003eIO a)-\u003eIO a",
          "package": "wai-logger",
          "partial": "Stdout Logger",
          "signature": "(ApacheLogger-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-logger/docs/Network-Wai-Logger.html#v:withStdoutLogger"
      }
    }
  ]
]