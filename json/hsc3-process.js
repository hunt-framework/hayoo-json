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
        "word": "hsc3-process"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.CommandLine",
          "name": "CommandLine",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-CommandLine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process CommandLine",
          "module": "Sound.SC3.Server.Process.CommandLine",
          "name": "CommandLine",
          "package": "hsc3-process",
          "partial": "Command Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-CommandLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the scsynth command line from \u003ccode\u003e\u003ca\u003eServerOptions\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNRTOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.CommandLine",
          "name": "nrtCommandLine",
          "package": "hsc3-process",
          "signature": "ServerOptions -\u003e NRTOptions -\u003e Maybe FilePath -\u003e [String]",
          "source": "src/Sound-SC3-Server-Process-CommandLine.html#nrtCommandLine",
          "type": "function"
        },
        "index": {
          "description": "Construct the scsynth command line from ServerOptions and NRTOptions",
          "hierarchy": "Sound SC3 Server Process CommandLine",
          "module": "Sound.SC3.Server.Process.CommandLine",
          "name": "nrtCommandLine",
          "normalized": "ServerOptions-\u003eNRTOptions-\u003eMaybe FilePath-\u003e[String]",
          "package": "hsc3-process",
          "partial": "Command Line",
          "signature": "ServerOptions-\u003eNRTOptions-\u003eMaybe FilePath-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-CommandLine.html#v:nrtCommandLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the scsynth command line from \u003ccode\u003e\u003ca\u003eServerOptions\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRTOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.CommandLine",
          "name": "rtCommandLine",
          "package": "hsc3-process",
          "signature": "ServerOptions -\u003e RTOptions -\u003e [String]",
          "source": "src/Sound-SC3-Server-Process-CommandLine.html#rtCommandLine",
          "type": "function"
        },
        "index": {
          "description": "Construct the scsynth command line from ServerOptions and RTOptions",
          "hierarchy": "Sound SC3 Server Process CommandLine",
          "module": "Sound.SC3.Server.Process.CommandLine",
          "name": "rtCommandLine",
          "normalized": "ServerOptions-\u003eRTOptions-\u003e[String]",
          "package": "hsc3-process",
          "partial": "Command Line",
          "signature": "ServerOptions-\u003eRTOptions-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-CommandLine.html#v:rtCommandLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Make",
          "name": "Make",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Make.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Make",
          "module": "Sound.SC3.Server.Process.Make",
          "name": "Make",
          "package": "hsc3-process",
          "partial": "Make",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Make.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003erenderNRT\u003c/a\u003e\u003c/code\u003e with simple modification-time\n dependencies.  If the output file exists, and is more recent than\n both the command file and the input audio file, rendering is not\n performed.  It is an error if either the command file or the input\n audio file, if specified, do not exist.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Make",
          "name": "makeNRT",
          "package": "hsc3-process",
          "signature": "ServerOptions-\u003e NRTOptions-\u003e FilePath-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Variant of renderNRT with simple modification-time dependencies If the output file exists and is more recent than both the command file and the input audio file rendering is not performed It is an error if either the command file or the input audio file if specified do not exist Since",
          "hierarchy": "Sound SC3 Server Process Make",
          "module": "Sound.SC3.Server.Process.Make",
          "name": "makeNRT",
          "normalized": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode",
          "package": "hsc3-process",
          "partial": "NRT",
          "signature": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Make.html#v:makeNRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender NRT \u003ccode\u003escsynth\u003c/code\u003e score via \u003ccode\u003e\u003ca\u003erawSystem\u003c/a\u003e\u003c/code\u003e, returning the process' exit code.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Make",
          "name": "renderNRT",
          "package": "hsc3-process",
          "signature": "ServerOptions-\u003e NRTOptions-\u003e FilePath-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Render NRT scsynth score via rawSystem returning the process exit code Since",
          "hierarchy": "Sound SC3 Server Process Make",
          "module": "Sound.SC3.Server.Process.Make",
          "name": "renderNRT",
          "normalized": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode",
          "package": "hsc3-process",
          "partial": "NRT",
          "signature": "ServerOptions-\u003eNRTOptions-\u003eFilePath-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Make.html#v:renderNRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Options",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Options",
          "package": "hsc3-process",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-realtime server options.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "NRTOptions",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "data"
        },
        "index": {
          "description": "Non-realtime server options",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "NRTOptions",
          "package": "hsc3-process",
          "partial": "NRTOptions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:NRTOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork port.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "NetworkPort",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Options.html#NetworkPort",
          "type": "data"
        },
        "index": {
          "description": "Network port",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "NetworkPort",
          "package": "hsc3-process",
          "partial": "Network Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:NetworkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRealtime server options, parameterized by the OpenSoundControl\n \u003ccode\u003eTransport\u003c/code\u003e to be used.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "RTOptions",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "data"
        },
        "index": {
          "description": "Realtime server options parameterized by the OpenSoundControl Transport to be used",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "RTOptions",
          "package": "hsc3-process",
          "partial": "RTOptions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:RTOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify general server options used both in realtime and non-realtime\n mode.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ServerOptions",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "data"
        },
        "index": {
          "description": "Specify general server options used both in realtime and non-realtime mode",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ServerOptions",
          "package": "hsc3-process",
          "partial": "Server Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:ServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed with the \u003ccode\u003e\u003ca\u003everbosity\u003c/a\u003e\u003c/code\u003e field in \u003ccode\u003e\u003ca\u003eServerOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Verbosity",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "data"
        },
        "index": {
          "description": "Used with the verbosity field in ServerOptions",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Verbosity",
          "package": "hsc3-process",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ExtremelyVerbose",
          "package": "hsc3-process",
          "signature": "ExtremelyVerbose",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ExtremelyVerbose",
          "package": "hsc3-process",
          "partial": "Extremely Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:ExtremelyVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "NRTOptions",
          "package": "hsc3-process",
          "signature": "NRTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "NRTOptions",
          "package": "hsc3-process",
          "partial": "NRTOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:NRTOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Normal",
          "package": "hsc3-process",
          "signature": "Normal",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Normal",
          "package": "hsc3-process",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Quiet",
          "package": "hsc3-process",
          "signature": "Quiet",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Quiet",
          "package": "hsc3-process",
          "partial": "Quiet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "RTOptions",
          "package": "hsc3-process",
          "signature": "RTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "RTOptions",
          "package": "hsc3-process",
          "partial": "RTOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:RTOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ServerOptions",
          "package": "hsc3-process",
          "signature": "ServerOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ServerOptions",
          "package": "hsc3-process",
          "partial": "Server Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:ServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Silent",
          "package": "hsc3-process",
          "signature": "Silent",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Silent",
          "package": "hsc3-process",
          "partial": "Silent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "TCPPort",
          "package": "hsc3-process",
          "signature": "TCPPort Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#NetworkPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "TCPPort",
          "package": "hsc3-process",
          "partial": "TCPPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:TCPPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "UDPPort",
          "package": "hsc3-process",
          "signature": "UDPPort Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#NetworkPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "UDPPort",
          "package": "hsc3-process",
          "partial": "UDPPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:UDPPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Verbose",
          "package": "hsc3-process",
          "signature": "Verbose",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "Verbose",
          "package": "hsc3-process",
          "partial": "Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:Verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process.Options",
          "name": "VeryVerbose",
          "package": "hsc3-process",
          "signature": "VeryVerbose",
          "source": "src/Sound-SC3-Server-Process-Options.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "VeryVerbose",
          "package": "hsc3-process",
          "partial": "Very Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:VeryVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynthesis block size\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "blockSize",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Synthesis block size",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "blockSize",
          "package": "hsc3-process",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault non-realtime server options.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultNRTOptions",
          "package": "hsc3-process",
          "signature": "NRTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultNRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Default non-realtime server options",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultNRTOptions",
          "package": "hsc3-process",
          "partial": "NRTOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultNRTOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault realtime server options.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultRTOptions",
          "package": "hsc3-process",
          "signature": "RTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Default realtime server options",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultRTOptions",
          "package": "hsc3-process",
          "partial": "RTOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultRTOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use 'onPort defaultTCPPort' instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDefault realtime server options (TCP transport).\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultRTOptionsTCP",
          "package": "hsc3-process",
          "signature": "RTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultRTOptionsTCP",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use onPort defaultTCPPort instead Default realtime server options TCP transport",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultRTOptionsTCP",
          "package": "hsc3-process",
          "partial": "RTOptions TCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultRTOptionsTCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use 'onPort defaultUDPPort' instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDefault realtime server options (UDP transport).\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultRTOptionsUDP",
          "package": "hsc3-process",
          "signature": "RTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultRTOptionsUDP",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use onPort defaultUDPPort instead Default realtime server options UDP transport",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultRTOptionsUDP",
          "package": "hsc3-process",
          "partial": "RTOptions UDP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultRTOptionsUDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault server options.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultServerOptions",
          "package": "hsc3-process",
          "signature": "ServerOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Default server options",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultServerOptions",
          "package": "hsc3-process",
          "partial": "Server Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultServerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault TCP port.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultTCPPort",
          "package": "hsc3-process",
          "signature": "NetworkPort",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultTCPPort",
          "type": "function"
        },
        "index": {
          "description": "Default TCP port",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultTCPPort",
          "package": "hsc3-process",
          "partial": "TCPPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultTCPPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault UDP port.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultUDPPort",
          "package": "hsc3-process",
          "signature": "NetworkPort",
          "source": "src/Sound-SC3-Server-Process-Options.html#defaultUDPPort",
          "type": "function"
        },
        "index": {
          "description": "Default UDP port",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "defaultUDPPort",
          "package": "hsc3-process",
          "partial": "UDPPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:defaultUDPPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003escsynth\u003c/code\u003e from an OSX application bundle.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "fromApplicationBundle",
          "package": "hsc3-process",
          "signature": "FilePath -\u003e ServerOptions -\u003e ServerOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#fromApplicationBundle",
          "type": "function"
        },
        "index": {
          "description": "Run scsynth from an OSX application bundle Since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "fromApplicationBundle",
          "normalized": "FilePath-\u003eServerOptions-\u003eServerOptions",
          "package": "hsc3-process",
          "partial": "Application Bundle",
          "signature": "FilePath-\u003eServerOptions-\u003eServerOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:fromApplicationBundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003escsynth\u003c/code\u003e from a SuperCollider build directory.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "fromBuildDirectory",
          "package": "hsc3-process",
          "signature": "FilePath -\u003e ServerOptions -\u003e ServerOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#fromBuildDirectory",
          "type": "function"
        },
        "index": {
          "description": "Run scsynth from SuperCollider build directory Since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "fromBuildDirectory",
          "normalized": "FilePath-\u003eServerOptions-\u003eServerOptions",
          "package": "hsc3-process",
          "partial": "Build Directory",
          "signature": "FilePath-\u003eServerOptions-\u003eServerOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:fromBuildDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003escsynth\u003c/code\u003e from a Linux installation prefix.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "fromPrefix",
          "package": "hsc3-process",
          "signature": "FilePath -\u003e ServerOptions -\u003e ServerOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#fromPrefix",
          "type": "function"
        },
        "index": {
          "description": "Run scsynth from Linux installation prefix Since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "fromPrefix",
          "normalized": "FilePath-\u003eServerOptions-\u003eServerOptions",
          "package": "hsc3-process",
          "partial": "Prefix",
          "signature": "FilePath-\u003eServerOptions-\u003eServerOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:fromPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHardware buffer size (no effect with JACK)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "hardwareBufferSize",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Hardware buffer size no effect with JACK",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "hardwareBufferSize",
          "package": "hsc3-process",
          "partial": "Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:hardwareBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHardware device name (see also \u003ccode\u003e\u003ca\u003ejackDeviceName\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "hardwareDeviceName",
          "package": "hsc3-process",
          "signature": "Maybe String",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Hardware device name see also jackDeviceName",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "hardwareDeviceName",
          "package": "hsc3-process",
          "partial": "Device Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:hardwareDeviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHardware buffer size (no effect with JACK)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "hardwareSampleRate",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Hardware buffer size no effect with JACK",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "hardwareSampleRate",
          "package": "hsc3-process",
          "partial": "Sample Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:hardwareSampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to input sound file (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for no audio input)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "inputFilePath",
          "package": "hsc3-process",
          "signature": "Maybe FilePath",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Path to input sound file Nothing for no audio input",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "inputFilePath",
          "package": "hsc3-process",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:inputFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnabled input streams (CoreAudio only)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "inputStreamsEnabled",
          "package": "hsc3-process",
          "signature": "Maybe Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Enabled input streams CoreAudio only",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "inputStreamsEnabled",
          "package": "hsc3-process",
          "partial": "Streams Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:inputStreamsEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a JACK hardware device name from an optional server name and a\n   client name.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "jackDeviceName",
          "package": "hsc3-process",
          "signature": "Maybe String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Create JACK hardware device name from an optional server name and client name Since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "jackDeviceName",
          "normalized": "Maybe String-\u003eString-\u003eString",
          "package": "hsc3-process",
          "partial": "Device Name",
          "signature": "Maybe String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:jackDeviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, load synth definitions from \u003cem\u003esynthdefs\u003c/em\u003e directory on startup\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "loadSynthDefs",
          "package": "hsc3-process",
          "signature": "Bool",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "If True load synth definitions from synthdefs directory on startup",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "loadSynthDefs",
          "package": "hsc3-process",
          "partial": "Synth Defs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:loadSynthDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMax number of supported logins if \u003ccode\u003e\u003ca\u003esessionPassword\u003c/a\u003e\u003c/code\u003e is set\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "maxNumberOfLogins",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Max number of supported logins if sessionPassword is set",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "maxNumberOfLogins",
          "package": "hsc3-process",
          "partial": "Number Of Logins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:maxNumberOfLogins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of synthesis nodes\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "maxNumberOfNodes",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of synthesis nodes",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "maxNumberOfNodes",
          "package": "hsc3-process",
          "partial": "Number Of Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:maxNumberOfNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of synth definitions\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "maxNumberOfSynthDefs",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of synth definitions",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "maxNumberOfSynthDefs",
          "package": "hsc3-process",
          "partial": "Number Of Synth Defs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:maxNumberOfSynthDefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork port\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "networkPort",
          "package": "hsc3-process",
          "signature": "NetworkPort",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Network port",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "networkPort",
          "package": "hsc3-process",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:networkPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of allocated audio bus channels\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfAudioBusChannels",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of allocated audio bus channels",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfAudioBusChannels",
          "package": "hsc3-process",
          "partial": "Of Audio Bus Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfAudioBusChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of allocated control bus channels\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfControlBusChannels",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of allocated control bus channels",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfControlBusChannels",
          "package": "hsc3-process",
          "partial": "Of Control Bus Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfControlBusChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of physical input channels\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfInputBusChannels",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of physical input channels",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfInputBusChannels",
          "package": "hsc3-process",
          "partial": "Of Input Bus Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfInputBusChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of physical output channels\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfOutputBusChannels",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of physical output channels",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfOutputBusChannels",
          "package": "hsc3-process",
          "partial": "Of Output Bus Channels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfOutputBusChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of random number generator seeds\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfRandomSeeds",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of random number generator seeds",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfRandomSeeds",
          "package": "hsc3-process",
          "partial": "Of Random Seeds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfRandomSeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of allocated sample buffers\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfSampleBuffers",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of allocated sample buffers",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfSampleBuffers",
          "package": "hsc3-process",
          "partial": "Of Sample Buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfSampleBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of unit generator connection buffers\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfWireBuffers",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of unit generator connection buffers",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "numberOfWireBuffers",
          "package": "hsc3-process",
          "partial": "Of Wire Buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:numberOfWireBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate RTOptions with a specific network port.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "onPort",
          "package": "hsc3-process",
          "signature": "NetworkPort -\u003e RTOptions",
          "source": "src/Sound-SC3-Server-Process-Options.html#onPort",
          "type": "function"
        },
        "index": {
          "description": "Create RTOptions with specific network port Since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "onPort",
          "normalized": "NetworkPort-\u003eRTOptions",
          "package": "hsc3-process",
          "partial": "Port",
          "signature": "NetworkPort-\u003eRTOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:onPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to output sound file\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputFilePath",
          "package": "hsc3-process",
          "signature": "FilePath",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Path to output sound file",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputFilePath",
          "package": "hsc3-process",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput sound file sample format\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputSampleFormat",
          "package": "hsc3-process",
          "signature": "SampleFormat",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Output sound file sample format",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputSampleFormat",
          "package": "hsc3-process",
          "partial": "Sample Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputSampleFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput sound file sample rate\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputSampleRate",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Output sound file sample rate",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputSampleRate",
          "package": "hsc3-process",
          "partial": "Sample Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputSampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput sound file header format (since 0.8.0)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputSoundFileFormat",
          "package": "hsc3-process",
          "signature": "SoundFileFormat",
          "source": "src/Sound-SC3-Server-Process-Options.html#NRTOptions",
          "type": "function"
        },
        "index": {
          "description": "Output sound file header format since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputSoundFileFormat",
          "package": "hsc3-process",
          "partial": "Sound File Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputSoundFileFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnabled output streams (CoreAudio only)\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputStreamsEnabled",
          "package": "hsc3-process",
          "signature": "Maybe Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Enabled output streams CoreAudio only",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "outputStreamsEnabled",
          "package": "hsc3-process",
          "partial": "Streams Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:outputStreamsEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRealtime memory size in bytes\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "realtimeMemorySize",
          "package": "hsc3-process",
          "signature": "Int",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Realtime memory size in bytes",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "realtimeMemorySize",
          "package": "hsc3-process",
          "partial": "Memory Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:realtimeMemorySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSandbox path to restrict OSC command filesystem access\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "restrictedPath",
          "package": "hsc3-process",
          "signature": "Maybe FilePath",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Sandbox path to restrict OSC command filesystem access",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "restrictedPath",
          "package": "hsc3-process",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:restrictedPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the \u003ccode\u003escsynth\u003c/code\u003e program\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "serverProgram",
          "package": "hsc3-process",
          "signature": "FilePath",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Path to the scsynth program",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "serverProgram",
          "package": "hsc3-process",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:serverProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession password\n Audio device control\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "sessionPassword",
          "package": "hsc3-process",
          "signature": "Maybe String",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Session password Audio device control",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "sessionPassword",
          "package": "hsc3-process",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:sessionPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of UGen plugin search paths\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ugenPluginPath",
          "package": "hsc3-process",
          "signature": "Maybe [FilePath]",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "List of UGen plugin search paths",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "ugenPluginPath",
          "normalized": "Maybe[FilePath]",
          "package": "hsc3-process",
          "partial": "Plugin Path",
          "signature": "Maybe[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:ugenPluginPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, publish scsynth service through Zeroconf\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "useZeroconf",
          "package": "hsc3-process",
          "signature": "Bool",
          "source": "src/Sound-SC3-Server-Process-Options.html#RTOptions",
          "type": "function"
        },
        "index": {
          "description": "If True publish scsynth service through Zeroconf",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "useZeroconf",
          "package": "hsc3-process",
          "partial": "Zeroconf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:useZeroconf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVerbosity\u003c/a\u003e\u003c/code\u003e level\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "verbosity",
          "package": "hsc3-process",
          "signature": "Verbosity",
          "source": "src/Sound-SC3-Server-Process-Options.html#ServerOptions",
          "type": "function"
        },
        "index": {
          "description": "Verbosity level",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "verbosity",
          "package": "hsc3-process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify options to use a jack device name based on an optional server name\n   and a client name.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "withJackDeviceName",
          "package": "hsc3-process",
          "signature": "Maybe String-\u003e String-\u003e RTOptions-\u003e RTOptions",
          "type": "function"
        },
        "index": {
          "description": "Modify options to use jack device name based on an optional server name and client name Since",
          "hierarchy": "Sound SC3 Server Process Options",
          "module": "Sound.SC3.Server.Process.Options",
          "name": "withJackDeviceName",
          "normalized": "Maybe String-\u003eString-\u003eRTOptions-\u003eRTOptions",
          "package": "hsc3-process",
          "partial": "Jack Device Name",
          "signature": "Maybe String-\u003eString-\u003eRTOptions-\u003eRTOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process-Options.html#v:withJackDeviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module includes utilities for spawning an external scsynth process,\n either for realtime or non-realtime execution, and for connecting to existing\n processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "Process",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process.html",
          "type": "module"
        },
        "index": {
          "description": "This module includes utilities for spawning an external scsynth process either for realtime or non-realtime execution and for connecting to existing processes",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "Process",
          "package": "hsc3-process",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork transport wrapper.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "NetworkTransport",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process.html#NetworkTransport",
          "type": "data"
        },
        "index": {
          "description": "Network transport wrapper",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "NetworkTransport",
          "package": "hsc3-process",
          "partial": "Network Transport",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#t:NetworkTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle output of external \u003ccode\u003escsynth\u003c/code\u003e processes.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "OutputHandler",
          "package": "hsc3-process",
          "source": "src/Sound-SC3-Server-Process.html#OutputHandler",
          "type": "data"
        },
        "index": {
          "description": "Handle output of external scsynth processes",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "OutputHandler",
          "package": "hsc3-process",
          "partial": "Output Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#t:OutputHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Server.Process",
          "name": "OutputHandler",
          "package": "hsc3-process",
          "signature": "OutputHandler",
          "source": "src/Sound-SC3-Server-Process.html#OutputHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "OutputHandler",
          "package": "hsc3-process",
          "partial": "Output Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:OutputHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault IO handler, writing to stdout and stderr, respectively.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "defaultOutputHandler",
          "package": "hsc3-process",
          "signature": "OutputHandler",
          "source": "src/Sound-SC3-Server-Process.html#defaultOutputHandler",
          "type": "function"
        },
        "index": {
          "description": "Default IO handler writing to stdout and stderr respectively",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "defaultOutputHandler",
          "package": "hsc3-process",
          "partial": "Output Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:defaultOutputHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle one line of error output\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "onPutError",
          "package": "hsc3-process",
          "signature": "String -\u003e IO ()",
          "source": "src/Sound-SC3-Server-Process.html#OutputHandler",
          "type": "function"
        },
        "index": {
          "description": "Handle one line of error output",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "onPutError",
          "normalized": "String-\u003eIO()",
          "package": "hsc3-process",
          "partial": "Put Error",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:onPutError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle one line of normal output\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "onPutString",
          "package": "hsc3-process",
          "signature": "String -\u003e IO ()",
          "source": "src/Sound-SC3-Server-Process.html#OutputHandler",
          "type": "function"
        },
        "index": {
          "description": "Handle one line of normal output",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "onPutString",
          "normalized": "String-\u003eIO()",
          "package": "hsc3-process",
          "partial": "Put String",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:onPutString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a NRT score by executing an instance of \u003ccode\u003escsynth\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "runNRT",
          "package": "hsc3-process",
          "signature": "ServerOptions-\u003e NRTOptions-\u003e OutputHandler-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Render NRT score by executing an instance of scsynth Since",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "runNRT",
          "normalized": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003eFilePath-\u003eIO()",
          "package": "hsc3-process",
          "partial": "NRT",
          "signature": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:runNRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a non-realtime instance of \u003ccode\u003escsynth\u003c/code\u003e and pass the process' input\n   handle to \u003cem\u003eAction\u003c/em\u003e and return the result.\n\u003c/p\u003e\u003cp\u003eGHC Note: in order to call \u003ccode\u003ewithNRT\u003c/code\u003e without blocking all the other threads\n in the system, you must compile the program with \u003ccode\u003e-threaded\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.8.0\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "withNRT",
          "package": "hsc3-process",
          "signature": "ServerOptions-\u003e NRTOptions-\u003e OutputHandler-\u003e (Handle -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Execute non-realtime instance of scsynth and pass the process input handle to Action and return the result GHC Note in order to call withNRT without blocking all the other threads in the system you must compile the program with threaded Since",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "withNRT",
          "normalized": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "package": "hsc3-process",
          "partial": "NRT",
          "signature": "ServerOptions-\u003eNRTOptions-\u003eOutputHandler-\u003e(Handle-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:withNRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a realtime instance of \u003ccode\u003escsynth\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e t.\n\u003c/p\u003e\u003cp\u003eThe spawned \u003ccode\u003escsynth\u003c/code\u003e is sent a \u003ccode\u003e/quit\u003c/code\u003e message after the supplied action\n returns.\n\u003c/p\u003e\u003cp\u003eGHC Note: in order to call \u003ccode\u003ewithSynth\u003c/code\u003e without blocking all the other threads\n in the system, you must compile the program with \u003ccode\u003e-threaded\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "withSynth",
          "package": "hsc3-process",
          "signature": "ServerOptions-\u003e RTOptions-\u003e OutputHandler-\u003e (NetworkTransport -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Execute realtime instance of scsynth with Transport The spawned scsynth is sent quit message after the supplied action returns GHC Note in order to call withSynth without blocking all the other threads in the system you must compile the program with threaded",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "withSynth",
          "normalized": "ServerOptions-\u003eRTOptions-\u003eOutputHandler-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a",
          "package": "hsc3-process",
          "partial": "Synth",
          "signature": "ServerOptions-\u003eRTOptions-\u003eOutputHandler-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:withSynth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a transport to a running \u003ccode\u003escsynth\u003c/code\u003e process determined by \u003ccode\u003e\u003ca\u003enetworkPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Server.Process",
          "name": "withTransport",
          "package": "hsc3-process",
          "signature": "ServerOptions-\u003e RTOptions-\u003e Maybe String-\u003e (NetworkTransport -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Open transport to running scsynth process determined by networkPort",
          "hierarchy": "Sound SC3 Server Process",
          "module": "Sound.SC3.Server.Process",
          "name": "withTransport",
          "normalized": "ServerOptions-\u003eRTOptions-\u003eMaybe String-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a",
          "package": "hsc3-process",
          "partial": "Transport",
          "signature": "ServerOptions-\u003eRTOptions-\u003eMaybe String-\u003e(NetworkTransport-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-process/docs/Sound-SC3-Server-Process.html#v:withTransport"
      }
    }
  ]
]