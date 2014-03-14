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
        "word": "loadavg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThere are two basic ways you can get load average on a modern Linux system.\n First is \u003ccode\u003egetloadavg (3)\u003c/code\u003e system call. The second is \u003ccode\u003e/proc/loadavg\u003c/code\u003e file.\n This module provides means of getting the information from both sources.\n \u003ccode\u003e/proc/loadavg\u003c/code\u003e provides some additional information but we ignore that.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "LoadAvg",
          "package": "loadavg",
          "source": "src/System-Posix-LoadAvg.html",
          "type": "module"
        },
        "index": {
          "description": "There are two basic ways you can get load average on modern Linux system First is getloadavg system call The second is proc loadavg file This module provides means of getting the information from both sources proc loadavg provides some additional information but we ignore that",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "LoadAvg",
          "package": "loadavg",
          "partial": "Load Avg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.LoadAvg",
          "name": "LoadAvg",
          "package": "loadavg",
          "source": "src/System-Posix-LoadAvg.html#LoadAvg",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "LoadAvg",
          "package": "loadavg",
          "partial": "Load Avg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#t:LoadAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.LoadAvg",
          "name": "LoadAvg",
          "package": "loadavg",
          "signature": "LoadAvg",
          "source": "src/System-Posix-LoadAvg.html#LoadAvg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "LoadAvg",
          "package": "loadavg",
          "partial": "Load Avg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:LoadAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscards error checking from getLoadAvgSafe. Will raise IO exception on error.\n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "getLoadAvg",
          "package": "loadavg",
          "signature": "IO LoadAvg",
          "source": "src/System-Posix-LoadAvg.html#getLoadAvg",
          "type": "function"
        },
        "index": {
          "description": "Discards error checking from getLoadAvgSafe Will raise IO exception on error",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "getLoadAvg",
          "package": "loadavg",
          "partial": "Load Avg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:getLoadAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to read \u003ccode\u003e/proc/loadavg\u003c/code\u003e and parse it's output with \u003ccode\u003e\u003ca\u003eparseLoadAvg\u003c/a\u003e\u003c/code\u003e. Either may fail with IO exception. \n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "getLoadAvgProc",
          "package": "loadavg",
          "signature": "IO LoadAvg",
          "source": "src/System-Posix-LoadAvg.html#getLoadAvgProc",
          "type": "function"
        },
        "index": {
          "description": "Tries to read proc loadavg and parse it output with parseLoadAvg Either may fail with IO exception",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "getLoadAvgProc",
          "package": "loadavg",
          "partial": "Load Avg Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:getLoadAvgProc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls \u003ccode\u003egetloadavg (3)\u003c/code\u003e to get system load average. \n   Provides error checking, and the result may be Nothing in case of error.\n   If there is not enough data the samples will be copied from more recent samples.\n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "getLoadAvgSafe",
          "package": "loadavg",
          "signature": "IO (Maybe LoadAvg)",
          "source": "src/System-Posix-LoadAvg.html#getLoadAvgSafe",
          "type": "function"
        },
        "index": {
          "description": "Calls getloadavg to get system load average Provides error checking and the result may be Nothing in case of error If there is not enough data the samples will be copied from more recent samples",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "getLoadAvgSafe",
          "package": "loadavg",
          "partial": "Load Avg Safe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:getLoadAvgSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to parse the output of \u003ccode\u003e/proc/loadavg\u003c/code\u003e. If anything goes wrong an arbitrary exception will be raised.\n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "parseLoadAvg",
          "package": "loadavg",
          "signature": "String -\u003e LoadAvg",
          "source": "src/System-Posix-LoadAvg.html#parseLoadAvg",
          "type": "function"
        },
        "index": {
          "description": "Tries to parse the output of proc loadavg If anything goes wrong an arbitrary exception will be raised",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "parseLoadAvg",
          "normalized": "String-\u003eLoadAvg",
          "package": "loadavg",
          "partial": "Load Avg",
          "signature": "String-\u003eLoadAvg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:parseLoadAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample for last 1 minute\n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "sample_1",
          "package": "loadavg",
          "signature": "Double",
          "source": "src/System-Posix-LoadAvg.html#LoadAvg",
          "type": "function"
        },
        "index": {
          "description": "sample for last minute",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "sample_1",
          "package": "loadavg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:sample_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample for last 15 minutes\n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "sample_15",
          "package": "loadavg",
          "signature": "Double",
          "source": "src/System-Posix-LoadAvg.html#LoadAvg",
          "type": "function"
        },
        "index": {
          "description": "sample for last minutes",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "sample_15",
          "package": "loadavg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:sample_15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esample for last 5 minutes\n\u003c/p\u003e",
          "module": "System.Posix.LoadAvg",
          "name": "sample_5",
          "package": "loadavg",
          "signature": "Double",
          "source": "src/System-Posix-LoadAvg.html#LoadAvg",
          "type": "function"
        },
        "index": {
          "description": "sample for last minutes",
          "hierarchy": "System Posix LoadAvg",
          "module": "System.Posix.LoadAvg",
          "name": "sample_5",
          "package": "loadavg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:sample_5"
      }
    }
  ]
]