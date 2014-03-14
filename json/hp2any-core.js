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
        "word": "hp2any-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to send and receive profiling\ninformation over the network.  Currently the messages can only encode\n\u003ccode\u003e\u003ca\u003eSinkInput\u003c/a\u003e\u003c/code\u003e data. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Heap.Network",
          "name": "Network",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Network.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to send and receive profiling information over the network Currently the messages can only encode SinkInput data",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "Network",
          "package": "hp2any-core",
          "partial": "Network",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Network",
          "name": "Message",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Network.html#Message",
          "type": "data"
        },
        "index": {
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "Message",
          "package": "hp2any-core",
          "partial": "Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Network",
          "name": "Stream",
          "package": "hp2any-core",
          "signature": "Stream SinkInput",
          "source": "src/Profiling-Heap-Network.html#Message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "Stream",
          "package": "hp2any-core",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract callback data from message, if applicable. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Network",
          "name": "getStream",
          "package": "hp2any-core",
          "signature": "Message -\u003e Maybe SinkInput",
          "source": "src/Profiling-Heap-Network.html#getStream",
          "type": "function"
        },
        "index": {
          "description": "Extract callback data from message if applicable",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "getStream",
          "normalized": "Message-\u003eMaybe SinkInput",
          "package": "hp2any-core",
          "partial": "Stream",
          "signature": "Message-\u003eMaybe SinkInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:getStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from callback data to message. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Network",
          "name": "putStream",
          "package": "hp2any-core",
          "signature": "SinkInput -\u003e Message",
          "source": "src/Profiling-Heap-Network.html#putStream",
          "type": "function"
        },
        "index": {
          "description": "Convert from callback data to message",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "putStream",
          "normalized": "SinkInput-\u003eMessage",
          "package": "hp2any-core",
          "partial": "Stream",
          "signature": "SinkInput-\u003eMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:putStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a message. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Network",
          "name": "readMsg",
          "package": "hp2any-core",
          "signature": "String -\u003e Maybe Message",
          "source": "src/Profiling-Heap-Network.html#readMsg",
          "type": "function"
        },
        "index": {
          "description": "Parse message",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "readMsg",
          "normalized": "String-\u003eMaybe Message",
          "package": "hp2any-core",
          "partial": "Msg",
          "signature": "String-\u003eMaybe Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:readMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a structured message over the network.  Can also be used\nfor parsing from a file. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Network",
          "name": "recvMsg",
          "package": "hp2any-core",
          "signature": "Handle -\u003e IO (Maybe Message)",
          "source": "src/Profiling-Heap-Network.html#recvMsg",
          "type": "function"
        },
        "index": {
          "description": "Receive structured message over the network Can also be used for parsing from file",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "recvMsg",
          "normalized": "Handle-\u003eIO(Maybe Message)",
          "package": "hp2any-core",
          "partial": "Msg",
          "signature": "Handle-\u003eIO(Maybe Message)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:recvMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a structured message over the network.  Can also be used for\nlogging into a file. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Network",
          "name": "sendMsg",
          "package": "hp2any-core",
          "signature": "Handle -\u003e Message -\u003e IO ()",
          "source": "src/Profiling-Heap-Network.html#sendMsg",
          "type": "function"
        },
        "index": {
          "description": "Send structured message over the network Can also be used for logging into file",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "sendMsg",
          "normalized": "Handle-\u003eMessage-\u003eIO()",
          "package": "hp2any-core",
          "partial": "Msg",
          "signature": "Handle-\u003eMessage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:sendMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialise a message. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Network",
          "name": "writeMsg",
          "package": "hp2any-core",
          "signature": "Message -\u003e String",
          "source": "src/Profiling-Heap-Network.html#writeMsg",
          "type": "function"
        },
        "index": {
          "description": "Serialise message",
          "hierarchy": "Profiling Heap Network",
          "module": "Profiling.Heap.Network",
          "name": "writeMsg",
          "normalized": "Message-\u003eString",
          "package": "hp2any-core",
          "partial": "Msg",
          "signature": "Message-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Network.html#v:writeMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a utility module to aid the construction of\n\u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e structures with profiling parameters. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Heap.Process",
          "name": "Process",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Process.html",
          "type": "module"
        },
        "index": {
          "description": "This is utility module to aid the construction of CreateProcess structures with profiling parameters",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "Process",
          "package": "hp2any-core",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible types of breakdowns. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "Breakdown",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "data"
        },
        "index": {
          "description": "The possible types of breakdowns",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "Breakdown",
          "package": "hp2any-core",
          "partial": "Breakdown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#t:Breakdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible types of parameters. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "ProfParam",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "data"
        },
        "index": {
          "description": "The possible types of parameters",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "ProfParam",
          "package": "hp2any-core",
          "partial": "Prof Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#t:ProfParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible filters. Note that these are imposed by the runtime,\nso we cannot override them on the application side. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "Restriction",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "data"
        },
        "index": {
          "description": "The possible filters Note that these are imposed by the runtime so we cannot override them on the application side",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "Restriction",
          "package": "hp2any-core",
          "partial": "Restriction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#t:Restriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by biography (phase of an object's lifetime).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "BBiography",
          "package": "hp2any-core",
          "signature": "BBiography",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by biography phase of an object lifetime",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "BBiography",
          "package": "hp2any-core",
          "partial": "BBiography",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:BBiography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by cost centre stack (origin of the data).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "BCostCentreStack",
          "package": "hp2any-core",
          "signature": "BCostCentreStack",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by cost centre stack origin of the data",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "BCostCentreStack",
          "package": "hp2any-core",
          "partial": "BCost Centre Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:BCostCentreStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by closure description (constructor name or some\n unique identifier).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "BDescription",
          "package": "hp2any-core",
          "signature": "BDescription",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by closure description constructor name or some unique identifier",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "BDescription",
          "package": "hp2any-core",
          "partial": "BDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:BDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by module (code responsible for the data).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "BModule",
          "package": "hp2any-core",
          "signature": "BModule",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by module code responsible for the data",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "BModule",
          "package": "hp2any-core",
          "partial": "BModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:BModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by retainer set (effectively the entities that hold\n a direct reference to the data in question).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "BRetainer",
          "package": "hp2any-core",
          "signature": "BRetainer",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by retainer set effectively the entities that hold direct reference to the data in question",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "BRetainer",
          "package": "hp2any-core",
          "partial": "BRetainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:BRetainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by type (or an approximation if it is not known\n exactly).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "BType",
          "package": "hp2any-core",
          "signature": "BType",
          "source": "src/Profiling-Heap-Process.html#Breakdown",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by type or an approximation if it is not known exactly",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "BType",
          "package": "hp2any-core",
          "partial": "BType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:BType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of breakdown.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "PPBreakdown",
          "package": "hp2any-core",
          "signature": "PPBreakdown Breakdown",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "function"
        },
        "index": {
          "description": "The type of breakdown",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "PPBreakdown",
          "package": "hp2any-core",
          "partial": "PPBreakdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:PPBreakdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to include memory taken up by threads.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "PPIncludeThreads",
          "package": "hp2any-core",
          "signature": "PPIncludeThreads",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "function"
        },
        "index": {
          "description": "Whether to include memory taken up by threads",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "PPIncludeThreads",
          "package": "hp2any-core",
          "partial": "PPInclude Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:PPIncludeThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling interval in seconds.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "PPInterval",
          "package": "hp2any-core",
          "signature": "PPInterval Float",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "function"
        },
        "index": {
          "description": "Sampling interval in seconds",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "PPInterval",
          "package": "hp2any-core",
          "partial": "PPInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:PPInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum length of cost centre stack names.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "PPNameLength",
          "package": "hp2any-core",
          "signature": "PPNameLength Int",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "function"
        },
        "index": {
          "description": "The maximum length of cost centre stack names",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "PPNameLength",
          "package": "hp2any-core",
          "partial": "PPName Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:PPNameLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn additional filter on the runtime side.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "PPRestriction",
          "package": "hp2any-core",
          "signature": "PPRestriction Restriction [String]",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "function"
        },
        "index": {
          "description": "An additional filter on the runtime side",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "PPRestriction",
          "normalized": "PPRestriction Restriction[String]",
          "package": "hp2any-core",
          "partial": "PPRestriction",
          "signature": "PPRestriction Restriction[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:PPRestriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetainer set size limit.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "PPRetainerLimit",
          "package": "hp2any-core",
          "signature": "PPRetainerLimit Int",
          "source": "src/Profiling-Heap-Process.html#ProfParam",
          "type": "function"
        },
        "index": {
          "description": "Retainer set size limit",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "PPRetainerLimit",
          "package": "hp2any-core",
          "partial": "PPRetainer Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:PPRetainerLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the specified biographies,\n which must come from the set {lag, drag, void, use}.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RBiography",
          "package": "hp2any-core",
          "signature": "RBiography",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the specified biographies which must come from the set lag drag void use",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RBiography",
          "package": "hp2any-core",
          "partial": "RBiography",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RBiography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the given names somewhere in\n the cost centre stack.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RCCStackAny",
          "package": "hp2any-core",
          "signature": "RCCStackAny",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the given names somewhere in the cost centre stack",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RCCStackAny",
          "package": "hp2any-core",
          "partial": "RCCStack Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RCCStackAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the given names on the top of\n the cost centre stack.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RCCStackTop",
          "package": "hp2any-core",
          "signature": "RCCStackTop",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the given names on the top of the cost centre stack",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RCCStackTop",
          "package": "hp2any-core",
          "partial": "RCCStack Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RCCStackTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with a description that matches one of the\n given names.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RDescription",
          "package": "hp2any-core",
          "signature": "RDescription",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with description that matches one of the given names",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RDescription",
          "package": "hp2any-core",
          "partial": "RDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures produced by one of the given modules.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RModule",
          "package": "hp2any-core",
          "signature": "RModule",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures produced by one of the given modules",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RModule",
          "package": "hp2any-core",
          "partial": "RModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with retainer sets that contain at least\n one cost centre stack with a given name on the top.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RRetainer",
          "package": "hp2any-core",
          "signature": "RRetainer",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with retainer sets that contain at least one cost centre stack with given name on the top",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RRetainer",
          "package": "hp2any-core",
          "partial": "RRetainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RRetainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the given types.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "RType",
          "package": "hp2any-core",
          "signature": "RType",
          "source": "src/Profiling-Heap-Process.html#Restriction",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the given types",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "RType",
          "package": "hp2any-core",
          "partial": "RType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:RType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper function to create a \u003ccode\u003e\u003ca\u003eCreateProcess\u003c/a\u003e\u003c/code\u003e structure. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Process",
          "name": "processToProfile",
          "package": "hp2any-core",
          "signature": "FilePath-\u003e Maybe FilePath-\u003e [String]-\u003e [ProfParam]-\u003e CreateProcess",
          "type": "function"
        },
        "index": {
          "description": "helper function to create CreateProcess structure",
          "hierarchy": "Profiling Heap Process",
          "module": "Profiling.Heap.Process",
          "name": "processToProfile",
          "normalized": "FilePath-\u003eMaybe FilePath-\u003e[String]-\u003e[ProfParam]-\u003eCreateProcess",
          "package": "hp2any-core",
          "partial": "To Profile",
          "signature": "FilePath-\u003eMaybe FilePath-\u003e[String]-\u003e[ProfParam]-\u003eCreateProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Process.html#v:processToProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the functions that access heap profiles both\nduring and after execution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Heap.Read",
          "name": "Read",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the functions that access heap profiles both during and after execution",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "Read",
          "package": "hp2any-core",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf we want to observe the progress of loading, we can perform the\noperation asynchronously. We need a query operation to check the\nprogress and extract the final result after the whole profile was\nloaded. A \u003ccode\u003e\u003ca\u003eLoadProgress\u003c/a\u003e\u003c/code\u003e computation tells us precisely that,\nrepresenting progress with a number between 0 and 1. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "LoadProgress",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html#LoadProgress",
          "type": "type"
        },
        "index": {
          "description": "If we want to observe the progress of loading we can perform the operation asynchronously We need query operation to check the progress and extract the final result after the whole profile was loaded LoadProgress computation tells us precisely that representing progress with number between and",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "LoadProgress",
          "package": "hp2any-core",
          "partial": "Load Progress",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#t:LoadProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince we want to possibly look at heap profiles during the run, we\nmight need an action that returns the data recorded so far. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "ProfileReader",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html#ProfileReader",
          "type": "type"
        },
        "index": {
          "description": "Since we want to possibly look at heap profiles during the run we might need an action that returns the data recorded so far",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "ProfileReader",
          "package": "hp2any-core",
          "partial": "Profile Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#t:ProfileReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input of the profiling functions.  When we start profiling, we\nneed a process descriptor for the local case or a server address (of\nthe form \"address:port\") in the remote case.  The creation of the\nprocess descriptor is aided by the \u003ca\u003eProfiling.Heap.Process\u003c/a\u003e module. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingCommand",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html#ProfilingCommand",
          "type": "type"
        },
        "index": {
          "description": "The input of the profiling functions When we start profiling we need process descriptor for the local case or server address of the form address port in the remote case The creation of the process descriptor is aided by the Profiling.Heap.Process module",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingCommand",
          "package": "hp2any-core",
          "partial": "Profiling Command",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#t:ProfilingCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe return value of the profiling functions.  In the local case we\nare given the handle of the process monitored.  Asking for a remote\nprofile gives us a handle we can use to communicate with the proxy via\nthe common protocol defined in the \u003ca\u003eProfiling.Heap.Network\u003c/a\u003e module. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingInfo",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html#ProfilingInfo",
          "type": "type"
        },
        "index": {
          "description": "The return value of the profiling functions In the local case we are given the handle of the process monitored Asking for remote profile gives us handle we can use to communicate with the proxy via the common protocol defined in the Profiling.Heap.Network module",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingInfo",
          "package": "hp2any-core",
          "partial": "Profiling Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#t:ProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA common stopping action that can be used to cancel asynchronous\nloading as well as killing the reading thread during live profiling\nwithout touching the slave process. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingStop",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html#ProfilingStop",
          "type": "type"
        },
        "index": {
          "description": "common stopping action that can be used to cancel asynchronous loading as well as killing the reading thread during live profiling without touching the slave process",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingStop",
          "package": "hp2any-core",
          "partial": "Profiling Stop",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#t:ProfilingStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are two basic ways of profiling: local and remote.  Local\nprofiling means that we directly manage the process we are monitoring.\nIn the case of remote profiling we connect to a server that streams\nprofiling information and acts as a proxy between the process to\nprofile and our program.  The type of profiling also determines the\nkind of information available to us after initiating the process, so\nwe need generic labels to distinguish the alternatives. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingType",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Read.html#ProfilingType",
          "type": "data"
        },
        "index": {
          "description": "There are two basic ways of profiling local and remote Local profiling means that we directly manage the process we are monitoring In the case of remote profiling we connect to server that streams profiling information and acts as proxy between the process to profile and our program The type of profiling also determines the kind of information available to us after initiating the process so we need generic labels to distinguish the alternatives",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "ProfilingType",
          "package": "hp2any-core",
          "partial": "Profiling Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#t:ProfilingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Read",
          "name": "Local",
          "package": "hp2any-core",
          "signature": "Local",
          "source": "src/Profiling-Heap-Read.html#ProfilingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "Local",
          "package": "hp2any-core",
          "partial": "Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Read",
          "name": "Remote",
          "package": "hp2any-core",
          "signature": "Remote",
          "source": "src/Profiling-Heap-Read.html#ProfilingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "Remote",
          "package": "hp2any-core",
          "partial": "Remote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:Remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Read",
          "name": "local",
          "package": "hp2any-core",
          "signature": "loc",
          "source": "src/Profiling-Heap-Read.html#ProfilingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "local",
          "package": "hp2any-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to perform real-time profiling, we need to fire up the\nprogram to analyse and create an accumulator in the background that we\ncan look at whenever we want using the reading action returned by the\nfunction.  We are also given a stopping action and the handle to the\nslave process or network connection depending on the type of\nprofiling.  If there is a problem, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "profile",
          "package": "hp2any-core",
          "signature": "ProfilingCommand -\u003e IO (Maybe (ProfileReader, ProfilingStop, ProfilingInfo))",
          "source": "src/Profiling-Heap-Read.html#profile",
          "type": "function"
        },
        "index": {
          "description": "In order to perform real-time profiling we need to fire up the program to analyse and create an accumulator in the background that we can look at whenever we want using the reading action returned by the function We are also given stopping action and the handle to the slave process or network connection depending on the type of profiling If there is problem Nothing is returned",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "profile",
          "normalized": "ProfilingCommand-\u003eIO(Maybe(ProfileReader,ProfilingStop,ProfilingInfo))",
          "package": "hp2any-core",
          "signature": "ProfilingCommand-\u003eIO(Maybe(ProfileReader,ProfilingStop,ProfilingInfo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprofileCallback\u003c/a\u003e\u003c/code\u003e function initiates an observation without\nmaintaining any internal data other than the name mapping, passing\nprofile samples to the callback (provided in the second argument) as\nthey come.  It returns the handle of the new process or the remote\nconnection as well as the thread stopper action, assuming that a heap\nprofile could be found. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "profileCallback",
          "package": "hp2any-core",
          "signature": "ProfilingCommand -\u003e ProfileSink -\u003e IO (Maybe (ProfilingStop, ProfilingInfo))",
          "source": "src/Profiling-Heap-Read.html#profileCallback",
          "type": "function"
        },
        "index": {
          "description": "The profileCallback function initiates an observation without maintaining any internal data other than the name mapping passing profile samples to the callback provided in the second argument as they come It returns the handle of the new process or the remote connection as well as the thread stopper action assuming that heap profile could be found",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "profileCallback",
          "normalized": "ProfilingCommand-\u003eProfileSink-\u003eIO(Maybe(ProfilingStop,ProfilingInfo))",
          "package": "hp2any-core",
          "partial": "Callback",
          "signature": "ProfilingCommand-\u003eProfileSink-\u003eIO(Maybe(ProfilingStop,ProfilingInfo))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:profileCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplest case to handle is the traditional method of taking\nthe profiler output of an earlier run and turning it into an easy to\nquery structure. This is done by passing \u003ccode\u003e\u003ca\u003ereadProfile\u003c/a\u003e\u003c/code\u003e the log created\nby the heap profiler (a file with .hp extension). \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "readProfile",
          "package": "hp2any-core",
          "signature": "FilePath -\u003e IO (Maybe Profile)",
          "source": "src/Profiling-Heap-Read.html#readProfile",
          "type": "function"
        },
        "index": {
          "description": "The simplest case to handle is the traditional method of taking the profiler output of an earlier run and turning it into an easy to query structure This is done by passing readProfile the log created by the heap profiler file with hp extension",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "readProfile",
          "normalized": "FilePath-\u003eIO(Maybe Profile)",
          "package": "hp2any-core",
          "partial": "Profile",
          "signature": "FilePath-\u003eIO(Maybe Profile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:readProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a heap profile asynchronously. Since we might want to\ninterrupt the loading process if it proves to be too long, a stopper\naction is also returned along with the progress query action. If the\nstopper action is executed, the query function will return an empty\nprofile as a result. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Read",
          "name": "readProfileAsync",
          "package": "hp2any-core",
          "signature": "FilePath -\u003e IO (LoadProgress, ProfilingStop)",
          "source": "src/Profiling-Heap-Read.html#readProfileAsync",
          "type": "function"
        },
        "index": {
          "description": "Read heap profile asynchronously Since we might want to interrupt the loading process if it proves to be too long stopper action is also returned along with the progress query action If the stopper action is executed the query function will return an empty profile as result",
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "readProfileAsync",
          "normalized": "FilePath-\u003eIO(LoadProgress,ProfilingStop)",
          "package": "hp2any-core",
          "partial": "Profile Async",
          "signature": "FilePath-\u003eIO(LoadProgress,ProfilingStop)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:readProfileAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Read",
          "name": "remote",
          "package": "hp2any-core",
          "signature": "rem",
          "source": "src/Profiling-Heap-Read.html#ProfilingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap Read",
          "module": "Profiling.Heap.Read",
          "name": "remote",
          "package": "hp2any-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Read.html#v:remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a heap profile data structure optimised for\nquerying various statistics, but not suitable for continuous\nupdating. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Heap.Stats",
          "name": "Stats",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Stats.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines heap profile data structure optimised for querying various statistics but not suitable for continuous updating",
          "hierarchy": "Profiling Heap Stats",
          "module": "Profiling.Heap.Stats",
          "name": "Stats",
          "package": "hp2any-core",
          "partial": "Stats",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Stats.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure providing profile statistics at a low cost.  It\naccelerates interval extraction as well as determining maxima and\nintegrals over any subinterval: all of these operations take\nlogarithmic time to execute. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Stats",
          "name": "ProfileWithStats",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Stats.html#ProfileWithStats",
          "type": "data"
        },
        "index": {
          "description": "data structure providing profile statistics at low cost It accelerates interval extraction as well as determining maxima and integrals over any subinterval all of these operations take logarithmic time to execute",
          "hierarchy": "Profiling Heap Stats",
          "module": "Profiling.Heap.Stats",
          "name": "ProfileWithStats",
          "package": "hp2any-core",
          "partial": "Profile With Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Stats.html#t:ProfileWithStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate extra data to speed up various queries. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Stats",
          "name": "buildStats",
          "package": "hp2any-core",
          "signature": "Profile -\u003e ProfileWithStats",
          "source": "src/Profiling-Heap-Stats.html#buildStats",
          "type": "function"
        },
        "index": {
          "description": "Create extra data to speed up various queries",
          "hierarchy": "Profiling Heap Stats",
          "module": "Profiling.Heap.Stats",
          "name": "buildStats",
          "normalized": "Profile-\u003eProfileWithStats",
          "package": "hp2any-core",
          "partial": "Stats",
          "signature": "Profile-\u003eProfileWithStats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Stats.html#v:buildStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the commonly used data structures and basic types\nof the heap profiling framework.\n\u003c/p\u003e\u003cp\u003eProfiling information is a sequence of time-stamped samples, therefore\nthe ideal data structure should have an efficient snoc operation.\nAlso, it should make it easy to extract an interval given by a start\nand an end time.  On top of the raw data, we also want to access some\nstatistics as efficiently as possible.\n\u003c/p\u003e\u003cp\u003eWe can separate two phases: looking at the profile during execution\nand later.  In the first case we might not want statistics, just live\nmonitoring, while we probably want to analyse archived profiles more\ndeeply.  Therefore, it makes sense to define two separate data\nstructures for these two purposes, and give them a common interface\nfor extracting the necessary data.  The simple case is covered by the\n\u003ccode\u003e\u003ca\u003eProfile\u003c/a\u003e\u003c/code\u003e type defined here, while a more complex structure providing\nfast off-line queries is defined in the \u003ca\u003eProfiling.Heap.Stats\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Profiling.Heap.Types",
          "name": "Types",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the commonly used data structures and basic types of the heap profiling framework Profiling information is sequence of time-stamped samples therefore the ideal data structure should have an efficient snoc operation Also it should make it easy to extract an interval given by start and an end time On top of the raw data we also want to access some statistics as efficiently as possible We can separate two phases looking at the profile during execution and later In the first case we might not want statistics just live monitoring while we probably want to analyse archived profiles more deeply Therefore it makes sense to define two separate data structures for these two purposes and give them common interface for extracting the necessary data The simple case is covered by the Profile type defined here while more complex structure providing fast off-line queries is defined in the Profiling.Heap.Stats module",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "Types",
          "package": "hp2any-core",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCosts are measured in bytes. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "Cost",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#Cost",
          "type": "type"
        },
        "index": {
          "description": "Costs are measured in bytes",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "Cost",
          "package": "hp2any-core",
          "partial": "Cost",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:Cost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost centres are identified by integers for simplicity (so we can\nuse IntMap). \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "CostCentreId",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#CostCentreId",
          "type": "type"
        },
        "index": {
          "description": "Cost centres are identified by integers for simplicity so we can use IntMap",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "CostCentreId",
          "package": "hp2any-core",
          "partial": "Cost Centre Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:CostCentreId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt this level cost centre names have no internal structure that we\nwould care about.  While in some cases they reflect the call\nhierarchy, we are not splitting them at this point, because all kinds\nof names can appear here. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "CostCentreName",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#CostCentreName",
          "type": "type"
        },
        "index": {
          "description": "At this level cost centre names have no internal structure that we would care about While in some cases they reflect the call hierarchy we are not splitting them at this point because all kinds of names can appear here",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "CostCentreName",
          "package": "hp2any-core",
          "partial": "Cost Centre Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:CostCentreName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA raw heap profile that's easy to grow further, therefore it is\nused during loading. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "Profile",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "data"
        },
        "index": {
          "description": "raw heap profile that easy to grow further therefore it is used during loading",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "Profile",
          "package": "hp2any-core",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eProfileQuery\u003c/a\u003e\u003c/code\u003e class contains all kinds of reading operations.\nThe minimal definition consists of \u003ccode\u003e\u003ca\u003ejob\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eccNames\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003esamples\u003c/a\u003e\u003c/code\u003e.  All the statistics have default implementations, which are\nmostly okay for a single query, but they are generally highly\ninefficient. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "ProfileQuery",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#ProfileQuery",
          "type": "class"
        },
        "index": {
          "description": "The ProfileQuery class contains all kinds of reading operations The minimal definition consists of job date ccNames and samples All the statistics have default implementations which are mostly okay for single query but they are generally highly inefficient",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "ProfileQuery",
          "package": "hp2any-core",
          "partial": "Profile Query",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:ProfileQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sampling point is simply a list of cost centres with the\nassociated cost.  There is no need for a fancy data structure here,\nsince we normally process every value in this collection, and it's\nusually not big either, only holding a few dozen entries at most. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "ProfileSample",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#ProfileSample",
          "type": "type"
        },
        "index": {
          "description": "sampling point is simply list of cost centres with the associated cost There is no need for fancy data structure here since we normally process every value in this collection and it usually not big either only holding few dozen entries at most",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "ProfileSample",
          "package": "hp2any-core",
          "partial": "Profile Sample",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:ProfileSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe might not want to hold on to all the past output, just do some\nstream processing.  We can achieve this using a callback function\nthat's invoked whenever a new profile sample is available.  The type\nof this function can be \u003ccode\u003e\u003ca\u003eProfileSink\u003c/a\u003e\u003c/code\u003e.  Besides the actual costs, it\nis also necessary to send over the names that belong to the short cost\ncentre identifiers as well as the fact that no more data will come.\nThe \u003ccode\u003e\u003ca\u003eSinkInput\u003c/a\u003e\u003c/code\u003e type expresses these possibilities. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "ProfileSink",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#ProfileSink",
          "type": "type"
        },
        "index": {
          "description": "We might not want to hold on to all the past output just do some stream processing We can achieve this using callback function that invoked whenever new profile sample is available The type of this function can be ProfileSink Besides the actual costs it is also necessary to send over the names that belong to the short cost centre identifiers as well as the fact that no more data will come The SinkInput type expresses these possibilities",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "ProfileSink",
          "package": "hp2any-core",
          "partial": "Profile Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:ProfileSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Types",
          "name": "SinkInput",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#SinkInput",
          "type": "data"
        },
        "index": {
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "SinkInput",
          "package": "hp2any-core",
          "partial": "Sink Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:SinkInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime is measured in seconds. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "Time",
          "package": "hp2any-core",
          "source": "src/Profiling-Heap-Types.html#Time",
          "type": "type"
        },
        "index": {
          "description": "Time is measured in seconds",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "Time",
          "package": "hp2any-core",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Profiling.Heap.Types",
          "name": "Profile",
          "package": "hp2any-core",
          "signature": "Profile",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "Profile",
          "package": "hp2any-core",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name behind a cost centre id used in the samples.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "SinkId",
          "package": "hp2any-core",
          "signature": "SinkId !CostCentreId !CostCentreName",
          "source": "src/Profiling-Heap-Types.html#SinkInput",
          "type": "function"
        },
        "index": {
          "description": "The name behind cost centre id used in the samples",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "SinkId",
          "package": "hp2any-core",
          "partial": "Sink Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:SinkId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA snapshot of costs at a given time.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "SinkSample",
          "package": "hp2any-core",
          "signature": "SinkSample !Time !ProfileSample",
          "source": "src/Profiling-Heap-Types.html#SinkInput",
          "type": "function"
        },
        "index": {
          "description": "snapshot of costs at given time",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "SinkSample",
          "package": "hp2any-core",
          "partial": "Sink Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:SinkSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndication that no more data will come.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "SinkStop",
          "package": "hp2any-core",
          "signature": "SinkStop",
          "source": "src/Profiling-Heap-Types.html#SinkInput",
          "type": "function"
        },
        "index": {
          "description": "Indication that no more data will come",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "SinkStop",
          "package": "hp2any-core",
          "partial": "Sink Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:SinkStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind cost centre name by id.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "ccName",
          "package": "hp2any-core",
          "signature": "p -\u003e Int -\u003e CostCentreName",
          "source": "src/Profiling-Heap-Types.html#ccName",
          "type": "method"
        },
        "index": {
          "description": "Find cost centre name by id",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "ccName",
          "normalized": "a-\u003eInt-\u003eCostCentreName",
          "package": "hp2any-core",
          "partial": "Name",
          "signature": "p-\u003eInt-\u003eCostCentreName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:ccName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCost centre id to name mapping.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "ccNames",
          "package": "hp2any-core",
          "signature": "p -\u003e IntMap CostCentreName",
          "source": "src/Profiling-Heap-Types.html#ccNames",
          "type": "method"
        },
        "index": {
          "description": "Cost centre id to name mapping",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "ccNames",
          "normalized": "a-\u003eIntMap CostCentreName",
          "package": "hp2any-core",
          "partial": "Names",
          "signature": "p-\u003eIntMap CostCentreName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:ccNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob start time.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "date",
          "package": "hp2any-core",
          "signature": "p -\u003e String",
          "source": "src/Profiling-Heap-Types.html#date",
          "type": "method"
        },
        "index": {
          "description": "Job start time",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "date",
          "normalized": "a-\u003eString",
          "package": "hp2any-core",
          "signature": "p-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn initial \u003ccode\u003e\u003ca\u003eProfile\u003c/a\u003e\u003c/code\u003e structure that can be used in\naccumulations. \n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "emptyProfile",
          "package": "hp2any-core",
          "signature": "Profile",
          "source": "src/Profiling-Heap-Types.html#emptyProfile",
          "type": "function"
        },
        "index": {
          "description": "An initial Profile structure that can be used in accumulations",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "emptyProfile",
          "package": "hp2any-core",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:emptyProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe total cost of each cost centre. Not a time integral;\n samples are simply summed.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "integral",
          "package": "hp2any-core",
          "signature": "p -\u003e ProfileSample",
          "source": "src/Profiling-Heap-Types.html#integral",
          "type": "method"
        },
        "index": {
          "description": "The total cost of each cost centre Not time integral samples are simply summed",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "integral",
          "normalized": "a-\u003eProfileSample",
          "package": "hp2any-core",
          "signature": "p-\u003eProfileSample",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe total cost of each cost centre in the interval.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "integralIvl",
          "package": "hp2any-core",
          "signature": "p -\u003e Time -\u003e Time -\u003e ProfileSample",
          "source": "src/Profiling-Heap-Types.html#integralIvl",
          "type": "method"
        },
        "index": {
          "description": "The total cost of each cost centre in the interval",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "integralIvl",
          "normalized": "a-\u003eTime-\u003eTime-\u003eProfileSample",
          "package": "hp2any-core",
          "partial": "Ivl",
          "signature": "p-\u003eTime-\u003eTime-\u003eProfileSample",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:integralIvl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob information (command line).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "job",
          "package": "hp2any-core",
          "signature": "p -\u003e String",
          "source": "src/Profiling-Heap-Types.html#job",
          "type": "method"
        },
        "index": {
          "description": "Job information command line",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "job",
          "normalized": "a-\u003eString",
          "package": "hp2any-core",
          "signature": "p-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:job"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe highest individual cost at any time.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "maxCost",
          "package": "hp2any-core",
          "signature": "p -\u003e Cost",
          "source": "src/Profiling-Heap-Types.html#maxCost",
          "type": "method"
        },
        "index": {
          "description": "The highest individual cost at any time",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "maxCost",
          "normalized": "a-\u003eCost",
          "package": "hp2any-core",
          "partial": "Cost",
          "signature": "p-\u003eCost",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:maxCost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe highest individual cost in the interval.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "maxCostIvl",
          "package": "hp2any-core",
          "signature": "p -\u003e Time -\u003e Time -\u003e Cost",
          "source": "src/Profiling-Heap-Types.html#maxCostIvl",
          "type": "method"
        },
        "index": {
          "description": "The highest individual cost in the interval",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "maxCostIvl",
          "normalized": "a-\u003eTime-\u003eTime-\u003eCost",
          "package": "hp2any-core",
          "partial": "Cost Ivl",
          "signature": "p-\u003eTime-\u003eTime-\u003eCost",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:maxCostIvl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe highest total cost at any time.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "maxCostTotal",
          "package": "hp2any-core",
          "signature": "p -\u003e Cost",
          "source": "src/Profiling-Heap-Types.html#maxCostTotal",
          "type": "method"
        },
        "index": {
          "description": "The highest total cost at any time",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "maxCostTotal",
          "normalized": "a-\u003eCost",
          "package": "hp2any-core",
          "partial": "Cost Total",
          "signature": "p-\u003eCost",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:maxCostTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe highest total cost in the interval.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "maxCostTotalIvl",
          "package": "hp2any-core",
          "signature": "p -\u003e Time -\u003e Time -\u003e Cost",
          "source": "src/Profiling-Heap-Types.html#maxCostTotalIvl",
          "type": "method"
        },
        "index": {
          "description": "The highest total cost in the interval",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "maxCostTotalIvl",
          "normalized": "a-\u003eTime-\u003eTime-\u003eCost",
          "package": "hp2any-core",
          "partial": "Cost Total Ivl",
          "signature": "p-\u003eTime-\u003eTime-\u003eCost",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:maxCostTotalIvl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time of the last sample.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "maxTime",
          "package": "hp2any-core",
          "signature": "p -\u003e Time",
          "source": "src/Profiling-Heap-Types.html#maxTime",
          "type": "method"
        },
        "index": {
          "description": "The time of the last sample",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "maxTime",
          "normalized": "a-\u003eTime",
          "package": "hp2any-core",
          "partial": "Time",
          "signature": "p-\u003eTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:maxTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time of the first sample.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "minTime",
          "package": "hp2any-core",
          "signature": "p -\u003e Time",
          "source": "src/Profiling-Heap-Types.html#minTime",
          "type": "method"
        },
        "index": {
          "description": "The time of the first sample",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "minTime",
          "normalized": "a-\u003eTime",
          "package": "hp2any-core",
          "partial": "Time",
          "signature": "p-\u003eTime",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:minTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob start time and date.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "prDate",
          "package": "hp2any-core",
          "signature": "String",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "Job start time and date",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "prDate",
          "package": "hp2any-core",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:prDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the job (command line).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "prJob",
          "package": "hp2any-core",
          "signature": "String",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "Information about the job command line",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "prJob",
          "package": "hp2any-core",
          "partial": "Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:prJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from cost centre ids to names.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "prNames",
          "package": "hp2any-core",
          "signature": "(IntMap CostCentreName)",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "map from cost centre ids to names",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "prNames",
          "package": "hp2any-core",
          "partial": "Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:prNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from cost centre names to ids.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "prNamesInv",
          "package": "hp2any-core",
          "signature": "(Trie CostCentreId)",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "map from cost centre names to ids",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "prNamesInv",
          "package": "hp2any-core",
          "partial": "Names Inv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:prNamesInv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSamples in decreasing time order (latest first).\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "prSamples",
          "package": "hp2any-core",
          "signature": "[(Time, ProfileSample)]",
          "source": "src/Profiling-Heap-Types.html#Profile",
          "type": "function"
        },
        "index": {
          "description": "Samples in decreasing time order latest first",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "prSamples",
          "normalized": "[(Time,ProfileSample)]",
          "package": "hp2any-core",
          "partial": "Samples",
          "signature": "[(Time,ProfileSample)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:prSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe measurements in a list ordered by time.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "samples",
          "package": "hp2any-core",
          "signature": "p -\u003e [(Time, ProfileSample)]",
          "source": "src/Profiling-Heap-Types.html#samples",
          "type": "method"
        },
        "index": {
          "description": "The measurements in list ordered by time",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "samples",
          "normalized": "a-\u003e[(Time,ProfileSample)]",
          "package": "hp2any-core",
          "signature": "p-\u003e[(Time,ProfileSample)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:samples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe samples between two given times.\n\u003c/p\u003e",
          "module": "Profiling.Heap.Types",
          "name": "samplesIvl",
          "package": "hp2any-core",
          "signature": "p -\u003e Time -\u003e Time -\u003e [(Time, ProfileSample)]",
          "source": "src/Profiling-Heap-Types.html#samplesIvl",
          "type": "method"
        },
        "index": {
          "description": "The samples between two given times",
          "hierarchy": "Profiling Heap Types",
          "module": "Profiling.Heap.Types",
          "name": "samplesIvl",
          "normalized": "a-\u003eTime-\u003eTime-\u003e[(Time,ProfileSample)]",
          "package": "hp2any-core",
          "partial": "Ivl",
          "signature": "p-\u003eTime-\u003eTime-\u003e[(Time,ProfileSample)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hp2any-core/docs/Profiling-Heap-Types.html#v:samplesIvl"
      }
    }
  ]
]