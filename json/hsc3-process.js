[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-CommandLine.html#",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.CommandLine",
        "fct-package": "hsc3-process",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Server-Process-CommandLine.html",
        "fct-type": "module",
        "title": "CommandLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process CommandLine",
        "module": "Sound.SC3.Server.Process.CommandLine",
        "name": "CommandLine",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Command Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-CommandLine.html#v:nrtCommandLine",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the scsynth command line from \u003ccode\u003e\u003ca\u003eServerOptions\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNRTOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.CommandLine",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions -\u003e NRTOptions -\u003e Maybe FilePath -\u003e [String]",
        "fct-source": "src/Sound-SC3-Server-Process-CommandLine.html#nrtCommandLine",
        "fct-type": "function",
        "title": "nrtCommandLine"
      },
      "index": {
        "description": "Construct the scsynth command line from ServerOptions and NRTOptions",
        "hierarchy": "Sound SC3 Server Process CommandLine",
        "module": "Sound.SC3.Server.Process.CommandLine",
        "name": "nrtCommandLine",
        "normalized": "ServerOptions-\u003eNRTOptions-\u003eMaybe FilePath-\u003e[String]",
        "package": "hsc3-process",
        "partial": "Command Line",
        "signature": "ServerOptions-\u003eNRTOptions-\u003eMaybe FilePath-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-CommandLine.html#v:rtCommandLine",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the scsynth command line from \u003ccode\u003e\u003ca\u003eServerOptions\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRTOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.CommandLine",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions -\u003e RTOptions -\u003e [String]",
        "fct-source": "src/Sound-SC3-Server-Process-CommandLine.html#rtCommandLine",
        "fct-type": "function",
        "title": "rtCommandLine"
      },
      "index": {
        "description": "Construct the scsynth command line from ServerOptions and RTOptions",
        "hierarchy": "Sound SC3 Server Process CommandLine",
        "module": "Sound.SC3.Server.Process.CommandLine",
        "name": "rtCommandLine",
        "normalized": "ServerOptions-\u003eRTOptions-\u003e[String]",
        "package": "hsc3-process",
        "partial": "Command Line",
        "signature": "ServerOptions-\u003eRTOptions-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Make.html#",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Make",
        "fct-package": "hsc3-process",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Server-Process-Make.html",
        "fct-type": "module",
        "title": "Make"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Make",
        "module": "Sound.SC3.Server.Process.Make",
        "name": "Make",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Make",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Make.html#v:makeNRT",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erenderNRT\u003c/a\u003e\u003c/code\u003e with simple modification-time\n dependencies.  If the output file exists, and is more recent than\n both the command file and the input audio file, rendering is not\n performed.  It is an error if either the command file or the input\n audio file, if specified, do not exist.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Make",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions-\u003e NRTOptions-\u003e FilePath-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "makeNRT"
      },
      "index": {
        "description": "Variant of renderNRT with simple modification-time dependencies If the output file exists and is more recent than both the command file and the input audio file rendering is not performed It is an error if either the command file or the input audio file if specified do not exist Since",
        "hierarchy": "Sound SC3 Server Process Make",
        "module": "Sound.SC3.Server.Process.Make",
        "name": "makeNRT",
        "normalized": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode",
        "package": "hsc3-process",
        "partial": "NRT",
        "signature": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Make.html#v:renderNRT",
      "description": {
        "fct-descr": "\u003cp\u003eRender NRT \u003ccode\u003escsynth\u003c/code\u003e score via \u003ccode\u003e\u003ca\u003erawSystem\u003c/a\u003e\u003c/code\u003e, returning the process' exit code.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Make",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions-\u003e NRTOptions-\u003e FilePath-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "renderNRT"
      },
      "index": {
        "description": "Render NRT scsynth score via rawSystem returning the process exit code Since",
        "hierarchy": "Sound SC3 Server Process Make",
        "module": "Sound.SC3.Server.Process.Make",
        "name": "renderNRT",
        "normalized": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode",
        "package": "hsc3-process",
        "partial": "NRT",
        "signature": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html",
        "fct-type": "module",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "Options",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:NRTOptions",
      "description": {
        "fct-descr": "\u003cp\u003eNon-realtime server options.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "data",
        "title": "NRTOptions"
      },
      "index": {
        "description": "Non-realtime server options",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "NRTOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "NRTOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:NetworkPort",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork port.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NetworkPort",
        "fct-type": "data",
        "title": "NetworkPort"
      },
      "index": {
        "description": "Network port",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "NetworkPort",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Network Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:RTOptions",
      "description": {
        "fct-descr": "\u003cp\u003eRealtime server options, parameterized by the OpenSoundControl\n \u003ccode\u003eTransport\u003c/code\u003e to be used.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "data",
        "title": "RTOptions"
      },
      "index": {
        "description": "Realtime server options parameterized by the OpenSoundControl Transport to be used",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "RTOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "RTOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:ServerOptions",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify general server options used both in realtime and non-realtime\n mode.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "data",
        "title": "ServerOptions"
      },
      "index": {
        "description": "Specify general server options used both in realtime and non-realtime mode",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "ServerOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:Verbosity",
      "description": {
        "fct-descr": "\u003cp\u003eUsed with the \u003ccode\u003e\u003ca\u003everbosity\u003c/a\u003e\u003c/code\u003e field in \u003ccode\u003e\u003ca\u003eServerOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "data",
        "title": "Verbosity"
      },
      "index": {
        "description": "Used with the verbosity field in ServerOptions",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "Verbosity",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:ExtremelyVerbose",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "ExtremelyVerbose",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "function",
        "title": "ExtremelyVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "ExtremelyVerbose",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Extremely Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:NRTOptions",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "NRTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "function",
        "title": "NRTOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "NRTOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "NRTOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Normal",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Normal",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "function",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "Normal",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Quiet",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Quiet",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "function",
        "title": "Quiet"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "Quiet",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Quiet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:RTOptions",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "RTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "RTOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "RTOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "RTOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:ServerOptions",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "ServerOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "ServerOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Silent",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Silent",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "function",
        "title": "Silent"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "Silent",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Silent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:TCPPort",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "TCPPort Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NetworkPort",
        "fct-type": "function",
        "title": "TCPPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "TCPPort",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "TCPPort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:UDPPort",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "UDPPort Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NetworkPort",
        "fct-type": "function",
        "title": "UDPPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "UDPPort",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "UDPPort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Verbose",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Verbose",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "function",
        "title": "Verbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "Verbose",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:VeryVerbose",
      "description": {
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "VeryVerbose",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
        "fct-type": "function",
        "title": "VeryVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "VeryVerbose",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Very Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:blockSize",
      "description": {
        "fct-descr": "\u003cp\u003eSynthesis block size\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "blockSize"
      },
      "index": {
        "description": "Synthesis block size",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "blockSize",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultNRTOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault non-realtime server options.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "NRTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultNRTOptions",
        "fct-type": "function",
        "title": "defaultNRTOptions"
      },
      "index": {
        "description": "Default non-realtime server options",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultNRTOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "NRTOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultRTOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault realtime server options.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "RTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultRTOptions",
        "fct-type": "function",
        "title": "defaultRTOptions"
      },
      "index": {
        "description": "Default realtime server options",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultRTOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "RTOptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultRTOptionsTCP",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use 'onPort defaultTCPPort' instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDefault realtime server options (TCP transport).\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "RTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultRTOptionsTCP",
        "fct-type": "function",
        "title": "defaultRTOptionsTCP"
      },
      "index": {
        "description": "Deprecated Use onPort defaultTCPPort instead Default realtime server options TCP transport",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultRTOptionsTCP",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "RTOptions TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultRTOptionsUDP",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use 'onPort defaultUDPPort' instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDefault realtime server options (UDP transport).\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "RTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultRTOptionsUDP",
        "fct-type": "function",
        "title": "defaultRTOptionsUDP"
      },
      "index": {
        "description": "Deprecated Use onPort defaultUDPPort instead Default realtime server options UDP transport",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultRTOptionsUDP",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "RTOptions UDP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultServerOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefault server options.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultServerOptions",
        "fct-type": "function",
        "title": "defaultServerOptions"
      },
      "index": {
        "description": "Default server options",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultServerOptions",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Server Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultTCPPort",
      "description": {
        "fct-descr": "\u003cp\u003eDefault TCP port.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "NetworkPort",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultTCPPort",
        "fct-type": "function",
        "title": "defaultTCPPort"
      },
      "index": {
        "description": "Default TCP port",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultTCPPort",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "TCPPort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultUDPPort",
      "description": {
        "fct-descr": "\u003cp\u003eDefault UDP port.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "NetworkPort",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#defaultUDPPort",
        "fct-type": "function",
        "title": "defaultUDPPort"
      },
      "index": {
        "description": "Default UDP port",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "defaultUDPPort",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "UDPPort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:fromApplicationBundle",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003escsynth\u003c/code\u003e from an OSX application bundle.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "FilePath -\u003e ServerOptions -\u003e ServerOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#fromApplicationBundle",
        "fct-type": "function",
        "title": "fromApplicationBundle"
      },
      "index": {
        "description": "Run scsynth from an OSX application bundle Since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "fromApplicationBundle",
        "normalized": "FilePath-\u003eServerOptions-\u003eServerOptions",
        "package": "hsc3-process",
        "partial": "Application Bundle",
        "signature": "FilePath-\u003eServerOptions-\u003eServerOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:fromBuildDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003escsynth\u003c/code\u003e from a SuperCollider build directory.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "FilePath -\u003e ServerOptions -\u003e ServerOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#fromBuildDirectory",
        "fct-type": "function",
        "title": "fromBuildDirectory"
      },
      "index": {
        "description": "Run scsynth from SuperCollider build directory Since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "fromBuildDirectory",
        "normalized": "FilePath-\u003eServerOptions-\u003eServerOptions",
        "package": "hsc3-process",
        "partial": "Build Directory",
        "signature": "FilePath-\u003eServerOptions-\u003eServerOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:fromPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003escsynth\u003c/code\u003e from a Linux installation prefix.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "FilePath -\u003e ServerOptions -\u003e ServerOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#fromPrefix",
        "fct-type": "function",
        "title": "fromPrefix"
      },
      "index": {
        "description": "Run scsynth from Linux installation prefix Since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "fromPrefix",
        "normalized": "FilePath-\u003eServerOptions-\u003eServerOptions",
        "package": "hsc3-process",
        "partial": "Prefix",
        "signature": "FilePath-\u003eServerOptions-\u003eServerOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:hardwareBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eHardware buffer size (no effect with JACK)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "hardwareBufferSize"
      },
      "index": {
        "description": "Hardware buffer size no effect with JACK",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "hardwareBufferSize",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:hardwareDeviceName",
      "description": {
        "fct-descr": "\u003cp\u003eHardware device name (see also \u003ccode\u003e\u003ca\u003ejackDeviceName\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe String",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "hardwareDeviceName"
      },
      "index": {
        "description": "Hardware device name see also jackDeviceName",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "hardwareDeviceName",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Device Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:hardwareSampleRate",
      "description": {
        "fct-descr": "\u003cp\u003eHardware buffer size (no effect with JACK)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "hardwareSampleRate"
      },
      "index": {
        "description": "Hardware buffer size no effect with JACK",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "hardwareSampleRate",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Sample Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:inputFilePath",
      "description": {
        "fct-descr": "\u003cp\u003ePath to input sound file (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for no audio input)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "function",
        "title": "inputFilePath"
      },
      "index": {
        "description": "Path to input sound file Nothing for no audio input",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "inputFilePath",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:inputStreamsEnabled",
      "description": {
        "fct-descr": "\u003cp\u003eEnabled input streams (CoreAudio only)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "inputStreamsEnabled"
      },
      "index": {
        "description": "Enabled input streams CoreAudio only",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "inputStreamsEnabled",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Streams Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:jackDeviceName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a JACK hardware device name from an optional server name and a\n   client name.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe String-\u003e String-\u003e String",
        "fct-type": "function",
        "title": "jackDeviceName"
      },
      "index": {
        "description": "Create JACK hardware device name from an optional server name and client name Since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "jackDeviceName",
        "normalized": "Maybe String-\u003eString-\u003eString",
        "package": "hsc3-process",
        "partial": "Device Name",
        "signature": "Maybe String-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:loadSynthDefs",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, load synth definitions from \u003cem\u003esynthdefs\u003c/em\u003e directory on startup\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Bool",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "loadSynthDefs"
      },
      "index": {
        "description": "If True load synth definitions from synthdefs directory on startup",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "loadSynthDefs",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Synth Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:maxNumberOfLogins",
      "description": {
        "fct-descr": "\u003cp\u003eMax number of supported logins if \u003ccode\u003e\u003ca\u003esessionPassword\u003c/a\u003e\u003c/code\u003e is set\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "maxNumberOfLogins"
      },
      "index": {
        "description": "Max number of supported logins if sessionPassword is set",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "maxNumberOfLogins",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Number Of Logins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:maxNumberOfNodes",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of synthesis nodes\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "maxNumberOfNodes"
      },
      "index": {
        "description": "Maximum number of synthesis nodes",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "maxNumberOfNodes",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Number Of Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:maxNumberOfSynthDefs",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of synth definitions\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "maxNumberOfSynthDefs"
      },
      "index": {
        "description": "Maximum number of synth definitions",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "maxNumberOfSynthDefs",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Number Of Synth Defs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:networkPort",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork port\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "NetworkPort",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "networkPort"
      },
      "index": {
        "description": "Network port",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "networkPort",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfAudioBusChannels",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated audio bus channels\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfAudioBusChannels"
      },
      "index": {
        "description": "Number of allocated audio bus channels",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfAudioBusChannels",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Audio Bus Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfControlBusChannels",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated control bus channels\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfControlBusChannels"
      },
      "index": {
        "description": "Number of allocated control bus channels",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfControlBusChannels",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Control Bus Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfInputBusChannels",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of physical input channels\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfInputBusChannels"
      },
      "index": {
        "description": "Number of physical input channels",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfInputBusChannels",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Input Bus Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfOutputBusChannels",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of physical output channels\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfOutputBusChannels"
      },
      "index": {
        "description": "Number of physical output channels",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfOutputBusChannels",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Output Bus Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfRandomSeeds",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of random number generator seeds\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfRandomSeeds"
      },
      "index": {
        "description": "Number of random number generator seeds",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfRandomSeeds",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Random Seeds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfSampleBuffers",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of allocated sample buffers\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfSampleBuffers"
      },
      "index": {
        "description": "Number of allocated sample buffers",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfSampleBuffers",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Sample Buffers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfWireBuffers",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of unit generator connection buffers\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "numberOfWireBuffers"
      },
      "index": {
        "description": "Number of unit generator connection buffers",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "numberOfWireBuffers",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Of Wire Buffers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:onPort",
      "description": {
        "fct-descr": "\u003cp\u003eCreate RTOptions with a specific network port.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "NetworkPort -\u003e RTOptions",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#onPort",
        "fct-type": "function",
        "title": "onPort"
      },
      "index": {
        "description": "Create RTOptions with specific network port Since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "onPort",
        "normalized": "NetworkPort-\u003eRTOptions",
        "package": "hsc3-process",
        "partial": "Port",
        "signature": "NetworkPort-\u003eRTOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputFilePath",
      "description": {
        "fct-descr": "\u003cp\u003ePath to output sound file\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "FilePath",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "function",
        "title": "outputFilePath"
      },
      "index": {
        "description": "Path to output sound file",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "outputFilePath",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputSampleFormat",
      "description": {
        "fct-descr": "\u003cp\u003eOutput sound file sample format\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "SampleFormat",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "function",
        "title": "outputSampleFormat"
      },
      "index": {
        "description": "Output sound file sample format",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "outputSampleFormat",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Sample Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputSampleRate",
      "description": {
        "fct-descr": "\u003cp\u003eOutput sound file sample rate\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "function",
        "title": "outputSampleRate"
      },
      "index": {
        "description": "Output sound file sample rate",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "outputSampleRate",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Sample Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputSoundFileFormat",
      "description": {
        "fct-descr": "\u003cp\u003eOutput sound file header format (since 0.8.0)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "SoundFileFormat",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
        "fct-type": "function",
        "title": "outputSoundFileFormat"
      },
      "index": {
        "description": "Output sound file header format since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "outputSoundFileFormat",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Sound File Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputStreamsEnabled",
      "description": {
        "fct-descr": "\u003cp\u003eEnabled output streams (CoreAudio only)\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "outputStreamsEnabled"
      },
      "index": {
        "description": "Enabled output streams CoreAudio only",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "outputStreamsEnabled",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Streams Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:realtimeMemorySize",
      "description": {
        "fct-descr": "\u003cp\u003eRealtime memory size in bytes\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Int",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "realtimeMemorySize"
      },
      "index": {
        "description": "Realtime memory size in bytes",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "realtimeMemorySize",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Memory Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:restrictedPath",
      "description": {
        "fct-descr": "\u003cp\u003eSandbox path to restrict OSC command filesystem access\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "restrictedPath"
      },
      "index": {
        "description": "Sandbox path to restrict OSC command filesystem access",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "restrictedPath",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:serverProgram",
      "description": {
        "fct-descr": "\u003cp\u003ePath to the \u003ccode\u003escsynth\u003c/code\u003e program\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "FilePath",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "serverProgram"
      },
      "index": {
        "description": "Path to the scsynth program",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "serverProgram",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:sessionPassword",
      "description": {
        "fct-descr": "\u003cp\u003eSession password\n Audio device control\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe String",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "sessionPassword"
      },
      "index": {
        "description": "Session password Audio device control",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "sessionPassword",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:ugenPluginPath",
      "description": {
        "fct-descr": "\u003cp\u003eList of UGen plugin search paths\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe [FilePath]",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "ugenPluginPath"
      },
      "index": {
        "description": "List of UGen plugin search paths",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "ugenPluginPath",
        "normalized": "Maybe[FilePath]",
        "package": "hsc3-process",
        "partial": "Plugin Path",
        "signature": "Maybe[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:useZeroconf",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, publish scsynth service through Zeroconf\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Bool",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
        "fct-type": "function",
        "title": "useZeroconf"
      },
      "index": {
        "description": "If True publish scsynth service through Zeroconf",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "useZeroconf",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Zeroconf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:verbosity",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVerbosity\u003c/a\u003e\u003c/code\u003e level\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Verbosity",
        "fct-source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
        "fct-type": "function",
        "title": "verbosity"
      },
      "index": {
        "description": "Verbosity level",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "verbosity",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:withJackDeviceName",
      "description": {
        "fct-descr": "\u003cp\u003eModify options to use a jack device name based on an optional server name\n   and a client name.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process.Options",
        "fct-package": "hsc3-process",
        "fct-signature": "Maybe String-\u003e String-\u003e RTOptions-\u003e RTOptions",
        "fct-type": "function",
        "title": "withJackDeviceName"
      },
      "index": {
        "description": "Modify options to use jack device name based on an optional server name and client name Since",
        "hierarchy": "Sound SC3 Server Process Options",
        "module": "Sound.SC3.Server.Process.Options",
        "name": "withJackDeviceName",
        "normalized": "Maybe String-\u003eString-\u003eRTOptions-\u003eRTOptions",
        "package": "hsc3-process",
        "partial": "Jack Device Name",
        "signature": "Maybe String-\u003eString-\u003eRTOptions-\u003eRTOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes utilities for spawning an external scsynth process,\n either for realtime or non-realtime execution, and for connecting to existing\n processes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Server-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "This module includes utilities for spawning an external scsynth process either for realtime or non-realtime execution and for connecting to existing processes",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "Process",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#t:NetworkTransport",
      "description": {
        "fct-descr": "\u003cp\u003eNetwork transport wrapper.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process.html#NetworkTransport",
        "fct-type": "data",
        "title": "NetworkTransport"
      },
      "index": {
        "description": "Network transport wrapper",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "NetworkTransport",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Network Transport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#t:OutputHandler",
      "description": {
        "fct-descr": "\u003cp\u003eHandle output of external \u003ccode\u003escsynth\u003c/code\u003e processes.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Server-Process.html#OutputHandler",
        "fct-type": "data",
        "title": "OutputHandler"
      },
      "index": {
        "description": "Handle output of external scsynth processes",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "OutputHandler",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Output Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:OutputHandler",
      "description": {
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "OutputHandler",
        "fct-source": "src/Sound-SC3-Server-Process.html#OutputHandler",
        "fct-type": "function",
        "title": "OutputHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "OutputHandler",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Output Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:defaultOutputHandler",
      "description": {
        "fct-descr": "\u003cp\u003eDefault IO handler, writing to stdout and stderr, respectively.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "OutputHandler",
        "fct-source": "src/Sound-SC3-Server-Process.html#defaultOutputHandler",
        "fct-type": "function",
        "title": "defaultOutputHandler"
      },
      "index": {
        "description": "Default IO handler writing to stdout and stderr respectively",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "defaultOutputHandler",
        "normalized": "",
        "package": "hsc3-process",
        "partial": "Output Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:onPutError",
      "description": {
        "fct-descr": "\u003cp\u003eHandle one line of error output\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Sound-SC3-Server-Process.html#OutputHandler",
        "fct-type": "function",
        "title": "onPutError"
      },
      "index": {
        "description": "Handle one line of error output",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "onPutError",
        "normalized": "String-\u003eIO()",
        "package": "hsc3-process",
        "partial": "Put Error",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:onPutString",
      "description": {
        "fct-descr": "\u003cp\u003eHandle one line of normal output\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Sound-SC3-Server-Process.html#OutputHandler",
        "fct-type": "function",
        "title": "onPutString"
      },
      "index": {
        "description": "Handle one line of normal output",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "onPutString",
        "normalized": "String-\u003eIO()",
        "package": "hsc3-process",
        "partial": "Put String",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:runNRT",
      "description": {
        "fct-descr": "\u003cp\u003eRender a NRT score by executing an instance of \u003ccode\u003escsynth\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions-\u003e NRTOptions-\u003e OutputHandler-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "runNRT"
      },
      "index": {
        "description": "Render NRT score by executing an instance of scsynth Since",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "runNRT",
        "normalized": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003eFilePath-\u003eIO()",
        "package": "hsc3-process",
        "partial": "NRT",
        "signature": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:withNRT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a non-realtime instance of \u003ccode\u003escsynth\u003c/code\u003e and pass the process' input\n   handle to \u003cem\u003eAction\u003c/em\u003e and return the result.\n\u003c/p\u003e\u003cp\u003eGHC Note: in order to call \u003ccode\u003ewithNRT\u003c/code\u003e without blocking all the other threads\n in the system, you must compile the program with \u003ccode\u003e-threaded\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions-\u003e NRTOptions-\u003e OutputHandler-\u003e (Handle -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withNRT"
      },
      "index": {
        "description": "Execute non-realtime instance of scsynth and pass the process input handle to Action and return the result GHC Note in order to call withNRT without blocking all the other threads in the system you must compile the program with threaded Since",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "withNRT",
        "normalized": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003e(Handle-\u003eIO a)-\u003eIO a",
        "package": "hsc3-process",
        "partial": "NRT",
        "signature": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003e(Handle-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:withSynth",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a realtime instance of \u003ccode\u003escsynth\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e t.\n\u003c/p\u003e\u003cp\u003eThe spawned \u003ccode\u003escsynth\u003c/code\u003e is sent a \u003ccode\u003e/quit\u003c/code\u003e message after the supplied action\n returns.\n\u003c/p\u003e\u003cp\u003eGHC Note: in order to call \u003ccode\u003ewithSynth\u003c/code\u003e without blocking all the other threads\n in the system, you must compile the program with \u003ccode\u003e-threaded\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions-\u003e RTOptions-\u003e OutputHandler-\u003e (NetworkTransport -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withSynth"
      },
      "index": {
        "description": "Execute realtime instance of scsynth with Transport The spawned scsynth is sent quit message after the supplied action returns GHC Note in order to call withSynth without blocking all the other threads in the system you must compile the program with threaded",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "withSynth",
        "normalized": "ServerOptions-\u003eRTOptions-\u003eOutputHandler-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a",
        "package": "hsc3-process",
        "partial": "Synth",
        "signature": "ServerOptions-\u003eRTOptions-\u003eOutputHandler-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:withTransport",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a transport to a running \u003ccode\u003escsynth\u003c/code\u003e process determined by \u003ccode\u003e\u003ca\u003enetworkPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Server.Process",
        "fct-package": "hsc3-process",
        "fct-signature": "ServerOptions-\u003e RTOptions-\u003e Maybe String-\u003e (NetworkTransport -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withTransport"
      },
      "index": {
        "description": "Open transport to running scsynth process determined by networkPort",
        "hierarchy": "Sound SC3 Server Process",
        "module": "Sound.SC3.Server.Process",
        "name": "withTransport",
        "normalized": "ServerOptions-\u003eRTOptions-\u003eMaybe String-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a",
        "package": "hsc3-process",
        "partial": "Transport",
        "signature": "ServerOptions-\u003eRTOptions-\u003eMaybe String-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a"
      }
    }
  }
]