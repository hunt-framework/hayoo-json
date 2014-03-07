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
        "word": "hyena"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module specifies the server configuration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hyena.Config",
          "name": "Config",
          "package": "hyena",
          "source": "src/Hyena-Config.html",
          "type": "module"
        },
        "index": {
          "description": "This module specifies the server configuration",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "Config",
          "package": "hyena",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server configuration.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "Config",
          "package": "hyena",
          "source": "src/Hyena-Config.html#Config",
          "type": "data"
        },
        "index": {
          "description": "The server configuration",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "Config",
          "package": "hyena",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hyena.Config",
          "name": "Config",
          "package": "hyena",
          "signature": "Config",
          "source": "src/Hyena-Config.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "Config",
          "package": "hyena",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddress (hostname or IP) to bind to when listening for\n connections.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "address",
          "package": "hyena",
          "signature": "String",
          "source": "src/Hyena-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Address hostname or IP to bind to when listening for connections",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "address",
          "package": "hyena",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the server options from the command line. Settings from\n \u003ccode\u003e\u003ca\u003edefaultConfig\u003c/a\u003e\u003c/code\u003e is used for unspecified options. Creates missing\n directories as needed for the log file referred to by the \u003ccode\u003e--log\u003c/code\u003e\n flag when in \u003ccode\u003e\u003ca\u003edaemonize\u003c/a\u003e\u003c/code\u003ed mode.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "configFromFlags",
          "package": "hyena",
          "signature": "IO Config",
          "source": "src/Hyena-Config.html#configFromFlags",
          "type": "function"
        },
        "index": {
          "description": "Reads the server options from the command line Settings from defaultConfig is used for unspecified options Creates missing directories as needed for the log file referred to by the log flag when in daemonize mode",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "configFromFlags",
          "package": "hyena",
          "partial": "From Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:configFromFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun in the background.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "daemonize",
          "package": "hyena",
          "signature": "Bool",
          "source": "src/Hyena-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Run in the background",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "daemonize",
          "package": "hyena",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:daemonize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint lots of debug information.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "debug",
          "package": "hyena",
          "signature": "Bool",
          "source": "src/Hyena-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Print lots of debug information",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "debug",
          "package": "hyena",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of default options most users should use. Creates missing\n directories as needed for the default log file when in \u003ccode\u003e\u003ca\u003edaemonize\u003c/a\u003e\u003c/code\u003ed\n mode.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "defaultConfig",
          "package": "hyena",
          "signature": "IO Config",
          "source": "src/Hyena-Config.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "set of default options most users should use Creates missing directories as needed for the default log file when in daemonize mode",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "defaultConfig",
          "package": "hyena",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to dump log messages in daemon mode.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "logHandle",
          "package": "hyena",
          "signature": "Handle",
          "source": "src/Hyena-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Where to dump log messages in daemon mode",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "logHandle",
          "package": "hyena",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:logHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePort to bind to when listening for connections.\n\u003c/p\u003e",
          "module": "Hyena.Config",
          "name": "port",
          "package": "hyena",
          "signature": "Int",
          "source": "src/Hyena-Config.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Port to bind to when listening for connections",
          "hierarchy": "Hyena Config",
          "module": "Hyena.Config",
          "name": "port",
          "package": "hyena",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Config.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore module of the server.  Receives HTTP requests, runs the\n application and sends responses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hyena.Server",
          "name": "Server",
          "package": "hyena",
          "source": "src/Hyena-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Core module of the server Receives HTTP requests runs the application and sends responses",
          "hierarchy": "Hyena Server",
          "module": "Hyena.Server",
          "name": "Server",
          "package": "hyena",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward requests to the given \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e forever.  Read server\n configuration from command line flags.\n\u003c/p\u003e",
          "module": "Hyena.Server",
          "name": "serve",
          "package": "hyena",
          "signature": "Application -\u003e IO ()",
          "source": "src/Hyena-Server.html#serve",
          "type": "function"
        },
        "index": {
          "description": "Forward requests to the given Application forever Read server configuration from command line flags",
          "hierarchy": "Hyena Server",
          "module": "Hyena.Server",
          "name": "serve",
          "normalized": "Application-\u003eIO()",
          "package": "hyena",
          "signature": "Application-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Server.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward requests to the given \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e forever.  Use\n supplied server configuration.\n\u003c/p\u003e",
          "module": "Hyena.Server",
          "name": "serveWithConfig",
          "package": "hyena",
          "signature": "Config -\u003e Application -\u003e IO ()",
          "source": "src/Hyena-Server.html#serveWithConfig",
          "type": "function"
        },
        "index": {
          "description": "Forward requests to the given Application forever Use supplied server configuration",
          "hierarchy": "Hyena Server",
          "module": "Hyena.Server",
          "name": "serveWithConfig",
          "normalized": "Config-\u003eApplication-\u003eIO()",
          "package": "hyena",
          "partial": "With Config",
          "signature": "Config-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Hyena-Server.html#v:serveWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the interface implemented by all web applications.\n\u003c/p\u003e\u003cp\u003eExample application:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE Rank2Types, ImpredicativeTypes #-}\n module Main where\n\u003c/pre\u003e\u003cpre\u003e import qualified Data.ByteString as S\n import qualified Data.ByteString.Char8 as C (pack, unpack)\n import Hyena.Server\n import Network.Wai (Application, Enumerator, pathInfo)\n import System.Directory (getCurrentDirectory)\n import System.FilePath ((\u003c/\u003e), makeRelative)\n import System.IO\n\u003c/pre\u003e\u003cpre\u003e sendFile :: FilePath -\u003e IO Enumerator\n sendFile path = do\n   h \u003c- openBinaryFile path ReadMode\n   let yieldBlock f z = do\n              block \u003c- S.hGetNonBlocking h 1024\n              if S.null block then hClose h \u003e\u003e return z\n                else do\n                  z' \u003c- f z block\n                  case z' of\n                    Left z''  -\u003e hClose h \u003e\u003e return z''\n                    Right z'' -\u003e yieldBlock f z''\n   return yieldBlock\n\u003c/pre\u003e\u003cpre\u003e fileServer :: Application\n fileServer environ = do\n   cwd \u003c- getCurrentDirectory\n   let path = (cwd \u003c/\u003e makeRelative \"/\" (C.unpack $ pathInfo environ))\n   size \u003c- getFileSize path\n   -- Here you should add security checks, etc.\n   let contentType = (C.pack \"Content-Type\",\n                      C.pack \"text/plain\")\n       contentLength = (C.pack \"Content-Length\",\n                        C.pack (show size))\n   enumerator \u003c- sendFile path\n   return (200, C.pack \"OK\", [contentType,contentLength], enumerator)\n\u003c/pre\u003e\u003cpre\u003e getFileSize :: String -\u003e IO Integer\n getFileSize fn = withFile fn ReadMode hFileSize\n\u003c/pre\u003e\u003cpre\u003e main :: IO ()\n main = serve fileServer\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Wai",
          "name": "Wai",
          "package": "hyena",
          "source": "src/Network-Wai.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the interface implemented by all web applications Example application LANGUAGE Rank2Types ImpredicativeTypes module Main where import qualified Data.ByteString as import qualified Data.ByteString.Char8 as pack unpack import Hyena.Server import Network.Wai Application Enumerator pathInfo import System.Directory getCurrentDirectory import System.FilePath makeRelative import System.IO sendFile FilePath IO Enumerator sendFile path do openBinaryFile path ReadMode let yieldBlock do block S.hGetNonBlocking if S.null block then hClose return else do block case of Left hClose return Right yieldBlock return yieldBlock fileServer Application fileServer environ do cwd getCurrentDirectory let path cwd makeRelative C.unpack pathInfo environ size getFileSize path Here you should add security checks etc let contentType C.pack Content-Type C.pack text plain contentLength C.pack Content-Length C.pack show size enumerator sendFile path return C.pack OK contentType contentLength enumerator getFileSize String IO Integer getFileSize fn withFile fn ReadMode hFileSize main IO main serve fileServer",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Wai",
          "package": "hyena",
          "partial": "Wai",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn application takes an environment and returns a HTTP status\n code, a sequence of headers and an \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e containing the\n response body.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Application",
          "package": "hyena",
          "source": "src/Network-Wai.html#Application",
          "type": "type"
        },
        "index": {
          "description": "An application takes an environment and returns HTTP status code sequence of headers and an Enumerator containing the response body",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Application",
          "package": "hyena",
          "partial": "Application",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#t:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left-fold enumerator.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Enumerator",
          "package": "hyena",
          "source": "src/Network-Wai.html#Enumerator",
          "type": "type"
        },
        "index": {
          "description": "left-fold enumerator",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Enumerator",
          "package": "hyena",
          "partial": "Enumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#t:Enumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn environment providing information regarding the request.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Environment",
          "package": "hyena",
          "source": "src/Network-Wai.html#Environment",
          "type": "data"
        },
        "index": {
          "description": "An environment providing information regarding the request",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Environment",
          "package": "hyena",
          "partial": "Environment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#t:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request headers.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Headers",
          "package": "hyena",
          "source": "src/Network-Wai.html#Headers",
          "type": "type"
        },
        "index": {
          "description": "The HTTP request headers",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Headers",
          "package": "hyena",
          "partial": "Headers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request method.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "Method",
          "package": "hyena",
          "source": "src/Network-Wai.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The HTTP request method",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Method",
          "package": "hyena",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Connect",
          "package": "hyena",
          "signature": "Connect",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Connect",
          "package": "hyena",
          "partial": "Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Delete",
          "package": "hyena",
          "signature": "Delete",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Delete",
          "package": "hyena",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Environment",
          "package": "hyena",
          "signature": "Environment",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Environment",
          "package": "hyena",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Get",
          "package": "hyena",
          "signature": "Get",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Get",
          "package": "hyena",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Head",
          "package": "hyena",
          "signature": "Head",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Head",
          "package": "hyena",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Options",
          "package": "hyena",
          "signature": "Options",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Options",
          "package": "hyena",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Post",
          "package": "hyena",
          "signature": "Post",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Post",
          "package": "hyena",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Put",
          "package": "hyena",
          "signature": "Put",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Put",
          "package": "hyena",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai",
          "name": "Trace",
          "package": "hyena",
          "signature": "Trace",
          "source": "src/Network-Wai.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "Trace",
          "package": "hyena",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function with which error output can be written, for the\n purpose of recording program or other errors in a standardized\n and possibly centralized location.  This function will not add\n a trailing newline to the string.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "errors",
          "package": "hyena",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "function with which error output can be written for the purpose of recording program or other errors in standardized and possibly centralized location This function will not add trailing newline to the string",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "errors",
          "normalized": "String-\u003eIO()",
          "package": "hyena",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client-supplied HTTP request headers.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "headers",
          "package": "hyena",
          "signature": "Headers",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "The client-supplied HTTP request headers",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "headers",
          "package": "hyena",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eEnumerator\u003c/a\u003e\u003c/code\u003e from which the HTTP body can be read.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "input",
          "package": "hyena",
          "signature": "Enumerator",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "An Enumerator from which the HTTP body can be read",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "input",
          "package": "hyena",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remainder of the request URL's \"path\", designating the\n virtual \"location\" of the request's target within the\n application.  This may be an empty string, if the request URL\n targets the application root and does not have a trailing\n slash.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "pathInfo",
          "package": "hyena",
          "signature": "ByteString",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "The remainder of the request URL path designating the virtual location of the request target within the application This may be an empty string if the request URL targets the application root and does not have trailing slash",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "pathInfo",
          "package": "hyena",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:pathInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe portion of the request URL that follows the \u003ccode\u003e\"?\"\u003c/code\u003e, if\n any.  May be empty or absent.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "queryString",
          "package": "hyena",
          "signature": "Maybe ByteString",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "The portion of the request URL that follows the if any May be empty or absent",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "queryString",
          "package": "hyena",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:queryString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP request method, such as \"GET\" or \"POST\".\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestMethod",
          "package": "hyena",
          "signature": "Method",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "The HTTP request method such as GET or POST",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestMethod",
          "package": "hyena",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:requestMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the protocol the client used to send the\n request.  Typically this will be \u003ccode\u003e(1, 0)\u003c/code\u003e or \u003ccode\u003e(1, 1)\u003c/code\u003e and may\n be used by the application to determine how to treat any HTTP\n request headers.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "requestProtocol",
          "package": "hyena",
          "signature": "(Int, Int)",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "The version of the protocol the client used to send the request Typically this will be or and may be used by the application to determine how to treat any HTTP request headers",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "requestProtocol",
          "normalized": "(Int,Int)",
          "package": "hyena",
          "partial": "Protocol",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:requestProtocol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial portion of the request URL's \"path\" that\n corresponds to the application, so that the application knows\n its virtual \"location\".  This may be an empty string, if the\n application corresponds to the \"root\" of the server.\n\u003c/p\u003e",
          "module": "Network.Wai",
          "name": "scriptName",
          "package": "hyena",
          "signature": "ByteString",
          "source": "src/Network-Wai.html#Environment",
          "type": "function"
        },
        "index": {
          "description": "The initial portion of the request URL path that corresponds to the application so that the application knows its virtual location This may be an empty string if the application corresponds to the root of the server",
          "hierarchy": "Network Wai",
          "module": "Network.Wai",
          "name": "scriptName",
          "package": "hyena",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyena/docs/Network-Wai.html#v:scriptName"
      }
    }
  ]
]