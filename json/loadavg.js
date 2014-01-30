[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThere are two basic ways you can get load average on a modern Linux system.\n First is \u003ccode\u003egetloadavg (3)\u003c/code\u003e system call. The second is \u003ccode\u003e/proc/loadavg\u003c/code\u003e file.\n This module provides means of getting the information from both sources.\n \u003ccode\u003e/proc/loadavg\u003c/code\u003e provides some additional information but we ignore that.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-LoadAvg.html",
        "fct-type": "module",
        "title": "LoadAvg"
      },
      "index": {
        "description": "There are two basic ways you can get load average on modern Linux system First is getloadavg system call The second is proc loadavg file This module provides means of getting the information from both sources proc loadavg provides some additional information but we ignore that",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "LoadAvg",
        "normalized": "",
        "package": "loadavg",
        "partial": "Load Avg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#t:LoadAvg",
      "description": {
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-LoadAvg.html#LoadAvg",
        "fct-type": "data",
        "title": "LoadAvg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "LoadAvg",
        "normalized": "",
        "package": "loadavg",
        "partial": "Load Avg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:LoadAvg",
      "description": {
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "LoadAvg",
        "fct-source": "src/System-Posix-LoadAvg.html#LoadAvg",
        "fct-type": "function",
        "title": "LoadAvg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "LoadAvg",
        "normalized": "",
        "package": "loadavg",
        "partial": "Load Avg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:getLoadAvg",
      "description": {
        "fct-descr": "\u003cp\u003eDiscards error checking from getLoadAvgSafe. Will raise IO exception on error.\n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "IO LoadAvg",
        "fct-source": "src/System-Posix-LoadAvg.html#getLoadAvg",
        "fct-type": "function",
        "title": "getLoadAvg"
      },
      "index": {
        "description": "Discards error checking from getLoadAvgSafe Will raise IO exception on error",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "getLoadAvg",
        "normalized": "",
        "package": "loadavg",
        "partial": "Load Avg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:getLoadAvgProc",
      "description": {
        "fct-descr": "\u003cp\u003eTries to read \u003ccode\u003e/proc/loadavg\u003c/code\u003e and parse it's output with \u003ccode\u003e\u003ca\u003eparseLoadAvg\u003c/a\u003e\u003c/code\u003e. Either may fail with IO exception. \n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "IO LoadAvg",
        "fct-source": "src/System-Posix-LoadAvg.html#getLoadAvgProc",
        "fct-type": "function",
        "title": "getLoadAvgProc"
      },
      "index": {
        "description": "Tries to read proc loadavg and parse it output with parseLoadAvg Either may fail with IO exception",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "getLoadAvgProc",
        "normalized": "",
        "package": "loadavg",
        "partial": "Load Avg Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:getLoadAvgSafe",
      "description": {
        "fct-descr": "\u003cp\u003eCalls \u003ccode\u003egetloadavg (3)\u003c/code\u003e to get system load average. \n   Provides error checking, and the result may be Nothing in case of error.\n   If there is not enough data the samples will be copied from more recent samples.\n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "IO (Maybe LoadAvg)",
        "fct-source": "src/System-Posix-LoadAvg.html#getLoadAvgSafe",
        "fct-type": "function",
        "title": "getLoadAvgSafe"
      },
      "index": {
        "description": "Calls getloadavg to get system load average Provides error checking and the result may be Nothing in case of error If there is not enough data the samples will be copied from more recent samples",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "getLoadAvgSafe",
        "normalized": "",
        "package": "loadavg",
        "partial": "Load Avg Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:parseLoadAvg",
      "description": {
        "fct-descr": "\u003cp\u003eTries to parse the output of \u003ccode\u003e/proc/loadavg\u003c/code\u003e. If anything goes wrong an arbitrary exception will be raised.\n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "String -\u003e LoadAvg",
        "fct-source": "src/System-Posix-LoadAvg.html#parseLoadAvg",
        "fct-type": "function",
        "title": "parseLoadAvg"
      },
      "index": {
        "description": "Tries to parse the output of proc loadavg If anything goes wrong an arbitrary exception will be raised",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "parseLoadAvg",
        "normalized": "String-\u003eLoadAvg",
        "package": "loadavg",
        "partial": "Load Avg",
        "signature": "String-\u003eLoadAvg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:sample_1",
      "description": {
        "fct-descr": "\u003cp\u003esample for last 1 minute\n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "!Double",
        "fct-source": "src/System-Posix-LoadAvg.html#LoadAvg",
        "fct-type": "function",
        "title": "sample_1"
      },
      "index": {
        "description": "sample for last minute",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "sample_1",
        "normalized": "",
        "package": "loadavg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:sample_15",
      "description": {
        "fct-descr": "\u003cp\u003esample for last 15 minutes\n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "!Double",
        "fct-source": "src/System-Posix-LoadAvg.html#LoadAvg",
        "fct-type": "function",
        "title": "sample_15"
      },
      "index": {
        "description": "sample for last minutes",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "sample_15",
        "normalized": "",
        "package": "loadavg",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loadavg/docs/System-Posix-LoadAvg.html#v:sample_5",
      "description": {
        "fct-descr": "\u003cp\u003esample for last 5 minutes\n\u003c/p\u003e",
        "fct-module": "System.Posix.LoadAvg",
        "fct-package": "loadavg",
        "fct-signature": "!Double",
        "fct-source": "src/System-Posix-LoadAvg.html#LoadAvg",
        "fct-type": "function",
        "title": "sample_5"
      },
      "index": {
        "description": "sample for last minutes",
        "hierarchy": "System Posix LoadAvg",
        "module": "System.Posix.LoadAvg",
        "name": "sample_5",
        "normalized": "",
        "package": "loadavg",
        "partial": "",
        "signature": ""
      }
    }
  }
]