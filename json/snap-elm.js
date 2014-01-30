[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a few functions for conveniently serving\nElm files through the Snap web framework. Any changes made to\nthe served files will be reflected in the browser upon a refresh.\n\u003c/p\u003e\u003cp\u003eThe easiest way to get started is to use the default ElmOptions:\n\u003c/p\u003e\u003cpre\u003e app = makeSnaplet ... $ do\n     opts \u003c- defaultElmOptions\n     ...\n     addRoutes $ routes opts\n     ...\n\u003c/pre\u003e\u003cp\u003eThen, provide routes to the Elm runtime, and to any Elm files\nyou wish to serve.\n\u003c/p\u003e\u003cpre\u003e routes opts =\n     [ (\"/elm\", serveElmFile opts \"static/elm/test.elm\")\n     , ...\n     , serveElmRuntime opts\n     ]\n\u003c/pre\u003e\u003cp\u003eAdditionally, you can customize the URI of the Elm runtime,\nthe file path to the Elm runtime, or the paths to the\ndirectores that Elm will use to build and cache the compiled files.\n\u003c/p\u003e\u003cpre\u003e app = makeSnaplet ... $ do\n     opts \u003c- setElmBuildPath \"/tmp/elm\" \u003c$\u003e\n             setElmVerbose True \u003c$\u003e\n             defaultElmOptions\n     ...\n     addRoutes $ routes opts\n     ...\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es supplied to setElm{Source,Build,Cache}Path can be\nrelative or absolute.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "module",
        "fct-source": "src/Snap-Elm.html",
        "fct-type": "module",
        "title": "Elm"
      },
      "index": {
        "description": "This module provides few functions for conveniently serving Elm files through the Snap web framework Any changes made to the served files will be reflected in the browser upon refresh The easiest way to get started is to use the default ElmOptions app makeSnaplet do opts defaultElmOptions addRoutes routes opts Then provide routes to the Elm runtime and to any Elm files you wish to serve routes opts elm serveElmFile opts static elm test.elm serveElmRuntime opts Additionally you can customize the URI of the Elm runtime the file path to the Elm runtime or the paths to the directores that Elm will use to build and cache the compiled files app makeSnaplet do opts setElmBuildPath tmp elm setElmVerbose True defaultElmOptions addRoutes routes opts The FilePath supplied to setElm Source Build Cache Path can be relative or absolute",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "Elm",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Elm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#t:ElmOptions",
      "description": {
        "fct-descr": "\u003cp\u003eA set of options to coordinate the serving of Elm files and runtime.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "data",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "data",
        "title": "ElmOptions"
      },
      "index": {
        "description": "set of options to coordinate the serving of Elm files and runtime",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "ElmOptions",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Elm Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:ElmOptions",
      "description": {
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "ElmOptions",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "ElmOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "ElmOptions",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Elm Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:defaultElmOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of options for serving Elm files.\n The values are as follows (IO aside):\n\u003c/p\u003e\u003cpre\u003e ElmOptions\n   { elmIsVerbose   = False\n   , elmRuntimeURI  = \"/static/js/elm-runtime.js\"\n   , elmRuntimePath = \u003cLanguage.Elm.runtime\u003e\n   , elmSourcePath  = \".\"\n   , elmBuildPath   = \"elm-build\"\n   , elmCachePath   = \"elm-cache\"\n   }\n\u003c/pre\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "m ElmOptions",
        "fct-source": "src/Snap-Elm.html#defaultElmOptions",
        "fct-type": "function",
        "title": "defaultElmOptions"
      },
      "index": {
        "description": "The default set of options for serving Elm files The values are as follows IO aside ElmOptions elmIsVerbose False elmRuntimeURI static js elm-runtime.js elmRuntimePath Language.Elm.runtime elmSourcePath elmBuildPath elm-build elmCachePath elm-cache",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "defaultElmOptions",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Elm Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:elmBuildPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "elmBuildPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "elmBuildPath",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Build Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:elmCachePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "elmCachePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "elmCachePath",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Cache Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:elmIsVerbose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "Bool",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "elmIsVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "elmIsVerbose",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Is Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:elmRuntimePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "elmRuntimePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "elmRuntimePath",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Runtime Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:elmRuntimeURI",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "ByteString",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "elmRuntimeURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "elmRuntimeURI",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Runtime URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:elmSourcePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath",
        "fct-source": "src/Snap-Elm.html#ElmOptions",
        "fct-type": "function",
        "title": "elmSourcePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "elmSourcePath",
        "normalized": "",
        "package": "snap-elm",
        "partial": "Source Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:serveElmDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eServe a directory of Elm files.\n\u003c/p\u003e\u003cp\u003eFor example, a list of routes could contain:\n\u003c/p\u003e\u003cpre\u003e routes opts =\n   [ ...\n   , serveElmDirectory opts \"/elm\"\n   ]\n\u003c/pre\u003e\u003cp\u003eIn this example, if the ElmOptions contained \u003ccode\u003estatic/elm\u003c/code\u003e\n as the sourcePath, the route \u003ccode\u003eelm/file.elm\u003c/code\u003e would\n be handled by \u003ccode\u003eserveElmFile \u003ca\u003efile.elm\u003c/a\u003e\u003c/code\u003e, run with the working directory\n \u003ccode\u003estatic/elm\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "ElmOptions-\u003e ByteString-\u003e (ByteString, m ())",
        "fct-type": "function",
        "title": "serveElmDirectory"
      },
      "index": {
        "description": "Serve directory of Elm files For example list of routes could contain routes opts serveElmDirectory opts elm In this example if the ElmOptions contained static elm as the sourcePath the route elm file.elm would be handled by serveElmFile file.elm run with the working directory static elm",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "serveElmDirectory",
        "normalized": "ElmOptions-\u003eByteString-\u003e(ByteString,a())",
        "package": "snap-elm",
        "partial": "Elm Directory",
        "signature": "ElmOptions-\u003eByteString-\u003e(ByteString,m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:serveElmFile",
      "description": {
        "fct-descr": "\u003cp\u003eCompile and serve an Elm file.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "ElmOptions -\u003e FilePath -\u003e m ()",
        "fct-source": "src/Snap-Elm.html#serveElmFile",
        "fct-type": "function",
        "title": "serveElmFile"
      },
      "index": {
        "description": "Compile and serve an Elm file",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "serveElmFile",
        "normalized": "ElmOptions-\u003eFilePath-\u003ea()",
        "package": "snap-elm",
        "partial": "Elm File",
        "signature": "ElmOptions-\u003eFilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:serveElmRuntime",
      "description": {
        "fct-descr": "\u003cp\u003eA route handler for the Elm runtime. If given the \u003ccode\u003e\u003ca\u003eElmOptions\u003c/a\u003e\u003c/code\u003e used\n by \u003ccode\u003e\u003ca\u003eserveElmFile\u003c/a\u003e\u003c/code\u003e, it will place the runtime at the route the Elm file\n will expect, as per the \u003ccode\u003e\u003cscript src=\u003ca\u003e.../runtime.js\u003c/a\u003e\u003e\u003c/code\u003e element included\n in the compiled file's \u003ccode\u003e\u003chead\u003e\u003c/code\u003e section.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "ElmOptions -\u003e (ByteString, m ())",
        "fct-source": "src/Snap-Elm.html#serveElmRuntime",
        "fct-type": "function",
        "title": "serveElmRuntime"
      },
      "index": {
        "description": "route handler for the Elm runtime If given the ElmOptions used by serveElmFile it will place the runtime at the route the Elm file will expect as per the script src runtime.js element included in the compiled file head section",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "serveElmRuntime",
        "normalized": "ElmOptions-\u003e(ByteString,a())",
        "package": "snap-elm",
        "partial": "Elm Runtime",
        "signature": "ElmOptions-\u003e(ByteString,m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:setElmBuildPath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the directory to use for storing the compiled .html\n that \u003ccode\u003eelm\u003c/code\u003e produces.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath -\u003e ElmOptions -\u003e ElmOptions",
        "fct-source": "src/Snap-Elm.html#setElmBuildPath",
        "fct-type": "function",
        "title": "setElmBuildPath"
      },
      "index": {
        "description": "Set the directory to use for storing the compiled html that elm produces",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "setElmBuildPath",
        "normalized": "FilePath-\u003eElmOptions-\u003eElmOptions",
        "package": "snap-elm",
        "partial": "Elm Build Path",
        "signature": "FilePath-\u003eElmOptions-\u003eElmOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:setElmCachePath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the directory to use for storing the .elmi and .elmo\n files that \u003ccode\u003eelm\u003c/code\u003e produces.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath -\u003e ElmOptions -\u003e ElmOptions",
        "fct-source": "src/Snap-Elm.html#setElmCachePath",
        "fct-type": "function",
        "title": "setElmCachePath"
      },
      "index": {
        "description": "Set the directory to use for storing the elmi and elmo files that elm produces",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "setElmCachePath",
        "normalized": "FilePath-\u003eElmOptions-\u003eElmOptions",
        "package": "snap-elm",
        "partial": "Elm Cache Path",
        "signature": "FilePath-\u003eElmOptions-\u003eElmOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:setElmRuntimePath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to some custom Elm runtime.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath -\u003e ElmOptions -\u003e ElmOptions",
        "fct-source": "src/Snap-Elm.html#setElmRuntimePath",
        "fct-type": "function",
        "title": "setElmRuntimePath"
      },
      "index": {
        "description": "Set the FilePath to some custom Elm runtime",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "setElmRuntimePath",
        "normalized": "FilePath-\u003eElmOptions-\u003eElmOptions",
        "package": "snap-elm",
        "partial": "Elm Runtime Path",
        "signature": "FilePath-\u003eElmOptions-\u003eElmOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:setElmRuntimeURI",
      "description": {
        "fct-descr": "\u003cp\u003eSet the URI at which to serve the Elm runtime JS file.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "ByteString -\u003e ElmOptions -\u003e ElmOptions",
        "fct-source": "src/Snap-Elm.html#setElmRuntimeURI",
        "fct-type": "function",
        "title": "setElmRuntimeURI"
      },
      "index": {
        "description": "Set the URI at which to serve the Elm runtime JS file",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "setElmRuntimeURI",
        "normalized": "ByteString-\u003eElmOptions-\u003eElmOptions",
        "package": "snap-elm",
        "partial": "Elm Runtime URI",
        "signature": "ByteString-\u003eElmOptions-\u003eElmOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:setElmSourcePath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the directory to look for .elm files.\n This allows for the \u003ccode\u003eelm\u003c/code\u003e binary to properly find\n local Elm modules.\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "FilePath -\u003e ElmOptions -\u003e ElmOptions",
        "fct-source": "src/Snap-Elm.html#setElmSourcePath",
        "fct-type": "function",
        "title": "setElmSourcePath"
      },
      "index": {
        "description": "Set the directory to look for elm files This allows for the elm binary to properly find local Elm modules",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "setElmSourcePath",
        "normalized": "FilePath-\u003eElmOptions-\u003eElmOptions",
        "package": "snap-elm",
        "partial": "Elm Source Path",
        "signature": "FilePath-\u003eElmOptions-\u003eElmOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-elm/docs/Snap-Elm.html#v:setElmVerbose",
      "description": {
        "fct-descr": "\u003cp\u003eTell Elm to be verbose (print all executed commands and their output\n to stdout), or quiet (print nothing).\n\u003c/p\u003e",
        "fct-module": "Snap.Elm",
        "fct-package": "snap-elm",
        "fct-signature": "Bool -\u003e ElmOptions -\u003e ElmOptions",
        "fct-source": "src/Snap-Elm.html#setElmVerbose",
        "fct-type": "function",
        "title": "setElmVerbose"
      },
      "index": {
        "description": "Tell Elm to be verbose print all executed commands and their output to stdout or quiet print nothing",
        "hierarchy": "Snap Elm",
        "module": "Snap.Elm",
        "name": "setElmVerbose",
        "normalized": "Bool-\u003eElmOptions-\u003eElmOptions",
        "package": "snap-elm",
        "partial": "Elm Verbose",
        "signature": "Bool-\u003eElmOptions-\u003eElmOptions"
      }
    }
  }
]