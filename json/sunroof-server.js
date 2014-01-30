[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Sunroof server module provides infrastructure to use\n   Sunroof together with kansas-comet.\n\u003c/p\u003e\u003cp\u003eIt supports setting up a simple server with \u003ccode\u003e\u003ca\u003esunroofServer\u003c/a\u003e\u003c/code\u003e\n   and provides basic functions for serverside communication\n   with the connected website (\u003ccode\u003e\u003ca\u003esyncJS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003easyncJS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ersyncJS\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis module also provides the abstractions for \u003ccode\u003e\u003ca\u003eDownlink\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003eUplink\u003c/a\u003e\u003c/code\u003e. They represent directed channels for sending data\n   from the server to the website and the other way aroun.\n   The sent data is queued and operations block properly if there\n   is no data available.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "module",
        "fct-source": "src/Language-Sunroof-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "The Sunroof server module provides infrastructure to use Sunroof together with kansas-comet It supports setting up simple server with sunroofServer and provides basic functions for serverside communication with the connected website syncJS asyncJS and rsyncJS This module also provides the abstractions for Downlink and Uplink They represent directed channels for sending data from the server to the website and the other way aroun The sent data is queued and operations block properly if there is no data available",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "Server",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:Downlink",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDownlink\u003c/a\u003e\u003c/code\u003es are an abstraction provided for sending\n   Javascript data from the server to the website.\n   The type parameter describes the elements\n   that are transmited through the downlink.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "data",
        "fct-source": "src/Language-Sunroof-Server.html#Downlink",
        "fct-type": "data",
        "title": "Downlink"
      },
      "index": {
        "description": "Downlink are an abstraction provided for sending Javascript data from the server to the website The type parameter describes the elements that are transmited through the downlink",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "Downlink",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Downlink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofApp",
      "description": {
        "fct-descr": "\u003cp\u003eA comet application takes the engine/document we are currently communicating\n   with and delivers the IO action to be executed as server application.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "type",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofApp",
        "fct-type": "type",
        "title": "SunroofApp"
      },
      "index": {
        "description": "comet application takes the engine document we are currently communicating with and delivers the IO action to be executed as server application",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "SunroofApp",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofEngine",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e provides the verbosity level and\n   kansas comet document to the \u003ccode\u003e\u003ca\u003eSunroofApp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "data",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "data",
        "title": "SunroofEngine"
      },
      "index": {
        "description": "The SunroofEngine provides the verbosity level and kansas comet document to the SunroofApp",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "SunroofEngine",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofResult",
      "description": {
        "fct-descr": "\u003cp\u003eProvides correspondant Haskell types for certain Sunroof types.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "class",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofResult",
        "fct-type": "class",
        "title": "SunroofResult"
      },
      "index": {
        "description": "Provides correspondant Haskell types for certain Sunroof types",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "SunroofResult",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:SunroofServerOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e specify the configuration of the\n   sunroof comet server infrastructure.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esunroofServer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e for further information.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "data",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "data",
        "title": "SunroofServerOptions"
      },
      "index": {
        "description": "The SunroofServerOptions specify the configuration of the sunroof comet server infrastructure See sunroofServer and SunroofServerOptions for further information",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "SunroofServerOptions",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:Timings",
      "description": {
        "fct-descr": "\u003cp\u003eTimings for communication and compilation.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "data",
        "fct-source": "src/Language-Sunroof-Server.html#Timings",
        "fct-type": "data",
        "title": "Timings"
      },
      "index": {
        "description": "Timings for communication and compilation",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "Timings",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Timings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#t:Uplink",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUplink\u003c/a\u003e\u003c/code\u003es are an abstraction provided for sending\n   Javascript data from the website back to the server.\n   Only data that can be translated back to a Haskell\n   value can be sent back.\n   The type parameter describes the elements\n   that are transmited through the uplink.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "data",
        "fct-source": "src/Language-Sunroof-Server.html#Uplink",
        "fct-type": "data",
        "title": "Uplink"
      },
      "index": {
        "description": "Uplink are an abstraction provided for sending Javascript data from the website back to the server Only data that can be translated back to Haskell value can be sent back The type parameter describes the elements that are transmited through the uplink",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "Uplink",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Uplink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:SunroofEngine",
      "description": {
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "function",
        "title": "SunroofEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "SunroofEngine",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:SunroofServerOptions",
      "description": {
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofServerOptions",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "SunroofServerOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "SunroofServerOptions",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:Timings",
      "description": {
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Timings",
        "fct-source": "src/Language-Sunroof-Server.html#Timings",
        "fct-type": "function",
        "title": "Timings"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "Timings",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Timings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:asyncJS",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the Javascript in the browser without waiting for a result.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e JS t () -\u003e IO ()",
        "fct-source": "src/Language-Sunroof-Server.html#asyncJS",
        "fct-type": "function",
        "title": "asyncJS"
      },
      "index": {
        "description": "Executes the Javascript in the browser without waiting for result",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "asyncJS",
        "normalized": "SunroofEngine-\u003eJS a()-\u003eIO()",
        "package": "sunroof-server",
        "partial": "JS",
        "signature": "SunroofEngine-\u003eJS t()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometDocument",
      "description": {
        "fct-descr": "\u003cp\u003eThe document comet uses to manage the connected website.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Document",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "function",
        "title": "cometDocument"
      },
      "index": {
        "description": "The document comet uses to manage the connected website",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "cometDocument",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometIndexFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe file to be used as index file (or landing page).\n   This path is given relative to the \u003ccode\u003e\u003ca\u003ecometResourceBaseDir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "FilePath",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "cometIndexFile"
      },
      "index": {
        "description": "The file to be used as index file or landing page This path is given relative to the cometResourceBaseDir",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "cometIndexFile",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Index File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometOptions",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the kansas comet options to use.\n   Default options are provided with the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Options",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "cometOptions"
      },
      "index": {
        "description": "Provides the kansas comet options to use Default options are provided with the def instance",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "cometOptions",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eThe default policy is to allow the \u003ccode\u003ecss\u003c/code\u003e, \u003ccode\u003eimg\u003c/code\u003e and \u003ccode\u003ejs\u003c/code\u003e\n folders to be used by the server, as well as the noDots policy.\n  This policy can be overwritten to allow delivery of other files.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Policy",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "cometPolicy"
      },
      "index": {
        "description": "The default policy is to allow the css img and js folders to be used by the server as well as the noDots policy This policy can be overwritten to allow delivery of other files",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "cometPolicy",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe port the server is reachable from.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Port",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "cometPort"
      },
      "index": {
        "description": "The port the server is reachable from",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "cometPort",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:cometResourceBaseDir",
      "description": {
        "fct-descr": "\u003cp\u003eWill be used as base directory to search for all static files.\n Make this path absolute to run the server from anywhere.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "FilePath",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "cometResourceBaseDir"
      },
      "index": {
        "description": "Will be used as base directory to search for all static files Make this path absolute to run the server from anywhere",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "cometResourceBaseDir",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Resource Base Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:compileTime",
      "description": {
        "fct-descr": "\u003cp\u003eHow long spent compiling.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "!a",
        "fct-source": "src/Language-Sunroof-Server.html#Timings",
        "fct-type": "function",
        "title": "compileTime"
      },
      "index": {
        "description": "How long spent compiling",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "compileTime",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:compilerOpts",
      "description": {
        "fct-descr": "\u003cp\u003eThe options used to setup the compiler.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "CompilerOpts",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "function",
        "title": "compilerOpts"
      },
      "index": {
        "description": "The options used to setup the compiler",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "compilerOpts",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:debugSunroofEngine",
      "description": {
        "fct-descr": "\u003cp\u003eSetup a \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e for debugging.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "IO SunroofEngine",
        "fct-source": "src/Language-Sunroof-Server.html#debugSunroofEngine",
        "fct-type": "function",
        "title": "debugSunroofEngine"
      },
      "index": {
        "description": "Setup SunroofEngine for debugging",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "debugSunroofEngine",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Sunroof Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:engineVerbose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e0\u003c/code\u003e for none, \u003ccode\u003e1\u003c/code\u003e for initializations,\n   \u003ccode\u003e2\u003c/code\u003e for commands done and \u003ccode\u003e3\u003c/code\u003e for a complete log.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Int",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "function",
        "title": "engineVerbose"
      },
      "index": {
        "description": "for none for initializations for commands done and for complete log",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "engineVerbose",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:getDownlink",
      "description": {
        "fct-descr": "\u003cp\u003eRequest data in the downlink. This may block until\n   data is available.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Downlink a -\u003e JSB a",
        "fct-source": "src/Language-Sunroof-Server.html#getDownlink",
        "fct-type": "function",
        "title": "getDownlink"
      },
      "index": {
        "description": "Request data in the downlink This may block until data is available",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "getDownlink",
        "normalized": "Downlink a-\u003eJSB a",
        "package": "sunroof-server",
        "partial": "Downlink",
        "signature": "Downlink a-\u003eJSB a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:getTimings",
      "description": {
        "fct-descr": "\u003cp\u003eGet timings from the \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e IO (Timings NominalDiffTime)",
        "fct-source": "src/Language-Sunroof-Server.html#getTimings",
        "fct-type": "function",
        "title": "getTimings"
      },
      "index": {
        "description": "Get timings from the SunroofEngine",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "getTimings",
        "normalized": "SunroofEngine-\u003eIO(Timings NominalDiffTime)",
        "package": "sunroof-server",
        "partial": "Timings",
        "signature": "SunroofEngine-\u003eIO(Timings NominalDiffTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:getUplink",
      "description": {
        "fct-descr": "\u003cp\u003eRequest data in the uplink. This may block until\n   data is available.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Uplink a -\u003e IO (ResultOf a)",
        "fct-source": "src/Language-Sunroof-Server.html#getUplink",
        "fct-type": "function",
        "title": "getUplink"
      },
      "index": {
        "description": "Request data in the uplink This may block until data is available",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "getUplink",
        "normalized": "Uplink a-\u003eIO(ResultOf a)",
        "package": "sunroof-server",
        "partial": "Uplink",
        "signature": "Uplink a-\u003eIO(ResultOf a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:jsonToJS",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a JSON value to a Sunroof Javascript expression.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Value -\u003e Expr",
        "fct-source": "src/Language-Sunroof-Server.html#jsonToJS",
        "fct-type": "function",
        "title": "jsonToJS"
      },
      "index": {
        "description": "Converts JSON value to Sunroof Javascript expression",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "jsonToJS",
        "normalized": "Value-\u003eExpr",
        "package": "sunroof-server",
        "partial": "To JS",
        "signature": "Value-\u003eExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:jsonToValue",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the given JSON value to the corresponding\n   Haskell value. A error is thrown if the JSON value can\n   not be converted.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Proxy a -\u003e Value -\u003e ResultOf a",
        "fct-source": "src/Language-Sunroof-Server.html#jsonToValue",
        "fct-type": "method",
        "title": "jsonToValue"
      },
      "index": {
        "description": "Converts the given JSON value to the corresponding Haskell value error is thrown if the JSON value can not be converted",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "jsonToValue",
        "normalized": "Proxy a-\u003eValue-\u003eResultOf a",
        "package": "sunroof-server",
        "partial": "To Value",
        "signature": "Proxy a-\u003eValue-\u003eResultOf a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:newDownlink",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new downlink.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e IO (Downlink a)",
        "fct-source": "src/Language-Sunroof-Server.html#newDownlink",
        "fct-type": "function",
        "title": "newDownlink"
      },
      "index": {
        "description": "Create new downlink",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "newDownlink",
        "normalized": "SunroofEngine-\u003eIO(Downlink a)",
        "package": "sunroof-server",
        "partial": "Downlink",
        "signature": "SunroofEngine-\u003eIO(Downlink a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:newTimings",
      "description": {
        "fct-descr": "\u003cp\u003eCreate timings in the \u003ccode\u003e\u003ca\u003eSunroofEngine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e IO SunroofEngine",
        "fct-source": "src/Language-Sunroof-Server.html#newTimings",
        "fct-type": "function",
        "title": "newTimings"
      },
      "index": {
        "description": "Create timings in the SunroofEngine",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "newTimings",
        "normalized": "SunroofEngine-\u003eIO SunroofEngine",
        "package": "sunroof-server",
        "partial": "Timings",
        "signature": "SunroofEngine-\u003eIO SunroofEngine"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:newUplink",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new uplink.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e IO (Uplink a)",
        "fct-source": "src/Language-Sunroof-Server.html#newUplink",
        "fct-type": "function",
        "title": "newUplink"
      },
      "index": {
        "description": "Create new uplink",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "newUplink",
        "normalized": "SunroofEngine-\u003eIO(Uplink a)",
        "package": "sunroof-server",
        "partial": "Uplink",
        "signature": "SunroofEngine-\u003eIO(Uplink a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:putDownlink",
      "description": {
        "fct-descr": "\u003cp\u003eSend data to the website.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Downlink a -\u003e JSA a -\u003e IO ()",
        "fct-source": "src/Language-Sunroof-Server.html#putDownlink",
        "fct-type": "function",
        "title": "putDownlink"
      },
      "index": {
        "description": "Send data to the website",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "putDownlink",
        "normalized": "Downlink a-\u003eJSA a-\u003eIO()",
        "package": "sunroof-server",
        "partial": "Downlink",
        "signature": "Downlink a-\u003eJSA a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:putUplink",
      "description": {
        "fct-descr": "\u003cp\u003eSend Javascript data back to the server.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "a -\u003e Uplink a -\u003e JS t ()",
        "fct-source": "src/Language-Sunroof-Server.html#putUplink",
        "fct-type": "function",
        "title": "putUplink"
      },
      "index": {
        "description": "Send Javascript data back to the server",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "putUplink",
        "normalized": "a-\u003eUplink a-\u003eJS b()",
        "package": "sunroof-server",
        "partial": "Uplink",
        "signature": "a-\u003eUplink a-\u003eJS t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:resetTimings",
      "description": {
        "fct-descr": "\u003cp\u003eReset all timings.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e IO ()",
        "fct-source": "src/Language-Sunroof-Server.html#resetTimings",
        "fct-type": "function",
        "title": "resetTimings"
      },
      "index": {
        "description": "Reset all timings",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "resetTimings",
        "normalized": "SunroofEngine-\u003eIO()",
        "package": "sunroof-server",
        "partial": "Timings",
        "signature": "SunroofEngine-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:rsyncJS",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the Javascript in the browser and waits for the result.\n   The returned value is just a reference to the computed value.\n   This allows to precompile values like function in the browser.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e JS t a -\u003e IO a",
        "fct-source": "src/Language-Sunroof-Server.html#rsyncJS",
        "fct-type": "function",
        "title": "rsyncJS"
      },
      "index": {
        "description": "Executes the Javascript in the browser and waits for the result The returned value is just reference to the computed value This allows to precompile values like function in the browser",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "rsyncJS",
        "normalized": "SunroofEngine-\u003eJS a b-\u003eIO b",
        "package": "sunroof-server",
        "partial": "JS",
        "signature": "SunroofEngine-\u003eJS t a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sendTime",
      "description": {
        "fct-descr": "\u003cp\u003eHow long spent sending.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "!a",
        "fct-source": "src/Language-Sunroof-Server.html#Timings",
        "fct-type": "function",
        "title": "sendTime"
      },
      "index": {
        "description": "How long spent sending",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "sendTime",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sunroofCompilerOpts",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of options to configure the Sunroof compiler.\n   Default options are provided with the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "CompilerOpts",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "sunroofCompilerOpts"
      },
      "index": {
        "description": "The set of options to configure the Sunroof compiler Default options are provided with the def instance",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "sunroofCompilerOpts",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Compiler Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sunroofServer",
      "description": {
        "fct-descr": "\u003cp\u003eSets up a comet server ready to use with sunroof.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003esunroofServer opts app\u003c/code\u003e:\n   The \u003ccode\u003eopts\u003c/code\u003e give various configuration for the comet server.\n   See \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e for further information on this.\n   The application to run is given by \u003ccode\u003eapp\u003c/code\u003e. It takes the current\n   engine/document as parameter. The document is needed for calls to \u003ccode\u003e\u003ca\u003esyncJS\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003easyncJS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ersyncJS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe server provides the kansas comet Javascript on the path\n   \u003ccode\u003ejs/kansas-comet.js\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003ekansas-comet.js\u003c/code\u003e is a JQuery plugin you have to also\n   load a decent version of \u003ccode\u003ejquery.js\u003c/code\u003e (or \u003ccode\u003ejquery.min.js\u003c/code\u003e)\n   and also \u003ccode\u003ejquery-json.js\u003c/code\u003e. They are available at:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://jquery.com/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttps://code.google.com/p/jquery-json/\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor the index file to setup the communication correctly with the comet\n   server it has to load the \u003ccode\u003ekansas-comet.js\u003c/code\u003e after the JQuery code\n   inside the \u003ccode\u003ehead\u003c/code\u003e (assuming you placed the JQuery code under \u003ccode\u003ejs/\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e   \u003cscript type=\"text/javascript\" src=\"js/jquery.js\"\u003e\u003c/script\u003e\n   \u003cscript type=\"text/javascript\" src=\"js/jquery-json.js\"\u003e\u003c/script\u003e\n   \u003cscript type=\"text/javascript\" src=\"js/kansas-comet.js\"\u003e\u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eIt also has to execute the following Javascript at the end of the\n   index file to initialize the communication:\n\u003c/p\u003e\u003cpre\u003e   \u003cscript type=\"text/javascript\"\u003e\n     $(document).ready(function() {\n       $.kc.connect(\"/ajax\");\n     });\n   \u003c/script\u003e\n\u003c/pre\u003e\u003cp\u003eThe string \u003ccode\u003e/ajax\u003c/code\u003e has to be set to whatever the comet prefix\n   in the \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e provided by the \u003ccode\u003e\u003ca\u003eSunroofServerOptions\u003c/a\u003e\u003c/code\u003e is.\n   These snippits will work for the \u003ccode\u003e\u003ca\u003edef\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eAdditional debug information can be displayed in the browser when\n   adding the following element to the index file:\n\u003c/p\u003e\u003cpre\u003e   \u003cdiv id=\"debug-log\"\u003e\u003c/div\u003e\n\u003c/pre\u003e\u003cp\u003eLook into the example folder to see all of this in action.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofServerOptions -\u003e SunroofApp -\u003e IO ()",
        "fct-source": "src/Language-Sunroof-Server.html#sunroofServer",
        "fct-type": "function",
        "title": "sunroofServer"
      },
      "index": {
        "description": "Sets up comet server ready to use with sunroof sunroofServer opts app The opts give various configuration for the comet server See SunroofServerOptions for further information on this The application to run is given by app It takes the current engine document as parameter The document is needed for calls to syncJS asyncJS and rsyncJS The server provides the kansas comet Javascript on the path js kansas-comet.js Since kansas-comet.js is JQuery plugin you have to also load decent version of jquery.js or jquery.min.js and also jquery-json.js They are available at http jquery.com https code.google.com jquery-json For the index file to setup the communication correctly with the comet server it has to load the kansas-comet.js after the JQuery code inside the head assuming you placed the JQuery code under js script type text javascript src js jquery.js script script type text javascript src js jquery-json.js script script type text javascript src js kansas-comet.js script It also has to execute the following Javascript at the end of the index file to initialize the communication script type text javascript document ready function kc.connect ajax script The string ajax has to be set to whatever the comet prefix in the Options provided by the SunroofServerOptions is These snippits will work for the def instance Additional debug information can be displayed in the browser when adding the following element to the index file div id debug-log div Look into the example folder to see all of this in action",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "sunroofServer",
        "normalized": "SunroofServerOptions-\u003eSunroofApp-\u003eIO()",
        "package": "sunroof-server",
        "partial": "Server",
        "signature": "SunroofServerOptions-\u003eSunroofApp-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:sunroofVerbose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e0\u003c/code\u003e for none, \u003ccode\u003e1\u003c/code\u003e for initializations,\n   \u003ccode\u003e2\u003c/code\u003e for commands done and \u003ccode\u003e3\u003c/code\u003e for a complete log.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Int",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofServerOptions",
        "fct-type": "function",
        "title": "sunroofVerbose"
      },
      "index": {
        "description": "for none for initializations for commands done and for complete log",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "sunroofVerbose",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:syncJS",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the Javascript in the browser and waits for the result value.\n   The result value is given the corresponding Haskell type,\n   if possible (see \u003ccode\u003e\u003ca\u003eSunroofResult\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "SunroofEngine -\u003e JS t a -\u003e IO (ResultOf a)",
        "fct-source": "src/Language-Sunroof-Server.html#syncJS",
        "fct-type": "function",
        "title": "syncJS"
      },
      "index": {
        "description": "Executes the Javascript in the browser and waits for the result value The result value is given the corresponding Haskell type if possible see SunroofResult",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "syncJS",
        "normalized": "SunroofEngine-\u003eJS a b-\u003eIO(ResultOf b)",
        "package": "sunroof-server",
        "partial": "JS",
        "signature": "SunroofEngine-\u003eJS t a-\u003eIO(ResultOf a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:timings",
      "description": {
        "fct-descr": "\u003cp\u003ePerformance timings of the compiler and communication.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "Maybe (TVar (Timings NominalDiffTime))",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "function",
        "title": "timings"
      },
      "index": {
        "description": "Performance timings of the compiler and communication",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "timings",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:uVar",
      "description": {
        "fct-descr": "\u003cp\u003eUnique number supply for our engine\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "TVar Uniq",
        "fct-source": "src/Language-Sunroof-Server.html#SunroofEngine",
        "fct-type": "function",
        "title": "uVar"
      },
      "index": {
        "description": "Unique number supply for our engine",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "uVar",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sunroof-server/docs/Language-Sunroof-Server.html#v:waitTime",
      "description": {
        "fct-descr": "\u003cp\u003eHow long spent waiting for a response.\n\u003c/p\u003e",
        "fct-module": "Language.Sunroof.Server",
        "fct-package": "sunroof-server",
        "fct-signature": "!a",
        "fct-source": "src/Language-Sunroof-Server.html#Timings",
        "fct-type": "function",
        "title": "waitTime"
      },
      "index": {
        "description": "How long spent waiting for response",
        "hierarchy": "Language Sunroof Server",
        "module": "Language.Sunroof.Server",
        "name": "waitTime",
        "normalized": "",
        "package": "sunroof-server",
        "partial": "Time",
        "signature": ""
      }
    }
  }
]