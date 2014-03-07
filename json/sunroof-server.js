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
        "word": "sunroof-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Sunroof server module provides infrastructure to use\n   Sunroof together with kansas-comet.\n\u003c/p\u003e\u003cp\u003eIt supports setting up a simple server with \u003ccode\u003e\u003ca\u003esunroofServer\u003c/a\u003e\u003c/code\u003e\n   and provides basic functions for serverside communication\n   with the connected website (\u003ccode\u003e\u003ca\u003esyncJS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easyncJS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ersyncJS\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis module also provides the abstractions for \u003ccode\u003e\u003ca\u003eDownlink\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eUplink\u003c/a\u003e\u003c/code\u003e. They represent directed channels for sending data\n   from the server to the website and the other way aroun.\n   The sent data is queued and operations block properly if there\n   is no data available.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Server",
          "name": "Server",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html",
          "type": "module"
        },
        "index": {
          "description": "The Sunroof server module provides infrastructure to use Sunroof together with kansas-comet It supports setting up simple server with sunroofServer and provides basic functions for serverside communication with the connected website syncJS asyncJS and rsyncJS This module also provides the abstractions for Downlink and Uplink They represent directed channels for sending data from the server to the website and the other way aroun The sent data is queued and operations block properly if there is no data available",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "Server",
          "package": "sunroof-server",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDownlink\u003c/a\u003e\u003c/code\u003es are an abstraction provided for sending\n   Javascript data from the server to the website.\n   The type parameter describes the elements\n   that are transmited through the downlink.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "Downlink",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#Downlink",
          "type": "data"
        },
        "index": {
          "description": "Downlink are an abstraction provided for sending Javascript data from the server to the website The type parameter describes the elements that are transmited through the downlink",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "Downlink",
          "package": "sunroof-server",
          "partial": "Downlink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:Downlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comet application takes the engine/document we are currently communicating\n   with and delivers the IO action to be executed as server application.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "SunroofApp",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#SunroofApp",
          "type": "type"
        },
        "index": {
          "description": "comet application takes the engine document we are currently communicating with and delivers the IO action to be executed as server application",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "SunroofApp",
          "package": "sunroof-server",
          "partial": "Sunroof App",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e provides the verbosity level and\n   kansas comet document to the \u003ccode\u003e\u003ca\u003eSunroofApp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "SunroofEngine",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "data"
        },
        "index": {
          "description": "The SunroofEngine provides the verbosity level and kansas comet document to the SunroofApp",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "SunroofEngine",
          "package": "sunroof-server",
          "partial": "Sunroof Engine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides correspondant Haskell types for certain Sunroof types.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "SunroofResult",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#SunroofResult",
          "type": "class"
        },
        "index": {
          "description": "Provides correspondant Haskell types for certain Sunroof types",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "SunroofResult",
          "package": "sunroof-server",
          "partial": "Sunroof Result",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e specify the configuration of the\n   sunroof comet server infrastructure.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esunroofServer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e for further information.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "SunroofServerOptions",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "data"
        },
        "index": {
          "description": "The SunroofServerOptions specify the configuration of the sunroof comet server infrastructure See sunroofServer and SunroofServerOptions for further information",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "SunroofServerOptions",
          "package": "sunroof-server",
          "partial": "Sunroof Server Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimings for communication and compilation.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "Timings",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#Timings",
          "type": "data"
        },
        "index": {
          "description": "Timings for communication and compilation",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "Timings",
          "package": "sunroof-server",
          "partial": "Timings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:Timings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUplink\u003c/a\u003e\u003c/code\u003es are an abstraction provided for sending\n   Javascript data from the website back to the server.\n   Only data that can be translated back to a Haskell\n   value can be sent back.\n   The type parameter describes the elements\n   that are transmited through the uplink.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "Uplink",
          "package": "sunroof-server",
          "source": "src/Language-Sunroof-Server.html#Uplink",
          "type": "data"
        },
        "index": {
          "description": "Uplink are an abstraction provided for sending Javascript data from the website back to the server Only data that can be translated back to Haskell value can be sent back The type parameter describes the elements that are transmited through the uplink",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "Uplink",
          "package": "sunroof-server",
          "partial": "Uplink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:Uplink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Server",
          "name": "SunroofEngine",
          "package": "sunroof-server",
          "signature": "SunroofEngine",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "SunroofEngine",
          "package": "sunroof-server",
          "partial": "Sunroof Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:SunroofEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Server",
          "name": "SunroofServerOptions",
          "package": "sunroof-server",
          "signature": "SunroofServerOptions",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "SunroofServerOptions",
          "package": "sunroof-server",
          "partial": "Sunroof Server Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:SunroofServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Server",
          "name": "Timings",
          "package": "sunroof-server",
          "signature": "Timings",
          "source": "src/Language-Sunroof-Server.html#Timings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "Timings",
          "package": "sunroof-server",
          "partial": "Timings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:Timings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the Javascript in the browser without waiting for a result.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "asyncJS",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e JS t () -\u003e IO ()",
          "source": "src/Language-Sunroof-Server.html#asyncJS",
          "type": "function"
        },
        "index": {
          "description": "Executes the Javascript in the browser without waiting for result",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "asyncJS",
          "normalized": "SunroofEngine-\u003eJS a()-\u003eIO()",
          "package": "sunroof-server",
          "partial": "JS",
          "signature": "SunroofEngine-\u003eJS t()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:asyncJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document comet uses to manage the connected website.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "cometDocument",
          "package": "sunroof-server",
          "signature": "Document",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "function"
        },
        "index": {
          "description": "The document comet uses to manage the connected website",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "cometDocument",
          "package": "sunroof-server",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file to be used as index file (or landing page).\n   This path is given relative to the \u003ccode\u003e\u003ca\u003ecometResourceBaseDir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "cometIndexFile",
          "package": "sunroof-server",
          "signature": "FilePath",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "The file to be used as index file or landing page This path is given relative to the cometResourceBaseDir",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "cometIndexFile",
          "package": "sunroof-server",
          "partial": "Index File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometIndexFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides the kansas comet options to use.\n   Default options are provided with the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "cometOptions",
          "package": "sunroof-server",
          "signature": "Options",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Provides the kansas comet options to use Default options are provided with the def instance",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "cometOptions",
          "package": "sunroof-server",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default policy is to allow the \u003ccode\u003ecss\u003c/code\u003e, \u003ccode\u003eimg\u003c/code\u003e and \u003ccode\u003ejs\u003c/code\u003e\n folders to be used by the server, as well as the noDots policy.\n  This policy can be overwritten to allow delivery of other files.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "cometPolicy",
          "package": "sunroof-server",
          "signature": "Policy",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "The default policy is to allow the css img and js folders to be used by the server as well as the noDots policy This policy can be overwritten to allow delivery of other files",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "cometPolicy",
          "package": "sunroof-server",
          "partial": "Policy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe port the server is reachable from.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "cometPort",
          "package": "sunroof-server",
          "signature": "Port",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "The port the server is reachable from",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "cometPort",
          "package": "sunroof-server",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill be used as base directory to search for all static files.\n Make this path absolute to run the server from anywhere.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "cometResourceBaseDir",
          "package": "sunroof-server",
          "signature": "FilePath",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Will be used as base directory to search for all static files Make this path absolute to run the server from anywhere",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "cometResourceBaseDir",
          "package": "sunroof-server",
          "partial": "Resource Base Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometResourceBaseDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long spent compiling.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "compileTime",
          "package": "sunroof-server",
          "signature": "a",
          "source": "src/Language-Sunroof-Server.html#Timings",
          "type": "function"
        },
        "index": {
          "description": "How long spent compiling",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "compileTime",
          "package": "sunroof-server",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:compileTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe options used to setup the compiler.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "compilerOpts",
          "package": "sunroof-server",
          "signature": "CompilerOpts",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "function"
        },
        "index": {
          "description": "The options used to setup the compiler",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "compilerOpts",
          "package": "sunroof-server",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:compilerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetup a \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e for debugging.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "debugSunroofEngine",
          "package": "sunroof-server",
          "signature": "IO SunroofEngine",
          "source": "src/Language-Sunroof-Server.html#debugSunroofEngine",
          "type": "function"
        },
        "index": {
          "description": "Setup SunroofEngine for debugging",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "debugSunroofEngine",
          "package": "sunroof-server",
          "partial": "Sunroof Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:debugSunroofEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e0\u003c/code\u003e for none, \u003ccode\u003e1\u003c/code\u003e for initializations,\n   \u003ccode\u003e2\u003c/code\u003e for commands done and \u003ccode\u003e3\u003c/code\u003e for a complete log.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "engineVerbose",
          "package": "sunroof-server",
          "signature": "Int",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "function"
        },
        "index": {
          "description": "for none for initializations for commands done and for complete log",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "engineVerbose",
          "package": "sunroof-server",
          "partial": "Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:engineVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest data in the downlink. This may block until\n   data is available.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "getDownlink",
          "package": "sunroof-server",
          "signature": "Downlink a -\u003e JSB a",
          "source": "src/Language-Sunroof-Server.html#getDownlink",
          "type": "function"
        },
        "index": {
          "description": "Request data in the downlink This may block until data is available",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "getDownlink",
          "normalized": "Downlink a-\u003eJSB a",
          "package": "sunroof-server",
          "partial": "Downlink",
          "signature": "Downlink a-\u003eJSB a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:getDownlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet timings from the \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "getTimings",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e IO (Timings NominalDiffTime)",
          "source": "src/Language-Sunroof-Server.html#getTimings",
          "type": "function"
        },
        "index": {
          "description": "Get timings from the SunroofEngine",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "getTimings",
          "normalized": "SunroofEngine-\u003eIO(Timings NominalDiffTime)",
          "package": "sunroof-server",
          "partial": "Timings",
          "signature": "SunroofEngine-\u003eIO(Timings NominalDiffTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:getTimings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest data in the uplink. This may block until\n   data is available.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "getUplink",
          "package": "sunroof-server",
          "signature": "Uplink a -\u003e IO (ResultOf a)",
          "source": "src/Language-Sunroof-Server.html#getUplink",
          "type": "function"
        },
        "index": {
          "description": "Request data in the uplink This may block until data is available",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "getUplink",
          "normalized": "Uplink a-\u003eIO(ResultOf a)",
          "package": "sunroof-server",
          "partial": "Uplink",
          "signature": "Uplink a-\u003eIO(ResultOf a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:getUplink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a JSON value to a Sunroof Javascript expression.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "jsonToJS",
          "package": "sunroof-server",
          "signature": "Value -\u003e Expr",
          "source": "src/Language-Sunroof-Server.html#jsonToJS",
          "type": "function"
        },
        "index": {
          "description": "Converts JSON value to Sunroof Javascript expression",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "jsonToJS",
          "normalized": "Value-\u003eExpr",
          "package": "sunroof-server",
          "partial": "To JS",
          "signature": "Value-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:jsonToJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the given JSON value to the corresponding\n   Haskell value. A error is thrown if the JSON value can\n   not be converted.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "jsonToValue",
          "package": "sunroof-server",
          "signature": "Proxy a -\u003e Value -\u003e ResultOf a",
          "source": "src/Language-Sunroof-Server.html#jsonToValue",
          "type": "method"
        },
        "index": {
          "description": "Converts the given JSON value to the corresponding Haskell value error is thrown if the JSON value can not be converted",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "jsonToValue",
          "normalized": "Proxy a-\u003eValue-\u003eResultOf a",
          "package": "sunroof-server",
          "partial": "To Value",
          "signature": "Proxy a-\u003eValue-\u003eResultOf a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:jsonToValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new downlink.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "newDownlink",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e IO (Downlink a)",
          "source": "src/Language-Sunroof-Server.html#newDownlink",
          "type": "function"
        },
        "index": {
          "description": "Create new downlink",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "newDownlink",
          "normalized": "SunroofEngine-\u003eIO(Downlink a)",
          "package": "sunroof-server",
          "partial": "Downlink",
          "signature": "SunroofEngine-\u003eIO(Downlink a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:newDownlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate timings in the \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "newTimings",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e IO SunroofEngine",
          "source": "src/Language-Sunroof-Server.html#newTimings",
          "type": "function"
        },
        "index": {
          "description": "Create timings in the SunroofEngine",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "newTimings",
          "normalized": "SunroofEngine-\u003eIO SunroofEngine",
          "package": "sunroof-server",
          "partial": "Timings",
          "signature": "SunroofEngine-\u003eIO SunroofEngine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:newTimings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new uplink.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "newUplink",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e IO (Uplink a)",
          "source": "src/Language-Sunroof-Server.html#newUplink",
          "type": "function"
        },
        "index": {
          "description": "Create new uplink",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "newUplink",
          "normalized": "SunroofEngine-\u003eIO(Uplink a)",
          "package": "sunroof-server",
          "partial": "Uplink",
          "signature": "SunroofEngine-\u003eIO(Uplink a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:newUplink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend data to the website.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "putDownlink",
          "package": "sunroof-server",
          "signature": "Downlink a -\u003e JSA a -\u003e IO ()",
          "source": "src/Language-Sunroof-Server.html#putDownlink",
          "type": "function"
        },
        "index": {
          "description": "Send data to the website",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "putDownlink",
          "normalized": "Downlink a-\u003eJSA a-\u003eIO()",
          "package": "sunroof-server",
          "partial": "Downlink",
          "signature": "Downlink a-\u003eJSA a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:putDownlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend Javascript data back to the server.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "putUplink",
          "package": "sunroof-server",
          "signature": "a -\u003e Uplink a -\u003e JS t ()",
          "source": "src/Language-Sunroof-Server.html#putUplink",
          "type": "function"
        },
        "index": {
          "description": "Send Javascript data back to the server",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "putUplink",
          "normalized": "a-\u003eUplink a-\u003eJS b()",
          "package": "sunroof-server",
          "partial": "Uplink",
          "signature": "a-\u003eUplink a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:putUplink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset all timings.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "resetTimings",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e IO ()",
          "source": "src/Language-Sunroof-Server.html#resetTimings",
          "type": "function"
        },
        "index": {
          "description": "Reset all timings",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "resetTimings",
          "normalized": "SunroofEngine-\u003eIO()",
          "package": "sunroof-server",
          "partial": "Timings",
          "signature": "SunroofEngine-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:resetTimings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the Javascript in the browser and waits for the result.\n   The returned value is just a reference to the computed value.\n   This allows to precompile values like function in the browser.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "rsyncJS",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e JS t a -\u003e IO a",
          "source": "src/Language-Sunroof-Server.html#rsyncJS",
          "type": "function"
        },
        "index": {
          "description": "Executes the Javascript in the browser and waits for the result The returned value is just reference to the computed value This allows to precompile values like function in the browser",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "rsyncJS",
          "normalized": "SunroofEngine-\u003eJS a b-\u003eIO b",
          "package": "sunroof-server",
          "partial": "JS",
          "signature": "SunroofEngine-\u003eJS t a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:rsyncJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long spent sending.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "sendTime",
          "package": "sunroof-server",
          "signature": "a",
          "source": "src/Language-Sunroof-Server.html#Timings",
          "type": "function"
        },
        "index": {
          "description": "How long spent sending",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "sendTime",
          "package": "sunroof-server",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sendTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of options to configure the Sunroof compiler.\n   Default options are provided with the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "sunroofCompilerOpts",
          "package": "sunroof-server",
          "signature": "CompilerOpts",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "The set of options to configure the Sunroof compiler Default options are provided with the def instance",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "sunroofCompilerOpts",
          "package": "sunroof-server",
          "partial": "Compiler Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sunroofCompilerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets up a comet server ready to use with sunroof.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esunroofServer opts app\u003c/code\u003e:\n   The \u003ccode\u003eopts\u003c/code\u003e give various configuration for the comet server.\n   See \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e for further information on this.\n   The application to run is given by \u003ccode\u003eapp\u003c/code\u003e. It takes the current\n   engine/document as parameter. The document is needed for calls to \u003ccode\u003e\u003ca\u003esyncJS\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003easyncJS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ersyncJS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe server provides the kansas comet Javascript on the path\n   \u003ccode\u003ejs/kansas-comet.js\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003ekansas-comet.js\u003c/code\u003e is a JQuery plugin you have to also\n   load a decent version of \u003ccode\u003ejquery.js\u003c/code\u003e (or \u003ccode\u003ejquery.min.js\u003c/code\u003e)\n   and also \u003ccode\u003ejquery-json.js\u003c/code\u003e. They are available at:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://jquery.com/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttps://code.google.com/p/jquery-json/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor the index file to setup the communication correctly with the comet\n   server it has to load the \u003ccode\u003ekansas-comet.js\u003c/code\u003e after the JQuery code\n   inside the \u003ccode\u003ehead\u003c/code\u003e (assuming you placed the JQuery code under \u003ccode\u003ejs/\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e   \u003cscript type=\"text/javascript\" src=\"js/jquery.js\"\u003e\u003c/script\u003e\n   \u003cscript type=\"text/javascript\" src=\"js/jquery-json.js\"\u003e\u003c/script\u003e\n   \u003cscript type=\"text/javascript\" src=\"js/kansas-comet.js\"\u003e\u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eIt also has to execute the following Javascript at the end of the\n   index file to initialize the communication:\n\u003c/p\u003e\u003cpre\u003e   \u003cscript type=\"text/javascript\"\u003e\n     $(document).ready(function() {\n       $.kc.connect(\"/ajax\");\n     });\n   \u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eThe string \u003ccode\u003e/ajax\u003c/code\u003e has to be set to whatever the comet prefix\n   in the \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e provided by the \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e is.\n   These snippits will work for the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eAdditional debug information can be displayed in the browser when\n   adding the following element to the index file:\n\u003c/p\u003e\u003cpre\u003e   \u003cdiv id=\"debug-log\"\u003e\u003c/div\u003e\n\u003c/pre\u003e\u003cp\u003eLook into the example folder to see all of this in action.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "sunroofServer",
          "package": "sunroof-server",
          "signature": "SunroofServerOptions -\u003e SunroofApp -\u003e IO ()",
          "source": "src/Language-Sunroof-Server.html#sunroofServer",
          "type": "function"
        },
        "index": {
          "description": "Sets up comet server ready to use with sunroof sunroofServer opts app The opts give various configuration for the comet server See SunroofServerOptions for further information on this The application to run is given by app It takes the current engine document as parameter The document is needed for calls to syncJS asyncJS and rsyncJS The server provides the kansas comet Javascript on the path js kansas-comet.js Since kansas-comet.js is JQuery plugin you have to also load decent version of jquery.js or jquery.min.js and also jquery-json.js They are available at http jquery.com https code.google.com jquery-json For the index file to setup the communication correctly with the comet server it has to load the kansas-comet.js after the JQuery code inside the head assuming you placed the JQuery code under js script type text javascript src js jquery.js script script type text javascript src js jquery-json.js script script type text javascript src js kansas-comet.js script It also has to execute the following Javascript at the end of the index file to initialize the communication script type text javascript document ready function kc.connect ajax script The string ajax has to be set to whatever the comet prefix in the Options provided by the SunroofServerOptions is These snippits will work for the def instance Additional debug information can be displayed in the browser when adding the following element to the index file div id debug-log div Look into the example folder to see all of this in action",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "sunroofServer",
          "normalized": "SunroofServerOptions-\u003eSunroofApp-\u003eIO()",
          "package": "sunroof-server",
          "partial": "Server",
          "signature": "SunroofServerOptions-\u003eSunroofApp-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sunroofServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e0\u003c/code\u003e for none, \u003ccode\u003e1\u003c/code\u003e for initializations,\n   \u003ccode\u003e2\u003c/code\u003e for commands done and \u003ccode\u003e3\u003c/code\u003e for a complete log.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "sunroofVerbose",
          "package": "sunroof-server",
          "signature": "Int",
          "source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
          "type": "function"
        },
        "index": {
          "description": "for none for initializations for commands done and for complete log",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "sunroofVerbose",
          "package": "sunroof-server",
          "partial": "Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sunroofVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the Javascript in the browser and waits for the result value.\n   The result value is given the corresponding Haskell type,\n   if possible (see \u003ccode\u003e\u003ca\u003eSunroofResult\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "syncJS",
          "package": "sunroof-server",
          "signature": "SunroofEngine -\u003e JS t a -\u003e IO (ResultOf a)",
          "source": "src/Language-Sunroof-Server.html#syncJS",
          "type": "function"
        },
        "index": {
          "description": "Executes the Javascript in the browser and waits for the result value The result value is given the corresponding Haskell type if possible see SunroofResult",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "syncJS",
          "normalized": "SunroofEngine-\u003eJS a b-\u003eIO(ResultOf b)",
          "package": "sunroof-server",
          "partial": "JS",
          "signature": "SunroofEngine-\u003eJS t a-\u003eIO(ResultOf a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:syncJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerformance timings of the compiler and communication.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "timings",
          "package": "sunroof-server",
          "signature": "Maybe (TVar (Timings NominalDiffTime))",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "function"
        },
        "index": {
          "description": "Performance timings of the compiler and communication",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "timings",
          "package": "sunroof-server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:timings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique number supply for our engine\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "uVar",
          "package": "sunroof-server",
          "signature": "TVar Uniq",
          "source": "src/Language-Sunroof-Server.html#SunroofEngine",
          "type": "function"
        },
        "index": {
          "description": "Unique number supply for our engine",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "uVar",
          "package": "sunroof-server",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:uVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow long spent waiting for a response.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Server",
          "name": "waitTime",
          "package": "sunroof-server",
          "signature": "a",
          "source": "src/Language-Sunroof-Server.html#Timings",
          "type": "function"
        },
        "index": {
          "description": "How long spent waiting for response",
          "hierarchy": "Language Sunroof Server",
          "module": "Language.Sunroof.Server",
          "name": "waitTime",
          "package": "sunroof-server",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:waitTime"
      }
    }
  ]
]